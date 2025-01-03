import{_ as e,r as n,i as a,a as l}from"./chunks/framework.d927199b.js";const d=JSON.parse('{"title":"Promise/A+","description":"","frontmatter":{},"headers":[{"level":2,"title":"简单实用","slug":"简单实用","link":"#简单实用","children":[]},{"level":2,"title":"手写promise","slug":"手写promise","link":"#手写promise","children":[]},{"level":2,"title":"手写promise.race","slug":"手写promise-race","link":"#手写promise-race","children":[]},{"level":2,"title":"手写promise.all","slug":"手写promise-all","link":"#手写promise-all","children":[{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]}],"relativePath":"start-docs/studyhard/1专题/Promise原理及实现.md","filePath":"start-docs/studyhard/1专题/Promise原理及实现.md"}'),p={name:"start-docs/studyhard/1专题/Promise原理及实现.md"};function o(c,s,r,t,i,y){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="promise-a" tabindex="-1">Promise/A+ <a class="header-anchor" href="#promise-a" aria-label="Permalink to &quot;Promise/A+&quot;">​</a></h1><ul><li>Promise是一种规范，是一套处理JavaScript异步的机制</li><li>ES6遵循Promise/A+规范</li><li>Promise本质只一个状态机,每个promise有三种状态：pending、fulfilled和rejected。状态改变只能从pending -&gt; fulfilled 或者pending -&gt; rejected。不可逆。fulfilled多以resolve来指代。</li><li>then方法必须返回一个新的Promise。可以多次调用。</li><li>值可以穿透。</li><li>Async/Await就是一个自执行的generate函数。利用generate函数的特性把异步的代码写成“同步”的形式。</li></ul><h2 id="简单实用" tabindex="-1">简单实用 <a class="header-anchor" href="#简单实用" aria-label="Permalink to &quot;简单实用&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">let promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;hello promise&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">      resolve(&#39;success&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, 1000)</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">  promise.then(res =&gt; console.log(res)).catch(err =&gt; console.log(err))</span></span></code></pre></div><h2 id="手写promise" tabindex="-1">手写promise <a class="header-anchor" href="#手写promise" aria-label="Permalink to &quot;手写promise&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">const PENDING = &#39;pending&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  const FULFILLED = &#39;fulfilled&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  const REJECTED = &#39;rejected&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  function myPromise(callback) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    var self = this;</span></span>
<span class="line"><span style="color:#e1e4e8;">    //定义初始值 （void 0 返回undefined,防止undefined在老浏览器中被篡改）</span></span>
<span class="line"><span style="color:#e1e4e8;">    self.value = void 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    //定义当前状态机</span></span>
<span class="line"><span style="color:#e1e4e8;">    self.status = PENDING;</span></span>
<span class="line"><span style="color:#e1e4e8;">    //定义成功状态时的回调函数集合</span></span>
<span class="line"><span style="color:#e1e4e8;">    self.onResolvedCallbacks = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">    //定义失败状态时的回调函数集合</span></span>
<span class="line"><span style="color:#e1e4e8;">    self.onRejectedCallbacks = [];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    //定义resolve方法和reject方法</span></span>
<span class="line"><span style="color:#e1e4e8;">    self.resolve = function(value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(value instanceof myPromise) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return value.then(self.resolve, self,reject)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      //将回调任务放在JS引擎的任务队列中</span></span>
<span class="line"><span style="color:#e1e4e8;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 可能有多个回调函数</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(self.status === PENDING) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          self.status = FULFILLED;</span></span>
<span class="line"><span style="color:#e1e4e8;">          self.value = value;</span></span>
<span class="line"><span style="color:#e1e4e8;">          self.onResolvedCallbacks.forEach(cb =&gt; cb(value))</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      })</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    self.reject = function(error) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(self.status === PENDING) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          self.status = REJECTED;</span></span>
<span class="line"><span style="color:#e1e4e8;">          self.value = error;</span></span>
<span class="line"><span style="color:#e1e4e8;">          self.onRejectedCallbacks.forEach(cb =&gt; cb(error))</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      })</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    //执行callback函数，并传递resolve和reject方法</span></span>
<span class="line"><span style="color:#e1e4e8;">    try {</span></span>
<span class="line"><span style="color:#e1e4e8;">      callback(self.resolve, self.reject)</span></span>
<span class="line"><span style="color:#e1e4e8;">    } catch(e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      self.reject(e)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  myPromise.prototype.then = function(onFulfilled, onRejected) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // this.onResolvedCallbacks.push(onFulfilled);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // this.onRejectedCallbacks.push(onRejected);</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    let self = this;</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 规范2.2.1 onFulfilled和onRejected 都是可选参数，并且如果不是函数需要忽略，且值穿透</span></span>
<span class="line"><span style="color:#e1e4e8;">    onFulfilled = typeof onFulfilled === &#39;function&#39; ? onFulfilled : value =&gt; value;</span></span>
<span class="line"><span style="color:#e1e4e8;">    onRejected = typeof onRejected === &#39;function&#39; ? onRejected : error =&gt; { throw error };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return new myPromise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      function handle(callback) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">          const result = callback(self.value)</span></span>
<span class="line"><span style="color:#e1e4e8;">          if(result instanceof myPromise) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            result.then(resolve, reject)</span></span>
<span class="line"><span style="color:#e1e4e8;">          } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            resolve(result)</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (error) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          reject(error)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      if(self.status === PENDING) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.onResolvedCallbacks.push(() =&gt; handle(onFulfilled));</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.onRejectedCallbacks.push(() =&gt; handle(onRejected));</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else if(self.status === FULFILLED) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">          handle(onFulfilled)</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">          handle(onRejected)</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  myPromise.prototype.catch = function(onRejected) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return this.then(null, onRejected)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  myPromise.prototype.finally = function(callback) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return this.then(function(value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return myPromise.resolve(callback()).then(() =&gt; value)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, function(err) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return myPromise.resolve(callback()).then(() =&gt; { throw err })</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  myPromise.resolve = function(value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return new myPromise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(value instanceof myPromise) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        value.then(resolve, reject)</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        resolve(value)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  myPromise.reject = function(error) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return new myPromise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      reject(error)</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div><h2 id="手写promise-race" tabindex="-1">手写promise.race <a class="header-anchor" href="#手写promise-race" aria-label="Permalink to &quot;手写promise.race&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">myPromise.race = function(promises) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return new myPromise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      promises.forEach(promise =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        myPromise.resolve(promise).then(resolve, reject)</span></span>
<span class="line"><span style="color:#e1e4e8;">      })</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div><h2 id="手写promise-all" tabindex="-1">手写promise.all <a class="header-anchor" href="#手写promise-all" aria-label="Permalink to &quot;手写promise.all&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">myPromise.all = function(promises) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    //成功的数据集合</span></span>
<span class="line"><span style="color:#e1e4e8;">    const resolveValues = new Array(promises.length);</span></span>
<span class="line"><span style="color:#e1e4e8;">    let resolveCount = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    return new myPromise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      promises.forEach((promise, index) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        myPromise.resolve(promise).then(value =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">          resolveValues[index] = value;</span></span>
<span class="line"><span style="color:#e1e4e8;">          resolveCount++;</span></span>
<span class="line"><span style="color:#e1e4e8;">          if(resolveCount === resolveValues.length) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            resolve(resolveValues)</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }).catch(err =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">          reject(err)</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;">      })</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><ul><li>[<a href="https://www.ituring.com.cn/article/66566" target="_blank" rel="noreferrer">https://www.ituring.com.cn/article/66566</a>]</li><li>[<a href="https://github.com/sisterAn/blog/issues/13" target="_blank" rel="noreferrer">https://github.com/sisterAn/blog/issues/13</a>]</li><li>[<a href="https://blog.csdn.net/cc_together/article/details/105454045" target="_blank" rel="noreferrer">https://blog.csdn.net/cc_together/article/details/105454045</a>] 最优</li></ul>`,12)]))}const m=e(p,[["render",o]]);export{d as __pageData,m as default};
