import { SubscriptionPlatform } from '.';
export const productSk2Map = _ref => {
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
export const subscriptionSk2Map = _ref2 => {
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
    platform: SubscriptionPlatform.ios,
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
export const transactionSk2Map = _ref3 => {
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

export const offerSk2Map = offer => {
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
//# sourceMappingURL=appleSk2.js.map