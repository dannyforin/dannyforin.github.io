(function(e){function s(s){for(var t,a,o=s[0],f=s[1],d=s[2],u=0,j=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&j.push(r[a][0]),r[a]=0;for(t in f)Object.prototype.hasOwnProperty.call(f,t)&&(e[t]=f[t]);b&&b(s);while(j.length)j.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,s=0;s<c.length;s++){for(var n=c[s],t=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(t=!1)}t&&(c.splice(s--,1),e=f(f.s=n[0]))}return e}var t={},a={app:0},r={app:0},c=[];function o(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-f9733acc":"19948bf4","chunk-2d0dd7f4":"ada0aa0c","chunk-57c38eb7":"383b6855"}[e]+".js"}function f(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,f),n.l=!0,n.exports}f.e=function(e){var s=[],n={"chunk-57c38eb7":1};a[e]?s.push(a[e]):0!==a[e]&&n[e]&&s.push(a[e]=new Promise((function(s,n){for(var t="css/"+({}[e]||e)+"."+{"chunk-f9733acc":"31d6cfe0","chunk-2d0dd7f4":"31d6cfe0","chunk-57c38eb7":"56121189"}[e]+".css",r=f.p+t,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var d=c[o],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===t||u===r))return s()}var j=document.getElementsByTagName("style");for(o=0;o<j.length;o++){d=j[o],u=d.getAttribute("data-href");if(u===t||u===r)return s()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=s,b.onerror=function(s){var t=s&&s.target&&s.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=t,delete a[e],b.parentNode.removeChild(b),n(c)},b.href=r;var i=document.getElementsByTagName("head")[0];i.appendChild(b)})).then((function(){a[e]=0})));var t=r[e];if(0!==t)if(t)s.push(t[2]);else{var c=new Promise((function(s,n){t=r[e]=[s,n]}));s.push(t[2]=c);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,f.nc&&u.setAttribute("nonce",f.nc),u.src=o(e);var j=new Error;d=function(s){u.onerror=u.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var t=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;j.message="Loading chunk "+e+" failed.\n("+t+": "+a+")",j.name="ChunkLoadError",j.type=t,j.request=a,n[1](j)}r[e]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(s)},f.m=e,f.c=t,f.d=function(e,s,n){f.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,s){if(1&s&&(e=f(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(f.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)f.d(n,t,function(s){return e[s]}.bind(null,t));return n},f.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(s,"a",s),s},f.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},f.p="/",f.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=s,d=d.slice();for(var j=0;j<d.length;j++)s(d[j]);var b=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,s,n){e.exports=n("56d7")},4678:function(e,s,n){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var s=r(e);return n(s)}function r(e){if(!n.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,s,n){"use strict";n.r(s);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),a=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("div",{attrs:{id:"app"}},[n("router-view"),n("span",[e._v("this is app / page")]),n("router-link",{attrs:{to:"/home"}},[e._v("跳转home")])],1)},r=[],c={name:"App",components:{},methods:{handleAppClick:function(){}}},o=c,f=n("2877"),d=Object(f["a"])(o,a,r,!1,null,null,null),u=d.exports,j=(n("d3b7"),n("8c4f"));t["a"].use(j["a"]);var b=[{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-f9733acc"),n.e("chunk-57c38eb7")]).then(n.bind(null,"7abe"))}},{path:"/detail/:id",name:"home",component:function(){return Promise.all([n.e("chunk-f9733acc"),n.e("chunk-2d0dd7f4")]).then(n.bind(null,"8248"))}}],i=new j["a"]({mode:"history",base:"/",routes:b}),l=(n("202f"),n("5efb")),h=n("ed3b"),m=n("f64c");t["a"].use(l["a"]),t["a"].use(h["a"]),t["a"].use(m["a"]),t["a"].prototype.$message=m["a"],t["a"].config.productionTip=!1,new t["a"]({router:i,render:function(e){return e(u)},mounted:function(){setTimeout((function(){document.dispatchEvent(new Event("render-event"))}),2e4)}}).$mount("#app")}});
//# sourceMappingURL=app.84ef9287.js.map