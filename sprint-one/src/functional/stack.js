var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var i = 0
  // Implement the methods below
  someInstance.push = function(value) {
    storage[i] = value
    i++
  };

  someInstance.pop = function() {
    console.log(storage[i-1], i-1)
    var deletedValue=storage[i-1]
    delete storage[i-1]
    i=i-1
    return deletedValue
  };

  someInstance.size = function() {
    return Object.keys(storage).length

  };

  return someInstance;
};
