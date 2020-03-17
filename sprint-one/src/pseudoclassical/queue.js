var Queue = function() {
  this.storage={}
  this.start=0
  this.end=0;

};

Queue.prototype.size=function(){
return this.end-this.start
}

Queue.prototype.enqueue=function(value){
  this.storage[this.end]=value
  this.end++
}
Queue.prototype.dequeue=function(){
  if(this.end-this.start> 0){
    var tempVal= this.storage[this.start];
    this.start++
    return tempVal
  }
}
var queue=new Queue()
