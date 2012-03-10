var assert = require('assert');
var cart = require('../lib/potter');
describe('Basiscs', function () {
  it('should should be function', function() { 
	  assert.ok(typeof cart.getPrice == 'function'); 
	});
	it('should calculate a price for one numeric argument', function() {
    assert.equal(cart.getPrice(1), 8);	
	});
});
