export declare const isIos: boolean;
export declare const isAndroid: boolean;
export declare const isAmazon: boolean;
export declare const isPlay: boolean;
export declare const setAndroidNativeModule: (nativeModule: import("..").AndroidModuleProps) => void;
export declare const checkNativeAndroidAvailable: () => void;
/**
 * If changing the typings of `getAndroidModule` to accommodate extra modules,
 * make sure to update `getAndroidModuleType`.
 */
export declare const getAndroidModule: () => import("..").AmazonModuleProps | import("..").AndroidModuleProps;
/**
 * Returns whether the Android in-app-purchase code is using the Android,
 * Amazon, or another store.
 */
export declare const getAndroidModuleType: () => 'android' | 'amazon' | null;
export declare const getNativeModule: () => import("..").AmazonModuleProps | import("..").IosModuleProps | import("../modules/iosSk2").IosModulePropsSk2 | import("..").AndroidModuleProps;
export declare const isStorekit2Avaiable: () => boolean;
export declare const isIosStorekit2: () => boolean;
export declare const setIosNativeModule: (nativeModule: import("..").IosModuleProps | import("../modules/iosSk2").IosModulePropsSk2) => void;
export declare const storekit2Mode: () => boolean;
export declare const storekit1Mode: () => boolean;
export declare const storekitHybridMode: () => boolean;
export declare const getIosModule: () => import("..").IosModuleProps | import("../modules/iosSk2").IosModulePropsSk2;
