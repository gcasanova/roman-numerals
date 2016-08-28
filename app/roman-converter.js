function toRoman(sArabicNumeral) {
  if (sArabicNumeral === undefined || !sArabicNumeral.toString().length)
    throw new Error('value required');

  if (typeof sArabicNumeral !== 'number')
    throw new Error('invalid value');
}

module.exports.toRoman = toRoman;
