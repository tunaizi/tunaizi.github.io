# EventBus (事件总线)

## 什么是 EventBus
EventBus 是一种发布-订阅（Publish/Subscribe）模式的实现，它是一个全局事件管理器，用于处理跨组件/模块的事件通信。

## 基本实现
```js
class EventBus {
    constructor() {
        // 使用 Map 存储事件和回调函数的对应关系
        this.events = new Map();
    }

    // 订阅事件
    on(type, fn) {
        let handlers = this.events.get(type);
        if (!handlers) {
            handlers = new Set();
            this.events.set(type, handlers);
        }
        handlers.add(fn);
    }

    // 取消订阅
    off(type, fn) {
        const handlers = this.events.get(type);
        if (handlers) {
            if (fn) {
                handlers.delete(fn);
            } else {
                this.events.delete(type);
            }
        }
    }

    // 触发事件
    emit(type, ...args) {
        const handlers = this.events.get(type);
        if (handlers) {
            handlers.forEach(fn => {
                fn.apply(this, args);
            });
        }
    }

    // 只订阅一次
    once(type, fn) {
        const wrapper = (...args) => {
            fn.apply(this, args);
            this.off(type, wrapper);
        };
        this.on(type, wrapper);
    }
}
```

## 使用示例
```js
// 创建事件总线实例
const eventBus = new EventBus();

// 订阅事件
const handler1 = (data) => {
    console.log('handler1 收到消息:', data);
};
eventBus.on('message', handler1);

// 订阅一次性事件
eventBus.once('oneTimeEvent', (data) => {
    console.log('这个处理器只会执行一次:', data);
});

// 发送事件
eventBus.emit('message', '你好！');  // 输出: handler1 收到消息: 你好！
eventBus.emit('oneTimeEvent', '一次性消息');  // 输出: 这个处理器只会执行一次: 一次性消息

// 取消订阅
eventBus.off('message', handler1);
```

## 实际应用场景

### 1. 跨组件通信
```js
// 组件A
eventBus.on('userUpdated', (userData) => {
    // 更新用户信息显示
});

// 组件B
function updateUser(data) {
    // 更新用户数据
    eventBus.emit('userUpdated', data);
}
```

### 2. 模块解耦
```js
// 购物车模块
eventBus.on('addToCart', (product) => {
    // 处理添加购物车逻辑
});

// 商品模块
function addProductToCart(product) {
    eventBus.emit('addToCart', product);
}
```

### 3. 全局状态管理
```js
// 主题切换
eventBus.on('themeChange', (theme) => {
    document.body.className = theme;
});

// 设置按钮
function toggleTheme() {
    eventBus.emit('themeChange', 'dark-theme');
}
```

## 注意事项

1. **内存管理**
- 及时取消不需要的订阅，避免内存泄漏
```js
// 组件销毁时
componentWillUnmount() {
    eventBus.off('eventName', this.handler);
}
```

2. **事件命名**
- 使用清晰的命名约定，避免冲突
```js
// 推荐的命名方式
eventBus.on('user:login', handler);
eventBus.on('cart:add', handler);
eventBus.on('theme:change', handler);
```

3. **错误处理**
```js
emit(type, ...args) {
    const handlers = this.events.get(type);
    if (handlers) {
        handlers.forEach(fn => {
            try {
                fn.apply(this, args);
            } catch (error) {
                console.error(`Error in event handler for ${type}:`, error);
            }
        });
    }
}
```

4. **调试支持**
```js
emit(type, ...args) {
    const handlers = this.events.get(type);
    if (handlers) {
        console.log(`[EventBus] Emitting ${type} with:`, args);
        handlers.forEach(fn => fn.apply(this, args));
    } else {
        console.warn(`[EventBus] No handlers for event: ${type}`);
    }
}
```

## 优缺点

### 优点
1. 解耦组件/模块间的依赖
2. 简化跨组件通信
3. 实现灵活的事件处理机制

### 缺点
1. 可能导致事件追踪困难
2. 过度使用会使程序流程难以理解
3. 需要注意内存泄漏问题

## 最佳实践
1. 在小型应用中使用 EventBus
2. 对于大型应用，考虑使用 Vuex/Redux 等状态管理工具
3. 及时清理不用的事件监听
4. 使用统一的事件命名规范
# EventBus 内存泄漏问题

## 为什么会发生内存泄漏？

### 1. 事件监听器未及时移除
```js
class Component {
    constructor() {
        // 添加事件监听
        eventBus.on('someEvent', this.handleEvent);
    }

    handleEvent = (data) => {
        console.log(data);
    }

    // 如果没有在组件销毁时移除监听器
    // this.handleEvent 会一直被 EventBus 持有
    // 导致整个组件实例无法被垃圾回收
}
```

# EventBus 内存泄漏问题

## 为什么会发生内存泄漏？

### 1. 事件监听器未及时移除
```js
class Component {
    constructor() {
        // 添加事件监听
        eventBus.on('someEvent', this.handleEvent);
    }

    handleEvent = (data) => {
        console.log(data);
    }

    // 如果没有在组件销毁时移除监听器
    // this.handleEvent 会一直被 EventBus 持有
    // 导致整个组件实例无法被垃圾回收
}
```

### 2. 闭包引用
```js
class Component {
    constructor() {
        this.data = '大量数据';
        
        // 闭包持有了 this 引用
        eventBus.on('someEvent', () => {
            console.log(this.data);
        });
    }
    // 即使组件被销毁，由于事件监听器中的闭包
    // 仍然引用着 this.data，导致内存无法释放
}
```

## 如何避免内存泄漏

### 1. 手动移除监听器
```js
class Component {
    constructor() {
        this.handleEvent = this.handleEvent.bind(this);
        eventBus.on('someEvent', this.handleEvent);
    }

    handleEvent(data) {
        console.log(data);
    }

    // 在组件销毁时移除监听器
    destroy() {
        eventBus.off('someEvent', this.handleEvent);
    }
}
```

### 2. 使用 WeakMap 存储
```js
class EventBus {
    constructor() {
        // 使用 WeakMap 存储事件和处理函数
        this.events = new WeakMap();
    }
    
    // ... 其他实现
}
```

### 3. 使用 once 方法
```js
// 对于一次性事件，使用 once 而不是 on
eventBus.once('oneTimeEvent', handler);
```

### 4. 统一管理事件监听
```js
class Component {
    constructor() {
        this.listeners = new Map();
        this.initEventListeners();
    }

    initEventListeners() {
        // 统一管理所有监听器
        this.addListener('event1', this.handler1);
        this.addListener('event2', this.handler2);
    }

    addListener(event, handler) {
        const boundHandler = handler.bind(this);
        this.listeners.set(event, boundHandler);
        eventBus.on(event, boundHandler);
    }

    destroy() {
        // 统一移除所有监听器
        this.listeners.forEach((handler, event) => {
            eventBus.off(event, handler);
        });
        this.listeners.clear();
    }
}
```

## 检测内存泄漏

### 1. Chrome DevTools
```js
// 在代码中添加标记
console.log('Component created:', this);
console.log('Component destroyed:', this);

// 使用 Chrome DevTools 的 Memory 面板
// 1. 拍摄堆快照
// 2. 触发组件销毁
// 3. 再次拍摄快照
// 4. 比较快照，查看是否有意外保留的对象
```

### 2. 使用 WeakRef 进行监控
```js
class MemoryLeakDetector {
    constructor() {
        this.refs = new Set();
    }

    track(component) {
        const ref = new WeakRef(component);
        this.refs.add(ref);
        
        // 定期检查对象是否被回收
        setInterval(() => {
            if (ref.deref()) {
                console.warn('可能存在内存泄漏:', component);
            }
        }, 10000);
    }
}
```

## 最佳实践

1. **始终配对使用 on/off**
```js
// ✅ 好的做法
constructor() {
    this.handler = this.handler.bind(this);
    eventBus.on('event', this.handler);
}
destroy() {
    eventBus.off('event', this.handler);
}
```

2. **使用事件管理器**
```js
class EventManager {
    constructor() {
        this.subscriptions = new Map();
    }

    subscribe(event, handler) {
        eventBus.on(event, handler);
        this.subscriptions.set(event, handler);
    }

    unsubscribeAll() {
        this.subscriptions.forEach((handler, event) => {
            eventBus.off(event, handler);
        });
        this.subscriptions.clear();
    }
}
```

3. **使用装饰器自动管理**
```js
function AutoUnsubscribe(target) {
    const original = target.prototype.destroy;
    
    target.prototype.destroy = function() {
        // 自动清理所有事件监听
        if (this.eventSubscriptions) {
            this.eventSubscriptions.forEach(sub => sub.unsubscribe());
        }
        
        if (original) {
            original.apply(this);
        }
    };
}
```

通过以上这些方法和实践，可以有效预防和处理 EventBus 中的内存泄漏问题。
