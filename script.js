//TECHNICAL ASSESSMENT JAVASCRIPT
//Instruction 15
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

//Intruction 5 ================================================================

// let count = 20;

// while (count >= 0)
// {
//     if (count % 2 == 0){
//         console.log("even number " + count);
//         count--;
//     }
//     else{
//         console.log("odd number " + count);
//         count--;
//     }
// }

//Stretch
//=============WORKING
count = prompt ("Enter a number from 0 - 20")
while (isNaN (count)){
    count = prompt ("It should be a number from 0 - 20");
}
while (count > 20){
    count = prompt ("It should be a number from 0 - 20");
}

while (count >= 0 && count <= 20)
{
    if (count % 2 == 0)
    {
        console.log("even number " + count);
        count--;
    }
    else if (count % 2 !== 0){
        console.log("odd number " + count);
        count--;
    }
}
//=============WORKING


// switch(count){
//     case (count % 2 == 0):
//         console.log("even number " + count);
//         count--;
//         break;
    
//     case (count % 2 !== 0):
//         console.log("odd number " + count);
//         count--;
//         break;
        
//     default:
//         console.log("It should be a number from 0 - 20");
//         break;

// }
// count = prompt ("Enter a number from 0 - 20");

// while (20 > count > 0){
//     if (count % 2 == 0)
//     {
//         console.log("even number " + count);
//         count--;
//     }
//     else (count % 2 !== 0)
//         console.log("odd number " + count);
//         count--;
// }







//Instruction 6

// let num = prompt ("Give me a number ");

// if (isNaN (num || typeof parseInt(num) !== "number")){
//     console.log("invalid input!");
// }
//     else if (num < 50){
//         console.log("Currently at number " + num + (". Terminating the loop"));
//     }
//     else if (num % 10 == 0){
//         console.log("The number is divisible by 10. Skipping the number");
//     }

//     else if (num % 5 == 0){
//         console.log(num/5);
//     }


//Instruction 7

// let attempt = 3;

// while (attempt > 0){
//     let user = prompt ("Enter a username or email");
//     let pass = prompt ("Enter a password");
    
//     if (user == "student@mail.com" && pass == "discovery"){
//         alert ("SuccessFully Login")
//         break;
//     }
//     else{
//         attempt--;
//         alert ("Login Failed Now Only " + attempt + " Login Attempts Available")
//     }
// }
