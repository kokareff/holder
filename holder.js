/*!

Holder - client side image placeholders
Version 2.4.0+avwzt
© 2014 Ivan Malopinsky - http://imsky.co

Site:		http://imsky.github.io/holder
Issues:		https://github.com/imsky/holder/issues
License:	http://opensource.org/licenses/MIT

*/
!function(t,e,n){e[t]=n}("onDomReady",this,function(t){"use strict";function e(t){if(!b){if(!a.body)return r(e);for(b=!0;t=S.shift();)r(t)}}function n(t){(w||t.type===l||a[h]===c)&&(i(),e())}function i(){w?(a[v](p,n,u),t[v](l,n,u)):(a[g](x,n),t[g](d,n))}function r(t,e){setTimeout(t,+e>=0?e:1)}function o(t){b?r(t):S.push(t)}null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function C(){document.removeEventListener("DOMContentLoaded",C,!1),document.readyState="complete"},!1),document.readyState="loading");var a=t.document,s=a.documentElement,l="load",u=!1,d="on"+l,c="complete",h="readyState",f="attachEvent",g="detachEvent",m="addEventListener",p="DOMContentLoaded",x="onreadystatechange",v="removeEventListener",w=m in a,y=u,b=u,S=[];if(a[h]===c)r(e);else if(w)a[m](p,n,u),t[m](l,n,u);else{a[f](x,n),t[f](d,n);try{y=null==t.frameElement&&s}catch(A){}y&&y.doScroll&&!function E(){if(!b){try{y.doScroll("left")}catch(t){return r(E,50)}i(),e()}}()}return o.version="1.4.0",o.isReady=function(){return b},o}(this)),document.querySelectorAll||(document.querySelectorAll=function(t){var e,n=document.createElement("style"),i=[];for(document.documentElement.firstChild.appendChild(n),document._qsa=[],n.styleSheet.cssText=t+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",window.scrollBy(0,0),n.parentNode.removeChild(n);document._qsa.length;)e=document._qsa.shift(),e.style.removeAttribute("x-qsa"),i.push(e);return document._qsa=null,i}),document.querySelector||(document.querySelector=function(t){var e=document.querySelectorAll(t);return e.length?e[0]:null}),document.getElementsByClassName||(document.getElementsByClassName=function(t){return t=String(t).replace(/^|\s+/g,"."),document.querySelectorAll(t)}),function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.atob=t.atob||function(t){t=String(t);var n,i=0,r=[],o=0,a=0;if(t=t.replace(/\s/g,""),t.length%4===0&&(t=t.replace(/=+$/,"")),t.length%4===1)throw Error("InvalidCharacterError");if(/[^+/0-9A-Za-z]/.test(t))throw Error("InvalidCharacterError");for(;i<t.length;)n=e.indexOf(t.charAt(i)),o=o<<6|n,a+=6,24===a&&(r.push(String.fromCharCode(o>>16&255)),r.push(String.fromCharCode(o>>8&255)),r.push(String.fromCharCode(255&o)),a=0,o=0),i+=1;return 12===a?(o>>=4,r.push(String.fromCharCode(255&o))):18===a&&(o>>=2,r.push(String.fromCharCode(o>>8&255)),r.push(String.fromCharCode(255&o))),r.join("")},t.btoa=t.btoa||function(t){t=String(t);var n,i,r,o,a,s,l,u=0,d=[];if(/[^\x00-\xFF]/.test(t))throw Error("InvalidCharacterError");for(;u<t.length;)n=t.charCodeAt(u++),i=t.charCodeAt(u++),r=t.charCodeAt(u++),o=n>>2,a=(3&n)<<4|i>>4,s=(15&i)<<2|r>>6,l=63&r,u===t.length+2?(s=64,l=64):u===t.length+1&&(l=64),d.push(e.charAt(o),e.charAt(a),e.charAt(s),e.charAt(l));return d.join("")}}(this),function(){function t(e,n,i){e.document;var r,o=e.currentStyle[n].match(/([\d\.]+)(%|cm|em|in|mm|pc|pt|)/)||[0,0,""],a=o[1],s=o[2];return i=i?/%|em/.test(s)&&e.parentElement?t(e.parentElement,"fontSize",null):16:i,r="fontSize"==n?i:/width/i.test(n)?e.clientWidth:e.clientHeight,"%"==s?a/100*r:"cm"==s?.3937*a*96:"em"==s?a*i:"in"==s?96*a:"mm"==s?.3937*a*96/10:"pc"==s?12*a*96/72:"pt"==s?96*a/72:a}function e(t,e){var n="border"==e?"Width":"",i=e+"Top"+n,r=e+"Right"+n,o=e+"Bottom"+n,a=e+"Left"+n;t[e]=(t[i]==t[r]&&t[i]==t[o]&&t[i]==t[a]?[t[i]]:t[i]==t[o]&&t[a]==t[r]?[t[i],t[r]]:t[a]==t[r]?[t[i],t[r],t[o]]:[t[i],t[r],t[o],t[a]]).join(" ")}function n(n){var i,r=this,o=n.currentStyle,a=t(n,"fontSize"),s=function(t){return"-"+t.toLowerCase()};for(i in o)if(Array.prototype.push.call(r,"styleFloat"==i?"float":i.replace(/[A-Z]/,s)),"width"==i)r[i]=n.offsetWidth+"px";else if("height"==i)r[i]=n.offsetHeight+"px";else if("styleFloat"==i)r.float=o[i];else if(/margin.|padding.|border.+W/.test(i)&&"auto"!=r[i])r[i]=Math.round(t(n,i,a))+"px";else if(/^outline/.test(i))try{r[i]=o[i]}catch(l){r.outlineColor=o.color,r.outlineStyle=r.outlineStyle||"none",r.outlineWidth=r.outlineWidth||"0px",r.outline=[r.outlineColor,r.outlineWidth,r.outlineStyle].join(" ")}else r[i]=o[i];e(r,"margin"),e(r,"padding"),e(r,"border"),r.fontSize=Math.round(a)+"px"}window.getComputedStyle||(n.prototype={constructor:n,getPropertyPriority:function(){throw new Error("NotSupportedError: DOM Exception 9")},getPropertyValue:function(t){return this[t.replace(/-\w/g,function(t){return t[1].toUpperCase()})]},item:function(t){return this[t]},removeProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},setProperty:function(){throw new Error("NoModificationAllowedError: DOM Exception 7")},getPropertyCSSValue:function(){throw new Error("NotSupportedError: DOM Exception 9")}},window.getComputedStyle=Window.prototype.getComputedStyle=function(t){return new n(t)})}(),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(t){var e=this.__proto__||this.constructor.prototype;return t in this&&(!(t in e)||e[t]!==this[t])}),function(t,e){t.augment=e()}(this,function(){"use strict";var t=function(){},e=Array.prototype.slice,n=function(n,i){var r=t.prototype="function"==typeof n?n.prototype:n,o=new t,a=i.apply(o,e.call(arguments,2).concat(r));if("object"==typeof a)for(var s in a)o[s]=a[s];if(!o.hasOwnProperty("constructor"))return o;var l=o.constructor;return l.prototype=o,l};return n.defclass=function(t){var e=t.constructor;return e.prototype=t,e},n.extend=function(t,e){return n(t,function(t){return this.uber=t,e})},n}),function(t,e){function n(t,e,n,r){var a=i(n.substr(n.lastIndexOf(t.domain)),t);a&&o(a.fluid?"fluid":"image",r,a,n,e)}function i(t,e){for(var n={theme:h(x.settings.themes.gray,{})},i=!1,r=t.split("/"),o=r.length,a=0;o>a;a++){var s=r[a];if(x.flags.dimensions.match(s))i=!0,n.dimensions=x.flags.dimensions.output(s);else if(x.flags.fluid.match(s))i=!0,n.dimensions=x.flags.fluid.output(s),n.fluid=!0;else if(x.flags.textmode.match(s))n.textmode=x.flags.textmode.output(s);else if(x.flags.colors.match(s)){var l=x.flags.colors.output(s);n.theme=h(n.theme,l)}else e.themes[s]?e.themes.hasOwnProperty(s)&&(n.theme=h(e.themes[s],{})):x.flags.font.match(s)?n.font=x.flags.font.output(s):x.flags.auto.match(s)?n.auto=!0:x.flags.text.match(s)&&(n.text=x.flags.text.output(s))}return i?n:!1}function r(t,e,n,i){var r=null,o=e.dimensions,a=e.theme,s=e.flags,l=o.width,d=o.height,c=u(l,d,a.size),h=a.font?a.font:"Arial, Helvetica, sans-serif",f=a.fontweight?a.fontweight:"bold",g=Math.floor(l)+"x"+Math.floor(d),m=a.text?a.text:g;if("literal"==s.textmode){var o=s.dimensions;m=o.width+"x"+o.height}else if("exact"==s.textmode&&s.exact_dimensions){var o=s.exact_dimensions;m=Math.floor(o.width)+"x"+Math.floor(o.height)}var p=new w({width:l,height:d}),x=new p.TextGroup("sceneText",{text:m,align:"center",font:h,size:c,weight:f,fill:a.foreground});p.root.add(x);var v=(y(p.root),{text:m,width:l,height:d,textHeight:c,font:h,fontWeight:f,template:a});if("canvas"==i.renderer?r=b(v):"svg"==i.renderer&&(r="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(S(v))))),null==r)throw"Holder: couldn't render placeholder";"background"==t?(n.style.backgroundImage="url("+r+")",n.style.backgroundSize=e.dimensions.width+"px "+e.dimensions.height+"px"):n.setAttribute("src",r),n.setAttribute("data-holder-rendered",!0)}function o(t,e,n,i,o){var s=n.dimensions,u=n.theme,d=n.text?decodeURIComponent(n.text):n.text,c=s.width+"x"+s.height,f={};d&&(f.text=d),n.font&&(f.font=n.font),u=h(u,f),"background"==t?null==e.getAttribute("data-background-src")&&e.setAttribute("data-background-src",i):e.setAttribute("data-src",i),n.theme=u,e.holderData={flags:n,instanceConfig:o},("image"==t||"fluid"==t)&&e.setAttribute("alt",d?d:u.text?u.text+" ["+c+"]":c),"image"==t?("html"!=o.renderer&&n.auto||(e.style.width=s.width+"px",e.style.height=s.height+"px"),"html"==o.renderer?e.style.backgroundColor=u.background:(r(t,{dimensions:s,theme:u,ratio:x.config.ratio,flags:n},e,o),n.textmode&&"exact"==n.textmode&&(x.runtime.resizableImages.push(e),a(e)))):"background"==t?"html"!=o.renderer&&r(t,{dimensions:s,theme:u,ratio:x.config.ratio,flags:n},e,o):"fluid"==t&&("%"==s.height.slice(-1)?e.style.height=s.height:null!=n.auto&&n.auto||(e.style.height=s.height+"px"),"%"==s.width.slice(-1)?e.style.width=s.width:null!=n.auto&&n.auto||(e.style.width=s.width+"px"),("inline"==e.style.display||""===e.style.display||"none"==e.style.display)&&(e.style.display="block"),l(e),"html"==o.renderer?e.style.backgroundColor=u.background:(x.runtime.resizableImages.push(e),a(e)))}function a(t){var e;e=null==t||null==t.nodeType?x.runtime.resizableImages:[t];for(var n in e)if(e.hasOwnProperty(n)){var i=e[n];if(i.holderData){var o=i.holderData.flags,l=s(i,v.invisibleErrorFn(a));if(l){if(o.fluid){var u=i.holderData.fluidConfig;if(o.auto)switch(u.mode){case"width":l.height=l.width/u.ratio;break;case"height":l.width=l.height*u.ratio}}var d={dimensions:l,theme:o.theme,ratio:x.config.ratio,flags:o};o.textmode&&"exact"==o.textmode&&(o.exact_dimensions=l,d.dimensions=o.dimensions),r("image",d,i,i.holderData.instanceConfig)}}}}function s(t,e){var n={height:t.clientHeight,width:t.clientWidth};return n.height||n.width?(t.removeAttribute("data-holder-invisible"),n):(t.setAttribute("data-holder-invisible",!0),void e.call(this,t))}function l(t){if(t.holderData){var e=s(t,v.invisibleErrorFn(l));if(e){var n=t.holderData.flags,i={fluidHeight:"%"==n.dimensions.height.slice(-1),fluidWidth:"%"==n.dimensions.width.slice(-1),mode:null,initialDimensions:e};i.fluidWidth&&!i.fluidHeight?(i.mode="width",i.ratio=i.initialDimensions.width/parseFloat(n.dimensions.height)):!i.fluidWidth&&i.fluidHeight&&(i.mode="height",i.ratio=parseFloat(n.dimensions.width)/i.initialDimensions.height),t.holderData.fluidConfig=i}}}function u(t,e,n){e=parseInt(e,10),t=parseInt(t,10);var i=Math.max(e,t),r=Math.min(e,t),o=1/12,a=Math.min(.75*r,.75*i*o);return Math.round(Math.max(n,a))}function d(t,e,n){var i="http://www.w3.org/2000/svg";return null==t&&(t=document.createElementNS(i,"svg")),t.webkitMatchesSelector&&t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("width",e),t.setAttribute("height",n),t.setAttribute("viewBox","0 0 "+e+" "+n),t.setAttribute("preserveAspectRatio","none"),t}function c(t){if(e.XMLSerializer){var n=new XMLSerializer,i="";return i+n.serializeToString(t)}}function h(t,e){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);return n}function f(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n+":"+t[n]);return e.join(";")}function g(t){x.runtime.debounceTimer||t.call(this),x.runtime.debounceTimer&&clearTimeout(x.runtime.debounceTimer),x.runtime.debounceTimer=setTimeout(function(){x.runtime.debounceTimer=null,t.call(this)},x.config.debounce)}function m(){g(function(){a(null)})}function p(t,e){var n=new Image;n.onerror=function(){e.call(this,!1,t)},n.onload=function(){e.call(this,!0,t)},n.src=t.src}var x={},v={addTheme:function(t,e){return null!=t&&null!=e&&(x.settings.themes[t]=e),this},addImage:function(t,e){var n=document.querySelectorAll(e);if(n.length)for(var i=0,r=n.length;r>i;i++){var o=document.createElement("img");o.setAttribute("data-src",t),n[i].appendChild(o)}return this},run:function(t){var r=h({},x.config);x.runtime.preempted=!0;var a=h(x.settings,t),s=[],l=[],u=[];for(a.use_canvas?r.renderer="canvas":a.use_svg&&(r.renderer="svg"),"string"==typeof a.images?l=document.querySelectorAll(a.images):e.NodeList&&a.images instanceof e.NodeList?l=a.images:e.Node&&a.images instanceof e.Node?l=[a.images]:e.HTMLCollection&&a.images instanceof e.HTMLCollection&&(l=a.images),"string"==typeof a.bgnodes?u=document.querySelectorAll(a.bgnodes):e.NodeList&&a.elements instanceof e.NodeList?u=a.bgnodes:e.Node&&a.bgnodes instanceof e.Node&&(u=[a.bgnodes]),f=0,c=l.length;c>f;f++)s.push(l[f]);for(var d=new RegExp(a.domain+'/(.*?)"?\\)'),c=u.length,f=0;c>f;f++){var g=e.getComputedStyle(u[f],null).getPropertyValue("background-image"),m=g.match(d),v=null;if(null==m){var w=u[f].getAttribute("data-background-src");null!=w&&(v=w)}else v=a.domain+"/"+m[1];if(null!=v){var y=i(v,a);y&&o("background",u[f],y,v,r)}}for(c=s.length,f=0;c>f;f++){var b,S;S=b=src=null;var A=null,C=s[f];try{S=C.getAttribute("src"),b=C.getAttribute("data-src"),A=C.getAttribute("data-holder-rendered")}catch(E){}var k=null!=S,z=null!=b,N=z&&0===b.indexOf(a.domain),M=null!=A&&"true"==A;k?0===S.indexOf(a.domain)?n(a,r,S,C):N&&(M?n(a,r,b,C):p({src:S,options:a,instanceConfig:r,dataSrc:b,image:C},function(t,e){t||n(e.options,e.instanceConfig,e.dataSrc,e.image)})):N&&n(a,r,b,C)}return this},invisibleErrorFn:function(){return function(t){if(t.hasAttribute("data-holder-invisible"))throw"Holder: invisible placeholder"}}},w=function(t){function e(t,e){for(var n in e)t[n]=e[n];return t}var n=1,i=augment.defclass({constructor:function(t){n++,this.parent=null,this.children={},this.name="node"+n,null!=t&&(this.name=t),this.translate={x:0,y:0},this.scale={x:0,y:0}},add:function(t){var e=t.name;if(null!=this.children[e])throw"SceneGraph: child with that name already exists: "+e;this.children[e]=t,t.parent=this},remove:function(t){if(null==this.children[t])throw"SceneGraph: child with that name doesn't exist: "+t;child.parent=null,delete this.children[t]},removeAll:function(){for(var t in this.children)this.children[t].parent=null,delete this.children[t]}}),r=augment(i,function(e){this.constructor=function(){e.constructor.call(this),this.properties=t}}),o=augment(i,function(t){this.constructor=function(n,i){if(t.constructor.call(this,n),this.properties={width:0,height:0,fill:"#000"},null!=i)e(this.properties,i);else if("string"!=typeof n)throw"SceneGraph: non-string assigned to node name"}}),a=augment(o,function(t){this.constructor=function(e,n){t.constructor.call(this,e,n)},this.textAsWords=function(){this.removeAll();for(var t=this.properties.text.split(" "),e=0;e<t.length;e++)this.add(new s(t[e]))},this.textAsSentence=function(){this.removeAll(),this.add(new s(this.properties.text))}}),s=augment(o,function(t){this.constructor=function(e){t.constructor.call(this),this.properties.text=e}}),l=new r;return{SceneShape:o,TextGroup:a,root:l}},y=function(){var t="http://www.w3.org/2000/svg",e=null,n=document.createElementNS(t,"text"),i=document.createTextNode(null);return n.setAttribute("x",0),n.setAttribute("y",0),n.appendChild(i),function(t){if(x.config.supportsSVG){var r=!1;null==e&&(r=!0),e=d(e,t.properties.width,t.properties.height),r&&(e.appendChild(n),document.body.appendChild(e),e.style.visibility="hidden",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.zIndex="-9999",e.setAttribute("width",0),e.setAttribute("height",0));var o=t.children.sceneText;n.setAttribute("y",o.properties.size),n.setAttribute("style",f({"font-weight":o.properties.weight,"font-size":o.properties.size+"px","font-family":o.properties.font,"dominant-baseline":"middle"})),i.nodeValue=o.properties.text;var a=n.getBBox(),s=o.properties.text.split(" ").length;i.nodeValue=o.properties.text.replace(/[ ]+/g,"");var l=n.getComputedTextLength(),u=a.width-l,c=Math.round(u/s),h=Math.ceil(a.width/t.properties.width);return{spaceWidth:c,lineCount:h,boundingBox:a}}return!1}}(),b=function(){var t=document.createElement("canvas"),e=t.getContext("2d");return function(n){return t.width=n.width,t.height=n.height,e.fillStyle=n.template.background,e.fillRect(0,0,n.width,n.height),e.textAlign="center",e.textBaseline="middle",e.font=n.fontWeight+" "+n.textHeight*x.config.ratio+"px "+n.font,e.fillStyle=n.template.foreground,e.fillText(n.text,n.width/2,n.height/2),t.toDataURL("image/png")}}(),S=function(){if(e.XMLSerializer){var t=d(null,0,0),n="http://www.w3.org/2000/svg",i=document.createElementNS(n,"rect"),r=document.createElementNS(n,"text"),o=document.createTextNode(null);return r.setAttribute("text-anchor","middle"),r.appendChild(o),t.appendChild(i),t.appendChild(r),function(e){if(isNaN(e.width)||isNaN(e.height)||isNaN(e.textHeight))throw"Holder: incorrect properties passed to SVG constructor";return d(t,e.width,e.height),i.setAttribute("width",e.width),i.setAttribute("height",e.height),i.setAttribute("fill",e.template.background),r.setAttribute("x",e.width/2),r.setAttribute("y",e.height/2),o.nodeValue=e.text,r.setAttribute("style",f({fill:e.template.foreground,"font-weight":e.fontWeight,"font-size":e.textHeight+"px","font-family":e.font,"dominant-baseline":"central"})),c(t,null)}}}();x.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(t){var e=this.regex.exec(t);return{width:+e[1],height:+e[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(t){var e=this.regex.exec(t);return{width:e[1],height:e[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(t){var e=this.regex.exec(t);return{foreground:"#"+e[2],background:"#"+e[1]}}},text:{regex:/text\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},font:{regex:/font\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(t){return this.regex.exec(t)[1]}}};for(var A in x.flags)x.flags.hasOwnProperty(A)&&(x.flags[A].match=function(t){return t.match(this.regex)});x.settings={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12},sky:{background:"#0D8FDB",foreground:"#fff",size:12},vine:{background:"#39DBAC",foreground:"#1E292C",size:12},lava:{background:"#F8591A",foreground:"#1C2846",size:12}}},v.add_theme=v.addTheme,v.add_image=v.addImage,v.invisible_error_fn=v.invisibleErrorFn,x.config={renderer:"html",debounce:100,ratio:1,supportsCanvas:!1,supportsSVG:!1},x.runtime={preempted:!1,resizableImages:[],debounceTimer:null},function(){var t=1,n=1,i=document.createElement("canvas"),r=null;i.getContext&&-1!=i.toDataURL("image/png").indexOf("data:image/png")&&(x.config.renderer="canvas",r=i.getContext("2d"),x.config.supportsCanvas=!0),"canvas"==x.config.renderer&&(t=e.devicePixelRatio||1,n=r.webkitBackingStorePixelRatio||r.mozBackingStorePixelRatio||r.msBackingStorePixelRatio||r.oBackingStorePixelRatio||r.backingStorePixelRatio||1),x.config.ratio=t/n,document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(x.config.renderer="svg",x.config.supportsSVG=!0)}(),t(v,"Holder",e),e.onDomReady&&e.onDomReady(function(){x.runtime.preempted||v.run({}),e.addEventListener?(e.addEventListener("resize",m,!1),e.addEventListener("orientationchange",m,!1)):e.attachEvent("onresize",m),"object"==typeof e.Turbolinks&&e.document.addEventListener("page:change",function(){v.run({})})})}(function(t,e,n){var i="function"==typeof define&&define.amd;i?define(t):n[e]=t},this);