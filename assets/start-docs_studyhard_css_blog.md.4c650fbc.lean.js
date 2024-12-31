import{_ as n,r as l,i as o,a as i}from"./chunks/framework.8a6edf47.js";const f=JSON.parse('{"title":"CSS常见问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}],"relativePath":"start-docs/studyhard/css/blog.md","filePath":"start-docs/studyhard/css/blog.md"}'),t={name:"start-docs/studyhard/css/blog.md"};function a(s,e,r,c,p,d){return l(),o("div",null,e[0]||(e[0]=[i(`<h1 id="css常见问题" tabindex="-1">CSS常见问题 <a class="header-anchor" href="#css常见问题" aria-label="Permalink to &quot;CSS常见问题&quot;">​</a></h1><ol><li>BFC是什么，能解决什么问题 - BFC(Block Formatting Context)块级格式化上下文 - 在BFC中，每个元素左外边与包含块的左边相接触，即时存在浮动也是如此。除非这个元素也创建了新的BFC。可以理解为BFC有自己的结界。 - BFC的结界特性用途： 去margin重叠或清除float带来的影响，也就是说触发BFC的时候，就不需要清除浮动操作。BFC最重要的用途是实现更健壮、更智能的自适应布局。 - 触发BFC的常见情况： <ul><li>//html根元素</li><li>float的值不为none;</li><li>overflow的值为auto,scroll或hidden</li><li>display的值为table-cell,table-caption或inline-block;</li><li>position的值不为relative和static</li></ul></li><li>垂直居中<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">.parent {</span></span>
<span class="line"><span style="color:#e1e4e8;">   display: flex;</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> .child {</span></span>
<span class="line"><span style="color:#e1e4e8;">   align-self: center;</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span></code></pre></div></li><li>清除浮动</li></ol><pre><code>\`\`\`
  .clearfix:before,
  .clearfix:after {
    content: &quot; &quot;;
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
\`\`\` 
</code></pre><ol start="4"><li>css写一个环状进度条</li></ol><pre><code>\`\`\`
  width: 100px;
  height: 100px;
  border: 8px solid gray;
  border-top-color: red;
  border-radius: 100%;
  animation: loading 1s linear infinite;
\`\`\` 
</code></pre><ol start="5"><li>获取元素可视区域</li></ol><pre><code>\`\`\`
  objRect = document.getElementsByTagName(&#39;body&#39;)[0].getBoundingClientRect()
  objRect.left,objRect.top
\`\`\` 
</code></pre><ol start="6"><li>css写一个三角形</li></ol><pre><code>\`\`\`
  width: 0;
  height: 0;
  border-width: 10px;
  border-top-color: red;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
\`\`\` 
</code></pre><ol start="7"><li>position为relative的元素 可以使用top、left进行定位吗？ - 可以使用 - position:relative的特性是相对自身，无侵入。 - 相对定位元素left/top/right/bottom的百分比值是相对于包含块计算，而不是自身。 - relative最小化影响原则</li><li>盒模型 - 标准盒模型： width=content box-sizing: content-box - IE盒模型： width=content+padding+border box-sizing: border-box</li><li>文本单行和多行溢出省略 - 单行<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">overflow: hidden;</span></span>
<span class="line"><span style="color:#e1e4e8;">  text-overflow: ellipsis;</span></span>
<span class="line"><span style="color:#e1e4e8;">  white-space: nowrap;</span></span></code></pre></div></li></ol><pre><code>- 多行
  \`\`\`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
  \`\`\` 
</code></pre><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><ul><li>BFC（Block formatting contexts）：块级格式上下文 页面上的一个隔离的渲染区域，那么他是如何产生的呢？可以触发BFC的元素有float、position、overflow、display：table-cell/ inline-block/table-caption ；BFC有什么作用呢？比如说实现多栏布局’</li></ul><p>IFC（Inline formatting contexts）：内联格式上下文 IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)IFC中的line box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。float元素会位于IFC与与line box之间，使得line box宽度缩短。 同个ifc下的多个line box高度会不同 IFC中时不可能有块级元素的，当插入块级元素时（如p中插入div）会产生两个匿名块与div分隔开，即产生两个IFC，每个IFC对外表现为块级元素，与div垂直排列。 那么IFC一般有什么用呢？ 水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。 垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。</p><p>GFC（GrideLayout formatting contexts）：网格布局格式化上下文 当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。那么GFC有什么用呢，和table又有什么区别呢？首先同样是一个二维的表格，但GridLayout会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。</p><p>FFC（Flex formatting contexts）:自适应格式上下文 display值为flex或者inline-flex的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少safari和chrome还是OK的，毕竟这俩在移动端才是王道。Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。</p>`,16)]))}const g=n(t,[["render",a]]);export{f as __pageData,g as default};
