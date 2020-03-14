var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
      if (this.head === null){
        this.head = newNode
        this.tail = newNode
      } else{
        this.tail.next= newNode
        this.tail = newNode
    }
  };

  list.removeHead = function() {
    var removedHeadVal = this.head.value
    if(this.head.next === null){
        this.head = null
        this.tail=null
    } else {
    this.head = this.head.next
    }
    return removedHeadVal
  };

  list.contains = function(target) {
    if(this.head === null){
      return false
    }
    var nodeSearch=this.head
    while(nodeSearch !== null){
        if(nodeSearch.value === target){
            return true
        }
        nodeSearch=nodeSearch.next
    }
    return false
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
