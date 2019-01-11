(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../rust-wasm-hash/pkg/rust_wasm_hash.js":
/*!***********************************************!*\
  !*** ../rust-wasm-hash/pkg/rust_wasm_hash.js ***!
  \***********************************************/
/*! exports provided: __wbg_alert_1cd5f6dd726a9b05, __wbg_log_e144537e6c4bce94, greet, hash_array, tarai */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_1cd5f6dd726a9b05\", function() { return __wbg_alert_1cd5f6dd726a9b05; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_e144537e6c4bce94\", function() { return __wbg_log_e144537e6c4bce94; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hash_array\", function() { return hash_array; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tarai\", function() { return tarai; });\n/* harmony import */ var _rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rust_wasm_hash_bg */ \"../rust-wasm-hash/pkg/rust_wasm_hash_bg.wasm\");\n/* tslint:disable */\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_alert_1cd5f6dd726a9b05(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    alert(varg0);\n}\n\nfunction __wbg_log_e144537e6c4bce94(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    console.log(varg0);\n}\n/**\n* @returns {void}\n*/\nfunction greet() {\n    return _rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray8ToWasm(arg) {\n    const ptr = _rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](arg.length * 1);\n    getUint8Memory().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null) {\n        cachedGlobalArgumentPtr = _rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    }\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n/**\n* @param {Uint8Array} arg0\n* @returns {string}\n*/\nfunction hash_array(arg0) {\n    const ptr0 = passArray8ToWasm(arg0);\n    const len0 = WASM_VECTOR_LEN;\n    const retptr = globalArgumentPtr();\n    _rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__[\"hash_array\"](retptr, ptr0, len0);\n    const mem = getUint32Memory();\n    const rustptr = mem[retptr / 4];\n    const rustlen = mem[retptr / 4 + 1];\n\n    const realRet = getStringFromWasm(rustptr, rustlen).slice();\n    _rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](rustptr, rustlen * 1);\n    return realRet;\n\n}\n\n/**\n* @param {number} arg0\n* @param {number} arg1\n* @param {number} arg2\n* @returns {number}\n*/\nfunction tarai(arg0, arg1, arg2) {\n    return _rust_wasm_hash_bg__WEBPACK_IMPORTED_MODULE_0__[\"tarai\"](arg0, arg1, arg2);\n}\n\n\n\n//# sourceURL=webpack:///../rust-wasm-hash/pkg/rust_wasm_hash.js?");

/***/ }),

/***/ "../rust-wasm-hash/pkg/rust_wasm_hash_bg.wasm":
/*!****************************************************!*\
  !*** ../rust-wasm-hash/pkg/rust_wasm_hash_bg.wasm ***!
  \****************************************************/
/*! exports provided: memory, __wbindgen_global_argument_ptr, greet, hash_array, tarai, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./rust_wasm_hash */ \"../rust-wasm-hash/pkg/rust_wasm_hash.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../rust-wasm-hash/pkg/rust_wasm_hash_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var rust_wasm_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rust-wasm-hash */ \"../rust-wasm-hash/pkg/rust_wasm_hash.js\");\n/* harmony import */ var jssha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jssha */ \"./node_modules/jssha/src/sha.js\");\n/* harmony import */ var jssha__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jssha__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ \"./node_modules/crypto-browserify/index.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction log(msg) {\n  var div = document.getElementById('console');\n  div.innerHTML += msg + '\\n';\n  console.log(msg);\n}\n\nfunction measure(func, n = 5) {\n  var sum = 0;\n  for(var i=0; i<n; i++) {\n    var start = performance.now();\n    func();\n    var end = performance.now();\n    var elapsed = Math.round(end - start)\n    log(\"try \" + (i+1) + \" -> \" + elapsed + \" ms\");\n    sum += elapsed;\n  }\n  var ave = Math.round(sum / n);\n  log(\"average: \" + ave + \" ms\");\n  return ave;\n}\n\nfunction js_hash_array(buf) {\n  var hash = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createHash('sha1');\n  hash.update(new Buffer(buf));\n  log(\"js_hash_array: \" + hash.digest('hex'));\n} \nfunction wasm_hash_array(buf) {\n  var hash = rust_wasm_hash__WEBPACK_IMPORTED_MODULE_0__[\"hash_array\"](new Uint8Array(buf));\n  log(\"wasm_hash_array: \" + hash);\n}\n\nvar input = document.querySelector('input[type=file]');\ninput.addEventListener('change', function() {\n  var file = input.files[0];\n  if(file == null) return;\n  var reader = new FileReader();\n  reader.onerror = function(err) {\n    console.error(err);\n  };\n  reader.onload = function() {\n    measure(function(){ js_hash_array(reader.result); });\n    measure(function(){ wasm_hash_array(reader.result); });\n  };\n  reader.readAsArrayBuffer(file);\n}, false);\n\n\n/*\nfunction tarai(x, y, z) {\n  if(x <= y){\n    return y;\n  }\n  return tarai(tarai(x-1, y, z), tarai(y-1, z, x), tarai(z-1, x, y));\n}\n\nfunction start_tarai() {\n  (function (x, y, z) {\n    console.log(\"start x:\" + x + \" y:\" + y + \" z:\" + z);\n    measure(function () {\n      log(\"js_tarai: \" + tarai(x, y, z));\n    });\n    measure(function () {\n      log(\"wasm_tarai: \" + wasm.tarai(x, y, z));\n    });\n  })(14, 7, 0);\n}\n\ndocument.querySelector('#start_tarai').addEventListener(\"click\", function(){\n  start_tarai();\n});\n*/\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ \"./node_modules/buffer/index.js\").Buffer))\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ })

}]);