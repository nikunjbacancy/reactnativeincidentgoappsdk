package com.policepriority.incidentcode.bluetooth;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.Service;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothGatt;
import android.bluetooth.BluetoothGattCallback;
import android.bluetooth.BluetoothGattCharacteristic;
import android.bluetooth.BluetoothGattDescriptor;
import android.bluetooth.BluetoothGattService;
import android.bluetooth.BluetoothManager;
import android.bluetooth.BluetoothProfile;
import android.content.Context;
import android.content.Intent;
import android.os.Binder;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;

import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import com.facebook.react.HeadlessJsTaskService;
import com.policepriority.incidentcode.bluetooth.executor.ProcessQueueExecutor;
import com.policepriority.incidentcode.bluetooth.executor.ReadWriteCharacteristic;
import com.policepriority.incidentcode.bluetooth.utils.LogUtils;
import com.policepriority.incidentcode.bluetooth.utils.Utils;
import com.policepriority.incidentcode.MainApplication;
import com.policepriority.incidentcode.R;

import java.util.HashMap;
import java.util.UUID;

public class BluetoothLeService extends Service {
    private static final String CHANNEL_ID = "IncidentCo";
    /**
     * The bluetooth gatt map.
     */
    public static HashMap<String, BluetoothGatt> bluetoothGattMap;

    // Hao 0630: battery service
    public static BluetoothGattService batteryService = null;
    /**
     * The bluetooth adapter.
     */
    private static BluetoothAdapter bluetoothAdapter = null;
    /**
     * The gatt service.
     */
    private static BluetoothGattService gattService = null;
    /**
     * Manage the BLE service.
     */
    private final IBinder binder = new LocalBinder();
    /**
     * The process queue executor.
     */
    public ProcessQueueExecutor processQueueExecutor = new ProcessQueueExecutor();
    /**
     * The m char verification.
     */
    public BluetoothGattCharacteristic mCharVerification = null;
    /**
     * The bluetooth manager.
     */
    private BluetoothManager bluetoothManager = null;
    /**
     * The device.
     */
    private BluetoothDevice device = null;
    /**
     * The battery value.
     */
    private String batteryValue = "0";
    /**
     * The rssi value.
     */
    private String rssiValue = "-107";
    private boolean isAlertReceived = false;
    private boolean isConnected = false;
    private Handler handler = new Handler();

    private Runnable runnableCode = new Runnable() {
        @Override
        public void run() {
            Context context = getApplicationContext();
            Intent mIntent = new Intent(context, BluetoothEventService.class);
            mIntent.putExtra("RECEIVE_ALERT", isAlertReceived);
            mIntent.putExtra("CONNECTION_STATUS", isConnected);
            mIntent.putExtra("BATTERY_LEVEL", batteryValue);
            context.startService(mIntent);
            HeadlessJsTaskService.acquireWakeLockNow(context);
            handler.postDelayed(this, 2000);
            isAlertReceived = false;
        }
    };
    /**
     * The m gatt callbacks.
     */
    // notified in the below callback.

    private BluetoothGattCallback mGattCallbacks = new BluetoothGattCallback() {
        @Override
        public void onConnectionStateChange(BluetoothGatt gatt, int status, int newState) {
            super.onConnectionStateChange(gatt, status, newState);

            BluetoothDevice device = gatt.getDevice();
            String deviceAddress = device.getAddress();
            String deviceName = device.getName();

            LogUtils.LOGI(MainApplication.TAG, "------------------------------------");
            LogUtils.LOGI(MainApplication.TAG, "onConnectionStateChange");
            LogUtils.LOGI(MainApplication.TAG, "Name1:" + deviceName);
            LogUtils.LOGI(MainApplication.TAG, "Address1:" + deviceAddress);
            LogUtils.LOGI(MainApplication.TAG, "ConnectionStateChange:" + newState);
            LogUtils.LOGI(MainApplication.TAG, "------------------------------------");


            switch (newState) {
                case BluetoothProfile.STATE_CONNECTED:
                    MainApplication.setPrefString(getApplicationContext(), MainApplication.BEACON_ADDRESS,  deviceAddress);
                    gatt.discoverServices();
                    break;
                case BluetoothProfile.STATE_DISCONNECTED:
                    isConnected = false;
                    sendMessageToActivity(false);
                    NotificationUtils.postNotification(BluetoothLeService.this,(deviceName == null ? deviceAddress : deviceName) + " "+ getString(R.string.reconncet_notification),MainApplication.BLUETOOTH_CONNECT_DISCONNECT_NOTIFY_ID);
                    break;
                default:
                    break;
            }
        }

        @Override
        public void onServicesDiscovered(BluetoothGatt gatt, int status) {
            super.onServicesDiscovered(gatt, status);

            BluetoothDevice device = gatt.getDevice();
            String deviceAddress = device.getAddress();
            String deviceName = device.getName();

            switch (status) {
                case BluetoothGatt.GATT_SUCCESS:
                    try {
                        appVerification(gatt, getGattChar(gatt, GattConstant.SERVICE_VSN_SIMPLE_SERVICE, GattConstant.CHAR_APP_VERIFICATION), GattConstant.NEW_APP_VERIFICATION_VALUE);
                    } catch (Exception e) {
                        LogUtils.LOGI(MainApplication.TAG, "Error:" + e.toString());
                    }
                    isConnected = true;
                    for (BluetoothGattService service : gatt.getServices()) {
                        if ((service == null) || (service.getUuid() == null)) {
                            continue;
                        }

                        if (GattConstant.SERVICE_DEVICE_INFO.equals(service.getUuid())) {
                            LogUtils.LOGI(MainApplication.TAG, "GattConstant.SERVICE_DEVICE_INFO");

                            // Read the device serial number
                            readCharacteristic(gatt, service.getCharacteristic(GattConstant.CHAR_SERIAL_NUMBER));
                            // Read the device software version
                            readCharacteristic(gatt, service.getCharacteristic(GattConstant.CHAR_SOFTWARE_REV));
                        }

                        if (GattConstant.SERVICE_BATTERY_LEVEL.equals(service.getUuid())) {
                            LogUtils.LOGI(MainApplication.TAG, "GattConstant.SERVICE_BATTERY_LEVEL");

                            batteryService = service;
                            // Set notification if change in battery percentage.
                            setCharacteristicNotification(gatt, service.getCharacteristic(GattConstant.CHAR_BATTERY_LEVEL), true);
                        }

                        if (GattConstant.SERVICE_VSN_SIMPLE_SERVICE.equals(service.getUuid())) {
                            LogUtils.LOGI(MainApplication.TAG, "GattConstant.SERVICE_VSN_SIMPLE_SERVICE");

                            mCharVerification = service.getCharacteristic(GattConstant.CHAR_APP_VERIFICATION);
                            // Writ Emergency key press and Fall detection
                            enableForDetect(gatt, service.getCharacteristic(GattConstant.CHAR_DETECTION_CONFIG), GattConstant.ENABLE_KEY_DETECTION_VALUE);

                            // Set notification for emergency key press and fall
                            // detection
                            setCharacteristicNotification(gatt, service.getCharacteristic(GattConstant.CHAR_DETECTION_NOTIFY), true);
                        }

                        if (GattConstant.SERVICE_SILENTMODE.equals(service.getUuid())) {
                            LogUtils.LOGI(MainApplication.TAG, "GattConstant.SERVICE_SILENTMODE");
                            if (MainApplication.getPrefBoolean(BluetoothLeService.this, MainApplication.DEVICESILENTCBX)) {
                                // write for put the device in silent mode
                                writeCharacteristic(gatt, service.getCharacteristic(GattConstant.CHAR_SILENTMODE), GattConstant.ENABLE_SILENT_MODE_VALUE);
                            } else {
                                // write for put the device in normal mode.
                                writeCharacteristic(gatt, service.getCharacteristic(GattConstant.CHAR_SILENTMODE), GattConstant.NORMAL_MODE_VALUE);
                            }
                        }

                        if (GattConstant.SERVICE_ADJIST_CONNECTION_INTERVAL.equals(service.getUuid()) && Utils.isAdjustControlAcceptable()) {
                            LogUtils.LOGI(MainApplication.TAG, "GattConstant.SERVICE_ADJIST_CONNECTION_INTERVAL");

                            // write for adjust connection control value to make the
                            // device response time as 1.1 second on MTK 6735 platform
                            if (Build.HARDWARE.equalsIgnoreCase("mt6735") || Build.HARDWARE.equalsIgnoreCase("mt6753")) {
                                writeCharacteristic(
                                        gatt,
                                        service.getCharacteristic(GattConstant.CHAR_ADJIST_CONNECTION_INTERVAL),
                                        GattConstant.ADJIST_CONNECTION_INTERVAL_VALUE_MT6735);
                            }
                            // for other platforms use 980ms with slave latency of 1
                            else {
                                writeCharacteristic(
                                        gatt,
                                        service.getCharacteristic(GattConstant.CHAR_ADJIST_CONNECTION_INTERVAL),
                                        GattConstant.ADJIST_CONNECTION_INTERVAL_VALUE);
                            }
                        }
                    }
                    break;
            }
        }

        // CallBack when the response available for registered the notification(
        // Battery Status, Fall Detect, Key Press)
        @Override
        public void onCharacteristicChanged(BluetoothGatt gatt, BluetoothGattCharacteristic characteristic) {
            super.onCharacteristicChanged(gatt, characteristic);

            System.gc();

            BluetoothDevice device = gatt.getDevice();
            String deviceAddress = device.getAddress();
            String deviceName = device.getName();
            BluetoothGatt receivedGatt = gatt;

            if (GattConstant.CHAR_BATTERY_LEVEL.equals(characteristic.getUuid())) {
                batteryValue = characteristic.getIntValue(BluetoothGattCharacteristic.FORMAT_UINT8, 0).toString();
                updateBatteryStatus(deviceName, deviceAddress, batteryValue);
            }
            if (GattConstant.CHAR_KEY_PRESS.equals(characteristic.getUuid())) {
                if (MainApplication.getPrefBoolean(BluetoothLeService.this,MainApplication.VALRT_SWITCH_OFF) == false) {
                    final String keyValue = characteristic.getIntValue(BluetoothGattCharacteristic.FORMAT_UINT8, 0).toString();
                    // Acknowledge the device that data has been received.
                    ackDevice(receivedGatt, GattConstant.RECEIVED_ACK);
                    isAlertReceived = true;
                }
            }
        }

        @Override
        public void onCharacteristicRead(BluetoothGatt gatt, BluetoothGattCharacteristic characteristic, int status) {
            super.onCharacteristicRead(gatt, characteristic, status);

            BluetoothDevice device = gatt.getDevice();
            String deviceAddress = device.getAddress();
            String deviceName = device.getName();

            if (status == BluetoothGatt.GATT_SUCCESS) {
                // Update the database with received battery value.
                if (GattConstant.CHAR_BATTERY_LEVEL.equals(characteristic.getUuid())) {
                    batteryValue = characteristic.getIntValue(BluetoothGattCharacteristic.FORMAT_UINT8, 0).toString();
                    LogUtils.LOGI(MainApplication.TAG, "onCharacteristicRead Check Battery Value:" + batteryValue);
                    updateBatteryStatus(deviceName, deviceAddress, batteryValue);
                }
                // Update the database with received serial number of device.
                if (GattConstant.CHAR_SERIAL_NUMBER.equals(characteristic.getUuid())) {
                    String serialNo = new String(characteristic.getValue());
                    LogUtils.LOGI(MainApplication.TAG, "SerialNo:" + serialNo);
                }
                // Update the database with received software version.
                if (GattConstant.CHAR_SOFTWARE_REV.equals(characteristic.getUuid())) {
                    String softwareVersion = new String(characteristic.getValue());
                    LogUtils.LOGI(MainApplication.TAG, "Software Version:" + softwareVersion);
                }
            }
        }

        @Override
        public void onCharacteristicWrite(BluetoothGatt gatt, BluetoothGattCharacteristic characteristic, int status) {
            super.onCharacteristicWrite(gatt, characteristic, status);

            // Hao 063016: callback for connection interval change
            if (GattConstant.CHAR_ADJIST_CONNECTION_INTERVAL.equals(characteristic.getUuid())) {
                // Read device battery percentage
                if (batteryService != null) {
                    getDeviceBattery(gatt, batteryService.getCharacteristic(GattConstant.CHAR_BATTERY_LEVEL));
                }
            }
        }

        @Override
        public void onDescriptorRead(BluetoothGatt gatt, BluetoothGattDescriptor descriptor, int status) {
            super.onDescriptorRead(gatt, descriptor, status);
        }

        @Override
        public void onDescriptorWrite(BluetoothGatt gatt, BluetoothGattDescriptor descriptor, int status) {
            super.onDescriptorWrite(gatt, descriptor, status);

            if (status != BluetoothGatt.GATT_SUCCESS) {
                disconnect(gatt, false);
            }
        }

        @Override
        public void onReadRemoteRssi(BluetoothGatt gatt, int rssi, int status) {
            super.onReadRemoteRssi(gatt, rssi, status);

            if (status == BluetoothGatt.GATT_SUCCESS) {
                rssiValue = Integer.toString(rssi);
            }
        }
    };

    private void createNotificationChannel() {
        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            int importance = NotificationManager.IMPORTANCE_DEFAULT;
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID, "IncidentGo", importance);
            channel.setDescription("CHANEL DESCRIPTION");
            NotificationManager notificationManager = getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
    }

    // Local binder to bind the service and communicate with this

    /**
     * Initializes a reference to the local Blue tooth adapter.
     *
     * @return Return true if the initialization is successful.
     */
    public boolean initialize() {
        // For API level 18 and above, get a reference to BluetoothAdapter
        // through BluetoothManager.
        if (bluetoothManager == null) {
            bluetoothManager = (BluetoothManager) getSystemService(Context.BLUETOOTH_SERVICE);
            if (bluetoothManager == null) {
                return false;
            }
        }

        bluetoothAdapter = bluetoothManager.getAdapter();
        if (bluetoothAdapter == null) {
            return false;
        }
        return true;
    }

    /**
     * On unbind.
     *
     * @param intent the intent
     * @return true, if successful
     */
    @Override
    public boolean onUnbind(Intent intent) {
        // In this particular example,close() is invoked when the UI is
        // disconnected from the Service.
        return super.onUnbind(intent);
    }

    @Override
    public IBinder onBind(Intent intent) {
        return binder;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        bluetoothGattMap = new HashMap<String, BluetoothGatt>();

        // To execute the read and write operation in a queue.
        if (!processQueueExecutor.isAlive()) {
            processQueueExecutor.start();
        }

        this.handler.post(this.runnableCode);
        initialize();

        if(!NotificationUtils.isNotificationVisible(this,MainApplication.BLUETOOTHLESERVICE_NOTIFY_ID))
        {
            createNotificationChannel();
            startForeground(MainApplication.BLUETOOTHLESERVICE_NOTIFY_ID,NotificationUtils.getNotification(this,getString(R.string.service_running)));
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        stopForeground(false);
        this.handler.removeCallbacks(this.runnableCode);
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        return START_STICKY;
    }

    /**
     * To read the value from the BLE Device.
     *
     * @param mGatt          the m gatt
     * @param characteristic the characteristic
     */
    public void readCharacteristic(final BluetoothGatt mGatt,final BluetoothGattCharacteristic characteristic) {
        if (!checkConnectionState(mGatt)) {
            return;
        }
        ReadWriteCharacteristic readWriteCharacteristic = new ReadWriteCharacteristic(ProcessQueueExecutor.REQUEST_TYPE_READ_CHAR, mGatt,characteristic);
        ProcessQueueExecutor.addProcess(readWriteCharacteristic);
    }

    /**
     * To write the value to BLE Device.
     *
     * @param mGatt          the m gatt
     * @param characteristic the characteristic
     * @param b              the b
     */
    public void writeCharacteristic(final BluetoothGatt mGatt,final BluetoothGattCharacteristic characteristic, byte[] b) {
        if (!checkConnectionState(mGatt)) {
            return;
        }
        characteristic.setValue(b);
        ReadWriteCharacteristic readWriteCharacteristic = new ReadWriteCharacteristic(ProcessQueueExecutor.REQUEST_TYPE_WRITE_CHAR, mGatt,characteristic);
        ProcessQueueExecutor.addProcess(readWriteCharacteristic);
    }

    /**
     * Enables or disables notification on a give characteristic.
     *
     * @param mGatt          the m gatt
     * @param characteristic Characteristic to act on.
     * @param enabled        If true, enable notification. False otherwise.
     */
    public void setCharacteristicNotification(final BluetoothGatt mGatt,BluetoothGattCharacteristic characteristic, boolean enabled) {
        if (!checkConnectionState(mGatt)) {
            return;
        }
        if (!mGatt.setCharacteristicNotification(characteristic, enabled)) {
            return;
        }
        final BluetoothGattDescriptor clientConfig = characteristic.getDescriptor(GattConstant.CLIENT_CHARACTERISTIC_CONFIG);
        if (clientConfig == null) {
            return;
        }
        clientConfig.setValue(enabled ? GattConstant.ENABLE_NOTIFICATION_VALUE: GattConstant.DISABLE_NOTIFICATION_VALUE);
        ReadWriteCharacteristic readWriteCharacteristic = new ReadWriteCharacteristic(ProcessQueueExecutor.REQUEST_TYPE_WRITE_DESCRIPTOR, mGatt,clientConfig);
        ProcessQueueExecutor.addProcess(readWriteCharacteristic);
    }

    /**
     * Connects to the GATT server hosted on the Blue tooth LE device.
     *
     * @param address The device address of the destination device.
     * @return Return true if the connection is initiated successfully. The
     * connection result is reported asynchronously through the
     * {@code BluetoothGattCallback# onConnectionStateChange(android.bluetooth.BluetoothGatt, int, int)}
     * callback.
     */
    public boolean connect(final String address) {
        if (address == null || MainApplication.getPrefBoolean(BluetoothLeService.this,MainApplication.VALRT_SWITCH_OFF) == true) {
            return false;
        }
        // HN 050615: re-init bluetoothAdapter if null
        if (bluetoothAdapter == null) {
            if (!initialize()) {
                return false;
            }
        }

        BluetoothGatt bluetoothGatt = bluetoothGattMap.get(address);
        if (bluetoothGatt != null) {
            bluetoothGatt.disconnect();
            bluetoothGatt.close();
        }
        device = bluetoothAdapter.getRemoteDevice(address);

        // HN 050615: Don't need to check for connection state.  When we are at this point
        // device was found during scan, so it must be disconnected.  So just issue connectGatt().
        // Also, fitbit apps causes BLE stack to always report V.ALRT as connected even though it's disconnected

        if (device == null) {
            return false;
        }
        // We want to directly connect to the device, so we are setting the
        // autoConnect parameter to false.

        BluetoothGatt mBluetoothGatt = device.connectGatt(this, false,mGattCallbacks);
        // Add the each BluetoothGatt in to an array list.
        if (!bluetoothGattMap.containsKey(address)) {
            bluetoothGattMap.put(address, mBluetoothGatt);
        } else {
            bluetoothGattMap.remove(address);
            bluetoothGattMap.put(address, mBluetoothGatt);
        }

        return true;
    }

    /**
     * To disconnect the connected Blue tooth Low energy Device from the APP.
     *
     * @param gatt   the gatt
     * @param status log and notification needed or not.
     */
    public void disconnect(BluetoothGatt gatt, boolean status) {
        if (gatt != null) {
            BluetoothDevice device = gatt.getDevice();
            String deviceAddress = device.getAddress();
            String deviceName = device.getName();

            try {
                bluetoothGattMap.remove(deviceAddress);
                gatt.disconnect();
                gatt.close();
                isConnected = false;
            } catch (Exception e) {
                LogUtils.LOGI(MainApplication.TAG, e.getMessage());
            }

            if (status == true) {
                NotificationUtils.postNotification(this,(deviceName == null ? deviceAddress : deviceName) + " "+ getString(R.string.disconnected),MainApplication.BLUETOOTH_CONNECT_DISCONNECT_NOTIFY_ID);
            }
        }
    }


    /**
     * To check the connection status of the GATT object.
     *
     * @param gatt the gatt
     * @return If connected it will return true else false.
     */
    public boolean checkConnectionState(BluetoothGatt gatt) {
        if (bluetoothAdapter == null) {
            // HN 050615: re-init bluetoothAdapter if null
            if (!initialize()) {
                return false;
            }
        }
        BluetoothDevice device = gatt.getDevice();
        String deviceAddress = device.getAddress();
        final BluetoothDevice bluetoothDevice = bluetoothAdapter.getRemoteDevice(deviceAddress);
        int connectionState = bluetoothManager.getConnectionState(bluetoothDevice, BluetoothProfile.GATT);
        if (connectionState == BluetoothProfile.STATE_CONNECTED) {
            return true;
        }
        return false;
    }

    // The connection status of the Blue tooth Low energy Device will be

    /**
     * To get the BluetoothGatt of the corresponding device.
     *
     * @param bGattkey the b gattkey
     * @return BluetoothGatt of the device from the array
     */
    public BluetoothGatt getGatt(String bGattkey) {
        return bluetoothGattMap.get(bGattkey);
    }

    /**
     * To write the value to BLE Device for APP verification.
     *
     * @param mGatt the m gatt
     * @param ch    the ch
     * @param value the value
     */
    public void appVerification(final BluetoothGatt mGatt,
                                final BluetoothGattCharacteristic ch, final byte[] value) {
        writeCharacteristic(mGatt, ch, value);
    }

    /**
     * To get the characteristic of the corresponding BluetoothGatt object and
     * service UUID and Characteristic UUID.
     *
     * @param mGatt             the m gatt
     * @param serviceuuid       the serviceuuid
     * @param charectersticuuid the charectersticuuid
     * @return BluetoothGattCharacteristic of the given service and
     * Characteristic UUID.
     */
    public BluetoothGattCharacteristic getGattChar(BluetoothGatt mGatt,UUID serviceuuid, UUID charectersticuuid) {
        gattService = mGatt.getService(serviceuuid);
        return gattService.getCharacteristic(charectersticuuid);
    }

    /**
     * To write the value to BLE Device to read the battery.
     *
     * @param mGatt the m gatt
     * @param ch    the ch
     * @return the device battery
     */
    public void getDeviceBattery(final BluetoothGatt mGatt, final BluetoothGattCharacteristic ch) {
        readCharacteristic(mGatt, ch);
    }

    /**
     * To write the value to BLE Device for Emergency / Fall alert.
     *
     * @param mGatt the m gatt
     * @param ch    the ch
     * @param value the value
     */
    public void enableForDetect(final BluetoothGatt mGatt,final BluetoothGattCharacteristic ch, final byte[] value) {
        writeCharacteristic(mGatt, ch, value);
    }

    /**
     * Acknowledge the device that the value received.
     *
     * @param mGatt the m gatt
     * @param value the value
     */
    public void ackDevice(BluetoothGatt mGatt, byte[] value) {
        BluetoothGattCharacteristic ch;
        ch = getGattChar(mGatt, GattConstant.SERVICE_VSN_SIMPLE_SERVICE,GattConstant.ACK_DETECT);
        writeCharacteristic(mGatt, ch, value);
    }

    private void sendMessageToActivity(boolean isConnected) {
        Intent intent = new Intent();
        intent.setAction("CONNECTION");
        intent.putExtra("CONNECTING", isConnected);
        LocalBroadcastManager.getInstance(this).sendBroadcast(intent);
    }

    /**
     * Update the battery status in the database.
     *
     * @param name the name
     * @param address the address
     * @param batteryStatus the batteryStatus
     */
    public void updateBatteryStatus(String name, String address,String batteryStatus) {
        LogUtils.LOGI(MainApplication.TAG, "BatteryStatus:" + batteryStatus);

        String notificationMessage = Integer.parseInt(batteryStatus) < 11 ? (name == null ? address : name) + " " + getString(R.string.connected) + ", "
                + getString(R.string.low_battery) :  (name == null ? address : name) + " " + getString(R.string.connected);

        NotificationUtils.postNotification(BluetoothLeService.this,
                    notificationMessage,
                    MainApplication.BLUETOOTH_CONNECT_DISCONNECT_NOTIFY_ID);
    }

    /**
     * The Class LocalBinder.
     */
    // BluetoothLeService class.
    public class LocalBinder extends Binder {

        /**
         * Gets the service.
         *
         * @return the service
         */
        public BluetoothLeService getService() {
            return BluetoothLeService.this;
        }
    }
}
