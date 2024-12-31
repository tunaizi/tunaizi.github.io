import{_ as e,r as n,i as a,a as t}from"./chunks/framework.8a6edf47.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"setTimeout","slug":"settimeout","link":"#settimeout","children":[{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]}],"relativePath":"start-docs/studyhard/专题/setTimeout.md","filePath":"start-docs/studyhard/专题/setTimeout.md"}'),l={name:"start-docs/studyhard/专题/setTimeout.md"};function o(p,s,i,r,c,m){return n(),a("div",null,s[0]||(s[0]=[t(`<h2 id="settimeout" tabindex="-1">setTimeout <a class="header-anchor" href="#settimeout" aria-label="Permalink to &quot;setTimeout&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">// 利用requestAnimationFrame实现</span></span>
<span class="line"><span style="color:#e1e4e8;">  function settimeout(fn, delay) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let start = new Date().getTime()</span></span>
<span class="line"><span style="color:#e1e4e8;">    const loop = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      timer = window.requestAnimationFrame(loop)</span></span>
<span class="line"><span style="color:#e1e4e8;">      now = new Date().getTime()</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(now - start &gt;= delay) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        fn.apply(this, arguments)</span></span>
<span class="line"><span style="color:#e1e4e8;">        window.cancelAnimationFrame(timer)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    window.requestAnimationFrame(fn)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  function foo (name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(name)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    foo(&#39;name&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, 1000)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  settimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    foo(&#39;name&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }, 2000)</span></span></code></pre></div><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><ul><li>[<a href="https://github.com/sisterAn/JavaScript-Algorithms/issues/98" target="_blank" rel="noreferrer">https://github.com/sisterAn/JavaScript-Algorithms/issues/98</a>]</li></ul>`,4)]))}const y=e(l,[["render",o]]);export{d as __pageData,y as default};
