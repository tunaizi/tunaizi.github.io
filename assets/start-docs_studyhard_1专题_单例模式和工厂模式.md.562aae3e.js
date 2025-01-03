import{_ as s,r as e,i as a,a as l}from"./chunks/framework.d927199b.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"单例模式","slug":"单例模式","link":"#单例模式","children":[]},{"level":2,"title":"工厂模式","slug":"工厂模式","link":"#工厂模式","children":[]}],"relativePath":"start-docs/studyhard/1专题/单例模式和工厂模式.md","filePath":"start-docs/studyhard/1专题/单例模式和工厂模式.md"}'),p={name:"start-docs/studyhard/1专题/单例模式和工厂模式.md"};function c(t,n,o,i,r,y){return e(),a("div",null,n[0]||(n[0]=[l(`<h2 id="单例模式" tabindex="-1">单例模式 <a class="header-anchor" href="#单例模式" aria-label="Permalink to &quot;单例模式&quot;">​</a></h2><ul><li>类只有一个实例</li><li>可以绑定在全局实例，也可以通过闭包来私有变量，还可以通过es6的symbol</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">var Singleton = function(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.name = name</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.instance = null</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  Singleton.getInstance = function(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(!this.instance) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.instance = new Singleton(name)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return this.instance</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  var instance1 = Singleton.getInstance(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  var instance2 = Singleton.getInstance(&#39;b&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(instance1 === instance2)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">//使用new关键字实现单例</span></span>
<span class="line"><span style="color:#e1e4e8;">  var Singleton = (function(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let instance = null</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    return function(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(!instance) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          this.name = name</span></span>
<span class="line"><span style="color:#e1e4e8;">          instance = this</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      return instance</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })()</span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">  var instance1 = new Singleton(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  var instance2 = new Singleton(&#39;b&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(instance1 === instance2)</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">//惰性单例</span></span>
<span class="line"><span style="color:#e1e4e8;">  var Singleton = function(fn) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let instance;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return instance || (instance = fn.apply(this, arguments))</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  function createObj(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      name: name</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  var createSingleObj = Singleton(createObj)</span></span>
<span class="line"><span style="color:#e1e4e8;">  var instance1 = createSingleObj(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  var instance2 = createSingleObj(&#39;b&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(instance1 === instance2)</span></span></code></pre></div><h2 id="工厂模式" tabindex="-1">工厂模式 <a class="header-anchor" href="#工厂模式" aria-label="Permalink to &quot;工厂模式&quot;">​</a></h2><ul><li>工厂模式用来创建对象，实用场景 <ul><li>对象构建十分复杂</li><li>需要依赖具体环境创建不同实例</li><li>处理大量具有相同属性的小对象</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">var Factory = (function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let instance = function(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.name = name</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return function(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return new instance(name)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  var f1 = new Factory(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  var f2 = new Factory(&#39;b&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(f1 === f2)</span></span></code></pre></div>`,8)]))}const g=s(p,[["render",c]]);export{d as __pageData,g as default};
