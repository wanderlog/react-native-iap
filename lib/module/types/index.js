export let ProrationModesAndroid;

(function (ProrationModesAndroid) {
  ProrationModesAndroid[ProrationModesAndroid["IMMEDIATE_WITH_TIME_PRORATION"] = 1] = "IMMEDIATE_WITH_TIME_PRORATION";
  ProrationModesAndroid[ProrationModesAndroid["IMMEDIATE_AND_CHARGE_PRORATED_PRICE"] = 2] = "IMMEDIATE_AND_CHARGE_PRORATED_PRICE";
  ProrationModesAndroid[ProrationModesAndroid["IMMEDIATE_WITHOUT_PRORATION"] = 3] = "IMMEDIATE_WITHOUT_PRORATION";
  ProrationModesAndroid[ProrationModesAndroid["DEFERRED"] = 4] = "DEFERRED";
  ProrationModesAndroid[ProrationModesAndroid["IMMEDIATE_AND_CHARGE_FULL_PRICE"] = 5] = "IMMEDIATE_AND_CHARGE_FULL_PRICE";
  ProrationModesAndroid[ProrationModesAndroid["UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY"] = 0] = "UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY";
})(ProrationModesAndroid || (ProrationModesAndroid = {}));

export let PurchaseStateAndroid;

(function (PurchaseStateAndroid) {
  PurchaseStateAndroid[PurchaseStateAndroid["UNSPECIFIED_STATE"] = 0] = "UNSPECIFIED_STATE";
  PurchaseStateAndroid[PurchaseStateAndroid["PURCHASED"] = 1] = "PURCHASED";
  PurchaseStateAndroid[PurchaseStateAndroid["PENDING"] = 2] = "PENDING";
})(PurchaseStateAndroid || (PurchaseStateAndroid = {}));

export const PROMOTED_PRODUCT = 'iap-promoted-product';
export let InstallSourceAndroid;

(function (InstallSourceAndroid) {
  InstallSourceAndroid[InstallSourceAndroid["NOT_SET"] = 0] = "NOT_SET";
  InstallSourceAndroid[InstallSourceAndroid["GOOGLE_PLAY"] = 1] = "GOOGLE_PLAY";
  InstallSourceAndroid[InstallSourceAndroid["AMAZON"] = 2] = "AMAZON";
})(InstallSourceAndroid || (InstallSourceAndroid = {}));

export let ProductType;

(function (ProductType) {
  ProductType["subs"] = "subs";
  ProductType["sub"] = "sub";
  ProductType["inapp"] = "inapp";
  ProductType["iap"] = "iap";
})(ProductType || (ProductType = {}));

/**
 * Can be used to distinguish the different platforms' subscription information
 */
export let SubscriptionPlatform;
/** Android Billing v5 type */

(function (SubscriptionPlatform) {
  SubscriptionPlatform["android"] = "android";
  SubscriptionPlatform["amazon"] = "amazon";
  SubscriptionPlatform["ios"] = "ios";
})(SubscriptionPlatform || (SubscriptionPlatform = {}));
//# sourceMappingURL=index.js.map