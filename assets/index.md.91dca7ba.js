import { _ as _export_sfc, r as r3, i as it, a as iu, n as nj, b as il, c as nf, d as ic, e as ih, f as ep, t as tO, g as iv, h as r0, l as lT, j as es, k as lx, m as ij, o as tk, p as lf, q as lS, s as np, u as sh, v as ig } from "./chunks/framework.ccd34752.js";
import { u as useConfig, l as load } from "./chunks/config.60a1def5.js";
const _sfc_main$4 = {};
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2",
  width: "20",
  height: "20"
};
function _sfc_render(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    iu("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    }, null, -1),
    iu("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    }, null, -1)
  ]));
}
const Location = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);
const _hoisted_1$2 = { class: "info" };
const _hoisted_2$1 = { class: "region" };
const _hoisted_3$1 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "proficiency" };
const _sfc_main$3 = /* @__PURE__ */ nj({
  __name: "PartnerCard",
  props: {
    data: {},
    hero: { type: Boolean },
    page: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const {
      name,
      intro,
      region,
      logo,
      hero: heroImg,
      proficiencies,
      flipLogo,
      website
    } = props.data;
    return (_ctx, _cache) => {
      return r3(), il(lx(_ctx.page ? "div" : "a"), {
        class: es(["partner-card", { hero: _ctx.hero, page: _ctx.page, flipLogo: tO(flipLogo) }]),
        href: tO(website).url
      }, {
        default: nf(() => [
          iu("div", _hoisted_1$2, [
            iu("p", _hoisted_2$1, [
              ic(Location),
              ih(" " + ep(tO(region).join(", ")), 1)
            ]),
            iu("p", null, ep(tO(intro)), 1),
            _ctx.hero ? (r3(), it("h4", _hoisted_3$1, "Proficiencies")) : iv("", true),
            _ctx.hero ? (r3(), it("p", _hoisted_4, [
              (r3(true), it(r0, null, lT(tO(proficiencies), (p) => {
                return r3(), it("span", _hoisted_5, ep(p), 1);
              }), 256))
            ])) : iv("", true)
          ])
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
});
const PartnerCard_vue_vue_type_style_index_0_scoped_d01d0767_lang = "";
const PartnerCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d01d0767"]]);
const _hoisted_1$1 = { class: "PartnerPage" };
const _hoisted_2 = { class: "featured" };
const _hoisted_3 = { class: "PartnerList" };
const _sfc_main$2 = /* @__PURE__ */ nj({
  __name: "PartnerList",
  props: {
    filter: { type: Function },
    showLinkToAll: { type: Boolean }
  },
  setup(__props) {
    const { config } = useConfig();
    const filtered = ij(
      () => config.value.nav.map((ite) => {
        return {
          ...ite,
          items: ite.items.map((e) => {
            return {
              name: e.text,
              logo: "vehikl.svg",
              flipLogo: true,
              intro: e.text,
              description: "",
              proficiencies: "",
              region: [],
              location: "",
              website: {
                text: "",
                url: e.link
              },
              contact: ""
            };
          })
        };
      })
    );
    const mounted = tk(false);
    lf(() => {
      mounted.value = true;
    });
    return (_ctx, _cache) => {
      const _component_ClientOnly = lS("ClientOnly");
      return r3(), it("div", _hoisted_1$1, [
        (r3(true), it(r0, null, lT(filtered.value, (p1) => {
          return r3(), it("div", _hoisted_2, [
            iu("h2", null, ep(p1.text), 1),
            np(iu("div", _hoisted_3, [
              ic(_component_ClientOnly, null, {
                default: nf(() => [
                  (r3(true), it(r0, null, lT(p1.items, (p) => {
                    return r3(), il(PartnerCard, {
                      key: p.name,
                      data: p
                    }, null, 8, ["data"]);
                  }), 128))
                ]),
                _: 2
              }, 1024)
            ], 512), [
              [sh, mounted.value]
            ])
          ]);
        }), 256))
      ]);
    };
  }
});
const PartnerList_vue_vue_type_style_index_0_scoped_f95c79e0_lang = "";
const PartnerList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f95c79e0"]]);
const _hoisted_1 = { id: "hero" };
const _sfc_main$1 = /* @__PURE__ */ nj({
  __name: "Home",
  setup(__props) {
    lf(load);
    return (_ctx, _cache) => {
      return r3(), it(r0, null, [
        iu("section", _hoisted_1, [
          _cache[0] || (_cache[0] = ig('<h1 class="tagline" data-v-0076e6a0> The <span class="accent" data-v-0076e6a0> blog </span><br data-v-0076e6a0> Is tunaizi&#39;s personal technology blog </h1><p class="description" data-v-0076e6a0></p><p class="actions" data-v-0076e6a0><a class="get-started" href="/start-docs/" data-v-0076e6a0> 全部文档 <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" data-v-0076e6a0><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" data-v-0076e6a0></path></svg></a></p>', 3)),
          ic(PartnerList)
        ]),
        iv("", true)
      ], 64);
    };
  }
});
const Home_vue_vue_type_style_index_0_scoped_0076e6a0_lang = "";
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0076e6a0"]]);
const __pageData = JSON.parse('{"title":"全部文档","description":"","frontmatter":{"page":true,"title":"全部文档","sidebar":false,"icon":"/assets/logo.png"},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const __default__ = { name: "index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return r3(), it("div", null, [
        ic(Home)
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
