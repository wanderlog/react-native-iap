"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transactionSk2Map = exports.subscriptionSk2Map = exports.productSk2Map = exports.offerSk2Map = void 0;

var _ = require(".");

const productSk2Map = _ref => {
  let {
    id,
    description,
    displayName,
    price,
    displayPrice
  } = _ref;
  const prod = {
    title: displayName,
    productId: String(id),
    description,
    type: 'iap',
    price: String(price),
    localizedPrice: displayPrice,
    currency: '' // Not avaiable on new API, use localizedPrice instead

  };
  return prod;
};

exports.productSk2Map = productSk2Map;

const subscriptionSk2Map = _ref2 => {
  var _subscription$subscri, _subscription$subscri2;

  let {
    id,
    description,
    displayName,
    price,
    displayPrice,
    subscription
  } = _ref2;
  const prod = {
    platform: _.SubscriptionPlatform.ios,
    title: displayName,
    productId: String(id),
    description,
    type: 'subs',
    price: String(price),
    localizedPrice: displayPrice,
    currency: '',
    // Not avaiable on new API, use localizedPrice instead
    subscriptionPeriodNumberIOS: `${subscription === null || subscription === void 0 ? void 0 : (_subscription$subscri = subscription.subscriptionPeriod) === null || _subscription$subscri === void 0 ? void 0 : _subscription$subscri.value}`,
    subscriptionPeriodUnitIOS: subscription === null || subscription === void 0 ? void 0 : (_subscription$subscri2 = subscription.subscriptionPeriod) === null || _subscription$subscri2 === void 0 ? void 0 : _subscription$subscri2.unit.toUpperCase()
  };
  return prod;
};

exports.subscriptionSk2Map = subscriptionSk2Map;

const transactionSk2Map = _ref3 => {
  let {
    id,
    originalPurchaseDate,
    productID,
    purchaseDate,
    purchasedQuantity
  } = _ref3;
  const purchase = {
    productId: productID,
    transactionId: String(id),
    transactionDate: purchaseDate,
    //??
    transactionReceipt: '',
    // Not available
    purchaseToken: '',
    //Not avaiable
    quantityIOS: purchasedQuantity,
    originalTransactionDateIOS: String(originalPurchaseDate),
    originalTransactionIdentifierIOS: String(id) // ??

  };
  return purchase;
};
/**
 * Payment discount interface @see https://developer.apple.com/documentation/storekit/skpaymentdiscount?language=objc
 */


exports.transactionSk2Map = transactionSk2Map;

const offerSk2Map = offer => {
  if (!offer) {
    return undefined;
  }

  return {
    offerID: offer.identifier,
    keyID: offer.keyIdentifier,
    nonce: offer.nonce,
    signature: offer.signature,
    timestamp: offer.timestamp.toString()
  };
};

exports.offerSk2Map = offerSk2Map;
//# sourceMappingURL=appleSk2.js.map