var Queue = function() {
  var myQueue = Object.create(queueMethods)
  myQueue.storage={};
  myQueue.start=0;
  myQueue.end=0;

    return myQueue;
  };

var queueMethods = {};

queueMethods.size=function(){
  return this.end-this.start
}

queueMethods.enqueue=function(value){
  this.storage[this.end]=value
  this.end++
}

queueMethods.dequeue=function(value){
  if (this.end-this.start >0){
    var tempVal= this.storage[this.start]
    this.start++
    return tempVal
  }

}

