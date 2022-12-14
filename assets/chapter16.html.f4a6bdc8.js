import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as o,e as a}from"./app.f8ee6222.js";const c={},p=a(`<h2 id="es6\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#es6\u57FA\u7840" aria-hidden="true">#</a> ES6\u57FA\u7840</h2><p>ES \u4E0E JavaScript \u7684\u5173\u7CFB</p><p>JavaScript(\u6D4F\u89C8\u5668\u7AEF) = ECMAScript(\u8BED\u6CD5+API) + DOM + BOM</p><h3 id="let\u548Cconst" tabindex="-1"><a class="header-anchor" href="#let\u548Cconst" aria-hidden="true">#</a> let\u548Cconst</h3><p>let\u548Cvar\u7528\u4E8E\u58F0\u660E\u53D8\u91CF</p><p>const\u7528\u4E8E\u58F0\u660E\u5E38\u91CF\uFF0C\u4E00\u65E6\u4F7F\u7528const\u58F0\u660E\uFF0C\u5C31\u5FC5\u987B\u7ACB\u5373\u521D\u59CB\u5316\uFF0C\u4E0D\u80FD\u7559\u5230\u4EE5\u540E\u8D4B\u503C</p><p>let\u3001var\u548Cconst\u7684\u533A\u522B</p><ol><li>\u91CD\u590D\u58F0\u660E <blockquote><p>var\u5141\u8BB8\u91CD\u590D\u58F0\u660E\uFF0Clet\u548Cconst\u4E0D\u5141\u8BB8\u91CD\u590D\u58F0\u660E</p></blockquote></li><li>\u53D8\u91CF\u63D0\u5347 <blockquote><p>var\u4F1A\u63D0\u5347\u53D8\u91CF\u7684\u58F0\u660E\u5230\u5F53\u524D\u4F5C\u7528\u57DF\u7684\u9876\u90E8\uFF0Clet\u548Cconst\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347</p></blockquote></li><li>\u6682\u65F6\u6027\u6B7B\u533A <blockquote><p>\u4EC0\u4E48\u662F\u6682\u65F6\u6027\u6B7B\u533A\uFF0C\u53EA\u8981\u4F5C\u7528\u57DF\u5185\u5B58\u5728let\u3001const\uFF0C\u5B83\u4EEC\u6240\u58F0\u660E\u7684\u53D8\u91CF\u6216\u5E38\u91CF\u5C31\u81EA\u52A8\u201C\u7ED1\u5B9A\u201D\u8FD9\u4E2A\u533A\u57DF\uFF0C\u4E0D\u5728\u53D7\u5916\u90E8\u4F5C\u7528\u57DF\u5F71\u54CD<br> let\u3001const\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A\uFF0Cvar\u4E0D\u5B58\u5728</p></blockquote></li><li>window\u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5 <blockquote><p>\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\uFF0Cvar\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u901A\u8FC7function\u58F0\u660E\u7684\u51FD\u6570\uFF0C\u4F1A\u81EA\u52A8\u53D8\u6210window\u5BF9\u8C61\u7684\u5C5E\u6027\u6216\u65B9\u6CD5<br> let\u3001const\u4E0D\u4F1A</p></blockquote></li><li>\u5757\u7EA7\u4F5C\u7528\u57DF <blockquote><p>var\u662F\u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\u7684<br> let\u548Cconst\u6709\u5757\u7EA7\u4F5C\u7528\u57DF</p></blockquote></li></ol><p>\u4F5C\u7528\u57DF\uFF1A \u5757\u7EA7\u4F5C\u7528\u57DF =&gt; \u51FD\u6570\u4F5C\u7528\u57DF =&gt; \u5168\u5C40\u4F5C\u7528\u57DF</p><p>\u6D89\u53CA\u7684\u5757\u7EA7\u4F5C\u7528\u57DF</p><ul><li>{}</li><li>for(){}</li><li>while(){}</li><li>do{}while()</li><li>if(){}</li><li>switch(){}</li></ul><h3 id="\u6A21\u677F\u5B57\u7B26\u4E32\u4E0E\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5B57\u7B26\u4E32\u4E0E\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u6A21\u677F\u5B57\u7B26\u4E32\u4E0E\u7BAD\u5934\u51FD\u6570</h3><h4 id="\u6A21\u677F\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u6A21\u677F\u5B57\u7B26\u4E32</h4><pre><code>let a = 1;
let b = 2;
console.log(\`\${a} + \${b} = \${a+b}\`);
</code></pre><p>\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\uFF0C\u6240\u6709\u7684\u7A7A\u683C\u3001\u6362\u884C\u6216\u7F29\u8FDB\u90FD\u4F1A\u88AB\u4FDD\u7559\u5728\u8F93\u51FA\u4E4B\u4E2D</p><p>\u8F93\u51FA\`\u548C\\\u7B49\u7279\u6B8A\u5B57\u7B26\u9700\u8981\u8F6C\u4E49\uFF0C\\\`\u3001\\\\</p><p>\u53EA\u8981\u6700\u7EC8\u53EF\u4EE5\u5F97\u51FA\u4E00\u4E2A\u503C\u7684\u5C31\u53EF\u4EE5\u901A\u8FC7 \${} \u6CE8\u5165\u5230\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D</p><h4 id="\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u7BAD\u5934\u51FD\u6570</h4><pre><code>const/let \u51FD\u6570\u540D = \u53C2\u6570 =&gt; \u51FD\u6570\u4F53
//1. \u5355\u4E2A\u53C2\u6570
const add1 = x =&gt; {
  return x + 1;
}
//2. \u5355\u884C\u51FD\u6570\u4F53
const add2 = (x,y) =&gt; x + y;
//3. \u5355\u884C\u5BF9\u8C61
const add3 = (x,y) =&gt; ({
    value: x + y
});
</code></pre><p>\u5355\u4E2A\u53C2\u6570\u53EF\u4EE5\u7701\u7565\u5706\u62EC\u53F7,\u65E0\u53C2\u6570\u6216\u591A\u4E2A\u53C2\u6570\u4E0D\u80FD\u7701\u7565\u5706\u62EC\u53F7<br> \u5355\u884C\u51FD\u6570\u4F53\u53EF\u4EE5\u540C\u65F6\u7701\u7565{} \u548C return<br> \u5982\u679C\u7BAD\u5934\u51FD\u6570\u8FD4\u56DE\u5355\u884C\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5728{} \u5916\u9762\u52A0\u4E0A ()\uFF0C\u8BA9\u6D4F\u89C8\u5668\u4E0D\u518D\u8BA4\u4E3A\u90A3\u662F\u51FD\u6570\u4F53\u7684\u82B1\u62EC\u53F7</p><h4 id="this\u6307\u5411" tabindex="-1"><a class="header-anchor" href="#this\u6307\u5411" aria-hidden="true">#</a> this\u6307\u5411</h4><p>\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684this\u6307\u5411window</p><p>\u4E00\u822C\u51FD\u6570\uFF08\u975E\u7BAD\u5934\u51FD\u6570\uFF09\u4E2D\u7684this\u6307\u5411\uFF0C\u53EA\u6709\u5728\u51FD\u6570\u8C03\u7528\u7684\u65F6\u5019this\u6307\u5411\u624D\u786E\u5B9A\uFF0C\u4E0D\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u4E0D\u6307\u5B9A\u6307\u5411\u8C01\u3002this\u6307\u5411\u548C\u51FD\u6570\u5728\u54EA\u513F\u8C03\u7528\u6CA1\u6709\u5173\u7CFB\uFF0C\u53EA\u548C\u8C01\u8C03\u7528\u6709\u5173\uFF0C\u4E00\u4E2A\u51FD\u6570\u5728\u6CA1\u6709\u6307\u660E\u8C01\u8C03\u7528\u65F6\uFF0C\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\u4E3Aundefined\uFF0C\u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\u4E3Awindow</p><pre><code>//\`use strict\`
fun add(){
  console.log(this);
}

//\u4E25\u683C\u6A21\u5F0F\u4E0B\u6307\u5411undefined
//\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\u6307\u5411window
add();
</code></pre><p>\u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684this</p><pre><code>const calc = {
    add: () =&gt; {
      console.log(this);
    },
    add2: function(){
      const add3 = () =&gt; {
        console.log(this);
      };
      add3();
    }
};
calc.add1(); //window
calc.add2(); //calc
</code></pre><p>\u4EE5\u4E0B\u573A\u666F\u4E0D\u9002\u5408\u4F7F\u7528\u7BAD\u5934\u51FD\u6570</p><ol><li>\u4F5C\u4E3A\u6784\u9020\u51FD\u6570</li><li>\u9700\u8981this\u6307\u5411\u8C03\u7528\u5BF9\u8C61\u7684\u65F6\u5019</li><li>\u9700\u8981\u4F7F\u7528arguments\u7684\u65F6\u5019</li></ol><h3 id="\u6570\u7EC4\u89E3\u6784\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u89E3\u6784\u8D4B\u503C" aria-hidden="true">#</a> \u6570\u7EC4\u89E3\u6784\u8D4B\u503C</h3><p>\u89E3\u6790\u67D0\u4E00\u6570\u636E\u7684\u7ED3\u6784\uFF0C\u5C06\u6211\u4EEC\u60F3\u8981\u7684\u4E1C\u897F\u63D0\u53D6\u51FA\u6765\uFF0C\u8D4B\u503C\u7ED9\u53D8\u91CF\u6216\u5E38\u91CF</p><pre><code>    const [a, b, c] = [1, 2, 3];
    console.log(a, b, c);
</code></pre><p>\u539F\u7406</p><pre><code>  // 1.\u6A21\u5F0F\uFF08\u7ED3\u6784\uFF09\u5339\u914D
  // [] = [1, 2, 3];

  // 2.\u7D22\u5F15\u503C\u76F8\u540C\u7684\u5B8C\u6210\u8D4B\u503C
  // const [a, b, c] = [1, 2, 3];
  // console.log(a, b, c);

  // \u4E0D\u53D6\u7684\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528\u9017\u53F7\u8DF3\u8FC7
  const [a, [, , b], c] = [1, [2, 4, 5], 3];
  console.log(a, b, c);
</code></pre><p>\u9ED8\u8BA4\u503C</p><pre><code>  const [a = 1, b = 2] = [];
  console.log(a, b);
</code></pre><p>\u9ED8\u8BA4\u503C\u7684\u751F\u6548\u6761\u4EF6<br> \u53EA\u6709\u5F53\u4E00\u4E2A\u6570\u7EC4\u6210\u5458\u4E25\u683C\u7B49\u4E8E\uFF08===\uFF09undefined \u65F6\uFF0C\u5BF9\u5E94\u7684\u9ED8\u8BA4\u503C\u624D\u4F1A\u751F\u6548</p><p>\u9ED8\u8BA4\u503C\u8868\u8FBE\u5F0F</p><p>\u5982\u679C\u9ED8\u8BA4\u503C\u662F\u8868\u8FBE\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u8868\u8FBE\u5F0F\u662F\u60F0\u6027\u6C42\u503C\u7684</p><pre><code>  const func = () =&gt; {
     console.log(&#39;\u6211\u88AB\u6267\u884C\u4E86&#39;);
     return 2;
  };
  //const [x = func()] = [1];
  const [x = func()] = [];
  console.log(x);
</code></pre><p>\u5E94\u7528</p><pre><code>  // 1.\u5E38\u89C1\u7684\u7C7B\u6570\u7EC4\u7684\u89E3\u6784\u8D4B\u503C
  // arguments
  function func() {
    const [a, b] = arguments;
    console.log(a, b);
  }
  func(1, 2);

  // NodeList
  const [p1, p2, p3] = document.querySelectorAll(&#39;p&#39;);
  console.log(p1, p2, p3);

  // 2.\u51FD\u6570\u53C2\u6570\u7684\u89E3\u6784\u8D4B\u503C
  const array = [1, 1];
  const add = ([x = 0, y = 0]) =&gt; x + y;
  console.log(add(array));
  // console.log(add([]));

  // 3.\u4EA4\u6362\u53D8\u91CF\u7684\u503C
  let x = 1;
  let y = 2;

  // let tmp = x;
  // x = y;
  // y = tmp;
  // console.log(x, y);

  [x, y] = [y, x];
  console.log(x, y);
</code></pre><h3 id="\u5BF9\u8C61\u89E3\u6784\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u89E3\u6784\u8D4B\u503C" aria-hidden="true">#</a> \u5BF9\u8C61\u89E3\u6784\u8D4B\u503C</h3><p>\u6A21\u5F0F\uFF08\u7ED3\u6784\uFF09\u5339\u914D</p><pre><code>{}={}
</code></pre><p>\u5C5E\u6027\u540D\u76F8\u540C\u7684\u5B8C\u6210\u8D4B\u503C</p><pre><code>  const { age, username } = { username: &#39;Alex&#39;, age: 18 };
  const { age: age, username: username } = { username: &#39;Alex&#39;, age: 18 };
  console.log(age, username);
</code></pre><p>\u53D6\u522B\u540D</p><pre><code>  const { age: age, username: uname } = { username: &#39;Alex&#39;, age: 18 };
  console.log(age, uname);
</code></pre><p>\u5BF9\u8C61\u7ED3\u6784\u8D4B\u503C\u6CE8\u610F</p><p>\u9ED8\u8BA4\u503C\u7684\u751F\u6548\u6761\u4EF6</p><p>\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u4E25\u683C\u7B49\u4E8E undefined \u65F6\uFF0C\u5BF9\u5E94\u7684\u9ED8\u8BA4\u503C\u624D\u4F1A\u751F\u6548</p><pre><code>  const { username = &#39;ZhangSan&#39;, age = 0 } = { username: &#39;alex&#39; };
  console.log(username, age);
</code></pre><p>\u9ED8\u8BA4\u503C\u8868\u8FBE\u5F0F</p><p>\u5982\u679C\u9ED8\u8BA4\u503C\u662F\u8868\u8FBE\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u8868\u8FBE\u5F0F\u662F\u60F0\u6027\u6C42\u503C\u7684</p><p>\u5C06\u4E00\u4E2A\u5DF2\u7ECF\u58F0\u660E\u7684\u53D8\u91CF\u7528\u4E8E\u89E3\u6784\u8D4B\u503C</p><p>\u5982\u679C\u5C06\u4E00\u4E2A\u5DF2\u7ECF\u58F0\u660E\u7684\u53D8\u91CF\u7528\u4E8E\u5BF9\u8C61\u7684\u89E3\u6784\u8D4B\u503C\uFF0C\u6574\u4E2A\u8D4B\u503C\u9700\u5728\u5706\u62EC\u53F7\u4E2D\u8FDB\u884C</p><pre><code>  let x = 2;
  ({ x } = { x: 1 });
  // [x] = [1]; //\u6570\u7EC4\u5219\u6CA1\u6709\u8FD9\u4E2A\u95EE\u9898
  console.log(x);
</code></pre><p>\u53EF\u4EE5\u53D6\u5230\u7EE7\u627F\u7684\u5C5E\u6027</p><p>\u5BF9\u8C61\u7ED3\u6784\u8D4B\u503C\u5E94\u7528</p><p>\u51FD\u6570\u53C2\u6570\u7684\u89E3\u6784\u8D4B\u503C</p><pre><code>const logPersonInfo = ({ age = 0, username = &#39;ZhangSan&#39; }) =&gt;   console.log(username, age);
logPersonInfo({ username: &#39;alex&#39;, age: 18 });
</code></pre><p>\u590D\u6742\u7684\u7ED3\u6784\u8D4B\u503C\u60C5\u51B5</p><pre><code>const obj = {
  x: 1,
  y: [2, 3, 4],
  z: {
    a: 5,
    b: 6
  }
};
// const { x, y, z } = obj;
// console.log(x, y, z);
const {
  y,
  y: [, yy],
  z,
  z: { b }
} = obj;
console.log(yy, y, z, b);
</code></pre><h3 id="\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u7684\u7ED3\u6784\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u6570\u636E\u7C7B\u578B\u7684\u7ED3\u6784\u8D4B\u503C" aria-hidden="true">#</a> \u5176\u4ED6\u6570\u636E\u7C7B\u578B\u7684\u7ED3\u6784\u8D4B\u503C</h3><p>\u5B57\u7B26\u4E32\u7684\u89E3\u6784\u8D4B\u503C\uFF0C\u5B57\u7B26\u4E32\u65E2\u53EF\u4EE5\u6309\u6570\u7EC4\u5F62\u5F0F\u6765\u89E3\u6784\u8D4B\u503C\uFF0C\u4E5F\u53EF\u4EE5\u6309\u5BF9\u8C61\u5F62\u5F0F\u6765\u89E3\u6784\u8D4B\u503C</p><pre><code>\u6570\u7EC4\u5F62\u5F0F\u7684\u89E3\u6784\u8D4B\u503C
const [a, b, , , c] = &#39;hello&#39;;
console.log(a, b, c);

\u5BF9\u8C61\u5F62\u5F0F\u7684\u89E3\u6784\u8D4B\u503C
const { 0: a, 1: b, length } = &#39;hello&#39;;
console.log(a, b, length);
</code></pre><p>\u6570\u503C\u548C\u5E03\u5C14\u503C\u7684\u89E3\u6784\u8D4B\u503C\uFF0C\u5148\u5C06\u7B49\u53F7\u53F3\u8FB9\u7684\u503C\u8F6C\u4E3A\u5BF9\u8C61</p><pre><code>console.log(new Number(123));
const { a = 1, toString } = 123;
console.log(a, toString);

const { b = 2, toString } = true;
console.log(b, toString);
</code></pre><p>undefined \u548C null \u7684\u89E3\u6784\u8D4B\u503C\uFF0C\u7531\u4E8E undefined \u548C null \u65E0\u6CD5\u8F6C\u4E3A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5BF9\u5B83\u4EEC\u8FDB\u884C\u89E3\u6784\u8D4B\u503C\uFF0C\u90FD\u4F1A\u62A5\u9519</p><pre><code>  const { toString } = undefined; //\u5F02\u5E38
  const { toString } = null; //\u5F02\u5E38
</code></pre><h3 id="\u5BF9\u8C61\u5B57\u9762\u91CF\u589E\u5F3A" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u5B57\u9762\u91CF\u589E\u5F3A" aria-hidden="true">#</a> \u5BF9\u8C61\u5B57\u9762\u91CF\u589E\u5F3A</h3><p>\u5C5E\u6027\u7684\u7B80\u6D01\u8868\u793A\u6CD5</p><p>\u952E\u540D\u548C\u53D8\u91CF\u6216\u5E38\u91CF\u540D\u4E00\u6837\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u53EA\u5199\u4E00\u4E2A</p><pre><code>const age = 18;
const person = {
// age: age
  age
};
console.log(person);
</code></pre><p>\u65B9\u6CD5\u7684\u7B80\u6D01\u8868\u793A\u6CD5</p><p>\u65B9\u6CD5\u53EF\u4EE5\u7701\u7565\u5192\u53F7\u548C function \u5173\u952E\u5B57</p><pre><code>const person = {
// speak: function () {}
  speak() {}
};
console.log(person);
</code></pre><p>\u65B9\u62EC\u53F7\u8BED\u6CD5\u7684\u7528\u6CD5</p><p>\u65B9\u62EC\u53F7\u8BED\u6CD5\u53EF\u4EE5\u5199\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D</p><pre><code>const prop = &#39;age&#39;;
const person = {
   [prop]: 18
};

console.log(person);
</code></pre><p>\u65B9\u62EC\u53F7\u4E2D\u53EF\u4EE5\u653E\u4EC0\u4E48</p><p>[\u503C\u6216\u901A\u8FC7\u8BA1\u7B97\u53EF\u4EE5\u5F97\u5230\u503C\u7684\uFF08\u8868\u8FBE\u5F0F\uFF09]</p><p>\u65B9\u62EC\u53F7\u8BED\u6CD5\u548C\u70B9\u8BED\u6CD5\u7684\u533A\u522B\uFF1A\u70B9\u8BED\u6CD5\u662F\u65B9\u62EC\u53F7\u8BED\u6CD5\u7684\u7279\u6B8A\u5F62\u5F0F</p><p>\u5C5E\u6027\u540D\u7531\u6570\u5B57\u3001\u5B57\u6BCD\u3001\u4E0B\u5212\u7EBF\u4EE5\u53CA $ \u6784\u6210\uFF0C\u5E76\u4E14\u6570\u5B57\u8FD8\u4E0D\u80FD\u6253\u5934\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u70B9\u8BED\u6CD5\uFF0C\u6240\u4EE5\u5F53\u4F60\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u540D\u662F\u5408\u6CD5\u6807\u8BC6\u7B26\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u70B9\u8BED\u6CD5\uFF0C\u5176\u4ED6\u60C5\u51B5\u4E0B\u8BF7\u4F7F\u7528\u65B9\u62EC\u53F7\u8BED\u6CD5</p><h3 id="\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C" aria-hidden="true">#</a> \u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C</h3><p>\u51FD\u6570\u53C2\u6570\u9ED8\u8BA4\u503C\u7684\u57FA\u672C\u7528\u6CD5</p><pre><code>const multiply = (x, y = 1) =&gt; x * y;
console.log(multiply(2));
</code></pre><p>\u9ED8\u8BA4\u503C\u7684\u751F\u6548\u6761\u4EF6\uFF1A\u4E0D\u4F20\u53C2\u6570\uFF0C\u6216\u8005\u660E\u786E\u7684\u4F20\u9012 undefined \u4F5C\u4E3A\u53C2\u6570\uFF0C\u53EA\u6709\u8FD9\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0C\u9ED8\u8BA4\u503C\u624D\u4F1A\u751F\u6548</p><p>\u9ED8\u8BA4\u503C\u8868\u8FBE\u5F0F</p><p>\u5982\u679C\u9ED8\u8BA4\u503C\u662F\u8868\u8FBE\u5F0F\uFF0C\u9ED8\u8BA4\u503C\u8868\u8FBE\u5F0F\u662F\u60F0\u6027\u6C42\u503C\u7684</p><p>\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u7684\u5C0F\u6280\u5DE7\uFF1A\u51FD\u6570\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\uFF0C\u6700\u597D\u4ECE\u53C2\u6570\u5217\u8868\u7684\u53F3\u8FB9\u5F00\u59CB\u8BBE\u7F6E</p><h3 id="\u591A\u53C2\u6570\u51FD\u6570\u4F20\u9012\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u591A\u53C2\u6570\u51FD\u6570\u4F20\u9012\u5199\u6CD5" aria-hidden="true">#</a> \u591A\u53C2\u6570\u51FD\u6570\u4F20\u9012\u5199\u6CD5</h3><pre><code>const logUser = ({ username = &#39;zhangsan&#39;, age = 0, sex = &#39;male&#39; } = {}) =&gt; console.log(username, age, sex);
logUser({ username: &#39;alex&#39; });
logUser();
</code></pre>`,93),r=[p];function t(l,s){return e(),o("div",null,r)}var h=n(c,[["render",t],["__file","chapter16.html.vue"]]);export{h as default};
