class Node{
    constructor(val=0, next=null){
        this.val = val;
        this.next = next;
    }
}

class ListNode {
    constructor(val=0){
        let node = new Node(val);
        this.head = this.tail = node;
        // this.length = 1;
    }

    insertNumber(val){
        let node = new Node(val);
        this.tail.next = node;
        this.tail = node;
        // this.length++;
    }
}

var addTwoNumbers = function(l1, l2) {
    let sumArr = [];
    let list1 = new ListNode(l1[0])
    let list2 = new ListNode(l2[0])
    let list3 = new ListNode((l1[0]+l2[0])%10)
    let c1=1, c2 =1;
    let carry=parseInt((l1[0]+l2[0])/10);
    if(l1.length > 1){
        for(let i=1; i<l1.length; i++){
            list1.insertNumber(l1[i])
            c1++;
        }
    }
    if(l2.length > 1){
        for(let i=1; i<l2.length; i++){
            list2.insertNumber(l2[i])
            c2++;
        }
    }
    if(c1>=c2){
        let data1 = list1.head.next;
        let data2 = list2.head.next
        let sum =0;
        
        while(data1){
            if(data2){
                sum = data1.val + data2.val+ carry;
                if(sum>=10){
                    carry=1;
                    sum= sum %10;
                    list3.insertNumber(sum)
                }else{
                    carry =0;
                    list3.insertNumber(sum)
                }
                data2 = data2.next
            }else{
                sum = data1.val + carry;
                if(sum>=10){
                    carry=1;
                    sum= sum %10;
                    list3.insertNumber(sum)
                }else{
                    carry =0;
                    list3.insertNumber(sum)
                }
            }
            data1 = data1.next;
            
        }
        if(carry){
            list3.insertNumber(sum)
        }
    }else{
        let data1 = list1.head.next;
        let data2 = list2.head.next
        let sum =0;
     
        let carry=0;
        while(data2){
            if(data1){
                sum = data1.val + data2.val+ carry;
                if(sum>=10){
                    carry=1;
                    sum= sum %10;
                    // sumArr.push(sum)
                    list3.insertNumber(sum)
                }else{
                    carry =0;
                    list3.insertNumber(sum)
                }
                data1 = data1.next
            }else{
                sum = data2.val + carry;
                if(sum>=10){
                    carry=1;
                    sum= sum %10;
                    list3.insertNumber(sum)
                }else{
                    carry =0;
                    list3.insertNumber(sum)
                }
            }
            data2 = data2.next;
            
        }
        if(carry){
            list3.insertNumber(sum)
        }
    }
    const arr= linkedListToArray(list3)
    return arr;
};

function linkedListToArray(list3){
    let arr = [];
  let current = list3.head;

  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}

const result = addTwoNumbers([2,4,3], [5,6,4])
console.log(result);