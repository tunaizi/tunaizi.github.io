import { _ as _export_sfc, r as r3, i as it, a as iu, w as n9, q as lS, d as ic, c as nf, x as __vitePreload } from "./chunks/framework.ccd34752.js";
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
      loader: () => __vitePreload(() => import("./chunks/ExampleRepl.d769f593.js").then((n) => n.f), true ? ["assets/chunks/ExampleRepl.d769f593.js","assets/chunks/framework.ccd34752.js","assets/chunks/index.416c3585.js"] : void 0),
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
