!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/build",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(1),i=r(o),s=n(30);n(37),n(38);var a=new i.default("#now-playing");a.fetch();new s.Constellations({container:"#starry-night",width:"100%",height:"100%",point:{color:"#666666"},line:{color:[120,120,120,1]}})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(2),a=r(s),u=n(28),c=r(u),f="http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=getmicah&api_key=b4678efadfadbcf8882ed8e5432173b1&format=json",l=["█","▓","▒","░","█","▓","▒","░","█","▓","▒","░","<",">","/"],h=function(){function t(e){o(this,t),this.el=(0,c.default)(e,{characters:l,speed:50}),this.duration=500,this.delay=500}return i(t,[{key:"fetch",value:function(){a.default.get(f).then(this.success.bind(this)).catch(this.fail.bind(this))}},{key:"success",value:function(t){var e=t.data.recenttracks.track[0],n=e.artist["#text"]+" - "+e.name;this.show(n)}},{key:"fail",value:function(t){var e="Error: could't connect to last.fm";this.show(e,!0)}},{key:"show",value:function(t){this.el.start().text(function(e){return t}).reveal(this.duration,this.delay)}}]),t}();e.default=h},function(t,e,n){"use strict";t.exports=n(3)},function(t,e,n){"use strict";function r(t){var e=new s(t),n=i(s.prototype.request,e);return o.extend(n,s.prototype,e),o.extend(n,e),n}var o=n(4),i=n(5),s=n(6),a=n(7),u=r(a);u.Axios=s,u.create=function(t){return r(o.merge(a,t))},u.Cancel=n(25),u.CancelToken=n(26),u.isCancel=n(22),u.all=function(t){return Promise.all(t)},u.spread=n(27),t.exports=u,t.exports.default=u},function(t,e,n){"use strict";function r(t){return"[object Array]"===S.call(t)}function o(t){return"[object ArrayBuffer]"===S.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){var e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return"undefined"==typeof t}function f(t){return null!==t&&"object"===("undefined"==typeof t?"undefined":_(t))}function l(t){return"[object Date]"===S.call(t)}function h(t){return"[object File]"===S.call(t)}function p(t){return"[object Blob]"===S.call(t)}function d(t){return"[object Function]"===S.call(t)}function y(t){return f(t)&&d(t.pipe)}function m(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function g(t,e){if(null!==t&&"undefined"!=typeof t)if("object"===("undefined"==typeof t?"undefined":_(t))||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function w(){function t(t,n){"object"===_(e[n])&&"object"===("undefined"==typeof t?"undefined":_(t))?e[n]=w(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)g(arguments[n],t);return e}function x(t,e,n){return g(e,function(e,r){n&&"function"==typeof e?t[r]=k(e,n):t[r]=e}),t}var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k=n(5),S=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:h,isBlob:p,isFunction:d,isStream:y,isURLSearchParams:m,isStandardBrowserEnv:b,forEach:g,merge:w,extend:x,trim:v}},function(t,e){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=n(7),i=n(4),s=n(19),a=n(20),u=n(23),c=n(24);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url));var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e,n){(function(e){"use strict";function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(10):"undefined"!=typeof e&&(t=n(10)),t}var i=n(4),s=n(9),a=/^\)\]\}',?\n/,u={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:o(),transformRequest:[function(t,e){return s(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(a,"");try{t=JSON.parse(t)}catch(t){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){c.headers[t]={}}),i.forEach(["post","put","patch"],function(t){c.headers[t]=i.merge(u)}),t.exports=c}).call(e,n(8))},function(t,e){"use strict";function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function s(){y&&p&&(y=!1,p.length?d=p.concat(d):m=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(p=d,d=[];++m<e;)p&&p[m].run();m=-1,e=d.length}p=null,y=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var f,l,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var p,d=[],y=!1,m=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new u(t,e)),1!==d.length||y||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e,n){"use strict";var r=n(4);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){(function(e){"use strict";var r=n(4),o=n(11),i=n(14),s=n(15),a=n(16),u=n(12),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(17);t.exports=function(t){return new Promise(function(f,l){var h=t.data,p=t.headers;r.isFormData(h)&&delete p["Content-Type"];var d=new XMLHttpRequest,y="onreadystatechange",m=!1;if("test"===e.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(t.url)||(d=new window.XDomainRequest,y="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",b=t.auth.password||"";p.Authorization="Basic "+c(v+":"+b)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[y]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?d.response:d.responseText,r={data:n,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:e,config:t,request:d};o(f,l,r),d=null}},d.onerror=function(){l(u("Network Error",t)),d=null},d.ontimeout=function(){l(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),d=null},r.isStandardBrowserEnv()){var g=n(18),w=(t.withCredentials||a(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;w&&(p[t.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){"undefined"==typeof h&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(t){if("json"!==d.responseType)throw t}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),l(t),d=null)}),void 0===h&&(h=null),d.send(h)})}}).call(e,n(8))},function(t,e,n){"use strict";var r=n(12);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n)):t(n)}},function(t,e,n){"use strict";var r=n(13);t.exports=function(t,e,n,o){var i=new Error(t);return r(i,e,n,o)}},function(t,e){"use strict";t.exports=function(t,e,n,r){return t.config=e,n&&(t.code=n),t.response=r,t}},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(4);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&"undefined"!=typeof t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(r(e)+"="+r(t))}))}),i=s.join("&")}return i&&(t+=(t.indexOf("?")===-1?"?":"&")+i),t}},function(t,e,n){"use strict";var r=n(4);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},function(t,e,n){"use strict";var r=n(4);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e){"use strict";function n(){this.message="String contains an invalid character"}function r(t){for(var e,r,i=String(t),s="",a=0,u=o;i.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&e>>8-a%1*8)){if(r=i.charCodeAt(a+=.75),r>255)throw new n;e=e<<8|r}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=r},function(t,e,n){"use strict";var r=n(4);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(4);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(4),i=n(21),s=n(22),a=n(7);t.exports=function(t){r(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||a.adapter;return e(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";var r=n(4);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(25);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t,e=new r(function(e){t=e});return{token:e,cancel:t}},t.exports=r},function(t,e){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){var r,o,i;(function(t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*!
	 * baffle 0.3.6 - A tiny javascript library for obfuscating and revealing text in DOM elements.
	 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/baffle
	 * License: MIT
	 */
!function(s,a){"object"==n(e)&&"object"==n(t)?t.exports=a():(o=[],r=a,i="function"==typeof r?r.apply(e,o):r,!(void 0!==i&&(t.exports=i)))}(void 0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}var o=n(2),i=r(o);t.exports=i.default},function(t,e){function n(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(t,e){return t.split("").map(e).join("")}function o(t){return t[Math.floor(Math.random()*t.length)]}function i(t,e){for(var n=0,r=t.length;n<r;n++)e(t[n],n)}function s(t){return t.map(function(t,e){return!!t&&e}).filter(function(t){return t!==!1})}function a(t){return"string"==typeof t?[].slice.call(document.querySelectorAll(t)):[NodeList,HTMLCollection].some(function(e){return t instanceof e})?[].slice.call(t):t.nodeType?[t]:t}Object.defineProperty(e,"__esModule",{value:!0}),e.extend=n,e.mapString=r,e.sample=o,e.each=i,e.getTruthyIndices=s,e.getElements=a},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),s=n(3),a=r(s),u={characters:"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",exclude:[" "],speed:50},c=function(){function t(e,n){o(this,t),this.options=(0,i.extend)(Object.create(u),n),this.elements=(0,i.getElements)(e).map(a.default),this.running=!1}return t.prototype.once=function(){var t=this;return(0,i.each)(this.elements,function(e){return e.write(t.options.characters,t.options.exclude)}),this.running=!0,this},t.prototype.start=function(){var t=this;return clearInterval(this.interval),(0,i.each)(this.elements,function(t){return t.init()}),this.interval=setInterval(function(){return t.once()},this.options.speed),this.running=!0,this},t.prototype.stop=function(){return clearInterval(this.interval),this.running=!1,this},t.prototype.set=function(t){return(0,i.extend)(this.options,t),this.running&&this.start(),this},t.prototype.text=function(t){var e=this;return(0,i.each)(this.elements,function(n){n.text(t(n.value)),e.running||n.write()}),this},t.prototype.reveal=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=e/this.options.speed||1,o=function(){clearInterval(t.interval),t.running=!0,t.interval=setInterval(function(){var e=t.elements.filter(function(t){return!t.bitmap.every(function(t){return!t})});(0,i.each)(e,function(e){var n=Math.ceil(e.value.length/r);e.decay(n).write(t.options.characters,t.options.exclude)}),e.length||(t.stop(),(0,i.each)(t.elements,function(t){return t.init()}))},t.options.speed)};return setTimeout(o,n),this},t}();e.default=function(t,e){return new c(t,e)}},function(t,e,r){function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=("undefined"==typeof e?"undefined":n(e))&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":n(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),u=function(){function t(e){s(this,t),this.value=e,this.init()}return t.prototype.init=function(){return this.bitmap=this.value.split("").map(function(){return 1}),this},t.prototype.render=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],n=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e.length?(0,a.mapString)(this.value,function(r,o){return n.indexOf(r)>-1?r:t.bitmap[o]?(0,a.sample)(e):r}):this.value},t.prototype.decay=function(){for(var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0];t--;){var e=(0,a.getTruthyIndices)(this.bitmap);this.bitmap[(0,a.sample)(e)]=0}return this},t.prototype.text=function(){var t=arguments.length<=0||void 0===arguments[0]?this.value:arguments[0];return this.value=t,this.init(),this},t}(),c=function(t){function e(n){s(this,e);var r=o(this,t.call(this,n.textContent));return r.element=n,r}return i(e,t),e.prototype.write=function(t,e){return this.element.textContent=this.render(t,e),this},e}(u);e.default=function(t){return new c(t)}}])})}).call(e,n(29)(t))},function(t,e){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Constellations=void 0;var o=n(31),i=r(o);e.Constellations=i.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":a(e))&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":a(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(r)},f=n(32),l=r(f),h=n(34),p=r(h),d=n(36),y=r(d),m=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.complexity,r.points=[],r.lines=[],r.init(),r}return s(e,t),u(e,[{key:"getComplexity",value:function(t){return this.canvas.width*this.canvas.height/t}},{key:"init",value:function(){this.complexity=this.getComplexity(this.config.seed||8e3),this.points.length=0,this.lines.length=0;for(var t=0,n=0;n<this.complexity;n++){var r=Math.random()*this.canvas.width,o=Math.random()*this.canvas.height;this.points[n]=new p.default(this.ctx,r,o),this.points[n].init(this.config.point);for(var i=n+1;i<this.complexity;i++)this.lines[t]=new y.default(this.ctx),this.lines[t].init(this.config.line),t++}c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this)}},{key:"update",value:function(){for(var t=0;t<this.complexity;t++)this.points[t].update();for(var e=0,n=0;n<this.complexity;n++)for(var r=n+1;r<this.complexity;r++){var o=this.points[n].x,i=this.points[n].y,s=this.points[r].x,a=this.points[r].y;this.lines[e].update(o,i,s,a),e++}}},{key:"render",value:function(){c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"render",this).call(this);for(var t=0;t<this.lines.length;t++)this.lines[t].render();for(var n=0;n<this.points.length;n++)this.points[n].render()}}]),e}(l.default);e.default=m},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(33),s=function(){function t(e){if(r(this,t),this.constructor===t)throw new TypeError('Abstract class "CanvasEffect" cannot be instantiated directly.');this.config=e?e:{},this.canvas,this.ctx,this.delay=250,this.requestId,this.timer,this.createCanvas(),this.setCanvasSize()}return o(t,[{key:"createCanvas",value:function(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.config.id&&(this.canvas.id=this.config.id),this.config.backgroundColor&&(this.canvas.style.backgroundColor=this.config.backgroundColor);var t=document.querySelector(this.config.container);if(!t||"DIV"!=t.nodeName)throw new TypeError("Invalid container: "+this.config.container+".");t.appendChild(this.canvas)}},{key:"isValidDimensions",value:function(t,e){return"number"==typeof t||"string"==typeof t?"string"!=typeof t||"%"==t.slice(-1):("number"==typeof e||"string"==typeof e)&&("string"!=typeof e||"%"==e.slice(-1))}},{key:"setCanvasSize",value:function(){var t=this.config.width,e=this.config.height;if(!this.isValidDimensions(t,e))throw new TypeError("Invalid dimensions: "+t+", "+e+".");if("string"==typeof t||"string"==typeof e){if("string"==typeof t){var n=t.slice(0,-1);t=n/100*window.innerWidth}if("string"==typeof e){var r=e.slice(0,-1);e=r/100*window.innerHeight}document.body.style.overflowX="hidden",window.addEventListener("resize",this.debounce.bind(this))}this.canvas.width=t,this.canvas.height=e}},{key:"debounce",value:function(){this.requestId&&(cancelAnimationFrame(this.requestId),this.requestId=void 0),clearTimeout(this.timer),this.timer=setTimeout(this.resize.bind(this),this.delay),this.clear()}},{key:"resize",value:function(){this.setCanvasSize(),this.init()}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"init",value:function(){this.requestId||this.main()}},{key:"main",value:function(){this.requestId=(0,i.requestAnimFrame)(this.main.bind(this)),this.update(),this.render()}},{key:"update",value:function(){}},{key:"render",value:function(){this.clear()}}]),t}();e.default=s},function(t,e){"use strict";function n(t){return requestAnimationFrame(t)||webkitRequestAnimationFrame(t)||mozRequestAnimationFrame(t)||oRequestAnimationFrame(t)||msRequestAnimationFrame(t)||function(t){setTimeout(t,1e3/60)}}function r(t){return cancelAnimationFrame(t)||cancelTimeout(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.requestAnimFrame=n,e.cancelAnimFrame=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":a(e))&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":a(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(35),f=r(c),l=function(t){function e(t,n,r){o(this,e);var s=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return s.x=n,s.y=r,s.color="#000000",s.radius=s.getRandomArbitrary(4,2),s.speed=s.getRandomArbitrary(.2,.1),s.theta=s.getRandomTheta(),s}return s(e,t),u(e,[{key:"getRandomArbitrary",value:function(t,e){return Math.random()*(t-e)+e}},{key:"getRandomTheta",value:function(){return 2*Math.random()*Math.PI}},{key:"init",value:function(t){t&&(this.color=t.color||this.color,t.radius&&2==t.radius.length&&t.radius[0]>t.radius[1]&&(this.radius=this.getRandomArbitrary(t.radius[0],t.radius[1])),t.speed&&2==t.speed.length&&t.speed[0]>t.speed[1]&&(this.speed=this.getRandomArbitrary(t.speed[0],t.speed[1])))}},{key:"update",value:function(){(this.x<=0+this.radius||this.x>=this.cw-this.radius)&&(this.theta=Math.PI-this.theta),(this.y<=0+this.radius||this.y>=this.ch-this.radius)&&(this.theta=2*Math.PI-this.theta),this.x+=Math.cos(this.theta)*this.speed,this.y+=Math.sin(this.theta)*this.speed}},{key:"render",value:function(){this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill()}}]),e}(f.default);e.default=l},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e){n(this,t),this.ctx=e,this.cw=this.ctx.canvas.width,this.ch=this.ctx.canvas.height}return r(t,[{key:"init",value:function(){}},{key:"update",value:function(){}},{key:"render",value:function(){}}]),t}();e.default=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":a(e))&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":a(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(35),f=r(c),l=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.alpha=0,n.color=[0,0,0,1],n.fade=.05,n.max=100,n.width=1,n}return s(e,t),u(e,[{key:"getDistance",value:function(){return Math.sqrt((this.x1-this.x2)*(this.x1-this.x2)+(this.y1-this.y2)*(this.y1-this.y2))}},{key:"isValidRGBA",value:function(t){return t[0]<=255&&t[1]<=255&&t[2]<=255&&t[3]<=1}},{key:"init",value:function(t){t&&(t.color&&4==t.color.length&&this.isValidRGBA(t.color)&&(this.color=t.color),this.fade=t.fade<1?t.fade:this.fade,this.max=t.max||this.max,this.width=t.width||this.width)}},{key:"update",value:function(t,e,n,r){this.x1=t,this.x2=n,this.y1=e,this.y2=r}},{key:"render",value:function(){this.getDistance()<this.max?this.alpha<=this.color[3]&&(this.alpha+=this.fade):this.alpha>0&&(this.alpha-=this.fade),this.alpha>0&&(this.ctx.strokeStyle="rgba("+this.color[0]+","+this.color[1]+","+this.color[2]+","+this.alpha+")",this.ctx.lineWidth=this.width,this.ctx.beginPath(),this.ctx.moveTo(this.x1,this.y1),this.ctx.lineTo(this.x2,this.y2),this.ctx.stroke())}}]),e}(f.default);e.default=l},function(t,e){t.exports='<!doctype html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="utf-8" />\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\t\t<title>Micah Cowell</title>\n\t\t<link rel="stylesheet" href="build/main.css" />\n\t\t<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />\n\t</head>\n\t<body>\n\t\t<div id=\'app\'>\n\t\t\t<h1>Micah Cowell</h1>\n\t\t\t<p>Sharing my thoughts on <a href="https://twitter.com/getmicah">Twitter</a></p>\n\t\t\t<p>Writing code on <a href="https://github.com/getmicah">Github</a></p>\n\t\t\t<p>Listening to <a href="http://last.fm/user/getmicah" id="now-playing"></a></p>\n\t\t</div>\n\t\t<div id="starry-night"></div>\n\t\t<script src="build/bundle.js"></script>\n\t</body>\n</html>\n'},function(t,e){t.exports='@import "normalize";\n@import "fonts";\n\n$color-bg: #333333;\n$color-fg: #f5f5dc; // beige\n$color-link: #f5f5dc;\n$iphone: 375px;\n$width: 700px;\n\nbody {\n\tbackground: $color-bg;\n\tfont-size: 100%;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n#app {\n\tcolor: $color-fg;\n\tmax-width: $width;\n\tpadding: 8em 4em 4em 4em;\n\tmargin: 0 auto;\n    font-family: "mono", monospace;\n    font-size: 1rem;\n\tfont-weight: 400;\n\tline-height: 2;\n\t@media (max-width: ($width)) {\n\t\tpadding: 4em 2em;\n\t}\n}\n\n#starry-night {\n\tposition: fixed;\n\ttop: 0; left: 0;\n\tz-index: -1;\n\toverflow: hidden;\n}\n\nh1 {\n\tcolor: $color-fg;\n\tmargin: 0 0 0.5em 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, sans-serif;\n\tfont-size: 4rem;\n\tline-height: 1.2;\n}\n\np {\n\tmargin: 1em 0;\n\tfont-size: 1rem;\n}\n\na {\n\tcolor: $color-link;\n\tfont-weight: 700;\n\ttext-decoration: none;\n\tborder-bottom: 0.15em solid $color-link;\n\t&:hover {\n\t\tcolor: $color-link;\n\t}\n\t&:active {\n\t\tcolor: $color-link;\n\t}\n\t&:visited {\n\t\tcolor: $color-link;\n\t}\n}\n'}]);