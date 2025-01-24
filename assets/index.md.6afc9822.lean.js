var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { t as tk, i as ij, n as nj, r as rt, a as rM, _ as _export_sfc, b as r3, c as it, d as r0, l as lT, e as iu, f as lR, g as en, h as rn, j as lf, k as lg, m as il, o as nf, p as ep, q as tO, s as iv, u as es, v as lx, w as ic, x as ik, y as lh, z as t9, A as isString, B as nx, N as NOOP, C as iB, D as rN, E as isFunction$1, F as tw, G as e_, H as lW, I as i7, J as np, K as ib, L as lA, M as sh, O as lS, P as ih } from "./chunks/framework.9c9a3542.js";
import { u as useConfig, i as isNumber$1, E as EVENT_CODE, a as isNil, _ as _export_sfc$1, b as buildProps, d as definePropType, w as withInstall, c as useNamespace, e as iconPropType, f as addUnit, g as useLocale, h as ElIcon, C as CloseComponents, U as UPDATE_MODEL_EVENT, j as isBoolean, t as throwError, k as hasClass$2, l as getStyle, m as addClass$2, r as removeClass$1, n as useId, o as defaultNamespace, p as useDeprecated, q as load } from "./chunks/base.30cf62ac.js";
import { u as useResizeObserver, a as useDebounceFn, i as isClient, b as useTimeoutFn } from "./chunks/index.e92831bb.js";
const getItemWidth = ({ breakpoints, wrapperWidth, gutter, hasAroundGutter, initWidth }) => {
  const sizeList = Object.keys(breakpoints).map((key) => {
    return Number(key);
  }).sort((a2, b) => a2 - b);
  let validSize = wrapperWidth;
  let breakpoint = false;
  for (const size of sizeList) {
    if (wrapperWidth <= size) {
      validSize = size;
      breakpoint = true;
      break;
    }
  }
  if (!breakpoint)
    return initWidth;
  const col = breakpoints[validSize].rowPerView;
  if (hasAroundGutter)
    return (wrapperWidth - gutter) / col - gutter;
  else
    return (wrapperWidth - (col - 1) * gutter) / col;
};
function useCalculateCols(props) {
  const wrapperWidth = tk(0);
  const waterfallWrapper = tk(null);
  useResizeObserver(waterfallWrapper, (entries) => {
    const entry = entries[0];
    const { width } = entry.contentRect;
    wrapperWidth.value = width;
  });
  const colWidth = ij(() => {
    return getItemWidth({
      wrapperWidth: wrapperWidth.value,
      breakpoints: props.breakpoints,
      gutter: props.gutter,
      hasAroundGutter: props.hasAroundGutter,
      initWidth: props.width
    });
  });
  const cols = ij(() => {
    const offset = props.hasAroundGutter ? -props.gutter : props.gutter;
    return Math.round((wrapperWidth.value + offset) / (colWidth.value + props.gutter));
  });
  const offsetX = ij(() => {
    if (props.align === "left") {
      return 0;
    } else if (props.align === "center") {
      const offset = props.hasAroundGutter ? props.gutter : -props.gutter;
      const contextWidth = cols.value * (colWidth.value + props.gutter) + offset;
      return (wrapperWidth.value - contextWidth) / 2;
    } else {
      const offset = props.hasAroundGutter ? props.gutter : -props.gutter;
      const contextWidth = cols.value * (colWidth.value + props.gutter) + offset;
      return wrapperWidth.value - contextWidth;
    }
  });
  return {
    waterfallWrapper,
    wrapperWidth,
    colWidth,
    cols,
    offsetX
  };
}
function hasClass$1(el, className) {
  const reg = new RegExp(`(^|\\s)${className}(\\s|$)`);
  return reg.test(el.className);
}
function addClass$1(el, className) {
  if (hasClass$1(el, className))
    return;
  const newClass = el.className.split(/\s+/);
  newClass.push(className);
  el.className = newClass.join(" ");
}
const elementStyle = (() => {
  if (typeof document === "undefined")
    return {};
  return document.createElement("div").style;
})();
const vendor = (() => {
  const transformNames = {
    standard: "transform",
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform"
  };
  for (const key in transformNames) {
    const val = transformNames[key];
    if (elementStyle[val] !== void 0)
      return key;
  }
  return false;
})();
function prefixStyle(style) {
  if (vendor === false)
    return false;
  if (vendor === "standard")
    return style;
  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}
const transform$2 = prefixStyle("transform");
const duration$1 = prefixStyle("animation-duration");
const delay = prefixStyle("animation-delay");
const transition = prefixStyle("transition");
const fillMode = prefixStyle("animation-fill-mode");
function useLayout(props, colWidth, cols, offsetX, waterfallWrapper) {
  const posY = tk([]);
  const wrapperHeight = tk(0);
  const getX = (index) => {
    const count = props.hasAroundGutter ? index + 1 : index;
    return props.gutter * count + colWidth.value * index + offsetX.value;
  };
  const initY = () => {
    posY.value = new Array(cols.value).fill(props.hasAroundGutter ? props.gutter : 0);
  };
  const animation = addAnimation(props);
  const layoutHandle = async () => {
    return new Promise((resolve) => {
      initY();
      const items = [];
      if (waterfallWrapper && waterfallWrapper.value) {
        waterfallWrapper.value.childNodes.forEach((el) => {
          if (el.className === "waterfall-item")
            items.push(el);
        });
      }
      if (items.length === 0)
        return false;
      for (let i = 0; i < items.length; i++) {
        const curItem = items[i];
        const minY = Math.min.apply(null, posY.value);
        const minYIndex = posY.value.indexOf(minY);
        const curX = getX(minYIndex);
        const style = curItem.style;
        if (transform$2)
          style[transform$2] = `translate3d(${curX}px,${minY}px, 0)`;
        style.width = `${colWidth.value}px`;
        style.visibility = "visible";
        const { height } = curItem.getBoundingClientRect();
        posY.value[minYIndex] += height + props.gutter;
        animation(curItem, () => {
          const time2 = props.posDuration / 1e3;
          if (transition)
            style[transition] = `transform ${time2}s`;
        });
      }
      wrapperHeight.value = Math.max.apply(null, posY.value);
      setTimeout(() => {
        resolve(true);
      }, props.posDuration);
    });
  };
  return {
    wrapperHeight,
    layoutHandle
  };
}
function addAnimation(props) {
  return (item, callback) => {
    const content = item.firstChild;
    if (content && !hasClass$1(content, props.animationPrefix)) {
      const durationSec = `${props.animationDuration / 1e3}s`;
      const delaySec = `${props.animationDelay / 1e3}s`;
      const style = content.style;
      addClass$1(content, props.animationPrefix);
      addClass$1(content, props.animationEffect);
      if (duration$1)
        style[duration$1] = durationSec;
      if (delay)
        style[delay] = delaySec;
      if (fillMode)
        style[fillMode] = "both";
      if (callback) {
        setTimeout(() => {
          callback();
        }, props.animationDuration + props.animationDelay);
      }
    }
  };
}
const inBrowser = typeof window !== "undefined" && window !== null;
const hasIntersectionObserver = checkIntersectionObserver();
const isEnumerable = Object.prototype.propertyIsEnumerable;
const getSymbols = Object.getOwnPropertySymbols;
function getValue(form, ...selectors) {
  const res = selectors.map((s) => {
    return s.replace(/\[(\w+)\]/g, ".$1").split(".").reduce((prev, cur) => {
      return prev && prev[cur];
    }, form);
  });
  return res;
}
function checkIntersectionObserver() {
  if (inBrowser && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get() {
          return this.intersectionRatio > 0;
        }
      });
    }
    return true;
  }
  return false;
}
function isObject$1(val) {
  return typeof val === "function" || toString.call(val) === "[object Object]";
}
function isPrimitive(val) {
  return typeof val === "object" ? val === null : typeof val !== "function";
}
function isValidKey(key) {
  return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
function assignSymbols(target, ...args) {
  if (!isObject$1(target))
    throw new TypeError("expected the first argument to be an object");
  if (args.length === 0 || typeof Symbol !== "function" || typeof getSymbols !== "function")
    return target;
  for (const arg of args) {
    const names = getSymbols(arg);
    for (const key of names) {
      if (isEnumerable.call(arg, key))
        target[key] = arg[key];
    }
  }
  return target;
}
function assign$1(target, ...args) {
  let i = 0;
  if (isPrimitive(target))
    target = args[i++];
  if (!target)
    target = {};
  for (; i < args.length; i++) {
    if (isObject$1(args[i])) {
      for (const key of Object.keys(args[i])) {
        if (isValidKey(key)) {
          if (isObject$1(target[key]) && isObject$1(args[i][key]))
            assign$1(target[key], args[i][key]);
          else
            target[key] = args[i][key];
        }
      }
      assignSymbols(target, args[i]);
    }
  }
  return target;
}
function loadImage(url, crossOrigin) {
  return new Promise((resolve, reject) => {
    const image2 = new Image();
    image2.onload = () => {
      resolve(image2);
    };
    image2.onerror = () => {
      reject(new Error("Image load error"));
    };
    if (crossOrigin)
      image2.crossOrigin = "Anonymous";
    image2.src = url;
  });
}
const DEFAULT_OBSERVER_OPTIONS = {
  rootMargin: "0px",
  threshold: 0
};
const DEFAULT_LOADING = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const DEFAULT_ERROR = "";
class Lazy {
  constructor(flag = true, options, crossOrigin = true) {
    __publicField(this, "lazyActive", true);
    // 是否开启懒加载
    __publicField(this, "crossOrigin", true);
    // 开启跨域
    __publicField(this, "options", {
      loading: DEFAULT_LOADING,
      error: DEFAULT_ERROR,
      observerOptions: DEFAULT_OBSERVER_OPTIONS,
      log: true,
      ratioCalculator: (width, height) => height / width
    });
    __publicField(this, "_images", /* @__PURE__ */ new WeakMap());
    this.lazyActive = flag;
    this.crossOrigin = crossOrigin;
    this.config(options);
  }
  config(options = {}) {
    assign$1(this.options, options);
    options.ratioCalculator && (this.options.ratioCalculator = options.ratioCalculator);
  }
  // mount
  mount(el, binding, callback) {
    const { src, loading: loading2, error: error2 } = this._valueFormatter(binding);
    el.setAttribute(
      "lazy",
      "loading"
      /* LOADING */
    );
    el.setAttribute("src", loading2 || DEFAULT_LOADING);
    if (!this.lazyActive) {
      this._setImageSrc(el, src, callback, error2);
    } else {
      if (!hasIntersectionObserver) {
        this._setImageSrc(el, src, callback, error2);
        this._log(() => {
          throw new Error("Not support IntersectionObserver!");
        });
      }
      this._initIntersectionObserver(el, src, callback, error2);
    }
  }
  // resize
  resize(el, callback) {
    const lazy = el.getAttribute("lazy");
    const src = el.getAttribute("src");
    if (lazy && lazy === "loaded" && src) {
      loadImage(src, this.crossOrigin).then((image2) => {
        const { width, height } = image2;
        const curHeight = el.width / width * height;
        el.height = curHeight;
        const style = el.style;
        style.height = `${curHeight}px`;
        callback();
      });
    }
  }
  // unmount
  unmount(el) {
    const imgItem = this._realObserver(el);
    imgItem && imgItem.unobserve(el);
    this._images.delete(el);
  }
  /**
   * 设置img的src
   * @param {*} el - img
   * @param {*} src - 原图
   * @param {*} error - 错误图片
   * @param {*} callback - 完成的回调函数，通知组件刷新布局
   * @returns
   */
  _setImageSrc(el, src, callback, error2) {
    if (!src)
      return;
    const preSrc = el.getAttribute("src");
    if (preSrc === src)
      return;
    loadImage(src, this.crossOrigin).then((image2) => {
      var _a, _b;
      const { width, height } = image2;
      const ratio = ((_b = (_a = this.options).ratioCalculator) == null ? void 0 : _b.call(_a, width, height)) || height / width;
      const lazyBox = el.parentNode.parentNode;
      lazyBox.style.paddingBottom = `${ratio * 100}%`;
      el.setAttribute(
        "lazy",
        "loaded"
        /* LOADED */
      );
      el.removeAttribute("src");
      el.setAttribute("src", src);
      callback(true);
    }).catch(() => {
      const imgItem = this._realObserver(el);
      imgItem && imgItem.disconnect();
      if (error2) {
        el.setAttribute(
          "lazy",
          "error"
          /* ERROR */
        );
        el.setAttribute("src", error2);
        callback(false);
      }
      this._log(() => {
        throw new Error(`Image failed to load!And failed src was: ${src} `);
      });
    });
  }
  _isOpenLazy() {
    return hasIntersectionObserver && this.lazyActive;
  }
  /**
   * 添加img和对应的observer到weakMap中
   * 开启监听
   * 当出现在可视区域后取消监听
   * @param {*} el - img
   * @param {*} src - 图片
   * @param {*} error - 错误图片
   * @param {*} callback - 完成的回调函数，通知组件刷新布局
   */
  _initIntersectionObserver(el, src, callback, error2) {
    const observerOptions = this.options.observerOptions;
    this._images.set(
      el,
      new IntersectionObserver((entries) => {
        Array.prototype.forEach.call(entries, (entry) => {
          if (entry.isIntersecting) {
            const imgItem2 = this._realObserver(el);
            imgItem2 && imgItem2.unobserve(entry.target);
            this._setImageSrc(el, src, callback, error2);
          }
        });
      }, observerOptions)
    );
    const imgItem = this._realObserver(el);
    imgItem && imgItem.observe(el);
  }
  // 格式化参数
  _valueFormatter(value) {
    let src = value;
    let loading2 = this.options.loading;
    let error2 = this.options.error;
    if (isObject$1(value)) {
      src = value.src;
      loading2 = value.loading || this.options.loading;
      error2 = value.error || this.options.error;
    }
    return {
      src,
      loading: loading2,
      error: error2
    };
  }
  // 日志
  _log(callback) {
    if (this.options.log)
      callback();
  }
  // 在map中获取对应img的observer事件
  _realObserver(el) {
    return this._images.get(el);
  }
}
const _sfc_main$9 = nj({
  props: {
    list: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: String,
      default: "id"
    },
    imgSelector: {
      type: String,
      default: "src"
    },
    width: {
      type: Number,
      default: 200
    },
    breakpoints: {
      type: Object,
      default: () => ({
        1200: {
          // when wrapper width < 1200
          rowPerView: 3
        },
        800: {
          // when wrapper width < 800
          rowPerView: 2
        },
        500: {
          // when wrapper width < 500
          rowPerView: 1
        }
      })
    },
    gutter: {
      type: Number,
      default: 10
    },
    hasAroundGutter: {
      type: Boolean,
      default: true
    },
    posDuration: {
      type: Number,
      default: 300
    },
    animationPrefix: {
      type: String,
      default: "animate__animated"
    },
    animationEffect: {
      type: String,
      default: "fadeIn"
    },
    animationDuration: {
      type: Number,
      default: 1e3
    },
    animationDelay: {
      type: Number,
      default: 300
    },
    // backgroundColor: {
    //   type: String,
    //   default: ''
    // },
    lazyload: {
      type: Boolean,
      default: true
    },
    loadProps: {
      type: Object,
      default: () => {
      }
    },
    crossOrigin: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 300
    },
    align: {
      type: String,
      default: "center"
    }
  },
  setup(props, ctx) {
    const lazy = new Lazy(
      props.lazyload,
      props.loadProps,
      props.crossOrigin
    );
    rt("lazy", lazy);
    const { waterfallWrapper, wrapperWidth, colWidth, cols, offsetX } = useCalculateCols(props);
    const { wrapperHeight, layoutHandle } = useLayout(
      props,
      colWidth,
      cols,
      offsetX,
      waterfallWrapper
    );
    const renderer = useDebounceFn(() => {
      layoutHandle().then(() => {
        ctx.emit("afterRender");
      });
    }, props.delay);
    rM(
      () => [wrapperWidth, colWidth, props.list],
      () => {
        if (wrapperWidth.value > 0)
          renderer();
      },
      { deep: true }
    );
    const sizeChangeTime = tk(0);
    rt("sizeChangeTime", sizeChangeTime);
    rt("imgLoaded", renderer);
    const getRenderURL = (item) => {
      console.log(item, "=====");
      return getValue(item, props.imgSelector)[0];
    };
    const getKey = (item, index) => {
      return String(item[props.rowKey] || index);
    };
    return {
      waterfallWrapper,
      wrapperHeight,
      getRenderURL,
      getKey,
      renderer
    };
  }
});
const List_vue_vue_type_style_index_0_scoped_22576678_lang = "";
const _hoisted_1$3 = { class: "waterfall-card" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return r3(), it("div", {
    ref: "waterfallWrapper",
    class: "waterfall-list",
    style: en({ height: `${_ctx.wrapperHeight}px` })
  }, [
    (r3(true), it(r0, null, lT(_ctx.list, (item, index) => {
      return r3(), it("div", {
        key: _ctx.getKey(item, index),
        class: "waterfall-item"
      }, [
        iu("div", _hoisted_1$3, [
          lR(_ctx.$slots, "item", {
            item,
            index,
            url: _ctx.getRenderURL(item)
          }, void 0, true)
        ])
      ]);
    }), 128))
  ], 4);
}
const WaterfallList = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$1], ["__scopeId", "data-v-22576678"]]);
nj({
  props: {
    url: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    }
  },
  setup(props, ctx) {
    const imgLoaded = rn("imgLoaded");
    const lazy = rn("lazy");
    const lazyRef = tk(null);
    lf(() => {
      render3();
    });
    lg(() => {
      unRender();
    });
    function render3() {
      if (!lazyRef.value)
        return;
      lazy.mount(lazyRef.value, props.url, (status) => {
        imgLoaded();
        if (status)
          ctx.emit("success", props.url);
        else
          ctx.emit("error", props.url);
      });
    }
    function unRender() {
      if (!lazyRef.value)
        return;
      lazy.unmount(lazyRef.value);
    }
    function imageLoad() {
      ctx.emit("load", props.url);
    }
    return {
      lazyRef,
      imageLoad
    };
  }
});
const LazyImg_vue_vue_type_style_index_0_scoped_5f457918_lang = "";
const _hoisted_1$2 = { class: "info" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3 = { class: "proficiency" };
const _hoisted_4 = ["href"];
const _sfc_main$8 = /* @__PURE__ */ nj({
  __name: "Card",
  props: {
    data: {},
    hero: { type: Boolean },
    page: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { text, link, anchor, activeMatch, items, headers, collapsed } = props.data;
    console.log(props.data, "=========");
    return (_ctx, _cache) => {
      return r3(), il(lx(_ctx.page ? "div" : "a"), {
        class: es(["partner-card", { hero: _ctx.hero, page: _ctx.page }]),
        href: tO(link)
      }, {
        default: nf(() => {
          var _a;
          return [
            iu("div", _hoisted_1$2, [
              iu("h4", null, ep(tO(text)), 1),
              ((_a = tO(headers)) == null ? void 0 : _a.length) ? (r3(), it("p", _hoisted_2$1, [
                (r3(true), it(r0, null, lT(tO(headers), (p) => {
                  return r3(), it("span", _hoisted_3, [
                    iu("a", {
                      href: tO(link) + "#" + p.anchor
                    }, ep(p.text), 9, _hoisted_4)
                  ]);
                }), 256))
              ])) : iv("", true)
            ])
          ];
        }),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
});
const Card_vue_vue_type_style_index_0_scoped_e7dd5c39_lang = "";
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-e7dd5c39"]]);
const loading = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABNBJREFUaEPtmV1oXEUUx//n3g1JRGqL9k1RsFq/6IMgSky8c2YTQyONiojWYumTQrWKSNH6oO1TS1EQFcTiQwsaK4qIbVdod+/M3Y0IteJDwVr1oVYFEfFFwUY2c2TCbrhZNptNduvuQgf2Ze85M+c359w5Z84l9PigHrcflwCqHrTWsoiUmLn8f3q1bR4wxggRlZxz00EQlCowf19smLYAxHF8NxFNA/gUgAKwGsApD5GC+eNiwLQL4GUi2gNgDIA31ENEKZhzIvK5h5mZmZkeHx//uV0wbQEwxpQADDPzgvny+fyNYRhO1MB42w9674RhWIqi6IdWYFoGMMbcBuA0ER1RSk3GcbyViB4HcBTAMWb+0RtYKpXWlMvlSSKaFBFdCTP/yIrIRxWY08uFaQfAswAeAPAaMx81xhwmojVpQ0TkSxH5QGt9tvp/kiQTzrlJAOsroeYfnXPOHQrD8JhS6qtmYFoGaGaRRjKFQuF6IhononsB+N9gSv4ggENKqYSIpN48cwCFQmF3EARPt2rMcvWZ+ao4ju/TWh+r6hpjRkVkYwXIh+d8qvEw/f39Hw4NDf1T/TMN8AqA/HKNWKk8EWmlVFjZvG0iUiSiIjO/W52zWCyuLZfLm4hoE4DxlHfmQi2bze6uBbih+tKt1LBm9Ky17wN4NAXgN29uiMi/HsS/2FrrA+n5isXi7bOzsx5mdyaTWT8yMvJ9XQC/K80YshIZv2uNAOrM+bWIHKjCWGuPi8g9zDzgZesC+LJgJcYtpeOc27MCAD/taWbeYIy5i4gKzjnvnW29BLCLmfcZY54H8GoQBONRFB3vGYByuXzt2NjYeWPMJwAeTGf8rg8hIvpTKXVlHMe3AogBnNFa+1prbnQ9gIi8rbXeHsfxE0T0DhE9qZSaP526HgDACDNPW2sPicjWvr6+VcPDw3/1jAd8vJ84ceKKTCbjj1NordelT7tu98BRZt5krd0sIlNEtFcp9VLPAIjIFq31lDHmLQBPBUGwIYqiBSV3xz1gjPFlRN3MXz0ujTHf+LKbmS+rTZZdC0BEJ5VSdxYKBR0EQYGIppRSW3oGAEA1++4F8KK/ySmljvQMQDX7Wmt9ZeqP0rqXr24NoZ+Y+TpjzDoiOuvvCszM9YrFbgV4nZmfi+N4JxHtJ6JnlFJv9hLAXPY1xuQAbASwlpnrNsY67oHKlXL+RgbgAjMP5nK5/oGBgd+DIPhNKeU7F3VHxwFq80Cl/fKYMeYRAIdFZL/W+oWeAQDwMDN/7PtLADzEHcx8qmcAUtn3FxFZrbW+vNFVteMhFMexj+/7faKqxP9okiRDzrkvALzHzL5NuejoOEDasiRJJqMo+sxau19EdgZB8FAURf4auTyARgrteJZuq9SbzxhzBsBNi2XfJcvpdhjZaI5GAEmSXOOcO09EsVIqu5QtHe/M1Rpord0hIm8A2MHM/h7QcHQjQMF/P3DOXZ3NZn/teoBKJr4AYLpSPviu4HfMfPNSxvvnCzzgnNvejFKrMmEYDi/S3LWVjx37mHlXM+vUhlAzOm2RISLnu9N+slwut2pwcHCCiCZExH+5mchmsyebWWgOwBgz3+lqRqldMszsd3zByOfzt4yOjn7b7Bod/8TUrKGLyV0CaHUHW9X/D9N93V6azvezAAAAAElFTkSuQmCC";
const error = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABbFJREFUaEPtWV1sFFUUPufOLmjpD7G0nXtm11igD0Q0CpqImsiDEcGoIVEReeBBNGgkEQSjwUR4MQZ/MBr/MeFFFIkxYAR9MGr84cFijBJ9UFPD7r3TqtWWLsVuO3PM3ew20+3uzizTxpDsTSa7e+ec75zvnPtz7l2E87zhee4/NAj83xlsZKCRgZgRaAyhmAGMrV4zA5lM5sJEItGcz+dbhBDN5gGAZkRsQcTCd/Mwc0vpu+k3v5l5yHGcDUEPtdY7AeAsIp4t/5yYmCj0myefz//LzGfNY/p7enrGqjGtSEAp9ZgQYgsz07mGiJk3OY7zVklfKbULEZ88FzxE1L7vv+Q4ztPl+tMIZLPZFUKIb87FUFBHCLHQtu2+Up/WmuNi+r5/bSqVOh7EmUZAa70VAJ6PYwwRJ6SUyRKG67odzPxHHMyi7jYi2luTgOu6O5h5T1xjiLhDSvlsIAOfAcDKOLiI+KiU8pmwDGwGgFfjGCrqDhLRgkAWHmTml2PiPkBEr4URuAcA3o5pqKR+PxG9aX7M0DDaQEQHahJQSt2KiEdmiMA7RGQCUmha61jDiJlvcxznw7A5cAMzfz4TBHzfvzGVSn1qsDKZzErLsgyBac0skwBwwvf9HCKuBoD5VeRWSim/CMvAMkQ8MQME+ohoYZToE9HkapjNZq9AxFcQcUW5D8y83HGc72oSyGQyiy3L+qUeAsx8yMgj4p0BvZ1E9FRY9Jl5t+M4u4L2tNaPA0BBN9g8z+tJp9O/1iTQ39/f6fv+QB0ExoQQS4aGhv5qa2s7zsyXGl0hRJdt24W1P2TsbyWiF4L2lFL3IuK+ch+CmKV30zYyU/9YljVaB4EDRFSoeUrj3CwCUsrbw6JftPE9EV1ZloFhAGitkIGmdDpt6qjJVrEWcl03z8yTO2kImTuI6P2STDabfUQIsYqIbjJ91aJZhjkCANuZeSkArEbExeU2EXFcSjlnWn8l55RSg4h4UVgWELHPtu1FiDilzlFKmaxsNEa11ksA4KcwrLD3zPy34zjtkQhorU0RdkkYqJloRGRK5ClNKXUxIposFDax8kIOEfczcxsArI1goyTyOxF1RyKglPoBES+LAH4VEVVccrXWa4nogyKBXgBYXnR8DxH9XOz/EgCuj2AHmPlHx3Euj0RAa/0VAFwXAvw1EdU03tfXN7+7u3tIa73X87zD6XR6ygaZzWavEUJMKY9r2Kxor9okPsrMZkes1TYT0etRoldLxnXdF5l5SxgOIh6TUq6JlAGl1EFEvKsWqO/7C1Kp1GCY4bD3zDzHdd2TANBTS5aZ33McZ10kAlprM/k2VQNExENSypoEwxwPvndddyMz7w/R2UdE90UlYE5k5mRWsVWqCutxuJKs1tqUyetr4Owlom2RCLiuu4uZqx3A/yGi0D2iXkKnTp1amkgkTKVZERsRd0spp9RMxkbFSVzcTSePg2XOFNbjwcFBs9W35vP5Vs/z2oQQrYjY6vt+4dOs86ZI01o/AQA5Zs5ZljUyMTGRE0KMmN/JZHJkdHQ019TUNNLZ2ZmrVTP5vr89lUo9FykDWmsz1t6oN4pBeSHE+vHx8cN11lW1TE6e7oJCFTPQ39+/zvf9d+MQYOZlxc2rsBvHbUKIu23bPhgpA67rrmHmj2IY/bNYihiMWDcRJR8Q8RYp5dFIBAYGBhZ5njfl4FAvGSnlBUqph4QQ1eZSXZCWZS3u6ur6LRIBI6S1/hgAVkW0wsx8GhFPA8AIIuYA4OTw8PDDLS0txxBxXukutXiPOi8ibknsEyK6uZJO1ctds8qMjY2Zc+nVAFBwzjjJzCOJRCKXz+fPJJNJ46h5zti2fSaqU729vcmOjo5my7LmBS6MDSlzcdzseV7w8vjbuXPnHm9vbzfBmdYa/w9EjfpsyTUyMFuRjYrbyEDUSM2WXCMDsxXZqLjnfQb+A8eWU0/QfZYsAAAAAElFTkSuQmCC";
const _hoisted_1$1 = { class: "featured" };
const _sfc_main$7 = /* @__PURE__ */ nj({
  __name: "index",
  props: {
    data: {},
    config: { default: () => ({}) },
    crossOrigin: {},
    delay: {},
    imgSelector: {},
    loadProps: {},
    lazyload: {},
    maxHeight: { default: "calc(100vh - 140px)" },
    noMore: { type: Boolean, default: false }
  },
  setup(__props) {
    const vitepressConfig = useConfig();
    const data = ij(() => {
      return ((vitepressConfig == null ? void 0 : vitepressConfig.config.value.nav) || []).reduce(
        //@ts-ignore
        (p, e2) => p = p.concat(e2.items),
        []
      );
    });
    const props = __props;
    const config = ij(() => {
      return Object.assign(
        {
          // 唯一key值
          rowKey: "id",
          // 卡片之间的间隙
          gutter: 10,
          // 是否有周围的gutter
          hasAroundGutter: true,
          // 卡片在PC上的宽度
          width: 300,
          // 自定义行显示个数，主要用于对移动端的适配
          breakpoints: {
            1920: {
              rowPerView: 5
            },
            1e3: {
              // 当屏幕宽度小于等于1200
              rowPerView: 4
            },
            800: {
              // 当屏幕宽度小于等于800
              rowPerView: 3
            },
            500: {
              // 当屏幕宽度小于等于500
              rowPerView: 2
            }
          },
          // 动画效果
          animationEffect: "animate__fadeInUp",
          // 动画时间
          animationDuration: 1e3,
          // 动画延迟
          animationDelay: 0,
          // 布局刷新的防抖时间。！注意：此处设置为0将会出现视图更新问题
          delay: 50,
          // 背景色
          backgroundColor: "#fff",
          // imgSelector
          imgSelector: "url",
          // 加载配置
          loadProps: {
            loading,
            error
          },
          // 是否懒加载
          lazyload: true
        },
        props.config
      );
    });
    return (_ctx, _cache) => {
      return r3(), it("div", _hoisted_1$1, [
        ic(WaterfallList, {
          list: data.value,
          "row-key": config.value.rowKey,
          gutter: config.value.gutter,
          "has-around-gutter": config.value.hasAroundGutter,
          width: config.value.width,
          breakpoints: config.value.breakpoints,
          "img-selector": config.value.imgSelector,
          "animation-effect": config.value.animationEffect,
          "animation-duration": config.value.animationDuration,
          "animation-delay": config.value.animationDelay,
          lazyload: config.value.lazyload,
          "load-props": config.value.loadProps,
          "cross-origin": config.value.crossOrigin,
          delay: config.value.delay
        }, {
          item: nf(({ item }) => [
            ic(Card, { data: item }, null, 8, ["data"])
          ]),
          _: 1
        }, 8, ["list", "row-key", "gutter", "has-around-gutter", "width", "breakpoints", "img-selector", "animation-effect", "animation-duration", "animation-delay", "lazyload", "load-props", "cross-origin", "delay"])
      ]);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_b6f2da90_lang = "";
const Waterfall = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-b6f2da90"]]);
const configProviderContextKey = Symbol();
function isUndefined$1(value) {
  return value === void 0;
}
const initial = {
  current: 0
};
const zIndex$1 = tk(0);
const defaultInitialZIndex = 2e3;
const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
const zIndexContextKey = Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const increasingInjection = ik() ? rn(ZINDEX_INJECTION_KEY, initial) : initial;
  const zIndexInjection = zIndexOverrides || (ik() ? rn(zIndexContextKey, void 0) : void 0);
  const initialZIndex = ij(() => {
    const zIndexFromInjection = tO(zIndexInjection);
    return isNumber$1(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = ij(() => initialZIndex.value + zIndex$1.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex$1.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (!isClient && !rn(ZINDEX_INJECTION_KEY))
    ;
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
const globalConfig = tk();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = ik() ? rn(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return ij(() => {
      var _a, _b;
      return (_b = (_a = config.value) == null ? void 0 : _a[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
let scrollBarWidth;
const getScrollBarWidth = (namespace) => {
  var _a;
  if (!isClient)
    return 0;
  if (scrollBarWidth !== void 0)
    return scrollBarWidth;
  const outer = document.createElement("div");
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a = outer.parentNode) == null ? void 0 : _a.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const focusReason = tk();
const lastUserFocusTimestamp = tk(0);
const lastAutomatedFocusTimestamp = tk(0);
let focusReasonUserCount = 0;
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = window.performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};
function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) {
    copy.splice(idx, 1);
  }
  return copy;
}
const createFocusableStack = () => {
  let stack = [];
  const push = (layer) => {
    const currentLayer = stack[0];
    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }
    stack = removeFromStack(stack, layer);
    stack.unshift(layer);
  };
  const remove = (layer) => {
    var _a, _b;
    stack = removeFromStack(stack, layer);
    (_b = (_a = stack[0]) == null ? void 0 : _a.resume) == null ? void 0 : _b.call(_a);
  };
  return {
    push,
    remove
  };
};
const focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement)
      return;
  }
};
const focusableStack = createFocusableStack();
const isFocusCausedByUserEvent = () => {
  return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
};
const notifyFocusReasonPointer = () => {
  focusReason.value = "pointer";
  lastUserFocusTimestamp.value = window.performance.now();
};
const notifyFocusReasonKeydown = () => {
  focusReason.value = "keyboard";
  lastUserFocusTimestamp.value = window.performance.now();
};
const useFocusReason = () => {
  lf(() => {
    if (focusReasonUserCount === 0) {
      document.addEventListener("mousedown", notifyFocusReasonPointer);
      document.addEventListener("touchstart", notifyFocusReasonPointer);
      document.addEventListener("keydown", notifyFocusReasonKeydown);
    }
    focusReasonUserCount++;
  });
  lh(() => {
    focusReasonUserCount--;
    if (focusReasonUserCount <= 0) {
      document.removeEventListener("mousedown", notifyFocusReasonPointer);
      document.removeEventListener("touchstart", notifyFocusReasonPointer);
      document.removeEventListener("keydown", notifyFocusReasonKeydown);
    }
  });
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};
let registeredEscapeHandlers = [];
const cachedHandler = (event) => {
  if (event.code === EVENT_CODE.esc) {
    registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
  }
};
const useEscapeKeydown = (handler) => {
  lf(() => {
    if (registeredEscapeHandlers.length === 0) {
      document.addEventListener("keydown", cachedHandler);
    }
    if (isClient)
      registeredEscapeHandlers.push(handler);
  });
  lh(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
    if (registeredEscapeHandlers.length === 0) {
      if (isClient)
        document.removeEventListener("keydown", cachedHandler);
    }
  });
};
const _sfc_main$6 = nj({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = tk();
    let lastFocusBeforeTrapped;
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) {
        emit("release-requested", event);
      }
    });
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e2) => {
      if (!props.loop && !props.trapped)
        return;
      if (focusLayer.paused)
        return;
      const { code, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e2;
      const { loop } = props;
      const isTabbing = code === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e2.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e2.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e2.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    rt(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    rM(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    rM([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const trapOnFocus = (e2) => {
      emit(ON_TRAP_FOCUS_EVT, e2);
    };
    const releaseOnFocus = (e2) => emit(ON_RELEASE_FOCUS_EVT, e2);
    const onFocusIn = (e2) => {
      const trapContainer = tO(forwardRef);
      if (!trapContainer)
        return;
      const target = e2.target;
      const relatedTarget = e2.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        const isPrevFocusedInTrap = relatedTarget && trapContainer.contains(relatedTarget);
        if (!isPrevFocusedInTrap) {
          lastFocusBeforeTrapped = relatedTarget;
        }
      }
      if (isFocusedInTrap)
        emit("focusin", e2);
      if (focusLayer.paused)
        return;
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e2) => {
      const trapContainer = tO(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e2.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (!focusLayer.paused && props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason2.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e2.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e2);
      }
    };
    async function startTrap() {
      await t9();
      const trapContainer = tO(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
        lastFocusBeforeTrapped = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
          trapContainer.dispatchEvent(focusEvent);
          if (!focusEvent.defaultPrevented) {
            t9(() => {
              let focusStartEl = props.focusStartEl;
              if (!isString(focusStartEl)) {
                tryFocus(focusStartEl);
                if (document.activeElement !== focusStartEl) {
                  focusStartEl = "first";
                }
              }
              if (focusStartEl === "first") {
                focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
              }
              if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                tryFocus(trapContainer);
              }
            });
          }
        }
      }
    }
    function stopTrap() {
      const trapContainer = tO(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
          ...FOCUS_AFTER_TRAPPED_OPTS,
          detail: {
            focusReason: focusReason2.value
          }
        });
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);
        if (!releasedEvent.defaultPrevented && (focusReason2.value == "keyboard" || !isFocusCausedByUserEvent() || trapContainer.contains(document.activeElement))) {
          tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body);
        }
        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        focusableStack.remove(focusLayer);
      }
    }
    lf(() => {
      if (props.trapped) {
        startTrap();
      }
      rM(() => props.trapped, (trapped) => {
        if (trapped) {
          startTrap();
        } else {
          stopTrap();
        }
      });
    });
    lh(() => {
      if (props.trapped) {
        stopTrap();
      }
      if (forwardRef.value) {
        forwardRef.value.removeEventListener("keydown", onKeydown);
        forwardRef.value.removeEventListener("focusin", onFocusIn);
        forwardRef.value.removeEventListener("focusout", onFocusOut);
        forwardRef.value = void 0;
      }
    });
    return {
      onKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return lR(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render], ["__file", "focus-trap.vue"]]);
const teleportProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    required: true
  },
  disabled: Boolean
});
const _sfc_main$5 = /* @__PURE__ */ nj({
  __name: "teleport",
  props: teleportProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.disabled ? lR(_ctx.$slots, "default", { key: 0 }) : (r3(), il(nx, {
        key: 1,
        to: _ctx.to
      }, [
        lR(_ctx.$slots, "default")
      ], 8, ["to"]));
    };
  }
});
var Teleport = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__file", "teleport.vue"]]);
const ElTeleport = withInstall(Teleport);
var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e2) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e2);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e2) => {
    mousedownTarget = e2.target === e2.currentTarget;
  };
  const onMouseup = (e2) => {
    mouseupTarget = e2.target === e2.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const BLOCK = "overlay";
var Overlay = nj({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = useNamespace(BLOCK);
    const onMaskClick = (e2) => {
      emit("click", e2);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(props.customMaskEvent ? void 0 : onMaskClick);
    return () => {
      return props.mask ? ic("div", {
        class: [ns.b(), props.overlayClass],
        style: {
          zIndex: props.zIndex
        },
        onClick,
        onMousedown,
        onMouseup
      }, [lR(slots, "default")], PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS, ["onClick", "onMouseup", "onMousedown"]) : iB("div", {
        class: props.overlayClass,
        style: {
          zIndex: props.zIndex,
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }, [lR(slots, "default")]);
    };
  }
});
const ElOverlay = Overlay;
const dialogInjectionKey = Symbol("dialogInjectionKey");
const dialogContentProps = buildProps({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: iconPropType
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const dialogContentEmits = {
  close: () => true
};
const useDraggable = (targetRef, dragRef, draggable, overflow2) => {
  let transform2 = {
    offsetX: 0,
    offsetY: 0
  };
  const onMousedown = (e2) => {
    const downX = e2.clientX;
    const downY = e2.clientY;
    const { offsetX, offsetY } = transform2;
    const targetRect = targetRef.value.getBoundingClientRect();
    const targetLeft = targetRect.left;
    const targetTop = targetRect.top;
    const targetWidth = targetRect.width;
    const targetHeight = targetRect.height;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    const minLeft = -targetLeft + offsetX;
    const minTop = -targetTop + offsetY;
    const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
    const maxTop = clientHeight - targetTop - targetHeight + offsetY;
    const onMousemove = (e22) => {
      let moveX = offsetX + e22.clientX - downX;
      let moveY = offsetY + e22.clientY - downY;
      if (!(overflow2 == null ? void 0 : overflow2.value)) {
        moveX = Math.min(Math.max(moveX, minLeft), maxLeft);
        moveY = Math.min(Math.max(moveY, minTop), maxTop);
      }
      transform2 = {
        offsetX: moveX,
        offsetY: moveY
      };
      if (targetRef.value) {
        targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(moveY)})`;
      }
    };
    const onMouseup = () => {
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mouseup", onMouseup);
    };
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);
  };
  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener("mousedown", onMousedown);
    }
  };
  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener("mousedown", onMousedown);
    }
  };
  const resetPosition = () => {
    transform2 = {
      offsetX: 0,
      offsetY: 0
    };
    if (targetRef.value) {
      targetRef.value.style.transform = "none";
    }
  };
  lf(() => {
    rN(() => {
      if (draggable.value) {
        onDraggable();
      } else {
        offDraggable();
      }
    });
  });
  lh(() => {
    offDraggable();
  });
  return {
    resetPosition
  };
};
const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref) => {
      if (isFunction$1(ref)) {
        ref(el);
      } else {
        ref.value = el;
      }
    });
  };
};
const __default__$2 = nj({ name: "ElDialogContent" });
const _sfc_main$4 = /* @__PURE__ */ nj({
  ...__default__$2,
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { t } = useLocale();
    const { Close } = CloseComponents;
    const { dialogRef, headerRef, bodyId, ns, style } = rn(dialogInjectionKey);
    const { focusTrapRef } = rn(FOCUS_TRAP_INJECTION_KEY);
    const dialogKls = ij(() => [
      ns.b(),
      ns.is("fullscreen", props.fullscreen),
      ns.is("draggable", props.draggable),
      ns.is("align-center", props.alignCenter),
      { [ns.m("center")]: props.center }
    ]);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    const draggable = ij(() => props.draggable);
    const overflow2 = ij(() => props.overflow);
    const { resetPosition } = useDraggable(dialogRef, headerRef, draggable, overflow2);
    expose({
      resetPosition
    });
    return (_ctx, _cache) => {
      return r3(), it("div", {
        ref: tO(composedDialogRef),
        class: es(tO(dialogKls)),
        style: en(tO(style)),
        tabindex: "-1"
      }, [
        iu("header", {
          ref_key: "headerRef",
          ref: headerRef,
          class: es([tO(ns).e("header"), { "show-close": _ctx.showClose }])
        }, [
          lR(_ctx.$slots, "header", {}, () => [
            iu("span", {
              role: "heading",
              "aria-level": _ctx.ariaLevel,
              class: es(tO(ns).e("title"))
            }, ep(_ctx.title), 11, ["aria-level"])
          ]),
          _ctx.showClose ? (r3(), it("button", {
            key: 0,
            "aria-label": tO(t)("el.dialog.close"),
            class: es(tO(ns).e("headerbtn")),
            type: "button",
            onClick: ($event) => _ctx.$emit("close")
          }, [
            ic(tO(ElIcon), {
              class: es(tO(ns).e("close"))
            }, {
              default: nf(() => [
                (r3(), il(lx(_ctx.closeIcon || tO(Close))))
              ]),
              _: 1
            }, 8, ["class"])
          ], 10, ["aria-label", "onClick"])) : iv("v-if", true)
        ], 2),
        iu("div", {
          id: tO(bodyId),
          class: es(tO(ns).e("body"))
        }, [
          lR(_ctx.$slots, "default")
        ], 10, ["id"]),
        _ctx.$slots.footer ? (r3(), it("footer", {
          key: 0,
          class: es(tO(ns).e("footer"))
        }, [
          lR(_ctx.$slots, "footer")
        ], 2)) : iv("v-if", true)
      ], 6);
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__file", "dialog-content.vue"]]);
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: Boolean,
  appendTo: {
    type: definePropType([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const useLockscreen = (trigger, options = {}) => {
  if (!tw(trigger)) {
    throwError("[useLockscreen]", "You need to pass a ref param to this function");
  }
  const ns = options.ns || useNamespace("popup");
  const hiddenCls = ij(() => ns.bm("parent", "hidden"));
  if (!isClient || hasClass$2(document.body, hiddenCls.value)) {
    return;
  }
  let scrollBarWidth2 = 0;
  let withoutHiddenClass = false;
  let bodyWidth = "0";
  const cleanup = () => {
    setTimeout(() => {
      if (typeof document === "undefined")
        return;
      removeClass$1(document == null ? void 0 : document.body, hiddenCls.value);
      if (withoutHiddenClass && document) {
        document.body.style.width = bodyWidth;
      }
    }, 200);
  };
  rM(trigger, (val) => {
    if (!val) {
      cleanup();
      return;
    }
    withoutHiddenClass = !hasClass$2(document.body, hiddenCls.value);
    if (withoutHiddenClass) {
      bodyWidth = document.body.style.width;
    }
    scrollBarWidth2 = getScrollBarWidth(ns.namespace.value);
    const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
    const bodyOverflowY = getStyle(document.body, "overflowY");
    if (scrollBarWidth2 > 0 && (bodyHasOverflow || bodyOverflowY === "scroll") && withoutHiddenClass) {
      document.body.style.width = `calc(100% - ${scrollBarWidth2}px)`;
    }
    addClass$2(document.body, hiddenCls.value);
  });
  e_(() => cleanup());
};
const useDialog = (props, targetRef) => {
  var _a;
  const instance = ik();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = tk(false);
  const closed = tk(false);
  const rendered = tk(false);
  const zIndex2 = tk((_a = props.zIndex) != null ? _a : nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const namespace = useGlobalConfig("namespace", defaultNamespace);
  const style = ij(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = addUnit(props.width);
      }
    }
    return style2;
  });
  const overlayDialogStyle = ij(() => {
    if (props.alignCenter) {
      return { display: "flex" };
    }
    return {};
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a2;
    if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  rM(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      zIndex2.value = isUndefined$1(props.zIndex) ? nextZIndex() : zIndex2.value++;
      t9(() => {
        emit("open");
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  rM(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  lf(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex: zIndex2
  };
};
const __default__$1 = nj({
  name: "ElDialog",
  inheritAttrs: false
});
const _sfc_main$3 = /* @__PURE__ */ nj({
  ...__default__$1,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const slots = lW();
    useDeprecated({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, ij(() => !!slots.title));
    const ns = useNamespace("dialog");
    const dialogRef = tk();
    const headerRef = tk();
    const dialogContentRef = tk();
    const {
      visible,
      titleId,
      bodyId,
      style,
      overlayDialogStyle,
      rendered,
      zIndex: zIndex2,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onCloseRequested,
      onFocusoutPrevented
    } = useDialog(props, dialogRef);
    rt(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    const draggable = ij(() => props.draggable && !props.fullscreen);
    const resetPosition = () => {
      var _a;
      (_a = dialogContentRef.value) == null ? void 0 : _a.resetPosition();
    };
    expose({
      visible,
      dialogContentRef,
      resetPosition
    });
    return (_ctx, _cache) => {
      return r3(), il(tO(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: nf(() => [
          ic(i7, {
            name: "dialog-fade",
            onAfterEnter: tO(afterEnter),
            onAfterLeave: tO(afterLeave),
            onBeforeLeave: tO(beforeLeave),
            persisted: ""
          }, {
            default: nf(() => [
              np(ic(tO(ElOverlay), {
                "custom-mask-event": "",
                mask: _ctx.modal,
                "overlay-class": _ctx.modalClass,
                "z-index": tO(zIndex2)
              }, {
                default: nf(() => [
                  iu("div", {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": _ctx.title || void 0,
                    "aria-labelledby": !_ctx.title ? tO(titleId) : void 0,
                    "aria-describedby": tO(bodyId),
                    class: es(`${tO(ns).namespace.value}-overlay-dialog`),
                    style: en(tO(overlayDialogStyle)),
                    onClick: tO(overlayEvent).onClick,
                    onMousedown: tO(overlayEvent).onMousedown,
                    onMouseup: tO(overlayEvent).onMouseup
                  }, [
                    ic(tO(ElFocusTrap), {
                      loop: "",
                      trapped: tO(visible),
                      "focus-start-el": "container",
                      onFocusAfterTrapped: tO(onOpenAutoFocus),
                      onFocusAfterReleased: tO(onCloseAutoFocus),
                      onFocusoutPrevented: tO(onFocusoutPrevented),
                      onReleaseRequested: tO(onCloseRequested)
                    }, {
                      default: nf(() => [
                        tO(rendered) ? (r3(), il(ElDialogContent, ib({
                          key: 0,
                          ref_key: "dialogContentRef",
                          ref: dialogContentRef
                        }, _ctx.$attrs, {
                          center: _ctx.center,
                          "align-center": _ctx.alignCenter,
                          "close-icon": _ctx.closeIcon,
                          draggable: tO(draggable),
                          overflow: _ctx.overflow,
                          fullscreen: _ctx.fullscreen,
                          "show-close": _ctx.showClose,
                          title: _ctx.title,
                          "aria-level": _ctx.headerAriaLevel,
                          onClose: tO(handleClose)
                        }), lA({
                          header: nf(() => [
                            !_ctx.$slots.title ? lR(_ctx.$slots, "header", {
                              key: 0,
                              close: tO(handleClose),
                              titleId: tO(titleId),
                              titleClass: tO(ns).e("title")
                            }) : lR(_ctx.$slots, "title", { key: 1 })
                          ]),
                          default: nf(() => [
                            lR(_ctx.$slots, "default")
                          ]),
                          _: 2
                        }, [
                          _ctx.$slots.footer ? {
                            name: "footer",
                            fn: nf(() => [
                              lR(_ctx.$slots, "footer")
                            ])
                          } : void 0
                        ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : iv("v-if", true)
                      ]),
                      _: 3
                    }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                  ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
                ]),
                _: 3
              }, 8, ["mask", "overlay-class", "z-index"]), [
                [sh, tO(visible)]
              ])
            ]),
            _: 3
          }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__file", "dialog.vue"]]);
const ElDialog = withInstall(Dialog);
const elDialog = "";
const elOverlay = "";
const elButton = "";
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f2, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e2) {
        op = [6, e2];
        y = 0;
      } finally {
        f2 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var Bounds = (
  /** @class */
  function() {
    function Bounds2(left, top, width, height) {
      this.left = left;
      this.top = top;
      this.width = width;
      this.height = height;
    }
    Bounds2.prototype.add = function(x, y, w, h) {
      return new Bounds2(this.left + x, this.top + y, this.width + w, this.height + h);
    };
    Bounds2.fromClientRect = function(context, clientRect) {
      return new Bounds2(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
    };
    Bounds2.fromDOMRectList = function(context, domRectList) {
      var domRect = Array.from(domRectList).find(function(rect) {
        return rect.width !== 0;
      });
      return domRect ? new Bounds2(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height) : Bounds2.EMPTY;
    };
    Bounds2.EMPTY = new Bounds2(0, 0, 0, 0);
    return Bounds2;
  }()
);
var parseBounds = function(context, node) {
  return Bounds.fromClientRect(context, node.getBoundingClientRect());
};
var toCodePoints$1 = function(str) {
  var codePoints = [];
  var i = 0;
  var length = str.length;
  while (i < length) {
    var value = str.charCodeAt(i++);
    if (value >= 55296 && value <= 56319 && i < length) {
      var extra = str.charCodeAt(i++);
      if ((extra & 64512) === 56320) {
        codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        codePoints.push(value);
        i--;
      }
    } else {
      codePoints.push(value);
    }
  }
  return codePoints;
};
var fromCodePoint$1 = function() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  if (String.fromCodePoint) {
    return String.fromCodePoint.apply(String, codePoints);
  }
  var length = codePoints.length;
  if (!length) {
    return "";
  }
  var codeUnits = [];
  var index = -1;
  var result = "";
  while (++index < length) {
    var codePoint = codePoints[index];
    if (codePoint <= 65535) {
      codeUnits.push(codePoint);
    } else {
      codePoint -= 65536;
      codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
    }
    if (index + 1 === length || codeUnits.length > 16384) {
      result += String.fromCharCode.apply(String, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
};
var chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$2 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
  lookup$2[chars$2.charCodeAt(i$2)] = i$2;
}
var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$1$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
  lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
}
var decode$1 = function(base642) {
  var bufferLength = base642.length * 0.75, len = base642.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base642[base642.length - 1] === "=") {
    bufferLength--;
    if (base642[base642.length - 2] === "=") {
      bufferLength--;
    }
  }
  var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
  var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup$1$1[base642.charCodeAt(i)];
    encoded2 = lookup$1$1[base642.charCodeAt(i + 1)];
    encoded3 = lookup$1$1[base642.charCodeAt(i + 2)];
    encoded4 = lookup$1$1[base642.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return buffer;
};
var polyUint16Array$1 = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 2) {
    bytes.push(buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var polyUint32Array$1 = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 4) {
    bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var UTRIE2_SHIFT_2$1 = 5;
var UTRIE2_SHIFT_1$1 = 6 + 5;
var UTRIE2_INDEX_SHIFT$1 = 2;
var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 65536 >> UTRIE2_SHIFT_2$1;
var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 1024 >> UTRIE2_SHIFT_2$1;
var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 2048 >> 6;
var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 65536 >> UTRIE2_SHIFT_1$1;
var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
var slice16$1 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint16Array(Array.prototype.slice.call(view, start, end));
};
var slice32$1 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint32Array(Array.prototype.slice.call(view, start, end));
};
var createTrieFromBase64$1 = function(base642, _byteLength) {
  var buffer = decode$1(base642);
  var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
  var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
  var headerLength = 24;
  var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
  var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
  return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie$1 = (
  /** @class */
  function() {
    function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
      this.initialValue = initialValue;
      this.errorValue = errorValue;
      this.highStart = highStart;
      this.highValueIndex = highValueIndex;
      this.index = index;
      this.data = data;
    }
    Trie2.prototype.get = function(codePoint) {
      var ix;
      if (codePoint >= 0) {
        if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
          ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }
        if (codePoint <= 65535) {
          ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 55296 >> UTRIE2_SHIFT_2$1)];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }
        if (codePoint < this.highStart) {
          ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
          ix = this.index[ix];
          ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
          ix = this.index[ix];
          ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
          return this.data[ix];
        }
        if (codePoint <= 1114111) {
          return this.data[this.highValueIndex];
        }
      }
      return this.errorValue;
    };
    return Trie2;
  }()
);
var chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$3 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
  lookup$3[chars$3.charCodeAt(i$3)] = i$3;
}
var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==";
var LETTER_NUMBER_MODIFIER = 50;
var BK = 1;
var CR$1 = 2;
var LF$1 = 3;
var CM = 4;
var NL = 5;
var WJ = 7;
var ZW = 8;
var GL = 9;
var SP = 10;
var ZWJ$1 = 11;
var B2 = 12;
var BA = 13;
var BB = 14;
var HY = 15;
var CB = 16;
var CL = 17;
var CP = 18;
var EX = 19;
var IN = 20;
var NS = 21;
var OP = 22;
var QU = 23;
var IS = 24;
var NU = 25;
var PO = 26;
var PR = 27;
var SY = 28;
var AI = 29;
var AL = 30;
var CJ = 31;
var EB = 32;
var EM = 33;
var H2 = 34;
var H3 = 35;
var HL = 36;
var ID = 37;
var JL = 38;
var JV = 39;
var JT = 40;
var RI$1 = 41;
var SA = 42;
var XX = 43;
var ea_OP = [9001, 65288];
var BREAK_MANDATORY = "!";
var BREAK_NOT_ALLOWED$1 = "×";
var BREAK_ALLOWED$1 = "÷";
var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
var SPACE$1 = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];
var codePointsToCharacterClasses = function(codePoints, lineBreak2) {
  if (lineBreak2 === void 0) {
    lineBreak2 = "strict";
  }
  var types = [];
  var indices = [];
  var categories = [];
  codePoints.forEach(function(codePoint, index) {
    var classType = UnicodeTrie$1.get(codePoint);
    if (classType > LETTER_NUMBER_MODIFIER) {
      categories.push(true);
      classType -= LETTER_NUMBER_MODIFIER;
    } else {
      categories.push(false);
    }
    if (["normal", "auto", "loose"].indexOf(lineBreak2) !== -1) {
      if ([8208, 8211, 12316, 12448].indexOf(codePoint) !== -1) {
        indices.push(index);
        return types.push(CB);
      }
    }
    if (classType === CM || classType === ZWJ$1) {
      if (index === 0) {
        indices.push(index);
        return types.push(AL);
      }
      var prev = types[index - 1];
      if (LINE_BREAKS.indexOf(prev) === -1) {
        indices.push(indices[index - 1]);
        return types.push(prev);
      }
      indices.push(index);
      return types.push(AL);
    }
    indices.push(index);
    if (classType === CJ) {
      return types.push(lineBreak2 === "strict" ? NS : ID);
    }
    if (classType === SA) {
      return types.push(AL);
    }
    if (classType === AI) {
      return types.push(AL);
    }
    if (classType === XX) {
      if (codePoint >= 131072 && codePoint <= 196605 || codePoint >= 196608 && codePoint <= 262141) {
        return types.push(ID);
      } else {
        return types.push(AL);
      }
    }
    types.push(classType);
  });
  return [indices, types, categories];
};
var isAdjacentWithSpaceIgnored = function(a2, b, currentIndex, classTypes) {
  var current = classTypes[currentIndex];
  if (Array.isArray(a2) ? a2.indexOf(current) !== -1 : a2 === current) {
    var i = currentIndex;
    while (i <= classTypes.length) {
      i++;
      var next = classTypes[i];
      if (next === b) {
        return true;
      }
      if (next !== SP) {
        break;
      }
    }
  }
  if (current === SP) {
    var i = currentIndex;
    while (i > 0) {
      i--;
      var prev = classTypes[i];
      if (Array.isArray(a2) ? a2.indexOf(prev) !== -1 : a2 === prev) {
        var n = currentIndex;
        while (n <= classTypes.length) {
          n++;
          var next = classTypes[n];
          if (next === b) {
            return true;
          }
          if (next !== SP) {
            break;
          }
        }
      }
      if (prev !== SP) {
        break;
      }
    }
  }
  return false;
};
var previousNonSpaceClassType = function(currentIndex, classTypes) {
  var i = currentIndex;
  while (i >= 0) {
    var type = classTypes[i];
    if (type === SP) {
      i--;
    } else {
      return type;
    }
  }
  return 0;
};
var _lineBreakAtIndex = function(codePoints, classTypes, indicies, index, forbiddenBreaks) {
  if (indicies[index] === 0) {
    return BREAK_NOT_ALLOWED$1;
  }
  var currentIndex = index - 1;
  if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
    return BREAK_NOT_ALLOWED$1;
  }
  var beforeIndex = currentIndex - 1;
  var afterIndex = currentIndex + 1;
  var current = classTypes[currentIndex];
  var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
  var next = classTypes[afterIndex];
  if (current === CR$1 && next === LF$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
    return BREAK_MANDATORY;
  }
  if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (SPACE$1.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
    return BREAK_ALLOWED$1;
  }
  if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === WJ || next === WJ) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === GL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === SP) {
    return BREAK_ALLOWED$1;
  }
  if (current === QU || next === QU) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (next === CB || current === CB) {
    return BREAK_ALLOWED$1;
  }
  if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (before === HL && HYPHEN.indexOf(current) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === SY && next === HL) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (next === IN) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU || // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1
  ) {
    return BREAK_NOT_ALLOWED$1;
  }
  if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
    var prevIndex = currentIndex;
    while (prevIndex >= 0) {
      var type = classTypes[prevIndex];
      if (type === NU) {
        return BREAK_NOT_ALLOWED$1;
      } else if ([SY, IS].indexOf(type) !== -1) {
        prevIndex--;
      } else {
        break;
      }
    }
  }
  if ([PR, PO].indexOf(next) !== -1) {
    var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
    while (prevIndex >= 0) {
      var type = classTypes[prevIndex];
      if (type === NU) {
        return BREAK_NOT_ALLOWED$1;
      } else if ([SY, IS].indexOf(type) !== -1) {
        prevIndex--;
      } else {
        break;
      }
    }
  }
  if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
    return BREAK_NOT_ALLOWED$1;
  }
  if (current === RI$1 && next === RI$1) {
    var i = indicies[currentIndex];
    var count = 1;
    while (i > 0) {
      i--;
      if (classTypes[i] === RI$1) {
        count++;
      } else {
        break;
      }
    }
    if (count % 2 !== 0) {
      return BREAK_NOT_ALLOWED$1;
    }
  }
  if (current === EB && next === EM) {
    return BREAK_NOT_ALLOWED$1;
  }
  return BREAK_ALLOWED$1;
};
var cssFormattedClasses = function(codePoints, options) {
  if (!options) {
    options = { lineBreak: "normal", wordBreak: "normal" };
  }
  var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
  if (options.wordBreak === "break-all" || options.wordBreak === "break-word") {
    classTypes = classTypes.map(function(type) {
      return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
    });
  }
  var forbiddenBreakpoints = options.wordBreak === "keep-all" ? isLetterNumber.map(function(letterNumber, i) {
    return letterNumber && codePoints[i] >= 19968 && codePoints[i] <= 40959;
  }) : void 0;
  return [indicies, classTypes, forbiddenBreakpoints];
};
var Break = (
  /** @class */
  function() {
    function Break2(codePoints, lineBreak2, start, end) {
      this.codePoints = codePoints;
      this.required = lineBreak2 === BREAK_MANDATORY;
      this.start = start;
      this.end = end;
    }
    Break2.prototype.slice = function() {
      return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
    };
    return Break2;
  }()
);
var LineBreaker = function(str, options) {
  var codePoints = toCodePoints$1(str);
  var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
  var length = codePoints.length;
  var lastEnd = 0;
  var nextIndex = 0;
  return {
    next: function() {
      if (nextIndex >= length) {
        return { done: true, value: null };
      }
      var lineBreak2 = BREAK_NOT_ALLOWED$1;
      while (nextIndex < length && (lineBreak2 = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {
      }
      if (lineBreak2 !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
        var value = new Break(codePoints, lineBreak2, lastEnd, nextIndex);
        lastEnd = nextIndex;
        return { value, done: false };
      }
      return { done: true, value: null };
    }
  };
};
var FLAG_UNRESTRICTED = 1 << 0;
var FLAG_ID = 1 << 1;
var FLAG_INTEGER = 1 << 2;
var FLAG_NUMBER = 1 << 3;
var LINE_FEED = 10;
var SOLIDUS = 47;
var REVERSE_SOLIDUS = 92;
var CHARACTER_TABULATION = 9;
var SPACE = 32;
var QUOTATION_MARK = 34;
var EQUALS_SIGN = 61;
var NUMBER_SIGN = 35;
var DOLLAR_SIGN = 36;
var PERCENTAGE_SIGN = 37;
var APOSTROPHE = 39;
var LEFT_PARENTHESIS = 40;
var RIGHT_PARENTHESIS = 41;
var LOW_LINE = 95;
var HYPHEN_MINUS = 45;
var EXCLAMATION_MARK = 33;
var LESS_THAN_SIGN = 60;
var GREATER_THAN_SIGN = 62;
var COMMERCIAL_AT = 64;
var LEFT_SQUARE_BRACKET = 91;
var RIGHT_SQUARE_BRACKET = 93;
var CIRCUMFLEX_ACCENT = 61;
var LEFT_CURLY_BRACKET = 123;
var QUESTION_MARK = 63;
var RIGHT_CURLY_BRACKET = 125;
var VERTICAL_LINE = 124;
var TILDE = 126;
var CONTROL = 128;
var REPLACEMENT_CHARACTER = 65533;
var ASTERISK = 42;
var PLUS_SIGN = 43;
var COMMA = 44;
var COLON = 58;
var SEMICOLON = 59;
var FULL_STOP = 46;
var NULL = 0;
var BACKSPACE = 8;
var LINE_TABULATION = 11;
var SHIFT_OUT = 14;
var INFORMATION_SEPARATOR_ONE = 31;
var DELETE = 127;
var EOF = -1;
var ZERO = 48;
var a = 97;
var e = 101;
var f = 102;
var u = 117;
var z = 122;
var A = 65;
var E = 69;
var F = 70;
var U = 85;
var Z = 90;
var isDigit = function(codePoint) {
  return codePoint >= ZERO && codePoint <= 57;
};
var isSurrogateCodePoint = function(codePoint) {
  return codePoint >= 55296 && codePoint <= 57343;
};
var isHex = function(codePoint) {
  return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
};
var isLowerCaseLetter = function(codePoint) {
  return codePoint >= a && codePoint <= z;
};
var isUpperCaseLetter = function(codePoint) {
  return codePoint >= A && codePoint <= Z;
};
var isLetter = function(codePoint) {
  return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
};
var isNonASCIICodePoint = function(codePoint) {
  return codePoint >= CONTROL;
};
var isWhiteSpace = function(codePoint) {
  return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
};
var isNameStartCodePoint = function(codePoint) {
  return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
};
var isNameCodePoint = function(codePoint) {
  return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
};
var isNonPrintableCodePoint = function(codePoint) {
  return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
};
var isValidEscape = function(c1, c2) {
  if (c1 !== REVERSE_SOLIDUS) {
    return false;
  }
  return c2 !== LINE_FEED;
};
var isIdentifierStart = function(c1, c2, c3) {
  if (c1 === HYPHEN_MINUS) {
    return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
  } else if (isNameStartCodePoint(c1)) {
    return true;
  } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
    return true;
  }
  return false;
};
var isNumberStart = function(c1, c2, c3) {
  if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
    if (isDigit(c2)) {
      return true;
    }
    return c2 === FULL_STOP && isDigit(c3);
  }
  if (c1 === FULL_STOP) {
    return isDigit(c2);
  }
  return isDigit(c1);
};
var stringToNumber = function(codePoints) {
  var c = 0;
  var sign = 1;
  if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
    if (codePoints[c] === HYPHEN_MINUS) {
      sign = -1;
    }
    c++;
  }
  var integers = [];
  while (isDigit(codePoints[c])) {
    integers.push(codePoints[c++]);
  }
  var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
  if (codePoints[c] === FULL_STOP) {
    c++;
  }
  var fraction = [];
  while (isDigit(codePoints[c])) {
    fraction.push(codePoints[c++]);
  }
  var fracd = fraction.length;
  var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
  if (codePoints[c] === E || codePoints[c] === e) {
    c++;
  }
  var expsign = 1;
  if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
    if (codePoints[c] === HYPHEN_MINUS) {
      expsign = -1;
    }
    c++;
  }
  var exponent = [];
  while (isDigit(codePoints[c])) {
    exponent.push(codePoints[c++]);
  }
  var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
  return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
};
var LEFT_PARENTHESIS_TOKEN = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
};
var RIGHT_PARENTHESIS_TOKEN = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
};
var COMMA_TOKEN = {
  type: 4
  /* COMMA_TOKEN */
};
var SUFFIX_MATCH_TOKEN = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
};
var PREFIX_MATCH_TOKEN = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
};
var COLUMN_TOKEN = {
  type: 21
  /* COLUMN_TOKEN */
};
var DASH_MATCH_TOKEN = {
  type: 9
  /* DASH_MATCH_TOKEN */
};
var INCLUDE_MATCH_TOKEN = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
};
var LEFT_CURLY_BRACKET_TOKEN = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
};
var RIGHT_CURLY_BRACKET_TOKEN = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
};
var SUBSTRING_MATCH_TOKEN = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
};
var BAD_URL_TOKEN = {
  type: 23
  /* BAD_URL_TOKEN */
};
var BAD_STRING_TOKEN = {
  type: 1
  /* BAD_STRING_TOKEN */
};
var CDO_TOKEN = {
  type: 25
  /* CDO_TOKEN */
};
var CDC_TOKEN = {
  type: 24
  /* CDC_TOKEN */
};
var COLON_TOKEN = {
  type: 26
  /* COLON_TOKEN */
};
var SEMICOLON_TOKEN = {
  type: 27
  /* SEMICOLON_TOKEN */
};
var LEFT_SQUARE_BRACKET_TOKEN = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
};
var RIGHT_SQUARE_BRACKET_TOKEN = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
};
var WHITESPACE_TOKEN = {
  type: 31
  /* WHITESPACE_TOKEN */
};
var EOF_TOKEN = {
  type: 32
  /* EOF_TOKEN */
};
var Tokenizer = (
  /** @class */
  function() {
    function Tokenizer2() {
      this._value = [];
    }
    Tokenizer2.prototype.write = function(chunk) {
      this._value = this._value.concat(toCodePoints$1(chunk));
    };
    Tokenizer2.prototype.read = function() {
      var tokens = [];
      var token = this.consumeToken();
      while (token !== EOF_TOKEN) {
        tokens.push(token);
        token = this.consumeToken();
      }
      return tokens;
    };
    Tokenizer2.prototype.consumeToken = function() {
      var codePoint = this.consumeCodePoint();
      switch (codePoint) {
        case QUOTATION_MARK:
          return this.consumeStringToken(QUOTATION_MARK);
        case NUMBER_SIGN:
          var c1 = this.peekCodePoint(0);
          var c2 = this.peekCodePoint(1);
          var c3 = this.peekCodePoint(2);
          if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
            var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
            var value = this.consumeName();
            return { type: 5, value, flags };
          }
          break;
        case DOLLAR_SIGN:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return SUFFIX_MATCH_TOKEN;
          }
          break;
        case APOSTROPHE:
          return this.consumeStringToken(APOSTROPHE);
        case LEFT_PARENTHESIS:
          return LEFT_PARENTHESIS_TOKEN;
        case RIGHT_PARENTHESIS:
          return RIGHT_PARENTHESIS_TOKEN;
        case ASTERISK:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return SUBSTRING_MATCH_TOKEN;
          }
          break;
        case PLUS_SIGN:
          if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          break;
        case COMMA:
          return COMMA_TOKEN;
        case HYPHEN_MINUS:
          var e1 = codePoint;
          var e2 = this.peekCodePoint(0);
          var e3 = this.peekCodePoint(1);
          if (isNumberStart(e1, e2, e3)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          if (isIdentifierStart(e1, e2, e3)) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
          }
          if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
            this.consumeCodePoint();
            this.consumeCodePoint();
            return CDC_TOKEN;
          }
          break;
        case FULL_STOP:
          if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeNumericToken();
          }
          break;
        case SOLIDUS:
          if (this.peekCodePoint(0) === ASTERISK) {
            this.consumeCodePoint();
            while (true) {
              var c = this.consumeCodePoint();
              if (c === ASTERISK) {
                c = this.consumeCodePoint();
                if (c === SOLIDUS) {
                  return this.consumeToken();
                }
              }
              if (c === EOF) {
                return this.consumeToken();
              }
            }
          }
          break;
        case COLON:
          return COLON_TOKEN;
        case SEMICOLON:
          return SEMICOLON_TOKEN;
        case LESS_THAN_SIGN:
          if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
            this.consumeCodePoint();
            this.consumeCodePoint();
            return CDO_TOKEN;
          }
          break;
        case COMMERCIAL_AT:
          var a1 = this.peekCodePoint(0);
          var a2 = this.peekCodePoint(1);
          var a3 = this.peekCodePoint(2);
          if (isIdentifierStart(a1, a2, a3)) {
            var value = this.consumeName();
            return { type: 7, value };
          }
          break;
        case LEFT_SQUARE_BRACKET:
          return LEFT_SQUARE_BRACKET_TOKEN;
        case REVERSE_SOLIDUS:
          if (isValidEscape(codePoint, this.peekCodePoint(0))) {
            this.reconsumeCodePoint(codePoint);
            return this.consumeIdentLikeToken();
          }
          break;
        case RIGHT_SQUARE_BRACKET:
          return RIGHT_SQUARE_BRACKET_TOKEN;
        case CIRCUMFLEX_ACCENT:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return PREFIX_MATCH_TOKEN;
          }
          break;
        case LEFT_CURLY_BRACKET:
          return LEFT_CURLY_BRACKET_TOKEN;
        case RIGHT_CURLY_BRACKET:
          return RIGHT_CURLY_BRACKET_TOKEN;
        case u:
        case U:
          var u1 = this.peekCodePoint(0);
          var u2 = this.peekCodePoint(1);
          if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
            this.consumeCodePoint();
            this.consumeUnicodeRangeToken();
          }
          this.reconsumeCodePoint(codePoint);
          return this.consumeIdentLikeToken();
        case VERTICAL_LINE:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return DASH_MATCH_TOKEN;
          }
          if (this.peekCodePoint(0) === VERTICAL_LINE) {
            this.consumeCodePoint();
            return COLUMN_TOKEN;
          }
          break;
        case TILDE:
          if (this.peekCodePoint(0) === EQUALS_SIGN) {
            this.consumeCodePoint();
            return INCLUDE_MATCH_TOKEN;
          }
          break;
        case EOF:
          return EOF_TOKEN;
      }
      if (isWhiteSpace(codePoint)) {
        this.consumeWhiteSpace();
        return WHITESPACE_TOKEN;
      }
      if (isDigit(codePoint)) {
        this.reconsumeCodePoint(codePoint);
        return this.consumeNumericToken();
      }
      if (isNameStartCodePoint(codePoint)) {
        this.reconsumeCodePoint(codePoint);
        return this.consumeIdentLikeToken();
      }
      return { type: 6, value: fromCodePoint$1(codePoint) };
    };
    Tokenizer2.prototype.consumeCodePoint = function() {
      var value = this._value.shift();
      return typeof value === "undefined" ? -1 : value;
    };
    Tokenizer2.prototype.reconsumeCodePoint = function(codePoint) {
      this._value.unshift(codePoint);
    };
    Tokenizer2.prototype.peekCodePoint = function(delta) {
      if (delta >= this._value.length) {
        return -1;
      }
      return this._value[delta];
    };
    Tokenizer2.prototype.consumeUnicodeRangeToken = function() {
      var digits = [];
      var codePoint = this.consumeCodePoint();
      while (isHex(codePoint) && digits.length < 6) {
        digits.push(codePoint);
        codePoint = this.consumeCodePoint();
      }
      var questionMarks = false;
      while (codePoint === QUESTION_MARK && digits.length < 6) {
        digits.push(codePoint);
        codePoint = this.consumeCodePoint();
        questionMarks = true;
      }
      if (questionMarks) {
        var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
          return digit === QUESTION_MARK ? ZERO : digit;
        })), 16);
        var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function(digit) {
          return digit === QUESTION_MARK ? F : digit;
        })), 16);
        return { type: 30, start: start_1, end };
      }
      var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
      if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
        this.consumeCodePoint();
        codePoint = this.consumeCodePoint();
        var endDigits = [];
        while (isHex(codePoint) && endDigits.length < 6) {
          endDigits.push(codePoint);
          codePoint = this.consumeCodePoint();
        }
        var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
        return { type: 30, start, end };
      } else {
        return { type: 30, start, end: start };
      }
    };
    Tokenizer2.prototype.consumeIdentLikeToken = function() {
      var value = this.consumeName();
      if (value.toLowerCase() === "url" && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
        this.consumeCodePoint();
        return this.consumeUrlToken();
      } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
        this.consumeCodePoint();
        return { type: 19, value };
      }
      return { type: 20, value };
    };
    Tokenizer2.prototype.consumeUrlToken = function() {
      var value = [];
      this.consumeWhiteSpace();
      if (this.peekCodePoint(0) === EOF) {
        return { type: 22, value: "" };
      }
      var next = this.peekCodePoint(0);
      if (next === APOSTROPHE || next === QUOTATION_MARK) {
        var stringToken = this.consumeStringToken(this.consumeCodePoint());
        if (stringToken.type === 0) {
          this.consumeWhiteSpace();
          if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
            this.consumeCodePoint();
            return { type: 22, value: stringToken.value };
          }
        }
        this.consumeBadUrlRemnants();
        return BAD_URL_TOKEN;
      }
      while (true) {
        var codePoint = this.consumeCodePoint();
        if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
          return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
        } else if (isWhiteSpace(codePoint)) {
          this.consumeWhiteSpace();
          if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
            this.consumeCodePoint();
            return { type: 22, value: fromCodePoint$1.apply(void 0, value) };
          }
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
          this.consumeBadUrlRemnants();
          return BAD_URL_TOKEN;
        } else if (codePoint === REVERSE_SOLIDUS) {
          if (isValidEscape(codePoint, this.peekCodePoint(0))) {
            value.push(this.consumeEscapedCodePoint());
          } else {
            this.consumeBadUrlRemnants();
            return BAD_URL_TOKEN;
          }
        } else {
          value.push(codePoint);
        }
      }
    };
    Tokenizer2.prototype.consumeWhiteSpace = function() {
      while (isWhiteSpace(this.peekCodePoint(0))) {
        this.consumeCodePoint();
      }
    };
    Tokenizer2.prototype.consumeBadUrlRemnants = function() {
      while (true) {
        var codePoint = this.consumeCodePoint();
        if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
          return;
        }
        if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          this.consumeEscapedCodePoint();
        }
      }
    };
    Tokenizer2.prototype.consumeStringSlice = function(count) {
      var SLICE_STACK_SIZE = 5e4;
      var value = "";
      while (count > 0) {
        var amount = Math.min(SLICE_STACK_SIZE, count);
        value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
        count -= amount;
      }
      this._value.shift();
      return value;
    };
    Tokenizer2.prototype.consumeStringToken = function(endingCodePoint) {
      var value = "";
      var i = 0;
      do {
        var codePoint = this._value[i];
        if (codePoint === EOF || codePoint === void 0 || codePoint === endingCodePoint) {
          value += this.consumeStringSlice(i);
          return { type: 0, value };
        }
        if (codePoint === LINE_FEED) {
          this._value.splice(0, i);
          return BAD_STRING_TOKEN;
        }
        if (codePoint === REVERSE_SOLIDUS) {
          var next = this._value[i + 1];
          if (next !== EOF && next !== void 0) {
            if (next === LINE_FEED) {
              value += this.consumeStringSlice(i);
              i = -1;
              this._value.shift();
            } else if (isValidEscape(codePoint, next)) {
              value += this.consumeStringSlice(i);
              value += fromCodePoint$1(this.consumeEscapedCodePoint());
              i = -1;
            }
          }
        }
        i++;
      } while (true);
    };
    Tokenizer2.prototype.consumeNumber = function() {
      var repr = [];
      var type = FLAG_INTEGER;
      var c1 = this.peekCodePoint(0);
      if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
        repr.push(this.consumeCodePoint());
      }
      while (isDigit(this.peekCodePoint(0))) {
        repr.push(this.consumeCodePoint());
      }
      c1 = this.peekCodePoint(0);
      var c2 = this.peekCodePoint(1);
      if (c1 === FULL_STOP && isDigit(c2)) {
        repr.push(this.consumeCodePoint(), this.consumeCodePoint());
        type = FLAG_NUMBER;
        while (isDigit(this.peekCodePoint(0))) {
          repr.push(this.consumeCodePoint());
        }
      }
      c1 = this.peekCodePoint(0);
      c2 = this.peekCodePoint(1);
      var c3 = this.peekCodePoint(2);
      if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
        repr.push(this.consumeCodePoint(), this.consumeCodePoint());
        type = FLAG_NUMBER;
        while (isDigit(this.peekCodePoint(0))) {
          repr.push(this.consumeCodePoint());
        }
      }
      return [stringToNumber(repr), type];
    };
    Tokenizer2.prototype.consumeNumericToken = function() {
      var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
      var c1 = this.peekCodePoint(0);
      var c2 = this.peekCodePoint(1);
      var c3 = this.peekCodePoint(2);
      if (isIdentifierStart(c1, c2, c3)) {
        var unit = this.consumeName();
        return { type: 15, number, flags, unit };
      }
      if (c1 === PERCENTAGE_SIGN) {
        this.consumeCodePoint();
        return { type: 16, number, flags };
      }
      return { type: 17, number, flags };
    };
    Tokenizer2.prototype.consumeEscapedCodePoint = function() {
      var codePoint = this.consumeCodePoint();
      if (isHex(codePoint)) {
        var hex = fromCodePoint$1(codePoint);
        while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
          hex += fromCodePoint$1(this.consumeCodePoint());
        }
        if (isWhiteSpace(this.peekCodePoint(0))) {
          this.consumeCodePoint();
        }
        var hexCodePoint = parseInt(hex, 16);
        if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 1114111) {
          return REPLACEMENT_CHARACTER;
        }
        return hexCodePoint;
      }
      if (codePoint === EOF) {
        return REPLACEMENT_CHARACTER;
      }
      return codePoint;
    };
    Tokenizer2.prototype.consumeName = function() {
      var result = "";
      while (true) {
        var codePoint = this.consumeCodePoint();
        if (isNameCodePoint(codePoint)) {
          result += fromCodePoint$1(codePoint);
        } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
          result += fromCodePoint$1(this.consumeEscapedCodePoint());
        } else {
          this.reconsumeCodePoint(codePoint);
          return result;
        }
      }
    };
    return Tokenizer2;
  }()
);
var Parser = (
  /** @class */
  function() {
    function Parser2(tokens) {
      this._tokens = tokens;
    }
    Parser2.create = function(value) {
      var tokenizer = new Tokenizer();
      tokenizer.write(value);
      return new Parser2(tokenizer.read());
    };
    Parser2.parseValue = function(value) {
      return Parser2.create(value).parseComponentValue();
    };
    Parser2.parseValues = function(value) {
      return Parser2.create(value).parseComponentValues();
    };
    Parser2.prototype.parseComponentValue = function() {
      var token = this.consumeToken();
      while (token.type === 31) {
        token = this.consumeToken();
      }
      if (token.type === 32) {
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      }
      this.reconsumeToken(token);
      var value = this.consumeComponentValue();
      do {
        token = this.consumeToken();
      } while (token.type === 31);
      if (token.type === 32) {
        return value;
      }
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    };
    Parser2.prototype.parseComponentValues = function() {
      var values = [];
      while (true) {
        var value = this.consumeComponentValue();
        if (value.type === 32) {
          return values;
        }
        values.push(value);
        values.push();
      }
    };
    Parser2.prototype.consumeComponentValue = function() {
      var token = this.consumeToken();
      switch (token.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(token.type);
        case 19:
          return this.consumeFunction(token);
      }
      return token;
    };
    Parser2.prototype.consumeSimpleBlock = function(type) {
      var block = { type, values: [] };
      var token = this.consumeToken();
      while (true) {
        if (token.type === 32 || isEndingTokenFor(token, type)) {
          return block;
        }
        this.reconsumeToken(token);
        block.values.push(this.consumeComponentValue());
        token = this.consumeToken();
      }
    };
    Parser2.prototype.consumeFunction = function(functionToken) {
      var cssFunction = {
        name: functionToken.value,
        values: [],
        type: 18
        /* FUNCTION */
      };
      while (true) {
        var token = this.consumeToken();
        if (token.type === 32 || token.type === 3) {
          return cssFunction;
        }
        this.reconsumeToken(token);
        cssFunction.values.push(this.consumeComponentValue());
      }
    };
    Parser2.prototype.consumeToken = function() {
      var token = this._tokens.shift();
      return typeof token === "undefined" ? EOF_TOKEN : token;
    };
    Parser2.prototype.reconsumeToken = function(token) {
      this._tokens.unshift(token);
    };
    return Parser2;
  }()
);
var isDimensionToken = function(token) {
  return token.type === 15;
};
var isNumberToken = function(token) {
  return token.type === 17;
};
var isIdentToken = function(token) {
  return token.type === 20;
};
var isIdentWithValue = function(token, value) {
  return isIdentToken(token) && token.value === value;
};
var nonFunctionArgSeparator = function(token) {
  return token.type !== 31 && token.type !== 4;
};
var parseFunctionArgs = function(tokens) {
  var args = [];
  var arg = [];
  tokens.forEach(function(token) {
    if (token.type === 4) {
      if (arg.length === 0) {
        throw new Error("Error parsing function args, zero tokens for arg");
      }
      args.push(arg);
      arg = [];
      return;
    }
    if (token.type !== 31) {
      arg.push(token);
    }
  });
  if (arg.length) {
    args.push(arg);
  }
  return args;
};
var isEndingTokenFor = function(token, type) {
  if (type === 11 && token.type === 12) {
    return true;
  }
  if (type === 28 && token.type === 29) {
    return true;
  }
  return type === 2 && token.type === 3;
};
var isLength = function(token) {
  return token.type === 17 || token.type === 15;
};
var isLengthPercentage = function(token) {
  return token.type === 16 || isLength(token);
};
var parseLengthPercentageTuple = function(tokens) {
  return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
};
var ZERO_LENGTH = {
  type: 17,
  number: 0,
  flags: FLAG_INTEGER
};
var FIFTY_PERCENT = {
  type: 16,
  number: 50,
  flags: FLAG_INTEGER
};
var HUNDRED_PERCENT = {
  type: 16,
  number: 100,
  flags: FLAG_INTEGER
};
var getAbsoluteValueForTuple = function(tuple, width, height) {
  var x = tuple[0], y = tuple[1];
  return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== "undefined" ? y : x, height)];
};
var getAbsoluteValue = function(token, parent) {
  if (token.type === 16) {
    return token.number / 100 * parent;
  }
  if (isDimensionToken(token)) {
    switch (token.unit) {
      case "rem":
      case "em":
        return 16 * token.number;
      case "px":
      default:
        return token.number;
    }
  }
  return token.number;
};
var DEG = "deg";
var GRAD = "grad";
var RAD = "rad";
var TURN = "turn";
var angle = {
  name: "angle",
  parse: function(_context, value) {
    if (value.type === 15) {
      switch (value.unit) {
        case DEG:
          return Math.PI * value.number / 180;
        case GRAD:
          return Math.PI / 200 * value.number;
        case RAD:
          return value.number;
        case TURN:
          return Math.PI * 2 * value.number;
      }
    }
    throw new Error("Unsupported angle type");
  }
};
var isAngle = function(value) {
  if (value.type === 15) {
    if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
      return true;
    }
  }
  return false;
};
var parseNamedSide = function(tokens) {
  var sideOrCorner = tokens.filter(isIdentToken).map(function(ident) {
    return ident.value;
  }).join(" ");
  switch (sideOrCorner) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [ZERO_LENGTH, ZERO_LENGTH];
    case "to top":
    case "bottom":
      return deg(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [ZERO_LENGTH, HUNDRED_PERCENT];
    case "to right":
    case "left":
      return deg(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [HUNDRED_PERCENT, HUNDRED_PERCENT];
    case "to bottom":
    case "top":
      return deg(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [HUNDRED_PERCENT, ZERO_LENGTH];
    case "to left":
    case "right":
      return deg(270);
  }
  return 0;
};
var deg = function(deg2) {
  return Math.PI * deg2 / 180;
};
var color$1 = {
  name: "color",
  parse: function(context, value) {
    if (value.type === 18) {
      var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
      if (typeof colorFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported color function "' + value.name + '"');
      }
      return colorFunction(context, value.values);
    }
    if (value.type === 5) {
      if (value.value.length === 3) {
        var r = value.value.substring(0, 1);
        var g = value.value.substring(1, 2);
        var b = value.value.substring(2, 3);
        return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
      }
      if (value.value.length === 4) {
        var r = value.value.substring(0, 1);
        var g = value.value.substring(1, 2);
        var b = value.value.substring(2, 3);
        var a2 = value.value.substring(3, 4);
        return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a2 + a2, 16) / 255);
      }
      if (value.value.length === 6) {
        var r = value.value.substring(0, 2);
        var g = value.value.substring(2, 4);
        var b = value.value.substring(4, 6);
        return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
      }
      if (value.value.length === 8) {
        var r = value.value.substring(0, 2);
        var g = value.value.substring(2, 4);
        var b = value.value.substring(4, 6);
        var a2 = value.value.substring(6, 8);
        return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a2, 16) / 255);
      }
    }
    if (value.type === 20) {
      var namedColor = COLORS[value.value.toUpperCase()];
      if (typeof namedColor !== "undefined") {
        return namedColor;
      }
    }
    return COLORS.TRANSPARENT;
  }
};
var isTransparent = function(color2) {
  return (255 & color2) === 0;
};
var asString = function(color2) {
  var alpha = 255 & color2;
  var blue = 255 & color2 >> 8;
  var green = 255 & color2 >> 16;
  var red = 255 & color2 >> 24;
  return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
};
var pack = function(r, g, b, a2) {
  return (r << 24 | g << 16 | b << 8 | Math.round(a2 * 255) << 0) >>> 0;
};
var getTokenColorValue = function(token, i) {
  if (token.type === 17) {
    return token.number;
  }
  if (token.type === 16) {
    var max = i === 3 ? 1 : 255;
    return i === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
  }
  return 0;
};
var rgb = function(_context, args) {
  var tokens = args.filter(nonFunctionArgSeparator);
  if (tokens.length === 3) {
    var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
    return pack(r, g, b, 1);
  }
  if (tokens.length === 4) {
    var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a2 = _b[3];
    return pack(r, g, b, a2);
  }
  return 0;
};
function hue2rgb(t1, t2, hue) {
  if (hue < 0) {
    hue += 1;
  }
  if (hue >= 1) {
    hue -= 1;
  }
  if (hue < 1 / 6) {
    return (t2 - t1) * hue * 6 + t1;
  } else if (hue < 1 / 2) {
    return t2;
  } else if (hue < 2 / 3) {
    return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
  } else {
    return t1;
  }
}
var hsl = function(context, args) {
  var tokens = args.filter(nonFunctionArgSeparator);
  var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
  var h = (hue.type === 17 ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
  var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
  var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
  var a2 = typeof alpha !== "undefined" && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
  if (s === 0) {
    return pack(l * 255, l * 255, l * 255, 1);
  }
  var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
  var t1 = l * 2 - t2;
  var r = hue2rgb(t1, t2, h + 1 / 3);
  var g = hue2rgb(t1, t2, h);
  var b = hue2rgb(t1, t2, h - 1 / 3);
  return pack(r * 255, g * 255, b * 255, a2);
};
var SUPPORTED_COLOR_FUNCTIONS = {
  hsl,
  hsla: hsl,
  rgb,
  rgba: rgb
};
var parseColor = function(context, value) {
  return color$1.parse(context, Parser.create(value).parseComponentValue());
};
var COLORS = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
};
var backgroundClip = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.map(function(token) {
      if (isIdentToken(token)) {
        switch (token.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      }
      return 0;
    });
  }
};
var backgroundColor = {
  name: "background-color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var parseColorStop = function(context, args) {
  var color2 = color$1.parse(context, args[0]);
  var stop = args[1];
  return stop && isLengthPercentage(stop) ? { color: color2, stop } : { color: color2, stop: null };
};
var processColorStops = function(stops, lineLength) {
  var first = stops[0];
  var last = stops[stops.length - 1];
  if (first.stop === null) {
    first.stop = ZERO_LENGTH;
  }
  if (last.stop === null) {
    last.stop = HUNDRED_PERCENT;
  }
  var processStops = [];
  var previous = 0;
  for (var i = 0; i < stops.length; i++) {
    var stop_1 = stops[i].stop;
    if (stop_1 !== null) {
      var absoluteValue = getAbsoluteValue(stop_1, lineLength);
      if (absoluteValue > previous) {
        processStops.push(absoluteValue);
      } else {
        processStops.push(previous);
      }
      previous = absoluteValue;
    } else {
      processStops.push(null);
    }
  }
  var gapBegin = null;
  for (var i = 0; i < processStops.length; i++) {
    var stop_2 = processStops[i];
    if (stop_2 === null) {
      if (gapBegin === null) {
        gapBegin = i;
      }
    } else if (gapBegin !== null) {
      var gapLength = i - gapBegin;
      var beforeGap = processStops[gapBegin - 1];
      var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
      for (var g = 1; g <= gapLength; g++) {
        processStops[gapBegin + g - 1] = gapValue * g;
      }
      gapBegin = null;
    }
  }
  return stops.map(function(_a, i2) {
    var color2 = _a.color;
    return { color: color2, stop: Math.max(Math.min(1, processStops[i2] / lineLength), 0) };
  });
};
var getAngleFromCorner = function(corner, width, height) {
  var centerX = width / 2;
  var centerY = height / 2;
  var x = getAbsoluteValue(corner[0], width) - centerX;
  var y = centerY - getAbsoluteValue(corner[1], height);
  return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
};
var calculateGradientDirection = function(angle2, width, height) {
  var radian = typeof angle2 === "number" ? angle2 : getAngleFromCorner(angle2, width, height);
  var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
  var halfWidth = width / 2;
  var halfHeight = height / 2;
  var halfLineLength = lineLength / 2;
  var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
  var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
  return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
};
var distance = function(a2, b) {
  return Math.sqrt(a2 * a2 + b * b);
};
var findCorner = function(width, height, x, y, closest) {
  var corners = [
    [0, 0],
    [0, height],
    [width, 0],
    [width, height]
  ];
  return corners.reduce(function(stat, corner) {
    var cx = corner[0], cy = corner[1];
    var d = distance(x - cx, y - cy);
    if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
      return {
        optimumCorner: corner,
        optimumDistance: d
      };
    }
    return stat;
  }, {
    optimumDistance: closest ? Infinity : -Infinity,
    optimumCorner: null
  }).optimumCorner;
};
var calculateRadius = function(gradient, x, y, width, height) {
  var rx = 0;
  var ry = 0;
  switch (gradient.size) {
    case 0:
      if (gradient.shape === 0) {
        rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
      } else if (gradient.shape === 1) {
        rx = Math.min(Math.abs(x), Math.abs(x - width));
        ry = Math.min(Math.abs(y), Math.abs(y - height));
      }
      break;
    case 2:
      if (gradient.shape === 0) {
        rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
      } else if (gradient.shape === 1) {
        var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
        var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
        rx = distance(cx - x, (cy - y) / c);
        ry = c * rx;
      }
      break;
    case 1:
      if (gradient.shape === 0) {
        rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
      } else if (gradient.shape === 1) {
        rx = Math.max(Math.abs(x), Math.abs(x - width));
        ry = Math.max(Math.abs(y), Math.abs(y - height));
      }
      break;
    case 3:
      if (gradient.shape === 0) {
        rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
      } else if (gradient.shape === 1) {
        var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
        var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
        rx = distance(cx - x, (cy - y) / c);
        ry = c * rx;
      }
      break;
  }
  if (Array.isArray(gradient.size)) {
    rx = getAbsoluteValue(gradient.size[0], width);
    ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
  }
  return [rx, ry];
};
var linearGradient = function(context, tokens) {
  var angle$1 = deg(180);
  var stops = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    if (i === 0) {
      var firstToken = arg[0];
      if (firstToken.type === 20 && firstToken.value === "to") {
        angle$1 = parseNamedSide(arg);
        return;
      } else if (isAngle(firstToken)) {
        angle$1 = angle.parse(context, firstToken);
        return;
      }
    }
    var colorStop = parseColorStop(context, arg);
    stops.push(colorStop);
  });
  return {
    angle: angle$1,
    stops,
    type: 1
    /* LINEAR_GRADIENT */
  };
};
var prefixLinearGradient = function(context, tokens) {
  var angle$1 = deg(180);
  var stops = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    if (i === 0) {
      var firstToken = arg[0];
      if (firstToken.type === 20 && ["top", "left", "right", "bottom"].indexOf(firstToken.value) !== -1) {
        angle$1 = parseNamedSide(arg);
        return;
      } else if (isAngle(firstToken)) {
        angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
        return;
      }
    }
    var colorStop = parseColorStop(context, arg);
    stops.push(colorStop);
  });
  return {
    angle: angle$1,
    stops,
    type: 1
    /* LINEAR_GRADIENT */
  };
};
var webkitGradient = function(context, tokens) {
  var angle2 = deg(180);
  var stops = [];
  var type = 1;
  var shape = 0;
  var size = 3;
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    var firstToken = arg[0];
    if (i === 0) {
      if (isIdentToken(firstToken) && firstToken.value === "linear") {
        type = 1;
        return;
      } else if (isIdentToken(firstToken) && firstToken.value === "radial") {
        type = 2;
        return;
      }
    }
    if (firstToken.type === 18) {
      if (firstToken.name === "from") {
        var color2 = color$1.parse(context, firstToken.values[0]);
        stops.push({ stop: ZERO_LENGTH, color: color2 });
      } else if (firstToken.name === "to") {
        var color2 = color$1.parse(context, firstToken.values[0]);
        stops.push({ stop: HUNDRED_PERCENT, color: color2 });
      } else if (firstToken.name === "color-stop") {
        var values = firstToken.values.filter(nonFunctionArgSeparator);
        if (values.length === 2) {
          var color2 = color$1.parse(context, values[1]);
          var stop_1 = values[0];
          if (isNumberToken(stop_1)) {
            stops.push({
              stop: { type: 16, number: stop_1.number * 100, flags: stop_1.flags },
              color: color2
            });
          }
        }
      }
    }
  });
  return type === 1 ? {
    angle: (angle2 + deg(180)) % deg(360),
    stops,
    type
  } : { size, shape, stops, position: position2, type };
};
var CLOSEST_SIDE = "closest-side";
var FARTHEST_SIDE = "farthest-side";
var CLOSEST_CORNER = "closest-corner";
var FARTHEST_CORNER = "farthest-corner";
var CIRCLE = "circle";
var ELLIPSE = "ellipse";
var COVER = "cover";
var CONTAIN = "contain";
var radialGradient = function(context, tokens) {
  var shape = 0;
  var size = 3;
  var stops = [];
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    var isColorStop = true;
    if (i === 0) {
      var isAtPosition_1 = false;
      isColorStop = arg.reduce(function(acc, token) {
        if (isAtPosition_1) {
          if (isIdentToken(token)) {
            switch (token.value) {
              case "center":
                position2.push(FIFTY_PERCENT);
                return acc;
              case "top":
              case "left":
                position2.push(ZERO_LENGTH);
                return acc;
              case "right":
              case "bottom":
                position2.push(HUNDRED_PERCENT);
                return acc;
            }
          } else if (isLengthPercentage(token) || isLength(token)) {
            position2.push(token);
          }
        } else if (isIdentToken(token)) {
          switch (token.value) {
            case CIRCLE:
              shape = 0;
              return false;
            case ELLIPSE:
              shape = 1;
              return false;
            case "at":
              isAtPosition_1 = true;
              return false;
            case CLOSEST_SIDE:
              size = 0;
              return false;
            case COVER:
            case FARTHEST_SIDE:
              size = 1;
              return false;
            case CONTAIN:
            case CLOSEST_CORNER:
              size = 2;
              return false;
            case FARTHEST_CORNER:
              size = 3;
              return false;
          }
        } else if (isLength(token) || isLengthPercentage(token)) {
          if (!Array.isArray(size)) {
            size = [];
          }
          size.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    }
    if (isColorStop) {
      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    }
  });
  return {
    size,
    shape,
    stops,
    position: position2,
    type: 2
    /* RADIAL_GRADIENT */
  };
};
var prefixRadialGradient = function(context, tokens) {
  var shape = 0;
  var size = 3;
  var stops = [];
  var position2 = [];
  parseFunctionArgs(tokens).forEach(function(arg, i) {
    var isColorStop = true;
    if (i === 0) {
      isColorStop = arg.reduce(function(acc, token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case "center":
              position2.push(FIFTY_PERCENT);
              return false;
            case "top":
            case "left":
              position2.push(ZERO_LENGTH);
              return false;
            case "right":
            case "bottom":
              position2.push(HUNDRED_PERCENT);
              return false;
          }
        } else if (isLengthPercentage(token) || isLength(token)) {
          position2.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    } else if (i === 1) {
      isColorStop = arg.reduce(function(acc, token) {
        if (isIdentToken(token)) {
          switch (token.value) {
            case CIRCLE:
              shape = 0;
              return false;
            case ELLIPSE:
              shape = 1;
              return false;
            case CONTAIN:
            case CLOSEST_SIDE:
              size = 0;
              return false;
            case FARTHEST_SIDE:
              size = 1;
              return false;
            case CLOSEST_CORNER:
              size = 2;
              return false;
            case COVER:
            case FARTHEST_CORNER:
              size = 3;
              return false;
          }
        } else if (isLength(token) || isLengthPercentage(token)) {
          if (!Array.isArray(size)) {
            size = [];
          }
          size.push(token);
          return false;
        }
        return acc;
      }, isColorStop);
    }
    if (isColorStop) {
      var colorStop = parseColorStop(context, arg);
      stops.push(colorStop);
    }
  });
  return {
    size,
    shape,
    stops,
    position: position2,
    type: 2
    /* RADIAL_GRADIENT */
  };
};
var isLinearGradient = function(background) {
  return background.type === 1;
};
var isRadialGradient = function(background) {
  return background.type === 2;
};
var image = {
  name: "image",
  parse: function(context, value) {
    if (value.type === 22) {
      var image_1 = {
        url: value.value,
        type: 0
        /* URL */
      };
      context.cache.addImage(value.value);
      return image_1;
    }
    if (value.type === 18) {
      var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
      if (typeof imageFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported image function "' + value.name + '"');
      }
      return imageFunction(context, value.values);
    }
    throw new Error("Unsupported image type " + value.type);
  }
};
function isSupportedImage(value) {
  return !(value.type === 20 && value.value === "none") && (value.type !== 18 || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
}
var SUPPORTED_IMAGE_FUNCTIONS = {
  "linear-gradient": linearGradient,
  "-moz-linear-gradient": prefixLinearGradient,
  "-ms-linear-gradient": prefixLinearGradient,
  "-o-linear-gradient": prefixLinearGradient,
  "-webkit-linear-gradient": prefixLinearGradient,
  "radial-gradient": radialGradient,
  "-moz-radial-gradient": prefixRadialGradient,
  "-ms-radial-gradient": prefixRadialGradient,
  "-o-radial-gradient": prefixRadialGradient,
  "-webkit-radial-gradient": prefixRadialGradient,
  "-webkit-gradient": webkitGradient
};
var backgroundImage = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 0) {
      return [];
    }
    var first = tokens[0];
    if (first.type === 20 && first.value === "none") {
      return [];
    }
    return tokens.filter(function(value) {
      return nonFunctionArgSeparator(value) && isSupportedImage(value);
    }).map(function(value) {
      return image.parse(context, value);
    });
  }
};
var backgroundOrigin = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.map(function(token) {
      if (isIdentToken(token)) {
        switch (token.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      }
      return 0;
    });
  }
};
var backgroundPosition = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isLengthPercentage);
    }).map(parseLengthPercentageTuple);
  }
};
var backgroundRepeat = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isIdentToken).map(function(token) {
        return token.value;
      }).join(" ");
    }).map(parseBackgroundRepeat);
  }
};
var parseBackgroundRepeat = function(value) {
  switch (value) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
};
var BACKGROUND_SIZE;
(function(BACKGROUND_SIZE2) {
  BACKGROUND_SIZE2["AUTO"] = "auto";
  BACKGROUND_SIZE2["CONTAIN"] = "contain";
  BACKGROUND_SIZE2["COVER"] = "cover";
})(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
var backgroundSize = {
  name: "background-size",
  initialValue: "0",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return parseFunctionArgs(tokens).map(function(values) {
      return values.filter(isBackgroundSizeInfoToken);
    });
  }
};
var isBackgroundSizeInfoToken = function(value) {
  return isIdentToken(value) || isLengthPercentage(value);
};
var borderColorForSide = function(side) {
  return {
    name: "border-" + side + "-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  };
};
var borderTopColor = borderColorForSide("top");
var borderRightColor = borderColorForSide("right");
var borderBottomColor = borderColorForSide("bottom");
var borderLeftColor = borderColorForSide("left");
var borderRadiusForSide = function(side) {
  return {
    name: "border-radius-" + side,
    initialValue: "0 0",
    prefix: false,
    type: 1,
    parse: function(_context, tokens) {
      return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
    }
  };
};
var borderTopLeftRadius = borderRadiusForSide("top-left");
var borderTopRightRadius = borderRadiusForSide("top-right");
var borderBottomRightRadius = borderRadiusForSide("bottom-right");
var borderBottomLeftRadius = borderRadiusForSide("bottom-left");
var borderStyleForSide = function(side) {
  return {
    name: "border-" + side + "-style",
    initialValue: "solid",
    prefix: false,
    type: 2,
    parse: function(_context, style) {
      switch (style) {
        case "none":
          return 0;
        case "dashed":
          return 2;
        case "dotted":
          return 3;
        case "double":
          return 4;
      }
      return 1;
    }
  };
};
var borderTopStyle = borderStyleForSide("top");
var borderRightStyle = borderStyleForSide("right");
var borderBottomStyle = borderStyleForSide("bottom");
var borderLeftStyle = borderStyleForSide("left");
var borderWidthForSide = function(side) {
  return {
    name: "border-" + side + "-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(_context, token) {
      if (isDimensionToken(token)) {
        return token.number;
      }
      return 0;
    }
  };
};
var borderTopWidth = borderWidthForSide("top");
var borderRightWidth = borderWidthForSide("right");
var borderBottomWidth = borderWidthForSide("bottom");
var borderLeftWidth = borderWidthForSide("left");
var color = {
  name: "color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var direction = {
  name: "direction",
  initialValue: "ltr",
  prefix: false,
  type: 2,
  parse: function(_context, direction2) {
    switch (direction2) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
};
var display = {
  name: "display",
  initialValue: "inline-block",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).reduce(
      function(bit, token) {
        return bit | parseDisplayValue(token.value);
      },
      0
      /* NONE */
    );
  }
};
var parseDisplayValue = function(display2) {
  switch (display2) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
};
var float = {
  name: "float",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, float2) {
    switch (float2) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
};
var letterSpacing = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: false,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20 && token.value === "normal") {
      return 0;
    }
    if (token.type === 17) {
      return token.number;
    }
    if (token.type === 15) {
      return token.number;
    }
    return 0;
  }
};
var LINE_BREAK;
(function(LINE_BREAK2) {
  LINE_BREAK2["NORMAL"] = "normal";
  LINE_BREAK2["STRICT"] = "strict";
})(LINE_BREAK || (LINE_BREAK = {}));
var lineBreak = {
  name: "line-break",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, lineBreak2) {
    switch (lineBreak2) {
      case "strict":
        return LINE_BREAK.STRICT;
      case "normal":
      default:
        return LINE_BREAK.NORMAL;
    }
  }
};
var lineHeight = {
  name: "line-height",
  initialValue: "normal",
  prefix: false,
  type: 4
  /* TOKEN_VALUE */
};
var computeLineHeight = function(token, fontSize2) {
  if (isIdentToken(token) && token.value === "normal") {
    return 1.2 * fontSize2;
  } else if (token.type === 17) {
    return fontSize2 * token.number;
  } else if (isLengthPercentage(token)) {
    return getAbsoluteValue(token, fontSize2);
  }
  return fontSize2;
};
var listStyleImage = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: false,
  parse: function(context, token) {
    if (token.type === 20 && token.value === "none") {
      return null;
    }
    return image.parse(context, token);
  }
};
var listStylePosition = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: false,
  type: 2,
  parse: function(_context, position2) {
    switch (position2) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
};
var listStyleType = {
  name: "list-style-type",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, type) {
    switch (type) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 22;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
};
var marginForSide = function(side) {
  return {
    name: "margin-" + side,
    initialValue: "0",
    prefix: false,
    type: 4
    /* TOKEN_VALUE */
  };
};
var marginTop = marginForSide("top");
var marginRight = marginForSide("right");
var marginBottom = marginForSide("bottom");
var marginLeft = marginForSide("left");
var overflow = {
  name: "overflow",
  initialValue: "visible",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(overflow2) {
      switch (overflow2.value) {
        case "hidden":
          return 1;
        case "scroll":
          return 2;
        case "clip":
          return 3;
        case "auto":
          return 4;
        case "visible":
        default:
          return 0;
      }
    });
  }
};
var overflowWrap = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, overflow2) {
    switch (overflow2) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
};
var paddingForSide = function(side) {
  return {
    name: "padding-" + side,
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length-percentage"
  };
};
var paddingTop = paddingForSide("top");
var paddingRight = paddingForSide("right");
var paddingBottom = paddingForSide("bottom");
var paddingLeft = paddingForSide("left");
var textAlign = {
  name: "text-align",
  initialValue: "left",
  prefix: false,
  type: 2,
  parse: function(_context, textAlign2) {
    switch (textAlign2) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
};
var position = {
  name: "position",
  initialValue: "static",
  prefix: false,
  type: 2,
  parse: function(_context, position2) {
    switch (position2) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
};
var textShadow = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
      return [];
    }
    return parseFunctionArgs(tokens).map(function(values) {
      var shadow = {
        color: COLORS.TRANSPARENT,
        offsetX: ZERO_LENGTH,
        offsetY: ZERO_LENGTH,
        blur: ZERO_LENGTH
      };
      var c = 0;
      for (var i = 0; i < values.length; i++) {
        var token = values[i];
        if (isLength(token)) {
          if (c === 0) {
            shadow.offsetX = token;
          } else if (c === 1) {
            shadow.offsetY = token;
          } else {
            shadow.blur = token;
          }
          c++;
        } else {
          shadow.color = color$1.parse(context, token);
        }
      }
      return shadow;
    });
  }
};
var textTransform = {
  name: "text-transform",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, textTransform2) {
    switch (textTransform2) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
};
var transform$1 = {
  name: "transform",
  initialValue: "none",
  prefix: true,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20 && token.value === "none") {
      return null;
    }
    if (token.type === 18) {
      var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
      if (typeof transformFunction === "undefined") {
        throw new Error('Attempting to parse an unsupported transform function "' + token.name + '"');
      }
      return transformFunction(token.values);
    }
    return null;
  }
};
var matrix = function(args) {
  var values = args.filter(function(arg) {
    return arg.type === 17;
  }).map(function(arg) {
    return arg.number;
  });
  return values.length === 6 ? values : null;
};
var matrix3d = function(args) {
  var values = args.filter(function(arg) {
    return arg.type === 17;
  }).map(function(arg) {
    return arg.number;
  });
  var a1 = values[0], b1 = values[1];
  values[2];
  values[3];
  var a2 = values[4], b2 = values[5];
  values[6];
  values[7];
  values[8];
  values[9];
  values[10];
  values[11];
  var a4 = values[12], b4 = values[13];
  values[14];
  values[15];
  return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
};
var SUPPORTED_TRANSFORM_FUNCTIONS = {
  matrix,
  matrix3d
};
var DEFAULT_VALUE = {
  type: 16,
  number: 50,
  flags: FLAG_INTEGER
};
var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
var transformOrigin = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: true,
  type: 1,
  parse: function(_context, tokens) {
    var origins = tokens.filter(isLengthPercentage);
    if (origins.length !== 2) {
      return DEFAULT;
    }
    return [origins[0], origins[1]];
  }
};
var visibility = {
  name: "visible",
  initialValue: "none",
  prefix: false,
  type: 2,
  parse: function(_context, visibility2) {
    switch (visibility2) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
};
var WORD_BREAK;
(function(WORD_BREAK2) {
  WORD_BREAK2["NORMAL"] = "normal";
  WORD_BREAK2["BREAK_ALL"] = "break-all";
  WORD_BREAK2["KEEP_ALL"] = "keep-all";
})(WORD_BREAK || (WORD_BREAK = {}));
var wordBreak = {
  name: "word-break",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, wordBreak2) {
    switch (wordBreak2) {
      case "break-all":
        return WORD_BREAK.BREAK_ALL;
      case "keep-all":
        return WORD_BREAK.KEEP_ALL;
      case "normal":
      default:
        return WORD_BREAK.NORMAL;
    }
  }
};
var zIndex = {
  name: "z-index",
  initialValue: "auto",
  prefix: false,
  type: 0,
  parse: function(_context, token) {
    if (token.type === 20) {
      return { auto: true, order: 0 };
    }
    if (isNumberToken(token)) {
      return { auto: false, order: token.number };
    }
    throw new Error("Invalid z-index number parsed");
  }
};
var time = {
  name: "time",
  parse: function(_context, value) {
    if (value.type === 15) {
      switch (value.unit.toLowerCase()) {
        case "s":
          return 1e3 * value.number;
        case "ms":
          return value.number;
      }
    }
    throw new Error("Unsupported time type");
  }
};
var opacity = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isNumberToken(token)) {
      return token.number;
    }
    return 1;
  }
};
var textDecorationColor = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: false,
  type: 3,
  format: "color"
};
var textDecorationLine = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(token) {
      switch (token.value) {
        case "underline":
          return 1;
        case "overline":
          return 2;
        case "line-through":
          return 3;
        case "none":
          return 4;
      }
      return 0;
    }).filter(function(line) {
      return line !== 0;
    });
  }
};
var fontFamily = {
  name: "font-family",
  initialValue: "",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    var accumulator = [];
    var results = [];
    tokens.forEach(function(token) {
      switch (token.type) {
        case 20:
        case 0:
          accumulator.push(token.value);
          break;
        case 17:
          accumulator.push(token.number.toString());
          break;
        case 4:
          results.push(accumulator.join(" "));
          accumulator.length = 0;
          break;
      }
    });
    if (accumulator.length) {
      results.push(accumulator.join(" "));
    }
    return results.map(function(result) {
      return result.indexOf(" ") === -1 ? result : "'" + result + "'";
    });
  }
};
var fontSize = {
  name: "font-size",
  initialValue: "0",
  prefix: false,
  type: 3,
  format: "length"
};
var fontWeight = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isNumberToken(token)) {
      return token.number;
    }
    if (isIdentToken(token)) {
      switch (token.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    }
    return 400;
  }
};
var fontVariant = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(_context, tokens) {
    return tokens.filter(isIdentToken).map(function(token) {
      return token.value;
    });
  }
};
var fontStyle = {
  name: "font-style",
  initialValue: "normal",
  prefix: false,
  type: 2,
  parse: function(_context, overflow2) {
    switch (overflow2) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
};
var contains = function(bit, value) {
  return (bit & value) !== 0;
};
var duration = {
  name: "duration",
  initialValue: "0s",
  prefix: false,
  type: 1,
  parse: function(context, tokens) {
    return tokens.filter(isDimensionToken).map(function(token) {
      return time.parse(context, token);
    });
  }
};
var boxShadow = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: false,
  parse: function(context, tokens) {
    if (tokens.length === 1 && isIdentWithValue(tokens[0], "none")) {
      return [];
    }
    return parseFunctionArgs(tokens).map(function(values) {
      var shadow = {
        color: 255,
        offsetX: ZERO_LENGTH,
        offsetY: ZERO_LENGTH,
        blur: ZERO_LENGTH,
        spread: ZERO_LENGTH,
        inset: false
      };
      var c = 0;
      for (var i = 0; i < values.length; i++) {
        var token = values[i];
        if (isIdentWithValue(token, "inset")) {
          shadow.inset = true;
        } else if (isLength(token)) {
          if (c === 0) {
            shadow.offsetX = token;
          } else if (c === 1) {
            shadow.offsetY = token;
          } else if (c === 2) {
            shadow.blur = token;
          } else {
            shadow.spread = token;
          }
          c++;
        } else {
          shadow.color = color$1.parse(context, token);
        }
      }
      return shadow;
    });
  }
};
var paintOrder = {
  name: "paint-order",
  initialValue: "normal",
  prefix: false,
  type: 1,
  parse: function(_context, tokens) {
    var DEFAULT_VALUE2 = [
      0,
      1,
      2
      /* MARKERS */
    ];
    var layers = [];
    tokens.filter(isIdentToken).forEach(function(token) {
      switch (token.value) {
        case "stroke":
          layers.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          layers.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          layers.push(
            2
            /* MARKERS */
          );
          break;
      }
    });
    DEFAULT_VALUE2.forEach(function(value) {
      if (layers.indexOf(value) === -1) {
        layers.push(value);
      }
    });
    return layers;
  }
};
var webkitTextStrokeColor = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: false,
  type: 3,
  format: "color"
};
var webkitTextStrokeWidth = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: false,
  parse: function(_context, token) {
    if (isDimensionToken(token)) {
      return token.number;
    }
    return 0;
  }
};
var CSSParsedDeclaration = (
  /** @class */
  function() {
    function CSSParsedDeclaration2(context, declaration) {
      var _a, _b;
      this.animationDuration = parse(context, duration, declaration.animationDuration);
      this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
      this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
      this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
      this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
      this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
      this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
      this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
      this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
      this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
      this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
      this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
      this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
      this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
      this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
      this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
      this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
      this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
      this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
      this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
      this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
      this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
      this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
      this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
      this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
      this.color = parse(context, color, declaration.color);
      this.direction = parse(context, direction, declaration.direction);
      this.display = parse(context, display, declaration.display);
      this.float = parse(context, float, declaration.cssFloat);
      this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
      this.fontSize = parse(context, fontSize, declaration.fontSize);
      this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
      this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
      this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
      this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
      this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
      this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
      this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
      this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
      this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
      this.marginTop = parse(context, marginTop, declaration.marginTop);
      this.marginRight = parse(context, marginRight, declaration.marginRight);
      this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
      this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
      this.opacity = parse(context, opacity, declaration.opacity);
      var overflowTuple = parse(context, overflow, declaration.overflow);
      this.overflowX = overflowTuple[0];
      this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
      this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
      this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
      this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
      this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
      this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
      this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
      this.position = parse(context, position, declaration.position);
      this.textAlign = parse(context, textAlign, declaration.textAlign);
      this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
      this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
      this.textShadow = parse(context, textShadow, declaration.textShadow);
      this.textTransform = parse(context, textTransform, declaration.textTransform);
      this.transform = parse(context, transform$1, declaration.transform);
      this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
      this.visibility = parse(context, visibility, declaration.visibility);
      this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
      this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
      this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
      this.zIndex = parse(context, zIndex, declaration.zIndex);
    }
    CSSParsedDeclaration2.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    };
    CSSParsedDeclaration2.prototype.isTransparent = function() {
      return isTransparent(this.backgroundColor);
    };
    CSSParsedDeclaration2.prototype.isTransformed = function() {
      return this.transform !== null;
    };
    CSSParsedDeclaration2.prototype.isPositioned = function() {
      return this.position !== 0;
    };
    CSSParsedDeclaration2.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    };
    CSSParsedDeclaration2.prototype.isFloating = function() {
      return this.float !== 0;
    };
    CSSParsedDeclaration2.prototype.isInlineLevel = function() {
      return contains(
        this.display,
        4
        /* INLINE */
      ) || contains(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || contains(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || contains(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || contains(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || contains(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    };
    return CSSParsedDeclaration2;
  }()
);
var parse = function(context, descriptor, style) {
  var tokenizer = new Tokenizer();
  var value = style !== null && typeof style !== "undefined" ? style.toString() : descriptor.initialValue;
  tokenizer.write(value);
  var parser = new Parser(tokenizer.read());
  switch (descriptor.type) {
    case 2:
      var token = parser.parseComponentValue();
      return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
    case 0:
      return descriptor.parse(context, parser.parseComponentValue());
    case 1:
      return descriptor.parse(context, parser.parseComponentValues());
    case 4:
      return parser.parseComponentValue();
    case 3:
      switch (descriptor.format) {
        case "angle":
          return angle.parse(context, parser.parseComponentValue());
        case "color":
          return color$1.parse(context, parser.parseComponentValue());
        case "image":
          return image.parse(context, parser.parseComponentValue());
        case "length":
          var length_1 = parser.parseComponentValue();
          return isLength(length_1) ? length_1 : ZERO_LENGTH;
        case "length-percentage":
          var value_1 = parser.parseComponentValue();
          return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
        case "time":
          return time.parse(context, parser.parseComponentValue());
      }
      break;
  }
};
var elementDebuggerAttribute = "data-html2canvas-debug";
var getElementDebugType = function(element) {
  var attribute = element.getAttribute(elementDebuggerAttribute);
  switch (attribute) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
};
var isDebugging = function(element, type) {
  var elementType = getElementDebugType(element);
  return elementType === 1 || type === elementType;
};
var ElementContainer = (
  /** @class */
  function() {
    function ElementContainer2(context, element) {
      this.context = context;
      this.textNodes = [];
      this.elements = [];
      this.flags = 0;
      if (isDebugging(
        element,
        3
        /* PARSE */
      )) {
        debugger;
      }
      this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
      if (isHTMLElementNode(element)) {
        if (this.styles.animationDuration.some(function(duration2) {
          return duration2 > 0;
        })) {
          element.style.animationDuration = "0s";
        }
        if (this.styles.transform !== null) {
          element.style.transform = "none";
        }
      }
      this.bounds = parseBounds(this.context, element);
      if (isDebugging(
        element,
        4
        /* RENDER */
      )) {
        this.flags |= 16;
      }
    }
    return ElementContainer2;
  }()
);
var base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=";
var chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
  lookup$1[chars$1.charCodeAt(i$1)] = i$1;
}
var decode = function(base642) {
  var bufferLength = base642.length * 0.75, len = base642.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base642[base642.length - 1] === "=") {
    bufferLength--;
    if (base642[base642.length - 2] === "=") {
      bufferLength--;
    }
  }
  var buffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined" && typeof Uint8Array.prototype.slice !== "undefined" ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
  var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup$1[base642.charCodeAt(i)];
    encoded2 = lookup$1[base642.charCodeAt(i + 1)];
    encoded3 = lookup$1[base642.charCodeAt(i + 2)];
    encoded4 = lookup$1[base642.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return buffer;
};
var polyUint16Array = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 2) {
    bytes.push(buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var polyUint32Array = function(buffer) {
  var length = buffer.length;
  var bytes = [];
  for (var i = 0; i < length; i += 4) {
    bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
  }
  return bytes;
};
var UTRIE2_SHIFT_2 = 5;
var UTRIE2_SHIFT_1 = 6 + 5;
var UTRIE2_INDEX_SHIFT = 2;
var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
var UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> UTRIE2_SHIFT_2;
var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> UTRIE2_SHIFT_2;
var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 2048 >> 6;
var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> UTRIE2_SHIFT_1;
var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
var slice16 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint16Array(Array.prototype.slice.call(view, start, end));
};
var slice32 = function(view, start, end) {
  if (view.slice) {
    return view.slice(start, end);
  }
  return new Uint32Array(Array.prototype.slice.call(view, start, end));
};
var createTrieFromBase64 = function(base642, _byteLength) {
  var buffer = decode(base642);
  var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
  var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
  var headerLength = 24;
  var index = slice16(view16, headerLength / 2, view32[4] / 2);
  var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
  return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie = (
  /** @class */
  function() {
    function Trie2(initialValue, errorValue, highStart, highValueIndex, index, data) {
      this.initialValue = initialValue;
      this.errorValue = errorValue;
      this.highStart = highStart;
      this.highValueIndex = highValueIndex;
      this.index = index;
      this.data = data;
    }
    Trie2.prototype.get = function(codePoint) {
      var ix;
      if (codePoint >= 0) {
        if (codePoint < 55296 || codePoint > 56319 && codePoint <= 65535) {
          ix = this.index[codePoint >> UTRIE2_SHIFT_2];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }
        if (codePoint <= 65535) {
          ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 55296 >> UTRIE2_SHIFT_2)];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }
        if (codePoint < this.highStart) {
          ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
          ix = this.index[ix];
          ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
          ix = this.index[ix];
          ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
          return this.data[ix];
        }
        if (codePoint <= 1114111) {
          return this.data[this.highValueIndex];
        }
      }
      return this.errorValue;
    };
    return Trie2;
  }()
);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var Prepend = 1;
var CR = 2;
var LF = 3;
var Control = 4;
var Extend = 5;
var SpacingMark = 7;
var L = 8;
var V = 9;
var T = 10;
var LV = 11;
var LVT = 12;
var ZWJ = 13;
var Extended_Pictographic = 14;
var RI = 15;
var toCodePoints = function(str) {
  var codePoints = [];
  var i = 0;
  var length = str.length;
  while (i < length) {
    var value = str.charCodeAt(i++);
    if (value >= 55296 && value <= 56319 && i < length) {
      var extra = str.charCodeAt(i++);
      if ((extra & 64512) === 56320) {
        codePoints.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        codePoints.push(value);
        i--;
      }
    } else {
      codePoints.push(value);
    }
  }
  return codePoints;
};
var fromCodePoint = function() {
  var codePoints = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    codePoints[_i] = arguments[_i];
  }
  if (String.fromCodePoint) {
    return String.fromCodePoint.apply(String, codePoints);
  }
  var length = codePoints.length;
  if (!length) {
    return "";
  }
  var codeUnits = [];
  var index = -1;
  var result = "";
  while (++index < length) {
    var codePoint = codePoints[index];
    if (codePoint <= 65535) {
      codeUnits.push(codePoint);
    } else {
      codePoint -= 65536;
      codeUnits.push((codePoint >> 10) + 55296, codePoint % 1024 + 56320);
    }
    if (index + 1 === length || codeUnits.length > 16384) {
      result += String.fromCharCode.apply(String, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
};
var UnicodeTrie = createTrieFromBase64(base64);
var BREAK_NOT_ALLOWED = "×";
var BREAK_ALLOWED = "÷";
var codePointToClass = function(codePoint) {
  return UnicodeTrie.get(codePoint);
};
var _graphemeBreakAtIndex = function(_codePoints, classTypes, index) {
  var prevIndex = index - 2;
  var prev = classTypes[prevIndex];
  var current = classTypes[index - 1];
  var next = classTypes[index];
  if (current === CR && next === LF) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === CR || current === LF || current === Control) {
    return BREAK_ALLOWED;
  }
  if (next === CR || next === LF || next === Control) {
    return BREAK_ALLOWED;
  }
  if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
    return BREAK_NOT_ALLOWED;
  }
  if ((current === LV || current === V) && (next === V || next === T)) {
    return BREAK_NOT_ALLOWED;
  }
  if ((current === LVT || current === T) && next === T) {
    return BREAK_NOT_ALLOWED;
  }
  if (next === ZWJ || next === Extend) {
    return BREAK_NOT_ALLOWED;
  }
  if (next === SpacingMark) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === Prepend) {
    return BREAK_NOT_ALLOWED;
  }
  if (current === ZWJ && next === Extended_Pictographic) {
    while (prev === Extend) {
      prev = classTypes[--prevIndex];
    }
    if (prev === Extended_Pictographic) {
      return BREAK_NOT_ALLOWED;
    }
  }
  if (current === RI && next === RI) {
    var countRI = 0;
    while (prev === RI) {
      countRI++;
      prev = classTypes[--prevIndex];
    }
    if (countRI % 2 === 0) {
      return BREAK_NOT_ALLOWED;
    }
  }
  return BREAK_ALLOWED;
};
var GraphemeBreaker = function(str) {
  var codePoints = toCodePoints(str);
  var length = codePoints.length;
  var index = 0;
  var lastEnd = 0;
  var classTypes = codePoints.map(codePointToClass);
  return {
    next: function() {
      if (index >= length) {
        return { done: true, value: null };
      }
      var graphemeBreak = BREAK_NOT_ALLOWED;
      while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {
      }
      if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
        var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
        lastEnd = index;
        return { value, done: false };
      }
      return { done: true, value: null };
    }
  };
};
var splitGraphemes = function(str) {
  var breaker = GraphemeBreaker(str);
  var graphemes = [];
  var bk;
  while (!(bk = breaker.next()).done) {
    if (bk.value) {
      graphemes.push(bk.value.slice());
    }
  }
  return graphemes;
};
var testRangeBounds = function(document2) {
  var TEST_HEIGHT = 123;
  if (document2.createRange) {
    var range = document2.createRange();
    if (range.getBoundingClientRect) {
      var testElement = document2.createElement("boundtest");
      testElement.style.height = TEST_HEIGHT + "px";
      testElement.style.display = "block";
      document2.body.appendChild(testElement);
      range.selectNode(testElement);
      var rangeBounds = range.getBoundingClientRect();
      var rangeHeight = Math.round(rangeBounds.height);
      document2.body.removeChild(testElement);
      if (rangeHeight === TEST_HEIGHT) {
        return true;
      }
    }
  }
  return false;
};
var testIOSLineBreak = function(document2) {
  var testElement = document2.createElement("boundtest");
  testElement.style.width = "50px";
  testElement.style.display = "block";
  testElement.style.fontSize = "12px";
  testElement.style.letterSpacing = "0px";
  testElement.style.wordSpacing = "0px";
  document2.body.appendChild(testElement);
  var range = document2.createRange();
  testElement.innerHTML = typeof "".repeat === "function" ? "&#128104;".repeat(10) : "";
  var node = testElement.firstChild;
  var textList = toCodePoints$1(node.data).map(function(i) {
    return fromCodePoint$1(i);
  });
  var offset = 0;
  var prev = {};
  var supports = textList.every(function(text, i) {
    range.setStart(node, offset);
    range.setEnd(node, offset + text.length);
    var rect = range.getBoundingClientRect();
    offset += text.length;
    var boundAhead = rect.x > prev.x || rect.y > prev.y;
    prev = rect;
    if (i === 0) {
      return true;
    }
    return boundAhead;
  });
  document2.body.removeChild(testElement);
  return supports;
};
var testCORS = function() {
  return typeof new Image().crossOrigin !== "undefined";
};
var testResponseType = function() {
  return typeof new XMLHttpRequest().responseType === "string";
};
var testSVG = function(document2) {
  var img = new Image();
  var canvas = document2.createElement("canvas");
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return false;
  }
  img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    ctx.drawImage(img, 0, 0);
    canvas.toDataURL();
  } catch (e2) {
    return false;
  }
  return true;
};
var isGreenPixel = function(data) {
  return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
};
var testForeignObject = function(document2) {
  var canvas = document2.createElement("canvas");
  var size = 100;
  canvas.width = size;
  canvas.height = size;
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return Promise.reject(false);
  }
  ctx.fillStyle = "rgb(0, 255, 0)";
  ctx.fillRect(0, 0, size, size);
  var img = new Image();
  var greenImageSrc = canvas.toDataURL();
  img.src = greenImageSrc;
  var svg = createForeignObjectSVG(size, size, 0, 0, img);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, size, size);
  return loadSerializedSVG$1(svg).then(function(img2) {
    ctx.drawImage(img2, 0, 0);
    var data = ctx.getImageData(0, 0, size, size).data;
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, size, size);
    var node = document2.createElement("div");
    node.style.backgroundImage = "url(" + greenImageSrc + ")";
    node.style.height = size + "px";
    return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
  }).then(function(img2) {
    ctx.drawImage(img2, 0, 0);
    return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
  }).catch(function() {
    return false;
  });
};
var createForeignObjectSVG = function(width, height, x, y, node) {
  var xmlns = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(xmlns, "svg");
  var foreignObject = document.createElementNS(xmlns, "foreignObject");
  svg.setAttributeNS(null, "width", width.toString());
  svg.setAttributeNS(null, "height", height.toString());
  foreignObject.setAttributeNS(null, "width", "100%");
  foreignObject.setAttributeNS(null, "height", "100%");
  foreignObject.setAttributeNS(null, "x", x.toString());
  foreignObject.setAttributeNS(null, "y", y.toString());
  foreignObject.setAttributeNS(null, "externalResourcesRequired", "true");
  svg.appendChild(foreignObject);
  foreignObject.appendChild(node);
  return svg;
};
var loadSerializedSVG$1 = function(svg) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      return resolve(img);
    };
    img.onerror = reject;
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
  });
};
var FEATURES = {
  get SUPPORT_RANGE_BOUNDS() {
    var value = testRangeBounds(document);
    Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", { value });
    return value;
  },
  get SUPPORT_WORD_BREAKING() {
    var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
    Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", { value });
    return value;
  },
  get SUPPORT_SVG_DRAWING() {
    var value = testSVG(document);
    Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", { value });
    return value;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var value = typeof Array.from === "function" && typeof window.fetch === "function" ? testForeignObject(document) : Promise.resolve(false);
    Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", { value });
    return value;
  },
  get SUPPORT_CORS_IMAGES() {
    var value = testCORS();
    Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", { value });
    return value;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var value = testResponseType();
    Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", { value });
    return value;
  },
  get SUPPORT_CORS_XHR() {
    var value = "withCredentials" in new XMLHttpRequest();
    Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", { value });
    return value;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var value = !!(typeof Intl !== "undefined" && Intl.Segmenter);
    Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value });
    return value;
  }
};
var TextBounds = (
  /** @class */
  function() {
    function TextBounds2(text, bounds) {
      this.text = text;
      this.bounds = bounds;
    }
    return TextBounds2;
  }()
);
var parseTextBounds = function(context, value, styles, node) {
  var textList = breakText(value, styles);
  var textBounds = [];
  var offset = 0;
  textList.forEach(function(text) {
    if (styles.textDecorationLine.length || text.trim().length > 0) {
      if (FEATURES.SUPPORT_RANGE_BOUNDS) {
        var clientRects = createRange(node, offset, text.length).getClientRects();
        if (clientRects.length > 1) {
          var subSegments = segmentGraphemes(text);
          var subOffset_1 = 0;
          subSegments.forEach(function(subSegment) {
            textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
            subOffset_1 += subSegment.length;
          });
        } else {
          textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
        }
      } else {
        var replacementNode = node.splitText(text.length);
        textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
        node = replacementNode;
      }
    } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
      node = node.splitText(text.length);
    }
    offset += text.length;
  });
  return textBounds;
};
var getWrapperBounds = function(context, node) {
  var ownerDocument = node.ownerDocument;
  if (ownerDocument) {
    var wrapper = ownerDocument.createElement("html2canvaswrapper");
    wrapper.appendChild(node.cloneNode(true));
    var parentNode = node.parentNode;
    if (parentNode) {
      parentNode.replaceChild(wrapper, node);
      var bounds = parseBounds(context, wrapper);
      if (wrapper.firstChild) {
        parentNode.replaceChild(wrapper.firstChild, wrapper);
      }
      return bounds;
    }
  }
  return Bounds.EMPTY;
};
var createRange = function(node, offset, length) {
  var ownerDocument = node.ownerDocument;
  if (!ownerDocument) {
    throw new Error("Node has no owner document");
  }
  var range = ownerDocument.createRange();
  range.setStart(node, offset);
  range.setEnd(node, offset + length);
  return range;
};
var segmentGraphemes = function(value) {
  if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(segmenter.segment(value)).map(function(segment) {
      return segment.segment;
    });
  }
  return splitGraphemes(value);
};
var segmentWords = function(value, styles) {
  if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var segmenter = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(segmenter.segment(value)).map(function(segment) {
      return segment.segment;
    });
  }
  return breakWords(value, styles);
};
var breakText = function(value, styles) {
  return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
};
var wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241];
var breakWords = function(str, styles) {
  var breaker = LineBreaker(str, {
    lineBreak: styles.lineBreak,
    wordBreak: styles.overflowWrap === "break-word" ? "break-word" : styles.wordBreak
  });
  var words = [];
  var bk;
  var _loop_1 = function() {
    if (bk.value) {
      var value = bk.value.slice();
      var codePoints = toCodePoints$1(value);
      var word_1 = "";
      codePoints.forEach(function(codePoint) {
        if (wordSeparators.indexOf(codePoint) === -1) {
          word_1 += fromCodePoint$1(codePoint);
        } else {
          if (word_1.length) {
            words.push(word_1);
          }
          words.push(fromCodePoint$1(codePoint));
          word_1 = "";
        }
      });
      if (word_1.length) {
        words.push(word_1);
      }
    }
  };
  while (!(bk = breaker.next()).done) {
    _loop_1();
  }
  return words;
};
var TextContainer = (
  /** @class */
  function() {
    function TextContainer2(context, node, styles) {
      this.text = transform(node.data, styles.textTransform);
      this.textBounds = parseTextBounds(context, this.text, styles, node);
    }
    return TextContainer2;
  }()
);
var transform = function(text, transform2) {
  switch (transform2) {
    case 1:
      return text.toLowerCase();
    case 3:
      return text.replace(CAPITALIZE, capitalize);
    case 2:
      return text.toUpperCase();
    default:
      return text;
  }
};
var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
var capitalize = function(m, p1, p2) {
  if (m.length > 0) {
    return p1 + p2.toUpperCase();
  }
  return m;
};
var ImageElementContainer = (
  /** @class */
  function(_super) {
    __extends(ImageElementContainer2, _super);
    function ImageElementContainer2(context, img) {
      var _this = _super.call(this, context, img) || this;
      _this.src = img.currentSrc || img.src;
      _this.intrinsicWidth = img.naturalWidth;
      _this.intrinsicHeight = img.naturalHeight;
      _this.context.cache.addImage(_this.src);
      return _this;
    }
    return ImageElementContainer2;
  }(ElementContainer)
);
var CanvasElementContainer = (
  /** @class */
  function(_super) {
    __extends(CanvasElementContainer2, _super);
    function CanvasElementContainer2(context, canvas) {
      var _this = _super.call(this, context, canvas) || this;
      _this.canvas = canvas;
      _this.intrinsicWidth = canvas.width;
      _this.intrinsicHeight = canvas.height;
      return _this;
    }
    return CanvasElementContainer2;
  }(ElementContainer)
);
var SVGElementContainer = (
  /** @class */
  function(_super) {
    __extends(SVGElementContainer2, _super);
    function SVGElementContainer2(context, img) {
      var _this = _super.call(this, context, img) || this;
      var s = new XMLSerializer();
      var bounds = parseBounds(context, img);
      img.setAttribute("width", bounds.width + "px");
      img.setAttribute("height", bounds.height + "px");
      _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
      _this.intrinsicWidth = img.width.baseVal.value;
      _this.intrinsicHeight = img.height.baseVal.value;
      _this.context.cache.addImage(_this.svg);
      return _this;
    }
    return SVGElementContainer2;
  }(ElementContainer)
);
var LIElementContainer = (
  /** @class */
  function(_super) {
    __extends(LIElementContainer2, _super);
    function LIElementContainer2(context, element) {
      var _this = _super.call(this, context, element) || this;
      _this.value = element.value;
      return _this;
    }
    return LIElementContainer2;
  }(ElementContainer)
);
var OLElementContainer = (
  /** @class */
  function(_super) {
    __extends(OLElementContainer2, _super);
    function OLElementContainer2(context, element) {
      var _this = _super.call(this, context, element) || this;
      _this.start = element.start;
      _this.reversed = typeof element.reversed === "boolean" && element.reversed === true;
      return _this;
    }
    return OLElementContainer2;
  }(ElementContainer)
);
var CHECKBOX_BORDER_RADIUS = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
];
var RADIO_BORDER_RADIUS = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
];
var reformatInputBounds = function(bounds) {
  if (bounds.width > bounds.height) {
    return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
  } else if (bounds.width < bounds.height) {
    return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
  }
  return bounds;
};
var getInputValue = function(node) {
  var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("•") : node.value;
  return value.length === 0 ? node.placeholder || "" : value;
};
var CHECKBOX = "checkbox";
var RADIO = "radio";
var PASSWORD = "password";
var INPUT_COLOR = 707406591;
var InputElementContainer = (
  /** @class */
  function(_super) {
    __extends(InputElementContainer2, _super);
    function InputElementContainer2(context, input) {
      var _this = _super.call(this, context, input) || this;
      _this.type = input.type.toLowerCase();
      _this.checked = input.checked;
      _this.value = getInputValue(input);
      if (_this.type === CHECKBOX || _this.type === RADIO) {
        _this.styles.backgroundColor = 3739148031;
        _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 2779096575;
        _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
        _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1;
        _this.styles.backgroundClip = [
          0
          /* BORDER_BOX */
        ];
        _this.styles.backgroundOrigin = [
          0
          /* BORDER_BOX */
        ];
        _this.bounds = reformatInputBounds(_this.bounds);
      }
      switch (_this.type) {
        case CHECKBOX:
          _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
          break;
        case RADIO:
          _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
          break;
      }
      return _this;
    }
    return InputElementContainer2;
  }(ElementContainer)
);
var SelectElementContainer = (
  /** @class */
  function(_super) {
    __extends(SelectElementContainer2, _super);
    function SelectElementContainer2(context, element) {
      var _this = _super.call(this, context, element) || this;
      var option = element.options[element.selectedIndex || 0];
      _this.value = option ? option.text || "" : "";
      return _this;
    }
    return SelectElementContainer2;
  }(ElementContainer)
);
var TextareaElementContainer = (
  /** @class */
  function(_super) {
    __extends(TextareaElementContainer2, _super);
    function TextareaElementContainer2(context, element) {
      var _this = _super.call(this, context, element) || this;
      _this.value = element.value;
      return _this;
    }
    return TextareaElementContainer2;
  }(ElementContainer)
);
var IFrameElementContainer = (
  /** @class */
  function(_super) {
    __extends(IFrameElementContainer2, _super);
    function IFrameElementContainer2(context, iframe) {
      var _this = _super.call(this, context, iframe) || this;
      _this.src = iframe.src;
      _this.width = parseInt(iframe.width, 10) || 0;
      _this.height = parseInt(iframe.height, 10) || 0;
      _this.backgroundColor = _this.styles.backgroundColor;
      try {
        if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
          _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
          var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
          var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
          _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
        }
      } catch (e2) {
      }
      return _this;
    }
    return IFrameElementContainer2;
  }(ElementContainer)
);
var LIST_OWNERS = ["OL", "UL", "MENU"];
var parseNodeTree = function(context, node, parent, root) {
  for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
    nextNode = childNode.nextSibling;
    if (isTextNode(childNode) && childNode.data.trim().length > 0) {
      parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
    } else if (isElementNode(childNode)) {
      if (isSlotElement(childNode) && childNode.assignedNodes) {
        childNode.assignedNodes().forEach(function(childNode2) {
          return parseNodeTree(context, childNode2, parent, root);
        });
      } else {
        var container = createContainer(context, childNode);
        if (container.styles.isVisible()) {
          if (createsRealStackingContext(childNode, container, root)) {
            container.flags |= 4;
          } else if (createsStackingContext(container.styles)) {
            container.flags |= 2;
          }
          if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
            container.flags |= 8;
          }
          parent.elements.push(container);
          childNode.slot;
          if (childNode.shadowRoot) {
            parseNodeTree(context, childNode.shadowRoot, container, root);
          } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
            parseNodeTree(context, childNode, container, root);
          }
        }
      }
    }
  }
};
var createContainer = function(context, element) {
  if (isImageElement(element)) {
    return new ImageElementContainer(context, element);
  }
  if (isCanvasElement(element)) {
    return new CanvasElementContainer(context, element);
  }
  if (isSVGElement(element)) {
    return new SVGElementContainer(context, element);
  }
  if (isLIElement(element)) {
    return new LIElementContainer(context, element);
  }
  if (isOLElement(element)) {
    return new OLElementContainer(context, element);
  }
  if (isInputElement(element)) {
    return new InputElementContainer(context, element);
  }
  if (isSelectElement(element)) {
    return new SelectElementContainer(context, element);
  }
  if (isTextareaElement(element)) {
    return new TextareaElementContainer(context, element);
  }
  if (isIFrameElement(element)) {
    return new IFrameElementContainer(context, element);
  }
  return new ElementContainer(context, element);
};
var parseTree = function(context, element) {
  var container = createContainer(context, element);
  container.flags |= 4;
  parseNodeTree(context, element, container, container);
  return container;
};
var createsRealStackingContext = function(node, container, root) {
  return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
};
var createsStackingContext = function(styles) {
  return styles.isPositioned() || styles.isFloating();
};
var isTextNode = function(node) {
  return node.nodeType === Node.TEXT_NODE;
};
var isElementNode = function(node) {
  return node.nodeType === Node.ELEMENT_NODE;
};
var isHTMLElementNode = function(node) {
  return isElementNode(node) && typeof node.style !== "undefined" && !isSVGElementNode(node);
};
var isSVGElementNode = function(element) {
  return typeof element.className === "object";
};
var isLIElement = function(node) {
  return node.tagName === "LI";
};
var isOLElement = function(node) {
  return node.tagName === "OL";
};
var isInputElement = function(node) {
  return node.tagName === "INPUT";
};
var isSVGElement = function(node) {
  return node.tagName === "svg";
};
var isBodyElement = function(node) {
  return node.tagName === "BODY";
};
var isCanvasElement = function(node) {
  return node.tagName === "CANVAS";
};
var isImageElement = function(node) {
  return node.tagName === "IMG";
};
var isIFrameElement = function(node) {
  return node.tagName === "IFRAME";
};
var isTextareaElement = function(node) {
  return node.tagName === "TEXTAREA";
};
var isSelectElement = function(node) {
  return node.tagName === "SELECT";
};
var isSlotElement = function(node) {
  return node.tagName === "SLOT";
};
var ROMAN_UPPER = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
};
var ARMENIAN = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
};
var HEBREW = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
};
var GEORGIAN = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
};
var createAdditiveCounter = function(value, min, max, symbols, fallback, suffix) {
  if (value < min || value > max) {
    return createCounterText(value, fallback, suffix.length > 0);
  }
  return symbols.integers.reduce(function(string, integer, index) {
    while (value >= integer) {
      value -= integer;
      string += symbols.values[index];
    }
    return string;
  }, "") + suffix;
};
var createCounterStyleWithSymbolResolver = function(value, codePointRangeLength, isNumeric, resolver) {
  var string = "";
  do {
    if (!isNumeric) {
      value--;
    }
    string = resolver(value) + string;
    value /= codePointRangeLength;
  } while (value * codePointRangeLength >= codePointRangeLength);
  return string;
};
var createCounterStyleFromRange = function(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
  var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
  return (value < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function(codePoint) {
    return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
  }) + suffix);
};
var createCounterStyleFromSymbols = function(value, symbols, suffix) {
  if (suffix === void 0) {
    suffix = ". ";
  }
  var codePointRangeLength = symbols.length;
  return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function(codePoint) {
    return symbols[Math.floor(codePoint % codePointRangeLength)];
  }) + suffix;
};
var CJK_ZEROS = 1 << 0;
var CJK_TEN_COEFFICIENTS = 1 << 1;
var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
var createCJKCounter = function(value, numbers, multipliers, negativeSign, suffix, flags) {
  if (value < -9999 || value > 9999) {
    return createCounterText(value, 4, suffix.length > 0);
  }
  var tmp = Math.abs(value);
  var string = suffix;
  if (tmp === 0) {
    return numbers[0] + string;
  }
  for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
    var coefficient = tmp % 10;
    if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== "") {
      string = numbers[coefficient] + string;
    } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
      string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : "") + string;
    } else if (coefficient === 1 && digit > 0) {
      string = multipliers[digit - 1] + string;
    }
    tmp = Math.floor(tmp / 10);
  }
  return (value < 0 ? negativeSign : "") + string;
};
var CHINESE_INFORMAL_MULTIPLIERS = "十百千萬";
var CHINESE_FORMAL_MULTIPLIERS = "拾佰仟萬";
var JAPANESE_NEGATIVE = "マイナス";
var KOREAN_NEGATIVE = "마이너스";
var createCounterText = function(value, type, appendSuffix) {
  var defaultSuffix = appendSuffix ? ". " : "";
  var cjkSuffix = appendSuffix ? "、" : "";
  var koreanSuffix = appendSuffix ? ", " : "";
  var spaceSuffix = appendSuffix ? " " : "";
  switch (type) {
    case 0:
      return "•" + spaceSuffix;
    case 1:
      return "◦" + spaceSuffix;
    case 2:
      return "◾" + spaceSuffix;
    case 5:
      var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
      return string.length < 4 ? "0" + string : string;
    case 4:
      return createCounterStyleFromSymbols(value, "〇一二三四五六七八九", cjkSuffix);
    case 6:
      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix).toLowerCase();
    case 7:
      return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3, defaultSuffix);
    case 8:
      return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
    case 9:
      return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
    case 10:
      return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
    case 11:
      return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
    case 12:
    case 49:
      return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix);
    case 35:
      return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3, defaultSuffix).toLowerCase();
    case 13:
      return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
    case 14:
    case 30:
      return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
    case 15:
      return createCounterStyleFromSymbols(value, "子丑寅卯辰巳午未申酉戌亥", cjkSuffix);
    case 16:
      return createCounterStyleFromSymbols(value, "甲乙丙丁戊己庚辛壬癸", cjkSuffix);
    case 17:
    case 48:
      return createCJKCounter(value, "零一二三四五六七八九", CHINESE_INFORMAL_MULTIPLIERS, "負", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 47:
      return createCJKCounter(value, "零壹貳參肆伍陸柒捌玖", CHINESE_FORMAL_MULTIPLIERS, "負", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 42:
      return createCJKCounter(value, "零一二三四五六七八九", CHINESE_INFORMAL_MULTIPLIERS, "负", cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 41:
      return createCJKCounter(value, "零壹贰叁肆伍陆柒捌玖", CHINESE_FORMAL_MULTIPLIERS, "负", cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 26:
      return createCJKCounter(value, "〇一二三四五六七八九", "十百千万", JAPANESE_NEGATIVE, cjkSuffix, 0);
    case 25:
      return createCJKCounter(value, "零壱弐参四伍六七八九", "拾百千万", JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 31:
      return createCJKCounter(value, "영일이삼사오육칠팔구", "십백천만", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 33:
      return createCJKCounter(value, "零一二三四五六七八九", "十百千萬", KOREAN_NEGATIVE, koreanSuffix, 0);
    case 32:
      return createCJKCounter(value, "零壹貳參四五六七八九", "拾百千", KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 18:
      return createCounterStyleFromRange(value, 2406, 2415, true, defaultSuffix);
    case 20:
      return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3, defaultSuffix);
    case 21:
      return createCounterStyleFromRange(value, 2790, 2799, true, defaultSuffix);
    case 22:
      return createCounterStyleFromRange(value, 2662, 2671, true, defaultSuffix);
    case 22:
      return createAdditiveCounter(value, 1, 10999, HEBREW, 3, defaultSuffix);
    case 23:
      return createCounterStyleFromSymbols(value, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return createCounterStyleFromSymbols(value, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return createCounterStyleFromRange(value, 3302, 3311, true, defaultSuffix);
    case 28:
      return createCounterStyleFromSymbols(value, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", cjkSuffix);
    case 29:
      return createCounterStyleFromSymbols(value, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", cjkSuffix);
    case 34:
      return createCounterStyleFromRange(value, 3792, 3801, true, defaultSuffix);
    case 37:
      return createCounterStyleFromRange(value, 6160, 6169, true, defaultSuffix);
    case 38:
      return createCounterStyleFromRange(value, 4160, 4169, true, defaultSuffix);
    case 39:
      return createCounterStyleFromRange(value, 2918, 2927, true, defaultSuffix);
    case 40:
      return createCounterStyleFromRange(value, 1776, 1785, true, defaultSuffix);
    case 43:
      return createCounterStyleFromRange(value, 3046, 3055, true, defaultSuffix);
    case 44:
      return createCounterStyleFromRange(value, 3174, 3183, true, defaultSuffix);
    case 45:
      return createCounterStyleFromRange(value, 3664, 3673, true, defaultSuffix);
    case 46:
      return createCounterStyleFromRange(value, 3872, 3881, true, defaultSuffix);
    case 3:
    default:
      return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
  }
};
var PseudoElementType;
(function(PseudoElementType2) {
  PseudoElementType2[PseudoElementType2["BEFORE"] = 0] = "BEFORE";
  PseudoElementType2[PseudoElementType2["AFTER"] = 1] = "AFTER";
})(PseudoElementType || (PseudoElementType = {}));
var CacheStorage = (
  /** @class */
  function() {
    function CacheStorage2() {
    }
    CacheStorage2.getOrigin = function(url) {
      var link = CacheStorage2._link;
      if (!link) {
        return "about:blank";
      }
      link.href = url;
      link.href = link.href;
      return link.protocol + link.hostname + link.port;
    };
    CacheStorage2.isSameOrigin = function(src) {
      return CacheStorage2.getOrigin(src) === CacheStorage2._origin;
    };
    CacheStorage2.setContext = function(window2) {
      CacheStorage2._link = window2.document.createElement("a");
      CacheStorage2._origin = CacheStorage2.getOrigin(window2.location.href);
    };
    CacheStorage2._origin = "about:blank";
    return CacheStorage2;
  }()
);
var Vector = (
  /** @class */
  function() {
    function Vector2(x, y) {
      this.type = 0;
      this.x = x;
      this.y = y;
    }
    Vector2.prototype.add = function(deltaX, deltaY) {
      return new Vector2(this.x + deltaX, this.y + deltaY);
    };
    return Vector2;
  }()
);
var lerp = function(a2, b, t) {
  return new Vector(a2.x + (b.x - a2.x) * t, a2.y + (b.y - a2.y) * t);
};
var BezierCurve = (
  /** @class */
  function() {
    function BezierCurve2(start, startControl, endControl, end) {
      this.type = 1;
      this.start = start;
      this.startControl = startControl;
      this.endControl = endControl;
      this.end = end;
    }
    BezierCurve2.prototype.subdivide = function(t, firstHalf) {
      var ab = lerp(this.start, this.startControl, t);
      var bc = lerp(this.startControl, this.endControl, t);
      var cd = lerp(this.endControl, this.end, t);
      var abbc = lerp(ab, bc, t);
      var bccd = lerp(bc, cd, t);
      var dest = lerp(abbc, bccd, t);
      return firstHalf ? new BezierCurve2(this.start, ab, abbc, dest) : new BezierCurve2(dest, bccd, cd, this.end);
    };
    BezierCurve2.prototype.add = function(deltaX, deltaY) {
      return new BezierCurve2(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
    };
    BezierCurve2.prototype.reverse = function() {
      return new BezierCurve2(this.end, this.endControl, this.startControl, this.start);
    };
    return BezierCurve2;
  }()
);
var isBezierCurve = function(path) {
  return path.type === 1;
};
var BoundCurves = (
  /** @class */
  function() {
    function BoundCurves2(element) {
      var styles = element.styles;
      var bounds = element.bounds;
      var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
      var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
      var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
      var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
      var factors = [];
      factors.push((tlh + trh) / bounds.width);
      factors.push((blh + brh) / bounds.width);
      factors.push((tlv + blv) / bounds.height);
      factors.push((trv + brv) / bounds.height);
      var maxFactor = Math.max.apply(Math, factors);
      if (maxFactor > 1) {
        tlh /= maxFactor;
        tlv /= maxFactor;
        trh /= maxFactor;
        trv /= maxFactor;
        brh /= maxFactor;
        brv /= maxFactor;
        blh /= maxFactor;
        blv /= maxFactor;
      }
      var topWidth = bounds.width - trh;
      var rightHeight = bounds.height - brv;
      var bottomWidth = bounds.width - brh;
      var leftHeight = bounds.height - blv;
      var borderTopWidth2 = styles.borderTopWidth;
      var borderRightWidth2 = styles.borderRightWidth;
      var borderBottomWidth2 = styles.borderBottomWidth;
      var borderLeftWidth2 = styles.borderLeftWidth;
      var paddingTop2 = getAbsoluteValue(styles.paddingTop, element.bounds.width);
      var paddingRight2 = getAbsoluteValue(styles.paddingRight, element.bounds.width);
      var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
      var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
      this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3, tlh - borderLeftWidth2 / 3, tlv - borderTopWidth2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + borderTopWidth2 / 3);
      this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 3, trh - borderRightWidth2 / 3, trv - borderTopWidth2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + borderTopWidth2 / 3);
      this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 3, brv - borderBottomWidth2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
      this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 / 3, blv - borderBottomWidth2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 3, bounds.top + bounds.height - borderBottomWidth2 / 3);
      this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3, tlh - borderLeftWidth2 * 2 / 3, tlv - borderTopWidth2 * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
      this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 * 2 / 3, trh - borderRightWidth2 * 2 / 3, trv - borderTopWidth2 * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + borderTopWidth2 * 2 / 3);
      this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 * 2 / 3, brv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
      this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth2 * 2 / 3, blv - borderBottomWidth2 * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 * 2 / 3, bounds.top + bounds.height - borderBottomWidth2 * 2 / 3);
      this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2, tlh - borderLeftWidth2 / 2, tlv - borderTopWidth2 / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + borderTopWidth2 / 2);
      this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth2 / 2, trh - borderRightWidth2 / 2, trv - borderTopWidth2 / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + borderTopWidth2 / 2);
      this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth2 / 2, brv - borderBottomWidth2 / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
      this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 / 2, bounds.top + leftHeight, blh - borderLeftWidth2 / 2, blv - borderBottomWidth2 / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 / 2, bounds.top + bounds.height - borderBottomWidth2 / 2);
      this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
      this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
      this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
      this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
      this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2, Math.max(0, tlh - borderLeftWidth2), Math.max(0, tlv - borderTopWidth2), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + borderTopWidth2);
      this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth2), bounds.top + borderTopWidth2, topWidth > bounds.width + borderRightWidth2 ? 0 : Math.max(0, trh - borderRightWidth2), Math.max(0, trv - borderTopWidth2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + borderTopWidth2);
      this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth2), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth2), Math.max(0, brh - borderRightWidth2), Math.max(0, brv - borderBottomWidth2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth2, bounds.top + bounds.height - borderBottomWidth2);
      this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth2), Math.max(0, blh - borderLeftWidth2), Math.max(0, blv - borderBottomWidth2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2, bounds.top + bounds.height - borderBottomWidth2);
      this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2, Math.max(0, tlh - (borderLeftWidth2 + paddingLeft2)), Math.max(0, tlv - (borderTopWidth2 + paddingTop2)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + borderTopWidth2 + paddingTop2);
      this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth2 + paddingLeft2), bounds.top + borderTopWidth2 + paddingTop2, topWidth > bounds.width + borderLeftWidth2 + paddingLeft2 ? 0 : trh - borderLeftWidth2 + paddingLeft2, trv - (borderTopWidth2 + paddingTop2), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + borderTopWidth2 + paddingTop2);
      this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth2 + paddingLeft2)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth2 + paddingTop2), Math.max(0, brh - (borderRightWidth2 + paddingRight2)), brv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth2 + paddingRight2), bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
      this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth2 + paddingLeft2)), blv - (borderBottomWidth2 + paddingBottom2), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth2 + paddingLeft2, bounds.top + bounds.height - (borderBottomWidth2 + paddingBottom2));
    }
    return BoundCurves2;
  }()
);
var CORNER;
(function(CORNER2) {
  CORNER2[CORNER2["TOP_LEFT"] = 0] = "TOP_LEFT";
  CORNER2[CORNER2["TOP_RIGHT"] = 1] = "TOP_RIGHT";
  CORNER2[CORNER2["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
  CORNER2[CORNER2["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
})(CORNER || (CORNER = {}));
var getCurvePoints = function(x, y, r1, r2, position2) {
  var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
  var ox = r1 * kappa;
  var oy = r2 * kappa;
  var xm = x + r1;
  var ym = y + r2;
  switch (position2) {
    case CORNER.TOP_LEFT:
      return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
    case CORNER.TOP_RIGHT:
      return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
    case CORNER.BOTTOM_RIGHT:
      return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
    case CORNER.BOTTOM_LEFT:
    default:
      return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
  }
};
var calculateBorderBoxPath = function(curves) {
  return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
};
var calculateContentBoxPath = function(curves) {
  return [
    curves.topLeftContentBox,
    curves.topRightContentBox,
    curves.bottomRightContentBox,
    curves.bottomLeftContentBox
  ];
};
var calculatePaddingBoxPath = function(curves) {
  return [
    curves.topLeftPaddingBox,
    curves.topRightPaddingBox,
    curves.bottomRightPaddingBox,
    curves.bottomLeftPaddingBox
  ];
};
var TransformEffect = (
  /** @class */
  function() {
    function TransformEffect2(offsetX, offsetY, matrix2) {
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.matrix = matrix2;
      this.type = 0;
      this.target = 2 | 4;
    }
    return TransformEffect2;
  }()
);
var ClipEffect = (
  /** @class */
  function() {
    function ClipEffect2(path, target) {
      this.path = path;
      this.target = target;
      this.type = 1;
    }
    return ClipEffect2;
  }()
);
var OpacityEffect = (
  /** @class */
  function() {
    function OpacityEffect2(opacity2) {
      this.opacity = opacity2;
      this.type = 2;
      this.target = 2 | 4;
    }
    return OpacityEffect2;
  }()
);
var isTransformEffect = function(effect) {
  return effect.type === 0;
};
var isClipEffect = function(effect) {
  return effect.type === 1;
};
var isOpacityEffect = function(effect) {
  return effect.type === 2;
};
var equalPath = function(a2, b) {
  if (a2.length === b.length) {
    return a2.some(function(v, i) {
      return v === b[i];
    });
  }
  return false;
};
var transformPath = function(path, deltaX, deltaY, deltaW, deltaH) {
  return path.map(function(point, index) {
    switch (index) {
      case 0:
        return point.add(deltaX, deltaY);
      case 1:
        return point.add(deltaX + deltaW, deltaY);
      case 2:
        return point.add(deltaX + deltaW, deltaY + deltaH);
      case 3:
        return point.add(deltaX, deltaY + deltaH);
    }
    return point;
  });
};
var StackingContext = (
  /** @class */
  function() {
    function StackingContext2(container) {
      this.element = container;
      this.inlineLevel = [];
      this.nonInlineLevel = [];
      this.negativeZIndex = [];
      this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
      this.positiveZIndex = [];
      this.nonPositionedFloats = [];
      this.nonPositionedInlineLevel = [];
    }
    return StackingContext2;
  }()
);
var ElementPaint = (
  /** @class */
  function() {
    function ElementPaint2(container, parent) {
      this.container = container;
      this.parent = parent;
      this.effects = [];
      this.curves = new BoundCurves(this.container);
      if (this.container.styles.opacity < 1) {
        this.effects.push(new OpacityEffect(this.container.styles.opacity));
      }
      if (this.container.styles.transform !== null) {
        var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
        var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
        var matrix2 = this.container.styles.transform;
        this.effects.push(new TransformEffect(offsetX, offsetY, matrix2));
      }
      if (this.container.styles.overflowX !== 0) {
        var borderBox = calculateBorderBoxPath(this.curves);
        var paddingBox2 = calculatePaddingBoxPath(this.curves);
        if (equalPath(borderBox, paddingBox2)) {
          this.effects.push(new ClipEffect(
            borderBox,
            2 | 4
            /* CONTENT */
          ));
        } else {
          this.effects.push(new ClipEffect(
            borderBox,
            2
            /* BACKGROUND_BORDERS */
          ));
          this.effects.push(new ClipEffect(
            paddingBox2,
            4
            /* CONTENT */
          ));
        }
      }
    }
    ElementPaint2.prototype.getEffects = function(target) {
      var inFlow = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1;
      var parent = this.parent;
      var effects = this.effects.slice(0);
      while (parent) {
        var croplessEffects = parent.effects.filter(function(effect) {
          return !isClipEffect(effect);
        });
        if (inFlow || parent.container.styles.position !== 0 || !parent.parent) {
          effects.unshift.apply(effects, croplessEffects);
          inFlow = [
            2,
            3
            /* FIXED */
          ].indexOf(parent.container.styles.position) === -1;
          if (parent.container.styles.overflowX !== 0) {
            var borderBox = calculateBorderBoxPath(parent.curves);
            var paddingBox2 = calculatePaddingBoxPath(parent.curves);
            if (!equalPath(borderBox, paddingBox2)) {
              effects.unshift(new ClipEffect(
                paddingBox2,
                2 | 4
                /* CONTENT */
              ));
            }
          }
        } else {
          effects.unshift.apply(effects, croplessEffects);
        }
        parent = parent.parent;
      }
      return effects.filter(function(effect) {
        return contains(effect.target, target);
      });
    };
    return ElementPaint2;
  }()
);
var parseStackTree = function(parent, stackingContext, realStackingContext, listItems) {
  parent.container.elements.forEach(function(child) {
    var treatAsRealStackingContext = contains(
      child.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    );
    var createsStackingContext2 = contains(
      child.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    );
    var paintContainer = new ElementPaint(child, parent);
    if (contains(
      child.styles.display,
      2048
      /* LIST_ITEM */
    )) {
      listItems.push(paintContainer);
    }
    var listOwnerItems = contains(
      child.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : listItems;
    if (treatAsRealStackingContext || createsStackingContext2) {
      var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
      var stack = new StackingContext(paintContainer);
      if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
        var order_1 = child.styles.zIndex.order;
        if (order_1 < 0) {
          var index_1 = 0;
          parentStack.negativeZIndex.some(function(current, i) {
            if (order_1 > current.element.container.styles.zIndex.order) {
              index_1 = i;
              return false;
            } else if (index_1 > 0) {
              return true;
            }
            return false;
          });
          parentStack.negativeZIndex.splice(index_1, 0, stack);
        } else if (order_1 > 0) {
          var index_2 = 0;
          parentStack.positiveZIndex.some(function(current, i) {
            if (order_1 >= current.element.container.styles.zIndex.order) {
              index_2 = i + 1;
              return false;
            } else if (index_2 > 0) {
              return true;
            }
            return false;
          });
          parentStack.positiveZIndex.splice(index_2, 0, stack);
        } else {
          parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
        }
      } else {
        if (child.styles.isFloating()) {
          parentStack.nonPositionedFloats.push(stack);
        } else {
          parentStack.nonPositionedInlineLevel.push(stack);
        }
      }
      parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
    } else {
      if (child.styles.isInlineLevel()) {
        stackingContext.inlineLevel.push(paintContainer);
      } else {
        stackingContext.nonInlineLevel.push(paintContainer);
      }
      parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
    }
    if (contains(
      child.flags,
      8
      /* IS_LIST_OWNER */
    )) {
      processListItems(child, listOwnerItems);
    }
  });
};
var processListItems = function(owner, elements) {
  var numbering = owner instanceof OLElementContainer ? owner.start : 1;
  var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
  for (var i = 0; i < elements.length; i++) {
    var item = elements[i];
    if (item.container instanceof LIElementContainer && typeof item.container.value === "number" && item.container.value !== 0) {
      numbering = item.container.value;
    }
    item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
    numbering += reversed ? -1 : 1;
  }
};
var parseStackingContexts = function(container) {
  var paintContainer = new ElementPaint(container, null);
  var root = new StackingContext(paintContainer);
  var listItems = [];
  parseStackTree(paintContainer, root, root, listItems);
  processListItems(paintContainer.container, listItems);
  return root;
};
var parsePathForBorder = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
  }
};
var parsePathForBorderDoubleOuter = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
  }
};
var parsePathForBorderDoubleInner = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
    case 1:
      return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
    case 2:
      return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
    case 3:
    default:
      return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
  }
};
var parsePathForBorderStroke = function(curves, borderSide) {
  switch (borderSide) {
    case 0:
      return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
    case 1:
      return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
    case 2:
      return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
    case 3:
    default:
      return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
  }
};
var createStrokePathFromCurves = function(outer1, outer2) {
  var path = [];
  if (isBezierCurve(outer1)) {
    path.push(outer1.subdivide(0.5, false));
  } else {
    path.push(outer1);
  }
  if (isBezierCurve(outer2)) {
    path.push(outer2.subdivide(0.5, true));
  } else {
    path.push(outer2);
  }
  return path;
};
var createPathFromCurves = function(outer1, inner1, outer2, inner2) {
  var path = [];
  if (isBezierCurve(outer1)) {
    path.push(outer1.subdivide(0.5, false));
  } else {
    path.push(outer1);
  }
  if (isBezierCurve(outer2)) {
    path.push(outer2.subdivide(0.5, true));
  } else {
    path.push(outer2);
  }
  if (isBezierCurve(inner2)) {
    path.push(inner2.subdivide(0.5, true).reverse());
  } else {
    path.push(inner2);
  }
  if (isBezierCurve(inner1)) {
    path.push(inner1.subdivide(0.5, false).reverse());
  } else {
    path.push(inner1);
  }
  return path;
};
var paddingBox = function(element) {
  var bounds = element.bounds;
  var styles = element.styles;
  return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
};
var contentBox = function(element) {
  var styles = element.styles;
  var bounds = element.bounds;
  var paddingLeft2 = getAbsoluteValue(styles.paddingLeft, bounds.width);
  var paddingRight2 = getAbsoluteValue(styles.paddingRight, bounds.width);
  var paddingTop2 = getAbsoluteValue(styles.paddingTop, bounds.width);
  var paddingBottom2 = getAbsoluteValue(styles.paddingBottom, bounds.width);
  return bounds.add(paddingLeft2 + styles.borderLeftWidth, paddingTop2 + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft2 + paddingRight2), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop2 + paddingBottom2));
};
var calculateBackgroundPositioningArea = function(backgroundOrigin2, element) {
  if (backgroundOrigin2 === 0) {
    return element.bounds;
  }
  if (backgroundOrigin2 === 2) {
    return contentBox(element);
  }
  return paddingBox(element);
};
var calculateBackgroundPaintingArea = function(backgroundClip2, element) {
  if (backgroundClip2 === 0) {
    return element.bounds;
  }
  if (backgroundClip2 === 2) {
    return contentBox(element);
  }
  return paddingBox(element);
};
var calculateBackgroundRendering = function(container, index, intrinsicSize) {
  var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
  var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
  var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
  var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
  var position2 = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
  var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position2, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
  var offsetX = Math.round(backgroundPositioningArea.left + position2[0]);
  var offsetY = Math.round(backgroundPositioningArea.top + position2[1]);
  return [path, offsetX, offsetY, sizeWidth, sizeHeight];
};
var isAuto = function(token) {
  return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
};
var hasIntrinsicValue = function(value) {
  return typeof value === "number";
};
var calculateBackgroundSize = function(size, _a, bounds) {
  var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
  var first = size[0], second = size[1];
  if (!first) {
    return [0, 0];
  }
  if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
    return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
  }
  var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
  if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
    if (hasIntrinsicValue(intrinsicProportion)) {
      var targetRatio = bounds.width / bounds.height;
      return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
    }
    return [bounds.width, bounds.height];
  }
  var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
  var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
  var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
  if (isAuto(first) && (!second || isAuto(second))) {
    if (hasIntrinsicWidth && hasIntrinsicHeight) {
      return [intrinsicWidth, intrinsicHeight];
    }
    if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
      return [bounds.width, bounds.height];
    }
    if (hasIntrinsicDimensions && hasIntrinsicProportion) {
      var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
      var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
      return [width_1, height_1];
    }
    var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
    var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
    return [width_2, height_2];
  }
  if (hasIntrinsicProportion) {
    var width_3 = 0;
    var height_3 = 0;
    if (isLengthPercentage(first)) {
      width_3 = getAbsoluteValue(first, bounds.width);
    } else if (isLengthPercentage(second)) {
      height_3 = getAbsoluteValue(second, bounds.height);
    }
    if (isAuto(first)) {
      width_3 = height_3 * intrinsicProportion;
    } else if (!second || isAuto(second)) {
      height_3 = width_3 / intrinsicProportion;
    }
    return [width_3, height_3];
  }
  var width = null;
  var height = null;
  if (isLengthPercentage(first)) {
    width = getAbsoluteValue(first, bounds.width);
  } else if (second && isLengthPercentage(second)) {
    height = getAbsoluteValue(second, bounds.height);
  }
  if (width !== null && (!second || isAuto(second))) {
    height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
  }
  if (height !== null && isAuto(first)) {
    width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
  }
  if (width !== null && height !== null) {
    return [width, height];
  }
  throw new Error("Unable to calculate background-size for element");
};
var getBackgroundValueForIndex = function(values, index) {
  var value = values[index];
  if (typeof value === "undefined") {
    return values[0];
  }
  return value;
};
var calculateBackgroundRepeatPath = function(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
  var x = _a[0], y = _a[1];
  var width = _b[0], height = _b[1];
  switch (repeat) {
    case 2:
      return [
        new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
        new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
        new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
        new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
      ];
    case 3:
      return [
        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
      ];
    case 1:
      return [
        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
        new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
        new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
      ];
    default:
      return [
        new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
        new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
      ];
  }
};
var SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
var SAMPLE_TEXT = "Hidden Text";
var FontMetrics = (
  /** @class */
  function() {
    function FontMetrics2(document2) {
      this._data = {};
      this._document = document2;
    }
    FontMetrics2.prototype.parseMetrics = function(fontFamily2, fontSize2) {
      var container = this._document.createElement("div");
      var img = this._document.createElement("img");
      var span = this._document.createElement("span");
      var body = this._document.body;
      container.style.visibility = "hidden";
      container.style.fontFamily = fontFamily2;
      container.style.fontSize = fontSize2;
      container.style.margin = "0";
      container.style.padding = "0";
      container.style.whiteSpace = "nowrap";
      body.appendChild(container);
      img.src = SMALL_IMAGE;
      img.width = 1;
      img.height = 1;
      img.style.margin = "0";
      img.style.padding = "0";
      img.style.verticalAlign = "baseline";
      span.style.fontFamily = fontFamily2;
      span.style.fontSize = fontSize2;
      span.style.margin = "0";
      span.style.padding = "0";
      span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
      container.appendChild(span);
      container.appendChild(img);
      var baseline = img.offsetTop - span.offsetTop + 2;
      container.removeChild(span);
      container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
      container.style.lineHeight = "normal";
      img.style.verticalAlign = "super";
      var middle = img.offsetTop - container.offsetTop + 2;
      body.removeChild(container);
      return { baseline, middle };
    };
    FontMetrics2.prototype.getMetrics = function(fontFamily2, fontSize2) {
      var key = fontFamily2 + " " + fontSize2;
      if (typeof this._data[key] === "undefined") {
        this._data[key] = this.parseMetrics(fontFamily2, fontSize2);
      }
      return this._data[key];
    };
    return FontMetrics2;
  }()
);
var Renderer = (
  /** @class */
  function() {
    function Renderer2(context, options) {
      this.context = context;
      this.options = options;
    }
    return Renderer2;
  }()
);
var MASK_OFFSET = 1e4;
(function(_super) {
  __extends(CanvasRenderer, _super);
  function CanvasRenderer(context, options) {
    var _this = _super.call(this, context, options) || this;
    _this._activeEffects = [];
    _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
    _this.ctx = _this.canvas.getContext("2d");
    if (!options.canvas) {
      _this.canvas.width = Math.floor(options.width * options.scale);
      _this.canvas.height = Math.floor(options.height * options.scale);
      _this.canvas.style.width = options.width + "px";
      _this.canvas.style.height = options.height + "px";
    }
    _this.fontMetrics = new FontMetrics(document);
    _this.ctx.scale(_this.options.scale, _this.options.scale);
    _this.ctx.translate(-options.x, -options.y);
    _this.ctx.textBaseline = "bottom";
    _this._activeEffects = [];
    _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
    return _this;
  }
  CanvasRenderer.prototype.applyEffects = function(effects) {
    var _this = this;
    while (this._activeEffects.length) {
      this.popEffect();
    }
    effects.forEach(function(effect) {
      return _this.applyEffect(effect);
    });
  };
  CanvasRenderer.prototype.applyEffect = function(effect) {
    this.ctx.save();
    if (isOpacityEffect(effect)) {
      this.ctx.globalAlpha = effect.opacity;
    }
    if (isTransformEffect(effect)) {
      this.ctx.translate(effect.offsetX, effect.offsetY);
      this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
      this.ctx.translate(-effect.offsetX, -effect.offsetY);
    }
    if (isClipEffect(effect)) {
      this.path(effect.path);
      this.ctx.clip();
    }
    this._activeEffects.push(effect);
  };
  CanvasRenderer.prototype.popEffect = function() {
    this._activeEffects.pop();
    this.ctx.restore();
  };
  CanvasRenderer.prototype.renderStack = function(stack) {
    return __awaiter(this, void 0, void 0, function() {
      var styles;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            styles = stack.element.container.styles;
            if (!styles.isVisible())
              return [3, 2];
            return [4, this.renderStackContent(stack)];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  CanvasRenderer.prototype.renderNode = function(paint) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (contains(
              paint.container.flags,
              16
              /* DEBUG_RENDER */
            )) {
              debugger;
            }
            if (!paint.container.styles.isVisible())
              return [3, 3];
            return [4, this.renderNodeBackgroundAndBorders(paint)];
          case 1:
            _a.sent();
            return [4, this.renderNodeContent(paint)];
          case 2:
            _a.sent();
            _a.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  CanvasRenderer.prototype.renderTextWithLetterSpacing = function(text, letterSpacing2, baseline) {
    var _this = this;
    if (letterSpacing2 === 0) {
      this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
    } else {
      var letters = segmentGraphemes(text.text);
      letters.reduce(function(left, letter) {
        _this.ctx.fillText(letter, left, text.bounds.top + baseline);
        return left + _this.ctx.measureText(letter).width;
      }, text.bounds.left);
    }
  };
  CanvasRenderer.prototype.createFontStyle = function(styles) {
    var fontVariant2 = styles.fontVariant.filter(function(variant) {
      return variant === "normal" || variant === "small-caps";
    }).join("");
    var fontFamily2 = fixIOSSystemFonts(styles.fontFamily).join(", ");
    var fontSize2 = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
    return [
      [styles.fontStyle, fontVariant2, styles.fontWeight, fontSize2, fontFamily2].join(" "),
      fontFamily2,
      fontSize2
    ];
  };
  CanvasRenderer.prototype.renderTextNode = function(text, styles) {
    return __awaiter(this, void 0, void 0, function() {
      var _a, font, fontFamily2, fontSize2, _b, baseline, middle, paintOrder2;
      var _this = this;
      return __generator(this, function(_c) {
        _a = this.createFontStyle(styles), font = _a[0], fontFamily2 = _a[1], fontSize2 = _a[2];
        this.ctx.font = font;
        this.ctx.direction = styles.direction === 1 ? "rtl" : "ltr";
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "alphabetic";
        _b = this.fontMetrics.getMetrics(fontFamily2, fontSize2), baseline = _b.baseline, middle = _b.middle;
        paintOrder2 = styles.paintOrder;
        text.textBounds.forEach(function(text2) {
          paintOrder2.forEach(function(paintOrderLayer) {
            switch (paintOrderLayer) {
              case 0:
                _this.ctx.fillStyle = asString(styles.color);
                _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                var textShadows = styles.textShadow;
                if (textShadows.length && text2.text.trim().length) {
                  textShadows.slice(0).reverse().forEach(function(textShadow2) {
                    _this.ctx.shadowColor = asString(textShadow2.color);
                    _this.ctx.shadowOffsetX = textShadow2.offsetX.number * _this.options.scale;
                    _this.ctx.shadowOffsetY = textShadow2.offsetY.number * _this.options.scale;
                    _this.ctx.shadowBlur = textShadow2.blur.number;
                    _this.renderTextWithLetterSpacing(text2, styles.letterSpacing, baseline);
                  });
                  _this.ctx.shadowColor = "";
                  _this.ctx.shadowOffsetX = 0;
                  _this.ctx.shadowOffsetY = 0;
                  _this.ctx.shadowBlur = 0;
                }
                if (styles.textDecorationLine.length) {
                  _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                  styles.textDecorationLine.forEach(function(textDecorationLine2) {
                    switch (textDecorationLine2) {
                      case 1:
                        _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top + baseline), text2.bounds.width, 1);
                        break;
                      case 2:
                        _this.ctx.fillRect(text2.bounds.left, Math.round(text2.bounds.top), text2.bounds.width, 1);
                        break;
                      case 3:
                        _this.ctx.fillRect(text2.bounds.left, Math.ceil(text2.bounds.top + middle), text2.bounds.width, 1);
                        break;
                    }
                  });
                }
                break;
              case 1:
                if (styles.webkitTextStrokeWidth && text2.text.trim().length) {
                  _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                  _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                  _this.ctx.lineJoin = !!window.chrome ? "miter" : "round";
                  _this.ctx.strokeText(text2.text, text2.bounds.left, text2.bounds.top + baseline);
                }
                _this.ctx.strokeStyle = "";
                _this.ctx.lineWidth = 0;
                _this.ctx.lineJoin = "miter";
                break;
            }
          });
        });
        return [
          2
          /*return*/
        ];
      });
    });
  };
  CanvasRenderer.prototype.renderReplacedElement = function(container, curves, image2) {
    if (image2 && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
      var box = contentBox(container);
      var path = calculatePaddingBoxPath(curves);
      this.path(path);
      this.ctx.save();
      this.ctx.clip();
      this.ctx.drawImage(image2, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
      this.ctx.restore();
    }
  };
  CanvasRenderer.prototype.renderNodeContent = function(paint) {
    return __awaiter(this, void 0, void 0, function() {
      var container, curves, styles, _i, _a, child, image2, image2, iframeRenderer, canvas, size, _b, fontFamily2, fontSize2, baseline, bounds, x, textBounds, img, image2, url, fontFamily2, bounds;
      return __generator(this, function(_c) {
        switch (_c.label) {
          case 0:
            this.applyEffects(paint.getEffects(
              4
              /* CONTENT */
            ));
            container = paint.container;
            curves = paint.curves;
            styles = container.styles;
            _i = 0, _a = container.textNodes;
            _c.label = 1;
          case 1:
            if (!(_i < _a.length))
              return [3, 4];
            child = _a[_i];
            return [4, this.renderTextNode(child, styles)];
          case 2:
            _c.sent();
            _c.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            if (!(container instanceof ImageElementContainer))
              return [3, 8];
            _c.label = 5;
          case 5:
            _c.trys.push([5, 7, , 8]);
            return [4, this.context.cache.match(container.src)];
          case 6:
            image2 = _c.sent();
            this.renderReplacedElement(container, curves, image2);
            return [3, 8];
          case 7:
            _c.sent();
            this.context.logger.error("Error loading image " + container.src);
            return [3, 8];
          case 8:
            if (container instanceof CanvasElementContainer) {
              this.renderReplacedElement(container, curves, container.canvas);
            }
            if (!(container instanceof SVGElementContainer))
              return [3, 12];
            _c.label = 9;
          case 9:
            _c.trys.push([9, 11, , 12]);
            return [4, this.context.cache.match(container.svg)];
          case 10:
            image2 = _c.sent();
            this.renderReplacedElement(container, curves, image2);
            return [3, 12];
          case 11:
            _c.sent();
            this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
            return [3, 12];
          case 12:
            if (!(container instanceof IFrameElementContainer && container.tree))
              return [3, 14];
            iframeRenderer = new CanvasRenderer(this.context, {
              scale: this.options.scale,
              backgroundColor: container.backgroundColor,
              x: 0,
              y: 0,
              width: container.width,
              height: container.height
            });
            return [4, iframeRenderer.render(container.tree)];
          case 13:
            canvas = _c.sent();
            if (container.width && container.height) {
              this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
            }
            _c.label = 14;
          case 14:
            if (container instanceof InputElementContainer) {
              size = Math.min(container.bounds.width, container.bounds.height);
              if (container.type === CHECKBOX) {
                if (container.checked) {
                  this.ctx.save();
                  this.path([
                    new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                    new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                    new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                    new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                    new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                    new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                    new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                  ]);
                  this.ctx.fillStyle = asString(INPUT_COLOR);
                  this.ctx.fill();
                  this.ctx.restore();
                }
              } else if (container.type === RADIO) {
                if (container.checked) {
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                  this.ctx.fillStyle = asString(INPUT_COLOR);
                  this.ctx.fill();
                  this.ctx.restore();
                }
              }
            }
            if (isTextInputElement(container) && container.value.length) {
              _b = this.createFontStyle(styles), fontFamily2 = _b[0], fontSize2 = _b[1];
              baseline = this.fontMetrics.getMetrics(fontFamily2, fontSize2).baseline;
              this.ctx.font = fontFamily2;
              this.ctx.fillStyle = asString(styles.color);
              this.ctx.textBaseline = "alphabetic";
              this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
              bounds = contentBox(container);
              x = 0;
              switch (container.styles.textAlign) {
                case 1:
                  x += bounds.width / 2;
                  break;
                case 2:
                  x += bounds.width;
                  break;
              }
              textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
              this.ctx.save();
              this.path([
                new Vector(bounds.left, bounds.top),
                new Vector(bounds.left + bounds.width, bounds.top),
                new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                new Vector(bounds.left, bounds.top + bounds.height)
              ]);
              this.ctx.clip();
              this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
              this.ctx.restore();
              this.ctx.textBaseline = "alphabetic";
              this.ctx.textAlign = "left";
            }
            if (!contains(
              container.styles.display,
              2048
              /* LIST_ITEM */
            ))
              return [3, 20];
            if (!(container.styles.listStyleImage !== null))
              return [3, 19];
            img = container.styles.listStyleImage;
            if (!(img.type === 0))
              return [3, 18];
            image2 = void 0;
            url = img.url;
            _c.label = 15;
          case 15:
            _c.trys.push([15, 17, , 18]);
            return [4, this.context.cache.match(url)];
          case 16:
            image2 = _c.sent();
            this.ctx.drawImage(image2, container.bounds.left - (image2.width + 10), container.bounds.top);
            return [3, 18];
          case 17:
            _c.sent();
            this.context.logger.error("Error loading list-style-image " + url);
            return [3, 18];
          case 18:
            return [3, 20];
          case 19:
            if (paint.listValue && container.styles.listStyleType !== -1) {
              fontFamily2 = this.createFontStyle(styles)[0];
              this.ctx.font = fontFamily2;
              this.ctx.fillStyle = asString(styles.color);
              this.ctx.textBaseline = "middle";
              this.ctx.textAlign = "right";
              bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
              this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
              this.ctx.textBaseline = "bottom";
              this.ctx.textAlign = "left";
            }
            _c.label = 20;
          case 20:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  CanvasRenderer.prototype.renderStackContent = function(stack) {
    return __awaiter(this, void 0, void 0, function() {
      var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
      return __generator(this, function(_p) {
        switch (_p.label) {
          case 0:
            if (contains(
              stack.element.container.flags,
              16
              /* DEBUG_RENDER */
            )) {
              debugger;
            }
            return [4, this.renderNodeBackgroundAndBorders(stack.element)];
          case 1:
            _p.sent();
            _i = 0, _a = stack.negativeZIndex;
            _p.label = 2;
          case 2:
            if (!(_i < _a.length))
              return [3, 5];
            child = _a[_i];
            return [4, this.renderStack(child)];
          case 3:
            _p.sent();
            _p.label = 4;
          case 4:
            _i++;
            return [3, 2];
          case 5:
            return [4, this.renderNodeContent(stack.element)];
          case 6:
            _p.sent();
            _b = 0, _c = stack.nonInlineLevel;
            _p.label = 7;
          case 7:
            if (!(_b < _c.length))
              return [3, 10];
            child = _c[_b];
            return [4, this.renderNode(child)];
          case 8:
            _p.sent();
            _p.label = 9;
          case 9:
            _b++;
            return [3, 7];
          case 10:
            _d = 0, _e = stack.nonPositionedFloats;
            _p.label = 11;
          case 11:
            if (!(_d < _e.length))
              return [3, 14];
            child = _e[_d];
            return [4, this.renderStack(child)];
          case 12:
            _p.sent();
            _p.label = 13;
          case 13:
            _d++;
            return [3, 11];
          case 14:
            _f = 0, _g = stack.nonPositionedInlineLevel;
            _p.label = 15;
          case 15:
            if (!(_f < _g.length))
              return [3, 18];
            child = _g[_f];
            return [4, this.renderStack(child)];
          case 16:
            _p.sent();
            _p.label = 17;
          case 17:
            _f++;
            return [3, 15];
          case 18:
            _h = 0, _j = stack.inlineLevel;
            _p.label = 19;
          case 19:
            if (!(_h < _j.length))
              return [3, 22];
            child = _j[_h];
            return [4, this.renderNode(child)];
          case 20:
            _p.sent();
            _p.label = 21;
          case 21:
            _h++;
            return [3, 19];
          case 22:
            _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
            _p.label = 23;
          case 23:
            if (!(_k < _l.length))
              return [3, 26];
            child = _l[_k];
            return [4, this.renderStack(child)];
          case 24:
            _p.sent();
            _p.label = 25;
          case 25:
            _k++;
            return [3, 23];
          case 26:
            _m = 0, _o = stack.positiveZIndex;
            _p.label = 27;
          case 27:
            if (!(_m < _o.length))
              return [3, 30];
            child = _o[_m];
            return [4, this.renderStack(child)];
          case 28:
            _p.sent();
            _p.label = 29;
          case 29:
            _m++;
            return [3, 27];
          case 30:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  CanvasRenderer.prototype.mask = function(paths) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.canvas.width, 0);
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.lineTo(0, 0);
    this.formatPath(paths.slice(0).reverse());
    this.ctx.closePath();
  };
  CanvasRenderer.prototype.path = function(paths) {
    this.ctx.beginPath();
    this.formatPath(paths);
    this.ctx.closePath();
  };
  CanvasRenderer.prototype.formatPath = function(paths) {
    var _this = this;
    paths.forEach(function(point, index) {
      var start = isBezierCurve(point) ? point.start : point;
      if (index === 0) {
        _this.ctx.moveTo(start.x, start.y);
      } else {
        _this.ctx.lineTo(start.x, start.y);
      }
      if (isBezierCurve(point)) {
        _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
      }
    });
  };
  CanvasRenderer.prototype.renderRepeat = function(path, pattern, offsetX, offsetY) {
    this.path(path);
    this.ctx.fillStyle = pattern;
    this.ctx.translate(offsetX, offsetY);
    this.ctx.fill();
    this.ctx.translate(-offsetX, -offsetY);
  };
  CanvasRenderer.prototype.resizeImage = function(image2, width, height) {
    var _a;
    if (image2.width === width && image2.height === height) {
      return image2;
    }
    var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
    var canvas = ownerDocument.createElement("canvas");
    canvas.width = Math.max(1, width);
    canvas.height = Math.max(1, height);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image2, 0, 0, image2.width, image2.height, 0, 0, width, height);
    return canvas;
  };
  CanvasRenderer.prototype.renderBackgroundImage = function(container) {
    return __awaiter(this, void 0, void 0, function() {
      var index, _loop_1, this_1, _i, _a, backgroundImage2;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            index = container.styles.backgroundImage.length - 1;
            _loop_1 = function(backgroundImage3) {
              var image2, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position2, x, y, _g, rx, ry, radialGradient_1, midX, midY, f2, invF;
              return __generator(this, function(_h) {
                switch (_h.label) {
                  case 0:
                    if (!(backgroundImage3.type === 0))
                      return [3, 5];
                    image2 = void 0;
                    url = backgroundImage3.url;
                    _h.label = 1;
                  case 1:
                    _h.trys.push([1, 3, , 4]);
                    return [4, this_1.context.cache.match(url)];
                  case 2:
                    image2 = _h.sent();
                    return [3, 4];
                  case 3:
                    _h.sent();
                    this_1.context.logger.error("Error loading background-image " + url);
                    return [3, 4];
                  case 4:
                    if (image2) {
                      _c = calculateBackgroundRendering(container, index, [
                        image2.width,
                        image2.height,
                        image2.width / image2.height
                      ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                      pattern = this_1.ctx.createPattern(this_1.resizeImage(image2, width, height), "repeat");
                      this_1.renderRepeat(path, pattern, x, y);
                    }
                    return [3, 6];
                  case 5:
                    if (isLinearGradient(backgroundImage3)) {
                      _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                      _e = calculateGradientDirection(backgroundImage3.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                      canvas = document.createElement("canvas");
                      canvas.width = width;
                      canvas.height = height;
                      ctx = canvas.getContext("2d");
                      gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                      processColorStops(backgroundImage3.stops, lineLength).forEach(function(colorStop) {
                        return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                      });
                      ctx.fillStyle = gradient_1;
                      ctx.fillRect(0, 0, width, height);
                      if (width > 0 && height > 0) {
                        pattern = this_1.ctx.createPattern(canvas, "repeat");
                        this_1.renderRepeat(path, pattern, x, y);
                      }
                    } else if (isRadialGradient(backgroundImage3)) {
                      _f = calculateBackgroundRendering(container, index, [
                        null,
                        null,
                        null
                      ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                      position2 = backgroundImage3.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage3.position;
                      x = getAbsoluteValue(position2[0], width);
                      y = getAbsoluteValue(position2[position2.length - 1], height);
                      _g = calculateRadius(backgroundImage3, x, y, width, height), rx = _g[0], ry = _g[1];
                      if (rx > 0 && ry > 0) {
                        radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                        processColorStops(backgroundImage3.stops, rx * 2).forEach(function(colorStop) {
                          return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                        });
                        this_1.path(path);
                        this_1.ctx.fillStyle = radialGradient_1;
                        if (rx !== ry) {
                          midX = container.bounds.left + 0.5 * container.bounds.width;
                          midY = container.bounds.top + 0.5 * container.bounds.height;
                          f2 = ry / rx;
                          invF = 1 / f2;
                          this_1.ctx.save();
                          this_1.ctx.translate(midX, midY);
                          this_1.ctx.transform(1, 0, 0, f2, 0, 0);
                          this_1.ctx.translate(-midX, -midY);
                          this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                          this_1.ctx.restore();
                        } else {
                          this_1.ctx.fill();
                        }
                      }
                    }
                    _h.label = 6;
                  case 6:
                    index--;
                    return [
                      2
                      /*return*/
                    ];
                }
              });
            };
            this_1 = this;
            _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
            _b.label = 1;
          case 1:
            if (!(_i < _a.length))
              return [3, 4];
            backgroundImage2 = _a[_i];
            return [5, _loop_1(backgroundImage2)];
          case 2:
            _b.sent();
            _b.label = 3;
          case 3:
            _i++;
            return [3, 1];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  CanvasRenderer.prototype.renderSolidBorder = function(color2, side, curvePoints) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        this.path(parsePathForBorder(curvePoints, side));
        this.ctx.fillStyle = asString(color2);
        this.ctx.fill();
        return [
          2
          /*return*/
        ];
      });
    });
  };
  CanvasRenderer.prototype.renderDoubleBorder = function(color2, width, side, curvePoints) {
    return __awaiter(this, void 0, void 0, function() {
      var outerPaths, innerPaths;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!(width < 3))
              return [3, 2];
            return [4, this.renderSolidBorder(color2, side, curvePoints)];
          case 1:
            _a.sent();
            return [
              2
              /*return*/
            ];
          case 2:
            outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
            this.path(outerPaths);
            this.ctx.fillStyle = asString(color2);
            this.ctx.fill();
            innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
            this.path(innerPaths);
            this.ctx.fill();
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function(paint) {
    return __awaiter(this, void 0, void 0, function() {
      var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
      var _this = this;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            this.applyEffects(paint.getEffects(
              2
              /* BACKGROUND_BORDERS */
            ));
            styles = paint.container.styles;
            hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
            borders = [
              { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
              { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
              { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
              { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
            ];
            backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
            if (!(hasBackground || styles.boxShadow.length))
              return [3, 2];
            this.ctx.save();
            this.path(backgroundPaintingArea);
            this.ctx.clip();
            if (!isTransparent(styles.backgroundColor)) {
              this.ctx.fillStyle = asString(styles.backgroundColor);
              this.ctx.fill();
            }
            return [4, this.renderBackgroundImage(paint.container)];
          case 1:
            _a.sent();
            this.ctx.restore();
            styles.boxShadow.slice(0).reverse().forEach(function(shadow) {
              _this.ctx.save();
              var borderBoxArea = calculateBorderBoxPath(paint.curves);
              var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
              var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
              if (shadow.inset) {
                _this.path(borderBoxArea);
                _this.ctx.clip();
                _this.mask(shadowPaintingArea);
              } else {
                _this.mask(borderBoxArea);
                _this.ctx.clip();
                _this.path(shadowPaintingArea);
              }
              _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
              _this.ctx.shadowOffsetY = shadow.offsetY.number;
              _this.ctx.shadowColor = asString(shadow.color);
              _this.ctx.shadowBlur = shadow.blur.number;
              _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : "rgba(0,0,0,1)";
              _this.ctx.fill();
              _this.ctx.restore();
            });
            _a.label = 2;
          case 2:
            side = 0;
            _i = 0, borders_1 = borders;
            _a.label = 3;
          case 3:
            if (!(_i < borders_1.length))
              return [3, 13];
            border = borders_1[_i];
            if (!(border.style !== 0 && !isTransparent(border.color) && border.width > 0))
              return [3, 11];
            if (!(border.style === 2))
              return [3, 5];
            return [4, this.renderDashedDottedBorder(
              border.color,
              border.width,
              side,
              paint.curves,
              2
              /* DASHED */
            )];
          case 4:
            _a.sent();
            return [3, 11];
          case 5:
            if (!(border.style === 3))
              return [3, 7];
            return [4, this.renderDashedDottedBorder(
              border.color,
              border.width,
              side,
              paint.curves,
              3
              /* DOTTED */
            )];
          case 6:
            _a.sent();
            return [3, 11];
          case 7:
            if (!(border.style === 4))
              return [3, 9];
            return [4, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
          case 8:
            _a.sent();
            return [3, 11];
          case 9:
            return [4, this.renderSolidBorder(border.color, side, paint.curves)];
          case 10:
            _a.sent();
            _a.label = 11;
          case 11:
            side++;
            _a.label = 12;
          case 12:
            _i++;
            return [3, 3];
          case 13:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  CanvasRenderer.prototype.renderDashedDottedBorder = function(color2, width, side, curvePoints, style) {
    return __awaiter(this, void 0, void 0, function() {
      var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
      return __generator(this, function(_a) {
        this.ctx.save();
        strokePaths = parsePathForBorderStroke(curvePoints, side);
        boxPaths = parsePathForBorder(curvePoints, side);
        if (style === 2) {
          this.path(boxPaths);
          this.ctx.clip();
        }
        if (isBezierCurve(boxPaths[0])) {
          startX = boxPaths[0].start.x;
          startY = boxPaths[0].start.y;
        } else {
          startX = boxPaths[0].x;
          startY = boxPaths[0].y;
        }
        if (isBezierCurve(boxPaths[1])) {
          endX = boxPaths[1].end.x;
          endY = boxPaths[1].end.y;
        } else {
          endX = boxPaths[1].x;
          endY = boxPaths[1].y;
        }
        if (side === 0 || side === 2) {
          length = Math.abs(startX - endX);
        } else {
          length = Math.abs(startY - endY);
        }
        this.ctx.beginPath();
        if (style === 3) {
          this.formatPath(strokePaths);
        } else {
          this.formatPath(boxPaths.slice(0, 2));
        }
        dashLength = width < 3 ? width * 3 : width * 2;
        spaceLength = width < 3 ? width * 2 : width;
        if (style === 3) {
          dashLength = width;
          spaceLength = width;
        }
        useLineDash = true;
        if (length <= dashLength * 2) {
          useLineDash = false;
        } else if (length <= dashLength * 2 + spaceLength) {
          multiplier = length / (2 * dashLength + spaceLength);
          dashLength *= multiplier;
          spaceLength *= multiplier;
        } else {
          numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
          minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
          maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
          spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
        }
        if (useLineDash) {
          if (style === 3) {
            this.ctx.setLineDash([0, dashLength + spaceLength]);
          } else {
            this.ctx.setLineDash([dashLength, spaceLength]);
          }
        }
        if (style === 3) {
          this.ctx.lineCap = "round";
          this.ctx.lineWidth = width;
        } else {
          this.ctx.lineWidth = width * 2 + 1.1;
        }
        this.ctx.strokeStyle = asString(color2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        if (style === 2) {
          if (isBezierCurve(boxPaths[0])) {
            path1 = boxPaths[3];
            path2 = boxPaths[0];
            this.ctx.beginPath();
            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
            this.ctx.stroke();
          }
          if (isBezierCurve(boxPaths[1])) {
            path1 = boxPaths[1];
            path2 = boxPaths[2];
            this.ctx.beginPath();
            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
            this.ctx.stroke();
          }
        }
        this.ctx.restore();
        return [
          2
          /*return*/
        ];
      });
    });
  };
  CanvasRenderer.prototype.render = function(element) {
    return __awaiter(this, void 0, void 0, function() {
      var stack;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (this.options.backgroundColor) {
              this.ctx.fillStyle = asString(this.options.backgroundColor);
              this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
            }
            stack = parseStackingContexts(element);
            return [4, this.renderStack(stack)];
          case 1:
            _a.sent();
            this.applyEffects([]);
            return [2, this.canvas];
        }
      });
    });
  };
  return CanvasRenderer;
})(Renderer);
var isTextInputElement = function(container) {
  if (container instanceof TextareaElementContainer) {
    return true;
  } else if (container instanceof SelectElementContainer) {
    return true;
  } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
    return true;
  }
  return false;
};
var calculateBackgroundCurvedPaintingArea = function(clip, curves) {
  switch (clip) {
    case 0:
      return calculateBorderBoxPath(curves);
    case 2:
      return calculateContentBoxPath(curves);
    case 1:
    default:
      return calculatePaddingBoxPath(curves);
  }
};
var canvasTextAlign = function(textAlign2) {
  switch (textAlign2) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
};
var iOSBrokenFonts = ["-apple-system", "system-ui"];
var fixIOSSystemFonts = function(fontFamilies) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? fontFamilies.filter(function(fontFamily2) {
    return iOSBrokenFonts.indexOf(fontFamily2) === -1;
  }) : fontFamilies;
};
(function(_super) {
  __extends(ForeignObjectRenderer, _super);
  function ForeignObjectRenderer(context, options) {
    var _this = _super.call(this, context, options) || this;
    _this.canvas = options.canvas ? options.canvas : document.createElement("canvas");
    _this.ctx = _this.canvas.getContext("2d");
    _this.options = options;
    _this.canvas.width = Math.floor(options.width * options.scale);
    _this.canvas.height = Math.floor(options.height * options.scale);
    _this.canvas.style.width = options.width + "px";
    _this.canvas.style.height = options.height + "px";
    _this.ctx.scale(_this.options.scale, _this.options.scale);
    _this.ctx.translate(-options.x, -options.y);
    _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
    return _this;
  }
  ForeignObjectRenderer.prototype.render = function(element) {
    return __awaiter(this, void 0, void 0, function() {
      var svg, img;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
            return [4, loadSerializedSVG(svg)];
          case 1:
            img = _a.sent();
            if (this.options.backgroundColor) {
              this.ctx.fillStyle = asString(this.options.backgroundColor);
              this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
            }
            this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
            return [2, this.canvas];
        }
      });
    });
  };
  return ForeignObjectRenderer;
})(Renderer);
var loadSerializedSVG = function(svg) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      resolve(img);
    };
    img.onerror = reject;
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
  });
};
if (typeof window !== "undefined") {
  CacheStorage.setContext(window);
}
/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */
function ownKeys(e2, r) {
  var t = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e2, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e2) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e2, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e2, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e2;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e2 = t[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i = e2.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
var WINDOW = IS_BROWSER ? window : {};
var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
var NAMESPACE = "cropper";
var ACTION_ALL = "all";
var ACTION_CROP = "crop";
var ACTION_MOVE = "move";
var ACTION_ZOOM = "zoom";
var ACTION_EAST = "e";
var ACTION_WEST = "w";
var ACTION_SOUTH = "s";
var ACTION_NORTH = "n";
var ACTION_NORTH_EAST = "ne";
var ACTION_NORTH_WEST = "nw";
var ACTION_SOUTH_EAST = "se";
var ACTION_SOUTH_WEST = "sw";
var CLASS_CROP = "".concat(NAMESPACE, "-crop");
var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
var CLASS_MOVE = "".concat(NAMESPACE, "-move");
var DATA_ACTION = "".concat(NAMESPACE, "Action");
var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");
var DRAG_MODE_CROP = "crop";
var DRAG_MODE_MOVE = "move";
var DRAG_MODE_NONE = "none";
var EVENT_CROP = "crop";
var EVENT_CROP_END = "cropend";
var EVENT_CROP_MOVE = "cropmove";
var EVENT_CROP_START = "cropstart";
var EVENT_DBLCLICK = "dblclick";
var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
var EVENT_READY = "ready";
var EVENT_RESIZE = "resize";
var EVENT_WHEEL = "wheel";
var EVENT_ZOOM = "zoom";
var MIME_TYPE_JPEG = "image/jpeg";
var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
var REGEXP_DATA_URL = /^data:/;
var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
var REGEXP_TAG_NAME = /^img|canvas$/i;
var MIN_CONTAINER_WIDTH = 200;
var MIN_CONTAINER_HEIGHT = 100;
var DEFAULTS = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: DRAG_MODE_CROP,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: "",
  // Re-render the cropper when resize the window
  responsive: true,
  // Restore the cropped area after resize the window
  restore: true,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: true,
  // Check the current image's Exif Orientation information
  checkOrientation: true,
  // Show the black modal
  modal: true,
  // Show the dashed lines for guiding
  guides: true,
  // Show the center indicator for guiding
  center: true,
  // Show the white modal to highlight the crop box
  highlight: true,
  // Show the grid background
  background: true,
  // Enable to crop the image automatically when initialize
  autoCrop: true,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: true,
  // Enable to rotate the image
  rotatable: true,
  // Enable to scale the image
  scalable: true,
  // Enable to zoom the image
  zoomable: true,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: true,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: true,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: true,
  // Enable to resize the crop box
  cropBoxResizable: true,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: true,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: MIN_CONTAINER_WIDTH,
  minContainerHeight: MIN_CONTAINER_HEIGHT,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
};
var TEMPLATE = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
var isNaN = Number.isNaN || WINDOW.isNaN;
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}
var isPositiveNumber = function isPositiveNumber2(value) {
  return value > 0 && value < Infinity;
};
function isUndefined(value) {
  return typeof value === "undefined";
}
function isObject(value) {
  return _typeof(value) === "object" && value !== null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;
    return _constructor && prototype && hasOwnProperty.call(prototype, "isPrototypeOf");
  } catch (error2) {
    return false;
  }
}
function isFunction(value) {
  return typeof value === "function";
}
var slice = Array.prototype.slice;
function toArray(value) {
  return Array.from ? Array.from(value) : slice.call(value);
}
function forEach(data, callback) {
  if (data && isFunction(callback)) {
    if (Array.isArray(data) || isNumber(data.length)) {
      toArray(data).forEach(function(value, key) {
        callback.call(data, value, key, data);
      });
    } else if (isObject(data)) {
      Object.keys(data).forEach(function(key) {
        callback.call(data, data[key], key, data);
      });
    }
  }
  return data;
}
var assign = Object.assign || function assign2(target) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (isObject(target) && args.length > 0) {
    args.forEach(function(arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function(key) {
          target[key] = arg[key];
        });
      }
    });
  }
  return target;
};
var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
function normalizeDecimalNumber(value) {
  var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
}
var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
function setStyle(element, styles) {
  var style = element.style;
  forEach(styles, function(value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value = "".concat(value, "px");
    }
    style[property] = value;
  });
}
function hasClass(element, value) {
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}
function addClass(element, value) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      addClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.add(value);
    return;
  }
  var className = element.className.trim();
  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = "".concat(className, " ").concat(value);
  }
}
function removeClass(element, value) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      removeClass(elem, value);
    });
    return;
  }
  if (element.classList) {
    element.classList.remove(value);
    return;
  }
  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, "");
  }
}
function toggleClass(element, value, added) {
  if (!value) {
    return;
  }
  if (isNumber(element.length)) {
    forEach(element, function(elem) {
      toggleClass(elem, value, added);
    });
    return;
  }
  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}
var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
function toParamCase(value) {
  return value.replace(REGEXP_CAMEL_CASE, "$1-$2").toLowerCase();
}
function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  }
  if (element.dataset) {
    return element.dataset[name];
  }
  return element.getAttribute("data-".concat(toParamCase(name)));
}
function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute("data-".concat(toParamCase(name)), data);
  }
}
function removeData(element, name) {
  if (isObject(element[name])) {
    try {
      delete element[name];
    } catch (error2) {
      element[name] = void 0;
    }
  } else if (element.dataset) {
    try {
      delete element.dataset[name];
    } catch (error2) {
      element.dataset[name] = void 0;
    }
  } else {
    element.removeAttribute("data-".concat(toParamCase(name)));
  }
}
var REGEXP_SPACES = /\s\s*/;
var onceSupported = function() {
  var supported = false;
  if (IS_BROWSER) {
    var once = false;
    var listener = function listener2() {
    };
    var options = Object.defineProperty({}, "once", {
      get: function get() {
        supported = true;
        return once;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function set(value) {
        once = value;
      }
    });
    WINDOW.addEventListener("test", listener, options);
    WINDOW.removeEventListener("test", listener, options);
  }
  return supported;
}();
function removeListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function(event) {
    if (!onceSupported) {
      var listeners = element.listeners;
      if (listeners && listeners[event] && listeners[event][listener]) {
        handler = listeners[event][listener];
        delete listeners[event][listener];
        if (Object.keys(listeners[event]).length === 0) {
          delete listeners[event];
        }
        if (Object.keys(listeners).length === 0) {
          delete element.listeners;
        }
      }
    }
    element.removeEventListener(event, handler, options);
  });
}
function addListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var _handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function(event) {
    if (options.once && !onceSupported) {
      var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
      _handler = function handler() {
        delete listeners[event][listener];
        element.removeEventListener(event, _handler, options);
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        listener.apply(element, args);
      };
      if (!listeners[event]) {
        listeners[event] = {};
      }
      if (listeners[event][listener]) {
        element.removeEventListener(event, listeners[event][listener], options);
      }
      listeners[event][listener] = _handler;
      element.listeners = listeners;
    }
    element.addEventListener(event, _handler, options);
  });
}
function dispatchEvent(element, type, data) {
  var event;
  if (isFunction(Event) && isFunction(CustomEvent)) {
    event = new CustomEvent(type, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
  } else {
    event = document.createEvent("CustomEvent");
    event.initCustomEvent(type, true, true, data);
  }
  return element.dispatchEvent(event);
}
function getOffset(element) {
  var box = element.getBoundingClientRect();
  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var location = WINDOW.location;
var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function isCrossOriginURL(url) {
  var parts = url.match(REGEXP_ORIGINS);
  return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
}
function addTimestamp(url) {
  var timestamp = "timestamp=".concat((/* @__PURE__ */ new Date()).getTime());
  return url + (url.indexOf("?") === -1 ? "?" : "&") + timestamp;
}
function getTransforms(_ref) {
  var rotate2 = _ref.rotate, scaleX2 = _ref.scaleX, scaleY2 = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
  var values = [];
  if (isNumber(translateX) && translateX !== 0) {
    values.push("translateX(".concat(translateX, "px)"));
  }
  if (isNumber(translateY) && translateY !== 0) {
    values.push("translateY(".concat(translateY, "px)"));
  }
  if (isNumber(rotate2) && rotate2 !== 0) {
    values.push("rotate(".concat(rotate2, "deg)"));
  }
  if (isNumber(scaleX2) && scaleX2 !== 1) {
    values.push("scaleX(".concat(scaleX2, ")"));
  }
  if (isNumber(scaleY2) && scaleY2 !== 1) {
    values.push("scaleY(".concat(scaleY2, ")"));
  }
  var transform2 = values.length ? values.join(" ") : "none";
  return {
    WebkitTransform: transform2,
    msTransform: transform2,
    transform: transform2
  };
}
function getMaxZoomRatio(pointers) {
  var pointers2 = _objectSpread2({}, pointers);
  var maxRatio = 0;
  forEach(pointers, function(pointer, pointerId) {
    delete pointers2[pointerId];
    forEach(pointers2, function(pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;
      if (Math.abs(ratio) > Math.abs(maxRatio)) {
        maxRatio = ratio;
      }
    });
  });
  return maxRatio;
}
function getPointer(_ref2, endOnly) {
  var pageX = _ref2.pageX, pageY = _ref2.pageY;
  var end = {
    endX: pageX,
    endY: pageY
  };
  return endOnly ? end : _objectSpread2({
    startX: pageX,
    startY: pageY
  }, end);
}
function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;
  forEach(pointers, function(_ref3) {
    var startX = _ref3.startX, startY = _ref3.startY;
    pageX += startX;
    pageY += startY;
    count += 1;
  });
  pageX /= count;
  pageY /= count;
  return {
    pageX,
    pageY
  };
}
function getAdjustedSizes(_ref4) {
  var aspectRatio = _ref4.aspectRatio, height = _ref4.height, width = _ref4.width;
  var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain";
  var isValidWidth = isPositiveNumber(width);
  var isValidHeight = isPositiveNumber(height);
  if (isValidWidth && isValidHeight) {
    var adjustedWidth = height * aspectRatio;
    if (type === "contain" && adjustedWidth > width || type === "cover" && adjustedWidth < width) {
      height = width / aspectRatio;
    } else {
      width = height * aspectRatio;
    }
  } else if (isValidWidth) {
    height = width / aspectRatio;
  } else if (isValidHeight) {
    width = height * aspectRatio;
  }
  return {
    width,
    height
  };
}
function getRotatedSizes(_ref5) {
  var width = _ref5.width, height = _ref5.height, degree = _ref5.degree;
  degree = Math.abs(degree) % 180;
  if (degree === 90) {
    return {
      width: height,
      height: width
    };
  }
  var arc = degree % 90 * Math.PI / 180;
  var sinArc = Math.sin(arc);
  var cosArc = Math.cos(arc);
  var newWidth = width * cosArc + height * sinArc;
  var newHeight = width * sinArc + height * cosArc;
  return degree > 90 ? {
    width: newHeight,
    height: newWidth
  } : {
    width: newWidth,
    height: newHeight
  };
}
function getSourceCanvas(image2, _ref6, _ref7, _ref8) {
  var imageAspectRatio = _ref6.aspectRatio, imageNaturalWidth = _ref6.naturalWidth, imageNaturalHeight = _ref6.naturalHeight, _ref6$rotate = _ref6.rotate, rotate2 = _ref6$rotate === void 0 ? 0 : _ref6$rotate, _ref6$scaleX = _ref6.scaleX, scaleX2 = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX, _ref6$scaleY = _ref6.scaleY, scaleY2 = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
  var aspectRatio = _ref7.aspectRatio, naturalWidth = _ref7.naturalWidth, naturalHeight = _ref7.naturalHeight;
  var _ref8$fillColor = _ref8.fillColor, fillColor = _ref8$fillColor === void 0 ? "transparent" : _ref8$fillColor, _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled, imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE, _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality, imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? "low" : _ref8$imageSmoothingQ, _ref8$maxWidth = _ref8.maxWidth, maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth, _ref8$maxHeight = _ref8.maxHeight, maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight, _ref8$minWidth = _ref8.minWidth, minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth, _ref8$minHeight = _ref8.minHeight, minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var maxSizes = getAdjustedSizes({
    aspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var minSizes = getAdjustedSizes({
    aspectRatio,
    width: minWidth,
    height: minHeight
  }, "cover");
  var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
  var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));
  var destMaxSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var destMinSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: minWidth,
    height: minHeight
  }, "cover");
  var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
  var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
  var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
  canvas.width = normalizeDecimalNumber(width);
  canvas.height = normalizeDecimalNumber(height);
  context.fillStyle = fillColor;
  context.fillRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  context.rotate(rotate2 * Math.PI / 180);
  context.scale(scaleX2, scaleY2);
  context.imageSmoothingEnabled = imageSmoothingEnabled;
  context.imageSmoothingQuality = imageSmoothingQuality;
  context.drawImage.apply(context, [image2].concat(_toConsumableArray(params.map(function(param) {
    return Math.floor(normalizeDecimalNumber(param));
  }))));
  context.restore();
  return canvas;
}
var fromCharCode = String.fromCharCode;
function getStringFromCharCode(dataView, start, length) {
  var str = "";
  length += start;
  for (var i = start; i < length; i += 1) {
    str += fromCharCode(dataView.getUint8(i));
  }
  return str;
}
var REGEXP_DATA_URL_HEAD = /^data:.*,/;
function dataURLToArrayBuffer(dataURL) {
  var base642 = dataURL.replace(REGEXP_DATA_URL_HEAD, "");
  var binary = atob(base642);
  var arrayBuffer = new ArrayBuffer(binary.length);
  var uint8 = new Uint8Array(arrayBuffer);
  forEach(uint8, function(value, i) {
    uint8[i] = binary.charCodeAt(i);
  });
  return arrayBuffer;
}
function arrayBufferToDataURL(arrayBuffer, mimeType) {
  var chunks = [];
  var chunkSize = 8192;
  var uint8 = new Uint8Array(arrayBuffer);
  while (uint8.length > 0) {
    chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
    uint8 = uint8.subarray(chunkSize);
  }
  return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join("")));
}
function resetAndGetOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var orientation;
  try {
    var littleEndian;
    var app1Start;
    var ifdStart;
    if (dataView.getUint8(0) === 255 && dataView.getUint8(1) === 216) {
      var length = dataView.byteLength;
      var offset = 2;
      while (offset + 1 < length) {
        if (dataView.getUint8(offset) === 255 && dataView.getUint8(offset + 1) === 225) {
          app1Start = offset;
          break;
        }
        offset += 1;
      }
    }
    if (app1Start) {
      var exifIDCode = app1Start + 4;
      var tiffOffset = app1Start + 10;
      if (getStringFromCharCode(dataView, exifIDCode, 4) === "Exif") {
        var endianness = dataView.getUint16(tiffOffset);
        littleEndian = endianness === 18761;
        if (littleEndian || endianness === 19789) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 42) {
            var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
            if (firstIFDOffset >= 8) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
      }
    }
    if (ifdStart) {
      var _length = dataView.getUint16(ifdStart, littleEndian);
      var _offset;
      var i;
      for (i = 0; i < _length; i += 1) {
        _offset = ifdStart + i * 12 + 2;
        if (dataView.getUint16(_offset, littleEndian) === 274) {
          _offset += 8;
          orientation = dataView.getUint16(_offset, littleEndian);
          dataView.setUint16(_offset, 1, littleEndian);
          break;
        }
      }
    }
  } catch (error2) {
    orientation = 1;
  }
  return orientation;
}
function parseOrientation(orientation) {
  var rotate2 = 0;
  var scaleX2 = 1;
  var scaleY2 = 1;
  switch (orientation) {
    case 2:
      scaleX2 = -1;
      break;
    case 3:
      rotate2 = -180;
      break;
    case 4:
      scaleY2 = -1;
      break;
    case 5:
      rotate2 = 90;
      scaleY2 = -1;
      break;
    case 6:
      rotate2 = 90;
      break;
    case 7:
      rotate2 = 90;
      scaleX2 = -1;
      break;
    case 8:
      rotate2 = -90;
      break;
  }
  return {
    rotate: rotate2,
    scaleX: scaleX2,
    scaleY: scaleY2
  };
}
var render = {
  render: function render2() {
    this.initContainer();
    this.initCanvas();
    this.initCropBox();
    this.renderCanvas();
    if (this.cropped) {
      this.renderCropBox();
    }
  },
  initContainer: function initContainer() {
    var element = this.element, options = this.options, container = this.container, cropper2 = this.cropper;
    var minWidth = Number(options.minContainerWidth);
    var minHeight = Number(options.minContainerHeight);
    addClass(cropper2, CLASS_HIDDEN);
    removeClass(element, CLASS_HIDDEN);
    var containerData = {
      width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
      height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
    };
    this.containerData = containerData;
    setStyle(cropper2, {
      width: containerData.width,
      height: containerData.height
    });
    addClass(element, CLASS_HIDDEN);
    removeClass(cropper2, CLASS_HIDDEN);
  },
  // Canvas (image wrapper)
  initCanvas: function initCanvas() {
    var containerData = this.containerData, imageData = this.imageData;
    var viewMode = this.options.viewMode;
    var rotated = Math.abs(imageData.rotate) % 180 === 90;
    var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
    var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
    var aspectRatio = naturalWidth / naturalHeight;
    var canvasWidth = containerData.width;
    var canvasHeight = containerData.height;
    if (containerData.height * aspectRatio > containerData.width) {
      if (viewMode === 3) {
        canvasWidth = containerData.height * aspectRatio;
      } else {
        canvasHeight = containerData.width / aspectRatio;
      }
    } else if (viewMode === 3) {
      canvasHeight = containerData.width / aspectRatio;
    } else {
      canvasWidth = containerData.height * aspectRatio;
    }
    var canvasData = {
      aspectRatio,
      naturalWidth,
      naturalHeight,
      width: canvasWidth,
      height: canvasHeight
    };
    this.canvasData = canvasData;
    this.limited = viewMode === 1 || viewMode === 2;
    this.limitCanvas(true, true);
    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
    canvasData.left = (containerData.width - canvasData.width) / 2;
    canvasData.top = (containerData.height - canvasData.height) / 2;
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    this.initialCanvasData = assign({}, canvasData);
  },
  limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
    var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
    var viewMode = options.viewMode;
    var aspectRatio = canvasData.aspectRatio;
    var cropped = this.cropped && cropBoxData;
    if (sizeLimited) {
      var minCanvasWidth = Number(options.minCanvasWidth) || 0;
      var minCanvasHeight = Number(options.minCanvasHeight) || 0;
      if (viewMode > 1) {
        minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
        minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
        if (viewMode === 3) {
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      } else if (viewMode > 0) {
        if (minCanvasWidth) {
          minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
        } else if (minCanvasHeight) {
          minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
        } else if (cropped) {
          minCanvasWidth = cropBoxData.width;
          minCanvasHeight = cropBoxData.height;
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      }
      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio,
        width: minCanvasWidth,
        height: minCanvasHeight
      });
      minCanvasWidth = _getAdjustedSizes.width;
      minCanvasHeight = _getAdjustedSizes.height;
      canvasData.minWidth = minCanvasWidth;
      canvasData.minHeight = minCanvasHeight;
      canvasData.maxWidth = Infinity;
      canvasData.maxHeight = Infinity;
    }
    if (positionLimited) {
      if (viewMode > (cropped ? 0 : 1)) {
        var newCanvasLeft = containerData.width - canvasData.width;
        var newCanvasTop = containerData.height - canvasData.height;
        canvasData.minLeft = Math.min(0, newCanvasLeft);
        canvasData.minTop = Math.min(0, newCanvasTop);
        canvasData.maxLeft = Math.max(0, newCanvasLeft);
        canvasData.maxTop = Math.max(0, newCanvasTop);
        if (cropped && this.limited) {
          canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
          canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
          canvasData.maxLeft = cropBoxData.left;
          canvasData.maxTop = cropBoxData.top;
          if (viewMode === 2) {
            if (canvasData.width >= containerData.width) {
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
            }
            if (canvasData.height >= containerData.height) {
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxTop = Math.max(0, newCanvasTop);
            }
          }
        }
      } else {
        canvasData.minLeft = -canvasData.width;
        canvasData.minTop = -canvasData.height;
        canvasData.maxLeft = containerData.width;
        canvasData.maxTop = containerData.height;
      }
    }
  },
  renderCanvas: function renderCanvas(changed, transformed) {
    var canvasData = this.canvasData, imageData = this.imageData;
    if (transformed) {
      var _getRotatedSizes = getRotatedSizes({
        width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
        height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
        degree: imageData.rotate || 0
      }), naturalWidth = _getRotatedSizes.width, naturalHeight = _getRotatedSizes.height;
      var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
      var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
      canvasData.left -= (width - canvasData.width) / 2;
      canvasData.top -= (height - canvasData.height) / 2;
      canvasData.width = width;
      canvasData.height = height;
      canvasData.aspectRatio = naturalWidth / naturalHeight;
      canvasData.naturalWidth = naturalWidth;
      canvasData.naturalHeight = naturalHeight;
      this.limitCanvas(true, false);
    }
    if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
      canvasData.left = canvasData.oldLeft;
    }
    if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
      canvasData.top = canvasData.oldTop;
    }
    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
    this.limitCanvas(false, true);
    canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
    canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    setStyle(this.canvas, assign({
      width: canvasData.width,
      height: canvasData.height
    }, getTransforms({
      translateX: canvasData.left,
      translateY: canvasData.top
    })));
    this.renderImage(changed);
    if (this.cropped && this.limited) {
      this.limitCropBox(true, true);
    }
  },
  renderImage: function renderImage(changed) {
    var canvasData = this.canvasData, imageData = this.imageData;
    var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
    var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
    assign(imageData, {
      width,
      height,
      left: (canvasData.width - width) / 2,
      top: (canvasData.height - height) / 2
    });
    setStyle(this.image, assign({
      width: imageData.width,
      height: imageData.height
    }, getTransforms(assign({
      translateX: imageData.left,
      translateY: imageData.top
    }, imageData))));
    if (changed) {
      this.output();
    }
  },
  initCropBox: function initCropBox() {
    var options = this.options, canvasData = this.canvasData;
    var aspectRatio = options.aspectRatio || options.initialAspectRatio;
    var autoCropArea = Number(options.autoCropArea) || 0.8;
    var cropBoxData = {
      width: canvasData.width,
      height: canvasData.height
    };
    if (aspectRatio) {
      if (canvasData.height * aspectRatio > canvasData.width) {
        cropBoxData.height = cropBoxData.width / aspectRatio;
      } else {
        cropBoxData.width = cropBoxData.height * aspectRatio;
      }
    }
    this.cropBoxData = cropBoxData;
    this.limitCropBox(true, true);
    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
    cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
    cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
    cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
    cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;
    this.initialCropBoxData = assign({}, cropBoxData);
  },
  limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
    var options = this.options, containerData = this.containerData, canvasData = this.canvasData, cropBoxData = this.cropBoxData, limited = this.limited;
    var aspectRatio = options.aspectRatio;
    if (sizeLimited) {
      var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
      var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
      var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
      var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;
      minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
      minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
      if (aspectRatio) {
        if (minCropBoxWidth && minCropBoxHeight) {
          if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
        } else if (minCropBoxWidth) {
          minCropBoxHeight = minCropBoxWidth / aspectRatio;
        } else if (minCropBoxHeight) {
          minCropBoxWidth = minCropBoxHeight * aspectRatio;
        }
        if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
          maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
        } else {
          maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
        }
      }
      cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
      cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
      cropBoxData.maxWidth = maxCropBoxWidth;
      cropBoxData.maxHeight = maxCropBoxHeight;
    }
    if (positionLimited) {
      if (limited) {
        cropBoxData.minLeft = Math.max(0, canvasData.left);
        cropBoxData.minTop = Math.max(0, canvasData.top);
        cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
        cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
      } else {
        cropBoxData.minLeft = 0;
        cropBoxData.minTop = 0;
        cropBoxData.maxLeft = containerData.width - cropBoxData.width;
        cropBoxData.maxTop = containerData.height - cropBoxData.height;
      }
    }
  },
  renderCropBox: function renderCropBox() {
    var options = this.options, containerData = this.containerData, cropBoxData = this.cropBoxData;
    if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
      cropBoxData.left = cropBoxData.oldLeft;
    }
    if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
      cropBoxData.top = cropBoxData.oldTop;
    }
    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
    this.limitCropBox(false, true);
    cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
    cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;
    if (options.movable && options.cropBoxMovable) {
      setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
    }
    setStyle(this.cropBox, assign({
      width: cropBoxData.width,
      height: cropBoxData.height
    }, getTransforms({
      translateX: cropBoxData.left,
      translateY: cropBoxData.top
    })));
    if (this.cropped && this.limited) {
      this.limitCanvas(true, true);
    }
    if (!this.disabled) {
      this.output();
    }
  },
  output: function output() {
    this.preview();
    dispatchEvent(this.element, EVENT_CROP, this.getData());
  }
};
var preview = {
  initPreview: function initPreview() {
    var element = this.element, crossOrigin = this.crossOrigin;
    var preview3 = this.options.preview;
    var url = crossOrigin ? this.crossOriginUrl : this.url;
    var alt = element.alt || "The image to preview";
    var image2 = document.createElement("img");
    if (crossOrigin) {
      image2.crossOrigin = crossOrigin;
    }
    image2.src = url;
    image2.alt = alt;
    this.viewBox.appendChild(image2);
    this.viewBoxImage = image2;
    if (!preview3) {
      return;
    }
    var previews = preview3;
    if (typeof preview3 === "string") {
      previews = element.ownerDocument.querySelectorAll(preview3);
    } else if (preview3.querySelector) {
      previews = [preview3];
    }
    this.previews = previews;
    forEach(previews, function(el) {
      var img = document.createElement("img");
      setData(el, DATA_PREVIEW, {
        width: el.offsetWidth,
        height: el.offsetHeight,
        html: el.innerHTML
      });
      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }
      img.src = url;
      img.alt = alt;
      img.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"';
      el.innerHTML = "";
      el.appendChild(img);
    });
  },
  resetPreview: function resetPreview() {
    forEach(this.previews, function(element) {
      var data = getData(element, DATA_PREVIEW);
      setStyle(element, {
        width: data.width,
        height: data.height
      });
      element.innerHTML = data.html;
      removeData(element, DATA_PREVIEW);
    });
  },
  preview: function preview2() {
    var imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
    var cropBoxWidth = cropBoxData.width, cropBoxHeight = cropBoxData.height;
    var width = imageData.width, height = imageData.height;
    var left = cropBoxData.left - canvasData.left - imageData.left;
    var top = cropBoxData.top - canvasData.top - imageData.top;
    if (!this.cropped || this.disabled) {
      return;
    }
    setStyle(this.viewBoxImage, assign({
      width,
      height
    }, getTransforms(assign({
      translateX: -left,
      translateY: -top
    }, imageData))));
    forEach(this.previews, function(element) {
      var data = getData(element, DATA_PREVIEW);
      var originalWidth = data.width;
      var originalHeight = data.height;
      var newWidth = originalWidth;
      var newHeight = originalHeight;
      var ratio = 1;
      if (cropBoxWidth) {
        ratio = originalWidth / cropBoxWidth;
        newHeight = cropBoxHeight * ratio;
      }
      if (cropBoxHeight && newHeight > originalHeight) {
        ratio = originalHeight / cropBoxHeight;
        newWidth = cropBoxWidth * ratio;
        newHeight = originalHeight;
      }
      setStyle(element, {
        width: newWidth,
        height: newHeight
      });
      setStyle(element.getElementsByTagName("img")[0], assign({
        width: width * ratio,
        height: height * ratio
      }, getTransforms(assign({
        translateX: -left * ratio,
        translateY: -top * ratio
      }, imageData))));
    });
  }
};
var events = {
  bind: function bind() {
    var element = this.element, options = this.options, cropper2 = this.cropper;
    if (isFunction(options.cropstart)) {
      addListener(element, EVENT_CROP_START, options.cropstart);
    }
    if (isFunction(options.cropmove)) {
      addListener(element, EVENT_CROP_MOVE, options.cropmove);
    }
    if (isFunction(options.cropend)) {
      addListener(element, EVENT_CROP_END, options.cropend);
    }
    if (isFunction(options.crop)) {
      addListener(element, EVENT_CROP, options.crop);
    }
    if (isFunction(options.zoom)) {
      addListener(element, EVENT_ZOOM, options.zoom);
    }
    addListener(cropper2, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
    if (options.zoomable && options.zoomOnWheel) {
      addListener(cropper2, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
        passive: false,
        capture: true
      });
    }
    if (options.toggleDragModeOnDblclick) {
      addListener(cropper2, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
    }
    addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
    addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
    if (options.responsive) {
      addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
    }
  },
  unbind: function unbind() {
    var element = this.element, options = this.options, cropper2 = this.cropper;
    if (isFunction(options.cropstart)) {
      removeListener(element, EVENT_CROP_START, options.cropstart);
    }
    if (isFunction(options.cropmove)) {
      removeListener(element, EVENT_CROP_MOVE, options.cropmove);
    }
    if (isFunction(options.cropend)) {
      removeListener(element, EVENT_CROP_END, options.cropend);
    }
    if (isFunction(options.crop)) {
      removeListener(element, EVENT_CROP, options.crop);
    }
    if (isFunction(options.zoom)) {
      removeListener(element, EVENT_ZOOM, options.zoom);
    }
    removeListener(cropper2, EVENT_POINTER_DOWN, this.onCropStart);
    if (options.zoomable && options.zoomOnWheel) {
      removeListener(cropper2, EVENT_WHEEL, this.onWheel, {
        passive: false,
        capture: true
      });
    }
    if (options.toggleDragModeOnDblclick) {
      removeListener(cropper2, EVENT_DBLCLICK, this.onDblclick);
    }
    removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
    removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
    if (options.responsive) {
      removeListener(window, EVENT_RESIZE, this.onResize);
    }
  }
};
var handlers = {
  resize: function resize() {
    if (this.disabled) {
      return;
    }
    var options = this.options, container = this.container, containerData = this.containerData;
    var ratioX = container.offsetWidth / containerData.width;
    var ratioY = container.offsetHeight / containerData.height;
    var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;
    if (ratio !== 1) {
      var canvasData;
      var cropBoxData;
      if (options.restore) {
        canvasData = this.getCanvasData();
        cropBoxData = this.getCropBoxData();
      }
      this.render();
      if (options.restore) {
        this.setCanvasData(forEach(canvasData, function(n, i) {
          canvasData[i] = n * ratio;
        }));
        this.setCropBoxData(forEach(cropBoxData, function(n, i) {
          cropBoxData[i] = n * ratio;
        }));
      }
    }
  },
  dblclick: function dblclick() {
    if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
      return;
    }
    this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
  },
  wheel: function wheel(event) {
    var _this = this;
    var ratio = Number(this.options.wheelZoomRatio) || 0.1;
    var delta = 1;
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    if (this.wheeling) {
      return;
    }
    this.wheeling = true;
    setTimeout(function() {
      _this.wheeling = false;
    }, 50);
    if (event.deltaY) {
      delta = event.deltaY > 0 ? 1 : -1;
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta / 120;
    } else if (event.detail) {
      delta = event.detail > 0 ? 1 : -1;
    }
    this.zoom(-delta * ratio, event);
  },
  cropStart: function cropStart(event) {
    var buttons = event.buttons, button = event.button;
    if (this.disabled || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && // No primary button (Usually the left button)
    (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
      return;
    }
    var options = this.options, pointers = this.pointers;
    var action;
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      pointers[event.pointerId || 0] = getPointer(event);
    }
    if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
      action = ACTION_ZOOM;
    } else {
      action = getData(event.target, DATA_ACTION);
    }
    if (!REGEXP_ACTIONS.test(action)) {
      return;
    }
    if (dispatchEvent(this.element, EVENT_CROP_START, {
      originalEvent: event,
      action
    }) === false) {
      return;
    }
    event.preventDefault();
    this.action = action;
    this.cropping = false;
    if (action === ACTION_CROP) {
      this.cropping = true;
      addClass(this.dragBox, CLASS_MODAL);
    }
  },
  cropMove: function cropMove(event) {
    var action = this.action;
    if (this.disabled || !action) {
      return;
    }
    var pointers = this.pointers;
    event.preventDefault();
    if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
      originalEvent: event,
      action
    }) === false) {
      return;
    }
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        assign(pointers[touch.identifier] || {}, getPointer(touch, true));
      });
    } else {
      assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
    }
    this.change(event);
  },
  cropEnd: function cropEnd(event) {
    if (this.disabled) {
      return;
    }
    var action = this.action, pointers = this.pointers;
    if (event.changedTouches) {
      forEach(event.changedTouches, function(touch) {
        delete pointers[touch.identifier];
      });
    } else {
      delete pointers[event.pointerId || 0];
    }
    if (!action) {
      return;
    }
    event.preventDefault();
    if (!Object.keys(pointers).length) {
      this.action = "";
    }
    if (this.cropping) {
      this.cropping = false;
      toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
    }
    dispatchEvent(this.element, EVENT_CROP_END, {
      originalEvent: event,
      action
    });
  }
};
var change = {
  change: function change2(event) {
    var options = this.options, canvasData = this.canvasData, containerData = this.containerData, cropBoxData = this.cropBoxData, pointers = this.pointers;
    var action = this.action;
    var aspectRatio = options.aspectRatio;
    var left = cropBoxData.left, top = cropBoxData.top, width = cropBoxData.width, height = cropBoxData.height;
    var right = left + width;
    var bottom = top + height;
    var minLeft = 0;
    var minTop = 0;
    var maxWidth = containerData.width;
    var maxHeight = containerData.height;
    var renderable = true;
    var offset;
    if (!aspectRatio && event.shiftKey) {
      aspectRatio = width && height ? width / height : 1;
    }
    if (this.limited) {
      minLeft = cropBoxData.minLeft;
      minTop = cropBoxData.minTop;
      maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
      maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
    }
    var pointer = pointers[Object.keys(pointers)[0]];
    var range = {
      x: pointer.endX - pointer.startX,
      y: pointer.endY - pointer.startY
    };
    var check = function check2(side) {
      switch (side) {
        case ACTION_EAST:
          if (right + range.x > maxWidth) {
            range.x = maxWidth - right;
          }
          break;
        case ACTION_WEST:
          if (left + range.x < minLeft) {
            range.x = minLeft - left;
          }
          break;
        case ACTION_NORTH:
          if (top + range.y < minTop) {
            range.y = minTop - top;
          }
          break;
        case ACTION_SOUTH:
          if (bottom + range.y > maxHeight) {
            range.y = maxHeight - bottom;
          }
          break;
      }
    };
    switch (action) {
      case ACTION_ALL:
        left += range.x;
        top += range.y;
        break;
      case ACTION_EAST:
        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }
        check(ACTION_EAST);
        width += range.x;
        if (width < 0) {
          action = ACTION_WEST;
          width = -width;
          left -= width;
        }
        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }
        break;
      case ACTION_NORTH:
        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }
        check(ACTION_NORTH);
        height -= range.y;
        top += range.y;
        if (height < 0) {
          action = ACTION_SOUTH;
          height = -height;
          top -= height;
        }
        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }
        break;
      case ACTION_WEST:
        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }
        check(ACTION_WEST);
        width -= range.x;
        left += range.x;
        if (width < 0) {
          action = ACTION_EAST;
          width = -width;
          left -= width;
        }
        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }
        break;
      case ACTION_SOUTH:
        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }
        check(ACTION_SOUTH);
        height += range.y;
        if (height < 0) {
          action = ACTION_NORTH;
          height = -height;
          top -= height;
        }
        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }
        break;
      case ACTION_NORTH_EAST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
            renderable = false;
            break;
          }
          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
        } else {
          check(ACTION_NORTH);
          check(ACTION_EAST);
          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width += range.x;
          }
          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          top -= height;
        }
        break;
      case ACTION_NORTH_WEST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
            renderable = false;
            break;
          }
          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
          left += cropBoxData.width - width;
        } else {
          check(ACTION_NORTH);
          check(ACTION_WEST);
          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }
          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          top -= height;
        }
        break;
      case ACTION_SOUTH_WEST:
        if (aspectRatio) {
          if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
            renderable = false;
            break;
          }
          check(ACTION_WEST);
          width -= range.x;
          left += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_WEST);
          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }
          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          top -= height;
        }
        break;
      case ACTION_SOUTH_EAST:
        if (aspectRatio) {
          if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
            renderable = false;
            break;
          }
          check(ACTION_EAST);
          width += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_EAST);
          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width += range.x;
          }
          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }
        if (width < 0 && height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          top -= height;
        }
        break;
      case ACTION_MOVE:
        this.move(range.x, range.y);
        renderable = false;
        break;
      case ACTION_ZOOM:
        this.zoom(getMaxZoomRatio(pointers), event);
        renderable = false;
        break;
      case ACTION_CROP:
        if (!range.x || !range.y) {
          renderable = false;
          break;
        }
        offset = getOffset(this.cropper);
        left = pointer.startX - offset.left;
        top = pointer.startY - offset.top;
        width = cropBoxData.minWidth;
        height = cropBoxData.minHeight;
        if (range.x > 0) {
          action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
        } else if (range.x < 0) {
          left -= width;
          action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
        }
        if (range.y < 0) {
          top -= height;
        }
        if (!this.cropped) {
          removeClass(this.cropBox, CLASS_HIDDEN);
          this.cropped = true;
          if (this.limited) {
            this.limitCropBox(true, true);
          }
        }
        break;
    }
    if (renderable) {
      cropBoxData.width = width;
      cropBoxData.height = height;
      cropBoxData.left = left;
      cropBoxData.top = top;
      this.action = action;
      this.renderCropBox();
    }
    forEach(pointers, function(p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  }
};
var methods = {
  // Show the crop box manually
  crop: function crop() {
    if (this.ready && !this.cropped && !this.disabled) {
      this.cropped = true;
      this.limitCropBox(true, true);
      if (this.options.modal) {
        addClass(this.dragBox, CLASS_MODAL);
      }
      removeClass(this.cropBox, CLASS_HIDDEN);
      this.setCropBoxData(this.initialCropBoxData);
    }
    return this;
  },
  // Reset the image and crop box to their initial states
  reset: function reset() {
    if (this.ready && !this.disabled) {
      this.imageData = assign({}, this.initialImageData);
      this.canvasData = assign({}, this.initialCanvasData);
      this.cropBoxData = assign({}, this.initialCropBoxData);
      this.renderCanvas();
      if (this.cropped) {
        this.renderCropBox();
      }
    }
    return this;
  },
  // Clear the crop box
  clear: function clear() {
    if (this.cropped && !this.disabled) {
      assign(this.cropBoxData, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });
      this.cropped = false;
      this.renderCropBox();
      this.limitCanvas(true, true);
      this.renderCanvas();
      removeClass(this.dragBox, CLASS_MODAL);
      addClass(this.cropBox, CLASS_HIDDEN);
    }
    return this;
  },
  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function replace(url) {
    var hasSameSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!this.disabled && url) {
      if (this.isImg) {
        this.element.src = url;
      }
      if (hasSameSize) {
        this.url = url;
        this.image.src = url;
        if (this.ready) {
          this.viewBoxImage.src = url;
          forEach(this.previews, function(element) {
            element.getElementsByTagName("img")[0].src = url;
          });
        }
      } else {
        if (this.isImg) {
          this.replaced = true;
        }
        this.options.data = null;
        this.uncreate();
        this.load(url);
      }
    }
    return this;
  },
  // Enable (unfreeze) the cropper
  enable: function enable() {
    if (this.ready && this.disabled) {
      this.disabled = false;
      removeClass(this.cropper, CLASS_DISABLED);
    }
    return this;
  },
  // Disable (freeze) the cropper
  disable: function disable() {
    if (this.ready && !this.disabled) {
      this.disabled = true;
      addClass(this.cropper, CLASS_DISABLED);
    }
    return this;
  },
  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function destroy() {
    var element = this.element;
    if (!element[NAMESPACE]) {
      return this;
    }
    element[NAMESPACE] = void 0;
    if (this.isImg && this.replaced) {
      element.src = this.originalUrl;
    }
    this.uncreate();
    return this;
  },
  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function move(offsetX) {
    var offsetY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : offsetX;
    var _this$canvasData = this.canvasData, left = _this$canvasData.left, top = _this$canvasData.top;
    return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
  },
  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function moveTo(x) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
    var canvasData = this.canvasData;
    var changed = false;
    x = Number(x);
    y = Number(y);
    if (this.ready && !this.disabled && this.options.movable) {
      if (isNumber(x)) {
        canvasData.left = x;
        changed = true;
      }
      if (isNumber(y)) {
        canvasData.top = y;
        changed = true;
      }
      if (changed) {
        this.renderCanvas(true);
      }
    }
    return this;
  },
  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function zoom(ratio, _originalEvent) {
    var canvasData = this.canvasData;
    ratio = Number(ratio);
    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }
    return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
  },
  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
    var options = this.options, canvasData = this.canvasData;
    var width = canvasData.width, height = canvasData.height, naturalWidth = canvasData.naturalWidth, naturalHeight = canvasData.naturalHeight;
    ratio = Number(ratio);
    if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;
      if (dispatchEvent(this.element, EVENT_ZOOM, {
        ratio,
        oldRatio: width / naturalWidth,
        originalEvent: _originalEvent
      }) === false) {
        return this;
      }
      if (_originalEvent) {
        var pointers = this.pointers;
        var offset = getOffset(this.cropper);
        var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        };
        canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
      } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
        canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
      } else {
        canvasData.left -= (newWidth - width) / 2;
        canvasData.top -= (newHeight - height) / 2;
      }
      canvasData.width = newWidth;
      canvasData.height = newHeight;
      this.renderCanvas(true);
    }
    return this;
  },
  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function rotate(degree) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
  },
  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function rotateTo(degree) {
    degree = Number(degree);
    if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
      this.imageData.rotate = degree % 360;
      this.renderCanvas(true, true);
    }
    return this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function scaleX(_scaleX) {
    var scaleY2 = this.imageData.scaleY;
    return this.scale(_scaleX, isNumber(scaleY2) ? scaleY2 : 1);
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function scaleY(_scaleY) {
    var scaleX2 = this.imageData.scaleX;
    return this.scale(isNumber(scaleX2) ? scaleX2 : 1, _scaleY);
  },
  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function scale(scaleX2) {
    var scaleY2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX2;
    var imageData = this.imageData;
    var transformed = false;
    scaleX2 = Number(scaleX2);
    scaleY2 = Number(scaleY2);
    if (this.ready && !this.disabled && this.options.scalable) {
      if (isNumber(scaleX2)) {
        imageData.scaleX = scaleX2;
        transformed = true;
      }
      if (isNumber(scaleY2)) {
        imageData.scaleY = scaleY2;
        transformed = true;
      }
      if (transformed) {
        this.renderCanvas(true, true);
      }
    }
    return this;
  },
  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function getData2() {
    var rounded = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var options = this.options, imageData = this.imageData, canvasData = this.canvasData, cropBoxData = this.cropBoxData;
    var data;
    if (this.ready && this.cropped) {
      data = {
        x: cropBoxData.left - canvasData.left,
        y: cropBoxData.top - canvasData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
      var ratio = imageData.width / imageData.naturalWidth;
      forEach(data, function(n, i) {
        data[i] = n / ratio;
      });
      if (rounded) {
        var bottom = Math.round(data.y + data.height);
        var right = Math.round(data.x + data.width);
        data.x = Math.round(data.x);
        data.y = Math.round(data.y);
        data.width = right - data.x;
        data.height = bottom - data.y;
      }
    } else {
      data = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    if (options.rotatable) {
      data.rotate = imageData.rotate || 0;
    }
    if (options.scalable) {
      data.scaleX = imageData.scaleX || 1;
      data.scaleY = imageData.scaleY || 1;
    }
    return data;
  },
  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function setData2(data) {
    var options = this.options, imageData = this.imageData, canvasData = this.canvasData;
    var cropBoxData = {};
    if (this.ready && !this.disabled && isPlainObject(data)) {
      var transformed = false;
      if (options.rotatable) {
        if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
          imageData.rotate = data.rotate;
          transformed = true;
        }
      }
      if (options.scalable) {
        if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
          imageData.scaleX = data.scaleX;
          transformed = true;
        }
        if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
          imageData.scaleY = data.scaleY;
          transformed = true;
        }
      }
      if (transformed) {
        this.renderCanvas(true, true);
      }
      var ratio = imageData.width / imageData.naturalWidth;
      if (isNumber(data.x)) {
        cropBoxData.left = data.x * ratio + canvasData.left;
      }
      if (isNumber(data.y)) {
        cropBoxData.top = data.y * ratio + canvasData.top;
      }
      if (isNumber(data.width)) {
        cropBoxData.width = data.width * ratio;
      }
      if (isNumber(data.height)) {
        cropBoxData.height = data.height * ratio;
      }
      this.setCropBoxData(cropBoxData);
    }
    return this;
  },
  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function getContainerData() {
    return this.ready ? assign({}, this.containerData) : {};
  },
  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function getImageData() {
    return this.sized ? assign({}, this.imageData) : {};
  },
  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function getCanvasData() {
    var canvasData = this.canvasData;
    var data = {};
    if (this.ready) {
      forEach(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
        data[n] = canvasData[n];
      });
    }
    return data;
  },
  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function setCanvasData(data) {
    var canvasData = this.canvasData;
    var aspectRatio = canvasData.aspectRatio;
    if (this.ready && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        canvasData.left = data.left;
      }
      if (isNumber(data.top)) {
        canvasData.top = data.top;
      }
      if (isNumber(data.width)) {
        canvasData.width = data.width;
        canvasData.height = data.width / aspectRatio;
      } else if (isNumber(data.height)) {
        canvasData.height = data.height;
        canvasData.width = data.height * aspectRatio;
      }
      this.renderCanvas(true);
    }
    return this;
  },
  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function getCropBoxData() {
    var cropBoxData = this.cropBoxData;
    var data;
    if (this.ready && this.cropped) {
      data = {
        left: cropBoxData.left,
        top: cropBoxData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
    }
    return data || {};
  },
  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function setCropBoxData(data) {
    var cropBoxData = this.cropBoxData;
    var aspectRatio = this.options.aspectRatio;
    var widthChanged;
    var heightChanged;
    if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        cropBoxData.left = data.left;
      }
      if (isNumber(data.top)) {
        cropBoxData.top = data.top;
      }
      if (isNumber(data.width) && data.width !== cropBoxData.width) {
        widthChanged = true;
        cropBoxData.width = data.width;
      }
      if (isNumber(data.height) && data.height !== cropBoxData.height) {
        heightChanged = true;
        cropBoxData.height = data.height;
      }
      if (aspectRatio) {
        if (widthChanged) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else if (heightChanged) {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }
      this.renderCropBox();
    }
    return this;
  },
  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function getCroppedCanvas() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement) {
      return null;
    }
    var canvasData = this.canvasData;
    var source = getSourceCanvas(this.image, this.imageData, canvasData, options);
    if (!this.cropped) {
      return source;
    }
    var _this$getData = this.getData(options.rounded), initialX = _this$getData.x, initialY = _this$getData.y, initialWidth = _this$getData.width, initialHeight = _this$getData.height;
    var ratio = source.width / Math.floor(canvasData.naturalWidth);
    if (ratio !== 1) {
      initialX *= ratio;
      initialY *= ratio;
      initialWidth *= ratio;
      initialHeight *= ratio;
    }
    var aspectRatio = initialWidth / initialHeight;
    var maxSizes = getAdjustedSizes({
      aspectRatio,
      width: options.maxWidth || Infinity,
      height: options.maxHeight || Infinity
    });
    var minSizes = getAdjustedSizes({
      aspectRatio,
      width: options.minWidth || 0,
      height: options.minHeight || 0
    }, "cover");
    var _getAdjustedSizes = getAdjustedSizes({
      aspectRatio,
      width: options.width || (ratio !== 1 ? source.width : initialWidth),
      height: options.height || (ratio !== 1 ? source.height : initialHeight)
    }), width = _getAdjustedSizes.width, height = _getAdjustedSizes.height;
    width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
    height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = options.fillColor || "transparent";
    context.fillRect(0, 0, width, height);
    var _options$imageSmoothi = options.imageSmoothingEnabled, imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi, imageSmoothingQuality = options.imageSmoothingQuality;
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    if (imageSmoothingQuality) {
      context.imageSmoothingQuality = imageSmoothingQuality;
    }
    var sourceWidth = source.width;
    var sourceHeight = source.height;
    var srcX = initialX;
    var srcY = initialY;
    var srcWidth;
    var srcHeight;
    var dstX;
    var dstY;
    var dstWidth;
    var dstHeight;
    if (srcX <= -initialWidth || srcX > sourceWidth) {
      srcX = 0;
      srcWidth = 0;
      dstX = 0;
      dstWidth = 0;
    } else if (srcX <= 0) {
      dstX = -srcX;
      srcX = 0;
      srcWidth = Math.min(sourceWidth, initialWidth + srcX);
      dstWidth = srcWidth;
    } else if (srcX <= sourceWidth) {
      dstX = 0;
      srcWidth = Math.min(initialWidth, sourceWidth - srcX);
      dstWidth = srcWidth;
    }
    if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
      srcY = 0;
      srcHeight = 0;
      dstY = 0;
      dstHeight = 0;
    } else if (srcY <= 0) {
      dstY = -srcY;
      srcY = 0;
      srcHeight = Math.min(sourceHeight, initialHeight + srcY);
      dstHeight = srcHeight;
    } else if (srcY <= sourceHeight) {
      dstY = 0;
      srcHeight = Math.min(initialHeight, sourceHeight - srcY);
      dstHeight = srcHeight;
    }
    var params = [srcX, srcY, srcWidth, srcHeight];
    if (dstWidth > 0 && dstHeight > 0) {
      var scale2 = width / initialWidth;
      params.push(dstX * scale2, dstY * scale2, dstWidth * scale2, dstHeight * scale2);
    }
    context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function(param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    return canvas;
  },
  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function setAspectRatio(aspectRatio) {
    var options = this.options;
    if (!this.disabled && !isUndefined(aspectRatio)) {
      options.aspectRatio = Math.max(0, aspectRatio) || NaN;
      if (this.ready) {
        this.initCropBox();
        if (this.cropped) {
          this.renderCropBox();
        }
      }
    }
    return this;
  },
  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function setDragMode(mode) {
    var options = this.options, dragBox = this.dragBox, face = this.face;
    if (this.ready && !this.disabled) {
      var croppable = mode === DRAG_MODE_CROP;
      var movable = options.movable && mode === DRAG_MODE_MOVE;
      mode = croppable || movable ? mode : DRAG_MODE_NONE;
      options.dragMode = mode;
      setData(dragBox, DATA_ACTION, mode);
      toggleClass(dragBox, CLASS_CROP, croppable);
      toggleClass(dragBox, CLASS_MOVE, movable);
      if (!options.cropBoxMovable) {
        setData(face, DATA_ACTION, mode);
        toggleClass(face, CLASS_CROP, croppable);
        toggleClass(face, CLASS_MOVE, movable);
      }
    }
    return this;
  }
};
var AnotherCropper = WINDOW.Cropper;
var Cropper = /* @__PURE__ */ function() {
  function Cropper2(element) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, Cropper2);
    if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    }
    this.element = element;
    this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
    this.cropped = false;
    this.disabled = false;
    this.pointers = {};
    this.ready = false;
    this.reloading = false;
    this.replaced = false;
    this.sized = false;
    this.sizing = false;
    this.init();
  }
  return _createClass(Cropper2, [{
    key: "init",
    value: function init() {
      var element = this.element;
      var tagName = element.tagName.toLowerCase();
      var url;
      if (element[NAMESPACE]) {
        return;
      }
      element[NAMESPACE] = this;
      if (tagName === "img") {
        this.isImg = true;
        url = element.getAttribute("src") || "";
        this.originalUrl = url;
        if (!url) {
          return;
        }
        url = element.src;
      } else if (tagName === "canvas" && window.HTMLCanvasElement) {
        url = element.toDataURL();
      }
      this.load(url);
    }
  }, {
    key: "load",
    value: function load2(url) {
      var _this = this;
      if (!url) {
        return;
      }
      this.url = url;
      this.imageData = {};
      var element = this.element, options = this.options;
      if (!options.rotatable && !options.scalable) {
        options.checkOrientation = false;
      }
      if (!options.checkOrientation || !window.ArrayBuffer) {
        this.clone();
        return;
      }
      if (REGEXP_DATA_URL.test(url)) {
        if (REGEXP_DATA_URL_JPEG.test(url)) {
          this.read(dataURLToArrayBuffer(url));
        } else {
          this.clone();
        }
        return;
      }
      var xhr = new XMLHttpRequest();
      var clone = this.clone.bind(this);
      this.reloading = true;
      this.xhr = xhr;
      xhr.onabort = clone;
      xhr.onerror = clone;
      xhr.ontimeout = clone;
      xhr.onprogress = function() {
        if (xhr.getResponseHeader("content-type") !== MIME_TYPE_JPEG) {
          xhr.abort();
        }
      };
      xhr.onload = function() {
        _this.read(xhr.response);
      };
      xhr.onloadend = function() {
        _this.reloading = false;
        _this.xhr = null;
      };
      if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
        url = addTimestamp(url);
      }
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.withCredentials = element.crossOrigin === "use-credentials";
      xhr.send();
    }
  }, {
    key: "read",
    value: function read(arrayBuffer) {
      var options = this.options, imageData = this.imageData;
      var orientation = resetAndGetOrientation(arrayBuffer);
      var rotate2 = 0;
      var scaleX2 = 1;
      var scaleY2 = 1;
      if (orientation > 1) {
        this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
        var _parseOrientation = parseOrientation(orientation);
        rotate2 = _parseOrientation.rotate;
        scaleX2 = _parseOrientation.scaleX;
        scaleY2 = _parseOrientation.scaleY;
      }
      if (options.rotatable) {
        imageData.rotate = rotate2;
      }
      if (options.scalable) {
        imageData.scaleX = scaleX2;
        imageData.scaleY = scaleY2;
      }
      this.clone();
    }
  }, {
    key: "clone",
    value: function clone() {
      var element = this.element, url = this.url;
      var crossOrigin = element.crossOrigin;
      var crossOriginUrl = url;
      if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
        if (!crossOrigin) {
          crossOrigin = "anonymous";
        }
        crossOriginUrl = addTimestamp(url);
      }
      this.crossOrigin = crossOrigin;
      this.crossOriginUrl = crossOriginUrl;
      var image2 = document.createElement("img");
      if (crossOrigin) {
        image2.crossOrigin = crossOrigin;
      }
      image2.src = crossOriginUrl || url;
      image2.alt = element.alt || "The image to crop";
      this.image = image2;
      image2.onload = this.start.bind(this);
      image2.onerror = this.stop.bind(this);
      addClass(image2, CLASS_HIDE);
      element.parentNode.insertBefore(image2, element.nextSibling);
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;
      var image2 = this.image;
      image2.onload = null;
      image2.onerror = null;
      this.sizing = true;
      var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
      var done = function done2(naturalWidth, naturalHeight) {
        assign(_this2.imageData, {
          naturalWidth,
          naturalHeight,
          aspectRatio: naturalWidth / naturalHeight
        });
        _this2.initialImageData = assign({}, _this2.imageData);
        _this2.sizing = false;
        _this2.sized = true;
        _this2.build();
      };
      if (image2.naturalWidth && !isIOSWebKit) {
        done(image2.naturalWidth, image2.naturalHeight);
        return;
      }
      var sizingImage = document.createElement("img");
      var body = document.body || document.documentElement;
      this.sizingImage = sizingImage;
      sizingImage.onload = function() {
        done(sizingImage.width, sizingImage.height);
        if (!isIOSWebKit) {
          body.removeChild(sizingImage);
        }
      };
      sizingImage.src = image2.src;
      if (!isIOSWebKit) {
        sizingImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
        body.appendChild(sizingImage);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var image2 = this.image;
      image2.onload = null;
      image2.onerror = null;
      image2.parentNode.removeChild(image2);
      this.image = null;
    }
  }, {
    key: "build",
    value: function build() {
      if (!this.sized || this.ready) {
        return;
      }
      var element = this.element, options = this.options, image2 = this.image;
      var container = element.parentNode;
      var template = document.createElement("div");
      template.innerHTML = TEMPLATE;
      var cropper2 = template.querySelector(".".concat(NAMESPACE, "-container"));
      var canvas = cropper2.querySelector(".".concat(NAMESPACE, "-canvas"));
      var dragBox = cropper2.querySelector(".".concat(NAMESPACE, "-drag-box"));
      var cropBox = cropper2.querySelector(".".concat(NAMESPACE, "-crop-box"));
      var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
      this.container = container;
      this.cropper = cropper2;
      this.canvas = canvas;
      this.dragBox = dragBox;
      this.cropBox = cropBox;
      this.viewBox = cropper2.querySelector(".".concat(NAMESPACE, "-view-box"));
      this.face = face;
      canvas.appendChild(image2);
      addClass(element, CLASS_HIDDEN);
      container.insertBefore(cropper2, element.nextSibling);
      removeClass(image2, CLASS_HIDE);
      this.initPreview();
      this.bind();
      options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
      options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
      options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
      addClass(cropBox, CLASS_HIDDEN);
      if (!options.guides) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
      }
      if (!options.center) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
      }
      if (options.background) {
        addClass(cropper2, "".concat(NAMESPACE, "-bg"));
      }
      if (!options.highlight) {
        addClass(face, CLASS_INVISIBLE);
      }
      if (options.cropBoxMovable) {
        addClass(face, CLASS_MOVE);
        setData(face, DATA_ACTION, ACTION_ALL);
      }
      if (!options.cropBoxResizable) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
      }
      this.render();
      this.ready = true;
      this.setDragMode(options.dragMode);
      if (options.autoCrop) {
        this.crop();
      }
      this.setData(options.data);
      if (isFunction(options.ready)) {
        addListener(element, EVENT_READY, options.ready, {
          once: true
        });
      }
      dispatchEvent(element, EVENT_READY);
    }
  }, {
    key: "unbuild",
    value: function unbuild() {
      if (!this.ready) {
        return;
      }
      this.ready = false;
      this.unbind();
      this.resetPreview();
      var parentNode = this.cropper.parentNode;
      if (parentNode) {
        parentNode.removeChild(this.cropper);
      }
      removeClass(this.element, CLASS_HIDDEN);
    }
  }, {
    key: "uncreate",
    value: function uncreate() {
      if (this.ready) {
        this.unbuild();
        this.ready = false;
        this.cropped = false;
      } else if (this.sizing) {
        this.sizingImage.onload = null;
        this.sizing = false;
        this.sized = false;
      } else if (this.reloading) {
        this.xhr.onabort = null;
        this.xhr.abort();
      } else if (this.image) {
        this.stop();
      }
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */
  }], [{
    key: "noConflict",
    value: function noConflict() {
      window.Cropper = AnotherCropper;
      return Cropper2;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      assign(DEFAULTS, isPlainObject(options) && options);
    }
  }]);
}();
assign(Cropper.prototype, render, preview, events, handlers, change, methods);
const cropper = "";
const _sfc_main$2 = /* @__PURE__ */ nj({
  __name: "IframeCropper",
  setup(__props) {
    const iframe = tk(null);
    const show = tk(false);
    tk(false);
    const image2 = tk(null);
    const cropper2 = tk(null);
    tk(null);
    rN(() => {
      if (image2.value) {
        cropper2.value = new Cropper(image2.value, {
          // aspectRatio: 16 / 9,
          viewMode: 1,
          crop(event) {
            console.log(event.detail.x);
            console.log(event.detail.y);
            console.log(event.detail.width);
            console.log(event.detail.height);
            console.log(event.detail.rotate);
            console.log(event.detail.scaleX);
            console.log(event.detail.scaleY);
          }
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_ElDialog = ElDialog;
      return r3(), it(r0, null, [
        iv("", true),
        ic(_component_ElDialog, {
          title: "doubaoAI",
          width: "95%",
          "body-class": "ai-content",
          modelValue: show.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => show.value = $event),
          modal: true,
          appendToBody: true
        }, lA({
          default: nf(() => [
            iu("div", {
              ref_key: "iframe",
              ref: iframe,
              style: { "width": "100%", "height": "100%" }
            }, _cache[3] || (_cache[3] = [
              iu("iframe", {
                src: "https://www.doubao.com/chat/create-image",
                frameborder: "0",
                style: { "width": "100%", "height": "calc(100% - 20px)" }
              }, null, -1)
            ]), 512)
          ]),
          _: 2
        }, [
          void 0
        ]), 1032, ["modelValue"]),
        _cache[5] || (_cache[5] = iu("div", null, null, -1))
      ], 64);
    };
  }
});
const IframeCropper_vue_vue_type_style_index_0_scoped_bb9d1578_lang = "";
const IframeCropper = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bb9d1578"]]);
const _hoisted_1 = { id: "hero" };
const _hoisted_2 = { class: "actions" };
const _sfc_main$1 = /* @__PURE__ */ nj({
  __name: "Home",
  setup(__props) {
    lf(load);
    return (_ctx, _cache) => {
      const _component_ClientOnly = lS("ClientOnly");
      return r3(), it(r0, null, [
        iu("section", _hoisted_1, [
          _cache[1] || (_cache[1] = iu("h1", { class: "tagline" }, [
            ih(" The "),
            iu("span", { class: "accent" }, " blog "),
            iu("br"),
            ih(" Is tunaizi's personal technology blog ")
          ], -1)),
          _cache[2] || (_cache[2] = iu("p", { class: "description" }, null, -1)),
          iu("p", _hoisted_2, [
            _cache[0] || (_cache[0] = iu("a", {
              class: "get-started",
              href: "/start-docs/"
            }, [
              ih(" 分类阅读 "),
              iu("svg", {
                class: "icon",
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "10",
                viewBox: "0 0 24 24"
              }, [
                iu("path", { d: "M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" })
              ])
            ], -1)),
            ic(IframeCropper)
          ]),
          ic(_component_ClientOnly, null, {
            default: nf(() => [
              ic(tO(Waterfall))
            ]),
            _: 1
          })
        ]),
        iv("", true)
      ], 64);
    };
  }
});
const Home_vue_vue_type_style_index_0_scoped_a49c4827_lang = "";
const Home_vue_vue_type_style_index_1_lang = "";
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a49c4827"]]);
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
