(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{232:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"j",(function(){return r})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"f",(function(){return h})),n.d(e,"l",(function(){return d})),n.d(e,"m",(function(){return f})),n.d(e,"c",(function(){return m})),n.d(e,"k",(function(){return v})),n.d(e,"e",(function(){return b}));n(29);const s=/#.*$/,a=/\.(md|html)$/,i=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(s,"").replace(a,"")}function l(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function p(t){if(l(t))return t;const e=t.match(s),n=e?e[0]:"",a=o(t);return i.test(a)?t:a+".html"+n}function h(t,e){const n=decodeURIComponent(t.hash),a=function(t){const e=t.match(s);if(e)return e[0]}(e);if(a&&n!==a)return!1;return o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const a=e.split("/");n&&a[a.length-1]||a.pop();const i=t.replace(/^\//,"").split("/");for(let t=0;t<i.length;t++){const e=i[t];".."===e?a.pop():"."!==e&&a.push(e)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));const s=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:p(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function f(t,e,n,s){const{pages:a,themeConfig:i}=n,r=s&&i.locales&&i.locales[s]||i;if("auto"===(t.frontmatter.sidebar||r.sidebar||i.sidebar))return g(t);const o=r.sidebar||i.sidebar;if(o){const{base:n,config:s}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const s in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(s)))return{base:s,config:e[s]};var n;return{}}(e,o);return"auto"===s?g(t):s?s.map(t=>function t(e,n,s,a=1){if("string"==typeof e)return d(n,e,s);if(Array.isArray(e))return Object.assign(d(n,e[0],s),{title:e[1]});{const i=e.children||[];return 0===i.length&&e.path?Object.assign(d(n,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:i.map(e=>t(e,n,s,a+1)),collapsable:!1!==e.collapsable}}}(t,a,n)):[]}return[]}function g(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function b(){document.body.addEventListener("click",(function(t){for(var e=t.target;e&&e.matches&&!e.matches("a");)e=e.parentNode;if(e&&e!==document){var n=e.getAttribute("track-category")||"general",s=e.getAttribute("track-label");window.ga&&ga("send",{hitType:"event",eventCategory:n,eventAction:"clicked",eventLabel:s})}}))}},233:function(t,e,n){},234:function(t,e,n){},235:function(t,e,n){},236:function(t,e,n){},237:function(t,e,n){},238:function(t,e,n){},239:function(t,e,n){},240:function(t,e,n){},241:function(t,e,n){},242:function(t,e){t.exports=function(t){return null==t}},243:function(t,e,n){},244:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},248:function(t,e,n){},252:function(t,e,n){"use strict";n.r(e);var s=n(232),a={name:"SidebarGroup",components:{DropdownTransition:n(253).a},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(252).default},methods:{isActive:s.f}},i=(n(267),n(16)),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;function o(t,e,n,s,a){const i={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}};return a>2&&(i.style={"padding-left":a+"rem"}),t("RouterLink",i,n)}function l(t,e,n,a,i,r=1){return!e||r>i?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(s.f)(a,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,n,a,i,r+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:a,$themeConfig:i,$themeLocaleConfig:r},props:{item:c,sidebarDepth:u}}){const p=Object(s.f)(a,c.path),h="auto"===c.type?p||c.children.some(t=>Object(s.f)(a,c.basePath+"#"+t.slug)):p,d="external"===c.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,c.path,c.title||c.path):o(t,c.path,c.title||c.path,h),f=[e.frontmatter.sidebarDepth,u,r.sidebarDepth,i.sidebarDepth,1].find(t=>void 0!==t),g=r.displayAllHeaders||i.displayAllHeaders;if("auto"===c.type)return[d,l(t,c.children,c.basePath,a,f)];if((h||g)&&c.headers&&!s.d.test(c.path)){return[d,l(t,Object(s.c)(c.headers),c.path,a,f)]}return d}};n(268);function u(t,e){if("group"===e.type){const n=e.path&&Object(s.f)(t,e.path),a=e.children.some(e=>"group"===e.type?u(t,e):"page"===e.type&&Object(s.f)(t,e.path));return n||a}return!1}var p={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(i.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(u(t,s))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(s.f)(this.$route,t.regularPath)}}},h=Object(i.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,s){return n("li",{key:s},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:s===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},253:function(t,e,n){"use strict";var s={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},a=(n(259),n(16)),i=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},254:function(t,e,n){"use strict";n(233)},255:function(t,e,n){"use strict";n(234)},256:function(t,e,n){"use strict";n(235)},257:function(t,e,n){"use strict";n(236)},258:function(t,e,n){"use strict";n(237)},259:function(t,e,n){"use strict";n(238)},260:function(t,e,n){"use strict";n(239)},261:function(t,e,n){"use strict";n(240)},262:function(t,e,n){"use strict";n(241)},263:function(t,e,n){"use strict";n(243)},264:function(t,e,n){var s=n(12),a=n(2),i=n(10);t.exports=function(t){return"string"==typeof t||!a(t)&&i(t)&&"[object String]"==s(t)}},265:function(t,e,n){"use strict";n(244)},266:function(t,e,n){"use strict";n(245)},267:function(t,e,n){"use strict";n(246)},268:function(t,e,n){"use strict";n(247)},269:function(t,e,n){"use strict";n(248)},274:function(t,e,n){"use strict";n.r(e);var s=n(232),a={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(s.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(s.h)(this.link)||Object(s.i)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.g)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.g)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},i=n(16),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o=(n(29),{name:"Contributions",props:{data:{type:Object,required:!0}},computed:{opencollectiveUrl(){var t,e;return null===(t=this.data.opencollective)||void 0===t||null===(e=t.url)||void 0===e?void 0:e.replace(/\/$/,"")},buymeacoffeeUrl(){var t;return null===(t=this.data.buymeacoffee)||void 0===t?void 0:t.url}},methods:{getOpencollectiveUrl(t=""){return this.opencollectiveUrl?t?`${this.opencollectiveUrl}/${t.replace(/^\//,"")}`:this.opencollectiveUrl:""}}}),l=(n(254),Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contributions"},[t.opencollectiveUrl?[n("h3",[t._v("Contributors")]),t._v(" "),n("p",[t._v("This project exists thanks to all the people who contribute.")]),t._v(" "),n("div",{staticClass:"oc-image-wrapper"},[n("a",{attrs:{href:t.getOpencollectiveUrl("/contributors")}},[n("img",{attrs:{src:t.getOpencollectiveUrl("/contributors.svg?width=890")}})])]),t._v(" "),n("h3",[t._v("Backers")]),t._v(" "),n("p",[t._v("\n      Thank you to all our backers! 🙏 ("),n("a",{attrs:{href:t.getOpencollectiveUrl("#backer"),target:"_blank"}},[t._v("Become a backer")]),t._v(")\n    ")]),t._v(" "),n("div",{staticClass:"oc-image-wrapper"},[n("a",{attrs:{href:t.getOpencollectiveUrl("#backers"),target:"_blank"}},[n("img",{attrs:{src:t.getOpencollectiveUrl("/backers.svg?width=500")}})])]),t._v(" "),n("h3",[t._v("Sponsors")]),t._v(" "),n("p",[t._v("\n      Support this project by becoming a sponsor. Your logo will show up here with a link to your website. ("),n("a",{attrs:{href:t.getOpencollectiveUrl("#sponsor"),target:"_blank"}},[t._v("Become a sponsor")]),t._v(")\n    ")]),t._v(" "),n("div",{staticClass:"oc-image-wrapper"},[n("a",{attrs:{href:t.getOpencollectiveUrl("#sponsors"),target:"_blank"}},[n("img",{attrs:{src:t.getOpencollectiveUrl("/sponsors.svg?width=500")}})])])]:t._e(),t._v(" "),t.opencollectiveUrl?n("a",{attrs:{"track-category":"donate_to_open_collective","track-label":".",href:t.getOpencollectiveUrl("/donate"),target:"_blank"}},[n("img",{attrs:{src:t.getOpencollectiveUrl("/donate/button@2x.png?color=blue"),width:"300",alt:"donate"}})]):t._e(),t._v(" "),t.buymeacoffeeUrl?n("div",[n("style",[t._v(".bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#BB5794 !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 1px 9px !important;font-size: 22px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}")]),t._v(" "),n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Cookie",rel:"stylesheet"}}),t._v(" "),t._m(0)]):t._e()],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"bmc-button",attrs:{"track-category":"buy_me_coffee",target:"_blank",href:"https://www.buymeacoffee.com/imolorhe"}},[e("img",{attrs:{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}}),e("span",{staticStyle:{"margin-left":"5px"}},[this._v("Buy me a coffee")])])}],!1,null,null,null).exports),c={name:"Downloads",props:{downloads:{type:Object,required:!0}},computed:{githubMetadata(){return this.$page.githubMetadata},latestRelease(){var t;return null===(t=this.githubMetadata)||void 0===t?void 0:t.latest_release}},methods:{getAssetUrl(t){var e,n,s,a;return this.latestRelease?t.pattern?null!==(e=null!==(n=null===(s=this.latestRelease.assets.find(e=>new RegExp(t.pattern).test(e.name)))||void 0===s?void 0:s.browser_download_url)&&void 0!==n?n:t.link)&&void 0!==e?e:"":null!==(a=t.link)&&void 0!==a?a:"":""}}},u=(n(255),{name:"Home",components:{NavLink:r,Contributions:l,Downloads:Object(i.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$page.githubMetadata?n("div",{staticClass:"releases"},[n("h3",{staticClass:"heading"},[t._v("\n    Get Altair\n    "),n("span",{staticClass:"releases--latest-version"},[t._v(t._s(t.latestRelease.tag_name))])]),t._v(" "),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"column"},[n("div",{staticClass:"platforms"},t._l(t.downloads.list,(function(e){return n("div",{key:e.name,staticClass:"platform-item"},[n("a",{staticClass:"platform-item__link",attrs:{"track-category":"download_altair","track-label":e.name,href:t.getAssetUrl(e),target:"_blank"}},[n("img",{class:{"platform-item__unavailable":!t.getAssetUrl(e)},attrs:{src:e.image}}),t._v(" "),n("p",{staticClass:"platform-item__name"},[t._v(t._s(e.name))]),t._v(" "),t.getAssetUrl(e)?t._e():n("p",[t._v("coming soon")])]),t._v(" "),e.extra?n("div",{staticClass:"platform-item__extra"},[t._v("\n            "+t._s(e.extra)+"\n          ")]):t._e()])})),0)]),t._v(" "),n("a",{staticClass:"button",attrs:{href:t.githubMetadata.releases_url,target:"_blank"}},[t._v("See older versions")])])]):t._e()}),[],!1,null,null,null).exports},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}}),p=(n(256),Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"column"},[n("div",{staticClass:"hero-content"},[null!==t.data.heroText?n("h1",{staticClass:"main-title",attrs:{id:"main-title"}},[t._v("\n            "+t._s(t.data.heroText||t.$title||"Hello")+"\n          ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n            "+t._s(t.data.tagline||t.$description)+"\n          ")]):t._e(),t._v(" "),t.data.actions&&t.data.actions.length?n("p",{staticClass:"action"},t._l(t.data.actions,(function(t){return n("NavLink",{key:t.text,class:{button:!0,"button--primary":t.primary},attrs:{item:t}})})),1):t._e()]),t._v(" "),n("div",{staticClass:"image-wrapper"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e()])])])]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features-section"},[n("div",{staticClass:"clear-floats"}),t._v(" "),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"column"},[n("div",{staticClass:"features-wrapper"},t._l(t.data.features,(function(e,s){return n("div",{key:s,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0),t._v(" "),t.data.featuresFooterText&&t.data.featuresFooterLink?n("div",{staticClass:"features-actions"},[n("NavLink",{staticClass:"button button--dark",attrs:{item:{text:t.data.featuresFooterText,link:t.data.featuresFooterLink}}})],1):t._e()])])]):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),n("Contributions",{attrs:{data:t.data.contributions}}),t._v(" "),n("a",{attrs:{name:"download",id:"download"}}),t._v(" "),n("Downloads",{attrs:{downloads:t.data.downloads}}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),h=n(92),d=n.n(h),f=(t,e,n=null)=>{let s=d()(e,"title","");return d()(e,"frontmatter.tags")&&(s+=" "+e.frontmatter.tags.join(" ")),n&&(s+=" "+n),g(t,s)};const g=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),s=new RegExp("[^\0-]"),a=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(s.test(t))return a.some(t=>e.toLowerCase().indexOf(t)>-1);{const s=t.endsWith(" ");return new RegExp(a.map((t,e)=>a.length!==e+1||s?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)}};var m={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,s=this.$localePath,a=[];for(let i=0;i<e.length&&!(a.length>=n);i++){const r=e[i];if(this.getPageLocalePath(r)===s&&this.isSearchable(r))if(f(t,r))a.push(r);else if(r.headers)for(let e=0;e<r.headers.length&&!(a.length>=n);e++){const n=r.headers[e];n.title&&f(t,r,n.title)&&a.push(Object.assign({},r,{path:r.path+"#"+n.slug,header:n}))}}return a},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},v=(n(257),Object(i.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,s){return n("li",{key:s,staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),b=(n(258),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),_=(n(7),n(253)),k=n(93),x=n.n(k),C={name:"DropdownLink",components:{NavLink:r,DropdownTransition:_.a},props:{item:{required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},isLastItemOfArray:(t,e)=>x()(e)===t,handleDropdown(){0===event.detail&&this.setOpen(!this.open)}}},w=(n(260),{name:"NavLinks",components:{NavLink:r,DropdownLink:Object(i.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,s){return n("li",{key:e.link||s,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(s){return n("li",{key:s.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:s},on:{focusout:function(n){t.isLastItemOfArray(s,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(a=>{const i=t[a],r=s[a]&&s[a].label||i.lang;let o;return i.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,a),n.some(t=>t.path===o)||(o=a)),{text:r,link:o}})};return[...this.userNav,a]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(s.k)(t),{items:(t.items||[]).map(s.k)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const s=e[n];if(new RegExp(s,"i").test(t))return s}return"Source"}}}),$=(n(261),Object(i.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function y(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var L={name:"Navbar",components:{SidebarButton:b,NavLinks:$,SearchBox:v,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(y(this.$el,"paddingLeft"))+parseInt(y(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},O=(n(262),Object(i.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),S=n(242),j=n.n(S),I={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=j()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:s="master",docsRepo:a=e}=this.$site.themeConfig;return t&&a&&this.$page.relativePath?this.createEditLink(e,a,n,s,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,a,i){if(/bitbucket.org/.test(e)){return e.replace(s.a,"")+"/src"+`/${a}/`+(n?n.replace(s.a,"")+"/":"")+i+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(s.a,"")+"/-/edit"+`/${a}/`+(n?n.replace(s.a,"")+"/":"")+i}return(s.j.test(e)?e:"https://github.com/"+e).replace(s.a,"")+"/edit"+`/${a}/`+(n?n.replace(s.a,"")+"/":"")+i}}},U=(n(263),Object(i.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),E=n(264),T=n.n(E),A={name:"PageNav",props:["sidebarItems"],computed:{prev(){return D(N.PREV,this)},next(){return D(N.NEXT,this)}}};const N={NEXT:{resolveLink:function(t,e){return P(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return P(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function D(t,{$themeConfig:e,$page:n,$route:a,$site:i,sidebarItems:r}){const{resolveLink:o,getThemeLinkConfig:l,getPageLinkConfig:c}=t,u=l(e),p=c(n),h=j()(p)?u:p;return!1===h?void 0:T()(h)?Object(s.l)(i.pages,h,a.path):o(n,r)}function P(t,e,n){const s=[];!function t(e,n){for(let s=0,a=e.length;s<a;s++)"group"===e[s].type?t(e[s].children||[],n):n.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const a=s[e];if("page"===a.type&&a.path===decodeURIComponent(t.path))return s[e+n]}}var R=A,B=(n(265),{components:{PageEdit:U,PageNav:Object(i.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),H=(n(266),Object(i.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),G={name:"Sidebar",components:{SidebarLinks:n(252).default,NavLinks:$},props:["items"]},M=(n(269),Object(i.a)(G,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports);"undefined"!=typeof window&&(window.cookieconsent.initialise({palette:{popup:{background:"#efefef",text:"#404040"},button:{background:"#8ec760",text:"#ffffff"}}}),Object(s.e)());var W={name:"Layout",components:{Home:p,Page:H,Sidebar:M,Navbar:O},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(s.m)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},q=Object(i.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=q.exports}}]);