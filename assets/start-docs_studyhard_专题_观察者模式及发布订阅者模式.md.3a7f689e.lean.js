import{_ as e,r as n,i as a,a as l}from"./chunks/framework.8a6edf47.js";const u=JSON.parse('{"title":"观察者模式和发布订阅模式","description":"","frontmatter":{},"headers":[{"level":2,"title":"观察者模式 （没有中间商赚差价）","slug":"观察者模式-没有中间商赚差价","link":"#观察者模式-没有中间商赚差价","children":[]},{"level":2,"title":"发布订阅模式（有中间商赚差价）","slug":"发布订阅模式-有中间商赚差价","link":"#发布订阅模式-有中间商赚差价","children":[{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]}],"relativePath":"start-docs/studyhard/专题/观察者模式及发布订阅者模式.md","filePath":"start-docs/studyhard/专题/观察者模式及发布订阅者模式.md"}'),p={name:"start-docs/studyhard/专题/观察者模式及发布订阅者模式.md"};function t(o,s,c,r,i,y){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="观察者模式和发布订阅模式" tabindex="-1">观察者模式和发布订阅模式 <a class="header-anchor" href="#观察者模式和发布订阅模式" aria-label="Permalink to &quot;观察者模式和发布订阅模式&quot;">​</a></h1><h2 id="观察者模式-没有中间商赚差价" tabindex="-1">观察者模式 （没有中间商赚差价） <a class="header-anchor" href="#观察者模式-没有中间商赚差价" aria-label="Permalink to &quot;观察者模式 （没有中间商赚差价）&quot;">​</a></h2><ul><li>一个对象（被观察者subject）的状态发生变化时，会通知所有依赖它的对象（观察者observer），观察者们接收到通知后会调用各自的处理函数。</li><li>两者之间之间关联，相互依赖。</li><li>大多数是同步的，比如当事件触发，subject就会去调用观察者的方法。</li><li>实现<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class Subject {</span></span>
<span class="line"><span style="color:#e1e4e8;">    constructor() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.observers = this.observers || [];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    notify() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.observers.forEach(observer =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        observer.update()</span></span>
<span class="line"><span style="color:#e1e4e8;">      })</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    addOb(ob) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.observers.push(ob)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  class Observer {</span></span>
<span class="line"><span style="color:#e1e4e8;">    constructor(name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.name = name || &#39;observer&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    update() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(this.name,&#39; reviced a notify&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  let subject = new Subject();</span></span>
<span class="line"><span style="color:#e1e4e8;">  let observer1 = new Observer(&#39;ob1&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  let observer2 = new Observer(&#39;ob2&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  subject.addOb(observer1);</span></span>
<span class="line"><span style="color:#e1e4e8;">  subject.addOb(observer2);</span></span>
<span class="line"><span style="color:#e1e4e8;">  subject.notify();</span></span></code></pre></div></li></ul><h2 id="发布订阅模式-有中间商赚差价" tabindex="-1">发布订阅模式（有中间商赚差价） <a class="header-anchor" href="#发布订阅模式-有中间商赚差价" aria-label="Permalink to &quot;发布订阅模式（有中间商赚差价）&quot;">​</a></h2><ul><li>对象状态发生变化也会通知观察者，只是通知方式被抽象为一个独立的changeManager。</li><li>发布者（publisher）和订阅者（subscriber）不是互相依赖，两者之间有一个通信结构（事件通道Event Channel）。通知逻辑由事件通道处理。</li><li>大多数是异步的，比如消息队列</li><li>实现<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">class EventEmmitter {</span></span>
<span class="line"><span style="color:#e1e4e8;">    constructor() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.subscribers = this.subscribers || new Map()</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // on addListener</span></span>
<span class="line"><span style="color:#e1e4e8;">    on(event, fn) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(!this.subscribers.has(event)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.subscribers.set(event, fn)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    //once</span></span>
<span class="line"><span style="color:#e1e4e8;">    once(event, fn) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      function one() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        fn.apply(this, arguments)</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.off(event)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.on(event, one)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    //emit publish</span></span>
<span class="line"><span style="color:#e1e4e8;">    emit(event) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      let handler = this.subscribers.get(event);</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(handler) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        handler.apply(this, [...arguments].slice(1))</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    //removeListener</span></span>
<span class="line"><span style="color:#e1e4e8;">    off(event) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(this.subscribers.has(event)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.subscribers.delete(event)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  let emmitter = new EventEmmitter();</span></span>
<span class="line"><span style="color:#e1e4e8;">  emmitter.on(&#39;click&#39;, (args) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(args,&#39;click&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  });</span></span>
<span class="line"><span style="color:#e1e4e8;">  emmitter.emit(&#39;click&#39;,&#39;小红&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  emmitter.off(&#39;click&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  emmitter.emit(&#39;click&#39;,&#39;小红&#39;);</span></span></code></pre></div></li></ul><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><ul><li>[<a href="https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/25" target="_blank" rel="noreferrer">https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/25</a>]</li><li>[<a href="https://github.com/sisterAn/JavaScript-Algorithms/issues/110" target="_blank" rel="noreferrer">https://github.com/sisterAn/JavaScript-Algorithms/issues/110</a>]</li></ul>`,7)]))}const b=e(p,[["render",t]]);export{u as __pageData,b as default};
