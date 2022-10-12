import { requestPurchase as iapRequestPurchase, requestSubscription as iapRequestSubscription } from '../iap';
import type { PurchaseError } from '../purchaseError';
import type { Product, Purchase, PurchaseResult, Subscription } from '../types';
declare type IAP_STATUS = {
    connected: boolean;
    products: Product[];
    promotedProductsIOS: Product[];
    subscriptions: Subscription[];
    purchaseHistory: Purchase[];
    availablePurchases: Purchase[];
    currentPurchase?: Purchase;
    currentPurchaseError?: PurchaseError;
    initConnectionError?: Error;
    finishTransaction: ({ purchase, isConsumable, developerPayloadAndroid, }: {
        purchase: Purchase;
        isConsumable?: boolean;
        developerPayloadAndroid?: string;
    }) => Promise<string | boolean | PurchaseResult | void>;
    getAvailablePurchases: () => Promise<void>;
    getPurchaseHistory: () => Promise<void>;
    getProducts: ({ skus }: {
        skus: string[];
    }) => Promise<void>;
    getSubscriptions: ({ skus }: {
        skus: string[];
    }) => Promise<void>;
    requestPurchase: typeof iapRequestPurchase;
    requestSubscription: typeof iapRequestSubscription;
};
export declare const useIAP: () => IAP_STATUS;
export {};
