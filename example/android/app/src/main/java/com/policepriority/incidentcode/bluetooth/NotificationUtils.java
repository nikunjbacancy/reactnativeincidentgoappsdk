package com.policepriority.incidentcode.bluetooth;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.provider.Settings;

import androidx.core.app.NotificationCompat;

import com.policepriority.incidentcode.bluetooth.utils.LogUtils;
import com.policepriority.incidentcode.MainActivity;
import com.policepriority.incidentcode.MainApplication;
import com.policepriority.incidentcode.R;

public class NotificationUtils
{
    /** The m notification manager. */
    static NotificationManager mNotificationManager = null;
    /** The notify builder. */
    static NotificationCompat.Builder notifyBuilder = null;
    /** The other notify builder. */
    static NotificationCompat.Builder otherNotifyBuilder = null;
    /** The notification. */
    static Notification notification = null;
    /** The other notification. */
    static Notification otherNotification = null;
    private static final String CHANNEL_ID = "IncidentCo";

    /**
     * To create the other notification.
     *
     * @param context the context
     * @param message the message
     * @param notifyId the notify id
     */
    public static void postNotification(Context context, String message, int notifyId) {

        LogUtils.LOGI(MainApplication.TAG, "******************");
        LogUtils.LOGI(MainApplication.TAG, "MESSAGE:" + message);
        LogUtils.LOGI(MainApplication.TAG, "******************");

        Intent resultIntent = null;

        /* Invoking the default notification service */
        otherNotifyBuilder = new NotificationCompat.Builder(context,CHANNEL_ID);
        otherNotifyBuilder.setContentTitle(context.getString(R.string.app_name)).setSmallIcon(
                R.mipmap.ic_notification);
        otherNotifyBuilder.setContentText(message);

        // 32 is the maximum length of character in single line of notification.
        if(message.length()>42)
            otherNotifyBuilder .setStyle(new NotificationCompat.BigTextStyle().bigText(message));
        otherNotifyBuilder.setAutoCancel(true);
        /* Creates an explicit intent for an Activity in your app */

        if (notifyId == MainApplication.BLUETOOTH_NOTIFY_ID) {
            resultIntent = new Intent(Settings.ACTION_BLUETOOTH_SETTINGS);
        } else if (notifyId == MainApplication.LOCATION_NOTIFY_ID) {
            resultIntent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
        } else if (notifyId == MainApplication.DATA_CONNECTION_NOTIFY_ID) {
            resultIntent = new Intent(Settings.ACTION_SETTINGS);
        } else if (notifyId == MainApplication.ALERTINPROGRESS_NOTIFY_ID) {
//            resultIntent = new Intent(context, AlertProgressActivity.class);
        } else if (notifyId == MainApplication.FALL_DETECT_NOTIFY_ID) {
//            resultIntent = new Intent(context, FallDetectActivity.class);
        } else{
            resultIntent = new Intent(context, MainActivity.class);
        }
        resultIntent.putExtra(MainApplication.NOTIFICATION_ID, notifyId);
        resultIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        int notificationCode = (int) System.currentTimeMillis();
        PendingIntent resultPendingIntent = PendingIntent.getActivity(context, notificationCode, resultIntent,
                PendingIntent.FLAG_UPDATE_CURRENT);
        if(MainApplication.getPrefBoolean(context,MainApplication.CONGRATULATION) == true){
            otherNotifyBuilder.setContentIntent(resultPendingIntent);
        }
        otherNotification = otherNotifyBuilder.build();
        otherNotification.defaults = 0;
        if (!MainApplication.getPrefBoolean(context, MainApplication.PHONESILENTCBX)) {
            otherNotification.defaults = Notification.DEFAULT_SOUND;
        }
        otherNotification.flags |= Notification.FLAG_SHOW_LIGHTS;

        mNotificationManager = (NotificationManager) context
                .getSystemService(Context.NOTIFICATION_SERVICE);
        /* Update the existing notification using same notification ID */
        mNotificationManager.notify(notifyId, otherNotification);
    }

    /**
     * To create persistence notification status.
     *
     * @param context of the class
     * @param message to show in notification
     * @return the notification
     */
    public static Notification getNotification(Context context, String message) {
        /* Invoking the default notification service */
        notifyBuilder =new NotificationCompat.Builder(context, CHANNEL_ID);

        notifyBuilder.setContentTitle(context.getString(R.string.app_name))
                .setSmallIcon(R.mipmap.ic_notification);
        notifyBuilder.setContentText(message);
        notifyBuilder.setAutoCancel(false);
        notifyBuilder.setPriority(Notification.PRIORITY_MIN);
        // 32 is the maximum length of character in single line of notification.
        if(message.length()>42)
            notifyBuilder .setStyle(new NotificationCompat.BigTextStyle().bigText(message));
        /* Creates an explicit intent for an Activity in your app */
        Intent resultIntent = new Intent(context, MainActivity.class);
        resultIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        int notificationCode = (int) System.currentTimeMillis();
        PendingIntent resultPendingIntent = PendingIntent.getActivity(context, notificationCode, resultIntent,
                PendingIntent.FLAG_UPDATE_CURRENT);
        if (MainApplication.getPrefBoolean(context, MainApplication.CONGRATULATION) == true) {
            notifyBuilder.setContentIntent(resultPendingIntent);
        }
        notification = notifyBuilder.build();
        return notification;
    }

    public static void createNotificationChannel(Context mContext) {
        // Create the NotificationChannel, but only on API 26+ because
        // the NotificationChannel class is new and not in the support library
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            int importance = NotificationManager.IMPORTANCE_DEFAULT;
            NotificationChannel channel = new NotificationChannel(CHANNEL_ID, "IncidentGo", importance);
            channel.setDescription("CHANEL DESCRIPTION");
            NotificationManager notificationManager = mContext.getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
    }

    public static boolean isNotificationVisible(Context mContext,int notifyId) {
        Intent notificationIntent = new Intent(mContext, MainActivity.class);
        PendingIntent test = PendingIntent.getActivity(mContext, notifyId, notificationIntent, PendingIntent.FLAG_NO_CREATE);
        return test != null;
    }
}
