let firstName: string = "Dylan"; // type string
//firstName = 44; //can not assign value to string //infer

let lastName: any = "Jatt" //type any, we can assign any value 
lastName = 69; // no error as type of lastName is 'any'

let numberN: number = Math.round(98.77);
console.log(firstName, lastName, numberN);

//arrays
let arrNames: string[] = ["Ram", "Lak", "Shat"];
arrNames.push("Bharat");
arrNames.forEach(e => {
    console.log(e);
});
for (let i = 0; i < arrNames.length; i++) {
    console.log(arrNames[i]);
}
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
ourTuple.push(9);
ourTuple.forEach(x => {
    console.log(x);
});

