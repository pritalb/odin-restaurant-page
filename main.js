(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"5e9538edee9292759993.jpg",n=function(e,t,n){let i=document.createElement("div"),d=document.createElement("div");d.innerText=e;let r=document.createElement("div");r.innerText=`$${t}`;let c=new Image;return c.src=n,i.appendChild(d),i.appendChild(r),i.appendChild(c),i},i=e.p+"ded37cdfd817e3d69dcf.jpg",d=e.p+"10ae6722f80fcbb03607.jpg",r=e.p+"79bf8fe1a16beda4592a.jpg",c=e.p+"bd5ef6333621407a6432.jpg";document.addEventListener("DOMContentLoaded",(()=>{!function(){let e=document.querySelector("#content"),a=function(){let e=document.createElement("div");e.className="home-page";let n=document.createElement("h1");n.innerText="RestoFine";let i=document.createElement("p");i.innerText="The very best restaurant in the world. Dining so fine, you will need a microscope to look at it";const d=new Image;return d.src=t,e.appendChild(n),e.appendChild(i),e.appendChild(d),e}(),l=function(){let e=document.createElement("div"),t=document.createElement("h2");t.innerText="Contact us";let n=document.createElement("div");n.innerText="Phone: 333-333-3333";let i=document.createElement("div");i.innerText="Email: somemail@email.com";let d=document.createElement("div");return d.innerText="123, some area, some city, some country",e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(d),e}(),o=document.createElement("div"),p=document.createElement("h2");p.innerText="Menu";let m=n("Dish 1","199",i),u=n("Dish 2","100",d),h=n("Dish 3","149",r),s=n("Dish 4","179",c);o.appendChild(p),o.appendChild(m),o.appendChild(u),o.appendChild(h),o.appendChild(s),e.appendChild(a),e.appendChild(o),e.appendChild(l)}()}))})();