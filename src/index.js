exports.forwardRate = function(spotExchangeRate, domesticInterestRate, foreignInterestRate, timePeriod) {
  return spotExchangeRate * (1 + (timePeriod * domesticInterestRate)) / (1 + (timePeriod * foreignInterestRate));
};
