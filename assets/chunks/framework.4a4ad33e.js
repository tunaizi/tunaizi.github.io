/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var e, t;
let n, l, r, i, s, o, a, u, f, p, d;
function h(e7) {
  let t10 = /* @__PURE__ */ Object.create(null);
  for (let n2 of e7.split(","))
    t10[n2] = 1;
  return (e10) => e10 in t10;
}
let g = {}, m = [], _ = () => {
}, y = () => false, b = (e7) => 111 === e7.charCodeAt(0) && 110 === e7.charCodeAt(1) && (e7.charCodeAt(2) > 122 || 97 > e7.charCodeAt(2)), S = (e7) => e7.startsWith("onUpdate:"), C = Object.assign, x = (e7, t10) => {
  let n2 = e7.indexOf(t10);
  n2 > -1 && e7.splice(n2, 1);
}, E = Object.prototype.hasOwnProperty, w = (e7, t10) => E.call(e7, t10), k = Array.isArray, T = (e7) => "[object Map]" === F(e7), A = (e7) => "[object Set]" === F(e7), R = (e7) => "[object Date]" === F(e7), O = (e7) => "function" == typeof e7, P = (e7) => "string" == typeof e7, M = (e7) => "symbol" == typeof e7, I = (e7) => null !== e7 && "object" == typeof e7, L = (e7) => (I(e7) || O(e7)) && O(e7.then) && O(e7.catch), D = Object.prototype.toString, F = (e7) => D.call(e7), V = (e7) => F(e7).slice(8, -1), U = (e7) => "[object Object]" === F(e7), j = (e7) => P(e7) && "NaN" !== e7 && "-" !== e7[0] && "" + parseInt(e7, 10) === e7, B = h(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), $ = (e7) => {
  let t10 = /* @__PURE__ */ Object.create(null);
  return (n2) => t10[n2] || (t10[n2] = e7(n2));
}, H = /-(\w)/g, W = $((e7) => e7.replace(H, (e10, t10) => t10 ? t10.toUpperCase() : "")), K = /\B([A-Z])/g, z = $((e7) => e7.replace(K, "-$1").toLowerCase()), q = $((e7) => e7.charAt(0).toUpperCase() + e7.slice(1)), G = $((e7) => e7 ? `on${q(e7)}` : ""), J = (e7, t10) => !Object.is(e7, t10), X = (e7, ...t10) => {
  for (let n2 = 0; n2 < e7.length; n2++)
    e7[n2](...t10);
}, Z = (e7, t10, n2, l10 = false) => {
  Object.defineProperty(e7, t10, { configurable: true, enumerable: false, writable: l10, value: n2 });
}, Y = (e7) => {
  let t10 = parseFloat(e7);
  return isNaN(t10) ? e7 : t10;
}, Q = (e7) => {
  let t10 = P(e7) ? Number(e7) : NaN;
  return isNaN(t10) ? e7 : t10;
}, ee = () => n || (n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}), et = h("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function en(e7) {
  if (k(e7)) {
    let t10 = {};
    for (let n2 = 0; n2 < e7.length; n2++) {
      let l10 = e7[n2], r10 = P(l10) ? function(e10) {
        let t11 = {};
        return e10.replace(ei, "").split(el).forEach((e11) => {
          if (e11) {
            let n3 = e11.split(er);
            n3.length > 1 && (t11[n3[0].trim()] = n3[1].trim());
          }
        }), t11;
      }(l10) : en(l10);
      if (r10)
        for (let e10 in r10)
          t10[e10] = r10[e10];
    }
    return t10;
  }
  if (P(e7) || I(e7))
    return e7;
}
let el = /;(?![^(]*\))/g, er = /:([^]+)/, ei = /\/\*[^]*?\*\//g;
function es(e7) {
  let t10 = "";
  if (P(e7))
    t10 = e7;
  else if (k(e7))
    for (let n2 = 0; n2 < e7.length; n2++) {
      let l10 = es(e7[n2]);
      l10 && (t10 += l10 + " ");
    }
  else if (I(e7))
    for (let n2 in e7)
      e7[n2] && (t10 += n2 + " ");
  return t10.trim();
}
let ea = h("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function eu(e7, t10) {
  if (e7 === t10)
    return true;
  let n2 = R(e7), l10 = R(t10);
  if (n2 || l10)
    return !!n2 && !!l10 && e7.getTime() === t10.getTime();
  if (n2 = M(e7), l10 = M(t10), n2 || l10)
    return e7 === t10;
  if (n2 = k(e7), l10 = k(t10), n2 || l10)
    return !!n2 && !!l10 && function(e10, t11) {
      if (e10.length !== t11.length)
        return false;
      let n3 = true;
      for (let l11 = 0; n3 && l11 < e10.length; l11++)
        n3 = eu(e10[l11], t11[l11]);
      return n3;
    }(e7, t10);
  if (n2 = I(e7), l10 = I(t10), n2 || l10) {
    if (!n2 || !l10 || Object.keys(e7).length !== Object.keys(t10).length)
      return false;
    for (let n3 in e7) {
      let l11 = e7.hasOwnProperty(n3), r10 = t10.hasOwnProperty(n3);
      if (l11 && !r10 || !l11 && r10 || !eu(e7[n3], t10[n3]))
        return false;
    }
  }
  return String(e7) === String(t10);
}
function ec(e7, t10) {
  return e7.findIndex((e10) => eu(e10, t10));
}
let ef = (e7) => !!(e7 && true === e7.__v_isRef), ep = (e7) => P(e7) ? e7 : null == e7 ? "" : k(e7) || I(e7) && (e7.toString === D || !O(e7.toString)) ? ef(e7) ? ep(e7.value) : JSON.stringify(e7, ed, 2) : String(e7), ed = (e7, t10) => ef(t10) ? ed(e7, t10.value) : T(t10) ? { [`Map(${t10.size})`]: [...t10.entries()].reduce((e10, [t11, n2], l10) => (e10[eh(t11, l10) + " =>"] = n2, e10), {}) } : A(t10) ? { [`Set(${t10.size})`]: [...t10.values()].map((e10) => eh(e10)) } : M(t10) ? eh(t10) : !I(t10) || k(t10) || U(t10) ? t10 : String(t10), eh = (e7, t10 = "") => {
  var n2;
  return M(e7) ? `Symbol(${null != (n2 = e7.description) ? n2 : t10})` : e7;
};
class eg {
  constructor(e7 = false) {
    this.detached = e7, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = l, !e7 && l && (this.index = (l.scopes || (l.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      let e7, t10;
      if (this._isPaused = true, this.scopes)
        for (e7 = 0, t10 = this.scopes.length; e7 < t10; e7++)
          this.scopes[e7].pause();
      for (e7 = 0, t10 = this.effects.length; e7 < t10; e7++)
        this.effects[e7].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      let e7, t10;
      if (this._isPaused = false, this.scopes)
        for (e7 = 0, t10 = this.scopes.length; e7 < t10; e7++)
          this.scopes[e7].resume();
      for (e7 = 0, t10 = this.effects.length; e7 < t10; e7++)
        this.effects[e7].resume();
    }
  }
  run(e7) {
    if (this._active) {
      let t10 = l;
      try {
        return l = this, e7();
      } finally {
        l = t10;
      }
    }
  }
  on() {
    l = this;
  }
  off() {
    l = this.parent;
  }
  stop(e7) {
    if (this._active) {
      let t10, n2;
      for (t10 = 0, this._active = false, n2 = this.effects.length; t10 < n2; t10++)
        this.effects[t10].stop();
      for (t10 = 0, this.effects.length = 0, n2 = this.cleanups.length; t10 < n2; t10++)
        this.cleanups[t10]();
      if (this.cleanups.length = 0, this.scopes) {
        for (t10 = 0, n2 = this.scopes.length; t10 < n2; t10++)
          this.scopes[t10].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e7) {
        let e10 = this.parent.scopes.pop();
        e10 && e10 !== this && (this.parent.scopes[this.index] = e10, e10.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function em() {
  return l;
}
function e_(e7, t10 = false) {
  l && l.cleanups.push(e7);
}
let ey = /* @__PURE__ */ new WeakSet();
class eb {
  constructor(e7) {
    this.fn = e7, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, l && l.active && l.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    64 & this.flags && (this.flags &= -65, ey.has(this) && (ey.delete(this), this.trigger()));
  }
  notify() {
    (!(2 & this.flags) || 32 & this.flags) && (8 & this.flags || eC(this));
  }
  run() {
    if (!(1 & this.flags))
      return this.fn();
    this.flags |= 2, eL(this), eE(this);
    let e7 = r, t10 = eO;
    r = this, eO = true;
    try {
      return this.fn();
    } finally {
      ew(this), r = e7, eO = t10, this.flags &= -3;
    }
  }
  stop() {
    if (1 & this.flags) {
      for (let e7 = this.deps; e7; e7 = e7.nextDep)
        eA(e7);
      this.deps = this.depsTail = void 0, eL(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    64 & this.flags ? ey.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    ek(this) && this.run();
  }
  get dirty() {
    return ek(this);
  }
}
let eS = 0;
function eC(e7, t10 = false) {
  if (e7.flags |= 8, t10) {
    e7.next = s, s = e7;
    return;
  }
  e7.next = i, i = e7;
}
function ex() {
  let e7;
  if (!(--eS > 0)) {
    if (s) {
      let e10 = s;
      for (s = void 0; e10; ) {
        let t10 = e10.next;
        e10.next = void 0, e10.flags &= -9, e10 = t10;
      }
    }
    for (; i; ) {
      let t10 = i;
      for (i = void 0; t10; ) {
        let n2 = t10.next;
        if (t10.next = void 0, t10.flags &= -9, 1 & t10.flags)
          try {
            t10.trigger();
          } catch (t11) {
            e7 || (e7 = t11);
          }
        t10 = n2;
      }
    }
    if (e7)
      throw e7;
  }
}
function eE(e7) {
  for (let t10 = e7.deps; t10; t10 = t10.nextDep)
    t10.version = -1, t10.prevActiveLink = t10.dep.activeLink, t10.dep.activeLink = t10;
}
function ew(e7) {
  let t10;
  let n2 = e7.depsTail, l10 = n2;
  for (; l10; ) {
    let e10 = l10.prevDep;
    -1 === l10.version ? (l10 === n2 && (n2 = e10), eA(l10), function(e11) {
      let { prevDep: t11, nextDep: n3 } = e11;
      t11 && (t11.nextDep = n3, e11.prevDep = void 0), n3 && (n3.prevDep = t11, e11.nextDep = void 0);
    }(l10)) : t10 = l10, l10.dep.activeLink = l10.prevActiveLink, l10.prevActiveLink = void 0, l10 = e10;
  }
  e7.deps = t10, e7.depsTail = n2;
}
function ek(e7) {
  for (let t10 = e7.deps; t10; t10 = t10.nextDep)
    if (t10.dep.version !== t10.version || t10.dep.computed && (eT(t10.dep.computed) || t10.dep.version !== t10.version))
      return true;
  return !!e7._dirty;
}
function eT(e7) {
  if (4 & e7.flags && !(16 & e7.flags) || (e7.flags &= -17, e7.globalVersion === eD))
    return;
  e7.globalVersion = eD;
  let t10 = e7.dep;
  if (e7.flags |= 2, t10.version > 0 && !e7.isSSR && e7.deps && !ek(e7)) {
    e7.flags &= -3;
    return;
  }
  let n2 = r, l10 = eO;
  r = e7, eO = true;
  try {
    eE(e7);
    let n3 = e7.fn(e7._value);
    (0 === t10.version || J(n3, e7._value)) && (e7._value = n3, t10.version++);
  } catch (e10) {
    throw t10.version++, e10;
  } finally {
    r = n2, eO = l10, ew(e7), e7.flags &= -3;
  }
}
function eA(e7, t10 = false) {
  let { dep: n2, prevSub: l10, nextSub: r10 } = e7;
  if (l10 && (l10.nextSub = r10, e7.prevSub = void 0), r10 && (r10.prevSub = l10, e7.nextSub = void 0), n2.subs === e7 && (n2.subs = l10, !l10 && n2.computed)) {
    n2.computed.flags &= -5;
    for (let e10 = n2.computed.deps; e10; e10 = e10.nextDep)
      eA(e10, true);
  }
  t10 || --n2.sc || !n2.map || n2.map.delete(n2.key);
}
let eO = true, eP = [];
function eM() {
  eP.push(eO), eO = false;
}
function eI() {
  let e7 = eP.pop();
  eO = void 0 === e7 || e7;
}
function eL(e7) {
  let { cleanup: t10 } = e7;
  if (e7.cleanup = void 0, t10) {
    let e10 = r;
    r = void 0;
    try {
      t10();
    } finally {
      r = e10;
    }
  }
}
let eD = 0;
class eF {
  constructor(e7, t10) {
    this.sub = e7, this.dep = t10, this.version = t10.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class eV {
  constructor(e7) {
    this.computed = e7, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(e7) {
    if (!r || !eO || r === this.computed)
      return;
    let t10 = this.activeLink;
    if (void 0 === t10 || t10.sub !== r)
      t10 = this.activeLink = new eF(r, this), r.deps ? (t10.prevDep = r.depsTail, r.depsTail.nextDep = t10, r.depsTail = t10) : r.deps = r.depsTail = t10, function e10(t11) {
        if (t11.dep.sc++, 4 & t11.sub.flags) {
          let n2 = t11.dep.computed;
          if (n2 && !t11.dep.subs) {
            n2.flags |= 20;
            for (let t12 = n2.deps; t12; t12 = t12.nextDep)
              e10(t12);
          }
          let l10 = t11.dep.subs;
          l10 !== t11 && (t11.prevSub = l10, l10 && (l10.nextSub = t11)), t11.dep.subs = t11;
        }
      }(t10);
    else if (-1 === t10.version && (t10.version = this.version, t10.nextDep)) {
      let e10 = t10.nextDep;
      e10.prevDep = t10.prevDep, t10.prevDep && (t10.prevDep.nextDep = e10), t10.prevDep = r.depsTail, t10.nextDep = void 0, r.depsTail.nextDep = t10, r.depsTail = t10, r.deps === t10 && (r.deps = e10);
    }
    return t10;
  }
  trigger(e7) {
    this.version++, eD++, this.notify(e7);
  }
  notify(e7) {
    eS++;
    try {
      for (let e10 = this.subs; e10; e10 = e10.prevSub)
        e10.sub.notify() && e10.sub.dep.notify();
    } finally {
      ex();
    }
  }
}
let eU = /* @__PURE__ */ new WeakMap(), ej = Symbol(""), eB = Symbol(""), e$ = Symbol("");
function eH(e7, t10, n2) {
  if (eO && r) {
    let t11 = eU.get(e7);
    t11 || eU.set(e7, t11 = /* @__PURE__ */ new Map());
    let l10 = t11.get(n2);
    l10 || (t11.set(n2, l10 = new eV()), l10.map = t11, l10.key = n2), l10.track();
  }
}
function eW(e7, t10, n2, l10, r10, i10) {
  let s4 = eU.get(e7);
  if (!s4) {
    eD++;
    return;
  }
  let o2 = (e10) => {
    e10 && e10.trigger();
  };
  if (eS++, "clear" === t10)
    s4.forEach(o2);
  else {
    let r11 = k(e7), i11 = r11 && j(n2);
    if (r11 && "length" === n2) {
      let e10 = Number(l10);
      s4.forEach((t11, n3) => {
        ("length" === n3 || n3 === e$ || !M(n3) && n3 >= e10) && o2(t11);
      });
    } else
      switch ((void 0 !== n2 || s4.has(void 0)) && o2(s4.get(n2)), i11 && o2(s4.get(e$)), t10) {
        case "add":
          r11 ? i11 && o2(s4.get("length")) : (o2(s4.get(ej)), T(e7) && o2(s4.get(eB)));
          break;
        case "delete":
          !r11 && (o2(s4.get(ej)), T(e7) && o2(s4.get(eB)));
          break;
        case "set":
          T(e7) && o2(s4.get(ej));
      }
  }
  ex();
}
function eK(e7) {
  let t10 = tS(e7);
  return t10 === e7 ? t10 : (eH(t10, "iterate", e$), ty(e7) ? t10 : t10.map(tx));
}
function ez(e7) {
  return eH(e7 = tS(e7), "iterate", e$), e7;
}
let eq = { __proto__: null, [Symbol.iterator]() {
  return eG(this, Symbol.iterator, tx);
}, concat(...e7) {
  return eK(this).concat(...e7.map((e10) => k(e10) ? eK(e10) : e10));
}, entries() {
  return eG(this, "entries", (e7) => (e7[1] = tx(e7[1]), e7));
}, every(e7, t10) {
  return eX(this, "every", e7, t10, void 0, arguments);
}, filter(e7, t10) {
  return eX(this, "filter", e7, t10, (e10) => e10.map(tx), arguments);
}, find(e7, t10) {
  return eX(this, "find", e7, t10, tx, arguments);
}, findIndex(e7, t10) {
  return eX(this, "findIndex", e7, t10, void 0, arguments);
}, findLast(e7, t10) {
  return eX(this, "findLast", e7, t10, tx, arguments);
}, findLastIndex(e7, t10) {
  return eX(this, "findLastIndex", e7, t10, void 0, arguments);
}, forEach(e7, t10) {
  return eX(this, "forEach", e7, t10, void 0, arguments);
}, includes(...e7) {
  return eY(this, "includes", e7);
}, indexOf(...e7) {
  return eY(this, "indexOf", e7);
}, join(e7) {
  return eK(this).join(e7);
}, lastIndexOf(...e7) {
  return eY(this, "lastIndexOf", e7);
}, map(e7, t10) {
  return eX(this, "map", e7, t10, void 0, arguments);
}, pop() {
  return eQ(this, "pop");
}, push(...e7) {
  return eQ(this, "push", e7);
}, reduce(e7, ...t10) {
  return eZ(this, "reduce", e7, t10);
}, reduceRight(e7, ...t10) {
  return eZ(this, "reduceRight", e7, t10);
}, shift() {
  return eQ(this, "shift");
}, some(e7, t10) {
  return eX(this, "some", e7, t10, void 0, arguments);
}, splice(...e7) {
  return eQ(this, "splice", e7);
}, toReversed() {
  return eK(this).toReversed();
}, toSorted(e7) {
  return eK(this).toSorted(e7);
}, toSpliced(...e7) {
  return eK(this).toSpliced(...e7);
}, unshift(...e7) {
  return eQ(this, "unshift", e7);
}, values() {
  return eG(this, "values", tx);
} };
function eG(e7, t10, n2) {
  let l10 = ez(e7), r10 = l10[t10]();
  return l10 === e7 || ty(e7) || (r10._next = r10.next, r10.next = () => {
    let e10 = r10._next();
    return e10.value && (e10.value = n2(e10.value)), e10;
  }), r10;
}
let eJ = Array.prototype;
function eX(e7, t10, n2, l10, r10, i10) {
  let s4 = ez(e7), o2 = s4 !== e7 && !ty(e7), a2 = s4[t10];
  if (a2 !== eJ[t10]) {
    let t11 = a2.apply(e7, i10);
    return o2 ? tx(t11) : t11;
  }
  let u2 = n2;
  s4 !== e7 && (o2 ? u2 = function(t11, l11) {
    return n2.call(this, tx(t11), l11, e7);
  } : n2.length > 2 && (u2 = function(t11, l11) {
    return n2.call(this, t11, l11, e7);
  }));
  let c = a2.call(s4, u2, l10);
  return o2 && r10 ? r10(c) : c;
}
function eZ(e7, t10, n2, l10) {
  let r10 = ez(e7), i10 = n2;
  return r10 !== e7 && (ty(e7) ? n2.length > 3 && (i10 = function(t11, l11, r11) {
    return n2.call(this, t11, l11, r11, e7);
  }) : i10 = function(t11, l11, r11) {
    return n2.call(this, t11, tx(l11), r11, e7);
  }), r10[t10](i10, ...l10);
}
function eY(e7, t10, n2) {
  let l10 = tS(e7);
  eH(l10, "iterate", e$);
  let r10 = l10[t10](...n2);
  return (-1 === r10 || false === r10) && tb(n2[0]) ? (n2[0] = tS(n2[0]), l10[t10](...n2)) : r10;
}
function eQ(e7, t10, n2 = []) {
  eM(), eS++;
  let l10 = tS(e7)[t10].apply(e7, n2);
  return ex(), eI(), l10;
}
let e0 = h("__proto__,__v_isRef,__isVue"), e1 = new Set(Object.getOwnPropertyNames(Symbol).filter((e7) => "arguments" !== e7 && "caller" !== e7).map((e7) => Symbol[e7]).filter(M));
function e2(e7) {
  M(e7) || (e7 = String(e7));
  let t10 = tS(this);
  return eH(t10, "has", e7), t10.hasOwnProperty(e7);
}
class e6 {
  constructor(e7 = false, t10 = false) {
    this._isReadonly = e7, this._isShallow = t10;
  }
  get(e7, t10, n2) {
    if ("__v_skip" === t10)
      return e7.__v_skip;
    let l10 = this._isReadonly, r10 = this._isShallow;
    if ("__v_isReactive" === t10)
      return !l10;
    if ("__v_isReadonly" === t10)
      return l10;
    if ("__v_isShallow" === t10)
      return r10;
    if ("__v_raw" === t10)
      return n2 === (l10 ? r10 ? tf : tc : r10 ? tu : ta).get(e7) || Object.getPrototypeOf(e7) === Object.getPrototypeOf(n2) ? e7 : void 0;
    let i10 = k(e7);
    if (!l10) {
      let e10;
      if (i10 && (e10 = eq[t10]))
        return e10;
      if ("hasOwnProperty" === t10)
        return e2;
    }
    let s4 = Reflect.get(e7, t10, tw(e7) ? e7 : n2);
    return (M(t10) ? e1.has(t10) : e0(t10)) ? s4 : (l10 || eH(e7, "get", t10), r10) ? s4 : tw(s4) ? i10 && j(t10) ? s4 : s4.value : I(s4) ? l10 ? th(s4) : tp(s4) : s4;
  }
}
class e4 extends e6 {
  constructor(e7 = false) {
    super(false, e7);
  }
  set(e7, t10, n2, l10) {
    let r10 = e7[t10];
    if (!this._isShallow) {
      let t11 = t_(r10);
      if (ty(n2) || t_(n2) || (r10 = tS(r10), n2 = tS(n2)), !k(e7) && tw(r10) && !tw(n2))
        return !t11 && (r10.value = n2, true);
    }
    let i10 = k(e7) && j(t10) ? Number(t10) < e7.length : w(e7, t10), s4 = Reflect.set(e7, t10, n2, tw(e7) ? e7 : l10);
    return e7 === tS(l10) && (i10 ? J(n2, r10) && eW(e7, "set", t10, n2) : eW(e7, "add", t10, n2)), s4;
  }
  deleteProperty(e7, t10) {
    let n2 = w(e7, t10);
    e7[t10];
    let l10 = Reflect.deleteProperty(e7, t10);
    return l10 && n2 && eW(e7, "delete", t10, void 0), l10;
  }
  has(e7, t10) {
    let n2 = Reflect.has(e7, t10);
    return M(t10) && e1.has(t10) || eH(e7, "has", t10), n2;
  }
  ownKeys(e7) {
    return eH(e7, "iterate", k(e7) ? "length" : ej), Reflect.ownKeys(e7);
  }
}
class e8 extends e6 {
  constructor(e7 = false) {
    super(true, e7);
  }
  set(e7, t10) {
    return true;
  }
  deleteProperty(e7, t10) {
    return true;
  }
}
let e3 = new e4(), e5 = new e8(), e9 = new e4(true);
new e8(true);
let te = (e7) => e7, tt = (e7) => Reflect.getPrototypeOf(e7);
function tn(e7) {
  return function(...t10) {
    return "delete" !== e7 && ("clear" === e7 ? void 0 : this);
  };
}
function tl(e7, t10) {
  let n2 = function(e10, t11) {
    let n3 = { get(n4) {
      let l10 = this.__v_raw, r10 = tS(l10), i10 = tS(n4);
      e10 || (J(n4, i10) && eH(r10, "get", n4), eH(r10, "get", i10));
      let { has: s4 } = tt(r10), o2 = t11 ? te : e10 ? tE : tx;
      return s4.call(r10, n4) ? o2(l10.get(n4)) : s4.call(r10, i10) ? o2(l10.get(i10)) : void (l10 !== r10 && l10.get(n4));
    }, get size() {
      let t12 = this.__v_raw;
      return e10 || eH(tS(t12), "iterate", ej), Reflect.get(t12, "size", t12);
    }, has(t12) {
      let n4 = this.__v_raw, l10 = tS(n4), r10 = tS(t12);
      return e10 || (J(t12, r10) && eH(l10, "has", t12), eH(l10, "has", r10)), t12 === r10 ? n4.has(t12) : n4.has(t12) || n4.has(r10);
    }, forEach(n4, l10) {
      let r10 = this, i10 = r10.__v_raw, s4 = tS(i10), o2 = t11 ? te : e10 ? tE : tx;
      return e10 || eH(s4, "iterate", ej), i10.forEach((e11, t12) => n4.call(l10, o2(e11), o2(t12), r10));
    } };
    return C(n3, e10 ? { add: tn("add"), set: tn("set"), delete: tn("delete"), clear: tn("clear") } : { add(e11) {
      t11 || ty(e11) || t_(e11) || (e11 = tS(e11));
      let n4 = tS(this);
      return tt(n4).has.call(n4, e11) || (n4.add(e11), eW(n4, "add", e11, e11)), this;
    }, set(e11, n4) {
      t11 || ty(n4) || t_(n4) || (n4 = tS(n4));
      let l10 = tS(this), { has: r10, get: i10 } = tt(l10), s4 = r10.call(l10, e11);
      s4 || (e11 = tS(e11), s4 = r10.call(l10, e11));
      let o2 = i10.call(l10, e11);
      return l10.set(e11, n4), s4 ? J(n4, o2) && eW(l10, "set", e11, n4) : eW(l10, "add", e11, n4), this;
    }, delete(e11) {
      let t12 = tS(this), { has: n4, get: l10 } = tt(t12), r10 = n4.call(t12, e11);
      r10 || (e11 = tS(e11), r10 = n4.call(t12, e11)), l10 && l10.call(t12, e11);
      let i10 = t12.delete(e11);
      return r10 && eW(t12, "delete", e11, void 0), i10;
    }, clear() {
      let e11 = tS(this), t12 = 0 !== e11.size, n4 = e11.clear();
      return t12 && eW(e11, "clear", void 0, void 0), n4;
    } }), ["keys", "values", "entries", Symbol.iterator].forEach((l10) => {
      n3[l10] = function(...n4) {
        let r10 = this.__v_raw, i10 = tS(r10), s4 = T(i10), o2 = "entries" === l10 || l10 === Symbol.iterator && s4, a2 = r10[l10](...n4), u2 = t11 ? te : e10 ? tE : tx;
        return e10 || eH(i10, "iterate", "keys" === l10 && s4 ? eB : ej), { next() {
          let { value: e11, done: t12 } = a2.next();
          return t12 ? { value: e11, done: t12 } : { value: o2 ? [u2(e11[0]), u2(e11[1])] : u2(e11), done: t12 };
        }, [Symbol.iterator]() {
          return this;
        } };
      };
    }), n3;
  }(e7, t10);
  return (t11, l10, r10) => "__v_isReactive" === l10 ? !e7 : "__v_isReadonly" === l10 ? e7 : "__v_raw" === l10 ? t11 : Reflect.get(w(n2, l10) && l10 in t11 ? n2 : t11, l10, r10);
}
let tr = { get: tl(false, false) }, ti = { get: tl(false, true) }, ts = { get: tl(true, false) };
({ get: tl(true, true) });
let ta = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap(), tc = /* @__PURE__ */ new WeakMap(), tf = /* @__PURE__ */ new WeakMap();
function tp(e7) {
  return t_(e7) ? e7 : tv(e7, false, e3, tr, ta);
}
function td(e7) {
  return tv(e7, false, e9, ti, tu);
}
function th(e7) {
  return tv(e7, true, e5, ts, tc);
}
function tv(e7, t10, n2, l10, r10) {
  if (!I(e7) || e7.__v_raw && !(t10 && e7.__v_isReactive))
    return e7;
  let i10 = r10.get(e7);
  if (i10)
    return i10;
  let s4 = e7.__v_skip || !Object.isExtensible(e7) ? 0 : function(e10) {
    switch (e10) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(V(e7));
  if (0 === s4)
    return e7;
  let o2 = new Proxy(e7, 2 === s4 ? l10 : n2);
  return r10.set(e7, o2), o2;
}
function tm(e7) {
  return t_(e7) ? tm(e7.__v_raw) : !!(e7 && e7.__v_isReactive);
}
function t_(e7) {
  return !!(e7 && e7.__v_isReadonly);
}
function ty(e7) {
  return !!(e7 && e7.__v_isShallow);
}
function tb(e7) {
  return !!e7 && !!e7.__v_raw;
}
function tS(e7) {
  let t10 = e7 && e7.__v_raw;
  return t10 ? tS(t10) : e7;
}
function tC(e7) {
  return !w(e7, "__v_skip") && Object.isExtensible(e7) && Z(e7, "__v_skip", true), e7;
}
let tx = (e7) => I(e7) ? tp(e7) : e7, tE = (e7) => I(e7) ? th(e7) : e7;
function tw(e7) {
  return !!e7 && true === e7.__v_isRef;
}
function tk(e7) {
  return tA(e7, false);
}
function tT(e7) {
  return tA(e7, true);
}
function tA(e7, t10) {
  return tw(e7) ? e7 : new tR(e7, t10);
}
class tR {
  constructor(e7, t10) {
    this.dep = new eV(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = t10 ? e7 : tS(e7), this._value = t10 ? e7 : tx(e7), this.__v_isShallow = t10;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e7) {
    let t10 = this._rawValue, n2 = this.__v_isShallow || ty(e7) || t_(e7);
    J(e7 = n2 ? e7 : tS(e7), t10) && (this._rawValue = e7, this._value = n2 ? e7 : tx(e7), this.dep.trigger());
  }
}
function tO(e7) {
  return tw(e7) ? e7.value : e7;
}
let tM = { get: (e7, t10, n2) => "__v_raw" === t10 ? e7 : tO(Reflect.get(e7, t10, n2)), set: (e7, t10, n2, l10) => {
  let r10 = e7[t10];
  return tw(r10) && !tw(n2) ? (r10.value = n2, true) : Reflect.set(e7, t10, n2, l10);
} };
function tI(e7) {
  return tm(e7) ? e7 : new Proxy(e7, tM);
}
class tL {
  constructor(e7) {
    this.__v_isRef = true, this._value = void 0;
    let t10 = this.dep = new eV(), { get: n2, set: l10 } = e7(t10.track.bind(t10), t10.trigger.bind(t10));
    this._get = n2, this._set = l10;
  }
  get value() {
    return this._value = this._get();
  }
  set value(e7) {
    this._set(e7);
  }
}
function tD(e7) {
  return new tL(e7);
}
function tF(e7) {
  let t10 = k(e7) ? Array(e7.length) : {};
  for (let n2 in e7)
    t10[n2] = tB(e7, n2);
  return t10;
}
class tV {
  constructor(e7, t10, n2) {
    this._object = e7, this._key = t10, this._defaultValue = n2, this.__v_isRef = true, this._value = void 0;
  }
  get value() {
    let e7 = this._object[this._key];
    return this._value = void 0 === e7 ? this._defaultValue : e7;
  }
  set value(e7) {
    this._object[this._key] = e7;
  }
  get dep() {
    return function(e7, t10) {
      let n2 = eU.get(e7);
      return n2 && n2.get(t10);
    }(tS(this._object), this._key);
  }
}
class tU {
  constructor(e7) {
    this._getter = e7, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function tj(e7, t10, n2) {
  return tw(e7) ? e7 : O(e7) ? new tU(e7) : I(e7) && arguments.length > 1 ? tB(e7, t10, n2) : tk(e7);
}
function tB(e7, t10, n2) {
  let l10 = e7[t10];
  return tw(l10) ? l10 : new tV(e7, t10, n2);
}
class t$ {
  constructor(e7, t10, n2) {
    this.fn = e7, this.setter = t10, this._value = void 0, this.dep = new eV(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = eD - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t10, this.isSSR = n2;
  }
  notify() {
    if (this.flags |= 16, !(8 & this.flags) && r !== this)
      return eC(this, true), true;
  }
  get value() {
    let e7 = this.dep.track();
    return eT(this), e7 && (e7.version = this.dep.version), this._value;
  }
  set value(e7) {
    this.setter && this.setter(e7);
  }
}
let tK = {}, tz = /* @__PURE__ */ new WeakMap();
function tG(e7, t10 = false, n2 = p) {
  if (n2) {
    let t11 = tz.get(n2);
    t11 || tz.set(n2, t11 = []), t11.push(e7);
  }
}
function tJ(e7, t10 = 1 / 0, n2) {
  if (t10 <= 0 || !I(e7) || e7.__v_skip || (n2 = n2 || /* @__PURE__ */ new Set()).has(e7))
    return e7;
  if (n2.add(e7), t10--, tw(e7))
    tJ(e7.value, t10, n2);
  else if (k(e7))
    for (let l10 = 0; l10 < e7.length; l10++)
      tJ(e7[l10], t10, n2);
  else if (A(e7) || T(e7))
    e7.forEach((e10) => {
      tJ(e10, t10, n2);
    });
  else if (U(e7)) {
    for (let l10 in e7)
      tJ(e7[l10], t10, n2);
    for (let l10 of Object.getOwnPropertySymbols(e7))
      Object.prototype.propertyIsEnumerable.call(e7, l10) && tJ(e7[l10], t10, n2);
  }
  return e7;
}
function tY(e7, t10, n2, l10) {
  try {
    return l10 ? e7(...l10) : e7();
  } catch (e10) {
    t0(e10, t10, n2);
  }
}
function tQ(e7, t10, n2, l10) {
  if (O(e7)) {
    let r10 = tY(e7, t10, n2, l10);
    return r10 && L(r10) && r10.catch((e10) => {
      t0(e10, t10, n2);
    }), r10;
  }
  if (k(e7)) {
    let r10 = [];
    for (let i10 = 0; i10 < e7.length; i10++)
      r10.push(tQ(e7[i10], t10, n2, l10));
    return r10;
  }
}
function t0(e7, t10, n2, l10 = true) {
  t10 && t10.vnode;
  let { errorHandler: r10, throwUnhandledErrorInProduction: i10 } = t10 && t10.appContext.config || g;
  if (t10) {
    let l11 = t10.parent, i11 = t10.proxy, s4 = `https://vuejs.org/error-reference/#runtime-${n2}`;
    for (; l11; ) {
      let t11 = l11.ec;
      if (t11) {
        for (let n3 = 0; n3 < t11.length; n3++)
          if (false === t11[n3](e7, i11, s4))
            return;
      }
      l11 = l11.parent;
    }
    if (r10) {
      eM(), tY(r10, null, 10, [e7, i11, s4]), eI();
      return;
    }
  }
  !function(e10, t11, n3, l11 = true, r11 = false) {
    if (r11)
      throw e10;
    console.error(e10);
  }(e7, 0, 0, l10, i10);
}
let t1 = [], t2 = -1, t6 = [], t4 = null, t8 = 0, t3 = Promise.resolve(), t5 = null;
function t9(e7) {
  let t10 = t5 || t3;
  return e7 ? t10.then(this ? e7.bind(this) : e7) : t10;
}
function t7(e7) {
  if (!(1 & e7.flags)) {
    let t10 = nr(e7), n2 = t1[t1.length - 1];
    !n2 || !(2 & e7.flags) && t10 >= nr(n2) ? t1.push(e7) : t1.splice(function(e10) {
      let t11 = t2 + 1, n3 = t1.length;
      for (; t11 < n3; ) {
        let l10 = t11 + n3 >>> 1, r10 = t1[l10], i10 = nr(r10);
        i10 < e10 || i10 === e10 && 2 & r10.flags ? t11 = l10 + 1 : n3 = l10;
      }
      return t11;
    }(t10), 0, e7), e7.flags |= 1, ne();
  }
}
function ne() {
  t5 || (t5 = t3.then(function e7(t10) {
    try {
      for (t2 = 0; t2 < t1.length; t2++) {
        let e10 = t1[t2];
        !e10 || 8 & e10.flags || (4 & e10.flags && (e10.flags &= -2), tY(e10, e10.i, e10.i ? 15 : 14), 4 & e10.flags || (e10.flags &= -2));
      }
    } finally {
      for (; t2 < t1.length; t2++) {
        let e10 = t1[t2];
        e10 && (e10.flags &= -2);
      }
      t2 = -1, t1.length = 0, nl(), t5 = null, (t1.length || t6.length) && e7();
    }
  }));
}
function nt(e7) {
  k(e7) ? t6.push(...e7) : t4 && -1 === e7.id ? t4.splice(t8 + 1, 0, e7) : 1 & e7.flags || (t6.push(e7), e7.flags |= 1), ne();
}
function nn(e7, t10, n2 = t2 + 1) {
  for (; n2 < t1.length; n2++) {
    let t11 = t1[n2];
    if (t11 && 2 & t11.flags) {
      if (e7 && t11.id !== e7.uid)
        continue;
      t1.splice(n2, 1), n2--, 4 & t11.flags && (t11.flags &= -2), t11(), 4 & t11.flags || (t11.flags &= -2);
    }
  }
}
function nl(e7) {
  if (t6.length) {
    let e10 = [...new Set(t6)].sort((e11, t10) => nr(e11) - nr(t10));
    if (t6.length = 0, t4) {
      t4.push(...e10);
      return;
    }
    for (t8 = 0, t4 = e10; t8 < t4.length; t8++) {
      let e11 = t4[t8];
      4 & e11.flags && (e11.flags &= -2), 8 & e11.flags || e11(), e11.flags &= -2;
    }
    t4 = null, t8 = 0;
  }
}
let nr = (e7) => null == e7.id ? 2 & e7.flags ? -1 : 1 / 0 : e7.id, ni = null, ns = null;
function no(e7) {
  let t10 = ni;
  return ni = e7, ns = e7 && e7.type.__scopeId || null, t10;
}
function nf(e7, t10 = ni, n2) {
  if (!t10 || e7._n)
    return e7;
  let l10 = (...n3) => {
    let r10;
    l10._d && r7(-1);
    let i10 = no(t10);
    try {
      r10 = e7(...n3);
    } finally {
      no(i10), l10._d && r7(1);
    }
    return r10;
  };
  return l10._n = true, l10._c = true, l10._d = true, l10;
}
function np(e7, t10) {
  if (null === ni)
    return e7;
  let n2 = iV(ni), l10 = e7.dirs || (e7.dirs = []);
  for (let e10 = 0; e10 < t10.length; e10++) {
    let [r10, i10, s4, o2 = g] = t10[e10];
    r10 && (O(r10) && (r10 = { mounted: r10, updated: r10 }), r10.deep && tJ(i10), l10.push({ dir: r10, instance: n2, value: i10, oldValue: void 0, arg: s4, modifiers: o2 }));
  }
  return e7;
}
function nd(e7, t10, n2, l10) {
  let r10 = e7.dirs, i10 = t10 && t10.dirs;
  for (let s4 = 0; s4 < r10.length; s4++) {
    let o2 = r10[s4];
    i10 && (o2.oldValue = i10[s4].value);
    let a2 = o2.dir[l10];
    a2 && (eM(), tQ(a2, n2, 8, [e7.el, o2, e7, t10]), eI());
  }
}
let nh = Symbol("_vte"), ng = (e7) => e7.__isTeleport;
let nk = Symbol("_leaveCb"), nT = Symbol("_enterCb");
function nA() {
  let e7 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return lf(() => {
    e7.isMounted = true;
  }), lh(() => {
    e7.isUnmounting = true;
  }), e7;
}
let nR = [Function, Array], nN = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: nR, onEnter: nR, onAfterEnter: nR, onEnterCancelled: nR, onBeforeLeave: nR, onLeave: nR, onAfterLeave: nR, onLeaveCancelled: nR, onBeforeAppear: nR, onAppear: nR, onAfterAppear: nR, onAppearCancelled: nR }, nO = (e7) => {
  let t10 = e7.subTree;
  return t10.component ? nO(t10.component) : t10;
};
function nP(e7) {
  let t10 = e7[0];
  if (e7.length > 1) {
    for (let n2 of e7)
      if (n2.type !== r2) {
        t10 = n2;
        break;
      }
  }
  return t10;
}
let nM = { name: "BaseTransition", props: nN, setup(e7, { slots: t10 }) {
  let n2 = ik(), l10 = nA();
  return () => {
    let r10 = t10.default && nU(t10.default(), true);
    if (!r10 || !r10.length)
      return;
    let i10 = nP(r10), s4 = tS(e7), { mode: o2 } = s4;
    if (l10.isLeaving)
      return nD(i10);
    let a2 = nF(i10);
    if (!a2)
      return nD(i10);
    let u2 = nL(a2, s4, l10, n2, (e10) => u2 = e10);
    a2.type !== r2 && nV(a2, u2);
    let c = n2.subTree && nF(n2.subTree);
    if (c && c.type !== r2 && !ii(a2, c) && nO(n2).type !== r2) {
      let e10 = nL(c, s4, l10, n2);
      if (nV(c, e10), "out-in" === o2 && a2.type !== r2)
        return l10.isLeaving = true, e10.afterLeave = () => {
          l10.isLeaving = false, 8 & n2.job.flags || n2.update(), delete e10.afterLeave, c = void 0;
        }, nD(i10);
      "in-out" === o2 && a2.type !== r2 ? e10.delayLeave = (e11, t11, n3) => {
        nI(l10, c)[String(c.key)] = c, e11[nk] = () => {
          t11(), e11[nk] = void 0, delete u2.delayedLeave, c = void 0;
        }, u2.delayedLeave = () => {
          n3(), delete u2.delayedLeave, c = void 0;
        };
      } : c = void 0;
    } else
      c && (c = void 0);
    return i10;
  };
} };
function nI(e7, t10) {
  let { leavingVNodes: n2 } = e7, l10 = n2.get(t10.type);
  return l10 || (l10 = /* @__PURE__ */ Object.create(null), n2.set(t10.type, l10)), l10;
}
function nL(e7, t10, n2, l10, r10) {
  let { appear: i10, mode: s4, persisted: o2 = false, onBeforeEnter: a2, onEnter: u2, onAfterEnter: c, onEnterCancelled: f2, onBeforeLeave: p2, onLeave: d2, onAfterLeave: h2, onLeaveCancelled: g2, onBeforeAppear: m2, onAppear: _2, onAfterAppear: y2, onAppearCancelled: b2 } = t10, S2 = String(e7.key), C2 = nI(n2, e7), x2 = (e10, t11) => {
    e10 && tQ(e10, l10, 9, t11);
  }, E2 = (e10, t11) => {
    let n3 = t11[1];
    x2(e10, t11), k(e10) ? e10.every((e11) => e11.length <= 1) && n3() : e10.length <= 1 && n3();
  }, w2 = { mode: s4, persisted: o2, beforeEnter(t11) {
    let l11 = a2;
    if (!n2.isMounted) {
      if (!i10)
        return;
      l11 = m2 || a2;
    }
    t11[nk] && t11[nk](true);
    let r11 = C2[S2];
    r11 && ii(e7, r11) && r11.el[nk] && r11.el[nk](), x2(l11, [t11]);
  }, enter(e10) {
    let t11 = u2, l11 = c, r11 = f2;
    if (!n2.isMounted) {
      if (!i10)
        return;
      t11 = _2 || u2, l11 = y2 || c, r11 = b2 || f2;
    }
    let s6 = false, o3 = e10[nT] = (t12) => {
      s6 || (s6 = true, t12 ? x2(r11, [e10]) : x2(l11, [e10]), w2.delayedLeave && w2.delayedLeave(), e10[nT] = void 0);
    };
    t11 ? E2(t11, [e10, o3]) : o3();
  }, leave(t11, l11) {
    let r11 = String(e7.key);
    if (t11[nT] && t11[nT](true), n2.isUnmounting)
      return l11();
    x2(p2, [t11]);
    let i11 = false, s6 = t11[nk] = (n3) => {
      i11 || (i11 = true, l11(), n3 ? x2(g2, [t11]) : x2(h2, [t11]), t11[nk] = void 0, C2[r11] !== e7 || delete C2[r11]);
    };
    C2[r11] = e7, d2 ? E2(d2, [t11, s6]) : s6();
  }, clone(e10) {
    let i11 = nL(e10, t10, n2, l10, r10);
    return r10 && r10(i11), i11;
  } };
  return w2;
}
function nD(e7) {
  if (le(e7))
    return (e7 = id(e7)).children = null, e7;
}
function nF(e7) {
  if (!le(e7))
    return ng(e7.type) && e7.children ? nP(e7.children) : e7;
  let { shapeFlag: t10, children: n2 } = e7;
  if (n2) {
    if (16 & t10)
      return n2[0];
    if (32 & t10 && O(n2.default))
      return n2.default();
  }
}
function nV(e7, t10) {
  6 & e7.shapeFlag && e7.component ? (e7.transition = t10, nV(e7.component.subTree, t10)) : 128 & e7.shapeFlag ? (e7.ssContent.transition = t10.clone(e7.ssContent), e7.ssFallback.transition = t10.clone(e7.ssFallback)) : e7.transition = t10;
}
function nU(e7, t10 = false, n2) {
  let l10 = [], r10 = 0;
  for (let i10 = 0; i10 < e7.length; i10++) {
    let s4 = e7[i10], o2 = null == n2 ? s4.key : String(n2) + String(null != s4.key ? s4.key : i10);
    s4.type === r0 ? (128 & s4.patchFlag && r10++, l10 = l10.concat(nU(s4.children, t10, o2))) : (t10 || s4.type !== r2) && l10.push(null != o2 ? id(s4, { key: o2 }) : s4);
  }
  if (r10 > 1)
    for (let e10 = 0; e10 < l10.length; e10++)
      l10[e10].patchFlag = -2;
  return l10;
}
function nj(e7, t10) {
  return O(e7) ? C({ name: e7.name }, t10, { setup: e7 }) : e7;
}
function n$(e7) {
  e7.ids = [e7.ids[0] + e7.ids[2]++ + "-", 0, 0];
}
function nH(e7) {
  let t10 = ik(), n2 = tT(null);
  return t10 && Object.defineProperty(t10.refs === g ? t10.refs = {} : t10.refs, e7, { enumerable: true, get: () => n2.value, set: (e10) => n2.value = e10 }), n2;
}
function nW(e7, t10, n2, l10, r10 = false) {
  if (k(e7)) {
    e7.forEach((e10, i11) => nW(e10, t10 && (k(t10) ? t10[i11] : t10), n2, l10, r10));
    return;
  }
  if (n5(l10) && !r10) {
    512 & l10.shapeFlag && l10.type.__asyncResolved && l10.component.subTree.component && nW(e7, t10, n2, l10.component.subTree);
    return;
  }
  let i10 = 4 & l10.shapeFlag ? iV(l10.component) : l10.el, s4 = r10 ? null : i10, { i: o2, r: a2 } = e7, u2 = t10 && t10.r, c = o2.refs === g ? o2.refs = {} : o2.refs, f2 = o2.setupState, p2 = tS(f2), d2 = f2 === g ? () => false : (e10) => w(p2, e10);
  if (null != u2 && u2 !== a2 && (P(u2) ? (c[u2] = null, d2(u2) && (f2[u2] = null)) : tw(u2) && (u2.value = null)), O(a2))
    tY(a2, o2, 12, [s4, c]);
  else {
    let t11 = P(a2), l11 = tw(a2);
    if (t11 || l11) {
      let o3 = () => {
        if (e7.f) {
          let n3 = t11 ? d2(a2) ? f2[a2] : c[a2] : a2.value;
          r10 ? k(n3) && x(n3, i10) : k(n3) ? n3.includes(i10) || n3.push(i10) : t11 ? (c[a2] = [i10], d2(a2) && (f2[a2] = c[a2])) : (a2.value = [i10], e7.k && (c[e7.k] = a2.value));
        } else
          t11 ? (c[a2] = s4, d2(a2) && (f2[a2] = s4)) : l11 && (a2.value = s4, e7.k && (c[e7.k] = s4));
      };
      s4 ? (o3.id = -1, ry(o3, n2)) : o3();
    }
  }
}
let nK = false, nz = () => {
  nK || (console.error("Hydration completed but contains mismatches."), nK = true);
}, nq = (e7) => e7.namespaceURI.includes("svg") && "foreignObject" !== e7.tagName, nG = (e7) => e7.namespaceURI.includes("MathML"), nJ = (e7) => {
  if (1 === e7.nodeType) {
    if (nq(e7))
      return "svg";
    if (nG(e7))
      return "mathml";
  }
}, nX = (e7) => 8 === e7.nodeType;
function nZ(e7) {
  let { mt: t10, p: n2, o: { patchProp: l10, createText: r10, nextSibling: i10, parentNode: s4, remove: o2, insert: a2, createComment: u2 } } = e7, c = (n3, l11, o3, u3, y2, b2 = false) => {
    b2 = b2 || !!l11.dynamicChildren;
    let S2 = nX(n3) && "[" === n3.data, C2 = () => h2(n3, l11, o3, u3, y2, S2), { type: x2, ref: E2, shapeFlag: w2, patchFlag: k2 } = l11, T2 = n3.nodeType;
    l11.el = n3, -2 === k2 && (b2 = false, l11.dynamicChildren = null);
    let A2 = null;
    switch (x2) {
      case r1:
        3 !== T2 ? "" === l11.children ? (a2(l11.el = r10(""), s4(n3), n3), A2 = n3) : A2 = C2() : (n3.data !== l11.children && (nz(), n3.data = l11.children), A2 = i10(n3));
        break;
      case r2:
        _2(n3) ? (A2 = i10(n3), m2(l11.el = n3.content.firstChild, n3, o3)) : A2 = 8 !== T2 || S2 ? C2() : i10(n3);
        break;
      case r6:
        if (S2 && (T2 = (n3 = i10(n3)).nodeType), 1 === T2 || 3 === T2) {
          A2 = n3;
          let e10 = !l11.children.length;
          for (let t11 = 0; t11 < l11.staticCount; t11++)
            e10 && (l11.children += 1 === A2.nodeType ? A2.outerHTML : A2.data), t11 === l11.staticCount - 1 && (l11.anchor = A2), A2 = i10(A2);
          return S2 ? i10(A2) : A2;
        }
        C2();
        break;
      case r0:
        A2 = S2 ? d2(n3, l11, o3, u3, y2, b2) : C2();
        break;
      default:
        if (1 & w2)
          A2 = 1 === T2 && l11.type.toLowerCase() === n3.tagName.toLowerCase() || _2(n3) ? f2(n3, l11, o3, u3, y2, b2) : C2();
        else if (6 & w2) {
          l11.slotScopeIds = y2;
          let e10 = s4(n3);
          if (A2 = S2 ? g2(n3) : nX(n3) && "teleport start" === n3.data ? g2(n3, n3.data, "teleport end") : i10(n3), t10(l11, e10, null, o3, u3, nJ(e10), b2), n5(l11) && !l11.type.__asyncResolved) {
            let t11;
            S2 ? (t11 = ic(r0)).anchor = A2 ? A2.previousSibling : e10.lastChild : t11 = 3 === n3.nodeType ? ih("") : ic("div"), t11.el = n3, l11.component.subTree = t11;
          }
        } else
          64 & w2 ? A2 = 8 !== T2 ? C2() : l11.type.hydrate(n3, l11, o3, u3, y2, b2, e7, p2) : 128 & w2 && (A2 = l11.type.hydrate(n3, l11, o3, u3, nJ(s4(n3)), y2, b2, e7, c));
    }
    return null != E2 && nW(E2, null, u3, l11), A2;
  }, f2 = (e10, t11, n3, r11, i11, s6) => {
    s6 = s6 || !!t11.dynamicChildren;
    let { type: a3, props: u3, patchFlag: c2, shapeFlag: f3, dirs: d3, transition: h3 } = t11, g3 = "input" === a3 || "option" === a3;
    if (g3 || -1 !== c2) {
      let a4;
      d3 && nd(t11, null, n3, "created");
      let y2 = false;
      if (_2(e10)) {
        y2 = rw(null, h3) && n3 && n3.vnode.props && n3.vnode.props.appear;
        let l11 = e10.content.firstChild;
        y2 && h3.beforeEnter(l11), m2(l11, e10, n3), t11.el = e10 = l11;
      }
      if (16 & f3 && !(u3 && (u3.innerHTML || u3.textContent))) {
        let l11 = p2(e10.firstChild, t11, e10, n3, r11, i11, s6);
        for (; l11; ) {
          n0(e10, 1) || nz();
          let t12 = l11;
          l11 = l11.nextSibling, o2(t12);
        }
      } else if (8 & f3) {
        let n4 = t11.children;
        "\n" === n4[0] && ("PRE" === e10.tagName || "TEXTAREA" === e10.tagName) && (n4 = n4.slice(1)), e10.textContent !== n4 && (n0(e10, 0) || nz(), e10.textContent = t11.children);
      }
      if (u3) {
        if (g3 || !s6 || 48 & c2) {
          let t12 = e10.tagName.includes("-");
          for (let r12 in u3)
            (g3 && (r12.endsWith("value") || "indeterminate" === r12) || b(r12) && !B(r12) || "." === r12[0] || t12) && l10(e10, r12, null, u3[r12], void 0, n3);
        } else if (u3.onClick)
          l10(e10, "onClick", null, u3.onClick, void 0, n3);
        else if (4 & c2 && tm(u3.style))
          for (let e11 in u3.style)
            u3.style[e11];
      }
      (a4 = u3 && u3.onVnodeBeforeMount) && iS(a4, n3, t11), d3 && nd(t11, null, n3, "beforeMount"), ((a4 = u3 && u3.onVnodeMounted) || d3 || y2) && rY(() => {
        a4 && iS(a4, n3, t11), y2 && h3.enter(e10), d3 && nd(t11, null, n3, "mounted");
      }, r11);
    }
    return e10.nextSibling;
  }, p2 = (e10, t11, l11, s6, o3, u3, f3) => {
    f3 = f3 || !!t11.dynamicChildren;
    let p3 = t11.children, d3 = p3.length;
    for (let t12 = 0; t12 < d3; t12++) {
      let h3 = f3 ? p3[t12] : p3[t12] = im(p3[t12]), g3 = h3.type === r1;
      e10 ? (g3 && !f3 && t12 + 1 < d3 && im(p3[t12 + 1]).type === r1 && (a2(r10(e10.data.slice(h3.children.length)), l11, i10(e10)), e10.data = h3.children), e10 = c(e10, h3, s6, o3, u3, f3)) : g3 && !h3.children ? a2(h3.el = r10(""), l11) : (n0(l11, 1) || nz(), n2(null, h3, l11, null, s6, o3, nJ(l11), u3));
    }
    return e10;
  }, d2 = (e10, t11, n3, l11, r11, o3) => {
    let { slotScopeIds: c2 } = t11;
    c2 && (r11 = r11 ? r11.concat(c2) : c2);
    let f3 = s4(e10), d3 = p2(i10(e10), t11, f3, n3, l11, r11, o3);
    return d3 && nX(d3) && "]" === d3.data ? i10(t11.anchor = d3) : (nz(), a2(t11.anchor = u2("]"), f3, d3), d3);
  }, h2 = (e10, t11, l11, r11, a3, u3) => {
    if (n0(e10.parentElement, 1) || nz(), t11.el = null, u3) {
      let t12 = g2(e10);
      for (; ; ) {
        let n3 = i10(e10);
        if (n3 && n3 !== t12)
          o2(n3);
        else
          break;
      }
    }
    let c2 = i10(e10), f3 = s4(e10);
    return o2(e10), n2(null, t11, f3, c2, l11, r11, nJ(f3), a3), l11 && (l11.vnode.el = t11.el, rK(l11, t11.el)), c2;
  }, g2 = (e10, t11 = "[", n3 = "]") => {
    let l11 = 0;
    for (; e10; )
      if ((e10 = i10(e10)) && nX(e10) && (e10.data === t11 && l11++, e10.data === n3)) {
        if (0 === l11)
          return i10(e10);
        l11--;
      }
    return e10;
  }, m2 = (e10, t11, n3) => {
    let l11 = t11.parentNode;
    l11 && l11.replaceChild(e10, t11);
    let r11 = n3;
    for (; r11; )
      r11.vnode.el === t11 && (r11.vnode.el = r11.subTree.el = e10), r11 = r11.parent;
  }, _2 = (e10) => 1 === e10.nodeType && "TEMPLATE" === e10.tagName;
  return [(e10, t11) => {
    if (!t11.hasChildNodes()) {
      n2(null, e10, t11), nl(), t11._vnode = e10;
      return;
    }
    c(t11.firstChild, e10, null, null, null), nl(), t11._vnode = e10;
  }, c];
}
let nY = "data-allow-mismatch", nQ = { 0: "text", 1: "children", 2: "class", 3: "style", 4: "attribute" };
function n0(e7, t10) {
  if (0 === t10 || 1 === t10)
    for (; e7 && !e7.hasAttribute(nY); )
      e7 = e7.parentElement;
  let n2 = e7 && e7.getAttribute(nY);
  if (null == n2)
    return false;
  if ("" === n2)
    return true;
  {
    let e10 = n2.split(",");
    return !!(0 === t10 && e10.includes("children")) || n2.split(",").includes(nQ[t10]);
  }
}
ee().requestIdleCallback || ((e7) => setTimeout(e7, 1));
ee().cancelIdleCallback || ((e7) => clearTimeout(e7));
let n5 = (e7) => !!e7.type.__asyncLoader;
function n9(e7) {
  let t10;
  O(e7) && (e7 = { loader: e7 });
  let { loader: n2, loadingComponent: l10, errorComponent: r10, delay: i10 = 200, hydrate: s4, timeout: o2, suspensible: a2 = true, onError: u2 } = e7, c = null, f2 = 0, p2 = () => (f2++, c = null, d2()), d2 = () => {
    let e10;
    return c || (e10 = c = n2().catch((e11) => {
      if (e11 = e11 instanceof Error ? e11 : Error(String(e11)), u2)
        return new Promise((t11, n3) => {
          u2(e11, () => t11(p2()), () => n3(e11), f2 + 1);
        });
      throw e11;
    }).then((n3) => e10 !== c && c ? c : (n3 && (n3.__esModule || "Module" === n3[Symbol.toStringTag]) && (n3 = n3.default), t10 = n3, n3)));
  };
  return nj({ name: "AsyncComponentWrapper", __asyncLoader: d2, __asyncHydrate(e10, n3, l11) {
    let r11 = s4 ? () => {
      let t11 = s4(l11, (t12) => function(e11, t13) {
        if (nX(e11) && "[" === e11.data) {
          let n4 = 1, l12 = e11.nextSibling;
          for (; l12; ) {
            if (1 === l12.nodeType) {
              if (false === t13(l12))
                break;
            } else if (nX(l12)) {
              if ("]" === l12.data) {
                if (0 == --n4)
                  break;
              } else
                "[" === l12.data && n4++;
            }
            l12 = l12.nextSibling;
          }
        } else
          t13(e11);
      }(e10, t12));
      t11 && (n3.bum || (n3.bum = [])).push(t11);
    } : l11;
    t10 ? r11() : d2().then(() => !n3.isUnmounted && r11());
  }, get __asyncResolved() {
    return t10;
  }, setup() {
    let e10 = iw;
    if (n$(e10), t10)
      return () => n7(t10, e10);
    let n3 = (t11) => {
      c = null, t0(t11, e10, 13, !r10);
    };
    if (a2 && e10.suspense || iN)
      return d2().then((t11) => () => n7(t11, e10)).catch((e11) => (n3(e11), () => r10 ? ic(r10, { error: e11 }) : null));
    let s6 = tk(false), u3 = tk(), f3 = tk(!!i10);
    return i10 && setTimeout(() => {
      f3.value = false;
    }, i10), null != o2 && setTimeout(() => {
      if (!s6.value && !u3.value) {
        let e11 = Error(`Async component timed out after ${o2}ms.`);
        n3(e11), u3.value = e11;
      }
    }, o2), d2().then(() => {
      s6.value = true, e10.parent && le(e10.parent.vnode) && e10.parent.update();
    }).catch((e11) => {
      n3(e11), u3.value = e11;
    }), () => s6.value && t10 ? n7(t10, e10) : u3.value && r10 ? ic(r10, { error: u3.value }) : l10 && !f3.value ? ic(l10) : void 0;
  } });
}
function n7(e7, t10) {
  let { ref: n2, props: l10, children: r10, ce: i10 } = t10.vnode, s4 = ic(e7, l10, r10);
  return s4.ref = n2, s4.ce = i10, delete t10.vnode.ce, s4;
}
let le = (e7) => e7.type.__isKeepAlive;
function ll(e7, t10) {
  li(e7, "a", t10);
}
function lr(e7, t10) {
  li(e7, "da", t10);
}
function li(e7, t10, n2 = iw) {
  let l10 = e7.__wdc || (e7.__wdc = () => {
    let t11 = n2;
    for (; t11; ) {
      if (t11.isDeactivated)
        return;
      t11 = t11.parent;
    }
    return e7();
  });
  if (la(t10, l10, n2), n2) {
    let e10 = n2.parent;
    for (; e10 && e10.parent; )
      le(e10.parent.vnode) && function(e11, t11, n3, l11) {
        let r10 = la(t11, e11, l11, true);
        lg(() => {
          x(l11[t11], r10);
        }, n3);
      }(l10, t10, n2, e10), e10 = e10.parent;
  }
}
function la(e7, t10, n2 = iw, l10 = false) {
  if (n2) {
    let r10 = n2[e7] || (n2[e7] = []), i10 = t10.__weh || (t10.__weh = (...l11) => {
      eM();
      let r11 = iT(n2), i11 = tQ(t10, n2, e7, l11);
      return r11(), eI(), i11;
    });
    return l10 ? r10.unshift(i10) : r10.push(i10), i10;
  }
}
let lu = (e7) => (t10, n2 = iw) => {
  iN && "sp" !== e7 || la(e7, (...e10) => t10(...e10), n2);
}, lc = lu("bm"), lf = lu("m"), lp = lu("bu"), ld = lu("u"), lh = lu("bum"), lg = lu("um"), lv = lu("sp"), lm = lu("rtg"), l_ = lu("rtc");
function ly(e7, t10 = iw) {
  la("ec", e7, t10);
}
let lb = "components";
function lS(e7, t10) {
  return lw(lb, e7, true, t10) || e7;
}
let lC = Symbol.for("v-ndc");
function lx(e7) {
  return P(e7) ? lw(lb, e7, false) || e7 : e7 || lC;
}
function lw(e7, t10, n2 = true, l10 = false) {
  let r10 = ni || iw;
  if (r10) {
    let n3 = r10.type;
    if (e7 === lb) {
      let e10 = iU(n3, false);
      if (e10 && (e10 === t10 || e10 === W(t10) || e10 === q(W(t10))))
        return n3;
    }
    let i10 = lk(r10[e7] || n3[e7], t10) || lk(r10.appContext[e7], t10);
    return !i10 && l10 ? n3 : i10;
  }
}
function lk(e7, t10) {
  return e7 && (e7[t10] || e7[W(t10)] || e7[q(W(t10))]);
}
function lT(e7, t10, n2, l10) {
  let r10;
  let i10 = n2 && n2[l10], s4 = k(e7);
  if (s4 || P(e7)) {
    let n3 = s4 && tm(e7), l11 = false;
    n3 && (l11 = !ty(e7), e7 = ez(e7)), r10 = Array(e7.length);
    for (let n4 = 0, s6 = e7.length; n4 < s6; n4++)
      r10[n4] = t10(l11 ? tx(e7[n4]) : e7[n4], n4, void 0, i10 && i10[n4]);
  } else if ("number" == typeof e7) {
    r10 = Array(e7);
    for (let n3 = 0; n3 < e7; n3++)
      r10[n3] = t10(n3 + 1, n3, void 0, i10 && i10[n3]);
  } else if (I(e7)) {
    if (e7[Symbol.iterator])
      r10 = Array.from(e7, (e10, n3) => t10(e10, n3, void 0, i10 && i10[n3]));
    else {
      let n3 = Object.keys(e7);
      r10 = Array(n3.length);
      for (let l11 = 0, s6 = n3.length; l11 < s6; l11++) {
        let s7 = n3[l11];
        r10[l11] = t10(e7[s7], s7, l11, i10 && i10[l11]);
      }
    }
  } else
    r10 = [];
  return n2 && (n2[l10] = r10), r10;
}
function lR(e7, t10, n2 = {}, l10, r10) {
  if (ni.ce || ni.parent && n5(ni.parent) && ni.parent.ce)
    return "default" !== t10 && (n2.name = t10), r3(), il(r0, null, [ic("slot", n2, l10 && l10())], 64);
  let i10 = e7[t10];
  i10 && i10._c && (i10._d = false), r3();
  let s4 = i10 && lN(i10(n2)), o2 = n2.key || s4 && s4.key, a2 = il(r0, { key: (o2 && !M(o2) ? o2 : `_${t10}`) + (!s4 && l10 ? "_fb" : "") }, s4 || (l10 ? l10() : []), s4 && 1 === e7._ ? 64 : -2);
  return !r10 && a2.scopeId && (a2.slotScopeIds = [a2.scopeId + "-s"]), i10 && i10._c && (i10._d = true), a2;
}
function lN(e7) {
  return e7.some((e10) => !ir(e10) || !!(e10.type !== r2 && (e10.type !== r0 || lN(e10.children)))) ? e7 : null;
}
function lO(e7, t10) {
  let n2 = {};
  for (let l10 in e7)
    n2[t10 && /[A-Z]/.test(l10) ? `on:${l10}` : G(l10)] = e7[l10];
  return n2;
}
let lP = (e7) => e7 ? iR(e7) ? iV(e7) : lP(e7.parent) : null, lM = C(/* @__PURE__ */ Object.create(null), { $: (e7) => e7, $el: (e7) => e7.vnode.el, $data: (e7) => e7.data, $props: (e7) => e7.props, $attrs: (e7) => e7.attrs, $slots: (e7) => e7.slots, $refs: (e7) => e7.refs, $parent: (e7) => lP(e7.parent), $root: (e7) => lP(e7.root), $host: (e7) => e7.ce, $emit: (e7) => e7.emit, $options: (e7) => l0(e7), $forceUpdate: (e7) => e7.f || (e7.f = () => {
  t7(e7.update);
}), $nextTick: (e7) => e7.n || (e7.n = t9.bind(e7.proxy)), $watch: (e7) => rL.bind(e7) }), lI = (e7, t10) => e7 !== g && !e7.__isScriptSetup && w(e7, t10), lL = { get({ _: e7 }, t10) {
  let n2, l10, r10;
  if ("__v_skip" === t10)
    return true;
  let { ctx: i10, setupState: s4, data: o2, props: a2, accessCache: u2, type: c, appContext: f2 } = e7;
  if ("$" !== t10[0]) {
    let l11 = u2[t10];
    if (void 0 !== l11)
      switch (l11) {
        case 1:
          return s4[t10];
        case 2:
          return o2[t10];
        case 4:
          return i10[t10];
        case 3:
          return a2[t10];
      }
    else {
      if (lI(s4, t10))
        return u2[t10] = 1, s4[t10];
      if (o2 !== g && w(o2, t10))
        return u2[t10] = 2, o2[t10];
      if ((n2 = e7.propsOptions[0]) && w(n2, t10))
        return u2[t10] = 3, a2[t10];
      if (i10 !== g && w(i10, t10))
        return u2[t10] = 4, i10[t10];
      lY && (u2[t10] = 0);
    }
  }
  let p2 = lM[t10];
  return p2 ? ("$attrs" === t10 && eH(e7.attrs, "get", ""), p2(e7)) : (l10 = c.__cssModules) && (l10 = l10[t10]) ? l10 : i10 !== g && w(i10, t10) ? (u2[t10] = 4, i10[t10]) : w(r10 = f2.config.globalProperties, t10) ? r10[t10] : void 0;
}, set({ _: e7 }, t10, n2) {
  let { data: l10, setupState: r10, ctx: i10 } = e7;
  return lI(r10, t10) ? (r10[t10] = n2, true) : l10 !== g && w(l10, t10) ? (l10[t10] = n2, true) : !w(e7.props, t10) && !("$" === t10[0] && t10.slice(1) in e7) && (i10[t10] = n2, true);
}, has({ _: { data: e7, setupState: t10, accessCache: n2, ctx: l10, appContext: r10, propsOptions: i10 } }, s4) {
  let o2;
  return !!n2[s4] || e7 !== g && w(e7, s4) || lI(t10, s4) || (o2 = i10[0]) && w(o2, s4) || w(l10, s4) || w(lM, s4) || w(r10.config.globalProperties, s4);
}, defineProperty(e7, t10, n2) {
  return null != n2.get ? e7._.accessCache[t10] = 0 : w(n2, "value") && this.set(e7, t10, n2.value, null), Reflect.defineProperty(e7, t10, n2);
} };
C({}, lL, { get(e7, t10) {
  if (t10 !== Symbol.unscopables)
    return lL.get(e7, t10, e7);
}, has: (e7, t10) => "_" !== t10[0] && !et(t10) });
function lW() {
  return lz().slots;
}
function lz() {
  let e7 = ik();
  return e7.setupContext || (e7.setupContext = iF(e7));
}
function lq(e7) {
  return k(e7) ? e7.reduce((e10, t10) => (e10[t10] = null, e10), {}) : e7;
}
function lJ(e7, t10) {
  return e7 && t10 ? k(e7) && k(t10) ? e7.concat(t10) : C({}, lq(e7), lq(t10)) : e7 || t10;
}
let lY = true;
function lQ(e7, t10, n2) {
  tQ(k(e7) ? e7.map((e10) => e10.bind(t10.proxy)) : e7.bind(t10.proxy), t10, n2);
}
function l0(e7) {
  let t10;
  let n2 = e7.type, { mixins: l10, extends: r10 } = n2, { mixins: i10, optionsCache: s4, config: { optionMergeStrategies: o2 } } = e7.appContext, a2 = s4.get(n2);
  return a2 ? t10 = a2 : i10.length || l10 || r10 ? (t10 = {}, i10.length && i10.forEach((e10) => l1(t10, e10, o2, true)), l1(t10, n2, o2)) : t10 = n2, I(n2) && s4.set(n2, t10), t10;
}
function l1(e7, t10, n2, l10 = false) {
  let { mixins: r10, extends: i10 } = t10;
  for (let s4 in i10 && l1(e7, i10, n2, true), r10 && r10.forEach((t11) => l1(e7, t11, n2, true)), t10)
    if (l10 && "expose" === s4)
      ;
    else {
      let l11 = l2[s4] || n2 && n2[s4];
      e7[s4] = l11 ? l11(e7[s4], t10[s4]) : t10[s4];
    }
  return e7;
}
let l2 = { data: l6, props: l5, emits: l5, methods: l3, computed: l3, beforeCreate: l8, created: l8, beforeMount: l8, mounted: l8, beforeUpdate: l8, updated: l8, beforeDestroy: l8, beforeUnmount: l8, destroyed: l8, unmounted: l8, activated: l8, deactivated: l8, errorCaptured: l8, serverPrefetch: l8, components: l3, directives: l3, watch: function(e7, t10) {
  if (!e7)
    return t10;
  if (!t10)
    return e7;
  let n2 = C(/* @__PURE__ */ Object.create(null), e7);
  for (let l10 in t10)
    n2[l10] = l8(e7[l10], t10[l10]);
  return n2;
}, provide: l6, inject: function(e7, t10) {
  return l3(l4(e7), l4(t10));
} };
function l6(e7, t10) {
  return t10 ? e7 ? function() {
    return C(O(e7) ? e7.call(this, this) : e7, O(t10) ? t10.call(this, this) : t10);
  } : t10 : e7;
}
function l4(e7) {
  if (k(e7)) {
    let t10 = {};
    for (let n2 = 0; n2 < e7.length; n2++)
      t10[e7[n2]] = e7[n2];
    return t10;
  }
  return e7;
}
function l8(e7, t10) {
  return e7 ? [...new Set([].concat(e7, t10))] : t10;
}
function l3(e7, t10) {
  return e7 ? C(/* @__PURE__ */ Object.create(null), e7, t10) : t10;
}
function l5(e7, t10) {
  return e7 ? k(e7) && k(t10) ? [.../* @__PURE__ */ new Set([...e7, ...t10])] : C(/* @__PURE__ */ Object.create(null), lq(e7), lq(null != t10 ? t10 : {})) : t10;
}
function l9() {
  return { app: null, config: { isNativeTag: y, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let l7 = 0, re = null;
function rt(e7, t10) {
  if (iw) {
    let n2 = iw.provides, l10 = iw.parent && iw.parent.provides;
    l10 === n2 && (n2 = iw.provides = Object.create(l10)), n2[e7] = t10;
  }
}
function rn(e7, t10, n2 = false) {
  let l10 = iw || ni;
  if (l10 || re) {
    let r10 = re ? re._context.provides : l10 ? null == l10.parent ? l10.vnode.appContext && l10.vnode.appContext.provides : l10.parent.provides : void 0;
    if (r10 && e7 in r10)
      return r10[e7];
    if (arguments.length > 1)
      return n2 && O(t10) ? t10.call(l10 && l10.proxy) : t10;
  }
}
let rr = {}, ri = () => Object.create(rr), rs = (e7) => Object.getPrototypeOf(e7) === rr;
function ro(e7, t10, n2, l10) {
  let r10;
  let [i10, s4] = e7.propsOptions, o2 = false;
  if (t10)
    for (let a2 in t10) {
      let u2;
      if (B(a2))
        continue;
      let c = t10[a2];
      i10 && w(i10, u2 = W(a2)) ? s4 && s4.includes(u2) ? (r10 || (r10 = {}))[u2] = c : n2[u2] = c : rj(e7.emitsOptions, a2) || a2 in l10 && c === l10[a2] || (l10[a2] = c, o2 = true);
    }
  if (s4) {
    let t11 = tS(n2), l11 = r10 || g;
    for (let r11 = 0; r11 < s4.length; r11++) {
      let o3 = s4[r11];
      n2[o3] = ra(i10, t11, o3, l11[o3], e7, !w(l11, o3));
    }
  }
  return o2;
}
function ra(e7, t10, n2, l10, r10, i10) {
  let s4 = e7[n2];
  if (null != s4) {
    let e10 = w(s4, "default");
    if (e10 && void 0 === l10) {
      let e11 = s4.default;
      if (s4.type !== Function && !s4.skipFactory && O(e11)) {
        let { propsDefaults: i11 } = r10;
        if (n2 in i11)
          l10 = i11[n2];
        else {
          let s6 = iT(r10);
          l10 = i11[n2] = e11.call(null, t10), s6();
        }
      } else
        l10 = e11;
      r10.ce && r10.ce._setProp(n2, l10);
    }
    s4[0] && (i10 && !e10 ? l10 = false : s4[1] && ("" === l10 || l10 === z(n2)) && (l10 = true));
  }
  return l10;
}
let ru = /* @__PURE__ */ new WeakMap();
function rc(e7) {
  return !("$" === e7[0] || B(e7));
}
let rf = (e7) => "_" === e7[0] || "$stable" === e7, rp = (e7) => k(e7) ? e7.map(im) : [im(e7)], rd = (e7, t10, n2) => {
  if (t10._n)
    return t10;
  let l10 = nf((...e10) => rp(t10(...e10)), n2);
  return l10._c = false, l10;
}, rh = (e7, t10, n2) => {
  let l10 = e7._ctx;
  for (let n3 in e7) {
    if (rf(n3))
      continue;
    let r10 = e7[n3];
    if (O(r10))
      t10[n3] = rd(n3, r10, l10);
    else if (null != r10) {
      let e10 = rp(r10);
      t10[n3] = () => e10;
    }
  }
}, rg = (e7, t10) => {
  let n2 = rp(t10);
  e7.slots.default = () => n2;
}, rv = (e7, t10, n2) => {
  for (let l10 in t10)
    (n2 || "_" !== l10) && (e7[l10] = t10[l10]);
}, rm = (e7, t10, n2) => {
  let l10 = e7.slots = ri();
  if (32 & e7.vnode.shapeFlag) {
    let e10 = t10._;
    e10 ? (rv(l10, t10, n2), n2 && Z(l10, "_", e10, true)) : rh(t10, l10);
  } else
    t10 && rg(e7, t10);
}, r_ = (e7, t10, n2) => {
  let { vnode: l10, slots: r10 } = e7, i10 = true, s4 = g;
  if (32 & l10.shapeFlag) {
    let e10 = t10._;
    e10 ? n2 && 1 === e10 ? i10 = false : rv(r10, t10, n2) : (i10 = !t10.$stable, rh(t10, r10)), s4 = t10;
  } else
    t10 && (rg(e7, t10), s4 = { default: 1 });
  if (i10)
    for (let e10 in r10)
      rf(e10) || null != s4[e10] || delete r10[e10];
}, ry = rY;
function rS(e7) {
  return rC(e7, nZ);
}
function rC(e7, t10) {
  var n2;
  let l10, r10;
  ee().__VUE__ = true;
  let { insert: i10, remove: s4, patchProp: o2, createElement: a2, createText: u2, createComment: c, setText: f2, setElementText: p2, parentNode: d2, nextSibling: h2, setScopeId: y2 = _, insertStaticContent: b2 } = e7, S2 = (e10, t11, n3, l11 = null, r11 = null, i11 = null, s6, o3 = null, a3 = !!t11.dynamicChildren) => {
    if (e10 === t11)
      return;
    e10 && !ii(e10, t11) && (l11 = er2(e10), Y2(e10, r11, i11, true), e10 = null), -2 === t11.patchFlag && (a3 = false, t11.dynamicChildren = null);
    let { type: u3, ref: c2, shapeFlag: f3 } = t11;
    switch (u3) {
      case r1:
        x2(e10, t11, n3, l11);
        break;
      case r2:
        E2(e10, t11, n3, l11);
        break;
      case r6:
        null == e10 && k2(t11, n3, l11, s6);
        break;
      case r0:
        V2(e10, t11, n3, l11, r11, i11, s6, o3, a3);
        break;
      default:
        1 & f3 ? R2(e10, t11, n3, l11, r11, i11, s6, o3, a3) : 6 & f3 ? U2(e10, t11, n3, l11, r11, i11, s6, o3, a3) : 64 & f3 ? u3.process(e10, t11, n3, l11, r11, i11, s6, o3, a3, eo) : 128 & f3 && u3.process(e10, t11, n3, l11, r11, i11, s6, o3, a3, eo);
    }
    null != c2 && r11 && nW(c2, e10 && e10.ref, i11, t11 || e10, !t11);
  }, x2 = (e10, t11, n3, l11) => {
    if (null == e10)
      i10(t11.el = u2(t11.children), n3, l11);
    else {
      let n4 = t11.el = e10.el;
      t11.children !== e10.children && f2(n4, t11.children);
    }
  }, E2 = (e10, t11, n3, l11) => {
    null == e10 ? i10(t11.el = c(t11.children || ""), n3, l11) : t11.el = e10.el;
  }, k2 = (e10, t11, n3, l11) => {
    [e10.el, e10.anchor] = b2(e10.children, t11, n3, l11, e10.el, e10.anchor);
  }, T2 = ({ el: e10, anchor: t11 }, n3, l11) => {
    let r11;
    for (; e10 && e10 !== t11; )
      r11 = h2(e10), i10(e10, n3, l11), e10 = r11;
    i10(t11, n3, l11);
  }, A2 = ({ el: e10, anchor: t11 }) => {
    let n3;
    for (; e10 && e10 !== t11; )
      n3 = h2(e10), s4(e10), e10 = n3;
    s4(t11);
  }, R2 = (e10, t11, n3, l11, r11, i11, s6, o3, a3) => {
    "svg" === t11.type ? s6 = "svg" : "math" === t11.type && (s6 = "mathml"), null == e10 ? N(t11, n3, l11, r11, i11, s6, o3, a3) : L2(e10, t11, r11, i11, s6, o3, a3);
  }, N = (e10, t11, n3, l11, r11, s6, u3, c2) => {
    let f3, d3;
    let { props: h3, shapeFlag: g2, transition: m2, dirs: _2 } = e10;
    if (f3 = e10.el = a2(e10.type, s6, h3 && h3.is, h3), 8 & g2 ? p2(f3, e10.children) : 16 & g2 && M2(e10.children, f3, null, l11, r11, rx(e10, s6), u3, c2), _2 && nd(e10, null, l11, "created"), P2(f3, e10, e10.scopeId, u3, l11), h3) {
      for (let e11 in h3)
        "value" === e11 || B(e11) || o2(f3, e11, null, h3[e11], s6, l11);
      "value" in h3 && o2(f3, "value", null, h3.value, s6), (d3 = h3.onVnodeBeforeMount) && iS(d3, l11, e10);
    }
    _2 && nd(e10, null, l11, "beforeMount");
    let y3 = rw(r11, m2);
    y3 && m2.beforeEnter(f3), i10(f3, t11, n3), ((d3 = h3 && h3.onVnodeMounted) || y3 || _2) && ry(() => {
      d3 && iS(d3, l11, e10), y3 && m2.enter(f3), _2 && nd(e10, null, l11, "mounted");
    }, r11);
  }, P2 = (e10, t11, n3, l11, r11) => {
    if (n3 && y2(e10, n3), l11)
      for (let t12 = 0; t12 < l11.length; t12++)
        y2(e10, l11[t12]);
    if (r11) {
      let n4 = r11.subTree;
      if (t11 === n4 || rz(n4.type) && (n4.ssContent === t11 || n4.ssFallback === t11)) {
        let t12 = r11.vnode;
        P2(e10, t12, t12.scopeId, t12.slotScopeIds, r11.parent);
      }
    }
  }, M2 = (e10, t11, n3, l11, r11, i11, s6, o3, a3 = 0) => {
    for (let u3 = a3; u3 < e10.length; u3++)
      S2(null, e10[u3] = o3 ? i_(e10[u3]) : im(e10[u3]), t11, n3, l11, r11, i11, s6, o3);
  }, L2 = (e10, t11, n3, l11, r11, i11, s6) => {
    let a3;
    let u3 = t11.el = e10.el, { patchFlag: c2, dynamicChildren: f3, dirs: d3 } = t11;
    c2 |= 16 & e10.patchFlag;
    let h3 = e10.props || g, m2 = t11.props || g;
    if (n3 && rE(n3, false), (a3 = m2.onVnodeBeforeUpdate) && iS(a3, n3, t11, e10), d3 && nd(t11, e10, n3, "beforeUpdate"), n3 && rE(n3, true), (h3.innerHTML && null == m2.innerHTML || h3.textContent && null == m2.textContent) && p2(u3, ""), f3 ? D2(e10.dynamicChildren, f3, u3, n3, l11, rx(t11, r11), i11) : s6 || q2(e10, t11, u3, null, n3, l11, rx(t11, r11), i11, false), c2 > 0) {
      if (16 & c2)
        F2(u3, h3, m2, n3, r11);
      else if (2 & c2 && h3.class !== m2.class && o2(u3, "class", null, m2.class, r11), 4 & c2 && o2(u3, "style", h3.style, m2.style, r11), 8 & c2) {
        let e11 = t11.dynamicProps;
        for (let t12 = 0; t12 < e11.length; t12++) {
          let l12 = e11[t12], i12 = h3[l12], s7 = m2[l12];
          (s7 !== i12 || "value" === l12) && o2(u3, l12, i12, s7, r11, n3);
        }
      }
      1 & c2 && e10.children !== t11.children && p2(u3, t11.children);
    } else
      s6 || null != f3 || F2(u3, h3, m2, n3, r11);
    ((a3 = m2.onVnodeUpdated) || d3) && ry(() => {
      a3 && iS(a3, n3, t11, e10), d3 && nd(t11, e10, n3, "updated");
    }, l11);
  }, D2 = (e10, t11, n3, l11, r11, i11, s6) => {
    for (let o3 = 0; o3 < t11.length; o3++) {
      let a3 = e10[o3], u3 = t11[o3], c2 = a3.el && (a3.type === r0 || !ii(a3, u3) || 70 & a3.shapeFlag) ? d2(a3.el) : n3;
      S2(a3, u3, c2, null, l11, r11, i11, s6, true);
    }
  }, F2 = (e10, t11, n3, l11, r11) => {
    if (t11 !== n3) {
      if (t11 !== g)
        for (let i11 in t11)
          B(i11) || i11 in n3 || o2(e10, i11, t11[i11], null, r11, l11);
      for (let i11 in n3) {
        if (B(i11))
          continue;
        let s6 = n3[i11], a3 = t11[i11];
        s6 !== a3 && "value" !== i11 && o2(e10, i11, a3, s6, r11, l11);
      }
      "value" in n3 && o2(e10, "value", t11.value, n3.value, r11);
    }
  }, V2 = (e10, t11, n3, l11, r11, s6, o3, a3, c2) => {
    let f3 = t11.el = e10 ? e10.el : u2(""), p3 = t11.anchor = e10 ? e10.anchor : u2(""), { patchFlag: d3, dynamicChildren: h3, slotScopeIds: g2 } = t11;
    g2 && (a3 = a3 ? a3.concat(g2) : g2), null == e10 ? (i10(f3, n3, l11), i10(p3, n3, l11), M2(t11.children || [], n3, p3, r11, s6, o3, a3, c2)) : d3 > 0 && 64 & d3 && h3 && e10.dynamicChildren ? (D2(e10.dynamicChildren, h3, n3, r11, s6, o3, a3), (null != t11.key || r11 && t11 === r11.subTree) && rk(e10, t11, true)) : q2(e10, t11, n3, p3, r11, s6, o3, a3, c2);
  }, U2 = (e10, t11, n3, l11, r11, i11, s6, o3, a3) => {
    t11.slotScopeIds = o3, null == e10 ? 512 & t11.shapeFlag ? r11.ctx.activate(t11, n3, l11, s6, a3) : j2(t11, n3, l11, r11, i11, s6, a3) : $2(e10, t11, a3);
  }, j2 = (e10, t11, n3, l11, r11, i11, s6) => {
    let o3 = e10.component = iE(e10, l11, r11);
    le(e10) && (o3.ctx.renderer = eo), iO(o3, false, s6), o3.asyncDep ? (r11 && r11.registerDep(o3, H2, s6), e10.el || E2(null, o3.subTree = ic(r2), t11, n3)) : H2(o3, e10, t11, n3, r11, i11, s6);
  }, $2 = (e10, t11, n3) => {
    let l11 = t11.component = e10.component;
    if (function(e11, t12, n4) {
      let { props: l12, children: r11, component: i11 } = e11, { props: s6, children: o3, patchFlag: a3 } = t12, u3 = i11.emitsOptions;
      if (t12.dirs || t12.transition)
        return true;
      if (!n4 || !(a3 >= 0))
        return (!!r11 || !!o3) && (!o3 || !o3.$stable) || l12 !== s6 && (l12 ? !s6 || rW(l12, s6, u3) : !!s6);
      if (1024 & a3)
        return true;
      if (16 & a3)
        return l12 ? rW(l12, s6, u3) : !!s6;
      if (8 & a3) {
        let e12 = t12.dynamicProps;
        for (let t13 = 0; t13 < e12.length; t13++) {
          let n6 = e12[t13];
          if (s6[n6] !== l12[n6] && !rj(u3, n6))
            return true;
        }
      }
      return false;
    }(e10, t11, n3)) {
      if (l11.asyncDep && !l11.asyncResolved) {
        K2(l11, t11, n3);
        return;
      }
      l11.next = t11, l11.update();
    } else
      t11.el = e10.el, l11.vnode = t11;
  }, H2 = (e10, t11, n3, l11, i11, s6, o3) => {
    let a3 = () => {
      if (e10.isMounted) {
        let t12, { next: n4, bu: l12, u: r11, parent: u4, vnode: c3 } = e10;
        {
          let t13 = function e11(t14) {
            let n6 = t14.subTree.component;
            if (n6)
              return n6.asyncDep && !n6.asyncResolved ? n6 : e11(n6);
          }(e10);
          if (t13) {
            n4 && (n4.el = c3.el, K2(e10, n4, o3)), t13.asyncDep.then(() => {
              e10.isUnmounted || a3();
            });
            return;
          }
        }
        let f4 = n4;
        rE(e10, false), n4 ? (n4.el = c3.el, K2(e10, n4, o3)) : n4 = c3, l12 && X(l12), (t12 = n4.props && n4.props.onVnodeBeforeUpdate) && iS(t12, u4, n4, c3), rE(e10, true);
        let p3 = rB(e10), h3 = e10.subTree;
        e10.subTree = p3, S2(h3, p3, d2(h3.el), er2(h3), e10, i11, s6), n4.el = p3.el, null === f4 && rK(e10, p3.el), r11 && ry(r11, i11), (t12 = n4.props && n4.props.onVnodeUpdated) && ry(() => iS(t12, u4, n4, c3), i11);
      } else {
        let o4;
        let { el: a4, props: u4 } = t11, { bm: c3, m: f4, parent: p3, root: d3, type: h3 } = e10, g2 = n5(t11);
        if (rE(e10, false), c3 && X(c3), !g2 && (o4 = u4 && u4.onVnodeBeforeMount) && iS(o4, p3, t11), rE(e10, true), a4 && r10) {
          let t12 = () => {
            e10.subTree = rB(e10), r10(a4, e10.subTree, e10, i11, null);
          };
          g2 && h3.__asyncHydrate ? h3.__asyncHydrate(a4, e10, t12) : t12();
        } else {
          d3.ce && d3.ce._injectChildStyle(h3);
          let r11 = e10.subTree = rB(e10);
          S2(null, r11, n3, l11, e10, i11, s6), t11.el = r11.el;
        }
        if (f4 && ry(f4, i11), !g2 && (o4 = u4 && u4.onVnodeMounted)) {
          let e11 = t11;
          ry(() => iS(o4, p3, e11), i11);
        }
        (256 & t11.shapeFlag || p3 && n5(p3.vnode) && 256 & p3.vnode.shapeFlag) && e10.a && ry(e10.a, i11), e10.isMounted = true, t11 = n3 = l11 = null;
      }
    };
    e10.scope.on();
    let u3 = e10.effect = new eb(a3);
    e10.scope.off();
    let c2 = e10.update = u3.run.bind(u3), f3 = e10.job = u3.runIfDirty.bind(u3);
    f3.i = e10, f3.id = e10.uid, u3.scheduler = () => t7(f3), rE(e10, true), c2();
  }, K2 = (e10, t11, n3) => {
    t11.component = e10;
    let l11 = e10.vnode.props;
    e10.vnode = t11, e10.next = null, function(e11, t12, n4, l12) {
      let { props: r11, attrs: i11, vnode: { patchFlag: s6 } } = e11, o3 = tS(r11), [a3] = e11.propsOptions, u3 = false;
      if ((l12 || s6 > 0) && !(16 & s6)) {
        if (8 & s6) {
          let n6 = e11.vnode.dynamicProps;
          for (let l13 = 0; l13 < n6.length; l13++) {
            let s7 = n6[l13];
            if (rj(e11.emitsOptions, s7))
              continue;
            let c2 = t12[s7];
            if (a3) {
              if (w(i11, s7))
                c2 !== i11[s7] && (i11[s7] = c2, u3 = true);
              else {
                let t13 = W(s7);
                r11[t13] = ra(a3, o3, t13, c2, e11, false);
              }
            } else
              c2 !== i11[s7] && (i11[s7] = c2, u3 = true);
          }
        }
      } else {
        let l13;
        for (let s7 in ro(e11, t12, r11, i11) && (u3 = true), o3)
          t12 && (w(t12, s7) || (l13 = z(s7)) !== s7 && w(t12, l13)) || (a3 ? n4 && (void 0 !== n4[s7] || void 0 !== n4[l13]) && (r11[s7] = ra(a3, o3, s7, void 0, e11, true)) : delete r11[s7]);
        if (i11 !== o3)
          for (let e12 in i11)
            t12 && w(t12, e12) || (delete i11[e12], u3 = true);
      }
      u3 && eW(e11.attrs, "set", "");
    }(e10, t11.props, l11, n3), r_(e10, t11.children, n3), eM(), nn(e10), eI();
  }, q2 = (e10, t11, n3, l11, r11, i11, s6, o3, a3 = false) => {
    let u3 = e10 && e10.children, c2 = e10 ? e10.shapeFlag : 0, f3 = t11.children, { patchFlag: d3, shapeFlag: h3 } = t11;
    if (d3 > 0) {
      if (128 & d3) {
        J2(u3, f3, n3, l11, r11, i11, s6, o3, a3);
        return;
      }
      if (256 & d3) {
        G2(u3, f3, n3, l11, r11, i11, s6, o3, a3);
        return;
      }
    }
    8 & h3 ? (16 & c2 && el2(u3, r11, i11), f3 !== u3 && p2(n3, f3)) : 16 & c2 ? 16 & h3 ? J2(u3, f3, n3, l11, r11, i11, s6, o3, a3) : el2(u3, r11, i11, true) : (8 & c2 && p2(n3, ""), 16 & h3 && M2(f3, n3, l11, r11, i11, s6, o3, a3));
  }, G2 = (e10, t11, n3, l11, r11, i11, s6, o3, a3) => {
    let u3;
    e10 = e10 || m, t11 = t11 || m;
    let c2 = e10.length, f3 = t11.length, p3 = Math.min(c2, f3);
    for (u3 = 0; u3 < p3; u3++) {
      let l12 = t11[u3] = a3 ? i_(t11[u3]) : im(t11[u3]);
      S2(e10[u3], l12, n3, null, r11, i11, s6, o3, a3);
    }
    c2 > f3 ? el2(e10, r11, i11, true, false, p3) : M2(t11, n3, l11, r11, i11, s6, o3, a3, p3);
  }, J2 = (e10, t11, n3, l11, r11, i11, s6, o3, a3) => {
    let u3 = 0, c2 = t11.length, f3 = e10.length - 1, p3 = c2 - 1;
    for (; u3 <= f3 && u3 <= p3; ) {
      let l12 = e10[u3], c3 = t11[u3] = a3 ? i_(t11[u3]) : im(t11[u3]);
      if (ii(l12, c3))
        S2(l12, c3, n3, null, r11, i11, s6, o3, a3);
      else
        break;
      u3++;
    }
    for (; u3 <= f3 && u3 <= p3; ) {
      let l12 = e10[f3], u4 = t11[p3] = a3 ? i_(t11[p3]) : im(t11[p3]);
      if (ii(l12, u4))
        S2(l12, u4, n3, null, r11, i11, s6, o3, a3);
      else
        break;
      f3--, p3--;
    }
    if (u3 > f3) {
      if (u3 <= p3) {
        let e11 = p3 + 1, f4 = e11 < c2 ? t11[e11].el : l11;
        for (; u3 <= p3; )
          S2(null, t11[u3] = a3 ? i_(t11[u3]) : im(t11[u3]), n3, f4, r11, i11, s6, o3, a3), u3++;
      }
    } else if (u3 > p3)
      for (; u3 <= f3; )
        Y2(e10[u3], r11, i11, true), u3++;
    else {
      let d3;
      let h3 = u3, g2 = u3, _2 = /* @__PURE__ */ new Map();
      for (u3 = g2; u3 <= p3; u3++) {
        let e11 = t11[u3] = a3 ? i_(t11[u3]) : im(t11[u3]);
        null != e11.key && _2.set(e11.key, u3);
      }
      let y3 = 0, b3 = p3 - g2 + 1, C2 = false, x3 = 0, E3 = Array(b3);
      for (u3 = 0; u3 < b3; u3++)
        E3[u3] = 0;
      for (u3 = h3; u3 <= f3; u3++) {
        let l12;
        let c3 = e10[u3];
        if (y3 >= b3) {
          Y2(c3, r11, i11, true);
          continue;
        }
        if (null != c3.key)
          l12 = _2.get(c3.key);
        else
          for (d3 = g2; d3 <= p3; d3++)
            if (0 === E3[d3 - g2] && ii(c3, t11[d3])) {
              l12 = d3;
              break;
            }
        void 0 === l12 ? Y2(c3, r11, i11, true) : (E3[l12 - g2] = u3 + 1, l12 >= x3 ? x3 = l12 : C2 = true, S2(c3, t11[l12], n3, null, r11, i11, s6, o3, a3), y3++);
      }
      let w2 = C2 ? function(e11) {
        let t12, n4, l12, r12, i12;
        let s7 = e11.slice(), o4 = [0], a4 = e11.length;
        for (t12 = 0; t12 < a4; t12++) {
          let a5 = e11[t12];
          if (0 !== a5) {
            if (e11[n4 = o4[o4.length - 1]] < a5) {
              s7[t12] = n4, o4.push(t12);
              continue;
            }
            for (l12 = 0, r12 = o4.length - 1; l12 < r12; )
              e11[o4[i12 = l12 + r12 >> 1]] < a5 ? l12 = i12 + 1 : r12 = i12;
            a5 < e11[o4[l12]] && (l12 > 0 && (s7[t12] = o4[l12 - 1]), o4[l12] = t12);
          }
        }
        for (l12 = o4.length, r12 = o4[l12 - 1]; l12-- > 0; )
          o4[l12] = r12, r12 = s7[r12];
        return o4;
      }(E3) : m;
      for (d3 = w2.length - 1, u3 = b3 - 1; u3 >= 0; u3--) {
        let e11 = g2 + u3, f4 = t11[e11], p4 = e11 + 1 < c2 ? t11[e11 + 1].el : l11;
        0 === E3[u3] ? S2(null, f4, n3, p4, r11, i11, s6, o3, a3) : C2 && (d3 < 0 || u3 !== w2[d3] ? Z2(f4, n3, p4, 2) : d3--);
      }
    }
  }, Z2 = (e10, t11, n3, l11, r11 = null) => {
    let { el: s6, type: o3, transition: a3, children: u3, shapeFlag: c2 } = e10;
    if (6 & c2) {
      Z2(e10.component.subTree, t11, n3, l11);
      return;
    }
    if (128 & c2) {
      e10.suspense.move(t11, n3, l11);
      return;
    }
    if (64 & c2) {
      o3.move(e10, t11, n3, eo);
      return;
    }
    if (o3 === r0) {
      i10(s6, t11, n3);
      for (let e11 = 0; e11 < u3.length; e11++)
        Z2(u3[e11], t11, n3, l11);
      i10(e10.anchor, t11, n3);
      return;
    }
    if (o3 === r6) {
      T2(e10, t11, n3);
      return;
    }
    if (2 !== l11 && 1 & c2 && a3) {
      if (0 === l11)
        a3.beforeEnter(s6), i10(s6, t11, n3), ry(() => a3.enter(s6), r11);
      else {
        let { leave: e11, delayLeave: l12, afterLeave: r12 } = a3, o4 = () => i10(s6, t11, n3), u4 = () => {
          e11(s6, () => {
            o4(), r12 && r12();
          });
        };
        l12 ? l12(s6, o4, u4) : u4();
      }
    } else
      i10(s6, t11, n3);
  }, Y2 = (e10, t11, n3, l11 = false, r11 = false) => {
    let i11;
    let { type: s6, props: o3, ref: a3, children: u3, dynamicChildren: c2, shapeFlag: f3, patchFlag: p3, dirs: d3, cacheIndex: h3 } = e10;
    if (-2 === p3 && (r11 = false), null != a3 && nW(a3, null, n3, e10, true), null != h3 && (t11.renderCache[h3] = void 0), 256 & f3) {
      t11.ctx.deactivate(e10);
      return;
    }
    let g2 = 1 & f3 && d3, m2 = !n5(e10);
    if (m2 && (i11 = o3 && o3.onVnodeBeforeUnmount) && iS(i11, t11, e10), 6 & f3)
      en2(e10.component, n3, l11);
    else {
      if (128 & f3) {
        e10.suspense.unmount(n3, l11);
        return;
      }
      g2 && nd(e10, null, t11, "beforeUnmount"), 64 & f3 ? e10.type.remove(e10, t11, n3, eo, l11) : c2 && !c2.hasOnce && (s6 !== r0 || p3 > 0 && 64 & p3) ? el2(c2, t11, n3, false, true) : (s6 === r0 && 384 & p3 || !r11 && 16 & f3) && el2(u3, t11, n3), l11 && Q2(e10);
    }
    (m2 && (i11 = o3 && o3.onVnodeUnmounted) || g2) && ry(() => {
      i11 && iS(i11, t11, e10), g2 && nd(e10, null, t11, "unmounted");
    }, n3);
  }, Q2 = (e10) => {
    let { type: t11, el: n3, anchor: l11, transition: r11 } = e10;
    if (t11 === r0) {
      et2(n3, l11);
      return;
    }
    if (t11 === r6) {
      A2(e10);
      return;
    }
    let i11 = () => {
      s4(n3), r11 && !r11.persisted && r11.afterLeave && r11.afterLeave();
    };
    if (1 & e10.shapeFlag && r11 && !r11.persisted) {
      let { leave: t12, delayLeave: l12 } = r11, s6 = () => t12(n3, i11);
      l12 ? l12(e10.el, i11, s6) : s6();
    } else
      i11();
  }, et2 = (e10, t11) => {
    let n3;
    for (; e10 !== t11; )
      n3 = h2(e10), s4(e10), e10 = n3;
    s4(t11);
  }, en2 = (e10, t11, n3) => {
    let { bum: l11, scope: r11, job: i11, subTree: s6, um: o3, m: a3, a: u3 } = e10;
    rT(a3), rT(u3), l11 && X(l11), r11.stop(), i11 && (i11.flags |= 8, Y2(s6, e10, t11, n3)), o3 && ry(o3, t11), ry(() => {
      e10.isUnmounted = true;
    }, t11), t11 && t11.pendingBranch && !t11.isUnmounted && e10.asyncDep && !e10.asyncResolved && e10.suspenseId === t11.pendingId && (t11.deps--, 0 === t11.deps && t11.resolve());
  }, el2 = (e10, t11, n3, l11 = false, r11 = false, i11 = 0) => {
    for (let s6 = i11; s6 < e10.length; s6++)
      Y2(e10[s6], t11, n3, l11, r11);
  }, er2 = (e10) => {
    if (6 & e10.shapeFlag)
      return er2(e10.component.subTree);
    if (128 & e10.shapeFlag)
      return e10.suspense.next();
    let t11 = h2(e10.anchor || e10.el), n3 = t11 && t11[nh];
    return n3 ? h2(n3) : t11;
  }, ei2 = false, es2 = (e10, t11, n3) => {
    null == e10 ? t11._vnode && Y2(t11._vnode, null, null, true) : S2(t11._vnode || null, e10, t11, null, null, null, n3), t11._vnode = e10, ei2 || (ei2 = true, nn(), nl(), ei2 = false);
  }, eo = { p: S2, um: Y2, m: Z2, r: Q2, mt: j2, mc: M2, pc: q2, pbc: D2, n: er2, o: e7 };
  return t10 && ([l10, r10] = t10(eo)), { render: es2, hydrate: l10, createApp: (n2 = l10, function(e10, t11 = null) {
    O(e10) || (e10 = C({}, e10)), null == t11 || I(t11) || (t11 = null);
    let l11 = l9(), r11 = /* @__PURE__ */ new WeakSet(), i11 = [], s6 = false, o3 = l11.app = { _uid: l7++, _component: e10, _props: t11, _container: null, _context: l11, _instance: null, version: iK, get config() {
      return l11.config;
    }, set config(v) {
    }, use: (e11, ...t12) => (r11.has(e11) || (e11 && O(e11.install) ? (r11.add(e11), e11.install(o3, ...t12)) : O(e11) && (r11.add(e11), e11(o3, ...t12))), o3), mixin: (e11) => (l11.mixins.includes(e11) || l11.mixins.push(e11), o3), component: (e11, t12) => t12 ? (l11.components[e11] = t12, o3) : l11.components[e11], directive: (e11, t12) => t12 ? (l11.directives[e11] = t12, o3) : l11.directives[e11], mount(r12, i12, a3) {
      if (!s6) {
        let u3 = o3._ceVNode || ic(e10, t11);
        return u3.appContext = l11, true === a3 ? a3 = "svg" : false === a3 && (a3 = void 0), i12 && n2 ? n2(u3, r12) : es2(u3, r12, a3), s6 = true, o3._container = r12, r12.__vue_app__ = o3, iV(u3.component);
      }
    }, onUnmount(e11) {
      i11.push(e11);
    }, unmount() {
      s6 && (tQ(i11, o3._instance, 16), es2(null, o3._container), delete o3._container.__vue_app__);
    }, provide: (e11, t12) => (l11.provides[e11] = t12, o3), runWithContext(e11) {
      let t12 = re;
      re = o3;
      try {
        return e11();
      } finally {
        re = t12;
      }
    } };
    return o3;
  }) };
}
function rx({ type: e7, props: t10 }, n2) {
  return "svg" === n2 && "foreignObject" === e7 || "mathml" === n2 && "annotation-xml" === e7 && t10 && t10.encoding && t10.encoding.includes("html") ? void 0 : n2;
}
function rE({ effect: e7, job: t10 }, n2) {
  n2 ? (e7.flags |= 32, t10.flags |= 4) : (e7.flags &= -33, t10.flags &= -5);
}
function rw(e7, t10) {
  return (!e7 || e7 && !e7.pendingBranch) && t10 && !t10.persisted;
}
function rk(e7, t10, n2 = false) {
  let l10 = e7.children, r10 = t10.children;
  if (k(l10) && k(r10))
    for (let e10 = 0; e10 < l10.length; e10++) {
      let t11 = l10[e10], i10 = r10[e10];
      !(1 & i10.shapeFlag) || i10.dynamicChildren || ((i10.patchFlag <= 0 || 32 === i10.patchFlag) && ((i10 = r10[e10] = i_(r10[e10])).el = t11.el), n2 || -2 === i10.patchFlag || rk(t11, i10)), i10.type === r1 && (i10.el = t11.el);
    }
}
function rT(e7) {
  if (e7)
    for (let t10 = 0; t10 < e7.length; t10++)
      e7[t10].flags |= 8;
}
let rA = Symbol.for("v-scx"), rR = () => rn(rA);
function rN(e7, t10) {
  return rI(e7, null, t10);
}
function rO(e7, t10) {
  return rI(e7, null, { flush: "post" });
}
function rP(e7, t10) {
  return rI(e7, null, { flush: "sync" });
}
function rM(e7, t10, n2) {
  return rI(e7, t10, n2);
}
function rI(e7, t10, n2 = g) {
  let l10;
  let { immediate: r10, deep: i10, flush: s4, once: o2 } = n2, a2 = C({}, n2), u2 = t10 && r10 || !t10 && "post" !== s4;
  if (iN) {
    if ("sync" === s4) {
      let e10 = rR();
      l10 = e10.__watcherHandles || (e10.__watcherHandles = []);
    } else if (!u2) {
      let e10 = () => {
      };
      return e10.stop = _, e10.resume = _, e10.pause = _, e10;
    }
  }
  let c = iw;
  a2.call = (e10, t11, n3) => tQ(e10, c, t11, n3);
  let f2 = false;
  "post" === s4 ? a2.scheduler = (e10) => {
    ry(e10, c && c.suspense);
  } : "sync" !== s4 && (f2 = true, a2.scheduler = (e10, t11) => {
    t11 ? e10() : t7(e10);
  }), a2.augmentJob = (e10) => {
    t10 && (e10.flags |= 4), f2 && (e10.flags |= 2, c && (e10.id = c.uid, e10.i = c));
  };
  let d2 = function(e10, t11, n3 = g) {
    let l11, r11, i11, s6;
    let { immediate: o3, deep: a3, once: u3, scheduler: c2, augmentJob: f3, call: d3 } = n3, h2 = (e11) => a3 ? e11 : ty(e11) || false === a3 || 0 === a3 ? tJ(e11, 1) : tJ(e11), m2 = false, y2 = false;
    if (tw(e10) ? (r11 = () => e10.value, m2 = ty(e10)) : tm(e10) ? (r11 = () => h2(e10), m2 = true) : k(e10) ? (y2 = true, m2 = e10.some((e11) => tm(e11) || ty(e11)), r11 = () => e10.map((e11) => tw(e11) ? e11.value : tm(e11) ? h2(e11) : O(e11) ? d3 ? d3(e11, 2) : e11() : void 0)) : r11 = O(e10) ? t11 ? d3 ? () => d3(e10, 2) : e10 : () => {
      if (i11) {
        eM();
        try {
          i11();
        } finally {
          eI();
        }
      }
      let t12 = p;
      p = l11;
      try {
        return d3 ? d3(e10, 3, [s6]) : e10(s6);
      } finally {
        p = t12;
      }
    } : _, t11 && a3) {
      let e11 = r11, t12 = true === a3 ? 1 / 0 : a3;
      r11 = () => tJ(e11(), t12);
    }
    let b2 = em(), S2 = () => {
      l11.stop(), b2 && b2.active && x(b2.effects, l11);
    };
    if (u3 && t11) {
      let e11 = t11;
      t11 = (...t12) => {
        e11(...t12), S2();
      };
    }
    let C2 = y2 ? Array(e10.length).fill(tK) : tK, E2 = (e11) => {
      if (1 & l11.flags && (l11.dirty || e11)) {
        if (t11) {
          let e12 = l11.run();
          if (a3 || m2 || (y2 ? e12.some((e13, t12) => J(e13, C2[t12])) : J(e12, C2))) {
            i11 && i11();
            let n4 = p;
            p = l11;
            try {
              let n6 = [e12, C2 === tK ? void 0 : y2 && C2[0] === tK ? [] : C2, s6];
              d3 ? d3(t11, 3, n6) : t11(...n6), C2 = e12;
            } finally {
              p = n4;
            }
          }
        } else
          l11.run();
      }
    };
    return f3 && f3(E2), (l11 = new eb(r11)).scheduler = c2 ? () => c2(E2, false) : E2, s6 = (e11) => tG(e11, false, l11), i11 = l11.onStop = () => {
      let e11 = tz.get(l11);
      if (e11) {
        if (d3)
          d3(e11, 4);
        else
          for (let t12 of e11)
            t12();
        tz.delete(l11);
      }
    }, t11 ? o3 ? E2(true) : C2 = l11.run() : c2 ? c2(E2.bind(null, true), true) : l11.run(), S2.pause = l11.pause.bind(l11), S2.resume = l11.resume.bind(l11), S2.stop = S2, S2;
  }(e7, t10, a2);
  return iN && (l10 ? l10.push(d2) : u2 && d2()), d2;
}
function rL(e7, t10, n2) {
  let l10;
  let r10 = this.proxy, i10 = P(e7) ? e7.includes(".") ? rD(r10, e7) : () => r10[e7] : e7.bind(r10, r10);
  O(t10) ? l10 = t10 : (l10 = t10.handler, n2 = t10);
  let s4 = iT(this), o2 = rI(i10, l10.bind(r10), n2);
  return s4(), o2;
}
function rD(e7, t10) {
  let n2 = t10.split(".");
  return () => {
    let t11 = e7;
    for (let e10 = 0; e10 < n2.length && t11; e10++)
      t11 = t11[n2[e10]];
    return t11;
  };
}
function rF(e7, t10, n2 = g) {
  let l10 = ik(), r10 = W(t10), i10 = z(t10), s4 = rV(e7, r10), o2 = tD((s6, o3) => {
    let a2, u2;
    let c = g;
    return rP(() => {
      let t11 = e7[r10];
      J(a2, t11) && (a2 = t11, o3());
    }), { get: () => (s6(), n2.get ? n2.get(a2) : a2), set(e10) {
      let s7 = n2.set ? n2.set(e10) : e10;
      if (!J(s7, a2) && !(c !== g && J(e10, c)))
        return;
      let f2 = l10.vnode.props;
      f2 && (t10 in f2 || r10 in f2 || i10 in f2) && (`onUpdate:${t10}` in f2 || `onUpdate:${r10}` in f2 || `onUpdate:${i10}` in f2) || (a2 = e10, o3()), l10.emit(`update:${t10}`, s7), J(e10, s7) && J(e10, c) && !J(s7, u2) && o3(), c = e10, u2 = s7;
    } };
  });
  return o2[Symbol.iterator] = () => {
    let e10 = 0;
    return { next: () => e10 < 2 ? { value: e10++ ? s4 || g : o2, done: false } : { done: true } };
  }, o2;
}
let rV = (e7, t10) => "modelValue" === t10 || "model-value" === t10 ? e7.modelModifiers : e7[`${t10}Modifiers`] || e7[`${W(t10)}Modifiers`] || e7[`${z(t10)}Modifiers`];
function rU(e7, t10, ...n2) {
  let l10;
  if (e7.isUnmounted)
    return;
  let r10 = e7.vnode.props || g, i10 = n2, s4 = t10.startsWith("update:"), o2 = s4 && rV(r10, t10.slice(7));
  o2 && (o2.trim && (i10 = n2.map((e10) => P(e10) ? e10.trim() : e10)), o2.number && (i10 = n2.map(Y)));
  let a2 = r10[l10 = G(t10)] || r10[l10 = G(W(t10))];
  !a2 && s4 && (a2 = r10[l10 = G(z(t10))]), a2 && tQ(a2, e7, 6, i10);
  let u2 = r10[l10 + "Once"];
  if (u2) {
    if (e7.emitted) {
      if (e7.emitted[l10])
        return;
    } else
      e7.emitted = {};
    e7.emitted[l10] = true, tQ(u2, e7, 6, i10);
  }
}
function rj(e7, t10) {
  return !!(e7 && b(t10)) && (w(e7, (t10 = t10.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t10.slice(1)) || w(e7, z(t10)) || w(e7, t10));
}
function rB(e7) {
  let t10, n2;
  let { type: l10, vnode: r10, proxy: i10, withProxy: s4, propsOptions: [o2], slots: a2, attrs: u2, emit: c, render: f2, renderCache: p2, props: d2, data: h2, setupState: g2, ctx: m2, inheritAttrs: _2 } = e7, y2 = no(e7);
  try {
    if (4 & r10.shapeFlag) {
      let e10 = s4 || i10;
      t10 = im(f2.call(e10, e10, p2, d2, g2, h2, m2)), n2 = u2;
    } else
      t10 = im(l10.length > 1 ? l10(d2, { attrs: u2, slots: a2, emit: c }) : l10(d2, null)), n2 = l10.props ? u2 : r$(u2);
  } catch (n3) {
    r4.length = 0, t0(n3, e7, 1), t10 = ic(r2);
  }
  let b2 = t10;
  if (n2 && false !== _2) {
    let e10 = Object.keys(n2), { shapeFlag: t11 } = b2;
    e10.length && 7 & t11 && (o2 && e10.some(S) && (n2 = rH(n2, o2)), b2 = id(b2, n2, false, true));
  }
  return r10.dirs && ((b2 = id(b2, null, false, true)).dirs = b2.dirs ? b2.dirs.concat(r10.dirs) : r10.dirs), r10.transition && nV(b2, r10.transition), t10 = b2, no(y2), t10;
}
let r$ = (e7) => {
  let t10;
  for (let n2 in e7)
    ("class" === n2 || "style" === n2 || b(n2)) && ((t10 || (t10 = {}))[n2] = e7[n2]);
  return t10;
}, rH = (e7, t10) => {
  let n2 = {};
  for (let l10 in e7)
    S(l10) && l10.slice(9) in t10 || (n2[l10] = e7[l10]);
  return n2;
};
function rW(e7, t10, n2) {
  let l10 = Object.keys(t10);
  if (l10.length !== Object.keys(e7).length)
    return true;
  for (let r10 = 0; r10 < l10.length; r10++) {
    let i10 = l10[r10];
    if (t10[i10] !== e7[i10] && !rj(n2, i10))
      return true;
  }
  return false;
}
function rK({ vnode: e7, parent: t10 }, n2) {
  for (; t10; ) {
    let l10 = t10.subTree;
    if (l10.suspense && l10.suspense.activeBranch === e7 && (l10.el = e7.el), l10 === e7)
      (e7 = t10.vnode).el = n2, t10 = t10.parent;
    else
      break;
  }
}
let rz = (e7) => e7.__isSuspense;
function rY(e7, t10) {
  t10 && t10.pendingBranch ? k(e7) ? t10.effects.push(...e7) : t10.effects.push(e7) : nt(e7);
}
let r0 = Symbol.for("v-fgt"), r1 = Symbol.for("v-txt"), r2 = Symbol.for("v-cmt"), r6 = Symbol.for("v-stc"), r4 = [], r8 = null;
function r3(e7 = false) {
  r4.push(r8 = e7 ? null : []);
}
function r5() {
  r4.pop(), r8 = r4[r4.length - 1] || null;
}
let r9 = 1;
function r7(e7, t10 = false) {
  r9 += e7, e7 < 0 && r8 && t10 && (r8.hasOnce = true);
}
function ie(e7) {
  return e7.dynamicChildren = r9 > 0 ? r8 || m : null, r5(), r9 > 0 && r8 && r8.push(e7), e7;
}
function it(e7, t10, n2, l10, r10, i10) {
  return ie(iu(e7, t10, n2, l10, r10, i10, true));
}
function il(e7, t10, n2, l10, r10) {
  return ie(ic(e7, t10, n2, l10, r10, true));
}
function ir(e7) {
  return !!e7 && true === e7.__v_isVNode;
}
function ii(e7, t10) {
  return e7.type === t10.type && e7.key === t10.key;
}
let io = ({ key: e7 }) => null != e7 ? e7 : null, ia = ({ ref: e7, ref_key: t10, ref_for: n2 }) => ("number" == typeof e7 && (e7 = "" + e7), null != e7 ? P(e7) || tw(e7) || O(e7) ? { i: ni, r: e7, k: t10, f: !!n2 } : e7 : null);
function iu(e7, t10 = null, n2 = null, l10 = 0, r10 = null, i10 = e7 === r0 ? 0 : 1, s4 = false, o2 = false) {
  let a2 = { __v_isVNode: true, __v_skip: true, type: e7, props: t10, key: t10 && io(t10), ref: t10 && ia(t10), scopeId: ns, slotScopeIds: null, children: n2, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: i10, patchFlag: l10, dynamicProps: r10, dynamicChildren: null, appContext: null, ctx: ni };
  return o2 ? (iy(a2, n2), 128 & i10 && e7.normalize(a2)) : n2 && (a2.shapeFlag |= P(n2) ? 8 : 16), r9 > 0 && !s4 && r8 && (a2.patchFlag > 0 || 6 & i10) && 32 !== a2.patchFlag && r8.push(a2), a2;
}
let ic = function(e7, t10 = null, n2 = null, l10 = 0, r10 = null, i10 = false) {
  var s4;
  if (e7 && e7 !== lC || (e7 = r2), ir(e7)) {
    let l11 = id(e7, t10, true);
    return n2 && iy(l11, n2), r9 > 0 && !i10 && r8 && (6 & l11.shapeFlag ? r8[r8.indexOf(e7)] = l11 : r8.push(l11)), l11.patchFlag = -2, l11;
  }
  if (O(s4 = e7) && "__vccOpts" in s4 && (e7 = e7.__vccOpts), t10) {
    let { class: e10, style: n3 } = t10 = ip(t10);
    e10 && !P(e10) && (t10.class = es(e10)), I(n3) && (tb(n3) && !k(n3) && (n3 = C({}, n3)), t10.style = en(n3));
  }
  let o2 = P(e7) ? 1 : rz(e7) ? 128 : ng(e7) ? 64 : I(e7) ? 4 : O(e7) ? 2 : 0;
  return iu(e7, t10, n2, l10, r10, o2, i10, true);
};
function ip(e7) {
  return e7 ? tb(e7) || rs(e7) ? C({}, e7) : e7 : null;
}
function id(e7, t10, n2 = false, l10 = false) {
  let { props: r10, ref: i10, patchFlag: s4, children: o2, transition: a2 } = e7, u2 = t10 ? ib(r10 || {}, t10) : r10, c = { __v_isVNode: true, __v_skip: true, type: e7.type, props: u2, key: u2 && io(u2), ref: t10 && t10.ref ? n2 && i10 ? k(i10) ? i10.concat(ia(t10)) : [i10, ia(t10)] : ia(t10) : i10, scopeId: e7.scopeId, slotScopeIds: e7.slotScopeIds, children: o2, target: e7.target, targetStart: e7.targetStart, targetAnchor: e7.targetAnchor, staticCount: e7.staticCount, shapeFlag: e7.shapeFlag, patchFlag: t10 && e7.type !== r0 ? -1 === s4 ? 16 : 16 | s4 : s4, dynamicProps: e7.dynamicProps, dynamicChildren: e7.dynamicChildren, appContext: e7.appContext, dirs: e7.dirs, transition: a2, component: e7.component, suspense: e7.suspense, ssContent: e7.ssContent && id(e7.ssContent), ssFallback: e7.ssFallback && id(e7.ssFallback), el: e7.el, anchor: e7.anchor, ctx: e7.ctx, ce: e7.ce };
  return a2 && l10 && nV(c, a2.clone(c)), c;
}
function ih(e7 = " ", t10 = 0) {
  return ic(r1, null, e7, t10);
}
function ig(e7, t10) {
  let n2 = ic(r6, null, e7);
  return n2.staticCount = t10, n2;
}
function iv(e7 = "", t10 = false) {
  return t10 ? (r3(), il(r2, null, e7)) : ic(r2, null, e7);
}
function im(e7) {
  return null == e7 || "boolean" == typeof e7 ? ic(r2) : k(e7) ? ic(r0, null, e7.slice()) : ir(e7) ? i_(e7) : ic(r1, null, String(e7));
}
function i_(e7) {
  return null === e7.el && -1 !== e7.patchFlag || e7.memo ? e7 : id(e7);
}
function iy(e7, t10) {
  let n2 = 0, { shapeFlag: l10 } = e7;
  if (null == t10)
    t10 = null;
  else if (k(t10))
    n2 = 16;
  else if ("object" == typeof t10) {
    if (65 & l10) {
      let n3 = t10.default;
      n3 && (n3._c && (n3._d = false), iy(e7, n3()), n3._c && (n3._d = true));
      return;
    }
    {
      n2 = 32;
      let l11 = t10._;
      l11 || rs(t10) ? 3 === l11 && ni && (1 === ni.slots._ ? t10._ = 1 : (t10._ = 2, e7.patchFlag |= 1024)) : t10._ctx = ni;
    }
  } else
    O(t10) ? (t10 = { default: t10, _ctx: ni }, n2 = 32) : (t10 = String(t10), 64 & l10 ? (n2 = 16, t10 = [ih(t10)]) : n2 = 8);
  e7.children = t10, e7.shapeFlag |= n2;
}
function ib(...e7) {
  let t10 = {};
  for (let n2 = 0; n2 < e7.length; n2++) {
    let l10 = e7[n2];
    for (let e10 in l10)
      if ("class" === e10)
        t10.class !== l10.class && (t10.class = es([t10.class, l10.class]));
      else if ("style" === e10)
        t10.style = en([t10.style, l10.style]);
      else if (b(e10)) {
        let n3 = t10[e10], r10 = l10[e10];
        r10 && n3 !== r10 && !(k(n3) && n3.includes(r10)) && (t10[e10] = n3 ? [].concat(n3, r10) : r10);
      } else
        "" !== e10 && (t10[e10] = l10[e10]);
  }
  return t10;
}
function iS(e7, t10, n2, l10 = null) {
  tQ(e7, t10, 7, [n2, l10]);
}
let iC = l9(), ix = 0;
function iE(e7, t10, n2) {
  let l10 = e7.type, r10 = (t10 ? t10.appContext : e7.appContext) || iC, i10 = { uid: ix++, vnode: e7, type: l10, parent: t10, appContext: r10, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new eg(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t10 ? t10.provides : Object.create(r10.provides), ids: t10 ? t10.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: function e10(t11, n3, l11 = false) {
    let r11 = l11 ? ru : n3.propsCache, i11 = r11.get(t11);
    if (i11)
      return i11;
    let s4 = t11.props, o2 = {}, a2 = [], u2 = false;
    if (!O(t11)) {
      let r12 = (t12) => {
        u2 = true;
        let [l12, r13] = e10(t12, n3, true);
        C(o2, l12), r13 && a2.push(...r13);
      };
      !l11 && n3.mixins.length && n3.mixins.forEach(r12), t11.extends && r12(t11.extends), t11.mixins && t11.mixins.forEach(r12);
    }
    if (!s4 && !u2)
      return I(t11) && r11.set(t11, m), m;
    if (k(s4))
      for (let e11 = 0; e11 < s4.length; e11++) {
        let t12 = W(s4[e11]);
        rc(t12) && (o2[t12] = g);
      }
    else if (s4)
      for (let e11 in s4) {
        let t12 = W(e11);
        if (rc(t12)) {
          let n4 = s4[e11], l12 = o2[t12] = k(n4) || O(n4) ? { type: n4 } : C({}, n4), r12 = l12.type, i12 = false, u3 = true;
          if (k(r12))
            for (let e12 = 0; e12 < r12.length; ++e12) {
              let t13 = r12[e12], n6 = O(t13) && t13.name;
              if ("Boolean" === n6) {
                i12 = true;
                break;
              }
              "String" === n6 && (u3 = false);
            }
          else
            i12 = O(r12) && "Boolean" === r12.name;
          l12[0] = i12, l12[1] = u3, (i12 || w(l12, "default")) && a2.push(t12);
        }
      }
    let c = [o2, a2];
    return I(t11) && r11.set(t11, c), c;
  }(l10, r10), emitsOptions: function e10(t11, n3, l11 = false) {
    let r11 = n3.emitsCache, i11 = r11.get(t11);
    if (void 0 !== i11)
      return i11;
    let s4 = t11.emits, o2 = {}, a2 = false;
    if (!O(t11)) {
      let r12 = (t12) => {
        let l12 = e10(t12, n3, true);
        l12 && (a2 = true, C(o2, l12));
      };
      !l11 && n3.mixins.length && n3.mixins.forEach(r12), t11.extends && r12(t11.extends), t11.mixins && t11.mixins.forEach(r12);
    }
    return s4 || a2 ? (k(s4) ? s4.forEach((e11) => o2[e11] = null) : C(o2, s4), I(t11) && r11.set(t11, o2), o2) : (I(t11) && r11.set(t11, null), null);
  }(l10, r10), emit: null, emitted: null, propsDefaults: g, inheritAttrs: l10.inheritAttrs, ctx: g, data: g, props: g, attrs: g, slots: g, refs: g, setupState: g, setupContext: null, suspense: n2, suspenseId: n2 ? n2.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return i10.ctx = { _: i10 }, i10.root = t10 ? t10.root : i10, i10.emit = rU.bind(null, i10), e7.ce && e7.ce(i10), i10;
}
let iw = null, ik = () => iw || ni;
{
  let e7 = ee(), t10 = (t11, n2) => {
    let l10;
    return (l10 = e7[t11]) || (l10 = e7[t11] = []), l10.push(n2), (e10) => {
      l10.length > 1 ? l10.forEach((t12) => t12(e10)) : l10[0](e10);
    };
  };
  o = t10("__VUE_INSTANCE_SETTERS__", (e10) => iw = e10), a = t10("__VUE_SSR_SETTERS__", (e10) => iN = e10);
}
let iT = (e7) => {
  let t10 = iw;
  return o(e7), e7.scope.on(), () => {
    e7.scope.off(), o(t10);
  };
}, iA = () => {
  iw && iw.scope.off(), o(null);
};
function iR(e7) {
  return 4 & e7.vnode.shapeFlag;
}
let iN = false;
function iO(e7, t10 = false, n2 = false) {
  t10 && a(t10);
  let { props: l10, children: r10 } = e7.vnode, i10 = iR(e7);
  !function(e10, t11, n3, l11 = false) {
    let r11 = {}, i11 = ri();
    for (let n4 in e10.propsDefaults = /* @__PURE__ */ Object.create(null), ro(e10, t11, r11, i11), e10.propsOptions[0])
      n4 in r11 || (r11[n4] = void 0);
    n3 ? e10.props = l11 ? r11 : td(r11) : e10.type.props ? e10.props = r11 : e10.props = i11, e10.attrs = i11;
  }(e7, l10, i10, t10), rm(e7, r10, n2);
  let s4 = i10 ? function(e10, t11) {
    let n3 = e10.type;
    e10.accessCache = /* @__PURE__ */ Object.create(null), e10.proxy = new Proxy(e10.ctx, lL);
    let { setup: l11 } = n3;
    if (l11) {
      eM();
      let n4 = e10.setupContext = l11.length > 1 ? iF(e10) : null, r11 = iT(e10), i11 = tY(l11, e10, 0, [e10.props, n4]), s6 = L(i11);
      if (eI(), r11(), (s6 || e10.sp) && !n5(e10) && n$(e10), s6) {
        if (i11.then(iA, iA), t11)
          return i11.then((n6) => {
            iP(e10, n6, t11);
          }).catch((t12) => {
            t0(t12, e10, 0);
          });
        e10.asyncDep = i11;
      } else
        iP(e10, i11, t11);
    } else
      iL(e10, t11);
  }(e7, t10) : void 0;
  return t10 && a(false), s4;
}
function iP(e7, t10, n2) {
  O(t10) ? e7.type.__ssrInlineRender ? e7.ssrRender = t10 : e7.render = t10 : I(t10) && (e7.setupState = tI(t10)), iL(e7, n2);
}
function iL(e7, t10, n2) {
  let l10 = e7.type;
  if (!e7.render) {
    if (!t10 && u && !l10.render) {
      let t11 = l10.template || l0(e7).template;
      if (t11) {
        let { isCustomElement: n3, compilerOptions: r10 } = e7.appContext.config, { delimiters: i10, compilerOptions: s4 } = l10, o2 = C(C({ isCustomElement: n3, delimiters: i10 }, r10), s4);
        l10.render = u(t11, o2);
      }
    }
    e7.render = l10.render || _;
  }
  {
    let t11 = iT(e7);
    eM();
    try {
      !function(e10) {
        let t12 = l0(e10), n3 = e10.proxy, l11 = e10.ctx;
        lY = false, t12.beforeCreate && lQ(t12.beforeCreate, e10, "bc");
        let { data: r10, computed: i10, methods: s4, watch: o2, provide: a2, inject: u2, created: c, beforeMount: f2, mounted: p2, beforeUpdate: d2, updated: h2, activated: g2, deactivated: m2, beforeDestroy: y2, beforeUnmount: b2, destroyed: S2, unmounted: C2, render: x2, renderTracked: E2, renderTriggered: w2, errorCaptured: T2, serverPrefetch: A2, expose: R2, inheritAttrs: N, components: M2, directives: L2, filters: D2 } = t12;
        if (u2 && function(e11, t13, n4 = _) {
          for (let n6 in k(e11) && (e11 = l4(e11)), e11) {
            let l12;
            let r11 = e11[n6];
            tw(l12 = I(r11) ? "default" in r11 ? rn(r11.from || n6, r11.default, true) : rn(r11.from || n6) : rn(r11)) ? Object.defineProperty(t13, n6, { enumerable: true, configurable: true, get: () => l12.value, set: (e12) => l12.value = e12 }) : t13[n6] = l12;
          }
        }(u2, l11, null), s4)
          for (let e11 in s4) {
            let t13 = s4[e11];
            O(t13) && (l11[e11] = t13.bind(n3));
          }
        if (r10) {
          let t13 = r10.call(n3, n3);
          I(t13) && (e10.data = tp(t13));
        }
        if (lY = true, i10)
          for (let e11 in i10) {
            let t13 = i10[e11], r11 = O(t13) ? t13.bind(n3, n3) : O(t13.get) ? t13.get.bind(n3, n3) : _, s6 = ij({ get: r11, set: !O(t13) && O(t13.set) ? t13.set.bind(n3) : _ });
            Object.defineProperty(l11, e11, { enumerable: true, configurable: true, get: () => s6.value, set: (e12) => s6.value = e12 });
          }
        if (o2)
          for (let e11 in o2)
            !function e12(t13, n4, l12, r11) {
              let i11 = r11.includes(".") ? rD(l12, r11) : () => l12[r11];
              if (P(t13)) {
                let e13 = n4[t13];
                O(e13) && rM(i11, e13);
              } else if (O(t13))
                rM(i11, t13.bind(l12));
              else if (I(t13)) {
                if (k(t13))
                  t13.forEach((t14) => e12(t14, n4, l12, r11));
                else {
                  let e13 = O(t13.handler) ? t13.handler.bind(l12) : n4[t13.handler];
                  O(e13) && rM(i11, e13, t13);
                }
              }
            }(o2[e11], l11, n3, e11);
        if (a2) {
          let e11 = O(a2) ? a2.call(n3) : a2;
          Reflect.ownKeys(e11).forEach((t13) => {
            rt(t13, e11[t13]);
          });
        }
        function F2(e11, t13) {
          k(t13) ? t13.forEach((t14) => e11(t14.bind(n3))) : t13 && e11(t13.bind(n3));
        }
        if (c && lQ(c, e10, "c"), F2(lc, f2), F2(lf, p2), F2(lp, d2), F2(ld, h2), F2(ll, g2), F2(lr, m2), F2(ly, T2), F2(l_, E2), F2(lm, w2), F2(lh, b2), F2(lg, C2), F2(lv, A2), k(R2)) {
          if (R2.length) {
            let t13 = e10.exposed || (e10.exposed = {});
            R2.forEach((e11) => {
              Object.defineProperty(t13, e11, { get: () => n3[e11], set: (t14) => n3[e11] = t14 });
            });
          } else
            e10.exposed || (e10.exposed = {});
        }
        x2 && e10.render === _ && (e10.render = x2), null != N && (e10.inheritAttrs = N), M2 && (e10.components = M2), L2 && (e10.directives = L2), A2 && n$(e10);
      }(e7);
    } finally {
      eI(), t11();
    }
  }
}
let iD = { get: (e7, t10) => (eH(e7, "get", ""), e7[t10]) };
function iF(e7) {
  return { attrs: new Proxy(e7.attrs, iD), slots: e7.slots, emit: e7.emit, expose: (t10) => {
    e7.exposed = t10 || {};
  } };
}
function iV(e7) {
  return e7.exposed ? e7.exposeProxy || (e7.exposeProxy = new Proxy(tI(tC(e7.exposed)), { get: (t10, n2) => n2 in t10 ? t10[n2] : n2 in lM ? lM[n2](e7) : void 0, has: (e10, t10) => t10 in e10 || t10 in lM })) : e7.proxy;
}
function iU(e7, t10 = true) {
  return O(e7) ? e7.displayName || e7.name : e7.name || t10 && e7.__name;
}
let ij = (e7, t10) => function(e10, t11, n2 = false) {
  let l10, r10;
  return O(e10) ? l10 = e10 : (l10 = e10.get, r10 = e10.set), new t$(l10, r10, n2);
}(e7, 0, iN);
function iB(e7, t10, n2) {
  let l10 = arguments.length;
  return 2 !== l10 ? (l10 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : 3 === l10 && ir(n2) && (n2 = [n2]), ic(e7, t10, n2)) : !I(t10) || k(t10) ? ic(e7, null, t10) : ir(t10) ? ic(e7, null, [t10]) : ic(e7, t10);
}
let iK = "3.5.13", iz = _, i0 = "undefined" != typeof window && window.trustedTypes;
if (i0)
  try {
    d = i0.createPolicy("vue", { createHTML: (e7) => e7 });
  } catch (e7) {
  }
let i1 = d ? (e7) => d.createHTML(e7) : (e7) => e7, i2 = "undefined" != typeof document ? document : null, i6 = i2 && i2.createElement("template"), i4 = "transition", i8 = "animation", i3 = Symbol("_vtc"), i5 = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String }, i9 = C({}, nN, i5), i7 = ((e = (e7, { slots: t10 }) => iB(nM, sn(e7), t10)).displayName = "Transition", e.props = i9, e), se = (e7, t10 = []) => {
  k(e7) ? e7.forEach((e10) => e10(...t10)) : e7 && e7(...t10);
}, st = (e7) => !!e7 && (k(e7) ? e7.some((e10) => e10.length > 1) : e7.length > 1);
function sn(e7) {
  let t10 = {};
  for (let n3 in e7)
    n3 in i5 || (t10[n3] = e7[n3]);
  if (false === e7.css)
    return t10;
  let { name: n2 = "v", type: l10, duration: r10, enterFromClass: i10 = `${n2}-enter-from`, enterActiveClass: s4 = `${n2}-enter-active`, enterToClass: o2 = `${n2}-enter-to`, appearFromClass: a2 = i10, appearActiveClass: u2 = s4, appearToClass: c = o2, leaveFromClass: f2 = `${n2}-leave-from`, leaveActiveClass: p2 = `${n2}-leave-active`, leaveToClass: d2 = `${n2}-leave-to` } = e7, h2 = function(e10) {
    if (null == e10)
      return null;
    if (I(e10))
      return [Q(e10.enter), Q(e10.leave)];
    {
      let t11 = Q(e10);
      return [t11, t11];
    }
  }(r10), g2 = h2 && h2[0], m2 = h2 && h2[1], { onBeforeEnter: _2, onEnter: y2, onEnterCancelled: b2, onLeave: S2, onLeaveCancelled: x2, onBeforeAppear: E2 = _2, onAppear: w2 = y2, onAppearCancelled: k2 = b2 } = t10, T2 = (e10, t11, n3, l11) => {
    e10._enterCancelled = l11, sr(e10, t11 ? c : o2), sr(e10, t11 ? u2 : s4), n3 && n3();
  }, A2 = (e10, t11) => {
    e10._isLeaving = false, sr(e10, f2), sr(e10, d2), sr(e10, p2), t11 && t11();
  }, R2 = (e10) => (t11, n3) => {
    let r11 = e10 ? w2 : y2, s6 = () => T2(t11, e10, n3);
    se(r11, [t11, s6]), si(() => {
      sr(t11, e10 ? a2 : i10), sl(t11, e10 ? c : o2), st(r11) || so(t11, l10, g2, s6);
    });
  };
  return C(t10, { onBeforeEnter(e10) {
    se(_2, [e10]), sl(e10, i10), sl(e10, s4);
  }, onBeforeAppear(e10) {
    se(E2, [e10]), sl(e10, a2), sl(e10, u2);
  }, onEnter: R2(false), onAppear: R2(true), onLeave(e10, t11) {
    e10._isLeaving = true;
    let n3 = () => A2(e10, t11);
    sl(e10, f2), e10._enterCancelled ? (sl(e10, p2), sf()) : (sf(), sl(e10, p2)), si(() => {
      e10._isLeaving && (sr(e10, f2), sl(e10, d2), st(S2) || so(e10, l10, m2, n3));
    }), se(S2, [e10, n3]);
  }, onEnterCancelled(e10) {
    T2(e10, false, void 0, true), se(b2, [e10]);
  }, onAppearCancelled(e10) {
    T2(e10, true, void 0, true), se(k2, [e10]);
  }, onLeaveCancelled(e10) {
    A2(e10), se(x2, [e10]);
  } });
}
function sl(e7, t10) {
  t10.split(/\s+/).forEach((t11) => t11 && e7.classList.add(t11)), (e7[i3] || (e7[i3] = /* @__PURE__ */ new Set())).add(t10);
}
function sr(e7, t10) {
  t10.split(/\s+/).forEach((t11) => t11 && e7.classList.remove(t11));
  let n2 = e7[i3];
  n2 && (n2.delete(t10), n2.size || (e7[i3] = void 0));
}
function si(e7) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e7);
  });
}
let ss = 0;
function so(e7, t10, n2, l10) {
  let r10 = e7._endId = ++ss, i10 = () => {
    r10 === e7._endId && l10();
  };
  if (null != n2)
    return setTimeout(i10, n2);
  let { type: s4, timeout: o2, propCount: a2 } = sa(e7, t10);
  if (!s4)
    return l10();
  let u2 = s4 + "end", c = 0, f2 = () => {
    e7.removeEventListener(u2, p2), i10();
  }, p2 = (t11) => {
    t11.target === e7 && ++c >= a2 && f2();
  };
  setTimeout(() => {
    c < a2 && f2();
  }, o2 + 1), e7.addEventListener(u2, p2);
}
function sa(e7, t10) {
  let n2 = window.getComputedStyle(e7), l10 = (e10) => (n2[e10] || "").split(", "), r10 = l10(`${i4}Delay`), i10 = l10(`${i4}Duration`), s4 = su(r10, i10), o2 = l10(`${i8}Delay`), a2 = l10(`${i8}Duration`), u2 = su(o2, a2), c = null, f2 = 0, p2 = 0;
  t10 === i4 ? s4 > 0 && (c = i4, f2 = s4, p2 = i10.length) : t10 === i8 ? u2 > 0 && (c = i8, f2 = u2, p2 = a2.length) : p2 = (c = (f2 = Math.max(s4, u2)) > 0 ? s4 > u2 ? i4 : i8 : null) ? c === i4 ? i10.length : a2.length : 0;
  let d2 = c === i4 && /\b(transform|all)(,|$)/.test(l10(`${i4}Property`).toString());
  return { type: c, timeout: f2, propCount: p2, hasTransform: d2 };
}
function su(e7, t10) {
  for (; e7.length < t10.length; )
    e7 = e7.concat(e7);
  return Math.max(...t10.map((t11, n2) => sc(t11) + sc(e7[n2])));
}
function sc(e7) {
  return "auto" === e7 ? 0 : 1e3 * Number(e7.slice(0, -1).replace(",", "."));
}
function sf() {
  return document.body.offsetHeight;
}
let sp = Symbol("_vod"), sd = Symbol("_vsh"), sh = { beforeMount(e7, { value: t10 }, { transition: n2 }) {
  e7[sp] = "none" === e7.style.display ? "" : e7.style.display, n2 && t10 ? n2.beforeEnter(e7) : sg(e7, t10);
}, mounted(e7, { value: t10 }, { transition: n2 }) {
  n2 && t10 && n2.enter(e7);
}, updated(e7, { value: t10, oldValue: n2 }, { transition: l10 }) {
  !t10 != !n2 && (l10 ? t10 ? (l10.beforeEnter(e7), sg(e7, true), l10.enter(e7)) : l10.leave(e7, () => {
    sg(e7, false);
  }) : sg(e7, t10));
}, beforeUnmount(e7, { value: t10 }) {
  sg(e7, t10);
} };
function sg(e7, t10) {
  e7.style.display = t10 ? e7[sp] : "none", e7[sd] = !t10;
}
let sv = Symbol("");
let sy = /(^|;)\s*display\s*:/, sb = /\s*!important$/;
function sS(e7, t10, n2) {
  if (k(n2))
    n2.forEach((n3) => sS(e7, t10, n3));
  else if (null == n2 && (n2 = ""), t10.startsWith("--"))
    e7.setProperty(t10, n2);
  else {
    let l10 = function(e10, t11) {
      let n3 = sx[t11];
      if (n3)
        return n3;
      let l11 = W(t11);
      if ("filter" !== l11 && l11 in e10)
        return sx[t11] = l11;
      l11 = q(l11);
      for (let n4 = 0; n4 < sC.length; n4++) {
        let r10 = sC[n4] + l11;
        if (r10 in e10)
          return sx[t11] = r10;
      }
      return t11;
    }(e7, t10);
    sb.test(n2) ? e7.setProperty(z(l10), n2.replace(sb, ""), "important") : e7[l10] = n2;
  }
}
let sC = ["Webkit", "Moz", "ms"], sx = {}, sE = "http://www.w3.org/1999/xlink";
function sw(e7, t10, n2, l10, r10, i10 = ea(t10)) {
  l10 && t10.startsWith("xlink:") ? null == n2 ? e7.removeAttributeNS(sE, t10.slice(6, t10.length)) : e7.setAttributeNS(sE, t10, n2) : null == n2 || i10 && !(n2 || "" === n2) ? e7.removeAttribute(t10) : e7.setAttribute(t10, i10 ? "" : M(n2) ? String(n2) : n2);
}
function sk(e7, t10, n2, l10, r10) {
  if ("innerHTML" === t10 || "textContent" === t10) {
    null != n2 && (e7[t10] = "innerHTML" === t10 ? i1(n2) : n2);
    return;
  }
  let i10 = e7.tagName;
  if ("value" === t10 && "PROGRESS" !== i10 && !i10.includes("-")) {
    let l11 = "OPTION" === i10 ? e7.getAttribute("value") || "" : e7.value, r11 = null == n2 ? "checkbox" === e7.type ? "on" : "" : String(n2);
    l11 === r11 && "_value" in e7 || (e7.value = r11), null == n2 && e7.removeAttribute(t10), e7._value = n2;
    return;
  }
  let s4 = false;
  if ("" === n2 || null == n2) {
    let l11 = typeof e7[t10];
    if ("boolean" === l11) {
      var o2;
      n2 = !!(o2 = n2) || "" === o2;
    } else
      null == n2 && "string" === l11 ? (n2 = "", s4 = true) : "number" === l11 && (n2 = 0, s4 = true);
  }
  try {
    e7[t10] = n2;
  } catch (e10) {
  }
  s4 && e7.removeAttribute(r10 || t10);
}
function sT(e7, t10, n2, l10) {
  e7.addEventListener(t10, n2, l10);
}
let sA = Symbol("_vei"), sR = /(?:Once|Passive|Capture)$/, sN = 0, sO = Promise.resolve(), sP = () => sN || (sO.then(() => sN = 0), sN = Date.now()), sM = (e7) => 111 === e7.charCodeAt(0) && 110 === e7.charCodeAt(1) && e7.charCodeAt(2) > 96 && 123 > e7.charCodeAt(2);
let s$ = /* @__PURE__ */ new WeakMap(), sH = /* @__PURE__ */ new WeakMap(), sW = Symbol("_moveCb"), sK = Symbol("_enterCb");
t = { name: "TransitionGroup", props: C({}, i9, { tag: String, moveClass: String }), setup(e7, { slots: t10 }) {
  let n2, l10;
  let r10 = ik(), i10 = nA();
  return ld(() => {
    if (!n2.length)
      return;
    let t11 = e7.moveClass || `${e7.name || "v"}-move`;
    if (!function(e10, t12, n3) {
      let l12 = e10.cloneNode(), r11 = e10[i3];
      r11 && r11.forEach((e11) => {
        e11.split(/\s+/).forEach((e12) => e12 && l12.classList.remove(e12));
      }), n3.split(/\s+/).forEach((e11) => e11 && l12.classList.add(e11)), l12.style.display = "none";
      let i11 = 1 === t12.nodeType ? t12 : t12.parentNode;
      i11.appendChild(l12);
      let { hasTransform: s4 } = sa(l12);
      return i11.removeChild(l12), s4;
    }(n2[0].el, r10.vnode.el, t11))
      return;
    n2.forEach(sq), n2.forEach(sG);
    let l11 = n2.filter(sJ);
    sf(), l11.forEach((e10) => {
      let n3 = e10.el, l12 = n3.style;
      sl(n3, t11), l12.transform = l12.webkitTransform = l12.transitionDuration = "";
      let r11 = n3[sW] = (e11) => {
        (!e11 || e11.target === n3) && (!e11 || /transform$/.test(e11.propertyName)) && (n3.removeEventListener("transitionend", r11), n3[sW] = null, sr(n3, t11));
      };
      n3.addEventListener("transitionend", r11);
    });
  }), () => {
    let s4 = tS(e7), o2 = sn(s4), a2 = s4.tag || r0;
    if (n2 = [], l10)
      for (let e10 = 0; e10 < l10.length; e10++) {
        let t11 = l10[e10];
        t11.el && t11.el instanceof Element && (n2.push(t11), nV(t11, nL(t11, o2, i10, r10)), s$.set(t11, t11.el.getBoundingClientRect()));
      }
    l10 = t10.default ? nU(t10.default()) : [];
    for (let e10 = 0; e10 < l10.length; e10++) {
      let t11 = l10[e10];
      null != t11.key && nV(t11, nL(t11, o2, i10, r10));
    }
    return ic(a2, null, l10);
  };
} }, delete t.props.mode, t;
function sq(e7) {
  let t10 = e7.el;
  t10[sW] && t10[sW](), t10[sK] && t10[sK]();
}
function sG(e7) {
  sH.set(e7, e7.el.getBoundingClientRect());
}
function sJ(e7) {
  let t10 = s$.get(e7), n2 = sH.get(e7), l10 = t10.left - n2.left, r10 = t10.top - n2.top;
  if (l10 || r10) {
    let t11 = e7.el.style;
    return t11.transform = t11.webkitTransform = `translate(${l10}px,${r10}px)`, t11.transitionDuration = "0s", e7;
  }
}
let sX = (e7) => {
  let t10 = e7.props["onUpdate:modelValue"] || false;
  return k(t10) ? (e10) => X(t10, e10) : t10;
};
function sZ(e7) {
  e7.target.composing = true;
}
function sY(e7) {
  let t10 = e7.target;
  t10.composing && (t10.composing = false, t10.dispatchEvent(new Event("input")));
}
let sQ = Symbol("_assign"), s0 = { created(e7, { modifiers: { lazy: t10, trim: n2, number: l10 } }, r10) {
  e7[sQ] = sX(r10);
  let i10 = l10 || r10.props && "number" === r10.props.type;
  sT(e7, t10 ? "change" : "input", (t11) => {
    if (t11.target.composing)
      return;
    let l11 = e7.value;
    n2 && (l11 = l11.trim()), i10 && (l11 = Y(l11)), e7[sQ](l11);
  }), n2 && sT(e7, "change", () => {
    e7.value = e7.value.trim();
  }), t10 || (sT(e7, "compositionstart", sZ), sT(e7, "compositionend", sY), sT(e7, "change", sY));
}, mounted(e7, { value: t10 }) {
  e7.value = null == t10 ? "" : t10;
}, beforeUpdate(e7, { value: t10, oldValue: n2, modifiers: { lazy: l10, trim: r10, number: i10 } }, s4) {
  if (e7[sQ] = sX(s4), e7.composing)
    return;
  let o2 = (i10 || "number" === e7.type) && !/^0\d/.test(e7.value) ? Y(e7.value) : e7.value, a2 = null == t10 ? "" : t10;
  o2 === a2 || document.activeElement === e7 && "range" !== e7.type && (l10 && t10 === n2 || r10 && e7.value.trim() === a2) || (e7.value = a2);
} }, s1 = { deep: true, created(e7, t10, n2) {
  e7[sQ] = sX(n2), sT(e7, "change", () => {
    let t11 = e7._modelValue, n3 = s3(e7), l10 = e7.checked, r10 = e7[sQ];
    if (k(t11)) {
      let e10 = ec(t11, n3), i10 = -1 !== e10;
      if (l10 && !i10)
        r10(t11.concat(n3));
      else if (!l10 && i10) {
        let n4 = [...t11];
        n4.splice(e10, 1), r10(n4);
      }
    } else if (A(t11)) {
      let e10 = new Set(t11);
      l10 ? e10.add(n3) : e10.delete(n3), r10(e10);
    } else
      r10(s5(e7, l10));
  });
}, mounted: s2, beforeUpdate(e7, t10, n2) {
  e7[sQ] = sX(n2), s2(e7, t10, n2);
} };
function s2(e7, { value: t10, oldValue: n2 }, l10) {
  let r10;
  if (e7._modelValue = t10, k(t10))
    r10 = ec(t10, l10.props.value) > -1;
  else if (A(t10))
    r10 = t10.has(l10.props.value);
  else {
    if (t10 === n2)
      return;
    r10 = eu(t10, s5(e7, true));
  }
  e7.checked !== r10 && (e7.checked = r10);
}
function s3(e7) {
  return "_value" in e7 ? e7._value : e7.value;
}
function s5(e7, t10) {
  let n2 = t10 ? "_trueValue" : "_falseValue";
  return n2 in e7 ? e7[n2] : t10;
}
let ot = ["ctrl", "shift", "alt", "meta"], on = { stop: (e7) => e7.stopPropagation(), prevent: (e7) => e7.preventDefault(), self: (e7) => e7.target !== e7.currentTarget, ctrl: (e7) => !e7.ctrlKey, shift: (e7) => !e7.shiftKey, alt: (e7) => !e7.altKey, meta: (e7) => !e7.metaKey, left: (e7) => "button" in e7 && 0 !== e7.button, middle: (e7) => "button" in e7 && 1 !== e7.button, right: (e7) => "button" in e7 && 2 !== e7.button, exact: (e7, t10) => ot.some((n2) => e7[`${n2}Key`] && !t10.includes(n2)) }, ol = (e7, t10) => {
  let n2 = e7._withMods || (e7._withMods = {}), l10 = t10.join(".");
  return n2[l10] || (n2[l10] = (n3, ...l11) => {
    for (let e10 = 0; e10 < t10.length; e10++) {
      let l12 = on[t10[e10]];
      if (l12 && l12(n3, t10))
        return;
    }
    return e7(n3, ...l11);
  });
}, or = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" }, oi = (e7, t10) => {
  let n2 = e7._withKeys || (e7._withKeys = {}), l10 = t10.join(".");
  return n2[l10] || (n2[l10] = (n3) => {
    if (!("key" in n3))
      return;
    let l11 = z(n3.key);
    if (t10.some((e10) => e10 === l11 || or[e10] === l11))
      return e7(n3);
  });
}, os = C({ patchProp: (e7, t10, n2, l10, r10, i10) => {
  let s4 = "svg" === r10;
  "class" === t10 ? function(e10, t11, n3) {
    let l11 = e10[i3];
    l11 && (t11 = (t11 ? [t11, ...l11] : [...l11]).join(" ")), null == t11 ? e10.removeAttribute("class") : n3 ? e10.setAttribute("class", t11) : e10.className = t11;
  }(e7, l10, s4) : "style" === t10 ? function(e10, t11, n3) {
    let l11 = e10.style, r11 = P(n3), i11 = false;
    if (n3 && !r11) {
      if (t11) {
        if (P(t11))
          for (let e11 of t11.split(";")) {
            let t12 = e11.slice(0, e11.indexOf(":")).trim();
            null == n3[t12] && sS(l11, t12, "");
          }
        else
          for (let e11 in t11)
            null == n3[e11] && sS(l11, e11, "");
      }
      for (let e11 in n3)
        "display" === e11 && (i11 = true), sS(l11, e11, n3[e11]);
    } else if (r11) {
      if (t11 !== n3) {
        let e11 = l11[sv];
        e11 && (n3 += ";" + e11), l11.cssText = n3, i11 = sy.test(n3);
      }
    } else
      t11 && e10.removeAttribute("style");
    sp in e10 && (e10[sp] = i11 ? l11.display : "", e10[sd] && (l11.display = "none"));
  }(e7, n2, l10) : b(t10) ? S(t10) || function(e10, t11, n3, l11, r11 = null) {
    let i11 = e10[sA] || (e10[sA] = {}), s6 = i11[t11];
    if (l11 && s6)
      s6.value = l11;
    else {
      let [n4, o2] = function(e11) {
        let t12;
        if (sR.test(e11)) {
          let n6;
          for (t12 = {}; n6 = e11.match(sR); )
            e11 = e11.slice(0, e11.length - n6[0].length), t12[n6[0].toLowerCase()] = true;
        }
        return [":" === e11[2] ? e11.slice(3) : z(e11.slice(2)), t12];
      }(t11);
      l11 ? sT(e10, n4, i11[t11] = function(e11, t12) {
        let n6 = (e12) => {
          if (e12._vts) {
            if (e12._vts <= n6.attached)
              return;
          } else
            e12._vts = Date.now();
          tQ(function(e13, t13) {
            if (!k(t13))
              return t13;
            {
              let n8 = e13.stopImmediatePropagation;
              return e13.stopImmediatePropagation = () => {
                n8.call(e13), e13._stopped = true;
              }, t13.map((e14) => (t14) => !t14._stopped && e14 && e14(t14));
            }
          }(e12, n6.value), t12, 5, [e12]);
        };
        return n6.value = e11, n6.attached = sP(), n6;
      }(l11, r11), o2) : s6 && (!function(e11, t12, n6, l12) {
        e11.removeEventListener(t12, n6, l12);
      }(e10, n4, s6, o2), i11[t11] = void 0);
    }
  }(e7, t10, 0, l10, i10) : ("." === t10[0] ? (t10 = t10.slice(1), 0) : "^" === t10[0] ? (t10 = t10.slice(1), 1) : !function(e10, t11, n3, l11) {
    if (l11)
      return !!("innerHTML" === t11 || "textContent" === t11 || t11 in e10 && sM(t11) && O(n3));
    if ("spellcheck" === t11 || "draggable" === t11 || "translate" === t11 || "form" === t11 || "list" === t11 && "INPUT" === e10.tagName || "type" === t11 && "TEXTAREA" === e10.tagName)
      return false;
    if ("width" === t11 || "height" === t11) {
      let t12 = e10.tagName;
      if ("IMG" === t12 || "VIDEO" === t12 || "CANVAS" === t12 || "SOURCE" === t12)
        return false;
    }
    return !(sM(t11) && P(n3)) && t11 in e10;
  }(e7, t10, l10, s4)) ? e7._isVueCE && (/[A-Z]/.test(t10) || !P(l10)) ? sk(e7, W(t10), l10, i10, t10) : ("true-value" === t10 ? e7._trueValue = l10 : "false-value" === t10 && (e7._falseValue = l10), sw(e7, t10, l10, s4)) : (sk(e7, t10, l10), e7.tagName.includes("-") || "value" !== t10 && "checked" !== t10 && "selected" !== t10 || sw(e7, t10, l10, s4, i10, "value" !== t10));
} }, { insert: (e7, t10, n2) => {
  t10.insertBefore(e7, n2 || null);
}, remove: (e7) => {
  let t10 = e7.parentNode;
  t10 && t10.removeChild(e7);
}, createElement: (e7, t10, n2, l10) => {
  let r10 = "svg" === t10 ? i2.createElementNS("http://www.w3.org/2000/svg", e7) : "mathml" === t10 ? i2.createElementNS("http://www.w3.org/1998/Math/MathML", e7) : n2 ? i2.createElement(e7, { is: n2 }) : i2.createElement(e7);
  return "select" === e7 && l10 && null != l10.multiple && r10.setAttribute("multiple", l10.multiple), r10;
}, createText: (e7) => i2.createTextNode(e7), createComment: (e7) => i2.createComment(e7), setText: (e7, t10) => {
  e7.nodeValue = t10;
}, setElementText: (e7, t10) => {
  e7.textContent = t10;
}, parentNode: (e7) => e7.parentNode, nextSibling: (e7) => e7.nextSibling, querySelector: (e7) => i2.querySelector(e7), setScopeId(e7, t10) {
  e7.setAttribute(t10, "");
}, insertStaticContent(e7, t10, n2, l10, r10, i10) {
  let s4 = n2 ? n2.previousSibling : t10.lastChild;
  if (r10 && (r10 === i10 || r10.nextSibling))
    for (; t10.insertBefore(r10.cloneNode(true), n2), r10 !== i10 && (r10 = r10.nextSibling); )
      ;
  else {
    i6.innerHTML = i1("svg" === l10 ? `<svg>${e7}</svg>` : "mathml" === l10 ? `<math>${e7}</math>` : e7);
    let r11 = i6.content;
    if ("svg" === l10 || "mathml" === l10) {
      let e10 = r11.firstChild;
      for (; e10.firstChild; )
        r11.appendChild(e10.firstChild);
      r11.removeChild(e10);
    }
    t10.insertBefore(r11, n2);
  }
  return [s4 ? s4.nextSibling : t10.firstChild, n2 ? n2.previousSibling : t10.lastChild];
} }), oo = false;
function oa() {
  return f = oo ? f : rS(os), oo = true, f;
}
let op = (...e7) => {
  let t10 = oa().createApp(...e7), { mount: n2 } = t10;
  return t10.mount = (e10) => {
    let t11 = oh(e10);
    if (t11)
      return n2(t11, true, od(t11));
  }, t10;
};
function od(e7) {
  return e7 instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && e7 instanceof MathMLElement ? "mathml" : void 0;
}
function oh(e7) {
  return P(e7) ? document.querySelector(e7) : e7;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const siteData = window.__VP_SITE_DATA__;
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0,
  isNotFound: true
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = tT(siteData);
function initData(route) {
  const site = ij(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  return {
    site,
    theme: ij(() => site.value.themeConfig),
    page: ij(() => route.data),
    frontmatter: ij(() => route.data.frontmatter),
    params: ij(() => route.data.params),
    lang: ij(() => site.value.lang),
    dir: ij(() => site.value.dir),
    localeIndex: ij(() => site.value.localeIndex || "root"),
    title: ij(() => {
      return createTitle(site.value, route.data);
    }),
    description: ij(() => {
      return route.data.description || site.value.description;
    }),
    isDark: tk(false)
  };
}
function useData() {
  const data = rn(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || path.startsWith(".") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      if (!pageHash)
        return null;
      pagePath = `${base}${"assets"}/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
let contentUpdatedCallbacks = [];
function onContentUpdated(fn) {
  contentUpdatedCallbacks.push(fn);
  lg(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter((f2) => f2 !== fn);
  });
}
const RouterSymbol = Symbol();
const fakeHost = "http://a.com";
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = tp(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    if (await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const url = new URL(href, fakeHost);
    if (!siteDataRef.value.cleanUrls) {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    if (inBrowser && href !== location.href) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    var _a;
    if (await ((_a = router.onBeforePageLoad) == null ? void 0 : _a.call(router, href)) === false)
      return;
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (!page) {
        throw new Error(`Page not found: ${pendingPath}`);
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = tC(comp);
        route.data = true ? tC(__pageData) : th(__pageData);
        if (inBrowser) {
          t9(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.getElementById(decodeURIComponent(targetLoc.hash).slice(1));
              } catch (e7) {
                console.warn(e7);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch|Page not found/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e7) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? tC(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e7) => {
      const button = e7.target.closest("button");
      if (button)
        return;
      const link2 = e7.target.closest("a");
      if (link2 && !link2.closest(".vp-raw") && (link2 instanceof SVGElement || !link2.download)) {
        const { target } = link2;
        const { href, origin, pathname, hash, search } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e7.ctrlKey && !e7.shiftKey && !e7.altKey && !e7.metaKey && !target && origin === currentUrl.origin && // don't intercept if non-html extension is present
        !(extMatch && extMatch[0] !== ".html")) {
          e7.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash) {
              if (hash !== currentUrl.hash) {
                history.pushState(null, "", hash);
                window.dispatchEvent(new Event("hashchange"));
              }
              scrollTo(link2, hash, link2.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e7) => {
      loadPage(location.href, e7.state && e7.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e7) => {
      e7.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = rn(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el2, hash, smooth = false) {
  let target = null;
  try {
    target = el2.classList.contains("header-anchor") ? el2 : document.getElementById(decodeURIComponent(hash).slice(1));
  } catch (e7) {
    console.warn(e7);
  }
  if (target) {
    let scrollToTarget = function() {
      if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
        window.scrollTo(0, targetTop);
      } else {
        window.scrollTo({
          left: 0,
          top: targetTop,
          behavior: "smooth"
        });
      }
    };
    const scrollOffset = siteDataRef.value.scrollOffset;
    let offset = 0;
    if (typeof scrollOffset === "number") {
      offset = scrollOffset;
    } else if (typeof scrollOffset === "string") {
      offset = tryOffsetSelector(scrollOffset);
    } else if (Array.isArray(scrollOffset)) {
      for (const selector of scrollOffset) {
        const res = tryOffsetSelector(selector);
        if (res) {
          offset = res;
          break;
        }
      }
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    requestAnimationFrame(scrollToTarget);
  }
}
function tryOffsetSelector(selector) {
  const el2 = document.querySelector(selector);
  if (!el2)
    return 0;
  const bot = el2.getBoundingClientRect().bottom;
  if (bot < 0)
    return 0;
  return bot + 24;
}
const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn());
const Content = nj({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(props) {
    const route = useRoute();
    return () => iB(props.as, { style: { position: "relative" } }, [
      route.component ? iB(route.component, {
        onVnodeMounted: runCbs,
        onVnodeUpdated: runCbs
      }) : "404 Page Not Found"
    ]);
  }
});
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i10 = links.length - 1; i10 >= 0; i10--) {
        const link3 = links[i10];
        if (link3.href === dep && (!isCss || link3.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link2 = document.createElement("link");
    link2.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link2.as = "script";
      link2.crossOrigin = "";
    }
    link2.href = dep;
    document.head.appendChild(link2);
    if (isCss) {
      return new Promise((res, rej) => {
        link2.addEventListener("load", res);
        link2.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e7 = new Event("vite:preloadError", { cancelable: true });
    e7.payload = err;
    window.dispatchEvent(e7);
    if (!e7.defaultPrevented) {
      throw err;
    }
  });
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const NOOP = () => {
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const ClientOnly = nj({
  setup(_2, { slots }) {
    const show = tk(false);
    lf(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e7) => {
      var _a, _b;
      const el2 = e7.target;
      if (el2.matches(".vp-code-group input")) {
        const group = (_a = el2.parentElement) == null ? void 0 : _a.parentElement;
        const i10 = Array.from((group == null ? void 0 : group.querySelectorAll("input")) || []).indexOf(el2);
        const current = group == null ? void 0 : group.querySelector('div[class*="language-"].active');
        const next = (_b = group == null ? void 0 : group.querySelectorAll('div[class*="language-"]:not(.language-id)')) == null ? void 0 : _b[i10];
        if (current && next && current !== next) {
          current.classList.remove("active");
          next.classList.add("active");
        }
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e7) => {
      var _a;
      const el2 = e7.target;
      if (el2.matches('div[class*="language-"] > button.copy')) {
        const parent = el2.parentElement;
        const sibling = (_a = el2.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        let text = "";
        sibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + "\n");
        text = text.slice(0, -1);
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el2.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el2));
          const timeoutId = setTimeout(() => {
            el2.classList.remove("copied");
            el2.blur();
            timeoutIdMap.delete(el2);
          }, 2e3);
          timeoutIdMap.set(el2, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let managedHeadTags = [];
  let isFirstUpdate = true;
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      return;
    }
    managedHeadTags.forEach((el2) => document.head.removeChild(el2));
    managedHeadTags = [];
    newTags.forEach((headConfig) => {
      const el2 = createHeadElement(headConfig);
      document.head.appendChild(el2);
      managedHeadTags.push(el2);
    });
  };
  rN(() => {
    const pageData = route.data;
    const siteData2 = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    document.title = createTitle(siteData2, pageData);
    const description = pageDescription || siteData2.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      metaDescriptionElement.setAttribute("content", description);
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData2.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el2 = document.createElement(tag);
  for (const key in attrs) {
    el2.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el2.innerHTML = innerHTML;
  }
  return el2;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  lf(observeLinks);
  const route = useRoute();
  rM(() => route.path, observeLinks);
  lg(() => {
    observer && observer.disconnect();
  });
}
export {
  tS as $,
  useData as A,
  rt as B,
  iB as C,
  rn as D,
  s0 as E,
  i7 as F,
  rM as G,
  lg as H,
  th as I,
  lR as J,
  useRoute as K,
  useRouter as L,
  ld as M,
  onContentUpdated as N,
  en as O,
  t9 as P,
  ik as Q,
  isString as R,
  tw as S,
  isObject as T,
  hasOwn as U,
  iz as V,
  NOOP as W,
  ib as X,
  tj as Y,
  isArray as Z,
  _export_sfc as _,
  iu as a,
  lW as a0,
  ol as a1,
  s1 as a2,
  tF as a3,
  lO as a4,
  tp as a5,
  isFunction as a6,
  rO as a7,
  rN as a8,
  inBrowser as a9,
  useUpdateHead as aa,
  usePrefetch as ab,
  useCopyCode as ac,
  useCodeGroups as ad,
  RouterSymbol as ae,
  initData as af,
  dataSymbol as ag,
  Content as ah,
  ClientOnly as ai,
  siteDataRef as aj,
  op as ak,
  createRouter as al,
  pathToFile as am,
  em as an,
  e_ as ao,
  lJ as ap,
  rF as aq,
  nH as ar,
  iK as as,
  oi as at,
  lh as au,
  tG as av,
  il as b,
  nf as c,
  ic as d,
  ih as e,
  ep as f,
  iv as g,
  r0 as h,
  it as i,
  es as j,
  lx as k,
  lT as l,
  ij as m,
  nj as n,
  tk as o,
  tT as p,
  lf as q,
  r3 as r,
  lS as s,
  tO as t,
  np as u,
  sh as v,
  ig as w,
  n9 as x,
  __vitePreload as y,
  withBase as z
};
