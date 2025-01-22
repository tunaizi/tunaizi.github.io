# WeakRef (弱引用)

## 什么是 WeakRef

WeakRef 是 ES2021 引入的一个新特性，它提供了一种方式来创建对象的弱引用。弱引用不会阻止垃圾回收器回收被引用的对象。

## 强引用 vs 弱引用

### 强引用

```js
let obj = { data: '一些数据' }
let reference = obj // 强引用

// 即使 obj = null，由于 reference 仍然引用着对象
// 该对象不会被垃圾回收
obj = null
console.log(reference.data) // '一些数据'
```

### 弱引用

```js
let obj = { data: '一些数据' }
let weakRef = new WeakRef(obj) // 弱引用

// 当 obj = null 时，如果没有其他强引用
// 对象可能会被垃圾回收
obj = null

// 使用 deref() 来访问引用的对象
const ref = weakRef.deref()
console.log(ref?.data) // 如果对象还存在则显示数据，否则为 undefined
```

## WeakRef 的基本用法

### 1. 创建弱引用

```js
const target = { name: '张三' }
const weakRef = new WeakRef(target)
```

### 2. 访问弱引用对象

```js
// 使用 deref() 方法获取原始对象
const obj = weakRef.deref()
if (obj) {
  console.log(obj.name) // '张三'
} else {
  console.log('对象已被回收')
}
```

### 3. 定期检查示例

```js
function checkObject() {
  const obj = weakRef.deref()
  if (obj) {
    console.log('对象仍然存在:', obj)
  } else {
    console.log('对象已被回收')
    clearInterval(intervalId)
  }
}

const intervalId = setInterval(checkObject, 1000)
```

## 实际应用场景

### 1. 缓存实现

```js
class Cache {
  constructor() {
    this.cache = new Map()
  }

  set(key, value) {
    this.cache.set(key, new WeakRef(value))
  }

  get(key) {
    const ref = this.cache.get(key)
    if (ref) {
      const value = ref.deref()
      if (value) {
        return value
      }
      // 如果对象已被回收，删除对应的键
      this.cache.delete(key)
    }
    return null
  }
}
```

### 2. 监控对象生命周期

```js
class ObjectTracker {
  constructor() {
    this.refs = new Set()
  }

  track(object) {
    const ref = new WeakRef(object)
    this.refs.add(ref)
    return ref
  }

  checkObjects() {
    for (const ref of this.refs) {
      const obj = ref.deref()
      if (obj) {
        console.log('对象仍然存活:', obj)
      } else {
        console.log('对象已被回收')
        this.refs.delete(ref)
      }
    }
  }
}
```

## 注意事项

### 1. 不确定性

```js
const obj = { data: '示例数据' }
const weakRef = new WeakRef(obj)

// 无法保证什么时候对象会被回收
obj = null
// weakRef.deref() 可能返回对象，也可能返回 undefined
```

### 2. 性能考虑

```js
// ❌ 不推荐频繁调用 deref()
function badExample() {
  const ref = weakRef.deref()
  // 每次访问都需要调用 deref()
  console.log(ref?.data)
  console.log(ref?.type)
}

// ✅ 推荐的做法
function goodExample() {
  const ref = weakRef.deref()
  if (ref) {
    // 一次 deref() 调用，多次使用
    console.log(ref.data)
    console.log(ref.type)
  }
}
```

### 3. 与 WeakMap 的区别

```js
// WeakMap 用于键值对存储，键必须是对象
const weakMap = new WeakMap()
const key = { id: 1 }
weakMap.set(key, '数据')

// WeakRef 用于创建对任意对象的弱引用
const weakRef = new WeakRef({ id: 1 })
```

## 最佳实践

### 1. 合理使用检查

```js
function useWeakRef(obj) {
  const ref = new WeakRef(obj)

  return {
    getValue() {
      const value = ref.deref()
      if (!value) {
        // 处理对象已被回收的情况
        return null
      }
      return value
    }
  }
}
```

### 2. 结合 FinalizationRegistry

```js
const registry = new FinalizationRegistry((heldValue) => {
  console.log('对象被回收:', heldValue)
})

const obj = { data: '示例' }
const weakRef = new WeakRef(obj)

// 注册对象被回收时的回调
registry.register(obj, '自定义标识符')
```

WeakRef 是一个强大的工具，但需要谨慎使用。它主要用于那些需要观察对象生命周期或实现高级缓存机制的场景。在普通应用中，通常不需要直接使用 WeakRef。

主要特点：

1. WeakRef 创建的是对象的弱引用，不会阻止垃圾回收
2. 需要使用 deref() 方法来访问被引用的对象
3. 适用于缓存、监控等高级场景
4. 具有不确定性，被引用对象可能随时被回收

使用场景：

1. 实现缓存系统
2. 监控对象生命周期
3. 需要避免内存泄漏的场景

需要注意的是，WeakRef 是一个相对较新的特性，主要用于特定的高级场景，普通开发中较少直接使用。

# WeakRef 兼容性

## 浏览器支持情况

### 主流浏览器

- Chrome: 84+ (2020 年 7 月)
- Firefox: 79+ (2020 年 7 月)
- Safari: 15.2+ (2021 年 12 月)
- Edge: 84+ (2020 年 7 月)
- Opera: 70+ (2020 年 7 月)

### 移动端浏览器

- Android Chrome: 84+
- iOS Safari: 15.2+
- Samsung Internet: 14.0+

## Node.js 支持情况

- Node.js 14.6.0+ (需要使用 --harmony-weak-refs 标志)
- Node.js 15.0.0+ (完全支持)

## 兼容性解决方案

### 1. 特性检测

```js
if (typeof WeakRef === 'function') {
  // 支持 WeakRef
  const weakRef = new WeakRef(object)
} else {
  // 不支持 WeakRef，使用替代方案
  const normalRef = object
}
```

### 2. 降级方案

```js
class WeakRefPolyfill {
  constructor(target) {
    this._target = target
  }

  deref() {
    return this._target
  }
}

// 使用方式
const WeakRefImpl =
  typeof WeakRef !== 'undefined' ? WeakRef : WeakRefPolyfill
```

### 3. 缓存实现的替代方案

```js
class Cache {
  constructor() {
    // 如果不支持 WeakRef，使用 WeakMap
    this.cache = typeof WeakRef !== 'undefined' ? new Map() : new WeakMap()
  }

  set(key, value) {
    if (typeof WeakRef !== 'undefined') {
      this.cache.set(key, new WeakRef(value))
    } else {
      this.cache.set(key, value)
    }
  }

  get(key) {
    if (typeof WeakRef !== 'undefined') {
      const ref = this.cache.get(key)
      return ref ? ref.deref() : undefined
    }
    return this.cache.get(key)
  }
}
```

### 4. 使用 WeakMap 作为替代

```js
// 不使用 WeakRef
const cache = new WeakMap()

function store(obj, metadata) {
  cache.set(obj, metadata)
}

function retrieve(obj) {
  return cache.get(obj)
}
```

## 生产环境建议

### 1. 优先使用成熟方案

```js
// 优先使用 WeakMap
const weakMap = new WeakMap()

// 而不是
const weakRef = new WeakRef(obj)
```

### 2. 使用编译工具

```json
// babel 配置
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["last 2 versions", "not dead"]
        }
      }
    ]
  ]
}
```

### 3. 渐进增强

```js
class ModernCache {
  constructor() {
    this.supportsWeakRef = typeof WeakRef !== 'undefined'
    this.cache = this.supportsWeakRef ? new Map() : new WeakMap()
  }

  set(key, value) {
    if (this.supportsWeakRef) {
      this.cache.set(key, new WeakRef(value))
    } else {
      this.cache.set(key, value)
    }
  }

  get(key) {
    if (this.supportsWeakRef) {
      const ref = this.cache.get(key)
      return ref ? ref.deref() : undefined
    }
    return this.cache.get(key)
  }
}
```

## 总结

1. **支持情况**

   - 现代浏览器基本支持
   - 移动端支持相对较新
   - Node.js 14.6.0+ 支持

2. **使用建议**

   - 生产环境谨慎使用
   - 需要提供降级方案
   - 考虑使用 WeakMap 等成熟替代方案

3. **最佳实践**
   - 进行特性检测
   - 提供降级方案
   - 使用编译工具确保兼容性
   - 优先考虑成熟的替代方案

# 关于终结器注册表

## 基本概念

FinalizationRegistry 是 ES2021 引入的特性，用于在对象被垃圾回收时执行一些清理操作。它允许你注册一个回调函数，当被注册的对象被垃圾回收时，这个回调函数会被调用。

## 基本用法

### 1. 创建注册表

```js
const registry = new FinalizationRegistry((heldValue) => {
  // 当注册的对象被回收时，这个回调会被调用
  console.log('对象被回收了:', heldValue)
})
```

### 2. 注册对象

```js
const obj = { id: 1, name: '测试对象' }

// register(target, heldValue, unregisterToken?)
registry.register(obj, '对象1')

// obj = null; // 当对象不再被引用时，最终会被回收
```

### 3. 取消注册

```js
const obj = { id: 1 }
const token = { unregisterToken: true }

// 使用 token 注册
registry.register(obj, '对象1', token)

// 使用 token 取消注册
registry.unregister(token)
```

## 实际应用场景

### 1. 资源清理

```js
class ResourceManager {
  constructor() {
    this.registry = new FinalizationRegistry(this.cleanup.bind(this))
    this.resources = new Map()
  }

  allocate(key, resource) {
    this.resources.set(key, resource)
    this.registry.register(resource, key)
  }

  cleanup(key) {
    console.log(`清理资源: ${key}`)
    this.resources.delete(key)
  }
}
```

### 2. 监控内存泄漏

```js
class MemoryLeakDetector {
  constructor() {
    this.registry = new FinalizationRegistry((name) => {
      console.log(`组件 ${name} 已被垃圾回收`)
    })
    this.components = new Set()
  }

  track(component, name) {
    this.components.add(component)
    this.registry.register(component, name)
  }
}
```

## 注意事项

### 1. 回调执行时机不确定

```js
const registry = new FinalizationRegistry((value) => {
  // 这个回调的执行时机是不确定的
  // 不要在这里执行时间敏感的操作
  console.log('对象被回收:', value)
})

let obj = {}
registry.register(obj, 'test')
obj = null
// 垃圾回收和回调执行的时间是不确定的
```

### 2. 避免在回调中引用相关对象

```js
// ❌ 错误示例
const registry = new FinalizationRegistry((value) => {
  // 不要在回调中引用可能被回收的对象
  console.log(obj.someProperty) // 可能导致错误
})

// ✅ 正确示例
const registry = new FinalizationRegistry((value) => {
  // 只使用传入的 value
  console.log('清理:', value)
})
```

### 1. 调试模式

```js
class DebugRegistry {
  constructor(name) {
    this.name = name
    this.registry = new FinalizationRegistry((info) => {
      console.log(`[${this.name}] 对象被回收:`, info)
      console.trace('回收堆栈')
    })
  }

  track(obj, info) {
    this.registry.register(obj, {
      time: new Date(),
      info
    })
  }
}
```

## 兼容性

- Chrome 84+
- Firefox 79+
- Safari 15.2+
- Node.js 14.6.0+ (使用 --harmony 标志)
- Node.js 15.0.0+ (完全支持)

::: warning 注意
FinalizationRegistry 主要用于调试和特殊场景的资源清理，不应该用于关键业务逻辑，因为其回调执行时机是不确定的。
:::
