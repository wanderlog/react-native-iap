import { useCallback } from 'react';
import { finishTransaction as iapFinishTransaction, getAvailablePurchases as iapGetAvailablePurchases, getProducts as iapGetProducts, getPurchaseHistory as iapGetPurchaseHistory, getSubscriptions as iapGetSubscriptions, requestPurchase as iapRequestPurchase, requestSubscription as iapRequestSubscription } from '../iap';
import { useIAPContext } from './withIAPContext';
export const useIAP = () => {
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
  } = useIAPContext();
  const getProducts = useCallback(async _ref => {
    let {
      skus
    } = _ref;
    setProducts(await iapGetProducts({
      skus
    }));
  }, [setProducts]);
  const getSubscriptions = useCallback(async _ref2 => {
    let {
      skus
    } = _ref2;
    setSubscriptions(await iapGetSubscriptions({
      skus
    }));
  }, [setSubscriptions]);
  const getAvailablePurchases = useCallback(async () => {
    setAvailablePurchases(await iapGetAvailablePurchases());
  }, [setAvailablePurchases]);
  const getPurchaseHistory = useCallback(async () => {
    setPurchaseHistory(await iapGetPurchaseHistory());
  }, [setPurchaseHistory]);
  const finishTransaction = useCallback(async _ref3 => {
    let {
      purchase,
      isConsumable,
      developerPayloadAndroid
    } = _ref3;

    try {
      return await iapFinishTransaction({
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
    requestPurchase: iapRequestPurchase,
    requestSubscription: iapRequestSubscription
  };
};
//# sourceMappingURL=useIAP.js.map