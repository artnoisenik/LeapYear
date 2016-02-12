var code = require('../main');
var expect = require('chai').expect;

describe('Leap Year', function() {
  it('Should be true for years / 4 || 400', function() {
    expect(code.leapYear( 2016 )).to.equal(true);
  })
});

describe('Leap Year', function() {
  it('Should be false for years / 100 && not 400', function() {
    expect(code.leapYear( 1700 )).to.equal(false);
  })
});
