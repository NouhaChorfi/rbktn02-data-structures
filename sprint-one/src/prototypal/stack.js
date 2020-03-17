var Stack = function() {
  var myStack = Object.create(stackMethods);
  myStack.storage={}
  myStack.start=0
  return myStack;
};

var stackMethods = {};

stackMethods.size=function(){
  return this.start
}
stackMethods.push=function(value){
    this.storage[this.start]=value;
    this.start++
}
stackMethods.pop=function(){
    if (this.start >0){
      var tempVal=this.storage[this.start-1]
      this.start--
      return tempVal
    }
}

