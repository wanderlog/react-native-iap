"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateReceiptAndroid = exports.getInstallSourceAndroid = exports.deepLinkToSubscriptionsAndroid = exports.acknowledgePurchaseAndroid = exports.AndroidModule = void 0;

var _reactNative = require("react-native");

var _internal = require("../internal");

var _types = require("../types");

const {
  RNIapModule
} = _reactNative.NativeModules;
const AndroidModule = _reactNative.NativeModules.RNIapModule;
exports.AndroidModule = AndroidModule;

const getInstallSourceAndroid = () => {
  return RNIapModule ? _types.InstallSourceAndroid.GOOGLE_PLAY : _types.InstallSourceAndroid.AMAZON;
};
/**
 * Deep link to subscriptions screen on Android. No-op on iOS.
 * @param {string} sku The product's SKU (on Android)
 * @returns {Promise<void>}
 */


exports.getInstallSourceAndroid = getInstallSourceAndroid;

const deepLinkToSubscriptionsAndroid = async _ref => {
  let {
    sku
  } = _ref;
  (0, _internal.checkNativeAndroidAvailable)();
  return _reactNative.Linking.openURL(`https://play.google.com/store/account/subscriptions?package=${await RNIapModule.getPackageName()}&sku=${sku}`);
};
/**
 * Validate receipt for Android. NOTE: This method is here for debugging purposes only. Including
 * your access token in the binary you ship to users is potentially dangerous.
 * Use server side validation instead for your production builds
 * @param {string} packageName package name of your app.
 * @param {string} productId product id for your in app product.
 * @param {string} productToken token for your purchase.
 * @param {string} accessToken accessToken from googleApis.
 * @param {boolean} isSub whether this is subscription or inapp. `true` for subscription.
 * @returns {Promise<object>}
 */


exports.deepLinkToSubscriptionsAndroid = deepLinkToSubscriptionsAndroid;

const validateReceiptAndroid = async _ref2 => {
  let {
    packageName,
    productId,
    productToken,
    accessToken,
    isSub
  } = _ref2;
  const type = isSub ? 'subscriptions' : 'products';
  const url = 'https://androidpublisher.googleapis.com/androidpublisher/v3/applications' + `/${packageName}/purchases/${type}/${productId}` + `/tokens/${productToken}?access_token=${accessToken}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw Object.assign(new Error(response.statusText), {
      statusCode: response.status
    });
  }

  return response.json();
};
/**
 * Acknowledge a product (on Android.) No-op on iOS.
 * @param {string} token The product's token (on Android)
 * @returns {Promise<PurchaseResult | void>}
 */


exports.validateReceiptAndroid = validateReceiptAndroid;

const acknowledgePurchaseAndroid = _ref3 => {
  let {
    token,
    developerPayload
  } = _ref3;
  return (0, _internal.getAndroidModule)().acknowledgePurchase(token, developerPayload);
};

exports.acknowledgePurchaseAndroid = acknowledgePurchaseAndroid;
//# sourceMappingURL=android.js.map