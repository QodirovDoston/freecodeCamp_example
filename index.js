export const axoisData = [
    {
     datas:()=>{
        return    axios.post("url").then(res=>res);
     }
    }
]
axoisData[0].datas


// function user(name,age){
//     this.name = name
//     this.age = age
// }

// const s = new user("john",23);

// console.log(s);

// const user = (name,age)=>{
//    console.log(this);
// }

// const s = new user("john",10)
// console.log(s);

// let setter =new  Set([1, 2, 5,4,5])
// console.log(setter);


// class MySet{
//     constructor(){
//         this
//     }
// }



// function res(arr){
//     let current = []
//     for(let item of arr){
//         if(!current.includes(item)){
//             current =[ ...current, item]
//         }
//     }
//     return current
// }
// console.log(res([7,1,2,7,7,3,4,4,5]));