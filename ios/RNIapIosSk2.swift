import Foundation
import React
import StoreKit

protocol Sk2Delegate {
    func disable(
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func initConnection(
        _ resolve: @escaping RCTPromiseResolveBlock ,
        reject: @escaping RCTPromiseRejectBlock
    )

    func endConnection(
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func getItems(
        _ skus: [String],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func getAvailableItems(
        _ alsoPublishToEventListener: Bool,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func buyProduct(
        _ sku: String,
        andDangerouslyFinishTransactionAutomatically: Bool,
        appAccountToken: String?,
        quantity: Int,
        withOffer: [String: String],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func isEligibleForIntroOffer(
        _ groupID: String,
        resolve: @escaping RCTPromiseResolveBlock ,
        reject: @escaping RCTPromiseRejectBlock
    )

    func subscriptionStatus(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func currentEntitlement(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func latestTransaction(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func  finishTransaction(
        _ transactionIdentifier: String,
        resolve: @escaping RCTPromiseResolveBlock ,
        reject: @escaping RCTPromiseRejectBlock
    )

    func pendingTransactions (
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func sync(
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func  presentCodeRedemptionSheet(
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func clearTransaction(
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    )

    func startObserving()
    func stopObserving()
}

class DummySk2: Sk2Delegate {
    let errorCode = IapErrors.E_DEVELOPER_ERROR.rawValue
    let errorMessage = "Method only available on iOS 15 and up"

    func disable(
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func initConnection(
        _ resolve: @escaping RCTPromiseResolveBlock ,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func endConnection(
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func getItems(
        _ skus: [String],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func getAvailableItems(
        _ alsoPublishToEventListener: Bool,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func buyProduct(
        _ sku: String,
        andDangerouslyFinishTransactionAutomatically: Bool,
        appAccountToken: String?,
        quantity: Int,
        withOffer: [String: String],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func isEligibleForIntroOffer(
        _ groupID: String,
        resolve: @escaping RCTPromiseResolveBlock ,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func subscriptionStatus(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func currentEntitlement(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func latestTransaction(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func  finishTransaction(
        _ transactionIdentifier: String,
        resolve: @escaping RCTPromiseResolveBlock ,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func pendingTransactions (
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func sync(
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func  presentCodeRedemptionSheet(
        _ resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        reject(errorCode, errorMessage, nil)
    }

    func clearTransaction(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        reject(errorCode, errorMessage, nil)
    }

    func startObserving() {
    }

    func stopObserving() {
    }
}

@objc(RNIapIosSk2)
class RNIapIosSk2: RCTEventEmitter, Sk2Delegate {
    private var delegate: Sk2Delegate = DummySk2()

    override init() {
        super.init()
        if #available(iOS 15.0, tvOS 15.0, *) {
            delegate = RNIapIosSk2iOS15(sendEvent: self.sendEvent)
        }
    }

    @objc public func disable(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.disable(resolve, reject: reject)
    }

    override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    override func startObserving() {
        delegate.startObserving()
    }

    override func stopObserving() {
        delegate.stopObserving()
    }

    override func addListener(_ eventName: String?) {
        super.addListener(eventName)
    }

    /**
     "iap-transaction-updated" is unique to Sk2.
     "iap-promoted-product" is only avaiable on Sk1
     "purchase-updated", "purchase-error" are for backward compatibility
     */
    override func supportedEvents() -> [String]? {
        return [ "purchase-updated", "purchase-error", "iap-transaction-updated"]
    }

    @objc public func initConnection(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.initConnection(resolve, reject: reject)
    }
    @objc public func endConnection(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.endConnection(resolve, reject: reject)
    }

    @objc public func getItems(
        _ skus: [String],
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.getItems(skus, resolve: resolve, reject: reject)
    }

    @objc public func getAvailableItems(
        _ alsoPublishToEventListener: Bool,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.getAvailableItems(alsoPublishToEventListener, resolve: resolve, reject: reject)
    }

    @objc public func buyProduct(
        _ sku: String,
        andDangerouslyFinishTransactionAutomatically: Bool,
        appAccountToken: String?,
        quantity: Int,
        withOffer: [String: String],
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.buyProduct(
            sku,
            andDangerouslyFinishTransactionAutomatically: andDangerouslyFinishTransactionAutomatically,
            appAccountToken: appAccountToken,
            quantity: quantity,
            withOffer: withOffer,
            resolve: resolve,
            reject: reject)
    }

    @objc public func isEligibleForIntroOffer(
        _ groupID: String,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.isEligibleForIntroOffer(groupID, resolve: resolve, reject: reject)
    }

    @objc public func subscriptionStatus(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.subscriptionStatus(sku, resolve: resolve, reject: reject)
    }

    @objc public func currentEntitlement(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.currentEntitlement(sku, resolve: resolve, reject: reject)
    }

    @objc public func latestTransaction(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.latestTransaction(sku, resolve: resolve, reject: reject)
    }

    @objc public func  finishTransaction(
        _ transactionIdentifier: String,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.finishTransaction(transactionIdentifier, resolve: resolve, reject: reject)
    }

    @objc public func pendingTransactions (
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.pendingTransactions(resolve, reject: reject)
    }

    @objc public func sync(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in},
        reject: @escaping RCTPromiseRejectBlock = {_, _, _ in}
    ) {
        delegate.sync(resolve, reject: reject)
    }

    @objc public func  presentCodeRedemptionSheet(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        delegate.presentCodeRedemptionSheet(resolve, reject: reject)
    }

    @objc func clearTransaction(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }) {
        delegate.clearTransaction(resolve, reject: reject)
    }
}

@available(iOS 15.0, tvOS 15.0, *)
class RNIapIosSk2iOS15: Sk2Delegate {
    private var hasListeners = false
    private var products: [String: Product]
    private var transactions: [String: Transaction]
    private var updateListenerTask: Task<Void, Error>?
    fileprivate var sendEvent: ((String?, Any?) -> Void)?
    init(sendEvent: ((String?, Any?) -> Void)? ) {
        self.sendEvent = sendEvent
        products = [String: Product]()
        transactions = [String: Transaction]()
        addTransactionObserver()
    }

    deinit {
        removeTransactionObserver()
    }

    @objc public func disable(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        removeTransactionObserver()
        resolve(nil)
    }

    func addTransactionObserver() {
        if updateListenerTask == nil {
            updateListenerTask = listenForTransactions()
        }
    }

    func removeTransactionObserver() {
        updateListenerTask?.cancel()
        updateListenerTask = nil
    }

    func addTransaction(_ transaction: Transaction) {
        let transactionId = String(transaction.id)
        self.transactions[transactionId] = transaction
    }

    func listenForTransactions() -> Task<Void, Error> {
        return Task.detached {
            // Iterate through any transactions that don't come from a direct call to `purchase()`.
            for await result in Transaction.updates {
                do {
                    let transaction = try checkVerified(result)
                    self.addTransaction(transaction)
                    // Deliver products to the user.
                    // await self.updateCustomerProductStatus()

                    if self.hasListeners {
                        self.sendEvent?("purchase-updated", serialize(transaction))
                        self.sendEvent?("iap-transaction-updated", ["transaction": serialize(transaction)])
                    }
                    // Always finish a transaction.
                    // await transaction.finish()
                    // The transaction is returned to the user. Once it has fullfilled the order,
                    // they can call finishTransaction
                } catch {
                    // StoreKit has a transaction that fails verification. Don't deliver content to the user.
                    debugMessage("Transaction failed verification")
                    if self.hasListeners {
                        let err = [
                            "responseCode": IapErrors.E_TRANSACTION_VALIDATION_FAILED.rawValue,
                            "debugMessage": error.localizedDescription,
                            "code": IapErrors.E_TRANSACTION_VALIDATION_FAILED.rawValue,
                            "message": error.localizedDescription
                        ]

                        self.sendEvent?("purchase-error", err)
                        self.sendEvent?("iap-transaction-updated", ["error": err])
                    }
                }
            }
        }
    }

    func startObserving() {
        hasListeners = true
    }

    func stopObserving() {
        hasListeners = false
    }

    @objc public func initConnection(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        addTransactionObserver()
        resolve(AppStore.canMakePayments)
    }
    @objc public func endConnection(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        products.removeAll()
        transactions.removeAll()
        updateListenerTask?.cancel()
        updateListenerTask = nil
        resolve(nil)
    }

    @objc public func getItems(
        _ skus: [String],
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        Task {
            do {
                let products = try await Product.products(for: skus)
                products.forEach({(prod) in
                    self.products[prod.id] = prod
                })
                resolve(products.map({ (prod: Product) -> [String: Any?]? in
                    return serialize(prod)
                }).compactMap({$0}))
            } catch {
                reject(IapErrors.E_UNKNOWN.rawValue, "Error fetching items", error)
            }
        }
    }

    @objc public func getAvailableItems(
        _ alsoPublishToEventListener: Bool,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        Task {
            var purchasedItems: [Transaction] = []

            func addPurchase(transaction: Transaction, product: Product) {
                purchasedItems.append( transaction)
                if alsoPublishToEventListener {
                    self.sendEvent?("purchase-update", serialize(transaction))
                }
            }
            func addError( error: Error, errorDict: [String: String]) {
                if alsoPublishToEventListener {
                    self.sendEvent?("purchase-error", errorDict)
                }
            }
            // Iterate through all of the user's purchased products.
            for await result in Transaction.currentEntitlements {
                do {
                    // Check whether the transaction is verified. If it isn’t, catch `failedVerification` error.
                    let transaction = try checkVerified(result)
                    // Check the `productType` of the transaction and get the corresponding product from the store.
                    switch transaction.productType {
                    case .nonConsumable:
                        if let product = products[transaction.productID] {
                            addPurchase(transaction: transaction, product: product)
                        }

                    case .nonRenewable:
                        if let nonRenewable = products[transaction.productID] {
                            // Non-renewing subscriptions have no inherent expiration date, so they're always
                            // contained in `Transaction.currentEntitlements` after the user purchases them.
                            // This app defines this non-renewing subscription's expiration date to be one year after purchase.
                            // If the current date is within one year of the `purchaseDate`, the user is still entitled to this
                            // product.
                            let currentDate = Date()
                            let expirationDate = Calendar(identifier: .gregorian).date(byAdding: DateComponents(year: 1),
                                                                                       to: transaction.purchaseDate)!

                            if currentDate < expirationDate {
                                addPurchase(transaction: transaction, product: nonRenewable)
                            }
                        }

                    case .autoRenewable:
                        if let subscription = products[transaction.productID] {
                            addPurchase(transaction: transaction, product: subscription)
                        }

                    default:
                        break
                    }
                } catch StoreError.failedVerification {
                    let err = [ "responseCode": IapErrors.E_TRANSACTION_VALIDATION_FAILED.rawValue,
                                "debugMessage": StoreError.failedVerification.localizedDescription,
                                "code": IapErrors.E_TRANSACTION_VALIDATION_FAILED.rawValue,
                                "message": StoreError.failedVerification.localizedDescription,
                                "productId": "unknown"
                    ]
                    addError(error: StoreError.failedVerification, errorDict: err)
                } catch {
                    debugMessage(error)
                    let err = [ "responseCode": IapErrors.E_UNKNOWN.rawValue,
                                "debugMessage": error.localizedDescription,
                                "code": IapErrors.E_UNKNOWN.rawValue,
                                "message": error.localizedDescription,
                                "productId": "unknown"
                    ]
                    addError(error: StoreError.failedVerification, errorDict: err)
                }
            }
            // Check the `subscriptionGroupStatus` to learn the auto-renewable subscription state to determine whether the customer
            // is new (never subscribed), active, or inactive (expired subscription). This app has only one subscription
            // group, so products in the subscriptions array all belong to the same group. The statuses that
            // `product.subscription.status` returns apply to the entire subscription group.
            // subscriptionGroupStatus = try? await subscriptions.first?.subscription?.status.first?.state
            resolve(purchasedItems.map({(t: Transaction) in serialize(t)}))
        }
    }

    @objc public func buyProduct(
        _ sku: String,
        andDangerouslyFinishTransactionAutomatically: Bool,
        appAccountToken: String?,
        quantity: Int,
        withOffer: [String: String],
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        Task {
            let product: Product? = products[sku]

            if let product = product {
                do {
                    var options: Set<Product.PurchaseOption> = []
                    if quantity > -1 {
                        options.insert(.quantity(quantity))
                    }

                    let offerID = withOffer["offerID"]
                    let keyID = withOffer["keyID"]
                    let nonce = withOffer["nonce"]
                    let signature = withOffer["signature"]
                    let timestamp = withOffer["timestamp"]

                    if let offerID = offerID, let keyID = keyID, let nonce = nonce, let nonce = UUID(uuidString: nonce), let signature = signature, let signature = signature.data(using: .utf8), let timestamp = timestamp, let timestamp = Int(timestamp) {
                        options.insert(.promotionalOffer(offerID: offerID, keyID: keyID, nonce: nonce, signature: signature, timestamp: timestamp ))
                    }
                    if let appAccountToken = appAccountToken, let appAccountToken = UUID(uuidString: appAccountToken) {
                        options.insert(.appAccountToken(appAccountToken))
                    }
                    debugMessage("Purchase Started")

                    let result = try await product.purchase(options: options)
                    switch result {
                    case .success(let verification):
                        debugMessage("Purchase Successful")

                        // Check whether the transaction is verified. If it isn't,
                        // this function rethrows the verification error.
                        let transaction = try checkVerified(verification)

                        // The transaction is verified. Deliver content to the user.
                        // Do on JS :await updateCustomerProductStatus()

                        // Always finish a transaction.
                        if andDangerouslyFinishTransactionAutomatically {
                            await transaction.finish()
                            resolve(nil)
                        } else {
                            self.addTransaction(transaction)
                            self.sendEvent?("purchase-updated", serialize(transaction))
                            resolve(serialize(transaction))
                        }
                        return

                    case .userCancelled, .pending:
                        debugMessage("Deferred (awaiting approval via parental controls, etc.)")

                        let err = [
                            "debugMessage": "The payment was deferred (awaiting approval via parental controls for instance)",
                            "code": IapErrors.E_DEFERRED_PAYMENT.rawValue,
                            "message": "The payment was deferred (awaiting approval via parental controls for instance)",
                            "productId": sku,
                            "quantity": "\(quantity)"
                        ]
                        debugMessage(err)

                        reject(
                            IapErrors.E_DEFERRED_PAYMENT.rawValue,
                            "The payment was deferred for \(sku) (awaiting approval via parental controls for instance)",
                            nil)

                        return

                    default:
                        reject(IapErrors.E_UNKNOWN.rawValue, "Unknown response from purchase", nil)
                        return
                    }
                } catch {
                    debugMessage("Purchase Failed")

                    let err = [
                        "responseCode": IapErrors.E_PURCHASE_ERROR.rawValue,
                        "debugMessage": error.localizedDescription,
                        "message": error.localizedDescription,
                        "productId": sku
                    ]
                    print(err)

                    reject(
                        IapErrors.E_UNKNOWN.rawValue,
                        "Purchased failed for sku:\(sku): \(error.localizedDescription)",
                        error)
                }
            } else {
                reject("E_DEVELOPER_ERROR", "Invalid product ID. Did you call getProducts/Subscriptions", nil)
            }
        }
    }

    @objc public func isEligibleForIntroOffer(
        _ groupID: String,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        Task {
            let isEligibleForIntroOffer = await Product.SubscriptionInfo.isEligibleForIntroOffer(for: groupID)
            resolve(isEligibleForIntroOffer)
        }
    }

    @objc public func subscriptionStatus(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        Task {
            do {
                let status: [Product.SubscriptionInfo.Status]? = try await products[sku]?.subscription?.status
                guard let status = status else {
                    resolve(nil)
                    return
                }
                resolve(status.map({s in serialize(s)}))
            } catch {
                reject(IapErrors.E_UNKNOWN.rawValue, "Error getting subscription status", error)
            }
        }
    }

    @objc public func currentEntitlement(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        Task {
            if let product = products[sku] {
                if let result = await product.currentEntitlement {
                    do {
                        // Check whether the transaction is verified. If it isn’t, catch `failedVerification` error.
                        let transaction = try checkVerified(result)
                        resolve(serialize(transaction))
                    } catch StoreError.failedVerification {
                        reject(IapErrors.E_UNKNOWN.rawValue, "Failed to verify transaction for sku \(sku)", StoreError.failedVerification)
                    } catch {
                        debugMessage(error)
                        reject(IapErrors.E_UNKNOWN.rawValue, "Error fetching entitlement for sku \(sku)", error)
                    }
                } else {
                    reject(IapErrors.E_DEVELOPER_ERROR.rawValue, "Can't find entitlement for sku \(sku)", nil)
                }
            } else {
                reject(IapErrors.E_DEVELOPER_ERROR.rawValue, "Can't find product for sku \(sku)", nil)
            }
        }
    }

    @objc public func latestTransaction(
        _ sku: String,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        Task {
            if let product = products[sku] {
                if let result = await product.latestTransaction {
                    do {
                        // Check whether the transaction is verified. If it isn’t, catch `failedVerification` error.
                        let transaction = try checkVerified(result)
                        resolve(serialize(transaction))
                    } catch StoreError.failedVerification {
                        reject(IapErrors.E_UNKNOWN.rawValue, "Failed to verify transaction for sku \(sku)", StoreError.failedVerification)
                    } catch {
                        debugMessage(error)
                        reject(IapErrors.E_UNKNOWN.rawValue, "Error fetching latest transaction for sku \(sku)", error)
                    }
                } else {
                    reject(IapErrors.E_DEVELOPER_ERROR.rawValue, "Can't find latest transaction for sku \(sku)", nil)
                }
            } else {
                reject(IapErrors.E_DEVELOPER_ERROR.rawValue, "Can't find product for sku \(sku)", nil)
            }
        }
    }

    @objc public func  finishTransaction(
        _ transactionIdentifier: String,
        resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        Task {
            if let transaction = transactions[transactionIdentifier] {
                debugMessage("Finishing transaction")
                await transaction.finish()
                debugMessage("Finished transaction")
                transactions.removeValue(forKey: transactionIdentifier)
                resolve(nil)
            } else {
                reject(IapErrors.E_DEVELOPER_ERROR.rawValue, "Invalid transaction Id", nil)
            }
        }
    }

    @objc public func pendingTransactions (
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        resolve(transactions.values.map({(t: Transaction) in serialize(t)}))
    }

    @objc public func sync(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in},
        reject: @escaping RCTPromiseRejectBlock = {_, _, _ in}
    ) {
        Task {
            do {
                try await AppStore.sync()
                resolve(nil)
            } catch {
                reject(IapErrors.E_SYNC_ERROR.rawValue, "Error synchronizing with the AppStore", error)
            }
        }
    }

    /**
     Should remain the same according to:
     https://stackoverflow.com/a/72789651/570612
     */
    @objc public func  presentCodeRedemptionSheet(
        _ resolve: @escaping RCTPromiseResolveBlock = { _ in },
        reject: @escaping RCTPromiseRejectBlock = { _, _, _ in }
    ) {
        #if !os(tvOS)
        SKPaymentQueue.default().presentCodeRedemptionSheet()
        resolve(nil)
        #else
        reject(IapErrors.E_USER_CANCELLED.rawValue, "This method is not available on tvOS", nil)
        #endif
    }

    func clearTransaction(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        Task {
            for await result in Transaction.unfinished {
                do {
                    // Check whether the transaction is verified. If it isn’t, catch `failedVerification` error.
                    let transaction = try checkVerified(result)
                    debugMessage("Finishing transaction")
                    await transaction.finish()
                    debugMessage("Finished transaction")
                    transactions.removeValue(forKey: String(transaction.id))
                } catch {
                    debugMessage("Failed to finish transaction")
                }
            }
            resolve(nil)
        }
    }
}
