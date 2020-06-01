(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"8t5b":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return C})),n.d(t,"default",(function(){return N}));var a=n("cxan"),r=n("HbGN"),i=n("ERkP"),o=n.n(i),l=n("ZVZ0"),c=n("Qi1R"),s=n("m3Bd"),d=n.n(s),u=n("aWzz"),p=n.n(u),m=n("j+zR"),f=n.n(m),v=n("O94r"),b=n.n(v),O=n("Hi8P"),E=n("Lw4+"),h=(n("JCva"),function(e){var t=e.as,n=e.isExpanded,a=e.title,r=e.details,i=e.children,l=e.onClick,c=e.icon,s=e.id,u=e.className,p=d()(e,["as","isExpanded","title","details","children","onClick","icon","id","className"]),m=!(!n||!i);return(o.a.createElement(t,{className:b()("tw-card list-group-item p-a-0",u,{active:m}),id:s,"data-testid":p["data-testid"]},o.a.createElement("div",{className:b()("p-a-panel tw-card__panel",{"tw-card__panel--inactive":!i}),role:i?"button":null,onClick:function(){return i&&l(!n)}},o.a.createElement(E.a,{as:"div",media:c,title:a,content:r,decision:!1,button:i&&o.a.createElement(O.a,{size:O.a.Size.SMALL,orientation:O.a.Orientation.BOTTOM,flip:m,animate:!0}),inverseMediaCircle:m})),m&&o.a.createElement("div",{className:"p-l-panel p-r-panel p-b-panel"},o.a.createElement("div",{className:"media"},o.a.createElement("div",{className:"media-left"},o.a.createElement("div",{className:"circle circle-sm circle-inverse circle-responsive invisible"})),o.a.createElement("div",{className:"media-body"},o.a.createElement("hr",{className:"m-t-0 hidden-xs hidden-sm"}),o.a.createElement("div",null,i))))))}),x=function(e){return e.children};h.propTypes={as:p.a.elementType,isExpanded:f()(p.a.bool,x),title:p.a.node.isRequired,details:p.a.node.isRequired,onClick:f()(p.a.func,x),icon:p.a.node.isRequired,children:p.a.node,id:p.a.string,className:p.a.string,"data-testid":p.a.string},h.defaultProps={as:"div",children:null,id:null,className:null,"data-testid":null};var y=h,g=n("CVfn"),T=n.n(g),w='() => {\n  const [isExpanded, setIsExpanded] = React.useState(false);\n\n  return (\n    <Card\n      title="Title"\n      details="Some more context"\n      isExpanded={isExpanded}\n      onClick={isExpanded => setIsExpanded(isExpanded)}\n      icon={<FastFlagIcon />}\n    >\n      <div>Can be almost anything. Edit me :)</div>\n    </Card>\n  );\n};\n',C=(o.a.createElement,{name:"Card"}),j={meta:C},M="wrapper";function N(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.a)(M,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(c.b,{code:w,scope:{Card:y,FastFlagIcon:T.a},mdxType:"LiveEditorBlock"}),Object(l.a)(c.a,{componentName:"Card",mdxType:"GeneratePropsTable"}),Object(l.a)("h2",{id:"group-of-cards"},"Group of cards"),Object(l.a)("p",null,"Cards rendered as ",Object(l.a)("inlineCode",{parentName:"p"},"li")," elements in a ",Object(l.a)("a",Object(a.a)({parentName:"p"},{href:"https://bootstrap.transferwise.com/components/#panels-list-group"}),"panel-list")," with ",Object(l.a)("inlineCode",{parentName:"p"},"list-group panel-list-group list-group-inactive")," class."),Object(l.a)("ul",{className:"list-group panel-list-group list-group-inactive"},Object(l.a)(y,{as:"li",title:"Collapsed card",details:"details",isExpanded:!1,onClick:function(){return alert("toggled")},icon:Object(l.a)(T.a,{mdxType:"FastFlagIcon"}),mdxType:"Card"},Object(l.a)("div",null)),Object(l.a)(y,{as:"li",title:"Expanded card",details:"details",isExpanded:!0,onClick:function(){return alert("toggled")},icon:Object(l.a)(T.a,{mdxType:"FastFlagIcon"}),mdxType:"Card"},"I am an expanded card."),Object(l.a)(y,{as:"li",title:"Empty card",details:"I do not have children",icon:Object(l.a)(T.a,{mdxType:"FastFlagIcon"}),mdxType:"Card"}),Object(l.a)(y,{as:"li",title:"Collapsed card",details:"details",isExpanded:!1,onClick:function(){return alert("toggled")},icon:Object(l.a)(T.a,{mdxType:"FastFlagIcon"}),mdxType:"Card"},Object(l.a)("div",null))))}N.isMDXComponent=!0},CVfn:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n("ERkP")),i=o(n("aWzz"));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.size,n=e.className,i=e.title,o=e.style;return r.default.createElement("span",{className:"tw-icon"+(t?" tw-icon-"+t:"")+" "+(n?" "+n:""),style:a({},o),"aria-hidden":i?null:"true",role:i?null:"presentation"},r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.default.createElement("path",{d:"M5.08 2L8.2 7.24l-5.47 5.24h9.46l.89-2.1H7.86l3.16-3.15L9.18 4.1h8.61L10.23 22h2.59l8.45-20H5.08z"})),i&&r.default.createElement("span",{className:"sr-only"},i))};l.propTypes={size:i.default.oneOf(["sm","md","lg","xl","xxl"]),className:i.default.string,title:i.default.oneOfType([i.default.node,i.default.string]),style:i.default.object},l.defaultProps={size:null,className:"",title:null,style:null},t.default=l},CrPR:function(e,t,n){var a=n("e1rg");e.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},DZbC:function(e,t,n){var a=n("QKKh"),r=n("QOpd"),i=n("R/wC")("species");e.exports=function(e,t){var n;return r(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!r(n.prototype)?a(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},Hi8P:function(e,t,n){"use strict";n("V+hj");var a,r=n("KEM+"),i=n.n(r),o=(n("J/fC"),n("ERkP")),l=n.n(o),c=n("aWzz"),s=n.n(c),d=n("O94r"),u=n.n(d),p=n("VehP"),m=n("eKd8"),f=(a={},i()(a,p.a.SMALL,16),i()(a,p.a.MEDIUM,24),i()(a,p.a.LARGE,32),a),v=function(e){var t=e.orientation,n=e.flip,a=e.size,r=e.animate,i=f[a],o=u()(t,a,{flip:n,animate:r});return(l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"chevron",width:i,height:i,viewBox:"0 0 ".concat(i," ").concat(i),preserveAspectRatio:"xMidYMid"},l.a.createElement("g",{className:"chevron-container ".concat(o)},l.a.createElement("line",{className:"chevron-line-one",x1:"20%",y1:"35%",x2:"50%",y2:"65%"}),l.a.createElement("line",{className:"chevron-line-two",x1:"50%",y1:"65%",x2:"80%",y2:"35%"}))))};v.Orientation=m.b,v.Size=p.a,v.propTypes={orientation:s.a.oneOf([v.Orientation.TOP,v.Orientation.BOTTOM,v.Orientation.LEFT,v.Orientation.RIGHT]),animate:s.a.bool,flip:s.a.bool,size:s.a.oneOf([v.Size.SMALL,v.Size.MEDIUM,v.Size.LARGE])},v.defaultProps={orientation:v.Orientation.BOTTOM,animate:!1,flip:!1,size:v.Size.SMALL},t.a=v},"KEM+":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},LdEA:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},"Lw4+":function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),i=n("aWzz"),o=n.n(i),l=n("O94r"),c=n.n(l),s=n("j+zR"),d=n.n(s),u=(n("X+z2"),function(e){var t=e.as,n=e.href,a=e.media,i=e.title,o=e.content,l=e.onClick,s=e.htmlFor,d=e.disabled,u=e.button,p=e.decision,m=e.complex,f=e.className,v=e.inverseMediaCircle;return(r.a.createElement(t,{className:c()(f,"media",{"decision-complex":m,decision:p,disabled:d}),href:n,onClick:l,htmlFor:s},a&&r.a.createElement("div",{className:"media-left"},r.a.createElement("div",{className:c()("circle circle-sm text-primary",{"circle-inverse":v})},a)),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",null,i),o),r.a.createElement("div",{className:"media-right"},u)))});u.propTypes={media:o.a.node,htmlFor:o.a.string,title:o.a.node.isRequired,content:o.a.node,onClick:o.a.func,href:d()(o.a.string,(function(e){return"a"===e.as})),as:o.a.elementType,disabled:o.a.bool,button:o.a.node,decision:o.a.bool,complex:o.a.bool,inverseMediaCircle:o.a.bool,className:o.a.string},u.defaultProps={as:"label",media:"",content:null,htmlFor:null,disabled:!1,button:null,onClick:null,href:null,decision:!0,complex:!1,inverseMediaCircle:!0,className:null},t.a=u},O94r:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},QOpd:function(e,t,n){var a=n("l9lp");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"R/wC":function(e,t,n){var a=n("4im6"),r=n("lEPA"),i=n("d3yh"),o=n("rdnw"),l=n("e1rg"),c=n("CrPR"),s=r("wks"),d=a.Symbol,u=c?d:d&&d.withoutSetter||o;e.exports=function(e){return i(s,e)||(l&&i(d,e)?s[e]=d[e]:s[e]=u("Symbol."+e)),s[e]}},"V+hj":function(e,t,n){"use strict";var a=n("EtS/"),r=n("AoMu"),i=n("QOpd"),o=n("QKKh"),l=n("k8sU"),c=n("QI0Q"),s=n("naNE"),d=n("DZbC"),u=n("YyzA"),p=n("R/wC"),m=n("zLxc"),f=p("isConcatSpreadable"),v=m>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),b=u("concat"),O=function(e){if(!o(e))return!1;var t=e[f];return void 0!==t?!!t:i(e)};a({target:"Array",proto:!0,forced:!v||!b},{concat:function(e){var t,n,a,r,i,o=l(this),u=d(o,0),p=0;for(t=-1,a=arguments.length;t<a;t++)if(i=-1===t?o:arguments[t],O(i)){if(p+(r=c(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,p++)n in i&&s(u,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(u,p++,i)}return u.length=p,u}})},VehP:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},"XXU+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Card",function(){return n("8t5b")}])},YyzA:function(e,t,n){var a=n("AoMu"),r=n("R/wC"),i=n("zLxc"),o=r("species");e.exports=function(e){return i>=51||!a((function(){var t=[];return(t.constructor={})[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},e1rg:function(e,t,n){var a=n("AoMu");e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())}))},eKd8:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a={TOP:"top",RIGHT:"right",BOTTOM:"bottom",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left",LEFT:"left",LEFT_TOP:"left-top",RIGHT_TOP:"right-top"},r={TOP_LEFT:"up-left",TOP:"up-center",TOP_RIGHT:"up-right",BOTTOM_LEFT:"down-left",BOTTOM:"down-center",BOTTOM_RIGHT:"down-right"}},ellU:function(e,t,n){var a=n("OzhJ");e.exports=a("navigator","userAgent")||""},"j+zR":function(e,t){e.exports=function(e,t){return function(n,a,r){if("function"!==typeof e)return new Error("Invalid react-required-if prop type supplied to "+r+". Validation failed.");if("function"!==typeof t)return new Error("Invalid react-required-if condition supplied to "+r+". Validation failed.");var i=t(n)?e.isRequired:e;return i.apply(this,arguments)}}},k8sU:function(e,t,n){var a=n("m8+a");e.exports=function(e){return Object(a(e))}},m3Bd:function(e,t,n){var a=n("LdEA");e.exports=function(e,t){if(null==e)return{};var n,r,i=a(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},naNE:function(e,t,n){"use strict";var a=n("jzcl"),r=n("UCKC"),i=n("pFnp");e.exports=function(e,t,n){var o=a(t);o in e?r.f(e,o,i(0,n)):e[o]=n}},zLxc:function(e,t,n){var a,r,i=n("4im6"),o=n("ellU"),l=i.process,c=l&&l.versions,s=c&&c.v8;s?r=(a=s.split("."))[0]+a[1]:o&&(!(a=o.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=o.match(/Chrome\/(\d+)/))&&(r=a[1]),e.exports=r&&+r}},[["XXU+",0,1,2,3,5,4]]]);