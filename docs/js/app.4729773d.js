(function(e){function t(t){for(var r,a,s=t[0],c=t[1],p=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"043e":function(e,t,n){e.exports=n.p+"img/02.30000481.jpg"},2814:function(e,t,n){e.exports=n.p+"img/01.6ba2b3bc.jpg"},3914:function(e,t,n){e.exports=n.p+"img/03.140f1a44.jpg"},5153:function(e,t,n){e.exports=n.p+"img/05.294daac7.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("8bbf"),i=n.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h2",[e._v("Lazy Load")]),n("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"container lazy"},[n("img",{directives:[{name:"preview",rawName:"v-preview",value:{name:"b",events:{closed:function(){e.console.log("hi")}}},expression:"{ name: 'b', events: { closed: () => { console.log('hi')}} }"}],attrs:{"data-src":e.imageContext("./01.jpg"),alt:"image 01"},on:{close:function(){e.console.log("hi")}}}),n("img",{directives:[{name:"preview",rawName:"v-preview",value:{name:"b"},expression:"{ name: 'b' }"}],attrs:{"data-src":e.imageContext("./02.jpg"),alt:"image 02"}}),n("img",{directives:[{name:"preview",rawName:"v-preview"}],attrs:{"data-src":e.imageContext("./03.jpg"),alt:"image 03"}}),n("img",{directives:[{name:"preview",rawName:"v-preview"}],attrs:{"data-src":e.imageContext("./04.png"),alt:"image 04"}}),n("img",{directives:[{name:"preview",rawName:"v-preview"}],attrs:{"data-src":e.imageContext("./05.png"),alt:"image 05"}}),n("img",{directives:[{name:"preview",rawName:"v-preview"}],attrs:{"data-src":e.imageContext("./06.png"),alt:"image 06"}}),n("img",{directives:[{name:"preview",rawName:"v-preview"}],attrs:{"data-src":e.imageContext("./07.png"),alt:"image 07"}}),n("img",{directives:[{name:"preview",rawName:"v-preview"}],attrs:{"data-src":e.imageContext("./08.png"),alt:"image 08"}}),n("img",{directives:[{name:"preview",rawName:"v-preview:scope-b",arg:"scope-b"}],attrs:{"data-src":e.imageContext("./09.jpg"),alt:"image 09"}})])])},a=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("967e")),c=n.n(s),p=n("bd86"),l=(n("55dd"),n("96cf"),n("7f7f"),n("7618")),u=n("3b8d"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[n("div",{staticClass:"pswp__bg"}),n("div",{staticClass:"pswp__scroll-wrap"},[n("div",{staticClass:"pswp__container"},[n("div",{staticClass:"pswp__item"}),n("div",{staticClass:"pswp__item"}),n("div",{staticClass:"pswp__item"})]),n("div",{staticClass:"pswp__ui pswp__ui--hidden"},[n("div",{staticClass:"pswp__top-bar"},[n("div",{staticClass:"pswp__counter"}),n("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),n("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:"Share"}}),n("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),n("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),n("div",{staticClass:"pswp__preloader"},[n("div",{staticClass:"pswp__preloader__icn"},[n("div",{staticClass:"pswp__preloader__cut"},[n("div",{staticClass:"pswp__preloader__donut"})])])])]),n("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[n("div",{staticClass:"pswp__share-tooltip"})]),n("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),n("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),n("div",{staticClass:"pswp__caption"},[n("div",{staticClass:"pswp__caption__center"})])])])])}],v=(n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("768b"));function w(e){return new Promise((function(t){var n=new Image;n.onload=function(){t([null,{w:this.width||0,h:this.height||0}])},n.onerror=function(e){t([e,{}])},n.src=e}))}function m(e){return g.apply(this,arguments)}function g(){return g=Object(u["a"])(c.a.mark((function e(t){var n,r,i,o,a,s,p,l,u;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.src,r=t.msrc,i=t.srcLoaded,n===r||i){e.next=11;break}return e.next=4,w(n);case 4:o=e.sent,a=Object(v["a"])(o,2),s=a[0],p=a[1],l=p.w,u=p.h,s||(t.w=l,t.h=u,t.srcLoaded=!0);case 11:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var h=["beforeChange","afterChange","imageLoadComplete","resize","gettingData","mouseUsed","initialZoomIn","initialZoomInEnd","initialZoomOut","initialZoomOutEnd","parseVerticalMargin","close","unbindEvents","destroy","updateScrollOffset","preventDragEvent","shareLinkClick"],b=new i.a,_=b;function y(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=x(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function x(e,t){if(e){if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(p["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $={},P={name:"Previewer",methods:{show:function(e,t,n,r,i){var o=this;if(!e||!t)throw new Error("Please install photoswipe and include.");var a=this,s=C(C({index:n},$),i);this.$previewer=new e(this.$el,t,r,s),this.$_addListeners(),this.$previewer.init(),_.$emit("photoswipe:open"),h.forEach((function(e){a.$previewer.listen(e,(function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.unshift(o),_.$emit("photoswipe:".concat(e),[].concat(n))}))}))},$_addListeners:function(){this.$previewer.listen("close",this.$_destroy),this.$previewer.listen("gettingData",(function(e,t){m(t)}))},$_destroy:function(){var e=this,t=this.$previewer.options.hideAnimationDuration+50;setTimeout((function(){var t,n=document.querySelectorAll(".v-photoswipe-exhibition"),r=y(n);try{for(r.s();!(t=r.n()).done;){var i=t.value;document.body.removeChild(i)}}catch(o){r.e(o)}finally{r.f()}e.$previewer=null,window.$previewer.$destroy(),window.$previewer=null}),t)},$__destroy:function(){this.$previewer.close()}}},E=P,S=(n("e84c"),n("2877")),k=Object(S["a"])(E,d,f,!1,null,null,null),D=k.exports;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(p["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A,T,M=i.a.extend(D),z="v-photoswipe-exhibition",I="v-photoswipe-thumbnail",Z={},U={},V=0;function q(){window.$previewer=(new M).$mount(document.createElement("div")),window.$previewer.$el.classList.add(z),document.body.appendChild(window.$previewer.$el)}function B(){return F.apply(this,arguments)}function F(){return F=Object(u["a"])(c.a.mark((function e(){var t,n,r,i,o,a;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.$previewer||q(),t=this._scope,n=this._idx,Z[n]){e.next=4;break}return e.abrupt("return");case 4:if(t?(a=U[t],a.sort((function(e,t){return e-t})),r=a.indexOf(n),i=a.reduce((function(e,t){return Z[t]&&e.push(Z[t]),e}),[]),o=[].slice.call(document.querySelectorAll(".".concat(I))).filter((function(e){var n=e._scope;return n===t}))):(r=0,i=Z[n]?[Z[n]]:[],o=[].slice.call(document.querySelectorAll(".".concat(I))).filter((function(e){var t=e._idx;return t===n}))),i[r]&&o.length){e.next=8;break}return console.error("VuePhotoswipeDirective: current image was not collected."),e.abrupt("return");case 8:return e.next=10,m(i[r]);case 10:window.$previewer.show(A,T,r,i,N({getThumbBoundsFn:function(e){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,n=o[e].getBoundingClientRect();return{x:n.left,y:n.top+t,w:n.width}}},this._options));case 11:case"end":return e.stop()}}),e,this)}))),F.apply(this,arguments)}function H(){var e=this.getAttribute("lazy");e&&"loaded"!==e||J(this)}function J(e){var t=e.getAttribute("src"),n=e.dataset.origin;if(t||n){var r=e._idx,i=e._scope,o=e.alt,a=e.naturalWidth,s=e.naturalHeight;if(Z[r]={src:n||t,msrc:t,title:o,w:a,h:s},i){var c=U[i]=U[i]||[];-1===c.indexOf(r)&&c.push(r)}}}function R(e,t,n){return A=t||window.PhotoSwipe,T=n||window.PhotoSwipeUI_Default,{inserted:function(t,n){if("img"===t.tagName.toLowerCase()){var r=n.arg,i=n.value;t.classList.add(I),t._idx=""+V++,t._options=e,"object"===Object(l["a"])(i)?t._scope=i.name||r:r&&(t._scope=r),t.addEventListener("load",H),t.addEventListener("click",B)}else console.warn('VuePhotoswipeDirective: only support html "img" tag.')},update:function(e){Z[e._idx]||J(e)},unbind:function(e,t){var n=t.arg,r=t.value,i=e._idx;if(e._options=null,e.removeEventListener("click",B),e.removeEventListener("load",H),delete Z[i],"object"===Object(l["a"])(r)?e._scope=r.name||n:n&&(e._scope=n),e._scope){var o=U[e._scope];if(!o)return;o.splice(o.indexOf(i),1),o.length||delete U[e._scope]}}}}var W=n("a295"),Y={name:"app",directives:{preview:R({shareEl:!1,history:!1,clickToCloseNonZoomable:!1,bgOpacity:.8,allowPanToNext:!1})},methods:{imageContext:W},mounted:function(){_.$on("photoswipe:close",(function(){console.log("closed")}))}},G=Y,K=(n("7c55"),Object(S["a"])(G,o,a,!1,null,null,null)),Q=K.exports;i.a.config.productionTip=!1,i.a.config.devtools=!0,new i.a({render:function(e){return e(Q)}}).$mount("#app")},"60c2":function(e,t,n){e.exports=n.p+"img/06.fc68d011.png"},7335:function(e,t,n){e.exports=n.p+"img/04.eea94099.png"},7585:function(e,t,n){var r=n("ba60");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("499e").default;i("edc8f156",r,!0,{sourceMap:!1,shadowMode:!1})},"7c55":function(e,t,n){"use strict";var r=n("7585"),i=n.n(r);i.a},"8bbf":function(e,t){e.exports=Vue},a295:function(e,t,n){var r={"./01.jpg":"2814","./02.jpg":"043e","./03.jpg":"3914","./04.png":"7335","./05.png":"5153","./06.png":"60c2","./07.png":"d021","./08.png":"aeae","./09.jpg":"faca"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id="a295"},aeae:function(e,t,n){e.exports=n.p+"img/08.ead9c019.png"},b851:function(e,t,n){t=e.exports=n("2350")(!1),t.i(n("d86b"),""),t.i(n("1de3"),""),t.push([e.i,"",""])},ba21:function(e,t,n){var r=n("b851");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("499e").default;i("2ee25666",r,!0,{sourceMap:!1,shadowMode:!1})},ba60:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}h2{margin-top:50px}.container{max-width:600px;margin:0 auto}.container.normal img{height:60px;margin-bottom:10px;margin-left:10px;margin-right:10px}.container.lazy img{width:100%}",""])},d021:function(e,t,n){e.exports=n.p+"img/07.a26bb6fc.png"},e84c:function(e,t,n){"use strict";var r=n("ba21"),i=n.n(r);i.a},faca:function(e,t,n){e.exports=n.p+"img/09.6e9d188d.jpg"}});