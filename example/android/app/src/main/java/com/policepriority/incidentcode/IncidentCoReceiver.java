package com.policepriority.incidentcode;

import android.bluetooth.BluetoothAdapter;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.location.LocationManager;
import android.os.Build;

import com.policepriority.incidentcode.bluetooth.utils.LogUtils;
import com.policepriority.incidentcode.bluetooth.utils.Utils;
import com.policepriority.incidentcode.bluetooth.BluetoothLeService;
import com.policepriority.incidentcode.bluetooth.NotificationUtils;
import com.policepriority.incidentcode.bluetooth.ReconnectService;

//import
//import
//import
//import
//import
//import
//import
//import

/**
 * VALRTReceiver.java
 * <p>
 * This class will be receive values whenever the following event occur. Events like Bluetooth
 * status on / off,Location provider on / off and mobile device power up. Based on the received
 * value we will trigger the corresponding functions.
 */
public class IncidentCoReceiver extends BroadcastReceiver {
    /* (non-Javadoc)
     * @see android.content.BroadcastReceiver#onReceive(android.content.Context, android.content.Intent)
     */
    public void onReceive(Context mContext, Intent intent) {
        final String action = intent.getAction();

        LogUtils.LOGI(MainApplication.TAG, "ACTION:::::=>=>=>=>:" + action);
        if (action != null) {
            if (action.equals(BluetoothAdapter.ACTION_STATE_CHANGED)) {
                final int state = intent.getIntExtra(BluetoothAdapter.EXTRA_STATE, BluetoothAdapter.ERROR);
                switch (state) {
                    case BluetoothAdapter.STATE_TURNING_OFF:
                        mContext.stopService(new Intent(mContext, ReconnectService.class));
                        mContext.stopService(new Intent(mContext, BluetoothLeService.class));
                        NotificationUtils.postNotification(mContext, mContext.getString(R.string.bluetooth_off), MainApplication.BLUETOOTH_NOTIFY_ID);
                        break;
                    case BluetoothAdapter.STATE_ON:
                        if (!Utils.isServiceRunning(mContext, "BluetoothLeService")) {
                            mContext.startService(new Intent(mContext, ReconnectService.class));
                        }
                        Utils.cancelNotify(mContext, MainApplication.BLUETOOTH_NOTIFY_ID);
                        break;
                }
            } else if (action.equals(LocationManager.PROVIDERS_CHANGED_ACTION)) {
                if (!Utils.isGPSon(mContext)) {
                    NotificationUtils.postNotification(mContext, mContext.getString(R.string.location_disabled), MainApplication.LOCATION_NOTIFY_ID);
                } else if (Utils.isGPSon(mContext)) {
                    Utils.cancelNotify(mContext, MainApplication.LOCATION_NOTIFY_ID);
                }
            } else if (action.equals(Intent.ACTION_BOOT_COMPLETED)) {
//                BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
//                if (!mBluetoothAdapter.isEnabled()) {
//                    NotificationUtils.postNotification(mContext, mContext.getString(R.string.bluetooth_off), MainApplication.BLUETOOTH_NOTIFY_ID);
//                } else {
//                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
//                        mContext.startForegroundService(new Intent(mContext, ReconnectService.class));
//                    } else {
//                        mContext.startService(new Intent(mContext, ReconnectService.class));
//                    }
//                }
            }
        }
    }
}
