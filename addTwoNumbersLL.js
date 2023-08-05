class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
}
  
  function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
  
    while (l1 !== null || l2 !== null) {
      let x = l1 !== null ? l1.val : 0;
      let y = l2 !== null ? l2.val : 0;
  
      let sum = x + y + carry;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
  
      if (l1 !== null) l1 = l1.next;
      if (l2 !== null) l2 = l2.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  }
// Helper function to convert an array of digits to a linked list
function arrayToLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
  
    for (let digit of arr) {
      current.next = new ListNode(digit);
      current = current.next;
    }
  
    return dummyHead.next;
  }
  
  // Helper function to convert a linked list to an array of digits
  function linkedListToArray(head) {
    let arr = [];
    let current = head;
  
    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }
  
    return arr;
  }
  
  // Example usage:
  const num1 = arrayToLinkedList([2, 4, 3]);
  const num2 = arrayToLinkedList([5, 6, 4]);
  const result = addTwoNumbers(num1, num2);
  console.log(linkedListToArray(result)); // Output: [7, 0, 8] (representing the number 807 in reverse order)
    