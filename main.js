/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ga */ \"./src/lib/ga.ts\");\n/* harmony import */ var _lib_scriptUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/scriptUtil */ \"./src/lib/scriptUtil.ts\");\n/* harmony import */ var _lib_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/cookie */ \"./src/lib/cookie.ts\");\nvar _document$getElementB, _document$getElementB2, _document$getElementB3;\n\n\n\n\nconst TRACKING_CODE = (0,_lib_ga__WEBPACK_IMPORTED_MODULE_0__.getTrackingCode)();\nconst SERVICE_CODE = (0,_lib_ga__WEBPACK_IMPORTED_MODULE_0__.getServiceCode)();\n(0,_lib_scriptUtil__WEBPACK_IMPORTED_MODULE_1__.loadScript)(`https://www.googletagmanager.com/gtag/js?id=${TRACKING_CODE}`);\nconst companyNo = ((_document$getElementB = document.getElementById('h_selected_company_no')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.value) ?? (0,_lib_cookie__WEBPACK_IMPORTED_MODULE_2__.getCookie)('h_selected_company_no');\nconst portalId = ((_document$getElementB2 = document.getElementById('h_portal_id')) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.value) ?? (0,_lib_cookie__WEBPACK_IMPORTED_MODULE_2__.getCookie)('h_portal_id');\nconst companyName = ((_document$getElementB3 = document.getElementById('h_selected_company_name_kr')) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.value) ?? '';\n\nconst customValues = () => ({\n  custom_map: {\n    portalId,\n    companyName,\n    companyNo,\n    serviceCode: SERVICE_CODE\n  },\n  page_path: location.pathname + location.hash\n});\n\nwindow.dataLayer = window.dataLayer || [];\n\nfunction gtag() {\n  var _window$dataLayer;\n\n  (_window$dataLayer = window.dataLayer) === null || _window$dataLayer === void 0 ? void 0 : _window$dataLayer.push(arguments);\n} //@ts-ignore\n\n\ngtag('js', new Date()); //@ts-ignore\n\ngtag('config', TRACKING_CODE, customValues()); //@ts-ignore\n\nwindow.addEventListener('hashchange', () => gtag('event', 'pageview', customValues()));\n\n//# sourceURL=webpack://webpack-ts/./src/index.ts?");

/***/ }),

/***/ "./src/lib/cookie.ts":
/*!***************************!*\
  !*** ./src/lib/cookie.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie)\n/* harmony export */ });\nconst getCookie = name => {\n  const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, '\\\\$1') + '=([^;]*)'));\n  return matches ? decodeURIComponent(matches[1]) : undefined;\n};\n\n//# sourceURL=webpack://webpack-ts/./src/lib/cookie.ts?");

/***/ }),

/***/ "./src/lib/ga.ts":
/*!***********************!*\
  !*** ./src/lib/ga.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTrackingCode\": () => (/* binding */ getTrackingCode),\n/* harmony export */   \"getServiceCode\": () => (/* binding */ getServiceCode),\n/* harmony export */   \"scriptQuery\": () => (/* binding */ scriptQuery)\n/* harmony export */ });\nconst getTrackingCode = () => {\n  const qs = scriptQuery();\n  if (!qs) return '';\n  return qs['id'];\n};\nconst getServiceCode = () => {\n  const qs = scriptQuery();\n  if (!qs) return '';\n  return qs['serviceCode'];\n};\nconst scriptQuery = () => {\n  const scripts = document.getElementsByTagName('script');\n  if (scripts.length === 0) return false;\n  const qs = scripts[scripts.length - 1].src.replace(/^[^\\?]+\\?/, '').replace(/#.+$/, '').split('&');\n  const queries = Object.fromEntries(qs.map(q => q.split('=')));\n  return queries;\n};\n\n//# sourceURL=webpack://webpack-ts/./src/lib/ga.ts?");

/***/ }),

/***/ "./src/lib/scriptUtil.ts":
/*!*******************************!*\
  !*** ./src/lib/scriptUtil.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadScript\": () => (/* binding */ loadScript)\n/* harmony export */ });\nconst loadScript = (src, options) => new Promise(resolve => {\n  const script = document.createElement('script');\n\n  if (options) {\n    script.async = options.asynchronous;\n    script.defer = options.defer;\n  }\n\n  script.async = true;\n  script.src = src;\n  document.head.appendChild(script);\n\n  script.onload = () => resolve(true);\n});\n\n//# sourceURL=webpack://webpack-ts/./src/lib/scriptUtil.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;