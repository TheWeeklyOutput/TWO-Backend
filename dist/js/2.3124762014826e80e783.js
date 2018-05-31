(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "/UHJ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("e0uS")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Article.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "OtbB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Kz1y");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("lOrp");

// EXTERNAL MODULE: ./src/mixins/api.js
var api = __webpack_require__("qNwz");

// EXTERNAL MODULE: ./src/mixins/themeswitcher.js
var themeswitcher = __webpack_require__("TYgx");

// EXTERNAL MODULE: ./src/components/ListArticles.vue + 2 modules
var ListArticles = __webpack_require__("GqsI");

// EXTERNAL MODULE: ./src/api/mutation-types.js
var mutation_types = __webpack_require__("5Rlk");

// EXTERNAL MODULE: ./src/api/action-types.js
var action_types = __webpack_require__("XiVm");

// EXTERNAL MODULE: ./src/components/PageViews.vue + 2 modules
var PageViews = __webpack_require__("O7/s");

// EXTERNAL MODULE: ./src/components/Ticker.vue + 2 modules
var Ticker = __webpack_require__("GhKc");

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Article.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var Article = ({
    components: {
        TopArticles: ListArticles["a" /* default */],
        PageViews: PageViews["a" /* default */],
        Ticker: Ticker["a" /* default */]
    },
    mixins: [api["a" /* default */], themeswitcher["a" /* default */]],

    props: {
        category: {
            type: String,
            default: 'Default Category'
        },
        slug: {
            type: String,
            default: '404'
        }
    },
    computed: extends_default()({}, Object(vuex_esm["b" /* mapState */])({
        currentArticle: function currentArticle(state) {
            return state.api.currentArticle;
        }
    })),
    mounted: function mounted() {
        this.$store.dispatch(action_types["b" /* GET_ARTICLE_BY_SLUG */], {
            context: this,
            slug: this.slug
        });
    },

    watch: {
        currentArticle: function currentArticle() {
            this.$store.dispatch(action_types["a" /* CHANGE_PAGE_TITLE */], {
                title: this.currentArticle.title.substring(0, 30) + '... | The Weekly Output'
            });
        },
        slug: function slug() {
            console.log('slug changed to ' + this.slug);
            this.currentArticle = null;
            this.$store.dispatch(action_types["b" /* GET_ARTICLE_BY_SLUG */], {
                context: this,
                slug: this.slug
            });
            this.$store.commit(mutation_types["a" /* SET_LOADED */], {
                status: false
            });
        }
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3ef71da9","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Article.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-wrapper article-component"},[(_vm.currentArticle && _vm.themeSwitcher.currentStyle == 2)?_c('Ticker'):_vm._e(),_vm._v(" "),_c('div',{staticClass:"article-wrapper"},[_c('span',{staticClass:"headline-single-article"},[(_vm.currentArticle)?_c('h1',{staticClass:"article-heading"},[_vm._v(_vm._s(_vm.currentArticle.title))]):_c('div',{staticClass:"article-heading placeholder"})]),_vm._v(" "),_c('span',{staticClass:"article-heading-filler"},[(_vm.currentArticle)?_c('page-views',{staticClass:"twitter-icon-container-article",attrs:{"views":_vm.currentArticle.views,"showShares":false}}):_vm._e()],1),_vm._v(" "),_c('span',{staticClass:"article-headline-info"},[(_vm.currentArticle)?_c('p',{staticClass:"article-author"},[_vm._v("\n                    By "+_vm._s(_vm.currentArticle.author.name.toUpperCase())+" | "),_c('span',{staticClass:"article-timestamp"},[_c('timeago',{attrs:{"since":_vm.currentArticle.date}})],1)]):_c('div',{staticClass:"article-author placeholder"})]),_vm._v(" "),_c('span',{staticClass:"article-image-wrapper"},[(_vm.currentArticle)?_c('progressive-background',{staticClass:"article-image-full",attrs:{"src":_vm.currentArticle.image_url}}):_c('div',{staticClass:"article-image-full placeholder"}),_vm._v(" "),(_vm.currentArticle)?_c('h3',{staticClass:"image-credit"},[_vm._v("photo by "+_vm._s(_vm.currentArticle.image_credit))]):_c('div',{staticClass:"image-credit placeholder"})],1),_vm._v(" "),_c('div',{staticClass:"article-three-columns"},[(_vm.currentArticle)?_c('div',{staticClass:"article-text",domProps:{"innerHTML":_vm._s(_vm.currentArticle.html_content)}}):_c('div',{staticClass:"article-text placeholder"}),_vm._v(" "),(_vm.currentArticle)?_c('div',{staticClass:"article-sidebar-wrapper desktop-only"},[_c('TopArticles',{staticClass:"sidebar",attrs:{"categoryToRender":'highlights',"showText":_vm.themeSwitcher.styleSettings[_vm.themeSwitcher.currentStyle].article.sidebarDescriptionShown,"showAuthor":false,"mode":'list-',"imageStyle":_vm.themeSwitcher.styleSettings[_vm.themeSwitcher.currentStyle].article.sidebarImageStyle}})],1):_c('div',{staticClass:"article-sidebar-wrapper desktop-only placeholder"}),_vm._v(" "),(_vm.currentArticle)?_c('div',{staticClass:"article-bottombar-wrapper mobile-only"},[_c('h2',[_vm._v("You might also enjoy:")]),_vm._v(" "),_c('TopArticles',{staticClass:"sidebar",attrs:{"categoryToRender":'highlights',"showText":true,"showAuthor":false,"mode":'horizontal-list-',"imageStyle":'no'}})],1):_c('div',{staticClass:"article-bottombar-wrapper mobile-only placeholder"})])])],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("Xm6T");

// CONCATENATED MODULE: ./src/views/Article.vue
function injectStyle (context) {
  __webpack_require__("mmjH")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  Article,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Article = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "mmjH":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("/UHJ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("tFQF").default
var update = add("16901ffb", content, true, {});

/***/ })

}]);
//# sourceMappingURL=2.3124762014826e80e783.js.map