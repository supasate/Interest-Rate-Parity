const expect = require('chai').expect;
const forwardRate = require('../src').forwardRate;

describe('Interest Rate Parity', () => {
  it('should calculate forward rate correctly', () => {
    const spotExchangeRate = 0.78; // AUD/USD = 0.78
    const audInterestRate = 0.018; // 1.8% interest rate in Australia
    const usdInterestRate = 0.01; // 1% interest rate in U.S.
    const timePeriod = 1; // 1 year
    const rate = forwardRate(spotExchangeRate, audInterestRate, usdInterestRate, timePeriod);

    expect(rate).to.equal(0.7861782178217822);
  });
});
