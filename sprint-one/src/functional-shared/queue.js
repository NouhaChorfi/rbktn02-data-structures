var Queue = function() {
  var myQueue = {}
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  myQueue.instance={};
  myQueue.start=0;
  myQueue.end=0
 _.extend(myQueue, queueMethods)
 return myQueue
};

var queueMethods = {};

queueMethods.size=function(){
 return this.end-this.start
}


queueMethods.enqueue=function(value){
  this.instance[this.end]=value
  this.end++
}

queueMethods.dequeue=function(){
  if(this.end-this.start>0){
    var tempval=this.instance[this.start]
    this.start++
    return tempval
  }

}




