
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

var removeNthFromEnd = function(head, n){
    let current = new ListNode(0);
    let dummyHead= current;
    console.log(head);

    dummyHead.head = head;
    let count = 1;
    if(n==1){
        return head.next
    }else{
        while(head !==null){
            count++;
            if(count == n){
                dummyHead.head.next = head.next.next ;
            }
            dummyHead.head = head.next;
            head = head.next

        }
    }

    
    return current.head;
};

function arrToLL(arr){
    let list = new ListNode(arr[0]);
    if(arr.length>1){
        for(let i=1; i<arr.length; i++){
            list.insertNumber(arr[i])
            
        }
    }
    return list.head;
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

const result1 = arrToLL([2,4,4,5]);
const result = removeNthFromEnd(result1, 2)
console.log(result);
