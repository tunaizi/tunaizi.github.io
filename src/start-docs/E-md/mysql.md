# MySql

## 什么是数据库?
数据库(Database)是按照数据结构来组织、存储和管理数据的仓库。

## MySql 是什么样的数据库?
简介:MySQL 是最流行的关系型数据库管理系统(关系型数据库是由多张能互相联接的二维行列表格组成的数据库);
```
    特点：
    1.数据以表格的形式出现
    2.每行为各种记录名称
    3.每列为记录名称所对应的数据域
    4.许多的行和列组成一张表单
    5.若干的表单组成database
```

相关术语:
```
    数据库: 数据库是一些关联表的集合。
    数据表: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
    列: 一列(数据元素) 包含了相同类型的数据, 例如商品的名称。
    行：一行（=元组，或记录）是一组相关的数据，例如一件商品的相关信息。
    主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
    外键：外键用于关联两个表。
    索引：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
```

## mysql 与 navicat
navicat 是一款能够查看 mysql 数据库的可视化工具，使用 navicat 会让 mysql 变得更加简单。

注: 我们选择的是集成化工具 phpstudy，所以mysql的默认密码是root。


## navicat 快捷建表流程

1. 建立连接 链接mysql ;
|主机名|端口|用户名|密码|
|---|---|---|---|
|localhost|3306|root|root|

注:localhost:3306 是mysql的服务器和端口(不是phpstudy apache)
2. 新建数据库 2005   字符集 utf-8
|数据库名|字符集|排序规则|
|---|---|---|
|2005|utf8 -- UTF-8 Unicode|utf8_general_ci|
3. 打开数据库，在表格选项 右键 新建表
    (1) 一个表一定要有  id   int  主键(PRIMARY KEY)   自动递增(AUTO_INCREMENT)  (新增数据的时候 数据会自动递增编号)

### mysql数据类型 (了解)
1. 整数类型 BIT、BOOL、TINY INT、SMALL INT、MEDIUM INT、 INT、 BIG INT  =>  INT
2. 浮点型    FLOAT、DOUBLE、DECIMAL       =>   DECIMAL
3. 字符串类型  CHAR、VARCHAR 、TEXT   => VARCHAR
4. 日期类型：Date、Time、DateTime、TimeStamp(自动存储记录修改时间 可以存放这条记录最后被修改的时间)、Year
5. 其他数据类型 enum (枚举)

更多信息(https://www.cnblogs.com/-xlp/p/8617760.html);

### mysql索引(了解)
1.普通索引 (normal) 是最基本的索引，它没有任何限制
2.唯一索引 (unique) 与前面的普通索引类似，不同的就是：索引列的值必须唯一，但允许有空值。
3.主键索引 (primary key) 是一种特殊的唯一索引，一个表只能有一个主键，不允许有空值。一般是在建表的时候同时创建主键索引：
4.全文索引 (full text)  主要用来查找文本中的关键字

### 外键约束(了解)
所谓外键约束，就是指外键的作用。之前所讲的外键的作用都是默认的作用，实际上，可以通过对外键的需求，进行定制操作。

外键约束有三种模式，分别为：

district：严格模式（默认），父表不能删除或更新一个已经被子表数据引用的记录；
cascade：级联模式，父表的操作，对应子表关联的数据也跟着被删除；
set null：置空模式，父表的操作之后，子表对应的数据（外键字段）被置空。


## 数据库的查询
特点:  返回的是查询的结果   集合(多条数据)/单条信息

### 1. 查询所有数据
    1.1  按照表名查询
    语法：SELECT 列名称 FROM 表名称
    
    ```
    select *  form `table_name`;
    ```
    
    1.2  根据列名查询 多列数据
    ```
    select id,class_name,student_name,chinese from `grade`;
    ```

### 2. 条件查找(精确查找)

    2.1  单条件
    语法:  SELECT 列名称 FROM 表名称 WHERE 列 运算符 值
    ```
    查询  grade表中id,class_name,student_name,chinese 等4列  且 班级为2003
    
    select id,class_name,student_name,chinese from `grade` where class_name='2003';
    ```
    
    2.1  多条件
    and  如果需要多条件同时满足 就需要用到and
    or  如果有多条件只需满足一个就可以 就需要用到 or
    
    查询  grade表中id,class_name,student_name,chinese 等4列   班级为2003且学生是张三
    ```
    select id,class_name,student_name,chinese from `grade` where class_name='2003' and student_name='张三' ;
    ```

###  3. 模糊查询(like)
    LIKE 操作符用于在 WHERE 子句中搜索列中的指定模式。
    
    SQL LIKE 操作符语法
        SELECT column_name(s)  FROM table_name  WHERE column_name LIKE pattern
    
    --  ："%" 可用于定义通配符（模式中缺少的字符）。
        以王开头的学生
        select * from `grade` where student_name like "王%" 
        以五结尾的学生
        select * from `grade`  where student_name like "%五";
        以学生名包含小的
        select * from `grade`  where student_name like "%小%" 

## 4. 条件查找(范围查找)
把2003班中语文成绩 60分以上，80分以下的同学给筛选出来

(1)  通过多条件限制
```
    select * from `grade` where class_name='2003' and chinese >= 60 and chinese < 80;
```
   (2)  通过 between ... and ... 
```
    select * from `grade` where class_name='2003' and chinese between 60 and 80;
```

   

##  5. 多值查询
IN 操作符允许我们在 WHERE 子句中规定多个值。  in操作符允许我们一次性查询多个值


查询 '张三','李四','王五'  三人的成绩

传统多条件写法
```
SELECT * from `grade` where student_name = '张三' or student_name =  '李四' or  student_name = '王五'
```

in 写法
```
SELECT * from `grade` where student_name in ('张三','李四','王五')
```

##  6. 排序(升序 降序)
    语法
    select column_name(列名)  from  `table_name` where column_name 限制条件  order by  column_name  asc/desc
    
    order  by  排序关键词
    排序方式 
        asc  升序(ascend  上升);
        desc  降序(descend 下降);
    
    查询 2003班所有学生语文成绩 语文成绩从高到低 成绩相同时按id大小排序
        SELECT id,class_name,student_name,chinese FROM `grade` where class_name='2003' order by chinese desc,id asc;


####  6. 数据输出限制
limit m,n   跳过m条数据,显示n条  (主要用来做数据分页)
```
  语法
select column_name(列名)  from  `table_name` where column_name 限制条件  order by  column_name  asc/desc  limit m,n
  
   SELECT id,class_name,student_name,chinese FROM `grade` where class_name='2003' order by chinese desc,id asc LIMIT 0,10;
```


#### 7. 拓展新增

-- SELECT count(*) FROM `grade` where class_name='2003';       -- 满足条件的所有数据的数量
-- SELECT sum(chinese) FROM `grade` where class_name='2003';   -- 列之和
-- SELECT avg(chinese) FROM `grade` where class_name='2003';   -- 列之平均值
-- SELECT max(chinese) FROM `grade` where class_name='2003';   -- 列之最大值
-- SELECT min(chinese) FROM `grade` where class_name='2003';   -- 列之最小值
-- SELECT round(avg(chinese)) FROM `grade` where class_name='2003';   -- 四舍五入







## 二 mysql 的新增
插入语句 返回   受影响的行数  

INSERT INTO 语句用于向表格中插入新的行

INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
插入单条
```
insert into `grade`(class_name,student_name,chinese,math,english) VALUES('2003','heihei',25,1,9)
```

插入单条
```
insert into `grade`(class_name,student_name,chinese,math,english) VALUES('2003','heihei',25,1,9),('2003',"xixi",85,90,78)

```


## 三 mysql 的删除

删除语句 返回   受影响的行数 ( row>0   删除成功   row==0  删除失败 )   配合条件语句更佳

语法

delete from `grade` where  条件

```  
    delete FROM `grade_copy` where  student_name ='' ;

    delete FROM `grade_copy` where  id=42;
```


## 三 mysql 的更新
插入语句 返回   受影响的行数 ( row>0   更新成功   row==0  更新失败 )


更新 一列
```
update `grade_copy` set student_name='星期一' where id = 35
```

更新 多列

```
update `grade_copy` set chinese=80,math=70,english=50  where id = 53 
mklink / D  "C:\Users\jinlin\AppData\Local\Google\Chrome\User Data\Default\cache" "C:\User\jinlin"改谷歌浏览器命令行!!!!
```

