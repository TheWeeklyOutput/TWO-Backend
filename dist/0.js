webpackJsonp([0],{108:function(t,e,r){r(115);var a=r(0)(r(111),r(118),null,null);t.exports=a.exports},111:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(4),o=r(10),s=r.n(o),n=r(11),i=r.n(n),c=(r(3),r(1));e.default={components:{CategoryList:s.a,Titles:i.a},mixins:[a.a],props:{category:{type:String,default:"Default Category"}},mounted:function(){var t=this;this.$store.dispatch(c.g,{title:this.api.categories.find(function(e){return e.slug===t.category}).name+" | The Weekly Output"})},watch:{category:function(){var t=this;this.$store.dispatch(c.g,{title:this.api.categories.find(function(e){return e.slug===t.category}).name+" | The Weekly Output"})}}}},112:function(t,e,r){e=t.exports=r(104)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Category.vue",sourceRoot:"webpack://"}])},115:function(t,e,r){var a=r(112);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=r(105).default;o("20aa7088",a,!0,{})},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category component-wrapper"},[r("Titles",{attrs:{category:t.api.categories.find(function(e){return e.slug===t.category}).name}}),t._v(" "),r("hr"),t._v(" "),r("CategoryList",{attrs:{categoryToRender:t.category,showText:!0,showAuthor:!0,mode:"list-",showShares:!0,imageStyle:"next-to-article"}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.js.map