class Stack {

  constructor() {
    this.storage={};
    this.start=0;
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
      var deletedVal=this.storage[this.start-1];
      delete this.storage[this.start-1]
      this.start--
      return deletedVal
    }
  }
}
var stack=new Stack()