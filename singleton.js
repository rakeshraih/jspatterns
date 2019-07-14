console.clear();

const countDefaultValue = 10;
// Add EIFY to create a module, self contained obj

const Obj = (()=>{
 let counter = 10; 
 let singleton; 
 const init = ()=> { 
  return {
		updateCounter: ()=>{
			this.counter = counter++;
		},
		getCounter : ()=> this.counter
  }
}
 if(!singleton){
    singleton = init();
    return singleton;
 }else{
   return singleton;
 }
})();
// Pass any no of args to be used later

console.log(Obj.updateCounter())
console.log(Obj.getCounter())
