# bootsrap 样式笔记


布局
.container  (固定式容器)
.container-fluid  (全宽度的容器)

响应式容器
.container-sm
.container-md
.container-lg
.container-xl


	            特小<576px	Small≥576px	Medium≥768px	Large≥992px	 特大≥1200px
.container	    100%	    540像素	        720px	        960px	    1140px
.container-sm	  100%	    540像素	        720px	        960px	    1140px
.container-md	  100%	    100%	          720px	        960px	    1140px
.container-lg	  100%	    100%	          100%	        960px	    1140px
.container-xl	  100%	    100%	          100%	        100%	    1140px
.container-fluid	100%	  100%	          100%	        100%	     100%


网格


栅格布局flex相关


```
    .d-flex {
      display: -ms-flexbox !important;
      display: flex !important;
    }
    .flex-row {
    -ms-flex-direction: row !important;
    flex-direction: row !important;
    }

    .flex-column {
    -ms-flex-direction: column !important;
    flex-direction: column !important;
    }

    .flex-row-reverse {
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
    }

    .flex-column-reverse {
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
    }

    .flex-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
    }

    .flex-nowrap {
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
    }

    .flex-wrap-reverse {
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
    }

    .flex-fill {
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
    }

    .flex-grow-0 {
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
    }

    .flex-grow-1 {
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
    }

    .flex-shrink-0 {
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
    }

    .flex-shrink-1 {
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
    }

    .justify-content-start {
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
    }

    .justify-content-end {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
    }

    .justify-content-center {
    -ms-flex-pack: center !important;
    justify-content: center !important;
    }

    .justify-content-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
    }

    .justify-content-around {
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
    }

    .align-items-start {
    -ms-flex-align: start !important;
    align-items: flex-start !important;
    }

    .align-items-end {
    -ms-flex-align: end !important;
    align-items: flex-end !important;
    }

    .align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important;
    }

    .align-items-baseline {
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
    }

    .align-items-stretch {
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
    }

    .align-content-start {
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
    }

    .align-content-end {
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
    }

    .align-content-center {
    -ms-flex-line-pack: center !important;
    align-content: center !important;
    }

    .align-content-between {
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
    }

    .align-content-around {
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
    }

    .align-content-stretch {
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
    }

    .align-self-auto {
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
    }

    .align-self-start {
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
    }

    .align-self-end {
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
    }

    .align-self-center {
    -ms-flex-item-align: center !important;
    align-self: center !important;
    }

    .align-self-baseline {
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
    }

    .align-self-stretch {
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
    }
```


栅格布局col相关

.col  .col-ms .col-md  .col-lg  .col-xl       :flex:1;
.col-auto  .col-ms-auto .col-md-auto  .col-lg-auto  .col-xl-auto;    :宽度自适应   width:auto; max-width:100%;
.col-1  .col-ms-1  .col-md-1 .col-lg-1  .col-xl-1          : 将总宽度均分为12列  占据其中的1/12



元素类型转化
.d-none  .d-sm-none   .d-md-none    .d-lg-none   .d-xl-none


 .d-none {
    display: none !important;
  }
  .d-inline {
    display: inline !important;
  }
  .d-inline-block {
    display: inline-block !important;
  }
  .d-block {
    display: block !important;
  }
  .d-table {
    display: table !important;
  }
  .d-table-row {
    display: table-row !important;
  }
  .d-table-cell {
    display: table-cell !important;
  }
  .d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
  }
  .d-inline-flex {
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
  }




颜色
--blue: #007bff;
--indigo: #6610f2;
--purple: #6f42c1;
--pink: #e83e8c;
--red: #dc3545;
--orange: #fd7e14;
--yellow: #ffc107;
--green: #28a745;
--teal: #20c997;
--cyan: #17a2b8;
--white: #fff;
--gray: #6c757d;
--gray-dark: #343a40;
--primary: #007bff;
--secondary: #6c757d;
--success: #28a745;
--info: #17a2b8;
--warning: #ffc107;
--danger: #dc3545;
--light: #f8f9fa;
--dark: #343a40;

.text-muted：提示，使用浅灰色（#999）
.text-primary：主要，使用蓝色（#428bca）
.text-success：成功，使用浅绿色(#3c763d)
.text-info：通知信息，使用浅蓝色（#31708f）
.text-warning：警告，使用黄色（#8a6d3b）
.text-danger：危险，使用褐色（#a94442）

.bg-
div bg-secondary progress-bar-striped  背景 透明 模糊 


大小
--breakpoint-xs: 0;
--breakpoint-sm: 576px;
--breakpoint-md: 768px;
--breakpoint-lg: 992px;
--breakpoint-xl: 1200px;

.lead	使段落突出显示
.small	设定小文本 (设置为父文本的 85% 大小)

.list-unstyled  清除ul,ol,li的默认样式
.list-inline-item  多个元素一行显示


图片
.img-fulid    宽度自适应，最大宽度100% (max-width:100%;width:auto;)
.img-thumbnail   图片缩略图(自带padding,border,以及1px圆角)

浮动
.float-left    左浮动
.float-right   右浮动
.clearfix      万能清浮动

表格
.table  默认表格样式
.table-primary/info/success/danger   表格背景颜色
.thead-light 或.thead-dark           表头颜色 浅黑或深灰。
.table-strip                         条纹表格
.table-bordered                      产生表格边框与间隙系统
.table-borderless                    无边界表格
.table-hover                         鼠标移到行上会出现状态提示
.table-sm                            将表格的padding值缩减一半，使表格更加紧凑
.table-responsive                    选择器使表格支持水平响应(默认宽度百分百 如果不够放出现横向滚动条)
.table-responsive{-sm|-md|-lg|-xl}可以根据需要对不同屏幕尺寸断点表格进行响应式设计，在中断点之上该表格会正常显示，而不是水平滚动（没有水平条）。

图文框
    <figure class="figure">
        <img src="../images/youku_img.jpg" class="figure-img w-100 img-fluid rounded"
            alt="A generic square placeholder image with rounded corners in a figure.">
        <figcaption class="figure-caption text-center">A caption for the above image.</figcaption>
    </figure>

组件

1.警告框
  .alert-{priamy/danger/info/success/warning}
  <div class="alert alert-primary fade show" role="alert">
        <p class="float-left">This is a primary alert—check it out!</p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
  </div>
  1.1 关闭警告框
  使用.alert结合JavaScript，可以实现警报效果，贴在页面上，并可以自由关闭，其要点如下：
    a.  确保你正确加载了.alert警报组件，或者是编译后的 Bootstrap JavaScript代码组。
    b.  如果你要自行编译JavaScript组件，请将必须的 util.js包括进去。
    c.  可以在右上角定义一个.close关闭按钮效果，则需要在容器中引用 .alert-dismissible 类。
    d.  警告按钮上要增加data-dismiss="alert" 触发 JavaScript 动作，同时使用<button>元素，以确保在所有设备上都能获得正确的行为响应。
    e.  要在关闭警报时生成警报提示，请确保添加.fade和.show样式。

  1.2  方法
    方法	                 描述
    $().alert()	          使警报监听具有该data-dismiss="alert"属性的后代元素上的单击事件。（使用data-api的自动初始化时不需要。）
    $().alert('close')	  通过从DOM中删除警报来关闭警报。如果元素上存在.fade和.show类，则警报将消失，然后将其删除。
    $().alert('dispose')	销毁元素的警报
  
  1.3  事件
    事件	             描述
    close.bs.alert	  close调用实例方法时，将立即触发此事件。
    closed.bs.alert	  警报已关闭时将触发此事件（将等待CSS转换完成）​​。

2. 徽章
    .badge   徽章默认样式
    .badge-{danger/info/success/warning/secondary/dark/light}  徽章颜色
    .badge-pill   胶囊是徽章(添加 border-radius 变成椭圆)
      <h1>Example heading <span class="badge badge-secondary">New</span></h1>
      <h2>Example heading <span class="badge badge-secondary">New</span></h2>
      <h3>Example heading <span class="badge badge-secondary">New</span></h3>
      <h4>Example heading <span class="badge badge-secondary">New</span></h4>
      <h5>Example heading <span class="badge badge-secondary">New</span></h5>
      <h6>Example heading <span class="badge badge-secondary">New</span></h6>

3. 按钮
    .btn    按钮默认样式
    .btn-{danger/info/success/warning/secondary/dark/light}         按钮样式
    .btn-outline-{danger/info/success/warning/secondary/dark/light}  轮廓按钮(只有边框和文字颜色 鼠标滑过出现背景颜色)
    .btn-xs	                    这会让按钮看起来特别小。
    .btn-sm	                    这会让按钮看起来比较小。
    .btn-lg	                    这会让按钮看起来比较大。
    .btn-block	                这会创建块级的按钮，会横跨父元素的全部宽度。

    .active     启用状态(默认就是启用状态（背景较深、边框较暗、带内阴影）)
    .disabled   禁用状态使按钮看起来处于非活动的禁用状态（点击不会有响应和弹性）。
    注意 如果是button/input[button/sumit/reset]  直接添加disabled  属性 
         <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
        如果是a标签  需要添加 class类  .disabled ; aria-disabled="true" 用于指示辅助技术元素的状态的属性。
        <a href="#" class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a>

    ```
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    ```

    .btn 可以在<button>元素上使用，您也可以在 <a>、 或 <input> 元素上使用這些 Class，同样能带来按钮效果
    ```
    <a class="btn btn-primary" href="#" role="button">Link</a>
    <button class="btn btn-primary" type="submit">Button</button>
    <input class="btn btn-primary" type="button" value="Input">
    <input class="btn btn-primary" type="submit" value="Submit">
    <input class="btn btn-primary" type="reset" value="Reset">
    ```


    切换状态
    (1) 添加 .data-toggle="button" 属性，可以切换按钮的 active 状态，如果你预先需要切换按钮，必须将.active 样式 、 aria-pressed="true"属性到 <button>标签中。
    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
      Single toggle
    </button>
    (2)  js添加
    <button type="button" class="btn second btn-primary active" autocomplete="off">
            true
    </button>
    $(".second").click(function () { //点击切换
        $(".second").button("toggle");   
    })

    单选框和复选框的按钮组
      注意 此处label中不能有for
     <div class="btn-group" data-toggle="buttons">
          <label class="btn btn-secondary active">
              <input type="checkbox" checked name="" id="" autocomplete="off">
              tab01
          </label>
          <label class="btn btn-secondary">
              <input type="checkbox" name="" id="" autocomplete="off">
              tab02
          </label>
          <label class="btn btn-secondary">
              <input type="checkbox" name="" id="" autocomplete="off">
              tab03
          </label>
      </div>
    Bootstrap 4.0正式版提供了全新的复选与单选 解决方案，其方案如下:
    在父级盒子中添加类名  .btn-group-toggle 可以隐藏单选框复选框
     <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-secondary active">
              <input type="checkbox" checked name="" id="" autocomplete="off">
              tab01
          </label>
          <label class="btn btn-secondary">
              <input type="checkbox" name="" id="" autocomplete="off">
              tab02
          </label>
          <label class="btn btn-secondary">
              <input type="checkbox" name="" id="" autocomplete="off">
              tab03
          </label>
      </div>

    
4.按钮组 
  4.1 按钮组   多个按钮编组在一行中
      结构  .btn-group>.btn.btn-primary*3  默认水平
      .btn-group-vertical   垂直按钮组
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">Left</button>
        <button type="button" class="btn btn-secondary">Middle</button>
        <button type="button" class="btn btn-secondary">Right</button>
      </div>

  4.2  按钮工具栏  多个按钮组 编组在一行中
      结构  .btn-toolbar>(.btn-group>.btn.btn-primary*3) *3
      .btn-toolbar  flex布局
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group mr-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-secondary">1</button>
          <button type="button" class="btn btn-secondary">2</button>
          <button type="button" class="btn btn-secondary">3</button>
          <button type="button" class="btn btn-secondary">4</button>
        </div>
        <div class="btn-group mr-2" role="group" aria-label="Second group">
          <button type="button" class="btn btn-secondary">5</button>
          <button type="button" class="btn btn-secondary">6</button>
          <button type="button" class="btn btn-secondary">7</button>
        </div>
        <div class="btn-group" role="group" aria-label="Third group">
          <button type="button" class="btn btn-secondary">8</button>
        </div>
      </div>
  
  4.3 表单组 (拓展)
  <div class="input-group">
    <!-- 提示框  input-group-prepend 提示框在前  ， input-group-apppend  提示框在后 -->
    <div class="input-group-prepend">
      <!-- 提示文本 -->
      <div class="input-group-text" id="btnGroupAddon">@</div>
    </div>
    <!-- 输入文本框 -->
    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon">
  </div>

  4.4 按钮组大小
  .btn-group-lg   较大
  .btn-group-md  (默认)
  .btn-group-sm   较小
  <div class="btn-group btn-group-lg" role="group" aria-label="...">...</div>
  <div class="btn-group" role="group" aria-label="...">...</div>
  <div class="btn-group btn-group-sm" role="group" aria-label="...">...</div>


 









定位
.mt-3 	 margin-top: 1rem !important;
.h-100    height: 100% !important;

.text-left	    设定文本左对齐
.text-center	设定文本居中对齐
.text-right	    设定文本右对齐
.text-justify	设定文本对齐,段落中超出屏幕部分文字自动换行
.text-nowrap	段落中超出屏幕部分不换行

.align-baseline    垂直方向基线对齐
.align-top       垂直方向顶部对齐
.align-middle    垂直方向中线对齐
.align-bottom    垂直方向底部对齐

class .pull-right 向右对齐
class .pull-left 向左对齐

class .form-inline 内联	
	<xx class="xx-inline"><xx/>
		eg: <form class="form-inline">
		
class .form-horizontal 水平
	向父 <form> 元素添加 class .form-horizontal。
	把标签和控件放在一个带有 class .form-group 的 <div> 中。
	向标签添加 class .control-label。
	eg: <form class="form-horizontal" role="form">
			<div class="form-group">
				<label for="firstname" class="col-sm-2 control-label">名字</label>
				 <div class="col-sm-10">
 					 <input type="text" class="form-control" id="firstname" placeholder="请输入名字">
                </div>
            </div>
        </form>

aria是Accessible Rich Internet Application简称，百度翻译：访问富互联网应用程序。
  此类属性是为了增强网页在残障辅助阅读设备上的识别读取。
  aria是一种比较新的辅助访问技术，用来弥补html和js本身对可访问性方面的不足。支持aria并不是必须或者强制的，但是支持aria会让你的应用变得更友好，更健壮


js类
.text-lowercase	设定文本小写
.text-uppercase	设定文本大写
.text-capitalize	设定单词首字母大写

.initialism	显示在 <abbr> 元素中的文本以小号字体展示，且可以将小写字母转换为大写字母
.blockquote-reverse	设定引用右对齐

.list-unstyled	移除默认的列表样式，列表项中左对齐 ( <ul> 和 <ol> 中)。 这个类仅适用于直接子列表项 (如果需要移除嵌套的列表项，你需要在嵌套的列表中使用该样式)
.list-inline	将所有列表项放置同一行

.dl-horizontal	该类设置了浮动和偏移，应用于 <dl> 元素和 <dt> 元素中，具体实现可以查看实例	
.pre-scrollable	使 <pre> 元素可滚动，代码块区域最大高度为340px,一旦超出这个高度,就会在Y轴出现滚动条

.show	强制元素显示
.hidden	强制元素隐藏
.text-hide	将页面元素所包含的文本内容替换为背景图
.close	显示关闭按钮
.caret	显示下拉式功能

html样式
.btn-link	让按钮看起来像个链接 (仍然保留按钮行为)
.active	按钮被点击
.disabled	禁用按钮

group
**-group
	<**>
	<**>
	xx class="**-group-xx"
	
如果要设置垂直方向的按钮可以通过 .btn-group-vertical 类来设置：
