(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_sales_ShowSale_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/ShowSale.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/ShowSale.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ShowSale",
  data: function data() {
    return {
      customers: [],
      products: [],
      allProducts: [],
      selectedProducts: [],
      fields: [{
        key: "name",
        sortable: false
      }, {
        key: "price",
        sortable: false
      }, {
        key: "quantity",
        sortable: false
      }],
      customerForm: new vform__WEBPACK_IMPORTED_MODULE_2__.default({
        id: null,
        name: null,
        contact: null,
        address: null
      }),
      form: new vform__WEBPACK_IMPORTED_MODULE_2__.default({
        id: null,
        customer_id: null,
        selected_products: [],
        total_amount: 0,
        paid_amount: 0,
        total_paid_amount: 0,
        discount: 0,
        remainder: 0,
        paid: true
      }),
      showSpinner: false,
      timer: 0
    };
  },
  created: function created() {
    var _this$$route$params$s, _this$$route$params;

    this.getSalesCreateData();
    this.form.id = (_this$$route$params$s = (_this$$route$params = this.$route.params) === null || _this$$route$params === void 0 ? void 0 : _this$$route$params.saleId) !== null && _this$$route$params$s !== void 0 ? _this$$route$params$s : null;
  },
  methods: {
    applyProductStyle: function applyProductStyle(productId) {
      return this.selectedProducts.some(function (selectedProduct) {
        return selectedProduct.id === productId;
      });
    },
    getSalesCreateData: function getSalesCreateData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/sales-create-data");

              case 2:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.products = _this.form.id ? data === null || data === void 0 ? void 0 : data.products_for_edit_sale : data === null || data === void 0 ? void 0 : data.products;
                _this.allProducts = _this.products;
                _this.customers = data === null || data === void 0 ? void 0 : data.customers;

                if (_this.form.id) {
                  _this.getSaleById(_this.form.id);
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getSaleById: function getSaleById(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/sales/".concat(id));

              case 2:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;

                _this2.form.fill(data);

                _this2.selectedProducts = data === null || data === void 0 ? void 0 : data.products;
                _this2.form.paid = !!(data !== null && data !== void 0 && data.paid);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vform/dist/vform.es.js":
/*!*********************************************!*\
  !*** ./node_modules/vform/dist/vform.es.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Errors": () => (/* binding */ y),
/* harmony export */   "Form": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,i=(e,i)=>{for(var a in i||(i={}))t.call(i,a)&&o(e,a,i[a]);if(s)for(var a of s(i))r.call(i,a)&&o(e,a,i[a]);return e};const n=e=>void 0===e,c=e=>Array.isArray(e),l=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,u=(e,t,s,r)=>((t=t||{}).indices=!n(t.indices)&&t.indices,t.nullsAsUndefineds=!n(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!n(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!n(t.allowEmptyArrays)&&t.allowEmptyArrays,s=s||new FormData,n(e)||(null===e?t.nullsAsUndefineds||s.append(r,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?s.append(r,e?1:0):s.append(r,e):c(e)?e.length?e.forEach(((e,o)=>{const i=r+"["+(t.indices?o:"")+"]";u(e,t,s,i)})):t.allowEmptyArrays&&s.append(r+"[]",""):(e=>e instanceof Date)(e)?s.append(r,e.toISOString()):!(e=>e===Object(e))(e)||(e=>l(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||l(e)?s.append(r,e):Object.keys(e).forEach((o=>{const i=e[o];if(c(i))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);u(i,t,s,r?r+"["+o+"]":o)}))),s);var h={serialize:u};function d(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((s=>{t[s]=d(e[s])})),t}function f(e){return Array.isArray(e)?e:[e]}function p(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>p(e)))}class y{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(i(i({},this.errors),{[e]:f(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return f(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const s=this.get(e);s&&t.push(s)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((s=>{s!==e&&(t[s]=this.errors[s])})),this.set(t)}}class g{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new y,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,d(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>i(i({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!g.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),g.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!g.ignore.includes(e))).forEach((e=>{this[e]=d(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,s={}){return this.startProcessing(),s=i({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===e.toLowerCase()?s.params=i(i({},this.data()),s.params):(s.data=i(i({},this.data()),s.data),p(s.data)&&!s.transformRequest&&(s.transformRequest=[e=>h.serialize(e)])),new Promise(((e,t)=>{(g.axios||(axios__WEBPACK_IMPORTED_MODULE_0___default())).request(s).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?i({},e.data.errors):e.data.message?{error:e.data.message}:i({},e.data):{error:g.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let s=e;return Object.prototype.hasOwnProperty.call(g.routes,e)&&(s=decodeURI(g.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{s=s.replace(`{${e}}`,t[e])})),s}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}g.routes={},g.errorMessage="Something went wrong. Please try again.",g.recentlySuccessfulTimeout=2e3,g.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (g);


/***/ }),

/***/ "./resources/js/views/sales/ShowSale.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/sales/ShowSale.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowSale_vue_vue_type_template_id_42536434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowSale.vue?vue&type=template&id=42536434& */ "./resources/js/views/sales/ShowSale.vue?vue&type=template&id=42536434&");
/* harmony import */ var _ShowSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowSale.vue?vue&type=script&lang=js& */ "./resources/js/views/sales/ShowSale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ShowSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ShowSale_vue_vue_type_template_id_42536434___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowSale_vue_vue_type_template_id_42536434___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/sales/ShowSale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/sales/ShowSale.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/sales/ShowSale.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowSale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/ShowSale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/sales/ShowSale.vue?vue&type=template&id=42536434&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/sales/ShowSale.vue?vue&type=template&id=42536434& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowSale_vue_vue_type_template_id_42536434___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowSale_vue_vue_type_template_id_42536434___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowSale_vue_vue_type_template_id_42536434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowSale.vue?vue&type=template&id=42536434& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/ShowSale.vue?vue&type=template&id=42536434&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/ShowSale.vue?vue&type=template&id=42536434&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/ShowSale.vue?vue&type=template&id=42536434& ***!
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
  return _c(
    "div",
    [
      _c(
        "b-overlay",
        {
          attrs: { show: "", opacity: "0.20" },
          scopedSlots: _vm._u([
            {
              key: "overlay",
              fn: function() {
                return [_c("div")]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("div", { staticClass: "row mt-5" }, [
            _c("div", { staticClass: "col-8" }, [
              _c("div", { staticClass: "card card-body mt-3" }, [
                _vm.products.length
                  ? _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.products, function(product, i) {
                        return _c(
                          "div",
                          {
                            key: i,
                            class: [
                              "col-2 card m-3",
                              _vm.applyProductStyle(product.id)
                                ? "bg-secondary text-white"
                                : ""
                            ],
                            staticStyle: { "max-width": "14rem" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card-body text-center d-flex align-items-center"
                              },
                              [
                                _c("h5", { staticClass: "card-title" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        product.name +
                                          " - " +
                                          product.price_per_product
                                      ) +
                                      "\n                                "
                                  )
                                ])
                              ]
                            )
                          ]
                        )
                      }),
                      0
                    )
                  : _c("h5", [
                      _vm._v(
                        "\n                        No Products Found\n                    "
                      )
                    ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-4 mt-2" }, [
              _c(
                "div",
                {},
                [
                  _c("label", { staticClass: "form-label" }, [
                    _vm._v(_vm._s(_vm.$t("customer")))
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      clearable: false,
                      options: _vm.customers,
                      label: "label",
                      reduce: function(option) {
                        return option.value
                      }
                    },
                    model: {
                      value: _vm.form.customer_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "customer_id", $$v)
                      },
                      expression: "form.customer_id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card text-black bg-lite my-3" }, [
                _c("div", { staticClass: "card-header" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.$t("selected_products")) +
                      "\n                    "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("b-table", {
                      attrs: {
                        items: _vm.selectedProducts,
                        fields: _vm.fields,
                        responsive: ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "head()",
                          fn: function(row) {
                            return [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.$t(row.column)) +
                                  "\n                            "
                              )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$t("total_amount")) +
                    ":  \n                    "
                ),
                _c("b", [
                  _vm._v(
                    " " +
                      _vm._s(_vm.$t("rs")) +
                      " " +
                      _vm._s(_vm.form.total_amount) +
                      " "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-3" }, [
                _c("label", { staticClass: "col-form-label" }, [
                  _vm._v(_vm._s(_vm.$t("paid_amount")))
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.paid_amount,
                      expression: "form.paid_amount"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: "",
                    type: "number",
                    name: "paid_amount",
                    min: "0"
                  },
                  domProps: { value: _vm.form.paid_amount },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "paid_amount", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2" }, [
                _c("label", { staticClass: "col-form-label" }, [
                  _vm._v(_vm._s(_vm.$t("total_paid_amount")))
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.total_paid_amount,
                      expression: "form.total_paid_amount"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: _vm.form.total_amount == 0,
                    type: "number",
                    name: "total_paid_amount",
                    min: "0"
                  },
                  domProps: { value: _vm.form.total_paid_amount },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.form,
                        "total_paid_amount",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2" }, [
                _c("label", { staticClass: "col-form-label" }, [
                  _vm._v(_vm._s(_vm.$t("discount")))
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.discount,
                      expression: "form.discount"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    disabled: _vm.form.total_amount == 0,
                    type: "number",
                    name: "discount",
                    min: "0"
                  },
                  domProps: { value: _vm.form.discount },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "discount", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.form.discount > _vm.form.total_amount
                  ? _c("span", { staticClass: "text-danger mt-3" }, [
                      _vm._v(_vm._s(_vm.$t("discount_error")))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex mt-3" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$t("remainder")) +
                    ":  \n                    "
                ),
                _c("b", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.$t("rs")) +
                      "\n                    "
                  )
                ]),
                _vm._v("\n                     \n                    "),
                _c("b", [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.form.remainder) +
                      "\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-3" },
                [
                  _c(
                    "b-form-checkbox",
                    {
                      attrs: { size: "lg" },
                      model: {
                        value: _vm.form.paid,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "paid", $$v)
                        },
                        expression: "form.paid"
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("paid")))]
                  )
                ],
                1
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex justify-content-end mt-2" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-danger text-nowrap mr-1",
            on: {
              click: function($event) {
                return _vm.$router.push({ name: "sales" })
              }
            }
          },
          [_vm._v("\n            " + _vm._s(_vm.$t("back")) + "\n        ")]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);