# Promise

## Promise的产生背景---回调函数噩梦

回调函数噩梦(恐怖回调)，也被称为恶魔金字塔，指如ajax依赖调用时，回调函数会层层嵌套，而这种层层嵌套的写法，往往会让人难以理解，所以称之为噩梦。

例如：服务器中有3个txt文件，我们需要在html上，通过js中的异步的ajax，分别获取这3个文件的内容，假设这3个文件分别存储的数据为1、2、3，那么我希望在js中，能够求出1+2+3，把6输出。

你觉得代码应该怎么写？

```js
	var str = "";
    $.ajax({
        type: "get",
        url: "../data/1.txt",
        success: function (msg1) {
            console.log(msg1);
            str += msg1;

            setTimeout(function () {
                $.ajax({
                    type: "get",
                    url: "../data/2.txt",
                    success: function (msg2) {
                        console.log(msg2);
                        str += msg2;

                        $.ajax({
                            type: "get",
                            url: "../data/3.txt",
                            success: function (msg3) {
                                console.log(msg3);
                                str += msg3;

                                console.log(str);
                            }
                        })
                    }
                })
            }, 10)

        }
    })
```


## Promise对象

Promise是一种思维方式，是一种解决回调函数噩梦的方案(Promise 是异步编程的一种解决方案)。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

Promise对象代表一个异步操作，有三种状态：
- Pending（进行中）
- Resolved（已完成，又称Fulfilled）
- Rejected（已失败）

注：可以把Promise看成是状态机，当该Promise对象创建出来之后，其状态就是进行中，然后通过程序来控制到底是执行已完成，还是执行已失败。因为Promise处理的是异步任务，所以我们还得对Promise做监听，当Promise的状态发生变化时，我们要执行相应的函数。

Promise的特点:
1. 对象的状态不受外界影响   =>  想要改变状态 需要借助   resolve,rejected  方法
    resolve()  =>  pending(进行中状态) => fulfilled(已成功) 
    reject()  =>  pending(进行中状态) => rejected(已失败)

2.  Promise 对象 的状态一经改变  不能再次改变

Promise的优点:
优点   有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

缺点  
1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2. 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。(直接报错)
3. 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。


```javascript
var promise = new Promise( function( resolve, reject ){
	// 通常这里写一个异步任务，在这个异步任务中，
	// 通过resolve或reject来改变promise的状态。
	resolve(“数据”);
	// resolve指将状态更改为已完成
	// reject指将状态更改为已失败。
} );

// then实际上是对promise的状态监听
// 当状态为已完成时，触发第一个参数函数。
// 当状态为已失败时，触发第二个参数函数（第二个参数函数，可写可不写）
// 每一个函数中的参数，指当初状态改变时，所保存的数据。
promise.then(function(str){}, function(err){});
// or
// catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。(注 Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。)
promise.then(function(str){}).catch(function(err){})
```


all：每一个promise都执行后，再去执行then。

```javascript
Promise.all( [ promise1, promise2… ] ).then( function( result ){} )
```

race：只要有一个promise执行后，就去执行then。

```javascript
Promise.race( [ promise1, promise2… ] ).then( function( result ){} )
```

# 跨域

一个网站访问另一个网站的数据.

## 同源策略

同源策略：同源策略（Same origin policy）是一种约定,它是浏览器最核心也最基本的安全功能,由客户端访问某一个服务器的文件时，如果发起请求的这个来源与进行响应的目标的源不一致，目标源出于安全的角度，将拒绝这次访问。

同源策略限制了从同一个源(网站)加载的文档或脚本如何与来自另一个源(网站)的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。

比如，我们网站想从别人网站中拿一些数据，那么默认的时候，别人网站是不会给我们数据的。

协议名、域名、端口，这三项都相同，则被称为同源。
三项中只要有一项不同，则被称为跨源。

协议名指http、https等这种
域名包含网站域名、ip地址、计算机名称
端口默认是80，80并不会显示在浏览器地址栏中

```txt
# 下面哪组网址跨源（跨域）了？
http://127.0.0.1/1.html			http://127.0.0.1/2.html
http://127.0.0.1:80/1.html		http://127.0.0.1
http://127.0.0.1/               http://localhost/
http://localhost:81/1.html		http://localhost:82/1.html
http://abc.com/                 http://mp3.abc.com/
http://mp3.abc.com/			    https://mp3.abc.com/
```

跨源访问也叫做跨域访问。

真实开发中，很多场景下会涉及到跨域访问，比如百度网站就特别大，其中有mp3.baidu.com、image.baidu.com、tieba.baidu.com等等，而其中一些数据或服务是需要共用的，所以就需要跨域访问。

再比如支付系统，各个电商网站都提供支付宝或微信付款，这个就需要用到支付宝或微信的接口，所以这也是跨域访问。

那么，如何进行跨域访问呢？

## 跨域访问

AJAX解决的是数据交互问题，即把数据传递给对方，把对方的数据拿回来。
但有时对方网站因同源策略的限制，拒绝我们的请求，不给我们数据，所以我们需要想办法解决这个问题。


解决跨域访问的方法：

- 对方服务器CORS(跨域资源共享  )

> 指在对方服务器上做配置，即让他们允许我们访问，这样我们再通过AJAX就可以拿到数据了。

- 我方客户端JSONP(原理 引入资源不受同源策略的限制  link的href script的src  img的src )

> JSONP和AJAX一样，也是一种数据交互的方式。

> 无论对方网站是否允许我们访问，我们直接通过script标签，访问对方文件，拿到对方数据。


AJAX和JSONP都可以做数据交互，当有这种需求时，我们应该在AJAX和JSONP中选择一种。

- 如果拿回来的响应内容，被一个函数包裹着，可以用JSONP处理。

- 如果拿回来的响应内容，没有被函数包裹，可以用AJAX处理。


## 跨域访问之CORS

CORS指跨域资源共享

```php
<?php
// 下面这句话指允许来至任何人的访问
header('Access-Control-Allow-Origin: *');  
// 允许特定的网址来访问
header(‘Access-Control-Allow-Origin:http://127.0.0.1:8020’); 
?>
```

## 跨域访问之JSONP

因为script标签支持跨域访问，所以我们可以创建script标签，src指向一个跨域文件。

那么，该跨域文件的响应内容，就变成script标签内的内容了。

所以，该内容也可以被理解成是正在被执行的js代码。

如果该代码中有一个正在被执行的函数，该函数中又有参数。

我们就可以把这个参数理解成服务器传给客户端的数据。

客户端去定义这个函数，我们就能够对参数做任意处理了





## try...catch...finally

try/catch/finally 语句用于处理代码中可能出现的错误信息。

错误可能是语法错误，通常是程序员造成的编码错误或错别字。也 可能是拼写错误或语言中缺少的功能（可能由于浏览器差异）。

try语句允许我们定义在执行时进行错误测试的代码块。

catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。

finally 语句在 try 和 catch 之后无论有无异常都会执行。

注意： catch 和 finally 语句都是可选的，但你在使用 try 语句时必须至少使用一个。

提示： 当错误发生时， JavaScript 会停止执行，并生成一个错误信息。使用 throw 语句 来创建自定义消息(抛出异常)。如果你将 throw 和 try 、 catch一起使用，就可以控制程序输出的错误信息。

```js
    try {
        tryCode - 尝试执行代码块
    }
    catch (err) {
        catchCode - 捕获错误的代码块
    }
    finally {
        finallyCode - 无论 try / catch 结果如何都会执行的代码块
    }
```

错误类型

```
    Error    通用错误

    EvalError
        与eval()有关， 当调用 eval() 失败时抛出。
    RangeError
        数值变量或参数超出了其有效范围
    ReferenceError
        一个无效的引用(eg: strict模式下引用了一个未声明的变量等)
    SyntaxError
        当 JavaScript 语法错误时抛出。
    TypeError
        变量或参数不属于有效类型
```




