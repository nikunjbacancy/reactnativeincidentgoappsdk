package com.policepriority.incidentcode.bluetooth;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.Service;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothManager;
import android.bluetooth.le.ScanCallback;
import android.bluetooth.le.ScanResult;
import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;

import com.policepriority.incidentcode.bluetooth.utils.LogUtils;
import com.policepriority.incidentcode.bluetooth.utils.Utils;
import com.policepriority.incidentcode.MainApplication;
import com.policepriority.incidentcode.R;

import java.util.Timer;
import java.util.TimerTask;

public class ReconnectService extends Service {
    /**
     * The bluetooth le service.
     */
    private BluetoothLeService bluetoothLeService;
    /**
     * The bluetooth adapter.
     */
    private BluetoothAdapter bluetoothAdapter;
    /**
     * The timer delay connect.
     */
    private Timer timerDelayConnect = null;
    /**
     * The timer stop service.
     */
    private Timer timerStopService = null;
    /**
     * The timer interval scanner.
     */
    private Timer timerIntervalScanner = null;
    /**
     * The is scanning.
     */
    private boolean isScanning = false;
    /**
     * The timeout.
     */
    private long TIMEOUT = 180000;
    /**
     * The scan timeout.
     */
    private long SCAN_TIMEOUT = 30000;
    /**
     * The delay.
     */
    private long DELAY = 5000;

    @Override
    public void onCreate() {
        super.onCreate();

        BluetoothManager manager = MainApplication.getManager(this);
        if (manager != null) {
            bluetoothAdapter = manager.getAdapter();
            if (bluetoothAdapter != null && Utils.isBluetoothEnabled(this) == true) {
                scanDevice();
            } else {
                stopSelf();
            }
        } else {
            stopSelf();
        }
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {

        // to stop the Reconnect Service after two minutes.
        stopService();

        if(!Utils.isServiceRunning(this,"BluetoothLeService"))
        {
            createNotificationChannel();
            startForeground(MainApplication.BLUETOOTHLESERVICE_NOTIFY_ID,
                    NotificationUtils.getNotification(this,
                            getString(R.string.service_running)));

            Intent i = new Intent(this, BluetoothLeService.class);
            startService(i);
            bindService(i, mServiceConnection, BIND_AUTO_CREATE);
        }

        return START_STICKY;
    }

    private void createNotificationChannel() {
        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            int importance = NotificationManager.IMPORTANCE_DEFAULT;
            NotificationChannel channel = new NotificationChannel("IncidentCo", "IncidentGo", importance);
            channel.setDescription("CHANEL DESCRIPTION");
            NotificationManager notificationManager = getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
    }

    /**
     * The m service connection.
     */
    // To manage Service class life cycle.
    private final ServiceConnection mServiceConnection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName componentName, IBinder service) {
            bluetoothLeService = ((BluetoothLeService.LocalBinder) service).getService();
            if (!bluetoothLeService.initialize()) {
                stopService();
            }
        }

        @Override
        public void onServiceDisconnected(ComponentName componentName) {
            // Don't kill the BluetoothLeService instance
            // while disconnecting the service.
        }
    };

    // Device scan callback.
    private ScanCallback leScanCallback = new ScanCallback() {
        @Override
        public void onScanResult(int callbackType, ScanResult result) {
            // To filter the VSN Device.

            final Handler h = new Handler(Looper.getMainLooper());
            h.post(new Runnable() {
                public void run() {
                    if (Utils.isVSNDevice(result.getDevice().getName(), result.getDevice().getAddress())) {
                        stopScan();
                        if (bluetoothLeService != null) {
                            String beaconAddress = MainApplication.getPrefString(getApplicationContext(), MainApplication.BEACON_ADDRESS);
                            if (beaconAddress != null && result.getDevice().getAddress().equals(beaconAddress)) {
                                connectDevice(beaconAddress);
                            }
                        }
                    }
                }
            });
        }
    };

    // Runs the LeScan for 30seconds balanced mode and Scan Available Devices
    public void scanDevice() {
        try {
            if (timerIntervalScanner == null) {
                timerIntervalScanner = new Timer();
                timerIntervalScanner.scheduleAtFixedRate(new TimerTask() {
                    @Override
                    public void run() {
                        if (!isScanning) {
                            startScan();
                        } else {
                            stopScan();
                        }
                    }
                }, 0, SCAN_TIMEOUT);
            }
        } catch (Exception e) {

            LogUtils.LOGI(MainApplication.TAG, e.getMessage());
        }
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    /**
     * Start scan.
     */
    // Start scan
    private void startScan() {
        try {
            if ((bluetoothAdapter != null) && (!isScanning)) {
                bluetoothAdapter.getBluetoothLeScanner().startScan(leScanCallback);
                isScanning = true;
            }
        } catch (Exception e) {
            LogUtils.LOGI(MainApplication.TAG, e.getMessage());
        }
    }

    /**
     * Stop scan.
     */
    // Stop scan
    private void stopScan() {
        try {
            if (bluetoothAdapter != null) {
                bluetoothAdapter.getBluetoothLeScanner().stopScan(leScanCallback);
            }
            isScanning = false;
        } catch (Exception e) {
            LogUtils.LOGI(MainApplication.TAG, e.getMessage());
        }
    }

    /**
     * Stop service.
     */
    public void stopService() {
        try {
            if (timerStopService == null) {
                timerStopService = new Timer();
                timerStopService.schedule(new TimerTask() {
                    @Override
                    public void run() {
                        ReconnectService.this.stopSelf();
                    }
                }, TIMEOUT);
            }
        } catch (Exception e) {
            LogUtils.LOGI(MainApplication.TAG, e.getMessage());
        }
    }

    /**
     * Connect device.
     *
     * @param deviceAddress the device mac
     */
    public void connectDevice(final String deviceAddress) {
        try {
            if (timerDelayConnect == null) {
                timerDelayConnect = new Timer();
                timerDelayConnect.schedule(new TimerTask() {
                    @Override
                    public void run() {
                        final Handler h = new Handler(Looper.getMainLooper());
                        h.post(new Runnable() {
                            public void run() {
                                bluetoothLeService.connect(deviceAddress);
                            }
                        });
                    }
                }, DELAY);
            }
        } catch (Exception e) {
            LogUtils.LOGI(MainApplication.TAG, e.getMessage());
        }
    }

    /* (non-Javadoc)
     * @see android.app.Service#onDestroy()
     */
    @Override
    public void onDestroy() {
        try {
            // Stop scanning
            stopScan();
            // UNBIND the BluetoothLeService connection
            unbindService(mServiceConnection);

            if (timerStopService != null) {
                timerStopService.cancel();
            }

            if (timerDelayConnect != null) {
                timerDelayConnect.cancel();
            }

            if (timerIntervalScanner != null) {
                timerIntervalScanner.cancel();
            }
        } catch (Exception e) {
            LogUtils.LOGI(MainApplication.TAG, e.getMessage());
        }
        super.onDestroy();
    }
}
