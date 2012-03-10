exports.getPrice = function() {
	// we build a datastruct where we can pop of the elements and count em
	var index = this.unique(arguments);
	var cart = {};
	for (var i in index) {
	  cart[index[i]] = [];
	}
	// sort in new datastruct
	for (var j in arguments) {
		cart[arguments[j]].push(1);
	}
  // now walw over the datastruct and calc stuff
  var price = 0;
	for (var k in cart) {
	  for (var l in cart[k]) {
	    price += 8;
		}
	}
	return price;
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
