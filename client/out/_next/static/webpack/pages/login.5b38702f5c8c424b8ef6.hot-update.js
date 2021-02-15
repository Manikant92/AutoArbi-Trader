webpackHotUpdate_N_E("pages/login",{

/***/ "./src/components/UserAuthDialog.js":
/*!******************************************!*\
  !*** ./src/components/UserAuthDialog.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormDialog; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/AuthDialogSyles */ "./src/styles/AuthDialogSyles.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\UserAuthDialog.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function FormDialog(_ref) {
  _s();

  var open = _ref.open,
      setAuthDialogOpen = _ref.setAuthDialogOpen,
      handleGoBackReset = _ref.handleGoBackReset,
      userRole = _ref.userRole,
      user_id = _ref.user_id;

  var _useStyles = Object(_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"])(),
      content = _useStyles.content,
      typos = _useStyles.typos,
      currentChar = _useStyles.currentChar,
      charsToBeTyped = _useStyles.charsToBeTyped,
      welcome = _useStyles.welcome;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      checkInput = _useState[0],
      setCheckInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      authSession = _useState3[0],
      setAuthSession = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      increment = _useState4[0],
      setIncrement = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      input = _useState5[0],
      setInput = _useState5[1];

  var tDNA = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var message = _utils_authSteps__WEBPACK_IMPORTED_MODULE_6__["authSteps"].message,
      route = _utils_authSteps__WEBPACK_IMPORTED_MODULE_6__["authSteps"].route;

  var handleIncrementUp = function handleIncrementUp() {
    tDNA.current.start();
    setCheckInput(false);
    setInput('');
    setAuthSession(authSession + 1);
    increment === message.length - 1 ? setIncrement(0) : setIncrement(increment + 1);
    setTimeout(function () {
      document.querySelector('#input').focus();
    }, 100);
  };

  var backAndReset = function backAndReset() {
    tDNA.current.reset();
    setAuthDialogOpen(false);
    handleGoBackReset();
    setTimeout(function () {
      setCheckInput(false);
      setIncrement(0);
      setInput('');
    }, 200);
  };

  var checkPattern = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var typingPattern, patternQuality, res, _message;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tDNA.current.stop();
              setCheckInput(true);
              _context.next = 4;
              return tDNA.current.getTypingPattern({
                type: 0,
                text: input
              });

            case 4:
              typingPattern = _context.sent;
              patternQuality = tDNA.current.getQuality(typingPattern);

              if (!(patternQuality > 0.3)) {
                _context.next = 16;
                break;
              }

              _context.next = 9;
              return fetch(route.verify, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  typingPattern: typingPattern,
                  user_id: user_id,
                  userRole: userRole
                })
              });

            case 9:
              res = _context.sent;
              _context.next = 12;
              return res.json();

            case 12:
              _message = _context.sent;
              console.log(_message);
              _context.next = 17;
              break;

            case 16:
              handleIncrementUp();

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkPattern() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!tDNA.current) {
      tDNA.current = new TypingDNA();
    }
  }, [tDNA]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    input.length === message[increment].length && checkPattern();
  }, [input]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
    open: open,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type! ", !auth && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 157
    }
  }, "*Please note, it may take up to 5 attempts."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, !auth ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, "Please type ", __jsx("span", {
    className: typos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 49
    }
  }, "(typos accepted)"), ":", " ", message[increment].substring(0, input.length), __jsx("span", {
    className: currentChar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 37
    }
  }, message[increment].charAt(input.length)), __jsx("span", {
    className: charsToBeTyped,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 37
    }
  }, message[increment].substring(input.length + 1, message[increment].length))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    autoFocus: true,
    inputProps: {
      spellCheck: 'false'
    },
    autoComplete: "off",
    margin: "dense",
    id: "input",
    label: "Type Phrase Here",
    color: "secondary",
    value: input,
    disabled: checkInput,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  })) : __jsx("h3", {
    className: welcome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }, "Welcome ", userID))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: backAndReset,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, "Go Back"))));
}

_s(FormDialog, "voxeDVDQ3KzaC3B6mSjtEdYe0U8=", false, function () {
  return [_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = FormDialog;

var _c;

$RefreshReg$(_c, "FormDialog");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJzZXRBdXRoRGlhbG9nT3BlbiIsImhhbmRsZUdvQmFja1Jlc2V0IiwidXNlclJvbGUiLCJ1c2VyX2lkIiwidXNlU3R5bGVzIiwiY29udGVudCIsInR5cG9zIiwiY3VycmVudENoYXIiLCJjaGFyc1RvQmVUeXBlZCIsIndlbGNvbWUiLCJ1c2VTdGF0ZSIsImNoZWNrSW5wdXQiLCJzZXRDaGVja0lucHV0IiwiYXV0aCIsInNldEF1dGgiLCJhdXRoU2Vzc2lvbiIsInNldEF1dGhTZXNzaW9uIiwiaW5jcmVtZW50Iiwic2V0SW5jcmVtZW50IiwiaW5wdXQiLCJzZXRJbnB1dCIsInRETkEiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZXNzYWdlIiwiYXV0aFN0ZXBzIiwicm91dGUiLCJoYW5kbGVJbmNyZW1lbnRVcCIsImN1cnJlbnQiLCJzdGFydCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsImJhY2tBbmRSZXNldCIsInJlc2V0IiwiY2hlY2tQYXR0ZXJuIiwic3RvcCIsImdldFR5cGluZ1BhdHRlcm4iLCJ0eXBlIiwidGV4dCIsInR5cGluZ1BhdHRlcm4iLCJwYXR0ZXJuUXVhbGl0eSIsImdldFF1YWxpdHkiLCJmZXRjaCIsInZlcmlmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiVHlwaW5nRE5BIiwic3Vic3RyaW5nIiwiY2hhckF0Iiwic3BlbGxDaGVjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZXJJRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFVQTtB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QURKO0FBNENIOztHQTVIdUJ0QyxVO1VBT2hCTSxpRSxFQU9Xb0IscUQ7OztLQWRLMUIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi41YjM4NzAyZjVjOGM0MjRiOGVmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBEaWFsb2csXHJcbiAgICBEaWFsb2dBY3Rpb25zLFxyXG4gICAgRGlhbG9nQ29udGVudCxcclxuICAgIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBUeXBvZ3JhcGh5XHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvQXV0aERpYWxvZ1N5bGVzJztcclxuaW1wb3J0IHsgYXV0aFN0ZXBzIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFN0ZXBzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybURpYWxvZyh7IG9wZW4sIHNldEF1dGhEaWFsb2dPcGVuLCBoYW5kbGVHb0JhY2tSZXNldCwgdXNlclJvbGUsIHVzZXJfaWQgfSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgdHlwb3MsXHJcbiAgICAgICAgY3VycmVudENoYXIsXHJcbiAgICAgICAgY2hhcnNUb0JlVHlwZWQsXHJcbiAgICAgICAgd2VsY29tZSxcclxuICAgIH0gPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFtjaGVja0lucHV0LCBzZXRDaGVja0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdXRoU2Vzc2lvbiwgc2V0QXV0aFNlc3Npb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaW5jcmVtZW50LCBzZXRJbmNyZW1lbnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHRETkEgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBtZXNzYWdlLCByb3V0ZSB9ID0gYXV0aFN0ZXBzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluY3JlbWVudFVwID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdGFydCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIHNldElucHV0KCcnKTtcclxuICAgICAgICBzZXRBdXRoU2Vzc2lvbihhdXRoU2Vzc2lvbiArIDEpXHJcbiAgICAgICAgaW5jcmVtZW50ID09PSBtZXNzYWdlLmxlbmd0aCAtIDEgP1xyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoMCkgOlxyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoaW5jcmVtZW50ICsgMSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dCcpLmZvY3VzKClcclxuICAgICAgICB9LCAxMDApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmFja0FuZFJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5yZXNldCgpO1xyXG4gICAgICAgIHNldEF1dGhEaWFsb2dPcGVuKGZhbHNlKVxyXG4gICAgICAgIGhhbmRsZUdvQmFja1Jlc2V0KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoMCk7XHJcbiAgICAgICAgICAgIHNldElucHV0KCcnKVxyXG4gICAgICAgIH0sIDIwMClcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hlY2tQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdG9wKCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dCh0cnVlKTtcclxuICAgICAgICBjb25zdCB0eXBpbmdQYXR0ZXJuID0gYXdhaXQgdEROQS5jdXJyZW50LmdldFR5cGluZ1BhdHRlcm4oe1xyXG4gICAgICAgICAgICB0eXBlOiAwLFxyXG4gICAgICAgICAgICB0ZXh0OiBpbnB1dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5RdWFsaXR5ID0gdEROQS5jdXJyZW50LmdldFF1YWxpdHkodHlwaW5nUGF0dGVybik7XHJcbiAgICAgICAgaWYgKHBhdHRlcm5RdWFsaXR5ID4gMC4zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHJvdXRlLnZlcmlmeSwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwaW5nUGF0dGVybixcclxuICAgICAgICAgICAgICAgICAgICB1c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJSb2xlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFVwKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRETkEuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0RE5BLmN1cnJlbnQgPSBuZXcgVHlwaW5nRE5BKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RETkFdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQubGVuZ3RoID09PSBtZXNzYWdlW2luY3JlbWVudF0ubGVuZ3RoICYmIGNoZWNrUGF0dGVybigpXHJcbiAgICB9LCBbaW5wdXRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXtvcGVufSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiZm9ybS1kaWFsb2ctdGl0bGVcIj48aW1nIHdpZHRoPVwiMjAwXCIgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9TaG9wcGVkVHlwaW5nRE5BLnBuZz9yYXc9dHJ1ZVwiIC8+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17Y29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UbyBlbnN1cmUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHksIHdlIGFyZSB1c2luZyBhIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHRlc3Qgd2hvIHlvdSBhcmUgYnkgdGhlIHdheSB5b3UgdHlwZSEgeyFhdXRoICYmICg8c3Bhbj4qUGxlYXNlIG5vdGUsIGl0IG1heSB0YWtlIHVwIHRvIDUgYXR0ZW1wdHMuPC9zcGFuPil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshYXV0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSB0eXBlIDxzcGFuIGNsYXNzTmFtZT17dHlwb3N9Pih0eXBvcyBhY2NlcHRlZCk8L3NwYW4+OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoMCwgaW5wdXQubGVuZ3RoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjdXJyZW50Q2hhcn0+e21lc3NhZ2VbaW5jcmVtZW50XS5jaGFyQXQoaW5wdXQubGVuZ3RoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2hhcnNUb0JlVHlwZWR9PnttZXNzYWdlW2luY3JlbWVudF0uc3Vic3RyaW5nKGlucHV0Lmxlbmd0aCArIDEsIG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBzcGVsbENoZWNrOiAnZmFsc2UnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBQaHJhc2UgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17d2VsY29tZX0+V2VsY29tZSB7dXNlcklEfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YmFja0FuZFJlc2V0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=