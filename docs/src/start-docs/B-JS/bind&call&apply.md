# bind & call & apply

## bind & call & apply

- call 和 apply,是为了动态改变 this 而出现。当一个 object 没有某个方法，但是其他对象有，就可以借助 call 和 apply 来使用其他对象的方法。

```js
// document.getElementsByTagName选择的dom 节点是一种类似array的array。它不能应用Array下的push,pop等方法
var domNodes = Array.prototype.slice.call(
  document.getElementByTagName('*')
)
```

```js
function Cat(name) {
  this.name = name
  this.showName = function (args) {
    console.log(this.name, args)
  }
}

let cat = new Cat('aa')
cat.showName('1') // aa 1
let dog = { name: 'bb' }
cat.showName.call(dog, '1') // bb 1
cat.showName.apply(dog, ['2']) // bb 2
```

- call 与 apply,接受参数不同。**call 将多个参数分开接收**，apply 将参数合并为数组接收。
- bind 方法也可以改变 this 指针。 与 call 和 apply 的区别在于不会立即执行。bind 方法会预先将参数传递给方法。bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

## call 实现

```js
Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not function')
  }
  //获取当前上下文
  context = context || window
  //将指针赋值给当前上下文中的函数
  context.fn = this
  //获取参数，过滤掉第一个参数
  let arg = [...arguments].slice(1)
  //执行函数
  let result = context.fn(...arg)
  //删除绑定
  delete context.fn
  //返回结果
  return result
}

function foo() {
  this.name = 'foo'
  this.showName = function () {
    console.log(this.name, arguments)
  }
}

new foo('foo').showName.call({ name: 'fooooo' }, 'aaa', 'bbb')
new foo('foo').showName.myCall({ name: 'fooooo' }, 'aaa', 'bbb')
```

## apply 实现

```js
Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('is not function')
  }
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    context.fn(...arguments[1])
  } else {
    context.fn()
  }
  delete context.fn
  return result
}

function foo() {
  this.name = 'foo'
  this.showName = function () {
    console.log(this.name, arguments)
  }
}

new foo('foo').showName.apply({ name: 'fooooo' }, ['aaa', 'bbb'])
new foo('foo').showName.myApply({ name: 'fooooo' }, ['aaa', 'bbb'])
```

## bind 实现

```js
//使用 apply 实现 bind
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  let self = this
  return function () {
    return self.apply(context, arguments)
  }
}

function Foo() {
  this.name = 'foo'
  this.showName = function () {
    console.log(this.name, arguments)
  }
}

let fn = new Foo('foo').showName.bind({ name: 'foooooo' })
fn('aaa', 'bbb')
let fn1 = new Foo('foo').showName.myBind({ name: 'foooooo' })
fn1('aaa', 'bbb')
```

### 箭头函数中任然可以使用 call()、apply()、bind()方法，但是 this 值不会被影响。
