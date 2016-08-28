var chai = require('chai');
var expect = chai.expect;
var RomanNumber = require('./../app/roman-number');

describe('RomanNumber tests', function() {
  it('Gets successfully created without new keyword', function() {
    var romanNumber = RomanNumber(1);
    expect(typeof romanNumber).equals('object');
  });

  it('Throws correct error when parameter is not provided', function() {
    expect(function() {
      new RomanNumber();
    }).to.throw('value required');
  });

  it('Throws correct error when parameter is null', function() {
    expect(function() {
      new RomanNumber(null);
    }).to.throw('value required');
  });

  it('Throws correct error when parameter is an empty string', function() {
    expect(function() {
      new RomanNumber('');
    }).to.throw('value required');
  });

  it('Throws correct error when parameter is 0', function() {
    expect(function() {
      new RomanNumber(0);
    }).to.throw('invalid range');
  });

  it('Throws correct error when parameter is 4000', function() {
    expect(function() {
      new RomanNumber(4000);
    }).to.throw('invalid range');
  });

  it('Throws correct error when parameter is 10000', function() {
    expect(function() {
      new RomanNumber(10000);
    }).to.throw('invalid range');
  });

  it('Gets successfully created when passing 500 as parameter', function() {
    expect(function() {
      new RomanNumber(500);
    }).to.not.throw(Error);
  });

  it('Correctly interprets 1 in roman numbers', function() {
    expect(new RomanNumber(1).toString()).equals('I');
  });

  it('Correctly interprets I in arabic numbers', function() {
    expect(new RomanNumber('I').toInt()).equals(1);
  });

  it('Converts to number and gets successfully created when passing "1473" as parameter', function() {
    expect(function() {
      new RomanNumber('1473');
    }).to.not.throw(Error);
  });
});
