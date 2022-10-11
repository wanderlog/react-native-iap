"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sync = exports.subscriptionStatus = exports.latestTransaction = exports.isEligibleForIntroOffer = exports.currentEntitlement = void 0;

var _reactNative = require("react-native");

const {
  RNIapIosSk2
} = _reactNative.NativeModules;

/**
 * Sync state with Appstore (iOS only)
 * https://developer.apple.com/documentation/storekit/appstore/3791906-sync
 */
const sync = () => RNIapIosSk2.sync();
/**
 *
 */


exports.sync = sync;

const isEligibleForIntroOffer = groupID => RNIapIosSk2.isEligibleForIntroOffer(groupID);
/**
 *
 */


exports.isEligibleForIntroOffer = isEligibleForIntroOffer;

const subscriptionStatus = sku => RNIapIosSk2.subscriptionStatus(sku);
/**
 *
 */


exports.subscriptionStatus = subscriptionStatus;

const currentEntitlement = sku => RNIapIosSk2.currentEntitlement(sku);
/**
 *
 */


exports.currentEntitlement = currentEntitlement;

const latestTransaction = sku => RNIapIosSk2.latestTransaction(sku);

exports.latestTransaction = latestTransaction;
//# sourceMappingURL=iosSk2.js.map