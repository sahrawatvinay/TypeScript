"use strict";
var _a;
let firstName = "Dylan";
let lastName = "Jatt";
lastName = 69;
let numberN = Math.round(98.77);
console.log(firstName, lastName, numberN);
let numbers = [1, 2, '2', "dsds", 7.8888, true];
let arrNames = ["Ram", "Lak", "Shat"];
arrNames[6] = "GG";
arrNames.push("Bharat");
arrNames.forEach(e => {
    console.log(e);
});
for (let i = 0; i < arrNames.length; i++) {
    console.log(arrNames[i]);
}
let ourTuple;
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push(9);
ourTuple.forEach(x => {
    console.log(x);
});
;
let mySize = 2;
console.log("my size is - ", mySize);
;
let anyChar = "b";
console.log("any character is - ", anyChar);
const carYear = 2001;
const carType = "Toyota";
const carModel = "Corolla";
const car = {
    year: carYear,
    type: carType,
    model: carModel
};
const coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle);
function calculateTax(income, year = 2022) {
    if (year > 2022)
        return income * 1.2;
    return income * 1.3;
}
let taxBefore2022 = calculateTax(10100);
let taxAfter2023 = calculateTax(50000, 2032);
console.log(taxBefore2022, taxAfter2023);
let e = { id: 1, name: "Sam", retire: (date) => { console.log(date); } };
let x = e;
let y = e;
console.log(x);
console.log(y);
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 1.5;
    else
        return parseInt(weight) * 1;
}
kgToLbs(10);
kgToLbs("10.5");
let Box = {
    drag: () => { },
    resize: () => { }
};
console.log(Box);
let quant = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet("Vinay");
greet(null);
greet(undefined);
let hello = 'hello';
console.log(hello.length);
console.log(hello.length);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = [];
if (customers && customers.length > 0)
    console.log("customers array");
else
    console.log("nothing in customers array");
//# sourceMappingURL=basics.js.map