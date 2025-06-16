package com.reactnativeincidentgopackage;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.PowerManager;
import android.provider.Settings;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BatteryOptimizationModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    BatteryOptimizationModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

    @RequiresApi(api = Build.VERSION_CODES.P)
    @ReactMethod
    public void isBatteryOptimizationEnabled(Promise promise) {
        Log.wtf("Function", "isBatteryOptimizationEnabled: ");
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            Log.wtf("Function", "Check Function True");
            String packageName = reactContext.getPackageName();
            PowerManager pm = (PowerManager) reactContext.getSystemService(reactContext.POWER_SERVICE);
            Log.wtf("Function", "Now check if condition");
            Log.wtf("packageName", packageName);
            Log.wtf("PowerMode", "is Power mode enable" + pm.isPowerSaveMode());
//            Log.wtf("isPowerSaveMode", pm.isPowerSaveMode());
            if (!pm.isIgnoringBatteryOptimizations(packageName)) {
//            if (pm.isPowerSaveMode()) {
                Log.wtf("Function", "Condition True");
                Log.wtf("Battery", "isBatteryOptimizationEnabled: " + true);
                promise.resolve(true);
            }
            else
            {
                promise.resolve(false);
            }
            return ;
        }
        Log.wtf("Function", "Check Version Condition false");
        Log.wtf("Battery", "isBatteryOptimizationEnabled: " + false);
        promise.resolve(false);
    }

    @ReactMethod
    public void openBatteryModal() {

        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {

            String packageName = reactContext.getPackageName();
            Intent intent = new Intent();
            intent.setAction(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS);
//            intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
            intent.setData(Uri.parse("package:" + packageName));
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            reactContext.startActivity(intent);

//                Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
//                Uri uri = Uri.fromParts("package", packageName, null);
//                intent.setData(uri);
//                reactContext.startActivity(intent);
        }
    }

    @Override
    public String getName() {
        return "BatteryOptimizationModule";
    }


}
