console.clear();

const countDefaultValue = 10;
// Add EIFY to create a module, self contained obj

const Obj = ((countDefaultValue)=>{
 let counter = countDefaultValue; 
 return {
  sum : 0,
  add: (a,b)=>{
    this.sum = a+b;
    return this.sum;
  },
  updateCounter: ()=>{
    this.counter = counter++;
  },
  getCounter : ()=> this.counter
}
// })();
})(countDefaultValue);
// Pass any no of args to be used later

console.log(Obj.updateCounter())
console.log(Obj.getCounter())
