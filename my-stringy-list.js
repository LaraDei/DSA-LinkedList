const MyLinkedList = require('./my-linked-list.js')
const SLL = new MyLinkedList()
function main(){
   
    SLL.insertFirst("Apollo");
    SLL.insertLast("Boomer");
    SLL.insertLast("Helo");
    SLL.insertLast("Husker");
    SLL.insertLast("Starbuck");
    SLL.insertLast("Tauhida")
    SLL.remove("Husker")
    SLL.insertBefore("Athena", "Boomer")
    SLL.insertAfter("Hotdog", "Helo")
    SLL.insertAt("Kat", 3)
    SLL.remove("Tauhida")
}

main()

function display(list) {
    if (!list.head) {
        console.log('This list has no items')
        return
      }
      let iteratedNode = list.head
      console.log('<= START =>')
      while(iteratedNode !== null) {
        console.log(iteratedNode.value)
        iteratedNode = iteratedNode.next
    
      }
      console.log('<= END =>')
    }
  
//console.log(display(SLL))

function size(list) {
  let index = 0
  let currNode = list.head
  while (currNode !== null) {
    currNode = currNode.next
    index++
    //console.log(index)
  }
  return index
}

//console.log(size(SLL))

function isEmpty(list) {
  let currNode = list.head
  if (!currNode) return true
  return false
}

//console.log(isEmpty(SLL))

function findPrevious(item, list) {
  if (!list.head || list.head === null) {
    return null
  }
  //if at head
  if (list.head.value === item) {
    return list.head
  }
  // else
  let currNode = list.head
  let previousNode
  while (currNode.value !== item) {
    previousNode = currNode
    currNode = currNode.next
  }
  return previousNode
}

//console.log(findPrevious("Hotdog", SLL));

function findLast(list) {
  if (!list.head || list.head === null) {
    return null
  }
  //if at head
  if (list.head.next === null) {
    return list.head
  }
  // else
  let currNode = list.head
  while (currNode.next !== null) {
    currNode = currNode.next
  }
  return currNode
}

//console.log(findLast(SLL));

function reverseList(list) {
  if (!list.head || list.head === null) {
    return null
  }
  // else
  let currNode = list.head
  let previousNode = null
  let temp = currNode

  while (currNode !== null) {
    temp = currNode.next
    currNode.next = previousNode
    previousNode = currNode
    currNode = temp
  }
  list.head = previousNode
  return display(list)
}

//console.log(reverseList(SLL));

function third(list) {
  let index = 0
  let bounds = size(list)
  let currNode = list.head

  while (currNode !== null && index !== bounds - 3) {
    currNode = currNode.next
    index++
  }
  return currNode
}

//console.log(third(SLL))

function middle(list) {
  let index = 0
  let bounds = size(list)
  let currNode = list.head
  while (currNode !== null && index !== Math.floor(bounds / 2)) {
    currNode = currNode.next
    index++
  }
  return currNode
}

//console.log(middle(SLL))

function cycles(list) {
  if (!list.head || list.head === null) {
    return null;
  }
  let currNode = list.head;
  let tempNode = null;
  while (currNode !== null && currNode.next !== null) {
    tempNode = currNode.next;
    while (tempNode !== null) {
      if (currNode.value === tempNode.value) return "Has cycle.";
      tempNode = tempNode.next;
    }
    currNode = currNode.next;
  }
  return "No cycle.";
}

//console.log(cycles(SLL));
