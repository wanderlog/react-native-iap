import { InstallSourceAndroid, Product, ProductType, ProrationModesAndroid, Purchase, PurchaseResult, Sku } from '../types';
import type * as Android from '../types/android';
import type { NativeModuleProps } from './common';
declare type FlushFailedPurchasesCachedAsPending = () => Promise<boolean>;
declare type GetItemsByType = <T = Product>(type: ProductType, skus: Sku[]) => Promise<T[]>;
declare type GetAvailableItemsByType = <T = Purchase>(type: ProductType) => Promise<T[]>;
declare type GetPurchaseHistoryByType = <T = Purchase>(type: ProductType) => Promise<T[]>;
export declare type BuyItemByType = (type: string, skus: Sku[], purchaseToken: string | undefined, prorationMode: ProrationModesAndroid, obfuscatedAccountId: string | undefined, obfuscatedProfileId: string | undefined, subscriptionOffers: string[], isOfferPersonalized: boolean) => Promise<Purchase>;
declare type AcknowledgePurchase = (purchaseToken: string, developerPayloadAndroid?: string) => Promise<PurchaseResult | boolean>;
declare type ConsumeProduct = (purchaseToken: string, developerPayloadAndroid?: string) => Promise<PurchaseResult | boolean>;
declare type StartListening = () => Promise<void>;
declare type GetPackageName = () => Promise<string>;
export interface AndroidModuleProps extends NativeModuleProps {
    flushFailedPurchasesCachedAsPending: FlushFailedPurchasesCachedAsPending;
    getItemsByType: GetItemsByType;
    getAvailableItemsByType: GetAvailableItemsByType;
    getPurchaseHistoryByType: GetPurchaseHistoryByType;
    buyItemByType: BuyItemByType;
    acknowledgePurchase: AcknowledgePurchase;
    consumeProduct: ConsumeProduct;
    startListening: StartListening;
    getPackageName: GetPackageName;
}
export declare const AndroidModule: AndroidModuleProps;
export declare const getInstallSourceAndroid: () => InstallSourceAndroid;
/**
 * Deep link to subscriptions screen on Android. No-op on iOS.
 * @param {string} sku The product's SKU (on Android)
 * @returns {Promise<void>}
 */
export declare const deepLinkToSubscriptionsAndroid: ({ sku, }: {
    sku: Sku;
}) => Promise<void>;
/**
 * Validate receipt for Android. NOTE: This method is here for debugging purposes only. Including
 * your access token in the binary you ship to users is potentially dangerous.
 * Use server side validation instead for your production builds
 * @param {string} packageName package name of your app.
 * @param {string} productId product id for your in app product.
 * @param {string} productToken token for your purchase.
 * @param {string} accessToken accessToken from googleApis.
 * @param {boolean} isSub whether this is subscription or inapp. `true` for subscription.
 * @returns {Promise<object>}
 */
export declare const validateReceiptAndroid: ({ packageName, productId, productToken, accessToken, isSub, }: {
    packageName: string;
    productId: string;
    productToken: string;
    accessToken: string;
    isSub?: boolean | undefined;
}) => Promise<Android.ReceiptType>;
/**
 * Acknowledge a product (on Android.) No-op on iOS.
 * @param {string} token The product's token (on Android)
 * @returns {Promise<PurchaseResult | void>}
 */
export declare const acknowledgePurchaseAndroid: ({ token, developerPayload, }: {
    token: string;
    developerPayload?: string | undefined;
}) => Promise<PurchaseResult | boolean | void>;
export {};
