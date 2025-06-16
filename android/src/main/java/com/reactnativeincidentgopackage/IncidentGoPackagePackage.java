package com.reactnativeincidentgopackage;

import androidx.annotation.NonNull;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import com.reactnativeincidentgopackage.network.NetworkModule;
import com.reactnativeincidentgopackage.worker.CounterModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class IncidentGoPackagePackage implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new IncidentGoPackageModule(reactContext));
        modules.add(new CounterModule(reactContext));
        modules.add(new NetworkModule(reactContext));
        return modules;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
