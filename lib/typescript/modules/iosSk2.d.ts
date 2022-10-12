import type { Product, ProductPurchase, Purchase, Sku } from '../types';
import type { PaymentDiscountSk2, ProductSk2, ProductStatus, TransactionSk2 } from '../types/appleSk2';
import type { NativeModuleProps } from './common';
declare type getItems = (skus: Sku[]) => Promise<ProductSk2[]>;
declare type getAvailableItems = (alsoPublishToEventListener?: boolean) => Promise<TransactionSk2[]>;
export declare type BuyProduct = (sku: Sku, andDangerouslyFinishTransactionAutomaticallyIOS: boolean, applicationUsername: string | undefined, quantity: number, withOffer: Record<keyof PaymentDiscountSk2, string> | undefined) => Promise<Purchase>;
declare type clearTransaction = () => Promise<void>;
declare type clearProducts = () => Promise<void>;
declare type promotedProduct = () => Promise<Product | null>;
declare type buyPromotedProduct = () => Promise<void>;
declare type requestReceipt = (refresh: boolean) => Promise<string>;
declare type finishTransaction = (transactionIdentifier: string) => Promise<boolean>;
declare type getPendingTransactions = () => Promise<ProductPurchase[]>;
declare type presentCodeRedemptionSheet = () => Promise<null>;
export interface IosModulePropsSk2 extends NativeModuleProps {
    isAvailable(): number;
    latestTransaction(sku: string): Promise<TransactionSk2>;
    currentEntitlement(sku: string): Promise<TransactionSk2>;
    subscriptionStatus(sku: string): Promise<ProductStatus[]>;
    isEligibleForIntroOffer(groupID: string): Promise<Boolean>;
    sync(): Promise<null>;
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
 * Sync state with Appstore (iOS only)
 * https://developer.apple.com/documentation/storekit/appstore/3791906-sync
 */
export declare const sync: () => Promise<null>;
/**
 *
 */
export declare const isEligibleForIntroOffer: (groupID: string) => Promise<Boolean>;
/**
 *
 */
export declare const subscriptionStatus: (sku: string) => Promise<ProductStatus[]>;
/**
 *
 */
export declare const currentEntitlement: (sku: string) => Promise<TransactionSk2>;
/**
 *
 */
export declare const latestTransaction: (sku: string) => Promise<TransactionSk2>;
export {};
