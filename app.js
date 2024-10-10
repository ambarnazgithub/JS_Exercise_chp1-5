
//chapter 1 //

//Q1 Write a script to greet your website visitor using Js alert box//

alert("Welcome to our Website");


//2. Write a script to display following message on your web page//

alert("Error! Please enter a valid Password");


//3. Write a script to display following message on your web page//

alert("Welcome to JS Land... \n Happy Coding!");


//4. Write a script to display following messages in sequence://
alert("Welcome to JS Land..");
alert("Prevent this page from creating additional dialogs");


//Generate the following message through browser’s developer console://

alert("Hello.. I can run JS through my web browser's console");

//chapter 2 //

// 1. Declaration of variable
let userName;

//  2.decalaration of variable with assigning name
let myName = "Ambar Naz";

// 3. Write script to a b c part
let message;
message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
let stdName = prompt("what is your name?");
let stdAge = prompt("what is your age?");
let certification = prompt(" enter your course name");
alert(stdName);
alert(stdAge);
alert(certification);

// 5. . Write a script to display the following alert using one JS variable:
let item = "PIZZA";
 alert(item +"\nPIZZ\nPIZ\nPI\n\P");

 //6. Declare a variable called email and assign to it a string that represents your Email Address
 let email = "ambarnaz11@gmail.com";
 alert("My email address is " + email);

// 7. Declare a variable called book & give it the value
let book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// 8.  Write a script to display this in browser through JS.
let displayBrowse = "Yah! I can write HTML content through JavaScript";
document.write(displayBrowse);

// 9. . Store following string in a variable and show in alert and browser through JS
let designOfLine =  "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(designOfLine);

//chapter 3//

// 1. . Declare a variable called age & assign to it your age.
let age = 19;
alert( "I am " + age + " year old")

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
let visitedTime = 14;
alert("You have visited this site " + visitedTime + " times");

// 3. Declare a variable called birthYear & assign to it your birth year.
let birthYear = 2004;
document.write("My birth year is " + birthYear)
document.write("<br>Data type of my declared variable is" + " " + typeof(BirthYear))


// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
let store = " AN Store"
let visitorName = "John Doe";
let productTitle = " T-shirt"
let Quantity = "5";
document.write( visitorName + " ordered " + Quantity + " " + productTitle + " on " + store);



//chapter 4//

// 1. Declare 3 variables in one statement.
var name  , agee , bloodGroup
// 2. Declare 5 legal & 5 illegal variable names.
var My_Age;
var $myAccount
var _myBloodGroup
var legalVariable
var not_Illegal_Variable
// var  1_myAccount
// var %myPercentage
// var #BitcoinHash
// var ~transaction
// var +addition
// 3. 3. Display this in your browser
document.write(" <h3>Rules for naming JS variables</h3>")
document.write("<br>")
document.write(" Variable names can only contain , members , $ and _ , For example:$myfirst_Variable")
document.write("<br>")
document.write(" Variables must begin with a letter , $ or _, For Example: $name , _name or name ")
document.write("<br>")
document.write("Variables names are case sensitive")
document.write("<br>")
document.write("Variables names should not be a JS keyword")

//chapter5//

// 1. Write a program that take two numbers & add them in a  new variable. Show the result in your browser.
let firstNumber = parseInt(prompt("Enter First Number : "))
let secondNumber = parseInt(prompt("Enter Second Number : "))
let sum = firstNumber + secondNumber
document.write(" Sum of " + firstNumber + " and " + secondNumber + " is " + sum)
document.write("<br>")
// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// For Subtraction
let firstNmbr = parseInt(prompt("Enter First Number : "))
let secondNmbr = parseInt(prompt("Enter Second Number : "))
let subtract = firstNmbr - secondNmbr
document.write(" Subtraction of " + firstNmbr + " and " + secondNmbr + " is " + subtract)
document.write("<br>")
// For Multiplication 
var firstvalue = parseInt(prompt("Enter First Number : "))
var secondvalue = parseInt(prompt("Enter Second Number : "))
var Multiplication = firstvalue * secondvalue
document.write(" Multiplication of " + firstvalue + " and " + secondvalue + " is " + Multiplication)
document.write("<br>")
// Division
var firstInteger = parseInt(prompt("Enter First Number : "))
var secondInteger = parseInt(prompt("Enter Second Number : "))
var Division = firstInteger / secondInteger
document.write(" Divsion of " + firstInteger + " and " + secondInteger + " is " + Division)
document.write("<br>")
// Modulus
var firstDigit = parseInt(prompt("Enter First Number : "))
var secondDigit = parseInt(prompt("Enter Second Number : "))
var modulus = firstDigit % secondDigit
document.write(" Modulus of " + firstDigit + " and " + secondDigit + " is " + modulus)
document.write("<br>")
document.write("<br>")
document.write("<br>")
// 3. Do the following using JS Mathematic Expressions
let myAge = 19
document.write("Value after variable declaration is  " + myAge)
document.write("<br>")
myAge = 5
document.write('Initial Value is : ' +  myAge)
document.write("<br>")
myAge++
document.write('Value after increment is  ' +  myAge)
document.write("<br>")
myAge = myAge+7
document.write("Value after addition is : " + myAge)
document.write("<br>")
myAge--
document.write('Value after decrement is  ' +  myAge)
document.write("<br>")
myAge = myAge/3
document.write("The reminder is : " + myAge)


// 4. Cost of one movie ticket is 600 PKR. Write a script to store
let oneTicket = 600
let costOfFiveTickets = oneTicket*5
document.write("Total Cost to buy  a 5 tickets to a movie is " + costOfFiveTickets+"PKR") 

// 5. Write a script to display multiplication table of any  number in your browser.
 let x = parseInt(prompt("Enter any number of your choice : "))
 for(i=1;i<11;i++){
    document.write(x +" " + "*" + " " + i + " "+ "=" + " " + x*i)
    document.write("<br>")
 }
 // 6. The Temperature Converter:
 let celsiusTemprature = prompt("Enter a Celsius Temparature")
 let Fahrenheit =  (celsiusTemprature*9/5)+32;
document.write(celsiusTemprature+"<sup>0</sup>C " + "is "+Fahrenheit +"<sup>0</sup>F")
document.write("<br>")
let FahrenheitTemprature = prompt("Enter a Fahrenheit Temparature")
let celsius = (FahrenheitTemprature -32)*5/9
document.write(FahrenheitTemprature+"<sup>0</sup>F " + "is " +celsius + "<sup>0</sup>C")
document.write("<br>")

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
let itemOnePrice = 650
let itemSecondPrice = 100
let itemOneQuantity = 3
let itemSecondQuantity = 7
let shippingCharges = 100
document.write("<h1>Shopping Cart</h1>")
document.write("price of item 1 is " + itemOnePrice)
document.write("<br>")
document.write("Quantity of item 1 is " + itemOneQuantity)
document.write("<br>")
document.write("price of item 2 is " + itemSecondPrice)
document.write("<br>")
document.write("Quantity of item 2 is " + itemSecondQuantity)
document.write("<br>")
document.write("Shipping charges " + shippingCharges)
document.write("<br>")
let totalCost =  itemOnePrice*itemOneQuantity+itemSecondPrice*itemSecondQuantity+shippingCharges
document.write("Total cost of your order is : " +totalCost)

//  8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in  your browser
let totalMarks = 980
let MarksObtained = 804
let percentage = (MarksObtained*100)/totalMarks;
document.write("Total Marks: " + totalMarks)
document.write("<br>")
document.write("Obtained Marks: " + MarksObtained)
document.write("<br>")
document.write("percentage: "+ percentage+"%")

// 9. Currency in PKR
let usDollars = 10
let saudiRiyals = 25
usDollars = usDollars*104.80
saudiRiyals = saudiRiyals*28
totalCurrency = usDollars+saudiRiyals
document.write("<h1>Currency in PKR</h1>")
document.write("<br>")
document.write("<br>")
document.write("Total Currency in PKR: " + totalCurrency)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
var num = 35+ 5 *10/2
document.write(num)
//11. Age Calculator
var currentYear = prompt("Enter Current year: ")
var birthYr = prompt("Enter birth year: ")
var Age = currentYear - birthYr
document.write("Current year :" + currentYear)
document.write("<br>")
document.write("Birth year :" + birthYr)
document.write("<br>")
document.write("Your age is :" + Age)

// 12.  The Geometrizer: Calculate properties of a circle.
let radius = prompt("What is the radius of a circle? ")
let circumference = 2*(3.142)* radius
let area = 3.142 * radius*radius
document.write("<h1>The Geometerizer</h1>")
document.write("<br>")
document.write("Radius of Circle: " + radius)
document.write("<br>")
document.write("The Circumference is : " + circumference)
document.write("<br>")
document.write("The Area is: " + area)

// 13. The Lifetime Supply Calculator:
let favouriteSnack = "Chocolate chip"
let currentAge = 23
let maximumAge = 40
let estimatedPerDay = 3
let needSnacks = (maximumAge - currentAge)* estimatedPerDay;
 document.write("<h1>The Lifetime Supply Calculator</h1>")
document.write("<br>")
document.write("Favourite Snack: " + favouriteSnack)
document.write("<br>")
document.write("Current Age " + currentAge)
document.write("<br>")
document.write("Estimated Maximum Age: " +  maximumAge)
document.write("<br>")
document.write("Amount of snack pe day: " + estimatedPerDay)
document.write("<br>")
document.write("You will need " + needSnacks + " " + favouriteSnack + " to last you untill the ripe old age of " + maximumAge)
