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
});
