package com.policepriority.incidentcode.bluetooth;

import android.Manifest;
import android.app.Activity;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothGatt;
import android.bluetooth.BluetoothManager;
import android.bluetooth.le.ScanCallback;
import android.bluetooth.le.ScanResult;
import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.ServiceConnection;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.os.PowerManager;
import android.provider.Settings;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.modules.core.PermissionAwareActivity;
import com.facebook.react.modules.core.PermissionListener;
import com.google.firebase.crashlytics.FirebaseCrashlytics;
import com.policepriority.incidentcode.bluetooth.utils.LogUtils;
import com.policepriority.incidentcode.bluetooth.utils.Utils;
import com.policepriority.incidentcode.MainApplication;

import java.util.Timer;
import java.util.TimerTask;

import static android.content.Context.BIND_AUTO_CREATE;

public class BluetoothModule extends ReactContextBaseJavaModule implements ActivityEventListener, PermissionListener {

    public static final int REQUEST_ENABLE_BT = 1;
    private static final int REQUEST_ENABLE_FINE_LOCATION = 2;
    public static int ACTION_MANAGE_OVERLAY_PERMISSION_REQUEST_CODE = 5469;

    private static final String BT_NOT_SUPPORTED = "BT_NOT_SUPPORTED";
    private static final String BT_ENABLE_CANCELLED = "BT_ENABLE_CANCELLED";
    private static final String BT_DEVICE_NOT_FOUND = "BT_DEVICE_NOT_FOUND";

    public static final String REACT_CLASS = "Bluetooth";
    private static ReactApplicationContext reactContext;
    private BluetoothAdapter mBluetoothAdapter = null;
    private BluetoothManager mBluetoothManager;
    /**
     * The bluetooth le service.
     */
    private BluetoothLeService bluetoothLeService;
    private Promise mBLEPromise;

    private Timer timer = new Timer();
    private TimerTask timerTask;

    public BluetoothModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;

        if (mBluetoothManager == null) {
            mBluetoothManager = (BluetoothManager) getReactApplicationContext().getSystemService(Context.BLUETOOTH_SERVICE);
        }
        mBluetoothAdapter = mBluetoothManager.getAdapter();

        LocalBroadcastManager.getInstance(reactContext).registerReceiver(broadcastReceiver, new IntentFilter("CONNECTION"));
        LocalBroadcastManager.getInstance(reactContext).registerReceiver(broadcastReceiver, new IntentFilter("BATTERY_LEVEL"));
        reactContext.addActivityEventListener(this);
    }

    @ReactMethod
    public void startBLEService(String mDeviceAddress) {
        if(!Utils.isServiceRunning(reactContext, "BluetoothLeService"))
        {
            Intent i = new Intent(this.reactContext, BluetoothLeService.class);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                this.reactContext.startForegroundService(i);
            } else {
                this.reactContext.startService(new Intent(i));
            }
            this.reactContext.bindService(i, mServiceConnection, BIND_AUTO_CREATE);
        }
        initializeTimerTask(mDeviceAddress);
        timer.schedule(timerTask, 5000);
    }

    public void initializeTimerTask(String mDeviceAddress) {
        timerTask = new TimerTask() {
            public void run() {
                //use a handler to run a toast that shows the current timestamp
                connectBLEDevice(mDeviceAddress);
            }
        };
    }

    @ReactMethod
    public void connectBLEDevice(String mDeviceAddress) {
        bluetoothLeService.connect(mDeviceAddress);
    }

    @ReactMethod
    public void disConnectBLEDevice(String mDeviceAddress) {
        BluetoothGatt bGatt = null;

        try {
            if (bluetoothLeService != null) {
                bGatt = bluetoothLeService.getGatt(mDeviceAddress);
                bluetoothLeService.disconnect(bGatt, true);
            }
        } catch (Exception e) {
            LogUtils.LOGI(MainApplication.TAG, e.toString()); //logException
        }
    }

    @ReactMethod
    public void awakeLockScreen()
    {
        PowerManager pm = (PowerManager)getReactApplicationContext().getSystemService(Context.POWER_SERVICE);
        boolean isScreenOn = pm.isInteractive();

        if(isScreenOn==false)
        {
            PowerManager.WakeLock wl = pm.newWakeLock(PowerManager.FULL_WAKE_LOCK |PowerManager.ACQUIRE_CAUSES_WAKEUP |PowerManager.ON_AFTER_RELEASE,"IncidentCo:WakeLock");
            wl.acquire(10000);
            PowerManager.WakeLock wl_cpu = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK,"IncidentCo:WakeLockCPU");
            wl_cpu.acquire(10000);
        }
    }

    @ReactMethod
    public void cancelAckDevice(String mDeviceAddress) {
        BluetoothGatt bGatt;

        // To stop ongoing call and all pending calls
        if (bluetoothLeService != null) {
            bGatt = bluetoothLeService.getGatt(mDeviceAddress);
            new Timer().schedule(new TimerTask() {
                @Override
                public void run() {
                    bluetoothLeService.ackDevice(bGatt, GattConstant.CANCEL_ACK);
                }
            }, 2000);
        }
    }

    @ReactMethod
    public void checkBLEConnection(Promise promise) {
        try {
            if (!getCurrentActivity().getPackageManager().hasSystemFeature(PackageManager.FEATURE_BLUETOOTH_LE)) {
                promise.reject(BT_NOT_SUPPORTED, "Bluetooth is not supported");
            } else if (mBluetoothAdapter == null) {
                promise.reject(BT_NOT_SUPPORTED, "Bluetooth is not supported");
            } else {
                if (!mBluetoothAdapter.isEnabled()) {
                    this.mBLEPromise = promise;

                    Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
                    getCurrentActivity().startActivityForResult(enableBtIntent, REQUEST_ENABLE_BT);
                } else {
                    promise.resolve("Bluetooth Enabled Successfully");
                }
            }
        } catch (Exception e) {
            promise.reject(BT_NOT_SUPPORTED, e.toString());
        }
    }

    @ReactMethod
    public void scanBLEDevice(Promise promise) {
        if (ContextCompat.checkSelfPermission(getCurrentActivity(), Manifest.permission.ACCESS_FINE_LOCATION)
                != PackageManager.PERMISSION_GRANTED) {
            // Permission is not granted
            if (ActivityCompat.shouldShowRequestPermissionRationale(getCurrentActivity(),
                    Manifest.permission.ACCESS_FINE_LOCATION)) {
                PermissionAwareActivity activity = (PermissionAwareActivity) getCurrentActivity();
                if (activity != null) {
                    this.mBLEPromise = promise;
                    activity.requestPermissions(new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, REQUEST_ENABLE_FINE_LOCATION, this);
                }
            }
        } else {
            this.mBLEPromise = promise;
            mBluetoothAdapter.getBluetoothLeScanner().startScan(leScanCallback);
        }
    }

    @ReactMethod
    public void checkPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(reactContext)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + reactContext.getPackageName()));
                getCurrentActivity().startActivityForResult(intent, ACTION_MANAGE_OVERLAY_PERMISSION_REQUEST_CODE);
            }
        }
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    /**
     * The m service connection.
     */
    // To manage Service class life cycle.
    private final ServiceConnection mServiceConnection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName componentName,
                                       IBinder service) {
            bluetoothLeService = ((BluetoothLeService.LocalBinder) service).getService();
        }

        @Override
        public void onServiceDisconnected(ComponentName componentName) {
            // Don't kill the BluetoothLeService instance
            // while disconnecting the service.
        }
    };

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case REQUEST_ENABLE_BT:
                if (mBLEPromise != null) {
                    switch (resultCode) {
                        case Activity.RESULT_OK:
                            mBLEPromise.resolve("Bluetooth Enabled Successfully");
                            break;
                        case Activity.RESULT_CANCELED:
                            mBLEPromise.resolve("Bluetooth Enable Cancelled");
                            break;
                    }
                }
                mBLEPromise = null;
                break;
        }
    }


    @Override
    public void onNewIntent(Intent intent) {
    }

    @Override
    public boolean onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode) {
            case REQUEST_ENABLE_FINE_LOCATION:
                if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    scanBLEDevice(mBLEPromise);
                } else {
                    // permission denied, boo! Disable the
                    // functionality that depends on this permission.
                }
                break;
        }
        return false;
    }

    // Device scan callback.
    private ScanCallback leScanCallback = new ScanCallback() {
        @Override
        public void onScanResult(int callbackType, ScanResult result) {
            if (Utils.isVSNDevice(result.getDevice().getName(), result.getDevice().getAddress())) {
                mBluetoothAdapter.getBluetoothLeScanner().stopScan(leScanCallback);

                if (mBLEPromise != null) {
                    WritableMap resultData = new WritableNativeMap();
                    resultData.putString("name", result.getDevice().getName());
                    resultData.putString("address", result.getDevice().getAddress());

                    mBLEPromise.resolve(resultData);
                    mBLEPromise = null;
                }
            }
        }
    };


    private BroadcastReceiver broadcastReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (intent.getAction().equals("CONNECTION")) {
                boolean isConnected = intent.getBooleanExtra("CONNECTING", false);  //get the type of message from MyGcmListenerService 1 - lock or 0 -Unlock
                LogUtils.LOGI(MainApplication.TAG, "isConnected:" + isConnected);
                if(!isConnected)
                {
                    mBluetoothAdapter.getBluetoothLeScanner().startScan(new ScanCallback() {
                        @Override
                        public void onScanResult(int callbackType, ScanResult result) {
                            super.onScanResult(callbackType, result);

                            if (Utils.isVSNDevice(result.getDevice().getName(), result.getDevice().getAddress())) {
                                mBluetoothAdapter.getBluetoothLeScanner().stopScan(leScanCallback);

                                    new Handler(Looper.myLooper()).postDelayed(new Runnable() {
                                        @Override
                                        public void run() {
                                            try {
                                                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).
                                                        emit("ADDRESS", result.getDevice().getAddress());
                                            } catch (Exception e) {
                                                e.printStackTrace();
                                            }
                                        }
                                    }, 1000);
                                }
                         }
                    });
                }
            }
        }
    };
}
