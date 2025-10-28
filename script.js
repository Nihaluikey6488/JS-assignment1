// alert("Hello from Sheriyans")

// console.log("If HTML is an skelton, CSS is clothes then Javascipt will Brain and personality");

// console.log("Connected");
// console.log(2+2);
// alert("hii")
// let name=prompt("Please tell me your name")
// let city=prompt(`from Where u are ${name}`)
// console.log(`hii ${name}, you are from ${city}`);

// let a="nihal";
// let b= "Sheriyans";
// let c="School"

// {
// a="Updated";
// b="Updated";
// c="Updated";
// }


// console.log(a+b+c)the output will be reassigned values because we are reassigning the value not delcalring it and let allow us to reassign it wherever we want inside block or outside the block..'

// const discount=20;
// const pi=3.14;
// const statusCode=200;

// let name="Nihal"
// let age=23;
// let city="Nagpur"

// console.log(`Hii my name is  ${name}, iam ${age} years old from ${city} city`);
// console.info(`Hii my name is  ${name}, iam ${age} years old from ${city} city`);
// console.warn(`Hii my name is  ${name}, iam ${age} years old from ${city} city`);


// let name=prompt("Tell me Your name");
// alert(`Hii ${name}`)
// console.log(name)

// let age=prompt("Enter age")

// console.log(age+5);

// Output: The output will be 235 because by default prompt will be string type and has we seen it will concatinate the both prompt and console.
let msg="I love Sheriyans"

console.log(msg.slice(2,6))  

// Output: Output will be "love"

let split=msg.split()

console.log(split)

console.log(msg.replace("love","study at"))

console.log(msg.includes("love"))


console.log("Hii iam Nihal")
console.log("JavaScript Developer")
console.log("I love Sheriyans")

// Output:javascript never often semicolons without semicolons also  the code will executed properly


console.log("Nihal")
// console.log("ASahr")
// consoling  what i have written in  first console.log() second one is commented so  it will be hidden.


// Datatypes
let age=23;
let name="harsh";
let isStudent=true;
let skills=["Javascipt","CSS"];
let x=null;
let y;
let z=Symbol("id")
console.log(typeof age); // Output will be Number//
console.log(typeof name); // Output will be String//
console.log(typeof isStudent); // Output will be Bollean//
console.log(typeof skills); // Output will be Object//
console.log(typeof x); // Output will be Object//
console.log(typeof y); // Output will be undefined//
console.log(typeof z); // Output will be symbol//

console.log(typeof String(age)) // it will change the typeof of output from  number to string//
// console.log(name+age) // concatenate both value  to harsh23//





// Special Values

console.log(1/0)// Infinity//
console.log(0/0)  //Nan//

// The basic differece between null and undefiend is when u are having a value for iot but at that time u are not any value to your variable u can assign it as null but when not giving any value to variabel it will considered as undefined


let Yr;  //undefined//
let a=null;  //null we can reassign the value afterwards till then it will remain  null //

//  Primitive vs Reference

let x1=5;
let y1=x1;
y1=10;
console.log(x1,y1);  //x1=5 and y1=10;


let obj1={
    name:"nihal"
}

let obj2=obj1;
obj2.name="Sheriyans"

console.log(obj1.name); // output is "Sheriyans" due to reference automatically change the obj1.name value as u reffered to obj2.name

