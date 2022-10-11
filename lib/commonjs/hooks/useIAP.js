"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIAP = void 0;

var _react = require("react");

var _iap = require("../iap");

var _withIAPContext = require("./withIAPContext");

const useIAP = () => {
  const {
    connected,
    products,
    promotedProductsIOS,
    subscriptions,
    purchaseHistory,
    availablePurchases,
    currentPurchase,
    currentPurchaseError,
    initConnectionError,
    setProducts,
    setSubscriptions,
    setAvailablePurchases,
    setPurchaseHistory,
    setCurrentPurchase,
    setCurrentPurchaseError
  } = (0, _withIAPContext.useIAPContext)();
  const getProducts = (0, _react.useCallback)(async _ref => {
    let {
      skus
    } = _ref;
    setProducts(await (0, _iap.getProducts)({
      skus
    }));
  }, [setProducts]);
  const getSubscriptions = (0, _react.useCallback)(async _ref2 => {
    let {
      skus
    } = _ref2;
    setSubscriptions(await (0, _iap.getSubscriptions)({
      skus
    }));
  }, [setSubscriptions]);
  const getAvailablePurchases = (0, _react.useCallback)(async () => {
    setAvailablePurchases(await (0, _iap.getAvailablePurchases)());
  }, [setAvailablePurchases]);
  const getPurchaseHistory = (0, _react.useCallback)(async () => {
    setPurchaseHistory(await (0, _iap.getPurchaseHistory)());
  }, [setPurchaseHistory]);
  const finishTransaction = (0, _react.useCallback)(async _ref3 => {
    let {
      purchase,
      isConsumable,
      developerPayloadAndroid
    } = _ref3;

    try {
      return await (0, _iap.finishTransaction)({
        purchase,
        isConsumable,
        developerPayloadAndroid
      });
    } catch (err) {
      throw err;
    } finally {
      if (purchase.productId === (currentPurchase === null || currentPurchase === void 0 ? void 0 : currentPurchase.productId)) {
        setCurrentPurchase(undefined);
      }

      if (purchase.productId === (currentPurchaseError === null || currentPurchaseError === void 0 ? void 0 : currentPurchaseError.productId)) {
        setCurrentPurchaseError(undefined);
      }
    }
  }, [currentPurchase === null || currentPurchase === void 0 ? void 0 : currentPurchase.productId, currentPurchaseError === null || currentPurchaseError === void 0 ? void 0 : currentPurchaseError.productId, setCurrentPurchase, setCurrentPurchaseError]);
  return {
    connected,
    products,
    promotedProductsIOS,
    subscriptions,
    purchaseHistory,
    availablePurchases,
    currentPurchase,
    currentPurchaseError,
    initConnectionError,
    finishTransaction,
    getProducts,
    getSubscriptions,
    getAvailablePurchases,
    getPurchaseHistory,
    requestPurchase: _iap.requestPurchase,
    requestSubscription: _iap.requestSubscription
  };
};

exports.useIAP = useIAP;
//# sourceMappingURL=useIAP.js.map