const sumOf = require('./sumOf');
const assert = require('assert');

describe('Sum Of', () => {
  describe('calculate', () => {
    it('should return 8 for the sum of values that are multiples of 3 or 5 under the number 6', () => {
      const actual = sumOf.calculate(6);
      assert.equal(8, actual);
    })
    it('should return 60 for the sum of values that are multiples of 3 or 5 under the number 16', () => {
      const actual = fibonacci.calculate(6);
      assert.equal(60, actual);
    })
  })
})
