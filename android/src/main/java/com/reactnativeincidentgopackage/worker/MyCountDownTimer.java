package com.reactnativeincidentgopackage.worker;

import java.util.Timer;
import java.util.TimerTask;

public class MyCountDownTimer {
    private long millisInFuture;
    private long countDownInterval;
    private long remainingTime;
    private Timer timer;
    private TimerTask timerTask;
    private boolean isRunning;

    public MyCountDownTimer(long millisInFuture, long countDownInterval) {
        this.millisInFuture = millisInFuture;
        this.countDownInterval = countDownInterval;
        this.remainingTime = millisInFuture;
        this.isRunning = false;
    }

    public void start(OnTickListener onTickListener, OnFinishListener onFinishListener) {
        if (!isRunning) {
            timer = new Timer();
            timerTask = new TimerTask() {
                @Override
                public void run() {
                    remainingTime -= countDownInterval;
                    if (remainingTime <= 0) {
                        onFinishListener.onFinish();
                        onTickListener.onTick(remainingTime);
                        stop();
                    } else {
                        onTickListener.onTick(remainingTime);
                    }
                }
            };
            timer.scheduleAtFixedRate(timerTask, 0, countDownInterval);
            isRunning = true;
        }
    }

    public void stop() {
        if (timer != null) {
            timer.cancel();
            timer.purge();
            timerTask.cancel();
            isRunning = false;
        }
    }

    public interface OnTickListener {
        void onTick(long millisUntilFinished);
    }

    public interface OnFinishListener {
        void onFinish();
    }

/*    public static void main(String[] args) {
        long millisInFuture = 60000L; // 60 seconds
        long countDownInterval = 1000L; // 1 second

        MyCountDownTimer countDownTimer = new MyCountDownTimer(millisInFuture, countDownInterval);
        countDownTimer.start(millisUntilFinished ->
                        System.out.println("Milliseconds remaining: " + millisUntilFinished),
                () -> System.out.println("Countdown finished!")
        );
    }*/
}