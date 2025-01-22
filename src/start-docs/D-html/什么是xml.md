# XML (可扩展标记语言)

## 什么是 XML

XML（eXtensible Markup Language）是一种用于存储和传输数据的标记语言。它的设计目标是传输数据，而不是显示数据。XML 标签是可自定义的，这使得它非常灵活。

## XML 的特点

### 1. 基本语法规则

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <person>
        <name>张三</name>
        <age>25</age>
        <email>zhangsan@example.com</email>
    </person>
</root>
```

- 必须有根元素
- 标签区分大小写
- 标签必须正确嵌套
- 属性值必须加引号
- 特殊字符必须转义

### 2. XML 声明

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
```

- version：XML 版本
- encoding：字符编码
- standalone：是否独立文档

## XML 与 HTML 的区别

### 1. 设计目的

- XML：存储和传输数据
- HTML：显示数据

### 2. 语法规则

- XML：严格的语法规则
- HTML：相对宽松的语法规则

### 3. 标签定义

- XML：可自定义标签
- HTML：预定义标签

## 常见应用场景

### 1. 配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <database>
        <host>localhost</host>
        <port>3306</port>
        <username>root</username>
        <password>123456</password>
    </database>
    <server>
        <port>8080</port>
        <timeout>30</timeout>
    </server>
</configuration>
```

### 2. Web 服务

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <getUser>
            <id>123</id>
        </getUser>
    </soap:Body>
</soap:Envelope>
```

### 3. RSS 订阅

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>网站标题</title>
        <link>http://www.example.com</link>
        <description>网站描述</description>
        <item>
            <title>文章标题</title>
            <link>http://www.example.com/article1</link>
            <description>文章描述</description>
            <pubDate>发布日期</pubDate>
        </item>
    </channel>
</rss>
```

## XML 文档结构

### 1. 元素

```xml
<book>
    <title>书名</title>
    <author>作者</author>
    <price currency="CNY">99.00</price>
</book>
```

### 2. 属性

```xml
<user id="1" role="admin">
    <name>管理员</name>
</user>
```

### 3. CDATA 区段

```xml
<description>
    <![CDATA[
        这里可以包含特殊字符 < > & 而不需要转义
    ]]>
</description>
```

## XML 命名空间

### 1. 基本使用

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root xmlns:h="http://www.w3.org/TR/html4/"
      xmlns:f="http://www.w3schools.com/furniture">
    <h:table>
        <h:tr>
            <h:td>HTML表格</h:td>
        </h:tr>
    </h:table>
    <f:table>
        <f:name>餐桌</f:name>
        <f:price>2000</f:price>
    </f:table>
</root>
```

## XML 验证

### 1. DTD（文档类型定义）

``` xml
<!DOCTYPE note [
    <!ELEMENT note (to,from,heading,body)>
    <!ELEMENT to (#PCDATA)>
    <!ELEMENT from (#PCDATA)>
    <!ELEMENT heading (#PCDATA)>
    <!ELEMENT body (#PCDATA)>
]>
```

### 2. XML Schema

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="note">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="to" type="xs:string"/>
                <xs:element name="from" type="xs:string"/>
                <xs:element name="heading" type="xs:string"/>
                <xs:element name="body" type="xs:string"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

# xmlns 属性（XML 命名空间）

## 什么是 xmlns

xmlns（XML Namespace）是 XML 中用于避免元素命名冲突的机制。它通过使用唯一的命名空间来区分不同来源的元素和属性。

## 核心概念

xmlns 本质上是在声明："这个标签和它的子标签应该按照某个特定规范来解析"。它就像是在告诉解析器："请用这个地址所定义的规则来理解我的标签"。

### 常见示例

1. **SVG 中的使用**

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- 告诉浏览器：这里的标签要按照 SVG 规范来解析 -->
  <circle cx="50" cy="50" r="40" />
</svg>
```

2. **XHTML 中的使用**

```html
<html xmlns="http://www.w3.org/1999/xhtml">
  <!-- 告诉浏览器：这里的标签要按照 XHTML 规范来解析 -->
  <body>
    <p>这是一个段落</p>
  </body>
</html>
```

## 基本语法

### 1. 默认命名空间

```xml
<!-- 默认命名空间声明 -->
<root xmlns="http://www.example.com/default">
    <child>这个元素属于默认命名空间</child>
</root>
```

### 2. 带前缀的命名空间

```xml
<!-- 带前缀的命名空间声明 -->
<root xmlns:h="http://www.w3.org/TR/html4/"
      xmlns:f="http://www.example.com/furniture">
    <h:table>
        <h:tr>
            <h:td>HTML表格</h:td>
        </h:tr>
    </h:table>
    <f:table>
        <f:name>家具表格</f:name>
    </f:table>
</root>
```

## 常见应用场景

### 1. XHTML 文档

```xml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>XHTML 示例</title>
    </head>
    <body>
        <p>这是 XHTML 文档</p>
    </body>
</html>
```

### 2. SVG 在 HTML 中的使用

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
  <circle
    cx="50"
    cy="50"
    r="40"
    stroke="black"
    stroke-width="3"
    fill="red"
  />
</svg>
```

### 3. Web Services

```xml
<soap:Envelope
    xmlns:soap="http://www.w3.org/2003/05/soap-envelope"
    xmlns:ws="http://www.example.com/webservices">
    <soap:Header>
        <ws:auth>
            <ws:username>user</ws:username>
            <ws:password>pass</ws:password>
        </ws:auth>
    </soap:Header>
    <soap:Body>
        <ws:getPrice>
            <ws:item>book</ws:item>
        </ws:getPrice>
    </soap:Body>
</soap:Envelope>
```

## 命名空间的特点

### 1. 继承性

```xml
<!-- 子元素继承父元素的命名空间 -->
<root xmlns="http://example.com/default"
      xmlns:custom="http://example.com/custom">
    <child>
        <!-- 继承默认命名空间 -->
        <grandchild>默认命名空间</grandchild>
    </child>
    <custom:child>
        <!-- 继承custom命名空间 -->
        <custom:grandchild>自定义命名空间</custom:grandchild>
    </custom:child>
</root>
```

### 2. 属性命名空间

```xml
<!-- 属性的命名空间声明 -->
<element xmlns:xlink="http://www.w3.org/1999/xlink">
    <image xlink:href="image.jpg" />
</element>
```

### 3. 命名空间的作用域

```xml
<root>
    <child xmlns="http://example.com/ns1">
        <!-- 这个命名空间只在child元素及其子元素中有效 -->
        <grandchild>命名空间1</grandchild>
    </child>
    <child xmlns="http://example.com/ns2">
        <!-- 这是另一个命名空间的作用域 -->
        <grandchild>命名空间2</grandchild>
    </child>
</root>
```

## 最佳实践

### 1. 命名空间 URI 的选择

```xml
<!-- 使用域名作为命名空间URI -->
<company xmlns="http://www.yourcompany.com/xml/schema">
    <department>研发部</department>
</company>
```

### 2. 前缀命名规范

```xml
<!-- 使用有意义的前缀 -->
<doc xmlns:html="http://www.w3.org/TR/html4/"
     xmlns:math="http://www.w3.org/Math/MathML"
     xmlns:svg="http://www.w3.org/2000/svg">
    <!-- 前缀应该能表明其用途 -->
</doc>
```

### 3. 避免命名冲突

```xml
<!-- 不同模块使用不同的命名空间 -->
<project xmlns:ui="http://example.com/ui"
         xmlns:data="http://example.com/data">
    <ui:button>点击</ui:button>
    <data:user>用户数据</data:user>
</project>
```

::: warning 注意事项

1. **URI 唯一性**

- 命名空间 URI 必须是唯一的
- URI 不需要是实际可访问的地址
- 通常使用公司域名作为基础

2. **性能考虑**

- 避免过多的命名空间声明
- 合理组织命名空间的层次结构

3. **文档可读性**

- 使用有意义的前缀
- 保持命名空间声明的整洁
- 适当注释命名空间的用途

:::
