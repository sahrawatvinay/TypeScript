"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Jane");
console.log(person.getName());
class Rect {
    constructor(w, h, color) {
        this.w = w;
        this.h = h;
        this.color = color;
    }
    getArea() {
        return this.w * this.h;
    }
    getColor() {
        return this.color;
    }
}
class Square extends Rect {
    constructor(w, c) {
        super(w, w, c);
        this.wid = 0;
        this.col = "";
        this.wid = w;
        this.col = c;
    }
    getArea() {
        console.log("gggggggg");
        return this.wid * this.wid;
    }
}
const mySq = new Square(20, "red");
console.log(mySq.getArea() + " " + mySq.getColor());
let shape = new Rect(55, 66, "blue");
console.log(shape.getArea() + " " + shape.getColor());
//# sourceMappingURL=oops.js.map