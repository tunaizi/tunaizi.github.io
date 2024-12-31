# 前端基础知识体系

## JavaScript

- 运行时

  - 数据结构
    - 类型 Undefined Null String Number Array Object Symbol
      1. 为什么有的编程规范要求用 void 0 代替 undefined? 因为 undefined 在 javascript 中是变量，不是关键词，所以避免被更改,建议使用 void 运算来把任意一个表达式变成 undefined 值
      2. 字符串是否有最大长度？ 表示文本数据，最长长度为 2\*\*53-1,但实际 string 表示的是字符串 UTF16 的编码，最大长度受编码长度影响
    - 实例
  - 执行过程

    - 事件循环

      - 宿主发起的任务称为宏观任务，把 JS 引擎发的任务称为微观任务
      - 实现一个 sleep

        ```js
        function sleep(duration) {
          return new Promise((resolve, reject) => {
            setTimeout(resolve, duration);
          });
        }

        sleep(5000).then(() => console.log('hhh'));
        ```

      - 实现一个红绿灯

        ```js
        function sleep(duration) {
          return new Promise(resolve => {
            setTimeout(resolve, duration);
          });
        }

        async function changeColor(duration, color) {
          document.getElementById('traffic').style.background = color;
          await sleep(duration);
        }

        async function main() {
          while (true) {
            await changeColor(3000, 'green');
            await changeColor(1000, 'yellow');
            await changeColor(2000, 'red');
          }
        }

        main();
        ```

    - 微任务执行
    - 函数执行
      - 闭包、作用域、执行上下文、this 值
        - 闭包是绑定了执行环境的函数（注意，不能理解为作用域或者上下文，本质就是一个函数，与普通函数的区别就在于携带了执行的环境）
        - 执行上下文是执行的基础设施，js 标准中，把一段代码（包括函数），执行所需要的所有信息定义为“执行上下文”
        - this 是执行上下文很重要的一部分，普通函数的 this 值由“调用它所使用的引用”决定。其中奥秘就在于：我们获取函数的表达式，它实际上返回的并非函数本身，而是一个 Reference 类型。
        - call apply bind
        - 函数种类：
          - 普通函数，使用 function 定义
          - 箭头函数，使用=>
          - 方法，在 class 中定义的函数
          - 生成器函数 用 function\*定义的函数
          - 类，用 class 定义的类
          - 异步函数，普通函数、箭头函数、生成器函数加上 async
    - 语句级的执行
      - 每个语句执行都会返回相应的 completion record

- 文法
  - 词法
    - 空白字符 whitespace
    - 换行符 lineTerminator
    - 注释 comment
    - 词 Token
      - indentifierName 标识符，关键字就在其内
        - 关键字: await break case catch class const continue debugger default delete do else export extends finally for function if import instance of new return super switch this throw try typeof var void while with yield (enum, null, true, false)
      - Punctuator 符号，运算符和大括号等符号
      - NumericLiteral 数字直接量
        - 12.toString() Invalid or unexpectred token
        - 原因是数字直接量可以支持十进制数，而十进制可以带小数，并且小数前后都可以省略，但是不能同时省略。例如.12,12.,12.01 都是可以的。所以当 12.toString()时，会把 12.当做一个被省略的数字，看成单独一个整体，就缺少了函数调用“.”，要想成功调用，加入空格即可“12 .toString()或者 12..toString()”
      - StringLIteral 字符串直接量
      - RegularExpressionLiteral 正则表达式直接量
      - Template 字符串模板
  - 语法
    - 到底要不要写分号： 尤雨溪曾经在知乎说：真正会导致上下行解析出问题的 token 有 5 个：括号，方括号，正则开头的斜杠，加号，减号。我还从没见过实际代码中用正则、加号、减号作为行首的情况，所以总结下来就是一句话：一行开头是括号或者方括号的时候加上分号就可以了，其他时候全部不需要。哦当然再加个反引号。
    - js 程序有两种源文件：脚本和模块。模块是在 es6 引入的机制。脚本具有主动性的 JavaScript 代码段，是控制宿主完成一定任务的代码；而模块是被动性的 JavaScript 代码段，是等待被调用的库。
    - script 标签如果不加 type=“module”，默认认为我们加载的文件是脚本而非模块，如果我们在脚本中写了 export，当然会抛错。
    - js 语法的全局机制： 预处理（先声明，后执行）和指令序言(严格模式)
  - Bitmask 技术 按位或运算常常被用在一种叫做 Bitmask 的技术上
- 语义

## HTML 和 CSS

- 从 HTML 5 开始，我们有了 section 标签，这个标签可不仅仅是一个“有语义的 div”，它会改变 h1-h6 的语义。section 的嵌套会使得其中的 h1-h6 下降一级

## 浏览器实现原理与 API

- 实现原理，浏览器会尽量流式处理整个过程
  - 解析
    - 把一个 URL 变成屏幕上显示的网页过程
      - DNS 解析域名，通过 ip 主机地址及 HTTP 或者 HTTPS 协议访问服务器请求页面
      - 将请求回来的 HTML 代码解析成 DOM 树
      - 计算 DOM 树的 CSS 属性
      - 根据 css 属性对元素逐个进行渲染，得到内存中的位图
      - 一个可选的步骤是对位图进行合并，可以极大提高后续绘制速度
      - 将合成后的位图绘制到界面上
    - HTTP1.1 协议（rfc 规定的协议）
      - 基于 TCP 协议
      - 请求分为：
        - 请求行（method,path,version) eg: POST /chapther/user.html HTTP/1.1
        - 请求头(accept,accept-encoding, accept-language,cache-control, connection,host,**if-modified-since**,**if-none-match**, user-agent, cookie)
        - 请求体,请求参数
          - application/json
          - application/x-www-form-urlencoded 表单数据默认行为
          - multipart/form-data 上传文件常用
          - text/html
      - 响应与请求类似
        - 响应头（cache-control,connection, content-encoding, content-length, content-type, date, **etag**, expires, keep-alive, **last-modified**, server, set-cookie, via(服务端请求链路)）
      - HTTP status code
        - 1xx 临时回应，表示客户端继续，被浏览器 http 库直接处理
        - 2xx 请求成功系列 例如：200
        - 3xx 请求目标有变化，希望客户端进一步处理 301&302 304(**重点**)
        - 4xx 客户端请求错误 403 无权限 404 页面不存在
        - 5xx 服务端请求错误 500 服务端错误 503 服务端暂时性错误，可以一会再试
    - HTTPS 协议
      - 使用加密通道来传输 http 的内容。首先与服务端建立 TLS 加密通道。
      - TLS 构建于 TCP 协议之上
    - HTTP2.0 （1.1 的升级）
      - 支持服务端推送， 可以在收到第一个请求到服务端时，提前将一部分内容推送给客户端放入缓存
      - 支持 TCP 连接复用， 可以把使用同一个 tcp 来传输多个 http 请求，避免 tcp 连接建立时的三次握手开销
  - 构建 DOM 树
    - 字符流 -> 状态机 -> 词 token -> 栈 -> DOM 树
  - 计算 CSS
    - 在构建 dom 的过程就同步将 css 属性计算出来，因为浏览器是流式处理
    - 通过选择器（匹配器）给节点附带 css 属性
  - 渲染、合并和绘制
    - 渲染：把模型变成位图的过程。位图是内存里简历的一张二维表格，把一张图片的每个像素对应的颜色保存进去。位图信息也是 DOM 树中占据浏览器内存最多的信息，我们在做内存优化时，主要考虑的就是这部分。
    - 浏览器渲染过程，就是将每个元素对应的盒变成位图。一个元素可能对应多个盒。每一个盒对应一张位图。
    - 渲染总体分为图形和文字。
    - 利用 will-change 可以提高合成策略效果
    - 将位图最终绘制到屏幕上的过程就是绘制。脏矩形算法，将屏幕均匀的分成若干矩形区域。
- API
  - DOM
    - 节点（Node）
      - 分类：
        - Element eg:<tagname></tagname>
          - HTMLElement
          - SVGElement
        - Document
        - CharacterData 字符数据
          - Text eg:text
          - Comment eg:<!-- comments -->
          - ProcessingInstruction
        - DocumentFragment
        - DocumentType eg:<!Doctype html>
      - 元素对应 HTML 中的标签，它既有子节点，又有属性
      - getElementById、getElementsByName、getElementsByTagName、getElementsByClassName，这几个 API 的性能高于 querySelector
      - getElementsByName、getElementsByTagName、getElementsByClassName 获取的集合并非数组，而是一个能够动态更新的集合
    - **事件** 触发和监听相关的 API
    - Range（操作文字范围）
    - 遍历
      - DOM API 提供了 NodeIterator 和 TreeWalker 来遍历树，不太建议使用这两个 API
  - CSSOM
    - cssom 是 css 的对象模型。包含描述样式表和规则，和跟元素视图相关的 view 部分
    - 滚动 API,分为可视区域内的滚动和内部元素的滚动
      - 视口滚动 API
        - scrollX,scrollY,scroll(x, y), scrollBy(x, y)
        - 监听滚动 document.addEventListener('scroll', function(event){})
      - 元素滚动 API
        - scrollTop,scrollLeft,scrollWidth, scrollHeight,scroll(x,y), scrollBy(x,y),scrollIntoView(arg)
        - element.addEventListener('scroll',function(event){})
      - 全局尺寸信息
        - window.innerHeight,window.outerWidth,window.screen.width
        - window.devicePixelRatio: 表示物理像素和 css 像素单位的倍率关系。Retina 屏这个值是 2，还有更高的 3 倍 Android 屏
    - 获取元素宽高，实际是获取元素所产生的盒子的宽高。只有盒有宽高。getClientRects();getBoundingClientRect();
    - 获取相对坐标小技巧：
      - var offsetX = document.documentElement.getBoundClientRect().x - element.getBoundClientRext().x
  - 事件
    - 捕获 (从外到内),在冒泡前发生
      - 可以理解为是计算机处理事件的逻辑
    - 冒泡 (从内到外)
      - 可以理解为是人类处理事件的逻辑
    - addEventListener 三个参数
      - 事件名称
      - 事件处理函数，也可以是具有 handleEvent 方法的对象
      - 捕获还是冒泡，参数也不一定是 boolean 值，默认 false,冒泡。可以是对象，参数为：
        - once 只执行一次
        - passive 承诺此事件监听不会调用 preventDefault,这有助于性能
        - useCapture 是否捕获，false 即为冒泡
      - 一般建议使用冒泡，不传递第三个参数。除非是组件或库的开发使用者，就需要关心冒泡和捕获了。
      - 自定义事件,但是不能用于普通对象，只能用户 dom 元素上
        - var evt = new Event('look',{'bubbles': true, 'cancelable': false }); document.dispatchEvent(evt)
  - API 总集合

## 前端工程实践

- 性能
  - 现状评估和建立指标
    - 页面加载性能
    - 动画与操作性能
    - 内存、电量消耗
  - 指标：秒开率。即一秒之内打开的用户量的百分比
  - 了解浏览器工作的几件事情
    - 从域名到 IP 地址，需要用 DNS 协议查询；
    - HTTP 协议是用 TCP 传输的，所以会有 TCP 建立连接过程；
    - 如果使用 HTTPS，还有有 HTTPS 交换证书；
    - 每个网页还有图片等请求。
  - 技术方案
    - 缓存，客户端控制强缓存策略
    - 降低请求成本
      - HTTP DNS：有客户端控制
      - TCP/TLS 连接服用，由服务端升级到 http2
    - 减少请求数量
      - js,css 打包到 html
      - 用 js 控制图片异步加载和懒加载
      - 小型图片用 uri
    - 减少传输体积
      - 尽量使用 svg 等代替图片
      - 根据网络和机型情况控制图片清晰度
      - 对低清晰度的图片使用锐化来提升体验
      - 设计上避免大型背景图
  - 执行
    - 纯管理
    - 制度化
    - 自动化
  - 结果评估和监控
    - 线上监控分为数据采集和数据表现
- 工具链（不太推荐把开发效率和开发体验过度数据化，开发效率提升 n 倍永远是一种臆想或者主观论断）
  - 现状与指标
  - 方案
  - 实施
  - 结果和监控
- 持续集成（前端）
  - 预发布环境
  - 规则校验
    - 页面结构扫描 使用无头浏览器（如 phantomjs)
    - 运行时数据采集 利用 Performance API 来采集性能数据 利用 window.onerror 来采集 js 错误
    - 代码扫描(jsHint 等)
- 搭建系统
  - 运营的简单高频的需求 cms
- 构架与基础库
  - 组件化。将 UI 上的各种元素分解成组件，规定组件的标准，实现组件运行的环境就是组件化。
    - web component (理论上是未来选项，但实际上标准还不够完善)
    - Vue
    - React
    - Angular
    - 自研
  - 兼容性和适配性
  - 单页应用
  - 扩展前端边界
  - 前端技术未来方向
    - 图形学 webgl 等
    - 包管理 npm
    - AI 智能切图 tensorFlow
    - pwa 进一步发展

## 排除元素的 Number 和 parseInt，用 JS 代码实现 String 转 Number？

```js
function strToNum(string) {
  let chars = string.split('').map(c => c.charCodeAt(0) - '0'.charCodeAt(0));
  let n = 0;
  for (var char of chars) {
    n *= 10;
    n += char;
  }
  return n;
}

strToNum('1002');
```
