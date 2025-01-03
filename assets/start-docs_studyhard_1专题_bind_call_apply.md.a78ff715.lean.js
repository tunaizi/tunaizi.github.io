import{_ as n,r as a,i as l,a as p}from"./chunks/framework.d927199b.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"bind & call & apply","slug":"bind-call-apply","link":"#bind-call-apply","children":[]}],"relativePath":"start-docs/studyhard/1专题/bind&call&apply.md","filePath":"start-docs/studyhard/1专题/bind&call&apply.md"}'),o={name:"start-docs/studyhard/1专题/bind&call&apply.md"};function e(c,s,t,r,E,y){return a(),l("div",null,s[0]||(s[0]=[p(`<h2 id="bind-call-apply" tabindex="-1">bind &amp; call &amp; apply <a class="header-anchor" href="#bind-call-apply" aria-label="Permalink to &quot;bind &amp; call &amp; apply&quot;">​</a></h2><ul><li>call 和 apply,是为了动态改变 this 而出现。当一个 object 没有某个方法，但是其他对象有，就可以借助 call 和 apply 来使用其他对象的方法。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// document.getElementsByTagName选择的dom 节点是一种类似array的array。它不能应用Array下的push,pop等方法</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> domNodes </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.slice.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementByTagName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;*&quot;</span><span style="color:#E1E4E8;">));</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Cat</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">showName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name,args)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> cat </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Cat</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aa&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  cat.</span><span style="color:#B392F0;">showName</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// aa 1</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> dog </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {name: </span><span style="color:#9ECBFF;">&#39;bb&#39;</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">  cat.showName.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(dog, </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// bb 1</span></span>
<span class="line"><span style="color:#E1E4E8;">  cat.showName.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(dog, [</span><span style="color:#9ECBFF;">&#39;2&#39;</span><span style="color:#E1E4E8;">]) </span><span style="color:#6A737D;">// bb 2</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="color:#9ECBFF;">- call与apply,接受参数不同。**call将多个参数分开接收**，apply将参数合并为数组接收。</span></span>
<span class="line"><span style="color:#9ECBFF;">- bind方法也可以改变this指针。 与call和apply的区别在于不会立即执行。bind方法会预先将参数传递给方法。bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">## call实现</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`\`js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">Function.prototype.myCall = function(context) {</span></span>
<span class="line"><span style="color:#9ECBFF;">if(typeof this !== &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#9ECBFF;">throw new TypeError(&#39;not function&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">//获取当前上下文</span></span>
<span class="line"><span style="color:#9ECBFF;">context = context || window</span></span>
<span class="line"><span style="color:#9ECBFF;">//将指针赋值给当前上下文中的函数</span></span>
<span class="line"><span style="color:#9ECBFF;">context.fn = this</span></span>
<span class="line"><span style="color:#9ECBFF;">//获取参数，过滤掉第一个参数</span></span>
<span class="line"><span style="color:#9ECBFF;">let arg = [...arguments].slice(1)</span></span>
<span class="line"><span style="color:#9ECBFF;">//执行函数</span></span>
<span class="line"><span style="color:#9ECBFF;">let result = context.fn(...arg)</span></span>
<span class="line"><span style="color:#9ECBFF;">//删除绑定</span></span>
<span class="line"><span style="color:#9ECBFF;">delete context.fn</span></span>
<span class="line"><span style="color:#9ECBFF;">//返回结果</span></span>
<span class="line"><span style="color:#9ECBFF;">return result</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">function foo() {</span></span>
<span class="line"><span style="color:#9ECBFF;">this.name = &#39;foo&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">this.showName = function() {</span></span>
<span class="line"><span style="color:#9ECBFF;">console.log(this.name, arguments)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">(new foo(&#39;foo&#39;)).showName.call({name: &#39;fooooo&#39;}, &#39;aaa&#39;, &#39;bbb&#39;);</span></span>
<span class="line"><span style="color:#9ECBFF;">(new foo(&#39;foo&#39;)).showName.myCall({name: &#39;fooooo&#39;}, &#39;aaa&#39;, &#39;bbb&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">## apply实现</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">Function.prototype.myApply = function(context) {</span></span>
<span class="line"><span style="color:#9ECBFF;">if(typeof this !== &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#9ECBFF;">throw new TypeError(&#39;is not function&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">context = context || window</span></span>
<span class="line"><span style="color:#9ECBFF;">context.fn = this</span></span>
<span class="line"><span style="color:#9ECBFF;">let result</span></span>
<span class="line"><span style="color:#9ECBFF;">if(arguments[1]) {</span></span>
<span class="line"><span style="color:#9ECBFF;">context.fn(...arguments[1])</span></span>
<span class="line"><span style="color:#9ECBFF;">} else {</span></span>
<span class="line"><span style="color:#9ECBFF;">context.fn()</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">delete context.fn</span></span>
<span class="line"><span style="color:#9ECBFF;">return result</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">function foo() {</span></span>
<span class="line"><span style="color:#9ECBFF;">this.name = &#39;foo&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">this.showName = function() {</span></span>
<span class="line"><span style="color:#9ECBFF;">console.log(this.name, arguments)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">(new foo(&#39;foo&#39;)).showName.apply({name: &#39;fooooo&#39;}, [&#39;aaa&#39;, &#39;bbb&#39;]);</span></span>
<span class="line"><span style="color:#9ECBFF;">(new foo(&#39;foo&#39;)).showName.myApply({name: &#39;fooooo&#39;}, [&#39;aaa&#39;, &#39;bbb&#39;]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">## bind实现</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">//使用 apply 实现 bind</span></span>
<span class="line"><span style="color:#9ECBFF;">Function.prototype.myBind = function(context) {</span></span>
<span class="line"><span style="color:#9ECBFF;">if(typeof this !== &#39;function&#39;) {</span></span>
<span class="line"><span style="color:#9ECBFF;">throw new TypeError(&#39;error&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">let self = this</span></span>
<span class="line"><span style="color:#9ECBFF;">return function() {</span></span>
<span class="line"><span style="color:#9ECBFF;">return self.apply(context, arguments)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">function Foo() {</span></span>
<span class="line"><span style="color:#9ECBFF;">this.name = &#39;foo&#39;</span></span>
<span class="line"><span style="color:#9ECBFF;">this.showName = function() {</span></span>
<span class="line"><span style="color:#9ECBFF;">console.log(this.name, arguments)</span></span>
<span class="line"><span style="color:#9ECBFF;">}</span></span>
<span class="line"><span style="color:#9ECBFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">let fn = (new Foo(&#39;foo&#39;)).showName.bind({name: &#39;foooooo&#39;});</span></span>
<span class="line"><span style="color:#9ECBFF;">fn(&#39;aaa&#39;,&#39;bbb&#39;);</span></span>
<span class="line"><span style="color:#9ECBFF;">let fn1 = (new Foo(&#39;foo&#39;)).showName.myBind({name: &#39;foooooo&#39;});</span></span>
<span class="line"><span style="color:#9ECBFF;">fn1(&#39;aaa&#39;,&#39;bbb&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">### </span><span style="color:#B392F0;">箭头函数中任然可以使用call</span><span style="color:#E1E4E8;">()、</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">()、</span><span style="color:#B392F0;">bind</span><span style="color:#E1E4E8;">()方法，但是this值不会被影响。</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span></code></pre></div>`,4)]))}const B=n(o,[["render",e]]);export{F as __pageData,B as default};
