var Stack = function() {
  var myStack = Object.create(stackMethods)
  myStack.storage={};
  myStack.counter=0;

    return myStack;

};

var stackMethods = {};

stackMethods.size = function(){
  return Object.keys(this.storage).length
}
stackMethods.push=function(value){
   this.storage[this.counter]=value
   this.counter++
}
stackMethods.pop=function(){
  var deletedValue=this.storage[this.counter-1]
  delete this.storage[this.counter-1]
  this.counter--
  return deletedValue
}