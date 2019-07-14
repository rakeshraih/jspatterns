// Observer will have add, remove, notify functionalities
console.clear();

// const Observer = function(){
	
// 	this.observeList = {};
	
//   this.add = (name, fn)=>{
// 		if(this.observeList.hasOwnProperty(name)){
// 			this.observeList[name] = [fn,...this.observeList[name]]
// 		}else{
// 			this.observeList[name] = [fn];
// 		}
// 	};
	
// 	this.notify= (name, data)=>{
// 		this.observeList[name].forEach(fn=>{
// 			fn(data);
// 		})
// 	};
	
// 	this.remove= (name,fn)=>{
// 		const index = this.observeList[name].findIndex(fnInternal=> fn === fnInternal );
// 		this.observeList[name] = this.observeList[name].splice(index,1);
// 		console.log(this.observeList[name]);
// 	};
	
// };

// const obj = new Observer();

const Observer = (()=>{
	
	observeList = {};
	
  add = (name, fn)=>{
		if(observeList.hasOwnProperty(name)){
			observeList[name].push(fn);
		}else{
			observeList[name] = [fn];
		}
	};
	
	notify= (name, data)=>{
		observeList[name].forEach(fn=>{
			fn(data);
		})
	};
	
	remove= (name,fn)=>{
		const index = observeList[name].findIndex(fnInternal=> fn === fnInternal );
		observeList[name] = observeList[name].splice(index,1);
	};
	
	return {add, remove, notify};
	
})();

const obj = Observer;

console.log(obj);
const f1 = ()=>{console.log(1)};
const f2 = ()=>{console.log(2)};
const f3 = ()=>{console.log(3)};
const f4 = ()=>{console.log(4)};
								
obj.add('hi', f1);
obj.add('hi', f2);
obj.add('bye', f3);
obj.add('bye', f4);

obj.notify('hi');
obj.remove('hi', f2);
obj.notify('hi');

