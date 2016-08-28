var chai = require('chai');
var expect = chai.expect;
var RomanNumber = require('./../app/roman-number');

describe('RomanNumber tests', function() {
  it('Throws correct error when parameter is not provided', function() {
    expect(function() {
      new RomanNumber();
    }).to.throw('value required');
  });
});
