// Ways to create object,

const obj ={};
const obj = Object.create(Object.prototype);
const obj = new Object();

// Adding values
Object.defineProperty(obj, 'name', {value: 'rakesh', writable : true})
Object.defineProperties(obj, {{key, value, writable}...})


const Car = function(color){
  this.color= color;
}

const car = new Car();

