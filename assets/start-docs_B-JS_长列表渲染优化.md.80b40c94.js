import { _ as _export_sfc, b as r3, c as it, d as iu, O as ih } from "./chunks/framework.6235ba6c.js";
const __pageData = JSON.parse('{"title":"前端长列表渲染优化","description":"","frontmatter":{},"headers":[],"relativePath":"start-docs/B-JS/长列表渲染优化.md","filePath":"start-docs/B-JS/长列表渲染优化.md"}');
const _sfc_main = { name: "start-docs/B-JS/长列表渲染优化.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return r3(), it("div", null, _cache[0] || (_cache[0] = [
    iu("h1", {
      id: "前端长列表渲染优化",
      tabindex: "-1"
    }, [
      ih("前端长列表渲染优化 "),
      iu("a", {
        class: "header-anchor",
        href: "#前端长列表渲染优化",
        "aria-label": 'Permalink to "前端长列表渲染优化"'
      }, "​")
    ], -1),
    iu("ul", null, [
      iu("li", null, "分页加载"),
      iu("li", null, "冻结列表对象，禁止vue的数据响应"),
      iu("li", null, [
        ih("虚拟渲染 列表局部渲染 "),
        iu("ul", null, [
          iu("li", null, "只渲染当前视窗可视数据及前后补全元素，监听滑动事件。")
        ])
      ])
    ], -1)
  ]));
}
const _______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _______ as default
};
