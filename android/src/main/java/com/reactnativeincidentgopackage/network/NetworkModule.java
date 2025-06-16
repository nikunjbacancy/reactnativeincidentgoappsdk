package com.reactnativeincidentgopackage.network;

import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.util.Log;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import java.util.Map;
import java.util.HashMap;

public class NetworkModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private static final String EVENT_NAME = "onNetworkRestored";

    public NetworkModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "NetworkModule";
    }

    @ReactMethod
    public void startNetworkListener() {
        IntentFilter filter = new IntentFilter(ConnectivityManager.CONNECTIVITY_ACTION);
        reactContext.registerReceiver(new NetworkReceiver(), filter);
        Log.d("NetworkModule", "Network listener started");
    }

    public static void sendEvent() {
        if (reactContext != null) {
            reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(EVENT_NAME, "Network restored");
        }
    }
}