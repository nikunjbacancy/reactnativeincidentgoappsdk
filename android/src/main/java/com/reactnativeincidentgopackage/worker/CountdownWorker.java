package com.reactnativeincidentgopackage.worker;

// CountdownWorker.java
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.core.content.ContextCompat;
import androidx.work.Worker;
import androidx.work.WorkerParameters;


public class CountdownWorker extends Worker {

    public CountdownWorker(@NonNull Context context, @NonNull WorkerParameters workerParams) {
        super(context, workerParams);
    }

    @NonNull
    @Override
    public Result doWork() {
        Long value = getInputData().getLong("MAIN_TIMER_DURATION", 0);
        Intent intent = new Intent(getApplicationContext(), CountdownService.class);
        intent.putExtra("TIMER_DURATION", value);
//        getApplicationContext().startService(intent);
        ContextCompat.startForegroundService( getApplicationContext(), intent);

        return Result.success();
    }

    @Override
    public void onStopped() {
        super.onStopped();
        Log.e("TAG", "onStopped: called" );
    }
}

