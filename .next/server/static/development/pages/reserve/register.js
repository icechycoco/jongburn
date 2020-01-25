module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/reserve/register.js":
/*!***********************************!*\
  !*** ./pages/reserve/register.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/icechycoco/Desktop/JB/jongburn/pages/reserve/register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const RegistrationForm = ({
  form
}) => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
  onSubmit: e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.replace('/reserve/list');
      }
    });
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  gutter: 10,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E40\u0E08\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E41\u0E1B\u0E25\u0E07",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, form.getFieldDecorator('plantOwner', {
  rules: [{
    required: true,
    message: 'โปรดระบุชื่อเจ้าของแปลง'
  }]
})(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, form.getFieldDecorator('phone', {
  rules: [{
    required: true,
    message: 'โปรดระบุเบอร์โทรศัพท์!'
  }]
})(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  gutter: 10,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E15\u0E33\u0E1A\u0E25/\u0E41\u0E02\u0E27\u0E07",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, form.getFieldDecorator('district')(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
})))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E19\u0E33/\u0E1B\u0E23\u0E30\u0E18\u0E32\u0E19\u0E2B\u0E21\u0E39\u0E48\u0E1A\u0E49\u0E32\u0E19",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, form.getFieldDecorator('sheriffName')(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E1A\u0E49\u0E32\u0E19",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, form.getFieldDecorator('address')(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
})))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  gutter: 10,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1C\u0E32",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, form.getFieldDecorator('burningDate')(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["DatePicker"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
})))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E23\u0E30\u0E22\u0E30\u0E40\u0E27\u0E25\u0E32\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1C\u0E32",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, form.getFieldDecorator('burningTime')(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E08\u0E38\u0E14\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E1C\u0E32",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, form.getFieldDecorator('burningLocation')(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
})))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  gutter: 10,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E1E\u0E37\u0E0A\u0E17\u0E35\u0E48\u0E1B\u0E25\u0E39\u0E01\u0E43\u0E19\u0E23\u0E2D\u0E1A\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, form.getFieldDecorator('currentPlant')(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
})))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  span: 12,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E1E\u0E37\u0E0A\u0E17\u0E35\u0E48\u0E1B\u0E25\u0E39\u0E01\u0E43\u0E19\u0E23\u0E2D\u0E1A\u0E16\u0E31\u0E14\u0E44\u0E1B",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, form.getFieldDecorator('futurePlant')(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  label: "\u0E02\u0E19\u0E32\u0E14\u0E41\u0E1B\u0E25\u0E07\u0E40\u0E1E\u0E32\u0E30\u0E1B\u0E25\u0E39\u0E01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, form.getFieldDecorator('plantSize')(__jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
})))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
  htmlType: "submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, "\u0E2A\u0E48\u0E07"))));

const WrappedForm = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].create({
  name: 'register'
})(RegistrationForm);

const Register = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E27\u0E31\u0E19\u0E40\u0E1C\u0E32"), __jsx(WrappedForm, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ 3:
/*!*****************************************!*\
  !*** multi ./pages/reserve/register.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/icechycoco/Desktop/JB/jongburn/pages/reserve/register.js */"./pages/reserve/register.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=register.js.map