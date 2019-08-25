webpackJsonp([5],{

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(228)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(230)
/* template */
var __vue_template__ = __webpack_require__(231)
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
Component.options.__file = "resources/assets/js/components/aboutComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e7c59c7", Component.options)
  } else {
    hotAPI.reload("data-v-4e7c59c7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(77)("53636e7c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4e7c59c7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./aboutComponent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4e7c59c7\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./aboutComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(76)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 230:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "About",
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 231:
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
        staticClass: "uk-section uk-section-default hello uk-container",
        attrs: { id: "hello" }
      },
      [
        _c(
          "div",
          {
            staticClass: "uk-flex uk-grid uk-child-width-1-2@m",
            attrs: { "uk-grid": "" }
          },
          [
            _c("section", { staticClass: "uk-flex uk-flex-last@m" }, [
              _c(
                "figure",
                {
                  staticClass:
                    "uk-margin-auto uk-margin-auto-vertical uk-box-shadow-bottom"
                },
                [
                  _c("img", {
                    staticClass:
                      "uk-card uk-card-default uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-card uk-padding-small",
                    attrs: {
                      "data-src": "images/char_dominator.png",
                      "uk-img": ""
                    }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "section",
              {
                staticClass:
                  "uk-section uk-section-default uk-padding-remove-top uk-flex uk-flex-first@m"
              },
              [
                _c("article", { staticClass: "uk-article" }, [
                  _c(
                    "h2",
                    {
                      staticClass:
                        "uk-article-title uk-text-left@m uk-text-center"
                    },
                    [
                      _vm._v(
                        "\n                        I am Victory Garuba\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", {}, [
                    _vm._v(
                      " I am a self-taught Front End Engineer currently located in Lagos, Nigeria."
                    )
                  ]),
                  _vm._v(" "),
                  _c("section", [
                    _c(
                      "p",
                      {
                        staticClass:
                          "uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _c("span", { staticClass: "uk-width-1-6" }, [
                          _vm._v("Phone:")
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "uk-width-5-6 uk-text-left" },
                          [_vm._v("(+234) 08183659972")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _c("span", { staticClass: "uk-width-1-6" }, [
                          _vm._v("Email:")
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "uk-width-5-6  uk-text-left" },
                          [
                            _c(
                              "a",
                              {
                                attrs: {
                                  target: "_blank",
                                  href: "mailto:garubav@gmail.com"
                                }
                              },
                              [_vm._v("garubav@gmail.com")]
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small",
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _c("span", { staticClass: "uk-width-1-6" }, [
                          _vm._v("Address: ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "uk-width-5-6 uk-text-left" },
                          [_vm._v("Lagos,Nigeria")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      {
                        staticClass:
                          "uk-text-lead uk-text-small uk-flex uk-flex-left uk-margin-small",
                        staticStyle: { "align-items": "center" },
                        attrs: { "uk-grid": "" }
                      },
                      [
                        _c("span", { staticClass: "uk-width-1-6" }, [
                          _vm._v("Social:")
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "uk-width-5-6 uk-text-left" },
                          [
                            _c("span", { staticClass: "uk-button-group" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "uk-button uk-button-primary uk-padding-remove-horizontal",
                                  attrs: {
                                    target: "_blank",
                                    href: "http://www.twitter.com/lonelytomb"
                                  }
                                },
                                [_vm._v("Twitter")]
                              ),
                              _vm._v(" "),
                              _c("a", {
                                staticClass:
                                  "uk-button uk-button-primary uk-padding-remove-horizontal",
                                attrs: {
                                  target: "_blank",
                                  href: "http://www.twitter.com/lonelytomb",
                                  "uk-icon": "icon: twitter"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "uk-button-group" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "uk-button uk-button-secondary uk-padding-remove-horizontal",
                                  attrs: {
                                    target: "_blank",
                                    href: "http://www.twitter.com/lonelytomb"
                                  }
                                },
                                [_vm._v("Github")]
                              ),
                              _vm._v(" "),
                              _c("a", {
                                staticClass:
                                  "uk-button uk-button-secondary uk-padding-remove-horizontal uk-padding-remove-vertical",
                                attrs: {
                                  target: "_blank",
                                  href: "http://www.github.com/lonelyTomb",
                                  "uk-icon": "icon: github"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "uk-button-group" }, [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "uk-button uk-button-primary uk-padding-remove-horizontal",
                                  attrs: {
                                    target: "_blank",
                                    href:
                                      "http://www.linkedin.com/in/victory-garuba-a17628114"
                                  }
                                },
                                [_vm._v("LinkedIn")]
                              ),
                              _vm._v(" "),
                              _c("a", {
                                staticClass:
                                  "uk-button uk-button-primary uk-padding-remove-horizontal",
                                attrs: {
                                  target: "_blank",
                                  href:
                                    "http://www.linkedin.com/in/victory-garuba-a17628114",
                                  "uk-icon": "icon: linkedin"
                                }
                              })
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "uk-button-group" }, [
                          _c(
                            "a",
                            {
                              staticClass:
                                "uk-button uk-button-primary uk-padding-remove-horizontal",
                              attrs: {
                                target: "_blank",
                                href:
                                  "http://www.linkedin.com/in/victory-garuba-a17628114"
                              }
                            },
                            [_vm._v("LinkedIn")]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "uk-margin-top" }, [
                      _c(
                        "a",
                        {
                          staticClass: "uk-button uk-button-default",
                          attrs: {
                            href: "#contact",
                            "uk-scroll": "offset:100;"
                          }
                        },
                        [_vm._v(" Contact\n                                Me")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "uk-button uk-button-danger",
                          attrs: {
                            target: "_blank",
                            href:
                              "https://drive.google.com/open?id=1oX9U6Wtr3yE_10MmzrdMYp5elTmcelKy"
                          }
                        },
                        [
                          _vm._v(
                            " Download\n                                CV"
                          )
                        ]
                      )
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
    require("vue-hot-reload-api")      .rerender("data-v-4e7c59c7", module.exports)
  }
}

/***/ })

});