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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/dropdown.js":
/*!***************************************!*\
  !*** ./src/js/components/dropdown.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  document.addEventListener('click', e => {
    if (!e.target.classList.contains('dropdown__btn')) {
      closeDropdowns();
      return;
    }

    const parent = e.target.parentNode;
    parent.classList.toggle('active');
  });

  function closeDropdowns() {
    const elements = document.querySelectorAll('.dropdown.active');

    for (const element of elements) {
      element.classList.remove('active');
    }
  }
})();

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  document.addEventListener('DOMContentLoaded', updateBodyClass);
  window.addEventListener('scroll', updateBodyClass);
  window.addEventListener('resize', updateBodyClass);

  function updateBodyClass() {
    if (isScrolled()) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  }

  function isScrolled() {
    return window.pageYOffset > 50;
  }
})();

/***/ }),

/***/ "./src/js/components/main-menu.js":
/*!****************************************!*\
  !*** ./src/js/components/main-menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.querySelector('.main-menu');
    const mainMenuContent = document.querySelector('.main-menu__content');
    const menuButton = document.querySelector('.hamburger-menu');

    if (!mainMenu || !mainMenuContent || !menuButton) {
      console.error('Cannot find main menu, main menu content or menu button node');
      return;
    }

    menuButton.addEventListener('click', showMainMenu);
    mainMenu.addEventListener('click', e => {
      if (e.target != mainMenu) {
        return;
      }

      hideMainMenu();
    });

    function showMainMenu() {
      mainMenu.classList.add('active');
    }

    function hideMainMenu() {
      mainMenu.classList.remove('active');
    }
  });
})();

/***/ }),

/***/ "./src/js/site.js":
/*!************************!*\
  !*** ./src/js/site.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-menu */ "./src/js/components/main-menu.js");
/* harmony import */ var _components_main_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_main_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/components/dropdown.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/scss/site.scss":
/*!****************************!*\
  !*** ./src/scss/site.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/scss/site.scss ./src/js/site.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scss/site.scss */"./src/scss/site.scss");
module.exports = __webpack_require__(/*! ./src/js/site.js */"./src/js/site.js");


/***/ })

/******/ });
//# sourceMappingURL=site.js.map