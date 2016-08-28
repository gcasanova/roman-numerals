function toRoman(sArabicNumeral) {
  if (sArabicNumeral === undefined || !sArabicNumeral.toString().length)
    throw new Error('value required');

  if (typeof sArabicNumeral !== 'number')
    throw new Error('invalid value');

  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  var result = '';
  for (var i = 0; i <= decimal.length; i++) {
    while (sArabicNumeral % decimal[i] < sArabicNumeral) {
      result += roman[i];
      sArabicNumeral -= decimal[i];
    }
  }
  return result;
}

module.exports.toRoman = toRoman;
