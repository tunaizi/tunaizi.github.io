import{_ as n,r as l,i as a,a as o}from"./chunks/framework.1cf9c55e.js";const d=JSON.parse('{"title":"CSS 常见问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}],"relativePath":"start-docs/F-css/bfc.md","filePath":"start-docs/F-css/bfc.md"}'),p={name:"start-docs/F-css/bfc.md"};function e(t,s,F,c,i,r){return l(),a("div",null,s[0]||(s[0]=[o(`<h1 id="css-常见问题" tabindex="-1">CSS 常见问题 <a class="header-anchor" href="#css-常见问题" aria-label="Permalink to &quot;CSS 常见问题&quot;">​</a></h1><ol><li><p>BFC 是什么，能解决什么问题</p><ul><li>BFC(Block Formatting Context)块级格式化上下文</li><li>在 BFC 中，每个元素左外边与包含块的左边相接触，即时存在浮动也是如此。除非这个元素也创建了新的 BFC。可以理解为 BFC 有自己的结界。</li><li>BFC 的结界特性用途： 去 margin 重叠或清除 float 带来的影响，也就是说触发 BFC 的时候，就不需要清除浮动操作。BFC 最重要的用途是实现更健壮、更智能的自适应布局。</li><li>触发 BFC 的常见情况： <ul><li>//html 根元素</li><li>float 的值不为 none;</li><li>overflow 的值为 auto,scroll 或 hidden</li><li>display 的值为 table-cell,table-caption 或 inline-block;</li><li>position 的值不为 relative 和 static</li></ul></li></ul></li><li><p>垂直居中</p><div class="language-css codearea-link" id="o6c9emg892f"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai"><code><span class="line"><span style="color:#A6E22E;">.parent</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">flex</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.child</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">align-self</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">center</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><button class="link">将此代码在线运行</button></div></li><li><p>清除浮动</p><div class="language-css codearea-link" id="8cy5qk1nvfk"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai"><code><span class="line"><span style="color:#A6E22E;">.clearfix:before</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#A6E22E;">.clearfix:after</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">content</span><span style="color:#F8F8F2;">: </span><span style="color:#E6DB74;">&#39; &#39;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">/* 1 */</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">display</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">table</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#88846F;">/* 2 */</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6E22E;">.clearfix:after</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">clear</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">both</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.clearfix</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">zoom</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><button class="link">将此代码在线运行</button></div></li><li><p>css 写一个环状进度条</p><div class="language-css codearea-link" id="26mmgh66qlc"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F92672;">@keyframes</span><span style="color:#F8F8F2;"> </span><span style="color:#FD971F;font-style:italic;">loading</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  0% {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rotate</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">0</span><span style="color:#F92672;">deg</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">  100% {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">transform</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">rotate</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">360</span><span style="color:#F92672;">deg</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#A6E22E;">.rounded-progress</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">8</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">solid</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">gray</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border-top-color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border-radius</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">100</span><span style="color:#F92672;">%</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">animation</span><span style="color:#F8F8F2;">: loading </span><span style="color:#AE81FF;">1</span><span style="color:#F92672;">s</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">linear</span><span style="color:#F8F8F2;"> </span><span style="color:#66D9EF;">infinite</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><button class="link">将此代码在线运行</button></div></li><li><p>获取元素可视区域</p><div class="language-js codearea-link" id="ld4ve73zlxl"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">objRect </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> document</span></span>
<span class="line"><span style="color:#F8F8F2;">  .</span><span style="color:#A6E22E;">getElementsByTagName</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&#39;body&#39;</span><span style="color:#F8F8F2;">)[</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">  .</span><span style="color:#A6E22E;">getBoundingClientRect</span><span style="color:#F8F8F2;">()</span></span>
<span class="line"><span style="color:#F8F8F2;">objRect.left, objRect.top</span></span></code></pre><button class="link">将此代码在线运行</button></div></li><li><p>css 写一个三角形</p><div class="language-css codearea-link" id="04x7iiu7vgnz"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai"><code><span class="line"><span style="color:#A6E22E;">.shanjiao</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">height</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border-width</span><span style="color:#F8F8F2;">: </span><span style="color:#AE81FF;">10</span><span style="color:#F92672;">px</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border-top-color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">red</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border-bottom-color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">transparent</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border-left-color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">transparent</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">border-right-color</span><span style="color:#F8F8F2;">: </span><span style="color:#66D9EF;">transparent</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><button class="link">将此代码在线运行</button></div></li><li><p>position 为 relative 的元素 可以使用 top、left 进行定位吗？</p><ul><li>可以使用</li><li>position:relative 的特性是相对自身，无侵入。</li><li>相对定位元素 left/top/right/bottom 的百分比值是相对于包含块计算，而不是自身。</li><li>relative 最小化影响原则</li></ul></li><li><p>盒模型</p><ul><li>标准盒模型： width=content box-sizing: content-box</li><li>IE 盒模型： width=content+padding+border box-sizing: border-box</li></ul></li><li><p>文本单行和多行溢出省略</p><ul><li>单行<div class="language-css codearea-link" id="wmzqmaxhn8p"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">overflow: hidden;</span></span>
<span class="line"><span style="color:#F92672;">text-overflow</span><span style="color:#F8F8F2;">: ellipsis;</span></span>
<span class="line"><span style="color:#F92672;">white-space</span><span style="color:#F8F8F2;">: nowrap;</span></span></code></pre><button class="link">将此代码在线运行</button></div></li><li>多行<div class="language-css codearea-link" id="197l9eafkpi"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">display: -webkit-box;</span></span>
<span class="line"><span style="color:#F8F8F2;">overflow: hidden;</span></span>
<span class="line"><span style="color:#F92672;">text-overflow</span><span style="color:#F8F8F2;">: ellipsis;</span></span>
<span class="line"><span style="color:#F8F8F2;">-webkit-line-clamp: 2;</span></span>
<span class="line"><span style="color:#F8F8F2;">-webkit-box-orient: vertical;</span></span></code></pre><button class="link">将此代码在线运行</button></div></li></ul></li></ol><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><ul><li><p>BFC（Block formatting contexts）：块级格式上下文 页面上的一个隔离的渲染区域，那么他是如何产生的呢？可以触发 BFC 的元素有 float、position、overflow、display：table-cell/ inline-block/table-caption ；BFC 有什么作用呢？比如说实现多栏布局’</p></li><li><p>IFC（Inline formatting contexts）：内联格式上下文 IFC 的 line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的 padding/margin 影响)IFC 中的 line box 一般左右都贴紧整个 IFC，但是会因为 float 元素而扰乱。float 元素会位于 IFC 与与 line box 之间，使得 line box 宽度缩短。 同个 ifc 下的多个 line box 高度会不同 IFC 中时不可能有块级元素的，当插入块级元素时（如 p 中插入 div）会产生两个匿名块与 div 分隔开，即产生两个 IFC，每个 IFC 对外表现为块级元素，与 div 垂直排列。 那么 IFC 一般有什么用呢？ 水平居中：当一个块要在环境中水平居中时，设置其为 inline-block 则会在外层产生 IFC，通过 text-align 则可以使其水平居中。</p></li><li><p>垂直居中：创建一个 IFC，用其中一个元素撑开父元素的高度，然后设置其 vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。</p></li><li><p>GFC（GrideLayout formatting contexts）：网格布局格式化上下文 当为一个元素设置 display 值为 grid 的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。那么 GFC 有什么用呢，和 table 又有什么区别呢？首先同样是一个二维的表格，但 GridLayout 会有更加丰富的属性来控制行列，控制对齐以及更为精细的渲染语义和控制。</p></li><li><p>FFC（Flex formatting contexts）:自适应格式上下文 display 值为 flex 或者 inline-flex 的元素将会生成自适应容器（flex container），可惜这个牛逼的属性只有谷歌和火狐支持，不过在移动端也足够了，至少 safari 和 chrome 还是 OK 的，毕竟这俩在移动端才是王道。Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。</p></li></ul>`,4)]))}const f=n(p,[["render",e]]);export{d as __pageData,f as default};