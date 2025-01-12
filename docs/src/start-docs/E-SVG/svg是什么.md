# SVG 是什么？

## 1. SVG 是什么？

- **Scalable Vector Graphics** 缩放矢量图形 SVG 是一种用于描述 2D 图形的标记语言。是 XML 标记语言的衍生/一种应用层，用来描述矢量图像。

## 2. 计算机的两大图形系统

![栅格](shange.png)

1. **栅格图形系统**：由像素组成，图像表示为图片元素或者像素的长方形数组，每个像素都由红绿蓝三个颜色值表示，每个像素都由一个整数表示，这个整数的取值范围是 0-255，0 表示黑色，255 表示白色。或者是颜色表里面的索引值表示。这一系列的像素组也称之为位图（bitmap）。
2. **向量图形系统**：由线段组成，图像表示为线段元素或者线段数组，每个线段由两个点组成，每个点由一个坐标表示，坐标的取值范围是 0-1，0 表示最左上角，1 表示最右下角。

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
  <!-- 内容 -->
</svg>
```

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
