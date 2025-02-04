# Expo Linking.getInitialURL() returns null on Android

This repository demonstrates a bug where `Linking.getInitialURL()` in Expo's `Linking` API inconsistently returns `null` on Android devices, even when the app is launched via a deep link. The issue is particularly pronounced when the app launch context isn't directly from the URL itself (like from a notification).

## Steps to Reproduce (May be unreliable)

1. Clone this repository.
2. Run the project on an Android device/emulator using Expo Go.
3. Attempt to launch the app through a deep link (modify the deep link URL in the code if necessary).
4. Observe that `Linking.getInitialURL()` may return `null` in certain instances.

## Potential Causes

The problem appears related to the Android system's handling of intent extras and how Expo interprets them during app launch. The timing of when `getInitialURL` is called might play a role.