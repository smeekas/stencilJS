"use strict";(self.webpackChunkstencil_library=self.webpackChunkstencil_library||[]).push([[285],{"./dist/esm/my-component.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{my_component:()=>MyComponent});var _index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-bbef0443.js");const MyComponent=class{constructor(hostRef){(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.first=void 0,this.middle=void 0,this.last=void 0,this.newName="newName"}getText(){return function format(first,middle,last){return(first||"")+(middle?` ${middle}`:"")+(last?` ${last}`:"")}(this.first,this.middle,this.last)}componentDidLoad(){setInterval((()=>{this.newName=Math.random().toString()}),2e3)}render(){return(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,"Hello, World! I'm ",this.getText()),(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,this.newName),(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null,(0,_index_bbef0443_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",null,"NO")))}};MyComponent.style=":host{display:block}"}}]);