package com.reactnativeincidentgopackage.network;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.util.Log;

import com.facebook.react.HeadlessJsTaskService;

public class NetworkReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        ConnectivityManager cm = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetwork = cm.getActiveNetworkInfo();
        boolean isConnected = activeNetwork != null && activeNetwork.isConnectedOrConnecting();
        Log.d("NetworkReceiver", "Network restored! Starting Headless JS task..."+isConnected);
        if (isConnected) {
            Log.d("NetworkReceiver", "Network restored! Starting Headless JS task...");
            Intent serviceIntent = new Intent(context, NetworkRestoreService.class);
            context.startService(serviceIntent);
            HeadlessJsTaskService.acquireWakeLockNow(context);
        }
    }
}
