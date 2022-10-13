"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateReceiptIos = exports.presentCodeRedemptionSheetIOS = exports.getReceiptIOS = exports.getPromotedProductIOS = exports.getPendingPurchasesIOS = exports.clearTransactionIOS = exports.clearProductsIOS = exports.buyPromotedProductIOS = void 0;

var _reactNative = require("react-native");

var _internal = require("../internal");

const {
  RNIapIos
} = _reactNative.NativeModules;

/**
 * Get the current receipt base64 encoded in IOS.
 * @param {forceRefresh?:boolean}
 * @returns {Promise<ProductPurchase[]>}
 */
const getPendingPurchasesIOS = async () => (0, _internal.getIosModule)().getPendingTransactions();
/**
 * Get the current receipt base64 encoded in IOS.
 * @param {forceRefresh?:boolean}
 * @returns {Promise<string>}
 */


exports.getPendingPurchasesIOS = getPendingPurchasesIOS;

const getReceiptIOS = async _ref => {
  let {
    forceRefresh
  } = _ref;

  if (!(0, _internal.isIosStorekit2)()) {
    return RNIapIos.requestReceipt(forceRefresh ?? false);
  } else {
    return Promise.reject('Only available on Sk1');
  }
};
/**
 * Launches a modal to register the redeem offer code in IOS.
 * @returns {Promise<null>}
 */


exports.getReceiptIOS = getReceiptIOS;

const presentCodeRedemptionSheetIOS = async () => (0, _internal.getIosModule)().presentCodeRedemptionSheet();
/**
 * Should Add Store Payment (iOS only)
 *   Indicates the the App Store purchase should continue from the app instead of the App Store.
 * @returns {Promise<Product | null>} promoted product
 */


exports.presentCodeRedemptionSheetIOS = presentCodeRedemptionSheetIOS;

const getPromotedProductIOS = () => {
  if (!(0, _internal.isIosStorekit2)()) {
    return RNIapIos.promotedProduct();
  } else {
    return Promise.reject('Only available on Sk1');
  }
};
/**
 * Buy the currently selected promoted product (iOS only)
 *   Initiates the payment process for a promoted product. Should only be called in response to the `iap-promoted-product` event.
 * @returns {Promise<void>}
 */


exports.getPromotedProductIOS = getPromotedProductIOS;

const buyPromotedProductIOS = () => (0, _internal.getIosModule)().buyPromotedProduct();

exports.buyPromotedProductIOS = buyPromotedProductIOS;

const fetchJsonOrThrow = async (url, receiptBody) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(receiptBody)
  });

  if (!response.ok) {
    throw Object.assign(new Error(response.statusText), {
      statusCode: response.status
    });
  }

  return response.json();
};

const TEST_RECEIPT = 21007;

const requestAgnosticReceiptValidationIos = async receiptBody => {
  const response = await fetchJsonOrThrow('https://buy.itunes.apple.com/verifyReceipt', receiptBody); // Best practice is to check for test receipt and check sandbox instead
  // https://developer.apple.com/documentation/appstorereceipts/verifyreceipt

  if (response && response.status === TEST_RECEIPT) {
    const testResponse = await fetchJsonOrThrow('https://sandbox.itunes.apple.com/verifyReceipt', receiptBody);
    return testResponse;
  }

  return response;
};
/**
 * Validate receipt for iOS.
 * @param {object} receiptBody the receipt body to send to apple server.
 * @param {boolean} isTest whether this is in test environment which is sandbox.
 * @returns {Promise<Apple.ReceiptValidationResponse | false>}
 */


const validateReceiptIos = async _ref2 => {
  let {
    receiptBody,
    isTest
  } = _ref2;

  if (isTest == null) {
    return await requestAgnosticReceiptValidationIos(receiptBody);
  }

  const url = isTest ? 'https://sandbox.itunes.apple.com/verifyReceipt' : 'https://buy.itunes.apple.com/verifyReceipt';
  const response = await fetchJsonOrThrow(url, receiptBody);
  return response;
};
/**
 * Clear Transaction (iOS only)
 *   Finish remaining transactions. Related to issue #257 and #801
 *     link : https://github.com/dooboolab/react-native-iap/issues/257
 *            https://github.com/dooboolab/react-native-iap/issues/801
 * @returns {Promise<void>}
 */


exports.validateReceiptIos = validateReceiptIos;

const clearTransactionIOS = () => (0, _internal.getIosModule)().clearTransaction();
/**
 * Clear valid Products (iOS only)
 *   Remove all products which are validated by Apple server.
 * @returns {void}
 */


exports.clearTransactionIOS = clearTransactionIOS;

const clearProductsIOS = () => (0, _internal.getIosModule)().clearProducts();

exports.clearProductsIOS = clearProductsIOS;
//# sourceMappingURL=ios.js.map