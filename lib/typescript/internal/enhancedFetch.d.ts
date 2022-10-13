/// <reference types="react-native" />
interface OverwrittenRequestInit extends Omit<RequestInit, 'body'> {
    body: Record<string, any>;
}
export declare const enhancedFetch: <T = any>(url: string, init?: OverwrittenRequestInit) => Promise<T>;
export {};
