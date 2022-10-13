"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyLicense = exports.validateReceiptAmazon = exports.AmazonModule = void 0;

var _reactNative = require("react-native");

var _internal = require("../internal");

const AmazonModule = _reactNative.NativeModules.RNIapAmazonModule;
/**
 * Validate receipt for Amazon. NOTE: This method is here for debugging purposes only. Including
 * your developer secret in the binary you ship to users is potentially dangerous.
 * Use server side validation instead for your production builds
 * @param {string} developerSecret: from the Amazon developer console.
 * @param {string} userId who purchased the item.
 * @param {string} receiptId long obfuscated string returned when purchasing the item
 * @param {boolean} useSandbox Defaults to true, use sandbox environment or production.
 * @returns {Promise<object>}
 */

exports.AmazonModule = AmazonModule;

const validateReceiptAmazon = async _ref => {
  let {
    developerSecret,
    userId,
    receiptId,
    useSandbox = true
  } = _ref;
  const sandBoxUrl = useSandbox ? 'sandbox/' : '';
  const url = `https://appstore-sdk.amazon.com/${sandBoxUrl}version/1.0/verifyReceiptId/developer/${developerSecret}/user/${userId}/receiptId/${receiptId}`;
  return await (0, _internal.enhancedFetch)(url);
};
/**
 * Returns the status of verifying app's license @see AmazonLicensingStatus
 */


exports.validateReceiptAmazon = validateReceiptAmazon;

const verifyLicense = async () => AmazonModule.verifyLicense();

exports.verifyLicense = verifyLicense;
//# sourceMappingURL=amazon.js.map