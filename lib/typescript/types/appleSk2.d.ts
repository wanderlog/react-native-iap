import type { PurchaseError } from '../purchaseError';
import type { ProductIOS, Purchase, SubscriptionIOS } from '.';
import type * as Apple from './apple';
export declare type SubscriptionPeriod = {
    unit: 'day' | 'week' | 'month' | 'year';
    value: number;
};
export declare type PaymentMode = 'freeTrial' | 'payAsYouGo' | 'payUpFront';
export declare type SubscriptionOffer = {
    displayPrice: string;
    id: string;
    paymentMode: PaymentMode;
    period: SubscriptionPeriod;
    periodCount: number;
    price: number;
    type: 'introductory' | 'promotional';
};
export declare type SubscriptionInfo = {
    introductoryOffer?: SubscriptionOffer;
    promotionalOffers?: SubscriptionOffer[];
    subscriptionGroupID: string;
    subscriptionPeriod: SubscriptionPeriod;
};
export declare type ProductSk2 = {
    description: string;
    displayName: string;
    displayPrice: string;
    id: number;
    isFamilyShareable: boolean;
    jsonRepresentation: string;
    price: number;
    subscription: SubscriptionInfo;
    type: 'autoRenewable' | 'consumable' | 'nonConsumable' | 'nonRenewable';
};
export declare const productSk2Map: ({ id, description, displayName, price, displayPrice, }: ProductSk2) => ProductIOS;
export declare const subscriptionSk2Map: ({ id, description, displayName, price, displayPrice, subscription, }: ProductSk2) => SubscriptionIOS;
export declare type TransactionSk2 = {
    appAccountToken: string;
    appBundleID: string;
    debugDescription: string;
    deviceVerification: string;
    deviceVerificationNonce: string;
    expirationDate: number;
    id: number;
    isUpgraded: boolean;
    jsonRepresentation: string;
    offerID: string;
    offerType: string;
    originalID: string;
    originalPurchaseDate: number;
    ownershipType: string;
    productID: string;
    productType: string;
    purchaseDate: number;
    purchasedQuantity: number;
    revocationDate: number;
    revocationReason: string;
    signedDate: number;
    subscriptionGroupID: number;
    webOrderLineItemID: number;
};
export declare type TransactionError = PurchaseError;
/**
 * Only one of `transaction` and `error` is not undefined at the time
 */
export declare type TransactionEvent = {
    transaction?: TransactionSk2;
    error?: TransactionError;
};
export declare type SubscriptionStatus = 'expired' | 'inBillingRetryPeriod' | 'inGracePeriod' | 'revoked' | 'subscribed';
export declare type ProductStatus = {
    state: SubscriptionStatus;
};
export declare const transactionSk2Map: ({ id, originalPurchaseDate, productID, purchaseDate, purchasedQuantity, }: TransactionSk2) => Purchase;
/**
 * Payment discount interface @see https://developer.apple.com/documentation/storekit/skpaymentdiscount?language=objc
 */
export interface PaymentDiscountSk2 {
    /**
     * A string used to uniquely identify a discount offer for a product.
     */
    offerID: string;
    /**
     * A string that identifies the key used to generate the signature.
     */
    keyID: string;
    /**
     * A universally unique ID (UUID) value that you define.
     */
    nonce: string;
    /**
     * A UTF-8 string representing the properties of a specific discount offer, cryptographically signed.
     */
    signature: string;
    /**
     * The date and time of the signature's creation in milliseconds, formatted in Unix epoch time.
     */
    timestamp: number;
}
export declare const offerSk2Map: (offer: Apple.PaymentDiscount | undefined) => Record<keyof PaymentDiscountSk2, string> | undefined;
