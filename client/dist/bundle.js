/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/alisonsipos/Desktop/projects/product-detail/package.json: Error while parsing JSON - Unexpected token : in JSON at position 1285\\n    at JSON.parse (<anonymous>)\\n    at /Users/alisonsipos/Desktop/projects/product-detail/node_modules/@babel/core/lib/config/files/package.js:57:20\\n    at /Users/alisonsipos/Desktop/projects/product-detail/node_modules/@babel/core/lib/config/files/utils.js:36:12\\n    at Generator.next (<anonymous>)\\n    at Function.<anonymous> (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/@babel/core/lib/gensync-utils/async.js:26:3)\\n    at Generator.next (<anonymous>)\\n    at evaluateSync (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/gensync/index.js:244:28)\\n    at Function.sync (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/gensync/index.js:84:14)\\n    at sync (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/@babel/core/lib/gensync-utils/async.js:66:25)\\n    at sync (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/gensync/index.js:177:19)\\n    at onFirstPause (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/gensync/index.js:204:19)\\n    at Generator.next (<anonymous>)\\n    at cachedFunction (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/@babel/core/lib/config/caching.js:68:46)\\n    at cachedFunction.next (<anonymous>)\\n    at findPackageData (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/@babel/core/lib/config/files/package.js:33:18)\\n    at findPackageData.next (<anonymous>)\\n    at buildRootChain (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/@babel/core/lib/config/config-chain.js:112:92)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/@babel/core/lib/config/partial.js:99:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at Function.<anonymous> (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/@babel/core/lib/config/partial.js:125:25)\\n    at Generator.next (<anonymous>)\\n    at evaluateSync (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/gensync/index.js:244:28)\\n    at Function.sync (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/gensync/index.js:84:14)\\n    at Object.<anonymous> (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/@babel/core/lib/config/index.js:43:61)\\n    at Object.<anonymous> (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/babel-loader/lib/index.js:151:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/Users/alisonsipos/Desktop/projects/product-detail/node_modules/babel-loader/lib/index.js:5:194)\\n    at /Users/alisonsipos/Desktop/projects/product-detail/node_modules/babel-loader/lib/index.js:5:364\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });