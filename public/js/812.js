(self.webpackChunk=self.webpackChunk||[]).push([[812],{5714:(t,e,s)=>{"use strict";s.d(e,{ZP:()=>w});var r=s(9669),a=s.n(r),o=Object.defineProperty,n=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,c=(t,e,s)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))n.call(e,s)&&c(t,s,e[s]);if(i)for(var s of i(e))l.call(e,s)&&c(t,s,e[s]);return t};const d=t=>void 0===t,m=t=>Array.isArray(t),f=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,p=(t,e,s,r)=>((e=e||{}).indices=!d(e.indices)&&e.indices,e.nullsAsUndefineds=!d(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!d(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!d(e.allowEmptyArrays)&&e.allowEmptyArrays,s=s||new FormData,d(t)||(null===t?e.nullsAsUndefineds||s.append(r,""):(t=>"boolean"==typeof t)(t)?e.booleansAsIntegers?s.append(r,t?1:0):s.append(r,t):m(t)?t.length?t.forEach(((t,a)=>{const o=r+"["+(e.indices?a:"")+"]";p(t,e,s,o)})):e.allowEmptyArrays&&s.append(r+"[]",""):(t=>t instanceof Date)(t)?s.append(r,t.toISOString()):!(t=>t===Object(t))(t)||(t=>f(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||f(t)?s.append(r,t):Object.keys(t).forEach((a=>{const o=t[a];if(m(o))for(;a.length>2&&a.lastIndexOf("[]")===a.length-2;)a=a.substring(0,a.length-2);p(o,e,s,r?r+"["+a+"]":a)}))),s);var h={serialize:p};function v(t){if(null===t||"object"!=typeof t)return t;const e=Array.isArray(t)?[]:{};return Object.keys(t).forEach((s=>{e[s]=v(t[s])})),e}function y(t){return Array.isArray(t)?t:[t]}function _(t){return t instanceof File||t instanceof Blob||t instanceof FileList||"object"==typeof t&&null!==t&&void 0!==Object.values(t).find((t=>_(t)))}class b{constructor(){this.errors={},this.errors={}}set(t,e){"object"==typeof t?this.errors=t:this.set(u(u({},this.errors),{[t]:y(e)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some((t=>this.has(t)))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return y(this.errors[t]||[])}only(...t){const e=[];return t.forEach((t=>{const s=this.get(t);s&&e.push(s)})),e}flatten(){return Object.values(this.errors).reduce(((t,e)=>t.concat(e)),[])}clear(t){const e={};t&&Object.keys(this.errors).forEach((s=>{s!==t&&(e[s]=this.errors[s])})),this.set(e)}}class g{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new b,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,v(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach((e=>{this[e]=t[e]}))}data(){return this.keys().reduce(((t,e)=>u(u({},t),{[e]:this[e]})),{})}keys(){return Object.keys(this).filter((t=>!g.ignore.includes(t)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),g.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((t=>!g.ignore.includes(t))).forEach((t=>{this[t]=v(this.originalData[t])}))}get(t,e={}){return this.submit("get",t,e)}post(t,e={}){return this.submit("post",t,e)}patch(t,e={}){return this.submit("patch",t,e)}put(t,e={}){return this.submit("put",t,e)}delete(t,e={}){return this.submit("delete",t,e)}submit(t,e,s={}){return this.startProcessing(),s=u({data:{},params:{},url:this.route(e),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===t.toLowerCase()?s.params=u(u({},this.data()),s.params):(s.data=u(u({},this.data()),s.data),_(s.data)&&!s.transformRequest&&(s.transformRequest=[t=>h.serialize(t)])),new Promise(((t,e)=>{(g.axios||a()).request(s).then((e=>{this.finishProcessing(),t(e)})).catch((t=>{this.handleErrors(t),e(t)}))}))}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?u({},t.data.errors):t.data.message?{error:t.data.message}:u({},t.data):{error:g.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,e={}){let s=t;return Object.prototype.hasOwnProperty.call(g.routes,t)&&(s=decodeURI(g.routes[t])),"object"!=typeof e&&(e={id:e}),Object.keys(e).forEach((t=>{s=s.replace(`{${t}}`,e[t])})),s}onKeydown(t){const e=t.target;e.name&&this.errors.clear(e.name)}}g.routes={},g.errorMessage="Something went wrong. Please try again.",g.recentlySuccessfulTimeout=2e3,g.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const w=g},1812:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var r=s(7757),a=s.n(r),o=s(9669),n=s.n(o),i=s(5714);function l(t,e,s,r,a,o,n){try{var i=t[o](n),l=i.value}catch(t){return void s(t)}i.done?e(l):Promise.resolve(l).then(r,a)}function c(t){return function(){var e=this,s=arguments;return new Promise((function(r,a){var o=t.apply(e,s);function n(t){l(o,r,a,n,i,"next",t)}function i(t){l(o,r,a,n,i,"throw",t)}n(void 0)}))}}const u={name:"ShowSale",data:function(){return{customers:[],products:[],allProducts:[],selectedProducts:[],fields:[{key:"name",sortable:!1},{key:"price",sortable:!1},{key:"quantity",sortable:!1}],customerForm:new i.ZP({id:null,name:null,contact:null,address:null}),form:new i.ZP({id:null,customer_id:null,selected_products:[],total_amount:0,paid_amount:0,total_paid_amount:0,discount:0,remainder:0,paid:!0}),showSpinner:!1,timer:0}},created:function(){var t,e;this.getSalesCreateData(),this.form.id=null!==(t=null===(e=this.$route.params)||void 0===e?void 0:e.saleId)&&void 0!==t?t:null},methods:{applyProductStyle:function(t){return this.selectedProducts.some((function(e){return e.id===t}))},getSalesCreateData:function(){var t=this;return c(a().mark((function e(){var s,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().get("/sales-create-data");case 2:s=e.sent,r=s.data,t.products=t.form.id?null==r?void 0:r.products_for_edit_sale:null==r?void 0:r.products,t.allProducts=t.products,t.customers=null==r?void 0:r.customers,t.form.id&&t.getSaleById(t.form.id);case 8:case"end":return e.stop()}}),e)})))()},getSaleById:function(t){var e=this;return c(a().mark((function s(){var r,o;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n().get("/sales/".concat(t));case 2:r=s.sent,o=r.data,e.form.fill(o),e.selectedProducts=null==o?void 0:o.products,e.form.paid=!(null==o||!o.paid);case 7:case"end":return s.stop()}}),s)})))()}}};const d=(0,s(1900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-overlay",{attrs:{show:"",opacity:"0.20"},scopedSlots:t._u([{key:"overlay",fn:function(){return[s("div")]},proxy:!0}])},[t._v(" "),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-8"},[s("div",{staticClass:"card card-body mt-3"},[t.products.length?s("div",{staticClass:"row"},t._l(t.products,(function(e,r){return s("div",{key:r,class:["col-2 card m-3",t.applyProductStyle(e.id)?"bg-secondary text-white":""],staticStyle:{"max-width":"14rem"}},[s("div",{staticClass:"card-body text-center d-flex align-items-center"},[s("h5",{staticClass:"card-title"},[t._v("\n                                    "+t._s(e.name+" - "+e.price_per_product)+"\n                                ")])])])})),0):s("h5",[t._v("\n                        No Products Found\n                    ")])])]),t._v(" "),s("div",{staticClass:"col-4 mt-2"},[s("div",{},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("customer")))]),t._v(" "),s("v-select",{attrs:{clearable:!1,options:t.customers,label:"label",reduce:function(t){return t.value}},model:{value:t.form.customer_id,callback:function(e){t.$set(t.form,"customer_id",e)},expression:"form.customer_id"}})],1),t._v(" "),s("div",{staticClass:"card text-black bg-lite my-3"},[s("div",{staticClass:"card-header"},[t._v("\n                        "+t._s(t.$t("selected_products"))+"\n                    ")]),t._v(" "),s("div",{staticClass:"card-body"},[s("b-table",{attrs:{items:t.selectedProducts,fields:t.fields,responsive:""},scopedSlots:t._u([{key:"head()",fn:function(e){return[t._v("\n                                "+t._s(t.$t(e.column))+"\n                            ")]}}])})],1)]),t._v(" "),s("div",{staticClass:"d-flex"},[t._v("\n                    "+t._s(t.$t("total_amount"))+":  \n                    "),s("b",[t._v(" "+t._s(t.$t("rs"))+" "+t._s(t.form.total_amount)+" ")])]),t._v(" "),s("div",{staticClass:"mt-3"},[s("label",{staticClass:"col-form-label"},[t._v(t._s(t.$t("paid_amount")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.paid_amount,expression:"form.paid_amount"}],staticClass:"form-control",attrs:{disabled:"",type:"number",name:"paid_amount",min:"0"},domProps:{value:t.form.paid_amount},on:{input:function(e){e.target.composing||t.$set(t.form,"paid_amount",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mt-2"},[s("label",{staticClass:"col-form-label"},[t._v(t._s(t.$t("total_paid_amount")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.total_paid_amount,expression:"form.total_paid_amount"}],staticClass:"form-control",attrs:{disabled:0==t.form.total_amount,type:"number",name:"total_paid_amount",min:"0"},domProps:{value:t.form.total_paid_amount},on:{input:function(e){e.target.composing||t.$set(t.form,"total_paid_amount",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mt-2"},[s("label",{staticClass:"col-form-label"},[t._v(t._s(t.$t("discount")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.discount,expression:"form.discount"}],staticClass:"form-control",attrs:{disabled:0==t.form.total_amount,type:"number",name:"discount",min:"0"},domProps:{value:t.form.discount},on:{input:function(e){e.target.composing||t.$set(t.form,"discount",e.target.value)}}}),t._v(" "),t.form.discount>t.form.total_amount?s("span",{staticClass:"text-danger mt-3"},[t._v(t._s(t.$t("discount_error")))]):t._e()]),t._v(" "),s("div",{staticClass:"d-flex mt-3"},[t._v("\n                    "+t._s(t.$t("remainder"))+":  \n                    "),s("b",[t._v("\n                        "+t._s(t.$t("rs"))+"\n                    ")]),t._v("\n                     \n                    "),s("b",[t._v("\n                        "+t._s(t.form.remainder)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"mt-3"},[s("b-form-checkbox",{attrs:{size:"lg"},model:{value:t.form.paid,callback:function(e){t.$set(t.form,"paid",e)},expression:"form.paid"}},[t._v(t._s(t.$t("paid")))])],1)])])]),t._v(" "),s("div",{staticClass:"d-flex justify-content-end mt-2"},[s("button",{staticClass:"btn btn-sm btn-danger text-nowrap mr-1",on:{click:function(e){return t.$router.push({name:"sales"})}}},[t._v("\n            "+t._s(t.$t("back"))+"\n        ")])])],1)}),[],!1,null,null,null).exports}}]);