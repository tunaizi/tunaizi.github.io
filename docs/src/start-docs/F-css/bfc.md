# CSS 常见问题

1. BFC 是什么，能解决什么问题

   - BFC(Block Formatting Context)块级格式化上下文
   - 在 BFC 中，每个元素左外边与包含块的左边相接触，即时存在浮动也是如此。除非这个元素也创建了新的 BFC。可以理解为 BFC 有自己的结界。
   - BFC 的结界特性用途： 去 margin 重叠或清除 float 带来的影响，也就是说触发 BFC 的时候，就不需要清除浮动操作。BFC 最重要的用途是实现更健壮、更智能的自适应布局。
   - 触发 BFC 的常见情况：
     - //html 根元素
     - float 的值不为 none;
     - overflow 的值为 auto,scroll 或 hidden
     - display 的值为 table-cell,table-caption 或 inline-block;
     - position 的值不为 relative 和 static

2. 垂直居中
   ```css
   .parent {
     display: flex;
   }
   .child {
     align-self: center;
   }
   ```
3. 清除浮动

   ```css
   .clearfix:before,
   .clearfix:after {
     content: ' ';
     /* 1 */
     display: table;
     /* 2 */
   }

   .clearfix:after {
     clear: both;
   }
   .clearfix {
     zoom: 1;
   }
   ```

4. css 写一个环状进度条

   ```css
   @keyframes loading {
     0% {
       transform: rotate(0deg);
     }
     100% {
       transform: rotate(360deg);
     }
   }
   .rounded-progress {
     width: 100px;
     height: 100px;
     border: 8px solid gray;
     border-top-color: red;
     border-radius: 100%;
     animation: loading 1s linear infinite;
   }
   ```

5. 获取元素可视区域

   ```js
   objRect = document
     .getElementsByTagName('body')[0]
     .getBoundingClientRect()
   objRect.left, objRect.top
   ```

6. css 写一个三角形

   ```css
   .shanjiao {
     width: 0;
     height: 0;
     border-width: 10px;
     border-top-color: red;
     border-bottom-color: transparent;
     border-left-color: transparent;
     border-right-color: transparent;
   }
   ```

7. position 为 relative 的元素 可以使用 top、left 进行定位吗？

   - 可以使用
   - position:relative 的特性是相对自身，无侵入。
   - 相对定位元素 left/top/right/bottom 的百分比值是相对于包含块计算，而不是自身。
   - relative 最小化影响原则

8. 盒模型

   - 标准盒模型： width=content box-sizing: content-box
   - IE 盒模型： width=content+padding+border box-sizing: border-box

9. 文本单行和多行溢出省略

   - 单行
     ```css
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
     ```
   - 多行
     ```css
     display: -webkit-box;
     overflow: hidden;
     text-overflow: ellipsis;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     ```

## 扩展

- BFC（Block formatting contexts）：块级格式上下文
  页面上的一个隔离的渲染区域，那么他是如何产生的呢？可以触发 BFC 的元素有 float、position、overflow、display：table-cell/ inline-block/table-caption ；BFC 有什么作用呢？比如说实现多栏布局’

- IFC（Inline formatting contexts）：内联格式上下文
  IFC 的 line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的 padding/margin 影响)IFC 中的 line box 一般左右都贴紧整个 IFC，但是会因为 float 元素而扰乱。float 元素会位于 IFC 与与 line box 之间，使得 line box 宽度缩短。 同个 ifc 下的多个 line box 高度会不同
  IFC 中时不可能有块级元素的，当插入块级元素时（如 p 中插入 div）会产生两个匿名块与 div 分隔开，即产生两个 IFC，每个 IFC 对外表现为块级元素，与 div 垂直排列。
  那么 IFC 一般有什么用呢？
  水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。
- 垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。

- GFC（GrideLayout formatting contexts）：网格布局格式化上下文
  当为一个元素设置 display 值为 grid 的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。那么 GFC 有什么用呢，和 table 又有什么区别呢？首先同样是一个二维的表格，但 GridLayout 会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。

- FFC（Flex formatting contexts）:自适应格式上下文
  display 值为 flex 或者 inline-flex 的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少 safari 和 chrome 还是 OK 的，毕竟这俩在移动端才是王道。Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。
