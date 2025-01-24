import { _ as _export_sfc, b as r3, c as it, S as ig } from "./chunks/framework.9c9a3542.js";
const __pageData = JSON.parse('{"title":"JS引擎的两种查找方式","description":"","frontmatter":{},"headers":[{"level":2,"title":"参考 《你不知道的JavaScript》(上卷)","slug":"参考-《你不知道的javascript》-上卷","link":"#参考-《你不知道的javascript》-上卷","children":[]}],"relativePath":"start-docs/B-JS/LHS和RHS.md","filePath":"start-docs/B-JS/LHS和RHS.md"}');
const _sfc_main = { name: "start-docs/B-JS/LHS和RHS.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return r3(), it("div", null, _cache[0] || (_cache[0] = [
    ig('<h1 id="js引擎的两种查找方式" tabindex="-1">JS引擎的两种查找方式 <a class="header-anchor" href="#js引擎的两种查找方式" aria-label="Permalink to &quot;JS引擎的两种查找方式&quot;">​</a></h1><ul><li>LHS: 如果查找的目的是对变量进行赋值，那么就会使用LHS查询； <ul><li>如果在顶层（全局作用域）中无法找到目标两边，在非严格模式下，则会在全局作用域中创建一个具有该名称的变量并返回给引擎。 let a = 1</li></ul></li><li>RHS: 如果目的是获取变量的值，就会使用RHS查询 <ul><li>如果在rhs的所有嵌套作用域中无法查询到该变量，引擎则抛出ReferenceError异常。</li><li>console.log(a)</li></ul></li><li>遍历嵌套作用域链的规则：引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都会停止。（查找停止在全局作用域）</li><li>不成功的RHS 抛出ReferenceError</li><li>不成功的LHS 抛出ReferenceError（严格模式）</li><li>b = a既有LHS查询又有RHS查询</li></ul><h2 id="参考-《你不知道的javascript》-上卷" tabindex="-1">参考 《你不知道的JavaScript》(上卷) <a class="header-anchor" href="#参考-《你不知道的javascript》-上卷" aria-label="Permalink to &quot;参考 《你不知道的JavaScript》(上卷)&quot;">​</a></h2>', 3)
  ]));
}
const LHS_RHS = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  LHS_RHS as default
};
