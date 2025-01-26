import { _ as _export_sfc, b as r3, c as it, d as iu, P as n9, Q as lS, v as ic, A as nf, R as __vitePreload } from "./chunks/framework.6235ba6c.js";
const ReplLoading_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {};
const _hoisted_1 = { class: "repl-loading" };
function _sfc_render$1(_ctx, _cache) {
  return r3(), it("div", _hoisted_1, _cache[0] || (_cache[0] = [
    iu("div", { class: "lds-ring" }, [
      iu("div"),
      iu("div"),
      iu("div"),
      iu("div")
    ], -1),
    iu("div", null, "正在加载交互式解释器环境...", -1)
  ]));
}
const ReplLoading = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  components: {
    ExampleRepl: n9({
      loader: () => __vitePreload(() => import("./chunks/ExampleRepl.518bce20.js").then((n) => n.f), true ? ["assets/chunks/ExampleRepl.518bce20.js","assets/chunks/framework.6235ba6c.js","assets/chunks/index.45445b9a.js"] : void 0),
      loadingComponent: ReplLoading
    })
  }
};
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page","navbar":false,"sidebar":false,"aside":false,"footer":false,"isRepl":true,"editLink":false,"returnToTop":false},"headers":[],"relativePath":"repl.md","filePath":"repl.md"}');
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ExampleRepl = lS("ExampleRepl");
  const _component_ClientOnly = lS("ClientOnly");
  return r3(), it("div", null, [
    ic(_component_ClientOnly, null, {
      default: nf(() => [
        ic(_component_ExampleRepl)
      ]),
      _: 1
    })
  ]);
}
const repl = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  repl as default
};
