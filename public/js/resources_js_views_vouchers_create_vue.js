(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_vouchers_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      voucherId: null,
      selected: null,
      selectedItems: [],
      mode: false,
      voucherCreateData: [],
      voucherEditData: [],
      driverOptions: [],
      employeOptions: [],
      vehicleOptions: [{
        text: this.$t("rickshaw"),
        value: "rickshaw"
      }, {
        text: this.$t("mazda"),
        value: "mazda"
      }],
      typeOptions: [{
        text: this.$t("sending"),
        value: "Sending"
      }, {
        text: this.$t("receiving"),
        value: "Receiving"
      }],
      cityOptions: [],
      customerOptions: [],
      statusOptions: [{
        text: this.$t("paid"),
        value: 1
      }, {
        text: this.$t("un_paid"),
        value: 0
      }],
      status: [{
        text: this.$t("paid"),
        value: 1
      }, {
        text: this.$t("un_paid"),
        value: 0
      }],
      form: new vform__WEBPACK_IMPORTED_MODULE_2__.default({
        id: null,
        driver_id: null,
        vehicle_id: null,
        type: null,
        city_id: null,
        percentage: 6,
        adda_id: null,
        employee_id: null,
        routes: [],
        bilties: [{
          id: null,
          customer_id: null,
          quantity: "",
          product_type: "",
          fare: "",
          labour: "",
          adv: "",
          bilty_number: "",
          notes: "",
          routes: "",
          local_fare: null,
          receiver: "",
          paid: 0
        }]
      }),
      search_bilty_number: "",
      customer_form: new vform__WEBPACK_IMPORTED_MODULE_2__.default({
        name: null,
        contact: null,
        block: null,
        remaining_balance: 0,
        shop_name: null,
        address: null,
        id: null,
        requiredAll: false
      }),
      bilty: _defineProperty({
        id: null,
        customer_id: null,
        quantity: "",
        product_type: "",
        fare: "",
        labour: "",
        adv: "",
        percentage: "",
        bilty_number: "",
        paid: false,
        receiver: "",
        notes: "",
        routes: "",
        local_fare: ""
      }, "paid", 0),
      currentPage: 1,
      rows: null,
      perPage: 5,
      keyword: null,
      timer: 0,
      showSpinner: false,
      adda: [],
      showModel: false,
      showCustomerSpiner: false,
      blocks: []
    };
  },
  created: function created() {
    this.getVoucherCreateData();
    this.getAdda();
    this.getBlocks();
    this.voucherId = this.$route.params.voucherId;

    if (this.voucherId) {
      this.getVoucherEditData();
    }
  },
  computed: {
    bilties: {
      get: function get() {
        return this.form.bilties;
      },
      set: function set(val) {
        this.form.bilties = val;
      }
    },
    sortedBilties: function sortedBilties() {
      var biltyNumber = this.search_bilty_number;

      if (this.search_bilty_number) {
        return this.bilties.sort(function (a, b) {
          if (a.bilty_number === biltyNumber) {
            return -1;
          } else if (b.bilty_number === biltyNumber) {
            return 1;
          }

          return a.bilty_number.localeCompare(b.bilty_number);
        });
      } else {
        return this.bilties;
      }
    },
    isSending: function isSending() {
      if (this.form.type == "Receiving") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    getVoucherCreateData: function getVoucherCreateData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/vouchers/data", {});

              case 2:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.voucherCreateData = data;
                _this.driverOptions = _this.voucherCreateData.drivers;
                _this.vehicleOptions = _this.voucherCreateData.vehicles;
                _this.cityOptions = _this.voucherCreateData.cities;
                _this.customerOptions = _this.voucherCreateData.customers;
                _this.employeOptions = _this.voucherCreateData.employees;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getVoucherEditData: function getVoucherEditData() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$get2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/vouchers/".concat(_this2.voucherId), {});

              case 2:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                _this2.form.id = data.id;
                _this2.form.driver_id = data.driver.id;
                _this2.form.employee_id = data.employee.id;
                _this2.form.vehicle_id = data.vehicle.id;
                _this2.form.city_id = data.city.id;
                _this2.form.type = data.type;
                _this2.form.routes = data.route;
                _this2.form.adda_id = data.adda_id;

                _this2.bilties.shift();

                data.bilties.map(function (bilty) {
                  _this2.bilties.push(_defineProperty({
                    id: bilty.id,
                    customer_id: bilty.customer.id,
                    quantity: bilty.quantity,
                    product_type: bilty.product_type,
                    fare: bilty.fare,
                    labour: bilty.labour,
                    adv: bilty.adv,
                    percentage: bilty.percentage,
                    paid: bilty.paid ? true : false,
                    bilty_number: bilty.builty_number,
                    receiver: bilty.receiver,
                    notes: bilty.notes,
                    routes: bilty.route,
                    local_fare: bilty.local_fare
                  }, "paid", bilty.paid));
                });

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    addBilty: function addBilty() {
      this.bilties.push(_objectSpread({}, this.bilty));
    },
    removeBilty: function removeBilty(id) {
      this.bilties.splice(id, 1);
    },
    onKeyDown: function onKeyDown(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        this.addBilty();
      }
    },
    submit: function submit() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$_this3$form$po, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.showSpinner = true;
                _context3.prev = 1;
                _context3.next = 4;
                return _this3.form.post("/vouchers");

              case 4:
                _yield$_this3$form$po = _context3.sent;
                data = _yield$_this3$form$po.data;

                if (!(data.status == true)) {
                  _context3.next = 14;
                  break;
                }

                _this3.user = data.data;

                _this3.$toastr.s("Success", data.message);

                _this3.showSpinner = false;

                _this3.form.reset();

                _this3.$router.push({
                  name: "vouchers"
                });

                _context3.next = 16;
                break;

              case 14:
                _this3.showSpinner = false;
                return _context3.abrupt("return");

              case 16:
                _context3.next = 22;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](1);
                _this3.showSpinner = false;

                _this3.$toastr.e("Error", _context3.t0);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 18]]);
      }))();
    },
    getAdda: function getAdda() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _yield$axios$get3, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/adda");

              case 2:
                _yield$axios$get3 = _context4.sent;
                data = _yield$axios$get3.data;
                _this4.adda = data.data;

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    getBlocks: function getBlocks() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var _yield$axios$get4, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/blocks/all");

              case 2:
                _yield$axios$get4 = _context5.sent;
                data = _yield$axios$get4.data;
                _this5.blocks = data;

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    saveCustomer: function saveCustomer() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var _yield$_this6$custome, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.showSpiner = true;
                _context6.prev = 1;
                _context6.next = 4;
                return _this6.customer_form.post("/customers");

              case 4:
                _yield$_this6$custome = _context6.sent;
                data = _yield$_this6$custome.data;

                if (!(data.status == true)) {
                  _context6.next = 15;
                  break;
                }

                _this6.user = data.data;

                _this6.$toastr.s("Success", data.message);

                _this6.showSpiner = false;

                _this6.getVoucherCreateData();

                _this6.customer_form.reset();

                _this6.showModel = false;
                _context6.next = 17;
                break;

              case 15:
                _this6.showSpiner = false;
                return _context6.abrupt("return");

              case 17:
                _context6.next = 23;
                break;

              case 19:
                _context6.prev = 19;
                _context6.t0 = _context6["catch"](1);
                _this6.showSpiner = false;

                _this6.$toastr.e("Error", _context6.t0);

              case 23:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 19]]);
      }))();
    },
    closeModal: function closeModal() {
      this.showModel = false;
    },
    sortBilties: function sortBilties() {
      this.$forceUpdate();
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

/***/ "./resources/js/views/vouchers/create.vue":
/*!************************************************!*\
  !*** ./resources/js/views/vouchers/create.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_521bfb17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=521bfb17& */ "./resources/js/views/vouchers/create.vue?vue&type=template&id=521bfb17&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/vouchers/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _create_vue_vue_type_template_id_521bfb17___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_521bfb17___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/vouchers/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/vouchers/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/vouchers/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/vouchers/create.vue?vue&type=template&id=521bfb17&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/vouchers/create.vue?vue&type=template&id=521bfb17& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_521bfb17___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_521bfb17___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_521bfb17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=521bfb17& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/create.vue?vue&type=template&id=521bfb17&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/create.vue?vue&type=template&id=521bfb17&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/vouchers/create.vue?vue&type=template&id=521bfb17& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
              _c("h6", { staticClass: "m-0 font-weight-bold text-success" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.$t("add_voucher")) +
                    "\n                "
                )
              ])
            ]
          )
        ]),
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
            _c("div", { staticClass: "card-body form-row" }, [
              _c(
                "div",
                { staticClass: "col-12 col-md-3 mb-2" },
                [
                  _c("label", { attrs: { for: "driver" } }, [
                    _vm._v(_vm._s(_vm.$t("driver")))
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      clearable: false,
                      options: _vm.driverOptions,
                      label: "text",
                      reduce: function(option) {
                        return option.value
                      }
                    },
                    model: {
                      value: _vm.form.driver_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "driver_id", $$v)
                      },
                      expression: "form.driver_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "driver_id" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-3 mb-2" },
                [
                  _c("label", { attrs: { for: "vehicles" } }, [
                    _vm._v(_vm._s(_vm.$t("vehicle")))
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      clearable: false,
                      options: _vm.vehicleOptions,
                      name: "vehicles",
                      label: "text",
                      reduce: function(option) {
                        return option.value
                      }
                    },
                    model: {
                      value: _vm.form.vehicle_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "vehicle_id", $$v)
                      },
                      expression: "form.vehicle_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "vehicle_id" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-2 mb-2" },
                [
                  _c("label", { attrs: { for: "cities" } }, [
                    _vm._v(_vm._s(_vm.$t("cities")))
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      clearable: false,
                      options: _vm.cityOptions,
                      name: "cities",
                      label: "text",
                      reduce: function(option) {
                        return option.value
                      }
                    },
                    model: {
                      value: _vm.form.city_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "city_id", $$v)
                      },
                      expression: "form.city_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "city_id" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-2 mb-2" },
                [
                  _c("label", { attrs: { for: "type" } }, [
                    _vm._v(_vm._s(_vm.$t("type")))
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      clearable: false,
                      options: _vm.typeOptions,
                      name: "type",
                      label: "text",
                      reduce: function(option) {
                        return option.value
                      }
                    },
                    model: {
                      value: _vm.form.type,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "type", $$v)
                      },
                      expression: "form.type"
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", { attrs: { form: _vm.form, field: "type" } })
                ],
                1
              ),
              _vm._v(" "),
              _vm.isSending
                ? _c(
                    "div",
                    { staticClass: "col-12 col-md-2 mb-2" },
                    [
                      _c("label", { attrs: { for: "adda_id" } }, [
                        _vm._v(_vm._s(_vm.$t("adda")))
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          clearable: false,
                          options: _vm.adda,
                          name: "adda_id",
                          label: "name",
                          reduce: function(option) {
                            return option.id
                          }
                        },
                        model: {
                          value: _vm.form.adda_id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "adda_id", $$v)
                          },
                          expression: "form.adda_id"
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "adda_id" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.form.type == "Sending"
                ? _c(
                    "div",
                    { staticClass: "col-12 col-md-2 mb-2" },
                    [
                      _c("label", { attrs: { for: "route" } }, [
                        _vm._v(_vm._s(_vm.$t("route")))
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          clearable: false,
                          name: "routes",
                          options: _vm.form.routes,
                          taggable: true,
                          multiple: true
                        },
                        model: {
                          value: _vm.form.routes,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "routes", $$v)
                          },
                          expression: "form.routes"
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "routes" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-2 mb-2" },
                [
                  _c("label", { attrs: { for: "type" } }, [
                    _vm._v(_vm._s(_vm.$t("employee")))
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      clearable: false,
                      options: _vm.employeOptions,
                      name: "employee_id",
                      label: "text",
                      reduce: function(option) {
                        return option.value
                      }
                    },
                    model: {
                      value: _vm.form.employee_id,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "employee_id", $$v)
                      },
                      expression: "form.employee_id"
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "employee_id" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12 col-md-2 mb-2" },
                [
                  _c("label", { attrs: { for: "percentage" } }, [
                    _vm._v(_vm._s(_vm.$t("percentage")))
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.percentage,
                        expression: "form.percentage"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      name: "percentage",
                      id: "percentage"
                    },
                    domProps: { value: _vm.form.percentage },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "percentage", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.form, field: "percentage" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.voucherId
                ? _c("div", { staticClass: "col-12 col-md-4 mb-2" }, [
                    _c("label", { attrs: { for: "percentage" } }, [
                      _vm._v(_vm._s(_vm.$t("enter_bilty_number")))
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search_bilty_number,
                          expression: "search_bilty_number"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        name: "search_bilty_number",
                        id: "search_bilty_number"
                      },
                      domProps: { value: _vm.search_bilty_number },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.search_bilty_number = $event.target.value
                          },
                          function($event) {
                            return _vm.sortBilties()
                          }
                        ]
                      }
                    })
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card" },
              [
                _c("div", { staticClass: "card-header py-3" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-between"
                    },
                    [
                      _c(
                        "h6",
                        { staticClass: "m-0 font-weight-bold text-primary" },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.$t("add_bilty")) +
                              "\n                        "
                          )
                        ]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.sortedBilties, function(item, i) {
                  return _c(
                    "div",
                    {
                      key: "biltyItems_" + i,
                      staticClass: "card-body form-row border-top"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-2 mb-3" },
                        [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("select_customer")))
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              clearable: false,
                              options: _vm.customerOptions,
                              name: "customer",
                              label: "text",
                              reduce: function(option) {
                                return option.value
                              }
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "no-options",
                                  fn: function(ref) {
                                    return [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-primary text-nowrap",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              _vm.showModel = true
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(_vm.$t("add_customer")) +
                                              "\n                                "
                                          )
                                        ]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            ),
                            model: {
                              value: _vm.form.bilties[i].customer_id,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.form.bilties[i],
                                  "customer_id",
                                  $$v
                                )
                              },
                              expression: "form.bilties[i].customer_id"
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "bilties." + i + ".customer_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.type == "Sending"
                        ? _c(
                            "div",
                            { staticClass: "col-12 col-md-2 mb-3" },
                            [
                              _c("label", [_vm._v(_vm._s(_vm.$t("receiver")))]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "meta-ctrl-enter",
                                    rawName: "v-meta-ctrl-enter",
                                    value: _vm.addBilty,
                                    expression: "addBilty"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.bilties[i].receiver,
                                    expression: "form.bilties[i].receiver"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "receiver" },
                                domProps: {
                                  value: _vm.form.bilties[i].receiver
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form.bilties[i],
                                      "receiver",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "bilties." + i + ".receiver"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-2 mb-3" },
                        [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("enter_bilty_number")))
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "meta-ctrl-enter",
                                rawName: "v-meta-ctrl-enter",
                                value: _vm.addBilty,
                                expression: "addBilty"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.bilties[i].bilty_number,
                                expression: "form.bilties[i].bilty_number"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", name: "bilty_number" },
                            domProps: {
                              value: _vm.form.bilties[i].bilty_number
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.bilties[i],
                                  "bilty_number",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "bilties." + i + ".bilty_number"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-2 mb-3" },
                        [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("enter_quantity")))
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "meta-ctrl-enter",
                                rawName: "v-meta-ctrl-enter",
                                value: _vm.addBilty,
                                expression: "addBilty"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.bilties[i].quantity,
                                expression: "form.bilties[i].quantity"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", name: "quantity" },
                            domProps: { value: _vm.form.bilties[i].quantity },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.bilties[i],
                                  "quantity",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "bilties." + i + ".quantity"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-2 mb-3" },
                        [
                          _c("label", [
                            _vm._v(_vm._s(_vm.$t("enter_product_type")))
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "meta-ctrl-enter",
                                rawName: "v-meta-ctrl-enter",
                                value: _vm.addBilty,
                                expression: "addBilty"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.bilties[i].product_type,
                                expression: "form.bilties[i].product_type"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", name: "product_type" },
                            domProps: {
                              value: _vm.form.bilties[i].product_type
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.bilties[i],
                                  "product_type",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "bilties." + i + ".product_type"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-2 mb-3" },
                        [
                          _c("label", [_vm._v(_vm._s(_vm.$t("local_fare")))]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "meta-ctrl-enter",
                                rawName: "v-meta-ctrl-enter",
                                value: _vm.addBilty,
                                expression: "addBilty"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.bilties[i].local_fare,
                                expression: "form.bilties[i].local_fare"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", name: "local_fare" },
                            domProps: { value: _vm.form.bilties[i].local_fare },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.bilties[i],
                                  "local_fare",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "bilties." + i + ".local_fare"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-2 mb-3" },
                        [
                          _c("label", [_vm._v(_vm._s(_vm.$t("enter_fare")))]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "meta-ctrl-enter",
                                rawName: "v-meta-ctrl-enter",
                                value: _vm.addBilty,
                                expression: "addBilty"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.bilties[i].fare,
                                expression: "form.bilties[i].fare"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", name: "fare" },
                            domProps: { value: _vm.form.bilties[i].fare },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.bilties[i],
                                  "fare",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "bilties." + i + ".fare"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-2 mb-2" },
                        [
                          _c("label", [_vm._v(_vm._s(_vm.$t("enter_labour")))]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "meta-ctrl-enter",
                                rawName: "v-meta-ctrl-enter",
                                value: _vm.addBilty,
                                expression: "addBilty"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.bilties[i].labour,
                                expression: "form.bilties[i].labour"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", name: "labour" },
                            domProps: { value: _vm.form.bilties[i].labour },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.bilties[i],
                                  "labour",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "bilties." + i + ".labour"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-2 mb-2" },
                        [
                          _c("label", [_vm._v(_vm._s(_vm.$t("notes")))]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "meta-ctrl-enter",
                                rawName: "v-meta-ctrl-enter",
                                value: _vm.addBilty,
                                expression: "addBilty"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.bilties[i].notes,
                                expression: "form.bilties[i].notes"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "notes" },
                            domProps: { value: _vm.form.bilties[i].notes },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form.bilties[i],
                                  "notes",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "bilties." + i + ".notes"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.type == "Sending"
                        ? _c(
                            "div",
                            { staticClass: "col-12 col-md-2 mb-2" },
                            [
                              _c("label", { attrs: { for: "route" } }, [
                                _vm._v(_vm._s(_vm.$t("route")))
                              ]),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  clearable: false,
                                  name: "routes",
                                  options: _vm.form.routes
                                },
                                model: {
                                  value: _vm.form.bilties[i].routes,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form.bilties[i], "routes", $$v)
                                  },
                                  expression: "form.bilties[i].routes"
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "bilties." + i + ".routes"
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-12 col-md-2 mb-2" },
                        [
                          _c("label", { attrs: { for: "route" } }, [
                            _vm._v(_vm._s(_vm.$t("status")))
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              clearable: false,
                              name: "paid",
                              options: _vm.status,
                              label: "text",
                              reduce: function(option) {
                                return option.value
                              }
                            },
                            model: {
                              value: _vm.form.bilties[i].paid,
                              callback: function($$v) {
                                _vm.$set(_vm.form.bilties[i], "paid", $$v)
                              },
                              expression: "form.bilties[i].paid"
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: {
                              form: _vm.form,
                              field: "bilties." + i + ".paid"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 col-md-2 mb-2 d-flex justify-content-center",
                          staticStyle: { "column-gap": "1rem" }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "col-md-12" },
                            [
                              _c("label", [
                                _vm._v(_vm._s(_vm.$t("enter_adv")))
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "meta-ctrl-enter",
                                    rawName: "v-meta-ctrl-enter",
                                    value: _vm.addBilty,
                                    expression: "addBilty"
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.bilties[i].adv,
                                    expression: "form.bilties[i].adv"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number", name: "adv" },
                                domProps: { value: _vm.form.bilties[i].adv },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form.bilties[i],
                                      "adv",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: {
                                  form: _vm.form,
                                  field: "bilties." + i + ".adv"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.form.bilties.length > 1
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-link btn-sm text-danger p-0 m-0 text-nowrap",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeBilty(i)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "far fa-times-circle"
                                  })
                                ]
                              )
                            : _vm._e()
                        ]
                      )
                    ]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-footer d-flex justify-content-between" },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-primary text-nowrap",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.addBilty()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.$t("add_bilty")) +
                        "\n                "
                    )
                  ]
                ),
                _vm._v(" "),
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
                              _vm._s(_vm.$t("submit_voucher")) +
                              "\n                    "
                          )
                        ]
                  ],
                  2
                )
              ]
            )
          ]
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
            "hide-footer": ""
          },
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function(ref) {
                var close = ref.close
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
              }
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
                  return _vm.saveCustomer.apply(null, arguments)
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
                        value: _vm.customer_form.name,
                        expression: "customer_form.name"
                      }
                    ],
                    staticClass: "form-control",
                    class: {
                      "is-invalid": _vm.customer_form.errors.has("name")
                    },
                    attrs: { type: "text", name: "name" },
                    domProps: { value: _vm.customer_form.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.customer_form, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.customer_form, field: "name" }
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
                    _vm._v(_vm._s(_vm.$t("contact")))
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.customer_form.contact,
                        expression: "customer_form.contact"
                      }
                    ],
                    staticClass: "form-control",
                    class: {
                      "is-invalid": _vm.customer_form.errors.has("contact")
                    },
                    attrs: { type: "text", name: "contact" },
                    domProps: { value: _vm.customer_form.contact },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.customer_form,
                          "contact",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.customer_form, field: "contact" }
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
                    _vm._v(_vm._s(_vm.$t("block")))
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      clearable: false,
                      options: _vm.blocks,
                      label: "text",
                      reduce: function(option) {
                        return option.value
                      },
                      name: "block"
                    },
                    model: {
                      value: _vm.customer_form.block,
                      callback: function($$v) {
                        _vm.$set(_vm.customer_form, "block", $$v)
                      },
                      expression: "customer_form.block"
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.customer_form, field: "block" }
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
                    _vm._v(_vm._s(_vm.$t("shop_name")))
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.customer_form.shop_name,
                        expression: "customer_form.shop_name"
                      }
                    ],
                    staticClass: "form-control",
                    class: {
                      "is-invalid": _vm.customer_form.errors.has("shop_name")
                    },
                    attrs: { type: "text", name: "shop_name" },
                    domProps: { value: _vm.customer_form.shop_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.customer_form,
                          "shop_name",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.customer_form, field: "shop_name" }
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
                        value: _vm.customer_form.address,
                        expression: "customer_form.address"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { rows: "4", name: "address" },
                    domProps: { value: _vm.customer_form.address },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.customer_form,
                          "address",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("has-error", {
                    attrs: { form: _vm.customer_form, field: "address" }
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
                    _vm.showCustomerSpiner
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