/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _other__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other */ \"./src/other.js\");\n\n\nconst navigation = document.querySelector(\"header\");\n\nnavigation.addEventListener(\"click\", e => {\n    let x = e.target.dataset.nav;\n    if (x === \"home\") {\n        (0,_other__WEBPACK_IMPORTED_MODULE_0__.homeNav)();\n    } else if (x === \"menu\") {\n        (0,_other__WEBPACK_IMPORTED_MODULE_0__.menuNav)();\n    }else if (x === \"about\") {\n        (0,_other__WEBPACK_IMPORTED_MODULE_0__.aboutNav)();\n    }else {\n        console.log(x);\n    }\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOztBQUFrRDs7QUFFbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBTztBQUNmLE1BQU07QUFDTixRQUFRLCtDQUFPO0FBQ2YsS0FBSztBQUNMLFFBQVEsZ0RBQVE7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy9ob21lLmpzPzdiNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtob21lTmF2LCBtZW51TmF2LCBhYm91dE5hdn0gZnJvbSBcIi4vb3RoZXJcIlxuXG5jb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcblxubmF2aWdhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgbGV0IHggPSBlLnRhcmdldC5kYXRhc2V0Lm5hdjtcbiAgICBpZiAoeCA9PT0gXCJob21lXCIpIHtcbiAgICAgICAgaG9tZU5hdigpO1xuICAgIH0gZWxzZSBpZiAoeCA9PT0gXCJtZW51XCIpIHtcbiAgICAgICAgbWVudU5hdigpO1xuICAgIH1lbHNlIGlmICh4ID09PSBcImFib3V0XCIpIHtcbiAgICAgICAgYWJvdXROYXYoKTtcbiAgICB9ZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n\n}");

/***/ },

/***/ "./src/other.js"
/*!**********************!*\
  !*** ./src/other.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutNav: () => (/* binding */ aboutNav),\n/* harmony export */   homeNav: () => (/* binding */ homeNav),\n/* harmony export */   menuNav: () => (/* binding */ menuNav)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\");\n\nfunction clear() {\n    const tmp = document.querySelector(\"h1\");\n    if (tmp) {\n        tmp.remove();\n    }\n}\n\nfunction homeNav(){\n    clear();\n    const home = document.createElement(\"h1\")\n    home.textContent = \"Home\";\n    content.appendChild(home);\n}\n\nfunction menuNav() {\n    clear();\n    const menu = document.createElement(\"h1\")\n    menu.textContent = \"Menu\";\n    content.appendChild(menu);\n}\n\nfunction aboutNav () {\n    clear();\n    const about = document.createElement(\"h1\")\n    about.textContent = \"About\";\n    content.appendChild(about);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvb3RoZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjdGljZS8uL3NyYy9vdGhlci5qcz9hY2E0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbiAgICBpZiAodG1wKSB7XG4gICAgICAgIHRtcC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lTmF2KCl7XG4gICAgY2xlYXIoKTtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51TmF2KCkge1xuICAgIGNsZWFyKCk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWJvdXROYXYgKCkge1xuICAgIGNsZWFyKCk7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBhYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KTtcbn1cblxuXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/other.js\n\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;