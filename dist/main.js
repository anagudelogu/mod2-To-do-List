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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit;\\n  padding: 0;\\n  margin: 0;\\n  font-size: 1rem;\\n}\\n\\nbody {\\n  background-color: lightgrey;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.material-icons.gray { color: #888; }\\n\\nmain {\\n  max-height: 70%;\\n  min-width: 290px;\\n  max-width: 600px;\\n  width: 90%;\\n  margin: 0 auto;\\n  background-color: rgb(243, 243, 243);\\n  box-shadow: 0 0 5px #888;\\n}\\n\\n.list__title {\\n  font-size: 1.2rem;\\n  font-weight: normal;\\n  padding: 10px 10px 10px 20px;\\n  border: 0.5px solid lightgray;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.list__title .material-icons {\\n  cursor: pointer;\\n}\\n\\n.list {\\n  min-height: 30vh;\\n  max-height: 60vh;\\n  list-style: none;\\n  overflow: auto;\\n}\\n\\n.list__item,\\nform {\\n  padding: 0 10px;\\n  border: 0.2px solid lightgray;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 10px;\\n  transition: background-color 0.4s ease-in-out;\\n}\\n\\nform {\\n  padding: 0;\\n  border: none;\\n  width: 100%;\\n}\\n\\n.list__item.selected {\\n  background-color: #fff6a7;\\n}\\n\\n.list__checkbox {\\n  max-width: 5%;\\n}\\n\\n.list__task {\\n  background-color: inherit;\\n  border: none;\\n  font-style: italic;\\n  padding: 10px;\\n  width: 90%;\\n}\\n\\n.list__text {\\n  background-color: transparent;\\n  border: none;\\n  padding: 10px 0;\\n  width: 90%;\\n}\\n\\n.list__checkbox:checked + .list__text {\\n  color: #888;\\n  text-decoration: line-through;\\n}\\n\\ninput[type=text]:focus {\\n  outline: none;\\n}\\n\\n.list__item .material-icons {\\n  max-width: 5%;\\n  cursor: move;\\n}\\n\\n.list__task + .return {\\n  appearance: none;\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  border: none;\\n  width: 2%;\\n  margin-right: 15px;\\n  cursor: pointer;\\n}\\n\\n.list__button {\\n  background-color: rgb(218, 218, 218);\\n  color: #888;\\n  border: none;\\n  width: 100%;\\n  padding: 15px;\\n  cursor: pointer;\\n}\\n\\n.list__button:hover {\\n  color: black;\\n  text-decoration: underline;\\n}\\n\\n/* DRAG */\\n\\n.list__item.dragging {\\n  opacity: 0.5;\\n  background-color: #888;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_dragDrop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dragDrop.js */ \"./src/modules/dragDrop.js\");\n\n\n\n\n\n\n// Display tasks from Local storage\nwindow.addEventListener('DOMContentLoaded', () => {\n  _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].display();\n  _modules_dragDrop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addEventListeners();\n});\n\n// Add task\nconst FORM = document.querySelector('form');\nFORM.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const TASK_LIST = _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getEntry();\n  if (\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.VALUE.value !== ''\n    && !TASK_LIST.some((e) => e.description === _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.VALUE.value)\n  ) {\n    // Get length Array\n    const LENGTH = TASK_LIST.length;\n    // Create new task\n    const TASK = new _modules_task_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.VALUE.value, LENGTH + 1);\n    // Create element in UI\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTask(TASK);\n    // Add new task to local Storage\n    _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEntry(TASK);\n    // Clear input\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearInput();\n  } else if (TASK_LIST.some((e) => e.description === _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.VALUE.value)) {\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.VALUE.value = 'This task already exists!';\n    setTimeout(() => {\n      _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearInput();\n    }, 2000);\n  } else {\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.VALUE.value = 'Please, enter a task.';\n    setTimeout(() => {\n      _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearInput();\n    }, 2000);\n  }\n\n  _modules_dragDrop_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addEventListeners();\n});\n\n// Selected color, remove and edit\n_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.LIST.addEventListener('click', (e) => {\n  const IN = e.target;\n  const ACTIVE_TASKS = Array.from(\n    document.querySelectorAll('.list__text'),\n  );\n  if (\n    IN.classList.contains('list__text')\n    || IN.classList.contains('list__task')\n  ) {\n    ACTIVE_TASKS.forEach((task) => {\n      if (task.parentNode.classList.contains('selected')) {\n        task.parentNode.classList.remove('selected');\n        task.parentNode.children[2].innerText = 'more_vert';\n      }\n    });\n    if (IN.classList.contains('list__text')) {\n      IN.parentNode.classList.toggle('selected');\n      const ICON = document.querySelector(\n        '.selected .material-icons',\n      );\n      ICON.innerText = 'delete';\n\n      // Remove a task\n      ICON.addEventListener('click', (element) => {\n        const ELEM = element.target;\n        // Remove from UI\n        _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeTask(ELEM);\n        // Remove from Storage\n        _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delEntry(ELEM.parentNode.children[1].value);\n      });\n\n      // Edit a task\n      const TASK_DESC = IN.value;\n      IN.addEventListener('keypress', (event) => {\n        if (event.key === 'Enter') {\n          IN.blur();\n        }\n      });\n\n      IN.addEventListener('change', () => {\n        const VALUE = IN.value;\n        IN.parentNode.classList.remove('selected');\n        // Update Local Storage\n        _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].editEntry(TASK_DESC, VALUE);\n        // Change Icon\n        ICON.innerText = 'more_vert';\n      });\n    }\n  }\n});\n\n// Completed\n_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.LIST.addEventListener('change', (e) => {\n  if (e.target.classList.contains('list__checkbox')) {\n    const DESC = e.target.parentNode.children[1].value;\n    // Toggle completed on Local Storage\n    _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskCompleted(DESC);\n  }\n  // Clear all\n  const COMPLETED_TASKS = Array.from(\n    document.querySelectorAll('.list__checkbox:checked'),\n  );\n  const CLEAR_BUTTON = document.querySelector('.list__button');\n  CLEAR_BUTTON.addEventListener('click', () => {\n    // Ui\n    _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearCompleted(COMPLETED_TASKS);\n    // Storage\n    _modules_storage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].clearCompleted();\n  });\n});\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/dragDrop.js":
/*!*********************************!*\
  !*** ./src/modules/dragDrop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DragDrop)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\nclass DragDrop {\n  static addEventListeners() {\n    const DRAGGABLES = document.querySelectorAll(\n      '.list__item:not(:nth-child(1))',\n    );\n    const DRAG_CONTAINER = document.querySelector('.list');\n\n    DRAGGABLES.forEach((draggable) => {\n      draggable.addEventListener('dragstart', DragDrop.dragStart);\n      draggable.addEventListener('dragend', DragDrop.dragEnd);\n    });\n    DRAG_CONTAINER.addEventListener('dragover', DragDrop.dragOver);\n  }\n\n  static dragStart(e) {\n    const elem = e.target;\n    elem.classList.add('dragging');\n  }\n\n  static dragEnd(e) {\n    const elem = e.target;\n    elem.classList.remove('dragging');\n    const NEW_ORDER = [...document.querySelectorAll('.list__text')];\n    // Storage\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateDragIndex(NEW_ORDER);\n  }\n\n  static dragOver(e) {\n    e.preventDefault();\n    const dragging = document.querySelector('.dragging');\n    const DRAG_CONTAINER = document.querySelector('.list');\n    const afterElement = DragDrop.getAfterElement(\n      DRAG_CONTAINER,\n      e.clientY,\n    );\n    if (afterElement === null) {\n      DRAG_CONTAINER.appendChild(dragging);\n    } else {\n      DRAG_CONTAINER.insertBefore(dragging, afterElement);\n    }\n  }\n\n  static getAfterElement(container, y) {\n    const draggableElements = [\n      ...container.querySelectorAll(\n        '.list__item:not(:nth-child(1)):not(.dragging)',\n      ),\n    ];\n    return draggableElements.reduce(\n      (closest, child) => {\n        const box = child.getBoundingClientRect();\n        const offset = y - box.top - box.height / 2;\n        if (offset < 0 && offset > closest.offset) {\n          return { offset, element: child };\n        }\n        return closest;\n      },\n      { offset: Number.NEGATIVE_INFINITY },\n    ).element;\n  }\n}\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/dragDrop.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n  static getEntry() {\n    let TASK_LIST;\n    if (!localStorage.getItem('taskList')) {\n      TASK_LIST = [];\n    } else {\n      TASK_LIST = JSON.parse(localStorage.getItem('taskList'));\n    }\n    return TASK_LIST;\n  }\n\n  static setEntry(entry) {\n    localStorage.setItem('taskList', JSON.stringify(entry));\n  }\n\n  static addEntry(task) {\n    const TASK_LIST = Storage.getEntry();\n    TASK_LIST.push(task);\n    Storage.setEntry(TASK_LIST);\n  }\n\n  static delEntry(lastDesc) {\n    const TASK_LIST = Storage.getEntry();\n    TASK_LIST.forEach((task, index) => {\n      if (lastDesc === task.description) {\n        TASK_LIST.splice(index, 1);\n        Storage.updateIndex(TASK_LIST);\n      }\n    });\n    Storage.setEntry(TASK_LIST);\n  }\n\n  static editEntry(lastDesc, newDesc) {\n    const TASK_LIST = Storage.getEntry();\n    TASK_LIST.forEach((task) => {\n      if (lastDesc === task.description) {\n        task.description = newDesc;\n      }\n    });\n    Storage.setEntry(TASK_LIST);\n  }\n\n  static taskCompleted(DESC) {\n    const TASK_LIST = Storage.getEntry();\n    TASK_LIST.forEach((task) => {\n      if (DESC === task.description) {\n        task.completed = !task.completed;\n      }\n    });\n    Storage.setEntry(TASK_LIST);\n  }\n\n  static clearCompleted() {\n    const TASK_LIST = Storage.getEntry();\n\n    TASK_LIST.forEach((completedTask, index) => {\n      if (completedTask.completed) {\n        TASK_LIST.splice(index, 1);\n        Storage.updateIndex(TASK_LIST);\n      }\n    });\n    Storage.setEntry(TASK_LIST);\n  }\n\n  static updateIndex(arr) {\n    arr.forEach((task, index) => {\n      task.index = index + 1;\n    });\n    Storage.setEntry(arr);\n  }\n\n  static updateDragIndex(arr) {\n    const TASK_LIST = Storage.getEntry();\n    arr.forEach((task, index) => {\n      TASK_LIST.forEach((t) => {\n        if (task.value === t.description) {\n          t.index = index + 1;\n          TASK_LIST.sort((a, b) => a.index - b.index);\n        }\n      });\n    });\n    Storage.setEntry(TASK_LIST);\n  }\n}\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  description;\n\n  completed;\n\n  index;\n\n  constructor(desc, index, completed = false) {\n    this.description = desc;\n    this.index = index;\n    this.completed = completed;\n  }\n}\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LIST\": () => (/* binding */ LIST),\n/* harmony export */   \"VALUE\": () => (/* binding */ VALUE),\n/* harmony export */   \"default\": () => (/* binding */ Ui)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\n\nconst LIST = document.querySelector('.list');\nconst VALUE = document.querySelector('.list__task');\nconst LI = document.createElement('li');\nconst INPUT = document.createElement('input');\nconst SPAN = document.createElement('span');\n\nclass Ui {\n  static display() {\n    const TASK_LIST = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getEntry();\n    TASK_LIST.forEach((task) => {\n      Ui.createTask(task);\n    });\n  }\n\n  static createTask(task) {\n    const LI_ITEM = LI.cloneNode(true);\n    const CHECK = INPUT.cloneNode(true);\n    const INPUT_TEXT = INPUT.cloneNode(true);\n    const ICON = SPAN.cloneNode(true);\n\n    LI_ITEM.classList.add('list__item');\n    LI_ITEM.setAttribute('draggable', 'true');\n    CHECK.setAttribute('type', 'checkbox');\n    CHECK.classList.add('list__checkbox');\n    INPUT_TEXT.setAttribute('type', 'text');\n    INPUT_TEXT.setAttribute('name', 'task');\n    INPUT_TEXT.setAttribute('value', task.description);\n    INPUT_TEXT.classList.add('list__text');\n    ICON.classList.add('material-icons', 'gray');\n    ICON.innerText = 'more_vert';\n\n    LI_ITEM.append(CHECK, INPUT_TEXT, ICON);\n    LIST.appendChild(LI_ITEM);\n  }\n\n  static removeTask(element) {\n    element.parentNode.remove();\n  }\n\n  static clearInput() {\n    VALUE.value = '';\n  }\n\n  static clearCompleted(arr) {\n    arr.forEach((element) => {\n      element.parentNode.remove();\n    });\n  }\n}\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/ui.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;