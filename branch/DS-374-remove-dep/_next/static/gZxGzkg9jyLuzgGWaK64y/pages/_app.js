(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{0:function(e,t,r){r("ZHK4"),e.exports=r("7xIC")},"1TCz":function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return(i="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function o(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.r(t);var l=r("ERkP"),u=r.n(l),f=r("Khd+"),d=r.n(f),p=r("ysqo"),h=r.n(p),m=r("7xIC"),v=r("jvFD"),b=r.n(v),g=u.a.createElement,y=function(e){var t=e.href,r=e.children;return g(b.a,{href:"/neptune-web/branch/DS-374-remove-dep"+t,prefetch:!1},r)},w=r("JBNX"),k=[{title:"Getting started",dir:""},{title:"React Components",dir:"components"},{title:"CSS Components",dir:"css"}],C=u.a.createElement,A=Object(m.withRouter)((function(e){var t=e.router.pathname,r=e.title,n=e.slug;return C("div",{className:"Sidebar__Fixed"},C("div",{className:"Sidebar__Header"},C("h5",{className:"Sidebar__Title"},r)),C("div",{className:"Sidebar__Inner"},C("ul",{className:"Nav"},function(e,t){return Object(w.a)().filter((function(e){return e.dir===t})).map((function(r,n){var a=r.component,i="/".concat(t,"/").concat(a.meta.name.replace(/[^A-Z0-9]+/gi,"")),o=e===i;return C("li",{key:n.toString()},C(y,{href:i},C("a",{className:"Nav__Link ".concat(o?"active":null)},a.meta.name," ",a.meta.isPlaceholder&&"*",a.meta.isBeta&&C("span",{className:"badge badge-success"},"beta"))))}))}(t,n))))})),x=r("zjfJ"),O=r("W/Kd"),S=r.n(O);var _=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)===0){var t,r=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(r,t),this.tags.push(r)}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(n);try{var i=105===e.charCodeAt(1)&&64===e.charCodeAt(0);a.insertRule(e,i?0:a.cssRules.length)}catch(o){0}}else n.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();var E=function(e){function t(e,t,n){var a=t.trim().split(h);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var c=0;for(e=0===o?"":e[0]+" ";c<i;++c)t[c]=r(e,t[c],n).trim();break;default:var s=c=0;for(t=[];c<i;++c)for(var l=0;l<o;++l)t[s++]=r(e[l]+" ",a[c],n).trim()}return t}function r(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function n(e,t,r,i){var o=e+";",c=2*t+3*r+4*i;if(944===c){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===j||2===j&&a(s,1)?"-webkit-"+s+s:s}if(0===j||2===j&&!a(o,1))return o;switch(c){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(O,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return d.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=o.replace(y,"tb");break;case 232:s=o.replace(y,"tb-rl");break;case 220:s=o.replace(y,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,c=(s=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<c?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(C,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(C,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===x.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?n(e.replace("stretch","fill-available"),t,r,i).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+i&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),L(2!==t?n:n.replace(A,"$1"),r,t)}function i(e,t){var r=n(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(k," or ($1)").substring(4):"("+t+")"}function o(e,t,r,n,a,i,o,c,l,u){for(var f,d=0,p=t;d<N;++d)switch(f=M[d].call(s,e,p,r,n,a,i,o,c,l,u)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==t)return p}function c(e){return void 0!==(e=e.prefix)&&(L=null,e?"function"!==typeof e?j=1:(j=2,L=e):j=0),c}function s(e,r){var c=e;if(33>c.charCodeAt(0)&&(c=c.trim()),c=[c],0<N){var s=o(-1,r,c,c,_,S,0,0,0,0);void 0!==s&&"string"===typeof s&&(r=s)}var f=function e(r,c,s,f,d){for(var p,h,m,y,k,C=0,A=0,x=0,O=0,M=0,L=0,R=m=p=0,T=0,D=0,I=0,G=0,X=s.length,Y=X-1,H="",U="",$="",F="";T<X;){if(h=s.charCodeAt(T),T===Y&&0!==A+O+x+C&&(0!==A&&(h=47===A?10:47),O=x=C=0,X++,Y++),0===A+O+x+C){if(T===Y&&(0<D&&(H=H.replace(u,"")),0<H.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:H+=s.charAt(T)}h=59}switch(h){case 123:for(p=(H=H.trim()).charCodeAt(0),m=1,G=++T;T<X;){switch(h=s.charCodeAt(T)){case 123:m++;break;case 125:m--;break;case 47:switch(h=s.charCodeAt(T+1)){case 42:case 47:e:{for(R=T+1;R<Y;++R)switch(s.charCodeAt(R)){case 47:if(42===h&&42===s.charCodeAt(R-1)&&T+2!==R){T=R+1;break e}break;case 10:if(47===h){T=R+1;break e}}T=R}}break;case 91:h++;case 40:h++;case 34:case 39:for(;T++<Y&&s.charCodeAt(T)!==h;);}if(0===m)break;T++}switch(m=s.substring(G,T),0===p&&(p=(H=H.replace(l,"").trim()).charCodeAt(0)),p){case 64:switch(0<D&&(H=H.replace(u,"")),h=H.charCodeAt(1)){case 100:case 109:case 115:case 45:D=c;break;default:D=P}if(G=(m=e(c,D,m,h,d+1)).length,0<N&&(k=o(3,m,D=t(P,H,I),c,_,S,G,h,d,f),H=D.join(""),void 0!==k&&0===(G=(m=k.trim()).length)&&(h=0,m="")),0<G)switch(h){case 115:H=H.replace(w,i);case 100:case 109:case 45:m=H+"{"+m+"}";break;case 107:m=(H=H.replace(v,"$1 $2"))+"{"+m+"}",m=1===j||2===j&&a("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=H+m,112===f&&(U+=m,m="")}else m="";break;default:m=e(c,t(c,H,I),m,f,d+1)}$+=m,m=I=D=R=p=0,H="",h=s.charCodeAt(++T);break;case 125:case 59:if(1<(G=(H=(0<D?H.replace(u,""):H).trim()).length))switch(0===R&&(p=H.charCodeAt(0),45===p||96<p&&123>p)&&(G=(H=H.replace(" ",":")).length),0<N&&void 0!==(k=o(1,H,c,r,_,S,U.length,f,d,f))&&0===(G=(H=k.trim()).length)&&(H="\0\0"),p=H.charCodeAt(0),h=H.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){F+=H+s.charAt(T);break}default:58!==H.charCodeAt(G-1)&&(U+=n(H,p,h,H.charCodeAt(2)))}I=D=R=p=0,H="",h=s.charCodeAt(++T)}}switch(h){case 13:case 10:47===A?A=0:0===1+p&&107!==f&&0<H.length&&(D=1,H+="\0"),0<N*z&&o(0,H,c,r,_,S,U.length,f,d,f),S=1,_++;break;case 59:case 125:if(0===A+O+x+C){S++;break}default:switch(S++,y=s.charAt(T),h){case 9:case 32:if(0===O+C+A)switch(M){case 44:case 58:case 9:case 32:y="";break;default:32!==h&&(y=" ")}break;case 0:y="\\0";break;case 12:y="\\f";break;case 11:y="\\v";break;case 38:0===O+A+C&&(D=I=1,y="\f"+y);break;case 108:if(0===O+A+C+E&&0<R)switch(T-R){case 2:112===M&&58===s.charCodeAt(T-3)&&(E=M);case 8:111===L&&(E=L)}break;case 58:0===O+A+C&&(R=T);break;case 44:0===A+x+O+C&&(D=1,y+="\r");break;case 34:case 39:0===A&&(O=O===h?0:0===O?h:O);break;case 91:0===O+A+x&&C++;break;case 93:0===O+A+x&&C--;break;case 41:0===O+A+C&&x--;break;case 40:if(0===O+A+C){if(0===p)switch(2*M+3*L){case 533:break;default:p=1}x++}break;case 64:0===A+x+O+C+R+m&&(m=1);break;case 42:case 47:if(!(0<O+C+x))switch(A){case 0:switch(2*h+3*s.charCodeAt(T+1)){case 235:A=47;break;case 220:G=T,A=42}break;case 42:47===h&&42===M&&G+2!==T&&(33===s.charCodeAt(G+2)&&(U+=s.substring(G,T+1)),y="",A=0)}}0===A&&(H+=y)}L=M,M=h,T++}if(0<(G=U.length)){if(D=c,0<N&&(void 0!==(k=o(2,U,D,r,_,S,G,f,d,f))&&0===(U=k).length))return F+U+$;if(U=D.join(",")+"{"+U+"}",0!==j*E){switch(2!==j||a(U,2)||(E=0),E){case 111:U=U.replace(g,":-moz-$1")+U;break;case 112:U=U.replace(b,"::-webkit-input-$1")+U.replace(b,"::-moz-$1")+U.replace(b,":-ms-input-$1")+U}E=0}}return F+U+$}(P,c,r,0,0);return 0<N&&(void 0!==(s=o(-2,f,c,c,_,S,f.length,0,0,0))&&(f=s)),"",E=0,S=_=1,f}var l=/^\0+/g,u=/[\0\r\f]/g,f=/: */g,d=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,g=/:(read-only)/g,y=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,C=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,x=/stretch|:\s*\w+\-(?:conte|avail)/,O=/([^-])(image-set\()/,S=1,_=1,E=0,j=1,P=[],M=[],N=0,L=null,z=0;return s.use=function e(t){switch(t){case void 0:case null:N=M.length=0;break;default:if("function"===typeof t)M[N++]=t;else if("object"===typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else z=0|!!t}return e},s.set=c,void 0!==e&&c(e),s};function j(e){e&&P.current.insert(e+"}")}var P={current:null},M=function(e,t,r,n,a,i,o,c,s,l){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return P.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===c)return t+"/*|*/";break;case 3:switch(c){case 102:case 112:return P.current.insert(r[0]+t),"";default:return t+(0===l?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(j)}},N=function(e){void 0===e&&(e={});var t,r=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var n=new E(t);var a,i={};a=e.container||document.head;var o,c=document.querySelectorAll("style[data-emotion-"+r+"]");Array.prototype.forEach.call(c,(function(e){e.getAttribute("data-emotion-"+r).split(" ").forEach((function(e){i[e]=!0})),e.parentNode!==a&&a.appendChild(e)})),n.use(e.stylisPlugins)(M),o=function(e,t,r,a){var i=t.name;P.current=r,n(e,t.styles),a&&(s.inserted[i]=!0)};var s={key:r,sheet:new _({key:r,container:a,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:i,registered:{},insert:o};return s};function L(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]):n+=r+" "})),n}var z=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var a=t;do{e.insert("."+n,a,e.sheet,!0);a=a.next}while(void 0!==a)}};var R=function(e){for(var t,r=e.length,n=r^r,a=0;r>=4;)t=1540483477*(65535&(t=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24))+((1540483477*(t>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),r-=4,++a;switch(r){case 3:n^=(255&e.charCodeAt(a+2))<<16;case 2:n^=(255&e.charCodeAt(a+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(a)))+((1540483477*(n>>>16)&65535)<<16)}return n=1540483477*(65535&(n^=n>>>13))+((1540483477*(n>>>16)&65535)<<16),((n^=n>>>15)>>>0).toString(36)},T={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var D=/[A-Z]|^ms/g,I=/_EMO_([^_]+?)_([^]*?)_EMO_/g,G=function(e){return 45===e.charCodeAt(1)},X=function(e){return null!=e&&"boolean"!==typeof e},Y=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return G(e)?e:e.replace(D,"-$&").toLowerCase()})),H=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(I,(function(e,t,r){return $={name:t,styles:r,next:$},t}))}return 1===T[e]||G(e)||"number"!==typeof t||0===t?t:t+"px"};function U(e,t,r,n){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return $={name:r.name,styles:r.styles,next:$},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)$={name:a.name,styles:a.styles,next:$},a=a.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=U(e,t,r[a],!1);else for(var i in r){var o=r[i];if("object"!==typeof o)null!=t&&void 0!==t[o]?n+=i+"{"+t[o]+"}":X(o)&&(n+=Y(i)+":"+H(i,o)+";");else if(!Array.isArray(o)||"string"!==typeof o[0]||null!=t&&void 0!==t[o[0]]){var c=U(e,t,o,!1);switch(i){case"animation":case"animationName":n+=Y(i)+":"+c+";";break;default:n+=i+"{"+c+"}"}}else for(var s=0;s<o.length;s++)X(o[s])&&(n+=Y(i)+":"+H(i,o[s])+";")}return n}(e,t,r);case"function":if(void 0!==e){var i=$,o=r(e);return $=i,U(e,t,o,n)}break;case"string":}if(null==t)return r;var c=t[r];return void 0===c||n?r:c}var $,F=/label:\s*([^\s;\n{]+)\s*;/g;var W=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";$=void 0;var i=e[0];null==i||void 0===i.raw?(n=!1,a+=U(r,t,i,!1)):a+=i[0];for(var o=1;o<e.length;o++)a+=U(r,t,e[o],46===a.charCodeAt(a.length-1)),n&&(a+=i[o]);F.lastIndex=0;for(var c,s="";null!==(c=F.exec(a));)s+="-"+c[1];return{name:R(a)+s,styles:a,next:$}};var V=Object(l.createContext)("undefined"!==typeof HTMLElement?N():null),B=Object(l.createContext)({}),K=(V.Provider,function(e){return Object(l.forwardRef)((function(t,r){return Object(l.createElement)(V.Consumer,null,(function(n){return e(t,n,r)}))}))}),q="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",J=Object.prototype.hasOwnProperty,Z=function(e,t,r,n){var a=null===r?t.css:t.css(r);"string"===typeof a&&void 0!==e.registered[a]&&(a=e.registered[a]);var i=t[q],o=[a],c="";"string"===typeof t.className?c=L(e.registered,o,t.className):null!=t.className&&(c=t.className+" ");var s=W(o);z(e,s,"string"===typeof i);c+=e.key+"-"+s.name;var u={};for(var f in t)J.call(t,f)&&"css"!==f&&f!==q&&(u[f]=t[f]);return u.ref=n,u.className=c,Object(l.createElement)(i,u)},Q=K((function(e,t,r){return"function"===typeof e.css?Object(l.createElement)(B.Consumer,null,(function(n){return Z(t,e,n,r)})):Z(t,e,null,r)}));var ee=function(e,t){var r=arguments;if(null==t||!J.call(t,"css"))return l.createElement.apply(void 0,r);var n=r.length,a=new Array(n);a[0]=Q;var i={};for(var o in t)J.call(t,o)&&(i[o]=t[o]);i[q]=e,a[1]=i;for(var c=2;c<n;c++)a[c]=r[c];return l.createElement.apply(null,a)},te=(l.Component,function e(t){for(var r=t.length,n=0,a="";n<r;n++){var i=t[n];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var c in o="",i)i[c]&&c&&(o&&(o+=" "),o+=c);break;default:o=i}o&&(a&&(a+=" "),a+=o)}}return a});function re(e,t,r){var n=[],a=L(e,n,r);return n.length<2?r:a+t(n)}K((function(e,t){return Object(l.createElement)(B.Consumer,null,(function(r){var n=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var a=W(r,t.registered);return z(t,a,!1),t.key+"-"+a.name},a={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return re(t.registered,n,te(r))},theme:r},i=e.children(a);return!0,i}))}));var ne=["row","column","row-reverse","column","column-reverse"],ae={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"},ie={EXTRA_SMALL:480,SMALL:576,MEDIUM:768,LARGE:992,EXTRA_LARGE:1200};u.a.createElement;function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(r,!0).forEach((function(t){Object(x.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var se=Object.values(ie).map((function(e){return"@media (min-width: ".concat(e,"px)")})),le=function e(t){var r,n=t.as,a=t.direction,i=t.children,o=t.marginX,c=t.paddingX,s=t.marginY,l=t.paddingY,f=t.customMediaQueries,d=t.className,p=function(e){return a&&a[e]&&ne.indexOf(a[e])>-1?a[e]:"row"},h=(r={flexDirection:p(e.Size.SMALLEST)},Object(x.a)(r,f[0],{flexDirection:p(e.Size.EXTRA_SMALL)}),Object(x.a)(r,f[1],{flexDirection:p(e.Size.SMALL)}),Object(x.a)(r,f[2],{flexDirection:p(e.Size.MEDIUM)}),Object(x.a)(r,f[3],{flexDirection:p(e.Size.LARGE)}),Object(x.a)(r,f[4],{flexDirection:p(e.Size.EXTRA_LARGE)}),r);return h.display="flex",ee(n,{className:d,css:h},u.a.Children.map(i,(function(e){if(e&&e.type&&"Box"===e.type.name){var t=ce({},e.props,{marginX:o,paddingX:c,marginY:s,paddingY:l});return u.a.cloneElement(e,t)}return e})))};le.Size=ce({},ae,{SMALLEST:"default"}),le.defaultProps={as:"div",children:null,marginX:0,paddingX:0,marginY:0,paddingY:0,customMediaQueries:se,className:""};var ue=le;u.a.createElement;function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(r,!0).forEach((function(t){Object(x.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe=Object.values(ie).map((function(e){return"@media (min-width: ".concat(e,"px)")})),he=function e(t){var r,n=t.as,a=t.size,i=t.justifyContent,o=t.alignItems,c=t.children,s=t.className,l=t.marginX,u=t.paddingX,f=t.marginY,d=t.paddingY,p=t.customMediaQueries,h=function(e){var t={flex:0,display:"none"};return a&&a[e]&&(t.flex=a[e]<=1?"0 1 ".concat(100*a[e],"%"):"0 0 ".concat(a[e],"px"),t.display="flex"),t},m=de({},h(e.Size.SMALLEST),(r={},Object(x.a)(r,p[0],de({},h(e.Size.EXTRA_SMALL))),Object(x.a)(r,p[1],de({},h(e.Size.SMALL))),Object(x.a)(r,p[2],de({},h(e.Size.MEDIUM))),Object(x.a)(r,p[3],de({},h(e.Size.LARGE))),Object(x.a)(r,p[4],de({},h(e.Size.EXTRA_LARGE))),r));return i&&(m.justifyContent=i),o&&(m.alignItems=o),m.margin="".concat(8*f,"px  ").concat(8*l,"px"),m.padding="".concat(8*d,"px  ").concat(8*u,"px"),a?ee(n,{className:s,css:m},c):null};he.Size=de({},ae,{SMALLEST:"default"}),he.defaultProps={justifyContent:null,alignItems:null,children:null,className:"",paddingX:0,marginX:0,paddingY:0,marginY:0,as:"div",customMediaQueries:pe};var me=he,ve=u.a.createElement,be={default:"row",xs:"row",sm:"row",md:"row",lg:"row"},ge=function(e){var t=e.firstContent,r=e.secondContent,n=e.thirdContent;return ve(ue,{direction:be,marginX:0,paddingX:0,paddingY:0,marginY:0,className:"PageLayout__Inner"},t&&ve(me,{size:{default:0,xs:0,sm:0,md:0,lg:200,xl:200},justifyContent:"flex-start",alignItems:"flex-start",tagHtml:"header",className:"Header"},t),r&&ve(me,{size:{default:0,xs:0,sm:200,md:200,lg:200,xl:200},justifyContent:"flex-start",alignItems:"flex-start",className:"Sidebar"},r),ve(ue,{direction:be,marginX:0,paddingX:0,paddingY:0,marginY:0,className:"Flex__Container"},ve(me,{size:{default:1,xs:1,sm:1,md:1,lg:1,xl:1},justifyContent:"flex-start",alignItems:"flex-start",className:"Box__Container"},n)))};ge.defaultProps={firstContent:null,secondContent:null,thirdContent:null};var ye=ge,we=u.a.createElement,ke=function(e){return we("svg",e,we("path",{d:"M251.173 65.957h-3.679v19.561h3.679V65.957zM251.338 59.343h-4.009v3.968h4.009v-3.968zM241.198 59.343l-4.576 20.337h-.165l-4.74-13.723h-3.288l-5.41 13.723h-.165l-3.627-20.337h-3.958l4.957 26.175h3.679l5.864-14.488h.165l5.07 14.488h3.679l6.297-26.175h-3.782zM190.062 82.656c-3.565 0-6.018-2.811-6.018-6.893 0-3.803 2.123-7.058 5.575-7.058 3.958 0 5.019 3.307 5.153 5.343h-6.843l-1.278 2.976h11.862c.051-.775.051-1.034.051-1.374 0-5.622-2.844-10.086-8.976-10.086-5.297 0-9.367 4.299-9.367 10.2 0 6.065 3.906 10.085 9.47 10.085a10.344 10.344 0 0 0 8.08-3.359l-2.226-2.149a7.503 7.503 0 0 1-5.462 2.315M175.47 65.574c0-2.428 1.175-3.802 3.401-3.802 1.103.034 2.195.24 3.236.61l1.164-2.698a10.652 10.652 0 0 0-4.514-1.033c-3.74 0-6.966 1.87-6.966 6.892v.61h-2.453v3.1h2.453v16.255h3.679V69.263h3.731l1.277-3.1h-5.018l.01-.589zM142.297 65.574a6.434 6.434 0 0 0-5.822 2.821h-.165v-2.48h-3.545v19.562h3.71v-10.54c0-3.855 1.947-6.2 5.018-6.2 2.896 0 4.627 1.539 4.627 5.166v11.625h3.679V73.231c0-4.96-2.895-7.657-7.471-7.657M124.85 77.975c0 2.924-2.401 4.794-5.74 4.794-2.009 0-3.73-.94-3.73-3.255 0-2.15 1.782-3.585 4.513-3.585 2.453 0 4.071.444 4.957 1.105v.94zm-5.152-12.4a16.567 16.567 0 0 0-5.802.94l.608 2.976c1.51-.5 3.088-.761 4.678-.775 3.092 0 5.689 1.436 5.689 4.63v.547a13.008 13.008 0 0 0-4.854-.879c-5.019 0-8.306 2.532-8.306 6.666 0 4.298 3.236 6.2 6.853 6.2a7.389 7.389 0 0 0 6.183-2.646h.165v2.263h3.566V73.283c0-5.342-3.453-7.72-8.75-7.72l-.03.011zM79.352 59.343v3.524h8.255v22.651h3.905V62.867h8.245v-3.524H79.352zM111.855 66.329a8.359 8.359 0 0 0-3.174-.548 6.29 6.29 0 0 0-5.153 2.315h-.164v-2.14h-3.566v19.562h3.7V74.833c0-4.133 2.009-5.787 4.956-5.787a9.637 9.637 0 0 1 2.566.331l.835-3.048zM214.27 66.4a8.612 8.612 0 0 0-3.174-.609 6.742 6.742 0 0 0-5.349 2.315h-.227v-2.15h-3.565v19.562h3.679V74.833c0-4.133 2.226-5.787 5.152-5.787a9.573 9.573 0 0 1 2.566.331l.918-2.976zM281.316 82.656c-3.565 0-6.018-2.811-6.018-6.893 0-3.803 2.123-7.058 5.575-7.058 3.957 0 5.019 3.307 5.153 5.343h-6.843l-1.278 2.976h11.862c.051-.775.051-1.034.051-1.374 0-5.622-2.844-10.086-8.976-10.086-5.297 0-9.367 4.299-9.367 10.2 0 6.065 3.905 10.085 9.481 10.085a10.344 10.344 0 0 0 8.079-3.359l-2.226-2.149a7.503 7.503 0 0 1-5.462 2.315M161.032 74.224c-2.844-.383-4.513-.94-4.513-2.811 0-1.705 1.669-2.76 3.74-2.76a9.442 9.442 0 0 1 5.153 1.654l1.783-2.645a11.244 11.244 0 0 0-6.853-2.067c-4.298 0-7.472 2.594-7.472 6.004 0 3.916 2.515 5.166 6.75 5.838 2.402.383 4.463.662 4.463 2.697 0 1.705-1.67 2.646-3.906 2.646a9.33 9.33 0 0 1-6.018-2.067l-1.618 2.924c1.391 1.271 4.297 2.263 7.523 2.263 4.462 0 7.698-2.593 7.698-6.065 0-4.185-3.35-5.167-6.689-5.57M262.828 74.234c-2.844-.382-4.513-.94-4.513-2.81 0-1.706 1.669-2.76 3.741-2.76a9.44 9.44 0 0 1 5.152 1.653l1.783-2.645a11.242 11.242 0 0 0-6.853-2.067c-4.287 0-7.471 2.594-7.471 6.004 0 3.916 2.504 5.167 6.739 5.839 2.401.382 4.463.66 4.463 2.697 0 1.705-1.67 2.645-3.906 2.645a9.321 9.321 0 0 1-6.019-2.067l-1.617 2.925c1.391 1.27 4.287 2.263 7.522 2.263 4.463 0 7.688-2.594 7.688-6.066 0-4.185-3.349-5.167-6.688-5.57",fill:"#fff"}),we("path",{d:"M51.765 45l5.328 8.96-9.327 8.948h16.118l1.525-3.586h-8.904l5.39-5.383-3.154-5.353h14.675L60.535 79.173h4.42L79.353 45H51.765z",fill:"#00B9FF"}))};ke.defaultProps={width:"510",height:"140",viewBox:"0 0 510 140",fill:"none",xmlns:"http://www.w3.org/2000/svg"};var Ce=Object(w.a)(),Ae=Object(m.withRouter)((function(e){var t=e.children,r=e.router.pathname,n="/"===r,a=r.split("/")[1],i=n?"index":r.split("/").pop(),o=Ce.find((function(e){return e.dir===a&&e.slug===i})),c="".concat("https://github.com/transferwise/neptune-web/edit/master/packages/docs/pages").concat(n?"":"/".concat(a),"/").concat(i,".mdx"),s=we("div",{className:"Header__Fixed"},we(y,{href:"/"},we("a",{className:"Logo"},we(ke,null))),we("ul",{className:"Nav Nav--dark"},k.map((function(e){return we("li",{key:e.title},we(y,{href:""===e.dir?"/":"/".concat(e.dir,"/").concat(Ce.find((function(t){return t.dir===e.dir})).slug)},we("a",{className:"Nav__Link ".concat(a===e.dir?"active":null)},e.title)))})))),l=o&&we(A,{title:k.find((function(e){return e.dir===a})).title,slug:a}),u=we("div",{className:"Content"},o&&we("h1",{className:"colored-dot"},o.component.meta.name),o&&o.component.meta.isBeta&&we("span",{className:"badge"},"beta"),t,we("a",{className:"btn btn-default m-t-4",href:c},"Edit on GitHub"));return we(ye,{firstContent:s,secondContent:l,thirdContent:u})})),xe=(r("MvBf"),r("grSd"),r("gDOO"),r("BOPP"),u.a.createElement),Oe=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,c(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),r=t,(a=[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps;return xe(u.a.Fragment,null,xe(h.a,null,xe("title",null,"Neptune Design System \u2014 TransferWise")),xe(Ae,null,xe(t,r)))}}])&&n(r.prototype,a),i&&n(r,i),t}(d.a);t.default=Oe},HaU7:function(e,t,r){"use strict";var n=r("VrFO"),a=r("Y9Ll"),i=r("N+ot"),o=r("AuHH"),c=r("5Yy7"),s=r("VtSi"),l=r("IGGJ");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=h,t.default=void 0;var u=l(r("ERkP")),f=r("fvxO");function d(e){var t,r,n;return s.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.Component,r=e.ctx,a.next=3,s.awrap((0,f.loadGetInitialProps)(t,r));case 3:return n=a.sent,a.abrupt("return",{pageProps:n});case 5:case"end":return a.stop()}}))}t.AppInitialProps=f.AppInitialProps;var p=function(e){function t(){return n(this,t),i(this,o(t).apply(this,arguments))}return c(t,e),a(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,a=e.__N_SSG,i=e.__N_SSP;return u.default.createElement(r,Object.assign({},n,a||i?{}:{url:h(t)}))}}]),t}(u.default.Component);function h(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",a=r||t;return e.push(n,a)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",a=r||t;return e.replace(n,a)}}}t.default=p,p.origGetInitialProps=d,p.getInitialProps=d},J9Yr:function(e,t,r){"use strict";var n=r("VrFO"),a=r("N+ot"),i=r("AuHH"),o=r("1Pcy"),c=r("Y9Ll"),s=r("5Yy7"),l=r("RhWx");Object.defineProperty(t,"__esModule",{value:!0});var u=r("ERkP"),f=!1;t.default=function(){var e,t=new Set;function r(r){e=r.props.reduceComponentsToState(l(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return function(l){function u(e){var c;return n(this,u),c=a(this,i(u).call(this,e)),f&&(t.add(o(c)),r(o(c))),c}return s(u,l),c(u,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),c(u,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),u}(u.Component)}},KeDb:function(e,t,r){"use strict";var n=r("VrFO"),a=r("Y9Ll"),i=r("N+ot"),o=r("AuHH"),c=r("5Yy7"),s=r("IGGJ"),l=r("yWCo");t.__esModule=!0,t.default=void 0;var u,f=l(r("ERkP")),d=r("cRaD"),p=r("fvxO"),h=s(r("7xIC"));function m(e){return e&&"object"===typeof e?(0,p.formatWithValidation)(e):e}var v=new Map,b=window.IntersectionObserver,g={};function y(){return u||(b?u=new b((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){function t(e){var r;return n(this,t),(r=i(this,o(t).call(this,e))).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,r=null,n=null;return function(a,i){if(n&&a===t&&i===r)return n;var o=e(a,i);return t=a,r=i,n=o,o}}((function(e,t){return{href:m(e),as:t?m(t):t}})),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,a=t.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=r.formatUrls(r.props.href,r.props.as),o=i.href,c=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,p.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(o)){var s=window.location.pathname;o=(0,d.resolve)(s,o),c=c?(0,d.resolve)(s,c):o,e.preventDefault();var l=r.props.scroll;null==l&&(l=c.indexOf("#")<0),h.default[r.props.replace?"replace":"push"](o,c,{shallow:r.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return c(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,a=(0,d.resolve)(e,r);return[a,n?(0,d.resolve)(e,n):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=y();return r?(r.observe(e),v.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var i=f.Children.only(t),o={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||n),f.default.cloneElement(i,o)}}]),t}(f.Component);t.default=w},"Khd+":function(e,t,r){e.exports=r("HaU7")},RhWx:function(e,t,r){var n=r("tGbD"),a=r("twbh"),i=r("d8WC");e.exports=function(e){return n(e)||a(e)||i()}},TZT2:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("ERkP"));t.AmpStateContext=a.createContext({})},ZHK4:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},d8WC:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},dq4L:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("ERkP")),i=r("TZT2");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,i=e.hasQuery;return r||a&&(void 0!==i&&i)}t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))}},jvFD:function(e,t,r){e.exports=r("KeDb")},tGbD:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},twbh:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},ysqo:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r("ERkP")),i=n(r("J9Yr")),o=r("TZT2"),c=r("op+c"),s=r("dq4L");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,s=f.length;c<s;c++){var l=f[c];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?i=!1:r.add(l);else{var u=a.props[l],d=n[l]||new Set;d.has(u)?i=!1:(d.add(u),n[l]=d)}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}var p=i.default();function h(e){var t=e.children;return a.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(c.HeadManagerContext.Consumer,null,(function(r){return a.default.createElement(p,{reduceComponentsToState:d,handleStateChange:r,inAmpMode:s.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h}},[[0,0,1,4,7,9,10,3,2,5,6,8,62]]]);