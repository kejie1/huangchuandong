# 深入理解JavaScript

## 1.原型到原型链

### 引言

#### 创建对象的三种方法

##### 1.调用构造函数

```js
let obj = new Object
```

##### 2.调用Object.create()

```js
let obj1 = {}
let obj2 = Object.create(obj1) //使用现有的对象来提供对象的__proto__
```

##### 3.通过{}对象字面量

```js
let obj3 = {}
```



### 构造函数创建对象

```js
// 构造函数创建对象
function Person() {

}
var person = new Person();
person.name = 'kejie';
console.log(person.name) // kejie
```

Person 就是一个构造函数，我们使用 new 创建了一个实例对象 person。



### prototype(显示原型)

```js
function Person() { //this.prototype = {}

}
Person.prototype.name = 'kejie';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // kejie
console.log(person2.name) // kejie
```

任何函数都有一个prototype，函数的 prototype 属性指向了一个对象(原型对象)，这个对象正是调用该构造函数而创建的**实例**的原型，prototype只存在于构造函数中，用于共享构造函数的属性和方法，也就是这个例子中的 person1 和 person2 的原型。

原型：任何对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

![构造函数和实例原型的关系图](JavaScript\prototype\image\原型图1.png)

###  __proto__(隐式原型)

任何对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。(prototype也是一个对象，所以也有一个__proto__)

```js
function Person() {

}
var person = new Person(); //this.proto === Fn.prototype
console.log(person.__proto__ === Person.prototype); // true
```

![实例与实例原型的关系图](JavaScript\prototype\image\原型图2.png)

### constructor

```js
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
```

![image-20230110092536124](JavaScript\prototype\image\原型图3.png)

```js
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
```



### 实例与原型

```js
function Person() {

}

Person.prototype.name = 'kejie';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // kejie
```

给实例对象person添加了name属性，所以打印的时候为Daisy，但是删除了person的name属性时，从person对象中找不到name属性，那么就会从person对象上的原型中去找，也就是person.____proto____,因为person.__proto__=Person.prototype，所以name的值为kejie



### 原型的原型

```js
var obj = new Object();
obj.name = 'kejie'
console.log(obj.name) // kejie
```

![image-20230110093428444](JavaScript\prototype\image\原型图3.png)

### 原型链

访问一个对象的属性时，js引擎回查看当前对象中是否有这个属性，如果没有就会查找他的原型对象是否包含此属性，以此内推，一直检索到Object内建对象，这个查找的过程就形成了原型链

因为Object.prototype.____proto____值为null即Object.prototype没有原型，所以查找属性时查到Object.prototype就可以停止查找了

```js
Object.prototyoe.__proto__ === null
```

![原型图4](JavaScript\prototype\image\原型图4.png)

### 内存结构图 

![image-20230109180719771](JavaScript\prototype\image\内存.png)



### 总结

______proto__是什么？和prototype是什么关系

1.任何对象都有一个______proto__属性，它指向了构造函数的prototype属性

2.任何函数都有一个prototype

3.prototype是一个对象，所以它里面也有一个______proto__
