# Rollup

## 什么是 Rollup?

Rollup 是一个 JavaScript 模块打包器,专注于打包小型代码库和组件库。它可以将小块代码编译成大块复杂的代码,例如将你的应用程序或库打包成一个文件。

## Rollup 的主要特点

1. **Tree-shaking**: 自动移除未使用的代码,生成更小的包体积
2. **ES 模块优先**: 对 ES 模块有着良好的支持
3. **代码分割**: 支持代码分割和动态导入
4. **高度可配置**: 提供丰富的插件系统
5. **输出格式多样**: 支持多种输出格式(ESM、CommonJS、UMD 等)

## 常见使用场景

- 打包 JavaScript 库
- 构建工具库/组件库
- 打包 Node.js 应用
- 作为应用开发的构建工具

## 基础配置示例

```javascript
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

export default {
  // 入口文件
  input: 'src/index.ts',

  // 输出配置
  output: {
    dir: 'dist',
    format: 'es', // 输出格式: es, cjs, umd, iife
    name: 'MyLib' // UMD/IIFE 格式必填
  },

  // 插件配置
  plugins: [
    resolve(), // 解析第三方依赖
    commonjs(), // 将 CommonJS 转换为 ES Module
    typescript() // 支持 TypeScript
  ]
}
```

## 常用配置选项

### 1. 多入口打包

```javascript
export default {
  input: {
    main: 'src/main.js',
    vendor: 'src/vendor.js'
  },
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: '[name].js'
  }
}
```

### 2. 外部依赖声明

```javascript
export default {
  input: 'src/index.js',
  external: ['lodash', 'react'], // 声明外部依赖
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    globals: {
      lodash: '_',
      react: 'React'
    }
  }
}
```

### 3. 生产环境优化

```javascript:rollup.config.js
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.min.js',
    format: 'umd',
    name: 'MyLib',
    plugins: [terser()] // 压缩代码
  }
}
```

## 常用插件

1. **@rollup/plugin-node-resolve**: 解析 node_modules 中的模块
2. **@rollup/plugin-commonjs**: 将 CommonJS 模块转换为 ES6
3. **@rollup/plugin-typescript**: TypeScript 支持
4. **@rollup/plugin-babel**: Babel 转换支持
5. **@rollup/plugin-terser**: 代码压缩
6. **@rollup/plugin-json**: 导入 JSON 文件
7. **rollup-plugin-postcss**: 处理 CSS 文件

## 命令行使用

```bash
# 开发模式构建
rollup -c -w

# 生产模式构建
rollup -c --environment NODE_ENV:production
```

## 与其他打包工具的对比

### Rollup vs Webpack

- Rollup 更适合打包库和组件
- Webpack 更适合打包应用
- Rollup 打包结果更清晰简洁
- Webpack 功能更全面,生态更丰富

### Rollup vs Vite

- Vite 在开发环境使用 ESM
- Vite 生产环境使用 Rollup
- Vite 更适合应用开发
- Rollup 更适合库开发

## 最佳实践

1. **合理使用外部依赖**

```javascript
external: Object.keys(pkg.dependencies)
```

2. **配置文件拆分**

```javascript
// rollup.config.dev.js
// rollup.config.prod.js
```

3. **使用环境变量**

```javascript
const isProd = process.env.NODE_ENV === 'production'
```

4. **合理使用代码分割**

```javascript
output: {
  dir: 'dist',
  format: 'es',
  manualChunks: {
    vendor: ['lodash', 'moment']
  }
}
```

## [什么是 IIFE](./IIFE.md)
