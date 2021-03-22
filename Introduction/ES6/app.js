//jshint esversion: 6
//es6 refresher

var a = "Mertens";

//better approach to use let and const
let b = "Insigne";
const c = "Dzeko";

//Functions
function addMe(a, b)
{
    return a+b;
}

//better approach: Arrow Functions
let addMe2 = (a, b) => {
    return a+b;
}

//for 1 argument
let gimmeName = name => {
    return "Hi "+name;
}

//for 0 arguments
let giveMeFreedom = () => {
    return "Just Like a Wavin' Flag.";
}

//just wanna return,
let rickAstley = () => "I got You!";
//yeah, remove the 'return'
/*
//importing
import myMan from './person.js';

//give an alias if its just one export
import manu from './person.js';

import {weak} from './utility.js';
*/

//classes
/*
class Human
{
    constructor()
    {
        this.gender = "Male";
    }

    getGender = () => this.gender;
}

class Person extends Human{

    constructor()
    {
        super();
        this.name = "John";
    }

    getName = () => this.name;
}
*/

class Human
{
    gender = "Male";

    getGender = () => this.gender;
}

class Person extends Human{

    name = "John";

    getName = () => this.name;
}

const man = new Person;
//console.log(man.getGender());
//console.log(man.getName());

let oldArr = [1, 2, 3, 4];

let newArr = [...oldArr, 5, 6];

//console.log(newArr);

let oldObj = {
    defence: "Ruben Dias"
};

let newObj = {
    ...oldObj,
    midfield: "Ilkay Gundogan"
}

//console.log(newObj);

function sorters(...args)
{
    return args.sort();
}

//console.log(sorters(3, 4, 8, 1, 2, 9, 5));


//destructuring
[a, b] = ['Bruno', 'Pogba'];
//console.log(a)
//console.log(b)

let boy = {
    name2: 'Max', 
    age: 21, 
    gender: 'Male'
};

const {name2, age} = boy;

//console.log(name2)
//console.log(age)

let bro = ['aguero', 'torres', 'sterling', 'Mahrez'];
bro.map((namee)=>{
    return "The " + namee;
});

console.log(bro);