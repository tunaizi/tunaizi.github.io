

# Sass

世界上最成熟、最稳定、最强大的专业级CSS扩展语言！

Sass是一个将脚本解析成[CSS](https://baike.baidu.com/item/CSS)的[脚本语言](https://baike.baidu.com/item/脚本语言)，即SassScript。Sass包括两套[语法](https://baike.baidu.com/item/语法)。最开始的语法叫做“缩进语法”，使用[缩进](https://baike.baidu.com/item/缩进)来区分代码块，并且用回车将不同规则分隔开。而较新的语法叫做“SCSS”，使用和CSS一样的块语法，即使用大括号将不同的规则分开，使用分号将具体的样式分开。通常情况下，这两套语法通过.sass和.scss两个[文件扩展名](https://baike.baidu.com/item/文件扩展名)区分开 (了解)

###  sass和scss

SASS 是 CSS3 的一个扩展，增加了规则嵌套、变量、混合、选择器继承等等。

SCSS 是 SASS 的新语法，是 Sassy CSS 的简写，是 CSS3 语法的超集，也就是说所有有效的 CSS3 样式也同样适合于 SASS。

### Sass安装

下载并安装ruby;

![img](https://www.sass.hk/images/2015-08-04_55c05d4ed0a05.jpg)

第三个也要勾选

安装测试 (shift + 鼠标右键 => 在此处打开命名窗口)

```shell
ruby -v 
返回对应的版本号
ruby 2.5.3p105 (2018-10-18 revision 65156) [x64-mingw32]
```



在线安装 (shift + 鼠标右键 => 在此处打开命名窗口)

```shell
//删除替换原gem源   (切换国内安装地址)
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/

//打印是否替换成功
gem sources -l
https://gems.ruby-china.com
# 确保只有 gems.ruby-china.com

//安装 网速不好可能要等待一段时间
gem install sass
```

ctrl + c 退出当前执行命令

本地安装

```shell
gem install 本地sass路径(直接拖拽到命令窗口即可)
```

测试 

```shell
sass -v  
// 返回对应的版本号
Ruby Sass 3.7.4
```



### 编译sass

```shell
如何编译sass
1. 找到项目所在的文件夹(day35_sass) 
2. 在项目文件夹中打开命令窗口
3. 把sass编译成css    命令   sass sass/reset.scss:css/reset.css 
注 css.map 是sass文件对应资源地图  主要用来显示 html中css样式 在sass文件中对应位置
如果想清除资源地图   sass sass/reset.scss:css/reset.css --sourcemap=none

二. vscode自带命令窗口(终端)
找到项目所在的文件夹  鼠标右键=>  在集成终端中打开  => 后续操作同上

```



命令行编译:

```shell
//单文件转换命令
sass input.scss output.css
sass sass/reset.scss:css/reset.css   =>  sass sass的文件夹/对应的scss文件 : css的文件夹/对应css名

//单文件监听命令    
sass --watch input.scss:output.css
sass --watch sass/reset.scss:css/reset.css   =>  sass --watch sass的文件夹/对应的scss文件 : css的文件夹/对应css名

//如果你有很多的sass文件的目录，你也可以告诉sass监听整个目录：
sass --watch app/sass:public/stylesheets
sass --watch sass:css        =>  sass --watch sass的文件夹:css的文件夹

//注意 ctrl + c 停止监听 
```

### 编译排版

sass有四种编译排版:

sass语法:

```css
//未编译样式
.box {
  width: 300px;
  height: 400px;
  &-title {
    height: 30px;
    line-height: 30px;
  }
}
```

### nested 编译排版格式  (嵌套)

```css
/*命令行内容*/
sass style.scss:style.css --style nested

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px; }
  .box-title {
    height: 30px;
    line-height: 30px; }
```

### expanded 编译排版格式 (展开形式)

```js
/*命令行内容*/
sass style.scss:style.css --style expanded

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px;
}
.box-title {
  height: 30px;
  line-height: 30px;
}
```

### compact 编译排版格式 (紧凑式)

```css
/*命令行内容*/
sass style.scss:style.css --style compact

/*编译过后样式*/
.box { width: 300px; height: 400px; }
.box-title { height: 30px; line-height: 30px; }
```

### compressed 编译排版格式 (压缩的)

```css
/*命令行内容*/
sass style.scss:style.css --style compressed

/*编译过后样式*/
.box{width:300px;height:400px}.box-title{height:30px;line-height:30px}
```

## 语法

### 基本用法

#### 注释

SASS共有两种注释风格。

标准的CSS注释(普通注释) /* comment */ ，会保留到编译后的文件。

单行注释(静默注释) // comment，只保留在SASS源文件中，编译后被省略。

#### 变量

SASS允许使用变量，所有变量以$开头。

```css
$blue : #1875e7;　
div {
    color : $blue;
}
```

如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。

插值语句 `#{}` ,  通过 `#{}` 插值语句可以在选择器或属性名中使用变量：

```css
$side : left;
.rounded {
    border-top-#{$side}-radius: 50px;
}
```

#### 计算功能

SASS允许在代码中使用算式：

```css
$var:20;
body {
    margin: (14px/2);
    top: 50px + 100px;
    right: $var * 10%;
}
```

#### 嵌套

SASS允许选择器嵌套。比如，下面的CSS代码：

```css
div h1 {
    color : red;
}
```

##### 后代节点

可以写成

```css
div {
    h1 {
        color:red;
    }
}
```

##### 子节点

```css
.div1{
    >ul{
        border: 10px solid green;
    }
}
```

##### 属性嵌套

```css
p {
    border-color: red;
}
```

可以写成：

```css
p {
    border: {
        color: red;
        width: 10px;
        style: dashed;
    }
}
```
注意，border后面必须加上冒号。

##### 连接

```css
.ab{
    color:red
}
```

可以写成：

```css
.a{
    &b{
        color:red;
    }  
}
```



### 代码的重用

#### 继承

SASS允许一个选择器，继承另一个选择器。比如，现有class1：

```css
.class1 {
    border: 1px solid #ddd;
}
```

class2要继承class1，就要使用@extend命令：

```css
.class2 {
    @extend .class1;
    font-size:120%;
}
```

#### Mixin混合

Mixin有点像C语言的宏（macro），是可以重用的代码块。

使用@mixin命令，定义一个代码块。

```css
@mixin left {
    float: left;
    margin-left: 10px;
}
```

使用@include命令，调用这个mixin。

```css
div {
    @include left;
}
```

mixin的强大之处，在于可以指定参数和缺省值。

```css
@mixin left($value: 10px) {
    float: left;
    margin-right: $value;
}
```

使用的时候，根据需要加入参数：

```css
div {
    @include left(20px);
}
```

### sass引入

在一个sass文件中引入另一个sass文件



### 高级用法

#### 条件语句

@if可以用来判断：

```css
p {
    @if 2==2 {
        
    }@elseif 2>3 {
        
    }@else {
        
    }
}
```

#### 循环语句

##### for

SASS支持for循环

```css
@for $i from 1 to 10 {
    .border-#{$i} {
        border: #{$i}px solid blue;
    }
    .list li:nth-of-type(#{$i}){
        width:100px + $i*5;
    }
}


```

##### while

也支持while循环

```css
$i: 6;
@while $i > 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
}
```

##### each

each命令，作用与for类似：

```css
@each $member in a, b, c, d {
    .#{$member} {
        background-image: url("/image/#{$member}.jpg");
    }
}
```

#### 自定义函数

SASS允许用户编写自己的函数。

```css
@function double($n) {
    @return $n * 2;
}
#sidebar {
    width: double(5px);
}
```
