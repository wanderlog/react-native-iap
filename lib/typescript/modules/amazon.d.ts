import type { Product, Purchase, Sku } from '../types';
import type { AmazonLicensingStatus, ReceiptType, UserDataAmazon } from '../types/amazon';
import type { NativeModuleProps } from './common';
declare type GetUser = () => Promise<UserDataAmazon>;
declare type FlushFailedPurchasesCachedAsPending = () => Promise<boolean>;
declare type GetItemsByType = (type: string, skus: Sku[]) => Promise<Product[]>;
declare type GetAvailableItems = () => Promise<Purchase[]>;
declare type BuyItemByType = (sku: Sku) => Promise<Purchase>;
declare type AcknowledgePurchase = (purchaseToken: string, developerPayloadAndroid?: string) => Promise<boolean>;
declare type ConsumeProduct = (purchaseToken: string, developerPayloadAndroid?: string) => Promise<boolean>;
declare type StartListening = () => Promise<void>;
export interface AmazonModuleProps extends NativeModuleProps {
    getUser: GetUser;
    flushFailedPurchasesCachedAsPending: FlushFailedPurchasesCachedAsPending;
    getItemsByType: GetItemsByType;
    getAvailableItems: GetAvailableItems;
    buyItemByType: BuyItemByType;
    acknowledgePurchase: AcknowledgePurchase;
    consumeProduct: ConsumeProduct;
    startListening: StartListening;
    verifyLicense: () => Promise<AmazonLicensingStatus>;
}
export declare const AmazonModule: AmazonModuleProps;
/**
 * Validate receipt for Amazon. NOTE: This method is here for debugging purposes only. Including
 * your developer secret in the binary you ship to users is potentially dangerous.
 * Use server side validation instead for your production builds
 * @param {string} developerSecret: from the Amazon developer console.
 * @param {string} userId who purchased the item.
 * @param {string} receiptId long obfuscated string returned when purchasing the item
 * @param {boolean} useSandbox Defaults to true, use sandbox environment or production.
 * @returns {Promise<object>}
 */
export declare const validateReceiptAmazon: ({ developerSecret, userId, receiptId, useSandbox, }: {
    developerSecret: string;
    userId: string;
    receiptId: string;
    useSandbox: boolean;
}) => Promise<ReceiptType>;
/**
 * Returns the status of verifying app's license @see AmazonLicensingStatus
 */
export declare const verifyLicense: () => Promise<AmazonLicensingStatus>;
export {};
