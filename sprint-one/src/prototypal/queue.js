var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 var myQueue= Object.create(queueMethods);
 myQueue.storage={}
 myQueue.start=0;
 myQueue.end=0;
 return myQueue
};

var queueMethods = {};

queueMethods.size=function(){
  return Object.keys(this.storage).length
}

queueMethods.enqueue=function(value){
  this.storage[this.end]=value
  this.end++
}
queueMethods.dequeue=function(){
  var deletedVal=this.storage[this.start]

  delete this.storage[this.start]
  this.start++;
  return deletedVal
}