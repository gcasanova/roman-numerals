var converter = require('./roman-converter');

function RomanNumber(value) {
  // constructor parameter cannot be empty nor be null
  if (value === undefined || value === null | value === '')
    throw new Error('value required');

  // check if value is a number
  if (!isNaN(parseFloat(value)) && isFinite(value)) {
    // check value is within valid range (1 - 3999)
    if (value < 1 || value > 3999)
      throw new Error('invalid range');

    this._arabic = value;
    this._roman = converter.toRoman(value);

    // else it should be a roman number
  } else {
    this._roman = value;
    this._arabic = converter.toArabic(value);
  }
}

RomanNumber.prototype.toString = function() {
  return this._roman;
};

RomanNumber.prototype.toInt = function() {
  return this._arabic;
};

module.exports = RomanNumber;
