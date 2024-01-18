(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_vouchers_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Vouchers",
  data: function data() {
    return {
      mode: false,
      vouchers: [],
      filters: {
        drivers: [],
        vehicles: [],
        cities: [],
        types: [{
          id: "Sending",
          name: this.$t("Sending")
        }, {
          id: "Receiving",
          name: this.$t("Receiving")
        }],
        from_date: "",
        to_date: ""
      },
      fields: [{
        key: "voucher_number",
        sortable: false
      }, {
        key: "driver",
        sortable: false
      }, {
        key: "vehicle",
        sortable: false
      }, {
        key: "type",
        sortable: false
      }, {
        key: "city",
        sortable: false
      }, {
        key: "total_bilties",
        sortable: false
      }, {
        key: "quantity",
        sortable: false
      }, {
        key: "fare",
        sortable: false
      }, {
        key: "labour",
        sortable: false
      }, {
        key: "adv",
        sortable: false
      }, {
        key: "delivery",
        sortable: false
      }, {
        key: "vehicle_payment",
        sortable: false
      }, {
        key: "created_at",
        sortable: false
      }, {
        key: "action",
        sortable: false
      }],
      form: {
        filters: {
          driver: null,
          vehicle: null,
          city: null,
          type: null,
          from_date: "",
          to_date: ""
        }
      },
      currentPage: 1,
      rows: null,
      perPage: 5,
      keyword: null,
      timer: 0,
      showModel: false,
      showSpiner: false
    };
  },
  created: function created() {
    this.getData();
    this.getDataForFilters();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["locale"])),
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this.keyword != null) {
                  _this.currentPage = 1;
                }

                clearTimeout(_this.timer);
                _this.timer = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
                  var params, _yield$axios$get, data;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          params = {
                            perPage: _this.perPage,
                            currentPage: _this.currentPage,
                            keyword: _this.keyword,
                            driver: _this.form.filters.driver,
                            vehicle: _this.form.filters.vehicle,
                            city: _this.form.filters.city,
                            type: _this.form.filters.type,
                            from_date: _this.form.filters.from_date,
                            to_date: _this.form.filters.to_date
                          };
                          _context.next = 3;
                          return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/vouchers", {
                            params: params
                          });

                        case 3:
                          _yield$axios$get = _context.sent;
                          data = _yield$axios$get.data;
                          _this.vouchers = data.data;
                          _this.rows = data.total;

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), 400);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getDataForFilters: function getDataForFilters() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/vouchers/filters/data", {});

              case 2:
                _yield$axios$get2 = _context3.sent;
                data = _yield$axios$get2.data;
                _this2.filters.drivers = data.drivers;
                _this2.filters.vehicles = data.vehicles;
                _this2.filters.cities = data.cities;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    deleteRow: function deleteRow(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _yield$axios$delete, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().delete("/vouchers/".concat(id));

              case 2:
                _yield$axios$delete = _context4.sent;
                data = _yield$axios$delete.data;

                if (data.status) {
                  _this3.$toastr.s("SUCCESS", data.message);

                  _this3.getData();
                } else {
                  _this3.$toastr.e("Error", data.message);
                }

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    generateReport: function generateReport(id) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var response, url, link;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/vouchers/report/".concat(id), {
                  responseType: "arraybuffer"
                });

              case 2:
                response = _context5.sent;
                url = window.URL.createObjectURL(new Blob([response.data], {
                  type: "application/pdf"
                }));
                link = document.createElement("a");
                link.href = url;
                link.target = "_blank";
                document.body.appendChild(link);
                link.click();

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    clearFilter: function clearFilter() {
      this.form = {
        filters: {
          driver: null,
          vehicle: null,
          city: null,
          from_date: "",
          to_date: ""
        }
      };
      this.getData();
    }
  }
});

/***/ }),

/***/ "./resources/js/views/vouchers/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/vouchers/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1a246087___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1a246087& */ "./resources/js/views/vouchers/index.vue?vue&type=template&id=1a246087&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/vouchers/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_1a246087___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1a246087___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/vouchers/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/vouchers/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/vouchers/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/vouchers/index.vue?vue&type=template&id=1a246087&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/vouchers/index.vue?vue&type=template&id=1a246087& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a246087___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a246087___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1a246087___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1a246087& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/index.vue?vue&type=template&id=1a246087&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/index.vue?vue&type=template&id=1a246087&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/index.vue?vue&type=template&id=1a246087& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card shadow mb-4" }, [
      _c("div", { staticClass: "card-header py-3" }, [
        _c(
          "div",
          { staticClass: "d-flex align-items-center justify-content-between" },
          [
            _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.$t("vouchers")) +
                  "\n                "
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-primary text-nowrap",
                on: {
                  click: function($event) {
                    return _vm.$router.push({ name: "vouchers.create" })
                  }
                }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$t("add_voucher")) +
                    "\n                "
                )
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c(
            "div",
            {
              staticClass:
                "row d-flex justify-content-between align-items-center"
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-md-3 mb-2 d-flex justify-content-center",
                  staticStyle: { "column-gap": "1rem" }
                },
                [
                  _c("b-form-select", {
                    attrs: { options: [5, 10, 15, 20] },
                    on: { change: _vm.getData },
                    model: {
                      value: _vm.perPage,
                      callback: function($$v) {
                        _vm.perPage = $$v
                      },
                      expression: "perPage"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "b-toggle",
                          rawName: "v-b-toggle.sidebar-right",
                          modifiers: { "sidebar-right": true }
                        }
                      ],
                      staticClass: "col-3 btn btn-sm btn-info text-nowrap"
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.$t("filters")) +
                          "\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-md-4 col-lg-3 col-12 mb-2 d-flex justify-content-around align-items-center"
                },
                [
                  _c(
                    "div",
                    [
                      [
                        _c(
                          "div",
                          [
                            _c(
                              "b-sidebar",
                              {
                                attrs: {
                                  id: "sidebar-right",
                                  title: _vm.$t("filter"),
                                  right: "",
                                  shadow: ""
                                }
                              },
                              [
                                _c("div", { staticClass: "py-2" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-12" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "driver" } },
                                        [_vm._v(_vm._s(_vm.$t("drivers")))]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          clearable: false,
                                          options: _vm.filters.drivers,
                                          label: "name",
                                          reduce: function(option) {
                                            return option.id
                                          }
                                        },
                                        model: {
                                          value: _vm.form.filters.driver,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.filters,
                                              "driver",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                                                    form.filters.driver\n                                                "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 mt-3" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "vehicles" } },
                                        [_vm._v(_vm._s(_vm.$t("vehicles")))]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          clearable: false,
                                          options: _vm.filters.vehicles,
                                          label: "name",
                                          reduce: function(option) {
                                            return option.id
                                          }
                                        },
                                        model: {
                                          value: _vm.form.filters.vehicle,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.filters,
                                              "vehicle",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "\n                                                    form.filters.vehicle\n                                                "
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 mt-3" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "cities" } },
                                        [_vm._v(_vm._s(_vm.$t("cities")))]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          clearable: false,
                                          options: _vm.filters.cities,
                                          label: "name",
                                          reduce: function(option) {
                                            return option.id
                                          }
                                        },
                                        model: {
                                          value: _vm.form.filters.city,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form.filters,
                                              "city",
                                              $$v
                                            )
                                          },
                                          expression: "form.filters.city"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-12 mt-2" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "from_date" } },
                                      [_vm._v(_vm._s(_vm.$t("from_date")))]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.filters.from_date,
                                          expression:
                                            "\n                                                    form.filters.from_date\n                                                "
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "date",
                                        name: "from_date",
                                        placeholder: "dd-mm-yyyy"
                                      },
                                      domProps: {
                                        value: _vm.form.filters.from_date
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form.filters,
                                            "from_date",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-12 mt-2" }, [
                                    _c("label", { attrs: { for: "to_date" } }, [
                                      _vm._v(_vm._s(_vm.$t("to_date")))
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.filters.to_date,
                                          expression:
                                            "\n                                                    form.filters.to_date\n                                                "
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "date", name: "to_date" },
                                      domProps: {
                                        value: _vm.form.filters.to_date
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form.filters,
                                            "to_date",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "col-12 mt-4" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "col-4 btn btn-sm btn-primary text-nowrap",
                                        on: { click: _vm.getData }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(_vm.$t("filter")) +
                                            "\n                                            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "col-3 btn btn-sm btn-outline-danger text-nowrap",
                                        on: { click: _vm.clearFilter }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(_vm.$t("clear")) +
                                            "\n                                            "
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ]
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "iq-search-bar d-none d-md-block" },
                    [
                      _c(
                        "form",
                        { staticClass: "searchbox", attrs: { action: "#" } },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.keyword,
                                expression: "keyword"
                              }
                            ],
                            staticClass: "form-control",
                            staticStyle: { cursor: "pointer" },
                            attrs: {
                              type: "text",
                              placeholder: _vm.$t("search")
                            },
                            domProps: { value: _vm.keyword },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.keyword = $event.target.value
                                },
                                _vm.getData
                              ]
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("b-table", {
            attrs: { items: _vm.vouchers, fields: _vm.fields, responsive: "" },
            scopedSlots: _vm._u([
              {
                key: "head()",
                fn: function(row) {
                  return [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t(row.column)) +
                        "\n                "
                    )
                  ]
                }
              },
              {
                key: "head(selected)",
                fn: function(row) {
                  return [
                    _c("b-checkbox", {
                      attrs: { type: "checkbox", value: true },
                      on: { change: _vm.selectAll },
                      model: {
                        value: _vm.mode,
                        callback: function($$v) {
                          _vm.mode = $$v
                        },
                        expression: "mode"
                      }
                    })
                  ]
                }
              },
              {
                key: "cell(selected)",
                fn: function(row) {
                  return [
                    _c("b-checkbox", {
                      attrs: { type: "checkbox", name: "", value: row.item.id },
                      model: {
                        value: _vm.selectedItems,
                        callback: function($$v) {
                          _vm.selectedItems = $$v
                        },
                        expression: "selectedItems"
                      }
                    })
                  ]
                }
              },
              {
                key: "cell(voucher_number)",
                fn: function(row) {
                  return [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t(row.item.id)) +
                        "\n                "
                    )
                  ]
                }
              },
              {
                key: "cell(type)",
                fn: function(row) {
                  return [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t(row.item.type)) +
                        "\n                "
                    )
                  ]
                }
              },
              {
                key: "cell(driver)",
                fn: function(row) {
                  return [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "voucher.payments",
                            query: {
                              from: "voucher",
                              voucherId: row.item.id
                            }
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(row.item.driver.name) +
                            "\n                    "
                        )
                      ]
                    )
                  ]
                }
              },
              {
                key: "cell(city)",
                fn: function(row) {
                  return [
                    _vm._v(
                      "\n                    " +
                        _vm._s(row.value.name) +
                        "\n                "
                    )
                  ]
                }
              },
              {
                key: "cell(vehicle)",
                fn: function(row) {
                  return [
                    _vm._v(
                      "\n                    " +
                        _vm._s(row.value.name) +
                        "\n                "
                    )
                  ]
                }
              },
              {
                key: "cell(vehicle_payment)",
                fn: function(row) {
                  return [
                    row.item.paid_fare > 0
                      ? [
                          _vm._v(
                            "\n                     " +
                              _vm._s(row.item.paid_fare) +
                              "\n                    "
                          )
                        ]
                      : [
                          _vm._v(
                            "\n                       0\n                    "
                          )
                        ]
                  ]
                }
              },
              {
                key: "cell(action)",
                fn: function(row) {
                  return [
                    _c(
                      "b-dropdown",
                      {
                        attrs: {
                          variant: "link",
                          "toggle-class": "text-decoration-none",
                          "no-caret": ""
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "button-content",
                              fn: function() {
                                return [
                                  _c("span", [
                                    _c("i", {
                                      staticClass: "fa-solid fa-ellipsis"
                                    })
                                  ])
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          true
                        )
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            attrs: {
                              to: {
                                name: "vouchers.edit",
                                params: { voucherId: row.item.id }
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("edit")))]
                        ),
                        _vm._v(" "),
                         false
                          ? 0
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.generateReport(row.item.id)
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.$t("report")))]
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _vm.vouchers.length === 0
            ? _c("div", { staticClass: "alert alert-info text-center" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.$t("no_record_found")) +
                    "\n            "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex justify-content-end mt-4 pb-3" },
            [
              _c("b-pagination", {
                attrs: {
                  pills: "",
                  size: "md",
                  "total-rows": _vm.rows,
                  "per-page": _vm.perPage,
                  "aria-controls": "my-table"
                },
                on: { input: _vm.getData },
                scopedSlots: _vm._u([
                  {
                    key: "first-text",
                    fn: function() {
                      return [
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.locale == "en",
                                expression: "locale == 'en'"
                              }
                            ]
                          },
                          [_c("i", { staticClass: "fa-solid fa-angles-left" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.locale == "ur",
                                expression: "locale == 'ur'"
                              }
                            ]
                          },
                          [_c("i", { staticClass: "fa-solid fa-angles-right" })]
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "prev-text",
                    fn: function() {
                      return [
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.locale == "en",
                                expression: "locale == 'en'"
                              }
                            ]
                          },
                          [_c("i", { staticClass: "fa-solid fa-angle-left" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.locale == "ur",
                                expression: "locale == 'ur'"
                              }
                            ]
                          },
                          [_c("i", { staticClass: "fa-solid fa-angle-right" })]
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "next-text",
                    fn: function() {
                      return [
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.locale == "en",
                                expression: "locale == 'en'"
                              }
                            ]
                          },
                          [_c("i", { staticClass: "fa-solid fa-angle-right" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.locale == "ur",
                                expression: "locale == 'ur'"
                              }
                            ]
                          },
                          [_c("i", { staticClass: "fa-solid fa-angle-left" })]
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "last-text",
                    fn: function() {
                      return [
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.locale == "en",
                                expression: "locale == 'en'"
                              }
                            ]
                          },
                          [_c("i", { staticClass: "fa-solid fa-angles-right" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.locale == "ur",
                                expression: "locale == 'ur'"
                              }
                            ]
                          },
                          [_c("i", { staticClass: "fa-solid fa-angles-left" })]
                        )
                      ]
                    },
                    proxy: true
                  }
                ]),
                model: {
                  value: _vm.currentPage,
                  callback: function($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);