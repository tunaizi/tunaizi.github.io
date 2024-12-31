import{_ as n,r as a,i as e,a as l}from"./chunks/framework.8a6edf47.js";const m=JSON.parse('{"title":"哈希表 map&set","description":"","frontmatter":{},"headers":[],"relativePath":"start-docs/studyhard/数据结构与算法/哈希表.md","filePath":"start-docs/studyhard/数据结构与算法/哈希表.md"}'),p={name:"start-docs/studyhard/数据结构与算法/哈希表.md"};function t(o,s,c,i,r,u){return a(),e("div",null,s[0]||(s[0]=[l(`<h1 id="哈希表-map-set" tabindex="-1">哈希表 map&amp;set <a class="header-anchor" href="#哈希表-map-set" aria-label="Permalink to &quot;哈希表 map&amp;set&quot;">​</a></h1><ol><li>有效的字母异位词<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">var isAnagram = function(s, t) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   return s.split(&quot;&quot;).sort().join(&quot;&quot;) === t.split(&quot;&quot;).sort().join(&quot;&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">var isAnagram = function(s, t) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   if(s.length !== t.length) return false</span></span>
<span class="line"><span style="color:#e1e4e8;">   const table = new Array(26).fill(0);</span></span>
<span class="line"><span style="color:#e1e4e8;">   for(let i = 0; i &lt; s.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">       table[s.charCodeAt(i) - &#39;a&#39;.charCodeAt(0)]++</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">   for(let i = 0; i &lt; t.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">       table[t.charCodeAt(i) - &#39;a&#39;.charCodeAt(0)]--</span></span>
<span class="line"><span style="color:#e1e4e8;">       if(table[t.charCodeAt(i) - &#39;a&#39;.charCodeAt(0)] &lt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">           return false</span></span>
<span class="line"><span style="color:#e1e4e8;">       }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">   return true</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span></code></pre></div></li><li>两数之和 使用map o(n)<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff"><code><span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 给定 nums = [2, 7, 11, 15], target = 9。因为 nums[0] + nums[1] = 2 + 7 = 9。所以返回 [0, 1]。</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;"> function twoSum(nums, target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   let map = new Map()</span></span>
<span class="line"><span style="color:#e1e4e8;">   for(let i = 0,len = nums.length; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">     let diff = target - nums[i]</span></span>
<span class="line"><span style="color:#e1e4e8;">     if(map.has(diff)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">       return [map.get(diff), i]</span></span>
<span class="line"><span style="color:#e1e4e8;">     }</span></span>
<span class="line"><span style="color:#e1e4e8;">     map.set(nums[i], i)</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;">   return</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span></code></pre></div></li><li>三数之和 使用map o(n**2) 空间复杂度是o(n) 如果先排序，再使用双指针缩小，则可以省掉空间复杂度，时间复杂度不变<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">let res = []</span></span>
<span class="line"><span style="color:#e1e4e8;"> let hash = {}</span></span>
<span class="line"><span style="color:#e1e4e8;"> for (let i = 0; i &lt; nums.length - 2; i++) { // 每个人</span></span>
<span class="line"><span style="color:#e1e4e8;">   for (let j = i + 1; j &lt; nums.length - 1; j++) { // 依次拉上其他每个人</span></span>
<span class="line"><span style="color:#e1e4e8;">     if (hash[nums[j]] !== undefined) { // 已经有合适自己的两人组</span></span>
<span class="line"><span style="color:#e1e4e8;">       res.push([nums[j]].concat(hash[nums[j]]))</span></span>
<span class="line"><span style="color:#e1e4e8;">       hash[nums[j]] = undefined</span></span>
<span class="line"><span style="color:#e1e4e8;">     } else { // 没有合适自己的两人组</span></span>
<span class="line"><span style="color:#e1e4e8;">       let mark = 0 - nums[i] - nums[j]</span></span>
<span class="line"><span style="color:#e1e4e8;">       hash[mark] = [nums[i], nums[j]]</span></span>
<span class="line"><span style="color:#e1e4e8;">     }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;"> return res</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">var threeSum = function (nums) {</span></span>
<span class="line"><span style="color:#e1e4e8;">   let ans = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">   const len = nums.length;</span></span>
<span class="line"><span style="color:#e1e4e8;">   if(nums == null || len &lt; 3) return ans;</span></span>
<span class="line"><span style="color:#e1e4e8;">   nums.sort((a, b) =&gt; a - b); // 排序</span></span>
<span class="line"><span style="color:#e1e4e8;">   for (let i = 0; i &lt; len ; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">       if(nums[i] &gt; 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环</span></span>
<span class="line"><span style="color:#e1e4e8;">       if(i &gt; 0 &amp;&amp; nums[i] == nums[i-1]) continue; // 去重</span></span>
<span class="line"><span style="color:#e1e4e8;">       let L = i+1;</span></span>
<span class="line"><span style="color:#e1e4e8;">       let R = len-1;</span></span>
<span class="line"><span style="color:#e1e4e8;">       while(L &lt; R){</span></span>
<span class="line"><span style="color:#e1e4e8;">           const sum = nums[i] + nums[L] + nums[R];</span></span>
<span class="line"><span style="color:#e1e4e8;">           if(sum == 0){</span></span>
<span class="line"><span style="color:#e1e4e8;">               ans.push([nums[i],nums[L],nums[R]]);</span></span>
<span class="line"><span style="color:#e1e4e8;">               while (L&lt;R &amp;&amp; nums[L] == nums[L+1]) L++; // 去重</span></span>
<span class="line"><span style="color:#e1e4e8;">               while (L&lt;R &amp;&amp; nums[R] == nums[R-1]) R--; // 去重</span></span>
<span class="line"><span style="color:#e1e4e8;">               L++;</span></span>
<span class="line"><span style="color:#e1e4e8;">               R--;</span></span>
<span class="line"><span style="color:#e1e4e8;">           }</span></span>
<span class="line"><span style="color:#e1e4e8;">           else if (sum &lt; 0) L++;</span></span>
<span class="line"><span style="color:#e1e4e8;">           else if (sum &gt; 0) R--;</span></span>
<span class="line"><span style="color:#e1e4e8;">       }</span></span>
<span class="line"><span style="color:#e1e4e8;">   }        </span></span>
<span class="line"><span style="color:#e1e4e8;">   return ans;</span></span>
<span class="line"><span style="color:#e1e4e8;"> } // 示意代码 未AC</span></span></code></pre></div></li></ol>`,2)]))}const d=n(p,[["render",t]]);export{m as __pageData,d as default};
