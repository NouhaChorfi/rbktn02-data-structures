var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start =0

  // Implement the methods below
  someInstance.push = function(value) {
    storage[start]= value
    start++
  };

  someInstance.pop = function() {
    if(start>0){
      var tempValue=storage[start-1]
      start--
      return tempValue
    }
  };

  someInstance.size = function() {
    return start
  };

  return someInstance;
};
