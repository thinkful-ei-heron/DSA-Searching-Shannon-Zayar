const BST = require('./BST_example')






/*1. First step: index = 5 and the item would be 12. We would then look to
see if our item is equal to, less than, or greater than our value (8). 12 is greater
than 8 so then we recursively call the function passing in the same array with an end value of
4 (index-1) this time. So on the following search we would look at [3,5,6,8,11]. the index would then be 2 and the item
would be 6. We determine that 6 is less than 8, so we recursively call the function passing in index + 1 (3) as the
start value. We would then be looking at [8,11]. index would be 3 (start index 3 plus end index 4 / 2). item would be 8. 8 is equal to the value 8 so then
the index of 3 would be returned.

2.
The search would start at index = 5 and compare 12 to 16 and since 16 is higher, we search again from index = 6 to end index 9, comparing 16 to 15. Since 16 is higher, we search again from index = 8 to end index 9. We compare 17 to 16 and since 16 is lower, we try to recursively call the function with a start index of 8 and end index of 7. Since start is > end, we return -1.

*/

function linearSearch(array, value) {
  let searches = 0
  for (let i = 0; i < array.length; i++) {
    searches += 1
    if (array[i] === value) {
      return searches
    }
  }
  return 'not found'
}


function bookSearch(array, dewey, title, start, end) {
  let deweyNum = parseFloat(dewey)
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  const itemDewey = parseFloat(item.dewey)

  if (item.dewey === dewey) {
    if(title === item.title){
      return item
    } else if (title > item.title){
      return bookSearch(array, dewey, title, index+1, end)
    } else {
      return bookSearch(array,dewey, title, start, index-1)
    }
  }
  else if (itemDewey < deweyNum) {
      return bookSearch(array, dewey, title, index + 1, end);
  }
  else if (itemDewey > deweyNum) {
      return bookSearch(array, dewey, title, start, index - 1);
  }
};

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];


// console.log(bookSearch(library, '231.7652', 'Starlight and Time'))


/*
in-order: 14 15 19 25 27 35 79 89 90 91
pre-order: 35 25 15 14 19 27 89 79 91 90
post-order: 14 19 15 27 25 79 90 91 89 35

      35
      /  \
    25     89
    / \    / \
  15 27  79  91
  /\         /\
14  19     90


post-order: 5 7 6 9 11 10 8
pre-order: 8, 6, 5, 7, 10, 9, 11

        8
        / \
      6   10
      /\    / \
    5  7   9  11


/* #5
pre-order = 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
in-order = 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
post-order = 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
*/

const tree = new BST()
const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]

data.forEach(num => {
  tree.insert(num)
})

function inOrder(tree, arr=[]) {
  if (tree.left) {
    inOrder(tree.left, arr)
  }
  arr.push(tree.key)
  if (tree.right) {
    inOrder(tree.right, arr)
  }
  return arr;
}

function preOrder(tree, arr=[]) {
  arr.push(tree.key)
  console.log(arr);
  if (tree.left) {
    preOrder(tree.left, arr)
  }
  if (tree.right) {
    preOrder(tree.right, arr)
  }

}

function postOrder(tree, arr=[]) {
  if (tree.left) {
    postOrder(tree.left, arr)
  }
  if (tree.right) {
    postOrder(tree.right, arr)
  }
  arr.push(tree.key)
  console.log(arr)
}

// preOrder(tree)
// inOrder(tree)
// postOrder(tree)
class Queue {
  constructor() {
    this.first = null;
    this.last = null;

  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;

  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }

    return node.data;
  }
}

class _Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}
const starShipTree = new BST();
starShipTree.insert(15, 'Captain Picard')
starShipTree.insert(20, 'Commander Data')
starShipTree.insert(10, 'Commander Riker')
starShipTree.insert(5, 'Lt Cmdr Worf')
starShipTree.insert(11, 'Lt Cmdr LaForge')
starShipTree.insert(3, 'Lieutenant security-officer')
starShipTree.insert(25, 'Lt. Cmdr Crusher')
starShipTree.insert(24, 'Lieutenant Selar');

function bfs(tree, values = []) {
  const queue = new Queue();
  const node = tree;
  queue.enqueue(node);
  while (queue.first || queue.last) {
      const _node = queue.dequeue();
      values.push(_node.value);

      if (_node.left) {
          queue.enqueue(_node.left);
      }

      if (_node.right) {
          queue.enqueue(_node.right);
      }
  }

  return values;
}

console.log(bfs(starShipTree));

/* answer should be $26
        128
        / \
      97
      / \
        121
        / \
      98   123
      / \
    97  105


  */

function maxProfit(tree, profit=0, maxVal=0) {
  if (tree.right) {
    profit += tree.right.key - tree.key;
    maxVal = maxVal < profit ? profit : maxVal ;
    maxProfit(tree.right, profit, maxVal);
  }
  else if (tree.left) {
    profit = 0;
    maxProfit(tree.left, profit, maxVal);
  } 
  else {
    console.log(maxVal);
  }
}

const sharePrices = [128, 97, 121, 123, 98, 97, 105]
let moneyTree = new BST()
sharePrices.forEach(num => {
  moneyTree.insert(num)
})

maxProfit(moneyTree);