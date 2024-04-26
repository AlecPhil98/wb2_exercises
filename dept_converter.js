"use strict"
//create a variable to hold the departmment name
let departmentName = "";

switch (1) {
    case 1:
        departmentName = "Marketing";
        break;
    case 5:
        departmentName = "Human Resources";
        break;
    case 10:
        departmentName = "Account";
        break;
    case 12:
        departmentName = "Legal";
        break;
    case 18 :
        departmentName = "IT";
        break;
    case 20:
        departmentName = "Customer Relations";
    default:
        departmentName = " We have no idea what deapartmen you are looking for";

}
//output information to console
console.log(departmentName)