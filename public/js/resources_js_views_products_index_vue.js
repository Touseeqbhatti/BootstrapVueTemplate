(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_products_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/index.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Shops",
  data: function data() {
    return {
      deleteProductTooltipText: this.$t("delete_product_tooltip_text"),
      blocks: [],
      mode: false,
      items: [],
      fields: [{
        key: "name",
        sortable: false
      }, {
        key: "category",
        sortable: false
      }, {
        key: "product_unit",
        sortable: false
      }, {
        key: "product_unit_quantity",
        sortable: false
      }, {
        key: "price_per_product",
        sortable: false
      }, {
        key: "total_product_price",
        sortable: false
      }, {
        key: "availability_status",
        sortable: false
      }, {
        key: "action",
        sortable: false
      }],
      productUnits: [{
        text: "Quantity",
        value: "quantity"
      }, {
        text: "Weight",
        value: "weight"
      }],
      form: new vform__WEBPACK_IMPORTED_MODULE_2__.default({
        id: null,
        name: null,
        category: null,
        product_unit: null,
        product_unit_quantity: null,
        price_per_product: null
      }),
      currentPage: 1,
      rows: null,
      perPage: 20,
      keyword: null,
      timer: 0,
      showModel: false,
      showSpinner: false
    };
  },
  created: function created() {
    this.getData();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)(["locale"])),
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
                            keyword: _this.keyword
                          };
                          _context.next = 3;
                          return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/products", {
                            params: params
                          });

                        case 3:
                          _yield$axios$get = _context.sent;
                          data = _yield$axios$get.data;
                          _this.items = data.data;
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
    deleteRow: function deleteRow(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this2.$bvModal.msgBoxConfirm(_this2.$t("delete_confirmation_text"), {
                  title: _this2.$t("confirmation"),
                  size: "md",
                  buttonSize: "sm",
                  okVariant: "danger",
                  cancelVariant: "success",
                  okTitle: _this2.$t("yes"),
                  cancelTitle: _this2.$t("no"),
                  footerClass: "p-2",
                  hideHeaderClose: true,
                  centered: true,
                  noCloseOnBackdrop: true
                }).then( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(value) {
                    var _yield$axios$delete, data;

                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!value) {
                              _context3.next = 6;
                              break;
                            }

                            _context3.next = 3;
                            return axios__WEBPACK_IMPORTED_MODULE_1___default().delete("/products/".concat(id));

                          case 3:
                            _yield$axios$delete = _context3.sent;
                            data = _yield$axios$delete.data;

                            if (data.status) {
                              _this2.$toastr.s("SUCCESS", data.message);

                              _this2.getData();
                            } else {
                              _this2.$toastr.e("Error", data.message);
                            }

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }())["catch"](function (error) {
                  console.error(error);
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    save: function save() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var _yield$_this3$form$po, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this3.showSpinner = true;
                _context5.prev = 1;
                _context5.next = 4;
                return _this3.form.post("/products");

              case 4:
                _yield$_this3$form$po = _context5.sent;
                data = _yield$_this3$form$po.data;

                if (!(data.status == true)) {
                  _context5.next = 15;
                  break;
                }

                _this3.user = data.data;

                _this3.$toastr.s("Success", data.message);

                _this3.showSpinner = false;

                _this3.getData();

                _this3.form.reset();

                _this3.showModel = false;
                _context5.next = 17;
                break;

              case 15:
                _this3.showSpinner = false;
                return _context5.abrupt("return");

              case 17:
                _context5.next = 23;
                break;

              case 19:
                _context5.prev = 19;
                _context5.t0 = _context5["catch"](1);
                _this3.showSpinner = false;

                _this3.$toastr.e("Error", _context5.t0);

              case 23:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 19]]);
      }))();
    },
    edit: function edit(row) {
      this.form.fill(row);
      this.showModel = true;
    },
    closeModal: function closeModal() {
      this.form.reset();
      this.showModel = false;
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

/***/ "./resources/js/views/products/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/products/index.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_2bc75fa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2bc75fa6& */ "./resources/js/views/products/index.vue?vue&type=template&id=2bc75fa6&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/products/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_2bc75fa6___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_2bc75fa6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/products/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/products/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/products/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/products/index.vue?vue&type=template&id=2bc75fa6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/products/index.vue?vue&type=template&id=2bc75fa6& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2bc75fa6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2bc75fa6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2bc75fa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=2bc75fa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/index.vue?vue&type=template&id=2bc75fa6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/index.vue?vue&type=template&id=2bc75fa6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/products/index.vue?vue&type=template&id=2bc75fa6& ***!
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
      _c("div", { staticClass: "card shadow mb-4" }, [
        _c("div", { staticClass: "card-header py-3" }, [
          _c(
            "div",
            {
              staticClass: "d-flex align-items-center justify-content-between"
            },
            [
              _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$t("products")) +
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
                      _vm.showModel = true
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("add_product")) +
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
                  { staticClass: "col-md-4 col-lg-3 col-12 mb-2" },
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
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4 col-lg-3 col-12 mb-2" }, [
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
                ])
              ]
            ),
            _vm._v(" "),
            _c("b-table", {
              attrs: {
                items: _vm.items,
                fields: _vm.fields,
                "sort-icon-left": "",
                responsive: ""
              },
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
                  key: "cell(product_unit)",
                  fn: function(row) {
                    return [
                      _c("div", { staticClass: "text-capitalize" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(row.value) +
                            "\n                    "
                        )
                      ])
                    ]
                  }
                },
                {
                  key: "cell(total_product_price)",
                  fn: function(row) {
                    return [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            row.item.product_unit_quantity *
                              row.item.price_per_product
                          ) +
                          "\n                "
                      )
                    ]
                  }
                },
                {
                  key: "cell(availability_status)",
                  fn: function(row) {
                    return [
                      row.item.product_unit_quantity > 0
                        ? _c("b-badge", { attrs: { variant: "success" } }, [
                            _vm._v(_vm._s(_vm.$t("in_stock")))
                          ])
                        : _c("b-badge", { attrs: { variant: "danger" } }, [
                            _vm._v(_vm._s(_vm.$t("out_of_stock")))
                          ])
                    ]
                  }
                },
                {
                  key: "cell(action)",
                  fn: function(row) {
                    return [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-warning text-nowrap",
                          on: {
                            click: function($event) {
                              return _vm.edit(row.item)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("edit")) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-danger text-nowrap",
                          attrs: {
                            title: row.item.sales_attached
                              ? _vm.deleteProductTooltipText
                              : "",
                            disabled: row.item.sales_attached
                          },
                          on: {
                            click: function($event) {
                              return _vm.deleteRow(row.item.id)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("delete")) +
                              "\n                    "
                          )
                        ]
                      )
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _vm.items.length === 0
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
                            [
                              _c("i", {
                                staticClass: "fa-solid fa-angles-left"
                              })
                            ]
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
                            [
                              _c("i", {
                                staticClass: "fa-solid fa-angles-right"
                              })
                            ]
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
                            [
                              _c("i", {
                                staticClass: "fa-solid fa-angle-right"
                              })
                            ]
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
                            [
                              _c("i", {
                                staticClass: "fa-solid fa-angle-right"
                              })
                            ]
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
                            [
                              _c("i", {
                                staticClass: "fa-solid fa-angles-right"
                              })
                            ]
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
                            [
                              _c("i", {
                                staticClass: "fa-solid fa-angles-left"
                              })
                            ]
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
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "modal-center",
            centered: "",
            size: "md",
            "hide-footer": "",
            "no-close-on-backdrop": true
          },
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function() {
                return [
                  _c(
                    "p",
                    [
                      _vm.form.id != null
                        ? [
                            _vm._v(
                              _vm._s(_vm.$t("edit_product")) +
                                "\n                "
                            )
                          ]
                        : [_vm._v(_vm._s(_vm.$t("add_product")) + " ")]
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "outline-danger" },
                      on: {
                        click: function($event) {
                          return _vm.closeModal()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.$t("close")) +
                          "\n            "
                      )
                    ]
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.showModel,
            callback: function($$v) {
              _vm.showModel = $$v
            },
            expression: "showModel"
          }
        },
        [
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.save.apply(null, arguments)
                }
              }
            },
            [
              _c(
                "div",
                [
                  _c("label", { staticClass: "col-form-label" }, [
                    _vm._v(_vm._s(_vm.$t("name")))
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.name,
                        expression: "form.name"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("name") },
                    attrs: { type: "text", name: "name", required: "" },
                    domProps: { value: _vm.form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", { attrs: { form: _vm.form, field: "name" } })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("label", { staticClass: "col-form-label" }, [
                    _vm._v(_vm._s(_vm.$t("category")))
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.category,
                        expression: "form.category"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("category") },
                    attrs: { type: "text", name: "category" },
                    domProps: { value: _vm.form.category },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "category", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "category" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("label", { staticClass: "col-form-label" }, [
                    _vm._v(_vm._s(_vm.$t("product_unit")))
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      clearable: false,
                      options: _vm.productUnits,
                      label: "text",
                      reduce: function(option) {
                        return option.value
                      },
                      name: "product_unit"
                    },
                    model: {
                      value: _vm.form.product_unit,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "product_unit", $$v)
                      },
                      expression: "form.product_unit"
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "product_unit" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("label", { staticClass: "col-form-label" }, [
                    _vm._v(_vm._s(_vm.$t("product_unit_quantity")))
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.product_unit_quantity,
                        expression: "form.product_unit_quantity"
                      }
                    ],
                    staticClass: "form-control",
                    class: {
                      "is-invalid": _vm.form.errors.has("product_unit_quantity")
                    },
                    attrs: {
                      type: "number",
                      name: "product_unit_quantity",
                      min: "0",
                      required: ""
                    },
                    domProps: { value: _vm.form.product_unit_quantity },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "product_unit_quantity",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "product_unit_quantity" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("label", { staticClass: "col-form-label" }, [
                    _vm._v(_vm._s(_vm.$t("price_per_product")))
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.price_per_product,
                        expression: "form.price_per_product"
                      }
                    ],
                    staticClass: "form-control",
                    class: {
                      "is-invalid": _vm.form.errors.has("price_per_product")
                    },
                    attrs: {
                      type: "number",
                      name: "price_per_product",
                      min: "0",
                      required: ""
                    },
                    domProps: { value: _vm.form.price_per_product },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "price_per_product",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "price_per_product" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mt-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-primary text-nowrap",
                    attrs: { type: "submit" }
                  },
                  [
                    _vm.showSpinner
                      ? [_c("b-spinner", { attrs: { label: "Spinning" } })]
                      : [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("submit")) +
                              "\n                    "
                          )
                        ]
                  ],
                  2
                )
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);