System.register(["./p-177439b1.system.js"],function(e){"use strict";var t,n,o,s;return{setters:[function(e){t=e.d,n=e.e,o=e.f,s=e.g}],execute:function(){var i=function(){function e(e){t(this,e),this.hadIconOnce=!1,this.clearToast=n(this,"clearToast",7),this.toggleHeaderSearch=n(this,"toggleHeaderSearch",7)}return e.prototype.handleCodeClick=function(e){var t=this,n=this.el.querySelector(".toast-bar__section:first-child"),o=document.createElement("textarea");o.value='<ion-icon name="'+e+'"></ion-icon>',o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),this.showCopiedConfirm&&(window.clearTimeout(this.showCopiedConfirm),this.showCopiedConfirm=0),n.classList.add("copied"),this.showCopiedConfirm=window.setTimeout(function(){n.classList.remove("copied"),t.showCopiedConfirm=0},1500)},e.prototype.componentDidLoad=function(){this.el.addEventListener("touchstart",this.handleTouchStart.bind(this),!1),this.el.addEventListener("touchend",this.handleTouchEnd.bind(this),!1)},e.prototype.handleTouchStart=function(e){e.target.classList.contains("toast-bar--inner")&&(e.preventDefault(),this.touchStartY=e.changedTouches[0].screenY)},e.prototype.handleTouchEnd=function(e){e.target.classList.contains("toast-bar--inner")&&(e.preventDefault(),this.touchEndY=e.changedTouches[0].screenY,this.touchEndY>this.touchStartY&&this.clearToast.emit())},e.prototype.render=function(){var e,t,n,s=this,i=null;return this.selectedIcon&&(this.hadIconOnce||(this.hadIconOnce=!0),n=this.selectedIcon.name,"logo"===(t=this.selectedIcon.icons[0].startsWith("logo-")?"logo":this.selectedIconType)&&(n="logo-"+n),e=8*('<ion-icon name="'+n+'"></ion-icon>').length+32,i=this.selectedIcon.icons.map(function(e){var t;switch(e.substr(0,e.indexOf("-"))){case"ios":t="iOS STYLE";break;case"md":t="MATERIAL STYLE";break;case"logo":t="LOGO"}return o("div",{class:"toast-bar__section"},o("div",{class:"toast-bar__section-header"},o("h6",null,t)),o("div",{class:"btn-group"},o("div",{class:"btn btn--gray btn--small btn--icon"},o("i",{class:"ion ion-"+e})),o("a",{class:"btn btn--gray btn--small",download:"/ionicons/svg/"+e+".svg",href:"/ionicons/svg/"+e+".svg"},o("i",{class:"ion ion-md-download"}),"SVG")))})),o("div",{class:"toast-bar "+(this.selectedIcon?"isVisible":"")+" "+(!this.selectedIcon&&this.hadIconOnce?"isHidden":"")+" "+(this.hadIconOnce?"":"preload"),onClick:function(e){return e.stopPropagation()}},o("div",{class:"container"},o("div",{class:"toast-bar--inner"},this.selectedIcon&&o("h4",null,this.selectedIcon.name),this.selectedIcon&&o("div",{class:"toast-bar__details"},o("div",{class:"toast-bar__section",style:{maxWidth:e+"px"}},o("div",{class:"toast-bar__section-header"},o("div",null,o("h6",null,"Web component code"),o("span",{class:"confirmation"},o("i",{class:"ion ion-md-checkmark"}),"Copied")),o("stencil-route-link",{url:"/usage#"+t+"-"+this.selectedIcon.name,onClick:function(){return s.toggleHeaderSearch.emit("hide")}},"Usage",o("i",{class:"ion ion-ios-arrow-forward"}))),o("code",null,o("span",{class:"hover-highlight",onClick:function(){return s.handleCodeClick(n)}},"<",o("span",{class:"yellow"},"ion-icon")," ",o("span",{class:"orange"},"name"),"=",o("span",{class:"green"},'"'+n+'"'),">","</",o("span",{class:"yellow"},"ion-icon"),">"))),i))))},Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"toast-bar .toast-bar{position:fixed;padding:12px 0;left:0;bottom:0;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%)}toast-bar .toast-bar.isVisible{-webkit-animation-name:slideIn;animation-name:slideIn;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:var(--easeOutExpo);animation-timing-function:var(--easeOutExpo);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;opacity:1}\@-webkit-keyframes slideIn{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes slideIn{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}toast-bar .toast-bar.isHidden{-webkit-animation-name:slideOut;animation-name:slideOut;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-timing-function:var(--easeOutExpo);animation-timing-function:var(--easeOutExpo);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}\@-webkit-keyframes slideOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}99%{opacity:1}to{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}\@keyframes slideOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}99%{opacity:1}to{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}}toast-bar .toast-bar.preload{opacity:0}toast-bar .toast-bar--inner{background-color:var(--color-shark);height:80px;border-radius:15px;padding:0 20px 0 30px;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 16px 32px 0 rgba(0,0,0,.1),0 8px 16px 0 rgba(0,0,0,.08);box-shadow:0 16px 32px 0 rgba(0,0,0,.1),0 8px 16px 0 rgba(0,0,0,.08)}toast-bar .toast-bar--inner h4{color:#fff;margin:0;white-space:nowrap;margin-right:30px}toast-bar .toast-bar__details{-ms-flex:1 0 auto;flex:1 0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}toast-bar .toast-bar__section-header,toast-bar .toast-bar__section-header>div{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}toast-bar .toast-bar__section-header{height:10px;margin-bottom:7px}toast-bar .toast-bar__section-header h6{display:inline-block}toast-bar .toast-bar__section-header a{-webkit-transition:border .3s;transition:border .3s;color:var(--color-melrose);font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;text-decoration:none;border-bottom:1px solid transparent}toast-bar .toast-bar__section-header a:hover{border-bottom-color:var(--color-melrose-dark)}toast-bar .toast-bar__section-header i{margin-left:3px}toast-bar .toast-bar__section:not(:first-child){margin-left:20px}toast-bar .toast-bar__section:first-child{position:relative;max-width:none}toast-bar .toast-bar__details code{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:14px;line-height:14px;height:32px;padding:0 12px;cursor:text;overflow:hidden}\@supports (display:grid){toast-bar .toast-bar__section:not(:first-child){-ms-flex:0;flex:0}toast-bar .toast-bar__section:first-child{-ms-flex:1;flex:1}toast-bar .toast-bar__details code{overflow-x:auto}}toast-bar .toast-bar__details code>span{position:absolute;white-space:nowrap}toast-bar .toast-bar__section .confirmation{font-size:11px;font-family:Eina;font-weight:600;color:#aec6ff;display:-ms-flexbox;display:flex;opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px);margin-left:12px}toast-bar .toast-bar__section .confirmation .ion{color:#aec6ff;font-size:14px;margin-right:4px}toast-bar .toast-bar__section.copied .confirmation{-webkit-animation-name:slideInOut;animation-name:slideInOut;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}\@-webkit-keyframes slideInOut{0%{opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px)}10%{opacity:.9;-webkit-transform:translateY(0);transform:translateY(0)}90%{opacity:.9;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-5px);transform:translateY(-5px)}}\@keyframes slideInOut{0%{opacity:0;-webkit-transform:translateY(5px);transform:translateY(5px)}10%{opacity:.9;-webkit-transform:translateY(0);transform:translateY(0)}90%{opacity:.9;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-5px);transform:translateY(-5px)}}toast-bar .toast-bar__details code:hover .hover-highlight{background-color:#5882b2}\@media screen and (max-width:768px){toast-bar .toast-bar__section:not(:first-child){display:none}}\@media screen and (max-width:540px){toast-bar .toast-bar--inner{padding:16px;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;height:auto}toast-bar .toast-bar--inner h4{margin:0 0 16px}toast-bar .toast-bar__section{max-width:100%!important}toast-bar .toast-bar__details{-ms-flex:0 0 auto;flex:0 0 auto;width:100%}}"},enumerable:!0,configurable:!0}),e}();e("toast_bar",i)}}});