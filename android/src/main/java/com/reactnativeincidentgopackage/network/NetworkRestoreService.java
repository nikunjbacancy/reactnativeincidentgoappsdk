package com.reactnativeincidentgopackage.network;

import android.content.Intent;
import android.util.Log;
import com.facebook.react.HeadlessJsTaskService;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.jstasks.HeadlessJsTaskConfig;

public class NetworkRestoreService extends HeadlessJsTaskService {
    @Override
    protected HeadlessJsTaskConfig getTaskConfig(Intent intent) {
        Log.d("NetworkRestoreService", "Executing Headless JS task for network restore");
        WritableMap data = Arguments.createMap();
        data.putBoolean("networkRestored", true);

        return new HeadlessJsTaskConfig(
                "NetworkRestoredTask",  // Task name (must match JS registration)
                data,
                5000,  // Timeout (5 seconds)
                true   // Allow execution even when the device is idle
        );
    }
}
