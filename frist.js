console.log("WELOCOME TO JS");
fullName = "Priya Tiwari";
console.log(fullName);
x = null;
console.log(x);
y = undefined;
console.log(y);
//x , y,fullName is variable
age = 23;
console.log(age+1);
//object
const student ={
    name:"Priya",
    age: 20,
    cgpa:9.2,
    isPass:true,
}
console.log(student.age)
//typeof name-> is used to check data type
//const object key can be updated
student[age] = student[age] +1;
student["name"] = "priya raj"
console.log(student.age)
console.log(student.name)
//Arithmatic operator
let a = 5;
let b = 3;
console.log("a: ",a, " & b: ",b);
console.log("a+b =",a+b);
console.log("a-b =",a-b);
console.log("a*b =",a*b);
console.log("a/b =",a/b);
console.log("a%b =",a%b);
console.log("a**b =",a^b);

//unary operator
console.log("a++ =",a++);//postincriment
console.log("a-- =",a--);//postdecriment
console.log("--a =",--a);//predecriment
console.log("++a =",++a);//preincriment
//ternaty operators
let h = 12;
h>=18?"true":"false";
//practise
let num = prompt("enter a num ");
if(num % 5 == 0){
    console.log(num, " is multiple of 5");
}else{
    console.log(num, " is not multiple of 5");
}
//FOR LOOP
for(let count = 1;count<=5;count ++){
    console.log("priya raj")
}
let sum = 0;
for(let i = 1;i<=5;i++){
    sum+=i;
     
}
console.log("sum ",sum);
//for of loop -> used for string and array

let str = "Nandani";
let size = 0;
for(let i of str){
    console.log("i = ",i);
    size++;
}
console.log("size = ",size);

//for in loop -> used for object's key

let store={
    thing: "pen",
    price : 20,
    color : "black",
    isSell : true,
};
for(let key in store){
    console.log("key = ",key, "value= ",store[key]);
}
//Q.print all even number from 0 to 100

for(let num = 0; num<=100; num++){
    if(num%2==0){
        console.log(num);
    }
}

// Q.Create a game where you start with any random game number.
// Ask the user to keep guessing the game num. until the user enter correct value

/**let gameNum = 25;

let userNum = prompt("Guess the  game number : ");
while(true){
    if(userNum> gameNum){
        console.log(lesser);
        userNum = prompt("Guess the  game number : ");
    }
    else if(userNum < gameNum){
        console.log(greater);
        userNum = prompt("Guess the  game number : ");
    }
    else{
        console.log(matched);
    }
    break;
}**/


//strings

let nickName = "pia";
console.log(nickName.length);
for(let i =0 ; i<nickName.length;i++){
    console.log(nickName[i]);
}

//Template Literals -> way of writing string
let specialString = `This is a template literal`;
console.log(typeof specialString);

let intro ={
    name: "priya",
    age = 20,
};
let output = `name of student is ${intro.name} and her age is ${intro.age}`;
console.log(output);
console.log("name of student is ", intro.name ,"and her age is " , intro.age);
let addition = `the sum is ${1+4+7}`;
console.log(addition)