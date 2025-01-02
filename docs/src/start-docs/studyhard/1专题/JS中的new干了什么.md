# new 关键字

## new 关键字在 JavaScript 中的作用
- new 关键字在 JavaScript 中用于创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一。使用 new 关键字创建对象的过程可以分为以下几个步骤：
- 创建一个空对象：创建一个全新的空对象。
- 设置原型链：将这个新对象的原型（**proto**）设置为构造函数的 prototype 属性。
- 绑定 this：将构造函数内部的 this 绑定到这个新创建的对象。
- 执行构造函数：执行构造函数中的代码，为新对象添加属性和方法。
- 返回新对象：如果构造函数没有显式返回一个对象，则返回新创建的对象；如果构造函数显式返回一个对象，则返回该对象。

## JS 中 new 关键字干了什么事

- new 运算符创建一个指定对象类型的实例

```js
function Car() {}
let car = new Car()

class Car {}
let car = new Car()
```

## 使用 new 构造器，分为三步

- 创建一个空对象，将它的引用赋值给 this,继承函数的原型
- 通过 this 将属性和方法添加至这个对象
- 返回 this 指向的新对象，也就是实例。如果没有，则返回第一个创建的对象。

```js
function Car(name) {
  this.name = name
}
function Car(name) {
  this.name = name
  return { age: name }
}

function myNew(fn) {
  return function () {
    let obj = {}
    obj.__proto__ = fn.prototype
    let res = fn.call(obj, ...arguments)
    return typeof res === 'object' ? res : obj
  }
  // or
  return function () {
    let obj = Object.create(fn.prototype)
    let res = fn.apply(obj, arguments)
    return typeof res === 'object' ? res : obj
  }
}

function myNew2() {
  let obj = {}
  let Constructor = Array.prototype.shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  let res = Constructor.call(obj, ...arguments)
  return typeof res === 'object' ? res : obj
}

myNew(Car)('red')
myNew2(Car, 'red')
```
