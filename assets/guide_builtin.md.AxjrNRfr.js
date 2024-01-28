import{_ as s,c as i,o as e,U as a}from"./chunks/framework.1w2Uju2n.js";const g=JSON.parse('{"title":"Built-ins","description":"","frontmatter":{},"headers":[],"relativePath":"guide/builtin.md","filePath":"guide/builtin.md"}'),n={name:"guide/builtin.md"},t=a(`<h1 id="built-ins" tabindex="-1">Built-ins <a class="header-anchor" href="#built-ins" aria-label="Permalink to &quot;Built-ins&quot;">​</a></h1><h2 id="constants" tabindex="-1">Constants <a class="header-anchor" href="#constants" aria-label="Permalink to &quot;Constants&quot;">​</a></h2><p>Mathflow comes with pre-defined universal constants to ease your workflow.</p><ul><li><code>pi</code> - This is the ratio of the circumference of a circle to its diameter</li><li><code>e</code> - The mathematical constant <em>e</em>. This is Euler&#39;s number, the base of natural logarithms.</li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><p>Just like Mathematics, MathFlow has commonly used functions built in. A full list of those functions can be found in this <a href="https://github.com/henryhale/mathflow/blob/master/src/global.ts" target="_blank" rel="noreferrer">file</a>.</p><ul><li><code>exp</code> - returns <em>e</em> (the base of natural logarithms) raised to a power</li><li><code>log</code> - returns the base 10 logarithm of a number</li><li><code>ln</code> - returns the natural logarithm of a number</li><li><code>deg</code> - convert radians into degrees</li><li><code>rad</code> - convert degrees into radians</li><li><code>sin</code> - returns the sine of a number in degrees</li><li><code>cos</code> - returns the cosine of a number in degrees</li><li><code>tan</code> - returns the tangent of a number in degrees</li><li><code>asin</code> - equivalent to arcsine of a number</li><li><code>acos</code> - equivalent to arcosine of a number</li><li><code>atan</code> - equivalent to arctangent of a number</li><li><code>sqrt</code> - returns the square root of a number</li></ul><p><strong>Examples:</strong></p><p>These functions can take up a single number or expression.</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0.5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">acos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0.5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sqrt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,10),l=[t];function r(o,h,d,c,p,k){return e(),i("div",null,l)}const m=s(n,[["render",r]]);export{g as __pageData,m as default};
