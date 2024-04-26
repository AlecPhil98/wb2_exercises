//helps gives better errors related to our code 
"use strict"


//variables 
let payRate = 17.30;
let hoursWorked = 45;

//determine how many hours are normal hours vs overtime hours

let regularHours = 40;
let overtimeHours = 5;

if (hoursWorked > 40) {
    // this os where we needed to figure out the overtime hours 
    regularHours = 45;
    overtimeHours = hoursWorked - 40

} else {
    //code for folks who didn't work overtime
    regularHours = hoursWorked;

}
//create some variables to represent the normal pay adn the overtime pay 
let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5) * overtimeHours;

let grossPay = normalPay = overtimePay;

console.log("I got paid $" + normalPay + "for my regular hours");
console.log("I got paid $" + overtimepay + "for my regular hours");
console.log("I got paid $" + grossPay + "for my gross pay")