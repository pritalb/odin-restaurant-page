(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n    font-style: inherit;\n}\n\n.nav {\n    display: flex;\n    flex-direction: row;\n    height: 50px;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 16px;\n    padding-right: 16px;\n}\n\n.nav-bar-title {\n    font-size: 24px;\n}\n\n.nav-button-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    height: 50px;\n    gap: 10px;\n}\n\n.nav-element {\n    height: 25px;\n    background-color: transparent;\n    border-style: none;\n    font-size: 18px;\n}",""]);const c=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(o[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);a&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},o=[],c=0;c<e.length;c++){var l=e[c],s=a.base?l[0]+a.base:l[0],d=i[s]||0,p="".concat(s," ").concat(d);i[s]=d+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=t(i[o]);n[c].references--}for(var l=a(e,r),s=0;s<i.length;s++){var d=t(i[s]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=l}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"5e9538edee9292759993.jpg",n=function(e,n,t){let a=document.createElement("div");a.className="menu-item";let r=document.createElement("div");r.innerText=e,r.className="menu-item-name";let i=document.createElement("div");i.innerText=`$${n}`,i.className="menu-item-price";let o=new Image;return o.className="menu-item-image",o.src=t,a.appendChild(r),a.appendChild(i),a.appendChild(o),a};function a(e){document.querySelectorAll(".page").forEach((e=>{e.style.display="none"})),document.querySelector(`#${e}`).style.display="block"}var r=t(379),i=t.n(r),o=t(795),c=t.n(o),l=t(569),s=t.n(l),d=t(565),p=t.n(d),u=t(216),m=t.n(u),h=t(589),f=t.n(h),v=t(28),g={};g.styleTagTransform=f(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=m(),i()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const y=t.p+"ded37cdfd817e3d69dcf.jpg",b=t.p+"10ae6722f80fcbb03607.jpg",x=t.p+"79bf8fe1a16beda4592a.jpg",C=t.p+"bd5ef6333621407a6432.jpg";function E(){let t=document.querySelector("#content"),r=function(){let e=document.createElement("div");e.id="nav-bar",e.className="nav";let n=document.createElement("div");n.innerText="RestoFine",n.className="nav-bar-title";let t=document.createElement("div");t.className="nav-button-container";let r=document.createElement("button");r.innerText="Home",r.className="nav-element",r.addEventListener("click",(()=>{a("home-page")}));let i=document.createElement("button");i.innerText="Menu",i.className="nav-element",i.addEventListener("click",(()=>{a("menu-page")}));let o=document.createElement("button");return o.innerText="Contact us",o.className="nav-element",o.addEventListener("click",(()=>{a("contact-page")})),t.appendChild(r),t.appendChild(i),t.appendChild(o),e.appendChild(n),e.appendChild(t),e}(),i=function(){let n=document.createElement("div");n.id="home-page",n.className="page";let t=document.createElement("h1");t.className="page-heading",t.innerText="RestoFine";let a=document.createElement("p");a.innerText="The very best restaurant in the world. Dining so fine, you will need a microscope to look at it",a.className="home-page-info";const r=new Image;return r.className="home-page-image",r.src=e,n.appendChild(t),n.appendChild(a),n.appendChild(r),n}(),o=function(){let e=document.createElement("div");e.id="contact-page",e.className="page";let n=document.createElement("h2");n.className="page-heading",n.innerText="Contact us";let t=document.createElement("div");t.innerText="Phone: 333-333-3333",t.className="contact-page-item";let a=document.createElement("div");a.innerText="Email: somemail@email.com",a.className="contact-page-item";let r=document.createElement("div");return r.innerText="123, some area, some city, some country",r.className="contact-page-item",e.appendChild(n),e.appendChild(t),e.appendChild(a),e.appendChild(r),e}(),c=document.createElement("div");c.id="menu-page",c.className="page";let l=document.createElement("h2");l.className="page-heading",l.innerText="Menu";let s=n("Dish 1","199",y),d=n("Dish 2","100",b),p=n("Dish 3","149",x),u=n("Dish 4","179",C);c.appendChild(l),c.appendChild(s),c.appendChild(d),c.appendChild(p),c.appendChild(u),t.appendChild(r),t.appendChild(i),t.appendChild(c),t.appendChild(o)}document.addEventListener("DOMContentLoaded",(()=>{E(),a("home-page")}))})()})();