export const summation = (...arr)=>{
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}


export const person = {
    name : "Rajat",
    age : 23,
    sayHi : function(){
        console.log(`Hi I am ${this.name}. Nice to meet you.`);
    }
}


export const product = (...arr)=>{
    let p=1;
    for(let i=0; i<arr.length; i++){
        p *= arr[i];
    }
    return p;
}


