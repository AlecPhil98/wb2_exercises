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
    regularHours = 40;
    overtimeHours = hoursWorked - regularHours;

} else {
    //code for folks who didn't work overtime
    regularHours = hoursWorked;

}
//create some variables to represent the normal pay adn the overtime pay 
let normalPay = payRate * regularHours;
let overtimePay = (payRate * 1.5) * overtimeHours;

let grossPay = normalPay + overtimePay;
let annualGrossPay = grossPay * 52;

let taxFileType = "joint";
let taxRate = 0;
if (taxFileType === "joint") {

    if (annualGrossPay < 12000) {
        taxRate = 0;
    } else if (annualGrossPay < 25000) {
        taxRate = 6;
    } else if (annualGrossPay < 75000) {
        taxRate = 11;
    } else {

        taxRate = 20;
    }
}
else {
    if (taxFileType === "single") {

        if (annualGrossPay < 12000) {
            taxRate = 0;
        } else if (annualGrossPay < 25000) {
            taxRate = 5;
        } else if (annualGrossPay < 75000) {
            taxRate = 15;
        } else {
            taxRate = 20;
        }

    }
}



let taxAmount = grossPay + (taxRate / 100);
let afterTaxes = grossPay - taxAmount;

console.log("I got paid $" + normalPay + " for my regular hours");
console.log("I got paid $" + overtimePay + " for my overtime hours");
console.log("I got paid $" + grossPay + " for my gross pay")

console.log("Because you earn " + payRate + " per hour, youe gross pay is " + grossPay)
console.log("Your filing status is " + taxFileType);
console.log("Your tax withholing is " + taxAmount.toFixed(2));
console.log("Your net pay is " + afterTaxes.toFixed(2));