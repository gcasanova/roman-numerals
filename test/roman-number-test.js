var chai = require('chai');
var expect = chai.expect;
var RomanNumber = require('./../app/roman-number');

describe('RomanNumber tests', function() {
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

  it('Gets successfully created when passing 500 as parameter', function() {
    expect(function() {
      new RomanNumber(500);
    }).to.not.throw(Error);
  });

  it('Correctly interprets 1 in roman numbers', function() {
    expect(new RomanNumber(1).toString()).equals('I');
  });
});
