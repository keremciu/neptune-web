(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"+wNj":function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}t.d(a,"a",(function(){return n}))},HHz7:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/Setup",function(){return t("e66W")}])},HbGN:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("+wNj");function c(e,a){if(null==e)return{};var t,c,o=Object(n.a)(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)t=s[c],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}},Km8e:function(e,a,t){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RCB2:function(e,a,t){"use strict";var n=t("ERkP"),c=t.n(n).a.createElement;a.a=function(e){var a=e.bundleSize;return c("small",null,a," Kb")}},ZVZ0:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("ERkP"),c=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=c.a.createContext({}),u=function(e){var a=c.a.useContext(p),t=a;return e&&(t="function"===typeof e?e(a):r({},a,{},e)),t},i="mdxType",b={inlineCode:"code",wrapper:function(e){var a=e.children;return c.a.createElement(c.a.Fragment,{},a)}},m=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=u(t),m=n,d=i["".concat(s,".").concat(m)]||i[m]||b[m]||o;return t?c.a.createElement(d,r({ref:a},p,{components:t})):c.a.createElement(d,r({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"===typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r[i]="string"===typeof e?e:n,s[1]=r;for(var p=2;p<o;p++)s[p]=t[p];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},cxan:function(e,a,t){"use strict";function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return n}))},e66W:function(e,a,t){"use strict";t.r(a),t.d(a,"meta",(function(){return d})),t.d(a,"default",(function(){return N}));var n=t("cxan"),c=t("HbGN"),o=t("ERkP"),s=t.n(o),r=t("ZVZ0"),l={umd:{polyfill:[380.378,116.242],"no-polyfill":[339.578,99.061]},es:{polyfill:272.234,"no-polyfill":263.639}},p=t("RCB2"),u=t("t76I"),i=t.n(u),b=t("qb9G"),m=t.n(b),d=(s.a.createElement,{name:"Setup"}),O={meta:d},j="wrapper";function N(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(r.a)(j,Object(n.a)({},O,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"installing-neptune-web"},"Installing Neptune Web"),Object(r.a)("p",null,"Neptune Web is published to npm as two packages: ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@transferwise/components"}),"@transferwise/components")," and ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@transferwise/neptune-css"}),"@transferwise/neptune-css"),"."),Object(r.a)("p",null,"Because our components still require ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/transferwise/bootstrap"}),"Transferwise Bootstrap"),", for most users we currently recommend installing components and using them with Bootstrap, as outlined below."),Object(r.a)("p",null,"We are working on removing this dependency, which would allow us to offer a full solution with just Neptune Components and Neptune CSS. This is our eventual goal."),Object(r.a)("h3",{id:"installing-components"},"Installing Components"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"# yarn\nyarn add @transferwise/components\n\n# npm\nnpm install @transferwise/components\n")),Object(r.a)("p",null,"If not already installed, install the required peer depedencies. ",Object(r.a)("strong",{parentName:"p"},"Note:")," ",Object(r.a)("inlineCode",{parentName:"p"},"currency-flags")," is only required if you're using the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/components/MoneyInput"}),"Money Input")," or if you're using flags on the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/components/Select"}),"Select"),"."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"# yarn\nyarn add react react-dom prop-types transferwise/bootstrap currency-flags\n\n# npm\nnpm install react react-dom prop-types transferwise/bootstrap currency-flags\n")),Object(r.a)("h4",{id:"dont-i-need-neptune-css"},"Don't I need Neptune CSS?"),Object(r.a)("p",null,"Because our components still require Bootstrap, it is not currently necessary to use Neptune CSS with our components. You may still import Neptune CSS tokens if you wish to make use of the exposed custom properties in your application. They will not clash with Bootstrap. To do this, follow the ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#installing-css"}),"instructions below"),"."),Object(r.a)("h3",{id:"using-components-in-your-application"},"Using Components in your Application"),Object(r.a)("p",null,"By default, apps come polyfilled. If you would like to use an unpolyfilled version because your app provides its own polyfills, see ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"#advanced-components-usage"}),"Advanced Components Usage")," below."),Object(r.a)("pre",{className:"language-js"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// This line only needs to be imported once in your application"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'bootstrap/dist/css/bootstrap.css'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token maybe-class-name"}),"Button")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"from")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'@transferwise/components'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"export")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"default")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"function")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"Hello")),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"return")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"<"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token maybe-class-name"}),"Button")," size",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"="),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token maybe-class-name"}),"Button"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token maybe-class-name"}),"Size")),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token constant"}),"SMALL"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")," block",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"="),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"true"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),">"),"\n      ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token maybe-class-name"}),"Hello")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token maybe-class-name"}),"Neptune"),"\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"<"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"/"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token maybe-class-name"}),"Button"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),">"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(r.a)("p",null,"Browse our ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/components/Accordion"}),"components")," for usage documentation, live previews and code snippets for each component."),Object(r.a)("h3",{id:"installing-css"},"Installing CSS"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"# yarn\nyarn add @transferwise/neptune-css\n\n# npm\nnpm install @transferwise/neptune-css\n")),Object(r.a)("h3",{id:"using-css-in-your-application"},"Using CSS in your Application"),Object(r.a)("p",null,"We expose three bundles for use: Tokens, Core and Addons. These can be used together or individually. Core includes Tokens, so if you include Core, you don't need Tokens."),Object(r.a)("p",null,Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/styles/tokens/Colors"}),"Tokens")," exposes a number of useful CSS properties on ",Object(r.a)("inlineCode",{parentName:"p"},":root"),". If you're not familiar with using custom properties, have a read of the documentation on ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"}),"MDN"),"."),Object(r.a)("p",null,Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/styles/core/Typography"}),"Core")," includes the tokens, as well as typography styles."),Object(r.a)("p",null,Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/styles/addons/BackgroundUtilities"}),"Addons")," provide a number of utility classes for display, spacing and more."),Object(r.a)("p",null,"Follow the links for full documentation on what is available in each bundle."),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"Note:")," there are other files in the ",Object(r.a)("inlineCode",{parentName:"p"},"dist")," folder other than those mentioned here. Please do not rely on them, as we may remove them in future releases."),Object(r.a)("pre",{className:"language-js"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Tokens"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'@transferwise/neptune-css/dist/css/neptune-tokens.css'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Core (Includes Tokens)"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'@transferwise/neptune-css/dist/css/neptune-core.css'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Addons"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'@transferwise/neptune-css/dist/css/neptune-addons.css'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(r.a)("h4",{id:"using-with-bootstrap"},"Using with Bootstrap"),Object(r.a)("p",null,"Our goal is to have self contained components that, along with Neptune Core and Addons provides a full application development framework. Right now, as our components rely on Bootstrap, they will not work with Neptune CSS alone."),Object(r.a)("p",null,"You may, however, want to make use of the CSS properties on a page where you have components, and so are already importing Bootstrap. This is fine - import Neptune Tokens after Bootstrap."),Object(r.a)("pre",{className:"language-js"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// These only need to be imported once"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'bootstrap/dist/css/bootstrap.css'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"import")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'@transferwise/neptune-css/dist/css/neptune-tokens.css'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n")),Object(r.a)("pre",{className:"language-css"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".my-button"))," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"background-color"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"var"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token variable"}),"--color-primary"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"border-radius"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"var"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token variable"}),"--border-radius"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"border"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"1"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unit"}),"px")," solid transparent",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"color"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token hexcode"}),"#fff"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"cursor"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," pointer",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"padding-left"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"var"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token variable"}),"--space-12"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"padding-right"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"var"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token variable"}),"--space-12"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"text-align"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," center",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n")),Object(r.a)("h3",{id:"advanced-components-usage"},"Advanced Components Usage"),Object(r.a)("p",null,"The components are exposed in two formats: UMD and ES. We also provide polyfilled and non-polyfilled versions."),Object(r.a)("h4",{id:"which-bundle-should-i-use"},"Which bundle should I use?"),Object(r.a)("p",null,"UMD is a combination of CommonJS and AMD. It works in both browser and server environments (Node). ES uses the standardized ES module format."),Object(r.a)("p",null,"If you are using a bundler that supports ES module imports, you can use the ES build. If not, you will need the UMD build."),Object(r.a)("p",null,"Because we declare standard ",Object(r.a)("inlineCode",{parentName:"p"},"main")," and ",Object(r.a)("inlineCode",{parentName:"p"},"module")," properties in our ",Object(r.a)("inlineCode",{parentName:"p"},"package.json")," file, if you are happy to use the polyfilled version it's likely that you will get the right import for your environment."),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'"main": "./build/umd/polyfill/main.js",\n"module": "./build/es/polyfill/index.js",\n')),Object(r.a)("p",null,"We expose polyfilled versions by default, to ensure we meet our ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"/about/BrowserSupport"}),"Browser Support")," policy. If your application already includes polyfills, you can optimise your bundle by including non-polyfilled versions of the components."),Object(r.a)("p",null,"Below is a comparison of the different bundle options, along with where you can access them."),Object(r.a)("table",{className:"docs-table table table-condensed"},Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"Bundle"),Object(r.a)("th",null,"Default"),Object(r.a)("th",null,"Size"),Object(r.a)("th",null,"Treeshaking"),Object(r.a)("th",null,"Extra setup required"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("th",{scope:"row"},"UMD + polyfill"),Object(r.a)("td",null,Object(r.a)(m.a,{size:"sm",mdxType:"TickIcon"})),Object(r.a)("td",null,Object(r.a)(p.a,{bundleSize:l.umd.polyfill[0],mdxType:"PrintBundleSize"})," (gzip:~",Object(r.a)(p.a,{bundleSize:l.umd.polyfill[1],mdxType:"PrintBundleSize"}),")"),Object(r.a)("td",null,Object(r.a)(i.a,{size:"sm",mdxType:"CloseIcon"})),Object(r.a)("td",null,"None.")),Object(r.a)("tr",null,Object(r.a)("th",{scope:"row"},"UMD"),Object(r.a)("td",null,Object(r.a)(i.a,{size:"sm",mdxType:"CloseIcon"})),Object(r.a)("td",null,Object(r.a)(p.a,{bundleSize:l.umd["no-polyfill"][0],mdxType:"PrintBundleSize"})," (gzip:~",Object(r.a)(p.a,{bundleSize:l.umd["no-polyfill"][1],mdxType:"PrintBundleSize"}),")"),Object(r.a)("td",null,Object(r.a)(i.a,{size:"sm",mdxType:"CloseIcon"})),Object(r.a)("td",null,"You must override the default import and include your own polyfill.")),Object(r.a)("tr",null,Object(r.a)("th",{scope:"row"},"ES + polyfill"),Object(r.a)("td",null,Object(r.a)(m.a,{size:"sm",mdxType:"TickIcon"})),Object(r.a)("td",null,Object(r.a)(p.a,{bundleSize:l.es.polyfill,mdxType:"PrintBundleSize"})),Object(r.a)("td",null,Object(r.a)(m.a,{size:"sm",mdxType:"TickIcon"})),Object(r.a)("td",null,"None.")),Object(r.a)("tr",null,Object(r.a)("th",{scope:"row"},"ES"),Object(r.a)("td",null,Object(r.a)(i.a,{size:"sm",mdxType:"CloseIcon"})),Object(r.a)("td",null,Object(r.a)(p.a,{bundleSize:l.es["no-polyfill"],mdxType:"PrintBundleSize"})),Object(r.a)("td",null,Object(r.a)(m.a,{size:"sm",mdxType:"TickIcon"})),Object(r.a)("td",null,"You must override the default import and include your own polyfill.")))),Object(r.a)("p",null,"If you need to override the import to use a different bundle, here is where you can find the different combinations."),Object(r.a)("table",{className:"docs-table table table-condensed"},Object(r.a)("thead",null,Object(r.a)("tr",null,Object(r.a)("th",null,"Bundle"),Object(r.a)("th",null,"Location"))),Object(r.a)("tbody",null,Object(r.a)("tr",null,Object(r.a)("th",{scope:"row"},"UMD + polyfill"),Object(r.a)("td",null,Object(r.a)("pre",null,"@transferwise/components/build/umd/polyfill"))),Object(r.a)("tr",null,Object(r.a)("th",{scope:"row"},"UMD"),Object(r.a)("td",null,Object(r.a)("pre",null,"@transferwise/components/build/umd/no-polyfill"))),Object(r.a)("tr",null,Object(r.a)("th",{scope:"row"},"ES + polyfill"),Object(r.a)("td",null,Object(r.a)("pre",null,"@transferwise/components/build/es/polyfill"))),Object(r.a)("tr",null,Object(r.a)("th",{scope:"row"},"ES"),Object(r.a)("td",null,Object(r.a)("pre",null,"@transferwise/components/build/es/no-polyfill"))))),Object(r.a)("p",null,"You will need to find out how to specify module overrides in your particular build environment. Here's an example of how to do it in Webpack:"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),"  resolve: {\n    alias: {\n      '@transferwise/components': require.resolve(\n        '@transferwise/components/build/es/no-polyfill',\n      ),\n    },\n  },\n")),Object(r.a)("h4",{id:"tree-shaking"},"Tree-shaking"),Object(r.a)("p",null,"By default when importing this -"),Object(r.a)("pre",null,Object(r.a)("code",Object(n.a)({parentName:"pre"},{}),'import { Button, Upload } from "@transferwise/components";\n')),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"you will get ",Object(r.a)("strong",{parentName:"li"},"polyfilled UMD")," if your bundler doesn't support tree-shaking, ",Object(r.a)("strong",{parentName:"li"},"polyfilled ES")," if it does.")))}N.isMDXComponent=!0},qb9G:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c=s(t("ERkP")),o=s(t("aWzz"));function s(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var a=e.size,t=e.className,o=e.title,s=e.style;return c.default.createElement("span",{className:"tw-icon"+(a?" tw-icon-"+a:"")+" "+(t?" "+t:""),style:n({},s),"aria-hidden":o?null:"true",role:o?null:"presentation"},c.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},c.default.createElement("path",{d:"M7.07 20.7L.15 13.96l.7-.72 6.22 6.06L23.15 3.64l.7.72L7.07 20.7z"})),o&&c.default.createElement("span",{className:"sr-only"},o))};r.propTypes={size:o.default.oneOf(["sm","md","lg","xl","xxl"]),className:o.default.string,title:o.default.oneOfType([o.default.node,o.default.string]),style:o.default.object},r.defaultProps={size:null,className:"",title:null,style:null},a.default=r},t76I:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},c=s(t("ERkP")),o=s(t("aWzz"));function s(e){return e&&e.__esModule?e:{default:e}}var r=function(e){var a=e.size,t=e.className,o=e.title,s=e.style;return c.default.createElement("span",{className:"tw-icon"+(a?" tw-icon-"+a:"")+" "+(t?" "+t:""),style:n({},s),"aria-hidden":o?null:"true",role:o?null:"presentation"},c.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},c.default.createElement("path",{d:"M5.5 4L4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4 12 10.5 5.5 4z"})),o&&c.default.createElement("span",{className:"sr-only"},o))};r.propTypes={size:o.default.oneOf(["sm","md","lg","xl","xxl"]),className:o.default.string,title:o.default.oneOfType([o.default.node,o.default.string]),style:o.default.object},r.defaultProps={size:null,className:"",title:null,style:null},a.default=r}},[["HHz7",0,1]]]);