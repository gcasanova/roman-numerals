var prompt = require('prompt');
var RomanNumber = require('./roman-number');

prompt.start();
ask();

function ask() {
  prompt.get(['number'], function(err, result) {
    if (!err) {
      try {
        var romanNumber = new RomanNumber(result.number);
        console.log(romanNumber.toString() + " == " + romanNumber.toInt());
      } catch (error) {
        console.log(error);
      }

      ask();
    }
  });
}
