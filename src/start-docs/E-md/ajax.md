# AJAX

## 什么是Ajax？

是指一种创建交互式网页应用的网页开发技术。

- AJAX：Asynchronous Javascript And XML（异步JavaScript和XML）
- 交互：这里的交互指客户端和服务器的数据是可以相互传递和使用的。
- XML：一种类似于HTML的标记语言，可以将数据结构化，XML已经被JSON淘汰了。
- 异步：异步指程序可以同时执行，同步指程序需要按照顺序执行。

特点:
    在不提交整个页面的情况下,实现页面的局部刷新;


### AJAX产生的背景：

以前做数据交互的时候，大家通常选择使用表单的方式提交数据，表单提交这种方式，默认的时候会由当前页面跳转到action页面，所以用户体验及其糟糕，所以需要想办法让当前页面，不跳转的同时把数据传递过去，把服务器响应的内容拿回来。


### AJAX解决的问题：

指不刷新当前页面，把某些数据传递给服务器，把某些数据从服务器拿回客户端。

**注意：AJAX必须依赖服务执行，即使用http协议来运行。**


## 创建Ajax核心对象

```javascript
// W3C标准：
var xhr = new XMLHttpRequest();
```

```javascript
// IE标准： 
var xhr = new ActiveXObject("Msxml2.XMLHTTP");	// msxml3.0
// or
var xhr = new ActiveXObject("Microsoft.XMLHTTP");	// msxml2.6
```

## 建立连接

```javascript
// 语法：
xhr.open(type, url, true);
```

open() 方法中:
- 第1个参数指请求的发送方式，值为get或post。
- 第2个参数指请求的url路径。
- 第3个参数指请求是异步还是同步，如果写true表示异步（默认true），写false表示同步。

## 发起请求

```javascript
// 语法：
xhr.send();
```

如果是get方式发送请求，send()命令中不用写任何参数

> 传递的数据可以写在url中，服务器php文件用$_GET["参数名"]接收。

## 接收响应

```javascript
// 异步时需要通过 onreadystatechange 监听
// 指如果xhr对象的预备好的状态发生了变化时，触发函数。
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200){
		alert(xhr.responseText);
	}
}
// 请求状态4：响应已完成；您可以获取并使用服务器的响应了。
// HTTP状态码200：ok，页面正确打开，并得到完整的响应内容。
```

- onreadystatechange指本次ajax请求的状态发生改变时所触发的事件
- readyState 指请求状态
```
0：请求未初始化（还没有调用 open()）。
1：请求已经建立，但是还没有发送（还没有调用 send()）。
2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
4：响应已完成；您可以获取并使用服务器的响应了。
```

- status 指http状态（常用的http状态码，稍微了解下即可）

```
1**	信息，服务器收到请求，需要请求者继续执行操作
2**	成功，操作被成功接收并处理
3**	重定向，需要进一步的操作以完成请求
4**	客户端错误，请求包含语法错误或无法完成请求
5**	服务器错误，服务器在处理请求的过程中发生了错误
```

```
200：ok，页面正确打开，并得到完整的响应内容。
301：被请求的资源已永久移动到新位置
302：请求的资源临时从不同的 URI响应请求
304：缓存
404：页面不存在。
500：常指后端代码发生错误
503：由于临时的服务器维护或者过载，服务器当前无法处理请求。
```

```	
100	Continue	继续。客户端应继续其请求
101	Switching Protocols	切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议
200	OK	请求成功。一般用于GET与POST请求
201	Created	已创建。成功请求并创建了新的资源
202	Accepted	已接受。已经接受请求，但未处理完成
203	Non-Authoritative Information	非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本
204	No Content	无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
205	Reset Content	重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域
206	Partial Content	部分内容。服务器成功处理了部分GET请求
300	Multiple Choices	多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
301	Moved Permanently	永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
302	Found	临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI
303	See Other	查看其它地址。与301类似。使用GET和POST请求查看
304	Not Modified	未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
305	Use Proxy	使用代理。所请求的资源必须通过代理访问
306	Unused	已经被废弃的HTTP状态码
307	Temporary Redirect	临时重定向。与302类似。使用GET请求重定向
400	Bad Request	客户端请求的语法错误，服务器无法理解
401	Unauthorized	请求要求用户的身份认证
402	Payment Required	保留，将来使用
403	Forbidden	服务器理解请求客户端的请求，但是拒绝执行此请求
404	Not Found	服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
405	Method Not Allowed	客户端请求中的方法被禁止
406	Not Acceptable	服务器无法根据客户端请求的内容特性完成请求
407	Proxy Authentication Required	请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权
408	Request Time-out	服务器等待客户端发送的请求时间过长，超时
409	Conflict	服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突
410	Gone	客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置
411	Length Required	服务器无法处理客户端发送的不带Content-Length的请求信息
412	Precondition Failed	客户端请求信息的先决条件错误
413	Request Entity Too Large	由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息
414	Request-URI Too Large	请求的URI过长（URI通常为网址），服务器无法处理
415	Unsupported Media Type	服务器无法处理请求附带的媒体格式
416	Requested range not satisfiable	客户端请求的范围无效
417	Expectation Failed	服务器无法满足Expect的请求头信息
500	Internal Server Error	服务器内部错误，无法完成请求
501	Not Implemented	服务器不支持请求的功能，无法完成请求
502	Bad Gateway	作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
503	Service Unavailable	由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
504	Gateway Time-out	充当网关或代理的服务器，未及时从远端服务器获取请求
505	HTTP Version not supported	服务器不支持请求的HTTP协议的版本，无法完成处理
```

responseText指接收到的响应结果 


## GET和POST

W3C建议我们使用get获取数据，使用post发送数据。

但实际上，无论是get还是post，都即可以发送数据，也可以接收数据。

区别：
- get是以url的方式传递数据；而post是以http请求中的body部分传递数据。所以有种说法说post更安全。
- get传递数据时，直接在浏览器地址栏中可以看到；而post可以使用开发者工具中看到。
- get传递的数据，中文会被编码或有可能出现乱码；而post不会。
- get在IE下会走缓存；而post不会。

**GET 和 POST 可传递的最大值是多少？**

网上流传的一种说法是，GET 256b，POST 2M，这种说法不太准确。

- GET 是通过 URL 传递的，HTTP协议没有对URL长度和参数个数进行限制。这个限制是特定的浏览器和服务器对URL进行了限制。IE为2083字节（2KB+35）；Firefox为65535字节；Safari为80000字节；Opera为190000字节；Chrome为8182字节；Apache能够接收url最大长度为8192字节；IIS为16384字节。


- POST理论上没有长度的限制，HTTP协议没有对POST进行限制，起限制的是服务器的处理程序的处理能力。
Tomcat默认为2M；IIS默认为4M，也可以通过设置，让POST内容无限大，但要注意服务器和内存能力。


```javascript
var xhr = new XMLHttpRequest();
xhr.open("post", url, true);
// 如果是post方式发送请求，需要设置请求头才能正确把数据传递给后端页面。
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
// 客户端向服务器端发送数据，服务器php用$_POST["参数名"]接收。
xhr.send("数据名1=数据值&数据名2=数据值")
// 客户端接收服务器的响应内容
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200){
		alert(xhr.responseText);
	}
}
```

###  Ajax的异步问题

####  同步和异步的概念

同步: 按步骤 按顺序进行

异步: 同时执行,也叫并发; 

```
举例说明: 假如
吃饭(10分钟)   洗衣服(30分钟)   玩游戏(60分钟)

同步(按步骤 按顺序进行)
先吃饭 ->  洗衣服 -> 玩游戏   (100)  // 单线程

异步(同时执行,也叫并发)
吃饭 
洗衣服    =>   60   // 多线程
玩游戏
```

但是很尴尬 JS是单线程的.

**为什么JavaScript是单线程？**

JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么JavaScript不能有多个线程呢？这样能提高效率啊。

JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？



**Javascript 如何解决异步问题?**

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。

JavaScript语言的设计者也意识到这个问题，于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入”任务队列”（task queue）的任务，只有”任务队列”通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行;

具体来说，异步执行的运行机制如下。

```
（1）所有同步任务都在主线程(同步代码)上执行，形成一个执行栈（execution context stack）。
（2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
（3）一旦"执行栈"中的所有同步任务执行完毕(主线程代码执行完毕)，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈(主线程)，开始执行。
（4）主线程不断重复上面的第三步
```

#### ajax封装  

```
    // 模拟jquery的$ajax的封装
      $.ajax({
        type, // get/post
        url,
        data,  //  "user=a123123"  {user:"a123123"}
        async,  //  true/false
        dataType,  // text(默认)/json
        success: function (res) { }  // 成功时的回调函数
    })
```



```
    // ajax_get_post
    // url, data, async = true, dataType = "text", success
    function ajax(options) {  //此处只接受对象参数
        // let url = options.url;
        // let data = options.data;

        let { type = "get", url, data, async = true, dataType = "text", success } = options;

        var req = new XMLHttpRequest();
        // req.open("get", "../php/isExistUser.php?user=a123123", true);
        // 如果data 是字符串  就直接拼接  
        //          是对象    遍历对象  转化为字符串


        if (Object.prototype.toString.call(data) == "[object Object]") {   //是对象    遍历对象  转化为字符串
            var str = "";
            for (var key in data) {
                console.log(key, data[key]);
                str += key + "=" + data[key] + "&";
            }
            console.log(str);  //"user=a123123&pwd=123123&"   在讲多余的 & 去掉
            data = str.substring(0, str.length - 1);
        }
        if (type == "get") {
            req.open("get", url + "?" + data, async)
            req.send();
        } else {
            req.open("post", url, async);
            req.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            req.send(data);
        }
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                // console.log(req.responseText);
                var result = req.responseText;  // 请求的数据（普通文本/JSON类型的字符串）

                if (dataType.toLowerCase() == "json") {
                    result = JSON.parse(result); // JSON类型的字符串
                }

                // console.log(result);
                if (success) {
                    success(result);  //  result   函数success调用时的实际参数
                }

            }
        }
    }
```

