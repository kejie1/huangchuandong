// 构造函数创建对象
function Person() {

}
var person = new Person();
person.name = 'kejie';
console.log(person.name) // kejie


function Person() {

}
Person.prototype.name = 'kejie';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // kejie
console.log(person2.name) // kejie


// 内存结构
function Fn(){
  // this.prototype = {}
}
console.log(Fn.prototype);

var fn = new Fn()
// this.__proto__ = Fn.prototype
console.log(fn.__proto__);
console.log(Fn.prototype === fn.__proto__); //true
Fn.prototype.test = function(){
  console.log('test()');
}
fn.test()


function Fn(){
  this.test1=function(){
    console.log('test1');
  }
}
Fn.prototype.test2 = function(){
  console.log('test2()');
}
var fn = new Fn()
fn.test1()
fn.test2()
console.log(fn.toString());
fn.test3() //undefine


function Person() {

}

Person.prototype.name = 'kejie';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // kejie