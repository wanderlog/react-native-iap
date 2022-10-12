import type { ResponseBody as ReceiptValidationResponse } from '@jeremybarbet/apple-api-types';
import type { ProductIOS, ProductPurchase, Purchase, Sku, SubscriptionIOS } from '../types';
import type { PaymentDiscount } from '../types/apple';
import type { NativeModuleProps } from './common';
declare type getItems = (skus: Sku[]) => Promise<ProductIOS[] | SubscriptionIOS[]>;
declare type getAvailableItems = (automaticallyFinishRestoredTransactions: boolean) => Promise<Purchase[]>;
export declare type BuyProduct = (sku: Sku, andDangerouslyFinishTransactionAutomaticallyIOS: boolean, applicationUsername: string | undefined, quantity: number, withOffer: Record<keyof PaymentDiscount, string> | undefined) => Promise<Purchase>;
declare type clearTransaction = () => Promise<void>;
declare type clearProducts = () => Promise<void>;
declare type promotedProduct = () => Promise<ProductIOS | null>;
declare type buyPromotedProduct = () => Promise<void>;
declare type requestReceipt = (refresh: boolean) => Promise<string>;
declare type finishTransaction = (transactionIdentifier: string) => Promise<boolean>;
declare type getPendingTransactions = () => Promise<ProductPurchase[]>;
declare type presentCodeRedemptionSheet = () => Promise<null>;
export interface IosModuleProps extends NativeModuleProps {
    getItems: getItems;
    getAvailableItems: getAvailableItems;
    buyProduct: BuyProduct;
    clearTransaction: clearTransaction;
    clearProducts: clearProducts;
    promotedProduct: promotedProduct;
    buyPromotedProduct: buyPromotedProduct;
    requestReceipt: requestReceipt;
    finishTransaction: finishTransaction;
    getPendingTransactions: getPendingTransactions;
    presentCodeRedemptionSheet: presentCodeRedemptionSheet;
    disable: () => Promise<null>;
}
/**
 * Get the current receipt base64 encoded in IOS.
 * @param {forceRefresh?:boolean}
 * @returns {Promise<ProductPurchase[]>}
 */
export declare const getPendingPurchasesIOS: () => Promise<ProductPurchase[]>;
/**
 * Get the current receipt base64 encoded in IOS.
 * @param {forceRefresh?:boolean}
 * @returns {Promise<string>}
 */
export declare const getReceiptIOS: ({ forceRefresh, }: {
    forceRefresh?: boolean | undefined;
}) => Promise<string>;
/**
 * Launches a modal to register the redeem offer code in IOS.
 * @returns {Promise<null>}
 */
export declare const presentCodeRedemptionSheetIOS: () => Promise<null>;
/**
 * Should Add Store Payment (iOS only)
 *   Indicates the the App Store purchase should continue from the app instead of the App Store.
 * @returns {Promise<Product | null>} promoted product
 */
export declare const getPromotedProductIOS: () => Promise<ProductIOS | null>;
/**
 * Buy the currently selected promoted product (iOS only)
 *   Initiates the payment process for a promoted product. Should only be called in response to the `iap-promoted-product` event.
 * @returns {Promise<void>}
 */
export declare const buyPromotedProductIOS: () => Promise<void>;
/**
 * Validate receipt for iOS.
 * @param {object} receiptBody the receipt body to send to apple server.
 * @param {boolean} isTest whether this is in test environment which is sandbox.
 * @returns {Promise<Apple.ReceiptValidationResponse | false>}
 */
export declare const validateReceiptIos: ({ receiptBody, isTest, }: {
    receiptBody: Record<string, unknown>;
    isTest?: boolean | undefined;
}) => Promise<ReceiptValidationResponse | false>;
/**
 * Clear Transaction (iOS only)
 *   Finish remaining transactions. Related to issue #257 and #801
 *     link : https://github.com/dooboolab/react-native-iap/issues/257
 *            https://github.com/dooboolab/react-native-iap/issues/801
 * @returns {Promise<void>}
 */
export declare const clearTransactionIOS: () => Promise<void>;
/**
 * Clear valid Products (iOS only)
 *   Remove all products which are validated by Apple server.
 * @returns {void}
 */
export declare const clearProductsIOS: () => Promise<void>;
export {};
