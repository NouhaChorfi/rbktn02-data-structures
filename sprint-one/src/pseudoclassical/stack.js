var Stack = function() {
  this.storage = {};
  this.start=0;
};

Stack.prototype.size=function(){
  return Object.keys(this.storage).length
}
Stack.prototype.push=function(value){
  this.storage[this.start]=value
  this.start++
}
Stack.prototype.pop=function(){
  var deletedvalue=this.storage[this.start-1];
  delete this.storage[this.start-1];
  this.start--;
  return deletedvalue;
}

var stack= new Stack()