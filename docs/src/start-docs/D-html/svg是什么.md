# SVG 是什么？

## 1. SVG 是什么？

- **Scalable Vector Graphics** 缩放矢量图形 SVG 是一种用于描述 2D 图形的标记语言。是 XML 标记语言的衍生/一种应用层，用来描述矢量图像。

## 2. 计算机的两大图形系统

1. **栅格图形系统**：由像素组成，图像表示为图片元素或者像素的长方形数组，每个像素都由红绿蓝三个颜色值表示，每个像素都由一个整数表示，这个整数的取值范围是 0-255，0 表示黑色，255 表示白色。或者是颜色表里面的索引值表示。这一系列的像素组也称之为位图（bitmap）。
2. **向量图形系统**：向量图形（Vector Graphics）是由数学公式定义的几何图形，由点、线、曲线和多边形等基本图形组成。每个图形对象都是由数学公式描述的，而不是由像素点组成。

## 主要特点

### 1. 无限缩放

- 图形可以无限放大而不失真
- 边缘永远保持清晰
- 不会出现像素化现象

### 2. 文件大小

- 与图形复杂度相关，而不是尺寸
- 简单图形文件通常较小
- 复杂图形可能文件较大

### 3. 编辑灵活性

```xml
<svg width="200" height="200">
    <!-- 每个属性都可以单独修改 -->
    <rect x="10" y="10"
          width="100" height="50"
          fill="blue"
          stroke="black"
          stroke-width="2"/>
</svg>
```

- 可以随时修改任何属性
- 形状可以自由变形
- 颜色和样式易于更改

### 4. 数学精确性

```xml
<!-- 精确的数学计算 -->
<path d="M 10,10 L 50,50 A 30,30 0 1,1 90,90"/>
```

- 基于数学公式描述
- 保证几何精确性
- 适合技术制图

## 应用场景

### 1. Logo 设计

```xml
<svg viewBox="0 0 100 100">
    <!-- Logo元素可以精确控制 -->
    <path d="M20,20 L80,80" stroke="black"/>
    <circle cx="50" cy="50" r="30" fill="red"/>
</svg>
```

<SvgPreview code='<svg viewBox="0 0 100 100">
    <!-- Logo元素可以精确控制 -->
    <path d="M20,20 L80,80" stroke="black"/>
    <circle cx="50" cy="50" r="30" fill="red"/>
</svg>'/>

- 需要在不同尺寸下保持清晰
- 便于修改和调整
- 适应不同显示设备

### 2. 图标系统

```xml
<svg width="24" height="24">
    <!-- 小图标依然清晰 -->
    <path d="M12,2 L2,22 L22,22 Z" fill="currentColor"/>
</svg>
```

<SvgPreview code='<svg width="24" height="24">
    <!-- 小图标依然清晰 -->
    <path d="M12,2 L2,22 L22,22 Z" fill="currentColor"/>
</svg>'/>

- 文件体积小
- 可以动态改变颜色
- 支持多种状态

### 3. 数据可视化

```xml
<!-- 数据驱动的图形 -->
<svg width="400" height="200">
    <path d="M0,100 L100,80 L200,120 L300,90 L400,110"
          fill="none"
          stroke="blue"/>
</svg>
```

<SvgPreview code='<svg width="400" height="200">
    <path d="M0,100 L100,80 L200,120 L300,90 L400,110"
          fill="none"
          stroke="blue"/>
</svg>'/>

### 4. 响应式设计

```xml
<!-- 自适应视口大小 -->
<svg viewBox="0 0 100 100"
     preserveAspectRatio="xMidYMid meet">
    <circle cx="50" cy="50" r="45"/>
</svg>
```

<SvgPreview code='<svg viewBox="0 0 100 100"
     preserveAspectRatio="xMidYMid meet">
    <circle cx="50" cy="50" r="45"/>
</svg>'/>

## 优点

- 精确的数据表达
- 动态更新方便
- 交互性强
- CPU 计算量小
- 内存占用少
- 适合动画展示
- 自适应缩放
- 保持宽高比
- 适应各种屏幕
- 支持关键帧动画
- 过渡效果流畅
- 动画性能好

## 与位图的对比

### 1. 优势

- 文件体积通常更小
- 无限缩放不失真
- 编辑更加灵活
- 适合程序化生成

### 2. 劣势

- 不适合复杂的照片
- 渲染复杂图形时性能可能下降
- 学习曲线较陡
- 特效表现有限

## 最佳实践

### 1. 性能优化

```xml
<!-- 优化路径数据 -->
<svg>
    <path d="M0,0 L100,100"
          vector-effect="non-scaling-stroke"/>
</svg>
```

- 简化路径数据
- 避免过多节点
- 使用适当的精度

### 2. 文件优化

- 移除不必要的小数位
- 合并相似路径
- 使用适当的压缩

# SVG 常用形状指南

## 1. 矩形 (Rectangle)

```xml
<rect
  x="10"
  y="10"
  width="100"
  height="50"
  fill="red"
  rx="5"
  ry="5"
/>
```

<SvgPreview code='<svg width="120" height="70">
  <rect 
    x="10" 
    y="10" 
    width="100" 
    height="50" 
    fill="red"
    rx="5" 
    ry="5"
  />
</svg>'/>

属性说明：

- `x, y`: 起始位置
- `width, height`: 宽度和高度
- `rx, ry`: 圆角半径

## 2. 圆形 (Circle)

```xml
<circle
  cx="100"
  cy="100"
  r="50"
  fill="blue"
  stroke="black"
  stroke-width="2"
/>
```

<SvgPreview code='<svg width="200" height="200">
  <circle 
    cx="100" 
    cy="100" 
    r="50" 
    fill="blue"
    stroke="black"
    stroke-width="2"
  />
</svg>'/>

属性说明：

- `cx, cy`: 圆心坐标
- `r`: 半径

## 3. 椭圆 (Ellipse)

```xml
<ellipse
  cx="100"
  cy="100"
  rx="100"
  ry="50"
  fill="yellow"
/>
```

<SvgPreview code='<svg width="220" height="220">
  <ellipse 
    cx="100" 
    cy="100" 
    rx="100" 
    ry="50" 
    fill="yellow"
  />
</svg>'/>

属性说明：

- `cx, cy`: 中心坐标
- `rx, ry`: 水平和垂直半径

## 4. 线条 (Line)

```xml
<line
  x1="10"
  y1="10"
  x2="100"
  y2="100"
  stroke="black"
  stroke-width="2"
/>
```

<SvgPreview code='<svg width="120" height="120">
  <line 
    x1="10" 
    y1="10" 
    x2="100" 
    y2="100" 
    stroke="black"
    stroke-width="2"
  />
</svg>'/>

属性说明：

- `x1, y1`: 起点坐标
- `x2, y2`: 终点坐标

## 5. 多边形 (Polygon)

```xml
<polygon
  points="100,10 40,180 190,60 10,60 160,180"
  fill="lime"
  stroke="purple"
/>
```

<SvgPreview code='<svg width="200" height="200">
  <polygon 
    points="100,10 40,180 190,60 10,60 160,180"
    fill="lime"
    stroke="purple"
  />
</svg>'/>

属性说明：

- `points`: 点坐标列表

## 6. 折线 (Polyline)

```xml
<polyline
  points="20,20 40,25 60,40 80,120 120,140 200,180"
  fill="none"
  stroke="red"
/>
```

<SvgPreview code='<svg width="220" height="200">
  <polyline 
    points="20,20 40,25 60,40 80,120 120,140 200,180"
    fill="none"
    stroke="red"
  />
</svg>'/>

## 7. 路径 (Path)

```xml
<path
  d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
  fill="red"
/>
```

<SvgPreview code='<svg width="100" height="100">
  <path 
    d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z"
    fill="red"
  />
</svg>'/>

路径命令：

- `M`: 移动到
- `L`: 画线到
- `H`: 水平线
- `V`: 垂直线
- `A`: 圆弧
- `Q`: 二次贝塞尔曲线
- `C`: 三次贝塞尔曲线
- `Z`: 闭合路径

## 8. 文本 (Text)

```xml
<text
  x="10"
  y="50"
  font-family="Arial"
  font-size="24"
  fill="#f55555"
>
  Hello SVG!
</text>
```

<SvgPreview code='<svg width="200" height="100">
<text
x="10"
y="50"
font-family="Arial"
font-size="24"
fill="#f55555"

>

    Hello SVG!

  </text>
</svg>'/>

## 常用属性

### 填充和描边

```xml
<rect
  fill="red"                 /* 填充颜色 */
  fill-opacity="0.5"        /* 填充透明度 */
  stroke="black"            /* 描边颜色 */
  stroke-width="2"          /* 描边宽度 */
  stroke-dasharray="5,5"    /* 虚线模式 */
  stroke-opacity="0.8"      /* 描边透明度 */
/>
```

<SvgPreview code='<svg width="120" height="70">
  <rect 
    x="10" 
    y="10" 
    width="100" 
    height="50" 
    fill="red"
    fill-opacity="0.5"
    stroke="black"
    stroke-width="2"
    stroke-dasharray="5,5"
    stroke-opacity="0.8"
  />
</svg>'/>

### 渐变示例

```xml
<defs>
  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
    <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
  </linearGradient>
</defs>
<rect fill="url(#grad1)" x="10" y="10" width="200" height="100"/>
```

<SvgPreview code='<svg width="220" height="120">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect fill="url(#grad1)" x="10" y="10" width="200" height="100"/>
</svg>'/>

### 动画示例

```xml
<circle cx="50" cy="50" r="20" fill="red">
  <animate
    attributeName="cx"
    from="50"
    to="450"
    dur="2s"
    repeatCount="indefinite"
  />
</circle>
```

<SvgPreview code='<svg width="500" height="100">
  <circle cx="50" cy="50" r="20" fill="red">
    <animate 
      attributeName="cx" 
      from="50" 
      to="450" 
      dur="2s" 
      repeatCount="indefinite"
    />
  </circle>
</svg>'/>

## 实用技巧

### 1. SVG 视口设置

```xml
<svg width="500" height="300" viewBox="0 0 500 300">
    <circle cx="50" cy="50" r="40" fill="red"/>
</svg>
```

<SvgPreview code='<svg width="500" height="300" viewBox="0 0 500 300">
    <circle cx="50" cy="50" r="40" fill="red"/>
</svg>'/>

### 2. 组合元素

```xml
<g transform="translate(100,100)">
  <rect width="100" height="100" fill="blue" />
  <circle cx="50" cy="50" r="30" fill="red" />
</g>
```

<SvgPreview code='<svg width="300" height="300">
  <g transform="translate(100,100)">
    <rect width="100" height="100" fill="blue" />
    <circle cx="50" cy="50" r="30" fill="red" />
  </g>
</svg>'/>

### 3. 复用元素

```xml
<defs>
  <circle id="myCircle" cx="0" cy="0" r="5" fill="red"/>
</defs>
<use href="#myCircle" x="10" y="10"/>
<use href="#myCircle" x="20" y="20"/>
```

<SvgPreview code='<svg width="100" height="100">
  <defs>
    <circle id="myCircle2" cx="0" cy="0" r="5" fill="red"/>
  </defs>
  <use href="#myCircle2" x="10" y="10"/>
  <use href="#myCircle2" x="20" y="20"/>
  <use href="#myCircle2" x="30" y="30"/>
  <use href="#myCircle2" x="40" y="40"/>
</svg>'/>
