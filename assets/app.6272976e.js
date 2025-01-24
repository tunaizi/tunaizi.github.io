import { h as rn, i as ij, q as tO, t as tk, j as lf, a as rM, a2 as tj, k as lg, x as ik, A as isString, z as t9, a3 as isArray$1, V as isObject$1, a4 as tS, n as nj, H as lW, b as r3, m as il, o as nf, e as iu, u as es, J as np, c as it, F as tw, a5 as ol, a6 as s1, f as lR, d as r0, P as ih, p as ep, s as iv, v as lx, g as en, r as rt, a7 as tF, K as ib, a8 as lO, I as i7, W as hasOwn, a9 as tp, E as isFunction$1, C as iB, O as lS, M as sh, w as ic, l as lT, Z as tT, aa as ld, _ as _export_sfc$1, S as ig, $ as th, ab as useRoute, U as useData, Q as n9, R as __vitePreload, ac as useRouter, ad as onContentUpdated, ae as rO, D as rN, a1 as s0, af as inBrowser$1, ag as useUpdateHead, ah as usePrefetch, ai as useCopyCode, aj as useCodeGroups, ak as RouterSymbol, al as initData, am as dataSymbol, an as Content, ao as ClientOnly, ap as siteDataRef, aq as op, ar as createRouter, as as pathToFile } from "./chunks/framework.9c9a3542.js";
import { s as getNative, v as root, x as eq, y as isFunction, z as isObjectLike, A as baseGetTag, B as freeGlobal, D as isArray, S as Symbol$1, L as ListCache, M as Map, F as MapCache, G as toSource, H as castPath, I as toKey, J as isObject, K as baseGet, N as buildProp, b as buildProps, n as useId, U as UPDATE_MODEL_EVENT, i as isNumber, j as isBoolean, O as isUndefined, P as debugWarn, Q as isPropAbsent, p as useDeprecated, c as useNamespace, _ as _export_sfc, d as definePropType, w as withInstall, R as withNoopInstall, r as removeClass, m as addClass, h as ElIcon, T as loading_default, V as caret_right_default, E as EVENT_CODE, e as iconPropType, g as useLocale, u as useConfig, W as ensureStartingSlash, X as isActive, Y as normalizeLink, Z as withConfigProvider } from "./chunks/base.30cf62ac.js";
import { d as useEventListener, e as useMediaQuery } from "./chunks/index.e92831bb.js";
function identity(value) {
  return value;
}
var WeakMap = getNative(root, "WeakMap");
const WeakMap$1 = WeakMap;
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
const defineProperty$1 = defineProperty;
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
const baseSetToString$1 = baseSetToString;
var setToString = shortOut(baseSetToString$1);
const setToString$1 = setToString;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var objectProto$6 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$6;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$5.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
const isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer = moduleExports$1 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
const isBuffer$1 = isBuffer;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
const nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
const isTypedArray$1 = isTypedArray;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
const getSymbols$1 = getSymbols;
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
var DataView = getNative(root, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root, "Promise");
const Promise$2 = Promise$1;
var Set = getNative(root, "Set");
const Set$1 = Set;
var mapTag$1 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$1 = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag$1 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$1 || Map && getTag(new Map()) != mapTag$1 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$1 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;
        case mapCtorString:
          return mapTag$1;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$1;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
const getTag$1 = getTag;
var Uint8Array = root.Uint8Array;
const Uint8Array$1 = Uint8Array;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments$1(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = toKey(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
function basePickBy(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
const pick$1 = pick;
const componentSizes = ["", "default", "small", "large"];
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const SIZE_INJECTION_KEY = Symbol("size");
const useGlobalSize = () => {
  const injectedSize = rn(SIZE_INJECTION_KEY, {});
  return ij(() => {
    return tO(injectedSize.size) || "";
  });
};
const ariaProps = buildProps({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
});
const useAriaProps = (arias) => {
  return pick$1(ariaProps, arias);
};
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");
const useFormItem = () => {
  const form = rn(formContextKey, void 0);
  const formItem = rn(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};
const useFormItemInputId = (props, {
  formItemContext,
  disableIdGeneration,
  disableIdManagement
}) => {
  if (!disableIdGeneration) {
    disableIdGeneration = tk(false);
  }
  if (!disableIdManagement) {
    disableIdManagement = tk(false);
  }
  const inputId = tk();
  let idUnwatch = void 0;
  const isLabeledByFormItem = ij(() => {
    var _a;
    return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && ((_a = formItemContext.inputIds) == null ? void 0 : _a.length) <= 1);
  });
  lf(() => {
    idUnwatch = rM([tj(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
      const newId = id != null ? id : !disableIdGeneration2 ? useId().value : void 0;
      if (newId !== inputId.value) {
        if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
          inputId.value && formItemContext.removeInputId(inputId.value);
          if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) {
            formItemContext.addInputId(newId);
          }
        }
        inputId.value = newId;
      }
    }, { immediate: true });
  });
  lg(() => {
    idUnwatch && idUnwatch();
    if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
      inputId.value && formItemContext.removeInputId(inputId.value);
    }
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};
const useProp = (name) => {
  const vm = ik();
  return ij(() => {
    var _a, _b;
    return (_b = (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$props) == null ? void 0 : _b[name];
  });
};
const useFormSize = (fallback, ignore = {}) => {
  const emptyRef = tk(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig = ignore.global ? emptyRef : useGlobalSize();
  const form = ignore.form ? { size: void 0 } : rn(formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : rn(formItemContextKey, void 0);
  return ij(() => size.value || tO(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig.value || "");
};
const useFormDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = rn(formContextKey, void 0);
  return ij(() => disabled.value || tO(fallback) || (form == null ? void 0 : form.disabled) || false);
};
const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaControls"])
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const useCheckboxDisabled = ({
  model,
  isChecked
}) => {
  const checkboxGroup = rn(checkboxGroupContextKey, void 0);
  const isLimitDisabled = ij(() => {
    var _a, _b;
    const max = (_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
    return !isUndefined(max) && model.value.length >= max && !isChecked.value || !isUndefined(min) && model.value.length <= min && isChecked.value;
  });
  const isDisabled = useFormDisabled(ij(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value));
  return {
    isDisabled,
    isLimitDisabled
  };
};
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const checkboxGroup = rn(checkboxGroupContextKey, void 0);
  const { formItem } = useFormItem();
  const { emit } = ik();
  function getLabeledValue(value) {
    var _a, _b, _c, _d;
    return [true, props.trueValue, props.trueLabel].includes(value) ? (_b = (_a = props.trueValue) != null ? _a : props.trueLabel) != null ? _b : true : (_d = (_c = props.falseValue) != null ? _c : props.falseLabel) != null ? _d : false;
  }
  function emitChangeEvent(checked, e) {
    emit("change", getLabeledValue(checked), e);
  }
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", getLabeledValue(target.checked), e);
  }
  async function onClickRoot(e) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      const eventTargets = e.composedPath();
      const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
      if (!hasLabel) {
        model.value = getLabeledValue([false, props.falseValue, props.falseLabel].includes(model.value));
        await t9();
        emitChangeEvent(model.value, e);
      }
    }
  }
  const validateEvent = ij(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
  rM(() => props.modelValue, () => {
    if (validateEvent.value) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const useCheckboxModel = (props) => {
  const selfModel = tk(false);
  const { emit } = ik();
  const checkboxGroup = rn(checkboxGroupContextKey, void 0);
  const isGroup = ij(() => isUndefined(checkboxGroup) === false);
  const isLimitExceeded = tk(false);
  const model = ij({
    get() {
      var _a, _b;
      return isGroup.value ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a, _b;
      if (isGroup.value && isArray$1(val)) {
        isLimitExceeded.value = ((_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value) && val.length > model.value.length;
        isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _b.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const checkboxGroup = rn(checkboxGroupContextKey, void 0);
  const isFocused = tk(false);
  const actualValue = ij(() => {
    if (!isPropAbsent(props.value)) {
      return props.value;
    }
    return props.label;
  });
  const isChecked = ij(() => {
    const value = model.value;
    if (isBoolean(value)) {
      return value;
    } else if (isArray$1(value)) {
      if (isObject$1(actualValue.value)) {
        return value.map(tS).some((o) => isEqual(o, actualValue.value));
      } else {
        return value.map(tS).includes(actualValue.value);
      }
    } else if (value !== null && value !== void 0) {
      return value === props.trueValue || value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxButtonSize = useFormSize(ij(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }), {
    prop: true
  });
  const checkboxSize = useFormSize(ij(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }));
  const hasOwnLabel = ij(() => {
    return !!slots.default || !isPropAbsent(actualValue.value);
  });
  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel,
    actualValue
  };
};
const useCheckbox = (props, slots) => {
  const { formItem: elFormItem } = useFormItem();
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const {
    isFocused,
    isChecked,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    actualValue
  } = useCheckboxStatus(props, slots, { model });
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  const setStoreValue = () => {
    function addToStore() {
      var _a, _b;
      if (isArray$1(model.value) && !model.value.includes(actualValue.value)) {
        model.value.push(actualValue.value);
      } else {
        model.value = (_b = (_a = props.trueValue) != null ? _a : props.trueLabel) != null ? _b : true;
      }
    }
    props.checked && addToStore();
  };
  setStoreValue();
  useDeprecated({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, ij(() => isGroup.value && isPropAbsent(props.value)));
  useDeprecated({
    from: "true-label",
    replacement: "true-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, ij(() => !!props.trueLabel));
  useDeprecated({
    from: "false-label",
    replacement: "false-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, ij(() => !!props.falseLabel));
  return {
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isFocused,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    model,
    actualValue,
    handleChange,
    onClickRoot
  };
};
const __default__$3 = nj({
  name: "ElCheckbox"
});
const _sfc_main$1d = /* @__PURE__ */ nj({
  ...__default__$3,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = lW();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      isFocused,
      checkboxSize,
      hasOwnLabel,
      model,
      actualValue,
      handleChange,
      onClickRoot
    } = useCheckbox(props, slots);
    const ns = useNamespace("checkbox");
    const compKls = ij(() => {
      return [
        ns.b(),
        ns.m(checkboxSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("bordered", props.border),
        ns.is("checked", isChecked.value)
      ];
    });
    const spanKls = ij(() => {
      return [
        ns.e("input"),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("indeterminate", props.indeterminate),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      return r3(), il(lx(!tO(hasOwnLabel) && tO(isLabeledByFormItem) ? "span" : "label"), {
        class: es(tO(compKls)),
        "aria-controls": _ctx.indeterminate ? _ctx.ariaControls : null,
        onClick: tO(onClickRoot)
      }, {
        default: nf(() => {
          var _a, _b, _c, _d;
          return [
            iu("span", {
              class: es(tO(spanKls))
            }, [
              _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? np((r3(), it("input", {
                key: 0,
                id: tO(inputId),
                "onUpdate:modelValue": ($event) => tw(model) ? model.value = $event : null,
                class: es(tO(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                disabled: tO(isDisabled),
                "true-value": (_b = (_a = _ctx.trueValue) != null ? _a : _ctx.trueLabel) != null ? _b : true,
                "false-value": (_d = (_c = _ctx.falseValue) != null ? _c : _ctx.falseLabel) != null ? _d : false,
                onChange: tO(handleChange),
                onFocus: ($event) => isFocused.value = true,
                onBlur: ($event) => isFocused.value = false,
                onClick: ol(() => {
                }, ["stop"])
              }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [
                [s1, tO(model)]
              ]) : np((r3(), it("input", {
                key: 1,
                id: tO(inputId),
                "onUpdate:modelValue": ($event) => tw(model) ? model.value = $event : null,
                class: es(tO(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                disabled: tO(isDisabled),
                value: tO(actualValue),
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                onChange: tO(handleChange),
                onFocus: ($event) => isFocused.value = true,
                onBlur: ($event) => isFocused.value = false,
                onClick: ol(() => {
                }, ["stop"])
              }, null, 42, ["id", "onUpdate:modelValue", "indeterminate", "disabled", "value", "name", "tabindex", "onChange", "onFocus", "onBlur", "onClick"])), [
                [s1, tO(model)]
              ]),
              iu("span", {
                class: es(tO(ns).e("inner"))
              }, null, 2)
            ], 2),
            tO(hasOwnLabel) ? (r3(), it("span", {
              key: 0,
              class: es(tO(ns).e("label"))
            }, [
              lR(_ctx.$slots, "default"),
              !_ctx.$slots.default ? (r3(), it(r0, { key: 0 }, [
                ih(ep(_ctx.label), 1)
              ], 64)) : iv("v-if", true)
            ], 2)) : iv("v-if", true)
          ];
        }),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["__file", "checkbox.vue"]]);
const __default__$2 = nj({
  name: "ElCheckboxButton"
});
const _sfc_main$1c = /* @__PURE__ */ nj({
  ...__default__$2,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = lW();
    const {
      isFocused,
      isChecked,
      isDisabled,
      checkboxButtonSize,
      model,
      actualValue,
      handleChange
    } = useCheckbox(props, slots);
    const checkboxGroup = rn(checkboxGroupContextKey, void 0);
    const ns = useNamespace("checkbox");
    const activeStyle = ij(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    const labelKls = ij(() => {
      return [
        ns.b("button"),
        ns.bm("button", checkboxButtonSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return r3(), it("label", {
        class: es(tO(labelKls))
      }, [
        _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? np((r3(), it("input", {
          key: 0,
          "onUpdate:modelValue": ($event) => tw(model) ? model.value = $event : null,
          class: es(tO(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: tO(isDisabled),
          "true-value": (_b = (_a = _ctx.trueValue) != null ? _a : _ctx.trueLabel) != null ? _b : true,
          "false-value": (_d = (_c = _ctx.falseValue) != null ? _c : _ctx.falseLabel) != null ? _d : false,
          onChange: tO(handleChange),
          onFocus: ($event) => isFocused.value = true,
          onBlur: ($event) => isFocused.value = false,
          onClick: ol(() => {
          }, ["stop"])
        }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "true-value", "false-value", "onChange", "onFocus", "onBlur", "onClick"])), [
          [s1, tO(model)]
        ]) : np((r3(), it("input", {
          key: 1,
          "onUpdate:modelValue": ($event) => tw(model) ? model.value = $event : null,
          class: es(tO(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: tO(isDisabled),
          value: tO(actualValue),
          onChange: tO(handleChange),
          onFocus: ($event) => isFocused.value = true,
          onBlur: ($event) => isFocused.value = false,
          onClick: ol(() => {
          }, ["stop"])
        }, null, 42, ["onUpdate:modelValue", "name", "tabindex", "disabled", "value", "onChange", "onFocus", "onBlur", "onClick"])), [
          [s1, tO(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (r3(), it("span", {
          key: 2,
          class: es(tO(ns).be("button", "inner")),
          style: en(tO(isChecked) ? tO(activeStyle) : void 0)
        }, [
          lR(_ctx.$slots, "default", {}, () => [
            ih(ep(_ctx.label), 1)
          ])
        ], 6)) : iv("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__file", "checkbox-button.vue"]]);
const checkboxGroupProps = buildProps({
  modelValue: {
    type: definePropType(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: useSizeProp,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isArray$1(val),
  change: (val) => isArray$1(val)
};
const __default__$1 = nj({
  name: "ElCheckboxGroup"
});
const _sfc_main$1b = /* @__PURE__ */ nj({
  ...__default__$1,
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("checkbox");
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = async (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      await t9();
      emit("change", value);
    };
    const modelValue = ij({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    rt(checkboxGroupContextKey, {
      ...pick$1(tF(props), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue,
      changeEvent
    });
    rM(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return r3(), il(lx(_ctx.tag), {
        id: tO(groupId),
        class: es(tO(ns).b("group")),
        role: "group",
        "aria-label": !tO(isLabeledByFormItem) ? _ctx.ariaLabel || "checkbox-group" : void 0,
        "aria-labelledby": tO(isLabeledByFormItem) ? (_a = tO(formItem)) == null ? void 0 : _a.labelId : void 0
      }, {
        default: nf(() => [
          lR(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1b, [["__file", "checkbox-group.vue"]]);
const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
withNoopInstall(CheckboxButton);
withNoopInstall(CheckboxGroup);
const __default__ = nj({
  name: "ElCollapseTransition"
});
const _sfc_main$1a = /* @__PURE__ */ nj({
  ...__default__,
  setup(__props) {
    const ns = useNamespace("collapse-transition");
    const reset = (el) => {
      el.style.maxHeight = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    };
    const on = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        if (el.style.height)
          el.dataset.elExistsHeight = el.style.height;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        requestAnimationFrame(() => {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.dataset.elExistsHeight) {
            el.style.maxHeight = el.dataset.elExistsHeight;
          } else if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
          } else {
            el.style.maxHeight = 0;
          }
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          el.style.overflow = "hidden";
        });
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      enterCancelled(el) {
        reset(el);
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        reset(el);
      },
      leaveCancelled(el) {
        reset(el);
      }
    };
    return (_ctx, _cache) => {
      return r3(), il(i7, ib({
        name: tO(ns).b()
      }, lO(on)), {
        default: nf(() => [
          lR(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["__file", "collapse-transition.vue"]]);
const ElCollapseTransition = withInstall(CollapseTransition);
const selectKey = Symbol("ElSelect");
const NODE_KEY = "$treeNodeId";
const markNodeData = function(node, data) {
  if (!data || data[NODE_KEY])
    return;
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false
  });
};
const getNodeKey = function(key, data) {
  if (!key)
    return data[NODE_KEY];
  return data[key];
};
const handleCurrentChange = (store, emit, setCurrent) => {
  const preCurrentNode = store.value.currentNode;
  setCurrent();
  const currentNode = store.value.currentNode;
  if (preCurrentNode === currentNode)
    return;
  emit("current-change", currentNode ? currentNode.data : null, currentNode);
};
const getChildState = (node) => {
  let all = true;
  let none = true;
  let allWithoutDisable = true;
  for (let i = 0, j = node.length; i < j; i++) {
    const n = node[i];
    if (n.checked !== true || n.indeterminate) {
      all = false;
      if (!n.disabled) {
        allWithoutDisable = false;
      }
    }
    if (n.checked !== false || n.indeterminate) {
      none = false;
    }
  }
  return { all, none, allWithoutDisable, half: !all && !none };
};
const reInitChecked = function(node) {
  if (node.childNodes.length === 0 || node.loading)
    return;
  const { all, none, half } = getChildState(node.childNodes);
  if (all) {
    node.checked = true;
    node.indeterminate = false;
  } else if (half) {
    node.checked = false;
    node.indeterminate = true;
  } else if (none) {
    node.checked = false;
    node.indeterminate = false;
  }
  const parent = node.parent;
  if (!parent || parent.level === 0)
    return;
  if (!node.store.checkStrictly) {
    reInitChecked(parent);
  }
};
const getPropertyFromData = function(node, prop) {
  const props = node.store.props;
  const data = node.data || {};
  const config = props[prop];
  if (isFunction$1(config)) {
    return config(data, node);
  } else if (isString(config)) {
    return data[config];
  } else if (isUndefined(config)) {
    const dataProp = data[prop];
    return dataProp === void 0 ? "" : dataProp;
  }
};
let nodeIdSeed = 0;
class Node {
  constructor(options) {
    this.id = nodeIdSeed++;
    this.text = null;
    this.checked = false;
    this.indeterminate = false;
    this.data = null;
    this.expanded = false;
    this.parent = null;
    this.visible = true;
    this.isCurrent = false;
    this.canFocus = false;
    for (const name in options) {
      if (hasOwn(options, name)) {
        this[name] = options[name];
      }
    }
    this.level = 0;
    this.loaded = false;
    this.childNodes = [];
    this.loading = false;
    if (this.parent) {
      this.level = this.parent.level + 1;
    }
  }
  initialize() {
    const store = this.store;
    if (!store) {
      throw new Error("[Node]store is required!");
    }
    store.registerNode(this);
    const props = store.props;
    if (props && typeof props.isLeaf !== "undefined") {
      const isLeaf = getPropertyFromData(this, "isLeaf");
      if (isBoolean(isLeaf)) {
        this.isLeafByUser = isLeaf;
      }
    }
    if (store.lazy !== true && this.data) {
      this.setData(this.data);
      if (store.defaultExpandAll) {
        this.expanded = true;
        this.canFocus = true;
      }
    } else if (this.level > 0 && store.lazy && store.defaultExpandAll && !this.isLeafByUser) {
      this.expand();
    }
    if (!isArray$1(this.data)) {
      markNodeData(this, this.data);
    }
    if (!this.data)
      return;
    const defaultExpandedKeys = store.defaultExpandedKeys;
    const key = store.key;
    if (key && defaultExpandedKeys && defaultExpandedKeys.includes(this.key)) {
      this.expand(null, store.autoExpandParent);
    }
    if (key && store.currentNodeKey !== void 0 && this.key === store.currentNodeKey) {
      store.currentNode = this;
      store.currentNode.isCurrent = true;
    }
    if (store.lazy) {
      store._initDefaultCheckedNode(this);
    }
    this.updateLeafState();
    if (this.parent && (this.level === 1 || this.parent.expanded === true))
      this.canFocus = true;
  }
  setData(data) {
    if (!isArray$1(data)) {
      markNodeData(this, data);
    }
    this.data = data;
    this.childNodes = [];
    let children;
    if (this.level === 0 && isArray$1(this.data)) {
      children = this.data;
    } else {
      children = getPropertyFromData(this, "children") || [];
    }
    for (let i = 0, j = children.length; i < j; i++) {
      this.insertChild({ data: children[i] });
    }
  }
  get label() {
    return getPropertyFromData(this, "label");
  }
  get key() {
    const nodeKey = this.store.key;
    if (this.data)
      return this.data[nodeKey];
    return null;
  }
  get disabled() {
    return getPropertyFromData(this, "disabled");
  }
  get nextSibling() {
    const parent = this.parent;
    if (parent) {
      const index2 = parent.childNodes.indexOf(this);
      if (index2 > -1) {
        return parent.childNodes[index2 + 1];
      }
    }
    return null;
  }
  get previousSibling() {
    const parent = this.parent;
    if (parent) {
      const index2 = parent.childNodes.indexOf(this);
      if (index2 > -1) {
        return index2 > 0 ? parent.childNodes[index2 - 1] : null;
      }
    }
    return null;
  }
  contains(target, deep = true) {
    return (this.childNodes || []).some((child) => child === target || deep && child.contains(target));
  }
  remove() {
    const parent = this.parent;
    if (parent) {
      parent.removeChild(this);
    }
  }
  insertChild(child, index2, batch) {
    if (!child)
      throw new Error("InsertChild error: child is required.");
    if (!(child instanceof Node)) {
      if (!batch) {
        const children = this.getChildren(true);
        if (!children.includes(child.data)) {
          if (isUndefined(index2) || index2 < 0) {
            children.push(child.data);
          } else {
            children.splice(index2, 0, child.data);
          }
        }
      }
      Object.assign(child, {
        parent: this,
        store: this.store
      });
      child = tp(new Node(child));
      if (child instanceof Node) {
        child.initialize();
      }
    }
    child.level = this.level + 1;
    if (isUndefined(index2) || index2 < 0) {
      this.childNodes.push(child);
    } else {
      this.childNodes.splice(index2, 0, child);
    }
    this.updateLeafState();
  }
  insertBefore(child, ref) {
    let index2;
    if (ref) {
      index2 = this.childNodes.indexOf(ref);
    }
    this.insertChild(child, index2);
  }
  insertAfter(child, ref) {
    let index2;
    if (ref) {
      index2 = this.childNodes.indexOf(ref);
      if (index2 !== -1)
        index2 += 1;
    }
    this.insertChild(child, index2);
  }
  removeChild(child) {
    const children = this.getChildren() || [];
    const dataIndex = children.indexOf(child.data);
    if (dataIndex > -1) {
      children.splice(dataIndex, 1);
    }
    const index2 = this.childNodes.indexOf(child);
    if (index2 > -1) {
      this.store && this.store.deregisterNode(child);
      child.parent = null;
      this.childNodes.splice(index2, 1);
    }
    this.updateLeafState();
  }
  removeChildByData(data) {
    let targetNode = null;
    for (let i = 0; i < this.childNodes.length; i++) {
      if (this.childNodes[i].data === data) {
        targetNode = this.childNodes[i];
        break;
      }
    }
    if (targetNode) {
      this.removeChild(targetNode);
    }
  }
  expand(callback, expandParent) {
    const done = () => {
      if (expandParent) {
        let parent = this.parent;
        while (parent.level > 0) {
          parent.expanded = true;
          parent = parent.parent;
        }
      }
      this.expanded = true;
      if (callback)
        callback();
      this.childNodes.forEach((item) => {
        item.canFocus = true;
      });
    };
    if (this.shouldLoadData()) {
      this.loadData((data) => {
        if (isArray$1(data)) {
          if (this.checked) {
            this.setChecked(true, true);
          } else if (!this.store.checkStrictly) {
            reInitChecked(this);
          }
          done();
        }
      });
    } else {
      done();
    }
  }
  doCreateChildren(array, defaultProps = {}) {
    array.forEach((item) => {
      this.insertChild(Object.assign({ data: item }, defaultProps), void 0, true);
    });
  }
  collapse() {
    this.expanded = false;
    this.childNodes.forEach((item) => {
      item.canFocus = false;
    });
  }
  shouldLoadData() {
    return this.store.lazy === true && this.store.load && !this.loaded;
  }
  updateLeafState() {
    if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== "undefined") {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    const childNodes = this.childNodes;
    if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
      this.isLeaf = !childNodes || childNodes.length === 0;
      return;
    }
    this.isLeaf = false;
  }
  setChecked(value, deep, recursion, passValue) {
    this.indeterminate = value === "half";
    this.checked = value === true;
    if (this.store.checkStrictly)
      return;
    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      const { all, allWithoutDisable } = getChildState(this.childNodes);
      if (!this.isLeaf && !all && allWithoutDisable) {
        this.checked = false;
        value = false;
      }
      const handleDescendants = () => {
        if (deep) {
          const childNodes = this.childNodes;
          for (let i = 0, j = childNodes.length; i < j; i++) {
            const child = childNodes[i];
            passValue = passValue || value !== false;
            const isCheck = child.disabled ? child.checked : passValue;
            child.setChecked(isCheck, deep, true, passValue);
          }
          const { half, all: all2 } = getChildState(childNodes);
          if (!all2) {
            this.checked = all2;
            this.indeterminate = half;
          }
        }
      };
      if (this.shouldLoadData()) {
        this.loadData(() => {
          handleDescendants();
          reInitChecked(this);
        }, {
          checked: value !== false
        });
        return;
      } else {
        handleDescendants();
      }
    }
    const parent = this.parent;
    if (!parent || parent.level === 0)
      return;
    if (!recursion) {
      reInitChecked(parent);
    }
  }
  getChildren(forceInit = false) {
    if (this.level === 0)
      return this.data;
    const data = this.data;
    if (!data)
      return null;
    const props = this.store.props;
    let children = "children";
    if (props) {
      children = props.children || "children";
    }
    if (data[children] === void 0) {
      data[children] = null;
    }
    if (forceInit && !data[children]) {
      data[children] = [];
    }
    return data[children];
  }
  updateChildren() {
    const newData = this.getChildren() || [];
    const oldData = this.childNodes.map((node) => node.data);
    const newDataMap = {};
    const newNodes = [];
    newData.forEach((item, index2) => {
      const key = item[NODE_KEY];
      const isNodeExists = !!key && oldData.findIndex((data) => data[NODE_KEY] === key) >= 0;
      if (isNodeExists) {
        newDataMap[key] = { index: index2, data: item };
      } else {
        newNodes.push({ index: index2, data: item });
      }
    });
    if (!this.store.lazy) {
      oldData.forEach((item) => {
        if (!newDataMap[item[NODE_KEY]])
          this.removeChildByData(item);
      });
    }
    newNodes.forEach(({ index: index2, data }) => {
      this.insertChild({ data }, index2);
    });
    this.updateLeafState();
  }
  loadData(callback, defaultProps = {}) {
    if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(defaultProps).length)) {
      this.loading = true;
      const resolve = (children) => {
        this.childNodes = [];
        this.doCreateChildren(children, defaultProps);
        this.loaded = true;
        this.loading = false;
        this.updateLeafState();
        if (callback) {
          callback.call(this, children);
        }
      };
      const reject = () => {
        this.loading = false;
      };
      this.store.load(this, resolve, reject);
    } else {
      if (callback) {
        callback.call(this);
      }
    }
  }
  eachNode(callback) {
    const arr = [this];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.childNodes);
      callback(node);
    }
  }
  reInitChecked() {
    if (this.store.checkStrictly)
      return;
    reInitChecked(this);
  }
}
class TreeStore {
  constructor(options) {
    this.currentNode = null;
    this.currentNodeKey = null;
    for (const option in options) {
      if (hasOwn(options, option)) {
        this[option] = options[option];
      }
    }
    this.nodesMap = {};
  }
  initialize() {
    this.root = new Node({
      data: this.data,
      store: this
    });
    this.root.initialize();
    if (this.lazy && this.load) {
      const loadFn = this.load;
      loadFn(this.root, (data) => {
        this.root.doCreateChildren(data);
        this._initDefaultCheckedNodes();
      });
    } else {
      this._initDefaultCheckedNodes();
    }
  }
  filter(value) {
    const filterNodeMethod = this.filterNodeMethod;
    const lazy = this.lazy;
    const traverse = function(node) {
      const childNodes = node.root ? node.root.childNodes : node.childNodes;
      childNodes.forEach((child) => {
        child.visible = filterNodeMethod.call(child, value, child.data, child);
        traverse(child);
      });
      if (!node.visible && childNodes.length) {
        let allHidden = true;
        allHidden = !childNodes.some((child) => child.visible);
        if (node.root) {
          node.root.visible = allHidden === false;
        } else {
          node.visible = allHidden === false;
        }
      }
      if (!value)
        return;
      if (node.visible && !node.isLeaf) {
        if (!lazy || node.loaded) {
          node.expand();
        }
      }
    };
    traverse(this);
  }
  setData(newVal) {
    const instanceChanged = newVal !== this.root.data;
    if (instanceChanged) {
      this.nodesMap = {};
      this.root.setData(newVal);
      this._initDefaultCheckedNodes();
      this.setCurrentNodeKey(this.currentNodeKey);
    } else {
      this.root.updateChildren();
    }
  }
  getNode(data) {
    if (data instanceof Node)
      return data;
    const key = isObject$1(data) ? getNodeKey(this.key, data) : data;
    return this.nodesMap[key] || null;
  }
  insertBefore(data, refData) {
    const refNode = this.getNode(refData);
    refNode.parent.insertBefore({ data }, refNode);
  }
  insertAfter(data, refData) {
    const refNode = this.getNode(refData);
    refNode.parent.insertAfter({ data }, refNode);
  }
  remove(data) {
    const node = this.getNode(data);
    if (node && node.parent) {
      if (node === this.currentNode) {
        this.currentNode = null;
      }
      node.parent.removeChild(node);
    }
  }
  append(data, parentData) {
    const parentNode = !isPropAbsent(parentData) ? this.getNode(parentData) : this.root;
    if (parentNode) {
      parentNode.insertChild({ data });
    }
  }
  _initDefaultCheckedNodes() {
    const defaultCheckedKeys = this.defaultCheckedKeys || [];
    const nodesMap = this.nodesMap;
    defaultCheckedKeys.forEach((checkedKey) => {
      const node = nodesMap[checkedKey];
      if (node) {
        node.setChecked(true, !this.checkStrictly);
      }
    });
  }
  _initDefaultCheckedNode(node) {
    const defaultCheckedKeys = this.defaultCheckedKeys || [];
    if (defaultCheckedKeys.includes(node.key)) {
      node.setChecked(true, !this.checkStrictly);
    }
  }
  setDefaultCheckedKey(newVal) {
    if (newVal !== this.defaultCheckedKeys) {
      this.defaultCheckedKeys = newVal;
      this._initDefaultCheckedNodes();
    }
  }
  registerNode(node) {
    const key = this.key;
    if (!node || !node.data)
      return;
    if (!key) {
      this.nodesMap[node.id] = node;
    } else {
      const nodeKey = node.key;
      if (nodeKey !== void 0)
        this.nodesMap[node.key] = node;
    }
  }
  deregisterNode(node) {
    const key = this.key;
    if (!key || !node || !node.data)
      return;
    node.childNodes.forEach((child) => {
      this.deregisterNode(child);
    });
    delete this.nodesMap[node.key];
  }
  getCheckedNodes(leafOnly = false, includeHalfChecked = false) {
    const checkedNodes = [];
    const traverse = function(node) {
      const childNodes = node.root ? node.root.childNodes : node.childNodes;
      childNodes.forEach((child) => {
        if ((child.checked || includeHalfChecked && child.indeterminate) && (!leafOnly || leafOnly && child.isLeaf)) {
          checkedNodes.push(child.data);
        }
        traverse(child);
      });
    };
    traverse(this);
    return checkedNodes;
  }
  getCheckedKeys(leafOnly = false) {
    return this.getCheckedNodes(leafOnly).map((data) => (data || {})[this.key]);
  }
  getHalfCheckedNodes() {
    const nodes = [];
    const traverse = function(node) {
      const childNodes = node.root ? node.root.childNodes : node.childNodes;
      childNodes.forEach((child) => {
        if (child.indeterminate) {
          nodes.push(child.data);
        }
        traverse(child);
      });
    };
    traverse(this);
    return nodes;
  }
  getHalfCheckedKeys() {
    return this.getHalfCheckedNodes().map((data) => (data || {})[this.key]);
  }
  _getAllNodes() {
    const allNodes = [];
    const nodesMap = this.nodesMap;
    for (const nodeKey in nodesMap) {
      if (hasOwn(nodesMap, nodeKey)) {
        allNodes.push(nodesMap[nodeKey]);
      }
    }
    return allNodes;
  }
  updateChildren(key, data) {
    const node = this.nodesMap[key];
    if (!node)
      return;
    const childNodes = node.childNodes;
    for (let i = childNodes.length - 1; i >= 0; i--) {
      const child = childNodes[i];
      this.remove(child.data);
    }
    for (let i = 0, j = data.length; i < j; i++) {
      const child = data[i];
      this.append(child, node.data);
    }
  }
  _setCheckedKeys(key, leafOnly = false, checkedKeys) {
    const allNodes = this._getAllNodes().sort((a, b) => a.level - b.level);
    const cache = /* @__PURE__ */ Object.create(null);
    const keys2 = Object.keys(checkedKeys);
    allNodes.forEach((node) => node.setChecked(false, false));
    const cacheCheckedChild = (node) => {
      node.childNodes.forEach((child) => {
        var _a;
        cache[child.data[key]] = true;
        if ((_a = child.childNodes) == null ? void 0 : _a.length) {
          cacheCheckedChild(child);
        }
      });
    };
    for (let i = 0, j = allNodes.length; i < j; i++) {
      const node = allNodes[i];
      const nodeKey = node.data[key].toString();
      const checked = keys2.includes(nodeKey);
      if (!checked) {
        if (node.checked && !cache[nodeKey]) {
          node.setChecked(false, false);
        }
        continue;
      }
      if (node.childNodes.length) {
        cacheCheckedChild(node);
      }
      if (node.isLeaf || this.checkStrictly) {
        node.setChecked(true, false);
        continue;
      }
      node.setChecked(true, true);
      if (leafOnly) {
        node.setChecked(false, false);
        const traverse = function(node2) {
          const childNodes = node2.childNodes;
          childNodes.forEach((child) => {
            if (!child.isLeaf) {
              child.setChecked(false, false);
            }
            traverse(child);
          });
        };
        traverse(node);
      }
    }
  }
  setCheckedNodes(array, leafOnly = false) {
    const key = this.key;
    const checkedKeys = {};
    array.forEach((item) => {
      checkedKeys[(item || {})[key]] = true;
    });
    this._setCheckedKeys(key, leafOnly, checkedKeys);
  }
  setCheckedKeys(keys2, leafOnly = false) {
    this.defaultCheckedKeys = keys2;
    const key = this.key;
    const checkedKeys = {};
    keys2.forEach((key2) => {
      checkedKeys[key2] = true;
    });
    this._setCheckedKeys(key, leafOnly, checkedKeys);
  }
  setDefaultExpandedKeys(keys2) {
    keys2 = keys2 || [];
    this.defaultExpandedKeys = keys2;
    keys2.forEach((key) => {
      const node = this.getNode(key);
      if (node)
        node.expand(null, this.autoExpandParent);
    });
  }
  setChecked(data, checked, deep) {
    const node = this.getNode(data);
    if (node) {
      node.setChecked(!!checked, deep);
    }
  }
  getCurrentNode() {
    return this.currentNode;
  }
  setCurrentNode(currentNode) {
    const prevCurrentNode = this.currentNode;
    if (prevCurrentNode) {
      prevCurrentNode.isCurrent = false;
    }
    this.currentNode = currentNode;
    this.currentNode.isCurrent = true;
  }
  setUserCurrentNode(node, shouldAutoExpandParent = true) {
    const key = node[this.key];
    const currNode = this.nodesMap[key];
    this.setCurrentNode(currNode);
    if (shouldAutoExpandParent && this.currentNode.level > 1) {
      this.currentNode.parent.expand(null, true);
    }
  }
  setCurrentNodeKey(key, shouldAutoExpandParent = true) {
    this.currentNodeKey = key;
    if (key === null || key === void 0) {
      this.currentNode && (this.currentNode.isCurrent = false);
      this.currentNode = null;
      return;
    }
    const node = this.getNode(key);
    if (node) {
      this.setCurrentNode(node);
      if (shouldAutoExpandParent && this.currentNode.level > 1) {
        this.currentNode.parent.expand(null, true);
      }
    }
  }
}
const _sfc_main$19 = nj({
  name: "ElTreeNodeContent",
  props: {
    node: {
      type: Object,
      required: true
    },
    renderContent: Function
  },
  setup(props) {
    const ns = useNamespace("tree");
    const nodeInstance = rn("NodeInstance");
    const tree = rn("RootTree");
    return () => {
      const node = props.node;
      const { data, store } = node;
      return props.renderContent ? props.renderContent(iB, { _self: nodeInstance, node, data, store }) : lR(tree.ctx.slots, "default", { node, data }, () => [
        iB("span", { class: ns.be("node", "label") }, [node.label])
      ]);
    };
  }
});
var NodeContent = /* @__PURE__ */ _export_sfc(_sfc_main$19, [["__file", "tree-node-content.vue"]]);
function useNodeExpandEventBroadcast(props) {
  const parentNodeMap = rn("TreeNodeMap", null);
  const currentNodeMap = {
    treeNodeExpand: (node) => {
      if (props.node !== node) {
        props.node.collapse();
      }
    },
    children: []
  };
  if (parentNodeMap) {
    parentNodeMap.children.push(currentNodeMap);
  }
  rt("TreeNodeMap", currentNodeMap);
  return {
    broadcastExpanded: (node) => {
      if (!props.accordion)
        return;
      for (const childNode of currentNodeMap.children) {
        childNode.treeNodeExpand(node);
      }
    }
  };
}
const dragEventsKey = Symbol("dragEvents");
function useDragNodeHandler({ props, ctx, el$, dropIndicator$, store }) {
  const ns = useNamespace("tree");
  const dragState = tk({
    showDropIndicator: false,
    draggingNode: null,
    dropNode: null,
    allowDrop: true,
    dropType: null
  });
  const treeNodeDragStart = ({ event, treeNode }) => {
    if (isFunction$1(props.allowDrag) && !props.allowDrag(treeNode.node)) {
      event.preventDefault();
      return false;
    }
    event.dataTransfer.effectAllowed = "move";
    try {
      event.dataTransfer.setData("text/plain", "");
    } catch (e) {
    }
    dragState.value.draggingNode = treeNode;
    ctx.emit("node-drag-start", treeNode.node, event);
  };
  const treeNodeDragOver = ({ event, treeNode }) => {
    const dropNode = treeNode;
    const oldDropNode = dragState.value.dropNode;
    if (oldDropNode && oldDropNode.node.id !== dropNode.node.id) {
      removeClass(oldDropNode.$el, ns.is("drop-inner"));
    }
    const draggingNode = dragState.value.draggingNode;
    if (!draggingNode || !dropNode)
      return;
    let dropPrev = true;
    let dropInner = true;
    let dropNext = true;
    let userAllowDropInner = true;
    if (isFunction$1(props.allowDrop)) {
      dropPrev = props.allowDrop(draggingNode.node, dropNode.node, "prev");
      userAllowDropInner = dropInner = props.allowDrop(draggingNode.node, dropNode.node, "inner");
      dropNext = props.allowDrop(draggingNode.node, dropNode.node, "next");
    }
    event.dataTransfer.dropEffect = dropInner || dropPrev || dropNext ? "move" : "none";
    if ((dropPrev || dropInner || dropNext) && (oldDropNode == null ? void 0 : oldDropNode.node.id) !== dropNode.node.id) {
      if (oldDropNode) {
        ctx.emit("node-drag-leave", draggingNode.node, oldDropNode.node, event);
      }
      ctx.emit("node-drag-enter", draggingNode.node, dropNode.node, event);
    }
    if (dropPrev || dropInner || dropNext) {
      dragState.value.dropNode = dropNode;
    } else {
      dragState.value.dropNode = null;
    }
    if (dropNode.node.nextSibling === draggingNode.node) {
      dropNext = false;
    }
    if (dropNode.node.previousSibling === draggingNode.node) {
      dropPrev = false;
    }
    if (dropNode.node.contains(draggingNode.node, false)) {
      dropInner = false;
    }
    if (draggingNode.node === dropNode.node || draggingNode.node.contains(dropNode.node)) {
      dropPrev = false;
      dropInner = false;
      dropNext = false;
    }
    const targetPosition = dropNode.$el.querySelector(`.${ns.be("node", "content")}`).getBoundingClientRect();
    const treePosition = el$.value.getBoundingClientRect();
    let dropType;
    const prevPercent = dropPrev ? dropInner ? 0.25 : dropNext ? 0.45 : 1 : -1;
    const nextPercent = dropNext ? dropInner ? 0.75 : dropPrev ? 0.55 : 0 : 1;
    let indicatorTop = -9999;
    const distance = event.clientY - targetPosition.top;
    if (distance < targetPosition.height * prevPercent) {
      dropType = "before";
    } else if (distance > targetPosition.height * nextPercent) {
      dropType = "after";
    } else if (dropInner) {
      dropType = "inner";
    } else {
      dropType = "none";
    }
    const iconPosition = dropNode.$el.querySelector(`.${ns.be("node", "expand-icon")}`).getBoundingClientRect();
    const dropIndicator = dropIndicator$.value;
    if (dropType === "before") {
      indicatorTop = iconPosition.top - treePosition.top;
    } else if (dropType === "after") {
      indicatorTop = iconPosition.bottom - treePosition.top;
    }
    dropIndicator.style.top = `${indicatorTop}px`;
    dropIndicator.style.left = `${iconPosition.right - treePosition.left}px`;
    if (dropType === "inner") {
      addClass(dropNode.$el, ns.is("drop-inner"));
    } else {
      removeClass(dropNode.$el, ns.is("drop-inner"));
    }
    dragState.value.showDropIndicator = dropType === "before" || dropType === "after";
    dragState.value.allowDrop = dragState.value.showDropIndicator || userAllowDropInner;
    dragState.value.dropType = dropType;
    ctx.emit("node-drag-over", draggingNode.node, dropNode.node, event);
  };
  const treeNodeDragEnd = (event) => {
    const { draggingNode, dropType, dropNode } = dragState.value;
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move";
    }
    if (draggingNode && dropNode) {
      const draggingNodeCopy = { data: draggingNode.node.data };
      if (dropType !== "none") {
        draggingNode.node.remove();
      }
      if (dropType === "before") {
        dropNode.node.parent.insertBefore(draggingNodeCopy, dropNode.node);
      } else if (dropType === "after") {
        dropNode.node.parent.insertAfter(draggingNodeCopy, dropNode.node);
      } else if (dropType === "inner") {
        dropNode.node.insertChild(draggingNodeCopy);
      }
      if (dropType !== "none") {
        store.value.registerNode(draggingNodeCopy);
        if (store.value.key) {
          draggingNode.node.eachNode((node) => {
            var _a;
            (_a = store.value.nodesMap[node.data[store.value.key]]) == null ? void 0 : _a.setChecked(node.checked, !store.value.checkStrictly);
          });
        }
      }
      removeClass(dropNode.$el, ns.is("drop-inner"));
      ctx.emit("node-drag-end", draggingNode.node, dropNode.node, dropType, event);
      if (dropType !== "none") {
        ctx.emit("node-drop", draggingNode.node, dropNode.node, dropType, event);
      }
    }
    if (draggingNode && !dropNode) {
      ctx.emit("node-drag-end", draggingNode.node, null, dropType, event);
    }
    dragState.value.showDropIndicator = false;
    dragState.value.draggingNode = null;
    dragState.value.dropNode = null;
    dragState.value.allowDrop = true;
  };
  rt(dragEventsKey, {
    treeNodeDragStart,
    treeNodeDragOver,
    treeNodeDragEnd
  });
  return {
    dragState
  };
}
const _sfc_main$18 = nj({
  name: "ElTreeNode",
  components: {
    ElCollapseTransition,
    ElCheckbox,
    NodeContent,
    ElIcon,
    Loading: loading_default
  },
  props: {
    node: {
      type: Node,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  emits: ["node-expand"],
  setup(props, ctx) {
    const ns = useNamespace("tree");
    const { broadcastExpanded } = useNodeExpandEventBroadcast(props);
    const tree = rn("RootTree");
    const expanded = tk(false);
    const childNodeRendered = tk(false);
    const oldChecked = tk(null);
    const oldIndeterminate = tk(null);
    const node$ = tk(null);
    const dragEvents = rn(dragEventsKey);
    const instance = ik();
    rt("NodeInstance", instance);
    if (props.node.expanded) {
      expanded.value = true;
      childNodeRendered.value = true;
    }
    const childrenKey = tree.props.props["children"] || "children";
    rM(() => {
      const children = props.node.data[childrenKey];
      return children && [...children];
    }, () => {
      props.node.updateChildren();
    });
    rM(() => props.node.indeterminate, (val) => {
      handleSelectChange(props.node.checked, val);
    });
    rM(() => props.node.checked, (val) => {
      handleSelectChange(val, props.node.indeterminate);
    });
    rM(() => props.node.childNodes.length, () => props.node.reInitChecked());
    rM(() => props.node.expanded, (val) => {
      t9(() => expanded.value = val);
      if (val) {
        childNodeRendered.value = true;
      }
    });
    const getNodeKey$1 = (node) => {
      return getNodeKey(tree.props.nodeKey, node.data);
    };
    const getNodeClass = (node) => {
      const nodeClassFunc = props.props.class;
      if (!nodeClassFunc) {
        return {};
      }
      let className;
      if (isFunction$1(nodeClassFunc)) {
        const { data } = node;
        className = nodeClassFunc(data, node);
      } else {
        className = nodeClassFunc;
      }
      if (isString(className)) {
        return { [className]: true };
      } else {
        return className;
      }
    };
    const handleSelectChange = (checked, indeterminate) => {
      if (oldChecked.value !== checked || oldIndeterminate.value !== indeterminate) {
        tree.ctx.emit("check-change", props.node.data, checked, indeterminate);
      }
      oldChecked.value = checked;
      oldIndeterminate.value = indeterminate;
    };
    const handleClick = (e) => {
      handleCurrentChange(tree.store, tree.ctx.emit, () => {
        var _a;
        const nodeKeyProp = (_a = tree == null ? void 0 : tree.props) == null ? void 0 : _a.nodeKey;
        if (nodeKeyProp) {
          const curNodeKey = getNodeKey$1(props.node);
          tree.store.value.setCurrentNodeKey(curNodeKey);
        } else {
          tree.store.value.setCurrentNode(props.node);
        }
      });
      tree.currentNode.value = props.node;
      if (tree.props.expandOnClickNode) {
        handleExpandIconClick();
      }
      if (tree.props.checkOnClickNode && !props.node.disabled) {
        handleCheckChange(null, {
          target: { checked: !props.node.checked }
        });
      }
      tree.ctx.emit("node-click", props.node.data, props.node, instance, e);
    };
    const handleContextMenu = (event) => {
      if (tree.instance.vnode.props["onNodeContextmenu"]) {
        event.stopPropagation();
        event.preventDefault();
      }
      tree.ctx.emit("node-contextmenu", event, props.node.data, props.node, instance);
    };
    const handleExpandIconClick = () => {
      if (props.node.isLeaf)
        return;
      if (expanded.value) {
        tree.ctx.emit("node-collapse", props.node.data, props.node, instance);
        props.node.collapse();
      } else {
        props.node.expand(() => {
          ctx.emit("node-expand", props.node.data, props.node, instance);
        });
      }
    };
    const handleCheckChange = (value, ev) => {
      props.node.setChecked(ev.target.checked, !tree.props.checkStrictly);
      t9(() => {
        const store = tree.store.value;
        tree.ctx.emit("check", props.node.data, {
          checkedNodes: store.getCheckedNodes(),
          checkedKeys: store.getCheckedKeys(),
          halfCheckedNodes: store.getHalfCheckedNodes(),
          halfCheckedKeys: store.getHalfCheckedKeys()
        });
      });
    };
    const handleChildNodeExpand = (nodeData, node, instance2) => {
      broadcastExpanded(node);
      tree.ctx.emit("node-expand", nodeData, node, instance2);
    };
    const handleDragStart = (event) => {
      if (!tree.props.draggable)
        return;
      dragEvents.treeNodeDragStart({ event, treeNode: props });
    };
    const handleDragOver = (event) => {
      event.preventDefault();
      if (!tree.props.draggable)
        return;
      dragEvents.treeNodeDragOver({
        event,
        treeNode: { $el: node$.value, node: props.node }
      });
    };
    const handleDrop = (event) => {
      event.preventDefault();
    };
    const handleDragEnd = (event) => {
      if (!tree.props.draggable)
        return;
      dragEvents.treeNodeDragEnd(event);
    };
    return {
      ns,
      node$,
      tree,
      expanded,
      childNodeRendered,
      oldChecked,
      oldIndeterminate,
      getNodeKey: getNodeKey$1,
      getNodeClass,
      handleSelectChange,
      handleClick,
      handleContextMenu,
      handleExpandIconClick,
      handleCheckChange,
      handleChildNodeExpand,
      handleDragStart,
      handleDragOver,
      handleDrop,
      handleDragEnd,
      CaretRight: caret_right_default
    };
  }
});
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = lS("el-icon");
  const _component_el_checkbox = lS("el-checkbox");
  const _component_loading = lS("loading");
  const _component_node_content = lS("node-content");
  const _component_el_tree_node = lS("el-tree-node");
  const _component_el_collapse_transition = lS("el-collapse-transition");
  return np((r3(), it("div", {
    ref: "node$",
    class: es([
      _ctx.ns.b("node"),
      _ctx.ns.is("expanded", _ctx.expanded),
      _ctx.ns.is("current", _ctx.node.isCurrent),
      _ctx.ns.is("hidden", !_ctx.node.visible),
      _ctx.ns.is("focusable", !_ctx.node.disabled),
      _ctx.ns.is("checked", !_ctx.node.disabled && _ctx.node.checked),
      _ctx.getNodeClass(_ctx.node)
    ]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": _ctx.expanded,
    "aria-disabled": _ctx.node.disabled,
    "aria-checked": _ctx.node.checked,
    draggable: _ctx.tree.props.draggable,
    "data-key": _ctx.getNodeKey(_ctx.node),
    onClick: ol(_ctx.handleClick, ["stop"]),
    onContextmenu: _ctx.handleContextMenu,
    onDragstart: ol(_ctx.handleDragStart, ["stop"]),
    onDragover: ol(_ctx.handleDragOver, ["stop"]),
    onDragend: ol(_ctx.handleDragEnd, ["stop"]),
    onDrop: ol(_ctx.handleDrop, ["stop"])
  }, [
    iu("div", {
      class: es(_ctx.ns.be("node", "content")),
      style: en({ paddingLeft: (_ctx.node.level - 1) * _ctx.tree.props.indent + "px" })
    }, [
      _ctx.tree.props.icon || _ctx.CaretRight ? (r3(), il(_component_el_icon, {
        key: 0,
        class: es([
          _ctx.ns.be("node", "expand-icon"),
          _ctx.ns.is("leaf", _ctx.node.isLeaf),
          {
            expanded: !_ctx.node.isLeaf && _ctx.expanded
          }
        ]),
        onClick: ol(_ctx.handleExpandIconClick, ["stop"])
      }, {
        default: nf(() => [
          (r3(), il(lx(_ctx.tree.props.icon || _ctx.CaretRight)))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : iv("v-if", true),
      _ctx.showCheckbox ? (r3(), il(_component_el_checkbox, {
        key: 1,
        "model-value": _ctx.node.checked,
        indeterminate: _ctx.node.indeterminate,
        disabled: !!_ctx.node.disabled,
        onClick: ol(() => {
        }, ["stop"]),
        onChange: _ctx.handleCheckChange
      }, null, 8, ["model-value", "indeterminate", "disabled", "onClick", "onChange"])) : iv("v-if", true),
      _ctx.node.loading ? (r3(), il(_component_el_icon, {
        key: 2,
        class: es([_ctx.ns.be("node", "loading-icon"), _ctx.ns.is("loading")])
      }, {
        default: nf(() => [
          ic(_component_loading)
        ]),
        _: 1
      }, 8, ["class"])) : iv("v-if", true),
      ic(_component_node_content, {
        node: _ctx.node,
        "render-content": _ctx.renderContent
      }, null, 8, ["node", "render-content"])
    ], 6),
    ic(_component_el_collapse_transition, null, {
      default: nf(() => [
        !_ctx.renderAfterExpand || _ctx.childNodeRendered ? np((r3(), it("div", {
          key: 0,
          class: es(_ctx.ns.be("node", "children")),
          role: "group",
          "aria-expanded": _ctx.expanded
        }, [
          (r3(true), it(r0, null, lT(_ctx.node.childNodes, (child) => {
            return r3(), il(_component_el_tree_node, {
              key: _ctx.getNodeKey(child),
              "render-content": _ctx.renderContent,
              "render-after-expand": _ctx.renderAfterExpand,
              "show-checkbox": _ctx.showCheckbox,
              node: child,
              accordion: _ctx.accordion,
              props: _ctx.props,
              onNodeExpand: _ctx.handleChildNodeExpand
            }, null, 8, ["render-content", "render-after-expand", "show-checkbox", "node", "accordion", "props", "onNodeExpand"]);
          }), 128))
        ], 10, ["aria-expanded"])), [
          [sh, _ctx.expanded]
        ]) : iv("v-if", true)
      ]),
      _: 1
    })
  ], 42, ["aria-expanded", "aria-disabled", "aria-checked", "draggable", "data-key", "onClick", "onContextmenu", "onDragstart", "onDragover", "onDragend", "onDrop"])), [
    [sh, _ctx.node.visible]
  ]);
}
var ElTreeNode = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["render", _sfc_render$k], ["__file", "tree-node.vue"]]);
function useKeydown({ el$ }, store) {
  const ns = useNamespace("tree");
  const treeItems = tT([]);
  const checkboxItems = tT([]);
  lf(() => {
    initTabIndex();
  });
  ld(() => {
    treeItems.value = Array.from(el$.value.querySelectorAll("[role=treeitem]"));
    checkboxItems.value = Array.from(el$.value.querySelectorAll("input[type=checkbox]"));
  });
  rM(checkboxItems, (val) => {
    val.forEach((checkbox) => {
      checkbox.setAttribute("tabindex", "-1");
    });
  });
  const handleKeydown = (ev) => {
    const currentItem = ev.target;
    if (!currentItem.className.includes(ns.b("node")))
      return;
    const code = ev.code;
    treeItems.value = Array.from(el$.value.querySelectorAll(`.${ns.is("focusable")}[role=treeitem]`));
    const currentIndex = treeItems.value.indexOf(currentItem);
    let nextIndex;
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      ev.preventDefault();
      if (code === EVENT_CODE.up) {
        nextIndex = currentIndex === -1 ? 0 : currentIndex !== 0 ? currentIndex - 1 : treeItems.value.length - 1;
        const startIndex = nextIndex;
        while (true) {
          if (store.value.getNode(treeItems.value[nextIndex].dataset.key).canFocus)
            break;
          nextIndex--;
          if (nextIndex === startIndex) {
            nextIndex = -1;
            break;
          }
          if (nextIndex < 0) {
            nextIndex = treeItems.value.length - 1;
          }
        }
      } else {
        nextIndex = currentIndex === -1 ? 0 : currentIndex < treeItems.value.length - 1 ? currentIndex + 1 : 0;
        const startIndex = nextIndex;
        while (true) {
          if (store.value.getNode(treeItems.value[nextIndex].dataset.key).canFocus)
            break;
          nextIndex++;
          if (nextIndex === startIndex) {
            nextIndex = -1;
            break;
          }
          if (nextIndex >= treeItems.value.length) {
            nextIndex = 0;
          }
        }
      }
      nextIndex !== -1 && treeItems.value[nextIndex].focus();
    }
    if ([EVENT_CODE.left, EVENT_CODE.right].includes(code)) {
      ev.preventDefault();
      currentItem.click();
    }
    const hasInput = currentItem.querySelector('[type="checkbox"]');
    if ([EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space].includes(code) && hasInput) {
      ev.preventDefault();
      hasInput.click();
    }
  };
  useEventListener(el$, "keydown", handleKeydown);
  const initTabIndex = () => {
    var _a;
    treeItems.value = Array.from(el$.value.querySelectorAll(`.${ns.is("focusable")}[role=treeitem]`));
    checkboxItems.value = Array.from(el$.value.querySelectorAll("input[type=checkbox]"));
    const checkedItem = el$.value.querySelectorAll(`.${ns.is("checked")}[role=treeitem]`);
    if (checkedItem.length) {
      checkedItem[0].setAttribute("tabindex", "0");
      return;
    }
    (_a = treeItems.value[0]) == null ? void 0 : _a.setAttribute("tabindex", "0");
  };
}
const _sfc_main$17 = nj({
  name: "ElTree",
  components: { ElTreeNode },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    emptyText: {
      type: String
    },
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false
    },
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label",
        disabled: "disabled"
      })
    },
    lazy: {
      type: Boolean,
      default: false
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    icon: {
      type: iconPropType
    }
  },
  emits: [
    "check-change",
    "current-change",
    "node-click",
    "node-contextmenu",
    "node-collapse",
    "node-expand",
    "check",
    "node-drag-start",
    "node-drag-end",
    "node-drop",
    "node-drag-leave",
    "node-drag-enter",
    "node-drag-over"
  ],
  setup(props, ctx) {
    const { t } = useLocale();
    const ns = useNamespace("tree");
    const selectInfo = rn(selectKey, null);
    const store = tk(new TreeStore({
      key: props.nodeKey,
      data: props.data,
      lazy: props.lazy,
      props: props.props,
      load: props.load,
      currentNodeKey: props.currentNodeKey,
      checkStrictly: props.checkStrictly,
      checkDescendants: props.checkDescendants,
      defaultCheckedKeys: props.defaultCheckedKeys,
      defaultExpandedKeys: props.defaultExpandedKeys,
      autoExpandParent: props.autoExpandParent,
      defaultExpandAll: props.defaultExpandAll,
      filterNodeMethod: props.filterNodeMethod
    }));
    store.value.initialize();
    const root2 = tk(store.value.root);
    const currentNode = tk(null);
    const el$ = tk(null);
    const dropIndicator$ = tk(null);
    const { broadcastExpanded } = useNodeExpandEventBroadcast(props);
    const { dragState } = useDragNodeHandler({
      props,
      ctx,
      el$,
      dropIndicator$,
      store
    });
    useKeydown({ el$ }, store);
    const isEmpty = ij(() => {
      const { childNodes } = root2.value;
      const hasFilteredOptions = selectInfo ? selectInfo.hasFilteredOptions !== 0 : false;
      return (!childNodes || childNodes.length === 0 || childNodes.every(({ visible }) => !visible)) && !hasFilteredOptions;
    });
    rM(() => props.currentNodeKey, (newVal) => {
      store.value.setCurrentNodeKey(newVal);
    });
    rM(() => props.defaultCheckedKeys, (newVal) => {
      store.value.setDefaultCheckedKey(newVal);
    });
    rM(() => props.defaultExpandedKeys, (newVal) => {
      store.value.setDefaultExpandedKeys(newVal);
    });
    rM(() => props.data, (newVal) => {
      store.value.setData(newVal);
    }, { deep: true });
    rM(() => props.checkStrictly, (newVal) => {
      store.value.checkStrictly = newVal;
    });
    const filter = (value) => {
      if (!props.filterNodeMethod)
        throw new Error("[Tree] filterNodeMethod is required when filter");
      store.value.filter(value);
    };
    const getNodeKey$1 = (node) => {
      return getNodeKey(props.nodeKey, node.data);
    };
    const getNodePath = (data) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in getNodePath");
      const node = store.value.getNode(data);
      if (!node)
        return [];
      const path = [node.data];
      let parent = node.parent;
      while (parent && parent !== root2.value) {
        path.push(parent.data);
        parent = parent.parent;
      }
      return path.reverse();
    };
    const getCheckedNodes = (leafOnly, includeHalfChecked) => {
      return store.value.getCheckedNodes(leafOnly, includeHalfChecked);
    };
    const getCheckedKeys = (leafOnly) => {
      return store.value.getCheckedKeys(leafOnly);
    };
    const getCurrentNode = () => {
      const currentNode2 = store.value.getCurrentNode();
      return currentNode2 ? currentNode2.data : null;
    };
    const getCurrentKey = () => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in getCurrentKey");
      const currentNode2 = getCurrentNode();
      return currentNode2 ? currentNode2[props.nodeKey] : null;
    };
    const setCheckedNodes = (nodes, leafOnly) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedNodes");
      store.value.setCheckedNodes(nodes, leafOnly);
    };
    const setCheckedKeys = (keys2, leafOnly) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCheckedKeys");
      store.value.setCheckedKeys(keys2, leafOnly);
    };
    const setChecked = (data, checked, deep) => {
      store.value.setChecked(data, checked, deep);
    };
    const getHalfCheckedNodes = () => {
      return store.value.getHalfCheckedNodes();
    };
    const getHalfCheckedKeys = () => {
      return store.value.getHalfCheckedKeys();
    };
    const setCurrentNode = (node, shouldAutoExpandParent = true) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentNode");
      handleCurrentChange(store, ctx.emit, () => {
        broadcastExpanded(node);
        store.value.setUserCurrentNode(node, shouldAutoExpandParent);
      });
    };
    const setCurrentKey = (key, shouldAutoExpandParent = true) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in setCurrentKey");
      handleCurrentChange(store, ctx.emit, () => {
        broadcastExpanded();
        store.value.setCurrentNodeKey(key, shouldAutoExpandParent);
      });
    };
    const getNode = (data) => {
      return store.value.getNode(data);
    };
    const remove = (data) => {
      store.value.remove(data);
    };
    const append = (data, parentNode) => {
      store.value.append(data, parentNode);
    };
    const insertBefore = (data, refNode) => {
      store.value.insertBefore(data, refNode);
    };
    const insertAfter = (data, refNode) => {
      store.value.insertAfter(data, refNode);
    };
    const handleNodeExpand = (nodeData, node, instance) => {
      broadcastExpanded(node);
      ctx.emit("node-expand", nodeData, node, instance);
    };
    const updateKeyChildren = (key, data) => {
      if (!props.nodeKey)
        throw new Error("[Tree] nodeKey is required in updateKeyChild");
      store.value.updateChildren(key, data);
    };
    rt("RootTree", {
      ctx,
      props,
      store,
      root: root2,
      currentNode,
      instance: ik()
    });
    rt(formItemContextKey, void 0);
    return {
      ns,
      store,
      root: root2,
      currentNode,
      dragState,
      el$,
      dropIndicator$,
      isEmpty,
      filter,
      getNodeKey: getNodeKey$1,
      getNodePath,
      getCheckedNodes,
      getCheckedKeys,
      getCurrentNode,
      getCurrentKey,
      setCheckedNodes,
      setCheckedKeys,
      setChecked,
      getHalfCheckedNodes,
      getHalfCheckedKeys,
      setCurrentNode,
      setCurrentKey,
      t,
      getNode,
      remove,
      append,
      insertBefore,
      insertAfter,
      handleNodeExpand,
      updateKeyChildren
    };
  }
});
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tree_node = lS("el-tree-node");
  return r3(), it("div", {
    ref: "el$",
    class: es([
      _ctx.ns.b(),
      _ctx.ns.is("dragging", !!_ctx.dragState.draggingNode),
      _ctx.ns.is("drop-not-allow", !_ctx.dragState.allowDrop),
      _ctx.ns.is("drop-inner", _ctx.dragState.dropType === "inner"),
      { [_ctx.ns.m("highlight-current")]: _ctx.highlightCurrent }
    ]),
    role: "tree"
  }, [
    (r3(true), it(r0, null, lT(_ctx.root.childNodes, (child) => {
      return r3(), il(_component_el_tree_node, {
        key: _ctx.getNodeKey(child),
        node: child,
        props: _ctx.props,
        accordion: _ctx.accordion,
        "render-after-expand": _ctx.renderAfterExpand,
        "show-checkbox": _ctx.showCheckbox,
        "render-content": _ctx.renderContent,
        onNodeExpand: _ctx.handleNodeExpand
      }, null, 8, ["node", "props", "accordion", "render-after-expand", "show-checkbox", "render-content", "onNodeExpand"]);
    }), 128)),
    _ctx.isEmpty ? (r3(), it("div", {
      key: 0,
      class: es(_ctx.ns.e("empty-block"))
    }, [
      lR(_ctx.$slots, "empty", {}, () => {
        var _a;
        return [
          iu("span", {
            class: es(_ctx.ns.e("empty-text"))
          }, ep((_a = _ctx.emptyText) != null ? _a : _ctx.t("el.tree.emptyText")), 3)
        ];
      })
    ], 2)) : iv("v-if", true),
    np(iu("div", {
      ref: "dropIndicator$",
      class: es(_ctx.ns.e("drop-indicator"))
    }, null, 2), [
      [sh, _ctx.dragState.showDropIndicator]
    ])
  ], 2);
}
var Tree = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["render", _sfc_render$j], ["__file", "tree.vue"]]);
const ElTree = withInstall(Tree);
const index$1 = "";
const _sfc_main$16 = {};
const _hoisted_1$R = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$i(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$R, _cache[0] || (_cache[0] = [
    iu("path", { d: "M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z" }, null, -1),
    iu("path", { d: "M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z" }, null, -1),
    iu("path", { d: "M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z" }, null, -1),
    iu("path", { d: "M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z" }, null, -1)
  ]));
}
const VTIconAlignLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$16, [["render", _sfc_render$i]]);
const _sfc_main$15 = {};
const _hoisted_1$Q = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$h(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$Q, _cache[0] || (_cache[0] = [
    iu("path", { d: "M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z" }, null, -1)
  ]));
}
const VTIconChevronDown = /* @__PURE__ */ _export_sfc$1(_sfc_main$15, [["render", _sfc_render$h]]);
const _sfc_main$14 = {};
const _hoisted_1$P = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$g(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$P, _cache[0] || (_cache[0] = [
    iu("path", { d: "M15,19c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4l6-6c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L10.4,12l5.3,5.3c0.4,0.4,0.4,1,0,1.4C15.5,18.9,15.3,19,15,19z" }, null, -1)
  ]));
}
const VTIconChevronLeft = /* @__PURE__ */ _export_sfc$1(_sfc_main$14, [["render", _sfc_render$g]]);
const _sfc_main$13 = {};
const _hoisted_1$O = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$f(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$O, _cache[0] || (_cache[0] = [
    iu("path", { d: "M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z" }, null, -1)
  ]));
}
const VTIconChevronRight = /* @__PURE__ */ _export_sfc$1(_sfc_main$13, [["render", _sfc_render$f]]);
const _sfc_main$12 = {};
const _hoisted_1$N = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$e(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$N, _cache[0] || (_cache[0] = [
    iu("path", { d: "M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" }, null, -1)
  ]));
}
const VTIconDiscord = /* @__PURE__ */ _export_sfc$1(_sfc_main$12, [["render", _sfc_render$e]]);
const _sfc_main$11 = {};
const _hoisted_1$M = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  height: "24px",
  viewBox: "0 0 24 24",
  width: "24px"
};
function _sfc_render$d(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$M, _cache[0] || (_cache[0] = [
    iu("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }, null, -1),
    iu("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" }, null, -1)
  ]));
}
const VTIconExternalLink = /* @__PURE__ */ _export_sfc$1(_sfc_main$11, [["render", _sfc_render$d]]);
const _sfc_main$10 = {};
const _hoisted_1$L = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$c(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$L, _cache[0] || (_cache[0] = [
    iu("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }, null, -1)
  ]));
}
const VTIconFacebook = /* @__PURE__ */ _export_sfc$1(_sfc_main$10, [["render", _sfc_render$c]]);
const _sfc_main$$ = {};
const _hoisted_1$K = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$b(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$K, _cache[0] || (_cache[0] = [
    iu("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }, null, -1)
  ]));
}
const VTIconGitHub = /* @__PURE__ */ _export_sfc$1(_sfc_main$$, [["render", _sfc_render$b]]);
const _sfc_main$_ = {};
const _hoisted_1$J = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$a(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$J, _cache[0] || (_cache[0] = [
    iu("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }, null, -1),
    iu("path", {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
      class: "css-c4d79v"
    }, null, -1)
  ]));
}
const VTIconLanguagesVue = /* @__PURE__ */ _export_sfc$1(_sfc_main$_, [["render", _sfc_render$a]]);
const _sfc_main$Z = {};
const _hoisted_1$I = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$9(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$I, _cache[0] || (_cache[0] = [
    iu("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }, null, -1)
  ]));
}
const VTIconLinkedIn = /* @__PURE__ */ _export_sfc$1(_sfc_main$Z, [["render", _sfc_render$9]]);
const _sfc_main$Y = {};
const _hoisted_1$H = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$8(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$H, _cache[0] || (_cache[0] = [
    iu("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    }, null, -1),
    iu("circle", {
      cx: "19",
      cy: "12",
      r: "2"
    }, null, -1),
    iu("circle", {
      cx: "5",
      cy: "12",
      r: "2"
    }, null, -1)
  ]));
}
const VTIconMoreHorizontal = /* @__PURE__ */ _export_sfc$1(_sfc_main$Y, [["render", _sfc_render$8]]);
const _sfc_main$X = {};
const _hoisted_1$G = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$7(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$G, _cache[0] || (_cache[0] = [
    iu("path", { d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z" }, null, -1)
  ]));
}
const VTIconMoon = /* @__PURE__ */ _export_sfc$1(_sfc_main$X, [["render", _sfc_render$7]]);
const _sfc_main$W = {};
const _hoisted_1$F = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  fill: "currentColor",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$6(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$F, _cache[0] || (_cache[0] = [
    iu("path", { d: "M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z" }, null, -1)
  ]));
}
const VTIconPlus = /* @__PURE__ */ _export_sfc$1(_sfc_main$W, [["render", _sfc_render$6]]);
const _sfc_main$V = {};
const _hoisted_1$E = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$5(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$E, _cache[0] || (_cache[0] = [
    iu("path", { d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" }, null, -1)
  ]));
}
const VTIconSlack = /* @__PURE__ */ _export_sfc$1(_sfc_main$V, [["render", _sfc_render$5]]);
const _sfc_main$U = {};
const _hoisted_1$D = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$4(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$D, _cache[0] || (_cache[0] = [
    ig('<path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path><path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path><path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path><path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path><path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path><path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path><path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path><path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path><path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>', 9)
  ]));
}
const VTIconSun = /* @__PURE__ */ _export_sfc$1(_sfc_main$U, [["render", _sfc_render$4]]);
const _sfc_main$T = {};
const _hoisted_1$C = {
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  focusable: "false",
  viewBox: "0 0 24 24"
};
function _sfc_render$3(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$C, _cache[0] || (_cache[0] = [
    iu("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }, null, -1)
  ]));
}
const VTIconX = /* @__PURE__ */ _export_sfc$1(_sfc_main$T, [["render", _sfc_render$3]]);
const _sfc_main$S = {};
const _hoisted_1$B = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};
function _sfc_render$2(_ctx, _cache) {
  return r3(), it("svg", _hoisted_1$B, _cache[0] || (_cache[0] = [
    iu("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    }, null, -1)
  ]));
}
const VTIconEdit = /* @__PURE__ */ _export_sfc$1(_sfc_main$S, [["render", _sfc_render$2]]);
const _hoisted_1$A = {
  key: 0,
  class: "vt-backdrop"
};
const _sfc_main$R = /* @__PURE__ */ nj({
  __name: "VTBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return r3(), il(i7, { name: "fade" }, {
        default: nf(() => [
          _ctx.show ? (r3(), it("div", _hoisted_1$A)) : iv("", true)
        ]),
        _: 1
      });
    };
  }
});
const focusedElement = tk();
let active = false;
let listeners = 0;
function useFocusContainer(options) {
  const containsFocus = tk(false);
  if (typeof window !== "undefined") {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = rM(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.elRef.value || ((_a = options.elRef.value) == null ? void 0 : _a.contains(el))) {
        containsFocus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        containsFocus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    lg(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return th(containsFocus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$Q = /* @__PURE__ */ nj({
  __name: "VTLink",
  props: {
    href: {},
    noIcon: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isExternal = ij(() => props.href && /^[a-z]+:/i.test(props.href));
    return (_ctx, _cache) => {
      return r3(), il(lx(_ctx.href ? "a" : "span"), {
        class: es(["vt-link", { link: _ctx.href }]),
        href: _ctx.href,
        target: isExternal.value ? "_blank" : void 0,
        rel: isExternal.value ? "noopener noreferrer" : void 0
      }, {
        default: nf(() => [
          lR(_ctx.$slots, "default"),
          isExternal.value && !_ctx.noIcon ? (r3(), il(VTIconExternalLink, {
            key: 0,
            class: "vt-link-icon"
          })) : iv("", true)
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const _sfc_main$P = /* @__PURE__ */ nj({
  __name: "VTMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return r3(), il(_sfc_main$Q, {
        class: "vt-menu-link",
        href: _ctx.item.link
      }, {
        default: nf(() => [
          ih(ep(_ctx.item.text), 1)
        ]),
        _: 1
      }, 8, ["href"]);
    };
  }
});
const _hoisted_1$z = { class: "vt-menu-group" };
const _hoisted_2$n = {
  key: 0,
  class: "vt-menu-group-title"
};
const _sfc_main$O = /* @__PURE__ */ nj({
  __name: "VTMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return r3(), it("div", _hoisted_1$z, [
        _ctx.text ? (r3(), it("p", _hoisted_2$n, ep(_ctx.text), 1)) : iv("", true),
        (r3(true), it(r0, null, lT(_ctx.items, (item) => {
          return r3(), it(r0, null, [
            "link" in item ? (r3(), il(_sfc_main$P, {
              key: 0,
              item
            }, null, 8, ["item"])) : iv("", true)
          ], 64);
        }), 256))
      ]);
    };
  }
});
const _hoisted_1$y = { class: "vt-menu" };
const _hoisted_2$m = {
  key: 0,
  class: "vt-menu-items"
};
const _sfc_main$N = /* @__PURE__ */ nj({
  __name: "VTMenu",
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return r3(), it("div", _hoisted_1$y, [
        _ctx.items ? (r3(), it("div", _hoisted_2$m, [
          (r3(true), it(r0, null, lT(_ctx.items, (item) => {
            return r3(), it(r0, {
              key: item.text
            }, [
              "link" in item ? (r3(), il(_sfc_main$P, {
                key: 0,
                item
              }, null, 8, ["item"])) : (r3(), il(_sfc_main$O, {
                key: 1,
                text: item.text,
                items: item.items
              }, null, 8, ["text", "items"]))
            ], 64);
          }), 128))
        ])) : iv("", true),
        lR(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$x = ["aria-expanded", "aria-label"];
const _hoisted_2$l = {
  key: 0,
  class: "vt-flyout-button-text"
};
const _hoisted_3$d = { class: "vt-flyout-menu" };
const _sfc_main$M = /* @__PURE__ */ nj({
  __name: "VTFlyout",
  props: {
    button: {},
    items: {},
    label: {}
  },
  setup(__props) {
    const props = __props;
    const open = tk(false);
    const elRef = tk();
    const onBlur = () => {
      open.value = false;
    };
    useFocusContainer({
      elRef,
      onBlur
    });
    return (_ctx, _cache) => {
      return r3(), it("div", {
        class: "vt-flyout",
        ref_key: "elRef",
        ref: elRef,
        onMouseenter: _cache[1] || (_cache[1] = ($event) => open.value = true),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => open.value = false)
      }, [
        iu("button", {
          type: "button",
          class: "vt-flyout-button",
          "aria-haspopup": "true",
          "aria-expanded": open.value,
          "aria-label": _ctx.label,
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          lR(_ctx.$slots, "btn-slot", {}, () => [
            props.button ? (r3(), it("span", _hoisted_2$l, [
              ih(ep(props.button) + " ", 1),
              ic(VTIconChevronDown, { class: "vt-flyout-button-text-icon" })
            ])) : (r3(), il(VTIconMoreHorizontal, {
              key: 1,
              class: "vt-flyout-button-icon"
            }))
          ])
        ], 8, _hoisted_1$x),
        iu("div", _hoisted_3$d, [
          ic(_sfc_main$N, { items: _ctx.items }, {
            default: nf(() => [
              lR(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["items"])
        ])
      ], 544);
    };
  }
});
const _hoisted_1$w = ["aria-label", "aria-expanded"];
const _sfc_main$L = /* @__PURE__ */ nj({
  __name: "VTHamburger",
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      var _a;
      return r3(), it("button", {
        type: "button",
        class: es(["vt-hamburger", { "is-active": _ctx.active }]),
        "aria-label": ((_a = tO(config).i18n) == null ? void 0 : _a.ariaMobileNav) ?? "Mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _cache[0] || (_cache[0] = [
        iu("span", { class: "vt-hamburger-container" }, [
          iu("span", { class: "vt-hamburger-top" }),
          iu("span", { class: "vt-hamburger-middle" }),
          iu("span", { class: "vt-hamburger-bottom" })
        ], -1)
      ]), 10, _hoisted_1$w);
    };
  }
});
const _hoisted_1$v = ["href", "title", "target"];
const _hoisted_2$k = { class: "visually-hidden" };
const _sfc_main$K = /* @__PURE__ */ nj({
  __name: "VTSocialLink",
  props: {
    size: {},
    icon: {},
    link: {}
  },
  setup(__props) {
    const props = __props;
    const target = /^[a-z]+:/i.test(props.link) ? `_blank` : void 0;
    const icons = {
      discord: VTIconDiscord,
      facebook: VTIconFacebook,
      github: VTIconGitHub,
      linkedin: VTIconLinkedIn,
      slack: VTIconSlack,
      twitter: VTIconX,
      x: VTIconX,
      languages: VTIconLanguagesVue
    };
    return (_ctx, _cache) => {
      return r3(), it("a", {
        class: es(["vt-social-link", {
          "is-small": _ctx.size === "small",
          "is-medium": _ctx.size === "medium"
        }]),
        href: _ctx.link,
        title: _ctx.icon,
        target: tO(target),
        rel: "noopener noreferrer"
      }, [
        (r3(), il(lx(icons[_ctx.icon]), { class: "vt-social-link-icon" })),
        iu("span", _hoisted_2$k, ep(_ctx.icon), 1)
      ], 10, _hoisted_1$v);
    };
  }
});
const _hoisted_1$u = { class: "vt-social-links" };
const _sfc_main$J = /* @__PURE__ */ nj({
  __name: "VTSocialLinks",
  props: {
    size: {},
    links: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return r3(), it("div", _hoisted_1$u, [
        (r3(true), it(r0, null, lT(_ctx.links, ({ link, icon }) => {
          return r3(), il(_sfc_main$K, {
            key: link,
            size: _ctx.size,
            icon,
            link
          }, null, 8, ["size", "icon", "link"]);
        }), 128))
      ]);
    };
  }
});
const _sfc_main$I = {};
const _hoisted_1$t = {
  class: "vt-switch",
  type: "button",
  role: "switch"
};
const _hoisted_2$j = { class: "vt-switch-check" };
const _hoisted_3$c = {
  key: 0,
  class: "vt-switch-icon"
};
function _sfc_render$1(_ctx, _cache) {
  return r3(), it("button", _hoisted_1$t, [
    iu("span", _hoisted_2$j, [
      _ctx.$slots.default ? (r3(), it("span", _hoisted_3$c, [
        lR(_ctx.$slots, "default")
      ])) : iv("", true)
    ])
  ]);
}
const VTSwitch = /* @__PURE__ */ _export_sfc$1(_sfc_main$I, [["render", _sfc_render$1]]);
const _sfc_main$H = /* @__PURE__ */ nj({
  __name: "VTSwitchAppearance",
  setup(__props) {
    const { config } = useConfig();
    const { isDark, toggle } = rn("appearance");
    return (_ctx, _cache) => {
      var _a;
      return r3(), il(VTSwitch, {
        class: "vt-switch-appearance",
        "aria-label": ((_a = tO(config).i18n) == null ? void 0 : _a.ariaDarkMode) ?? "Toggle dark mode",
        "aria-checked": tO(isDark),
        onClick: tO(toggle)
      }, {
        default: nf(() => [
          ic(VTIconSun, { class: "vt-switch-appearance-sun" }),
          ic(VTIconMoon, { class: "vt-switch-appearance-moon" })
        ]),
        _: 1
      }, 8, ["aria-label", "aria-checked", "onClick"]);
    };
  }
});
const index = "";
function getSidebar(sidebar, path) {
  if (Array.isArray(sidebar)) {
    return sidebar;
  }
  path = ensureStartingSlash(path);
  for (const dir in sidebar) {
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir];
    }
  }
  return [];
}
function useSidebar() {
  const route = useRoute();
  const { config } = useConfig();
  const { frontmatter } = useData();
  const isOpen = tk(false);
  const sidebar = ij(() => {
    const sidebarConfig = config.value.sidebar;
    const relativePath = route.data.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const hasSidebar = ij(
    () => frontmatter.value.sidebar !== false && sidebar.value.length > 0
  );
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    hasSidebar,
    open,
    close,
    toggle
  };
}
function useNav() {
  const isScreenOpen = tk(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const _imports_0 = "/images/logo.png";
const VPNavBarTitle_vue_vue_type_style_index_0_scoped_529b66f5_lang = "";
const _sfc_main$G = {};
const _hoisted_1$s = {
  class: "VPNavBarTitle",
  href: "/"
};
function _sfc_render(_ctx, _cache) {
  return r3(), it("a", _hoisted_1$s, [
    lR(_ctx.$slots, "navbar-title", {}, () => [
      _cache[0] || (_cache[0] = iu("img", {
        class: "logo",
        width: "24",
        height: "24",
        src: _imports_0,
        alt: "logo.png"
      }, null, -1)),
      _cache[1] || (_cache[1] = iu("span", { class: "text" }, "BLOG", -1))
    ], true)
  ]);
}
const VPNavBarTitle = /* @__PURE__ */ _export_sfc$1(_sfc_main$G, [["render", _sfc_render], ["__scopeId", "data-v-529b66f5"]]);
const style = "";
const _hoisted_1$r = {
  key: 0,
  class: "VPNavBarSearch"
};
const _hoisted_2$i = ["aria-label"];
const _hoisted_3$b = { class: "DocSearch-Button-Container" };
const _hoisted_4$7 = { class: "DocSearch-Button-Placeholder" };
const _hoisted_5$5 = { class: "DocSearch-Button-Keys" };
const _hoisted_6$2 = { class: "DocSearch-Button-Key" };
const _sfc_main$F = /* @__PURE__ */ nj({
  __name: "VPNavBarSearch",
  setup(__props) {
    const { config } = useConfig();
    const VPAlgoliaSearchBox = n9(
      () => __vitePreload(() => import("./chunks/VPAlgoliaSearchBox.d3366993.js"), true ? ["assets/chunks/VPAlgoliaSearchBox.d3366993.js","assets/chunks/framework.9c9a3542.js","assets/chunks/base.30cf62ac.js","assets/chunks/index.e92831bb.js"] : void 0)
    );
    const loaded = tk(false);
    const metaKey = tk("Meta");
    lf(() => {
      if (!config.value.algolia)
        return;
      metaKey.value = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl";
      const handleSearchHotKey = (e) => {
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
          e.preventDefault();
          load();
          remove();
        }
      };
      const remove = () => {
        window.removeEventListener("keydown", handleSearchHotKey);
      };
      window.addEventListener("keydown", handleSearchHotKey);
      lg(remove);
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
      }
    }
    return (_ctx, _cache) => {
      var _a, _b;
      const _component_ClientOnly = lS("ClientOnly");
      return tO(config).algolia ? (r3(), it("div", _hoisted_1$r, [
        loaded.value ? (r3(), il(tO(VPAlgoliaSearchBox), { key: 0 })) : (r3(), it("div", {
          key: 1,
          id: "docsearch",
          onClick: load
        }, [
          iu("button", {
            type: "button",
            class: "DocSearch DocSearch-Button",
            "aria-label": ((_a = tO(config).i18n) == null ? void 0 : _a.search) ?? "Search"
          }, [
            iu("span", _hoisted_3$b, [
              _cache[0] || (_cache[0] = iu("svg", {
                width: "20",
                height: "20",
                class: "DocSearch-Search-Icon",
                viewBox: "0 0 20 20"
              }, [
                iu("path", {
                  d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",
                  stroke: "currentColor",
                  fill: "none",
                  "fill-rule": "evenodd",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1)),
              iu("span", _hoisted_4$7, ep(((_b = tO(config).i18n) == null ? void 0 : _b.search) ?? "Search"), 1)
            ]),
            ic(_component_ClientOnly, null, {
              default: nf(() => [
                iu("span", _hoisted_5$5, [
                  iu("kbd", _hoisted_6$2, ep(metaKey.value), 1),
                  _cache[1] || (_cache[1] = iu("kbd", { class: "DocSearch-Button-Key" }, "K", -1))
                ])
              ]),
              _: 1
            })
          ], 8, _hoisted_2$i)
        ]))
      ])) : iv("", true);
    };
  }
});
const VPNavBarSearch_vue_vue_type_style_index_0_lang = "";
const _sfc_main$E = /* @__PURE__ */ nj({
  __name: "VPNavBarMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return r3(), il(tO(_sfc_main$Q), {
        class: es({
          VPNavBarMenuLink: true,
          active: tO(isActive)(
            tO(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        }),
        href: _ctx.item.link,
        noIcon: true
      }, {
        default: nf(() => [
          ih(ep(_ctx.item.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href"]);
    };
  }
});
const VPNavBarMenuLink_vue_vue_type_style_index_0_scoped_4e760846_lang = "";
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc$1(_sfc_main$E, [["__scopeId", "data-v-4e760846"]]);
const _sfc_main$D = /* @__PURE__ */ nj({
  __name: "VPNavBarMenuGroup",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return r3(), il(tO(_sfc_main$M), {
        class: es({
          VPNavBarMenuGroup: true,
          active: tO(isActive)(tO(page).relativePath, _ctx.item.activeMatch, true)
        }),
        button: _ctx.item.text,
        items: _ctx.item.items
      }, null, 8, ["class", "button", "items"]);
    };
  }
});
const VPNavBarMenuGroup_vue_vue_type_style_index_0_scoped_19933bf7_lang = "";
const VPNavBarMenuGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$D, [["__scopeId", "data-v-19933bf7"]]);
const _hoisted_1$q = ["href"];
const _hoisted_2$h = ["href", "title"];
const _sfc_main$C = /* @__PURE__ */ nj({
  __name: "VPNavBarLocaleItems",
  setup(__props) {
    const route = useRoute();
    const { config } = useConfig();
    const localeLinks = ij(() => {
      const items = config.value.localeLinks || [];
      const pathname = route.path || "";
      return items.filter(({ isTranslationsDesc }) => !isTranslationsDesc).map(({ text, link, repo }) => {
        return {
          text,
          link: new URL(pathname, link).toString(),
          repo
        };
      });
    });
    return (_ctx, _cache) => {
      return r3(true), it(r0, null, lT(localeLinks.value, (item) => {
        var _a, _b, _c, _d;
        return r3(), it("div", {
          key: item.text,
          class: "vt-locales-menu-item"
        }, [
          iu("a", {
            href: item.link,
            target: "_blank",
            class: "vt-locales-menu-item-text"
          }, [
            ih(ep(item.text) + " ", 1),
            ic(tO(VTIconExternalLink), { class: "vt-link-icon" })
          ], 8, _hoisted_1$q),
          item.repo ? (r3(), it("a", {
            key: 0,
            href: item.repo,
            title: `${((_b = (_a = tO(config).i18n) == null ? void 0 : _a.ariaRepo) == null ? void 0 : _b.before) ?? ""}${item.text}${((_d = (_c = tO(config).i18n) == null ? void 0 : _c.ariaRepo) == null ? void 0 : _d.after) ?? " Repository"}`,
            target: "_blank",
            class: "vt-locales-btn-icon-container"
          }, [
            ic(VTIconGitHub, { class: "vt-locales-btn-icon repo" })
          ], 8, _hoisted_2$h)) : iv("", true)
        ]);
      }), 128);
    };
  }
});
const _hoisted_1$p = { class: "vt-locales-menu-item join-translations" };
const _sfc_main$B = /* @__PURE__ */ nj({
  __name: "VPNavBarLocaleJoin",
  setup(__props) {
    const router = useRouter();
    const { config } = useConfig();
    const closeScreen = rn("close-screen");
    const localeLinks = config.value.localeLinks;
    const translationsDesc = ij(() => localeLinks == null ? void 0 : localeLinks.find(
      (item) => item.isTranslationsDesc
    ));
    const navigateToJoinTranslation = () => {
      if (translationsDesc.value) {
        closeScreen();
        router.go(translationsDesc.value.link);
      }
    };
    return (_ctx, _cache) => {
      return translationsDesc.value ? (r3(), it(r0, { key: 0 }, [
        _cache[0] || (_cache[0] = iu("div", { class: "vt-locales-menu-hr-divider" }, null, -1)),
        iu("div", _hoisted_1$p, [
          iu("div", {
            role: "link",
            tabindex: "0",
            class: "vt-locales-menu-item-text",
            onClick: navigateToJoinTranslation
          }, ep(translationsDesc.value.text), 1)
        ])
      ], 64)) : iv("", true);
    };
  }
});
const VPNavBarLocaleJoin_vue_vue_type_style_index_0_scoped_71442e3f_lang = "";
const VPNavBarLocaleJoin = /* @__PURE__ */ _export_sfc$1(_sfc_main$B, [["__scopeId", "data-v-71442e3f"]]);
const _hoisted_1$o = { class: "vt-locales-btn-icon-container" };
const _hoisted_2$g = { class: "vt-menu-items x-padding" };
const _sfc_main$A = /* @__PURE__ */ nj({
  __name: "VPNavBarLocale",
  setup(__props) {
    var _a;
    const { config } = useConfig();
    const localeLinks = (_a = config.value.localeLinks) == null ? void 0 : _a.length;
    return (_ctx, _cache) => {
      var _a2;
      return tO(localeLinks) ? (r3(), il(tO(_sfc_main$M), {
        key: 0,
        label: ((_a2 = tO(config).i18n) == null ? void 0 : _a2.ariaLanguage) ?? "Select Language",
        class: "VPNavBarMenuGroup active VPNavBarLocale"
      }, {
        "btn-slot": nf(() => [
          iu("div", _hoisted_1$o, [
            ic(VTIconLanguagesVue, { class: "vt-locales-btn-icon" })
          ])
        ]),
        default: nf(() => [
          tO(localeLinks) ? (r3(), it(r0, { key: 0 }, [
            iu("div", _hoisted_2$g, [
              ic(_sfc_main$C)
            ]),
            ic(VPNavBarLocaleJoin)
          ], 64)) : iv("", true)
        ]),
        _: 1
      }, 8, ["label"])) : iv("", true);
    };
  }
});
const VPNavBarLocale_vue_vue_type_style_index_0_scoped_2d20c5b0_lang = "";
const VPNavBarLocale = /* @__PURE__ */ _export_sfc$1(_sfc_main$A, [["__scopeId", "data-v-2d20c5b0"]]);
const _hoisted_1$n = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
};
const _hoisted_2$f = {
  id: "main-nav-aria-label",
  class: "visually-hidden"
};
const _sfc_main$z = /* @__PURE__ */ nj({
  __name: "VPNavBarMenu",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      var _a;
      return tO(config).nav ? (r3(), it("nav", _hoisted_1$n, [
        iu("span", _hoisted_2$f, ep(((_a = tO(config).i18n) == null ? void 0 : _a.ariaMainNav) ?? "Main Navigation"), 1),
        (r3(true), it(r0, null, lT(tO(config).nav, (item) => {
          return r3(), it(r0, {
            key: item.text
          }, [
            "link" in item ? (r3(), il(VPNavBarMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : (r3(), il(VPNavBarMenuGroup, {
              key: 1,
              item
            }, null, 8, ["item"]))
          ], 64);
        }), 128)),
        tO(config).localeLinks ? (r3(), il(VPNavBarLocale, { key: 0 })) : iv("", true)
      ])) : iv("", true);
    };
  }
});
const VPNavBarMenu_vue_vue_type_style_index_0_scoped_71f0f4ff_lang = "";
const VPNavBarMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$z, [["__scopeId", "data-v-71f0f4ff"]]);
const _hoisted_1$m = {
  key: 0,
  class: "VPNavBarAppearance"
};
const _sfc_main$y = /* @__PURE__ */ nj({
  __name: "VPNavBarAppearance",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return tO(config).appearance ? (r3(), it("div", _hoisted_1$m, [
        ic(tO(_sfc_main$H))
      ])) : iv("", true);
    };
  }
});
const VPNavBarAppearance_vue_vue_type_style_index_0_scoped_e580b8ea_lang = "";
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc$1(_sfc_main$y, [["__scopeId", "data-v-e580b8ea"]]);
const _sfc_main$x = /* @__PURE__ */ nj({
  __name: "VPNavBarSocialLinks",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return tO(config).socialLinks ? (r3(), il(tO(_sfc_main$J), {
        key: 0,
        class: "VPNavBarSocialLinks",
        size: "small",
        links: tO(config).socialLinks
      }, null, 8, ["links"])) : iv("", true);
    };
  }
});
const VPNavBarSocialLinks_vue_vue_type_style_index_0_scoped_4f589738_lang = "";
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc$1(_sfc_main$x, [["__scopeId", "data-v-4f589738"]]);
const _hoisted_1$l = {
  key: 0,
  class: "vt-menu-group"
};
const _hoisted_2$e = { class: "vt-menu-item item" };
const _hoisted_3$a = { class: "vt-menu-label" };
const _hoisted_4$6 = { class: "vt-menu-action action" };
const _hoisted_5$4 = {
  key: 1,
  class: "vt-menu-group"
};
const _hoisted_6$1 = { class: "vt-menu-item item" };
const _sfc_main$w = /* @__PURE__ */ nj({
  __name: "VPNavBarExtra",
  setup(__props) {
    const { config } = useConfig();
    const hasContent = ij(() => {
      return config.value.appearance || config.value.socialLinks;
    });
    return (_ctx, _cache) => {
      return hasContent.value ? (r3(), il(tO(_sfc_main$M), {
        key: 0,
        class: "VPNavBarExtra",
        label: "extra navigation"
      }, {
        default: nf(() => {
          var _a;
          return [
            tO(config).appearance ? (r3(), it("div", _hoisted_1$l, [
              iu("div", _hoisted_2$e, [
                iu("p", _hoisted_3$a, ep(((_a = tO(config).i18n) == null ? void 0 : _a.appearance) ?? "Appearance"), 1),
                iu("div", _hoisted_4$6, [
                  ic(tO(_sfc_main$H))
                ])
              ])
            ])) : iv("", true),
            tO(config).socialLinks ? (r3(), it("div", _hoisted_5$4, [
              iu("div", _hoisted_6$1, [
                ic(tO(_sfc_main$J), {
                  class: "social-links",
                  size: "small",
                  links: tO(config).socialLinks
                }, null, 8, ["links"])
              ])
            ])) : iv("", true)
          ];
        }),
        _: 1
      })) : iv("", true);
    };
  }
});
const VPNavBarExtra_vue_vue_type_style_index_0_scoped_cf4c09cd_lang = "";
const VPNavBarExtra = /* @__PURE__ */ _export_sfc$1(_sfc_main$w, [["__scopeId", "data-v-cf4c09cd"]]);
const _sfc_main$v = /* @__PURE__ */ nj({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    const { config } = useConfig();
    const hasContent = ij(() => {
      return config.value.appearance || config.value.socialLinks;
    });
    return (_ctx, _cache) => {
      return hasContent.value ? (r3(), il(tO(_sfc_main$L), {
        key: 0,
        class: "VPNavBarHamburger",
        active: _ctx.active
      }, null, 8, ["active"])) : iv("", true);
    };
  }
});
const VPNavBarHamburger_vue_vue_type_style_index_0_scoped_756f8498_lang = "";
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc$1(_sfc_main$v, [["__scopeId", "data-v-756f8498"]]);
const _hoisted_1$k = { class: "VPNavBar" };
const _hoisted_2$d = { class: "container" };
const _hoisted_3$9 = { class: "content" };
const _sfc_main$u = /* @__PURE__ */ nj({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return r3(), it("div", _hoisted_1$k, [
        iu("div", _hoisted_2$d, [
          ic(VPNavBarTitle, null, {
            "navbar-title": nf(() => [
              lR(_ctx.$slots, "navbar-title", {}, void 0, true)
            ]),
            _: 3
          }),
          iu("div", _hoisted_3$9, [
            ic(_sfc_main$F, { class: "search" }),
            ic(VPNavBarMenu, { class: "menu" }),
            ic(VPNavBarAppearance, { class: "appearance" }),
            ic(VPNavBarSocialLinks, { class: "social-links" }),
            ic(VPNavBarExtra, { class: "extra" }),
            ic(VPNavBarHamburger, {
              class: "hamburger",
              active: _ctx.isScreenOpen,
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-screen"))
            }, null, 8, ["active"])
          ])
        ])
      ]);
    };
  }
});
const VPNavBar_vue_vue_type_style_index_0_scoped_d6820efb_lang = "";
const VPNavBar = /* @__PURE__ */ _export_sfc$1(_sfc_main$u, [["__scopeId", "data-v-d6820efb"]]);
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}
var hasPassiveEvents = false;
if (typeof window !== "undefined") {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return void 0;
    }
  };
  window.addEventListener("testPassive", null, passiveTestOptions);
  window.removeEventListener("testPassive", null, passiveTestOptions);
}
var isIosDevice = typeof window !== "undefined" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;
var allowTouchMove = function allowTouchMove2(el) {
  return locks.some(function(lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }
    return false;
  });
};
var preventDefault = function preventDefault2(rawEvent) {
  var e = rawEvent || window.event;
  if (allowTouchMove(e.target)) {
    return true;
  }
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
};
var setOverflowHidden = function setOverflowHidden2(options) {
  if (previousBodyPaddingRight === void 0) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + "px";
    }
  }
  if (previousBodyOverflowSetting === void 0) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};
var restoreOverflowSetting = function restoreOverflowSetting2() {
  if (previousBodyPaddingRight !== void 0) {
    document.body.style.paddingRight = previousBodyPaddingRight;
    previousBodyPaddingRight = void 0;
  }
  if (previousBodyOverflowSetting !== void 0) {
    document.body.style.overflow = previousBodyOverflowSetting;
    previousBodyOverflowSetting = void 0;
  }
};
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled2(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};
var handleScroll = function handleScroll2(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;
  if (allowTouchMove(event.target)) {
    return false;
  }
  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    return preventDefault(event);
  }
  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    return preventDefault(event);
  }
  event.stopPropagation();
  return true;
};
var disableBodyScroll = function disableBodyScroll2(targetElement, options) {
  if (!targetElement) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (locks.some(function(lock2) {
    return lock2.targetElement === targetElement;
  })) {
    return;
  }
  var lock = {
    targetElement,
    options: options || {}
  };
  locks = [].concat(_toConsumableArray(locks), [lock]);
  if (isIosDevice) {
    targetElement.ontouchstart = function(event) {
      if (event.targetTouches.length === 1) {
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function(event) {
      if (event.targetTouches.length === 1) {
        handleScroll(event, targetElement);
      }
    };
    if (!documentListenerAdded) {
      document.addEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};
var clearAllBodyScrollLocks = function clearAllBodyScrollLocks2() {
  if (isIosDevice) {
    locks.forEach(function(lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });
    if (documentListenerAdded) {
      document.removeEventListener("touchmove", preventDefault, hasPassiveEvents ? { passive: false } : void 0);
      documentListenerAdded = false;
    }
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }
  locks = [];
};
const _sfc_main$t = /* @__PURE__ */ nj({
  __name: "VPNavScreenMenuLink",
  props: {
    text: {},
    link: {}
  },
  setup(__props) {
    const closeScreen = rn("close-screen");
    return (_ctx, _cache) => {
      return r3(), il(tO(_sfc_main$Q), {
        class: "VPNavScreenMenuLink",
        href: _ctx.link,
        onClick: tO(closeScreen)
      }, {
        default: nf(() => [
          ih(ep(_ctx.text), 1)
        ]),
        _: 1
      }, 8, ["href", "onClick"]);
    };
  }
});
const VPNavScreenMenuLink_vue_vue_type_style_index_0_scoped_07dbb3b1_lang = "";
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc$1(_sfc_main$t, [["__scopeId", "data-v-07dbb3b1"]]);
const _sfc_main$s = /* @__PURE__ */ nj({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    text: {},
    link: {}
  },
  setup(__props) {
    const closeScreen = rn("close-screen");
    return (_ctx, _cache) => {
      return r3(), il(tO(_sfc_main$Q), {
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.link,
        onClick: tO(closeScreen)
      }, {
        default: nf(() => [
          ih(ep(_ctx.text), 1)
        ]),
        _: 1
      }, 8, ["href", "onClick"]);
    };
  }
});
const VPNavScreenMenuGroupLink_vue_vue_type_style_index_0_scoped_2c1d8734_lang = "";
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc$1(_sfc_main$s, [["__scopeId", "data-v-2c1d8734"]]);
const _hoisted_1$j = { class: "VPNavScreenMenuGroupSection" };
const _hoisted_2$c = {
  key: 0,
  class: "title"
};
const _sfc_main$r = /* @__PURE__ */ nj({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return r3(), it("div", _hoisted_1$j, [
        _ctx.text ? (r3(), it("p", _hoisted_2$c, ep(_ctx.text), 1)) : iv("", true),
        (r3(true), it(r0, null, lT(_ctx.items, (item) => {
          return r3(), il(VPNavScreenMenuGroupLink, {
            key: item.text,
            text: item.text,
            link: item.link
          }, null, 8, ["text", "link"]);
        }), 128))
      ]);
    };
  }
});
const VPNavScreenMenuGroupSection_vue_vue_type_style_index_0_scoped_2e32081f_lang = "";
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc$1(_sfc_main$r, [["__scopeId", "data-v-2e32081f"]]);
const _hoisted_1$i = ["aria-controls", "aria-expanded"];
const _hoisted_2$b = { class: "button-text" };
const _hoisted_3$8 = ["id"];
const _hoisted_4$5 = {
  key: 1,
  class: "group"
};
const _sfc_main$q = /* @__PURE__ */ nj({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = tk(false);
    const groupId = ij(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return r3(), it("div", {
        class: es(["VPNavScreenMenuGroup", { open: isOpen.value }])
      }, [
        iu("button", {
          class: "button",
          "aria-controls": groupId.value,
          "aria-expanded": isOpen.value,
          onClick: toggle
        }, [
          iu("span", _hoisted_2$b, ep(_ctx.text), 1),
          ic(tO(VTIconPlus), { class: "button-icon" })
        ], 8, _hoisted_1$i),
        iu("div", {
          id: groupId.value,
          class: "items"
        }, [
          (r3(true), it(r0, null, lT(_ctx.items, (item) => {
            return r3(), it(r0, {
              key: item.text
            }, [
              "link" in item ? (r3(), it("div", {
                key: item.text,
                class: "item"
              }, [
                ic(VPNavScreenMenuGroupLink, {
                  text: item.text,
                  link: item.link
                }, null, 8, ["text", "link"])
              ])) : (r3(), it("div", _hoisted_4$5, [
                ic(VPNavScreenMenuGroupSection, {
                  text: item.text,
                  items: item.items
                }, null, 8, ["text", "items"])
              ]))
            ], 64);
          }), 128))
        ], 8, _hoisted_3$8)
      ], 2);
    };
  }
});
const VPNavScreenMenuGroup_vue_vue_type_style_index_0_scoped_bef856b8_lang = "";
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$q, [["__scopeId", "data-v-bef856b8"]]);
const _hoisted_1$h = {
  key: 0,
  class: "VPNavScreenMenu"
};
const _sfc_main$p = /* @__PURE__ */ nj({
  __name: "VPNavScreenMenu",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return tO(config).nav ? (r3(), it("nav", _hoisted_1$h, [
        (r3(true), it(r0, null, lT(tO(config).nav, (item) => {
          return r3(), it(r0, {
            key: item.text
          }, [
            "link" in item ? (r3(), il(VPNavScreenMenuLink, {
              key: 0,
              text: item.text,
              link: item.link
            }, null, 8, ["text", "link"])) : (r3(), il(VPNavScreenMenuGroup, {
              key: 1,
              text: item.text || "",
              items: item.items
            }, null, 8, ["text", "items"]))
          ], 64);
        }), 128))
      ])) : iv("", true);
    };
  }
});
const _hoisted_1$g = {
  key: 0,
  class: "VPNavScreenAppearance"
};
const _hoisted_2$a = { class: "text" };
const _sfc_main$o = /* @__PURE__ */ nj({
  __name: "VPNavScreenAppearance",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      var _a;
      return tO(config).appearance ? (r3(), it("div", _hoisted_1$g, [
        iu("p", _hoisted_2$a, ep(((_a = tO(config).i18n) == null ? void 0 : _a.appearance) ?? "Appearance"), 1),
        ic(tO(_sfc_main$H))
      ])) : iv("", true);
    };
  }
});
const VPNavScreenAppearance_vue_vue_type_style_index_0_scoped_93f6c638_lang = "";
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc$1(_sfc_main$o, [["__scopeId", "data-v-93f6c638"]]);
const _sfc_main$n = /* @__PURE__ */ nj({
  __name: "VPNavScreenSocialLinks",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      return tO(config).socialLinks ? (r3(), il(tO(_sfc_main$J), {
        key: 0,
        class: "VPNavScreenSocialLinks",
        size: "medium",
        links: tO(config).socialLinks
      }, null, 8, ["links"])) : iv("", true);
    };
  }
});
const _hoisted_1$f = {
  key: 0,
  class: "VPNavBarLocaleScreen"
};
const _hoisted_2$9 = { class: "title" };
const _sfc_main$m = /* @__PURE__ */ nj({
  __name: "VPNavBarScreenLocale",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      var _a;
      return tO(config).appearance ? (r3(), it("div", _hoisted_1$f, [
        iu("p", _hoisted_2$9, ep(((_a = tO(config).i18n) == null ? void 0 : _a.locales) ?? "Translations"), 1),
        ic(_sfc_main$C),
        ic(VPNavBarLocaleJoin)
      ])) : iv("", true);
    };
  }
});
const VPNavBarScreenLocale_vue_vue_type_style_index_0_scoped_09052c85_lang = "";
const VPNavBarScreenLocale = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__scopeId", "data-v-09052c85"]]);
const _hoisted_1$e = { class: "container" };
const _sfc_main$l = /* @__PURE__ */ nj({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = tk(null);
    function lockBodyScroll() {
      disableBodyScroll(screen.value, { reserveScrollBarGap: true });
    }
    function unlockBodyScroll() {
      clearAllBodyScrollLocks();
    }
    return (_ctx, _cache) => {
      return r3(), il(i7, {
        name: "fade",
        onEnter: lockBodyScroll,
        onAfterLeave: unlockBodyScroll
      }, {
        default: nf(() => [
          _ctx.open ? (r3(), it("div", {
            key: 0,
            class: "VPNavScreen",
            ref_key: "screen",
            ref: screen
          }, [
            iu("div", _hoisted_1$e, [
              ic(_sfc_main$p, { class: "menu" }),
              ic(VPNavBarScreenLocale),
              ic(VPNavScreenAppearance, { class: "appearance" }),
              ic(_sfc_main$n, { class: "social-links" })
            ])
          ], 512)) : iv("", true)
        ]),
        _: 1
      });
    };
  }
});
const VPNavScreen_vue_vue_type_style_index_0_scoped_43038936_lang = "";
const VPNavScreen = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__scopeId", "data-v-43038936"]]);
const _sfc_main$k = /* @__PURE__ */ nj({
  __name: "VPNav",
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { hasSidebar } = useSidebar();
    rt("close-screen", closeScreen);
    return (_ctx, _cache) => {
      return r3(), it("header", {
        class: es(["VPNav nav-bar", { stick: !tO(hasSidebar) }])
      }, [
        ic(VPNavBar, {
          "is-screen-open": tO(isScreenOpen),
          onToggleScreen: tO(toggleScreen)
        }, {
          "navbar-title": nf(() => [
            lR(_ctx.$slots, "navbar-title", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["is-screen-open", "onToggleScreen"]),
        ic(VPNavScreen, { open: tO(isScreenOpen) }, null, 8, ["open"])
      ], 2);
    };
  }
});
const VPNav_vue_vue_type_style_index_0_scoped_0e4b4273_lang = "";
const VPNav = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__scopeId", "data-v-0e4b4273"]]);
function useOutlineHeaders() {
  const { page } = useData();
  const filterHeaders = rn("filter-headers", null);
  return ij(() => {
    return resolveHeaders(page.value.headers, filterHeaders);
  });
}
function resolveHeaders(headers, filter) {
  return headers.map((header) => {
    var _a;
    return {
      text: header.title,
      link: header.link,
      children: ((_a = header.children) == null ? void 0 : _a.length) ? resolveHeaders(header.children, filter) : void 0,
      hidden: filter ? !filter(header) : false
    };
  });
}
function useActiveAnchor(container, bg) {
  const isOutlineEnabled = useMediaQuery("(min-width: 1280px)");
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  function setActiveLink() {
    if (!isOutlineEnabled.value) {
      return;
    }
    const links = [].slice.call(
      container.value.querySelectorAll(".outline-link")
    );
    const anchors = [].slice.call(document.querySelectorAll(".content .header-anchor")).filter(
      (anchor) => links.some(
        (link) => link.hash === anchor.hash && anchor.offsetParent !== null
      )
    );
    if (anchors.length && // https://github.com/vuejs/theme/pull/74
    window.scrollY + window.innerHeight >= document.body.offsetHeight - 1) {
      activateLink(anchors[anchors.length - 1].hash);
      return;
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const nextAnchor = anchors[i + 1];
      const [isActive2, hash] = isAnchorActive(i, anchor, nextAnchor);
      if (isActive2) {
        activateLink(hash);
        return;
      }
    }
  }
  let prevActiveLink = null;
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    const activeLink = prevActiveLink = hash == null ? null : container.value.querySelector(
      `a[href="${decodeURIComponent(hash)}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
      bg.value.style.opacity = "1";
      bg.value.style.top = activeLink.offsetTop + 33 + "px";
    } else {
      bg.value.style.opacity = "0";
      bg.value.style.top = "33px";
    }
  }
  lf(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  ld(() => {
    activateLink(location.hash);
  });
  lg(() => {
    window.removeEventListener("scroll", onScroll);
  });
}
const pageOffset = 56;
function getAnchorTop(anchor) {
  return anchor.parentElement.offsetTop - pageOffset - 15;
}
function isAnchorActive(index2, anchor, nextAnchor) {
  const scrollTop = window.scrollY;
  if (index2 === 0 && scrollTop === 0) {
    return [true, null];
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null];
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash];
  }
  return [false, null];
}
function throttleAndDebounce(fn, delay) {
  let timeout;
  let called = false;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (!called) {
      fn();
      called = true;
      setTimeout(() => {
        called = false;
      }, delay);
    } else {
      timeout = setTimeout(fn, delay);
    }
  };
}
const _hoisted_1$d = ["href"];
const _sfc_main$j = /* @__PURE__ */ nj({
  __name: "VPDocOutlineItem",
  props: {
    headers: {},
    nested: { type: Boolean }
  },
  setup(__props) {
    const { frontmatter } = useData();
    function onClick({ target: el }) {
      const id = "#" + el.href.split("#")[1];
      const heading = document.querySelector(
        decodeURIComponent(id)
      );
      heading == null ? void 0 : heading.focus();
    }
    return (_ctx, _cache) => {
      const _component_VPDocOutlineItem = lS("VPDocOutlineItem", true);
      return r3(), it("ul", {
        class: es(_ctx.nested ? "nested" : "root")
      }, [
        (r3(true), it(r0, null, lT(_ctx.headers, ({ children, link, text, hidden }) => {
          return r3(), it("li", null, [
            np(iu("a", {
              class: "outline-link",
              href: link,
              onClick
            }, ep(text), 9, _hoisted_1$d), [
              [sh, !hidden]
            ]),
            (children == null ? void 0 : children.length) && tO(frontmatter).outline === "deep" ? (r3(), il(_component_VPDocOutlineItem, {
              key: 0,
              headers: children,
              nested: true
            }, null, 8, ["headers"])) : iv("", true)
          ]);
        }), 256))
      ], 2);
    };
  }
});
const VPDocOutlineItem_vue_vue_type_style_index_0_scoped_2baf416d_lang = "";
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__scopeId", "data-v-2baf416d"]]);
const _sfc_main$i = /* @__PURE__ */ nj({
  __name: "VPLocalNavOutlineDropdown",
  setup(__props) {
    const { config } = useConfig();
    const open = tk(false);
    const vh = tk(0);
    const items = tk();
    const headers = useOutlineHeaders();
    onContentUpdated(() => {
      open.value = false;
    });
    function toggle() {
      open.value = !open.value;
      vh.value = window.innerHeight + Math.min(window.scrollY - 64, 0);
    }
    function onItemClick(e) {
      if (e.target.classList.contains("outline-link")) {
        if (items.value) {
          items.value.style.transition = "none";
        }
        t9(() => {
          open.value = false;
        });
      }
    }
    function scrollToTop() {
      open.value = false;
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => {
      var _a;
      return r3(), it("div", {
        class: "VPLocalNavOutlineDropdown",
        style: en({ "--vt-vh": vh.value + "px" })
      }, [
        iu("button", {
          onClick: toggle,
          class: es({ open: open.value })
        }, [
          ih(ep(((_a = tO(config).i18n) == null ? void 0 : _a.toc) ?? "On this page") + " ", 1),
          ic(VTIconChevronRight, { class: "icon" })
        ], 2),
        ic(i7, { name: "flyout" }, {
          default: nf(() => {
            var _a2;
            return [
              open.value ? (r3(), it("div", {
                key: 0,
                ref_key: "items",
                ref: items,
                class: "items",
                onClick: onItemClick
              }, [
                iu("a", {
                  class: "top-link",
                  href: "#",
                  onClick: scrollToTop
                }, ep(((_a2 = tO(config).i18n) == null ? void 0 : _a2.returnToTop) || "Return to top"), 1),
                ic(VPDocOutlineItem, { headers: tO(headers) }, null, 8, ["headers"])
              ], 512)) : iv("", true)
            ];
          }),
          _: 1
        })
      ], 4);
    };
  }
});
const VPLocalNavOutlineDropdown_vue_vue_type_style_index_0_scoped_687b538b_lang = "";
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__scopeId", "data-v-687b538b"]]);
const _hoisted_1$c = {
  key: 0,
  class: "VPLocalNav"
};
const _hoisted_2$8 = ["aria-expanded"];
const _hoisted_3$7 = { class: "menu-text" };
const _sfc_main$h = /* @__PURE__ */ nj({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { hasSidebar } = useSidebar();
    const { config } = useConfig();
    const { frontmatter } = useData();
    return (_ctx, _cache) => {
      var _a;
      return tO(hasSidebar) ? (r3(), it("div", _hoisted_1$c, [
        iu("button", {
          class: "menu",
          "aria-expanded": _ctx.open,
          "aria-controls": "VPSidebarNav",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
        }, [
          ic(tO(VTIconAlignLeft), { class: "menu-icon" }),
          iu("span", _hoisted_3$7, ep(((_a = tO(config).i18n) == null ? void 0 : _a.menu) || "Menu"), 1)
        ], 8, _hoisted_2$8),
        tO(frontmatter).outline !== false ? (r3(), il(VPLocalNavOutlineDropdown, { key: 0 })) : iv("", true)
      ])) : iv("", true);
    };
  }
});
const VPLocalNav_vue_vue_type_style_index_0_scoped_0ae2fdf0_lang = "";
const VPLocalNav = /* @__PURE__ */ _export_sfc$1(_sfc_main$h, [["__scopeId", "data-v-0ae2fdf0"]]);
const _sfc_main$g = /* @__PURE__ */ nj({
  __name: "VPSkipLink",
  setup(__props) {
    const { config } = useConfig();
    const route = useRoute();
    const backToTop = tk();
    rM(
      () => route.path,
      () => backToTop.value.focus()
    );
    const focusOnTargetAnchor = ({ target }) => {
      const el = document.querySelector(
        target.hash
      );
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    return (_ctx, _cache) => {
      var _a;
      return r3(), it(r0, null, [
        iu("span", {
          ref_key: "backToTop",
          ref: backToTop,
          tabindex: "-1"
        }, null, 512),
        iu("a", {
          href: "#VPContent",
          class: "VPSkipLink visually-hidden",
          onClick: focusOnTargetAnchor
        }, ep(((_a = tO(config).i18n) == null ? void 0 : _a.ariaSkipToContent) ?? "Skip to content"), 1)
      ], 64);
    };
  }
});
const VPSkipLink_vue_vue_type_style_index_0_scoped_92947aee_lang = "";
const VPSkipLink = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["__scopeId", "data-v-92947aee"]]);
const _hoisted_1$b = {
  class: "visually-hidden",
  "aria-live": "polite"
};
const _sfc_main$f = /* @__PURE__ */ nj({
  __name: "VPAnnouncer",
  setup(__props) {
    const { page } = useData();
    const { config } = useConfig();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return r3(), it("div", _hoisted_1$b, ep(((_b = (_a = tO(config).i18n) == null ? void 0 : _a.ariaAnnouncer) == null ? void 0 : _b.before) ?? "") + ep(tO(page).title) + ep(((_d = (_c = tO(config).i18n) == null ? void 0 : _c.ariaAnnouncer) == null ? void 0 : _d.after) ?? " has loaded"), 1);
    };
  }
});
const elTree = "";
const elCheckbox = "";
const _sfc_main$e = /* @__PURE__ */ nj({
  __name: "VPSidebarGroup",
  setup(__props) {
    const { page } = useData();
    const { go } = useRouter();
    const { sidebar } = useSidebar();
    const closeSideBar = rn("close-sidebar");
    const updateActive = (item, node) => {
      const isAct = isActive(page.value.relativePath, item.link) ? "active" : "";
      return `${isAct} ${!node.isLeaf && [1, 2].includes(node.level) || node.level === 1 && node.isLeaf ? "node-bold-level" : ""}`;
    };
    const elTreeOpt = {
      children: "items",
      label: "text",
      isLeaf: "isLeaf",
      class: updateActive
    };
    function renderContent(h, { data }) {
      return h(
        "span",
        {
          class: "el-tree-node__label",
          ref: (el) => {
            if (el && el instanceof HTMLElement) {
              const isAct = isActive(page.value.relativePath, data.link);
              isAct && el.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }
        },
        data.text
      );
    }
    function linkTo(data, node) {
      if (data.link) {
        closeSideBar();
        go(data.link);
      }
    }
    return (_ctx, _cache) => {
      const _component_el_tree = ElTree;
      return r3(), il(_component_el_tree, {
        data: tO(sidebar),
        "node-key": "link",
        props: elTreeOpt,
        "default-expand-all": true,
        "highlight-current": true,
        indent: 10,
        onNodeClick: linkTo,
        "render-content": renderContent
      }, null, 8, ["data"]);
    };
  }
});
const VPSidebarGroup_vue_vue_type_style_index_0_scoped_924b5454_lang = "";
const VPSidebarGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["__scopeId", "data-v-924b5454"]]);
const _hoisted_1$a = {
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
};
const _hoisted_2$7 = {
  id: "sidebar-aria-label",
  class: "visually-hidden"
};
const _sfc_main$d = /* @__PURE__ */ nj({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebar, hasSidebar } = useSidebar();
    const { config } = useConfig();
    const props = __props;
    let navEl = tk(null);
    rO(async () => {
      var _a;
      if (props.open) {
        await t9();
        (_a = navEl.value) == null ? void 0 : _a.focus();
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return tO(hasSidebar) ? (r3(), it("aside", {
        key: 0,
        ref_key: "navEl",
        ref: navEl,
        class: es(["VPSidebar", { open: _ctx.open }]),
        onClick: _cache[0] || (_cache[0] = ol(() => {
        }, ["stop"]))
      }, [
        iu("nav", _hoisted_1$a, [
          lR(_ctx.$slots, "top", {}, void 0, true),
          iu("span", _hoisted_2$7, ep(((_a = tO(config).i18n) == null ? void 0 : _a.ariaSidebarNav) ?? "Sidebar Navigation"), 1),
          ic(VPSidebarGroup),
          lR(_ctx.$slots, "bottom", {}, void 0, true)
        ])
      ], 2)) : iv("", true);
    };
  }
});
const VPSidebar_vue_vue_type_style_index_0_scoped_09bea053_lang = "";
const VPSidebar = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__scopeId", "data-v-09bea053"]]);
const _hoisted_1$9 = { class: "VPFooter" };
const _hoisted_2$6 = {
  key: 0,
  class: "license"
};
const _hoisted_3$6 = {
  key: 1,
  class: "copyright"
};
const _sfc_main$c = /* @__PURE__ */ nj({
  __name: "VPFooter",
  setup(__props) {
    const { config } = useConfig();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return r3(), it("div", _hoisted_1$9, [
        ((_a = tO(config).footer) == null ? void 0 : _a.license) ? (r3(), it("p", _hoisted_2$6, [
          ih(ep(((_c = (_b = tO(config).i18n) == null ? void 0 : _b.footerLicense) == null ? void 0 : _c.before) ?? "Released under the "), 1),
          ic(tO(_sfc_main$Q), {
            class: "link",
            href: tO(config).footer.license.link,
            "no-icon": ""
          }, {
            default: nf(() => [
              ih(ep(tO(config).footer.license.text), 1)
            ]),
            _: 1
          }, 8, ["href"]),
          ih(ep(((_e = (_d = tO(config).i18n) == null ? void 0 : _d.footerLicense) == null ? void 0 : _e.after) ?? "."), 1)
        ])) : iv("", true),
        ((_f = tO(config).footer) == null ? void 0 : _f.copyright) ? (r3(), it("p", _hoisted_3$6, ep(tO(config).footer.copyright), 1)) : iv("", true)
      ]);
    };
  }
});
const VPFooter_vue_vue_type_style_index_0_scoped_da4ed38b_lang = "";
const VPFooter = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__scopeId", "data-v-da4ed38b"]]);
const _hoisted_1$8 = { class: "VPContentPage" };
const _sfc_main$b = /* @__PURE__ */ nj({
  __name: "VPContentPage",
  setup(__props) {
    const { frontmatter } = useData();
    return (_ctx, _cache) => {
      const _component_Content = lS("Content");
      return r3(), it("div", _hoisted_1$8, [
        iu("main", null, [
          ic(_component_Content)
        ]),
        lR(_ctx.$slots, "footer-before"),
        tO(frontmatter).footer !== false ? (r3(), il(VPFooter, { key: 0 })) : iv("", true),
        lR(_ctx.$slots, "footer-after")
      ]);
    };
  }
});
const _hoisted_1$7 = { class: "outline-title" };
const _hoisted_2$5 = { "aria-labelledby": "doc-outline-aria-label" };
const _hoisted_3$5 = {
  id: "doc-outline-aria-label",
  class: "visually-hidden"
};
const _sfc_main$a = /* @__PURE__ */ nj({
  __name: "VPContentDocOutline",
  setup(__props) {
    const { config } = useConfig();
    const container = tk();
    const marker = tk();
    const headers = useOutlineHeaders();
    useActiveAnchor(container, marker);
    return (_ctx, _cache) => {
      var _a, _b;
      return r3(), it("div", {
        class: "VPContentDocOutline",
        ref_key: "container",
        ref: container
      }, [
        iu("div", {
          class: "outline-marker",
          ref_key: "marker",
          ref: marker
        }, null, 512),
        iu("div", _hoisted_1$7, ep(((_a = tO(config).i18n) == null ? void 0 : _a.toc) ?? "On this page"), 1),
        iu("nav", _hoisted_2$5, [
          iu("span", _hoisted_3$5, ep(((_b = tO(config).i18n) == null ? void 0 : _b.ariaToC) ?? "Table of Contents for current page"), 1),
          ic(VPDocOutlineItem, { headers: tO(headers) }, null, 8, ["headers"])
        ])
      ], 512);
    };
  }
});
const VPContentDocOutline_vue_vue_type_style_index_0_scoped_f9077104_lang = "";
const VPContentDocOutline = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__scopeId", "data-v-f9077104"]]);
const _hoisted_1$6 = {
  key: 0,
  class: "VPContentDocFooter"
};
const _hoisted_2$4 = ["href"];
const _hoisted_3$4 = { class: "desc" };
const _hoisted_4$4 = { class: "title" };
const _hoisted_5$3 = ["href"];
const _hoisted_6 = { class: "desc" };
const _hoisted_7 = { class: "title" };
const _sfc_main$9 = /* @__PURE__ */ nj({
  __name: "VPContentDocFooter",
  setup(__props) {
    const { page } = useData();
    const { config } = useConfig();
    const links = ij(() => {
      const sidebar = getSidebar(config.value.sidebar, page.value.relativePath);
      const candidates = getFlatSideBarLinks(sidebar);
      const index2 = candidates.findIndex(
        (link) => isActive(page.value.relativePath, link.link)
      );
      return {
        prev: candidates[index2 - 1],
        next: candidates[index2 + 1]
      };
    });
    function getFlatSideBarLinks(sidebar) {
      const links2 = [];
      for (const group of sidebar) {
        for (const link of group.items) {
          links2.push(link);
        }
      }
      return links2;
    }
    return (_ctx, _cache) => {
      var _a, _b;
      return links.value.prev || links.value.next ? (r3(), it("footer", _hoisted_1$6, [
        links.value.prev ? (r3(), it("a", {
          key: 0,
          class: "prev-link",
          href: tO(normalizeLink)(links.value.prev.link)
        }, [
          iu("span", _hoisted_3$4, [
            ic(tO(VTIconChevronLeft), { class: "vt-link-icon" }),
            ih(" " + ep(((_a = tO(config).i18n) == null ? void 0 : _a.previous) ?? "Previous"), 1)
          ]),
          iu("span", _hoisted_4$4, ep(links.value.prev.text), 1)
        ], 8, _hoisted_2$4)) : iv("", true),
        links.value.next ? (r3(), it("a", {
          key: 1,
          class: "next-link",
          href: tO(normalizeLink)(links.value.next.link)
        }, [
          iu("span", _hoisted_6, [
            ih(ep(((_b = tO(config).i18n) == null ? void 0 : _b.next) ?? "Next") + " ", 1),
            ic(tO(VTIconChevronRight), { class: "vt-link-icon" })
          ]),
          iu("span", _hoisted_7, ep(links.value.next.text), 1)
        ], 8, _hoisted_5$3)) : iv("", true)
      ])) : iv("", true);
    };
  }
});
const VPContentDocFooter_vue_vue_type_style_index_0_scoped_9eda54bd_lang = "";
const VPContentDocFooter = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__scopeId", "data-v-9eda54bd"]]);
const _sfc_main$8 = /* @__PURE__ */ nj({
  __name: "VPCarbonAds",
  setup(__props) {
    const { config } = useConfig();
    const carbonOptions = config.value.carbonAds;
    const container = tk();
    const isWide = useMediaQuery("(min-width: 1280px)");
    let hasInitalized = false;
    function init() {
      if (!hasInitalized) {
        hasInitalized = true;
        const s = document.createElement("script");
        s.id = "_carbonads_js";
        s.src = `//cdn.carbonads.com/carbon.js?serve=${carbonOptions.code}&placement=${carbonOptions.placement}`;
        s.async = true;
        container.value.appendChild(s);
      }
    }
    if (carbonOptions) {
      lf(() => {
        if (isWide.value) {
          init();
        } else {
          rM(isWide, (wide) => wide && init());
        }
      });
    }
    return (_ctx, _cache) => {
      return r3(), it("div", {
        class: "VPCarbonAds",
        ref_key: "container",
        ref: container
      }, null, 512);
    };
  }
});
const VPCarbonAds_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = { class: "container" };
const _hoisted_2$3 = {
  key: 0,
  class: "aside"
};
const _hoisted_3$3 = { class: "aside-container" };
const _hoisted_4$3 = { class: "content" };
const _hoisted_5$2 = {
  key: 0,
  class: "edit-link"
};
const _sfc_main$7 = /* @__PURE__ */ nj({
  __name: "VPContentDoc",
  setup(__props) {
    const { page, frontmatter } = useData();
    const { config } = useConfig();
    const repoUrl = ij(() => {
      var _a;
      const repo = ((_a = config.value.editLink) == null ? void 0 : _a.repo) || "https://github.com/tunaizi/tunaizi.github.io/edit/main/src";
      if (typeof repo == "function") {
        return repo(page.value.relativePath);
      }
      return `${repo}/${page.value.relativePath}`;
    });
    const pageClass = ij(() => {
      const { relativePath } = page.value;
      return relativePath.slice(0, relativePath.indexOf("/"));
    });
    return (_ctx, _cache) => {
      const _component_Content = lS("Content");
      return r3(), it("div", {
        class: es(["VPContentDoc", {
          "has-aside": tO(frontmatter).aside !== false,
          VPContentDocRepl: tO(frontmatter).isRepl === true
        }])
      }, [
        iu("div", _hoisted_1$5, [
          tO(frontmatter).aside !== false ? (r3(), it("div", _hoisted_2$3, [
            iu("div", _hoisted_3$3, [
              lR(_ctx.$slots, "aside-top", {}, void 0, true),
              tO(page).headers && tO(frontmatter).outline !== false ? (r3(), il(VPContentDocOutline, { key: 0 })) : iv("", true),
              lR(_ctx.$slots, "aside-mid", {}, void 0, true),
              tO(config).carbonAds && tO(frontmatter).ads !== false ? (r3(), il(_sfc_main$8, { key: 1 })) : iv("", true),
              lR(_ctx.$slots, "aside-bottom", {}, void 0, true)
            ])
          ])) : iv("", true),
          iu("div", _hoisted_4$3, [
            lR(_ctx.$slots, "content-top", {}, void 0, true),
            iu("main", null, [
              ic(_component_Content, {
                class: es(["vt-doc", pageClass.value])
              }, null, 8, ["class"]),
              tO(config).editLink && tO(frontmatter).editLink !== false ? (r3(), it("p", _hoisted_5$2, [
                ic(tO(VTIconEdit), { class: "vt-icon" }),
                ic(tO(_sfc_main$Q), {
                  href: repoUrl.value,
                  "no-icon": true
                }, {
                  default: nf(() => [
                    ih(ep(tO(config).editLink.text), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ])) : iv("", true)
            ]),
            lR(_ctx.$slots, "content-bottom", {}, void 0, true),
            tO(frontmatter).footer !== false ? (r3(), il(VPContentDocFooter, { key: 0 })) : iv("", true)
          ])
        ])
      ], 2);
    };
  }
});
const VPContentDoc_vue_vue_type_style_index_0_scoped_09a102db_lang = "";
const VPContentDoc = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["__scopeId", "data-v-09a102db"]]);
const _hoisted_1$4 = { class: "vt-doc" };
const _hoisted_2$2 = { class: "not-found-path" };
const _hoisted_3$2 = { key: 0 };
const _hoisted_4$2 = ["href"];
const _sfc_main$6 = /* @__PURE__ */ nj({
  __name: "VPNotFound",
  setup(__props) {
    const route = useRoute();
    const { config } = useConfig();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      return r3(), it("div", _hoisted_1$4, [
        iu("h1", null, ep(((_a = tO(config).i18n) == null ? void 0 : _a.pageNotFound) ?? "Page Not Found"), 1),
        iu("p", null, [
          ih(ep(((_c = (_b = tO(config).i18n) == null ? void 0 : _b.deadLink) == null ? void 0 : _c.before) ?? "You found a dead link: "), 1),
          iu("span", _hoisted_2$2, ep(tO(route).path), 1),
          ih(ep(((_e = (_d = tO(config).i18n) == null ? void 0 : _d.deadLink) == null ? void 0 : _e.after) ?? ""), 1),
          _cache[0] || (_cache[0] = iu("br", null, null, -1)),
          ((_f = tO(config).editLink) == null ? void 0 : _f.repo) ? (r3(), it("span", _hoisted_3$2, [
            ih(ep(((_h = (_g = tO(config).i18n) == null ? void 0 : _g.deadLinkReport) == null ? void 0 : _h.before) ?? "Please "), 1),
            iu("a", {
              href: `https://github.com/${(_i = tO(config).editLink) == null ? void 0 : _i.repo}`,
              target: "_blank"
            }, ep(((_k = (_j = tO(config).i18n) == null ? void 0 : _j.deadLinkReport) == null ? void 0 : _k.link) ?? "let us know"), 9, _hoisted_4$2),
            ih(ep(((_m = (_l = tO(config).i18n) == null ? void 0 : _l.deadLinkReport) == null ? void 0 : _m.after) ?? " so we can fix it."), 1)
          ])) : iv("", true)
        ])
      ]);
    };
  }
});
const VPNotFound_vue_vue_type_style_index_0_scoped_0acfa420_lang = "";
const VPNotFound = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["__scopeId", "data-v-0acfa420"]]);
const _sfc_main$5 = /* @__PURE__ */ nj({
  __name: "VPContent",
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return r3(), it("div", {
        id: "VPContent",
        class: es(["VPContent", { "has-sidebar": tO(hasSidebar) }])
      }, [
        tO(page).isNotFound ? (r3(), il(VPNotFound, { key: 0 })) : !!tO(frontmatter).page ? (r3(), il(_sfc_main$b, { key: 1 }, {
          "footer-before": nf(() => [
            lR(_ctx.$slots, "footer-before", {}, void 0, true)
          ]),
          "footer-after": nf(() => [
            lR(_ctx.$slots, "footer-after", {}, void 0, true)
          ]),
          _: 3
        })) : (r3(), il(VPContentDoc, {
          key: 2,
          class: es({ "has-sidebar": tO(hasSidebar) })
        }, {
          "content-top": nf(() => [
            lR(_ctx.$slots, "content-top", {}, void 0, true)
          ]),
          "content-bottom": nf(() => [
            lR(_ctx.$slots, "content-bottom", {}, void 0, true)
          ]),
          "aside-top": nf(() => [
            lR(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-mid": nf(() => [
            lR(_ctx.$slots, "aside-mid", {}, void 0, true)
          ]),
          "aside-bottom": nf(() => [
            lR(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          default: nf(() => [
            _cache[0] || (_cache[0] = ih("\\ "))
          ]),
          _: 3
        }, 8, ["class"]))
      ], 2);
    };
  }
});
const VPContent_vue_vue_type_style_index_0_scoped_6d0a1a47_lang = "";
const VPContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-6d0a1a47"]]);
const _hoisted_1$3 = { class: "VPApp" };
const _sfc_main$4 = /* @__PURE__ */ nj({
  __name: "VPApp",
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    let triggerElement;
    rN(() => {
      triggerElement = isSidebarOpen.value ? document.activeElement : void 0;
    });
    const onEscape = (e) => {
      if (e.key === "Escape" && isSidebarOpen.value) {
        closeSidebar();
        triggerElement == null ? void 0 : triggerElement.focus();
      }
    };
    lf(() => {
      window.addEventListener("keyup", onEscape);
    });
    lg(() => {
      window.removeEventListener("keyup", onEscape);
    });
    rt("close-sidebar", closeSidebar);
    return (_ctx, _cache) => {
      return r3(), it("div", _hoisted_1$3, [
        ic(VPSkipLink),
        ic(tO(_sfc_main$R), {
          class: "backdrop",
          show: tO(isSidebarOpen),
          onClick: tO(closeSidebar)
        }, null, 8, ["show", "onClick"]),
        lR(_ctx.$slots, "banner", {}, void 0, true),
        ic(VPNav, null, {
          "navbar-title": nf(() => [
            lR(_ctx.$slots, "navbar-title", {}, void 0, true)
          ]),
          _: 3
        }),
        ic(VPLocalNav, {
          open: tO(isSidebarOpen),
          onOpenMenu: tO(openSidebar)
        }, null, 8, ["open", "onOpenMenu"]),
        ic(VPSidebar, { open: tO(isSidebarOpen) }, {
          top: nf(() => [
            lR(_ctx.$slots, "sidebar-top", {}, void 0, true)
          ]),
          bottom: nf(() => [
            lR(_ctx.$slots, "sidebar-bottom", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"]),
        ic(VPContent, null, {
          "content-top": nf(() => [
            lR(_ctx.$slots, "content-top", {}, void 0, true)
          ]),
          "content-bottom": nf(() => [
            lR(_ctx.$slots, "content-bottom", {}, void 0, true)
          ]),
          "aside-top": nf(() => [
            lR(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-mid": nf(() => [
            lR(_ctx.$slots, "aside-mid", {}, void 0, true)
          ]),
          "aside-bottom": nf(() => [
            lR(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          "footer-before": nf(() => [
            lR(_ctx.$slots, "footer-before", {}, void 0, true)
          ]),
          "footer-after": nf(() => [
            lR(_ctx.$slots, "footer-after", {}, void 0, true)
          ]),
          _: 3
        }),
        ic(_sfc_main$f)
      ]);
    };
  }
});
const VPApp_vue_vue_type_style_index_0_scoped_27b4de2b_lang = "";
const VPApp = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-27b4de2b"]]);
const VPTheme = {
  Layout: withConfigProvider(VPApp)
};
const inBrowser = typeof window !== "undefined";
const get = (key, defaultValue = false) => inBrowser ? JSON.parse(localStorage.getItem(key) || String(defaultValue)) : defaultValue;
const preferCompositionKey = "vue-docs-prefer-composition";
const preferComposition = tk(get(preferCompositionKey, true));
const preferSFCKey = "vue-docs-prefer-sfc";
const preferSFC = tk(get(preferSFCKey, true));
const storageKey = "vitepress-theme-appearance";
function useAppearance() {
  if (typeof localStorage === "undefined") {
    return {
      isDark: false,
      toggle: () => {
      }
    };
  }
  let userPreference = localStorage.getItem(storageKey) || "auto";
  const query = window.matchMedia(`(prefers-color-scheme: dark)`);
  const classList = document.documentElement.classList;
  const isDark = tk(
    userPreference === "auto" ? query.matches : userPreference === "dark"
  );
  const setClass = (dark) => classList[dark ? "add" : "remove"]("dark");
  query.onchange = (e) => {
    if (userPreference === "auto") {
      setClass(isDark.value = e.matches);
    }
  };
  const toggle = () => {
    setClass(isDark.value = !isDark.value);
    localStorage.setItem(
      storageKey,
      userPreference = isDark.value ? query.matches ? "auto" : "dark" : query.matches ? "light" : "auto"
    );
  };
  return {
    isDark,
    toggle
  };
}
function filterHeadersByPreference(h) {
  return preferComposition.value ? !h.optionsOnly : !h.compositionOnly;
}
const _hoisted_1$2 = {
  key: 0,
  class: "preference-tooltip"
};
const _sfc_main$3 = /* @__PURE__ */ nj({
  __name: "PreferenceTooltip",
  setup(__props) {
    const show = tk(false);
    const { page } = useData();
    let source = inBrowser && localStorage.getItem(preferCompositionKey) === null ? "default" : false;
    if (inBrowser) {
      const match = location.search.match(/[\?&]api=(\w+)/);
      const preference = match && match[1];
      if (preference === "composition") {
        setPreference(true, "url-query");
      } else if (preference === "options") {
        setPreference(false, "url-query");
      } else {
        if (location.hash) {
          const h = findHeader(page.value.headers, location.hash);
          if (h && h.optionsOnly) {
            setPreference(false, "url-header");
          } else if (h && h.compositionOnly) {
            setPreference(true, "url-header");
          }
        }
      }
    }
    function findHeader(headers, link) {
      for (const h of headers) {
        if (h.link === link) {
          return h;
        }
        if (h.children) {
          const c = findHeader(h.children, link);
          if (c)
            return c;
        }
      }
    }
    function setPreference(capi, s) {
      if (capi && !preferComposition.value) {
        source = s;
        preferComposition.value = true;
        document.documentElement.classList.add("prefer-composition");
      } else if (!capi && preferComposition.value) {
        source = s;
        preferComposition.value = false;
        document.documentElement.classList.remove("prefer-composition");
      }
    }
    lf(() => {
      if (!page.value.relativePath.startsWith("tutorial/") && source !== false) {
        show.value = true;
        const stop = rM(preferComposition, () => {
          show.value = false;
          stop();
        });
      }
    });
    function dismiss() {
      show.value = false;
      if (source === "default") {
        localStorage.setItem(
          preferCompositionKey,
          String(preferComposition.value)
        );
      }
    }
    return (_ctx, _cache) => {
      return r3(), il(i7, { name: "fly-in" }, {
        default: nf(() => [
          show.value ? (r3(), it("div", _hoisted_1$2, [
            tO(source) === "default" ? (r3(), it(r0, { key: 0 }, [
              _cache[0] || (_cache[0] = iu("p", null, "现在将默认使用组合式 API 风格。", -1)),
              _cache[1] || (_cache[1] = iu("p", null, " 一些页面根据所选的 API 风格将包含不同的内容。可以通过此开关在它们之间切换。 ", -1))
            ], 64)) : iv("", true),
            tO(source) && tO(source).startsWith("url") ? (r3(), it(r0, { key: 1 }, [
              iu("p", null, " 正在显示 " + ep(tO(preferComposition) ? "组合式" : "选项式") + " API 的内容，这是因为 " + ep(tO(source) === "url-query" ? "通过 URL 查询参数指定了。" : "目标章节仅适用于此 API。"), 1),
              _cache[2] || (_cache[2] = iu("p", null, " 这与你已保存的首选项不同，且仅会影响当前的浏览会话。 ", -1))
            ], 64)) : iv("", true),
            iu("p", { class: "actions" }, [
              _cache[3] || (_cache[3] = iu("a", { href: "/guide/introduction#api-styles" }, "了解详情", -1)),
              iu("button", { onClick: dismiss }, "知道了")
            ]),
            _cache[4] || (_cache[4] = iu("div", { class: "arrow-top" }, null, -1)),
            _cache[5] || (_cache[5] = iu("div", { class: "arrow-top inner" }, null, -1))
          ])) : iv("", true)
        ]),
        _: 1
      });
    };
  }
});
const PreferenceTooltip_vue_vue_type_style_index_0_scoped_3809ac97_lang = "";
const PreferenceTooltip = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-3809ac97"]]);
const _hoisted_1$1 = {
  key: 0,
  class: "preference-switch"
};
const _hoisted_2$1 = ["aria-expanded"];
const _hoisted_3$1 = ["hidden", "aria-hidden"];
const _hoisted_4$1 = { class: "switch-container" };
const _hoisted_5$1 = {
  key: 0,
  class: "switch-container"
};
const _sfc_main$2 = /* @__PURE__ */ nj({
  __name: "PreferenceSwitch",
  setup(__props) {
    const route = useRoute();
    const show = ij(
      () => /^\/(guide|tutorial|examples|style-guide)\//.test(route.path)
    );
    const showSFC = ij(() => !/^\/guide|style-guide/.test(route.path));
    let isOpen = tk(true);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    const removeOutline = (e) => {
      e.target.classList.add("no-outline");
    };
    const restoreOutline = (e) => {
      e.target.classList.remove("no-outline");
    };
    const toggleCompositionAPI = useToggleFn(
      preferCompositionKey,
      preferComposition,
      "prefer-composition"
    );
    const toggleSFC = useToggleFn(preferSFCKey, preferSFC, "prefer-sfc");
    const closeSideBar = rn("close-sidebar");
    function useToggleFn(storageKey2, state, className) {
      if (typeof localStorage === "undefined") {
        return () => {
        };
      }
      const classList = document.documentElement.classList;
      return (value = !state.value) => {
        if (state.value = value) {
          classList.add(className);
        } else {
          classList.remove(className);
        }
        localStorage.setItem(storageKey2, String(state.value));
      };
    }
    return (_ctx, _cache) => {
      return show.value ? (r3(), it("div", _hoisted_1$1, [
        iu("button", {
          class: "toggle",
          "aria-label": "偏好切换开关",
          "aria-controls": "preference-switches",
          "aria-expanded": tO(isOpen),
          onClick: toggleOpen,
          onMousedown: removeOutline,
          onBlur: restoreOutline
        }, [
          _cache[8] || (_cache[8] = iu("span", null, "API 风格偏好", -1)),
          ic(tO(VTIconChevronDown), {
            class: es(["vt-link-icon", { open: tO(isOpen) }])
          }, null, 8, ["class"])
        ], 40, _hoisted_2$1),
        iu("div", {
          id: "preference-switches",
          hidden: !tO(isOpen),
          "aria-hidden": !tO(isOpen)
        }, [
          iu("div", _hoisted_4$1, [
            iu("label", {
              class: "options-label",
              onClick: _cache[0] || (_cache[0] = ($event) => tO(toggleCompositionAPI)(false))
            }, "选项式"),
            ic(tO(VTSwitch), {
              class: "api-switch",
              "aria-label": "偏好组合式 API",
              "aria-checked": tO(preferComposition),
              onClick: _cache[1] || (_cache[1] = ($event) => tO(toggleCompositionAPI)())
            }, null, 8, ["aria-checked"]),
            iu("label", {
              class: "composition-label",
              onClick: _cache[2] || (_cache[2] = ($event) => tO(toggleCompositionAPI)(true))
            }, "组合式"),
            iu("a", {
              class: "switch-link",
              title: "关于 API 风格偏好",
              href: "/guide/introduction.html#api-styles",
              onClick: _cache[3] || (_cache[3] = //@ts-ignore
              (...args) => tO(closeSideBar) && tO(closeSideBar)(...args))
            }, "?"),
            ic(PreferenceTooltip)
          ]),
          showSFC.value ? (r3(), it("div", _hoisted_5$1, [
            iu("label", {
              class: "no-sfc-label",
              onClick: _cache[4] || (_cache[4] = ($event) => tO(toggleSFC)(false))
            }, "HTML"),
            ic(tO(VTSwitch), {
              class: "sfc-switch",
              "aria-label": "偏好单文件组件",
              "aria-checked": tO(preferSFC),
              onClick: _cache[5] || (_cache[5] = ($event) => tO(toggleSFC)())
            }, null, 8, ["aria-checked"]),
            iu("label", {
              class: "sfc-label",
              onClick: _cache[6] || (_cache[6] = ($event) => tO(toggleSFC)(true))
            }, "单文件组件"),
            iu("a", {
              class: "switch-link",
              title: "关于单文件组件",
              href: "/guide/scaling-up/sfc.html",
              onClick: _cache[7] || (_cache[7] = //@ts-ignore
              (...args) => tO(closeSideBar) && tO(closeSideBar)(...args))
            }, "?")
          ])) : iv("", true)
        ], 8, _hoisted_3$1)
      ])) : iv("", true);
    };
  }
});
const PreferenceSwitch_vue_vue_type_style_index_0_scoped_adcd0ab7_lang = "";
const PreferenceSwitch_vue_vue_type_style_index_1_lang = "";
const PreferenceSwitch = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-adcd0ab7"]]);
const SponsorsGroup_vue_vue_type_style_index_0_scoped_6c51688a_lang = "";
const _sfc_main$1 = /* @__PURE__ */ nj({
  __name: "SponsorsAside",
  setup(__props) {
    useData();
    return (_ctx, _cache) => {
      return iv("", true);
    };
  }
});
const SponsorsAside_vue_vue_type_style_index_0_lang = "";
const SvgPreview_vue_vue_type_style_index_0_scoped_5b519822_lang = "";
const _hoisted_1 = { class: "svg-preview" };
const _hoisted_2 = { class: "preview-header" };
const _hoisted_3 = {
  key: 0,
  class: "size-controls"
};
const _hoisted_4 = { class: "preview-content" };
const _hoisted_5 = ["innerHTML"];
const _sfc_main = {
  __name: "SvgPreview",
  props: {
    code: {
      type: String,
      required: true
    },
    showSizeControls: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    tk(false);
    tk(false);
    const width = tk(200);
    const height = tk(200);
    const extractSvgSize = () => {
      const widthMatch = props.code.match(/width="(\d+)"/);
      const heightMatch = props.code.match(/height="(\d+)"/);
      if (widthMatch)
        width.value = parseInt(widthMatch[1]);
      if (heightMatch)
        height.value = parseInt(heightMatch[1]);
    };
    const sanitizedSvgContent = ij(() => {
      let code = props.code;
      if (!code.includes("xmlns")) {
        code = code.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
      }
      code = code.replace(/width="(\d+)"/, `width="${width.value}"`);
      code = code.replace(/height="(\d+)"/, `height="${height.value}"`);
      return code;
    });
    const updateSize = () => {
      width.value = Math.max(0, Math.min(1e3, width.value));
      height.value = Math.max(0, Math.min(1e3, height.value));
    };
    lf(() => {
      extractSvgSize();
    });
    return (_ctx, _cache) => {
      return r3(), it("div", _hoisted_1, [
        iu("div", _hoisted_2, [
          _cache[4] || (_cache[4] = iu("div", { class: "preview-controls" }, [
            iu("span", { class: "preview-title" }, "SVG 预览")
          ], -1)),
          __props.showSizeControls ? (r3(), it("div", _hoisted_3, [
            iu("label", null, [
              _cache[2] || (_cache[2] = ih(" 宽度: ")),
              np(iu("input", {
                type: "number",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => width.value = $event),
                onInput: updateSize
              }, null, 544), [
                [s0, width.value]
              ])
            ]),
            iu("label", null, [
              _cache[3] || (_cache[3] = ih(" 高度: ")),
              np(iu("input", {
                type: "number",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => height.value = $event),
                onInput: updateSize
              }, null, 544), [
                [s0, height.value]
              ])
            ])
          ])) : iv("", true)
        ]),
        iu("div", _hoisted_4, [
          iu("div", {
            class: "svg-result",
            innerHTML: sanitizedSvgContent.value,
            style: en({
              width: `${width.value}px`,
              height: `${height.value}px`
            })
          }, null, 12, _hoisted_5)
        ])
      ]);
    };
  }
};
const SvgPreview = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-5b519822"]]);
let codeLinkStart = 0;
function codeLink(router) {
  const inBrowser2 = typeof document !== "undefined";
  if (inBrowser2 && !codeLinkStart) {
    window.addEventListener("click", (e) => {
      var _a, _b;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.link')) {
        const parent = el.parentElement;
        const previousElementSibling = el.previousElementSibling;
        const lang = (_b = (_a = el.previousElementSibling) == null ? void 0 : _a.previousElementSibling) == null ? void 0 : _b.textContent;
        if (!parent || !previousElementSibling)
          return;
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(
          parent.className
        );
        let text = "";
        previousElementSibling.querySelectorAll("span.line:not(.diff.remove)").forEach((node) => text += (node.textContent || "") + "\n");
        text = text.slice(0, -1);
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        const key = `code-link-${parent.id}-${lang}`;
        !Object.keys(localStorage).includes(key) && localStorage.setItem(key, encodeURIComponent(text));
        const newUrl = "/repl#" + key;
        router.go(newUrl);
      }
    });
    codeLinkStart = 1;
  }
}
const RawTheme = Object.assign({}, VPTheme, {
  Layout: () => {
    return iB(VPTheme.Layout, null, {
      // banner: () => h(Banner),
      "sidebar-top": () => iB(PreferenceSwitch),
      // 'sidebar-bottom': () => h(SecurityUpdateBtn),
      "aside-mid": () => iB(_sfc_main$1)
      // 'aside-bottom': () => h(WwAds),
      // 'edit-link': () => 'sdddd'
    });
  },
  enhanceApp({
    app,
    router,
    siteData
  }) {
    app.provide("prefer-composition", preferComposition);
    app.provide("prefer-sfc", preferSFC);
    app.provide("filter-headers", filterHeadersByPreference);
    app.provide("appearance", useAppearance());
    app.component("SvgPreview", SvgPreview);
    codeLink(router);
  }
});
function resolveThemeExtends(theme) {
  if (theme.extends) {
    const base = resolveThemeExtends(theme.extends);
    return {
      ...base,
      ...theme,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme.enhanceApp)
          await theme.enhanceApp(ctx);
      }
    };
  }
  return theme;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = nj({
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    lf(() => {
      rN(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => iB(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return op(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser$1;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    if (!pageFilePath)
      return null;
    if (isInitialPageLoad) {
      initialPath = pageFilePath;
    }
    if (isInitialPageLoad || initialPath === pageFilePath) {
      pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
    }
    if (inBrowser$1) {
      isInitialPageLoad = false;
    }
    return __vitePreload(() => import(
      /*@vite-ignore*/
      pageFilePath
    ), true ? [] : void 0);
  }, Theme.NotFound);
}
if (inBrowser$1) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
export {
  createApp
};
