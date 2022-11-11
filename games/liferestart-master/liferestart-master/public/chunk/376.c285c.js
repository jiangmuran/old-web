"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[376],{5376:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CyberAchievementPopup)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5666);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8309);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8674);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3948);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2165);\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar CyberAchievementPopup = /*#__PURE__*/function (_ui$view$CyberTheme$C) {\n  _inherits(CyberAchievementPopup, _ui$view$CyberTheme$C);\n\n  var _super = _createSuper(CyberAchievementPopup);\n\n  function CyberAchievementPopup() {\n    _classCallCheck(this, CyberAchievementPopup);\n\n    return _super.call(this);\n  }\n\n  _createClass(CyberAchievementPopup, [{\n    key: "popup",\n    value: function () {\n      var _popup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, parent) {\n        var achievement;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                achievement = _ref.achievement;\n                Laya.Tween.clearAll(this);\n                Laya.Tween.clearAll(this.boxBg);\n                this.alpha = 0.8;\n                this.labName.text = achievement.name;\n                this.labName.color = $ui.common.grade[achievement.grade];\n                this.x = -this.width;\n                this.boxBg.x = this.boxBg.width;\n                _context.next = 10;\n                return Promise.all([Laya.promises.Tween.to(this, {\n                  x: 0\n                }, 300, Laya.Ease.strongOut), Laya.promises.Tween.to(this.boxBg, {\n                  x: 0\n                }, 300, Laya.Ease.strongOut, 50)]);\n\n              case 10:\n                _context.next = 12;\n                return Laya.promises.Tween.to(this, {\n                  alpha: 0\n                }, 3000, Laya.Ease.strongIn);\n\n              case 12:\n              case "end":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function popup(_x, _x2) {\n        return _popup.apply(this, arguments);\n      }\n\n      return popup;\n    }()\n  }]);\n\n  return CyberAchievementPopup;\n}(ui.view.CyberTheme.CyberAchievementPopupUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTM3Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFDQTtBQUFBOztBQUFBO0FBRUE7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFBQTs7QUFWQTtBQUFBO0FBQUE7QUFZQTtBQUFBOztBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQUxBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlmZV9yZXN0YXJ0Ly4vc3JjL3VpL3RoZW1lcy9jeWJlci9wb3B1cC9hY2hpZXZlbWVudFBvcHVwLmpzPzdkYmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3liZXJBY2hpZXZlbWVudFBvcHVwIGV4dGVuZHMgdWkudmlldy5DeWJlclRoZW1lLkN5YmVyQWNoaWV2ZW1lbnRQb3B1cFVJIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcG9wdXAoe2FjaGlldmVtZW50fSwgcGFyZW50KSB7XHJcbiAgICAgICAgTGF5YS5Ud2Vlbi5jbGVhckFsbCh0aGlzKTtcclxuICAgICAgICBMYXlhLlR3ZWVuLmNsZWFyQWxsKHRoaXMuYm94QmcpO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjg7XHJcbiAgICAgICAgdGhpcy5sYWJOYW1lLnRleHQgPSBhY2hpZXZlbWVudC5uYW1lO1xyXG4gICAgICAgIHRoaXMubGFiTmFtZS5jb2xvciA9ICR1aS5jb21tb24uZ3JhZGVbYWNoaWV2ZW1lbnQuZ3JhZGVdO1xyXG4gICAgICAgIHRoaXMueCA9IC0gdGhpcy53aWR0aDtcclxuICAgICAgICB0aGlzLmJveEJnLnggPSB0aGlzLmJveEJnLndpZHRoO1xyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgTGF5YS5wcm9taXNlcy5Ud2Vlbi50byh0aGlzLCB7eDogMH0sIDMwMCwgTGF5YS5FYXNlLnN0cm9uZ091dCksXHJcbiAgICAgICAgICAgIExheWEucHJvbWlzZXMuVHdlZW4udG8odGhpcy5ib3hCZywge3g6IDB9LCAzMDAsIExheWEuRWFzZS5zdHJvbmdPdXQsIDUwKSxcclxuICAgICAgICBdKVxyXG4gICAgICAgIGF3YWl0IExheWEucHJvbWlzZXMuVHdlZW4udG8odGhpcywge2FscGhhOiAwfSwgMzAwMCwgTGF5YS5FYXNlLnN0cm9uZ0luKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5376\n')}}]);