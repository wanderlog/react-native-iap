import { NativeModules } from 'react-native';
import { getIosModule, isIosStorekit2 } from '../internal';
const {
  RNIapIos
} = NativeModules;

/**
 * Get the current receipt base64 encoded in IOS.
 * @param {forceRefresh?:boolean}
 * @returns {Promise<ProductPurchase[]>}
 */
export const getPendingPurchasesIOS = async () => getIosModule().getPendingTransactions();
/**
 * Get the current receipt base64 encoded in IOS.
 * @param {forceRefresh?:boolean}
 * @returns {Promise<string>}
 */

export const getReceiptIOS = async _ref => {
  let {
    forceRefresh
  } = _ref;

  if (!isIosStorekit2()) {
    return RNIapIos.requestReceipt(forceRefresh ?? false);
  } else {
    return Promise.reject('Only available on Sk1');
  }
};
/**
 * Launches a modal to register the redeem offer code in IOS.
 * @returns {Promise<null>}
 */

export const presentCodeRedemptionSheetIOS = async () => getIosModule().presentCodeRedemptionSheet();
/**
 * Should Add Store Payment (iOS only)
 *   Indicates the the App Store purchase should continue from the app instead of the App Store.
 * @returns {Promise<Product | null>} promoted product
 */

export const getPromotedProductIOS = () => {
  if (!isIosStorekit2()) {
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

export const buyPromotedProductIOS = () => getIosModule().buyPromotedProduct();

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


export const validateReceiptIos = async _ref2 => {
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

export const clearTransactionIOS = () => getIosModule().clearTransaction();
/**
 * Clear valid Products (iOS only)
 *   Remove all products which are validated by Apple server.
 * @returns {void}
 */

export const clearProductsIOS = () => getIosModule().clearProducts();
//# sourceMappingURL=ios.js.map