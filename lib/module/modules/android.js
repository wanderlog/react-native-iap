import { Linking, NativeModules } from 'react-native';
import { checkNativeAndroidAvailable, getAndroidModule } from '../internal';
import { InstallSourceAndroid } from '../types';
const {
  RNIapModule
} = NativeModules;
export const AndroidModule = NativeModules.RNIapModule;
export const getInstallSourceAndroid = () => {
  return RNIapModule ? InstallSourceAndroid.GOOGLE_PLAY : InstallSourceAndroid.AMAZON;
};
/**
 * Deep link to subscriptions screen on Android. No-op on iOS.
 * @param {string} sku The product's SKU (on Android)
 * @returns {Promise<void>}
 */

export const deepLinkToSubscriptionsAndroid = async _ref => {
  let {
    sku
  } = _ref;
  checkNativeAndroidAvailable();
  return Linking.openURL(`https://play.google.com/store/account/subscriptions?package=${await RNIapModule.getPackageName()}&sku=${sku}`);
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

export const validateReceiptAndroid = async _ref2 => {
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

export const acknowledgePurchaseAndroid = _ref3 => {
  let {
    token,
    developerPayload
  } = _ref3;
  return getAndroidModule().acknowledgePurchase(token, developerPayload);
};
//# sourceMappingURL=android.js.map