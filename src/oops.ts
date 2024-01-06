/* 
TypeScript adds types and visibility modifiers to JavaScript classes.
There are three main visibility modifiers in TypeScript.
public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
The this keyword in a class usually refers to the instance of the class.
*/

class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person("Jane");
console.log(person.getName());

// Inheritance: Implements
interface Shape {
    getArea: () => number;
}

class Rect implements Shape {
    public constructor(protected readonly w: number, protected readonly h: number) { }

    public getArea(): number {
        return this.w * this.h;
    }
}

class Square extends Rect {
    public constructor(w: number) {
        super(w, w);
    }
    // getArea gets inherited from Rectangle
}

const mySq = new Square(20);
console.log(mySq.getArea());

let shape: Rect = new Rect(55, 66);
console.log(shape.getArea());