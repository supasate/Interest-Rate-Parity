# Interest Rate Parity JS

[![Build Status](https://travis-ci.org/supasate/Interest-Rate-Parity-JS.svg?branch=master)](https://travis-ci.org/supasate/Interest-Rate-Parity-JS)

A library to calculate forward rate considering [interest rate parity](https://en.wikipedia.org/wiki/Interest_rate_parity) in Node.js

## Installation

`npm install --save interest-rate-parity`

## Usage

ES5
``` javascript
var forwardRate = require('interest-rate-parity').forwardRate;

var spotExchangeRate = 0.78; // AUD/USD = 0.78
var audInterestRate = 0.018; // 1.8% interest rate in Australia
var usdInterestRate = 0.01; // 1% interest rate in U.S.
var timePeriod = 1; // 1 year
var rate = forwardRate(spotExchangeRate, audInterestRate, usdInterestRate);

console.log('Forward rate of AUD/USD considering the Interest Rate Parity is ' + rate);
// TForward rate of AUD/USD considering the Interest Rate Parity is
```

ES6
``` javascript
import { forwardRate } from 'interest-rate-parity'

const spotExchangeRate = 0.78; // AUD/USD = 0.78
const audInterestRate = 0.018; // 1.8% interest rate in Australia
const usdInterestRate = 0.01; // 1% interest rate in U.S.
const timePeriod = 1; // 1 year
const rate = forwardRate(spotExchangeRate, audInterestRate, usdInterestRate);

console.log('Forward rate of AUD/USD considering the Interest Rate Parity is ' + rate);
// TForward rate of AUD/USD considering the Interest Rate Parity is
```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## License

Copyright (c) 2016 Supasate Choochaisri

Licensed under the [Apache License](https://github.com/supasate/Interest-Rate-Parity-JS/blob/master/LICENSE).
