var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods)
 // newTree.addChild=addChild

  // your code here
  newTree.children = [];  // fix me IT WAS nULL WE CHANGED TO EMPTY ARRAY
  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value) {
    this.children.push(new Tree(value))
};

treeMethods.contains = function(target) {
    if(this.value === target){
      return true
    }
    for (var i= 0 ; i< this.children.length; i++){
      if(this.children[i].contains(target)){
        return true
      }
    }
    return false
};
/*
 * Complexity: What is the time complexity of the above functions?
 */