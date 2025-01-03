import{_ as n,r as a,i as e,a as l}from"./chunks/framework.e3a88a6f.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"柯里化 currying","slug":"柯里化-currying","link":"#柯里化-currying","children":[]}],"relativePath":"start-docs/studyhard/1专题/柯里化.md","filePath":"start-docs/studyhard/1专题/柯里化.md"}'),p={name:"start-docs/studyhard/1专题/柯里化.md"};function t(c,s,r,o,i,y){return a(),e("div",null,s[0]||(s[0]=[l(`<h2 id="柯里化-currying" tabindex="-1">柯里化 currying <a class="header-anchor" href="#柯里化-currying" aria-label="Permalink to &quot;柯里化 currying&quot;">​</a></h2><ul><li><p>在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function add(a, b) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return a + b</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  add(1,2) //3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  var addCurry = curry(add)</span></span>
<span class="line"><span style="color:#e1e4e8;">  addCurry(1)(1) //3</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function sub_curry(fn) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    var args = [].slice.call(arguments, 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      var newArgs = args.concat([].slice.call(arguments));</span></span>
<span class="line"><span style="color:#e1e4e8;">      return fn.apply(this, newArgs);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  function curry(fn, length) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    length = length || fn.length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    var silce = Array.prototype.slice;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(arguments.length &lt; length) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        var combined = [fn].concat(slice.call(arguments));</span></span>
<span class="line"><span style="color:#e1e4e8;">        return curry(sub_curry.apply(this, combined), length - arguments.length);</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return fn.apply(this, arguments)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div><h2 id="惰性函数" tabindex="-1">惰性函数 <a class="header-anchor" href="#惰性函数" aria-label="Permalink to &quot;惰性函数&quot;">​</a></h2><ul><li>惰性函数就是解决每次都要进行判断的这个问题，解决原理很简单，重写函数。<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">// eg:在dom事件添加中，为了兼容现代浏览器和IE浏览器，我们需要对浏览器环境进行一次判断。</span></span>
<span class="line"><span style="color:#e1e4e8;">  function addEvent (type, el, fn) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (window.addEventListener) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          addEvent = function (type, el, fn) {</span></span>
<span class="line"><span style="color:#e1e4e8;">              el.addEventListener(type, fn, false);</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      else if(window.attachEvent){</span></span>
<span class="line"><span style="color:#e1e4e8;">          addEvent = function (type, el, fn) {</span></span>
<span class="line"><span style="color:#e1e4e8;">              el.attachEvent(&#39;on&#39; + type, fn);</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div></li></ul></li></ul>`,2)]))}const g=n(p,[["render",t]]);export{u as __pageData,g as default};
