---
editLink: false
title: 快速上手vitePress
footer: false
---

# Markdown 语法示例文档

````markdown
## 目录

- [标题](#标题)
- [段落和换行](#段落和换行)
- [强调文本](#强调文本)
- [列表](#列表)
- [链接](#链接)
- [图片](#图片)
- [代码块](#代码块)
- [引用](#引用)
- [水平线](#水平线)
- [表格](#表格)
- [转义字符](#转义字符)

## 标题

使用 `#` 来定义标题，不同数量的 `#` 表示不同级别的标题。

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 表格

| Tables        |      Are      |  Cool |  Cool |  Cool |  Cool |
| ------------- | :-----------: | ----: | ----: | ----: | ----: |
| col 3 is      | right-aligned | $1600 | $1600 | $1600 | $1600 |
| col 2 is      |   centered    |   $12 |   $12 |   $12 |   $12 |
| zebra stripes |   are neat    |    $1 |    $1 |    $1 |    $1 |

## 代码段落

```html
<div>
  <span v-for="i in 3">{{ i }}</span>
</div>
```

:tada: :100: :tada: :100: :tada: :100: :tada: :100: :tada: :100: :tada: :100:

//--所有的表情 markdown-it-emoji lib/data/full.mjs

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

<!-- Do -->

## [Getting Started](./getting-started)

[Getting Started](../guide/getting-started)

<!-- Don't -->

### [Getting Started](./getting-started.md)

### [Getting Started](./getting-started.html)

### Title <Badge type="info" text="default" />

### Title <Badge type="tip" text="^1.9.0" />

### Title <Badge type="warning" text="beta" />

### Title <Badge type="danger" text="caution" />

```

```
