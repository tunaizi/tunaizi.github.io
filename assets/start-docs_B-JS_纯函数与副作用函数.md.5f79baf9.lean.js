import { _ as _export_sfc, b as r3, c as it, e as iu, P as ih } from "./chunks/framework.9c9a3542.js";
const __pageData = JSON.parse('{"title":"纯函数","description":"","frontmatter":{},"headers":[],"relativePath":"start-docs/B-JS/纯函数与副作用函数.md","filePath":"start-docs/B-JS/纯函数与副作用函数.md"}');
const _sfc_main = { name: "start-docs/B-JS/纯函数与副作用函数.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return r3(), it("div", null, _cache[0] || (_cache[0] = [
    iu("h1", {
      id: "纯函数",
      tabindex: "-1"
    }, [
      ih("纯函数 "),
      iu("a", {
        class: "header-anchor",
        href: "#纯函数",
        "aria-label": 'Permalink to "纯函数"'
      }, "​")
    ], -1),
    iu("ul", null, [
      iu("li", null, "纯函数的返回只依赖于参数，每次执行的结果是固定的"),
      iu("li", null, "不会修改传入的值，每次返回新的值"),
      iu("li", null, "简单理解就是不会一个无情的执行器 给定的参数一致得到的结果一致是固定的 同时不对外部的值进行修改")
    ], -1),
    iu("h1", {
      id: "副作用函数",
      tabindex: "-1"
    }, [
      ih("副作用函数 "),
      iu("a", {
        class: "header-anchor",
        href: "#副作用函数",
        "aria-label": 'Permalink to "副作用函数"'
      }, "​")
    ], -1),
    iu("ul", null, [
      iu("li", null, "函数内会影响参数之外的变化")
    ], -1)
  ]));
}
const _________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _________ as default
};
