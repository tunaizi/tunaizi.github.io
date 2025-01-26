import { t as tk, T as withBase, n as nj, U as useData, i as ij, k as rt, w as iB, g as rn, f as ik, h as tO, o as isString, E as tw, V as isObject$1, W as hasOwn, X as iz, Y as camelize, N as NOOP, b as r3, c as it, p as lR, J as ib, d as iu, m as rM } from "./framework.6235ba6c.js";
import { i as isClient, c as computedEager } from "./index.45445b9a.js";
const data = tk();
const pending = tk(false);
const load = async () => {
  if (!pending.value) {
    pending.value = true;
    data.value = {
      special: [],
      platinum: [
        {
          name: "Bit",
          url: "https://bit.dev",
          img: "bit.svg?v2",
          priority: true
        },
        {
          name: "VueMastery",
          url: "https://www.vuemastery.com/",
          img: "vuemastery.png"
        },
        {
          name: "VueSchool",
          url: "https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored%20Banner&utm_content=V1",
          img: "vueschool.png"
        },
        {
          name: "Vehikl",
          url: "https://vehikl.com/",
          img: "vehikl.png"
        },
        {
          name: "Passionate People",
          url: "https://passionatepeople.io/",
          img: "passionate_people.png"
        },
        {
          name: "Storyblok",
          url: "https://www.storyblok.com",
          img: "storyblok.png"
        },
        {
          name: "Chrome Frameworks Fund",
          url: "https://opencollective.com/2021-frameworks-fund",
          img: "chrome_frameworks_fund.png"
        },
        {
          name: "HeroDevs",
          url: "https://www.herodevs.com/support/vue",
          img: "herodevs.png"
        },
        {
          name: "JavaScript Certification",
          url: "https://certificates.dev/javascript/?ref=vuejs-sponsor&friend=VUEJS",
          img: "javascript_certification.png?v2",
          description: "Certification of competence for the JavaScript language"
        }
      ],
      gold: [
        {
          name: "Tidelift",
          url: "https://tidelift.com/subscription/npm/vue",
          img: "tidelift.png"
        },
        {
          name: "Laravel",
          url: "https://laravel.com/",
          img: "laravel.png"
        },
        {
          name: "DevExpress",
          url: "https://js.devexpress.com/",
          img: "devexpress.png"
        },
        {
          name: "LY Corporation",
          url: "https://www.lycorp.co.jp/en/",
          img: "ly_corporation.png?v2"
        },
        {
          name: "Fenêtre Online Solutions",
          url: "https://www.fenetre.nl/",
          img: "fen_tre_online_solutions.svg"
        },
        {
          name: "Ant Design Vue",
          url: "https://antdv.com",
          img: "ant_design_vue.png"
        },
        {
          name: "Crisp",
          url: "https://crisp.chat/en/",
          img: "crisp.png"
        },
        {
          name: "Localazy",
          url: "https://localazy.com/blog/how-to-localize-vuejs-app-with-vue-i18n-and-localazy?utm_source=vuejs&utm_medium=banner&utm_campaign=sponsorships_vuejs&utm_content=logo",
          img: "localazy.svg"
        },
        {
          name: "uudetkasinot.com",
          url: "https://www.uudetkasinot.com",
          img: "uudetkasinot_com.png"
        },
        {
          name: "Fathom Analytics",
          url: "https://usefathom.com/",
          img: "fathom_analytics.svg"
        },
        {
          name: "Sentry",
          url: "https://sentry.io/for/vue?utm_source=vuejs.org&utm_medium=paid-community",
          img: "sentry.png"
        },
        {
          name: "Poprey.com",
          url: "https://poprey.com/",
          img: "poprey_com.png"
        },
        {
          name: "Famoid",
          url: "https://famoid.com/",
          img: "famoid.png"
        },
        {
          name: "Certible",
          url: "https://www.certible.com",
          img: "certible.svg"
        },
        {
          name: "FORTUNE GAMES",
          url: "https://www.fortunegames.com",
          img: "fortune_games.png"
        },
        {
          name: "TBDC - Agro Software",
          url: "http://tbdc.com.br/",
          img: "tbdc___agro_software.svg"
        },
        {
          name: "Quickbooks Tool Hub",
          url: "https://qbtoolhub.com/",
          img: "quickbooks_tool_hub.png"
        },
        {
          name: "it@M",
          url: " https://opensource.muenchen.de/software/vue.js.html",
          img: "it_m.png"
        },
        {
          name: "Blastup",
          url: "https://blastup.com/buy-instagram-likes",
          img: "blastup.png"
        },
        {
          name: "VueJobs",
          url: "https://vuejobs.com/?utm_source=vuejs.com&utm_campaign=sponsor",
          img: "vuejobs.png"
        },
        {
          name: "Huly",
          url: "https://huly.io",
          img: "huly.svg"
        },
        {
          name: "Automatenspieler",
          url: "https://automatenspieler.net/",
          img: "automatenspieler.png?v2"
        },
        {
          name: "Stormlikes",
          url: "https://stormlikes.com",
          img: "stormlikes.png"
        },
        {
          name: "Superviral",
          url: "https://superviral.io/",
          img: "superviral.png"
        },
        {
          name: "Goread.io",
          url: "https://goread.io/buy-instagram-followers",
          img: "goread_io.png"
        },
        {
          name: "Celebian",
          url: "https://celebian.com/buy-tiktok-followers",
          img: "celebian.png"
        },
        {
          name: "Skweezer.net",
          url: "https://skweezer.net/",
          img: "skweezer_net.png"
        },
        {
          name: "casinorevisor.com",
          url: "https://casinorevisor.com/",
          img: "casinorevisor_com.png"
        },
        {
          name: "Buzzoid - Buy Instagram Followers",
          url: "https://buzzoid.com/buy-instagram-followers/",
          img: "buzzoid___buy_instagram_followers.png"
        },
        {
          name: "Buy Instagram Followers Twicsy",
          url: "https://twicsy.com/buy-instagram-followers",
          img: "buy_instagram_followers_twicsy.png"
        },
        {
          name: "Famety - Buy Instagram Followers",
          url: "https://www.famety.com/",
          img: "famety___buy_instagram_followers.png"
        },
        {
          name: "LambdaTest",
          url: "https://lambdatest.com/",
          img: "lambdatest.svg"
        },
        {
          name: "Jspreadsheet",
          url: "https://jspreadsheet.com/",
          img: "jspreadsheet.png"
        }
      ],
      silver: [
        {
          name: "Free Bets US",
          url: "https://freebets.us",
          img: "free_bets_us.png"
        },
        {
          name: "Doximity",
          url: "https://technology.doximity.com/",
          img: "doximity.png"
        },
        {
          name: "Codesmith",
          url: "https://codesmith.io",
          img: "codesmith.png"
        },
        {
          name: "Optimizers",
          url: "https://www.optimizers.nl",
          img: "optimizers.png"
        },
        {
          name: "FORTUNE GAMES",
          url: "https://www.fortunegames.com",
          img: "fortune_games.png"
        },
        {
          name: "Indy",
          url: "https://www.indy.fr/",
          img: "indy.png"
        },
        {
          name: "Buy Instagram Followers from SocialWick",
          url: "https://www.socialwick.com/instagram/followers",
          img: "buy_instagram_followers_from_socialwick.png"
        },
        {
          name: "Social Followers",
          url: "https://www.socialfollowers.uk/buy-tiktok-followers/",
          img: "social_followers.png"
        },
        {
          name: "Outlook India",
          url: "https://www.outlookindia.com/outlook-spotlight/casinos-not-on-gamstop-uk-news-302214/",
          img: "outlook_india.png"
        },
        {
          name: "Route Planner and Route Optimizer - Route4Me",
          url: "https://route4me.com",
          img: "route_planner_and_route_optimizer___route4me.png"
        },
        {
          name: "Betwinner Partner",
          url: "https://betwinnerpartner.com/",
          img: "betwinner_partner.png"
        },
        {
          name: "Media Mister",
          url: "https://mediamister.com/",
          img: "media_mister.png"
        }
      ],
      bronze: [
        {
          name: "Derek Pollard",
          url: "https://polyglotengineer.com/derek.pollard",
          img: "derek_pollard.png"
        },
        {
          name: "BGASoft",
          url: "https://www.bgasoft.com",
          img: "bgasoft.png"
        },
        {
          name: "RStudio",
          url: "https://rstudio.com",
          img: "rstudio.png"
        },
        {
          name: "vuejs.de - German Vue Community",
          url: "https://vuejs.de",
          img: "vuejs_de___german_vue_community.svg"
        },
        {
          name: "Liip AG",
          url: "https://www.liip.ch/en",
          img: "liip_ag.png"
        },
        {
          name: "codefortynine",
          url: "https://codefortynine.com",
          img: "codefortynine.png"
        },
        {
          name: "Routr",
          url: "www.routr.com",
          img: "routr.png"
        },
        {
          name: "Arcanite",
          url: "https://arcanite.ch",
          img: "arcanite.png"
        }
      ],
      platinum_china: [
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        },
        {
          name: "CRMEB",
          url: "http://github.crmeb.net/u/vue",
          img: "crmeb.svg?v2",
          description: "开源电商系统"
        }
      ]
    };
  }
};
const hashRE = /#.*$/;
const extRE = /(index)?\.(md|html)$/;
const outboundRE = /^[a-z]+:/i;
function isExternal(path) {
  return outboundRE.test(path);
}
function ensureStartingSlash(path) {
  return /^\//.test(path) ? path : `/${path}`;
}
function normalizeLink(url) {
  if (isExternal(url)) {
    return url;
  }
  const { pathname, search, hash } = new URL(url, "http://vuejs.org");
  return withBase(
    pathname.endsWith("/") || pathname.endsWith(".html") ? url : `${pathname.replace(/(\.md)?$/, ".html")}${search}${hash}`
  );
}
const inBrowser = typeof window !== "undefined";
const hashRef = tk(inBrowser ? location.hash : "");
if (inBrowser) {
  window.addEventListener("hashchange", () => {
    hashRef.value = location.hash;
  });
}
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  } else {
    if (normalize(matchPath) !== currentPath) {
      return false;
    }
    const hashMatch = matchPath.match(hashRE);
    if (hashMatch) {
      return hashRef.value === hashMatch[0];
    }
    return true;
  }
}
function normalize(path) {
  return decodeURI(path).replace(hashRE, "").replace(extRE, "");
}
const configSymbol = Symbol("config");
function withConfigProvider(App) {
  return nj({
    name: "VPConfigProvider",
    setup(_, { slots }) {
      const { theme } = useData();
      const config = ij(() => resolveConfig(theme.value));
      rt(configSymbol, config);
      return () => iB(App, null, slots);
    }
  });
}
function useConfig() {
  return {
    config: rn(configSymbol)
  };
}
function resolveConfig(config) {
  var _a;
  return Object.assign(
    {
      appearance: true
    },
    config,
    {
      nav: (_a = config.nav) == null ? void 0 : _a.map(normalizeMenuItem),
      sidebar: config.sidebar && normalizeSideBar(config.sidebar)
    }
  );
}
function normalizeMenuItem(item) {
  if ("link" in item) {
    return Object.assign({}, item, {
      link: normalizeLink(item.link)
    });
  } else {
    return Object.assign({}, item, { items: item.items.map(normalizeMenuItem) });
  }
}
function normalizeSideBar(sidebar) {
  if (Array.isArray(sidebar)) {
    return sidebar.map(normalizeMenuItem);
  } else {
    const ret = {};
    for (const key in sidebar) {
      ret[key] = normalizeSideBar(sidebar[key]);
    }
    return ret;
  }
}
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = namespaceOverrides || (ik() ? rn(namespaceContextKey, tk(defaultNamespace)) : tk(defaultNamespace));
  const namespace = ij(() => {
    return tO(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides);
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
var nativeObjectToString$1 = objectProto$4.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$3 = Object.prototype;
var nativeObjectToString = objectProto$3.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray = Array.isArray;
const isArray$1 = isArray;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
const nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function hashGet(key) {
  var data2 = this.__data__;
  if (nativeCreate$1) {
    var result = data2[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$1.call(data2, key) ? data2[key] : void 0;
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function hashHas(key) {
  var data2 = this.__data__;
  return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty.call(data2, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data2 = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data2[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data2 = this.__data__, index = assocIndexOf(data2, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data2.length - 1;
  if (index == lastIndex) {
    data2.pop();
  } else {
    splice.call(data2, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data2 = this.__data__, index = assocIndexOf(data2, key);
  return index < 0 ? void 0 : data2[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data2 = this.__data__, index = assocIndexOf(data2, key);
  if (index < 0) {
    ++this.size;
    data2.push([key, value]);
  } else {
    data2[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map = getNative(root$1, "Map");
const Map$1 = Map;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data2 = map.__data__;
  return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data2 = getMapData(this, key), size = data2.size;
  data2.set(key, value);
  this.size += data2.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
const stringToPath$1 = stringToPath;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}
function isNil(value) {
  return value == null;
}
const isUndefined = (val) => val === void 0;
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isPropAbsent = (prop) => isNil(prop);
const isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
}
var English = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const buildTranslator = (locale) => (path, option) => translate(path, option, tO(locale));
const translate = (path, option, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a;
  return `${(_a = option == null ? void 0 : option[key]) != null ? _a : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = ij(() => tO(locale).name);
  const localeRef = tw(locale) ? locale : tk(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const localeContextKey = Symbol("localeContextKey");
const useLocale = (localeOverrides) => {
  const locale = localeOverrides || rn(localeContextKey, tk());
  return buildLocaleContext(ij(() => locale.value || English));
};
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject$1(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject$1(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      iz(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const UPDATE_MODEL_EVENT = "update:modelValue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
const getStyle = (element, styleName) => {
  var _a;
  if (!isClient || !element || !styleName)
    return "";
  let key = camelize(styleName);
  if (key === "float")
    key = "cssFloat";
  try {
    const style = element.style[key];
    if (style)
      return style;
    const computed = (_a = document.defaultView) == null ? void 0 : _a.getComputedStyle(element, "");
    return computed ? computed[key] : "";
  } catch (e) {
    return element.style[key];
  }
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
}
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__ = nj({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main = /* @__PURE__ */ nj({
  ...__default__,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = ij(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return r3(), it("i", ib({
        class: tO(ns).b(),
        style: tO(style)
      }, _ctx.$attrs), [
        lR(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
/*! Element Plus Icons Vue v2.3.1 */
var caret_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ nj({
  name: "CaretRight",
  __name: "caret-right",
  setup(__props) {
    return (_ctx, _cache) => (r3(), it("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      iu("path", {
        fill: "currentColor",
        d: "M384 192v640l384-320.064z"
      })
    ]));
  }
});
var caret_right_default = caret_right_vue_vue_type_script_setup_true_lang_default;
var close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ nj({
  name: "Close",
  __name: "close",
  setup(__props) {
    return (_ctx, _cache) => (r3(), it("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      iu("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
});
var close_default = close_vue_vue_type_script_setup_true_lang_default;
var loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ nj({
  name: "Loading",
  __name: "loading",
  setup(__props) {
    return (_ctx, _cache) => (r3(), it("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      iu("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
});
var loading_default = loading_vue_vue_type_script_setup_true_lang_default;
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const CloseComponents = {
  Close: close_default
};
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useIdInjection = () => {
  return ik() ? rn(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
const useId = (deterministicId) => {
  const idInjection = useIdInjection();
  const namespace = useGetDerivedNamespace();
  const idRef = computedEager(() => tO(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const useDeprecated = ({ from, replacement, scope, version, ref, type = "API" }, condition) => {
  rM(() => tO(condition), (val) => {
  }, {
    immediate: true
  });
};
const base = "";
export {
  baseGetTag as A,
  freeGlobal$1 as B,
  CloseComponents as C,
  isArray$1 as D,
  EVENT_CODE as E,
  MapCache as F,
  toSource as G,
  castPath as H,
  toKey as I,
  isObject as J,
  baseGet as K,
  ListCache as L,
  Map$1 as M,
  buildProp as N,
  isUndefined as O,
  debugWarn as P,
  isPropAbsent as Q,
  withNoopInstall as R,
  Symbol$2 as S,
  loading_default as T,
  UPDATE_MODEL_EVENT as U,
  caret_right_default as V,
  ensureStartingSlash as W,
  isActive as X,
  normalizeLink as Y,
  withConfigProvider as Z,
  _export_sfc as _,
  isNil as a,
  buildProps as b,
  useNamespace as c,
  definePropType as d,
  iconPropType as e,
  addUnit as f,
  useLocale as g,
  ElIcon as h,
  isNumber as i,
  isBoolean as j,
  hasClass as k,
  getStyle as l,
  addClass as m,
  useId as n,
  defaultNamespace as o,
  useDeprecated as p,
  load as q,
  removeClass as r,
  getNative as s,
  throwError as t,
  useConfig as u,
  root$1 as v,
  withInstall as w,
  eq as x,
  isFunction as y,
  isObjectLike as z
};
