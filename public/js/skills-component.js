webpackJsonp([0],{

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(232)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(234)
/* template */
var __vue_template__ = __webpack_require__(235)
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
Component.options.__file = "resources/assets/js/components/skillsComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37d64494", Component.options)
  } else {
    hotAPI.reload("data-v-37d64494", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(77)("7b4d9e48", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37d64494\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./skillsComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-37d64494\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./skillsComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 234:
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

/***/ 235:
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
          "uk-section uk-section-default skills uk-container uk-padding-small",
        attrs: { id: "skills" }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "uk-grid uk-child-width-1-3@m uk-grid-divider uk-flex-between",
            attrs: { "uk-grid": "" }
          },
          [
            _c("section", { staticClass: "uk-section uk-section-default" }, [
              _c("article", { staticClass: "uk-article" }, [
                _c("h2", { staticClass: "uk-article-title" }, [
                  _vm._v("Skills")
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "section",
              {
                staticClass:
                  "uk-section uk-section-default uk-flex uk-flex-column uk-grid uk-grid-divider",
                attrs: { "uk-grid": "" }
              },
              [
                _c("section", { staticClass: "uk-height-1-2" }, [
                  _c("article", { staticClass: "uk-article" }, [
                    _c("h3", { staticClass: "uk-article-heading" }, [
                      _vm._v("Frontend Development")
                    ]),
                    _vm._v(" "),
                    _c("section", [
                      _c("p", [
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/html5"
                            }
                          },
                          [_vm._v("HTML5")]
                        ),
                        _vm._v(" , CSS / "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/sass"
                            }
                          },
                          [_vm._v("SCSS")]
                        ),
                        _vm._v(" ,\n\t\t\t\t\t\t\t\t\tJavaScript , "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/vue-js"
                            }
                          },
                          [_vm._v("Vue.js")]
                        ),
                        _vm._v(" , "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/uikit"
                            }
                          },
                          [_vm._v("UIKit")]
                        ),
                        _vm._v("\n\t\t\t\t\t\t\t\t\t, "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/vuetify"
                            }
                          },
                          [_vm._v("Vuetify")]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("section", { staticClass: "uk-height-1-2" }, [
                  _c("article", { staticClass: "uk-article" }, [
                    _c("h3", { staticClass: "uk-article-heading" }, [
                      _vm._v("Backend Development")
                    ]),
                    _vm._v(" "),
                    _c("section", [
                      _c("p", [
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/nodejs"
                            }
                          },
                          [_vm._v("Node.js")]
                        ),
                        _vm._v("\n\t\t\t\t\t\t\t\t\t, "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/express"
                            }
                          },
                          [_vm._v("Express")]
                        ),
                        _vm._v("\n\t\t\t\t\t\t\t\t\t, "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/php"
                            }
                          },
                          [_vm._v("PHP")]
                        ),
                        _vm._v(" , "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/nuxt"
                            }
                          },
                          [_vm._v("Nuxt")]
                        )
                      ])
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "section",
              {
                staticClass:
                  "uk-section uk-section-default uk-flex uk-flex-column uk-grid uk-grid-divider uk-margin-remove-top",
                attrs: { "uk-grid": "" }
              },
              [
                _c("section", { staticClass: "uk-height-1-2" }, [
                  _c("article", { staticClass: "uk-article" }, [
                    _c("h3", { staticClass: "uk-article-heading" }, [
                      _vm._v("Database Management")
                    ]),
                    _vm._v(" "),
                    _c("section", [
                      _c("p", [
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/mongodb"
                            }
                          },
                          [_vm._v("MongoDb")]
                        ),
                        _vm._v("\n\t\t\t\t\t\t\t\t\t, "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/pouchdb"
                            }
                          },
                          [_vm._v("PouchDb")]
                        ),
                        _vm._v("\n\t\t\t\t\t\t\t\t\t,"),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/graphql"
                            }
                          },
                          [_vm._v("GraphQl")]
                        ),
                        _vm._v(" , "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/myql"
                            }
                          },
                          [_vm._v("MySQL")]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("section", { staticClass: "uk-height-1-2" }, [
                  _c("article", { staticClass: "uk-article" }, [
                    _c("h3", { staticClass: "uk-article-heading" }, [
                      _vm._v("DevOps")
                    ]),
                    _vm._v(" "),
                    _c("section", [
                      _c("p", [
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/github"
                            }
                          },
                          [_vm._v("Git")]
                        ),
                        _vm._v(" , "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/travis-ci"
                            }
                          },
                          [_vm._v("Travis Ci")]
                        ),
                        _vm._v(" /\n\t\t\t\t\t\t\t\t\t"),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/circleci"
                            }
                          },
                          [_vm._v("CircleCi")]
                        ),
                        _vm._v(" ,\n\t\t\t\t\t\t\t\t\t"),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/firebase"
                            }
                          },
                          [_vm._v("Firebase")]
                        ),
                        _vm._v(" / "),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/heroku"
                            }
                          },
                          [_vm._v("Heroku")]
                        ),
                        _vm._v(
                          " /\n\t\t\t\t\t\t\t\t\tSelf-hosted\n\t\t\t\t\t\t\t\t\t, "
                        ),
                        _c(
                          "a",
                          {
                            staticClass: "uk-link-text",
                            attrs: {
                              target: "_blank",
                              href: "http://www.stackshare.io/heroku"
                            }
                          },
                          [_vm._v("Webpack")]
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
    require("vue-hot-reload-api")      .rerender("data-v-37d64494", module.exports)
  }
}

/***/ })

});