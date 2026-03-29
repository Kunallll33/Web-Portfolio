// console.log("Kunal");
// console.log("Sharma");

//~~~~Variable ~~~~
// fullName = "kunal";
// age = 24;
// price = 99.99;
// khali = null;
// pataNhi = undefined;
// isFollow = true;

// console.log(khali, pataNhi);

// ~~~~How variables are declared ~~~~
// ~~~~There are three types in which we can declare a variable - let, var, const~~~~

// ~~~~~Object Datatype~~~~
// const student = {
//     fullName : "kunal sharma",
//     age : 24,
//     cgp : 8.9,
//     ispass : true
// };
// console.log("student")  //Complete object
// console.log("student.age")   //age value
// console.log("student.cgp")   //cgp value

//~~~~ Conditional Statement in JavaScript~~~~

// let mode = "light";
// let color;

// if(mode == "dark"){
//     color = "black";
// }

// if(mode == "light"){
//     color = "white";
// }

// console.log(color);

//~~~~ if-else

// let mode = "light";
// let color;
// if(mode == "dark"){
//     color = "black";
// } else{
//     color = "white";
// }
// console.log(color);

// num = 19;
// if(num%2 === 0){
//     console.log(num, "is even")
// }else {
//     console.log(num, "is odd")
// }

// let mode = "Grey";
// let color;

// if(mode === "dark"){
//     color = "black";
// } else if(mode === "blue"){
//     color = "blue";
// } else if(mode === "pink"){
//     color = "pink";
// } else{
//     color = "white";
// }
// console.log(color)

//~~~~~~~~~~~~ Ternary Operator
// let age = 16;
// age >= 18 ? console.log("Adult") : console.log("Not Adult") ;
// console.log(result);

//~~~~Practice Set of Lecture 2

//~~~~ Q1:. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.
// let num = prompt("Enter a number");
// if(num % 3 === 0) {
//     console.log(num, "is a multiple of 3");
// } else{
//     console.log(num, "is NOT a multiple of 3");
// }

//~~~~ Q2. Write a code which can give grades to students according to their scores:
// let grade = prompt("Enter Grade");

// if (grade <= 100 && grade >= 90) {
//     console.log("Grade A");
// } else if (grade >= 70) {
//     console.log("Grade B");
// } else if (grade >= 60) {
//     console.log("Grade C")
// } else if (grade >= 50) {
//     console.log("Grade D")
// } else {
//     console.log("FAIL")
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LECTURE 3 (LOOPs and STRING)~~~~~~~~~~~~~~~~~~~~~~~~~~~

// for (let i = 1; i <= 5; i++) {
//     console.log("Kunal Sharma")
// }

// // Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum+i;
// }
// console.log("sum is", sum)

// ~~~~~While loop ~~~~
// let i = 1;
// while (i <= 10) {
//     console.log("i =", i);
//     i++;
// }

// ~~~~ Do while loop ~~~~~
// let j = 1;
// do {
//     console.log(j);
//     j++;
// } while (j <= 10);

// ~~~~ for-of loop (Used for only Arrays and Strings) ~~~~
// let str = "kunal_sharma"
// let size = 0;

// for(let i of str) {
//     console.log(i)
//     size++;
// }

// ~~~~ for-in loop (Used in Arrays and Strings for finding keys) ~~~~
// const student = {
//     fullname : "kunal",
//     roll_no : 25,
//     cgp : 8.9,
//     sem : 3
// }

// for (let keys in student) {
//     console.log("Keys =", keys, "Values = ", student[keys]);
// }

// ~~~~~~~~~~~~~~~~~~~~~ Practice question of LOOPs ~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~ Q1. Print all even numbers from 0 to 100. ~~~~~~
// for (let i = 1; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }
// console.log("All even numbers to 100")

// for (let i = 1; i <= 100; i++) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }
// console.log("All Odd numbers to 100")

// ~~~~~ Q2. Create a game where you start with any random game number. Ask the user to guessing the game number until the user enters correct value. ~~~~~

// let gameNum = 50;
// let userNum = prompt("Guess the number");

// while(gameNum != userNum){
//     userNum = prompt("Guess Wrong Number, Guess Again: ");
// }

// console.log("Congratulation You Entered the Correct Number🎉🎉");
// ~~~~~~~~~~~~~~~~~~~~~~~~~~ LOOPs Over ~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~ String in JavaScript ~~~~~~~~~~~~~
// let str1 = "kunalsharma";
// let str2 = "sharma";

// // let len = str1.length

// console.log(str1.length)
// console.log(str1[3]) //Indexing

// // ~~~~~ Templete Literals ~~~~~~~~

// let specialString = "This is a specialString";
// let obj = {
//     item : "pen",
//     price : 10
// };

// console.log(`This is a ${obj.item} of ${obj.price} rupess`);

// ~~~~~~~~~~~~~~ String Methods ~~~~~~~~~~~~~~
// let str1 = "kunalsharma";
// let str2 = "sharma";

// console.log(str1.toUpperCase()); //Direct Output

// let newStr = str1.toLowerCase();  //Convert to lowercase
// console.log(newStr);

// let sliceString = str1.slice(3, 8);  //Slice part of string
// console.log(sliceString);

// let concatString = str1.concat(str2);  //Concatenate two strings
// console.log(concatString);

// let replaceString = str1.replace("nal", "uuu");    //Replace part of string
// console.log(replaceString);

// let charAtindex = str1.charAt(6);     //Give element of given index
// console.log(charAtindex);

// ~~~~~~~~~~~~ String Practice Questions ~~~~~~~~~~~~~~~

// Q1. Prompt the user to enter their full name. Generate a username for them based on the start username with @. followed by their full name and ending with the fullname length.

// let fullName = prompt("Enter your name: ");
// let userName = "@" + fullName.concat(fullName.length);
// // userName = "@" + userName;
// console.log(userName);

// ~~~~~~~~~~~~~~~~~ LECTURE 3 (ARRAY) ~~~~~~~~~~~~~~~~~~~~~

// let heroes = ["thor", "thanos", "ironman", "superman", "captain", "spider", "hulk"];
// console.log(heroes);

// for (let i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// }

// let cities = ["delhi", "mumbai", "pune", "banglore", "nashik", "noida", "faridawad"]

// for(let city of cities){
//     console.log(city)
// }

// ~~~~~~~~~~~~~~~ Practice Question of Array ~~~~~~~~~~~~~~~

// Q1. For a given array of marks of students -> [85, 97, 45, 37, 76, 60] find the average marks of class.

// let marks = [85, 97, 85, 85, 70];
// let sum = 0;
// for(let val of marks){
//     sum += val
// }
// let average = sum/5;
// console.log(`average of class is ${average}`);

// Q2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
// let items = [250, 645, 300, 900, 50];

// ~~~~~~~~ 1st Way ~~~~~~~~
// let offeredValue;
// let i = 0;

// for (let item of items) {
//     let offer = item / 10;
//     items[i] = items[i] - offer;
//     console.log(`Item after offer = ${items[i]}`);
//     i++;
// }

// console.log(items);

// ~~~~~~~~ 2nd Way ~~~~~~~~
// for (let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
// }

// console.log(`Item after offer = ${items}`);

// ~~~~~~~~~~ Array Methods ~~~~~~~~~~~
// let foodItems = ["potato", "apple", "litchi", "tomato"];
// let marvel_heroes = ["thor", "spiderman", "ironman", "batman"];

// foodItems.push("Mango")
// console.log(foodItems);

// foodItems.pop()
// console.log(foodItems);

// let convertString= foodItems.toString();
// console.log(convertString);

// let heros = foodItems.concat(marvel_heroes);
// console.log(heros);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let array = [1, 2, 3, 4, 5, 6, 7];

// array.splice(2, 3, 8, 909, 101);  //Splice method
// array.splice(2, 0, 101);  //Add element
// array.splice(2, 1);  //Delete element
// array.splice(2, 1, 909);  //Replace element

// console.log(array);

// ~~~~~~~~~~~~~~~~~ Practice Question ~~~~~~~~~~~~~~~~~~~~~~~
// Q. Create an arrar to store companies ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"].
// Task 1: Remove the first company from the array
// Task 2: Remove Uber & add Ola in its place
// Task 3: Add Amazon at the endf

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(`Original Companies array ${companies}`);

// companies.shift();
// console.log(companies);

// companies.splice(1, 1, "Ola");
// console.log(companies);

// companies.push("Amazon");
// console.log(companies)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lecture 5 (FUNCTIONS and METHODS) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function myFunction() {
//     console.log("Hello World");
//     console.log("We are learning JS");
// }

// myFunction();
// myFunction();
// myFunction();

// function mul(a, b) {   //Normal Function Declaration
//     return a * b;
// }

// const multi = (a, b) => {   //Arrow Function
//     return a * b;
// }

// const upCase = (a) => console.log(a.toUpperCase());   //Single line of Arrow Function

// upCase("kunal")

// ~~~~~~~~~~~~~~~~~~~~~~~~ Practice Question of FUNCTION ~~~~~~~~~~~~~~~~~~~~~~~~~

// Q. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
// function vowel(a) {
//   let times = 0;
//   let char;
//   for (let i = 0; i < a.length; i++) {
//     char = a[i];
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       times++;
//     }
//   }
//   return times;
// }

// let result = vowel("aeioukunal");
// console.log(result);

// ~~~~~~~~~~~~~ Q2. Same program in Arrow Function. ~~~~~~~~~~~~~~~~~

// const countVowel = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowel("aeiou"));

// ~~~~~~~~~~~~~~~~~ forEach Method in Array. ~~~~~~~~~~~~~~~
// let city = ["delhi", "mumbai", "pune", "noida", "gurgao"];

// city.forEach((val) => {
//     console.log(val);
// })

// city.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);

// });

// ~~~~~~~~~~~~~~~~~~~~~~~~ Practice Question of forEach Method of array ~~~~~~~~~~~~~~~~~~~~~~~~~

// Q. For a given array of number, print the square of each value using forEach loop.

// let numArr = [56, 45, 82];

// numArr.forEach((num) => {    //Way 1
//   console.log(num * num);
// });

// let calSqr = (num) => {       // Way 2
//     console.log(num * num);
// }
// numArr.forEach(calSqr);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ METHODS of Arrays ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. .forEach()   : It performs operations on same elements
// 2. .map()  : It return another array.

// let newArr2;              //Way 3 (Map Method)

// newArr2 = numArr.map((item) => {
//     return item * item;
// });

// console.log(newArr2)

// 3. .filter()    //Filter Method
// let num = [3, 4, 6, 7, 8, 9, 10];

// let evenNum = num.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenNum);

// 4. .reduce()    //Reduce Method (It performs some operation and reduce the array to a single value.)

// const num = [3, 4, 6, 8, 9, 1, 2];

// result = num.reduce((previous, current) => {
//     return previous > current ? previous : current;
// });

// console.log(result);

// const num = [1, 2, 3, 4];

// let sum = num.reduce((prev, cur) => {
//     return prev * cur;
// });

// console.log(sum);

// Let's Practice

// Q1. We are given array of marks of students. Filter out of the marks of students that scored 90+. [87, 93, 64, 99, 86)

// const marks = [87, 93, 64, 99, 86, 90];

// let above90 = marks.filter((mark) => {
//     return mark >= 90;
// });

// console.log(above90);

// Q2. Take a number n as input from user. Create an array of numbers from 1 to n.

// let n = prompt("Enter number: ");

// let array = [];

// // for (let i = 0; i < n; i++){
// //     array[i] = i;
// // };

// // console.log(array);

// for (let i = 1; i <= n; i++){
//     array[i-1] = i;
// };

// console.log(array);

// //      Use the reduce method to calculate sum of all numbers in the array.
// let reduced = array.reduce((prev, cur) => {
//     return prev + cur;
// });

// console.log(`The sum of n numbers = ${reduced}`);

// //      Use the reduce method to calculate product of all numbers in the array.

// let product = array.reduce((prev, cur) => {
//     return prev * cur;
// });

// console.log(`The product of n numbers = ${product}`);

// ~~~~~~~~~~~~~~~~~~~~~~ DOC Manipulation ~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~ 1. selecting elelment by id: ~~~~~~~~~~
// let header;
// header = document.getElementById("heading1");
// console.dir(header)
// console.log(header)

// let button = document.getElementById("myBtn");    //Getting Elements by Id
// console.dir(button);

// ~~~~~~~~~~~~~ 2. Slection element by class: ~~~~~~~~~~
// let head = document.getElementsByClassName("heading");
// console.log(document.getElementsByClassName("heading"));
// console.log(head);
// console.dir(head);

// ~~~~~~~~~~~~~ 3. Slection element by Tag Name ~~~~~~~~~~~~
// let paras = document.getElementsByTagName("p");
// console.dir(paras);

// ~~~~~~~~~~~~~~~~~~ Query Selector ~~~~~~~~~~~~~~~
// let firstEl = document.querySelector("#heading1");
// console.dir(firstEl);

// let secondEl = document.querySelector(".heading");
// console.dir(secondEl);

// ~~~~~~~~~~~~~~~~~ DOC Manipulation Properties ~~~~~~~~~~~~~
// tagName : returns tag name of elements nodes
// let name1 = document.querySelector("div");
// console.dir(name1.tagName);

// // innerText :
// let divider = document.querySelector("div").innerText;
// console.log(divider);

// // 2. innerText Property
// let div1 = document.querySelector("div");
// console.dir(div1.innerText);
// console.dir(div1.innerHTML);

// let heading = document.querySelector("h1");
// // heading.innerText = "new heading";
// // heading.innerHTML = "<i><h1>New Heading</h1></i>";       // innerHTML

// ~~~~~~~~~~~~~~~~~~~~~~~ Practice Question for DOM ~~~~~~~~~~~~~~~~~~~~~
// Q1. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.
// let h2 = document.querySelector("h2");
// console.dir(h2);

// h2.innerText += " From apna college students";

// Q2. Create 3 div with common class name - "box". Access them & add some unique text to each of them.

// let box = document.querySelector(".headDiv");

// box.children[0].innerText = "this is kunal";
// box.children[1].innerText = "learing JavaScript"
// box.children[2].innerText = "from apna college"

// let divs = document.querySelectorAll(".box");
// console.log(divs[0]);

// divs[0].innerText = "new unique box";
// divs[1].innerText = "unique box 2";
// divs[2].innerText = "unique box 3";

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(item_Div of divs) {
//     item_Div.innerText = `The new uniqe value ${idx}`;
//     idx++;
// }

// ~~~~~~~~~~~~~~~~~~ Lecture 7 (DOM Part - 2) ~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~ Attributes ~~~~~~~~~~~~
// 1. getAttribute
// let dev = document.querySelector("div");
// console.log(dev.getAttribute("class"));

// // 2. setAttribute
// let changeAttri = document.querySelector("div");
// changeAttri.setAttribute("class", "kuanl");

// ~~~~~~~~~~~~~~ Styles ~~~~~~~~~~~~
// 1. style

// let dev = document.querySelector(".box");

// dev.style.backgroundColor = "green";

// dev.style.fontSize = "26px";

// dev.innerText = "Hello!"

// // ~~~~~~~~~~~~~~ Insert Elements ~~~~~~~~~~~~

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me";

// let div = document.querySelector("div");

// div.append(newBtn);
// div.prepend(newBtn);

// let p = document.querySelector("p");

// p.after(newBtn);
// p.before(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>My Heading h1</i>";

// let body = document.querySelector("body").prepend(newHeading);

// // ~~~~~~~~~~~~~~ Delete Elements ~~~~~~~~~~~~
// .remove

// let para = document.querySelector("p");
// para.remove();

// let div = document.querySelector("div");
// div.remove();

// ~~~~~~~~~~~~~~~~ HOME WORK ~~~~~~~~~~~~
// 1. appendChild() method

// const newLi = document.createElement("li")
// newLi.innerText = "item4";

// const list = document.querySelector("#list");

// list.appendChild(newLi);

// // 2. removeChild() method
// // list.children[1].remove();    //Just trying old one

// const catchChild = list.removeChild(list.children[1]);  // Using removeChild() method

// ~~~~~~~~~~~~~~~~~~~~~~~ Practice Questions of DOM Part-2 ~~~~~~~~~~~~~~~~~~~~~
// Q1. Create a new button element. Give it a text "click me", background color of red & text color of white.

// const newBtn = document.createElement("button");
// newBtn.innerText = "Click me";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";

// // Insert the button as the first element inside the body tag.
// document.querySelector("body").prepend(newBtn);

// // Q2. Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.

// Did you notice, how you overwrite the class name when you add a new one?
// Solve this problem using classList.

// let para = document.querySelector("p");
// // para.setAttribute("class", "newClass");
// para.classList.add("newClass");
// para.classList;

// ~~~~~~~~~~~~~~~~~~~~~~~~ LECTURE 7 (Events) ~~~~~~~~~~~~~~~~~~

// const btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     console.log("Button Clicked :)")
// }

// const div = document.querySelector("div");

// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     console.log("Move over on div");
// }

// ~~~~~~~~~~~~~~~~ Event Listener ~~~~~~~~~~~~~
// ~~ 1. addEventListener(event, callback) ~~
// const btn3 = document.querySelector("#btn3");

// btn3.addEventListener("click", () => {
//     console.log("Btn 3 Clicked");
// })

// btn3.addEventListener("click", (evt) => {
//     console.log("Btn 3 Clicked");
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type);

// })

// ~~ 2. removeEventListener(event, callback) ~~
// You cannot directly delete because... (Written in copy) so, you have to store callback function seprately.

// const btn4 = document.querySelector("#btn4");
// const handlet = () => {
//     console.log("Handler3")
// }

// btn4.addEventListener("click", () => {
//     console.log("Handler1")
// })

// btn4.addEventListener("click", () => {
//     console.log("Handler2")
// })

// btn4.addEventListener("click", handlet);               //In this we have pass a callback funtion because we may be have to remove our event afterwards(So, we used seprate function as function)
// btn4.removeEventListener("click", handlet);

// btn4.addEventListener("click", () => {
//     console.log("Handler4");
// })

// let mode = document.querySelector("#mode");
// let currMode = "light";
// let body = document.querySelector("body");

// mode.addEventListener("click", () => {
//   if (currMode === "light") {
//     currMode = "dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
//   } else {
//     currMode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }

//   console.log(currMode);
// });

// ~~~~~~~~~~~~~~~~~~ Lec 11 (Classes and Objects) ~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~ Prototype ~~~~~~~~~~~~~~~
// const student = {
//   fullName : "Kunal Sharma",
//   marks : 48,
//   printMarks : function() {
//     console.log(marks);
//   },

//   printmarks2() {
//     console.log(marks);
//   },
// };

// let arr = "kunal";

// const student2 = {
//   fullName : "Kunal 2",
//   marks : 37,
// };

// student2.__proto__ = student;

//~~~~~~~~~~~~ Classes ~~~~~~~~~~~~~~~
// class ToyotaCar {

//   constructor(brand, mileage) {
//     console.log("creating new object");
//     this.brand = brand;
//     console.log(brand, "mileage is", mileage);
//   }

//   start() {
//     console.log("Start!!");
//   }

//   stop() {
//     console.log("Stop!!");
//   }

//   // setBrand(brand) {
//   //   this.brand = brand;
//   // }
// }

// let fortuner = new ToyotaCar("Toyota", 10);
// let lexus = new ToyotaCar("Mersadice", 12);
// let pajero = new ToyotaCar("mahindra", 14);

// // fortuner.setBrand("Toyota", 10);
// // lexus.setBrand("Mersadice", 12);
// // pajero.setBrand("mahindra", 14);

// class ek program-code template hoti hai - Jo prototype object banati hai object ke

//~~~~~~~~~~~~ Inheritance ~~~~~~~~~~~~~~~
//inheritance is done with extends keyword

// class parent {
//   hello() {
//     console.log("Hello!!");
//   }

//   eat() {
//     console.log("Eat!!");
//   }
// };

// // class child extends parent {}
// // let childObj = new child();

// class engineer extends parent {
//   work() {
//     console.log("Solve Problem, build something");
//   }
// }

// let obj = new engineer();

// // ~~~~~~~~ Example 2 ~~~~~~~~
// class person {
//   constructor() {
//     this.species = "homo sapiens";
//   }  // Abh person class ki koi bhi object banti hai toh usme creation ke time hi species naam ki property banegi with value "homo sapiens".

//   eat() {
//     console.log("Eat!!");
//   }

//   sleep() {
//     console.log("Sleep!!");
//   }
// }

// class Engineer extends person {
//   work() {
//     console.log("SOlVE PROBLEM");
//   }
// };

// class Doctor extends person {
//     work() {
//       console.log("Treat Patients");
//     }
// }

// let kunalEngineer = new Engineer();
// let someoneDoc = new Doctor();

// inharitance upar ki class ki states aur behaviors ko new class mei inharant karta hai with the help of keyword "extends".
//Class hamesha class mei inheritate hogi.

// ~~~~~~~~ Super Keyword ~~~~~~~~
// class person {
//   constructor(name) {
//     console.log("Enter parent constructor");
//     this.species = "homo sapiens";
//     this.name = name;
//   }

//   eat() {
//     console.log("Eat!!");
//   }
// }

// class Engineer extends person {
//   constructor(name) {
//     console.log("Enter child constructor");
//     super(name);
//     console.log("Exit child constructor");
//   }
//   work() {
//     super.eat();
//     console.log("SOlVE PROBLEM");
//   }
// };

// let engObj  = new Engineer("Kunal Sharma");

//  ~~~~~~~~~~~~~~~~~~~~~~ Practise Question of Classes and Objects ~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~ Q1. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data. ~~~~~~~~~~~~~~~~~~~~

// let Data = "Secret Information";

// class user {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   viewData() {
//     console.log("Data = ", Data);
//   }
// }

// let std1 = new user("kunal sharma", "abc@gmail.com");
// let std2 = new user("shivansh sharma", "shivansh@gmail.com");

// let dean = new user("dean", "dean@college.com")

// // ~~~~~~~~~~~~~~~ Q2. Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// class Admin extends user {
//   constructor(name, email) {
//     super(name, email);
//   }

//   editData() {
//     Data = "Some new data added";
//     console.log(Data);
//   }
// }

// let admin2 = new Admin("Admin", "min@gmail.com");

// ~~~~~~~~~~~~~~~~~~~~ Error Handling (Try and Catch) ~~~~~~~~~~~~~~~~~~~~~~~

// let a = 5;
// let b = 10;

// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);
// try {
//   console.log("a + b = ", a + c);  // Error
// } catch(err) {                //Error is stored in err, which is also error object
//   console.log(err);
// }

// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);

// ~~~~~~~~~~~~~ X ~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~ Lecture 12 (CallBacks, Promises & Async await) ~~~~~~~~~~~~~~~~~~~~~~~

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data ", dataId);
//     getNextData();
//   }, 2000);
// }

// getData(1, () => {
//   getData(2);
// });

// ~~~~~~~~~~~~~~ Promises in JavaScript ~~~~~~~~~~~~~~~~
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   reject("Error Found");
// })

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       // resolve("success");
//       reject("Error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// ~~~~~~~~~~~ .then and .catch in JavaScript ~~~~~~~~~~~~~
// const getPromise = () => {              // This is arrow function of name getpromise.
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     // reject("Errot found 404")
//   });
// };

// let promise = getPromise();

// promise.then((res) => {                       // is res ek pre-built variable hai jisme automatic resolve woh pass
//   console.log("Promise fullfilled", res);     //kar deta hai apanne resolve mei likhi ho
// });

// promise.catch((err) => {                     //err bhi ek pre-built variable hai jisme reject ki value aa jati hai
//   console.log(err);
// });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let data = 1;

// function asyncfunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", data);
//       data++;
//       resolve("Successed");
//     }, 2000)
//   })
// };

// console.log("Fetching data1....")
// let p1 = asyncfunc();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("Fetching data2....")
// let p2 = asyncfunc();
// p2.then((res) => {
//   console.log(res);
// }); // In this both promise execute along each other but we want p2 executes after p1. For that we use promise chaining -----

// ~~~~~~~~~~~~~~~~~~~~~~~~ Promise Chaining ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let data = 1;

// function asyncfunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", data);
//       data++;
//       resolve("Successed");
//     }, 4000)
//   })
// };

// console.log("Fetching data....")
// let p1 = asyncfunc();
// p1.then((res) => {
//   // console.log(res);
//   let p2 = asyncfunc();
//   p2.then((res) => {
//     console.log(res);
//   })
// });

// ~~~~ Another way of writing above code !!!!
// console.log("Fetching data1....")
// asyncfunc().then((res) => {
//   // console.log(res);
//   console.log("fetcing data2.....");
//   asyncfunc().then((res) => {
//     console.log(res);
//   })
// });

//  ~~~~~ Solving old above example with promise chaining ~~~~~~~
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       }, 3000);
//   });
// }

              
//Promise Chain
// getData(1)
//   .then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// }); 


// Easy way of promise chain 
// getData(1).then((res) => {
//   return getData(2);
// })
// .then((res) => {
//   return getData(3);
// })
// .then((res) => {
//   console.log(res)
// })


// Async and Await function
// async function hello(params) {  //Async is basically a function which is used to
//   console.log("hello", params);
// }

// hello("bae");

//~~~~ Example 2 ~~~~ 
// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("wheater data1");
//     resolve(200);
//     }, 3000)
//   });
// }

// async function getWheatherData() {
//   await api();
// }




// //~~~~ Example 3 ~~~~
// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       // resolve(200);
//     }, 2000);
//   });
// }

// async function getAllData(res) {
//   console.log("Fetching data1....");
//   await getData(1);
//   console.log("Fetching data2....");z`
//   await getData(2);
//   console.log("Fetching data3....");
//   await getData(3);
//   console.log("Fetching data4....");
//   await getData(4);
//   console.log(res);
// }


//~~~~ IIFE version of above async-await code ~~~~
// (async function() {
//   console.log("Fetching data1....");
//   await getData(1);
//   console.log("Fetching data2....");
//   await getData(2);
//   console.log("Fetching data3....");
//   await getData(3);
//   console.log("Fetching data4....");
//   await getData(4);
// })();



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LECTURE 13 (Fetching API) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const URL = "https://world.openfoodfacts.net/api/v2/product/3274080005003.json";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");


// const getFacts = async () => {
//   let response = await fetch(URL); 
//   console.log(response);  //JSON format of GET data
//   let data = await response.json();
//   factPara.innerText = data.status_verbose[4];
// }

// //~~~~~~~~~~~~~~~ How to do above thing in Promise Chaining ~~~~~~~~~~~~~~~~~~~~

// function getFact() {
//   fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     factPara.innerText = data.status_verbose;
//   });
// }



// btn.addEventListener("click", getFact);


// function fibonacci(max) {
//     // Your code goes here
//   let fibo = 0;
//   while(fibo <= max){
//     fibo += 2;
//   }
//   return fibo;
// }

// let result = fibonacci(5);
// console.log(result);


// function fibonacci(max) {
//   // Your code goes here
//   let a = 0;
//   let b = 1;
//   while(a < max){
//     a = a + b;
//   }
//   return a;
  
// }

// let result = fibonacci(25);
// console.log(result);
