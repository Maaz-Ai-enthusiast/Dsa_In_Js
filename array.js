// const stringArr=['a,b,c,d,e'];
// const numArr=[1,2,3,4,5,6,7,8,9];


class MyArray{

constructor(){

    this.length=0;
    this.data={};
}

 pushItem(item) {
    
this.data[this.length]=item;
console.log(this.data);
this.length++;


}

get(index ){

console.log(this.data[index]);

}

pop(){

    const lastitem=this.data[this.length-1];
delete this.data[this.length-1]
this.length--;
return lastitem;


}

shift(){

const firstItem=this.data[0];

for(let i=0;i<this.length;i++){

this.data[i]=this.data[i+1];

}
delete this.data[this.length-1];
this.length--;
return firstItem;
}



delete(index){

const deltItem = this.data[index];    

for(let i=index;i<this.length;i++){

this.data[i]=this.data[i+1];

}

delete this.data[this.length-1];
this.length--;
return deltItem;

}

unshift(item){
 

    for(let i=this.length-1;i>=0;i--){

this.data[i+1]=this.data[i];

    }
    this.length++;
    this.data[0]=item;
    return this.data[0]=item;

}

}


// myNewArr.get(1)
// console.log(myNewArr.pop());
// console.log(myNewArr.shift());
// console.log(myNewArr.unshift("Maaz"));

const myNewArr=new MyArray();
myNewArr.pushItem("Apple");
myNewArr.pushItem("Orange");
myNewArr.pushItem("mango");
myNewArr.pushItem("Banana");
console.log(myNewArr);
// console.log(myNewArr.delete(1));
console.log(myNewArr.unshift("Yummy"));
console.log(myNewArr);