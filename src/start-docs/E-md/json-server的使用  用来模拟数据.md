# json-server的使用  用来模拟数据

1:安装(win+r     cmd  )   npm  install  json-server -g

2:新建一个文件夹db

3:里面新建一个文件 后缀是.json  (2007.json)

4:写入标准的JSON格式(键值对  键必须打上双引号)

5:{  

"tablename1":[],

"tablename2":[],

}

在里面id表示主键(会自动增长的)

6:正删改查

  method:get  /查询

 method:post //新增 

method:put //修改

method:delete //删除



启动服务 到指定的目录下面  json-server  --watch  --host 0.0.0.0 --port 6789 2007.json





参数里面  q表示模糊查询

_limit 表示限制条数

-page第几天页





