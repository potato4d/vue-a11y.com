(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{395:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},396:function(t,e,n){var a=n(34),s="["+n(395)+"]",o=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),r=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:r(1),end:r(2),trim:r(3)}},397:function(t,e,n){var a=n(8),s=n(132);t.exports=function(t,e,n){var o,i;return s&&"function"==typeof(o=e.constructor)&&o!==n&&a(i=o.prototype)&&i!==n.prototype&&s(t,i),t}},398:function(t,e,n){"use strict";var a=n(9),s=n(6),o=n(224),i=n(29),r=n(10),l=n(46),u=n(397),c=n(70),v=n(4),g=n(47),m=n(97).f,f=n(35).f,p=n(13).f,h=n(396).trim,d=s.Number,S=d.prototype,x="Number"==l(g(S)),b=function(t){var e,n,a,s,o,i,r,l,u=c(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=h(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,s=49;break;case 79:case 111:a=8,s=55;break;default:return+u}for(i=(o=u.slice(2)).length,r=0;r<i;r++)if((l=o.charCodeAt(r))<48||l>s)return NaN;return parseInt(o,a)}return+u};if(o("Number",!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var w,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(x?v((function(){S.valueOf.call(n)})):"Number"!=l(n))?u(new d(b(e)),n,_):b(e)},$=a?m(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;$.length>y;y++)r(d,w=$[y])&&!r(_,w)&&p(_,w,f(d,w));_.prototype=S,S.constructor=_,i(s,"Number",_)}},402:function(t,e,n){"use strict";var a=n(3),s=n(45).find,o=n(133),i=n(26),r=!0,l=i("find");"find"in[]&&Array(1).find((function(){r=!1})),a({target:"Array",proto:!0,forced:r||!l},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find")},405:function(t,e,n){},408:function(t,e,n){"use strict";var a={name:"BackTo",props:{text:{type:String,required:!0},to:{type:String,required:!0}}},s=n(24),o=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("RouterLink",{staticClass:"inline-flex px-4 my-4 text-color bg-main",attrs:{to:this.to}},[e("vp-icon",{staticClass:"mt-2 mr-2",attrs:{name:"corner-up-left",size:"8px"}}),this._v(" "),e("span",[this._v(this._s(this.text))])],1)}),[],!1,null,null,null);e.a=o.exports},437:function(t,e,n){"use strict";var a=n(405);n.n(a).a},444:function(t,e,n){},445:function(t,e,n){},446:function(t,e,n){},451:function(t,e,n){"use strict";var a={name:"HeaderFullPage"},s=(n(437),n(24)),o=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"relative w-full mt-6 header-full-page lg:pb-32"},[e("div",{staticClass:"absolute top-0 right-0 hidden w-full h-64 lg:block md:max-w-5xl"}),this._v(" "),e("div",{staticClass:"card box-default"},[e("h1",{staticClass:"max-w-2xl card-title",attrs:{id:"card-title",itemprop:"name headline"}},[this._t("cardTitle")],2),this._v(" "),this._t("default"),this._v(" "),e("div",{staticClass:"card-info"},[this._t("cardFooter")],2)],2)])}),[],!1,null,null,null);e.a=o.exports},467:function(t,e,n){"use strict";var a=n(3),s=n(45).every,o=n(37),i=n(26),r=o("every"),l=i("every");a({target:"Array",proto:!0,forced:!r||!l},{every:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},468:function(t,e,n){"use strict";var a=n(3),s=n(51),o=[].reverse,i=[1,2];a({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),o.call(this)}})},469:function(t,e,n){"use strict";var a=n(444);n.n(a).a},470:function(t,e,n){"use strict";var a=n(445);n.n(a).a},471:function(t,e,n){"use strict";var a=n(446);n.n(a).a},474:function(t,e,n){"use strict";n.r(e);var a=n(408),s=n(451),o=(n(467),n(28),n(402),n(68),n(468),n(69),n(96),n(2)),i=(n(398),{name:"SettingOption",inheritAttrs:!1,model:{event:"update"},props:{noStyle:{type:Boolean,default:!1},id:{type:String,required:!0},text:{type:String,required:!0},type:{type:String,default:"checkbox"},val:{type:[String,Number,Boolean],default:!1},checked:{type:Boolean,default:!1}}}),r=(n(469),n(24)),l=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative block w-full mb-4 setting-item lg:mb-0 md:mr-4 md:w-auto setting-option",class:{active:t.checked,"px-5 pt-3 pb-4 box-default":!t.noStyle}},[n("label",{staticClass:"flex items-center setting-option-label",attrs:{for:t.id}},[t._t("default"),t._v(" "),n("input",t._g(t._b({staticClass:"absolute top-0 left-0 opacity-0 setting-option-input",attrs:{id:t.id,type:t.type},domProps:{value:t.val,checked:t.checked},on:{change:function(e){return t.$emit("update","checkbox"===t.type?e.target.checked:e.target.value)}}},"input",t.$attrs,!1),t.$listeners)),t._v(" "),n("span",{staticClass:"relative inline-block w-4 h-4 bg-white border border-gray-800 border-solid setting-option-fake-check"}),t._v(" "),n("span",{staticClass:"mt-1 ml-2"},[t._v(t._s(t.text))])],2)])}),[],!1,null,null,null).exports,u={name:"SettingSaveButton"},c=Object(r.a)(u,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"uppercase btn btn-accent",attrs:{type:"button"},on:{click:function(e){return t.$emit("save")}}},[t._v("\n  "+t._s(t.$themeLocaleConfig.btnSaveText||"Save")+"\n")])}),[],!1,null,null,null).exports,v={name:"SettingWrapper",props:{title:{type:String,required:!0}}},g=Object(r.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("fieldset",{staticClass:"flex flex-wrap"},[e("legend",{staticClass:"w-full mb-8 text-2xl font-bold"},[this._v("\n    "+this._s(this.title)+"\n  ")]),this._v(" "),e("div",{staticClass:"flex flex-wrap"},[this._t("default")],2)])}),[],!1,null,null,null).exports,m={name:"SettingLanguage",components:{SettingOption:l,SettingWrapper:g,SettingSaveButton:c},setup:function(t,e){var n=e.root,a=Object(o.l)(null),s=Object(o.l)(!1),i=Object(o.l)([]),r=n.$site.pages.filter((function(t){return"Settings"===t.frontmatter.view}));function l(t){return"/"===t?"en":t.replace(/\//g,"")}return r.every((function(t){return t.frontmatter.language&&t.frontmatter.language.locale}))&&(i.value=r.map((function(t){var e=t.frontmatter.language.locale,a=n.$themeConfig.locales[e],s=l(e);return!(!a||!a.enabled)&&{id:"language-field-".concat(s),name:"display-language",path:t.regularPath,text:a.label,type:"radio",val:s}})).filter(Boolean).reverse()),Object(o.n)(a,(function(t,e){e&&(s.value=t!==e)})),Object(o.i)((function(){a.value=l(n.$localePath)})),{save:function(){var t=i.value.find((function(t){return t.val===a.value}));n.$vuepress.$set("disableScrollBehavior",!0),n.$router.replace(t.path,(function(){n.$nextTick((function(){return n.$vuepress.$set("disableScrollBehavior",!1)}))})),s.value=!1},showSave:s,language:a,languages:i}}},f=Object(r.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SettingWrapper",{directives:[{name:"show",rawName:"v-show",value:t.languages.length,expression:"languages.length"}],attrs:{title:t.$frontmatter.language.title}},[t._l(t.languages,(function(e){return[n("SettingOption",{key:"language-item-"+e.val,attrs:{id:e.id,text:e.text,val:e.val,name:"setting-language",type:"radio",checked:t.language===e.val},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})]})),t._v(" "),n("SettingSaveButton",{directives:[{name:"show",rawName:"v-show",value:t.showSave,expression:"showSave"}],on:{save:t.save}})],2)}),[],!1,null,null,null).exports,p=(n(98),n(12)),h=n(131),d={name:"SettingSuccessText",props:{text:{type:String,default:"Saved successfully!"}}},S=Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full mt-8"},[e("div",{staticClass:"max-w-sm form-msg form-msg-success"},[this._v("\n    "+this._s(this.text)+"\n  ")])])}),[],!1,null,null,null).exports,x={name:"SettingMotion",components:{SettingOption:l,SettingWrapper:g,SettingSaveButton:c,SettingSuccessText:S},setup:function(t,e){var n=e.root,a=Object(o.a)((function(){return!n.$frontmatter.motion||n.$frontmatter.motion&&!Array.isArray(n.$frontmatter.motion.items)?[]:n.$frontmatter.motion.items.map((function(t,e){return{id:"s-motion-".concat(t.value),name:"motion-field-".concat(t.value),text:t.label,type:"checkbox",val:t.value}}))})),s=Object(h.c)({"set-reduce-motion":!1},"motion",(function(t,e){var a=e.setStorage,s=e.toggleClassByObject;a("motion",Object(p.a)({},t.value)),s(Object(p.a)({},t.value)),n.$announcer.assertive(n.$frontmatter.motion.successText)})),i=s.save,r=s.state,l=s.showSaveButton;return{save:i,state:r,motionOptions:a,showSucessText:s.showSucessText,showSaveButton:l,toggleSaveButton:s.toggleSaveButton}}},b=Object(r.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SettingWrapper",{directives:[{name:"show",rawName:"v-show",value:t.motionOptions.length,expression:"motionOptions.length"}],attrs:{title:t.$frontmatter.motion.title}},[t._l(t.motionOptions,(function(e){return[n("SettingOption",{key:"motion-item-"+e.val,attrs:{id:e.id,text:e.text,type:"checkbox",val:e.val,name:"setting-"+e.val,checked:t.state[e.val]},on:{change:function(e){return t.toggleSaveButton(!0)}},model:{value:t.state[e.val],callback:function(n){t.$set(t.state,e.val,n)},expression:"state[item.val]"}})]})),t._v(" "),n("SettingSaveButton",{directives:[{name:"show",rawName:"v-show",value:t.showSaveButton,expression:"showSaveButton"}],on:{save:t.save}}),t._v(" "),n("SettingSuccessText",{directives:[{name:"show",rawName:"v-show",value:t.showSucessText,expression:"showSucessText"}],attrs:{text:t.$frontmatter.motion.successText}})],2)}),[],!1,null,null,null).exports,w={name:"SettingReadingFont",components:{SettingOption:l,SettingWrapper:g,SettingSaveButton:c,SettingSuccessText:S},setup:function(t,e){var n=e.root,a=Object(o.l)(null),s=n.$frontmatter.reading&&n.$frontmatter.reading.items.map((function(t){return{id:"s-reading-font-".concat(t.value),name:"reading-font",text:t.label,type:"radio",val:t.value}})),i=Object(h.c)("","reading",(function(t,e){var s=e.setStorage,o=e.toggleClass;s("reading",t.value),o(t.value,a.value),n.$announcer.assertive(n.$frontmatter.reading.successText)})),r=i.save,l=i.state,u=i.showSaveButton,c=i.showSucessText,v=i.toggleSaveButton;return Object(o.n)(l,(function(t,e){e&&(a.value=e)})),{save:r,state:l,fonts:s,showSaveButton:u,showSucessText:c,toggleSaveButton:v}}},_=(n(470),Object(r.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SettingWrapper",{directives:[{name:"show",rawName:"v-show",value:t.fonts.length,expression:"fonts.length"}],staticClass:"reading-font",attrs:{title:t.$frontmatter.reading.title}},[t._l(t.fonts,(function(e){return[n("SettingOption",{key:"reading-font-item-"+e.val,attrs:{id:e.id,text:e.text,val:e.val,type:"radio",name:"setting-reading-font",checked:t.state===e.val},on:{change:function(e){return t.toggleSaveButton(!0)}},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})]})),t._v(" "),n("SettingSaveButton",{directives:[{name:"show",rawName:"v-show",value:t.showSaveButton,expression:"showSaveButton"}],on:{save:t.save}}),t._v(" "),n("SettingSuccessText",{directives:[{name:"show",rawName:"v-show",value:t.showSucessText,expression:"showSucessText"}],attrs:{text:t.$frontmatter.reading.successText}})],2)}),[],!1,null,null,null).exports),$={name:"SettingTheme",components:{SettingOption:l,SettingWrapper:g,SettingSaveButton:c,SettingSuccessText:S},setup:function(t,e){var n=e.root,a=Object(o.a)((function(){return!n.$frontmatter.theme||n.$frontmatter.theme&&!Array.isArray(n.$frontmatter.theme.items)?[]:n.$frontmatter.theme.items.map((function(t){return{id:"s-theme-".concat(t.value),name:"theme",text:t.label,type:"radio",val:t.value}}))})),s=Object(h.c)("","theme",(function(t,e){(0,e.setStorage)("theme",t),n.$set(n.$themeConfig.colorMode,"defaultMode",t.value),n.$announcer.assertive(n.$frontmatter.theme.successText)})),i=s.save,r=s.state,l=s.showSaveButton;return{save:i,state:r,themes:a,showSucessText:s.showSucessText,showSaveButton:l,toggleSaveButton:s.toggleSaveButton}}},y=(n(471),Object(r.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SettingWrapper",{directives:[{name:"show",rawName:"v-show",value:t.themes.length,expression:"themes.length"}],staticClass:"mb-24 setting-theme",attrs:{title:t.$frontmatter.theme.title}},[t._l(t.themes,(function(e){return[n("SettingOption",{key:"theme-item-"+e.val,attrs:{id:e.id,"no-style":"",text:e.text,val:e.val,type:"radio",name:"setting-theme",checked:t.state===e.val},on:{change:function(e){return t.toggleSaveButton(!0)}},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[n("span",{staticClass:"w-full mb-3"},[n("img",{attrs:{src:"/img/"+e.val+".png",alt:""+t.$themeLocaleConfig.a11y.settings.theme.altText}})])])]})),t._v(" "),n("div",{staticClass:"w-full"},[n("SettingSaveButton",{directives:[{name:"show",rawName:"v-show",value:t.showSaveButton,expression:"showSaveButton"}],on:{save:t.save}}),t._v(" "),n("SettingSuccessText",{directives:[{name:"show",rawName:"v-show",value:t.showSucessText,expression:"showSucessText"}],attrs:{text:t.$frontmatter.theme.successText}})],1)],2)}),[],!1,null,null,null).exports),O={name:"SettingVision",components:{SettingOption:l,SettingWrapper:g,SettingSaveButton:c,SettingSuccessText:S},setup:function(t,e){var n=e.root,a=Object(o.a)((function(){return!n.$frontmatter.vision||n.$frontmatter.vision&&!Array.isArray(n.$frontmatter.vision.items)?[]:n.$frontmatter.vision.items.map((function(t,e){return{id:"s-vision-".concat(t.value),name:"vision-field-".concat(t.value),text:t.label,type:"checkbox",val:t.value}}))})),s=Object(h.c)({"set-color-contrast":!1},"vision",(function(t,e){var a=e.setStorage,s=e.toggleClassByObject;a("vision",Object(p.a)({},t.value)),s(Object(p.a)({},t.value)),n.$announcer.assertive(n.$frontmatter.vision.successText)})),i=s.save,r=s.state,l=s.showSaveButton;return{save:i,state:r,visionOptions:a,showSucessText:s.showSucessText,showSaveButton:l,toggleSaveButton:s.toggleSaveButton}}},T=Object(r.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SettingWrapper",{directives:[{name:"show",rawName:"v-show",value:t.visionOptions.length,expression:"visionOptions.length"}],attrs:{title:t.$frontmatter.vision.title}},[t._l(t.visionOptions,(function(e){return[n("SettingOption",{key:"vision-item-"+e.val,attrs:{id:e.id,text:e.text,type:"checkbox",name:"setting-"+e.val,checked:t.state[e.val]},on:{change:function(e){return t.toggleSaveButton(!0)}},model:{value:t.state[e.val],callback:function(n){t.$set(t.state,e.val,n)},expression:"state[item.val]"}})]})),t._v(" "),n("SettingSaveButton",{directives:[{name:"show",rawName:"v-show",value:t.showSaveButton,expression:"showSaveButton"}],on:{save:t.save}}),t._v(" "),n("SettingSuccessText",{directives:[{name:"show",rawName:"v-show",value:t.showSucessText,expression:"showSucessText"}],attrs:{text:t.$frontmatter.vision.successText}})],2)}),[],!1,null,null,null).exports,B={name:"Settings",components:{HeaderFullPage:s.a,BackTo:a.a,SettingTheme:y,SettingVision:T,SettingMotion:b,SettingLanguage:f,SettingReadingFont:_},setup:function(t,e){e.root}},C=Object(r.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container z-10 mx-auto post-page"},[n("div",{staticClass:"px-6 mt-6 xl:px-4"},[n("BackTo",{staticClass:"py-2 -ml-4",attrs:{to:t.$localePath,text:t.$themeLocaleConfig.backToText+" home"}}),t._v(" "),n("HeaderFullPage",{scopedSlots:t._u([{key:"cardTitle",fn:function(){return[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")]},proxy:!0}])},[t._v(" "),n("p",{staticClass:"mt-3 text-xl"},[t._v("\n        "+t._s(t.$frontmatter.description)+" "),n("br"),t._v("\n        "+t._s(t.$frontmatter.note)+"\n      ")])]),t._v(" "),n("div",{staticClass:"mt-20 mb-24 md:px-6"},[n("SettingLanguage",{staticClass:"mb-12 lg:mb-24"}),t._v(" "),n("SettingTheme",{staticClass:"mb-12 lg:mb-24"}),t._v(" "),n("SettingReadingFont",{staticClass:"mb-12 lg:mb-24"}),t._v(" "),n("SettingVision",{staticClass:"mb-12 lg:mb-24"}),t._v(" "),n("SettingMotion",{staticClass:"mb-12 lg:mb-24"})],1)],1)])}),[],!1,null,null,null);e.default=C.exports}}]);