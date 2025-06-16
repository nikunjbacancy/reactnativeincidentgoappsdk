package com.reactnativeincidentgopackage.worker;


import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
import androidx.work.Data;
import androidx.work.OneTimeWorkRequest;
import androidx.work.WorkManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.concurrent.TimeUnit;

public class CounterModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    private BroadcastReceiver countdownReceiver;

    public CounterModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;

        countdownReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                String remainingTime = intent.getStringExtra("remaining_time");
//                Log.e("safety timer", "onReceive: " + remainingTime);
                getReactApplicationContext()
                        .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit("countdownEvent", remainingTime);
            }
        };
    }

    @NonNull
    @Override
    public String getName() {
        return "CounterModule";
    }

    @ReactMethod
    public void startCounter(final double inputTime) {

        Log.e("safety timer", "Time: " + inputTime);
        long timeValue = (long) inputTime;
        Data inputData = new Data.Builder()
                .putLong("MAIN_TIMER_DURATION", timeValue*1000)
                .build();

        OneTimeWorkRequest workRequest = new OneTimeWorkRequest.Builder(CountdownWorker.class).setInputData(inputData)
                .build();
        WorkManager.getInstance(reactContext).enqueue(workRequest);

        LocalBroadcastManager.getInstance(this.reactContext)
                .registerReceiver(countdownReceiver, new IntentFilter("countdown-timer"));

//        LocalBroadcastManager.getInstance(this.reactContext).registerReceiver(
//                new BroadcastReceiver() {
//                    @Override
//                    public void onReceive(Context context, Intent intent) {
//                        String remainingTime = intent.getStringExtra("remaining_time");
//                        Log.e("safety timer", "onReceive: " + remainingTime);
//                        getReactApplicationContext()
//                                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
//                                .emit("countdownEvent", remainingTime);
//                    }
//                },
//                new IntentFilter("countdown-timer")
//        );
    }

    @ReactMethod
    public void stopCounter(final double inputTime) {

//        LocalBroadcastManager.getInstance(this.reactContext).unregisterReceiver(countdownReceiver);

        Data inputData = new Data.Builder()
                .putLong("MAIN_TIMER_DURATION", -1)
                .build();
        OneTimeWorkRequest workRequest = new OneTimeWorkRequest.Builder(CountdownWorker.class).setInputData(inputData)
                .build();
        WorkManager.getInstance(reactContext).enqueue(workRequest);



    }

}

