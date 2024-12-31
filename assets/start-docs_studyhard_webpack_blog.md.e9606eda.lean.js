import{_ as l,r as s,i as a,a as n}from"./chunks/framework.8a6edf47.js";const b=JSON.parse('{"title":"webpack","description":"","frontmatter":{},"headers":[{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":2,"title":"loader原理","slug":"loader原理","link":"#loader原理","children":[]},{"level":2,"title":"plugin原理","slug":"plugin原理","link":"#plugin原理","children":[]},{"level":2,"title":"loader和plugin的区别,常用的loader和plugin","slug":"loader和plugin的区别-常用的loader和plugin","link":"#loader和plugin的区别-常用的loader和plugin","children":[]},{"level":2,"title":"tree shaking","slug":"tree-shaking","link":"#tree-shaking","children":[]},{"level":2,"title":"rollup,webpack,closure compiler差异","slug":"rollup-webpack-closure-compiler差异","link":"#rollup-webpack-closure-compiler差异","children":[]},{"level":2,"title":"webpack5","slug":"webpack5","link":"#webpack5","children":[]},{"level":2,"title":"webpack优化","slug":"webpack优化","link":"#webpack优化","children":[{"level":3,"title":"webpack异步加载原理","slug":"webpack异步加载原理","link":"#webpack异步加载原理","children":[]},{"level":3,"title":"插件功能：自动生成README文件，标题取自插件option","slug":"插件功能-自动生成readme文件-标题取自插件option","link":"#插件功能-自动生成readme文件-标题取自插件option","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"start-docs/studyhard/webpack/blog.md","filePath":"start-docs/studyhard/webpack/blog.md"}'),p={name:"start-docs/studyhard/webpack/blog.md"};function i(o,e,c,t,r,u){return s(),a("div",null,e[0]||(e[0]=[n(`<h1 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;webpack&quot;">​</a></h1><ul><li>webpack是一个模块打包器（module bundler）。基于tapable的插架架构，扩展性强，支持众多的loader和plugin。</li><li>webpack只能解析JS文件，所以需要loader来处理各种非js模块。</li><li>常用配置： devtool, entry, output, module,resolve,plugins,externals等。</li></ul><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><ul><li>获取主模块内容</li><li>分析模块，安装@babel/parser包（转ast）</li><li>对模块内容进行处理 <ul><li>安装@babel/traverse包（遍历ast收集依赖）</li><li>安装@babel/core和@babel/preset-env包（es6转es5）</li></ul></li><li>递归所有模块</li><li>生成最终代码</li></ul><h2 id="loader原理" tabindex="-1">loader原理 <a class="header-anchor" href="#loader原理" aria-label="Permalink to &quot;loader原理&quot;">​</a></h2><ul><li>Loader描述了webpack如何处理非js模块（例如css,sass,ts等），并且在build中引入这些依赖。用来做模块转换。</li><li>常见loader: <ul><li>样式：sass-loader,css-loader, css-loader,</li><li>编译：babel-loader,ts-loader,</li><li>文件： file-loader,url-loader，</li><li>校验测试： jshint-loader, eslint-loader</li><li>框架： vue-loader</li></ul></li><li>写一个loader <ul><li>不能用箭头函数，使用this来接受参数 this.query</li><li>替换js文件中所有涵盖“中化石化电子商务有限公司”字样替换成“xx”</li><li>uat-replace-loader<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = function (source) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const result = source.replace(&quot;中化石化&quot;, &quot;xx&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.callback(null, result);</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span></code></pre></div></li><li>在webpack.config.js中引入<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    rules: [{</span></span>
<span class="line"><span style="color:#e1e4e8;">      test: /\\.js$/,</span></span>
<span class="line"><span style="color:#e1e4e8;">      use: [{</span></span>
<span class="line"><span style="color:#e1e4e8;">        loader: &#39;uat-replace-loader&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div></li></ul></li></ul><h2 id="plugin原理" tabindex="-1">plugin原理 <a class="header-anchor" href="#plugin原理" aria-label="Permalink to &quot;plugin原理&quot;">​</a></h2><ul><li>plugin可以扩展webpack的功能，在webpack运行的生命周期中会广播出很多事件，plugin可以监听这些事件，从而扩展功能。例如打包优化、压缩，定义环境，处理各种子任务等功能。 <ul><li>常用plugin: <ul><li>CommonChunkPlugin</li><li>html-webpack-Plugin</li><li>uglifyJsPlugin</li></ul></li><li>写一个plugin插件步骤 <ul><li>编写一个js命名的函数</li><li>在它的原型是定义一个apply方法</li><li>指定挂载的webpack事件钩子</li><li>处理webpack内部实例的特定数据</li><li>功能完成后调用webpack提供的回调<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">// A JavaScript class.</span></span>
<span class="line"><span style="color:#e1e4e8;">  class MyExampleWebpackPlugin {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // Define \`apply\` as its prototype method which is supplied with compiler as its argument</span></span>
<span class="line"><span style="color:#e1e4e8;">    apply(compiler) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      // Specify the event hook to attach to</span></span>
<span class="line"><span style="color:#e1e4e8;">      compiler.hooks.emit.tapAsync(</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;MyExampleWebpackPlugin&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        (compilation, callback) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">          console.log(&#39;This is an example plugin!&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">          console.log(&#39;Here’s the \`compilation\` object which represents a single build of assets:&#39;, compilation);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">          // Manipulate the build using the plugin API provided by webpack</span></span>
<span class="line"><span style="color:#e1e4e8;">          compilation.addModule(/* ... */);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">          callback();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      );</span></span>
<span class="line"><span style="color:#e1e4e8;">      // other</span></span>
<span class="line"><span style="color:#e1e4e8;">      compiler.plugin(&#39;event&#39;, (compilation, callback) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 这种形式就表明这是一个异步事件</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 处理结束后需要调用callback参数，否则流程会被一直卡在这里不会向下运行</span></span>
<span class="line"><span style="color:#e1e4e8;">        callback()</span></span>
<span class="line"><span style="color:#e1e4e8;">      })</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div></li></ul></li><li>编写plugin时，可以访问compiler和compilation,通过钩子webpack执行。</li><li>事件流主要流程： <ul><li>entry-option：初始化options</li><li>run：开始编译</li><li>make：从entry开始递归的分析依赖，对每个依赖模块进行build</li><li>before-resolve - after-resolve： 对其中一个模块位置进行解析</li><li>build-module ：开始构建 (build) 这个module,这里将使用文件对应的loader加载</li><li>normal-module-loader：对用loader加载完成的module(是一段js代码)进行编译,用 acorn 编译,生成ast抽象语法树。</li><li>program： 开始对ast进行遍历，当遇到require等一些调用表达式时，触发 call require 事件的handler执行，收集依赖，并。如：AMDRequireDependenciesBlockParserPlugin等</li><li>seal： 所有依赖build完成，下面将开始对chunk进行优化，比如合并,抽取公共模块,加hash</li><li>optimize-chunk-assets：压缩代码，插件 UglifyJsPlugin 就放在这个阶段</li><li>bootstrap： 生成启动代码</li><li>emit： 把各个chunk输出到结果文件</li></ul></li></ul></li></ul><h2 id="loader和plugin的区别-常用的loader和plugin" tabindex="-1">loader和plugin的区别,常用的loader和plugin <a class="header-anchor" href="#loader和plugin的区别-常用的loader和plugin" aria-label="Permalink to &quot;loader和plugin的区别,常用的loader和plugin&quot;">​</a></h2><ul><li>loader是一个function</li><li>plugin是一个类，类似node中间件,可以贯穿整个生命周期。</li></ul><h2 id="tree-shaking" tabindex="-1">tree shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;tree shaking&quot;">​</a></h2><ul><li>最早是由rollup作者提出，本质是用于消除无用代码，webpack2增加了该功能。</li><li>DCE(Dead code elimination) 去除无用代码，tree shaking是DCE的一种实现方式。传统DCE是消除不可用代码，tree shaking是消除没有用到的代码》</li><li>减少文件加载体积对js意义重大</li><li>DCE特征 <ul><li>代码不会被执行，不可到达</li><li>代码执行的结果不用被用到</li><li>代码只会影响死变量（只写不读）</li></ul></li><li>传统编译器将dead code从ast中删除是通过uglify做到的。</li><li>Tree Shaking <ul><li>依赖于ES6的模块性，es6 module特点： <ul><li>只能作为模块顶层的语句出现</li><li>import的模块名只能是字符串常量</li><li>import binding是immutable(不可变)的</li></ul></li><li>tree shaking的基础：依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，然后消除</li><li>在rollup和webpack2，要用es module synatax才能tree-shaking</li><li>webpack tree shaking实现： <ul><li>把所有的import标记为有使用/无使用两种，在后续压缩式进行处理 <ul><li>统一标记import为/* harmony import*/</li><li>被使用过export标记为/* harmony export([type])*/</li><li>没被使用过的import被标记/* unused harmony export [FuncName]*/ FuncName为export的方法名称</li></ul></li><li>通过uglifyjs（类似其他）工具进行代码精简</li></ul></li></ul></li></ul><h2 id="rollup-webpack-closure-compiler差异" tabindex="-1">rollup,webpack,closure compiler差异 <a class="header-anchor" href="#rollup-webpack-closure-compiler差异" aria-label="Permalink to &quot;rollup,webpack,closure compiler差异&quot;">​</a></h2><ul><li>三大工具的tree-shaking对无用代码消除是有限的，closuer complier是最好的。</li></ul><h2 id="webpack5" tabindex="-1">webpack5 <a class="header-anchor" href="#webpack5" aria-label="Permalink to &quot;webpack5&quot;">​</a></h2><ul><li>通过持久化缓存提高性能</li><li>采用更好的持久化缓存算法和默认行为</li><li>通过优化tree shaking和代码生成来减少bundle体积</li><li>提高web平台的兼容性</li><li>清除之前为了webpack4没有不兼容变更导致的不合理的state</li><li>尝试现在引入重大个更改来为将来的功能做准备，以使我们能够尽可能长时间的使用webpack5</li><li>webpack也可以生成es6的代码</li></ul><h2 id="webpack优化" tabindex="-1">webpack优化 <a class="header-anchor" href="#webpack优化" aria-label="Permalink to &quot;webpack优化&quot;">​</a></h2><ul><li>优化图片，使用url-loader优化，将小图片转成base64<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    rules: [{</span></span>
<span class="line"><span style="color:#e1e4e8;">      test: /\\.(png|svg|jpg|gif)$/,</span></span>
<span class="line"><span style="color:#e1e4e8;">      use: [{</span></span>
<span class="line"><span style="color:#e1e4e8;">        loader: &#39;url-loader&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        options: {</span></span>
<span class="line"><span style="color:#e1e4e8;">          limit: 8192,</span></span>
<span class="line"><span style="color:#e1e4e8;">          outputPath: &#39;img/&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      }]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div></li><li>分离第三方包 将第三方包分离出来（如axios,vue,react,vue-router等）<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">// 使用commonsChunkPlugin插件合并所有第三方包</span></span>
<span class="line"><span style="color:#e1e4e8;">entry: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  vendor: [&#39;babel-polyfill&#39;, &#39;axios&#39;, &#39;react&#39;,...],</span></span>
<span class="line"><span style="color:#e1e4e8;">  app: &#39;./src/main.js‘</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;">plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">  new webpack.optimize.CommonsChunkPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &#39;verdor&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename: &#39;js/vendor.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    minChunks: Infinity</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span>
<span class="line"><span style="color:#e1e4e8;">// 打包时忽略以下文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  externals: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;vue&#39;: &#39;Vue&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;vue-router&#39;: &#39;VueRouter&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;axios&#39;: &#39;axios&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;element-ui&#39;: &#39;ELEMENT&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span></code></pre></div></li><li>分离css文件并压缩css文件</li><li>压缩js文件<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">new UglifyJsPlugin()</span></span></code></pre></div></li><li>压缩Html<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">new HtmlWebpackPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">    template: &#39;./index.html&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    minify: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      collapseWhitespace: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      removeComments: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span></code></pre></div></li></ul><h3 id="webpack异步加载原理" tabindex="-1">webpack异步加载原理 <a class="header-anchor" href="#webpack异步加载原理" aria-label="Permalink to &quot;webpack异步加载原理&quot;">​</a></h3><ul><li><p>首先异步加载的模块，webpack在打包的时候会将独立打包成一个js文件（webpack如何将异步加载的模块独立打包成一个文件）(打包出来的文件开头(window[&quot;webpackJsonp&quot;]=window[&quot;webpackJsonp&quot;]||[]).push()）</p></li><li><p>然后需要加载异步模块的时候：</p></li><li><p>2.1 创建script标签，src为请求该异步模块的url，并添加到document.head里，由浏览器发起请求。</p></li><li><p>2.2 请求成功后，将异步模块添加到全局的__webpack_require__变量(该对象是用来管理全部模块)后</p></li><li><p>2.3 请求异步加载文件的import()编译后的方法会从全局的__webpack_require__变量中找到对应的模块</p></li><li><p>2.4 执行相应的业务代码并删除之前创建的script标签</p></li><li><p>异步加载文件里的import()里的回调方法的执行时机，通过利用promise的机制来实现的</p></li><li><p>webpackJsonp：chunk文件加载后的callback函数，主要将文件中的模块存储到modules对象中，同时标记chunk文件的下载情况，对于入口chunk来说，等所有的模块都放入modules之后，执行入口模块函数。</p></li><li><p><strong>webpack_require</strong>：模块加载函数，加载的策略是：根据moduleid读取，优先读取缓存installedModules，读取失败则读取modules，获取返回值，然后进行缓存。</p></li></ul><h3 id="插件功能-自动生成readme文件-标题取自插件option" tabindex="-1">插件功能：自动生成README文件，标题取自插件option <a class="header-anchor" href="#插件功能-自动生成readme文件-标题取自插件option" aria-label="Permalink to &quot;插件功能：自动生成README文件，标题取自插件option&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">const MY_PLUGIN_NAME = &quot;MyReadMePlugin&quot;;  </span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;"> // 插件功能：自动生成README文件，标题取自插件option  </span></span>
<span class="line"><span style="color:#e1e4e8;"> class MyReadMePlugin {  </span></span>
<span class="line"><span style="color:#e1e4e8;">   </span></span>
<span class="line"><span style="color:#e1e4e8;">   constructor(option) {  </span></span>
<span class="line"><span style="color:#e1e4e8;">     this.option = option || {};  </span></span>
<span class="line"><span style="color:#e1e4e8;">   }  </span></span>
<span class="line"><span style="color:#e1e4e8;">   </span></span>
<span class="line"><span style="color:#e1e4e8;">   apply(compiler) {  </span></span>
<span class="line"><span style="color:#e1e4e8;">     compiler.hooks.emit.tapAsync(  </span></span>
<span class="line"><span style="color:#e1e4e8;">       MY_PLUGIN_NAME,  </span></span>
<span class="line"><span style="color:#e1e4e8;">       (compilation, callback) =&gt; {  </span></span>
<span class="line"><span style="color:#e1e4e8;">         compilation.assets[&quot;README.md&quot;] = {  </span></span>
<span class="line"><span style="color:#e1e4e8;">           // 文件内容  </span></span>
<span class="line"><span style="color:#e1e4e8;">           source: () =&gt; {  </span></span>
<span class="line"><span style="color:#e1e4e8;">             return \`# \${this.option.title || &#39;默认标题&#39;}\`;  </span></span>
<span class="line"><span style="color:#e1e4e8;">           },  </span></span>
<span class="line"><span style="color:#e1e4e8;">           // 文件大小  </span></span>
<span class="line"><span style="color:#e1e4e8;">           size: () =&gt; 30,  </span></span>
<span class="line"><span style="color:#e1e4e8;">         };  </span></span>
<span class="line"><span style="color:#e1e4e8;">         callback();  </span></span>
<span class="line"><span style="color:#e1e4e8;">       }  </span></span>
<span class="line"><span style="color:#e1e4e8;">     );  </span></span>
<span class="line"><span style="color:#e1e4e8;">   }  </span></span>
<span class="line"><span style="color:#e1e4e8;"> }  </span></span>
<span class="line"><span style="color:#e1e4e8;">   </span></span>
<span class="line"><span style="color:#e1e4e8;"> // 7、模块导出  </span></span>
<span class="line"><span style="color:#e1e4e8;"> module.exports = MyReadMePlugin;</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li>[<a href="https://mp.weixin.qq.com/s/2GaTS9_-ErJf15AIAFdoLw" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/2GaTS9_-ErJf15AIAFdoLw</a>]</li><li>[<a href="https://www.cnblogs.com/libin-1/p/6938581.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/libin-1/p/6938581.html</a>]</li></ul>`,24)]))}const h=l(p,[["render",i]]);export{b as __pageData,h as default};
