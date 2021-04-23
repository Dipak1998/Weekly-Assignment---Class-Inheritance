// declare class

// export class using module.exports
class Shape{
    constructor(a,b){
        this.base = a;
        this.height = b;
    }
    drawShape(color){
        var color = 'red';
        return color;
        
    }
    calculateArea(){
        var arae = base * height;
        return arae;
    }
}
export default Shape;
