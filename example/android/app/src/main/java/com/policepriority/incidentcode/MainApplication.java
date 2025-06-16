package com.policepriority.incidentcode;

import android.app.Application;
import android.bluetooth.BluetoothManager;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import android.util.Log;

import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.facebook.react.BuildConfig;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.google.firebase.FirebaseApp;
import com.google.firebase.crashlytics.FirebaseCrashlytics;
import com.policepriority.incidentcode.bluetooth.BlueToothPackage;
import com.policepriority.incidentcode.newarchitecture.MainApplicationReactNativeHost;
import com.swmansion.rnscreens.RNScreensPackage;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {


  //Preference Constants
  public static final String PREFERENCEVARIABLE = "valertpref";
  /** The device tracker alert tone status. */
  //Device tracker constants.
  static public String DEVICE_TRACKER_ALERT_TONE_STATUS = "device_track_alert_tone"; // device tracker alert tone
  /** The device tracker vibration status. */
  static public String DEVICE_TRACKER_VIBRATION_STATUS = "device_track_vibration";  // device tracker vibration status

  /** The Constant BLUETOOTHLESERVICE_NOTIFY_ID. */
  public static final int BLUETOOTHLESERVICE_NOTIFY_ID = 12007;
  // Notification ID Constants.
  public static final int BLUETOOTH_NOTIFY_ID = 12001;
  /** The Constant LOCATION_NOTIFY_ID. */
  public static final int LOCATION_NOTIFY_ID = 12002;
  /** The Constant DATA_CONNECTION_NOTIFY_ID. */
  public static final int DATA_CONNECTION_NOTIFY_ID = 12004;
  /** The Constant ALERTINPROGRESS_NOTIFY_ID. */
  public static final int ALERTINPROGRESS_NOTIFY_ID = 12005;
  /** The Constant FALL_DETECT_NOTIFY_ID. */
  public static final int FALL_DETECT_NOTIFY_ID = 12006;
  /** The notification id. */
  static public String NOTIFICATION_ID = "notification_id";
  /** The congratulation. */
  static public String CONGRATULATION = "congratulation";
  /** The phonesilentcbx. */
  static public String PHONESILENTCBX = "phonesilentcbx";   // V.ALRT Application silent check box
  /** The is device track in progress. */
  static public boolean isDeviceTrackInProgress= false;
  /** The Constant BLUETOOTH_CONNECT_DISCONNECT_NOTIFY_ID. */
  public static final int BLUETOOTH_CONNECT_DISCONNECT_NOTIFY_ID = 12009;
  /** The connected. */
  // Connection status constants
  static public String CONNECTED = "2";
  /** The connecting. */
  static public String CONNECTING = "1";
  /** The disconnected. */
  static public String DISCONNECTED = "0";
  /** The devicesilentcbx. */
  static public String DEVICESILENTCBX = "devicesilentcbx"; //  V.ALRT device silent check box
  // Blue tooth LE scanner flag.
//    static public boolean isScanActivityRunning= false;
  // Alert in progress flag.
  static public boolean isAlertInProgress= false;
  /** The is fall detect in progress. */
  static public boolean isFallDetectInProgress= false;
  /** The tag. */
  public static final String TAG = "IncidentCo";
  //V.LART Switch on /off
  static public String VALRT_SWITCH_OFF = "valrt_switch_off";
  /** The is forget me clicked. */
  static public boolean isForgetMeClicked = false;
  /** Beacon Address **/
  static public String BEACON_ADDRESS = "BEACON_ADDRESS"; //  V.ALRT device silent check box

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          packages.add(new BlueToothPackage());
          packages.add(new BatteryOptimizationPackage());
//          packages.add(new ReanimatedPackage());
//          packages.add(new RNGestureHandlerPackage());
//          packages.add(new RNScreensPackage());
//          packages.add(new SafeAreaContextPackage());
//          packages.add(new ReactNativePushNotificationPackage());

          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };



  private final ReactNativeHost mNewArchitectureNativeHost =
      new MainApplicationReactNativeHost(this);

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
//    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
//      return mNewArchitectureNativeHost;
//    } else {
//      return mReactNativeHost;
//    }
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Log.d("myTag", "This is my message");
    FirebaseApp.initializeApp(this);
    // If you opted-in for the New Architecture, we enable the TurboModule system
//    ReactFeatureFlags.useTurboModules = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    SoLoader.init(this, /* native exopackage */ false);
    FirebaseCrashlytics.getInstance();
//    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.policepriority.incidentcode.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }

  /**
   * To store the string values in the preference.
   *
   * @param context the context
   * @param key the key
   * @param value the value
   */
  public static void setPrefString(Context context,String key, String value) {
    SharedPreferences sp =  context.getSharedPreferences(PREFERENCEVARIABLE, MODE_PRIVATE);
    sp.edit().putString(key, value).commit();
  }

  /**
   * To retrieve the string values in the preference using key.
   *
   * @param context the context
   * @param key the key
   * @return String value of the corresponding key passed as parameter.
   */
  public static String getPrefString(Context context,String key) {
    SharedPreferences sp =  context.getSharedPreferences(PREFERENCEVARIABLE, MODE_PRIVATE);
    return sp.getString(key, "");
  }

  /**
   * To retrieve the boolean values in the preference using key.
   *
   * @param context the context
   * @param key the key
   * @return boolean value of the corresponding key passed as parameter.
   */
  public static boolean getPrefBoolean(Context context,String key) {
    SharedPreferences sp =  context.getSharedPreferences(PREFERENCEVARIABLE, MODE_PRIVATE);
    return sp.getBoolean(key, false);
  }

  /**
   * To get the Blue tooth Manager instance.
   *
   * @param context the context
   * @return BluetoothManager.
   */
  public static BluetoothManager getManager(Context context) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR2) {
      return (BluetoothManager) context.getSystemService(Context.BLUETOOTH_SERVICE);
    }
    return null;
  }
}
