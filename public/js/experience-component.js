webpackJsonp([2],{

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(236)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(238)
/* template */
var __vue_template__ = __webpack_require__(239)
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
Component.options.__file = "resources/assets/js/components/experienceComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68715828", Component.options)
  } else {
    hotAPI.reload("data-v-68715828", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(237);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(77)("bb785b88", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68715828\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./experienceComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68715828\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./experienceComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 238:
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
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 239:
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
          "uk-section uk-section-default experience uk-container uk-padding-small",
        attrs: { id: "experience" }
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
                    _vm._v("Experience")
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
                        _vm._v("Graduate Intern "),
                        _c(
                          "span",
                          { staticClass: "uk-text-meta uk-text-small" },
                          [_vm._v("Microtel Systems Limited")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "uk-article-meta uk-margin-remove-top" },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\tDecember, 2017 - Present\n\t\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("section", [
                      _c("em", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tBuilding a demo for the company's official website\n\t\t\t\t\t\t\t\t"
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
                        _vm._v("Web Developer Intern "),
                        _c(
                          "span",
                          { staticClass: "uk-text-meta uk-text-small" },
                          [_vm._v("Havenda Plus Web School")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "uk-article-meta uk-margin-remove-top" },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\tJuly, 2016 – September, 2016\n\t\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("section", [
                      _c("em", [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t\tTraining of clients in Web Development courses, Maintenance of various clientele\n\t\t\t\t\t\t\t\t\twebsites.\n\t\t\t\t\t\t\t\t"
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
    require("vue-hot-reload-api")      .rerender("data-v-68715828", module.exports)
  }
}

/***/ })

});