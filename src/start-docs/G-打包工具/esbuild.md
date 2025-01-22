# esbuild

## 简介
esbuild 是一个用 Go 语言编写的极速 JavaScript/TypeScript 打包工具。它的主要特点是：
- 极快的构建速度（比传统打包工具快 10-100 倍）
- 支持 ES6+ 语法
- 支持 TypeScript 和 JSX
- 内置压缩功能
- 支持 Source Maps
- 支持代码分割（Code Splitting）

## 基本配置

### 1. 安装
```bash
npm install esbuild --save-dev
```

### 2. 基础配置示例
```js
const esbuild = require('esbuild');

esbuild.build({
    // 入口文件
    entryPoints: ['src/index.js'],
    
    // 输出文件
    outfile: 'dist/bundle.js',
    
    // 是否打包
    bundle: true,
    
    // 是否压缩
    minify: true,
    
    // 平台: 'browser' | 'node' | 'neutral'
    platform: 'browser',
    
    // 目标环境
    target: ['es2015'],
    
    // 源码映射: 'inline' | 'external' | false
    sourcemap: true,
    
    // 加载器配置
    loader: {
        '.png': 'file',
        '.svg': 'text',
        '.jsx': 'jsx',
        '.ts': 'ts'
    }
}).catch(() => process.exit(1));
```

## 详细配置项

### 1. 基础选项
```js
{
    // 入口点，可以是单个文件或多个文件
    entryPoints: ['src/app.js'],
    
    // 输出配置
    outfile: 'dist/app.js',     // 单入口输出
    outdir: 'dist',             // 多入口输出目录
    
    // 是否将依赖打包在一起
    bundle: true,
    
    // 是否压缩代码
    minify: true,
    
    // 是否压缩标识符名称
    minifyIdentifiers: true,
    
    // 是否压缩空白字符
    minifyWhitespace: true,
    
    // 是否压缩语法
    minifySyntax: true
}
```

### 2. 构建选项
```js
{
    // 指定构建平台
    platform: 'browser',  // 'browser' | 'node' | 'neutral'
    
    // 目标环境
    target: ['es2015', 'chrome58'],
    
    // 输出格式: 'iife' | 'cjs' | 'esm'
    format: 'esm',
    
    // 是否保留注释
    keepNames: true,
    
    // 是否生成 source map
    sourcemap: true,  // true | 'inline' | 'external' | false
    
    // 是否监听文件变化
    watch: true,
    
    // 是否写入文件
    write: true,
    
    // 是否允许覆盖文件
    allowOverwrite: false
}
```

### 3. 依赖处理
```js
{
    // 外部依赖，不打包进bundle
    external: ['react', 'react-dom'],
    
    // 别名配置
    alias: {
        '@': './src',
        'utils': './src/utils'
    },
    
    // 定义全局变量
    define: {
        'process.env.NODE_ENV': '"production"',
        'DEBUG': 'false'
    },
    
    // 注入全局变量
    inject: ['./src/globals.js']
}
```

### 4. 加载器配置
```js
{
    // 文件加载器配置
    loader: {
        '.js': 'jsx',           // 处理 JSX
        '.ts': 'ts',            // 处理 TypeScript
        '.png': 'file',         // 作为文件处理
        '.svg': 'text',         // 作为文本处理
        '.css': 'css',          // 处理 CSS
        '.json': 'json',        // 处理 JSON
        '.txt': 'text',         // 处理文本
        '.jsx': 'jsx',          // 处理 JSX
        '.tsx': 'tsx',          // 处理 TSX
        '.woff2': 'file',       // 处理字体
        '.woff': 'file',
        '.ttf': 'file',
        '.eot': 'file'
    }
}
```

### 5. 优化选项
```js
{
    // 代码分割
    splitting: true,
    
    // 压缩选项
    minify: {
        whitespace: true,      // 压缩空白
        identifiers: true,     // 压缩标识符
        syntax: true           // 压缩语法
    },
    
    // tree shaking
    treeShaking: true,
    
    // 元数据
    metafile: true,
    
    // 忽略注释
    ignoreAnnotations: true
}
```

## 常用插件配置
```js
const esbuild = require('esbuild');

esbuild.build({
    plugins: [
        // HTML 插件
        {
            name: 'html',
            setup(build) {
                // 插件逻辑
            }
        },
        
        // 环境变量插件
        {
            name: 'env',
            setup(build) {
                // 插件逻辑
            }
        }
    ]
}).catch(() => process.exit(1));
```

## 性能优化建议

1. **合理使用 external**
```js
{
    external: [
        'react',
        'react-dom',
        'lodash'  // 大型库建议外部引入
    ]
}
```

2. **开发环境配置**
```js
{
    minify: false,        // 开发环境不压缩
    sourcemap: true,      // 开启 sourcemap
    watch: true           // 开启监听
}
```

3. **生产环境配置**
```js
{
    minify: true,         // 生产环境压缩
    sourcemap: false,     // 关闭 sourcemap
    metafile: true,       // 生成构建分析文件
    target: ['es2015']    // 指定目标环境
}
```

## 常见问题处理

### 1. 处理 CSS
```js
{
    loader: { '.css': 'css' },
    plugins: [
        // CSS 处理插件
    ]
}
```

### 2. 处理图片和资源
```js
{
    loader: {
        '.png': 'file',
        '.jpg': 'file',
        '.svg': 'file',
        '.woff': 'file'
    },
    publicPath: '/assets/'  // 公共路径配置
}
```

### 3. 环境变量处理
```js
{
    define: {
        'process.env.NODE_ENV': '"production"',
        'process.env.API_URL': '"https://api.example.com"'
    }
}
```
