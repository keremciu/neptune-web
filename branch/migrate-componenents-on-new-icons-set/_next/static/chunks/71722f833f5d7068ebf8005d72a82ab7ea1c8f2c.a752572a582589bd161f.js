(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1zJ+":function(e,n,t){var r=t("iqAf"),a=t("HusR").values;r({target:"Object",stat:!0},{values:function(e){return a(e)}})},"4Fsj":function(e,n,t){var r=t("D0Gw"),a=t("IYgw"),i=t("XPXG")("species");e.exports=function(e,n){var t,o=r(e).constructor;return void 0===o||void 0==(t=r(o)[i])?n:a(t)}},"5oRh":function(e,n,t){"use strict";var r=t("zRLi").charAt;e.exports=function(e,n,t){return n+(t?r(e,n).length:1)}},"9mpX":function(e,n,t){var r=t("3WWX"),a=t("xsFy");e.exports=function(e,n){var t=e.exec;if("function"===typeof t){var i=t.call(e,n);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,n)}},"9s95":function(e,n,t){},CxmI:function(e,n,t){"use strict";var r=t("iqAf"),a=t("IwPE"),i=t("Hh/Z"),o=t("jv5G"),s=t("wVfN"),l=t("gPvs"),u=t("Sni5"),c=t("XPXG"),p=t("QHNN"),d=t("wWhu"),f=p("slice"),g=d("slice",{ACCESSORS:!0,0:0,1:2}),h=c("species"),m=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f||!g},{slice:function(e,n){var t,r,c,p=l(this),d=s(p.length),f=o(e,d),g=o(void 0===n?d:n,d);if(i(p)&&("function"!=typeof(t=p.constructor)||t!==Array&&!i(t.prototype)?a(t)&&null===(t=t[h])&&(t=void 0):t=void 0,t===Array||void 0===t))return m.call(p,f,g);for(r=new(void 0===t?Array:t)(v(g-f,0)),c=0;f<g;f++,c++)f in p&&u(r,c,p[f]);return r.length=c,r}})},HusR:function(e,n,t){var r=t("jtjB"),a=t("1zPo"),i=t("gPvs"),o=t("HXGr").f,s=function(e){return function(n){for(var t,s=i(n),l=a(s),u=l.length,c=0,p=[];u>c;)t=l[c++],r&&!o.call(s,t)||p.push(e?[t,s[t]]:s[t]);return p}};e.exports={entries:s(!0),values:s(!1)}},Ockh:function(e,n,t){"use strict";t("PPoF");var r=t("qml6"),a=t("YOaW"),i=t("XPXG"),o=t("xsFy"),s=t("eDwi"),l=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),c="$0"==="a".replace(/./,"$0"),p=i("replace"),d=!!/./[p]&&""===/./[p]("a","$0"),f=!a((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));e.exports=function(e,n,t,p){var g=i(e),h=!a((function(){var n={};return n[g]=function(){return 7},7!=""[e](n)})),m=h&&!a((function(){var n=!1,t=/a/;return"split"===e&&((t={}).constructor={},t.constructor[l]=function(){return t},t.flags="",t[g]=/./[g]),t.exec=function(){return n=!0,null},t[g](""),!n}));if(!h||!m||"replace"===e&&(!u||!c||d)||"split"===e&&!f){var v=/./[g],y=t(g,""[e],(function(e,n,t,r,a){return n.exec===o?h&&!a?{done:!0,value:v.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:c,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=y[0],x=y[1];r(String.prototype,e,b),r(RegExp.prototype,g,2==n?function(e,n){return x.call(e,this,n)}:function(e){return x.call(e,this)})}p&&s(RegExp.prototype[g],"sham",!0)}},PPoF:function(e,n,t){"use strict";var r=t("iqAf"),a=t("xsFy");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ZrBu:function(e,n,t){"use strict";t("sL/y");var r=t("ERkP"),a=t.n(r),i=t("aWzz"),o=t.n(i),s=t("/Vl7"),l=(t("9s95"),function(e){var n=e.dos,t=e.donts;return a.a.createElement("div",{className:"tw-instructions"},n.map((function(e,n){return a.a.createElement("div",{className:"instruction m-t-1",key:n},a.a.createElement(s.d,{size:24,className:"do"}),a.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})),t.map((function(e,n){return a.a.createElement("div",{className:"instruction m-t-1",key:n},a.a.createElement(s.j,{size:24,className:"dont"}),a.a.createElement("p",{className:"m-l-2 m-b-0 text-primary"},e))})))});l.defaultProps={dos:[],donts:[]},l.propTypes={dos:o.a.arrayOf(o.a.string),donts:o.a.arrayOf(o.a.string)};var u=l;n.a=u},ccOV:function(e,n,t){"use strict";var r=t("Ockh"),a=t("js3m"),i=t("D0Gw"),o=t("4s/Q"),s=t("4Fsj"),l=t("5oRh"),u=t("wVfN"),c=t("9mpX"),p=t("xsFy"),d=t("YOaW"),f=[].push,g=Math.min,h=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,n,t){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var r=String(o(this)),i=void 0===t?4294967295:t>>>0;if(0===i)return[];if(void 0===e)return[r];if(!a(e))return n.call(r,e,i);for(var s,l,u,c=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,h=new RegExp(e.source,d+"g");(s=p.call(h,r))&&!((l=h.lastIndex)>g&&(c.push(r.slice(g,s.index)),s.length>1&&s.index<r.length&&f.apply(c,s.slice(1)),u=s[0].length,g=l,c.length>=i));)h.lastIndex===s.index&&h.lastIndex++;return g===r.length?!u&&h.test("")||c.push(""):c.push(r.slice(g)),c.length>i?c.slice(0,i):c}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,t){var a=o(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a,t):r.call(String(a),n,t)},function(e,a){var o=t(r,e,this,a,r!==n);if(o.done)return o.value;var p=i(e),d=String(this),f=s(p,RegExp),m=p.unicode,v=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(h?"y":"g"),y=new f(h?p:"^(?:"+p.source+")",v),b=void 0===a?4294967295:a>>>0;if(0===b)return[];if(0===d.length)return null===c(y,d)?[d]:[];for(var x=0,E=0,O=[];E<d.length;){y.lastIndex=h?E:0;var R,T=c(y,h?d:d.slice(E));if(null===T||(R=g(u(y.lastIndex+(h?0:E)),d.length))===x)E=l(d,E,m);else{if(O.push(d.slice(x,E)),O.length===b)return O;for(var w=1;w<=T.length-1;w++)if(O.push(T[w]),O.length===b)return O;E=x=R}}return O.push(d.slice(x)),O}]}),!h)},lQrX:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return _})),t.d(n,"default",(function(){return Q}));var r=t("cxan"),a=t("HbGN"),i=t("ERkP"),o=t.n(i),s=t("ZVZ0"),l=t("Qi1R"),u=(t("cgWf"),t("d5bn"),t("dybj"),t("1zJ+"),t("0bDb"),t("LE/M")),c=t.n(u),p=t("24NF"),d=t.n(p),f=t("KRMC"),g=t.n(f),h=t("8ruu"),m=t.n(h),v=t("Ec8V"),y=t.n(v),b=t("O0bJ"),x=t.n(b),E=t("SRS/"),O=t.n(E),R=t("0ZUa"),T=t.n(R),w=t("aWzz"),N=t.n(w),j=t("O94r"),I=t.n(j),P=t("3g/d"),A=t("ZrBu"),F=t("E+8c"),M=t("2k+G"),S=t("5J+o"),C=(t("FJp2"),t("Iprl"),t("s3Va"),t("kOhy"),t("lhM9"),t("CxmI"),t("Pxfe"),t("o6KI"),t("onV5"),t("ccOV"),t("e0cp"),function(e){if(e.control)return e.control.toLowerCase();if(e.hidden)return"hidden";if(e.values&&e.values.length)return k(e);switch(e.type){case"string":return L(e.format);case"number":case"integer":return"number";case"boolean":return"checkbox";default:return"text"}}),L=function(e){return"date"===e?"date":"base64url"===e?"file":"password"===e?"password":"uri"===e?"text":"email"===e?"text":"phone"===e?"tel":"text"},k=function(e){return e.control?e.control:"select"===e.type?"select":"radio"===e.type?"radio":e.values?3<e.values.length?"select":"radio":"select"},q=t("/Zok");function B(e,n){return!n||"undefined"!=typeof e}function X(e,n){return"undefined"==typeof n||"undefined"!=typeof e&&e<=n}function G(e,n){return"undefined"==typeof n||"undefined"!=typeof e&&e>=n}function z(e,n,t){if(Object(q.d)(e))return t?["required"]:[];switch(n.type){case"string":return function(e,n,t){if(!Object(q.g)(e)&&!Object(q.d)(e))return["type"];if(""===e&&t)return["required"];var r=[];return B(e,t)||r.push("required"),function(e,n){return"undefined"==typeof n||!!e&&e.length>=n}(e,n.minLength)||r.push("minLength"),function(e,n){return"undefined"==typeof n||""===e||!!e&&e.length<=n}(e,n.maxLength)||r.push("maxLength"),function(e,n){try{var t=new RegExp(n);return"undefined"!=typeof e&&!!t.test(e)}catch(e){return!0}}(e,n.pattern)||r.push("pattern"),G(e,n.min)||r.push("min"),X(e,n.max)||r.push("max"),r}(e,n,t);case"number":return D(e,n,t);case"integer":return function(e,n,t){return Object(q.c)(e)?D(e,n,t):["type"]}(e,n,t);case"boolean":return function(e,n,t){if(!Object(q.b)(e)&&!Object(q.d)(e))return["type"];var r=[];return B(e,t)||r.push("required"),r}(e,0,t);case"array":return function(e,n){if(!Object(q.a)(e)&&!Object(q.d)(e))return["type"];var t=[];return function(e,n){return!n||!!e&&e.length>=n}(e,n.minItems)||t.push("minItems"),function(e,n){return!n||!!e&&e.length<=n}(e,n.maxItems)||t.push("maxItems"),t}(e,n);case"object":return function(e,n){return Object(q.f)(e)||Object(q.d)(e)?Object(q.a)(n.required)?n.required.map((function(n){return"undefined"!=typeof e[n]})).reduce((function(e,n){return e&&n}),!0)?[]:["required"]:[]:["type"]}(e,n);default:return[]}}function D(e,n,t){if(!Object(q.e)(e)&&!Object(q.d)(e))return["type"];var r=[];return B(e,t)||r.push("required"),G(e,n.min)||r.push("min"),X(e,n.max)||r.push("max"),r}var U={REQUIRED:"Required",PATTERN:"Incorrect format",MINLENGTH:"The value is too short",MAXLENGTH:"The value is too long",MIN:"The value is too low",MAX:"The value is too high"},V=function(e){function n(e){var t;return d()(this,n),t=m()(this,y()(n).call(this,e)),T()(x()(t),"objectSizeOf",(function(e){return e?Object.keys(e).length:0})),t.state={focused:!1,changed:!1,error:e.errorMessage},t}return O()(n,e),g()(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.errorMessage!==this.props.errorMessage&&this.setState({error:e.errorMessage})}},{key:"onFocus",value:function(e){var n=this.props.onFocus;n&&n(e),this.setState({focused:!0})}},{key:"onBlur",value:function(e){var n=this.props.onBlur;n&&n(e),this.setState({focused:!1})}},{key:"onChange",value:function(e){this.props.onChange(e),this.setState({changed:!0,focused:!0})}},{key:"validateValue",value:function(e){var n={},t=this.props.field;return z(e,t).forEach((function(e){var r=e.toLowerCase(),a=t.validationMessages&&t.validationMessages[r]||U[r.toUpperCase()];a&&(n[r]=a)})),n}},{key:"updateAlert",value:function(e){var n=this.props,t=n.value,r=n.field,a=n.errorMessage,i=n.warningMessage,s=this.state,l=s.focused,u=s.changed,c=s.error,p=u&&!l?this.validateValue(t):{};return 0<this.objectSizeOf(p)?{type:P.a.Type.ERROR,content:Object.keys(p).map((function(e){return o.a.createElement("div",{key:e},p[e])}))}:c&&a?{type:P.a.Type.ERROR,content:o.a.createElement(o.a.Fragment,null,a)}:i?{type:P.a.Type.WARNING,content:o.a.createElement(o.a.Fragment,null,i)}:l&&r.help&&r.help.message?{type:P.a.Type.INFO,content:o.a.createElement(o.a.Fragment,null,r.help.message)}:l&&r.help&&r.help.list&&0<r.help.list.length?{type:P.a.Type.INFO,content:r.help.list.map((function(e,n){return o.a.createElement("div",{key:n},e)}))}:l&&r.help&&r.help.do&&0<r.help.do.length&&r.help.dont&&0<r.help.dont.length?{type:P.a.Type.INFO,content:o.a.createElement("div",{className:"m-b-1"},o.a.createElement(A.a,{dos:r.help.do,donts:r.help.dont}))}:l&&e!==M.a.FILE&&r.help&&r.help.image?{type:P.a.Type.INFO,content:o.a.createElement("img",{className:"thumbnail m-y-2",src:"".concat(r.help.image),alt:r.label})}:{type:null,content:null}}},{key:"render",value:function(){var e=this,n=this.props,t=n.name,r=n.field,a=n.value,i=n.locale,s=n.label,l=r.control||C(r),u=this.updateAlert(l),p=!!u.content,d=l!==M.a.FILE&&l!==M.a.UPLOAD&&l!==M.a.CHECKBOX;return o.a.createElement("div",{className:I()("form-group","tw-field-".concat(t),{"has-info":u.type===P.a.Type.INFO&&p,"has-error":u.type===P.a.Type.ERROR&&p,"has-warning":u.type===P.a.Type.WARNING&&p,hidden:r.hidden})},d&&o.a.createElement("label",{className:"control-label"},s),o.a.createElement(F.a,c()({},r,{type:l,name:t,locale:i,value:a,onChange:function(n){return e.onChange(n)},onFocus:function(n){return e.onFocus(n)},onBlur:function(n){return e.onBlur(n)}})),p&&o.a.createElement(P.a,{type:u.type,size:P.a.Size.SMALL,arrow:P.a.ArrowPosition.TOP_LEFT},u.content))}}]),n}(i.Component);T()(V,"propTypes",{name:N.a.string.isRequired,value:N.a.oneOfType([N.a.string,N.a.number,N.a.bool,N.a.object,N.a.shape({value:N.a.any.isRequired,label:N.a.node,icon:N.a.string,currency:N.a.string,note:N.a.node,secondary:N.a.node})]),field:N.a.shape({type:N.a.oneOf(Object.values({STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean"})).isRequired,label:N.a.string.isRequired,required:N.a.bool,disabled:N.a.bool,hidden:N.a.bool,readOnly:N.a.bool,autoComplete:N.a.bool,placeholder:N.a.string,searchPlaceholder:N.a.string,control:N.a.oneOf(Object.values(M.a)),format:N.a.oneOf(Object.values({DATE:"date",PHONE:"phone",BASE_64_URL:"base64url",PASSWORD:"password",EMAIL:"email",URI:"uri"})),displayPattern:N.a.string,help:N.a.shape({message:N.a.string,image:N.a.string,list:N.a.arrayOf(N.a.string),do:N.a.arrayOf(N.a.string),dont:N.a.arrayOf(N.a.string)}),pattern:N.a.string,minLength:N.a.number,maxLength:N.a.number,minimum:N.a.number,maximum:N.a.number,uploadProps:N.a.shape({animationDelay:N.a.number,csButtonText:N.a.string,csFailureText:N.a.string,csSuccessText:N.a.string,csTooLargeMessage:N.a.string,csWrongTypeMessage:N.a.string,httpOptions:N.a.shape({}),maxSize:N.a.number,onCancel:N.a.func,onFailure:N.a.func,onStart:N.a.func,onSuccess:N.a.func,psButtonText:N.a.string,psFailureText:N.a.string,psProcessingText:N.a.string,psSuccessText:N.a.string,size:N.a.string,usAccept:N.a.oneOf(["*","image/*","application/*"]),usButtonText:N.a.string,usDisabled:N.a.bool,usDropMessage:N.a.string,usHelpImage:N.a.string,usLabel:N.a.string,usPlaceholder:N.a.string}),options:N.a.arrayOf(N.a.shape({id:N.a.string,label:N.a.oneOfType([N.a.node,N.a.string]).isRequired,value:N.a.oneOfType([N.a.number,N.a.string,N.a.bool,N.a.object,N.a.instanceOf(Date)]).isRequired,header:N.a.node,icon:N.a.string,currency:N.a.string,note:N.a.node,secondary:N.a.oneOfType([N.a.node,N.a.string]),separator:N.a.bool,disabled:N.a.bool})),size:N.a.oneOf(Object.values(S.a)),validationMessages:N.a.shape({required:N.a.string,pattern:N.a.string,minlength:N.a.string,maxlength:N.a.string,min:N.a.string,max:N.a.string})}).isRequired,locale:N.a.string,countryCode:N.a.string,onChange:N.a.func.isRequired,onFocus:N.a.func,onBlur:N.a.func,errorMessage:N.a.string,warningMessage:N.a.string,label:N.a.string}),T()(V,"defaultProps",{locale:"en-GB",countryCode:null,value:null,errorMessage:null,warningMessage:null,onFocus:null,onBlur:null,label:null});var H=V,W="() => {\n  const [value, setValue] = React.useState('a value');\n  return (\n    <Field\n      value={value}\n      errorMessage=\"\"\n      warningMessage=\"\"\n      label=\"label\"\n      name=\"text\"\n      field={{\n        control: 'text',\n        type: 'string',\n        displayPattern: '',\n        help: {\n          message: '',\n          image: '',\n          list: [],\n          do: ['good', 'much better'],\n          dont: ['not so good', 'erm no!'],\n        },\n        options: [\n          { label: 'Mars', value: 'mars' },\n          { label: 'Earth', value: 'earth' },\n        ],\n        label: 'a label',\n        required: false,\n        disabled: false,\n        hidden: false,\n        readOnly: false,\n        autoComplete: false,\n        placeholder: 'a placeholder',\n        searchPlaceholder: 'search',\n        minLength: null,\n        maxLength: null,\n        minimum: 10,\n        maximum: 99,\n        validationMessages: {\n          required: 'Number is required',\n          minimum: 'Must be 10 or greater',\n          maximum: 'Must be 99 or less',\n        },\n      }}\n      onChange={(value) => setValue(value)}\n    />\n  );\n};\n",_=(o.a.createElement,{name:"Field"}),J={meta:_},Z="wrapper";function Q(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.a)(Z,Object(r.a)({},J,t,{components:n,mdxType:"MDXLayout"}),Object(s.a)("p",null,Object(s.a)("strong",{parentName:"p"},"Note:")," This component is deprecated. It can now be found in ",Object(s.a)("inlineCode",{parentName:"p"},"@transferwise/dynamic-flows"),"."),Object(s.a)(l.b,{code:W,scope:{Field:H},mdxType:"LiveEditorBlock"}),Object(s.a)(l.a,{componentName:"Field",mdxType:"GeneratePropsTable"}))}Q.isMDXComponent=!0},lhM9:function(e,n,t){"use strict";var r=t("iqAf"),a=t("wKDk"),i=t("gPvs"),o=t("LUJA"),s=[].join,l=a!=Object,u=o("join",",");r({target:"Array",proto:!0,forced:l||!u},{join:function(e){return s.call(i(this),void 0===e?",":e)}})},s3Va:function(e,n,t){"use strict";var r=t("iqAf"),a=t("YOaW"),i=t("Hh/Z"),o=t("IwPE"),s=t("iMnF"),l=t("wVfN"),u=t("Sni5"),c=t("604P"),p=t("QHNN"),d=t("XPXG"),f=t("jhkb"),g=d("isConcatSpreadable"),h=f>=51||!a((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),m=p("concat"),v=function(e){if(!o(e))return!1;var n=e[g];return void 0!==n?!!n:i(e)};r({target:"Array",proto:!0,forced:!h||!m},{concat:function(e){var n,t,r,a,i,o=s(this),p=c(o,0),d=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?o:arguments[n],v(i)){if(d+(a=l(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(t=0;t<a;t++,d++)t in i&&u(p,d,i[t])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(p,d++,i)}return p.length=d,p}})},xsFy:function(e,n,t){"use strict";var r=t("rF7u"),a=t("0XIR"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,l=function(){var e=/a/,n=/b*/g;return i.call(e,"a"),i.call(n,"a"),0!==e.lastIndex||0!==n.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,c=void 0!==/()??/.exec("")[1];(l||c||u)&&(s=function(e){var n,t,a,s,p=this,d=u&&p.sticky,f=r.call(p),g=p.source,h=0,m=e;return d&&(-1===(f=f.replace("y","")).indexOf("g")&&(f+="g"),m=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(g="(?: "+g+")",m=" "+m,h++),t=new RegExp("^(?:"+g+")",f)),c&&(t=new RegExp("^"+g+"$(?!\\s)",f)),l&&(n=p.lastIndex),a=i.call(d?t:p,m),d?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=p.lastIndex,p.lastIndex+=a[0].length):p.lastIndex=0:l&&a&&(p.lastIndex=p.global?a.index+a[0].length:n),c&&a&&a.length>1&&o.call(a[0],t,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),e.exports=s},zRLi:function(e,n,t){var r=t("YFxH"),a=t("4s/Q"),i=function(e){return function(n,t){var i,o,s=String(a(n)),l=r(t),u=s.length;return l<0||l>=u?e?"":void 0:(i=s.charCodeAt(l))<55296||i>56319||l+1===u||(o=s.charCodeAt(l+1))<56320||o>57343?e?s.charAt(l):i:e?s.slice(l,l+2):o-56320+(i-55296<<10)+65536}};e.exports={codeAt:i(!1),charAt:i(!0)}}}]);