package com.reactnativeincidentgopackage.worker;


// CountdownService.java

import android.Manifest;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.CountDownTimer;
import android.os.IBinder;
import android.util.Log;

import androidx.core.app.ActivityCompat;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;
import androidx.core.content.ContextCompat;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
import androidx.work.WorkManager;

import com.reactnativeincidentgopackage.R;

public class CountdownService extends Service {

    private static final int NOTIFICATION_ID = 1;
//    private CountDownTimer countDownTimer;
    public static long remainingTime; // Store remaining time when paused

    private MyCountDownTimer myCountDownTimer;


    public static final String ACTION_STOP_TIMER = "ACTION_STOP_TIMER";
    @Override
    public void onCreate() {
        super.onCreate();
    }

    private void broadcastTimerData(String time) {
        Intent intent = new Intent("countdown-timer");
        intent.putExtra("remaining_time", time);
        LocalBroadcastManager.getInstance(this).sendBroadcast(intent);
    }

    private String formatTime(long millis) {
        int seconds = (int) (millis / 1000) % 60;
        int minutes = (int) ((millis / (1000 * 60)) % 60);
        int hours = (int) ((millis / (1000 * 60 * 60)) % 24);

//        return String.format("%02d:%02d:%02d", hours, minutes, seconds);
        return String.format("%02d:%02d", minutes, seconds);
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent != null) {
            // Use the received value
            remainingTime = intent.getLongExtra("TIMER_DURATION", 0);
//            Log.e("Passed time", "onStartCommand: "+remainingTime );

        }
        if (remainingTime != -1)
        {
            startCounter();
            createNotificationChannel(); // Call this before creating the notification
            Notification notification = createNotification().build();
            startForeground(NOTIFICATION_ID, notification);
        }
        else {
            if (myCountDownTimer != null) {
                stopForeground(true); // Stop foreground service when the countdown is finished
                stopSelf(); // Stop the service
                WorkManager.getInstance(getApplicationContext()).cancelAllWork();
                myCountDownTimer.stop();
            }
        }
        return START_STICKY;
    }

    public void startCounter()
    {
        myCountDownTimer = new MyCountDownTimer(remainingTime, 1000);
        myCountDownTimer.start(new MyCountDownTimer.OnTickListener() {
            @Override
            public void onTick(long millisUntilFinished) {
                updateNotification(formatTime(millisUntilFinished));
                broadcastTimerData(String.valueOf(millisUntilFinished));
            }
        }, new MyCountDownTimer.OnFinishListener() {
            @Override
            public void onFinish() {
                System.out.println("Countdown finished!");
            }
        });

    }
    public void stopCounter() {

        stopForeground(true); // Stop foreground service when the countdown is finished
        stopSelf(); // Stop the service
    }

    public void cancelCountdown() {
        if (myCountDownTimer != null) {
            Log.e("cancelCountdown", "===>");
            myCountDownTimer.stop();
            stopForeground(true);
            stopSelf();
            WorkManager.getInstance(this).cancelAllWork();
        }
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    private void updateNotification(String contentText) {
        NotificationCompat.Builder builder = createNotification()
                .setContentText(contentText);

        Notification notification = builder.build();

        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
            return;
        }
        NotificationManagerCompat.from(this).notify(NOTIFICATION_ID, notification);
    }

    private NotificationCompat.Builder createNotification() {
        Intent launchIntent = getPackageManager().getLaunchIntentForPackage(getPackageName());
        PendingIntent pendingIntent = PendingIntent.getActivity(
                this, 0, launchIntent, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        return new NotificationCompat.Builder(this, "IncidentGoWorker") // Replace with your notification channel ID
                .setSmallIcon(R.mipmap.ic_notification) // Replace with your app's notification icon
                .setContentTitle("Safety Timer")
                .setContentText("")
                .setContentIntent(pendingIntent)
                .setPriority(NotificationCompat.PRIORITY_LOW)
                .setOngoing(true); // This makes the notification persistent

        // return null;

    }

    // Create the notification channel in your service or application onCreate
    private void createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel(
                    "IncidentGoWorker",
                    "Countdown",
                    NotificationManager.IMPORTANCE_LOW
            );
            channel.setDescription("Your Channel Description");

            NotificationManager manager = getSystemService(NotificationManager.class);
            manager.createNotificationChannel(channel);
        }
    }

}

