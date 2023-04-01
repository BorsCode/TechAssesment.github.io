//TECHNICAL ASSESSMENT JAVASCRIPT
//Instruction 2
console.log("connected");
console.log("Hello World!");


userInfo (
    person = {
        firstName: "John",
        lastName: "Smith",
        age: 30,
        hobbies: ['Biking',' Mountain Climbing',' Swimming'],
        isMarried: true
},
    workAddress = {
        city: "Lincoln",
        houseNo: 32,
        state: "Nebraska",
        street: "Washington"
}
)


function userInfo (person) 
{
    console.log
    (
    "First Name: " + person.firstName,
    "\nLast Name: "+ person.lastName,
    "\nAge: " + (person.age) ,
    "\nHobbies: " + (person.hobbies),
    "\nWork Address:",
    "\nCity: " + workAddress.city,
    "\nHouse Number: "+ (workAddress.houseNo),
    "\nState: " + workAddress.state,
    "\nStreet: " + workAddress.street
    )
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years of age`);
    console.log(`His Hobbies are ${person.hobbies}`);
    console.log
    (`He works at \nCity: ${workAddress.city} \nHouse Number: ${workAddress.houseNo} \nState: ${workAddress.state} \nStreet: ${workAddress.street}
    `)
    console.log(`The value of isMarried is: `)
    console.log(person.isMarried)
}

//Instruction 2

let x = 5;
let y =8;

console.log(x<=y);
console.log(x>y);
console.log(y !== y);
console.log(y === y);


//Instruction 3

// let color = prompt ("Choose Color Between: Black, Violet, & Pink");

// switch(color){

//     case ("black"):
//     case("BLACK"):
//     case ("Black"):
//     console.log("You choose: Black!");
//     break;
    
//     case ("violet"):
//         case("VIOLET"):
//         case ("Violet"):
//         console.log("You choose: Violet!");
//         break;
    
//     case ("pink"):
//     case("PINK"):
//     case ("Pink"):
//     console.log("You choose: Pink!");
//     break;

//     default:
//         console.log("Invalid Input.");
//         break;
// }


//Instruction 4


// function addOrEven (num) {
//     if (isNaN (num || typeof parseInt(num) !== "number"))
//     {
//         return `Unexpected Input`;
//     }
//     else if (num == ''){
//         return "Please input inside the box";
//     }
//     else{
//         if (num % 2 == 0)
//         {
//             return ("even number");
//         }
//         else{
//             return ("odd number");
//         }
//     }
// }
// let userInput = prompt ("Give me a number");
// console.log(addOrEven(userInput));

//Intruction 5

let count = 0;

do{
    console.log(count);
    count++;
}while (count <=20);

//Stretch Goal

function stretchCount (counts){
if (isNaN (counts || typeof parseInt(counts) !== "number" || count<=20))
{
    return `It should be a number from 0-20`;
}
// else
// {
//     do{
//         console.log(counts);
//         count++;
//     }while (counts <=20);
// }
}
counts = prompt ("Give me a number from 0-20: ");
console.log(stretchCount(counts));



