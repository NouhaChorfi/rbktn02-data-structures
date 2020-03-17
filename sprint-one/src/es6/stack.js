class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage={}
    this.start=0
  }

  size(){
    return this.start
  }
  push(value){
    this.storage[this.start]=value
    this.start++
  }
  pop(){
    if(this.start>0){
      var tempVal=this.storage[this.start-1]
      this.start--
      return tempVal

    }
  }

}