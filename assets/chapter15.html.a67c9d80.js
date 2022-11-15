import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as r,e as d}from"./app.f8ee6222.js";const n={},a=d(`<h2 id="\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F</h2><p>\u6B63\u5219\u8868\u8FBE\u5F0F(regular expression)\u63CF\u8FF0\u4E86\u5B57\u7B26\u4E32\u7684\u201C\u6784\u6210\u6A21\u5F0F\u201D\u7ECF\u5E38\u88AB\u7528\u4E8E\u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u9884\u5B9A\u7684\u683C\u5F0F\u8981\u6C42</p><p>\u6B63\u5219\u8868\u8FBE\u5F0F\u201C\u6309\u4F4D\u201D\u63CF\u8FF0\u89C4\u5219\uFF0C\u662F\u6307\u5B83\u662F\u4E00\u4F4D\u4E00\u4F4D\u7684\u63CF\u8FF0\u5B57\u7B26\u4E32\u7684\u6784\u6210\u5F62\u5F0F</p><p>\u6BD4\u5982\u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u4E0D\u662F\u8FD9\u6837\u7684: \u4EE5\u5B57\u6BCDm\u5F00\u5934\uFF0C\u7136\u540E\u662F3\u4E2A\u6570\u5B57\uFF0C\u6700\u540E\u4EE5\u5B57\u6BCDn\u7ED3\u5C3E</p><pre><code>/^m\\d\\d\\dn$/
</code></pre><h3 id="\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u521B\u5EFA" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u521B\u5EFA</h3><p>\u4F7F\u7528/\u5185\u5BB9/\u7684\u8BED\u6CD5\u5F62\u5F0F\uFF0C\u53EF\u4EE5\u5FEB\u901F\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F</p><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528new RegExp(&#39;\u5185\u5BB9&#39;)\u7684\u5F62\u5F0F\uFF0C\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F</p><p>\u4F7F\u7528typeof\u8FD0\u7B97\u7B26\u68C0\u67E5\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B\uFF0C\u7ED3\u679C\u662Fobject</p><pre><code>var regexp1 = /^\\d{6}$/;
var regexp2 = new Regexp(&#39;^\\\\d{6}$&#39;);
</code></pre><h3 id="\u5143\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5143\u5B57\u7B26" aria-hidden="true">#</a> \u5143\u5B57\u7B26</h3><table><thead><tr><th style="text-align:center;">\u5143\u5B57\u7B26</th><th style="text-align:center;">\u529F\u80FD</th></tr></thead><tbody><tr><td style="text-align:center;">\\d</td><td style="text-align:center;">\u5339\u914D\u4E00\u4E2A\u6570\u5B57</td></tr><tr><td style="text-align:center;">\\D</td><td style="text-align:center;">\u5339\u914D\u4E00\u4E2A\u975E\u6570\u5B57\u5B57\u7B26</td></tr><tr><td style="text-align:center;">\\w</td><td style="text-align:center;">\u5339\u914D\u4E00\u4E2A\u5355\u5B57\u5B57\u7B26\uFF08\u5B57\u6BCD\u3001\u6570\u5B57\u6216\u8005\u4E0B\u5212\u7EBF\uFF09</td></tr><tr><td style="text-align:center;">\\W</td><td style="text-align:center;">\u5339\u914D\u4E00\u4E2A\u975E\u5355\u5B57\u5B57\u7B26</td></tr><tr><td style="text-align:center;">\\s</td><td style="text-align:center;">\u5339\u914D\u4E00\u4E2A\u7A7A\u767D\u5B57\u7B26\uFF0C\u5305\u62EC\u7A7A\u683C\u3001\u5236\u8868\u7B26\u548C\u6362\u884C\u7B26</td></tr><tr><td style="text-align:center;">.</td><td style="text-align:center;">\u4EFB\u610F\u5B57\u7B26</td></tr><tr><td style="text-align:center;">^</td><td style="text-align:center;">\u5339\u914D\u5F00\u5934</td></tr><tr><td style="text-align:center;">$</td><td style="text-align:center;">\u5339\u914D\u7ED3\u5C3E</td></tr></tbody></table><h3 id="\u5B57\u7B26\u7684\u8F6C\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u7684\u8F6C\u4E49" aria-hidden="true">#</a> \u5B57\u7B26\u7684\u8F6C\u4E49</h3><p>\u5728\u7279\u6B8A\u5B57\u7B26\u4E4B\u524D\u7684\u53CD\u659C\u6760\\\u8868\u793A\u4E0B\u4E00\u4E2A\u5B57\u7B26\u4E0D\u662F\u7279\u6B8A\u5B57\u7B26\uFF0C\u5E94\u8BE5\u6309\u7167\u5B57\u9762\u7406\u89E3</p><pre><code>/^.$/ \u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u4E0D\u662F\u4EFB\u610F\u5B57\u7B26
/^\\.$/ \u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u4E0D\u662F.\u5B57\u7B26
/^\\\\$/ \u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u4E0D\u662F\\\u5B57\u7B26
</code></pre><p>\u4E0D\u7BA1\u4E00\u4E2A\u7B26\u53F7\u6709\u6CA1\u6709\u7279\u6B8A\u610F\u4E49\uFF0C\u90FD\u53EF\u4EE5\u5728\u5176\u4E4B\u524D\u52A0\u4E0A\u4E00\u4E2A\\\u4EE5\u786E\u4FDD\u5B83\u8868\u8FBE\u7684\u662F\u8FD9\u4E2A\u7B26\u53F7\u672C\u8EAB</p><h3 id="\u65B9\u62EC\u53F7\u8868\u793A\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u62EC\u53F7\u8868\u793A\u6CD5" aria-hidden="true">#</a> \u65B9\u62EC\u53F7\u8868\u793A\u6CD5</h3><p>\u4F7F\u7528\u65B9\u62EC\u53F7\uFF0C\u6BD4\u5982[xyz]\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u5B57\u7B26\u96C6\u5408\uFF0C\u8868\u793A\u5339\u914D\u65B9\u62EC\u53F7\u4E2D\u7684\u4EFB\u610F\u5B57\u7B26</p><p>\u53EF\u4EE5\u4F7F\u7528\u77ED\u6A2A-\u6765\u6307\u5B9A\u4E00\u4E2A\u5B57\u7B26\u8303\u56F4\uFF0C^\u8868\u793A\u5426\u5B9A</p><table><thead><tr><th style="text-align:center;">\u5143\u5B57\u7B26</th><th style="text-align:center;">\u7B49\u4EF7\u7684\u65B9\u62EC\u53F7\u8868\u793A\u6CD5</th></tr></thead><tbody><tr><td style="text-align:center;">\\d</td><td style="text-align:center;">[0-9]</td></tr><tr><td style="text-align:center;">\\D</td><td style="text-align:center;">[^0-9]</td></tr><tr><td style="text-align:center;">\\w</td><td style="text-align:center;">[A-Za-z0-9_]</td></tr><tr><td style="text-align:center;">\\W</td><td style="text-align:center;">[^A-Za-z0-9_]</td></tr></tbody></table><h3 id="\u91CF\u8BCD" tabindex="-1"><a class="header-anchor" href="#\u91CF\u8BCD" aria-hidden="true">#</a> \u91CF\u8BCD</h3><table><thead><tr><th style="text-align:center;">\u91CF\u8BCD</th><th style="text-align:center;">\u610F\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;">*</td><td style="text-align:center;">\u5339\u914D\u524D\u4E00\u4E2A\u8868\u8FBE\u5F0F0\u6B21\u6216\u591A\u6B21\u3002\u7B49\u4EF7\u4E8E{0,}</td></tr><tr><td style="text-align:center;">+</td><td style="text-align:center;">\u5339\u914D\u524D\u9762\u4E00\u4E2A\u8868\u8FBE\u5F0F1\u6B21\u6216\u8005\u591A\u6B21\u3002\u7B49\u4EF7\u4E8E{1,}</td></tr><tr><td style="text-align:center;">?</td><td style="text-align:center;">\u5339\u914D\u524D\u9762\u4E00\u4E2A\u8868\u8FBE\u5F0F0\u6B21\u6216\u80051\u6B21\u3002\u7B49\u4EF7\u4E8E{0,1}</td></tr><tr><td style="text-align:center;">{n}</td><td style="text-align:center;">n\u662F\u4E00\u4E2A\u6B63\u6574\u6570\uFF0C\u5339\u914D\u4E86\u524D\u9762\u4E00\u4E2A\u5B57\u7B26\u521A\u597D\u51FA\u73B0\u4E86n\u6B21</td></tr><tr><td style="text-align:center;">{n,}</td><td style="text-align:center;">n\u662F\u4E00\u4E2A\u6B63\u6574\u6570\uFF0C\u5339\u914D\u524D\u4E00\u4E2A\u5B57\u7B26\u81F3\u5C11\u51FA\u73B0\u4E86n\u6B21</td></tr><tr><td style="text-align:center;">{n,m}</td><td style="text-align:center;">n\u548Cm\u90FD\u662F\u6574\u6570\u3002\u5339\u914D\u524D\u9762\u7684\u5B57\u7B26\u81F3\u5C11n\u6B21\uFF0C\u6700\u591Am\u6B21</td></tr></tbody></table><h3 id="\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u4FEE\u9970\u7B26</h3><p>\u4FEE\u9970\u7B26\u4E5F\u53EB\u4F5C\u6807\u5FD7(flags)\uFF0C\u7528\u4E8E\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5B9E\u73B0\u9AD8\u7EA7\u641C\u7D22</p><table><thead><tr><th style="text-align:center;">\u4FEE\u9970\u7B26</th><th style="text-align:center;">\u610F\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;">i</td><td style="text-align:center;">\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u641C\u7D22</td></tr><tr><td style="text-align:center;">g</td><td style="text-align:center;">\u5168\u5C40\u641C\u7D22</td></tr></tbody></table><p>\u4FEE\u9970\u7B26\u7684\u4F7F\u7528:</p><pre><code>var re = /m/gi;
var re1 = new Regexp(&#39;m&#39;,&#39;gi&#39;);
</code></pre><h3 id="\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u76F8\u5173\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u76F8\u5173\u65B9\u6CD5" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u76F8\u5173\u65B9\u6CD5</h3><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5</th><th style="text-align:center;">\u7B80\u4ECB</th></tr></thead><tbody><tr><td style="text-align:center;">test()</td><td style="text-align:center;">\u6D4B\u8BD5\u67D0\u5B57\u7B26\u4E32\u662F\u5426\u5339\u914D\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u8FD4\u56DE\u5E03\u5C14\u503C</td></tr><tr><td style="text-align:center;">exec()</td><td style="text-align:center;">\u6839\u636E\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5728\u5B57\u7B26\u4E32\u4E2D\u8FDB\u884C\u67E5\u627E\uFF0C\u8FD4\u56DE\u7ED3\u679C\u6570\u7EC4\u6216null</td></tr></tbody></table><h3 id="\u5B57\u7B26\u4E32\u76F8\u5173\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u76F8\u5173\u65B9\u6CD5" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u76F8\u5173\u65B9\u6CD5</h3><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5</th><th style="text-align:center;">\u7B80\u4ECB</th></tr></thead><tbody><tr><td style="text-align:center;">search()</td><td style="text-align:center;">\u5728\u5B57\u7B26\u4E32\u4E2D\u6839\u636E\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u67E5\u627E\u5339\u914D\uFF0C\u8FD4\u56DE\u9996\u6B21\u5339\u914D\u5230\u7684\u4F4D\u7F6E\u7D22\u5F15\uFF0C\u6D4B\u8BD5\u4E0D\u5230\u5219\u8FD4\u56DE-1</td></tr><tr><td style="text-align:center;">match()</td><td style="text-align:center;">\u5728\u5B57\u7B26\u4E32\u4E2D\u6839\u636E\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u67E5\u627E\u5339\u914D\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u627E\u4E0D\u5230\u5219\u8FD4\u56DEnull</td></tr><tr><td style="text-align:center;">replace()</td><td style="text-align:center;">\u4F7F\u7528\u66FF\u6362\u5B57\u7B26\u4E32\u66FF\u6362\u6389\u5339\u914D\u5230\u7684\u5B50\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</td></tr><tr><td style="text-align:center;">split()</td><td style="text-align:center;">\u5206\u9694\u5B57\u7B26\u4E32\u4E3A\u6570\u7EC4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</td></tr></tbody></table>`,31),l=[a];function i(c,s){return e(),r("div",null,l)}var y=t(n,[["render",i],["__file","chapter15.html.vue"]]);export{y as default};