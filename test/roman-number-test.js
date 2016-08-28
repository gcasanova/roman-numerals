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
});
