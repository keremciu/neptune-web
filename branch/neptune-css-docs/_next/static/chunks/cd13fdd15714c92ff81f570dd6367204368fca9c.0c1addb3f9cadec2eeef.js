(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2BMw":function(e,t,n){"use strict";var r=n("JEzR").IteratorPrototype,a=n("69O6"),o=n("pFnp"),i=n("YsHP"),l=n("dW0L"),u=function(){return this};e.exports=function(e,t,n){var s=t+" Iterator";return e.prototype=a(r,{next:o(1,n)}),i(e,s,!1,!0),l[s]=u,e}},"7J1Q":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={VERTICAL_TWO_COLUMN:"VERTICAL_TWO_COLUMN",VERTICAL_ONE_COLUMN:"VERTICAL_ONE_COLUMN",HORIZONTAL_JUSTIFIED:"HORIZONTAL_JUSTIFIED",HORIZONTAL_LEFT_ALIGNED:"HORIZONTAL_LEFT_ALIGNED"}},A0k0:function(e,t,n){var r=n("d3yh"),a=n("k8sU"),o=n("pgvI"),i=n("kn0l"),l=o("IE_PROTO"),u=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=a(e),r(e,l)?e[l]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},HqB1:function(e,t,n){"use strict";var r=n("nyoQ"),a=n("N/dD"),o=n("dW0L"),i=n("mL/b"),l=n("TI18"),u=i.set,s=i.getterFor("Array Iterator");e.exports=l(Array,"Array",(function(e,t){u(this,{type:"Array Iterator",target:r(e),index:0,kind:t})}),(function(){var e=s(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,a("keys"),a("values"),a("entries")},JEzR:function(e,t,n){"use strict";var r,a,o,i=n("A0k0"),l=n("69bb"),u=n("d3yh"),s=n("R/wC"),c=n("EZsP"),f=s("iterator"),d=!1;[].keys&&("next"in(o=[].keys())?(a=i(i(o)))!==Object.prototype&&(r=a):d=!0),void 0==r&&(r={}),c||u(r,f)||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},TBN6:function(e,t,n){"use strict";var r=n("EtS/"),a=n("MlVR"),o=n("4im6"),i=n("d3yh"),l=n("QKKh"),u=n("UCKC").f,s=n("+ZR0"),c=o.Symbol;if(a&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new c(e):void 0===e?c():c(e);return""===e&&(f[t]=!0),t};s(d,c);var p=d.prototype=c.prototype;p.constructor=d;var m=p.toString,y="Symbol(test)"==String(c("test")),v=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=m.call(e);if(i(f,e))return"";var n=y?t.slice(7,-1):t.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},TI18:function(e,t,n){"use strict";var r=n("EtS/"),a=n("2BMw"),o=n("A0k0"),i=n("0mQB"),l=n("YsHP"),u=n("69bb"),s=n("Kdvl"),c=n("R/wC"),f=n("EZsP"),d=n("dW0L"),p=n("JEzR"),m=p.IteratorPrototype,y=p.BUGGY_SAFARI_ITERATORS,v=c("iterator"),h=function(){return this};e.exports=function(e,t,n,c,p,g,b){a(n,t,c);var O,L,E,w=function(e){if(e===p&&k)return k;if(!y&&e in A)return A[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},R=t+" Iterator",T=!1,A=e.prototype,x=A[v]||A["@@iterator"]||p&&A[p],k=!y&&x||w(p),I="Array"==t&&A.entries||x;if(I&&(O=o(I.call(new e)),m!==Object.prototype&&O.next&&(f||o(O)===m||(i?i(O,m):"function"!=typeof O[v]&&u(O,v,h)),l(O,R,!0,!0),f&&(d[R]=h))),"values"==p&&x&&"values"!==x.name&&(T=!0,k=function(){return x.call(this)}),f&&!b||A[v]===k||u(A,v,k),d[t]=k,p)if(L={values:w("values"),keys:g?k:w("keys"),entries:w("entries")},b)for(E in L)!y&&!T&&E in A||s(A,E,L[E]);else r({target:t,proto:!0,forced:y||T},L);return L}},U8R0:function(e,t,n){(function(t){var n=9007199254740991,r="[object Arguments]",a="[object Function]",o="[object GeneratorFunction]",i="[object Map]",l="[object Set]",u=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,c="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,d=c||f||Function("return this")();function p(e,t){return function(e,t){for(var n=-1,r=e?e.length:0,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}(t,(function(t){return[t,e[t]]}))}var m,y,v=Function.prototype,h=Object.prototype,g=d["__core-js_shared__"],b=function(){var e=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),O=v.toString,L=h.hasOwnProperty,E=h.toString,w=RegExp("^"+O.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),R=h.propertyIsEnumerable,T=(m=Object.keys,y=Object,function(e){return m(y(e))}),A=P(d,"DataView"),x=P(d,"Map"),k=P(d,"Promise"),I=P(d,"Set"),N=P(d,"WeakMap"),_=W(A),C=W(x),j=W(k),M=W(I),D=W(N);function S(e,t){var n=H(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Z(e)}(e)&&L.call(e,"callee")&&(!R.call(e,"callee")||E.call(e)==r)}(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],a=n.length,o=!!a;for(var i in e)!t&&!L.call(e,i)||o&&("length"==i||V(i,a))||n.push(i);return n}function F(e){return!(!J(e)||function(e){return!!b&&b in e}(e))&&(B(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?w:u).test(W(e))}function q(e){if(!function(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||h;return e===n}(e))return T(e);var t=[];for(var n in Object(e))L.call(e,n)&&"constructor"!=n&&t.push(n);return t}function P(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return F(n)?n:void 0}var U=function(e){return E.call(e)};function V(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||s.test(e))&&e>-1&&e%1==0&&e<t}function W(e){if(null!=e){try{return O.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(A&&"[object DataView]"!=U(new A(new ArrayBuffer(1)))||x&&U(new x)!=i||k&&"[object Promise]"!=U(k.resolve())||I&&U(new I)!=l||N&&"[object WeakMap]"!=U(new N))&&(U=function(e){var t=E.call(e),n="[object Object]"==t?e.constructor:void 0,r=n?W(n):void 0;if(r)switch(r){case _:return"[object DataView]";case C:return i;case j:return"[object Promise]";case M:return l;case D:return"[object WeakMap]"}return t});var H=Array.isArray;function Z(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!B(e)}function B(e){var t=J(e)?E.call(e):"";return t==a||t==o}function J(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var G,z=(G=function(e){return Z(e)?S(e):q(e)},function(e){var t=U(e);return t==i?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}(e):t==l?function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}(e):p(e,G(e))});e.exports=z}).call(this,n("lpmq"))},WuAH:function(e,t,n){"use strict";n("sL/y");var r=n("ERkP"),a=n.n(r),o=n("aWzz"),i=n.n(o),l=n("O94r"),u=n.n(l),s=n("7J1Q"),c=function(e){var t=e.definitions,n=e.layout,r=e.muted;return a.a.createElement("div",{className:u()({row:n===s.a.VERTICAL_TWO_COLUMN})},t.map((function(e){var t=e.title,o=e.value,i=e.key;return a.a.createElement("div",{className:u()({"col-sm-6":n===s.a.VERTICAL_TWO_COLUMN}),key:i},a.a.createElement("dl",{className:u()({"dl-horizontal":n===s.a.HORIZONTAL_JUSTIFIED||n===s.a.HORIZONTAL_LEFT_ALIGNED})},a.a.createElement("dt",{className:u()({"text-muted":r})},t),a.a.createElement("dd",{className:u()("text-word-break",{"text-muted":r,"text-sm-right":n===s.a.HORIZONTAL_JUSTIFIED})},o)))})))};c.Layout=s.a,c.propTypes={definitions:i.a.arrayOf(i.a.shape({title:i.a.node.isRequired,value:i.a.node.isRequired,key:i.a.string.isRequired})),layout:i.a.oneOf([c.Layout.VERTICAL_TWO_COLUMN,c.Layout.VERTICAL_ONE_COLUMN,c.Layout.HORIZONTAL_JUSTIFIED,c.Layout.HORIZONTAL_LEFT_ALIGNED]),muted:i.a.bool},c.defaultProps={definitions:[],layout:c.Layout.VERTICAL_TWO_COLUMN,muted:!1},c.Layout=s.a,t.a=c},a7lk:function(e,t,n){},"ib+d":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return y}));n("MfUW"),n("TBN6"),n("V+hj"),n("HqB1"),n("cZHV"),n("sL/y"),n("vK12"),n("F5My"),n("uC9O"),n("2+WA"),n("g7z8"),n("KWfQ"),n("avn4"),n("D5ce"),n("qfxD");var r=function(e,t,n){if(!e)return{};var r=g(e);return r=o(r),r=l(r),r=u(r),Object.keys(r).forEach((function(e){r[e]=a(r[e],t,n)})),r},a=function(e,t,n){var r=g(e);return c(r),s(r),p(r),m(r,n),r},o=function(e){if(e instanceof Array){var t=[];return e.forEach((function(e){e.fields?t=t.concat(i(e,e.fields)):e.group?t=t.concat(i(e,e.group)):t.push(e)})),t}return e},i=function(e,t){return e.name&&t.length&&!t[0].name&&(t[0].name=e.name),e.width&&t.length&&!t[0].width&&(t[0].width=e.width),e.tooltip&&t.length&&!t[0].help&&(t[0].help={message:e.tooltip}),e.info&&t.length&&!t[0].help&&(t[0].help={message:e.info}),2===t.length&&t.forEach((function(e){e.width="md"})),3===t.length&&(t[0].width="md",t[1].width="md"),t},l=function(e){if(e instanceof Array){var t={};return e.forEach((function(e){var n=e.key||e.name;delete e.key,t[n]=g(e)})),t}return e},u=function(e){if(e instanceof Array)throw new Error("Expecting a map of fields, not an array");var t={};return Object.keys(e).forEach((function(n){if(0<n.indexOf(".")){var r=n.split("."),a=r[0];t[a]||(t[a]={type:"object",properties:{}}),t[a].properties[r[1]]=e[n]}else t[n]=e[n]})),t},s=function(e){switch(e.type&&e.type.toLowerCase&&e.type.toLowerCase()){case"text":e.type="string";break;case"date":e.type="string",e.format="date";break;case"password":e.type="string",e.control="password";break;case"checkbox":e.type="boolean";break;case"select":e.control||(e.control="select"),delete e.type;break;case"radio":e.control="radio",delete e.type;break;case"upload":e.type="string",e.format="base64url";break;case"tel":e.type="string",e.format="phone";break;case"textarea":e.type="string",e.control="textarea"}e.control||"object"===e.type||(e.control=y(e))},c=function(e){e.name&&!e.title&&(e.title=e.name,delete e.name),e.validationRegexp&&(e.pattern=e.validationRegexp,delete e.validationRegexp),e.min&&(e.minimum=e.min,delete e.min),e.max&&(e.maximum=e.max,delete e.max),e.example&&!e.placeholder&&(e.placeholder=e.example,delete e.example),e.tooltip&&!e.help&&(e.help={message:e.tooltip},delete e.tooltip),e.valuesAllowed&&!e.values&&(e.values=e.valuesAllowed,delete e.valuesAllowed),e.values&&e.values.map&&(e.values=f(e.values)),e.value&&!e.default&&(e.default=e.value,delete e.value),e.values&&e.values&&e.values.length&&e.values[0]&&!e.values[0].value&&e.values[0].label&&!e.placeholder&&(e.placeholder=e.values[0].label,e.values=e.values.slice(1))},f=function(e){return e.map(d)},d=function(e){return!e.label&&e.title&&(e.label=e.title,delete e.title),!e.label&&e.name&&(e.label=e.name,delete e.name),!e.value&&e.code&&(e.value=e.code,delete e.code),!e.value&&e.key&&(e.value=e.key,delete e.key),e},p=function(e){if(e.pattern)try{RegExp(e.pattern)}catch(t){console.warn("API regexp is invalid"),delete e.pattern}else delete e.pattern},m=function(e,t){return e.validationMessages=e.validationMessages?e.validationMessages:t,e.validationMessages?(e.validationMessages.minimum&&(e.validationMessages.min=e.validationMessages.minimum,delete e.validationMessages.minimum),void(e.validationMessages.maximum&&(e.validationMessages.max=e.validationMessages.maximum,delete e.validationMessages.maximum))):void delete e.validationMessages},y=function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return h(e);switch(e.type){case"string":return v(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}},v=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e?"text":"email"===e?"text":"phone"===e?"tel":"text"},h=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},g=function(e){return JSON.parse(JSON.stringify(e))}},kn0l:function(e,t,n){var r=n("AoMu");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},qfxD:function(e,t,n){var r=n("4im6"),a=n("4NyN"),o=n("HqB1"),i=n("69bb"),l=n("R/wC"),u=l("iterator"),s=l("toStringTag"),c=o.values;for(var f in a){var d=r[f],p=d&&d.prototype;if(p){if(p[u]!==c)try{i(p,u,c)}catch(y){p[u]=c}if(p[s]||i(p,s,f),a[f])for(var m in o)if(p[m]!==o[m])try{i(p,m,o[m])}catch(y){p[m]=o[m]}}}},zXEp:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return H})),n.d(t,"default",(function(){return J}));var r=n("cxan"),a=n("HbGN"),o=n("ERkP"),i=n.n(o),l=n("ZVZ0"),u=n("Qi1R"),s=(n("V+hj"),n("nvWY")),c=n.n(s),f=n("oobO"),d=n.n(f),p=n("65gV"),m=n.n(p),y=n("cVsr"),v=n.n(y),h=n("dsLa"),g=n.n(h),b=n("brTf"),O=n.n(b),L=n("gC0r"),E=n.n(L),w=n("aWzz"),R=n.n(w),T=n("WuAH"),A=n("ib+d"),x=(n("bhcN"),n("sL/y"),n("XsB/")),k=n.n(x),I=n("U8R0"),N=n.n(I),_=(n("SPt5"),n("HqB1"),n("cZHV"),n("2+WA"),n("qfxD"),n("O94r")),C=n.n(_),j=n("dLMp"),M=function(e,t){for(var n=0;D(e,t+n);)n+=1;return separators},D=function(e,t){return e[t]&&"*"!==e[t]},S=(n("a7lk"),function(e){var t=e.field,n=e.value,r=e.locale,a=[];switch(t.tagClassName&&t.tagClassName.h3&&(a.push("h3"),a.push("formatted-value__h3-custom-alignment")),t.control){case"select":case"radio":return i.a.createElement("span",null,function(e,t){var n=e.find((function(e){return e.value===t}));return n&&n.label?n.label:t}(t.values,n));case"date":return i.a.createElement("span",null,Object(j.formatDate)(n instanceof Date?n:new Date(n),r));case"number":return i.a.createElement("span",null,Object(j.formatNumber)(n,r));case"password":return i.a.createElement("span",null,function(e){return Array(e.length+1).join("*")}(n));case"file":return i.a.createElement("div",{className:"thumbnail"},i.a.createElement("img",{alt:t.title,src:n}));case"checkbox":return i.a.createElement("span",null,JSON.stringify(n));default:return i.a.createElement("span",{className:C()(a)},function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0;if("string"!=typeof t)return e;var n=t;0<n.indexOf("||")&&(n=n.substring(0,t.indexOf("||")));for(var r="",a=0,o=e.length,i=0;o;)D(n,i)?(r+=n[i],a+=1):(r+=e[i-a],o-=1),i+=1;var l=M(n,i);return l&&(r+=n.substr(i,l)),r}(n,t.displayFormat))}});S.propTypes={field:R.a.shape({control:R.a.string.isRequired,displayFormat:R.a.string,refreshRequirementsOnChange:R.a.bool,title:R.a.string.isRequired,type:R.a.string.isRequired,width:R.a.string,tagClassName:R.a.shape({h3:R.a.bool}),values:R.a.arrayOf(R.a.shape({value:R.a.any}))}).isRequired,value:R.a.any.isRequired,locale:R.a.string},S.defaultProps={locale:"en-GB"};var F=S;function q(e,t,n){return N()(e).map((function(e){var r=k()(e,2);return function(e,t,n,r){var a=t.title,o=t.group,l=t.hidden;return!n[e]||l?null:{title:a,value:o?o.map((function(t,a){return i.a.createElement(F,{key:a,field:t,value:n[e],locale:r})})):i.a.createElement(F,{field:t,value:n[e],locale:r}),key:e}}(r[0],r[1],t,n)})).filter((function(e){return!!e}))}var P=n("7J1Q"),U=function(e){function t(){var e,n;c()(this,t);for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=m()(this,(e=v()(t)).call.apply(e,[this].concat(a))),E()(g()(n),"state",{fields:Object(A.b)(n.props.fields)}),n}return O()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.model,n=e.locale,r=e.title,a=e.layout,o=this.state.fields;return i.a.createElement(i.a.Fragment,null,r&&i.a.createElement("div",{className:"m-t-1"},i.a.createElement("h4",{className:"page-header p-t-3"},r)),i.a.createElement(T.a,{layout:a,definitions:q(o,t,n)}))}}]),t}(o.PureComponent);E()(U,"Layout",P.a),E()(U,"propTypes",{model:R.a.shape({}).isRequired,fields:R.a.shape({}).isRequired,locale:R.a.string,title:R.a.string,layout:R.a.oneOf([U.Layout.VERTICAL_TWO_COLUMN,U.Layout.VERTICAL_ONE_COLUMN,U.Layout.HORIZONTAL_JUSTIFIED,U.Layout.HORIZONTAL_LEFT_ALIGNED])}),E()(U,"defaultProps",{locale:"en-GB",title:null,layout:U.Layout.VERTICAL_TWO_COLUMN}),E()(U,"Layout",P.a);var V=U,W="<DynamicFieldDefinitionList\n  title=\"This is an awesome component\"\n  layout={DynamicFieldDefinitionList.Layout.VERTICAL_TWO_COLUMN}\n  locale=\"en-GB\"\n  model={{\n    text: 'helloworld',\n    number: 123456,\n    select: '1',\n    date: '2000-12-20T00:00:00.000Z',\n    checkbox: true,\n    radio: '2',\n    password: 'qwerty',\n    telephone: '+441234567890',\n    textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',\n  }}\n  fields={{\n    text: {\n      title: 'Text',\n      type: 'text',\n      displayFormat: '***** - *****||*-*-*',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      tagClassName: {\n        h3: true,\n      },\n    },\n    number: {\n      title: 'Number',\n      type: 'number',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    select: {\n      title: 'Select',\n      type: 'string',\n      control: 'select',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      values: [\n        {\n          key: '1',\n          name: 'One',\n        },\n        {\n          key: '2',\n          name: 'Two',\n        },\n      ],\n    },\n    password: {\n      title: 'Password',\n      type: 'string',\n      control: 'password',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    date: {\n      title: 'Date',\n      type: 'string',\n      format: 'date',\n      refreshRequirementsOnChange: true,\n    },\n    telephone: {\n      title: 'Telephone',\n      type: 'string',\n      control: 'tel',\n      placeholder: 'Enter...',\n    },\n    radio: {\n      title: 'Radio',\n      type: 'string',\n      control: 'radio',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n      values: [\n        {\n          key: '1',\n          name: 'One',\n        },\n        {\n          key: '2',\n          name: 'Two',\n        },\n      ],\n    },\n    checkbox: {\n      title: 'Checkbox',\n      type: 'boolean',\n      placeholder: 'Label',\n      width: 'md',\n      refreshRequirementsOnChange: true,\n    },\n    textarea: {\n      title: 'Textarea',\n      type: 'string',\n      control: 'textarea',\n      refreshRequirementsOnChange: true,\n    },\n    file: {\n      title: 'File',\n      type: 'string',\n      format: 'base64url',\n      refreshRequirementsOnChange: true,\n    },\n    hidden: {\n      type: 'string',\n      hidden: true,\n      default: 'hidden-value',\n    },\n  }}\n/>;\n",H=(i.a.createElement,{name:"Dynamic Field Definition List"}),Z={meta:H},B="wrapper";function J(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.a)(B,Object(r.a)({},Z,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)(u.b,{code:W,scope:{DynamicFieldDefinitionList:V},mdxType:"LiveEditorBlock"}),Object(l.a)(u.a,{componentName:"DynamicFieldDefinitionList",mdxType:"GeneratePropsTable"}))}J.isMDXComponent=!0}}]);