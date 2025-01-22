import { _ as _export_sfc, r as r3, i as it, w as ig } from "./chunks/framework.4a4ad33e.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"es6中箭头函数与普通函数的区别","slug":"es6中箭头函数与普通函数的区别","link":"#es6中箭头函数与普通函数的区别","children":[]}],"relativePath":"start-docs/B-JS/箭头函数与普通函数.md","filePath":"start-docs/B-JS/箭头函数与普通函数.md"}');
const _sfc_main = { name: "start-docs/B-JS/箭头函数与普通函数.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return r3(), it("div", null, _cache[0] || (_cache[0] = [
    ig('<h2 id="es6中箭头函数与普通函数的区别" tabindex="-1">es6中箭头函数与普通函数的区别 <a class="header-anchor" href="#es6中箭头函数与普通函数的区别" aria-label="Permalink to &quot;es6中箭头函数与普通函数的区别&quot;">​</a></h2><ul><li><p>没有this、super、arguments和new.target绑定</p><ul><li>箭头函数中this、super、arguments及new.target这些值由外围最近一层非箭头函数决定</li><li>不能通过new关键字调用 箭头函数没有[[construct]]方法，所以不能被用作构造函数，如果使用new关键字调用，程序会抛出错误。</li><li>没有原型 由于不可以通过new关键字调用箭头函数，因而没有构建原型的需求，所以箭头函数不存在prototype属性</li><li>不可以改变this的绑定 函数内部的this值不可以被改变，在函数的生命周期内始终保持一致。</li><li>不支持arguments对象 箭头函数没有arguments绑定。只能通过命名参数或者不定参数这两种方式来访问函数的参数</li><li>不支持重复的命名参数 传统函数只在严格模式下不接受重复命名的参数，而箭头函数不论严格或者非严格模式，都不支持重复命名参数。</li></ul><div class="language-js codearea-link" id="gzw6ccsvut"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">const</span><span style="color:#F8F8F2;"> </span><span style="color:#A6E22E;">example</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (</span><span style="color:#FD971F;font-style:italic;">a</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">a</span><span style="color:#F8F8F2;">) </span><span style="color:#66D9EF;font-style:italic;">=&gt;</span><span style="color:#F8F8F2;"> {  </span></span>\n<span class="line"><span style="color:#88846F;">// 语法错误！  </span></span>\n<span class="line"><span style="color:#F8F8F2;">};</span></span></code></pre><button class="link">将此代码在线运行</button></div></li></ul>', 2)
  ]));
}
const _________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _________ as default
};
