import{_ as a,r as e,i as n,a as l}from"./chunks/framework.8a6edf47.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"数组与链表","slug":"数组与链表","link":"#数组与链表","children":[{"level":3,"title":"二分查找","slug":"二分查找","link":"#二分查找","children":[]}]}],"relativePath":"start-docs/studyhard/数据结构与算法/数组.md","filePath":"start-docs/studyhard/数据结构与算法/数组.md"}'),t={name:"start-docs/studyhard/数据结构与算法/数组.md"};function r(p,s,o,i,c,d){return e(),n("div",null,s[0]||(s[0]=[l(`<h2 id="数组与链表" tabindex="-1">数组与链表 <a class="header-anchor" href="#数组与链表" aria-label="Permalink to &quot;数组与链表&quot;">​</a></h2><ul><li>数组 <ul><li>查询快,每个元素在内存中有地址，可以通过计算机的寻址方式快速找到元素，所以查询的时间复杂度是O(1)</li><li>插入删除慢，由于数组是有序的，插入或者删除后会影响其他元素的位置，固然需要挪动其他元素，时间复杂度是O(n)</li></ul></li></ul><h3 id="二分查找" tabindex="-1">二分查找 <a class="header-anchor" href="#二分查找" aria-label="Permalink to &quot;二分查找&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function binarySearch(array, target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let length = array.length;</span></span>
<span class="line"><span style="color:#e1e4e8;">    const noop = (start, end) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(start &gt; end) return -1</span></span>
<span class="line"><span style="color:#e1e4e8;">      let mid = Math.floor((start + end) / 2 )</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(target === array[mid]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return mid</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else if(target &gt; array[mid]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return noop(mid + 1, end)</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return noop(start, mid - 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return noop(0, length - 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div>`,4)]))}const h=a(t,[["render",r]]);export{y as __pageData,h as default};
