export class WalletError extends Error {
  error?: any;

  constructor(name: string, message: string, error?: any) {
    super(message);
    this.name = name;
    this.error = error;

    // Fix prototype chain (important for instanceof checks to work)
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// Subclasses with predefined messages
export class WalletNotFoundError extends WalletError {
  constructor(error?: any) {
    super('WalletNotFoundError', 'The wallet is not found.', error);
  }
}

export class WalletNotSelectedError extends WalletError {
  constructor(error?: any) {
    super('WalletNotSelectedError', 'No wallet is selected. Please select a wallet.', error);
  }
}

export class WalletDisconnectedError extends WalletError {
  constructor(error?: any) {
    super('WalletDisconnectedError', 'The wallet is disconnected. Please connect first.', error);
  }
}

export class WalletWindowClosedError extends WalletError {
  constructor(error?: any) {
    super('WalletWindowClosedError', 'The QR window is closed.', error);
  }
}

// Subclasses without fixed messages — you can pass a custom one when needed
export class WalletConnectionError extends WalletError {
  constructor(message = 'Failed to connect to the wallet.', error?: any) {
    super('WalletConnectionError', message, error);
  }
}

export class WalletDisconnectionError extends WalletError {
  constructor(message = 'Failed to disconnect the wallet.', error?: any) {
    super('WalletDisconnectionError', message, error);
  }
}

export class WalletSignMessageError extends WalletError {
  constructor(message = 'Failed to sign the message.', error?: any) {
    super('WalletSignMessageError', message, error);
  }
}

export class WalletSignTransactionError extends WalletError {
  constructor(message = 'Failed to sign the transaction.', error?: any) {
    super('WalletSignTransactionError', message, error);
  }
}

export class WalletWalletLoadError extends WalletError {
  constructor(message = 'Failed to load the wallet.', error?: any) {
    super('WalletWalletLoadError', message, error);
  }
}

export class WalletSwitchChainError extends WalletError {
  constructor(message = 'Failed to switch the chain.', error?: any) {
    super('WalletSwitchChainError', message, error);
  }
}

export class WalletGetNetworkError extends WalletError {
  constructor(message = 'Failed to get network information.', error?: any) {
    super('WalletGetNetworkError', message, error);
  }
}
