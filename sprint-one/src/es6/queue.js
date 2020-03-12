class Queue {

    constructor() {
      this.storage={}
      this.start=0;
      this.end=0;
    }
    size(){
      return this.end-this.start
    }
    enqueue(value){
      this.storage[this.end]=value
      this.end++
    }
    dequeue(){
      if((this.end-this.start) > 0){
        var deletedVal = this.storage[this.start]
        delete this.storage[this.start]
        this.start++
        return deletedVal
       }
    }
}
