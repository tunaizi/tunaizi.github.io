import { _ as _export_sfc, b as r3, c as it, S as ig } from "./chunks/framework.6235ba6c.js";
const __pageData = JSON.parse('{"title":"json-server的使用  用来模拟数据","description":"","frontmatter":{},"headers":[],"relativePath":"start-docs/E-md/json-server的使用  用来模拟数据.md","filePath":"start-docs/E-md/json-server的使用  用来模拟数据.md"}');
const _sfc_main = { name: "start-docs/E-md/json-server的使用  用来模拟数据.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return r3(), it("div", null, _cache[0] || (_cache[0] = [
    ig('<h1 id="json-server的使用-用来模拟数据" tabindex="-1">json-server的使用 用来模拟数据 <a class="header-anchor" href="#json-server的使用-用来模拟数据" aria-label="Permalink to &quot;json-server的使用  用来模拟数据&quot;">​</a></h1><p>1:安装(win+r cmd ) npm install json-server -g</p><p>2:新建一个文件夹db</p><p>3:里面新建一个文件 后缀是.json (2007.json)</p><p>4:写入标准的JSON格式(键值对 键必须打上双引号)</p><p>5:{</p><p>&quot;tablename1&quot;:[],</p><p>&quot;tablename2&quot;:[],</p><p>}</p><p>在里面id表示主键(会自动增长的)</p><p>6:正删改查</p><p>method:get /查询</p><p>method:post //新增</p><p>method:put //修改</p><p>method:delete //删除</p><p>启动服务 到指定的目录下面 json-server --watch --host 0.0.0.0 --port 6789 2007.json</p><p>参数里面 q表示模糊查询</p><p>_limit 表示限制条数</p><p>-page第几天页</p>', 19)
  ]));
}
const jsonServer___________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  jsonServer___________ as default
};
