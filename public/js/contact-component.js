webpackJsonp([4],{

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(248)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(250)
/* template */
var __vue_template__ = __webpack_require__(251)
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
Component.options.__file = "resources/assets/js/components/contactComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-672c4c54", Component.options)
  } else {
    hotAPI.reload("data-v-672c4c54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(77)("38c40947", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-672c4c54\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contactComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-672c4c54\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./contactComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 250:
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

/***/ 251:
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
          "uk-section uk-section-default contact uk-container uk-padding-small",
        attrs: { id: "contact" }
      },
      [
        _c(
          "div",
          {
            staticClass: "uk-grid-small uk-grid-divider",
            attrs: { "uk-grid": "" }
          },
          [
            _c(
              "section",
              { staticClass: "uk-section uk-section-default uk-width-1-3@m" },
              [
                _c("article", { staticClass: "uk-article" }, [
                  _c("h2", { staticClass: "uk-article-title" }, [
                    _vm._v("Contact")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Need my Skills or Services on a project?")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Send me a mail to get it up and running.")])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "section",
              { staticClass: "uk-section uk-section-default uk-width-2-3@m" },
              [
                _c(
                  "form",
                  {
                    staticClass: "uk-grid uk-flex uk-child-width-1-2@m",
                    attrs: { action: "", "uk-grid": "" }
                  },
                  [
                    _c("div", [
                      _c(
                        "section",
                        { staticClass: "uk-form-row uk-padding-small" },
                        [
                          _c("div", { staticClass: "uk-form-controls" }, [
                            _c("input", {
                              staticClass: "uk-input",
                              attrs: {
                                type: "text",
                                name: "name",
                                id: "name",
                                placeholder: "Name"
                              }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "section",
                        { staticClass: "uk-form-row uk-padding-small" },
                        [
                          _c("div", { staticClass: "uk-form-controls" }, [
                            _c("input", {
                              staticClass: "uk-input",
                              attrs: {
                                type: "email",
                                name: "email",
                                id: "email",
                                placeholder: "Email"
                              }
                            })
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "section",
                        { staticClass: "uk-form-row uk-padding-small" },
                        [
                          _c("div", { staticClass: "uk-form-controls" }, [
                            _c("textarea", {
                              staticClass: "uk-textarea",
                              attrs: {
                                name: "message",
                                id: "message",
                                placeholder: "Message"
                              }
                            })
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", [
                      _c(
                        "section",
                        { staticClass: "uk-form-row uk-padding-small" },
                        [
                          _c("div", { staticClass: "uk-form-controls" }, [
                            _c(
                              "button",
                              { staticClass: "uk-button uk-button-primary" },
                              [_vm._v("Send")]
                            )
                          ])
                        ]
                      )
                    ])
                  ]
                )
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
    require("vue-hot-reload-api")      .rerender("data-v-672c4c54", module.exports)
  }
}

/***/ })

});