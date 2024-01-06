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
// we need to implement each and every memeber and methods in the interface
interface Shape {
    color: string; //can be made private and protected as well as per need
    getArea: () => number;
    getColor: () => string;
}

// the Rect class implements the Shape interface, which means it must have a color property, getArea and getColor method as specified by the interface
class Rect implements Shape {
    public constructor(protected readonly w: number, protected readonly h: number, readonly color: string) { }

    public getArea(): number {
        return this.w * this.h;
    }

    public getColor(): string {
        return this.color;
    }
}

class Square extends Rect {
    wid: number = 0;
    col: string = "";
    public constructor(w: number, c: string) {
        super(w, w, c); //since Square class extends Rect, it has all the properties as mentioned in Rect class, derived class must contain super method call
        this.wid = w;
        this.col = c;
    }
    // getArea gets inherited from Rectangle, if we do not define getArea, the getArea() of Rect will be called

    // override
    // if we want to override it, we can do as follows
    public getArea(): number {
        console.log("gggggggg");
        return this.wid * this.wid;
    }
}

const mySq = new Square(20, "red");
console.log(mySq.getArea() + " " + mySq.getColor());

let shape: Rect = new Rect(55, 66, "blue");
console.log(shape.getArea() + " " + shape.getColor());

// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. 
// This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.