webpackJsonp([3],{

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(240)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(242)
/* template */
var __vue_template__ = __webpack_require__(243)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/educationComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a7d220c", Component.options)
  } else {
    hotAPI.reload("data-v-6a7d220c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(241);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(77)("7332ecbc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a7d220c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./educationComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a7d220c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./educationComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass:
          "uk-section uk-section-default education uk-container uk-padding-small",
        attrs: { id: "education" }
      },
      [
        _c(
          "div",
          { staticClass: "uk-grid uk-grid-divider", attrs: { "uk-grid": "" } },
          [
            _c(
              "section",
              { staticClass: "uk-section uk-section-default uk-width-1-3@m" },
              [
                _c("article", { staticClass: "uk-article" }, [
                  _c("h2", { staticClass: "uk-article-title" }, [
                    _vm._v("Education")
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "section",
              {
                staticClass:
                  "uk-section uk-section-default uk-flex uk-flex-column uk-grid uk-grid-divider uk-margin-remove-top uk-width-2-3@m",
                attrs: { "uk-grid": "" }
              },
              [
                _c("section", { staticClass: "uk-height-1-2" }, [
                  _c("article", { staticClass: "uk-article" }, [
                    _c(
                      "h3",
                      {
                        staticClass: "uk-article-heading uk-margin-small-bottom"
                      },
                      [
                        _vm._v(
                          "Web Development Intermediate Bundle\n\t\t\t\t\t\t\t\t"
                        ),
                        _c(
                          "span",
                          { staticClass: "uk-text-meta uk-text-small" },
                          [_vm._v("Andela")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "uk-article-meta uk-margin-remove-top" },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\tDecember, 2017 - May, 2018\n\t\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("section", [
                      _c("em", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBuilding Offline Web Applications & Building Responsive Web Design Development.\n\t\t\t\t\t\t\t\t"
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("section", { staticClass: "uk-height-1-2" }, [
                  _c("article", { staticClass: "uk-article" }, [
                    _c(
                      "h3",
                      {
                        staticClass: "uk-article-heading uk-margin-small-bottom"
                      },
                      [
                        _vm._v("Computer Science "),
                        _c(
                          "span",
                          { staticClass: "uk-text-meta uk-text-small" },
                          [_vm._v("University of Ilorin")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "uk-article-meta uk-margin-remove-top" },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\tOctober, 2013 - October, 2017\n\t\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("section", [
                      _c("em", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tB.Sc Computer Science in Computer Science.\n\t\t\t\t\t\t\t\t"
                        )
                      ])
                    ])
                  ])
                ])
              ]
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6a7d220c", module.exports)
  }
}

/***/ })

});