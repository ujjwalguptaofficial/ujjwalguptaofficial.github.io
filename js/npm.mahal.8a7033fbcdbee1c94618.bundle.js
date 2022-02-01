(self["webpackChunkmahal_app"] = self["webpackChunkmahal_app"] || []).push([[331],{

/***/ 786:
/***/ ((module) => {

/*!
 * @license :mahal - V0.16.0 - 27/01/2022
 * https://github.com/ujjwalguptaofficial/mahal
 * Copyright (c) 2022 @Ujjwal Gupta; Licensed APACHE 2.0
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_342__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_342__);
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
/******/ 	__nested_webpack_require_342__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_342__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_342__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_342__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_342__.r = function(exports) {
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
/******/ 	__nested_webpack_require_342__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_342__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_342__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_342__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_342__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_342__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_342__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_342__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_342__(__nested_webpack_require_342__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_3818__) {

"use strict";
__nested_webpack_require_3818__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_3818__(1);
/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "isPrimitive", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "isNull", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isNull"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Logger", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["Logger"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "isArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "isArrayIndex", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isArrayIndex"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "isObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "isString", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "getFromWindow", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getFromWindow"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "nextTick", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "getObjectLength", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getObjectLength"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "indexOf", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["indexOf"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "merge", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "setAttribute", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["setAttribute"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "forOwn", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["forOwn"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "isKeyExist", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isKeyExist"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "getDataype", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getDataype"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "EventBus", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["EventBus"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "getAttribute", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getAttribute"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "replaceEl", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["replaceEl"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "clone", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["clone"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "executeRender", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["executeRender"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "initComponent", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["initComponent"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Timer", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["Timer"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "createComponent", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["createComponent"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "hashifyArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["hashifyArray"]; });

/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_3818__(59);
/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Component", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Plugin", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Plugin"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_3818__(61);
/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Template", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Template"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Prop", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Prop"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Children", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Children"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Formatter", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Formatter"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Reactive", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Reactive"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Directive", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Directive"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Computed", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Computed"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_3818__(5);
/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "ERROR_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "HTML_TAG", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["HTML_TAG"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "LIFECYCLE_EVENT", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE_EVENT"]; });

/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "DATA_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["DATA_TYPE"]; });

/* harmony import */ var _mahal__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_3818__(46);
/* harmony reexport (safe) */ __nested_webpack_require_3818__.d(__webpack_exports__, "Mahal", function() { return _mahal__WEBPACK_IMPORTED_MODULE_4__["Mahal"]; });








/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_10741__) {

"use strict";
__nested_webpack_require_10741__.r(__webpack_exports__);
/* harmony import */ var _is_primitive__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_10741__(2);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "isPrimitive", function() { return _is_primitive__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony import */ var _is_null__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_10741__(3);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "isNull", function() { return _is_null__WEBPACK_IMPORTED_MODULE_1__["isNull"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_10741__(4);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "Logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]; });

/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_10741__(10);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "isArray", function() { return _is_array__WEBPACK_IMPORTED_MODULE_3__["isArray"]; });

/* harmony import */ var _is_array_index__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_10741__(11);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "isArrayIndex", function() { return _is_array_index__WEBPACK_IMPORTED_MODULE_4__["isArrayIndex"]; });

/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_10741__(12);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "isObject", function() { return _is_object__WEBPACK_IMPORTED_MODULE_5__["isObject"]; });

/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_10741__(13);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "isString", function() { return _is_string__WEBPACK_IMPORTED_MODULE_6__["isString"]; });

/* harmony import */ var _get_from_window__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_10741__(14);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "getFromWindow", function() { return _get_from_window__WEBPACK_IMPORTED_MODULE_7__["getFromWindow"]; });

/* harmony import */ var _next_tick__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_10741__(15);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "nextTick", function() { return _next_tick__WEBPACK_IMPORTED_MODULE_8__["nextTick"]; });

/* harmony import */ var _get_object_length__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_10741__(16);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "getObjectLength", function() { return _get_object_length__WEBPACK_IMPORTED_MODULE_9__["getObjectLength"]; });

/* harmony import */ var _index_of__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_10741__(17);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "indexOf", function() { return _index_of__WEBPACK_IMPORTED_MODULE_10__["indexOf"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_10741__(18);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_11__["merge"]; });

/* harmony import */ var _set_attribute__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_10741__(19);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "setAttribute", function() { return _set_attribute__WEBPACK_IMPORTED_MODULE_12__["setAttribute"]; });

/* harmony import */ var _for_own__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_10741__(20);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "forOwn", function() { return _for_own__WEBPACK_IMPORTED_MODULE_13__["forOwn"]; });

/* harmony import */ var _is_key_exist__WEBPACK_IMPORTED_MODULE_14__ = __nested_webpack_require_10741__(21);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "isKeyExist", function() { return _is_key_exist__WEBPACK_IMPORTED_MODULE_14__["isKeyExist"]; });

/* harmony import */ var _get_data_type__WEBPACK_IMPORTED_MODULE_15__ = __nested_webpack_require_10741__(22);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "getDataype", function() { return _get_data_type__WEBPACK_IMPORTED_MODULE_15__["getDataype"]; });

/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_16__ = __nested_webpack_require_10741__(23);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "EventBus", function() { return _event_bus__WEBPACK_IMPORTED_MODULE_16__["EventBus"]; });

/* harmony import */ var _get_attribute__WEBPACK_IMPORTED_MODULE_17__ = __nested_webpack_require_10741__(24);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "getAttribute", function() { return _get_attribute__WEBPACK_IMPORTED_MODULE_17__["getAttribute"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_18__ = __nested_webpack_require_10741__(25);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "replaceEl", function() { return _dom__WEBPACK_IMPORTED_MODULE_18__["replaceEl"]; });

/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_19__ = __nested_webpack_require_10741__(26);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "clone", function() { return _clone__WEBPACK_IMPORTED_MODULE_19__["clone"]; });

/* harmony import */ var _exeute_render__WEBPACK_IMPORTED_MODULE_20__ = __nested_webpack_require_10741__(27);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "executeRender", function() { return _exeute_render__WEBPACK_IMPORTED_MODULE_20__["executeRender"]; });

/* harmony import */ var _init_component__WEBPACK_IMPORTED_MODULE_21__ = __nested_webpack_require_10741__(55);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "initComponent", function() { return _init_component__WEBPACK_IMPORTED_MODULE_21__["initComponent"]; });

/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_22__ = __nested_webpack_require_10741__(56);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "Timer", function() { return _throttle__WEBPACK_IMPORTED_MODULE_22__["Timer"]; });

/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_23__ = __nested_webpack_require_10741__(57);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "createComponent", function() { return _create_component__WEBPACK_IMPORTED_MODULE_23__["createComponent"]; });

/* harmony import */ var _hashify_array__WEBPACK_IMPORTED_MODULE_24__ = __nested_webpack_require_10741__(58);
/* harmony reexport (safe) */ __nested_webpack_require_10741__.d(__webpack_exports__, "hashifyArray", function() { return _hashify_array__WEBPACK_IMPORTED_MODULE_24__["hashifyArray"]; });




























/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_17453__) {

"use strict";
__nested_webpack_require_17453__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_17453__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
var isPrimitive = function (value) {
    switch (typeof value) {
        case 'undefined':
        case 'object':
            return false;
    }
    return true;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_17892__) {

"use strict";
__nested_webpack_require_17892__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_17892__.d(__webpack_exports__, "isNull", function() { return isNull; });
var isNull = function (value) {
    return value == null;
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_18216__) {

"use strict";
__nested_webpack_require_18216__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_18216__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_18216__(5);
var __spreadArrays = ( false) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var libName = "Palace";
var newLine = "\n\n";
var Logger = /** @class */ (function () {
    function Logger(type, info) {
        this.type = type;
        this.info_ = info;
        this.msg = this.getMsg_();
    }
    Logger.prototype.logError = function () {
        Logger.error(this.get());
    };
    Logger.prototype.logPlainError = function () {
        Logger.error(this.getPlain());
    };
    Logger.prototype.logWarning = function () {
        Logger.warn(this.get());
    };
    Logger.prototype.get = function () {
        return {
            msg: this.msg,
            type: this.type
        };
    };
    Logger.prototype.getPlain = function () {
        var err = this.get();
        return " " + err.msg + newLine + "type : " + err.type;
    };
    Logger.prototype.getMsg_ = function () {
        switch (this.type) {
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].PropDataTypeMismatch:
                var str = "Expected Data type of property " + this.info_.prop + " is " + this.info_.exp + " but received " + this.info_.got + "." + newLine;
                if (this.info_.template) {
                    str += "in template -" + newLine + "\"" + this.info_.html + "\"" + newLine;
                }
                if (this.info_.file) {
                    str += "in file - " + this.info_.file + " ";
                }
                return str;
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].SynTaxError:
                return this.info_;
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].ForExpAsRoot:
                return "For is not allowed in root element. Create a child element instead.";
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].ForOnPrimitiveOrNull:
                return "For expression can not be run on null or primitive datatype. Initiate variable " + this.info_ + " as array or object.";
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidEventHandler:
                return "Invalid event handler for event \"" + this.info_.ev + "\", Handler does not exist in component.";
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidComponent:
                return "Component \"" + this.info_.tag + "\" is not registered. Make sure you have registered component either in parent component or globally.";
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidFormatter:
                return "Can not find Formatter \"" + this.info_.formatter + "\". Make sure you have registered formatter either in component or globally.";
            case _enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].MutatingProp:
                return "Do not mutate prop \"" + this.info_.key + "\" directly. Instead use a reactive property."
                    + newLine + "found in -" + newLine +
                    ("" + this.info_.html);
            default:
                return this.msg;
        }
    };
    Logger.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.warn.apply(console, __spreadArrays(["{" + libName + " warn}:"], args));
    };
    Logger.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args[0] === "return") {
        }
        console.error.apply(console, __spreadArrays(["{" + libName + " error}:"], args));
    };
    Logger.prototype.throwPlain = function (shouldReturn) {
        var err = "{" + libName + " throw}:" + this.getPlain();
        if (shouldReturn) {
            return err;
        }
        throw err;
    };
    return Logger;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_22680__) {

"use strict";
__nested_webpack_require_22680__.r(__webpack_exports__);
/* harmony import */ var _error_type__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22680__(6);
/* harmony reexport (safe) */ __nested_webpack_require_22680__.d(__webpack_exports__, "ERROR_TYPE", function() { return _error_type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"]; });

/* harmony import */ var _html_tag__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_22680__(7);
/* harmony reexport (safe) */ __nested_webpack_require_22680__.d(__webpack_exports__, "HTML_TAG", function() { return _html_tag__WEBPACK_IMPORTED_MODULE_1__["HTML_TAG"]; });

/* harmony import */ var _life_cycle_event__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_22680__(8);
/* harmony reexport (safe) */ __nested_webpack_require_22680__.d(__webpack_exports__, "LIFECYCLE_EVENT", function() { return _life_cycle_event__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"]; });

/* harmony import */ var _data_type__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_22680__(9);
/* harmony reexport (safe) */ __nested_webpack_require_22680__.d(__webpack_exports__, "DATA_TYPE", function() { return _data_type__WEBPACK_IMPORTED_MODULE_3__["DATA_TYPE"]; });







/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_23881__) {

"use strict";
__nested_webpack_require_23881__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_23881__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE["InvalidComponent"] = "invalid_component";
    ERROR_TYPE["SynTaxError"] = "syntax_error";
    ERROR_TYPE["ForExpAsRoot"] = "for_exp_as_root";
    ERROR_TYPE["ForOnPrimitiveOrNull"] = "for_on_primitive|null";
    ERROR_TYPE["InvalidEventHandler"] = "invalid_event_handler";
    ERROR_TYPE["InvalidFormatter"] = "invalid_formatter";
    ERROR_TYPE["PropDataTypeMismatch"] = "prop_data_type_mismatch";
    ERROR_TYPE["RendererNotFound"] = "createRenderer_not_found";
    ERROR_TYPE["MutatingProp"] = "mutating_prop";
})(ERROR_TYPE || (ERROR_TYPE = {}));


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_24760__) {

"use strict";
__nested_webpack_require_24760__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_24760__.d(__webpack_exports__, "HTML_TAG", function() { return HTML_TAG; });
var tags = [
    "div", "p", "b", "span", "input", "u", "button",
    "table", "tr", "th", "td", "thead", "tbody", "tfoot", "slot",
    "target", "a", "h1", "h2", "h3", "h4", "h5", "h6", "pre",
    "section", "video", "audio", "ul", "ol", "li"
];
var HTML_TAG = {};
tags.forEach(function (tag) { return HTML_TAG[tag] = true; });


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_25356__) {

"use strict";
__nested_webpack_require_25356__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_25356__.d(__webpack_exports__, "LIFECYCLE_EVENT", function() { return LIFECYCLE_EVENT; });
var LIFECYCLE_EVENT;
(function (LIFECYCLE_EVENT) {
    LIFECYCLE_EVENT["Create"] = "create";
    LIFECYCLE_EVENT["Destroy"] = "destroy";
    LIFECYCLE_EVENT["Update"] = "update";
    LIFECYCLE_EVENT["Mount"] = "mount";
})(LIFECYCLE_EVENT || (LIFECYCLE_EVENT = {}));


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_25903__) {

"use strict";
__nested_webpack_require_25903__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_25903__.d(__webpack_exports__, "DATA_TYPE", function() { return DATA_TYPE; });
var DATA_TYPE;
(function (DATA_TYPE) {
    DATA_TYPE["String"] = "string";
    DATA_TYPE["Object"] = "object";
    DATA_TYPE["Array"] = "array";
    DATA_TYPE["Number"] = "number";
    DATA_TYPE["Boolean"] = "boolean";
    DATA_TYPE["Null"] = "null";
    DATA_TYPE["Function"] = "function";
})(DATA_TYPE || (DATA_TYPE = {}));


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_26499__) {

"use strict";
__nested_webpack_require_26499__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_26499__.d(__webpack_exports__, "isArray", function() { return isArray; });
var isArray = function (value) {
    return Array.isArray(value);
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_26834__) {

"use strict";
__nested_webpack_require_26834__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_26834__.d(__webpack_exports__, "isArrayIndex", function() { return isArrayIndex; });
var isArrayIndex = function (value) {
    return value === parseInt(value, 10);
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_27193__) {

"use strict";
__nested_webpack_require_27193__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_27193__.d(__webpack_exports__, "isObject", function() { return isObject; });
var isObject = function (value) {
    return value != null && typeof value === "object";
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_27553__) {

"use strict";
__nested_webpack_require_27553__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_27553__.d(__webpack_exports__, "isString", function() { return isString; });
var isString = function (value) {
    return typeof value === "string";
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_27896__) {

"use strict";
__nested_webpack_require_27896__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_27896__.d(__webpack_exports__, "getFromWindow", function() { return getFromWindow; });
var getFromWindow = function (prop) {
    return window[prop];
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_28240__) {

"use strict";
__nested_webpack_require_28240__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_28240__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
var isExecuting = false;
var callbacks = [];
var microTaskExecutor = window.queueMicrotask || (function (cb) {
    setTimeout(cb, 0);
});
var flushCallbacks = function () {
    microTaskExecutor(function () {
        var copies = callbacks.slice(0);
        callbacks = [];
        isExecuting = false;
        copies.forEach(function (cb) {
            cb();
        });
    });
};
var nextTick = function (cb) {
    var promise;
    if (cb == null) {
        promise = new Promise(function (res) {
            cb = res;
        });
    }
    callbacks.push(cb);
    if (!isExecuting) {
        isExecuting = true;
        flushCallbacks();
    }
    if (promise) {
        return promise;
    }
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_29208__) {

"use strict";
__nested_webpack_require_29208__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_29208__.d(__webpack_exports__, "getObjectLength", function() { return getObjectLength; });
var getObjectLength = function (value) {
    return value.length || Object.keys(value).length;
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_29588__) {

"use strict";
__nested_webpack_require_29588__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_29588__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
var indexOf = function (value, key) {
    var index = -1;
    for (var item in value) {
        ++index;
        if (item === key) {
            return index;
        }
    }
    return -1;
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_30047__) {

"use strict";
__nested_webpack_require_30047__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_30047__.d(__webpack_exports__, "merge", function() { return merge; });
var __spreadArrays = ( false) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var merge = function () {
    var obj = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        obj[_i] = arguments[_i];
    }
    return Object.assign.apply(Object, __spreadArrays([{}], obj));
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_30852__) {

"use strict";
__nested_webpack_require_30852__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_30852__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
var setAttribute = function (element, key, value) {
    // if (element.nodeType === 8) return;
    if (element.nodeType === 1 && key === "value") {
        return element.value = value;
    }
    return element.setAttribute(key, value);
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_31368__) {

"use strict";
__nested_webpack_require_31368__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_31368__.d(__webpack_exports__, "forOwn", function() { return forOwn; });
var forOwn = function (obj, cb) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            cb(key, obj[key]);
        }
    }
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_31782__) {

"use strict";
__nested_webpack_require_31782__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_31782__.d(__webpack_exports__, "isKeyExist", function() { return isKeyExist; });
var isKeyExist = function (obj, key) {
    return obj[key] != null;
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_32125__) {

"use strict";
__nested_webpack_require_32125__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_32125__.d(__webpack_exports__, "getDataype", function() { return getDataype; });
var getDataype = function (value) {
    if (value == null) {
        return "null";
    }
    var type = typeof value;
    switch (type) {
        case 'object':
            if (Array.isArray(value)) {
                return "array";
            }
        default:
            return type;
    }
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_32696__) {

"use strict";
__nested_webpack_require_32696__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_32696__.d(__webpack_exports__, "EventBus", function() { return EventBus; });
var __spreadArrays = ( false) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var EventBus = /** @class */ (function () {
    function EventBus(ctx) {
        this._events = {};
        this._ctx = ctx;
    }
    EventBus.prototype.on = function (event, cb) {
        if (this._events[event] == null) {
            this._events[event] = [];
        }
        this._events[event].push(cb);
        return this;
    };
    EventBus.prototype.off = function (event, cb) {
        if (this._events[event]) {
            if (cb) {
                var index = this._events[event].indexOf(cb);
                this._events[event].splice(index, 1);
            }
            else {
                this._events[event] = [];
            }
        }
    };
    EventBus.prototype.emit = function (event) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var events = this._events[event] || [];
        return Promise.all(events.map(function (cb) {
            var result = cb.call.apply(cb, __spreadArrays([_this._ctx], args));
            return result && result.then ? result : Promise.resolve(result);
        }));
    };
    EventBus.prototype.emitLinear = function (event) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var events = this._events[event] || [];
        var index = 0;
        var length = events.length;
        var results = [];
        var callMethod = function () {
            var eventCb = events[index++];
            if (eventCb) {
                var result = eventCb.call.apply(eventCb, __spreadArrays([_this._ctx], args));
                return result && result.then ? result : Promise.resolve(result);
            }
        };
        return new Promise(function (res) {
            var checkAndCall = function () {
                if (index < length) {
                    callMethod().then(function (result) {
                        results.push(result);
                        checkAndCall();
                    });
                }
                else {
                    res(results);
                }
            };
            checkAndCall();
        });
    };
    EventBus.prototype.destroy = function () {
        this._events = null;
        this._ctx = null;
    };
    return EventBus;
}());



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_35697__) {

"use strict";
__nested_webpack_require_35697__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_35697__.d(__webpack_exports__, "getAttribute", function() { return getAttribute; });
var getAttribute = function (element, key) {
    if (element.nodeType === 8) {
        return null;
    }
    return element.getAttribute(key);
};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_36120__) {

"use strict";
__nested_webpack_require_36120__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_36120__.d(__webpack_exports__, "replaceEl", function() { return replaceEl; });
// export const destroyEl = (el: HTMLElement) => {
// }
var replaceEl = function (oldEl, newEl) {
    oldEl.parentNode.replaceChild(newEl, oldEl);
};


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_36540__) {

"use strict";
__nested_webpack_require_36540__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_36540__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_36540__(12);
/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_36540__(10);


var clone = function (obj) {
    if (Object(_is_object__WEBPACK_IMPORTED_MODULE_0__["isObject"])(obj)) {
        // if (isArray(obj)) {
        //     const copy = [];
        //     for (const i in obj) {
        //         copy[i] = obj[i] != null && isObject(obj[i]) ? clone(obj[i]) : obj[i];
        //     }
        //     return copy;
        // }
        var copy = Object(_is_array__WEBPACK_IMPORTED_MODULE_1__["isArray"])(obj) ? [] : {};
        for (var i in obj) {
            copy[i] = obj[i] != null && Object(_is_object__WEBPACK_IMPORTED_MODULE_0__["isObject"])(obj[i]) ? clone(obj[i]) : obj[i];
        }
        return copy;
    }
    return obj;
};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_37653__) {

"use strict";
__nested_webpack_require_37653__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_37653__.d(__webpack_exports__, "executeRender", function() { return executeRender; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_37653__(28);
/* harmony import */ var _mahal__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_37653__(46);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_37653__(1);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_37653__(5);




function getRender() {
    var _this = this;
    return this.render || (function () {
        if (true) {
            if (!_mahal__WEBPACK_IMPORTED_MODULE_1__["Mahal"].createRenderer) {
                new _utils__WEBPACK_IMPORTED_MODULE_2__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].RendererNotFound).throwPlain();
            }
        }
        return _mahal__WEBPACK_IMPORTED_MODULE_1__["Mahal"].createRenderer(_this.template);
    })();
}
var executeRender = function (comp, children) {
    var renderFn = getRender.call(comp);
    return renderFn.call(comp, {
        createElement: _helpers__WEBPACK_IMPORTED_MODULE_0__["createElement"].bind(comp),
        createTextNode: _helpers__WEBPACK_IMPORTED_MODULE_0__["createTextNode"].bind(comp),
        format: comp.format.bind(comp),
        runExp: _helpers__WEBPACK_IMPORTED_MODULE_0__["handleExpression"].bind(comp),
        children: children || []
        // runForExp: this.handleForExp_.bind(this)
    }).then(function (el) {
        comp.element = el;
        var clear = _helpers__WEBPACK_IMPORTED_MODULE_0__["clearAll"].bind(comp);
        el.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE_EVENT"].Destroy, clear);
        comp.emit(_enums__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE_EVENT"].Mount);
        comp.isMounted = true;
        comp.on(_enums__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE_EVENT"].Destroy, function () {
            el.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_3__["LIFECYCLE_EVENT"].Destroy, clear);
        });
        return el;
    });
};


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_39856__) {

"use strict";
__nested_webpack_require_39856__.r(__webpack_exports__);
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_39856__(29);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "Observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_0__["Observer"]; });

/* harmony import */ var _do_nothing__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_39856__(30);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "doNothing", function() { return _do_nothing__WEBPACK_IMPORTED_MODULE_1__["doNothing"]; });

/* harmony import */ var _create_coment_node__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_39856__(31);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "createCommentNode", function() { return _create_coment_node__WEBPACK_IMPORTED_MODULE_2__["createCommentNode"]; });

/* harmony import */ var _run_promises_in_sequence__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_39856__(32);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "runPromisesInSequence", function() { return _run_promises_in_sequence__WEBPACK_IMPORTED_MODULE_3__["runPromisesInSequence"]; });

/* harmony import */ var _create_text_node__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_39856__(33);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "createTextNode", function() { return _create_text_node__WEBPACK_IMPORTED_MODULE_4__["createTextNode"]; });

/* harmony import */ var _handle_expression__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_39856__(34);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "handleExpression", function() { return _handle_expression__WEBPACK_IMPORTED_MODULE_5__["handleExpression"]; });

/* harmony import */ var _handle_attribute__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_39856__(37);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "handleAttribute", function() { return _handle_attribute__WEBPACK_IMPORTED_MODULE_6__["handleAttribute"]; });

/* harmony import */ var _handle_directive__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_39856__(39);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "handleDirective", function() { return _handle_directive__WEBPACK_IMPORTED_MODULE_7__["handleDirective"]; });

/* harmony import */ var _handle_in_place__WEBPACK_IMPORTED_MODULE_8__ = __nested_webpack_require_39856__(42);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "handleInPlace", function() { return _handle_in_place__WEBPACK_IMPORTED_MODULE_8__["handleInPlace"]; });

/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_9__ = __nested_webpack_require_39856__(43);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "createElement", function() { return _create_element__WEBPACK_IMPORTED_MODULE_9__["createElement"]; });

/* harmony import */ var _emit_update__WEBPACK_IMPORTED_MODULE_10__ = __nested_webpack_require_39856__(36);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "emitUpdate", function() { return _emit_update__WEBPACK_IMPORTED_MODULE_10__["emitUpdate"]; });

/* harmony import */ var _comp_clear_all__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_39856__(45);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "clearAll", function() { return _comp_clear_all__WEBPACK_IMPORTED_MODULE_11__["clearAll"]; });

/* harmony import */ var _get_expression_value__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_39856__(38);
/* harmony reexport (safe) */ __nested_webpack_require_39856__.d(__webpack_exports__, "getAttributeValue", function() { return _get_expression_value__WEBPACK_IMPORTED_MODULE_12__["getAttributeValue"]; });
















/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_43646__) {

"use strict";
__nested_webpack_require_43646__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_43646__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_43646__(1);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_43646__(5);


var Observer = /** @class */ (function () {
    function Observer(onChange) {
        this.onChange = onChange;
    }
    Observer.prototype.create = function (input, keys, prefix) {
        var _this = this;
        if (prefix === void 0) { prefix = ""; }
        var onChange = this.onChange;
        var isInputArray = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isArray"])(input);
        keys = keys || (isInputArray ? [] : Object.keys(input));
        var hashkeys = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["hashifyArray"])(keys);
        var registerChild = function (key, newValue, oldValue) {
            var objectValKeyWithPrefix = "" + prefix + key + ".";
            if (oldValue != null) {
                var mergedNewValue = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])(oldValue, newValue || {});
                for (var valKey in mergedNewValue) {
                    onChange("" + objectValKeyWithPrefix + valKey, mergedNewValue[valKey], oldValue[valKey]);
                }
            }
            return _this.create(newValue, null, objectValKeyWithPrefix);
        };
        if (isInputArray) {
            var arrProxy = new Proxy(input, {
                get: function (target, prop, receiver) {
                    switch (prop) {
                        case 'push':
                        case 'splice':
                        case 'pop':
                        case 'shift':
                        case 'unshift':
                        case 'reverse':
                            return function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                var result = target[prop].apply(target, args);
                                onChange(prefix + prop, (function () {
                                    switch (prop) {
                                        case 'push':
                                            return {
                                                value: args[0],
                                                key: result - 1,
                                                length: result
                                            };
                                        case 'pop':
                                            return target.length;
                                        case 'reverse':
                                            return {
                                                length: target.length,
                                                value: result
                                            };
                                        // case 'unshift':
                                        //     return 0;
                                        default:
                                            return args;
                                    }
                                })());
                                return result;
                            };
                    }
                    return Reflect.get(target, prop, receiver);
                },
                set: function (target, prop, newValue, receiver) {
                    var setValue = Reflect.set(target, prop, newValue, receiver);
                    onChange(prefix + "update", [Number(prop), newValue]);
                    return setValue;
                }
            });
            return arrProxy;
        }
        var proxy = new Proxy(input, {
            deleteProperty: function (target, prop) {
                var index = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["indexOf"])(target, prop);
                var noOfItemToDelete = 1;
                var isValueDeleted = Reflect.deleteProperty(target, prop);
                onChange(prefix + "splice", [index, noOfItemToDelete]);
                return isValueDeleted;
            },
            set: function (target, prop, newValue, receiver) {
                var oldValue = target[prop];
                var isValueSetted;
                if (true) {
                    try {
                        var componentProps = input['_props'];
                        if (componentProps && Observer.shouldCheckProp && componentProps[prop]) {
                            new _utils__WEBPACK_IMPORTED_MODULE_0__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE"].MutatingProp, {
                                html: input.outerHTML,
                                key: prop
                            }).logPlainError();
                        }
                    }
                    catch (error) {
                    }
                }
                var setValue = function () {
                    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(newValue)) {
                        var proxyChild = registerChild(prop, newValue, oldValue);
                        return Reflect.set(target, prop, proxyChild, receiver);
                    }
                    else {
                        return Reflect.set(target, prop, newValue, receiver);
                    }
                };
                if (hashkeys[prop]) {
                    isValueSetted = setValue();
                    onChange(prefix + prop, newValue, oldValue);
                    return isValueSetted;
                }
                if (prefix) {
                    isValueSetted = setValue();
                    if (oldValue != null) {
                        if (target.hasOwnProperty(prop)) {
                            onChange(prefix + "update", [prop, newValue]);
                        }
                    }
                    else {
                        var length_1 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getObjectLength"])(target);
                        onChange(prefix + "push", {
                            value: newValue,
                            key: prop,
                            length: length_1
                        });
                    }
                    return isValueSetted;
                }
                return Reflect.set(target, prop, newValue, receiver);
            },
        });
        keys.forEach(function (key) {
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(input[key])) {
                input[key] = registerChild(key, input[key], null);
            }
        });
        return proxy;
    };
    Observer.prototype.destroy = function () {
        this.onChange = null;
    };
    Observer.shouldCheckProp = true;
    return Observer;
}());



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_50741__) {

"use strict";
__nested_webpack_require_50741__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_50741__.d(__webpack_exports__, "doNothing", function() { return doNothing; });
var doNothing = function () {
};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_51044__) {

"use strict";
__nested_webpack_require_51044__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_51044__.d(__webpack_exports__, "createCommentNode", function() { return createCommentNode; });
var createCommentNode = function (text) {
    return document.createComment(text || "");
};


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_51422__) {

"use strict";
__nested_webpack_require_51422__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_51422__.d(__webpack_exports__, "runPromisesInSequence", function() { return runPromisesInSequence; });
var runPromisesInSequence = function (promises, param) {
    promises.reduce(function (p, promise) {
        return p.then(function (result) { return promise(result); });
    }, Promise.resolve(param));
};


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_51922__) {

"use strict";
__nested_webpack_require_51922__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_51922__.d(__webpack_exports__, "createTextNode", function() { return createTextNode; });
function createTextNode(val) {
    return Promise.resolve(document.createTextNode(val));
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_52293__) {

"use strict";
__nested_webpack_require_52293__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_52293__.d(__webpack_exports__, "handleExpression", function() { return handleExpression; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_52293__(5);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_52293__(1);
/* harmony import */ var _handle_for_expression__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_52293__(35);
/* harmony import */ var _emit_update__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_52293__(36);




function handleExpression(method, keys, type) {
    var _this = this;
    if (type === "for") {
        return _handle_for_expression__WEBPACK_IMPORTED_MODULE_2__["handleForExp"].call(this, keys[0], method);
    }
    return new Promise(function (res) {
        method().then(function (el) {
            var changesQueue = [];
            var handleChange = function () {
                changesQueue.shift();
                var onChange = function () {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
                        method().then(function (newEl) {
                            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["replaceEl"])(el, newEl);
                            el = newEl;
                            handleChange();
                        });
                    });
                };
                var watchCallBack = function () {
                    changesQueue.push(1);
                    if (changesQueue.length === 1) {
                        onChange();
                    }
                };
                keys.forEach(function (item) {
                    _this.watch(item, watchCallBack);
                });
                var onElDestroyed = function () {
                    var _this = this;
                    el.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Destroy, onElDestroyed);
                    keys.forEach(function (item) {
                        _this.unwatch(item, watchCallBack);
                    });
                }.bind(_this);
                el.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Destroy, onElDestroyed);
                if (changesQueue.length > 0) {
                    onChange();
                }
                Object(_emit_update__WEBPACK_IMPORTED_MODULE_3__["emitUpdate"])(_this);
            };
            handleChange();
            res(el);
        });
    });
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_54914__) {

"use strict";
__nested_webpack_require_54914__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_54914__.d(__webpack_exports__, "runForExp", function() { return runForExp; });
/* harmony export (binding) */ __nested_webpack_require_54914__.d(__webpack_exports__, "handleForExp", function() { return handleForExp; });
/* harmony import */ var _create_coment_node__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_54914__(31);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_54914__(1);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_54914__(5);
/* harmony import */ var _emit_update__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_54914__(36);
var __spreadArrays = ( false) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};




var runForExp = function (key, value, method) {
    var els = [];
    if (true) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(value) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNull"])(value)) {
            new _utils__WEBPACK_IMPORTED_MODULE_1__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].ForOnPrimitiveOrNull, key).throwPlain();
        }
    }
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
        value.map(function (item, i) {
            els.push(method(item, i));
        });
    }
    else if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(value)) {
        for (var prop in value) {
            els.push(method(value[prop], prop));
        }
    }
    return els;
};
function handleForExp(key, method) {
    var _a;
    var _this = this;
    var cmNode = Object(_create_coment_node__WEBPACK_IMPORTED_MODULE_0__["createCommentNode"])();
    var els = [cmNode];
    var resolvedValue = this.resolve(key);
    els = els.concat(runForExp(key, resolvedValue, method));
    var isValueArray = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(resolvedValue);
    var callBacks = (_a = {},
        _a[key] = function (newValue) {
            // value resetted
            runForExp(key, newValue, method);
            var parent = cmNode.parentNode;
            // remove all nodes
            // for (let i = 0, len = getObjectLength(oldValue); i < len; i++) {
            //     parent.removeChild(cmNode.nextSibling);
            // }
            var nextSibling = cmNode.nextSibling;
            while (nextSibling != null) {
                parent.removeChild(nextSibling);
                nextSibling = cmNode.nextSibling;
            }
            // add all node
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(newValue)) {
                newValue.forEach(function (item, index) {
                    handleChange("push", {
                        value: item,
                        key: index,
                        length: index + 1
                    });
                });
            }
            else {
                var index_1 = 0;
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["forOwn"])(newValue, function (prop, value) {
                    index_1++;
                    handleChange("push", {
                        value: value,
                        key: prop,
                        length: index_1 + 1
                    });
                });
            }
            Object(_emit_update__WEBPACK_IMPORTED_MODULE_3__["emitUpdate"])(_this);
        },
        _a[key + ".push"] = function (newValue) {
            handleChange("push", newValue);
        },
        _a[key + ".pop"] = function (newValue) {
            handleChange("splice", [newValue, 1]);
        },
        _a[key + ".shift"] = function () {
            handleChange("splice", [0, 1]);
        },
        _a[key + ".unshift"] = function (newValue) {
            handleChange("splice", [0, 0, newValue]);
        },
        _a[key + ".reverse"] = function (result) {
            handleChange("splice", __spreadArrays([0, result.length], result.value));
        },
        _a[key + ".splice"] = function (newValue) {
            handleChange("splice", newValue);
        },
        _a[key + ".update"] = function (newValue) {
            handleChange("update", newValue);
        },
        _a);
    var onElDestroyed = function () {
        cmNode.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, onElDestroyed);
        cmNode = null;
        for (var ev in callBacks) {
            _this.unwatch(ev, callBacks[ev]);
        }
        callBacks = null;
    };
    cmNode.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, onElDestroyed);
    var handleChange = function (prop, params) {
        var parent = cmNode.parentNode;
        var indexOfRef = Array.prototype.indexOf.call(parent.childNodes, cmNode);
        switch (prop) {
            case 'push':
                method(params.value, params.key).then(function (newElement) {
                    parent.insertBefore(newElement, parent.childNodes[indexOfRef + params.length]);
                });
                break;
            case 'splice':
                // i==1 for comment nodes 
                var relativeIndex = indexOfRef + params[0];
                for (var i = 1; i <= params[1]; i++) {
                    var child = parent.childNodes[relativeIndex + 1];
                    if (child) {
                        parent.removeChild(child);
                    }
                }
                var promises = [];
                var _loop_1 = function (i, j, length_1) {
                    promises.push(method(params[i], j).then(function (newElement) {
                        parent.insertBefore(newElement, parent.childNodes[indexOfRef + 1 + j]);
                    }));
                };
                for (var i = 2, j = params[0], length_1 = params.length; i < length_1; i++, j++) {
                    _loop_1(i, j, length_1);
                }
                if (!isValueArray)
                    break;
                var from_1 = (params.length - 2) + params[0];
                // resolvedValue = this.resolve(key);
                var sliced_1 = _this.resolve(key).slice(from_1);
                // const asyncElements = runForExp(key, sliced, method);
                Promise.all(promises).then(function (_) {
                    return Promise.all(sliced_1.map(function (item, itemIndex) {
                        return method(item, from_1 + itemIndex);
                    }));
                }).then(function (elements) {
                    var spliceRefIndex = indexOfRef + 1 + params[0] + params.length - 2;
                    elements.forEach(function (newEl, elementIndex) {
                        var el = parent.childNodes[spliceRefIndex + elementIndex];
                        parent.replaceChild(newEl, el);
                    });
                });
                break;
            case 'update':
                resolvedValue = _this.resolve(key);
                var index_2 = isValueArray ? params[0] : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(resolvedValue, params[0]);
                if (index_2 >= 0) {
                    method(params[1], params[0]).then(function (newElement) {
                        parent.replaceChild(newElement, parent.childNodes[indexOfRef + 1 + index_2]);
                    });
                }
                break;
        }
        Object(_emit_update__WEBPACK_IMPORTED_MODULE_3__["emitUpdate"])(_this);
    };
    this.watch(key, callBacks[key]).
        watch(key + ".push", callBacks[key + ".push"]).
        watch(key + ".splice", callBacks[key + ".splice"]).
        watch(key + ".update", callBacks[key + ".update"]).
        watch(key + ".pop", callBacks[key + ".pop"]).
        watch(key + ".shift", callBacks[key + ".shift"]).
        watch(key + ".unshift", callBacks[key + ".unshift"]).
        watch(key + ".reverse", callBacks[key + ".reverse"]);
    return els;
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_63184__) {

"use strict";
__nested_webpack_require_63184__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_63184__.d(__webpack_exports__, "emitUpdate", function() { return emitUpdate; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63184__(5);

var emitUpdate = function (comp) {
    if (comp.isMounted) {
        comp['_timer'].debounce(function () {
            comp.emit(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Update);
        });
    }
};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_63758__) {

"use strict";
__nested_webpack_require_63758__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_63758__.d(__webpack_exports__, "handleAttribute", function() { return handleAttribute; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_63758__(1);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_63758__(5);
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_63758__(29);
/* harmony import */ var _emit_update__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_63758__(36);
/* harmony import */ var _get_expression_value__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_63758__(38);





function handleAttribute(component, attr, isComponent) {
    var _this = this;
    if (isComponent) {
        var htmlAttributes = [];
        if (!attr)
            return htmlAttributes;
        var _loop_1 = function (key) {
            var value = attr[key];
            if (component._props[key]) {
                var attrValue = Object(_get_expression_value__WEBPACK_IMPORTED_MODULE_4__["getAttributeValue"])(value, value.v);
                if (component._props[key].type) {
                    var expected_1 = component._props[key].type;
                    var received_1 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getDataype"])(attrValue);
                    if (expected_1 !== received_1) {
                        this_1.waitFor(_enums__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_EVENT"].Mount).then(function (_) {
                            new _utils__WEBPACK_IMPORTED_MODULE_0__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE"].PropDataTypeMismatch, {
                                prop: key,
                                exp: expected_1,
                                got: received_1,
                                html: _this.outerHTML,
                                file: _this.file_
                            }).logPlainError();
                        });
                    }
                }
                component[key] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(attrValue);
                if (value.k) {
                    this_1.watch(value.k, function (newValue, oldValue) {
                        if (oldValue === newValue)
                            return;
                        _observer__WEBPACK_IMPORTED_MODULE_2__["Observer"].shouldCheckProp = false;
                        component[key] = Object(_get_expression_value__WEBPACK_IMPORTED_MODULE_4__["getAttributeValue"])(value, newValue);
                        _observer__WEBPACK_IMPORTED_MODULE_2__["Observer"].shouldCheckProp = true;
                    });
                }
            }
            else {
                htmlAttributes.push({
                    key: key,
                    value: Object(_get_expression_value__WEBPACK_IMPORTED_MODULE_4__["getAttributeValue"])(value, value.v)
                });
            }
        };
        var this_1 = this;
        for (var key in attr) {
            _loop_1(key);
        }
        return htmlAttributes;
    }
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["forOwn"])(attr, function (key, attrItem) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(component, key, Object(_get_expression_value__WEBPACK_IMPORTED_MODULE_4__["getAttributeValue"])(attrItem, attrItem.v));
        if (attrItem.k) {
            _this.watch(attrItem.k, function (newValue) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(component, key, Object(_get_expression_value__WEBPACK_IMPORTED_MODULE_4__["getAttributeValue"])(attrItem, newValue));
                Object(_emit_update__WEBPACK_IMPORTED_MODULE_3__["emitUpdate"])(_this);
            });
        }
    });
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_67602__) {

"use strict";
__nested_webpack_require_67602__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_67602__.d(__webpack_exports__, "getAttributeValue", function() { return getAttributeValue; });
var getAttributeValue = function (value, valueToSet) {
    var attrValue = value.v;
    return value.m ? attrValue() : valueToSet;
};


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_68022__) {

"use strict";
__nested_webpack_require_68022__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_68022__.d(__webpack_exports__, "handleDirective", function() { return handleDirective; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_68022__(1);
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_68022__(40);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_68022__(5);



function handleDirective(element, dir, isComponent) {
    var _this = this;
    if (!dir)
        return;
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["forOwn"])(dir, function (name, compiledDir) {
        var storedDirective = _this['_directive'][name] || _this['_app']['_directives'][name];
        if (storedDirective) {
            var binding_1 = compiledDir;
            binding_1.isComponent = isComponent;
            var directive_1 = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])(_generics__WEBPACK_IMPORTED_MODULE_1__["genericDirective"], storedDirective.call(_this, element, binding_1));
            var eventCbs_1 = [];
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
                var onDestroyed = function () {
                    directive_1.destroyed();
                    if (!isComponent) {
                        element.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, onDestroyed);
                    }
                    compiledDir.props.forEach(function (prop, index) {
                        _this.unwatch(prop, eventCbs_1[index]);
                    });
                    element = null;
                    eventCbs_1 = null;
                };
                if (isComponent) {
                    element.on(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, onDestroyed);
                }
                else {
                    element.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy, onDestroyed);
                }
                compiledDir.props.forEach(function (prop, index) {
                    var ev = function (newValue, oldValue) {
                        if (oldValue === newValue)
                            return;
                        binding_1.value[index] = newValue;
                        directive_1.valueUpdated();
                    };
                    _this.watch(prop, ev);
                    eventCbs_1.push(ev);
                });
                directive_1.inserted();
            });
        }
    });
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_70689__) {

"use strict";
__nested_webpack_require_70689__.r(__webpack_exports__);
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_70689__(41);
/* harmony reexport (safe) */ __nested_webpack_require_70689__.d(__webpack_exports__, "genericDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_0__["genericDirective"]; });




/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_71109__) {

"use strict";
__nested_webpack_require_71109__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_71109__.d(__webpack_exports__, "genericDirective", function() { return genericDirective; });
/* harmony import */ var _helpers_do_nothing__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_71109__(30);

var genericDirective = {
    inserted: _helpers_do_nothing__WEBPACK_IMPORTED_MODULE_0__["doNothing"],
    valueUpdated: _helpers_do_nothing__WEBPACK_IMPORTED_MODULE_0__["doNothing"],
    destroyed: _helpers_do_nothing__WEBPACK_IMPORTED_MODULE_0__["doNothing"]
};


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_71758__) {

"use strict";
__nested_webpack_require_71758__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_71758__.d(__webpack_exports__, "handleInPlace", function() { return handleInPlace; });
/* harmony import */ var _create_coment_node__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_71758__(31);
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_71758__(43);
/* harmony import */ var _handle_expression__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_71758__(34);



function handleInPlace(childs, option) {
    var _this = this;
    var of = option.attr.of;
    if (!of)
        return Object(_create_coment_node__WEBPACK_IMPORTED_MODULE_0__["createCommentNode"])();
    delete option.attr.of;
    var key = of.k;
    return _handle_expression__WEBPACK_IMPORTED_MODULE_2__["handleExpression"].call(this, function () {
        return _create_element__WEBPACK_IMPORTED_MODULE_1__["createElement"].call(_this, _this.resolve(key), childs, option);
    }, key ? [key] : []);
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_72843__) {

"use strict";
__nested_webpack_require_72843__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_72843__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _create_coment_node__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_72843__(31);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_72843__(5);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_72843__(44);
/* harmony import */ var _handle_attribute__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_72843__(37);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_72843__(1);
/* harmony import */ var _run_promises_in_sequence__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_72843__(32);
/* harmony import */ var _handle_directive__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_72843__(39);
/* harmony import */ var _handle_in_place__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_72843__(42);








function createNativeComponent(tag, htmlChilds, option) {
    var _this = this;
    switch (tag) {
        case "slot":
        case "target":
            if (!option.attr.name) {
                option.attr.name = {
                    v: _constant__WEBPACK_IMPORTED_MODULE_2__["defaultSlotName"]
                };
            }
    }
    var element = document.createElement(tag);
    htmlChilds.forEach(function (item) {
        element.appendChild(item);
    });
    _handle_attribute__WEBPACK_IMPORTED_MODULE_3__["handleAttribute"].call(this, element, option.attr, false);
    if (option.on) {
        var evListener_1 = {};
        var events = option.on;
        var _loop_1 = function (eventName) {
            var ev = events[eventName];
            var methods = [];
            ev.modifiers.forEach(function (item) {
                switch (item) {
                    case 'prevent':
                        methods.push(function (e) {
                            e.preventDefault();
                            return e;
                        });
                        break;
                    case 'stop':
                        methods.push(function (e) {
                            e.stopPropagation();
                            return e;
                        });
                        break;
                }
            });
            ev.handlers.forEach(function (item) {
                if (item != null) {
                    methods.push(item.bind(_this));
                }
                else {
                    new _utils__WEBPACK_IMPORTED_MODULE_4__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE"].InvalidEventHandler, {
                        ev: eventName,
                    }).throwPlain();
                }
            });
            if (eventName === "input" && !ev.isNative) {
                methods.unshift(function (e) {
                    return e.target.value;
                });
            }
            evListener_1[eventName] = methods.length > 1 ?
                function (e) {
                    Object(_run_promises_in_sequence__WEBPACK_IMPORTED_MODULE_5__["runPromisesInSequence"])(methods, e);
                } :
                function (e) {
                    methods[0].call(_this, e);
                };
            element.addEventListener(eventName, evListener_1[eventName], {
                capture: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isKeyExist"])(ev.option, 'capture'),
                once: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isKeyExist"])(ev.option, 'once'),
                passive: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isKeyExist"])(ev.option, 'passive'),
            });
        };
        for (var eventName in events) {
            _loop_1(eventName);
        }
        var onElDestroyed_1 = function () {
            element.removeEventListener(_enums__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_EVENT"].Destroy, onElDestroyed_1);
            for (var ev in evListener_1) {
                element.removeEventListener(ev, evListener_1[ev]);
            }
        };
        element.addEventListener(_enums__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_EVENT"].Destroy, onElDestroyed_1);
    }
    _handle_directive__WEBPACK_IMPORTED_MODULE_6__["handleDirective"].call(this, element, option.dir, false);
    return element;
}
var loadComponent = function (savedComponent) {
    return new Promise(function (resolve) {
        if (savedComponent instanceof Promise) {
            savedComponent.then(function (comp) {
                resolve(comp.default);
            });
        }
        else {
            resolve(savedComponent);
        }
    });
};
function createElement(tag, childs, option) {
    var _this = this;
    return new Promise(function (res, rej) {
        if (tag == null) {
            res(Object(_create_coment_node__WEBPACK_IMPORTED_MODULE_0__["createCommentNode"])());
        }
        if (!option.attr) {
            option.attr = {};
        }
        Promise.all(childs).then(function (htmlChilds) {
            if (_enums__WEBPACK_IMPORTED_MODULE_1__["HTML_TAG"][tag]) {
                res(createNativeComponent.call(_this, tag, htmlChilds, option));
                return;
            }
            var savedComponent = _this.children[tag] || _this['_app']['_components'][tag];
            if (savedComponent) {
                loadComponent(savedComponent).then(function (comp) {
                    var component = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createComponent"])(comp, _this['_app']);
                    var htmlAttributes = _utils__WEBPACK_IMPORTED_MODULE_4__["initComponent"].call(_this, component, option);
                    Object(_utils__WEBPACK_IMPORTED_MODULE_4__["executeRender"])(component, childs).then(function (_) {
                        var element = component.element;
                        var targetSlot = component.find("slot[name='default']") || (element.tagName.match(/slot/i) ? element : null);
                        if (targetSlot) {
                            htmlChilds.forEach(function (item) {
                                if (item.tagName === "TARGET") {
                                    var namedSlot = component.find("slot[name='" + item.getAttribute("name") + "']");
                                    if (namedSlot) {
                                        targetSlot = namedSlot;
                                    }
                                }
                                var targetSlotParent = targetSlot.parentElement;
                                if (targetSlotParent) {
                                    // nodeType -3 : TextNode
                                    if (item.nodeType === 3) {
                                        targetSlotParent.insertBefore(item, targetSlot.nextSibling);
                                    }
                                    else {
                                        item.childNodes.forEach(function (child) {
                                            targetSlotParent.insertBefore(child, targetSlot.nextSibling);
                                        });
                                    }
                                    targetSlotParent.removeChild(targetSlot);
                                }
                                else {
                                    element = component.element = item;
                                }
                            });
                        }
                        (htmlAttributes || []).forEach(function (item) {
                            switch (item.key) {
                                case 'class':
                                    item.value = (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAttribute"])(element, item.key) || '') + ' ' + item.value;
                                    break;
                                case 'style':
                                    item.value = (Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAttribute"])(element, item.key) || '') + item.value;
                            }
                            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["setAttribute"])(element, item.key, item.value);
                        });
                        res(element);
                    }).catch(rej);
                });
            }
            else if (tag === "in-place") {
                res(_handle_in_place__WEBPACK_IMPORTED_MODULE_7__["handleInPlace"].call(_this, childs, option));
            }
            else {
                rej(new _utils__WEBPACK_IMPORTED_MODULE_4__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE"].InvalidComponent, {
                    tag: tag
                }).throwPlain(true));
            }
        }).catch(rej);
    });
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_81692__) {

"use strict";
__nested_webpack_require_81692__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_81692__.d(__webpack_exports__, "defaultSlotName", function() { return defaultSlotName; });
// export const globalFormatter = {
//     toS: function (value) {
//         switch (typeof value) {
//             case 'string':
//                 return value;
//             case 'number':
//                 return (value as number).toString();
//             default:
//                 return JSON.stringify(value);
//         }
//     }
// }
// export const globalComponents = {}
// export const globalDirectives = {}
// export const plugins = [];
var defaultSlotName = "default";
// export const replacedBy = "replacedBy"


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_82506__) {

"use strict";
__nested_webpack_require_82506__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_82506__.d(__webpack_exports__, "clearAll", function() { return clearAll; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_82506__(5);

function clearAll() {
    var _this = this;
    // need to emit before clearing events
    this.emit(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Destroy).then(function (_) {
        _this['_eventBus'].destroy();
        _this['_watchBus'].destroy();
        if (_this['_ob']) {
            _this['_ob'].destroy();
        }
        _this.element = _this['_eventBus'] =
            _this['_ob'] = null;
    });
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_83285__) {

"use strict";
__nested_webpack_require_83285__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_83285__.d(__webpack_exports__, "Mahal", function() { return Mahal; });
/* harmony import */ var _abstracts_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_83285__(47);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_83285__(1);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_83285__(5);
/* harmony import */ var _ready_made__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_83285__(48);




var destroyedEvent = new window.CustomEvent(_enums__WEBPACK_IMPORTED_MODULE_2__["LIFECYCLE_EVENT"].Destroy);
function dispatchDestroyed(node) {
    node.dispatchEvent(destroyedEvent);
    node.childNodes.forEach(function (item) {
        dispatchDestroyed(item);
    });
}
var Mahal = /** @class */ (function () {
    function Mahal(component, element) {
        var _this = this;
        this.global = {};
        this.extend = {
            plugin: function (plugin, options) {
                var pluginInstane = new plugin();
                var apis = pluginInstane.setup(_this, options);
                if (apis && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(apis)) {
                    for (var api in apis) {
                        var apiValue = apis[api];
                        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getDataype"])(apiValue) === "function") {
                            _abstracts_component__WEBPACK_IMPORTED_MODULE_0__["Component"].prototype[api] = apiValue;
                        }
                    }
                }
                _this._plugins.push(plugin);
            },
            component: function (name, component) {
                _this._components[name] = component;
            },
            formatter: function (name, cb) {
                _this._formatter[name] = cb;
            },
            directive: function (name, directive) {
                _this._directives[name] = directive;
            },
            set renderer(val) {
                Mahal.createRenderer = val;
            }
        };
        this._plugins = [];
        this._components = {
            fragment: _ready_made__WEBPACK_IMPORTED_MODULE_3__["FragmentComponent"]
        };
        this._directives = {};
        this._formatter = {
            toS: function (value) {
                switch (typeof value) {
                    case 'string':
                        return value;
                    case 'number':
                        return value.toString();
                    default:
                        return JSON.stringify(value);
                }
            }
        };
        this.component = component;
        this.element = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isString"])(element) ? document.querySelector(element) : element;
        if (this.element == null) {
            var defaultId = 'mahal-app';
            var el = document.querySelector(defaultId);
            if (el) {
                el.innerHTML = "";
            }
            else {
                el = document.createElement('div');
                el.id = defaultId;
                document.body.appendChild(el);
            }
            this.element = el;
            if (true) {
                _utils__WEBPACK_IMPORTED_MODULE_1__["Logger"].warn("Provided element or element selector is not valid. Using 'mahal-app' as default");
            }
        }
        new window.MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.removedNodes) {
                    mutation.removedNodes.forEach(function (removedNode) {
                        dispatchDestroyed(removedNode);
                    });
                }
            });
        }).observe(this.element, {
            childList: true, subtree: true
        });
        // register global directive
        this.extend.directive("model", Object(_ready_made__WEBPACK_IMPORTED_MODULE_3__["createModelDirective"])("input", "value"));
        this.extend.directive("show", _ready_made__WEBPACK_IMPORTED_MODULE_3__["showDirective"]);
        this.extend.directive("class", _ready_made__WEBPACK_IMPORTED_MODULE_3__["classDirective"]);
        this.extend.directive("ref", _ready_made__WEBPACK_IMPORTED_MODULE_3__["refDirective"]);
        this.extend.directive("html", _ready_made__WEBPACK_IMPORTED_MODULE_3__["htmlDirective"]);
    }
    Mahal.prototype.create = function () {
        var _this = this;
        var componentInstance = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createComponent"])(this.component, this);
        _utils__WEBPACK_IMPORTED_MODULE_1__["initComponent"].call(this, componentInstance, {});
        return new Promise(function (res, rej) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["executeRender"])(componentInstance).then(function (el) {
                _this.element.appendChild(el);
                res(componentInstance);
            }).catch(rej);
        });
    };
    return Mahal;
}());



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_88450__) {

"use strict";
__nested_webpack_require_88450__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_88450__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_88450__(5);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_88450__(1);
var __spreadArrays = ( false) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


// do not rename this, this has been done to merge Component
// // tslint:disable-next-line
// export interface Component {
// }
var Component = /** @class */ (function () {
    function Component() {
        this.isMounted = false;
        this._eventBus = new _utils__WEBPACK_IMPORTED_MODULE_1__["EventBus"]();
        this._watchBus = new _utils__WEBPACK_IMPORTED_MODULE_1__["EventBus"]();
        this._timer = new _utils__WEBPACK_IMPORTED_MODULE_1__["Timer"]();
        this.on(_enums__WEBPACK_IMPORTED_MODULE_0__["LIFECYCLE_EVENT"].Create, function () {
        });
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNull"])(this.children)) {
            this.children = {};
        }
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNull"])(this._formatters)) {
            this._formatters = {};
        }
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNull"])(this._directive)) {
            this._directive = {};
        }
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNull"])(this._props)) {
            this._props = {};
        }
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isNull"])(this._computed)) {
            this._computed = {};
        }
    }
    Component.prototype.onInit = function () {
    };
    Component.prototype.__emitStateChange__ = function (key, newValue, oldValue) {
        this['_watchBus'].emit(key, newValue, oldValue);
    };
    Component.prototype.setState = function (key, newValue, oldValue) {
        this[key] = newValue;
        this.__emitStateChange__(key, newValue, oldValue);
    };
    Component.prototype.destroy = function () {
        this.element.parentNode.removeChild(this.element);
    };
    Component.prototype.watch = function (propName, cb) {
        this._watchBus.on(propName, cb);
        return this;
    };
    Component.prototype.unwatch = function (propName, cb) {
        this._watchBus.off(propName, cb);
        return this;
    };
    Component.prototype.on = function (event, cb) {
        this._eventBus.on(event, cb);
        return this;
    };
    Component.prototype.off = function (event, cb) {
        this._eventBus.off(event, cb);
    };
    Component.prototype.waitFor = function (eventName) {
        var _this = this;
        var eventCallback;
        return new Promise(function (res) {
            eventCallback = function () {
                res(null);
            };
            _this.on(eventName, eventCallback);
        }).then(function (_) {
            _this.off(eventName, eventCallback);
        });
    };
    Component.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return (_a = this._eventBus).emit.apply(_a, __spreadArrays([event], args));
    };
    Component.prototype.find = function (selector) {
        if (this.element.nodeType === 8)
            return;
        return this.element.querySelector(selector);
    };
    Component.prototype.findAll = function (selector) {
        return this.element.querySelectorAll(selector);
    };
    Object.defineProperty(Component.prototype, "outerHTML", {
        get: function () {
            return this.element.outerHTML;
        },
        enumerable: false,
        configurable: true
    });
    Component.prototype.format = function (formatterName, value) {
        var globalFormatter = this._app['_formatter'];
        if (globalFormatter[formatterName]) {
            return globalFormatter[formatterName](value);
        }
        else if (this._formatters[formatterName]) {
            return this._formatters[formatterName](value);
        }
        new _utils__WEBPACK_IMPORTED_MODULE_1__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidFormatter, {
            formatter: formatterName
        }).throwPlain();
    };
    Component.prototype.resolve = function (path) {
        var properties = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"])(path) ? path : path.split(".");
        return properties.reduce(function (prev, curr) { return prev && prev[curr]; }, this);
    };
    Object.defineProperty(Component.prototype, "global", {
        get: function () {
            return this._app.global;
        },
        enumerable: false,
        configurable: true
    });
    return Component;
}());



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_93622__) {

"use strict";
__nested_webpack_require_93622__.r(__webpack_exports__);
/* harmony import */ var _model_directive__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_93622__(49);
/* harmony reexport (safe) */ __nested_webpack_require_93622__.d(__webpack_exports__, "createModelDirective", function() { return _model_directive__WEBPACK_IMPORTED_MODULE_0__["createModelDirective"]; });

/* harmony import */ var _show_directive__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_93622__(50);
/* harmony reexport (safe) */ __nested_webpack_require_93622__.d(__webpack_exports__, "showDirective", function() { return _show_directive__WEBPACK_IMPORTED_MODULE_1__["showDirective"]; });

/* harmony import */ var _add_class_directive__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_93622__(51);
/* harmony reexport (safe) */ __nested_webpack_require_93622__.d(__webpack_exports__, "classDirective", function() { return _add_class_directive__WEBPACK_IMPORTED_MODULE_2__["classDirective"]; });

/* harmony import */ var _ref_directive__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_93622__(52);
/* harmony reexport (safe) */ __nested_webpack_require_93622__.d(__webpack_exports__, "refDirective", function() { return _ref_directive__WEBPACK_IMPORTED_MODULE_3__["refDirective"]; });

/* harmony import */ var _fragment_comp__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_93622__(53);
/* harmony reexport (safe) */ __nested_webpack_require_93622__.d(__webpack_exports__, "FragmentComponent", function() { return _fragment_comp__WEBPACK_IMPORTED_MODULE_4__["FragmentComponent"]; });

/* harmony import */ var _html_directive__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_93622__(54);
/* harmony reexport (safe) */ __nested_webpack_require_93622__.d(__webpack_exports__, "htmlDirective", function() { return _html_directive__WEBPACK_IMPORTED_MODULE_5__["htmlDirective"]; });









/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_95456__) {

"use strict";
__nested_webpack_require_95456__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_95456__.d(__webpack_exports__, "createModelDirective", function() { return createModelDirective; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_95456__(28);

// tslint:disable-next-line
function createModelDirective(eventName, propToUse) {
    return function modelDirective(el, binding) {
        var key = binding.props[0];
        _helpers__WEBPACK_IMPORTED_MODULE_0__["handleAttribute"].call(this, el, {
            value: {
                k: key,
                v: binding[propToUse][0]
            }
        }, binding.isComponent);
        if (binding.isComponent) {
            el.on(eventName, function (val) {
                binding.value = [val];
            });
        }
        else {
            el.oninput = function (event) {
                binding.value = [
                    event.target[propToUse]
                ];
            };
        }
    };
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_96558__) {

"use strict";
__nested_webpack_require_96558__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_96558__.d(__webpack_exports__, "showDirective", function() { return showDirective; });
var showDirective = function (el, binding) {
    var setElementShowHide = function () {
        var value = binding.value[0];
        el.style.display = value ? 'unset' : 'none';
    };
    setElementShowHide();
    return {
        valueUpdated: function () {
            setElementShowHide();
        }
    };
};


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_97151__) {

"use strict";
__nested_webpack_require_97151__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_97151__.d(__webpack_exports__, "classDirective", function() { return classDirective; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_97151__(1);

var classDirective = function (el, binding) {
    var applyClass = function (classes) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(classes)) {
            for (var name_1 in classes) {
                if (classes[name_1]) {
                    applyClass(name_1);
                }
                else {
                    el.classList.remove(name_1);
                }
            }
        }
        else {
            el.classList.add(classes);
        }
    };
    var addClass = function () {
        binding.value.forEach(function (value) {
            applyClass(value);
        });
    };
    addClass();
    return {
        valueUpdated: function () {
            addClass();
        }
    };
};


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_98252__) {

"use strict";
__nested_webpack_require_98252__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_98252__.d(__webpack_exports__, "refDirective", function() { return refDirective; });
// tslint:disable-next-line
var refDirective = function (el, binding) {
    var _this = this;
    var key = binding.props[0];
    this[key] = el;
    return {
        destroyed: function () {
            _this[key] = null;
        }
    };
};


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_98771__) {

"use strict";
__nested_webpack_require_98771__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_98771__.d(__webpack_exports__, "FragmentComponent", function() { return FragmentComponent; });
/* harmony import */ var _abstracts_component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_98771__(47);
var __extends = ( false) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FragmentComponent = /** @class */ (function (_super) {
    __extends(FragmentComponent, _super);
    function FragmentComponent() {
        var _this = _super.call(this) || this;
        _this.template = "<slot></slot>";
        return _this;
    }
    FragmentComponent.prototype.render = function (renderer) {
        var ctx = this;
        var ce = renderer.createElement;
        return ce.call(ctx, 'slot', [], {});
    };
    return FragmentComponent;
}(_abstracts_component__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_100288__) {

"use strict";
__nested_webpack_require_100288__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_100288__.d(__webpack_exports__, "htmlDirective", function() { return htmlDirective; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_100288__(28);

// tslint:disable-next-line
function htmlDirective(el, binding) {
    var _this = this;
    if (binding.isComponent)
        return;
    var addClass = function () {
        el.innerHTML = binding.value[0] || '';
        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["emitUpdate"])(_this);
    };
    addClass();
    return {
        valueUpdated: function () {
            addClass();
        }
    };
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_101061__) {

"use strict";
__nested_webpack_require_101061__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_101061__.d(__webpack_exports__, "initComponent", function() { return initComponent; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_101061__(1);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_101061__(5);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_101061__(28);



function initComponent(component, option) {
    var _this = this;
    var htmlAttributes = _helpers__WEBPACK_IMPORTED_MODULE_2__["handleAttribute"].call(this, component, option.attr, true);
    _helpers__WEBPACK_IMPORTED_MODULE_2__["handleDirective"].call(this, component, option.dir, true);
    if (option.on) {
        var events = option.on;
        var _loop_1 = function (eventName) {
            var ev = events[eventName];
            var methods = [];
            ev.handlers.forEach(function (item) {
                if (item != null) {
                    methods.push(item.bind(_this));
                }
                else {
                    new _utils__WEBPACK_IMPORTED_MODULE_0__["Logger"](_enums__WEBPACK_IMPORTED_MODULE_1__["ERROR_TYPE"].InvalidEventHandler, {
                        eventName: eventName,
                    }).logPlainError();
                }
            });
            component.on(eventName, function (args) {
                Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["runPromisesInSequence"])(methods, args);
            });
        };
        for (var eventName in events) {
            _loop_1(eventName);
        }
    }
    var computed = component['_computed'];
    var _loop_2 = function (key) {
        var data = computed[key];
        var computedValue = data.fn.call(component);
        Object.defineProperty(component, key, {
            get: function () {
                return computedValue;
            },
            set: function (newValue) {
                computedValue = newValue;
            }
        });
        data.args.forEach(function (arg) {
            component.watch(arg, function () {
                var newValue = data.fn.call(component);
                component.setState(key, newValue, computedValue);
                computedValue = newValue;
            });
        });
    };
    for (var key in computed) {
        _loop_2(key);
    }
    // attachGetterSetter(component);
    component.emit(_enums__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_EVENT"].Create);
    component.on(_enums__WEBPACK_IMPORTED_MODULE_1__["LIFECYCLE_EVENT"].Destroy, function () {
        component = null;
    });
    return htmlAttributes;
}


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_103812__) {

"use strict";
__nested_webpack_require_103812__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_103812__.d(__webpack_exports__, "Timer", function() { return Timer; });
var Timer = /** @class */ (function () {
    function Timer() {
    }
    Timer.prototype.timeout = function (delay) {
        return new Promise(function (res) {
            setTimeout(res, delay || 0);
        });
    };
    Timer.prototype.throttle = function (fn, delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        if (this.throttleTimer)
            return;
        this.throttleTimer = setTimeout(function () {
            _this.throttleTimer = null;
            fn();
        }, delay);
    };
    Timer.prototype.debounce = function (fn, delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        clearTimeout(this.throttleTimer);
        this.throttleTimer = setTimeout(function () {
            _this.throttleTimer = null;
            fn();
        }, delay);
    };
    return Timer;
}());



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_104942__) {

"use strict";
__nested_webpack_require_104942__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_104942__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_104942__(28);

var createComponent = function (componentConstructor, app) {
    var component = new componentConstructor();
    var keys = Object.keys(component['_props']).concat(component['_reactives'] || []);
    component['_app'] = app;
    component = new _helpers__WEBPACK_IMPORTED_MODULE_0__["Observer"](component['__emitStateChange__'].bind(component)).
        create(component, keys);
    component['_eventBus']['_ctx'] = component;
    component['_watchBus']['_ctx'] = component;
    component.onInit();
    return component;
};


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_105839__) {

"use strict";
__nested_webpack_require_105839__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_105839__.d(__webpack_exports__, "hashifyArray", function() { return hashifyArray; });
var hashifyArray = function (input) {
    var obj = {};
    input.forEach(function (item) {
        obj[item] = true;
    });
    return obj;
};


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_106260__) {

"use strict";
__nested_webpack_require_106260__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_106260__(47);
/* harmony reexport (safe) */ __nested_webpack_require_106260__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_106260__(60);
/* harmony reexport (safe) */ __nested_webpack_require_106260__.d(__webpack_exports__, "Plugin", function() { return _plugin__WEBPACK_IMPORTED_MODULE_1__["Plugin"]; });





/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_106912__) {

"use strict";
__nested_webpack_require_106912__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_106912__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
var Plugin = /** @class */ (function () {
    function Plugin() {
    }
    return Plugin;
}());



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_107274__) {

"use strict";
__nested_webpack_require_107274__.r(__webpack_exports__);
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_107274__(62);
/* harmony reexport (safe) */ __nested_webpack_require_107274__.d(__webpack_exports__, "Template", function() { return _template__WEBPACK_IMPORTED_MODULE_0__["Template"]; });

/* harmony import */ var _prop__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_107274__(63);
/* harmony reexport (safe) */ __nested_webpack_require_107274__.d(__webpack_exports__, "Prop", function() { return _prop__WEBPACK_IMPORTED_MODULE_1__["Prop"]; });

/* harmony import */ var _children__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_107274__(64);
/* harmony reexport (safe) */ __nested_webpack_require_107274__.d(__webpack_exports__, "Children", function() { return _children__WEBPACK_IMPORTED_MODULE_2__["Children"]; });

/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_107274__(65);
/* harmony reexport (safe) */ __nested_webpack_require_107274__.d(__webpack_exports__, "Formatter", function() { return _formatter__WEBPACK_IMPORTED_MODULE_3__["Formatter"]; });

/* harmony import */ var _reactive__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_107274__(66);
/* harmony reexport (safe) */ __nested_webpack_require_107274__.d(__webpack_exports__, "Reactive", function() { return _reactive__WEBPACK_IMPORTED_MODULE_4__["Reactive"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_107274__(67);
/* harmony reexport (safe) */ __nested_webpack_require_107274__.d(__webpack_exports__, "Directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_5__["Directive"]; });

/* harmony import */ var _computed__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_107274__(68);
/* harmony reexport (safe) */ __nested_webpack_require_107274__.d(__webpack_exports__, "Computed", function() { return _computed__WEBPACK_IMPORTED_MODULE_6__["Computed"]; });










/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_109192__) {

"use strict";
__nested_webpack_require_109192__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_109192__.d(__webpack_exports__, "Template", function() { return Template; });
var __extends = ( false) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// tslint:disable-next-line
var Template = function (stringTemplate) {
    // tslint:disable-next-line
    return function Template(constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.template = stringTemplate;
                return _this;
            }
            return class_1;
        }(constructor));
    };
};


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_110568__) {

"use strict";
__nested_webpack_require_110568__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_110568__.d(__webpack_exports__, "Prop", function() { return Prop; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_110568__(5);

// tslint:disable-next-line
var Prop = function (options) {
    return function (target, key) {
        if (!target._props) {
            target._props = {};
        }
        if (typeof options === _enums__WEBPACK_IMPORTED_MODULE_0__["DATA_TYPE"].Function) {
            var name_1 = options.name;
            if (_enums__WEBPACK_IMPORTED_MODULE_0__["DATA_TYPE"][name_1]) {
                options = name_1.toLowerCase();
            }
        }
        if (options && !options.type) {
            options = {
                type: options
            };
        }
        target._props[key] = options || {};
    };
};


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_111536__) {

"use strict";
__nested_webpack_require_111536__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_111536__.d(__webpack_exports__, "Children", function() { return Children; });
var __extends = ( false) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// tslint:disable-next-line
var Children = function (value) {
    // tslint:disable-next-line
    return function Template(constructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.children = value;
                return _this;
            }
            return class_1;
        }(constructor));
    };
};


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_112894__) {

"use strict";
__nested_webpack_require_112894__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_112894__.d(__webpack_exports__, "Formatter", function() { return Formatter; });
// tslint:disable-next-line
var Formatter = function (name) {
    return (function (target, methodName, descriptor) {
        if (!target._formatters) {
            target._formatters = {};
        }
        target._formatters[name || methodName] = target[methodName];
    });
};


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_113444__) {

"use strict";
__nested_webpack_require_113444__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_113444__.d(__webpack_exports__, "Reactive", function() { return Reactive; });
// tslint:disable-next-line
var Reactive = function (target, key) {
    if (!target._reactives) {
        target._reactives = [];
    }
    target._reactives.push(key);
};


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_113884__) {

"use strict";
__nested_webpack_require_113884__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_113884__.d(__webpack_exports__, "Directive", function() { return Directive; });
// tslint:disable-next-line
var Directive = function (name) {
    return (function (target, methodName, descriptor) {
        if (!target._directive) {
            target._directive = {};
        }
        target._directive[name || methodName] = target[methodName];
    });
};


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __nested_webpack_require_114431__) {

"use strict";
__nested_webpack_require_114431__.r(__webpack_exports__);
/* harmony export (binding) */ __nested_webpack_require_114431__.d(__webpack_exports__, "Computed", function() { return Computed; });
// tslint:disable-next-line
var Computed = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (function (target, methodName, descriptor) {
        if (!target._computed) {
            target._computed = {};
        }
        target._computed[methodName] = { args: args, fn: descriptor.value || descriptor.get };
    });
};


/***/ })
/******/ ]);
//# sourceMappingURL=mahal.commonjs2.js.map

/***/ }),

/***/ 427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

if (true) {
    module.exports = __webpack_require__(786);
}
else {}


/***/ })

}]);