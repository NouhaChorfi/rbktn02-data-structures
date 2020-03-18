var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
    this._storage[item]= item
};

setPrototype.contains = function(item) {
  for (var element in this._storage){
    if(item === element){
      return true
    }
  }
  return false
};

setPrototype.remove = function(item) {
      delete this._storage[item]
};
 var newSet= Set();
/*
 * Complexity: What is the time complexity of the above functions?
 */
