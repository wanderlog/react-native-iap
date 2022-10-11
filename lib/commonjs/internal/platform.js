"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storekitHybridMode = exports.storekit2Mode = exports.storekit1Mode = exports.setIosNativeModule = exports.setAndroidNativeModule = exports.isStorekit2Avaiable = exports.isPlay = exports.isIosStorekit2 = exports.isIos = exports.isAndroid = exports.isAmazon = exports.getNativeModule = exports.getIosModule = exports.getAndroidModuleType = exports.getAndroidModule = exports.checkNativeAndroidAvailable = void 0;

var _reactNative = require("react-native");

var _purchaseError = require("../purchaseError");

const {
  RNIapIos,
  RNIapIosSk2,
  RNIapModule,
  RNIapAmazonModule
} = _reactNative.NativeModules;
const isIos = _reactNative.Platform.OS === 'ios';
exports.isIos = isIos;
const isAndroid = _reactNative.Platform.OS === 'android';
exports.isAndroid = isAndroid;
const isAmazon = isAndroid && !!RNIapAmazonModule;
exports.isAmazon = isAmazon;
const isPlay = isAndroid && !!RNIapModule; // Android

exports.isPlay = isPlay;
let androidNativeModule = RNIapModule;

const setAndroidNativeModule = nativeModule => {
  androidNativeModule = nativeModule;
};

exports.setAndroidNativeModule = setAndroidNativeModule;

const checkNativeAndroidAvailable = () => {
  if (!RNIapModule && !RNIapAmazonModule) {
    throw new Error(_purchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
  }
};
/**
 * If changing the typings of `getAndroidModule` to accommodate extra modules,
 * make sure to update `getAndroidModuleType`.
 */


exports.checkNativeAndroidAvailable = checkNativeAndroidAvailable;

const getAndroidModule = () => {
  checkNativeAndroidAvailable();
  return androidNativeModule ? androidNativeModule : RNIapModule ? RNIapModule : RNIapAmazonModule;
};
/**
 * Returns whether the Android in-app-purchase code is using the Android,
 * Amazon, or another store.
 */


exports.getAndroidModule = getAndroidModule;

const getAndroidModuleType = () => {
  const module = getAndroidModule();

  switch (module) {
    case RNIapModule:
      return 'android';

    case RNIapAmazonModule:
      return 'amazon';

    default:
      return null;
  }
};

exports.getAndroidModuleType = getAndroidModuleType;

const getNativeModule = () => {
  return isAndroid ? getAndroidModule() : getIosModule();
}; // iOS


exports.getNativeModule = getNativeModule;
let iosNativeModule = RNIapIos;

const isStorekit2Avaiable = () => isIos && (RNIapIosSk2 === null || RNIapIosSk2 === void 0 ? void 0 : RNIapIosSk2.isAvailable()) === 1;

exports.isStorekit2Avaiable = isStorekit2Avaiable;

const isIosStorekit2 = () => isIos && !!iosNativeModule && iosNativeModule === RNIapIosSk2 && isStorekit2Avaiable();

exports.isIosStorekit2 = isIosStorekit2;

const setIosNativeModule = nativeModule => {
  iosNativeModule = nativeModule;
};

exports.setIosNativeModule = setIosNativeModule;

const storekit2Mode = () => {
  iosNativeModule = RNIapIosSk2;

  if (isStorekit2Avaiable()) {
    RNIapIos.disable();
    return true;
  }

  if (isIos) {
    console.warn('Storekit 2 is not available on this device');
    return false;
  }

  return true;
};

exports.storekit2Mode = storekit2Mode;

const storekit1Mode = () => {
  iosNativeModule = RNIapIos;

  if (isStorekit2Avaiable()) {
    RNIapIosSk2.disable();
    return true;
  }

  return false;
};

exports.storekit1Mode = storekit1Mode;

const storekitHybridMode = () => {
  if (isStorekit2Avaiable()) {
    iosNativeModule = RNIapIosSk2;
    console.info('Using Storekit 2');
    return true;
  } else {
    iosNativeModule = RNIapIos;
    console.info('Using Storekit 1');
    return true;
  }
};

exports.storekitHybridMode = storekitHybridMode;

const checkNativeIOSAvailable = () => {
  if (!RNIapIos && !isStorekit2Avaiable()) {
    throw new Error(_purchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
  }
};

const getIosModule = () => {
  checkNativeIOSAvailable();
  return iosNativeModule ? iosNativeModule : RNIapIosSk2 ? RNIapIosSk2 : RNIapIos;
};

exports.getIosModule = getIosModule;
//# sourceMappingURL=platform.js.map