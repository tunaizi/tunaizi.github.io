import{_ as s,r as e,i as a,a as l}from"./chunks/framework.8a6edf47.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"贪心算法（“只看眼前，目光短浅”）Greedy","slug":"贪心算法-只看眼前-目光短浅-greedy","link":"#贪心算法-只看眼前-目光短浅-greedy","children":[]},{"level":2,"title":"动态规划 dynamic programming (其实就是动态递推)","slug":"动态规划-dynamic-programming-其实就是动态递推","link":"#动态规划-dynamic-programming-其实就是动态递推","children":[]}],"relativePath":"start-docs/studyhard/数据结构与算法/动态规划和贪心算法.md","filePath":"start-docs/studyhard/数据结构与算法/动态规划和贪心算法.md"}'),p={name:"start-docs/studyhard/数据结构与算法/动态规划和贪心算法.md"};function i(o,n,t,r,c,d){return e(),a("div",null,n[0]||(n[0]=[l(`<h2 id="贪心算法-只看眼前-目光短浅-greedy" tabindex="-1">贪心算法（“只看眼前，目光短浅”）Greedy <a class="header-anchor" href="#贪心算法-只看眼前-目光短浅-greedy" aria-label="Permalink to &quot;贪心算法（“只看眼前，目光短浅”）Greedy&quot;">​</a></h2><ul><li>在对问题求解时，总是做出在当前看来是最好的选择。但是在最后不一定是最优。</li><li>eg: 用1/5/10/20/50 来配出36元,求出纸币数最少的。</li><li>贪心算法的场景要求： <ul><li>问题能够分解成子问题解决，子问题的最优解能递推到最终问题的最优解。这种子问题最优解成为最优子问题。</li><li>当贪心算法不能解决时，就用动态规划</li><li>贪心算法与动态规划不同在于它对每个子问题的解决方案都做出选择，不能回退。</li><li>动态规划则会保存以前的运算的结果，并根据以前的结果对当前进项选择，有回退功能。</li></ul></li><li>letcode 122 股票买卖最佳时机 <ul><li>DFS 时间复杂度o(2**n)</li><li>Greedy 时间复杂度o(n)</li><li>DP 动态规划 时间复杂度o(n)</li></ul></li></ul><h2 id="动态规划-dynamic-programming-其实就是动态递推" tabindex="-1">动态规划 dynamic programming (其实就是动态递推) <a class="header-anchor" href="#动态规划-dynamic-programming-其实就是动态递推" aria-label="Permalink to &quot;动态规划 dynamic programming (其实就是动态递推)&quot;">​</a></h2><ul><li><p>递归+记忆化 -&gt; 递推</p></li><li><p>状态的定义： opt[n],dp[n], fib[n]</p></li><li><p>状态的转移方程： opt[n]=best_of(opt[n-1], opt[n-2],...)</p></li><li><p>最优子结构</p></li><li><p>斐波拉契</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">// 时间复杂度是o(n^2) -&gt; 自顶向下</span></span>
<span class="line"><span style="color:#e1e4e8;">  function fib(n) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return n &lt;= 1 ? n : fib(n-1) + fib(n-2)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  //带有记忆的递归 时间复杂度是o(n) -&gt; 自顶向下</span></span>
<span class="line"><span style="color:#e1e4e8;">  function fib(n ,memo = []) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if(n &lt;= 1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return n</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else if(!memo[n]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return memo[n] = fib(n-1) + fib(n-2)</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return momo[n]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  //采用递推的形式，-&gt; 自底向上</span></span>
<span class="line"><span style="color:#e1e4e8;">  function fib(n) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let dp = []</span></span>
<span class="line"><span style="color:#e1e4e8;">    dp[0] = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    dp[1] = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(let i = 2; i &lt;= n; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      dp[i] = dp[i-1] + dp[i-2]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return dp[n]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div></li><li><p>二维表格，从左上角走到右下角的路径可能数。中途可能有的格子是石头。 dp[i,j] = dp[i-1, j] + dp[i, j-1]</p></li><li><p>爬楼梯</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">function clambStaris(n) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let dp = new Array();</span></span>
<span class="line"><span style="color:#e1e4e8;">    dp[0] = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    dp[1] = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    for(let i = 2; i &lt;= n; i++){</span></span>
<span class="line"><span style="color:#e1e4e8;">      dp[i] = dp[i-1] + dp[i-2]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return dp[n]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre></div>`,5)]))}const u=s(p,[["render",i]]);export{m as __pageData,u as default};
