var assert = require('assert');
var cart = require('../lib/potter');
describe('Basiscs', function () {
  it('should should be function', function() { 
	  assert.ok(typeof cart.getPrice == 'function'); 
	});
	it('should calculate a price for one argument', function() {
    assert.equal(cart.getPrice(1), 8);	
	});
  it ('should calc 16 for 2 args', function() {
	  assert.equal(cart.getPrice(1,1), 16);
	});
});
