var assert = require('assert');
var cart = require('../lib/potter');
describe('Basiscs', function () {
  it ('should calc 0 if no args given', function() {
    assert.equal(cart.getPrice(), 0);
  });
  it('should should be function', function() { 
	  assert.ok(typeof cart.getPrice == 'function'); 
	});
	it('should calculate a price for one argument', function() {
    assert.equal(cart.getPrice(1), 8);	
	});
  it('should calc 16 for 2 args', function() {
	  assert.equal(cart.getPrice(0,0), 16);
	});
  it('should calc 24 for 3 args', function() {
	  assert.equal(cart.getPrice(1,1,1), 24);
	});
});
describe('Simple discounts', function() {
  it('Gives discount for 2 different examples', function() {
    assert.equal(cart.getPrice(0,1), 8*2*0.95); 
	});
  it('Gives discount for 3 different examples', function() {
    assert.equal(cart.getPrice(0,1,2), 8*3*0.90);
  });
	it('Gives discount for 4 different examples', function() {
	  assert.equal(cart.getPrice(0,1,2,3),8*4*0.8);
	})  
  it('Gives discount for 5 different examples', function() {
    assert.equal(cart.getPrice(0,1,2,3,4),8*5*0.75);
  })	
});
describe('Several discounts', function() {
  it('Rebates a set of two and adds the one rest fully', function() {
    assert.equal(cart.getPrice(0,0,1), 8 + (8 * 2 * 0.95));	
	})
});
