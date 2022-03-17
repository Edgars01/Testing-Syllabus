# Change Maker

You need to write the software to calculate the minimum number of coins required to return an amount of change to a user of Acme Vending machines. For example, the vending machine has coins 1,2,5 and 10 what is the minimum number of coins required to make up the change of 43 cents?

The coin denominations will be supplied as a parameter. This is so the algorithm is not specific to one country. You may not hardcode these into the algorithm, they must be passed as a parameter.

The country’s denominations to use for the kata are:

- British Pound
  - 1,2,5,10,20,50
- US Dollar
  - 1,5,10,25
- Norwegian Krone
  - 1,5,10,20

The kata assumes an infinite number of coins of each denomination. You are to return an array with each coin to be given as change.

### Examples

```javascript
var coinDenominations = [1, 5, 10, 25]; // coin values converted to whole numbers
var machine = new VendingMachine(coinDenominations);
var purchaseAmount = 1.25; // amount the item cost
var tenderAmount = 2.0; // amount the user input for the purchase
var change = machine.CalculateChange(purchaseAmount, tenderAmount);
// The expected result would be - (coin denominations as whole numbers)
// change[0] = 25
// change[1] = 25
// change[2] = 25
```

### Bonus

Remove the assumption that there are infinite coins of each denomination. Modify the code to accept a fixed number of each denomination. It will affect the change calculation in that you now need to consider the availability of coins when calculating change.
