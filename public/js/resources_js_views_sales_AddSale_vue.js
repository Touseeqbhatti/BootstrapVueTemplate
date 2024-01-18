(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_sales_AddSale_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/AddCustomer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/AddCustomer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AddCustomer",
  props: {
    showModel: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    },
    formData: {
      type: Object,
      "default": function _default() {}
    }
  },
  computed: {
    isShowModel: function isShowModel() {
      return this.showModel;
    }
  },
  data: function data() {
    return {
      showSpinner: false,
      form: new vform__WEBPACK_IMPORTED_MODULE_1__.default({
        id: this.formData.id,
        name: this.formData.name,
        contact: this.formData.contact,
        address: this.formData.address
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$_this$form$pos, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.showSpinner = true;
                _context.prev = 1;
                _context.next = 4;
                return _this.form.post("/customers");

              case 4:
                _yield$_this$form$pos = _context.sent;
                data = _yield$_this$form$pos.data;

                if (!(data.status == true)) {
                  _context.next = 13;
                  break;
                }

                _this.$toastr.s("Success", data.message);

                _this.showSpinner = false;

                _this.form.reset();

                _this.$emit("closeModel");

                _context.next = 15;
                break;

              case 13:
                _this.showSpinner = false;
                return _context.abrupt("return");

              case 15:
                _context.next = 21;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](1);
                _this.showSpinner = false;

                _this.$toastr.e("Error", _context.t0);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 17]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/AddSale.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/AddSale.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _customers_AddCustomer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customers/AddCustomer.vue */ "./resources/js/views/customers/AddCustomer.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AddSale",
  components: {
    "add-customer": _customers_AddCustomer_vue__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    return {
      customers: [],
      products: [],
      allProducts: [],
      selectedProducts: [],
      searchProduct: "",
      fields: [{
        key: "name",
        sortable: false
      }, {
        key: "price",
        sortable: false
      }, {
        key: "quantity",
        sortable: false
      }, {
        key: "action",
        sortable: false
      }],
      customerForm: new vform__WEBPACK_IMPORTED_MODULE_2__.default({
        name: null,
        contact: null,
        address: null
      }),
      form: new vform__WEBPACK_IMPORTED_MODULE_2__.default({
        customer_id: null,
        selected_products: [],
        total_amount: 0,
        paid_amount: 0,
        total_paid_amount: 0,
        discount: 0,
        remainder: 0,
        paid: true
      }),
      showModel: false,
      showSpinner: false,
      timer: 0
    };
  },
  created: function created() {
    this.getSalesCreateData();
  },
  watch: {
    selectedProducts: {
      handler: function handler(newSelectedProducts, oldSelectedProducts) {
        var totalAmount = newSelectedProducts.reduce(function (total, selectedProduct) {
          return total + selectedProduct.price * selectedProduct.quantity;
        }, 0);
        this.form.total_amount = totalAmount;

        if (this.form.discount > 0) {
          this.form.paid_amount = totalAmount - this.form.discount;
        } else {
          this.form.paid_amount = totalAmount;
        }

        if (this.form.total_paid_amount && this.form.total_paid_amount > this.form.paid_amount) {
          this.form.remainder = this.form.total_paid_amount - this.form.paid_amount;
        }
      },
      deep: true
    },
    "form.total_paid_amount": {
      handler: function handler(newTotalPaidAmount, oldTotalPaidAmount) {
        if (newTotalPaidAmount > this.form.paid_amount) {
          this.form.remainder = newTotalPaidAmount - this.form.paid_amount;
        } else {
          this.form.remainder = 0;
        }
      }
    },
    "form.discount": {
      handler: function handler(newDiscount, oldDiscount) {
        if (newDiscount <= this.form.total_amount) {
          this.form.paid_amount = this.form.total_amount - newDiscount;

          if (this.form.total_paid_amount && this.form.total_paid_amount > this.form.paid_amount) {
            this.form.remainder = this.form.total_paid_amount - this.form.paid_amount;
          }
        }
      },
      deep: true
    }
  },
  methods: {
    addProductToDisplayTable: function addProductToDisplayTable(product) {
      var id = product.id,
          name = product.name,
          price_per_product = product.price_per_product;
      var existingProduct = this.selectedProducts.find(function (item) {
        return item.id === id;
      });

      if (existingProduct) {
        if (product.product_unit_quantity > existingProduct.quantity) {
          existingProduct.quantity += 1;
        } else {
          this.$toastr.e(this.$t("qty_exceeded"), this.$t("qty_should_smaller_than_product_total_qty"));
        }
      } else {
        this.selectedProducts.push({
          id: id,
          name: name,
          price: price_per_product,
          quantity: 1
        });
      }
    },
    removeProductToDisplayTable: function removeProductToDisplayTable(productIndex) {
      this.selectedProducts.splice(productIndex, 1);
    },
    increaseProductQty: function increaseProductQty(productIndex) {
      var selectedProduct = this.selectedProducts[productIndex];
      var selectedProducts = this.products.find(function (product) {
        return product.id === selectedProduct.id;
      });

      if (selectedProducts.product_unit_quantity > selectedProduct.quantity) {
        selectedProduct.quantity += 1;
      } else {
        this.$toastr.e(this.$t("qty_exceeded"), this.$t("qty_should_smaller_than_product_total_qty"));
      }
    },
    decreaseProductQty: function decreaseProductQty(productIndex) {
      var selectedProduct = this.selectedProducts[productIndex];

      if (selectedProduct) {
        selectedProduct.quantity -= 1;

        if (selectedProduct.quantity === 0) {
          this.selectedProducts.splice(productIndex, 1);
        }
      }
    },
    searchProductFn: function searchProductFn() {
      var _this = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        if (_this.searchProduct.trim() === "") {
          _this.products = _this.allProducts;
        } else {
          _this.products = _this.searchProducts();
        }
      }, 500);
    },
    searchProducts: function searchProducts() {
      var query = this.searchProduct.trim().toLowerCase();
      var matchingProducts = this.products.filter(function (product) {
        return product.name.toLowerCase().includes(query);
      });
      var nonMatchingProducts = this.products.filter(function (product) {
        return !product.name.toLowerCase().includes(query);
      });
      return [].concat(_toConsumableArray(matchingProducts), _toConsumableArray(nonMatchingProducts));
    },
    applyProductStyle: function applyProductStyle(productId) {
      return this.selectedProducts.some(function (selectedProduct) {
        return selectedProduct.id === productId;
      });
    },
    submit: function submit(isReport) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$_this2$form$po, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _this2.form.selected_products = _this2.selectedProducts;
                _context.next = 4;
                return _this2.form.post("/sales");

              case 4:
                _yield$_this2$form$po = _context.sent;
                data = _yield$_this2$form$po.data;

                if (!(data.status == true)) {
                  _context.next = 15;
                  break;
                }

                _this2.$toastr.s("Success", data.message);

                _this2.showSpinner = false;

                _this2.$router.replace({
                  name: "sales"
                });

                if (!isReport) {
                  _context.next = 13;
                  break;
                }

                _context.next = 13;
                return _this2.saleReport(data.sale_id);

              case 13:
                _context.next = 17;
                break;

              case 15:
                _this2.showSpinner = false;
                return _context.abrupt("return");

              case 17:
                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](0);
                _this2.showSpinner = false;

                _this2.$toastr.e("Error", _context.t0);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 19]]);
      }))();
    },
    saleReport: function saleReport(saleId) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response, url, link;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/sales/".concat(saleId, "/report"), {
                  responseType: "arraybuffer"
                });

              case 2:
                response = _context2.sent;
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
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getSalesCreateData: function getSalesCreateData() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/sales-create-data");

              case 2:
                _yield$axios$get = _context3.sent;
                data = _yield$axios$get.data;
                _this3.products = data === null || data === void 0 ? void 0 : data.products;
                _this3.allProducts = _this3.products;
                _this3.customers = data === null || data === void 0 ? void 0 : data.customers;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    closeModel: function closeModel() {
      this.customerForm.reset();
      this.showModel = false;
      this.getSalesCreateData();
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

/***/ "./resources/js/views/customers/AddCustomer.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/customers/AddCustomer.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddCustomer_vue_vue_type_template_id_21f1ded6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCustomer.vue?vue&type=template&id=21f1ded6& */ "./resources/js/views/customers/AddCustomer.vue?vue&type=template&id=21f1ded6&");
/* harmony import */ var _AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCustomer.vue?vue&type=script&lang=js& */ "./resources/js/views/customers/AddCustomer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddCustomer_vue_vue_type_template_id_21f1ded6___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddCustomer_vue_vue_type_template_id_21f1ded6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/customers/AddCustomer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/sales/AddSale.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/sales/AddSale.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddSale_vue_vue_type_template_id_5f660976___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddSale.vue?vue&type=template&id=5f660976& */ "./resources/js/views/sales/AddSale.vue?vue&type=template&id=5f660976&");
/* harmony import */ var _AddSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddSale.vue?vue&type=script&lang=js& */ "./resources/js/views/sales/AddSale.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddSale_vue_vue_type_template_id_5f660976___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddSale_vue_vue_type_template_id_5f660976___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/sales/AddSale.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/customers/AddCustomer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/customers/AddCustomer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/AddCustomer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/sales/AddSale.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/sales/AddSale.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddSale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/AddSale.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/customers/AddCustomer.vue?vue&type=template&id=21f1ded6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/customers/AddCustomer.vue?vue&type=template&id=21f1ded6& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_21f1ded6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_21f1ded6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddCustomer_vue_vue_type_template_id_21f1ded6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddCustomer.vue?vue&type=template&id=21f1ded6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/AddCustomer.vue?vue&type=template&id=21f1ded6&");


/***/ }),

/***/ "./resources/js/views/sales/AddSale.vue?vue&type=template&id=5f660976&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/sales/AddSale.vue?vue&type=template&id=5f660976& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSale_vue_vue_type_template_id_5f660976___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSale_vue_vue_type_template_id_5f660976___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddSale_vue_vue_type_template_id_5f660976___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddSale.vue?vue&type=template&id=5f660976& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/AddSale.vue?vue&type=template&id=5f660976&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/AddCustomer.vue?vue&type=template&id=21f1ded6&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/customers/AddCustomer.vue?vue&type=template&id=21f1ded6& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                              _vm._s(_vm.$t("edit_customer")) +
                                "\n                "
                            )
                          ]
                        : [_vm._v(_vm._s(_vm.$t("add_customer")) + " ")]
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
                          return _vm.$emit("closeModel")
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
            value: _vm.isShowModel,
            callback: function($$v) {
              _vm.isShowModel = $$v
            },
            expression: "isShowModel"
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
                  return _vm.submit.apply(null, arguments)
                }
              }
            },
            [
              _c(
                "div",
                {},
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
                    attrs: { type: "text", name: "name" },
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
                {},
                [
                  _c("label", { staticClass: "col-form-label" }, [
                    _vm._v(_vm._s(_vm.$t("contact")))
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.contact,
                        expression: "form.contact"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("contact") },
                    attrs: { type: "text", name: "contact" },
                    domProps: { value: _vm.form.contact },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "contact", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "contact" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {},
                [
                  _c("label", { staticClass: "col-form-label" }, [
                    _vm._v(_vm._s(_vm.$t("address")))
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.address,
                        expression: "form.address"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { rows: "4", name: "address" },
                    domProps: { value: _vm.form.address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "address", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "address" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mt-2" }, [
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/AddSale.vue?vue&type=template&id=5f660976&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/sales/AddSale.vue?vue&type=template&id=5f660976& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row mt-5" }, [
        _c("div", { staticClass: "col-8" }, [
          _c("label", { staticClass: "col-form-label" }, [
            _vm._v(_vm._s(_vm.$t("search_product")))
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.searchProduct,
                expression: "searchProduct"
              }
            ],
            staticClass: "form-control",
            attrs: {
              placeholder: _vm.$t("search_by_product_name"),
              type: "text"
            },
            domProps: { value: _vm.searchProduct },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.searchProduct = $event.target.value
                },
                _vm.searchProductFn
              ]
            }
          }),
          _vm._v(" "),
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
                        staticStyle: {
                          "max-width": "14rem",
                          cursor: "pointer"
                        },
                        on: {
                          click: function($event) {
                            return _vm.addProductToDisplayTable(product)
                          }
                        }
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
                                "\n                                " +
                                  _vm._s(
                                    product.name +
                                      " - " +
                                      product.price_per_product
                                  ) +
                                  "\n                            "
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
                    "\n                    No Products Found\n                "
                  )
                ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-4 mt-2" },
          [
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
                  scopedSlots: _vm._u([
                    {
                      key: "no-options",
                      fn: function() {
                        return [
                          _vm._v(
                            "\n                        Customer not found\n                        "
                          ),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-primary text-nowrap",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.showModel = true
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("add_customer")) +
                                  "\n                        "
                              )
                            ]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ]),
                  model: {
                    value: _vm.form.customer_id,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "customer_id", $$v)
                    },
                    expression: "form.customer_id"
                  }
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "customer_id" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card text-black bg-lite my-3" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$t("selected_products")) +
                    "\n                "
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
                              "\n                            " +
                                _vm._s(_vm.$t(row.column)) +
                                "\n                        "
                            )
                          ]
                        }
                      },
                      {
                        key: "cell(quantity)",
                        fn: function(row) {
                          return [
                            _c(
                              "div",
                              { staticClass: "d-flex justify-content-around" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary btn-sm",
                                    on: {
                                      click: function($event) {
                                        return _vm.decreaseProductQty(row.index)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-minus" })]
                                ),
                                _vm._v(" "),
                                _c("div", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(row.item.quantity) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary btn-sm",
                                    on: {
                                      click: function($event) {
                                        return _vm.increaseProductQty(row.index)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-plus" })]
                                )
                              ]
                            )
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
                                staticClass: "btn btn-sm text-danger",
                                on: {
                                  click: function($event) {
                                    return _vm.removeProductToDisplayTable(
                                      row.index
                                    )
                                  }
                                }
                              },
                              [_c("i", { staticClass: "far fa-times-circle" })]
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
            _c("has-error", {
              attrs: { form: _vm.form, field: "selected_products" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.$t("total_amount")) +
                  ":  \n                "
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
            _c(
              "div",
              { staticClass: "mt-3" },
              [
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
                  class: {
                    "is-invalid": _vm.form.errors.has("paid_amount")
                  },
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
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "paid_amount" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-2" },
              [
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
                  class: {
                    "is-invalid": _vm.form.errors.has("total_paid_amount")
                  },
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
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "total_paid_amount" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-2" },
              [
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
                  class: {
                    "is-invalid": _vm.form.errors.has("discount")
                  },
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
                  : _vm._e(),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "discount" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex mt-3" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.$t("remainder")) +
                  ":  \n                "
              ),
              _c("b", [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$t("rs")) +
                    "\n                "
                )
              ]),
              _vm._v("\n                 \n                "),
              _c("b", [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.form.remainder) +
                    "\n                "
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
                ),
                _vm._v(" "),
                _c("has-error", { attrs: { form: _vm.form, field: "paid" } })
              ],
              1
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
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("cancel")) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary text-nowrap mr-1",
                  attrs: {
                    disabled:
                      _vm.form.total_amount == 0 ||
                      _vm.form.discount > _vm.form.total_amount
                  },
                  on: {
                    click: function($event) {
                      return _vm.submit(false)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("checkout")) +
                      "\n                "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-primary text-nowrap",
                  attrs: {
                    disabled:
                      _vm.form.total_amount == 0 ||
                      _vm.form.discount > _vm.form.total_amount
                  },
                  on: {
                    click: function($event) {
                      return _vm.submit(true)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.$t("checkout_&_make_report")) +
                      "\n                "
                  )
                ]
              )
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.showModel
        ? _c("add-customer", {
            attrs: { showModel: _vm.showModel, formData: _vm.customerForm },
            on: { closeModel: _vm.closeModel }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);