"use strict";(self.webpackChunkstencil_library=self.webpackChunkstencil_library||[]).push([[63],{"./dist/esm/my-slider.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{my_slider:()=>MySlider});var _index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-bbef0443.js");const MySlider=class{constructor(hostRef){(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.changeEvent=(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"changeEvent",7),this.mouseUpEvent=(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"mouseUpEvent",7),this.min=void 0,this.max=void 0,this.step=void 0,this.show=void 0,this.value=""}handleInputChange(e){const element=e.target;this.value=element.value,this.changeEvent.emit(element.value)}handleMouseUp(e){const element=e.target;this.mouseUpEvent.emit(element.value)}render(){return(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"inputDiv"},this.min&&(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.min),(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{onInput:e=>this.handleInputChange(e),onChange:e=>this.handleMouseUp(e),type:"range",min:this.min,max:this.max,step:this.step,value:this.value}),this.max&&(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,this.max),this.show&&(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,this.value)))}};MySlider.style='input[type="range"]::-moz-range-track{padding:0 10px;background:repeating-linear-gradient(to right, \n      #ccc, \n      #ccc 10%, \n      #000 10%, \n      #000 11%, \n      #ccc 11%, \n      #ccc 20%)}'}}]);