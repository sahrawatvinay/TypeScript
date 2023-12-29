# Important points about typescript
- TypeScript is JavaScript with added syntax for types. Js with type checking.
- TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.
- Benefits : static typing, code completion, refactoring, shorthand notations.
- transpilation : conversion of ts code to js using compiler.
- setting up ts project : 
    1. create a .ts file 
    2. tsc --init
    3. do the required settings in tsconfig.json file
    4. type tsc in terminal, all the files will be transpiled
- Datatypes : boolean, number, string, bigint
- Type Assignment : 
    a. let firstName: string = "Dylan"; (Explicit - writing out the type)
    b. let firstName = "Dylan"; (TypeScript will "guess" the type, based on the assigned value)
- Having TypeScript "guess" the type of a value is called infer.
- any is a type that disables type checking and effectively allows all types to be used.
    ex. let v: any = true;
            v = "string"; // no error as it can be "any" type
            Math.round(v); // no error as it can be "any" type
- Arrays concept : 
    js arrays are dynamic, can be of any type, so for typesafety in ts we specify type of array to prevent any discrepancy or error later in code
    const names: string[] = [];
    names.push("Dylan"); // no error
    // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
- The readonly keyword can prevent arrays from being changed
- Tuples : A tuple is a typed array with a pre-defined length and types for each index.
    eg. let ourTuple: [number, boolean, string];
        ourTuple = [5, false, 'Coding God was here'];
- const car: { type: string, model: string, year: number } = {
        type: "Toyota",
        model: "Corolla",
        year: 2009
    };