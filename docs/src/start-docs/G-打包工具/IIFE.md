# IIFE (立即调用函数表达式)

## 什么是 IIFE？

IIFE (Immediately Invoked Function Expression) 是一个在定义时就立即执行的 JavaScript 函数。它是一种设计模式，也被称为"自执行匿名函数"。

## IIFE 的基本语法

```javascript
;(function () {
  // 函数体
})()

// 或者
;(function () {
  // 函数体
})()
```

## IIFE 的主要用途

1. **创建私有作用域**

   - 避免变量污染全局命名空间
   - 防止变量命名冲突

2. **模块化封装**

   - 将相关功能封装在一个作用域内
   - 只暴露需要的接口

3. **数据私有化**
   - 创建私有变量和方法
   - 形成闭包

## 实际应用示例

```javascript
// 基础 IIFE
const counter = (function () {
  let count = 0 // 私有变量

  return {
    increment: function () {
      count++
      return count
    },
    getCount: function () {
      return count
    }
  }
})()

// 带参数的 IIFE
const calculator = (function (initialValue) {
  let value = initialValue

  return {
    add: function (n) {
      value += n
      return value
    }
  }
})(10)
```

## 在打包工具中的应用

当使用 Rollup 等打包工具时，IIFE 格式通常用于：

1. **浏览器直接使用**

   - 生成可以直接在浏览器中使用的代码
   - 自动处理作用域隔离

2. **UMD 模块的一部分**
   - 作为通用模块定义的一种实现方式
   - 确保代码在不同环境中都能正常运行

## Rollup 中的 IIFE 配置示例

```javascript
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'MyLibrary', // 指定暴露到全局的变量名
    globals: {
      jquery: '$' // 外部依赖映射
    }
  }
}
```

输出结果类似：

```javascript
var MyLibrary = (function ($) {
  // 你的库代码
  // ...
  return exports
})(jQuery)
```

## 使用 IIFE 的注意事项

1. 命名冲突

   - 注意全局变量名的选择
   - 避免与其他库冲突

2. 依赖管理

   - 确保外部依赖正确引入
   - 正确设置依赖的全局变量名

3. 调试
   - IIFE 可能使调试变得复杂
   - 建议在开发环境使用 sourcemap
