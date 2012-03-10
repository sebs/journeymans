var assert = require('assert');
var cart = require('../lib/potter');
describe('Basiscs', function () {
  it('should return something', function() { 
	  assert.ok(typeof cart.getPrice == 'function'); 
	});
});
