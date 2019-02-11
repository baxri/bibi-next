module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Socials; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Socials =
/*#__PURE__*/
function (_Component) {
  _inherits(Socials, _Component);

  function Socials() {
    _classCallCheck(this, Socials);

    return _possibleConstructorReturn(this, _getPrototypeOf(Socials).apply(this, arguments));
  }

  _createClass(Socials, [{
    key: "render",
    value: function render() {
      var align = this.props.align;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3121736265" + " " + "ocials d-flex justify-content-".concat(align)
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.facebook.com/george.bibilashvili",
        target: "_blank",
        id: "download-button",
        className: "jsx-3121736265" + " " + "btn btn-light"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3121736265" + " " + "fa fa-facebook fa-lg"
      })), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://github.com/baxri",
        target: "_blank",
        id: "download-button",
        className: "jsx-3121736265" + " " + "btn btn-light"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3121736265" + " " + "fa fa-github fa-lg"
      })), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://twitter.com/WbibiG",
        target: "_blank",
        id: "download-button",
        className: "jsx-3121736265" + " " + "btn btn-light"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3121736265" + " " + "fa fa-twitter fa-lg"
      })), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/giorgi-bibilashvili/",
        target: "_blank",
        id: "download-button",
        className: "jsx-3121736265" + " " + "btn btn-light"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3121736265" + " " + "fa fa-linkedin fa-lg"
      })), "\xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://www.resume.com/share/bibi",
        target: "_blank",
        id: "download-button",
        className: "jsx-3121736265" + " " + "btn btn-light"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3121736265" + " " + "fa fa-download fa-lg"
      }), " \xA0\xA0 RESUME"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3121736265",
        css: [".socials.jsx-3121736265{border:1px solid red;}"]
      }));
    }
  }]);

  return Socials;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(4);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./components/Socials.js
var Socials = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Contact.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Contact_Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        id: "contact"
      }, external_react_default.a.createElement("section", {
        className: "contact-area section-gap"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("br", null), external_react_default.a.createElement(Socials["a" /* default */], {
        align: "center"
      }), external_react_default.a.createElement("div", {
        className: "row mt-80"
      }, external_react_default.a.createElement("div", {
        className: "col-lg-4 col-md-4"
      }, external_react_default.a.createElement("div", {
        className: "contact-box"
      }, external_react_default.a.createElement("h4", null, "+995 598 602 084"))), external_react_default.a.createElement("div", {
        className: "col-lg-4 col-md-4"
      }, external_react_default.a.createElement("div", {
        className: "contact-box"
      }, external_react_default.a.createElement("h4", null, "giorgi.bibilashvili89@gmail.com"))), external_react_default.a.createElement("div", {
        className: "col-lg-4 col-md-4"
      }, external_react_default.a.createElement("div", {
        className: "contact-box"
      }, external_react_default.a.createElement("h4", null, "www.bibi.ge")))), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-lg-12 text-center"
      }, external_react_default.a.createElement("a", {
        href: "mailto:giorgi.bibilashvili89@gmail.com",
        className: "primary-btn mt-50",
        "data-text": "Hire Me"
      }, external_react_default.a.createElement("span", null, "H"), external_react_default.a.createElement("span", null, "i"), external_react_default.a.createElement("span", null, "r"), external_react_default.a.createElement("span", null, "e"), external_react_default.a.createElement("span", null, " "), external_react_default.a.createElement("span", null, "M"), external_react_default.a.createElement("span", null, "e")))))));
    }
  }]);

  return Contact;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Header.js


function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }





var Header_Header =
/*#__PURE__*/
function (_Component) {
  Header_inherits(Header, _Component);

  function Header() {
    Header_classCallCheck(this, Header);

    return Header_possibleConstructorReturn(this, Header_getPrototypeOf(Header).apply(this, arguments));
  }

  Header_createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pathname = _this$props.router.pathname,
          children = _this$props.children;
      return external_react_default.a.createElement("header", {
        id: "header",
        className: "jsx-1813962508"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1813962508" + " " + "container  main-menu"
      }, external_react_default.a.createElement("div", {
        className: "jsx-1813962508" + " " + "header-wrapper row align-items-center d-flex justify-content-between justify-content-lg-start"
      }, external_react_default.a.createElement("div", {
        id: "logo d-flex ",
        className: "jsx-1813962508"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-1813962508"
      }, external_react_default.a.createElement("h1", {
        className: "jsx-1813962508" + " " + "pl-3"
      }, external_react_default.a.createElement("span", {
        className: "jsx-1813962508" + " " + "logo-b"
      }, "B"), "DDD")))), external_react_default.a.createElement("nav", {
        className: "jsx-1813962508" + " " + "navbar navbar-expand-lg navbar-light d-flex"
      }, external_react_default.a.createElement("button", {
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarNav",
        "aria-controls": "navbarNav",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        className: "jsx-1813962508" + " " + "navbar-toggler"
      }, external_react_default.a.createElement("span", {
        className: "jsx-1813962508" + " " + "navbar-toggler-icon"
      })), external_react_default.a.createElement("div", {
        className: "jsx-1813962508" + " " + "collapse navbar-collapse"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-1813962508" + " " + "navbar-nav"
      }, external_react_default.a.createElement("li", {
        className: "jsx-1813962508" + " " + "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-1813962508" + " " + ((pathname === '/' ? 'nav-link active' : 'nav-link') || "")
      }, "Home "))), external_react_default.a.createElement("li", {
        className: "jsx-1813962508" + " " + "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/about"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-1813962508" + " " + ((pathname === '/about' ? 'nav-link active' : 'nav-link') || "")
      }, "about "))), external_react_default.a.createElement("li", {
        className: "jsx-1813962508" + " " + "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/job-history"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-1813962508" + " " + ((pathname === '/job-history' ? 'nav-link active' : 'nav-link') || "")
      }, "job-history"))), external_react_default.a.createElement("li", {
        className: "jsx-1813962508" + " " + "nav-item"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/latest-works"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-1813962508" + " " + ((pathname === '/latest-works' ? 'nav-link active' : 'nav-link') || "")
      }, "latest-works")))))))), external_react_default.a.createElement("div", {
        id: "navbarNav",
        className: "jsx-1813962508" + " " + "hidden-menu collapse navbar-collapse container-fluid"
      }, external_react_default.a.createElement("ul", {
        className: "jsx-1813962508" + " " + "hidden-menu-navbar navbar-nav d-flex justify-content-center"
      }, external_react_default.a.createElement("li", {
        className: "jsx-1813962508" + " " + "d-flex hidden-menu-navbar-item nav-item justify-content-center"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-1813962508" + " " + ((pathname === '/' ? 'nav-link active' : 'nav-link') || "")
      }, "Home "))), external_react_default.a.createElement("li", {
        className: "jsx-1813962508" + " " + "d-flex hidden-menu-navbar-item nav-item justify-content-center"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/about"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-1813962508" + " " + ((pathname === '/about' ? 'nav-link active' : 'nav-link') || "")
      }, "about "))), external_react_default.a.createElement("li", {
        className: "jsx-1813962508" + " " + "d-flex hidden-menu-navbar-item nav-item justify-content-center"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/job-history"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-1813962508" + " " + ((pathname === '/job-history' ? 'nav-link active' : 'nav-link') || "")
      }, "job-history"))), external_react_default.a.createElement("li", {
        className: "jsx-1813962508" + " " + "d-flex hidden-menu-navbar-item nav-item justify-content-center"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/latest-works"
      }, external_react_default.a.createElement("a", {
        href: "#",
        className: "jsx-1813962508" + " " + ((pathname === '/latest-works' ? 'nav-link active' : 'nav-link') || "")
      }, "latest-works"))))), external_react_default.a.createElement(style_default.a, {
        styleId: "1813962508",
        css: [".logo-b{color:#e45447;}", ".navbar{background-color:white !important;margin-left:70px;}", ".nav-link{margin-left:20px;font-family:\"Poppins\",sans-serif !important;padding:0px;color:#222222;font-weight:500;font-size:16px;text-transform:capitalize;outline:none;}", ".hidden-menu{background:white;}", "@media only screen and (max-width:991px){#header{background:white;}}"]
      }));
    }
  }]);

  return Header;
}(external_react_["Component"]);

/* harmony default export */ var components_Header = (Object(router_["withRouter"])(Header_Header));
// CONCATENATED MODULE: ./components/GoodAt.js


function GoodAt_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoodAt_typeof = function _typeof(obj) { return typeof obj; }; } else { GoodAt_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoodAt_typeof(obj); }

function GoodAt_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoodAt_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoodAt_createClass(Constructor, protoProps, staticProps) { if (protoProps) GoodAt_defineProperties(Constructor.prototype, protoProps); if (staticProps) GoodAt_defineProperties(Constructor, staticProps); return Constructor; }

function GoodAt_possibleConstructorReturn(self, call) { if (call && (GoodAt_typeof(call) === "object" || typeof call === "function")) { return call; } return GoodAt_assertThisInitialized(self); }

function GoodAt_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GoodAt_getPrototypeOf(o) { GoodAt_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GoodAt_getPrototypeOf(o); }

function GoodAt_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GoodAt_setPrototypeOf(subClass, superClass); }

function GoodAt_setPrototypeOf(o, p) { GoodAt_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GoodAt_setPrototypeOf(o, p); }



var GoodAt_GoodAt =
/*#__PURE__*/
function (_Component) {
  GoodAt_inherits(GoodAt, _Component);

  function GoodAt() {
    GoodAt_classCallCheck(this, GoodAt);

    return GoodAt_possibleConstructorReturn(this, GoodAt_getPrototypeOf(GoodAt).apply(this, arguments));
  }

  GoodAt_createClass(GoodAt, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("section", {
        id: "i-am-goot-at",
        className: "jsx-4047046679" + " " + "service-area section-gap"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4047046679" + " " + "container"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4047046679" + " " + "row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4047046679" + " " + "col-lg-12"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4047046679" + " " + "section-title"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-4047046679"
      }, "I am good at"), external_react_default.a.createElement("p", {
        className: "jsx-4047046679"
      }, "I tried a bunch of technologies to build mobile and web applications and make my clients happy but for now, my current stack is:")))), external_react_default.a.createElement("div", {
        className: "jsx-4047046679" + " " + "row"
      }, external_react_default.a.createElement("div", {
        className: "jsx-4047046679" + " " + "col-lg-3 col-md-6"
      }, external_react_default.a.createElement("div", {
        "data-wow-duration": "1s",
        className: "jsx-4047046679" + " " + "single-service wow fadeInUp"
      }, external_react_default.a.createElement("span", {
        className: "jsx-4047046679" + " " + "lnr lnr-screen"
      }), external_react_default.a.createElement("h4", {
        className: "jsx-4047046679"
      }, external_react_default.a.createElement("span", {
        className: "jsx-4047046679"
      }, "Web"), " React/Next.js"), external_react_default.a.createElement("p", {
        className: "jsx-4047046679"
      }, "My favorite stack for building web applications are PHP7+, Laravel, Nodejs, Next.js, Reactjs."), external_react_default.a.createElement("br", {
        className: "jsx-4047046679"
      }))), external_react_default.a.createElement("div", {
        className: "jsx-4047046679" + " " + "col-lg-3 col-md-6"
      }, external_react_default.a.createElement("div", {
        "data-wow-duration": "1s",
        "data-wow-delay": "0.2s",
        className: "jsx-4047046679" + " " + "single-service wow fadeInUp"
      }, external_react_default.a.createElement("span", {
        className: "jsx-4047046679" + " " + "lnr lnr-laptop-phone"
      }), external_react_default.a.createElement("h4", {
        className: "jsx-4047046679"
      }, external_react_default.a.createElement("span", {
        className: "jsx-4047046679"
      }, "Mobile"), " React Native"), external_react_default.a.createElement("p", {
        className: "jsx-4047046679"
      }, "For building mobile applications I am using React Native, Redux, GraphQL and Laravel or Nodejs for API."))), external_react_default.a.createElement("div", {
        className: "jsx-4047046679" + " " + "col-lg-3 col-md-6"
      }, external_react_default.a.createElement("div", {
        "data-wow-duration": "1s",
        "data-wow-delay": "0.4s",
        className: "jsx-4047046679" + " " + "single-service wow fadeInUp"
      }, external_react_default.a.createElement("span", {
        className: "jsx-4047046679" + " " + "lnr lnr-database"
      }), external_react_default.a.createElement("h4", {
        className: "jsx-4047046679"
      }, external_react_default.a.createElement("span", {
        className: "jsx-4047046679"
      }, "Database"), "Mysql/MongoDB"), external_react_default.a.createElement("p", {
        className: "jsx-4047046679"
      }, "My favorites and mostly used databases are MySQL and MongoDB"), external_react_default.a.createElement("br", {
        className: "jsx-4047046679"
      }), external_react_default.a.createElement("br", {
        className: "jsx-4047046679"
      }))), external_react_default.a.createElement("div", {
        className: "jsx-4047046679" + " " + "col-lg-3 col-md-6"
      }, external_react_default.a.createElement("div", {
        "data-wow-duration": "1s",
        "data-wow-delay": "0.6s",
        className: "jsx-4047046679" + " " + "single-service wow fadeInUp"
      }, external_react_default.a.createElement("span", {
        className: "jsx-4047046679" + " " + "lnr lnr-chart-bars"
      }), external_react_default.a.createElement("h4", {
        className: "jsx-4047046679"
      }, external_react_default.a.createElement("span", {
        className: "jsx-4047046679"
      }, "Server Api"), " Laravel/Nodejs"), external_react_default.a.createElement("p", {
        className: "jsx-4047046679"
      }, "Most of the applications require server-side API, so for the microservices I am using PHP  Laravel framework and Nodejs "))))), external_react_default.a.createElement(style_default.a, {
        styleId: "4047046679",
        css: []
      }));
    }
  }]);

  return GoodAt;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./layouts/Layout.js


function Layout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layout_typeof = function _typeof(obj) { return typeof obj; }; } else { Layout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layout_typeof(obj); }

function Layout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Layout_createClass(Constructor, protoProps, staticProps) { if (protoProps) Layout_defineProperties(Constructor.prototype, protoProps); if (staticProps) Layout_defineProperties(Constructor, staticProps); return Constructor; }

function Layout_possibleConstructorReturn(self, call) { if (call && (Layout_typeof(call) === "object" || typeof call === "function")) { return call; } return Layout_assertThisInitialized(self); }

function Layout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Layout_getPrototypeOf(o) { Layout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Layout_getPrototypeOf(o); }

function Layout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Layout_setPrototypeOf(subClass, superClass); }

function Layout_setPrototypeOf(o, p) { Layout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Layout_setPrototypeOf(o, p); }







external_nprogress_default.a.configure({
  showSpinner: false
});

router_default.a.onRouteChangeStart = function (url) {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = function () {
  return external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = function () {
  return external_nprogress_default.a.done();
};

var Layout_Layout =
/*#__PURE__*/
function (_Component) {
  Layout_inherits(Layout, _Component);

  function Layout() {
    Layout_classCallCheck(this, Layout);

    return Layout_possibleConstructorReturn(this, Layout_getPrototypeOf(Layout).apply(this, arguments));
  }

  Layout_createClass(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return external_react_default.a.createElement("div", {
        className: "jsx-3148670951"
      }, external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement("div", {
        className: "jsx-3148670951" + " " + "page"
      }, children), external_react_default.a.createElement(GoodAt_GoodAt, null), external_react_default.a.createElement(Contact_Contact, null), external_react_default.a.createElement(style_default.a, {
        styleId: "3148670951",
        css: []
      }));
    }
  }]);

  return Layout;
}(external_react_["Component"]);

/* harmony default export */ var layouts_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var About =
/*#__PURE__*/
function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, _getPrototypeOf(About).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "about-area section-gap",
        id: "about-me"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row align-items-center justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 about-left"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/img/about-img.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-5 col-md-12 about-right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "about myselt")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb-50 wow fadeIn",
        "data-wow-duration": ".8s"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "For the past 8 years, I've been building server-side applications (API), client-side webs, developing application databases, for businesses. I've done this as an employee, and a freelancer. I've also worked on some super-secret projects and big brands. I'd tell you, but then I'd have to kill you..., My favorite stacks are NGINX, PHP7+, MYSQL, LARAVEL, NODEJS REACTJS, REACTNATIVE."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "I do it because it's fun and, apparently, I'm pretty good at it.")))))));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })
/******/ ]);