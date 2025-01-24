import { _ as _export_sfc, b as r3, c as it, S as ig } from "./chunks/framework.9c9a3542.js";
const __pageData = JSON.parse('{"title":"属性值计算过程","description":"","frontmatter":{},"headers":[{"level":2,"title":"元素的 css 属性值最终计算的结果所有属性都有值的 其来源","slug":"元素的-css-属性值最终计算的结果所有属性都有值的-其来源","link":"#元素的-css-属性值最终计算的结果所有属性都有值的-其来源","children":[]}],"relativePath":"start-docs/F-CSS/属性计算过程.md","filePath":"start-docs/F-CSS/属性计算过程.md"}');
const _sfc_main = { name: "start-docs/F-CSS/属性计算过程.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return r3(), it("div", null, _cache[0] || (_cache[0] = [
    ig('<h1 id="属性值计算过程" tabindex="-1">属性值计算过程 <a class="header-anchor" href="#属性值计算过程" aria-label="Permalink to &quot;属性值计算过程&quot;">​</a></h1><h2 id="元素的-css-属性值最终计算的结果所有属性都有值的-其来源" tabindex="-1">元素的 css 属性值最终计算的结果所有属性都有值的 其来源 <a class="header-anchor" href="#元素的-css-属性值最终计算的结果所有属性都有值的-其来源" aria-label="Permalink to &quot;元素的 css 属性值最终计算的结果所有属性都有值的 其来源&quot;">​</a></h2><ol><li><p>css 属性值的来源</p><ul><li><strong>初始值 (Initial Value)</strong> 当没有任何其他来源指定时，浏览器会使用 CSS 规范中定义的初始值。每个属性都有一个默认的初始值，确保所有属性在任何情况下都有一个有效的值。</li></ul><ul><li><p><strong>用户代理样式表 (User Agent Style Sheet)</strong></p><p>浏览器自带的默认样式，用于提供基本的网页渲染效果。例如，段落 &lt;p&gt; 标签默认有 margin，标题 &lt;h1&gt; 到 &lt;h6&gt; 有不同的字体大小等。</p></li><li><p><strong>用户样式表 (User Style Sheet)</strong> 用户可以在浏览器中配置自定义样式表，以覆盖或修改用户代理样式。这通常用于满足用户的特定需求，如高对比度模式、大字体模式等。</p></li><li><p><strong>作者样式表</strong> 开发者编写的 CSS 代码， (Author Style Sheet) 是网页样式的主要来源。作者样式表可以分为以下几种： 内联样式 (Inline Styles)：直接写在 HTML 元素的 style 属性中。 内部样式 (Internal Styles)：写在 HTML 文档的 &lt;style&gt; 标签内。 外部样式 (External Styles)：通过 &lt;link&gt; 标签引入的外部 CSS 文件。</p></li><li><p><strong>继承 (Inheritance)</strong></p><p>某些属性会从父元素自动继承到子元素。常见的可继承属性包括 color、font-size、line-height 等。继承使得开发者可以减少重复代码，提高样式的复用性。</p></li><li><p><strong>JavaScript 修改</strong></p><p>通过 JavaScript 动态修改元素的 style 属性或者操作类名等间接方式改变样式。这种方式可以实现交互性和动态效果。 环境变量 (Environment Variables)</p></li><li><p><strong>动画和过渡 (Animations and Transitions)</strong> 动画或过渡过程中计算的中间值。这些值会在动画或过渡期间动态变化，提供平滑的视觉效果。</p></li></ul></li><li><p>css 属性值的计算过程</p><ul><li>确定声明值</li><li>层叠</li><li>继承</li><li>使用默认值</li></ul></li></ol>', 3)
  ]));
}
const ______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ______ as default
};
