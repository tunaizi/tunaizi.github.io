import { n as nj, U as useData, t as tk, j as lf, i as ij, b as r3, c as it, e as iu, J as np, a1 as s0, d as r0, l as lT, p as ep, s as iv, q as tO, T as withBase, _ as _export_sfc, w as ic } from "./chunks/framework.9c9a3542.js";
const _hoisted_1 = { id: "api-index" };
const _hoisted_2 = { class: "header" };
const _hoisted_3 = { class: "api-filter" };
const _hoisted_4 = ["id"];
const _hoisted_5 = ["href"];
const _hoisted_6 = { class: "api-groups" };
const _hoisted_7 = ["href"];
const _hoisted_8 = ["href"];
const _hoisted_9 = {
  key: 0,
  class: "no-match"
};
const _sfc_main$1 = /* @__PURE__ */ nj({
  __name: "start-docs-index",
  setup(__props) {
    const { theme } = useData();
    const search = tk();
    const query = tk("");
    const normalize = (s) => s.toLowerCase().replace(/-/g, " ");
    lf(() => {
      var _a;
      (_a = search.value) == null ? void 0 : _a.focus();
    });
    const filtered = ij(() => {
      const q = normalize(query.value);
      const matches = (text) => normalize(text).includes(q);
      const list = theme.value.sidebar.filter(
        (e) => e.items.length
      );
      return list.map((section) => {
        if (matches(section.text)) {
          return section;
        }
        const matchedGroups = (section.items || []).map((item) => {
          if (matches(item.text)) {
            return item;
          }
          const matchedHeaders = (item.headers || []).filter(
            ({ text, anchor }) => matches(text) || matches(anchor || "")
          );
          return matchedHeaders.length ? {
            text: item.text,
            link: (item.link || "").replace(".md", ""),
            headers: matchedHeaders
          } : null;
        }).filter((i) => i);
        return matchedGroups.length ? { text: section.text, items: matchedGroups } : null;
      }).filter((i) => i);
    });
    return (_ctx, _cache) => {
      return r3(), it("div", _hoisted_1, [
        iu("div", _hoisted_2, [
          _cache[2] || (_cache[2] = iu("h1", null, "全部文档", -1)),
          iu("div", _hoisted_3, [
            _cache[1] || (_cache[1] = iu("label", { for: "api-filter" }, "过滤", -1)),
            np(iu("input", {
              ref_key: "search",
              ref: search,
              type: "search",
              placeholder: "Enter keyword",
              id: "api-filter",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value = $event)
            }, null, 512), [
              [s0, query.value]
            ])
          ])
        ]),
        (r3(true), it(r0, null, lT(filtered.value, (section) => {
          return r3(), it("div", {
            key: section.text,
            class: "api-section"
          }, [
            iu("h2", {
              id: section.anchor
            }, [
              iu("a", {
                href: tO(withBase)(section.link || "") + ".html"
              }, ep(section.text), 9, _hoisted_5)
            ], 8, _hoisted_4),
            iu("div", _hoisted_6, [
              (r3(true), it(r0, null, lT(section.items, (item) => {
                return r3(), it("div", {
                  key: item.text,
                  class: "api-group"
                }, [
                  iu("a", {
                    href: tO(withBase)(item.link || "") + ".html"
                  }, [
                    iu("h3", null, ep(item.text), 1)
                  ], 8, _hoisted_7),
                  iu("ul", null, [
                    (r3(true), it(r0, null, lT(item.headers, (h) => {
                      return r3(), it("li", {
                        key: h.anchor
                      }, [
                        iu("a", {
                          href: tO(withBase)(item.link || "") + ".html#" + h.anchor
                        }, ep(h.text), 9, _hoisted_8)
                      ]);
                    }), 128))
                  ])
                ]);
              }), 128))
            ])
          ]);
        }), 128)),
        !filtered.value.length ? (r3(), it("div", _hoisted_9, ' 没有匹配到 API "' + ep(query.value) + '" ', 1)) : iv("", true)
      ]);
    };
  }
});
const startDocsIndex_vue_vue_type_style_index_0_scoped_944c1596_lang = "";
const StartDocsIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-944c1596"]]);
const __pageData = JSON.parse('{"title":"全部文章","description":"","frontmatter":{"title":"全部文章","sidebar":false,"page":true,"footer":false},"headers":[],"relativePath":"start-docs/index.md","filePath":"start-docs/index.md"}');
const __default__ = { name: "start-docs/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return r3(), it("div", null, [
        ic(StartDocsIndex)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
