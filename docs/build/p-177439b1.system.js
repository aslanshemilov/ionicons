var n=this&&this.__extends||function(){var n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(t,r)};return function(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}(),t=this&&this.__awaiter||function(n,t,r,e){return new(r||(r=Promise))(function(i,o){function u(n){try{c(e.next(n))}catch(n){o(n)}}function f(n){try{c(e.throw(n))}catch(n){o(n)}}function c(n){n.done?i(n.value):new r(function(t){t(n.value)}).then(u,f)}c((e=e.apply(n,t||[])).next())})},r=this&&this.__generator||function(n,t){var r,e,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:f(0),throw:f(1),return:f(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function f(o){return function(f){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,e&&(i=2&o[0]?e.return:o[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,o[1])).done)return i;switch(e=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,e=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(n,u)}catch(n){o=[6,n],e=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,f])}}};System.register([],function(e,i){"use strict";return{execute:function(){var o=this;e("f",W);var u=window,f=document,c={t:0,i:"",raf:function(n){return requestAnimationFrame(n)},ael:function(n,t,r,e){return n.addEventListener(t,r,e)},rel:function(n,t,r,e){return n.removeEventListener(t,r,e)}},a=function(){var n=!1;try{f.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){n=!0}}))}catch(n){}return n}(),s=function(){try{return new CSSStyleSheet,!0}catch(n){}return!1}(),l={},v=new WeakMap,d=function(n){return v.get(n)},h=(e("d",function(n,t){return v.set(t.o=n,t)}),function(n){var t={t:0,u:n};return t.s=new Promise(function(n){return t.l=n}),t.v=new Map,v.set(n,t)}),w=function(n,t){return t in n},$=function(n){return console.error(n)},y=function(n){return i.import("./"+n.h+".entry.js").then(function(t){return t[n.$.replace(/-/g,"_")]},$)},p=new Map,m=u.__stencil_cssshim,b=0,g=!1,k=[],j=[],S=[],U=function(n){return function(t){n.push(t),g||(g=!0,c.raf(R))}},L=function(n,t){for(var r=0,e=0;r<n.length&&(e=performance.now())<t;)try{n[r++](e)}catch(n){$(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},R=function(){b++,function(n){for(var t=0;t<n.length;t++)try{n[t](performance.now())}catch(n){$(n)}n.length=0}(k);var n=2==(6&c.t)?performance.now()+7*Math.ceil(b*(1/22)):1/0;L(j,n),L(S,n),j.length>0&&(S.push.apply(S,j),j.length=0),(g=k.length+j.length+S.length>0)?c.raf(R):b=0},_=Promise.resolve(),x=U(k),O=U(j),M={},P=function(n){return null!=n},C=function(n){return n.toLowerCase()};e("c",function(){return u.CSS&&u.CSS.supports&&u.CSS.supports("color","var(--c)")?Promise.resolve():i.import("./p-f57d4852.system.js")}),e("a",function(){return t(o,void 0,void 0,function(){var n,t,e;return r(this,function(r){switch(r.label){case 0:return""===(n=i.meta.url)?[3,1]:[2,Promise.resolve(new URL(".",n).href)];case 1:return t=Array.from(f.querySelectorAll("script")).find(function(n){return n.src.includes("/docssite.esm.js")||"docssite"===n.getAttribute("data-namespace")}),e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,f.baseURI)),E(e.href),window.customElements?[3,3]:[4,i.import("./p-7889326c.system.js")];case 2:r.sent(),r.label=3;case 3:return[2,e.href]}})})});var E=function(n){var t="__sc_import_"+"docssite".replace(/\s|-/g,"_");try{u[t]=new Function("w","return import(w);")}catch(e){var r=new Map;u[t]=function(e){var i=new URL(e,n).href,o=r.get(i);if(!o){var c=f.createElement("script");c.type="module",c.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"})),o=new Promise(function(n){c.onload=function(){n(u[t].m),c.remove()}}),r.set(i,o),f.head.appendChild(c)}return o}}},T="http://www.w3.org/1999/xlink",A=new WeakMap,D=function(n){return"sc-"+n},F=[];function W(n,t){for(var r,e,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)F.push(arguments[f]);for(;F.length>0;){var c=F.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)F.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].p+=c:null===i?i=[u?{t:0,p:c}:c]:i.push(u?{t:0,p:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&F.push(f);t.class=F.join(" "),F.length=0}null!=t.key&&(r=t.key),null!=t.name&&(e=t.name)}if("function"==typeof n)return n(t,i||[],G);var a={g:n,k:i,j:void 0,t:0};return a.S=t,a.p=void 0,a.U=r,a.L=e,a}var q,N,B={},G={forEach:function(n,t){return n.map(H).forEach(t)},map:function(n,t){return n.map(H).map(t).map(z)}},H=function(n){return{vattrs:n.S,vchildren:n.k,vkey:n.U,vname:n.L,vtag:n.g,vtext:n.p}},z=function(n){return{t:0,S:n.vattrs,k:n.vchildren,U:n.vkey,L:n.vname,g:n.vtag,p:n.vtext}},I=function(n,t,r,e,i,o){if(r!==e)if("class"!==t||i)if("style"===t){for(var u in r)e&&null!=e[u]||(u.includes("-")?n.style.removeProperty(u):n.style[u]="");for(var u in e)r&&e[u]===r[u]||(u.includes("-")?n.style.setProperty(u,e[u]):n.style[u]=e[u])}else if("key"===t);else if("ref"===t)e&&e(n);else if(t.startsWith("on")&&!w(n,t))t=w(n,C(t))?C(t.substring(2)):C(t[2])+t.substring(3),r&&c.rel(n,t,r,!1),e&&c.ael(n,t,e,!1);else{var f=w(n,t),a=["object","function"].includes(typeof e);if((f||a&&null!==e)&&!i)try{n[t]=null==e&&-1===n.tagName.indexOf("-")?"":e}catch(n){}var s=!(!i||t===(t=t.replace(/^xlink\:?/,"")));null==e||!1===e?s?n.removeAttributeNS(T,C(t)):n.removeAttribute(t):(!f||4&o||i)&&!a&&(e=!0===e?"":e.toString(),s?n.setAttributeNS(T,C(t),e):n.setAttribute(t,e))}else{var l=J(r),v=J(n.className).filter(function(n){return!l.includes(n)});n.className=v.concat(J(e).filter(function(n){return!v.includes(n)})).join(" ")}},J=function(n){return n?n.split(" "):[]},K=function(n,t,r,e){var i=11===t.j.nodeType&&t.j.host?t.j.host:t.j,o=n&&n.S||M,u=t.S||M;for(e in o)null==u[e]&&null!=o[e]&&I(i,e,o[e],void 0,r,t.t);for(e in u)I(i,e,o[e],u[e],r,t.t)},Q=!1,V=!1,X=!1,Y=!1,Z=function(n,t,r){var e,i,o,u=t.k[r],c=0;if(Q||(X=!0,"slot"===u.g&&(u.t|=u.k?2:1)),P(u.p))u.j=f.createTextNode(u.p);else if(1&u.t)u.j=f.createTextNode("");else{if(e=u.j=Y||"svg"===u.g?f.createElementNS("http://www.w3.org/2000/svg",u.g):f.createElement(2&u.t?"slot-fb":u.g),K(null,u,Y="svg"===u.g||"foreignObject"!==u.g&&Y),u.k)for(c=0;c<u.k.length;++c)(i=Z(n,u,c,e))&&e.appendChild(i);"svg"===u.g&&(Y=!1)}return u.j["s-hn"]=N,3&u.t&&(u.j["s-sr"]=!0,u.j["s-cr"]=q,u.j["s-sn"]=u.L||"",(o=n&&n.k&&n.k[r])&&o.g===u.g&&n.j&&nn(n.j,!1)),u.j},nn=function(n,t){c.t|=1;for(var r=n.childNodes,e=r.length-1;e>=0;e--){var i=r[e];i["s-hn"]!==N&&i["s-ol"]&&(un(i).insertBefore(i,on(i)),i["s-ol"].remove(),i["s-ol"]=void 0,X=!0),t&&nn(i,t)}c.t&=-2},tn=function(n,t,r,e,i,o){for(var u,f=n["s-cr"]&&n["s-cr"].parentNode||n;i<=o;++i)e[i]&&(u=Z(null,r,i,n))&&(e[i].j=u,f.insertBefore(u,on(t)))},rn=function(n,t,r,e){for(;t<=r;++t)P(n[t])&&(e=n[t].j,ln(n[t],!0),V=!0,e["s-ol"]?e["s-ol"].remove():nn(e,!0),e.remove())},en=function(n,t){return n.g===t.g&&("slot"===n.g?n.L===t.L:n.U===t.U)},on=function(n){return n&&n["s-ol"]?n["s-ol"]:n},un=function(n){return(n["s-ol"]?n["s-ol"]:n).parentNode},fn=function(n,t){var r,e=t.j=n.j,i=n.k,o=t.k;Y=e&&P(e.parentNode)&&void 0!==e.ownerSVGElement,Y="svg"===t.g||"foreignObject"!==t.g&&Y,P(t.p)?(r=e["s-cr"])?r.parentNode.textContent=t.p:n.p!==t.p&&(e.textContent=t.p):("slot"===t.g||K(n,t,Y),P(i)&&P(o)?function(n,t,r,e){for(var i,o,u=0,f=0,c=0,a=0,s=t.length-1,l=t[0],v=t[s],d=e.length-1,h=e[0],w=e[d];u<=s&&f<=d;)if(null==l)l=t[++u];else if(null==v)v=t[--s];else if(null==h)h=e[++f];else if(null==w)w=e[--d];else if(en(l,h))fn(l,h),l=t[++u],h=e[++f];else if(en(v,w))fn(v,w),v=t[--s],w=e[--d];else if(en(l,w))"slot"!==l.g&&"slot"!==w.g||nn(l.j.parentNode,!1),fn(l,w),n.insertBefore(l.j,v.j.nextSibling),l=t[++u],w=e[--d];else if(en(v,h))"slot"!==l.g&&"slot"!==w.g||nn(v.j.parentNode,!1),fn(v,h),n.insertBefore(v.j,l.j),v=t[--s],h=e[++f];else{for(c=-1,a=u;a<=s;++a)if(t[a]&&P(t[a].U)&&t[a].U===h.U){c=a;break}c>=0?((o=t[c]).g!==h.g?i=Z(t&&t[f],r,c,n):(fn(o,h),t[c]=void 0,i=o.j),h=e[++f]):(i=Z(t&&t[f],r,f,n),h=e[++f]),i&&un(l.j).insertBefore(i,on(l.j))}u>s?tn(n,null==e[d+1]?null:e[d+1].j,r,e,f,d):f>d&&rn(t,u,s)}(e,i,t,o):P(o)?(P(n.p)&&(e.textContent=""),tn(e,null,t,o,0,o.length-1)):P(i)&&rn(i,0,i.length-1)),Y&&"svg"===t.g&&(Y=!1)},cn=function(n,t,r,e,i,o,u,f){for(e=0,i=(r=n.childNodes).length;e<i;e++)if(1===(t=r[e]).nodeType){if(t["s-sr"])for(u=t["s-sn"],t.hidden=!1,o=0;o<i;o++)if(r[o]["s-hn"]!==t["s-hn"])if(f=r[o].nodeType,""!==u){if(1===f&&u===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===f||3===f&&""!==r[o].textContent.trim()){t.hidden=!0;break}cn(t)}},an=[],sn=function(n){var t,r,e,i,o,u=n.childNodes,f=0,c=0,a=0;for(t=u.length;f<t;f++){if((r=u[f])["s-sr"]&&(e=r["s-cr"]))for(o=r["s-sn"],c=(i=e.parentNode.childNodes).length-1;c>=0;c--)(e=i[c])["s-cn"]||e["s-nr"]||e["s-hn"]===r["s-hn"]||((3===(a=e.nodeType)||8===a)&&""===o||1===a&&null===e.getAttribute("slot")&&""===o||1===a&&e.getAttribute("slot")===o)&&(an.some(function(n){return n.nodeToRelocate===e})||(V=!0,e["s-sn"]=o,an.push({slotRefNode:r,nodeToRelocate:e})));1===r.nodeType&&sn(r)}},ln=function(n,t){n&&(n.S&&n.S.ref&&n.S.ref(t?null:n.j),n.k&&n.k.forEach(function(n){ln(n,t)}))},vn=function(n,e){return t(o,void 0,void 0,function(){var t;return r(this,function(r){switch(r.label){case 0:if(!n||!n[e])return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,n[e]()];case 2:return r.sent(),[3,4];case 3:return t=r.sent(),$(t),[3,4];case 4:return[2]}})})},dn=function(n,e,i,u){return t(o,void 0,void 0,function(){var t;return r(this,function(r){switch(r.label){case 0:return e.t|=16,t=e.o,u?[4,vn(t,"componentWillLoad")]:[3,2];case 1:r.sent(),r.label=2;case 2:return O(function(){return hn(n,e,i,u,t)}),[2]}})})},hn=function(n,t,r,e,i){t.t&=-17,n["s-lr"]=!1,e&&function(n,t){!function(n,r,e,i){var o=D(t.$),u=p.get(o);if(n=11===n.nodeType?n:f,u)if("string"==typeof u){var c=A.get(n=n.head||n),a=void 0;if(c||A.set(n,c=new Set),!c.has(o)){if(m){var s=(a=m.createHostStyle(i,o,u))["s-sc"];s&&(o=s,c=null)}else(a=f.createElement("style")).innerHTML=u;n.appendChild(a),c&&c.add(o)}}else n.adoptedStyleSheets.includes(u)||(n.adoptedStyleSheets=n.adoptedStyleSheets.concat([u]))}(n.getRootNode(),0,0,n)}(n,r),t.t|=4;try{!function(n,t,r,e){var i,o=t.R||{t:0};if(N=C(n.tagName),(i=e)&&i.g===B?e.g=null:e=W(null,null,e),r._&&(e.S=e.S||{},r._.forEach(function(t){return e.S[t[1]]=n[t[0]]})),e.t|=4,t.R=e,e.j=o.j=n,q=n["s-cr"],Q=!1,X=V=!1,fn(o,e),X){sn(e.j);for(var u=0;u<an.length;u++)(a=an[u]).nodeToRelocate["s-ol"]||((v=f.createTextNode(""))["s-nr"]=a.nodeToRelocate,a.nodeToRelocate.parentNode.insertBefore(a.nodeToRelocate["s-ol"]=v,a.nodeToRelocate));for(c.t|=1,u=0;u<an.length;u++){for(var a,s=(a=an[u]).slotRefNode.parentNode,l=a.slotRefNode.nextSibling,v=a.nodeToRelocate["s-ol"];v=v.previousSibling;){var d=v["s-nr"];if(d&&d&&d["s-sn"]===a.nodeToRelocate["s-sn"]&&s===d.parentNode&&(d=d.nextSibling)&&d&&!d["s-nr"]){l=d;break}}(!l&&s!==a.nodeToRelocate.parentNode||a.nodeToRelocate.nextSibling!==l)&&a.nodeToRelocate!==l&&s.insertBefore(a.nodeToRelocate,l)}c.t&=-2}V&&cn(e.j),an.length=0}(n,t,r,i.render&&i.render())}catch(n){$(n)}t.t&=-5,m&&m.updateHost(n),n["s-lr"]=!0,t.t|=2,n["s-rc"].length>0&&(n["s-rc"].forEach(function(n){return n()}),n["s-rc"].length=0),wn(n,t)},wn=function(n,t,r){if(!n["s-al"]){var e=t.o,i=t.O;512&t.t?vn(e,"componentDidUpdate"):(t.t|=512,n.classList.add("hydrated"),vn(e,"componentDidLoad"),t.l(n),i||(f.documentElement.classList.add("hydrated"),setTimeout(function(){return c.t|=2},999))),i&&((r=i["s-al"])&&(r.delete(n),0===r.size&&(i["s-al"]=void 0,i["s-init"]())),t.O=void 0)}},$n=function(n,t,r,e){if(t.M){n.watchers&&(t.P=n.watchers);var i=Object.entries(t.M);if(i.forEach(function(r){var i=r[0],o=r[1][0];(31&o||e&&32&o)&&Object.defineProperty(n.prototype,i,{get:function(){return n=i,d(this).v.get(n);var n},set:function(n){!function(n,t,r,e){var i,o,u=d(n),f=u.u,c=u.v.get(t),a=u.t;if(o=e.M[t][0],!((r=null!=(i=r)&&"object"!=typeof i&&"function"!=typeof i?4&o?"false"!==i&&(""===i||!!i):2&o?parseFloat(i):1&o?String(i):i:i)===c||8&a&&void 0!==c)&&(u.v.set(t,r),u.o)){if(e.P&&1==(9&a)){var s=e.P[t];s&&s.forEach(function(n){try{u.o[n].call(u.o,r,c,t)}catch(n){$(n)}})}2==(22&a)&&dn(f,u,e,!1)}}(this,i,n,t)},configurable:!0,enumerable:!0})}),r){var o=new Map;n.prototype.attributeChangedCallback=function(n,t,r){var e=o.get(n);this[e]=(null!==r||"boolean"!=typeof this[e])&&r},n.observedAttributes=i.filter(function(n){return 15&n[1][0]}).map(function(n){var r=n[0],e=n[1],i=e[1]||r;return o.set(i,r),512&e[0]&&t._.push([r,i]),i})}}return n},yn=function(n,e,i,u,f){return t(o,void 0,void 0,function(){var t,o;return r(this,function(r){switch(r.label){case 0:return 0!=(256&e.t)?[3,2]:(e.t|=256,[4,y(i)]);case 1:(f=r.sent()).isProxied||(i.P=f.watchers,$n(f,i,0,1),f.isProxied=!0),e.t|=8;try{new f(e)}catch(n){$(n)}e.t&=-9,pn(e.o),!f.isStyleRegistered&&f.style&&(t=f.style,function(n,t){var r=p.get(n);s?(r=r||new CSSStyleSheet).replace(t):r=t,p.set(n,r)}(D(i.$),t),f.isStyleRegistered=!0),r.label=2;case 2:return(o=e.O)&&!o["s-lr"]&&o["s-rc"]?o["s-rc"].push(function(){return yn(n,e,i)}):dn(n,e,i,!0),[2]}})})},pn=function(n){vn(n,"connectedCallback")},mn=(e("b",function(t,r){void 0===r&&(r={});var e=[],i=r.exclude||[],o=f.head,s=u.customElements,l=o.querySelector("meta[charset]"),v=f.createElement("style");Object.assign(c,r),c.i=new URL(r.resourcesUrl||"/",f.baseURI).href,r.syncQueue&&(c.t|=4),t.forEach(function(t){return t[1].forEach(function(r){var o={t:r[0],$:r[1],M:r[2],C:r[3],_:[],P:{}},l=o.$,v=function(t){function r(n){var r=t.call(this,n)||this;return n=r,r["s-lr"]=!1,r["s-rc"]=[],h(n),r}return n(r,t),r.prototype.connectedCallback=function(){!function(n,t){if(0==(1&c.t)){var r=d(n);if(t.C&&(r.T=function(n,r){var e=t.C.map(function(t){var e=t[0],i=t[1],o=t[2],s=function(n,t){return 8&t?u:32&t?f.body:n}(n,e),l=function(n,t){return function(r){return n.o?n.o[t](r):n.s.then(function(){return n.o[t](r)}).catch($)}}(r,o),v=function(n){return a?{passive:0!=(1&n),capture:0!=(2&n)}:0!=(2&n)}(e);return c.ael(s,i,l,v),function(){return c.rel(s,i,l,v)}});return function(){return e.forEach(function(n){return n()})}}(n,r)),!(1&r.t)){r.t|=1,4&t.t&&function(n,t){(t=n["s-cr"]=f.createComment(""))["s-cn"]=!0,n.insertBefore(t,n.firstChild)}(n);for(var e=n;e=e.parentNode||e.host;)if(e["s-init"]&&!e["s-lr"]){r.O=e,(e["s-al"]=e["s-al"]||new Set).add(n);break}t.M&&Object.entries(t.M).forEach(function(t){var r=t[0];if(31&t[1][0]&&n.hasOwnProperty(r)){var e=n[r];delete n[r],n[r]=e}}),yn(n,r,t)}pn(r.o)}}(this,o)},r.prototype.disconnectedCallback=function(){!function(n){if(0==(1&c.t)){var t=d(n);t.T&&(t.T(),t.T=void 0),m&&m.removeHost(n);var r=t.o;vn(r,"disconnectedCallback"),vn(r,"componentDidUnload")}}(this)},r.prototype["s-init"]=function(){var n=d(this);n.o&&wn(this,n)},r.prototype["s-hmr"]=function(){},r.prototype.forceUpdate=function(){dn(this,d(this),o,!1)},r.prototype.componentOnReady=function(){return d(this).s},r}(HTMLElement);o.h=t[0],i.includes(l)||s.get(l)||(e.push(l),s.define(l,$n(v,o,1,0)))})}),v.innerHTML=e+"{visibility:hidden}.hydrated{visibility:inherit}",v.setAttribute("data-styles",""),o.insertBefore(v,l?l.nextSibling:o.firstChild)}),e("e",function(n,t,r){var e=mn(n);return{emit:function(n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&r),composed:!!(2&r),cancelable:!!(1&r),detail:n}))}}}),e("h",function(n,t){return t in l?l[t]:"window"===t?u:"document"===t?f:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(r=new URL(".",c.i)).origin!==u.location.origin?r.href:r.pathname:"queue"===t?{write:O,read:x,tick:_}:void 0));var r}),e("g",function(n){return d(n).u}))}}});