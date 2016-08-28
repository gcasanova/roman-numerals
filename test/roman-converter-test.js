var chai = require('chai');
var expect = chai.expect;
var RomanConverter = require('./../app/roman-converter');

describe('RomanConverter toRoman tests', function() {
  it('Throws correct error when no parameter is provided', function() {
    expect(function() {
      RomanConverter.toRoman();
    }).to.throw('value required');
  });

  it('Throws correct error when parameter is not a number', function() {
    expect(function() {
      RomanConverter.toRoman('fas23');
    }).to.throw('invalid value');
  });

  it('Correctly converts number 3 to roman number', function() {
    expect(RomanConverter.toRoman(3)).equals('III');
  });

  it('Correctly converts number 4 to roman number', function() {
    expect(RomanConverter.toRoman(4)).equals('IV');
  });

  it('Correctly converts number 5 to roman number', function() {
    expect(RomanConverter.toRoman(5)).equals('V');
  });

  it('Correctly converts number 1968 to roman number', function() {
    expect(RomanConverter.toRoman(1968)).equals('MCMLXVIII');
  });

  it('Correctly converts number 2999 to roman number', function() {
    expect(RomanConverter.toRoman(2999)).equals('MMCMXCIX');
  });

  it('Correctly converts number 3000 to roman number', function() {
    expect(RomanConverter.toRoman(3000)).equals('MMM');
  });
});

describe('RomanConverter toArabic tests', function() {
  it('Throws correct error when no parameter is provided', function() {
    expect(function() {
      RomanConverter.toArabic();
    }).to.throw('value required');
  });

  it('Throws correct error when parameter is empty string', function() {
    expect(function() {
      RomanConverter.toArabic('');
    }).to.throw('value required');
  });

  it('Throws correct error when roman number contains more than three consecutive symbols repeated', function() {
    expect(function() {
      RomanConverter.toArabic('IIII');
    }).to.throw('invalid value');
  });

  it('Not throws validation error when roman number contains three consecutive symbols repeated', function() {
    expect(function() {
      RomanConverter.toArabic('III');
    }).to.not.throw(Error);
  });

  it('Correctly converts number III to arabic number', function() {
    expect(RomanConverter.toArabic('III')).equals(3);
  });

  it('Correctly converts number IV to arabic number', function() {
    expect(RomanConverter.toArabic('IV')).equals(4);
  });

  it('Correctly converts number V to arabic number', function() {
    expect(RomanConverter.toArabic('V')).equals(5);
  });

  it('Correctly converts number CDXXIX to arabic number', function() {
    expect(RomanConverter.toArabic('CDXXIX')).equals(429);
  });

  it('Throws correct error when parameter is not a roman number', function() {
    expect(function() {
      RomanConverter.toArabic('CD1X');
    }).to.throw('invalid value');
  });

  it('Throws correct error when parameter is not a roman number', function() {
    expect(function() {
      RomanConverter.toArabic('error');
    }).to.throw('invalid value');
  });

  it('Correctly converts number MCDLXXXII to arabic number', function() {
    expect(RomanConverter.toArabic('MCDLXXXII')).equals(1482);
  });

  it('Correctly converts number MCMLXXX to arabic number', function() {
    expect(RomanConverter.toArabic('MCMLXXX')).equals(1980);
  });

  it('Throws correct error when roman number contains more than three consecutive symbols repeated', function() {
    expect(function() {
      RomanConverter.toArabic('MMMMCMXCIX');
    }).to.throw('invalid value');
  });

  it('Throws correct error when roman number contains more than three consecutive symbols repeated', function() {
    expect(function() {
      RomanConverter.toArabic('MMMMDMXCIX');
    }).to.throw('invalid value');
  });
});
