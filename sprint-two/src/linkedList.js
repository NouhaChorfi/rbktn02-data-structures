var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(this.head===null){
      this.head=Node(value)
      this.tail=Node(value)
    }
    else if(this.head.next===null){
      this.head.next= Node(value)
      this.tail=Node(value)
    }
    else{
      this.tail.next=Node(value)
      this.tail=this.tail.next
    }

  };

  list.removeHead = function() {
      var tempValue = this.head
      this.head = this.head.next
      return tempValue.value

  };

  list.contains = function(target) {
    var elementToVerify=this.head
    while (elementToVerify !== null){
        if(elementToVerify.value === target){
          return true
        }
        elementToVerify=elementToVerify.next
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
