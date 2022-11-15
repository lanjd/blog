import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as r,e as a}from"./app.f8ee6222.js";const o={},p=a(`<h2 id="js\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#js\u51FD\u6570" aria-hidden="true">#</a> JS\u51FD\u6570</h2><h3 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h3><p>\u4F7F\u7528function\u5173\u952E\u5B57\u5B9A\u4E49\u51FD\u6570\uFF0Cfunction\u662F\u529F\u80FD\u7684\u610F\u601D</p><pre><code>function fun(){
    // \u51FD\u6570\u4F53\u8BED\u53E5
}
</code></pre><p>\u51FD\u6570\u8868\u8FBE\u5F0F</p><pre><code>var fun = function() {
    //\u51FD\u6570\u4F53\u8BED\u53E5
}
</code></pre><p>\u51FD\u6570\u58F0\u660E\u7684\u63D0\u5347\uFF0C\u548C\u53D8\u91CF\u58F0\u660E\u63D0\u5347\u7C7B\u4F3C\uFF0C\u51FD\u6570\u58F0\u660E\u4E5F\u53EF\u4EE5\u88AB\u63D0\u5347</p><pre><code>fun();

//\u9884\u89E3\u6790\u9636\u6BB5\u4F1A\u88AB\u63D0\u5347
function fun(){
    alert(&quot;\u51FD\u6570\u88AB\u6267\u884C&quot;)
}
</code></pre><p>\u51FD\u6570\u8868\u8FBE\u5F0F\u4E0D\u80FD\u63D0\u5347\uFF0C\u5982\u679C\u51FD\u6570\u662F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u5199\u6CD5\u5B9A\u4E49\uFF0C\u5219\u6CA1\u6709\u63D0\u5347\u7279\u6027</p><pre><code>fun(); //\u5F15\u53D1\u9519\u8BEF

// \u53EA\u662F\u63D0\u5347\u53D8\u91CF\u800C\u5DF2
var fun = function(){
    alert(&quot;\u51FD\u6570\u88AB\u6267\u884C&quot;)
}
</code></pre><p>\u51FD\u6570\u4F18\u5148\u63D0\u5347</p><pre><code>fun();

//\u53D8\u91CF\u58F0\u660E\u63D0\u5347\uFF0C\u65E0\u6CD5\u8986\u76D6\u63D0\u5347\u7684\u51FD\u6570
var fun = function(){
    alert(&#39;a&#39;);
}

//\u51FD\u6570\u4F18\u5148\u63D0\u5347
function fun(){
    alert(&#39;b&#39;);
}

fun();
</code></pre><p>\u51FD\u6570\u7684\u53C2\u6570</p><p>\u53C2\u6570\u662F\u51FD\u6570\u5185\u7684\u4E00\u4E9B\u5F85\u5B9A\u503C,\u5728\u8C03\u7528\u51FD\u6570\u65F6,\u5FC5\u987B\u4F20\u5165\u8FD9\u4E9B\u53C2\u6570\u7684\u5177\u4F53\u503C</p><p>\u51FD\u6570\u7684\u53C2\u6570\u53EF\u591A\u53EF\u5C11,\u51FD\u6570\u53EF\u4EE5\u6CA1\u6709\u53C2\u6570,\u4E5F\u53EF\u4EE5\u6709\u591A\u4E2A\u53C2\u6570,\u591A\u4E2A\u53C2\u6570\u4E4B\u95F4\u9700\u8981\u7528\u9017\u53F7\u9694\u5F00</p><pre><code>//\u5706\u62EC\u53F7\u4E2D\u5B9A\u4E49\u201C\u5F62\u5F0F\u53C2\u6570\u201D
function add(a,b){
    var sum = a + b;
    console.log(sum);
}
//\u8C03\u7528\u51FD\u6570\u65F6\u4F20\u5165\u201C\u5B9E\u9645\u53C2\u6570\u201D
add(3,5);
</code></pre><p>\u4F20\u5165\u5B9E\u53C2\u4E0D\u8DB3\u5F62\u53C2\u4E2A\u6570\uFF0C\u5269\u4F59\u5F62\u53C2\u503C\u4E3Aundefined</p><p>arguments</p><p>\u51FD\u6570\u5185arguments\u8868\u793A\u5B83\u63A5\u6536\u5230\u7684\u5B9E\u53C2\u5217\u8868,\u5B83\u662F\u4E00\u4E2A\u7C7B\u6570\u7EC4\u5BF9\u8C61</p><p>\u7C7B\u6570\u7EC4\u5BF9\u8C61:\u6240\u6709\u5C5E\u6027\u5747\u4E3A\u4ECE0\u5F00\u59CB\u7684\u81EA\u7136\u6570\u5E8F\u5217,\u5E76\u65E5\u6709length\u5C5E\u6027,\u548C\u6570\u7EC4\u7C7B\u4F3C\u53EF\u4EE5\u7528\u65B9\u62EC\u53F7\u4E66\u5199\u4E0B\u6807\u8BBF\u95EE\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\u503C,\u4F46\u662F\u4E0D\u80FD\u8C03\u7528\u6570\u7EC4\u7684\u65B9\u6CD5</p><pre><code>function fun(){
    console.log(arguments);
}
fun(1,2,4,5,6);
</code></pre><p>\u51FD\u6570\u7684\u8FD4\u56DE\u503C</p><p>\u51FD\u6570\u4F53\u5185\u53EF\u4EE5\u4F7F\u7528return\u5173\u952E\u5B57\u8868\u793A\u201C\u51FD\u6570\u8FD4\u56DE\u503C\u201D</p><p>\u9012\u5F52</p><p>\u8FB9\u754C\u6761\u4EF6:\u786E\u5B9A\u9012\u5F52\u5230\u4F55\u65F6\u7EC8\u6B62,\u4E5F\u79F0\u4E3A\u9012\u5F52\u51FA\u53E3</p><p>\u9012\u5F52\u6A21\u5F0F:\u5927\u95EE\u9898\u662F\u5982\u4F55\u5206\u89E3\u4E3A\u5C0F\u95EE\u9898\u7684,\u4E5F\u79F0\u4E3A\u9012\u5F52\u4F53</p><h3 id="\u53D8\u91CF\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u53D8\u91CF\u4F5C\u7528\u57DF</h3><p>JavaScript\u662F\u51FD\u6570\u7EA7\u4F5C\u7528\u57DF\u7F16\u7A0B\u8BED\u8A00:\u53D8\u91CF\u53EA\u5728\u5176\u5B9A\u4E49\u65F6\u6240\u5728\u7684function\u5185\u90E8\u6709\u610F\u4E49\u3002</p><pre><code>function fun() {
    //fun\u51FD\u6570\u5C31\u662Fa\u7684\u4F5C\u7528\u57DF\uFF0C\u53D8\u91CFa\u88AB\u79F0\u4E3A\u5C40\u90E8\u53D8\u91CF
    var a = 10;
}
fun();
console.log(a); //\u62A5\u9519
</code></pre><p>\u5982\u679C\u4E0D\u5C06\u53D8\u91CF\u5B9A\u4E49\u5728\u4EFB\u4F55\u51FD\u6570\u7684\u5185\u90E8,\u6B64\u65F6\u8FD9\u4E2A\u53D8\u91CF\u5C31\u662F\u5168\u5C40\u53D8\u91CF,\u5B83\u5728\u4EFB\u4F55\u51FD\u6570\u5185\u90FD\u53EF\u4EE5\u88AB\u8BBF\u95EE\u548C\u66F4\u6539\u3002</p><p>\u906E\u853D\u6548\u5E94</p><p>\u5982\u679C\u51FD\u6570\u4E2D\u4E5F\u5B9A\u4E49\u4E86\u548C\u5168\u5C40\u540C\u540D\u7684\u53D8\u91CF,\u5219\u51FD\u6570\u5185\u7684\u53D8\u91CF\u4F1A\u5C06\u5168\u5C40\u7684\u53D8\u91CF\u201C\u906E\u853D\u201D</p><p>\u6CE8\u610F\u53D8\u91CF\u58F0\u660E\u63D0\u5347\u7684\u60C5\u51B5</p><pre><code>var a = 10;

function fun(){
    a++; //\u5C40\u90E8\u53D8\u91CFa\u88AB\u81EA\u589E1\uFF0Ca\u6B64\u65F6\u662Fundefined\uFF0C\u81EA\u589E1\u7684\u7ED3\u679C\u5C31\u662FNaN
    //js\u9884\u89E3\u6790\u8FC7\u7A0B\uFF0C\u53D8\u91CFa\u7684\u5B9A\u4E49\u4F1A\u88AB\u63D0\u5347\u81F3\u51FD\u6570\u4F53\u5185\u6240\u6709\u8BED\u53E5\u4E4B\u524D
    var a = 5;
    console.log(a);
}
fun();
cosole.log(a);
</code></pre><p>\u5F62\u53C2\u4E5F\u662F\u5C40\u90E8\u53D8\u91CF</p><pre><code>var a = 10;

function fun(a){
    a++;
    console.log(a);
}
fun(7);
cosole.log(a);
</code></pre><h3 id="\u4F5C\u7528\u57DF\u94FE" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u94FE</h3><p>\u4E00\u4E2A\u51FD\u6570\u5185\u90E8\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u51FA\u6570\u3002\u548C\u5C40\u90E8\u53D8\u91CF\u7C7B\u4F3C,\u5B9A\u4E49\u5728\u4E00\u4E2A\u51FD\u6570\u5185\u90E8\u7684\u51FD\u6570\u662F\u5C40\u90E8\u51FD\u6570\u3002</p><pre><code>function fun() {
    //\u5C40\u90E8\u51FD\u6570
    function inner() {
        cosole.log(&quot;hello&quot;);
    }
    inner();
}

fun();
</code></pre><p>\u5728\u51FD\u6570\u5D4C\u5957\u4E2D,\u53D8\u91CF\u4F1A\u4ECE\u5185\u5230\u5916\u9010\u5C42\u5BFB\u627E\u5B83\u7684\u5B9A\u4E49</p><pre><code>var a = 10;
var b = 20;
function fun(){
    var c = 30;
    function inner() {
        var a = 40;
        var b =50;
        //\u4F7F\u7528\u53D8\u91CF\u65F6\uFF0CJS\u4F1A\u4ECE\u5F53\u524D\u5C42\u5F00\u59CB\uFF0C\u9010\u5C42\u5411\u4E0A\u5BFB\u627E\u5B9A\u4E49 
        console.log(a,b,c,d);
    }
    inner();
}
fun();
</code></pre><p>\u4E0D\u52A0var\u5C06\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF\uFF0C\u5728\u521D\u6B21\u7ED9\u53D8\u91CF\u8D4B\u503C\u65F6,\u5982\u679C\u6CA1\u6709\u52A0var,\u5219\u5C06\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</p><pre><code>function fun(){
    a = 3;
}
fun();
console.log(a); // 3
</code></pre><h3 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h3><pre><code>function fun() {
    var name = &#39;hello&#39;;

    function innerFun() {
        alert(name);
    }
    return innerFun;
}

var inn = fun();
inn();
</code></pre><p>JavaScript\u4E2D\u51FD\u6570\u4F1A\u4EA7\u751F\u95ED\u5305(closure)\u3002\u95ED\u5305\u662F\u51FD\u6570\u672C\u8EAB\u548C\u8BE5\u51FD\u6570\u58F0\u660E\u65F6\u6240\u5904\u7684\u73AF\u5883\u72B6\u6001\u7684\u7EC4\u5408\u3002</p><p>\u51FD\u6570\u80FD\u591F\u201C\u8BB0\u5FC6\u4F4F\u201D\u5176\u5B9A\u4E49\u65F6\u6240\u5904\u7684\u73AF\u5883,\u5373\u4F7F\u51FD\u6570\u4E0D\u5728\u5176\u5B9A\u4E49\u7684\u73AF\u5883\u4E2D\u88AB\u8C03\u7528,\u4E5F\u80FD\u8BBF\u95EE\u5B9A\u4E49\u65F6\u6240\u5904\u73AF\u5883\u7684\u53D8\u91CF\u3002</p><p>\u5728JavaScript\u4E2D,\u6BCF\u6B21\u521B\u5EFA\u51FD\u6570\u65F6\u90FD\u4F1A\u521B\u5EFA\u95ED\u5305\u3002</p><p>\u4F46\u662F,\u95ED\u5305\u7279\u6027\u5F80\u5F80\u9700\u8981\u5C06\u51FD\u6570\u201C\u6362\u4E00\u4E2A\u5730\u65B9\u201D\u6267\u884C,\u624D\u80FD\u88AB\u89C2\u5BDF\u51FA\u6765\u3002</p><p>\u95ED\u5305\u5F88\u6709\u7528,\u56E0\u4E3A\u5B83\u5141\u8BB8\u6211\u4EEC\u5C06\u6570\u636E\u4E0E\u64CD\u4F5C\u8BE5\u6570\u636E\u7684\u51FD\u6570\u5173\u8054\u8D77\u6765\u3002\u8FD9\u4E0E\u201C\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u201D\u6709\u5C11\u8BB8\u76F8\u4F3C\u4E4B\u5904\u3002</p><p>\u95ED\u5305\u7684\u529F\u80FD:\u8BB0\u5FC6\u6027\u3001\u6A21\u62DF\u79C1\u6709\u53D8\u91CF\u3002</p><p>\u5F53\u95ED\u5305\u4EA7\u751F\u65F6,\u51FD\u6570\u6240\u5904\u73AF\u5883\u7684\u72B6\u6001\u4F1A\u59CB\u7EC8\u4FDD\u6301\u5728\u5185\u5B58\u4E2D,\u4E0D\u4F1A\u5728\u5916\u5C42\u51FD\u6570\u8C03\u7528\u540E\u88AB\u81EA\u52A8\u6E05\u9664\u3002\u8FD9\u5C31\u662F\u95ED\u5305\u7684\u8BB0\u5FC6\u6027\u3002</p><p>\u6A21\u62DF\u79C1\u6709\u53D8\u91CF</p><pre><code>//\u5C01\u88C5\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u7684\u529F\u80FD\u5C31\u662F\u79C1\u6709\u5316\u53D8\u91CF
function fun() {
    var a = 0;

    return {
        get: function() {
            return a;
        },
        add: function(){
            a++;
        }
        pow: function(){
            a *= 2;
        }
    }
}

var obj = fun();

console.log(obj.get());

obj.add();
obj.pow();

console.log(obj.get());
</code></pre><p>\u4E0D\u80FD\u6EE5\u7528\u95ED\u5305,\u5426\u5219\u4F1A\u9020\u6210\u7F51\u9875\u7684\u6027\u80FD\u95EE\u9898,\u4E25\u91CD\u65F6\u53EF\u80FD\u5BFC\u81F4\u5185\u5B58\u6CC4\u9732\u3002\u6240\u8C13\u5185\u5B58\u6CC4\u6F0F\u662F\u6307\u7A0B\u5E8F\u4E2D\u5DF1\u52A8\u6001\u5206\u914D\u7684\u5185\u5B58\u7531\u4E8E\u67D0\u79CD\u539F\u56E0\u672A\u91CA\u653E\u6216\u65E0\u6CD5\u91CA\u653E\u3002</p><h3 id="\u7ACB\u5373\u6267\u884C\u51FD\u6570-iife" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u6267\u884C\u51FD\u6570-iife" aria-hidden="true">#</a> \u7ACB\u5373\u6267\u884C\u51FD\u6570 IIFE</h3><p>IIFE(Immediately Invoked Function Expression,\u7ACB\u5373\u8C03\u7528\u51FD\u6570\u8868\u8FBE\u5F0F)\u662F\u4E00\u79CD\u7279\u6B8A\u7684JavaScript\u51FD\u6570\u5199\u6CD5,\u4E00\u65E6\u88AB\u5B9A\u4E49,\u5C31\u7ACB\u5373\u88AB\u8C03\u7528\u3002</p><pre><code>//\u51FD\u6570\u5916\u5C42\u7684\u62EC\u53F7\u5BF9\u7684\u529F\u80FD\uFF0C\u5C06\u51FD\u6570\u53D8\u4E3A\u8868\u8FBE\u5F0F
(function () {
    statements
})();

+function () {
    statements
}();

-function () {
    statements
}();
</code></pre><p>\u51FD\u6570\u4E0D\u80FD\u76F4\u63A5\u52A0\u5706\u62EC\u53F7\u88AB\u8C03\u7528\u3002\u51FD\u6570\u5FC5\u987B\u8F6C\u4E3A\u201C\u51FD\u6570\u8868\u8FBE\u5F0F\u201D\u624D\u80FD\u88AB\u8C03\u7528\u3002<br> \u4E3A\u53D8\u91CF\u8D4B\u503C:\u5F53\u7ED9\u53D8\u91CF\u8D4B\u503C\u9700\u8981\u4E00\u4E9B\u8F83\u4E3A\u590D\u6742\u7684\u8BA1\u7B97\u65F6(\u5982if\u8BED\u53E5),\u4F7F\u7528IIFE\u663E\u5F97\u8BED\u6CD5\u66F4\u7D27\u51D1\u3002 IIFE\u53EF\u4EE5\u5728\u4E00\u4E9B\u573A\u5408(\u5982for\u5FAA\u73AF\u4E2D)\u5C06\u5168\u5C40\u53D8\u91CF\u53D8\u4E3A\u5C40\u90E8\u53D8\u91CF,\u8BED\u6CD5\u663E\u5F97\u7D27\u51C4\u3002</p><pre><code>var arr = [];
for (var i = 0; i &lt; 6; i++){
    arr.push(function() {
        alert(i);//\u53D8\u91CFi\u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u6240\u6709\u51FD\u6570\u90FD\u5171\u4EAB\u5185\u5B58\u4E2D\u7684\u540C\u4E00\u4E2A\u53D8\u91CFi
    })
}
arr[2](); //\u5F39\u51FA6
</code></pre><p>\u4F7F\u7528IIFE</p><pre><code>var arr = [];
for (var i = 0; i &lt; 6; i++){
    (function(i){
        arr.push(function() {
            alert(i);
        })  
    })(i)
}
arr[2](); //\u5F39\u51FA2
</code></pre>`,62),c=[p];function t(i,u){return e(),r("div",null,c)}var s=n(o,[["render",t],["__file","chapter10.html.vue"]]);export{s as default};
