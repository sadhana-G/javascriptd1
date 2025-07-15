var val=67;
let val2=37;
//console.log(val);
//console.log("12"==12);console.log("12"===12);
const prompt = require("prompt-sync")();
//let age = prompt("Enter your age:");
//let name = prompt("Enter your name:");
//console.log(age);
//console.log(name);

let age = prompt("Enter your age:")
if(age>=20 & age<23)
{
    console.log("PG students");
}
else if(age<20 & age>=18)
{
    console.log("UG students");
}
else if(age>0 & age<18)
{
    console.log("School students");
}
else if(age>23 & age<100 )
{
    console.log("Working employee");
}
else{
    console.log("Invalid Input");
}
