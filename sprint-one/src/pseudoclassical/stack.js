var Stack = function() {

    this.storage={}
    this.start=0

};

Stack.prototype.size=function(){
  return this.start
}
Stack.prototype.push=function(value){
  this.storage[this.start]=value
  this.start++
}

Stack.prototype.pop=function(){
  if(this.start>0){
    var tempVal=this.storage[this.start-1]
    this.start--
    return tempVal
  }
}
  var myStack=new Stack()

