class Node{
    constructor(val=0, next=null){
        this.val = val;
        this.next = next;
    }
}

class ListNode {
    constructor(val){
        let node = new Node(val);
        this.head = this.tail = node;
    }

    insertNumber(val){
        let node = new Node(val);
        this.tail.next = node;
        this.tail = node;
    }
}

function arrToLL(arr){
    let list = new ListNode(arr[0]);
    if(arr.length>1){
        for(let i=1; i<arr.length; i++){
            list.insertNumber(arr[i])
            
        }
    }
    return list.head;
}

function addTwoNumbers(l1, l2){
    // console.log(l1, l2);
    let headOfTotal = new ListNode(0);
    let tailOfTotal = headOfTotal;
    let sum;
    let carry = 0; 
    while(l1 !== null || l2 !== null){
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;
        // console.log(x, y);
        sum = x+ y+ carry;
        tailOfTotal.insertNumber(sum%10)
        carry = parseInt(sum/10);

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;

    }
    if(carry){
        tailOfTotal.insertNumber(carry)
        
    }

    return  headOfTotal.head.next;

} 

function lLToArr(list){
    let arr = [];
   
    let current = list;
  
    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }
  
    return arr;

}

const result1 = arrToLL([2,4,4])
const result2 = arrToLL([5,7,4])
const result = addTwoNumbers(result1, result2)
console.log(lLToArr(result));