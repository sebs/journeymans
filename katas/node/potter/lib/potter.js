exports.getPrice = function() {
	// we build a datastruct where we can pop of the elements and count em
	// we need this so we can apply multiple
	var index = this.unique(arguments);
	var cart = [];
	for (var i in index) {
	  cart[index[i]] = [];
	}
	// sort in new datastruct
	for (var j in arguments) {
		cart[arguments[j]].push(1);
	}
 

	// create a map of functions in a array to map count to execution 
	var rebateStrategies = [];

	/*
	 * We Calculate the pricing strategy for one or 0 books
	 */
  var strategyNoAndOneType = function(cart) {
	  // now walk over the datastruct and calc stuff
	  var price = 0;
	  for (var k in cart) {
	    for (var l in cart[k]) {
	      price += 8;
		  }
	  }
	  return price;
	}
  var strategyTwoTypes = function(cart) {
    return 2*8*0.95;
  }  
   
  var strategyThreeTypes = function(cart) {
    return 3*8*0.90;
	}

  var strategyFourTypes = function(cart) {
    return 4*8*0.8;
	}
  
  var strategyFiveTypes = function(cart) {
    return 5*8*0.75;
  }
	console.log([index.length, arguments.length]);
//	if (index.length == arguments.length) {
	// we use this when we only have one type in the set
	rebateStrategies[0] = strategyNoAndOneType(cart);
	rebateStrategies[1] = strategyNoAndOneType(cart);
  rebateStrategies[2] = strategyTwoTypes(cart);
	rebateStrategies[3] = strategyThreeTypes(cart);
  rebateStrategies[4] = strategyFourTypes(cart);
	rebateStrategies[5] = strategyFiveTypes(cart);
  return rebateStrategies[index.length];
	// }
}

exports.unique = function(input) {
  var a = [];
  var l = input.length;
  for(var i=0; i<l; i++) {
    for(var j=i+1; j<l; j++) {
      // If this[i] is found later in the array
      if (input[i] === input[j]) {
        j = ++i;
		  }
    }
    a.push(input[i]);
  }
  return a;
};
