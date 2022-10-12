export let ErrorCode;

(function (ErrorCode) {
  ErrorCode["E_UNKNOWN"] = "E_UNKNOWN";
  ErrorCode["E_USER_CANCELLED"] = "E_USER_CANCELLED";
  ErrorCode["E_USER_ERROR"] = "E_USER_ERROR";
  ErrorCode["E_ITEM_UNAVAILABLE"] = "E_ITEM_UNAVAILABLE";
  ErrorCode["E_REMOTE_ERROR"] = "E_REMOTE_ERROR";
  ErrorCode["E_NETWORK_ERROR"] = "E_NETWORK_ERROR";
  ErrorCode["E_SERVICE_ERROR"] = "E_SERVICE_ERROR";
  ErrorCode["E_RECEIPT_FAILED"] = "E_RECEIPT_FAILED";
  ErrorCode["E_RECEIPT_FINISHED_FAILED"] = "E_RECEIPT_FINISHED_FAILED";
  ErrorCode["E_NOT_PREPARED"] = "E_NOT_PREPARED";
  ErrorCode["E_NOT_ENDED"] = "E_NOT_ENDED";
  ErrorCode["E_ALREADY_OWNED"] = "E_ALREADY_OWNED";
  ErrorCode["E_DEVELOPER_ERROR"] = "E_DEVELOPER_ERROR";
  ErrorCode["E_BILLING_RESPONSE_JSON_PARSE_ERROR"] = "E_BILLING_RESPONSE_JSON_PARSE_ERROR";
  ErrorCode["E_DEFERRED_PAYMENT"] = "E_DEFERRED_PAYMENT";
  ErrorCode["E_INTERRUPTED"] = "E_INTERRUPTED";
  ErrorCode["E_IAP_NOT_AVAILABLE"] = "E_IAP_NOT_AVAILABLE";
})(ErrorCode || (ErrorCode = {}));

export class PurchaseError {
  constructor(name, message, responseCode, debugMessage, code, productId) {
    this.name = name;
    this.message = message;
    this.responseCode = responseCode;
    this.debugMessage = debugMessage;
    this.code = code;
    this.productId = productId;
    this.name = '[react-native-iap]: PurchaseError';
    this.message = message;
    this.responseCode = responseCode;
    this.debugMessage = debugMessage;
    this.code = code;
    this.productId = productId;
  }

}
//# sourceMappingURL=purchaseError.js.map