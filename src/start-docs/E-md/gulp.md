# gulp

gulp 是基于 node 实现 Web 前端自动化开发的工具，利用它能够极大的提高开发效率。 在 Web 前端开发工作中有很多“重复工作”，比如压缩CSS/JS/html文件。而这些工作都是有规律的。找到这些规律，并编写 gulp 配置代码,让 gulp 自动执行这些“重复工作”。

目前开发项目比较主流的做法是，使用gulp或webpack这种前端工程化工具来管理我们的项目。

具体指将项目分为两个环境，分别是开发环境和生产环境，我们只关注开发环境。

> 我们在开发环境中编写代码，利用gulp自动对开发环境中的文件代码进行整合，将整合后的代码保存到生产环境下，而这个生产环境，就是最终挂到服务器的线上网站。

> 使用gulp时，需要用npm下载相应的模块，所以需要安装nodejs环境。

# 环境搭建

## 全局安装gulp模块

```bash
npm install gulp --global     //全局安装表示在当前电脑中可以使用gulp环境了
```

> npm i gulp -g 等同于 npm install gulp --global

> npm uninstall gulp --global 表示删除全局gulp，uninstall的简写为uni，--global的简写为-g

## 命令行进入到项目

进入到某个文件夹，把这个文件夹看作项目的根目录。

```bash
cd project1
```

## 初始化项目

然后初始化项目，生成package.json文件，这个文件描述项目信息和相关依赖。

```bash
npm init

在路径  下会形成这样的一个.json文件（部分内容为后添加的）
{
  "name": "gulptest",//项目名称（必须）
  "version": "0.0.1",//项目版本（必须）
  "description": "这是一个gulp的测试程序",//项目描述（必须）
  "homepage": "",   //项目主页
  "main": "index.js",//入口文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [//关键词
    "gulp"
  ],
  "author": "wuxunxun007",//作者
  "license": "ISC"//项目许可协议
  "devDependencies": {    //项目依赖的插件
    "gulp": "^3.8.11",
    "gulp-less": "^3.0.0"
  }

}
```

> npm init -y 以默认值创建package.json

## 局部安装gulp

在项目目录中，局部安装gulp模块，将gulp模块描述为开发环境依赖。(局部安装表示在当前项目要使用的gulp)

```bash
npm install gulp --save-dev
```

依赖分两种：

```bash
{
    dependencies:{},        # --save        生产环境    简写 -S
    devDependencies:{}      # --save-dev	开发环境    简写 -D
}
```

在根目录创建2个文件夹，src表示开发环境，dist表示生产环境。

```
project1/
    src/            # 开发环境
    dist/           # 生产环境
```

> 我们在 src 目录下编写代码，比如在src下面建立js、css..文件夹，里面建立相关的文件，编写相关的代码。

# gulp 任务

```
gulp的常见方法
    task: [Function: bound task],
    watch: [Function: bound ],
    src: [Function: bound src],               //要操作的文件路径  src() 接受 glob 参数(可以查找符合特定规则的文件路径名)，并从文件系统中读取文件然后生成一个 Node 流（stream）。它将所有匹配的文件读取到内存中并通过流（stream）进行处理。
    pipe:[function:bound pipe],
    dest: [Function: bound dest],
    series: [Function: bound series],       调用已创建的任务(串联执行   一个任务接着一个执行  同步执行)
    parallel: [Function: bound parallel],   调用已创建的任务(并联执行   多个任务同时执行  异步执行)  
    
注:
 	src() 接受 glob 参数(可以查找符合特定规则的文件路径名)，并从文件系统中读取文件然后生成一个 Node 流（stream）。它将所有匹配的文件读取到内存中并通过流（stream）进行处理。
    流（stream）所提供的主要的 API 是 .pipe() 方法，用于连接转换流（Transform streams）或可写流（Writable streams）
    dest() 接受一个输出目录作为参数，并且它还会产生一个 Node 流（stream），通常作为终止流（terminator stream）。当它接收到通过管道（pipeline）传输的文件时，它会将文件内容及文件属性写入到指定的目录中。
```



## 建立任务

在项目根目录下建立 gulpfile.js 文件，必须是这个名字，这个文件指gulp任务文件。

```javascript
// 引入gulp模块
var gulp = require("gulp"); 

// 建立gulp任务
gulp.task("task1", function(){
    return gulp.src("src/js/*.js").pipe(gulp.dest("dist/js/")); 
});
```

**src** 源，**dest** 目标，**pipe** 管道。 合在一起指：把源中文件通过管道复制到目标文件夹中。

> return 描述的是异步任务执行完毕了

## 执行任务

```bash
gulp task1
```

# css

## sass预处理器

```javascript
// cnpm install --save-dev gulp-sass
var sass = require('gulp-sass'); // 编译scss
var concat = require('gulp-concat');  // 合并
var rename = require('gulp-rename');  // 重命名

gulp.task('task2', function(){
    return gulp.src(['src/css/1.scss','src/css/2.scss']) 
        .pipe(concat("bk.css"))     // 合并
        .pipe(sass())               // 编译
        .pipe(gulp.dest('dist/css')); 
})
```


如果 gulp-sass 无法下载，那么使用 gulp-sass-china

```javascript
//cnpm i -D gulp-sass-china

var sass = require('gulp-sass-china');
gulp.task('task2', function(){
    return gulp.src(['src/css/1.scss','src/css/2.scss']) 
        .pipe(concat("bk.css")) 
        .pipe(sass())
        .pipe(gulp.dest('dist/css')); 
})
```

### 浏览器前缀

gulp教程之gulp-autoprefixer（根据设置浏览器版本自动处理浏览器前缀）

```
var gulp = require('gulp'),
var autoprefixer = require('gulp-autoprefixer')
    const sourcemaps = require('gulp-sourcemaps')
    // const postcss = require('gulp-postcss')
 
gulp.task('testAutoFx', function () {
    gulp.src('src/css/index.css')
    	.pipe(sourcemaps.init())
        .pipe(autoprefixer({
        	cascade: false, //是否美化属性值 默认：true 像这样：
         	//-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});
pagkage.json配置
 "browserslist": [
    "last 2 versions",
    "last 1 Chrome versions",
    "last 3 Safari versions",
    "Firefox >= 20"
  ]

3.2、gulp-autoprefixer的browsers参数详解 （传送门）：

● last 2 versions: 主流浏览器的最新两个版本

● last 1 Chrome versions: 谷歌浏览器的最新版本

● last 2 Explorer versions: IE的最新两个版本

● last 3 Safari versions: 苹果浏览器最新三个版本

● Firefox >= 20: 火狐浏览器的版本大于或等于20

● iOS 7: IOS7版本

● Firefox ESR: 最新ESR版本的火狐

● > 5%: 全球统计有超过5%的使用率
```



## 压缩

```javascript
// cnpm install --save-dev gulp-minify-css
var minifyCSS = require('gulp-minify-css'); // 用于压缩 CSS 

gulp.task('task2', function(){
    return gulp.src(['src/css/1.scss','src/css/2.scss']) 
        .pipe(concat("bk.css")) 
        .pipe(sass({
            outputStyle: "expanded"  // nested expanded compact  compressed
        })) 
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css')); 
})
```

# js

## es6转es5

**安装gulp-babel**

```bash
# Babel 6
npm install --save-dev gulp-babel

# Babel 7
npm install --save-dev gulp-babel@next @babel/core
```

**安装es6转es5的插件**

```bash
npm install @babel/preset-env --save-dev
```

**.babelrc配置插件**

在根目录下，自己建.babelrc文件，这个文件用来做es6编译配置。

```
{
    "presets": ["@babel/preset-env"]
}
```

**代码中使用**

```javascript
const gulp = require('gulp');
var babel = require("gulp-babel");

gulp.task('task1', function(){
    return gulp.src('src/js/1.js')
                .pipe(babel())
                .pipe(gulp.dest('dist/js/'));
})
```

**如果不喜欢.babelrc，那么可以在babel中直接写**

```javascript
const gulp = require('gulp');
var babel = require("gulp-babel");

gulp.task('task1', function(){
    return gulp.src('src/js/1.js')
                .pipe(babel({
                    "presets":["@babel/preset-env"]
                }))
                .pipe(gulp.dest('dist/js/'));
})
```

## 合并

```javascript
const gulp = require('gulp');
var babel = require("gulp-babel");
// cnpm install --save-dev gulp-concat
var concat = require('gulp-concat');

gulp.task('task1', function(){
    return gulp.src(['src/js/1.js','src/js/0.js'])
                .pipe(concat("bk.min.js"))
                .pipe(babel({"presets": ["@babel/preset-env"]}))                
                .pipe(gulp.dest('dist/js/'));
})
```

## 压缩

```javascript
const gulp = require('gulp');
// cnpm install --save-dev gulp-uglify
var uglify = require('gulp-uglify');

gulp.task('task1', function(){
    return gulp.src('src/js/1.js')
                .pipe(uglify())
                .pipe(gulp.dest('dist/js/'));
})
```

# html

## 压缩html

```javascript
// cnpm install --save-dev gulp-minify-html
var minifyHTML = require("gulp-minify-html"); //压缩html 

// 处理HTML文件 
gulp.task('html', function() { 
	gulp.src('src/html/index.html')
		.pipe(minifyHTML({quotes:true})) //是否保留引号 
		.pipe(gulp.dest('dist/html/')); 
});
```

### img处理

```

 gulp.task("images", function () {
 		//  "src/images/**/*.{jpg,png,gif}"   读取 当前文件夹 中的 文件 以及 子文件夹中的文件 .gif|png|jpg
        return gulp.src("src/images/**/*.{png,jpg,gif}")
            .pipe(gulp.dest("dist/images"));
    })
```



# 文件监听

## gulp 3 写法

```javascript
// 监听：如果文件被修改，则执行相应任务 
gulp.task('auto', function () { 
	gulp.watch('src/html/index.html', ['html']); 
	gulp.watch('src/js/*.js', ['js']); 
	gulp.watch('src/css/*.scss', ['scss']); 
}); 


// 执行gulp的默认任务   命令行中直接执行 gulp （gulp 后面不需要跟任务名称）
gulp.task('default', ["auto"], function(){ 
	console.log("默认任务"); 
});
```

## gulp 4+ 写法(主流)

```javascript
// 执行auto任务时，执行abc和task2任务
gulp.task('auto', gulp.series('abc', 'task2') );

// 执行auto任务时，执行abc任务，abc任务执行完毕后，执行回调函数中代码
gulp.task('auto', gulp.series('abc', ()=>{
    console.log('..auto..')
    // 监听src/js下所有的js文件，如果文件发生变化，执行abc任务
    gulp.watch('./src/js/*.js', gulp.series('abc'))
}))
```

# 开启服务

```javascript
// cnpm install --save-dev gulp-connect
const connect = require('gulp-connect');		// npm i -S gulp-connect

gulp.task('myServer', function() {
    connect.server({
        root: 'dist',
        port: 8000,
        livereload: true
    });
    connect.server({
        root: 'src',
        port: 8001,
        livereload: true
    });
});
```

上面的任务开启了两个服务器环境，livereload表示当文件被更改时是否自动刷新，有兼容问题。
