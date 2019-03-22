# waves-transactions build [![npm version](https://badge.fury.io/js/%40waves%2Fwaves-transactions.svg)](https://badge.fury.io/js/%40waves%2Fwaves-transactions)

See the original repo of [waves-transactions](https://github.com/wavesplatform/waves-transactions) for all details.

## to build:

```
git clone https://github.com/j0k/waves-transactions
cd "waves-transactions"
npm install
npm install --save-dev typescript ts-loader
npm run build

webpack
```

## to use:

add `dist_libs/waves_transactions.js` to your JS libs and page

```
cp dist_libs/waves_transactions.js ../wallet2console/libs
```

```
<script src="./libs/waves_transactions.js"></script>
```

use like:
```
<script type="text/javascript">
  var wtrans = waves_transactions;

  var wallet = {
    'address':'',
    'pubKey':'',
    'privKey':'',
    'seed':''
  };

  seed = wtrans.seedUtils.generateNewSeed(15);  
  keys = wtrans.libs.crypto.keyPair(seed);

  wallet.address = wtrans.libs.crypto.address(seed);
  wallet.pubKey  = keys.public;
  wallet.privKey = keys.private;
  wallet.seed    = seed;

  console.log(seed);
</script>
```

check [this example](https://j0k.github.io/wallet2console/) to click buttons and play with waves-transactions

## notes:

I use that bundle for the development only so heep it in mind

for the production dev-flow:
```
webpack --mode=production
```
