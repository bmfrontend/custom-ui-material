!function t(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.BizComps=e():n.BizComps=e()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function n(){return t.default}:function n(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=345)}([,,,,,,,,,,,,,,function(t,n){function e(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}t.exports=e},,,function(t,n){t.exports=window.LowcodePresetPlugin},function(t,n,e){var r=e(40),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,n){function e(t){return null!=t&&"object"==typeof t}t.exports=e},,function(t,n,e){var r=e(60),o=e(61),i=e(62),c=e(63),a=e(64);function u(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,t.exports=u},function(t,n,e){var r=e(23);function o(t,n){for(var e=t.length;e--;)if(r(t[e][0],n))return e;return-1}t.exports=o},function(t,n){function e(t,n){return t===n||t!=t&&n!=n}t.exports=e},function(t,n,e){var r=e(39),o=e(71),i=e(72),c="[object Null]",a="[object Undefined]",u=r?r.toStringTag:void 0;function s(t){return null==t?void 0===t?a:c:u&&u in Object(t)?o(t):i(t)}t.exports=s},function(t,n,e){var r,o=e(29)(Object,"create");t.exports=o},function(t,n,e){var r=e(86);function o(t,n){var e=t.__data__;return r(n)?e["string"==typeof n?"string":"hash"]:e.map}t.exports=o},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},,function(t,n,e){var r=e(70),o=e(76);function i(t,n){var e=o(t,n);return r(e)?e:void 0}t.exports=i},function(t,n,e){var r=e(24),o=e(14),i="[object AsyncFunction]",c="[object Function]",a="[object GeneratorFunction]",u="[object Proxy]";function s(t){if(!o(t))return!1;var n=r(t);return n==c||n==a||n==i||n==u}t.exports=s},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(42);function o(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}t.exports=o},function(t,n,e){var r=e(30),o=e(47);function i(t){return null!=t&&o(t.length)&&!r(t)}t.exports=i},,,,,function(t,n,e){var r,o,i=e(29)(e(18),"Map");t.exports=i},function(t,n,e){var r,o=e(18).Symbol;t.exports=o},function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(31))},function(t,n,e){var r=e(32),o=e(23);function i(t,n,e){(void 0!==e&&!o(t[n],e)||void 0===e&&!(n in t))&&r(t,n,e)}t.exports=i},function(t,n,e){var r=e(29),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,n,e){var r,o=e(100)(Object.getPrototypeOf,Object);t.exports=o},function(t,n){var e=Object.prototype;function r(t){var n=t&&t.constructor,r;return t===("function"==typeof n&&n.prototype||e)}t.exports=r},function(t,n,e){var r=e(101),o=e(19),i=Object.prototype,c=i.hasOwnProperty,a=i.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&c.call(t,"callee")&&!a.call(t,"callee")};t.exports=u},function(t,n){var e=Array.isArray;t.exports=e},function(t,n){var e=9007199254740991;function r(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}t.exports=r},function(t,n,e){(function(t){var r=e(18),o=e(103),i=n&&!n.nodeType&&n,c=i&&"object"==typeof t&&t&&!t.nodeType&&t,a,u=c&&c.exports===i?r.Buffer:void 0,s,f=(u?u.isBuffer:void 0)||o;t.exports=f}).call(this,e(27)(t))},function(t,n,e){var r=e(105),o=e(106),i=e(107),c=i&&i.isTypedArray,a=c?o(c):r;t.exports=a},function(t,n){function e(t,n){if(("constructor"!==n||"function"!=typeof t[n])&&"__proto__"!=n)return t[n]}t.exports=e},function(t,n,e){var r=e(111),o=e(113),i=e(33);function c(t){return i(t)?r(t,!0):o(t)}t.exports=c},function(t,n){var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function o(t,n){var e=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&r.test(t))&&t>-1&&t%1==0&&t<n}t.exports=o},function(t,n){function e(t){return t}t.exports=e},,,,,function(t,n,e){var r=e(59),o=e(41),i=e(90),c=e(92),a=e(14),u=e(51),s=e(50);function f(t,n,e,p,l){t!==n&&i(n,(function(i,u){if(l||(l=new r),a(i))c(t,n,u,e,f,p,l);else{var v=p?p(s(t,u),i,u+"",t,n,l):void 0;void 0===v&&(v=i),o(t,u,v)}}),u)}t.exports=f},function(t,n,e){var r=e(21),o=e(65),i=e(66),c=e(67),a=e(68),u=e(69);function s(t){var n=this.__data__=new r(t);this.size=n.size}s.prototype.clear=o,s.prototype.delete=i,s.prototype.get=c,s.prototype.has=a,s.prototype.set=u,t.exports=s},function(t,n){function e(){this.__data__=[],this.size=0}t.exports=e},function(t,n,e){var r=e(22),o,i=Array.prototype.splice;function c(t){var n=this.__data__,e=r(n,t),o;return!(e<0)&&(e==n.length-1?n.pop():i.call(n,e,1),--this.size,!0)}t.exports=c},function(t,n,e){var r=e(22);function o(t){var n=this.__data__,e=r(n,t);return e<0?void 0:n[e][1]}t.exports=o},function(t,n,e){var r=e(22);function o(t){return r(this.__data__,t)>-1}t.exports=o},function(t,n,e){var r=e(22);function o(t,n){var e=this.__data__,o=r(e,t);return o<0?(++this.size,e.push([t,n])):e[o][1]=n,this}t.exports=o},function(t,n,e){var r=e(21);function o(){this.__data__=new r,this.size=0}t.exports=o},function(t,n){function e(t){var n=this.__data__,e=n.delete(t);return this.size=n.size,e}t.exports=e},function(t,n){function e(t){return this.__data__.get(t)}t.exports=e},function(t,n){function e(t){return this.__data__.has(t)}t.exports=e},function(t,n,e){var r=e(21),o=e(38),i=e(77),c=200;function a(t,n){var e=this.__data__;if(e instanceof r){var c=e.__data__;if(!o||c.length<199)return c.push([t,n]),this.size=++e.size,this;e=this.__data__=new i(c)}return e.set(t,n),this.size=e.size,this}t.exports=a},function(t,n,e){var r=e(30),o=e(73),i=e(14),c=e(75),a=/[\\^$.*+?()[\]{}|]/g,u=/^\[object .+?Constructor\]$/,s=Function.prototype,f=Object.prototype,p=s.toString,l=f.hasOwnProperty,v=RegExp("^"+p.call(l).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function d(t){return!(!i(t)||o(t))&&(r(t)?v:u).test(c(t));var n}t.exports=d},function(t,n,e){var r=e(39),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,a=r?r.toStringTag:void 0;function u(t){var n=i.call(t,a),e=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=c.call(t);return r&&(n?t[a]=e:delete t[a]),o}t.exports=u},function(t,n){var e,r=Object.prototype.toString;function o(t){return r.call(t)}t.exports=o},function(t,n,e){var r=e(74),o=(i=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"",i;function c(t){return!!o&&o in t}t.exports=c},function(t,n,e){var r,o=e(18)["__core-js_shared__"];t.exports=o},function(t,n){var e,r=Function.prototype.toString;function o(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}t.exports=o},function(t,n){function e(t,n){return null==t?void 0:t[n]}t.exports=e},function(t,n,e){var r=e(78),o=e(85),i=e(87),c=e(88),a=e(89);function u(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,t.exports=u},function(t,n,e){var r=e(79),o=e(21),i=e(38);function c(){this.size=0,this.__data__={hash:new r,map:new(i||o),string:new r}}t.exports=c},function(t,n,e){var r=e(80),o=e(81),i=e(82),c=e(83),a=e(84);function u(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=i,u.prototype.has=c,u.prototype.set=a,t.exports=u},function(t,n,e){var r=e(25);function o(){this.__data__=r?r(null):{},this.size=0}t.exports=o},function(t,n){function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}t.exports=e},function(t,n,e){var r=e(25),o="__lodash_hash_undefined__",i,c=Object.prototype.hasOwnProperty;function a(t){var n=this.__data__;if(r){var e=n[t];return e===o?void 0:e}return c.call(n,t)?n[t]:void 0}t.exports=a},function(t,n,e){var r=e(25),o,i=Object.prototype.hasOwnProperty;function c(t){var n=this.__data__;return r?void 0!==n[t]:i.call(n,t)}t.exports=c},function(t,n,e){var r=e(25),o="__lodash_hash_undefined__";function i(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=r&&void 0===n?o:n,this}t.exports=i},function(t,n,e){var r=e(26);function o(t){var n=r(this,t).delete(t);return this.size-=n?1:0,n}t.exports=o},function(t,n){function e(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}t.exports=e},function(t,n,e){var r=e(26);function o(t){return r(this,t).get(t)}t.exports=o},function(t,n,e){var r=e(26);function o(t){return r(this,t).has(t)}t.exports=o},function(t,n,e){var r=e(26);function o(t,n){var e=r(this,t),o=e.size;return e.set(t,n),this.size+=e.size==o?0:1,this}t.exports=o},function(t,n,e){var r,o=e(91)();t.exports=o},function(t,n){function e(t){return function(n,e,r){for(var o=-1,i=Object(n),c=r(n),a=c.length;a--;){var u=c[t?a:++o];if(!1===e(i[u],u,i))break}return n}}t.exports=e},function(t,n,e){var r=e(41),o=e(93),i=e(94),c=e(97),a=e(98),u=e(45),s=e(46),f=e(102),p=e(48),l=e(30),v=e(14),d=e(104),y=e(49),h=e(50),b=e(108);function x(t,n,e,x,_,g,m){var j=h(t,e),w=h(n,e),O=m.get(w);if(O)r(t,e,O);else{var S=g?g(j,w,e+"",t,n,m):void 0,A=void 0===S;if(A){var P=s(w),k=!P&&p(w),z=!P&&!k&&y(w);S=w,P||k||z?s(j)?S=j:f(j)?S=c(j):k?(A=!1,S=o(w,!0)):z?(A=!1,S=i(w,!0)):S=[]:d(w)||u(w)?(S=j,u(j)?S=b(j):v(j)&&!l(j)||(S=a(w))):A=!1}A&&(m.set(w,S),_(S,w,x,g,m),m.delete(w)),r(t,e,S)}}t.exports=x},function(t,n,e){(function(t){var r=e(18),o=n&&!n.nodeType&&n,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,c,a=i&&i.exports===o?r.Buffer:void 0,u=a?a.allocUnsafe:void 0;function s(t,n){if(n)return t.slice();var e=t.length,r=u?u(e):new t.constructor(e);return t.copy(r),r}t.exports=s}).call(this,e(27)(t))},function(t,n,e){var r=e(95);function o(t,n){var e=n?r(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}t.exports=o},function(t,n,e){var r=e(96);function o(t){var n=new t.constructor(t.byteLength);return new r(n).set(new r(t)),n}t.exports=o},function(t,n,e){var r,o=e(18).Uint8Array;t.exports=o},function(t,n){function e(t,n){var e=-1,r=t.length;for(n||(n=Array(r));++e<r;)n[e]=t[e];return n}t.exports=e},function(t,n,e){var r=e(99),o=e(43),i=e(44);function c(t){return"function"!=typeof t.constructor||i(t)?{}:r(o(t))}t.exports=c},function(t,n,e){var r=e(14),o=Object.create,i=function(){function t(){}return function(n){if(!r(n))return{};if(o)return o(n);t.prototype=n;var e=new t;return t.prototype=void 0,e}}();t.exports=i},function(t,n){function e(t,n){return function(e){return t(n(e))}}t.exports=e},function(t,n,e){var r=e(24),o=e(19),i="[object Arguments]";function c(t){return o(t)&&r(t)==i}t.exports=c},function(t,n,e){var r=e(33),o=e(19);function i(t){return o(t)&&r(t)}t.exports=i},function(t,n){function e(){return!1}t.exports=e},function(t,n,e){var r=e(24),o=e(43),i=e(19),c="[object Object]",a=Function.prototype,u=Object.prototype,s=a.toString,f=u.hasOwnProperty,p=s.call(Object);function l(t){if(!i(t)||r(t)!=c)return!1;var n=o(t);if(null===n)return!0;var e=f.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&s.call(e)==p}t.exports=l},function(t,n,e){var r=e(24),o=e(47),i=e(19),c="[object Arguments]",a="[object Array]",u="[object Boolean]",s="[object Date]",f="[object Error]",p="[object Function]",l="[object Map]",v="[object Number]",d="[object Object]",y="[object RegExp]",h="[object Set]",b="[object String]",x="[object WeakMap]",_="[object ArrayBuffer]",g="[object DataView]",m,j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",A="[object Uint8Array]",P="[object Uint8ClampedArray]",k="[object Uint16Array]",z="[object Uint32Array]",U={};function F(t){return i(t)&&o(t.length)&&!!U[r(t)]}U["[object Float32Array]"]=U[j]=U[w]=U[O]=U[S]=U[A]=U[P]=U[k]=U[z]=!0,U[c]=U[a]=U[_]=U[u]=U[g]=U[s]=U[f]=U[p]=U[l]=U[v]=U[d]=U[y]=U[h]=U[b]=U[x]=!1,t.exports=F},function(t,n){function e(t){return function(n){return t(n)}}t.exports=e},function(t,n,e){(function(t){var r=e(40),o=n&&!n.nodeType&&n,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,c,a=i&&i.exports===o&&r.process,u=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=u}).call(this,e(27)(t))},function(t,n,e){var r=e(109),o=e(51);function i(t){return r(t,o(t))}t.exports=i},function(t,n,e){var r=e(110),o=e(32);function i(t,n,e,i){var c=!e;e||(e={});for(var a=-1,u=n.length;++a<u;){var s=n[a],f=i?i(e[s],t[s],s,e,t):void 0;void 0===f&&(f=t[s]),c?o(e,s,f):r(e,s,f)}return e}t.exports=i},function(t,n,e){var r=e(32),o=e(23),i,c=Object.prototype.hasOwnProperty;function a(t,n,e){var i=t[n];c.call(t,n)&&o(i,e)&&(void 0!==e||n in t)||r(t,n,e)}t.exports=a},function(t,n,e){var r=e(112),o=e(45),i=e(46),c=e(48),a=e(52),u=e(49),s,f=Object.prototype.hasOwnProperty;function p(t,n){var e=i(t),s=!e&&o(t),p=!e&&!s&&c(t),l=!e&&!s&&!p&&u(t),v=e||s||p||l,d=v?r(t.length,String):[],y=d.length;for(var h in t)!n&&!f.call(t,h)||v&&("length"==h||p&&("offset"==h||"parent"==h)||l&&("buffer"==h||"byteLength"==h||"byteOffset"==h)||a(h,y))||d.push(h);return d}t.exports=p},function(t,n){function e(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}t.exports=e},function(t,n,e){var r=e(14),o=e(44),i=e(114),c,a=Object.prototype.hasOwnProperty;function u(t){if(!r(t))return i(t);var n=o(t),e=[];for(var c in t)("constructor"!=c||!n&&a.call(t,c))&&e.push(c);return e}t.exports=u},function(t,n){function e(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}t.exports=e},function(t,n,e){var r=e(116),o=e(123);function i(t){return r((function(n,e){var r=-1,i=e.length,c=i>1?e[i-1]:void 0,a=i>2?e[2]:void 0;for(c=t.length>3&&"function"==typeof c?(i--,c):void 0,a&&o(e[0],e[1],a)&&(c=i<3?void 0:c,i=1),n=Object(n);++r<i;){var u=e[r];u&&t(n,u,r,c)}return n}))}t.exports=i},function(t,n,e){var r=e(53),o=e(117),i=e(119);function c(t,n){return i(o(t,n,r),t+"")}t.exports=c},function(t,n,e){var r=e(118),o=Math.max;function i(t,n,e){return n=o(void 0===n?t.length-1:n,0),function(){for(var i=arguments,c=-1,a=o(i.length-n,0),u=Array(a);++c<a;)u[c]=i[n+c];c=-1;for(var s=Array(n+1);++c<n;)s[c]=i[c];return s[n]=e(u),r(t,this,s)}}t.exports=i},function(t,n){function e(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}t.exports=e},function(t,n,e){var r=e(120),o,i=e(122)(r);t.exports=i},function(t,n,e){var r=e(121),o=e(42),i=e(53),c=o?function(t,n){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(n),writable:!0})}:i;t.exports=c},function(t,n){function e(t){return function(){return t}}t.exports=e},function(t,n){var e=800,r=16,o=Date.now;function i(t){var n=0,e=0;return function(){var r=o(),i=16-(r-e);if(e=r,i>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}t.exports=i},function(t,n,e){var r=e(23),o=e(33),i=e(52),c=e(14);function a(t,n,e){if(!c(e))return!1;var a=typeof n;return!!("number"==a?o(e)&&i(n,e.length):"string"==a&&n in e)&&r(e[n],t)}t.exports=a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){var r=e(58),o,i=e(115)((function(t,n,e,o){r(t,n,e,o)}));t.exports=i},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){t.exports=e(346)},function(t,n,e){"use strict";e.r(n);var r=e(17),o=e.n(r),i=e(294),c=e.n(i);const a=new URLSearchParams(window.location.search),u="default";let s=a.get("platform")||"",f=a.get("metaType")||s||"";const p={meta:"/Users/apple/project/APP/bm-custom-ui-material/.tmp/meta.js"},l=f?"meta."+f:"meta";p[l]||(console.warn(`[@alifd/build-plugin-lowcode] metaType can only in [${Object.keys(p)}], current metaType is ${l}, fullback to default.`),f="");const v=!!r.material,d=!1,y="react",h=[{package:"moment",version:"2.24.0",urls:["https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js"],library:"moment"},{package:"lodash",library:"_",urls:["https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js"]},{title:"fusion\u7ec4\u4ef6\u5e93",package:"@alifd/next",version:"1.25.23",urls:["https://g.alicdn.com/code/lib/alifd__next/1.25.23/next.min.css","https://g.alicdn.com/code/lib/alifd__next/1.25.23/next-with-locales.min.js"],library:"Next"},{package:"antd",version:"4.17.3",urls:["https://g.alicdn.com/code/lib/antd/4.17.3/antd.min.js","https://g.alicdn.com/code/lib/antd/4.17.3/antd.min.css"],library:"antd"}];const b={packages:[]};let x="./assets-dev.json";const _={},g={},m=[],j="component";const w=S()||{componentName:"Page",id:"node_dockcviv8fo1",props:{ref:"outterView",style:{height:"100%"}},fileName:"lowcode",dataSource:{list:[]},state:{text:"outter",isShowDialog:!1},css:"body {font-size: 12px;} .botton{width:100px;color:#ff00ff}",lifeCycles:{componentDidMount:{type:"JSFunction",value:"function() {\n    console.log('did mount');\n  }"},componentWillUnmount:{type:"JSFunction",value:"function() {\n    console.log('will umount');\n  }"}},methods:{testFunc:{type:"JSFunction",value:"function() {\n    console.log('test func');\n  }"},onClick:{type:"JSFunction",value:"function() {\n    this.setState({\n      isShowDialog: true\n    })\n  }"},closeDialog:{type:"JSFunction",value:"function() {\n    this.setState({\n      isShowDialog: false\n    })\n  }"}},children:[]},O=document.getElementById("lce-container");function S(){var t;const n=JSON.parse(window.localStorage.getItem("projectSchema")||"{}"),e=undefined;return null==n||null===(t=n.componentsTree)||void 0===t?void 0:t[0]}async function A(t,n){if(n&&Array.isArray(n)&&n.length){const e=undefined;(await Promise.all(n.map(async t=>{if("object"==typeof t)return t;try{return(await fetch(t)).json()}catch(n){return console.error(`get assets data from builtin assets ${t} failed: `,n),{}}}))).forEach(n=>{const e={...n,packages:n.packages||[n.package],components:n.components,componentList:(n.componentList||[]).map(t=>(t.children&&(t.children=t.children.map(n=>(n.sort||(n.sort={category:t.title,group:"\u539f\u5b50\u7ec4\u4ef6"}),n))),t))};c()(t,e,(t,n)=>{if(Array.isArray(t)&&Array.isArray(n))return n.concat(t)})})}}o()(()=>({name:"editor-init",async init(){"object"==typeof _&&Object.keys(_).length&&r.setters.registerSetter(_);{const t=await(await fetch(x)).json(),n=t.packages;b.packages=b.packages.concat(n),b.components=t.components.map(t=>(t.advancedUrls&&f&&t.advancedUrls[f]&&t.advancedUrls[f].length?t.url=t.advancedUrls[f][0]:t.urls&&f&&t.urls[f]&&(t.url=t.urls[f]),t)),b.groupList=t.groupList}const t=new Map,n=[...new Set([...h,...b.packages].map(n=>{const{library:e}=n;return t.set(e,n),e}))];b.packages=n.map(n=>t.get(n)),b.packages=b.packages.map(t=>(t.editUrls&&t.editUrls.length&&(t.renderUrls=t.urls,t.urls=t.editUrls),t)),v?(r.material.setAssets(b),r.project.openDocument(w)):(r.editor.setAssets(b),r.project.open(w))}}),m||[],O,{supportVariableGlobally:!0,presetConfig:g})}])}));