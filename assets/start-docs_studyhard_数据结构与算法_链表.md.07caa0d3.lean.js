import{_ as n,r as e,i as a,a as l}from"./chunks/framework.8a6edf47.js";const u=JSON.parse('{"title":"链表","description":"","frontmatter":{},"headers":[],"relativePath":"start-docs/studyhard/数据结构与算法/链表.md","filePath":"start-docs/studyhard/数据结构与算法/链表.md"}'),p={name:"start-docs/studyhard/数据结构与算法/链表.md"};function t(o,s,c,r,i,d){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="链表" tabindex="-1">链表 <a class="header-anchor" href="#链表" aria-label="Permalink to &quot;链表&quot;">​</a></h1><ul><li>查询慢，需要一个个往指定的第几位找，时间复杂度是O(1)</li><li>插入删除快，不会影响其他元素的位置，是个散列摆放，固然直接将上一个元素的next指向新元素，将新元素的next指向之前的下一个元素即可，时间复杂度是O(1)</li><li>双向链表也是如此，方便正反方向来操作</li></ul><ol><li>链表反转<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">input: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL</span></span>
<span class="line"><span style="color:#e1e4e8;"> output: 5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;NULL</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function ListNode(val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.val = val</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.next = null</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function reverseList(head) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  let prev = null</span></span>
<span class="line"><span style="color:#e1e4e8;">  let curr = head</span></span>
<span class="line"><span style="color:#e1e4e8;">  let next = null</span></span>
<span class="line"><span style="color:#e1e4e8;">   while(curr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">     next = curr.next</span></span>
<span class="line"><span style="color:#e1e4e8;">     curr.next = prev</span></span>
<span class="line"><span style="color:#e1e4e8;">     prev = curr</span></span>
<span class="line"><span style="color:#e1e4e8;">     curr = next</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">   return prev</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre></div></li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">2. 链表交换相邻元素</span></span></code></pre></div><pre><code>function swapPairs (head) {
  if(head === null || head.next === null) return head;
  const nextHead = head.next;
  head.next = swapPairs(nextHead.next);
  nextHead.next = head;
  return newHead
}
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">3. 判断链表是否有环</span></span>
<span class="line"><span style="color:#e1e4e8;">- 一直循环 加个最长时间（.5s)</span></span>
<span class="line"><span style="color:#e1e4e8;">- 使用set数据结构，每次循环将地址加进去，判断地址是否在set中出现 o(n)</span></span>
<span class="line"><span style="color:#e1e4e8;">- 龟兔赛跑 快指针间隔2步 满指针间隔1步 不需要额外的数据结构 如果没有环，永远不会相撞，如果有环，则会相遇 时间复杂度o(n)</span></span>
<span class="line"><span style="color:#e1e4e8;">   \`\`\`</span></span>
<span class="line"><span style="color:#e1e4e8;">   def hasCycle(self, head):</span></span>
<span class="line"><span style="color:#e1e4e8;">     fast = slow = head</span></span>
<span class="line"><span style="color:#e1e4e8;">     while slow and fast and fast.next</span></span>
<span class="line"><span style="color:#e1e4e8;">       slow = slow.next</span></span>
<span class="line"><span style="color:#e1e4e8;">       fast = fast.next.next</span></span>
<span class="line"><span style="color:#e1e4e8;">       if slow is fast:</span></span>
<span class="line"><span style="color:#e1e4e8;">         return true</span></span>
<span class="line"><span style="color:#e1e4e8;">       return false</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">   function hasCycle(head) {</span></span>
<span class="line"><span style="color:#e1e4e8;">     let slow = head</span></span>
<span class="line"><span style="color:#e1e4e8;">     let fast = head</span></span>
<span class="line"><span style="color:#e1e4e8;">     while(slow &amp;&amp; fast &amp;&amp; fast.next) {</span></span>
<span class="line"><span style="color:#e1e4e8;">       slow = slow.next</span></span>
<span class="line"><span style="color:#e1e4e8;">       fast = fast.next.next</span></span>
<span class="line"><span style="color:#e1e4e8;">       if(slow === fast) {</span></span>
<span class="line"><span style="color:#e1e4e8;">         return true</span></span>
<span class="line"><span style="color:#e1e4e8;">       }</span></span>
<span class="line"><span style="color:#e1e4e8;">     }</span></span>
<span class="line"><span style="color:#e1e4e8;">     return false</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> \`\`\`</span></span></code></pre></div>`,6)]))}const h=n(p,[["render",t]]);export{u as __pageData,h as default};
