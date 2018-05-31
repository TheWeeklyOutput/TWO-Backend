(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "SIYL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/mixins/api.js
var api = __webpack_require__("qNwz");

// EXTERNAL MODULE: ./src/components/ListArticles.vue + 2 modules
var ListArticles = __webpack_require__("GqsI");

// EXTERNAL MODULE: ./src/components/Titles.vue + 2 modules
var Titles = __webpack_require__("Mrp6");

// EXTERNAL MODULE: ./src/api/mutation-types.js
var mutation_types = __webpack_require__("5Rlk");

// EXTERNAL MODULE: ./src/api/action-types.js
var action_types = __webpack_require__("XiVm");

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Category.vue
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







/* harmony default export */ var Category = ({
    components: {
        CategoryList: ListArticles["a" /* default */],
        Titles: Titles["a" /* default */]
    },
    mixins: [api["a" /* default */]],
    props: {
        category: {
            type: String,
            default: 'Default Category'
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$store.dispatch(action_types["a" /* CHANGE_PAGE_TITLE */], {
            title: this.api.categories.find(function (art) {
                return art.slug === _this.category;
            }).name + ' | The Weekly Output'
        });
    },

    watch: {
        category: function category() {
            var _this2 = this;

            this.$store.dispatch(action_types["a" /* CHANGE_PAGE_TITLE */], {
                title: this.api.categories.find(function (art) {
                    return art.slug === _this2.category;
                }).name + ' | The Weekly Output'
            });
        }
    }

});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dad0c42e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Category.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"category component-wrapper"},[_c('Titles',{attrs:{"category":_vm.api.categories.find(function (art) { return art.slug === (_vm.category); }).name}}),_vm._v(" "),_c('hr'),_vm._v(" "),_c('CategoryList',{attrs:{"categoryToRender":_vm.category,"showText":true,"showAuthor":true,"mode":'list-',"showShares":true,"imageStyle":'next-to-article'}})],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("Xm6T");

// CONCATENATED MODULE: ./src/views/Category.vue
function injectStyle (context) {
  __webpack_require__("pTUE")
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
  Category,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var views_Category = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "iRcQ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("e0uS")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Category.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "pTUE":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("iRcQ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("tFQF").default
var update = add("2585dcd5", content, true, {});

/***/ })

}]);
//# sourceMappingURL=0.086423c5c1a838ecad7f.js.map