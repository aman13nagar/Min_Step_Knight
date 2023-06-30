export default class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(item){
        this.items.push(item);
    }
    dequeue(){
        this.items.shift();
    }
    peek(){
        return this.items[0];
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.size()===0;
    }
}