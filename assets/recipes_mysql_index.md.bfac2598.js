import{o as n,c as s,a}from"./app.41bbddeb.js";const t='{"title":"MySQL Recipe","description":"Add MySQL 5/8 to your local dev environment using Devon","frontmatter":{"title":"MySQL Recipe","head":[["meta",{"name":"description","content":"Add MySQL 5/8 to your local dev environment using Devon"}],["meta",{"name":"description","content":"Add MySQL 5/8 to your local dev environment using Devon"}]]},"headers":[{"level":2,"title":"Configs","slug":"configs"}],"relativePath":"recipes/mysql/index.md","lastUpdated":1628743439761}',o={},p=[a('<h1 id="mysql-recipe"><a class="header-anchor" href="#mysql-recipe" aria-hidden="true">#</a> MySQL Recipe</h1><h2 id="configs"><a class="header-anchor" href="#configs" aria-hidden="true">#</a> Configs</h2><p>If you chose not to add MySQL 5/8 to your monorepo during the <code>devon init</code> command, you can add it using the following recipe:</p><p><code>.devon/mysql/.devconfig.ts</code></p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ServiceConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@casthub/devon&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> config<span class="token operator">:</span> ServiceConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n    compose<span class="token operator">:</span> <span class="token punctuation">{</span>\n        image<span class="token operator">:</span> <span class="token string">&#39;mysql:8&#39;</span><span class="token punctuation">,</span> <span class="token comment">// You can choose MySQL 5 or 8 here!</span>\n        ports<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;33068:3306&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        environment<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// Change these details to ensure a</span>\n            <span class="token comment">// Database &amp; User exist when the container starts</span>\n            <span class="token constant">MYSQL_ROOT_PASSWORD</span><span class="token operator">:</span> <span class="token string">&#39;casthub&#39;</span><span class="token punctuation">,</span>\n            <span class="token constant">MYSQL_DATABASE</span><span class="token operator">:</span> <span class="token string">&#39;casthub&#39;</span><span class="token punctuation">,</span>\n            <span class="token constant">MYSQL_USER</span><span class="token operator">:</span> <span class="token string">&#39;casthub&#39;</span><span class="token punctuation">,</span>\n            <span class="token constant">MYSQL_PASSWORD</span><span class="token operator">:</span> <span class="token string">&#39;casthub&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        volumes<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">&#39;./.devon/.data/mysql8:/var/lib/mysql&#39;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        restart<span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><p><code>.devon.ts</code></p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> DefinitionFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@casthub/devon&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> config<span class="token operator">:</span> DefinitionFile <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    services<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token operator">...</span>\n        <span class="token punctuation">{</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;.devon/mysql&#39;</span><span class="token punctuation">,</span>\n            force<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Makes sure MySQL _always_ boots</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Make sure to re-run the <code>devon switch</code> command to bring the new container up!</p></div>',8)];o.render=function(a,t,o,e,c,l){return n(),s("div",null,p)};export{t as __pageData,o as default};