"use strict";(self.webpackChunkstencil_library=self.webpackChunkstencil_library||[]).push([[118],{"./dist/esm/my-checkbox.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{my_checkbox:()=>MyCheckbox});var _index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-bbef0443.js");const MyCheckbox=class{constructor(hostRef){(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.changeEvent=(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"changeEvent",7),this.blurEvent=(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"blurEvent",7),this.label=void 0,this.checked=void 0,this.disabled=void 0}onInputChange(){this.checked=!this.checked,this.changeEvent.emit(this.checked)}onInputBlur(){this.blurEvent.emit(!0)}render(){return(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"inputDivCheckbox"},(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{onBlur:()=>this.onInputBlur(),onInput:()=>this.onInputChange(),disabled:this.disabled,id:"check",type:"checkbox",checked:this.checked}),(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{onClick:()=>!this.disabled&&this.onInputChange(),htmlfor:"check"},this.label)))}};MyCheckbox.style=":host{display:block}.inputDivCheckbox{display:inline-flex;align-items:center}"}}]);