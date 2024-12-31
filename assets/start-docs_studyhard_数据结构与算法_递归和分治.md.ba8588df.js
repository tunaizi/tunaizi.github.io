import{_ as s,r as a,i as e,a as l}from"./chunks/framework.8a6edf47.js";const y=JSON.parse('{"title":"递归和分治","description":"","frontmatter":{},"headers":[{"level":2,"title":"递归本身是一个循环，但不是for循环，而是通过函数调用自身的循环。","slug":"递归本身是一个循环-但不是for循环-而是通过函数调用自身的循环。","link":"#递归本身是一个循环-但不是for循环-而是通过函数调用自身的循环。","children":[]},{"level":2,"title":"分治 Divde & Conquer （庖丁解牛）","slug":"分治-divde-conquer-庖丁解牛","link":"#分治-divde-conquer-庖丁解牛","children":[]}],"relativePath":"start-docs/studyhard/数据结构与算法/递归和分治.md","filePath":"start-docs/studyhard/数据结构与算法/递归和分治.md"}'),p={name:"start-docs/studyhard/数据结构与算法/递归和分治.md"};function o(c,n,t,r,i,u){return a(),e("div",null,n[0]||(n[0]=[l(`<h1 id="递归和分治" tabindex="-1">递归和分治 <a class="header-anchor" href="#递归和分治" aria-label="Permalink to &quot;递归和分治&quot;">​</a></h1><h2 id="递归本身是一个循环-但不是for循环-而是通过函数调用自身的循环。" tabindex="-1">递归本身是一个循环，但不是for循环，而是通过函数调用自身的循环。 <a class="header-anchor" href="#递归本身是一个循环-但不是for循环-而是通过函数调用自身的循环。" aria-label="Permalink to &quot;递归本身是一个循环，但不是for循环，而是通过函数调用自身的循环。&quot;">​</a></h2><ul><li>有重复子问题是需要优化，尾递归优化等 eg: 计算n! 或者斐波拉契函数</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function factorial(n) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(n === 1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return n</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  return n * factorial(n-1)</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">factorial(5)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//尾递归优化  将函数结果传入下一个函数中</span></span>
<span class="line"><span style="color:#e1e4e8;">function factorial(n, total) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(n === 0 || n === 1) return total;</span></span>
<span class="line"><span style="color:#e1e4e8;">  return factorial(n-1, n * total)</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre></div><p>eg: 斐波拉契函数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">// 斐波拉契函数</span></span>
<span class="line"><span style="color:#e1e4e8;">function fib(n) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if(n === 0 || n === 1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return n</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return fib(n-1) + fib(n-2)</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">fib(5)</span></span>
<span class="line"><span style="color:#e1e4e8;">//缓存数据</span></span>
<span class="line"><span style="color:#e1e4e8;">function fib(n) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  let cache = {};</span></span>
<span class="line"><span style="color:#e1e4e8;">  let fun = function (n) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(cache[n]) return cache[n];</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(n === 0 || n === 1) return n;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return fun(n-1) + fun(n-2);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return fun(n)</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre></div><h2 id="分治-divde-conquer-庖丁解牛" tabindex="-1">分治 Divde &amp; Conquer （庖丁解牛） <a class="header-anchor" href="#分治-divde-conquer-庖丁解牛" aria-label="Permalink to &quot;分治 Divde &amp; Conquer （庖丁解牛）&quot;">​</a></h2><ul><li>没有中间子问题和大量重复计算时使用 eg: 计算x的n次方 letcode 21</li><li>调用库函数 pow(x, n)</li><li>暴力乘法 时间复杂度是O(n)</li><li>分治 时间复杂度O(logn) 以2为底数<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">var myPow = function(x, n) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(n === 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return 1</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(n &lt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return 1 / myPow(x, -n)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(n % 2 === 1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      //奇数次方</span></span>
<span class="line"><span style="color:#e1e4e8;">      return x * myPow(x,n - 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    //偶数次方</span></span>
<span class="line"><span style="color:#e1e4e8;">    return myPow(x*x, n / 2)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div></li><li>位运算</li></ul>`,8)]))}const f=s(p,[["render",o]]);export{y as __pageData,f as default};
