function Person(){
	this.name="ivan";
}
Person.prototype.myName=function(v1,v2){
	//console.log(this);
	console.log('V1='+v1+";V2="+v2);
	console.log(this.name);
}

var p=new Person();
p.myName(-1,-2);

console.log("****************")
var Obj={name:"Oliva"};
var p0=new Person();
p0.myName.apply(p0,[1,2]);

console.log("****************")
var Obj2={name:'king'}

var p2=new Person();
p2.myName.call(Obj2,3,4)

console.log("****************")

var p3=new Person();
Obj3={'name':'Becky'}
var m=p3.myName.bind(Obj3,5,6)
m();
