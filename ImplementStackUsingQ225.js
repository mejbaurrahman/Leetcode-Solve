class MyQueue{
    constructor()
    {
        this.array = new Array();
    }
    enqueue(value){
        this.array.push(value)
    }
    dequeue(){

       let value = this.array[0];
       this.array.splice(0, 1)
    //    console.log(this.array);
       return value;

    }
    length(){
        return this.array.length;
    }
}

class MyStack{
    constructor(){
        this.q1 = new MyQueue();
        this.q2 = new MyQueue();
    }
    push(value){
        this.q1.enqueue(value);
    }
    pop(){
        let ln = this.q1.length()
        // console.log(ln);
        while(ln>1){
           
            this.q2.enqueue(this.q1.dequeue())
            // console.log(this.q1.dequeue());
            ln--
        }
        // console.log(this.q2);
        let value =  this.q1.dequeue()
        for(let i=0; i<this.q2.array.length; i++){
            this.q1.array.push(this.q2.array[i])
            
        }
        let ln2= this.q2.length()
        while(ln2>0){
            this.q2.dequeue()
            ln2--
        }
        return value

    }
    top(){
        return this.q1.array[this.q1.array.length-1]

    }
    empty(){
        return this.q1.array.length===0
    }

}

// const stack = new MyStack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.pop()
// stack.pop()
// stack.pop()
// console.log(stack.top());
// console.log(stack.empty());
const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(2);
console.log(myStack.top()); // return 2
console.log(myStack.pop());// return 2
console.log(myStack.top());
myStack.empty(); // return False