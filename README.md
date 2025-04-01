# PayHere Payment Gateway Integration with Next.js

![image](https://github.com/user-attachments/assets/fc53ffc2-4f0b-4a0b-ab49-1cf9eb488477)

![image](https://github.com/user-attachments/assets/4be58f85-ef7b-4642-9348-32346c2882b6)

A complete implementation of PayHere payment gateway integration using Next.js 15.

## ✨ Features

- Complete PayHere checkout flow
- Server-side hash generation
- Sandbox mode for testing

## 🚀 Quick Start

### Installation
```sh
pnpm create next-app .
pnpm install next crypto
pnpm dev
```

### Setup Environment (.env.local)
```bash
MERCHANT_ID=XXXXXX
MERCHANT_SECRET="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
NEXT_PUBLIC_PAYHERE_JS="https://www.payhere.lk/lib/payhere.js"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

## 💳 Test Cards

### Successful Payments
Use these test card numbers with any valid name, CVV and expiry date:

| Card Type       | Number             |
|-----------------|--------------------|
| Visa            | 4916217501611292   |
| MasterCard      | 5307732125531191   |
| AMEX            | 346781005510225    |

### Decline Scenarios

#### Insufficient Funds
- Visa: `4024007194349121`
- MasterCard: `5459051433777487`
- AMEX: `370787711978928`

#### Limit Exceeded
- Visa: `4929119799365646`
- MasterCard: `5491182243178283`
- AMEX: `340701811823469`

#### Do Not Honor
- Visa: `4929768900837248`
- MasterCard: `5388172137367973`
- AMEX: `374664175202812`

#### Network Error
- Visa: `4024007120869333`
- MasterCard: `5237980565185003`
- AMEX: `373433500205887`

**Note:** Any card number not listed above will result in a failed payment.

## 🔑 Getting Credentials

### Sandbox Testing
1. Register at [PayHere Sandbox](https://sandbox.payhere.lk/)
2. Use these test credentials:
   ```
   Merchant ID: 122XXXX
   Merchant Secret: MzYyMTExXXXXXXXXXXXXXXXXXXXXXXX==
   ```
