//Q1.
// a




let a=10,b=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);



// b
let x=5;
x+=5;
x-=1;
x*=5;
x/=2;
console.log(x);

// c
let count=5;
++count;
count++;
console.log(count)
count--;
--count;
console.log(count)

// d

if(5=='5'){
    console.log("matched");
    
}
else{
    console.log("unmatched")
}

if(5==='5'){
    console.log("matched");
    
}
else{
    console.log("unmatched")
}

// e

if(10>5 && 10<20 && 10===10){
    console.log("the given expression is truthy");
    
}
else{
    console.log("the given expression is truthy");
    
}

// f
let age=20;
let isvalid=true


if(age>18 && isvalid){
    console.log("User is eglible for license")
}
else{
    console.log("Not egligble")// In given condition  both the given property want to be truthy otherwise the answer will be falsy
}

let age=18;
let getLicensed=true
if(age>18 || getLicensed){
    console.log("Can Drive")  
}

let eglible=true;
if(!    eglible){
    console.log("Acces")
}
else{
    console.log("Not Acces")
}

g

(5>2 && 10>8)  // true

(5>2 || 10<8) // true


// h

5 & 1  // need both for truthy value 
// 5 | 1   either one  for truthy value



//Q2.
//A)
console.log(a1)
var a1 = 5;  // Output: undefined

//B)
console.log(b1);
let b1=3;  // Output:  Not Acces before initialization

//C)

// test()
// function test(){
//     console.log("hello");   //  Output :"hello"  due to hoisting
    
// }

// hello();
// const hello =function(){
//     console.log("Hii")  // hello is not  a function due to rules of hoisting  type error ayenga
// }




//e)
//  functions get hoisted easily as compared to variables;

// Q.3
// /A)
// let age=Number(prompt("Enter the Age"))
// if(age>18){
//     console.log("Adult");
    
// }else{
//     console.log("Minor");
    
// }

// /B)
// let marks=Number(prompt("Enter the Marks"))


// if(marks>=90){
//     console.log("A Grade");
    
// }
// else if(marks>=75){
//      console.log("B Grade");
    
// }

// else if(marks>=50){
//      console.log("C Grade");
    
// }
// else{
//      console.log("Fail");
// }


//C)

// let city="Bhopal"


// if(city==="Bhopal"){
//     console.log("MP");
    
// }
// else if(city==="Delhi"){
// console.log("Capital");

// }

// else{
//     console.log("Unknown City");
    
// }

//D)


// let score=40;

// score>35?console.log("Pass"):console.log("Fail");



//E)
//  let temprature=44;
//  temprature>30?console.log("Hot"):console.log("Pleasent");
 

// F)

// let day=8;
// switch(day){
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thurday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday");
//           break;  
//     case 7:
//         console.log("Sunday");
//           break;  

//           default:
//             console.log("Invalid Day")
// }

// G)

let age=19;
let country="India"

if(age>18 && country==="India"){
    console.log("Egligble to Vote");
    
}
else{
    console.log("Not Egligible")
}