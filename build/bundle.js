!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/build",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(1),i=r(o);n(30),n(31);var u=new i.default("#listening");u.fetch()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(2),s=r(u),a=n(28),c=r(a),f="http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=getmicah&api_key=b4678efadfadbcf8882ed8e5432173b1&format=json",l=["█","▓","▒","░","█","▓","▒","░","█","▓","▒","░","<",">","/"],p=function(){function t(e){o(this,t),this.el=(0,c.default)(e,{characters:l,speed:50}),this.duration=500,this.delay=500}return i(t,[{key:"fetch",value:function(){s.default.get(f).then(function(t){var e=t.data.recenttracks.track[0],n=e.artist["#text"]+" - "+e.name;this.show(n)}.bind(this)).catch(function(t){var e="Error: could't connect to last.fm";this.show(e,!0)}.bind(this))}},{key:"show",value:function(t,e){this.el.start().text(function(e){return t}).reveal(this.duration,this.delay)}}]),t}();e.default=p},function(t,e,n){"use strict";t.exports=n(3)},function(t,e,n){"use strict";function r(t){var e=new u(t),n=i(u.prototype.request,e);return o.extend(n,u.prototype,e),o.extend(n,e),n}var o=n(4),i=n(5),u=n(6),s=n(7),a=r(s);a.Axios=u,a.create=function(t){return r(o.merge(s,t))},a.Cancel=n(25),a.CancelToken=n(26),a.isCancel=n(22),a.all=function(t){return Promise.all(t)},a.spread=n(27),t.exports=a,t.exports.default=a},function(t,e,n){"use strict";function r(t){return"[object Array]"===S.call(t)}function o(t){return"[object ArrayBuffer]"===S.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function u(t){var e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function s(t){return"string"==typeof t}function a(t){return"number"==typeof t}function c(t){return"undefined"==typeof t}function f(t){return null!==t&&"object"===("undefined"==typeof t?"undefined":T(t))}function l(t){return"[object Date]"===S.call(t)}function p(t){return"[object File]"===S.call(t)}function h(t){return"[object Blob]"===S.call(t)}function d(t){return"[object Function]"===S.call(t)}function m(t){return f(t)&&d(t.pipe)}function y(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function w(t,e){if(null!==t&&"undefined"!=typeof t)if("object"===("undefined"==typeof t?"undefined":T(t))||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function b(){function t(t,n){"object"===T(e[n])&&"object"===("undefined"==typeof t?"undefined":T(t))?e[n]=b(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)w(arguments[n],t);return e}function x(t,e,n){return w(e,function(e,r){n&&"function"==typeof e?t[r]=E(e,n):t[r]=e}),t}var T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E=n(5),S=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isFormData:i,isArrayBufferView:u,isString:s,isNumber:a,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:h,isFunction:d,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:g,forEach:w,merge:b,extend:x,trim:v}},function(t,e){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new u,response:new u}}var o=n(7),i=n(4),u=n(19),s=n(20),a=n(23),c=n(24);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url));var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e,n){(function(e){"use strict";function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(10):"undefined"!=typeof e&&(t=n(10)),t}var i=n(4),u=n(9),s=/^\)\]\}',?\n/,a={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:o(),transformRequest:[function(t,e){return u(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(s,"");try{t=JSON.parse(t)}catch(t){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){c.headers[t]={}}),i.forEach(["post","put","patch"],function(t){c.headers[t]=i.merge(a)}),t.exports=c}).call(e,n(8))},function(t,e){"use strict";function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function u(){m&&h&&(m=!1,h.length?d=h.concat(d):y=-1,d.length&&s())}function s(){if(!m){var t=o(u);m=!0;for(var e=d.length;e;){for(h=d,d=[];++y<e;)h&&h[y].run();y=-1,e=d.length}h=null,m=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var h,d=[],m=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new a(t,e)),1!==d.length||m||o(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(4);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){(function(e){"use strict";var r=n(4),o=n(11),i=n(14),u=n(15),s=n(16),a=n(12),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(17);t.exports=function(t){return new Promise(function(f,l){var p=t.data,h=t.headers;r.isFormData(p)&&delete h["Content-Type"];var d=new XMLHttpRequest,m="onreadystatechange",y=!1;if("test"===e.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||s(t.url)||(d=new window.XDomainRequest,m="onload",y=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",g=t.auth.password||"";h.Authorization="Basic "+c(v+":"+g)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[m]=function(){if(d&&(4===d.readyState||y)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?d.response:d.responseText,r={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:e,config:t,request:d};o(f,l,r),d=null}},d.onerror=function(){l(a("Network Error",t)),d=null},d.ontimeout=function(){l(a("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),d=null},r.isStandardBrowserEnv()){var w=n(18),b=(t.withCredentials||s(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;b&&(h[t.xsrfHeaderName]=b)}if("setRequestHeader"in d&&r.forEach(h,function(t,e){"undefined"==typeof p&&"content-type"===e.toLowerCase()?delete h[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(t){if("json"!==d.responseType)throw t}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),l(t),d=null)}),void 0===p&&(p=null),d.send(p)})}}).call(e,n(8))},function(t,e,n){"use strict";var r=n(12);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n)):t(n)}},function(t,e,n){"use strict";var r=n(13);t.exports=function(t,e,n,o){var i=new Error(t);return r(i,e,n,o)}},function(t,e){"use strict";t.exports=function(t,e,n,r){return t.config=e,n&&(t.code=n),t.response=r,t}},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(4);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var u=[];o.forEach(e,function(t,e){null!==t&&"undefined"!=typeof t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),u.push(r(e)+"="+r(t))}))}),i=u.join("&")}return i&&(t+=(t.indexOf("?")===-1?"?":"&")+i),t}},function(t,e,n){"use strict";var r=n(4);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},function(t,e,n){"use strict";var r=n(4);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e){"use strict";function n(){this.message="String contains an invalid character"}function r(t){for(var e,r,i=String(t),u="",s=0,a=o;i.charAt(0|s)||(a="=",s%1);u+=a.charAt(63&e>>8-s%1*8)){if(r=i.charCodeAt(s+=.75),r>255)throw new n;e=e<<8|r}return u}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=r},function(t,e,n){"use strict";var r=n(4);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,u){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),u===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(4);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(4),i=n(21),u=n(22),s=n(7);t.exports=function(t){r(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||s.adapter;return e(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return u(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var r=n(4);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(25);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t,e=new r(function(e){t=e});return{token:e,cancel:t}},t.exports=r},function(t,e){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){var r,o,i;(function(t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*!
	 * baffle 0.3.6 - A tiny javascript library for obfuscating and revealing text in DOM elements.
	 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/baffle
	 * License: MIT
	 */
!function(u,s){"object"==n(e)&&"object"==n(t)?t.exports=s():(o=[],r=s,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i)))}(void 0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}var o=n(2),i=r(o);t.exports=i.default},function(t,e){function n(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(t,e){return t.split("").map(e).join("")}function o(t){return t[Math.floor(Math.random()*t.length)]}function i(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)}function u(t){return t.map(function(t,e){return!!t&&e}).filter(function(t){return t!==!1})}function s(t){return"string"==typeof t?[].slice.call(document.querySelectorAll(t)):[NodeList,HTMLCollection].some(function(e){return t instanceof e})?[].slice.call(t):t.nodeType?[t]:t}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=n,e.mapString=r,e.sample=o,e.each=i,e.getTruthyIndices=u,e.getElements=s},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),u=n(3),s=r(u),a={characters:"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",exclude:[" "],speed:50},c=function(){function t(e,n){o(this,t),this.options=(0,i.extend)(Object.create(a),n),this.elements=(0,i.getElements)(e).map(s.default),this.running=!1}return t.prototype.once=function(){var t=this;return(0,i.each)(this.elements,function(e){return e.write(t.options.characters,t.options.exclude)}),this.running=!0,this},t.prototype.start=function(){var t=this;return clearInterval(this.interval),(0,i.each)(this.elements,function(t){return t.init()}),this.interval=setInterval(function(){return t.once()},this.options.speed),this.running=!0,this},t.prototype.stop=function(){return clearInterval(this.interval),this.running=!1,this},t.prototype.set=function(t){return(0,i.extend)(this.options,t),this.running&&this.start(),this},t.prototype.text=function(t){var e=this;return(0,i.each)(this.elements,function(n){n.text(t(n.value)),e.running||n.write()}),this},t.prototype.reveal=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=e/this.options.speed||1,o=function(){clearInterval(t.interval),t.running=!0,t.interval=setInterval(function(){var e=t.elements.filter(function(t){return!t.bitmap.every(function(t){return!t})});(0,i.each)(e,function(e){var n=Math.ceil(e.value.length/r);e.decay(n).write(t.options.characters,t.options.exclude)}),e.length||(t.stop(),(0,i.each)(t.elements,function(t){return t.init()}))},t.options.speed)};return setTimeout(o,n),this},t}();e.default=function(t,e){return new c(t,e)}},function(t,e,r){function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=("undefined"==typeof e?"undefined":n(e))&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":n(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),a=function(){function t(e){u(this,t),this.value=e,this.init()}return t.prototype.init=function(){return this.bitmap=this.value.split("").map(function(){return 1}),this},t.prototype.render=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e.length?(0,s.mapString)(this.value,function(r,o){return n.indexOf(r)>-1?r:t.bitmap[o]?(0,s.sample)(e):r}):this.value},t.prototype.decay=function(){for(var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0];t--;){var e=(0,s.getTruthyIndices)(this.bitmap);this.bitmap[(0,s.sample)(e)]=0}return this},t.prototype.text=function(){var t=arguments.length<=0||void 0===arguments[0]?this.value:arguments[0];return this.value=t,this.init(),this},t}(),c=function(t){function e(n){u(this,e);var r=o(this,t.call(this,n.textContent));return r.element=n,r}return i(e,t),e.prototype.write=function(t,e){return this.element.textContent=this.render(t,e),this},e}(a);e.default=function(t){return new c(t)}}])})}).call(e,n(29)(t))},function(t,e){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){t.exports='<!doctype html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\t\t<title>Micah Cowell</title>\n\t\t<link rel="stylesheet" href="build/main.css" />\n\t\t<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />\n\t</head>\n\t<body>\n\t\t<h1>Micah Cowell</h1>\n\t\t<p>Sharing my thoughts on <a href="https://twitter.com/getmicah">Twitter</a></p>\n\t\t<p>Writing code on <a href="https://github.com/getmicah">Github</a></p>\n\t\t<p>Listening to <a href="http://last.fm/user/getmicah" id="listening"></a></p>\n\t\t<script src="build/bundle.js"></script>\n\t</body>\n</html>\n'},function(t,e){t.exports='@import "normalize";\n@import "fonts";\n\n$color-bg: #333333;\n$color-fg: #F5F5DC;\n$color-link: #F5F5DC;\n$iphone: 375px;\n$width: 700px;\n\nhtml {\n    font-size: 100%;\n}\n\nbody {\n\tcolor: $color-fg;\n\tbackground: $color-bg;\n\tmax-width: $width;\n\tpadding: 8em 4em 4em 4em;\n\tmargin: 0 auto;\n    font-family: "mono", monospace;\n    font-size: 1rem;\n\tfont-weight: 400;\n\tline-height: 2;\n\t@media (max-width: ($width)) {\n\t\tpadding: 4em 2em;\n\t}\n\t@media (max-width: $iphone) {\n\t\tpadding: 2em;\n\t}\n}\n\nh1 {\n\tcolor: $color-fg;\n\tmargin: 0 0 0.5em 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\tfont-size: 4rem;\n\tline-height: 1.2;\n}\n\np {\n\tmargin: 1em 0;\n\tfont-size: 1rem;\n}\n\na {\n\tcolor: $color-link;\n\tfont-weight: 700;\n\ttext-decoration: none;\n\tborder-bottom: 0.15em solid $color-link;\n\t&:hover {\n\t\tcolor: $color-link;\n\t}\n\t&:active {\n\t\tcolor: $color-link;\n\t}\n\t&:visited {\n\t\tcolor: $color-link;\n\t}\n}\n'}]);