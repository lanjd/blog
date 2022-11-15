import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as c,c as a,e as i}from"./app.f8ee6222.js";const r={},t=i('<h3 id="\u670D\u52A1\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7BA1\u7406" aria-hidden="true">#</a> \u670D\u52A1\u7BA1\u7406</h3><h4 id="linux\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#linux\u670D\u52A1" aria-hidden="true">#</a> Linux\u670D\u52A1</h4><ul><li>RPM\u5305\u9ED8\u8BA4\u5B89\u88C5\u7684\u670D\u52A1 <ul><li>\u72EC\u7ACB\u7684\u670D\u52A1</li><li>\u57FA\u4E8Exinetd\u670D\u52A1</li></ul></li><li>\u6E90\u7801\u5305\u5B89\u88C5\u7684\u670D\u52A1</li></ul><p>\u542F\u52A8\u4E0E\u81EA\u542F\u52A8<br> \u670D\u52A1\u542F\u52A8\uFF1A\u5C31\u662F\u5728\u5F53\u524D\u7CFB\u7EDF\u4E2D\u8BA9\u670D\u52A1\u8FD0\u884C\uFF0C\u5E76\u63D0\u4F9B\u529F\u80FD\u3002<br> \u670D\u52A1\u81EA\u542F\u52A8\uFF1A\u81EA\u542F\u52A8\u65F6\u6307\u8BA9\u670D\u52A1\u5728\u7CFB\u7EDF\u5F00\u59CB\u6216\u91CD\u542F\u4E4B\u540E\uFF0C\u968F\u7740\u7CFB\u7EDF\u7684\u542F\u52A8\u800C\u81EA\u52A8\u542F\u52A8\u7684\u670D\u52A1\u3002</p><p>\u67E5\u8BE2\u5DF2\u5B89\u88C5\u7684\u670D\u52A1<br> RPM\u5305\u5B89\u88C5\u7684\u670D\u52A1<br><code>chkconfig --list</code><br> # \u67E5\u770B\u670D\u52A1\u81EA\u542F\u52A8\u72B6\u6001\uFF0C\u53EF\u4EE5\u770B\u5230\u6240\u6709RPm\u5305\u5B89\u88C5\u7684\u670D\u52A1<br> \u6E90\u7801\u5305\u5B89\u88C5\u7684\u670D\u52A1<br> \u67E5\u770B\u670D\u52A1\u5B89\u88C5\u4F4D\u7F6E\uFF0C\u4E00\u822C\u65F6/usr/local/\u4E0B</p><p>RPM\u5305\u5B89\u88C5\u670D\u52A1\u548C\u6E90\u7801\u5305\u5B89\u88C5\u670D\u52A1\u7684\u533A\u522B\u5C31\u662F\u6309\u7167\u4F4D\u7F6E\u4E0D\u540C</p><ul><li>\u6E90\u7801\u5305\u6309\u7167\u5728\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u4E00\u822C\u65F6/usr/local/</li><li>RPM\u5305\u6309\u7167\u5728\u9ED8\u8BA4\u4F4D\u7F6E\u4E2D</li></ul><h4 id="\u72EC\u7ACB\u670D\u52A1\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u72EC\u7ACB\u670D\u52A1\u7BA1\u7406" aria-hidden="true">#</a> \u72EC\u7ACB\u670D\u52A1\u7BA1\u7406</h4><ul><li>/etc/init.d/ \u542F\u52A8\u811A\u672C\u4F4D\u7F6E</li><li>/etc/sysconfig/ \u521D\u59CB\u5316\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E</li><li>/etc/ \u914D\u7F6E\u6587\u4EF6\u4F4D\u7F6E</li><li>/etc/xinetd.conf xinetd\u914D\u7F6E\u6587\u4EF6</li><li>/etc/xinetd.d \u57FA\u4E8Exinetd\u670D\u52A1\u7684\u542F\u52A8\u811A\u672C</li><li>/var/lib/ \u670D\u52A1\u4EA7\u751F\u7684\u6570\u636E\u653E\u5728\u8FD9\u91CC</li><li>/var/log/ \u65E5\u5FD7</li></ul><p>\u72EC\u7ACB\u670D\u52A1\u7684\u542F\u52A8<br><code>/etc/init.d/\u72EC\u7ACB\u670D\u52A1\u540D start/stop/status/restart</code><br><code>service \u72EC\u7ACB\u670D\u52A1\u540D start/stop/restart/status</code></p><p>\u72EC\u7ACB\u670D\u52A1\u7684\u81EA\u542F\u52A8<br> chkconfig [--level \u8FD0\u884C\u7EA7\u522B] [\u72EC\u7ACB\u670D\u52A1\u540D] [on/off]<br> \u4FEE\u6539/etc/rc.d/rc.local\u6587\u4EF6<br> \u4F7F\u7528ntsysv\u547D\u4EE4\u7BA1\u7406\u81EA\u542F\u52A8</p><h4 id="\u6E90\u7801\u5305\u670D\u52A1\u7684\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5305\u670D\u52A1\u7684\u7BA1\u7406" aria-hidden="true">#</a> \u6E90\u7801\u5305\u670D\u52A1\u7684\u7BA1\u7406</h4><p>\u6E90\u7801\u5305\u5B89\u88C5\u670D\u52A1\u4F7F\u7528\u7EDD\u5BF9\u8DEF\u5F84\u542F\u52A8\uFF0C\u8C03\u7528\u542F\u52A8\u811A\u672C\u6765\u542F\u52A8\u3002\u4E0D\u540C\u7684\u6E90\u7801\u5305\u7684\u542F\u52A8\u811A\u672C\u4E0D\u540C\u3002\u53EF\u4EE5\u67E5\u770B\u6E90\u7801\u5305\u5B89\u88C5\u8BF4\u660E\uFF0C\u67E5\u770B\u542F\u52A8\u811A\u672C\u7684\u65B9\u6CD5\u3002<br><code>/usr/local/apache2/bin/apachectl start/stop</code><br> \u6E90\u7801\u5305\u670D\u52A1\u7684\u81EA\u542F\u52A8<br><code>vim /etc/rc.d/rc.local</code> \u52A0\u5165 /usr/local/apache2/bin/apachectl start<br> \u8BA9\u6E90\u7801\u5305\u670D\u52A1\u88AB\u670D\u52A1\u7BA1\u7406\u547D\u4EE4\u8BBE\u522B<br><code>ln -s /usr/local/apache2/bin/apachectl /etc/init.d/apache</code><br> \u8BA9\u6E90\u7801\u5305\u7684apache\u670D\u52A1\u80FD\u88ABchkconfig\u4E0Entsysv\u547D\u4EE4\u7BA1\u7406\u81EA\u542F\u52A8<br><code>vim /etc/init.d/apache</code></p><blockquote><p># chkconfig: 35 86 76<br> # \u6307\u5B9Ahttpd\u811A\u672C\u53EF\u4EE5\u88ABchkconfig\u547D\u4EE4\u7BA1\u7406\uFF0C\u683C\u5F0F\u662F\uFF1A chkconfig\uFF1A \u8FD0\u884C\u7EA7\u522B \u542F\u52A8\u987A\u5E8F \u5173\u95ED\u987A\u5E8F<br> # description: source package apache<br> # \u8BF4\u660E\uFF0C\u5185\u5BB9\u968F\u610F</p></blockquote>',14),l=[t];function o(d,n){return c(),a("div",null,l)}var p=e(r,[["render",o],["__file","chapter18.html.vue"]]);export{p as default};