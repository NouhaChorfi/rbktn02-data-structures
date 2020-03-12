var Queue = function() {
  this.storage = {};
  this.start = 0;
  this.end = 0
};

Queue.prototype.size = function(){
  return Object.keys(this.storage).length
}

Queue.prototype.enqueue = function(value){
    this.storage[this.end]=value
    this.end ++
}

Queue.prototype.dequeue = function(){
  var deletedVal = this.storage[this.start]
  delete this.storage[this.start]
  this.start++
  return deletedVal
}

