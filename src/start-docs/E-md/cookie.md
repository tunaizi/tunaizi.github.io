
# cookie

## 什么是Cookie

Cookie又叫会话跟踪技术，实际上就是客户端硬盘上的一个文本文件，该文件用来存储一些数据。

cookie 是浏览器 为了 标识用户身份  或者 长时间存储一些信息  而保存在用户本地的数据(其本质是 为了提升用户体验  而存储来用户本地的数据)

**Cookie和变量一样，是用来做数据存储的**

与变量不同之处在于，cookie能够有前提性的，实现跨页面读写数据，和长时间保存数据。

前提性：
- 必须是同一个浏览器创建的cookie 
- 必须是同一个网站创建的cookie
- 通过设置path属性所具备的读写权限
- 通过设置expires属性所具备的有效时间权限  

特征:
- cookie 的存取都依赖于 document.cookie   (类型  字符串类型)
- cookie 存储的时候是一条一条的的存的
- cookie 可以设置存储路径  和  过期时间(默认浏览器关闭 过期)


## 如何操作Cookie（重点）

**Cookie需要依赖服务器环境，所以应先搭建服务器环境。**

1. 创建cookie的语法：

  a. cookie 的存取都依赖于 document.cookie 

  b. cookie是以键值对(key=value)形式存在的字符串

  c. cookie 存储的时候是一条一条的的存的 (每条数据之前用"; " 分隔)

```
document.cookie = "名称=值";
```

2.获取cookie的语法：

  a. cookie 的获取也依赖于 document.cookie

  b. 获取cookie数据时需要进行数据分割(字符串拆分)

```
document.cookie;
```

3. cookie的修改

a.  cookie修改 是根据键名(key) 修改对应的值(重新根据键名赋值即可)

```
document.cookie = "user=hello cookie";
```

4 . cookie的删除和过期时间有关

  a. 默认情况下 如果不设置过期时间 浏览器关闭后 cookie过期

  b. 如果设置了过期时间 等到时间到期之后 cookie就消失了

  c. 删除cookie其实本质就是 将过期时间修改为 过去的时间

```
 	var date = new Date();
    date.setDate(date.getDate() - 1);// 一天前过期
    document.cookie = "user=helloCookie;expires=" + date.toUTCString();
    document.cookie = "pwd=123123;expires=" + date.toUTCString()
```



## Cookie的常用属性（重点）

### 过期时间：expires

没有设置expires属性，那么表示该cookie的有效期为会话，会话指浏览器打开到关闭。

设置了expires属性，那么表示该cookie的有效期为一个具体的时间，过期cookie文件删除。

示例：	

```
var d = new Date();
d.setDate( d.getDate()+1 );
document.cookie = "username=zhangsan; expires="+d.toUTCString(); 	
```

解读：

创建了一个名称叫做username的cookie，它所存储的内容为zhangsan，它的过期时间是创建这个cookie时的1天后。
	
备注：

通过修改相同命名的cookie的值或过期时间，可以实现该cookie的修改和删除。


### 路径：path

cookie在读取时，是存在访问权限的，即只能够访问path路径下的cookie

例如，在网站根目录创建的cookie，网站任何位置都能够访问到这个cookie

在 /a/ 目录下创建的cookie，只能在 /a/ 目录下访问这个cookie。

示例：

```
document.cookie = "username=zhangsan; path=/";
```

解读：

创建了一个名称叫做username的cookie，它所存储的内容为zhangsan，该cookie在当前网站下任何位置都能读写。

备注：

path和domain属性都是设置该cookie的归属，即cookie作用域，因同源策略的限制，只能够获取同源同作用域下的cookie。


## 使用Cookie时需要注意

- 有些浏览器在使用中文时，会出现乱码。

> 在设置cookie时，通过encodeURIComponent 编码，在获取cookie时，通过decodeURIComponent 解码

- cookie 文件存放在客户端

> cookie 即可以用客户端 javascript 读写，也可以用服务器端 php、jsp等读写。

- 每个网站只能访问自己网站的cookie

> 即百度创建的cookie，新浪是不能够访问的。

- 每个浏览器只能访问自己浏览器的cookie

> 即火狐创建的cookie，谷歌是不能够访问的。

- cookie 的内容是纯文本，即只能保存字符串数据。

- cookie 依赖于服务器环境 ，即设置和获取cookie时，要用 http 访问网页。火狐除外。

## 浏览器Cookie数量及大小限制

### 浏览器允许每个域名所包含的cookie数

- Microsoft指出InternetExplorer8增加cookie限制为每个域名50个，但实际上IE6就已经最多允许每个域名50个cookie。

- Firefox每个域名cookie限制为50个。firefox 3.6可以存150个cookie。

- Opera每个域名cookie限制为30个。

- Safari / WebKit没有cookie限制。但是如果cookie很多，则会使header大小超过服务器的处理的限制，会导致错误发生。


### cookie的缺点
cookie的缺点主要集中于安全性和隐私保护
1.  cookie可能被禁用
2.  cookie不能跨浏览器 / 不能跨网站
3.  cookie可能被删除
4.  cookie安全性不够高
5.  在浏览器向服务器发送请求时  cookie会随着请求(请求可以携带一定的数据)一同发送给服务器, 会影响请求和响应的速率  
6.  cookie 存储大小之后 4k ,  cookie的存储条数 一般为50条



# webStorage(拓展)
## 什么是WebStorage?
WebStorage的目的是克服由cookie所带来的一些限制，当数据需要被严格控制在客户端时，不需要持续的将数据发回服务器。

## WebStorage两个主要目标：

1.提供一种在cookie之外存储会话数据的路径  (一种新的在用户本地 存储数据的方式)
2.提供一种存储大量可以跨会话存在的数据的机制  (webStorage也可以跨页面访问 )
HTML5的WebStorage提供了两种API：localStorage（本地存储）和sessionStorage（会话存储）

### localStorage和sessionStorage的区别
1.生命周期

```
localStorage的生命周期是永久的，关闭页面或浏览器之后localStorage中的数据也不会消失。
localStorage除非主动删除数据，否则数据永远不会消失。
sessionStorage的生命周期是仅在当前会话下有效。
sessionStorage引入了一个“浏览器窗口”的概念，sessionStorage是在同源的窗口中始终存在的数据。
只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源(同一个服务器目录)另一个页面，数据依然存在。
但是sessionStorage在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage也是不一样的。
```
2.存储大小

localStorage和sessionStorage的存储数据大小一般都是：5MB

3.存储位置

localStorage和sessionStorage都保存在客户端，不与服务器进行交互通信

4.存储内容类型

localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理

5.获取方式

localStorage：window.localStorage
sessionStorage：window.sessionStorage

6.应用场景

localStorage：常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据
sessionStorage：敏感账号一次性登录

### WebStorage的优点(对比cookie)
（1）存储空间更大：cookie为4KB，而WebStorage是5MB

（2）节省网络流量：WebStorage不会传送到服务器，存储在本地的数据可以直接获取，也不会像cookie一样每次请求都会传送到服务器，所以减少了客户端和服务端的交互，节省了网络流量

（3）对于那种只需要在用户浏览一组页面期间保存而关闭浏览器后就可以丢弃的数据，sessionStorage会非常方便

（4）快速显示：有的数据存储在WebStorage上再加上浏览器本身的缓存。获取数据时可以从本地获取会比从服务器端获取快得多，所以速度更快

（5）安全性：WebStorage不会随着HTTP header发送到服务器端，所以安全性相对于cookie来说会比较高一些，不会担心截获，但是仍然存在伪造问题

（6）WebStorage提供了一些方法，数据操作比cookie方便
```
    length   保存数据的数量
	setItem(key, value) —— 保存数据，以键值对的方式存储信息
	getItem(key) —— 获取数据，将键值传入，即可获取到对应的value值
	removeItem(key) —— 删除单个数据，根据键值移除对应的信息
	clear() —— 删除所有的数据
	key(index) —— 获取某个索引的key
```

###  cookie和localStorage sessionStorage

cookie localStorage sessionStorage的区别
|对比|cookie|localstorage|sessionStorage|
|---|:-:|:-:|---|
|获取方式|document.cookie|window.localStorage|window.sessionStorage|
|数据类型|cookie的本质是字符串|对象|对象|
|存储大小|4K|5M|5M|
|存储位置|cookie默认存在当前文件所在的目录,也可以指定目录|服务器的根目录(项目的根目录)|服务器的根目录(项目的根目录)|
|生命周期|cookie默认浏览器关闭时就过期,设置过期时间之后,等到指定日期之后过期|localStorage除非主动删除数据，否则数据永远不会消失|session 引入了一个“浏览器窗口”的概念,只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源(同一个服务器目录下)另一个页面，数据依然存在|
|服务器请求|cookie会随着请求传递到服务器,优点:携带数据 缺点:无用数据太多的话影响请求和响应的速度|只存在客户端,不与服务器(后端)进行交互通信|只存在客户端,不与服务器(后端)进行交互通信|
|应用场景|1.标识用户身份                               2.长时间存储一些数据|常用于长期登录（+判断用户是否已登录token），适合长期保存在本地的数据|敏感账号一次性登录|