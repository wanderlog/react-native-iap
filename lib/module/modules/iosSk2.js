import { NativeModules } from 'react-native';
const {
  RNIapIosSk2
} = NativeModules;

/**
 * Sync state with Appstore (iOS only)
 * https://developer.apple.com/documentation/storekit/appstore/3791906-sync
 */
export const sync = () => RNIapIosSk2.sync();
/**
 *
 */

export const isEligibleForIntroOffer = groupID => RNIapIosSk2.isEligibleForIntroOffer(groupID);
/**
 *
 */

export const subscriptionStatus = sku => RNIapIosSk2.subscriptionStatus(sku);
/**
 *
 */

export const currentEntitlement = sku => RNIapIosSk2.currentEntitlement(sku);
/**
 *
 */

export const latestTransaction = sku => RNIapIosSk2.latestTransaction(sku);
//# sourceMappingURL=iosSk2.js.map