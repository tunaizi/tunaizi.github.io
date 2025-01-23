

# 什么是Node

简单的说 Node.js 就是运行在服务端的 JavaScript。

Node.js 是一个开源与跨平台的 JavaScript 运行时环境。 它是一个可用于几乎任何项目的流行工具！

Node.js 在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核）,执行Javascript的速度非常快，性能非常好。 这使 Node.js 表现得非常出色。

Node.js 应用程序运行于单个进程中，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原生功能（用以防止 JavaScript 代码被阻塞），并且 Node.js 中的库通常是使用非阻塞的范式编写的（从而使阻塞行为成为例外而不是规范）。

## 大量的库

npm 的简单结构有助于 Node.js 生态系统的激增，现在 npm 仓库托管了超过 1,000,000 个可以自由使用的开源库包。

```
node中的库(包/模块)  包含三种

1. node  自带的模块  (crypto,http,path, queryString,fs)
2. 引入第三方模块     (别人开源的模块  通过npm包管理器  jquery , sass)
3. 用户自定义模块     (node也允许用户自定义模块)  
```

# NPM 使用介绍

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的第三方包到本地使用。

- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。

- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

  在 2017 年 1 月时，npm 仓库中就已有超过 350000 个软件包，这使其成为世界上最大的单一语言代码仓库，并且可以确定几乎有可用于一切的软件包。

这里主讲如何npm引入第三方模块

安装语法  npm/cnpm install 包名 安装的方式

    1.  全局安装 (只需安装一次  在电脑的任何位置都可以使用)     
        npm install 包名 --global     (install => i,  --global => -g)  
    2.  开发依赖(只在开发过程中使用  项目真正运行时 不需要 eg: sass) 
        npm install 包名 --save-dev    (--save-dev   =>  -D)
     
    3.  生产依赖(运行依赖  在开发环境和生产环境都不可少的  eg: jquery )
        npm install 包名 --save        (--save   =>  -S)
    
    --save-dev 安装并添加条目到 package.json 文件的 devDependencies。 只用于开发环境，不用于生产环境
    --save 安装并添加条目到 package.json 文件的 dependencies。  是需要发布到生产环境的

 node的初始化项目

    1. npm init   初始化 (生成一个 package.json 文件  )
​    2. 使用node 的 npm(包管理器) 安装  gulp  工具  
​    	(node 的服务器在国外  通过npm 下载各种包的时候  需要翻墙  慢...)
​       解决 翻墙问题(不需要)  =>  淘宝在国内搭建服务器  同步国外的包(淘宝镜像)
​       a. 安装 nrm  切换下载资源的路径  
​        npm install nrm -g  
​        nrm ls    列举出所有的资源路径
​        nrm test    列举出所有的资源路径
​        nrm use taobao  切换源
​    	b. 使用淘宝 定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
​    	npm install -g cnpm --registry=https://registry.npm.taobao.org




 gulp 的使用

目前开发项目比较主流的做法是，使用gulp或webpack这种前端工程化工具来管理我们的项目。

具体指将项目分为两个环境，分别是开发环境和生产环境，我们只关注开发环境。

> 我们在开发环境中编写代码，利用gulp自动对开发环境中的文件代码进行整合，将整合后的代码保存到生产环境下，而这个生产环境，就是最终挂到服务器的线上网站。

> 使用gulp时，需要用npm下载相应的模块，所以需要安装nodejs环境。

```
1. 全局安装 gulp 
   npm install gulp --global

2. 本地安装 gulp  (开发环境安装)
   npm install gulp --save-dev   (开发依赖)
```



## Node的自带模块

HTTP/HTTPS

我们知道传统的HTPP服务器会由Aphche、Nginx之类的软件来担任，但是nodejs并不需要，nodejs提供了http模块，自身就可以用来构建服务器

```js
var http = require("http");
http.createServer((req, res) => {
    res.setDefaultEncoding = "utf-8";
    res.writeHeader(200, {
        "content-Type": "text/html;charset=utf-8"
    });
    res.write("<h2>今天天气不错</h2>");
    res.end();
}).listen(3000, function () {
    console.log("Link Start!");
});
```

http模块提供了两个函数http.request和http.get，功能是作为客户端向http服务器发起请求。

```js

let https = require("https");
let gunzip = require('zlib').createGunzip();  // 如果线上代码有压缩时需要用到这个第三方模块
let cheerio = require("cheerio");
let fs = require("fs");

let req = https.get("https://search.jd.com/Search?keyword=%E8%8B%B9%E6%9E%9C&enc=utf-8&suggest=1.def.0.V15--38s0&wq=ping&pvid=6fe0c15b60514f4a8f2b1f5f87b9908d", (res) => {
    let html = "";
    res.on("data", (chunk) => {
        html += chunk;
    });
    res.on("end", function () {
        // console.log(html);
        let $ = cheerio.load(html);

        var list = $(".gl-item").slice(0, 5).map(function () {
            var goods = {
                goodsId: $(this).attr("data-sku"),
                goodsName: $(this).find(".p-name").find("em").text(),
                goodsImg: $(this).find("img").attr("src"),
                goodsPrice: $(this).find(".p-price").find("i").text(),
            }
            return goods;
        }).get();
        console.log(list);
        fs.writeFile("./data.json", JSON.stringify(list), { encoding: "utf-8", flag: "w" }, function (err) {
            if (!err) {
                console.log("写入成功");
            }
        })
    })

    // var body = "";
    // res.pipe(gunzip);
    // gunzip.on('data', function (data) {
    //     body += data;
    // });

    // gunzip.on('end', function () {
    //     // console.log(body);
    //     var $ = cheerio.load(body);
    //     var goods = {
    //         goodsId: goodsId,
    //         goodsPrice: goodsPrice,
    //         goodsName: $(".sku-name").text().trim(),
    //         goodsPrice: $(".p-price .price").text(),
    //         goodsPicList: $(".lh li img").map((index, item) => $(item).prop("src")).get().join()

    //     }
    //     console.log(goods);

    // });

})




```

### queryString

querystring.stringify(obj, separator, eq, options)

stringify这个方法是将一个对象序列化成一个字符串， 与querystring.parse相对。

参数： 

​		obj指需要序列化的对象

​		separator（ 可省） 用于连接键值对的字符或字符串， 默认值为 "&";

​		eq（ 可省） 用于连接键和值的字符或字符串， 默认值为 "=";

```js
let qs = require("querystring");
console.log(qs);

var obj = {
    name: "怀霜凌志",
    age: 18
}
var str = qs.stringify(obj, "&&", null);
console.log(str);  // username=怀霜凌志&&age=18
```

2  querystring.parse(str,separator,eq,options)

parse这个方法是将一个字符串反序列化为一个对象。

参数：

​		str指需要反序列化的字符串;

​		separator（可省）指用于分割str这个字符串的字符或字符串，默认值为"&";

​		eq（可省）指用于划分键和值的字符或字符串，默认值为"=";

```js
let qs = require("querystring");
var str = "username=怀霜凌志&&age=18";
var result = qs.parse(str, "&&", null);
console.log(result);
```

3  querystring.escape(str)    escape可使传入的字符串进行编码

4 querystring.unescape(str)    unescape方法可将含有 % 的字符串进行解码

```js
let qs = require("querystring");
var str = "Today is 星期三";
var result = qs.escape(str);
console.log(result);

var newStr = qs.unescape(result);
console.log(newStr);

```

```js
fs
 .readFile(url , encode , callback) 读取文件内容
  url 为需要读取的文件路径
  ecnode 需要采用哪种字符编码集来进行内容读取
  callback 当文件读取完毕之后的回调函数   
          该回调函数会接收两个形参   error,data
          第一个形参为读取失败时的错误信息
          第二个形参为读取成功时的文本内容
          
  fs.readFile("Test/1.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  })
       
 .fs.writeFile(filename,data,[options],callback)
 filename  String 文件名
 data      String|buffer  //需要写入的数据
 option    Object
 		encoding  String |null   default='utf-8'
 		flag      String         default='w' //1、默认"w"(直接写入数据，会清空原有数据)  2、{ 'flag': 'a' } 可重复写入数据
        flag属性
            w ：写入文件，文件不存在则创建，存在则清空；
            wx ：和w一样，但是文件存在时会报错；
            w+ ：读取并写入文件，文件不存在则创建，存在则清空；
            wx+ ：和w+一样，但是文件存在时会报错；
            a ：以追加方式写入文件，文件不存在则创建；
            ax ：和a一样，但是文件存在时会报错；
            a+ ：读取并追加写入文件，文件不存在则创建；
            ax+ ：和a+一样，但是文件存在时会报错。
  callback 动作执行完后的回调函数
  fs.writeFile("./Test/1.json", '{"data":"i`m test"}', {
        encoding: "utf-8",
        flag: "w",
    }, (err) => {
        if (err) throw err;
        console.log("ok");
    })

  
 .appendFile(url,content,option,callback) 向已存在的文件的最后添加新的内容
  url为需要追加内容的文件所在路径
  content 为需要追加到文件的内容
 
 .mkdir(url , callback)  创建目录    url为需要创建的目录所在路径   callback 创建动作执行完成之后的回调函数
 fs.readdir("./", (err, data) => {
    if (err) throw err;
    console.log(data);
})

 
 .readdir(url,callback)  读取目录
    url 为需要被读取的目录路径
    callback 为读取完毕后执行的回调函数
            第一个形参 error为读取失败时的记录信息
            第二个形参 list 为读取成功时文件名/目录名集合列表

 .exists(url,callback)  判断文件或文件夹是否存在
    url 为需要被读取的目录路径
    callback 为读取完毕后执行的回调函数
        第一个形参 result为文件是否存在的Bool值 true存在，false 不存在
        
 fs.exists("./Test", (result) => {
    console.log(result);
})
```

```
.rename(oldUrl , newUrl , callback) 修改文件名/目录名      (注:当新的路径和旧的路径不相同时,则会移动文件;)
    oldUrl 为需要被修改的文件路径(包含文件名)
    newUrl 为被修改好后的文件(包含文件名)
    callback 当文件重命名操作执行完毕后的回调函数
```

```
.unlink(url , callback) 删除文件
    url为需要被删除的文件路径
    callback 为操作执行完毕后的回调函数

.rmdir(url , callback)  删除目录  (目录必须为空才能被删除)
    url为需要被删除的目录路径
    callback 为操作执行完后的回调函数

.stat(url , callback) 获取文件/目录的相关信息
    url  为需要获取信息的文件/目录 的路径
    callback  为读取完毕后的回调函数
        第一个形参error为读取失败时的错误信息
        第二个形参info  为读取成功时的相关信息对象
            该info对象下有两个方法    
                isFile() 方法用来判断是否为文件
                isDirectory() 方法用来判断是否为目录
                isBlockDevice()	如果是块设备返回 true，否则返回 false。
                isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
                isSymbolicLink()	如果是软链接返回 true，否则返回 false。
                isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
                isSocket()	如果是 Socket 返回 true，否则返回 false。
                
  fs.stat("./", (err, info) => {
    if (err) throw err;
    console.log(info.isDirectory());
})
```

