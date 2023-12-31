let firstName: string = "Dylan"; // type string
//firstName = 44; //can not assign value to string //infer

let lastName: any = "Jatt" //type any, we can assign any value 
lastName = 69; // no error as type of lastName is 'any'

let numberN: number = Math.round(98.77);
console.log(firstName, lastName, numberN);

//arrays
let numbers = [1, 2, '2', "dsds", 7.8888, true];
let arrNames: string[] = ["Ram", "Lak", "Shat"];
arrNames[6] = "GG"; //undefined holes gets created if we add an element at a random location in array
arrNames.push("Bharat");
arrNames.forEach(e => {
    console.log(e);
});
for (let i = 0; i < arrNames.length; i++) {
    console.log(arrNames[i]);
}
// define our tuple, predifened type and number of elements, i.e exactly 3 elements of specified types
// internally they are represented as plain js arrays
// mainly used when there are key value pairs
// for best practise, restrict to only 2 values
let ourTuple: [number, boolean, string];
/*
Intellisense : 
    ourTuple. : we can see all the methods of array objects
    ourTuple[0]. : we can see all methods of number
    ourTuple[2]. : we can see all the methods of sting object
*/

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push(9); //this is an error, does not align with what we learn, should get fixed soon
ourTuple.forEach(x => {
    console.log(x);
});

// enums
// special "class" that represents a group of constants (unchangeable variables)
// using const while defining enums creates more OPTIMIZED js code
// Enums come in two flavors string and numeric
// By default, enums will initialize the first value to 0 and add 1 to each additional value
/*
- if you want to declare your own values, then we have to do it for all
- for below code, sets value to 2 for medium and 3 for large automatically
*/
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log("my size is - ", mySize);

const enum Character { first = "a", second = "b", third = "c", fourth = "d" };
let anyChar: Character = Character.second;
console.log("any character is - ", anyChar);

// TypeScript Type Aliases and Interfaces
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

// Interfaces are similar to type aliases, except they only apply to object types.
// Interfaces can extend each other's definition.
interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle);

// function in typescript
// to make year = 2022 optional -> year ?
function calculateTax(income: number, year = 2022/*if not provided, 2022 will be used*/): number/* return type */ {
    if (year > 2022)
        return income * 1.2;
    return income * 1.3;
}

// js allows passing multiple arguments to fn, but ts is strict about this, so provide with exact no. of arguments
let taxBefore2022: number = calculateTax(10_100); // year not provided, 2022 default will be used
let taxAfter2023: number = calculateTax(50_000, 2032); // will override year's parameter default value 
console.log(taxBefore2022, taxAfter2023);

//type alias is used to define custom type
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void //method, signature (params => return type)
}

let e: Employee = { id: 1, name: "Sam", retire: (date: Date) => { console.log(date); } };
let x: Employee = e;
let y: any = e;
console.log(x);
console.log(y);

//union types, when fn parameters can be of many types
function kgToLbs(weight: number | string) {
    if (typeof weight === 'number')
        return weight * 1.5;
    else
        return parseInt(weight) * 1;
}
kgToLbs(10);
kgToLbs("10.5");

// intersection types
type Draggable = {
    drag: () => void
};
type Resizeable = {
    resize: () => void
}
type UIWidget = Draggable & Resizeable;
let Box: UIWidget = {
    drag: () => { }, // we need to implement both the methods in Draggable and Resizeable so as to use Box object
    resize: () => { }
};
console.log(Box);

// literals, to limit the values a variable can take (any type, no or string)
type Quantity = 50 | 100;
let quant: Quantity = 100; // can only be assigned 50 or 100
type metric = "cm" | "inch";

// nullable types
function greet(name: string | null | undefined) { // allow name to contain null and undefined also
    if (name) // if there is valid value in name, name will be printed, check if value is not null or undefined
        console.log(name.toUpperCase());
    else
        console.log("Hola!"); //printed in case of null or undefined
}
greet("Vinay");
greet(null);
greet(undefined);

// TypeScript Casting
// can be done by using 'as' or <>
let hello: unknown = 'hello';
console.log((hello as string).length);
console.log((<string>hello).length);

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// console.log(customer) : error because, getCustomer can return null which can not access birthday property
// if (customer != null && customer != undefined) // can be checked using this
// better way : using optional property access operator
console.log(customer?.birthday?.getFullYear());

// we can also use this while accessing array elements
// traditionally :
// if(customers !== null && customers !== undefined)
//      customers[0];
// using : optional property access operator, before accesing elements
// customers?.[0]        

let customers: number[] | undefined | null = [];
if (customers && customers.length > 0)
    console.log("customers array");
else
    console.log("nothing in customers array");