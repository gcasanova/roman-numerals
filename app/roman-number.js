function RomanNumber(value) {
  // constructor parameter cannot be empty nor be null
  if (value === undefined || value === null | value === '')
    throw new Error('value required');
}

module.exports = RomanNumber;
