import{_ as e,r as a,i as n,a as l}from"./chunks/framework.8a6edf47.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"防抖","slug":"防抖","link":"#防抖","children":[]},{"level":2,"title":"节流","slug":"节流","link":"#节流","children":[]}],"relativePath":"start-docs/studyhard/专题/节流-防抖.md","filePath":"start-docs/studyhard/专题/节流-防抖.md"}'),t={name:"start-docs/studyhard/专题/节流-防抖.md"};function p(i,s,r,o,c,u){return a(),n("div",null,s[0]||(s[0]=[l(`<h2 id="防抖" tabindex="-1">防抖 <a class="header-anchor" href="#防抖" aria-label="Permalink to &quot;防抖&quot;">​</a></h2><ul><li>当监听页面滚动事件并频繁触发事件时，需要做防抖。例如resize <ul><li>如果短时间内触发同一事件，只执行一次函数。如果N秒内重复出发，则重新计算时间。</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function debounce(fn, delay) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let timer = null</span></span>
<span class="line"><span style="color:#e1e4e8;">    return function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      let args = arguments</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(timer) clearTimeout(timer)</span></span>
<span class="line"><span style="color:#e1e4e8;">      timer = setTimeout(() =&gt; fn.apply(this, args), delay)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div></li></ul><h2 id="节流" tabindex="-1">节流 <a class="header-anchor" href="#节流" aria-label="Permalink to &quot;节流&quot;">​</a></h2><ul><li><p>短时间内触发同一事件，要求在执行一次后，在规定时间内不再执行。每隔一段时间必执行一次。</p><ul><li>应用： <ul><li>懒监听页面滚动，例如无限加载，每隔一段时间加载一次数据。</li><li>页面数据框输入实时搜索，可以根据需求是当用户停下才搜索或者每隔一点时间就搜索来使用防抖或者节流</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function throttle(fn, delay) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let flag = true</span></span>
<span class="line"><span style="color:#e1e4e8;">    return function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      let args = arguments</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(!flag) return</span></span>
<span class="line"><span style="color:#e1e4e8;">      flag = false</span></span>
<span class="line"><span style="color:#e1e4e8;">      setTimeout(() =&gt; {fn.apply(this, args); flag = true}, delay)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div><p>let res = [] for(const item of Object.values(map)) { if(!item.pId) { res.push(item) } else { const parent = map[item.pId]; parent.child = parent.child || [] parent.child.push(item) } }</p></li></ul>`,4)]))}const h=e(t,[["render",p]]);export{y as __pageData,h as default};
