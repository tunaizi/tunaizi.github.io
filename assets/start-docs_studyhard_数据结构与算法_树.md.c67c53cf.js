import{_ as a,r as n,i as l,a as e}from"./chunks/framework.8a6edf47.js";const y=JSON.parse('{"title":"树&二叉树&二叉搜索树","description":"","frontmatter":{},"headers":[],"relativePath":"start-docs/studyhard/数据结构与算法/树.md","filePath":"start-docs/studyhard/数据结构与算法/树.md"}'),o={name:"start-docs/studyhard/数据结构与算法/树.md"};function p(t,s,i,r,c,d){return n(),l("div",null,s[0]||(s[0]=[e(`<h1 id="树-二叉树-二叉搜索树" tabindex="-1">树&amp;二叉树&amp;二叉搜索树 <a class="header-anchor" href="#树-二叉树-二叉搜索树" aria-label="Permalink to &quot;树&amp;二叉树&amp;二叉搜索树&quot;">​</a></h1><ul><li>链表是特殊的树</li><li>树是特殊的图形 (图形就是含有环形的链表，常用判断最优路径）</li></ul><ol><li>验证二叉搜索树</li></ol><ul><li>做一次中序遍历 时间复杂度o(n)<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function isValisBST(root) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let stack = []</span></span>
<span class="line"><span style="color:#e1e4e8;">    let inorder = -Infinity</span></span>
<span class="line"><span style="color:#e1e4e8;">    while(root !== null || stack.length) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      while(root !== null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        stack.push(root)</span></span>
<span class="line"><span style="color:#e1e4e8;">        root = root.left</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      root = stack.pop()</span></span>
<span class="line"><span style="color:#e1e4e8;">      if(root.val &lt;= inorder) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return false</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">      inorder = root.val</span></span>
<span class="line"><span style="color:#e1e4e8;">      root = root.right</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return true</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div></li><li>递归 时间复杂度o(n)<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function isValidBST(root, min = -Infinity, max = Infinity) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return root === null || root.val &gt; min &amp;&amp; root.val &lt; max &amp;&amp; isValidBST(root.left, min, root.val) &amp;&amp; isValidBST(root.right, root.val, max)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div></li></ul><ol start="2"><li>二叉树&amp;二叉搜索树的最近公共祖先</li><li>二叉树遍历</li></ol><ul><li>前序pre-order 根-左-右</li><li>中序In-order 左-根-右</li><li>后序Post-order 左-右-根</li><li>常用： 广度优先遍历&amp;深度优先遍历</li></ul>`,6)]))}const m=a(o,[["render",p]]);export{y as __pageData,m as default};
