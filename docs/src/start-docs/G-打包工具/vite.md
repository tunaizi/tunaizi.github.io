# Vite 使用

## Vite 是什么

- 基于原生 ES 模块提供开发服务器
- 使用 Rollup 打包生产环境代码
- 采用 esbuild 进行依赖预构建
- 开发环境下的极速热更新
- 对 TypeScript、JSX、CSS 等提供开箱即用的支持

## 为什么选择 Vite

1. **更快的冷启动**：利用浏览器原生 ES 模块，无需打包
2. **即时的热模块更新（HMR）**：无论应用大小，都能保持快速更新
3. **真正的按需加载**：开发环境下实现按需编译
4. **丰富的功能**：对 TypeScript、JSX、CSS 等提供开箱即用的支持
5. **通用的插件接口**：支持 Rollup 插件体系

## 常用功能

### 1. 静态资源处理

```js
import logo from './logo.png?raw'
//直接导入图片的内容此处是文件的base64
import logo from './logo.png?url'
// 导入图片的相对项目的目录地址
import logo from './logo.png'
// 导入图片的相对静态资源地址

//vite集成了js多线程的资源处理 所以可以导入项目目录下的worker 文件
import Worker from './worker.js?worker'
new Worker().onmessage = (event) => {
  console.log(event.data)
}

//导入json
import data from './data.json'
//导入json中命名空间
import { version } from './data.json'
console.log(version)

// 导入wasm
import wasm from './test.wasm'
console.log(wasm)
wasm().then(({ instance }) => {
  console.log(instance.exports.add(1, 2))
})

```

## 性能优化建议

1. **代码分割**

```javascript
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'utils': ['./src/utils']
        }
      }
    }
  }
})
```

2. **资源压缩**

```javascript
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
```

## 什么是 WebAssembly (WASM) 简介

WebAssembly 是一种可以在现代网页浏览器中运行的低级编程语言，具有以下主要特点：

## 核心特性

1. **高性能执行**

   - 接近原生代码的执行速度
   - 二进制格式，加载更快
   - 适合计算密集型任务

2. **多语言支持**
   - C/C++
   - Rust
   - Go
   - AssemblyScript (类 TypeScript 语法)

## 在 Vite 中使用 WASM

让我们扩展您文件中的 WASM 示例：

```javascript
// 基础导入方式
import wasm from './example.wasm'
// 更完整的使用示例
const wasmModule = await WebAssembly.instantiateStreaming(
  fetch('example.wasm'),
  {
    env: {
      memory: new WebAssembly.Memory({ initial: 256 }),
      // 可以在这里定义导入函数
      consoleLog: (arg) => console.log(arg)
    }
  }
)
// 调用 WASM 函数
const result = wasmModule.instance.exports.someFunction(42)
```

## 使用场景

1. **计算密集型任务**

   - 图像/视频处理
   - 3D 渲染
   - 物理引擎
   - 加密算法

2. **性能关键应用**
   - 游戏引擎
   - CAD 软件
   - 实时数据处理

## 优势

1. **性能**：比 JavaScript 快 10-800%
2. **安全**：运行在沙箱环境中
3. **兼容性**：主流浏览器都支持
4. **渐进式采用**：可以与现有 JavaScript 代码共存

## 注意事项

1. 需要正确配置服务器 MIME 类型：`application/wasm`
2. 考虑添加降级方案以支持旧浏览器
3. 开发时注意内存管理
4. 权衡使用成本和收益


我来介绍在普通 JavaScript 环境中如何使用 WebAssembly：

````javascript
// 方式一：使用 instantiateStreaming (推荐)
async function loadWasm() {
  try {
    const response = await fetch('/path/to/example.wasm');
    const result = await WebAssembly.instantiateStreaming(response, {
      env: {
        // 导入的 JavaScript 函数，可以在 WASM 中调用
        consoleLog: (value) => console.log(value),
        // 提供内存
        memory: new WebAssembly.Memory({ initial: 256 }),
        // 其他导入函数
        abort: () => console.error('Abort called from WASM')
      }
    });
    
    // 使用 WASM 导出的函数
    const { add, subtract } = result.instance.exports;
    console.log(add(5, 3));      // 8
    console.log(subtract(10, 4)); // 6
  } catch (err) {
    console.error('WASM 加载失败:', err);
  }
}

// 方式二：传统方式（兼容性更好）
async function loadWasmLegacy() {
  try {
    const response = await fetch('/path/to/example.wasm');
    const bytes = await response.arrayBuffer();
    const result = await WebAssembly.instantiate(bytes, {
      env: {
        consoleLog: (value) => console.log(value),
        memory: new WebAssembly.Memory({ initial: 256 })
      }
    });
    
    // 使用导出的函数
    const { multiply } = result.instance.exports;
    console.log(multiply(6, 7)); // 42
  } catch (err) {
    console.error('WASM 加载失败:', err);
  }
}

// 调用加载函数
loadWasm();
// 或
loadWasmLegacy();
````

一个完整的实际例子（包含 C++ 源码）：

````cpp
// math.cpp
extern "C" {
    int add(int a, int b) {
        return a + b;
    }
    
    int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
````

编译成 WASM 后，在 JavaScript 中使用：

````javascript
// math.js
const wasmModule = {
  // 存储加载后的 WASM 实例
  instance: null,
  
  // 初始化函数
  async init() {
    try {
      const response = await fetch('/path/to/math.wasm');
      const result = await WebAssembly.instantiateStreaming(response);
      this.instance = result.instance;
      return true;
    } catch (err) {
      console.error('WASM 加载失败:', err);
      return false;
    }
  },
  
  // 包装 WASM 函数
  add(a, b) {
    if (!this.instance) throw new Error('WASM 未初始化');
    return this.instance.exports.add(a, b);
  },
  
  fibonacci(n) {
    if (!this.instance) throw new Error('WASM 未初始化');
    return this.instance.exports.fibonacci(n);
  }
};

// 使用示例
async function run() {
  await wasmModule.init();
  
  console.log('加法结果:', wasmModule.add(5, 3));        // 8
  console.log('斐波那契数:', wasmModule.fibonacci(10));  // 55
}

run();
````

注意事项：
1. WASM 文件需要通过 HTTP(S) 服务器提供，不能通过本地文件系统直接加载
2. 服务器需要正确设置 MIME 类型：`application/wasm`
3. 对于较大的 WASM 模块，建议添加加载状态提示
4. 考虑添加错误处理和降级方案
5. 在生产环境中应该处理内存管理相关的问题
