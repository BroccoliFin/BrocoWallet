# BrocoWallet

**BrocoWallet** is a custom cryptocurrency wallet Chrome extension inspired by MetaMask.  
It allows users to manage wallets, view balances, send transactions, and interact with dApps using ethers.js.  
Unique HODL-themed design.

Current status: MVP

## Features
- Wallet creation and import
- Balance & transaction history
- Sending ETH/tokens
- Message & transaction signing
- Support for Ethereum-compatible networks
- Modern, clean UI

## Prerequisites
- Google Chrome (or any Chromium-based browser)
- Node.js v18+ & npm (required only for chromeapi folder)

## Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/BroccoliFin/BrocoWallet.git
   ```
   ```bash
   cd BrocoWallet

2. **Install dependencies (for chromeapi)**
   
   ```bash
   cd chromeapi
   ```
   ```bash
   npm install
   ```
   ```bash
   cd ..
   ```
3. **Load the extension in Chrome**
   
   Open Chrome and go to chrome://extensions/
   Enable Developer mode (top right corner)
   Click Load unpacked
   Select the BrocoWallet folder
   Extension icon will appear in your toolbar

   Test the walletClick the extension icon to open popup
   Create or import wallet
   Switch to testnet (Sepolia recommended)
   Get test ETH: https://sepoliafaucet.com/

4. **Project Structure**

BrocoWallet/
├── assets/                 # images and logos
│   └── devbroco.png
├── chromeapi/              # Node.js part with dependencies
│   ├── package.json
│   └── ...
├── popup.html              # Main wallet interface
├── popup.js                # Core logic (ethers.js + wallet)
├── style.css               # Styles
├── manifest.json           # Extension configuration
├── ethers.js               # Bundled ethers library
└── README.md               # This file

5. **Configuration (optional)**

   If backend features are used (MongoDB, JWT, etc.):Create file chromeapi/.env (do not commit it!)
   Use template from chromeapi/config.env.example

6. **Development**

   Edit popup.js, popup.html, style.css → reload extension in chrome://extensions/
   Work in chromeapi → run npm install when dependencies change

7. **Contributing**

   Pull requests welcome!
   Fork → branch → commit → PR

8. **License**

   MIT

9.  **Contact**
 
   GitHub: https://github.com/BroccoliFin
   X: https://x.com/broccolifinance
   Telegram: https://t.me/devbroco
Questions, bugs, ideas — open an Issue!

