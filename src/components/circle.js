// import using require

// declare class


// export class using module.exports
// import {Shape} from './shape.js';
var Shape = require('./shape.js')

class Circle extends Shape{
    
    constructor(d){
        super(d);
        this.r = d;
    }
    drawShape(color){
        var color = 'red';
        return color;
    }
    calculateArea(){
        var area = ( this.r)*( this.r)* Math.PI;
        return area;

    }
}


let c = new Circle(3);
var result = c.calculateArea();
var result2 = c.drawShape();

console.log(result);
console.log(result2);

