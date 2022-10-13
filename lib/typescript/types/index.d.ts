import type { AmazonModuleProps, AndroidModuleProps, IosModuleProps } from '../modules';
import type { IosModulePropsSk2 } from '../modules/iosSk2';
import type * as Apple from './apple';
export declare type Sku = string;
export declare enum ProrationModesAndroid {
    IMMEDIATE_WITH_TIME_PRORATION = 1,
    IMMEDIATE_AND_CHARGE_PRORATED_PRICE = 2,
    IMMEDIATE_WITHOUT_PRORATION = 3,
    DEFERRED = 4,
    IMMEDIATE_AND_CHARGE_FULL_PRICE = 5,
    UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY = 0
}
export declare enum PurchaseStateAndroid {
    UNSPECIFIED_STATE = 0,
    PURCHASED = 1,
    PENDING = 2
}
export declare const PROMOTED_PRODUCT = "iap-promoted-product";
export declare enum InstallSourceAndroid {
    NOT_SET = 0,
    GOOGLE_PLAY = 1,
    AMAZON = 2
}
export declare enum ProductType {
    /** Subscription */
    subs = "subs",
    /** Subscription */
    sub = "sub",
    /** Consumable */
    inapp = "inapp",
    /** Consumable */
    iap = "iap"
}
export interface ProductCommon {
    type: 'subs' | 'sub' | 'inapp' | 'iap';
    productId: string;
    productIds?: string[];
    title: string;
    description: string;
    price: string;
    currency: string;
    localizedPrice: string;
    countryCode?: string;
}
export interface ProductPurchase {
    productId: string;
    transactionId?: string;
    transactionDate: number;
    transactionReceipt: string;
    purchaseToken?: string;
    quantityIOS?: number;
    originalTransactionDateIOS?: string;
    originalTransactionIdentifierIOS?: string;
    productIds?: string[];
    dataAndroid?: string;
    signatureAndroid?: string;
    autoRenewingAndroid?: boolean;
    purchaseStateAndroid?: PurchaseStateAndroid;
    isAcknowledgedAndroid?: boolean;
    packageNameAndroid?: string;
    developerPayloadAndroid?: string;
    obfuscatedAccountIdAndroid?: string;
    obfuscatedProfileIdAndroid?: string;
    userIdAmazon?: string;
    userMarketplaceAmazon?: string;
    userJsonAmazon?: string;
    isCanceledAmazon?: boolean;
}
export interface PurchaseResult {
    responseCode?: number;
    debugMessage?: string;
    code?: string;
    message?: string;
    purchaseToken?: string;
}
export interface SubscriptionPurchase extends ProductPurchase {
    autoRenewingAndroid?: boolean;
    originalTransactionDateIOS?: string;
    originalTransactionIdentifierIOS?: string;
}
export declare type Purchase = ProductPurchase | SubscriptionPurchase;
export interface Discount {
    identifier: string;
    type: string;
    numberOfPeriods: string;
    price: string;
    localizedPrice: string;
    paymentMode: '' | 'FREETRIAL' | 'PAYASYOUGO' | 'PAYUPFRONT';
    subscriptionPeriod: string;
}
export interface ProductAndroid extends ProductCommon {
    type: 'inapp' | 'iap';
    oneTimePurchaseOfferDetails?: {
        priceCurrencyCode: string;
        formattedPrice: string;
        priceAmountMicros: string;
    };
}
export interface ProductIOS extends ProductCommon {
    type: 'inapp' | 'iap';
}
export declare type Product = ProductAndroid & ProductIOS;
/**
 * Can be used to distinguish the different platforms' subscription information
 */
export declare enum SubscriptionPlatform {
    android = "android",
    amazon = "amazon",
    ios = "ios"
}
/** Android Billing v5 type */
export interface SubscriptionAndroid {
    platform: SubscriptionPlatform.android;
    productType: 'subs';
    name: string;
    title: string;
    description: string;
    productId: string;
    subscriptionOfferDetails: SubscriptionOfferAndroid[];
}
export interface SubscriptionOfferAndroid {
    offerToken: string;
    pricingPhases: {
        pricingPhaseList: PricingPhaseAndroid[];
    };
    offerTags: string[];
}
export interface PricingPhaseAndroid {
    formattedPrice: string;
    priceCurrencyCode: string;
    /**
     * P1W, P1M, P1Y
     */
    billingPeriod: string;
    billingCycleCount: number;
    priceAmountMicros: string;
    recurrenceMode: number;
}
/**
 * TODO: As of 2022-10-10, this typing is not verified against the real
 * Amazon API. Please update this if you have a more accurate type.
 */
export interface SubscriptionAmazon extends ProductCommon {
    platform: SubscriptionPlatform.amazon;
    type: 'subs';
    productType?: string;
    name?: string;
}
export declare type SubscriptionIosPeriod = 'DAY' | 'WEEK' | 'MONTH' | 'YEAR' | '';
export interface SubscriptionIOS extends ProductCommon {
    platform: SubscriptionPlatform.ios;
    type: 'subs';
    discounts?: Discount[];
    introductoryPrice?: string;
    introductoryPriceAsAmountIOS?: string;
    introductoryPricePaymentModeIOS?: '' | 'FREETRIAL' | 'PAYASYOUGO' | 'PAYUPFRONT';
    introductoryPriceNumberOfPeriodsIOS?: string;
    introductoryPriceSubscriptionPeriodIOS?: SubscriptionIosPeriod;
    subscriptionPeriodNumberIOS?: string;
    subscriptionPeriodUnitIOS?: SubscriptionIosPeriod;
}
export declare type Subscription = SubscriptionAndroid | SubscriptionAmazon | SubscriptionIOS;
export interface RequestPurchaseBaseAndroid {
    obfuscatedAccountIdAndroid?: string;
    obfuscatedProfileIdAndroid?: string;
    isOfferPersonalized?: boolean;
}
export interface RequestPurchaseAndroid extends RequestPurchaseBaseAndroid {
    skus: Sku[];
}
export interface RequestPurchaseIOS {
    sku: Sku;
    andDangerouslyFinishTransactionAutomaticallyIOS?: boolean;
    /**
     * UUID representing user account
     */
    appAccountToken?: string;
    quantity?: number;
    withOffer?: Apple.PaymentDiscount;
}
/** As of 2022-10-12, we only use the `sku` field for Amazon purchases */
export declare type RequestPurchaseAmazon = RequestPurchaseIOS;
export declare type RequestPurchase = RequestPurchaseAndroid | RequestPurchaseAmazon | RequestPurchaseIOS;
/**
 * In order to purchase a new subscription, every sku must have a selected offerToken
 * @see SubscriptionAndroid.subscriptionOfferDetails.offerToken
 */
export interface SubscriptionOffer {
    sku: Sku;
    offerToken: string;
}
export interface RequestSubscriptionAndroid extends RequestPurchaseBaseAndroid {
    purchaseTokenAndroid?: string;
    prorationModeAndroid?: ProrationModesAndroid;
    subscriptionOffers: SubscriptionOffer[];
}
export declare type RequestSubscriptionIOS = RequestPurchaseIOS;
/** As of 2022-10-12, we only use the `sku` field for Amazon subscriptions */
export declare type RequestSubscriptionAmazon = RequestSubscriptionIOS;
export declare type RequestSubscription = RequestSubscriptionAndroid | RequestSubscriptionAmazon | RequestSubscriptionIOS;
declare module 'react-native' {
    interface NativeModulesStatic {
        RNIapIos: IosModuleProps;
        RNIapIosSk2: IosModulePropsSk2;
        RNIapModule: AndroidModuleProps;
        RNIapAmazonModule: AmazonModuleProps;
    }
}
