# Next.js Project Setup

## Installation

```sh
pnpm create next-app .

pnpm install next crypto

pnpm dev
```

# Test Card Numbers
Use the following test card numbers to simulate successful payments:

- **Visa**: `4916217501611292`
- **MasterCard**: `5307732125531191`
- **AMEX**: `346781005510225`

For ‘Name on Card’, ‘CVV’, and ‘Expiry date’, you can enter any valid data.

### Decline Scenarios

To simulate specific decline scenarios, use these test card numbers:

#### Insufficient Funds
- **Visa**: `4024007194349121`
- **MasterCard**: `5459051433777487`
- **AMEX**: `370787711978928`

#### Limit Exceeded
- **Visa**: `4929119799365646`
- **MasterCard**: `5491182243178283`
- **AMEX**: `340701811823469`

#### Do Not Honor
- **Visa**: `4929768900837248`
- **MasterCard**: `5388172137367973`
- **AMEX**: `374664175202812`

#### Network Error
- **Visa**: `4024007120869333`
- **MasterCard**: `5237980565185003`
- **AMEX**: `373433500205887`

**Note:** Any card number not listed above will result in a failed payment.
