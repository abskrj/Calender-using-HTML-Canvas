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
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n\r\n\r\n\r\nconst ctx = document.querySelector('#canvas').getContext('2d');\r\nctx.strokeStyle = \"#dbd9db\";\r\nctx.font = \"11px sans-serif\";\r\n\r\nfunction draw() {\r\n    let iX = _constants__WEBPACK_IMPORTED_MODULE_0__.INIT_DRAW_X;\r\n    let iY = _constants__WEBPACK_IMPORTED_MODULE_0__.INIT_DRAW_Y;\r\n\r\n    ctx.beginPath();\r\n    ctx.moveTo(iX, iY);\r\n\r\n    const t = new _time__WEBPACK_IMPORTED_MODULE_1__.Time();\r\n\r\n    for (let i = 1; i < 25; i++) {\r\n        ctx.fillText(t.getTime(i), iX - _constants__WEBPACK_IMPORTED_MODULE_0__.TEXT_OFFSET_X, iY + _constants__WEBPACK_IMPORTED_MODULE_0__.TEXT_OFFSET_Y);\r\n        t.incTime();\r\n\r\n        ctx.lineTo(iX + _constants__WEBPACK_IMPORTED_MODULE_0__.LINE_OFFSET_X, iY);\r\n        ctx.closePath();\r\n        ctx.stroke();\r\n\r\n        iY += _constants__WEBPACK_IMPORTED_MODULE_0__.LINE_OFFSET_Y;\r\n        ctx.moveTo(iX, iY);\r\n    }\r\n}\r\n\r\nfunction injectEventInCanvas(name, fTime, tTime, color) {\r\n    ctx.fillStyle = color;\r\n\r\n    const x = _constants__WEBPACK_IMPORTED_MODULE_0__.INIT_DRAW_X;\r\n    const y = (0,_time__WEBPACK_IMPORTED_MODULE_1__.getLocFromTime)(fTime) + _constants__WEBPACK_IMPORTED_MODULE_0__.INIT_DRAW_Y;\r\n    const width = _constants__WEBPACK_IMPORTED_MODULE_0__.RECT_WIDTH;\r\n    const height = (0,_time__WEBPACK_IMPORTED_MODULE_1__.getLocFromTime)(tTime) - y + _constants__WEBPACK_IMPORTED_MODULE_0__.INIT_DRAW_Y;\r\n\r\n    ctx.fillRect(x, y, width, height);\r\n    ctx.fillStyle = _constants__WEBPACK_IMPORTED_MODULE_0__.CARD_COLOR;\r\n    ctx.fillText(name, x + _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_NAME_OFFSET_X, y + _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_NAME_OFFSET_Y)\r\n    ctx.fillText((0,_time__WEBPACK_IMPORTED_MODULE_1__.timeFormat)(fTime) + ' - ' + (0,_time__WEBPACK_IMPORTED_MODULE_1__.timeFormat)(tTime), x + _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_TIME_OFFSET_X, y + _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_TIME_OFFSET_Y)\r\n}\r\n\r\nfunction createEvent() {\r\n    const name = document.querySelector('#eName').value;\r\n    const fTime = document.querySelector('#fTime').value;\r\n    const tTime = document.querySelector('#tTime').value;\r\n    const color = document.querySelector('#eColor').value;\r\n\r\n    if (!name || !fTime || !tTime || !color) return alert('Missing Fields');\r\n\r\n    injectEventInCanvas(name, fTime, tTime, color);\r\n}\r\n\r\nfunction sleep() {\r\n    return new Promise(r => setTimeout(r, 100));\r\n}\r\n\r\nasync function loadTestData() {\r\n    for (const data of _constants__WEBPACK_IMPORTED_MODULE_0__.testData) {\r\n        // await sleep(); // for animation effect.\r\n        injectEventInCanvas(data.name, data.fTime, data.tTime, data.color);\r\n    }\r\n}\r\n\r\nonload = () => {\r\n    document.querySelector('#btn').addEventListener('click', createEvent);\r\n    document.querySelector('#test-btn').addEventListener('click', loadTestData);\r\n}\r\n\r\n\r\ndraw()\n\n//# sourceURL=webpack://my-project/./src/index.js?");

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INIT_DRAW_X\": () => (/* binding */ INIT_DRAW_X),\n/* harmony export */   \"INIT_DRAW_Y\": () => (/* binding */ INIT_DRAW_Y),\n/* harmony export */   \"TEXT_OFFSET_X\": () => (/* binding */ TEXT_OFFSET_X),\n/* harmony export */   \"TEXT_OFFSET_Y\": () => (/* binding */ TEXT_OFFSET_Y),\n/* harmony export */   \"LINE_OFFSET_X\": () => (/* binding */ LINE_OFFSET_X),\n/* harmony export */   \"LINE_OFFSET_Y\": () => (/* binding */ LINE_OFFSET_Y),\n/* harmony export */   \"RECT_WIDTH\": () => (/* binding */ RECT_WIDTH),\n/* harmony export */   \"EVENT_NAME_OFFSET_X\": () => (/* binding */ EVENT_NAME_OFFSET_X),\n/* harmony export */   \"EVENT_NAME_OFFSET_Y\": () => (/* binding */ EVENT_NAME_OFFSET_Y),\n/* harmony export */   \"EVENT_TIME_OFFSET_X\": () => (/* binding */ EVENT_TIME_OFFSET_X),\n/* harmony export */   \"EVENT_TIME_OFFSET_Y\": () => (/* binding */ EVENT_TIME_OFFSET_Y),\n/* harmony export */   \"CARD_COLOR\": () => (/* binding */ CARD_COLOR),\n/* harmony export */   \"testData\": () => (/* binding */ testData)\n/* harmony export */ });\nconst INIT_DRAW_X = 70;\r\nconst INIT_DRAW_Y = 25;\r\nconst TEXT_OFFSET_X = 55;\r\nconst TEXT_OFFSET_Y = 3;\r\nconst LINE_OFFSET_X = 200;\r\nconst LINE_OFFSET_Y = 40;\r\nconst RECT_WIDTH = 200;\r\nconst EVENT_NAME_OFFSET_X = 5;\r\nconst EVENT_NAME_OFFSET_Y = 12;\r\nconst EVENT_TIME_OFFSET_X = 5;\r\nconst EVENT_TIME_OFFSET_Y = 25;\r\nconst CARD_COLOR = \"#fff\";\r\n\r\nconst testData = [\r\n    {\r\n        name: \"Netflix n Chill\",\r\n        fTime: \"02:00\",\r\n        tTime: \"03:45\",\r\n        color: \"#008fe0\"\r\n    },\r\n    {\r\n        name: \"Interview / Meta\",\r\n        fTime: \"05:00\",\r\n        tTime: \"06:21\",\r\n        color: \"#f44319\"\r\n    },\r\n    {\r\n        name: \"Team Scrum\",\r\n        fTime: \"09:00\",\r\n        tTime: \"09:45\",\r\n        color: \"#f44319\"\r\n    },\r\n    {\r\n        name: \"Manager 1v1\",\r\n        fTime: \"10:36\",\r\n        tTime: \"11:28\",\r\n        color: \"#f3b31e\"\r\n    },\r\n    {\r\n        name: \"Abhishek / Sagar\",\r\n        fTime: \"12:12\",\r\n        tTime: \"13:13\",\r\n        color: \"#008fe0\"\r\n    },\r\n    {\r\n        name: \"Abhishek / CEO\",\r\n        fTime: \"14:24\",\r\n        tTime: \"15:53\",\r\n        color: \"#f3b31e\"\r\n    },\r\n    {\r\n        name: \"Lunch\",\r\n        fTime: \"16:00\",\r\n        tTime: \"17:30\",\r\n        color: \"#f44319\"\r\n    },\r\n]\n\n//# sourceURL=webpack://my-project/./src/constants.js?");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Time\": () => (/* binding */ Time),\n/* harmony export */   \"getLocFromTime\": () => (/* binding */ getLocFromTime),\n/* harmony export */   \"timeFormat\": () => (/* binding */ timeFormat)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n\r\n\r\nclass Time {\r\n    constructor() {\r\n        this.t = 12;\r\n    }\r\n\r\n    getTime(i) {\r\n        if (this.t === 13) this.t = 1;\r\n        const time = this.t < 10 ? `0${this.t}:00` : `${this.t}:00`;\r\n        if (i < 12) return time + ' AM';\r\n        return time + ' PM';\r\n    }\r\n\r\n    incTime() {\r\n        this.t++;\r\n    }\r\n}\r\n\r\nfunction getLocFromTime(time) {\r\n    const [hh, mm] = time.split(\":\").map(Number);\r\n    const offset = (mm / 60) * _constants__WEBPACK_IMPORTED_MODULE_0__.LINE_OFFSET_Y;\r\n    return (hh * _constants__WEBPACK_IMPORTED_MODULE_0__.LINE_OFFSET_Y) + offset;\r\n}\r\n\r\nfunction timeFormat(time) {\r\n    let [hh, mm] = time.split(\":\").map(Number);\r\n    const meridian = hh < 12 ? 'AM' : 'PM'\r\n    if (mm < 10) mm = mm + '0';\r\n    if (hh > 12) hh -= 12;\r\n    if (hh < 10) hh = '0' + hh;\r\n    const t = `${hh}:${mm} ${meridian}`;\r\n    return t;\r\n}\n\n//# sourceURL=webpack://my-project/./src/time.js?");

/***/ })
/******/ 	]);
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
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;