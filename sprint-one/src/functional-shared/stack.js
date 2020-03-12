var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var myStack = {}
  myStack.storage={};
  myStack.start=0;
 _.extend(myStack, stackMethods)
 return myStack;
};

var stackMethods = {};

 stackMethods.size=function(){
  return Object.keys(this.storage).length
}
stackMethods.push=function(value){
  this.storage[this.start]=value;
  this.start++;
}
stackMethods.pop=function(value){
  var deletedValue=this.storage[this.start-1]
 delete this.storage[this.start-1];
 this.start--;
 return deletedValue

//  AssertionError: expected 1 to be at most 0
//  constructorPropertyCount = Object.keys(constructor).length;
//  assuming(extendsConstructor).expect(constructorPropertyCount).to.be.above(0);

}