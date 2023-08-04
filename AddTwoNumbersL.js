class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class ListNode {
    constructor(value){
        let node = new Node(value);
        this.head = this.tail = node;
        this.length = 1;
    }

    insertNumber(value){
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
}

var addTwoNumbers = function(l1, l2) {
    let sumArr = [];
    let list1 = new ListNode(l1[0])
    let list2 = new ListNode(l2[0])
    let c1=1, c2 =1;
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
        let data1 = list1.head;
        let data2 = list2.head
        let sum =0;
     
        let carry=0;
        while(data1){
            if(data2){
                sum = data1.value + data2.value+ carry;
                if(sum>=10){
                    carry=1;
                    sum= sum %10;
                    sumArr.push(sum)
                }else{
                    carry =0;
                    sumArr.push(sum)
                }
                data2 = data2.next
            }else{
                sum = data1.value + carry;
                if(sum>=10){
                    carry=1;
                    sum= sum %10;
                    sumArr.push(sum)
                }else{
                    carry =0;
                    sumArr.push(sum)
                }
            }
            data1 = data1.next;
            
        }
        if(carry){
            sumArr.push(carry)
        }
    }else{
        let data1 = list1.head;
        let data2 = list2.head
        let sum =0;
     
        let carry=0;
        while(data2){
            if(data1){
                sum = data1.value + data2.value+ carry;
                if(sum>=10){
                    carry=1;
                    sum= sum %10;
                    sumArr.push(sum)
                }else{
                    carry =0;
                    sumArr.push(sum)
                }
                data1 = data1.next
            }else{
                sum = data2.value + carry;
                if(sum>=10){
                    carry=1;
                    sum= sum %10;
                    sumArr.push(sum)
                }else{
                    carry =0;
                    sumArr.push(sum)
                }
            }
            data2 = data2.next;
            
        }
        if(carry){
            sumArr.push(carry)
        }
    }
    return sumArr
};

const result = addTwoNumbers([2,4,3], [5,6,4])
console.log(result);