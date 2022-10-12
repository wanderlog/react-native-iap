"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIAPContext = useIAPContext;
exports.withIAPContext = withIAPContext;

var _react = _interopRequireWildcard(require("react"));

var _eventEmitter = require("../eventEmitter");

var _iap = require("../iap");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// @ts-ignore
const IAPContext = /*#__PURE__*/_react.default.createContext(null);

function useIAPContext() {
  const ctx = (0, _react.useContext)(IAPContext);

  if (!ctx) {
    throw new Error('You need wrap your app with withIAPContext HOC');
  }

  return ctx;
}

function withIAPContext(Component) {
  return function WrapperComponent(props) {
    const [connected, setConnected] = (0, _react.useState)(false);
    const [products, setProducts] = (0, _react.useState)([]);
    const [promotedProductsIOS, setPromotedProductsIOS] = (0, _react.useState)([]);
    const [subscriptions, setSubscriptions] = (0, _react.useState)([]);
    const [purchaseHistory, setPurchaseHistory] = (0, _react.useState)([]);
    const [availablePurchases, setAvailablePurchases] = (0, _react.useState)([]);
    const [currentPurchase, setCurrentPurchase] = (0, _react.useState)();
    const [currentTransaction, setCurrentTransaction] = (0, _react.useState)();
    const [currentPurchaseError, setCurrentPurchaseError] = (0, _react.useState)();
    const [initConnectionError, setInitConnectionError] = (0, _react.useState)();
    const context = (0, _react.useMemo)(() => ({
      connected,
      products,
      subscriptions,
      promotedProductsIOS,
      purchaseHistory,
      availablePurchases,
      currentPurchase,
      currentTransaction,
      currentPurchaseError,
      initConnectionError,
      setProducts,
      setSubscriptions,
      setPurchaseHistory,
      setAvailablePurchases,
      setCurrentPurchase,
      setCurrentPurchaseError
    }), [connected, products, subscriptions, promotedProductsIOS, purchaseHistory, availablePurchases, currentPurchase, currentTransaction, currentPurchaseError, initConnectionError, setProducts, setSubscriptions, setPurchaseHistory, setAvailablePurchases, setCurrentPurchase, setCurrentPurchaseError]);
    (0, _react.useEffect)(() => {
      (0, _iap.initConnection)().then(value => {
        setInitConnectionError(undefined);
        setConnected(value);
      }).catch(setInitConnectionError);
    }, []);
    (0, _react.useEffect)(() => {
      if (!connected) {
        return;
      }

      const purchaseUpdateSubscription = (0, _eventEmitter.purchaseUpdatedListener)(async purchase => {
        setCurrentPurchaseError(undefined);
        setCurrentPurchase(purchase);
      });
      const transactionUpdateSubscription = (0, _eventEmitter.transactionListener)(async transactionOrError => {
        setCurrentPurchaseError(transactionOrError === null || transactionOrError === void 0 ? void 0 : transactionOrError.error);
        setCurrentTransaction(transactionOrError === null || transactionOrError === void 0 ? void 0 : transactionOrError.transaction);
      });
      const purchaseErrorSubscription = (0, _eventEmitter.purchaseErrorListener)(error => {
        setCurrentPurchase(undefined);
        setCurrentPurchaseError(error);
      });
      const promotedProductSubscription = (0, _eventEmitter.promotedProductListener)(async () => {
        const product = await _iap.IapIos.getPromotedProductIOS();
        setPromotedProductsIOS(prevProducts => [...prevProducts, ...(product ? [product] : [])]);
      });
      return () => {
        purchaseUpdateSubscription.remove();
        purchaseErrorSubscription.remove();
        promotedProductSubscription === null || promotedProductSubscription === void 0 ? void 0 : promotedProductSubscription.remove();
        transactionUpdateSubscription === null || transactionUpdateSubscription === void 0 ? void 0 : transactionUpdateSubscription.remove();
      };
    }, [connected]);
    return /*#__PURE__*/_react.default.createElement(IAPContext.Provider, {
      value: context
    }, /*#__PURE__*/_react.default.createElement(Component, props));
  };
}
//# sourceMappingURL=withIAPContext.js.map