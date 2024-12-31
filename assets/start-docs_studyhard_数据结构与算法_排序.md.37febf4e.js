import{_ as e,r as a,i as n,a as l}from"./chunks/framework.8a6edf47.js";const u=JSON.parse('{"title":"排序算法汇总","description":"","frontmatter":{},"headers":[{"level":2,"title":"选择排序","slug":"选择排序","link":"#选择排序","children":[]},{"level":2,"title":"冒泡排序","slug":"冒泡排序","link":"#冒泡排序","children":[]},{"level":2,"title":"插入排序","slug":"插入排序","link":"#插入排序","children":[]},{"level":2,"title":"快速排序","slug":"快速排序","link":"#快速排序","children":[]},{"level":2,"title":"希尔排序","slug":"希尔排序","link":"#希尔排序","children":[]},{"level":2,"title":"归并排序","slug":"归并排序","link":"#归并排序","children":[]},{"level":2,"title":"堆排序","slug":"堆排序","link":"#堆排序","children":[]},{"level":2,"title":"计数排序","slug":"计数排序","link":"#计数排序","children":[]},{"level":2,"title":"桶排序","slug":"桶排序","link":"#桶排序","children":[]},{"level":2,"title":"基数排序","slug":"基数排序","link":"#基数排序","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"start-docs/studyhard/数据结构与算法/排序.md","filePath":"start-docs/studyhard/数据结构与算法/排序.md"}'),p={name:"start-docs/studyhard/数据结构与算法/排序.md"};function t(o,s,r,i,c,d){return a(),n("div",null,s[0]||(s[0]=[l(`<h1 id="排序算法汇总" tabindex="-1">排序算法汇总 <a class="header-anchor" href="#排序算法汇总" aria-label="Permalink to &quot;排序算法汇总&quot;">​</a></h1><h2 id="选择排序" tabindex="-1">选择排序 <a class="header-anchor" href="#选择排序" aria-label="Permalink to &quot;选择排序&quot;">​</a></h2><ul><li>时间复杂度： o(n^2) 不稳定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function selectionSort(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let minIndex,tmp;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let length = arr.length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(let i = 0; i &lt; length - 1; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      minIndex = i;</span></span>
<span class="line"><span style="color:#e1e4e8;">      for(let j = i + 1; j &lt; length; j++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(min[j] &lt; min[minIndex]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          minIndex = j</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      tmp = arr[i]</span></span>
<span class="line"><span style="color:#e1e4e8;">      arr[i] = arr[minIndex]</span></span>
<span class="line"><span style="color:#e1e4e8;">      arr[minIndex] = tmp</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return arr</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div><h2 id="冒泡排序" tabindex="-1">冒泡排序 <a class="header-anchor" href="#冒泡排序" aria-label="Permalink to &quot;冒泡排序&quot;">​</a></h2><ul><li>时间复杂度： o(n^2) 稳定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function bubbleSort(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let tmp;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let length = arr.length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(let i = 0; i &lt; length - 1; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      for(let j = 0; j &lt; length - i - 1; j++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(arr[j] &gt; arr[j + 1]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          tmp = arr[j + 1]</span></span>
<span class="line"><span style="color:#e1e4e8;">          arr[j + 1] = arr[j]</span></span>
<span class="line"><span style="color:#e1e4e8;">          arr[j] = tmp</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return arr</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div><h2 id="插入排序" tabindex="-1">插入排序 <a class="header-anchor" href="#插入排序" aria-label="Permalink to &quot;插入排序&quot;">​</a></h2><ul><li>时间复杂度： o(n^2) 稳定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function insertionSort(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let length = arr.length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let preIndex, current;</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(let i = 1; i &lt; length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      preIndex = i - 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">      current = arr[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">      while(preIndex &gt;= 0 &amp;&amp; arr[preIndex] &gt; current) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        arr[preIndex+1] = arr[preIndex]</span></span>
<span class="line"><span style="color:#e1e4e8;">        preIndex--</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      arr[preIndex+1] = current</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return arr</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div><h2 id="快速排序" tabindex="-1">快速排序 <a class="header-anchor" href="#快速排序" aria-label="Permalink to &quot;快速排序&quot;">​</a></h2><ul><li>时间复杂度： o(nlogn) 不稳定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function quickSort(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(arr.length &lt;= 1) return arr</span></span>
<span class="line"><span style="color:#e1e4e8;">    let left = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">    let right = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">    let length = arr.length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let pivotIndex = Math.floor(length / 2);</span></span>
<span class="line"><span style="color:#e1e4e8;">    let pivot = arr.splice(pivotIndex, 1)[0];</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(let i = 0; i &lt; length - 1; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(arr[i] &lt; pivot) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        left.push(arr[i])</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        right.push(arr[i])</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return quickSort(left).concat(pivot, quickSort(right))</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div><h2 id="希尔排序" tabindex="-1">希尔排序 <a class="header-anchor" href="#希尔排序" aria-label="Permalink to &quot;希尔排序&quot;">​</a></h2><ul><li>时间复杂度： o(nlogn) 不稳定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre></div><h2 id="归并排序" tabindex="-1">归并排序 <a class="header-anchor" href="#归并排序" aria-label="Permalink to &quot;归并排序&quot;">​</a></h2><ul><li>时间复杂度： o(nlogn) 稳定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre></div><h2 id="堆排序" tabindex="-1">堆排序 <a class="header-anchor" href="#堆排序" aria-label="Permalink to &quot;堆排序&quot;">​</a></h2><ul><li>时间复杂度： o(nlogn) 不稳定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre></div><h2 id="计数排序" tabindex="-1">计数排序 <a class="header-anchor" href="#计数排序" aria-label="Permalink to &quot;计数排序&quot;">​</a></h2><ul><li>时间复杂度： o(n+k) 稳定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre></div><h2 id="桶排序" tabindex="-1">桶排序 <a class="header-anchor" href="#桶排序" aria-label="Permalink to &quot;桶排序&quot;">​</a></h2><ul><li>时间复杂度： o(n+k) 稳定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre></div><h2 id="基数排序" tabindex="-1">基数排序 <a class="header-anchor" href="#基数排序" aria-label="Permalink to &quot;基数排序&quot;">​</a></h2><ul><li>时间复杂度： o(n+k) 稳定</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li>[<a href="https://www.cnblogs.com/onepixel/articles/7674659.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/onepixel/articles/7674659.html</a>]</li></ul>`,33)]))}const y=e(p,[["render",t]]);export{u as __pageData,y as default};
