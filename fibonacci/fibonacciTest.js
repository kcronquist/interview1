const fibonacci = require('./fibonacci');
const assert = require('assert');

describe('Fibonacci', () => {
  describe('calculate', () => {
    it('should return 1 for the 2nd number in the fibonacci sequence', () => {
      const actual = fibonacci.calculate(2);
      assert.equal(1, actual);
    })
    it('should return 5 for the 6th number in the fibonacci sequence', () => {
      const actual = fibonacci.calculate(6);
      assert.equal(5, actual);
    })
    it('should return 144 for the 13th number in the fibonacci sequence', () => {
      const actual = fibonacci.calculate(13);
      assert.equal(144, actual);
    })
  })
})
