import{_ as n,r as a,i as l,a as p}from"./chunks/framework.bb8f9838.js";const u=JSON.parse('{"title":"数组的全部方法","description":"","frontmatter":{},"headers":[{"level":2,"title":"获取数组对象的全部属性或方法","slug":"获取数组对象的全部属性或方法","link":"#获取数组对象的全部属性或方法","children":[]},{"level":2,"title":"length","slug":"length","link":"#length","children":[]},{"level":2,"title":"constructor","slug":"constructor","link":"#constructor","children":[]},{"level":2,"title":"[Symbol.iterator]","slug":"symbol-iterator","link":"#symbol-iterator","children":[]},{"level":2,"title":"[Symbol.unscopables]","slug":"symbol-unscopables","link":"#symbol-unscopables","children":[]}],"relativePath":"start-docs/A-数据结构/数组的全部方法.md","filePath":"start-docs/A-数据结构/数组的全部方法.md"}'),o={name:"start-docs/A-数据结构/数组的全部方法.md"};function e(t,s,c,r,F,i){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="数组的全部方法" tabindex="-1">数组的全部方法 <a class="header-anchor" href="#数组的全部方法" aria-label="Permalink to &quot;数组的全部方法&quot;">​</a></h1><h2 id="获取数组对象的全部属性或方法" tabindex="-1">获取数组对象的全部属性或方法 <a class="header-anchor" href="#获取数组对象的全部属性或方法" aria-label="Permalink to &quot;获取数组对象的全部属性或方法&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#88846F;">// 1. Object.keys() - 获取可枚举的属性名</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> keys </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Object.</span><span style="color:#A6E22E;">keys</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">Array</span><span style="color:#F8F8F2;">.prototype)</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(keys)</span></span>
<span class="line"><span style="color:#88846F;">// [</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;length&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;constructor&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;at&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;concat&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;copyWithin&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;fill&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;find&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;findIndex&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;findLast&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;findLastIndex&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;lastIndexOf&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;pop&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;push&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;reverse&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;shift&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;unshift&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;slice&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;sort&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;splice&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;includes&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;indexOf&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;join&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;keys&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;entries&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;values&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;forEach&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;filter&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;flat&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;flatMap&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;map&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;every&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;some&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;reduce&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;reduceRight&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;toReversed&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;toSorted&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;toSpliced&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;with&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;toLocaleString&#39;,</span></span>
<span class="line"><span style="color:#88846F;">//   &#39;toString&#39;</span></span>
<span class="line"><span style="color:#88846F;">// ]</span></span>
<span class="line"><span style="color:#88846F;">// 2. Object.getOwnPropertyNames() - 获取所有属性名(包括不可枚举)</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> allProps </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Object.</span><span style="color:#A6E22E;">getOwnPropertyNames</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">Array</span><span style="color:#F8F8F2;">.prototype)</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(allProps)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 3. Reflect.ownKeys() - 获取所有属性名(包括 Symbol)</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> allKeysWithSymbols </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Reflect.</span><span style="color:#A6E22E;">ownKeys</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">Array</span><span style="color:#F8F8F2;">.prototype)</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(allKeysWithSymbols)</span></span>
<span class="line"><span style="color:#88846F;">//[...keys,[Symbol.iterator][Symbol.unscopables]]</span></span>
<span class="line"><span style="color:#88846F;">// 比获取所有属性名多了两个一个symbol属性</span></span></code></pre><button class="link"></button></div><h2 id="length" tabindex="-1">length <a class="header-anchor" href="#length" aria-label="Permalink to &quot;length&quot;">​</a></h2><p>数组的 <code>length</code> 属性表示数组中元素的个数。它是一个可读写的属性：</p><ul><li>读取时返回数组的长度</li><li>写入时可以改变数组的长度 <ul><li>如果设置的值小于当前长度，数组会被截断</li><li>如果设置的值大于当前长度，数组会用空槽（empty slots）填充</li></ul></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> arr </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#E6DB74;">&#39;a&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;b&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;c&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(arr.length) </span><span style="color:#88846F;">// 3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">arr.length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">2</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(arr) </span><span style="color:#88846F;">// [&#39;a&#39;, &#39;b&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">arr.length </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> </span><span style="color:#AE81FF;">4</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(arr) </span><span style="color:#88846F;">// [&#39;a&#39;, &#39;b&#39;, empty × 2]</span></span></code></pre><button class="link"></button></div><h2 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h2><p>数组的 <code>constructor</code> 属性返回创建该数组对象的构造函数的引用。对于数组来说，这个属性指向 <code>Array</code> 构造函数：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> arr </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#E6DB74;">&#39;a&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;b&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;c&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(arr.constructor </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> Array) </span><span style="color:#88846F;">// true</span></span>
<span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(arr.constructor.name) </span><span style="color:#88846F;">// &quot;Array&quot;</span></span></code></pre><button class="link"></button></div><h2 id="symbol-iterator" tabindex="-1">[Symbol.iterator] <a class="header-anchor" href="#symbol-iterator" aria-label="Permalink to &quot;[Symbol.iterator]&quot;">​</a></h2><p>这是一个特殊的 Symbol 属性，它定义了数组的默认迭代器。这个属性使得数组可以：</p><ul><li>在 <code>for...of</code> 循环中使用</li><li>支持展开运算符 <code>...</code></li><li>支持解构赋值</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> arr </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#E6DB74;">&#39;a&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;b&#39;</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&#39;c&#39;</span><span style="color:#F8F8F2;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// for...of 循环</span></span>
<span class="line"><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> (</span><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> item </span><span style="color:#F92672;">of</span><span style="color:#F8F8F2;"> arr) {</span></span>
<span class="line"><span style="color:#F8F8F2;">  console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(item)</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 展开运算符</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> newArr </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#F92672;">...</span><span style="color:#F8F8F2;">arr]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">// 解构赋值</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">let</span><span style="color:#F8F8F2;"> [first, </span><span style="color:#F92672;">...</span><span style="color:#F8F8F2;">rest] </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> arr</span></span></code></pre><button class="link"></button></div><h2 id="symbol-unscopables" tabindex="-1">[Symbol.unscopables] <a class="header-anchor" href="#symbol-unscopables" aria-label="Permalink to &quot;[Symbol.unscopables]&quot;">​</a></h2><p>这个 Symbol 属性包含了一些在使用 <code>with</code> 语句时需要排除的数组属性名。这是一个内部使用的属性，在日常开发中很少直接使用：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">console.</span><span style="color:#A6E22E;">log</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">Array</span><span style="color:#F8F8F2;">.prototype[Symbol.unscopables])</span></span>
<span class="line"><span style="color:#88846F;">// {</span></span>
<span class="line"><span style="color:#88846F;">//   copyWithin: true,</span></span>
<span class="line"><span style="color:#88846F;">//   entries: true,</span></span>
<span class="line"><span style="color:#88846F;">//   fill: true,</span></span>
<span class="line"><span style="color:#88846F;">//   find: true,</span></span>
<span class="line"><span style="color:#88846F;">//   findIndex: true,</span></span>
<span class="line"><span style="color:#88846F;">//   flat: true,</span></span>
<span class="line"><span style="color:#88846F;">//   flatMap: true,</span></span>
<span class="line"><span style="color:#88846F;">//   includes: true,</span></span>
<span class="line"><span style="color:#88846F;">//   keys: true,</span></span>
<span class="line"><span style="color:#88846F;">//   values: true</span></span>
<span class="line"><span style="color:#88846F;">// }</span></span></code></pre><button class="link"></button></div>`,17)]))}const d=n(o,[["render",e]]);export{u as __pageData,d as default};
