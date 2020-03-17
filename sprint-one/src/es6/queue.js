class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
      this.storage={}
      this.start=0
      this.end=0

  }

  size(){
    return this.end-this.start
  }
  enqueue(value){
    this.storage[this.end]=value
    this.end++
  }
  dequeue(){
      if(this.end-this.start>0){
        var tempVal=this.storage[this.start]
        this.start++
        return tempVal
      }
  }

}
