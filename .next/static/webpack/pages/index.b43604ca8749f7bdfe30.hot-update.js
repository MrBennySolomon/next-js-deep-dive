webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_GIT_next_js_deep_dive_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_GIT_next_js_deep_dive_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_GIT_next_js_deep_dive_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_GIT_next_js_deep_dive_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\GIT\\next-js-deep-dive\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var DUMMY_MEETUPS = [{
  id: "m1",
  title: "A Meetup T-shirt",
  image: "https://i.etsystatic.com/18408871/r/il/479384/4358152710/il_1140xN.4358152710_buo4.jpg",
  address: "Some address 5, 12345 Some City",
  description: "This is a first meetup T-shirt"
}, {
  id: "m2",
  title: "A Second Meetup T-shirt",
  image: "https://i.etsystatic.com/27105040/r/il/f79dcb/4098793900/il_1140xN.4098793900_a8aw.jpg",
  address: "Some address 10, 12345 Some City",
  description: "This is a second meetup T-shirt"
}, {
  id: "m3",
  title: "A Third Meetup T-shirt",
  image: "https://i.etsystatic.com/37890296/r/il/ba772d/4889239717/il_1140xN.4889239717_i7ot.jpg",
  address: "Some address 15, 12345 Some City",
  description: "This is a third meetup T-shirt"
}];

var HomePage = function HomePage() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(C_GIT_next_js_deep_dive_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_GIT_next_js_deep_dive_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var client, db, meetupsCollection, meetups;
        return C_GIT_next_js_deep_dive_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return MongoClient.connect("mongodb+srv://admin:admin@next-js-cluster.bkmavrc.mongodb.net/meetups?retryWrites=true&w=majority");

              case 2:
                client = _context.sent;
                db = client.db();
                meetupsCollection = db.collection("meetups");
                _context.next = 7;
                return meetupsCollection.find().toArray();

              case 7:
                meetups = _context.sent;
                client.close();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      meetups: DUMMY_MEETUPS
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(HomePage, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiTW9uZ29DbGllbnQiLCJjb25uZWN0IiwiY2xpZW50IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJmaW5kIiwidG9BcnJheSIsIm1lZXR1cHMiLCJjbG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsa0JBRlQ7QUFHRUMsT0FBSyxFQUNILHdGQUpKO0FBS0VDLFNBQU8sRUFBRSxpQ0FMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQURvQixFQVNwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUseUJBRlQ7QUFHRUMsT0FBSyxFQUNILHdGQUpKO0FBS0VDLFNBQU8sRUFBRSxrQ0FMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQVRvQixFQWlCcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLHdCQUZUO0FBR0VDLE9BQUssRUFDSCx3RkFKSjtBQUtFQyxTQUFPLEVBQUUsa0NBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FqQm9CLENBQXRCOztBQTJCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRXJCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTO0FBQUEsMFFBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDS0MsV0FBVyxDQUFDQyxPQUFaLENBQW9CLG1HQUFwQixDQURMOztBQUFBO0FBQ1ZDLHNCQURVO0FBRVZDLGtCQUZVLEdBRUxELE1BQU0sQ0FBQ0MsRUFBUCxFQUZLO0FBR1ZDLGlDQUhVLEdBR1VELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FIVjtBQUFBO0FBQUEsdUJBSU1ELGlCQUFpQixDQUFDRSxJQUFsQixHQUF5QkMsT0FBekIsRUFKTjs7QUFBQTtBQUlWQyx1QkFKVTtBQUtoQk4sc0JBQU0sQ0FBQ08sS0FBUDs7QUFMZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVFYsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQU9BQSxhQUFTO0FBQ1YsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBLHNCQUNFLHFFQUFDLGlFQUFEO0FBQUEsMkJBQ0UscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVSO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQWxCRDs7R0FBTU0sUTs7S0FBQUEsUTtBQW9CU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjQzNjA0Y2E4NzQ5ZjdiZGZlMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJBIE1lZXR1cCBULXNoaXJ0XCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2kuZXRzeXN0YXRpYy5jb20vMTg0MDg4NzEvci9pbC80NzkzODQvNDM1ODE1MjcxMC9pbF8xMTQweE4uNDM1ODE1MjcxMF9idW80LmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBDaXR5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZmlyc3QgbWVldHVwIFQtc2hpcnRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIkEgU2Vjb25kIE1lZXR1cCBULXNoaXJ0XCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL2kuZXRzeXN0YXRpYy5jb20vMjcxMDUwNDAvci9pbC9mNzlkY2IvNDA5ODc5MzkwMC9pbF8xMTQweE4uNDA5ODc5MzkwMF9hOGF3LmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgMTAsIDEyMzQ1IFNvbWUgQ2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNlY29uZCBtZWV0dXAgVC1zaGlydFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtM1wiLFxyXG4gICAgdGl0bGU6IFwiQSBUaGlyZCBNZWV0dXAgVC1zaGlydFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9pLmV0c3lzdGF0aWMuY29tLzM3ODkwMjk2L3IvaWwvYmE3NzJkLzQ4ODkyMzk3MTcvaWxfMTE0MHhOLjQ4ODkyMzk3MTdfaTdvdC5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDE1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSB0aGlyZCBtZWV0dXAgVC1zaGlydFwiXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXCJtb25nb2RiK3NydjovL2FkbWluOmFkbWluQG5leHQtanMtY2x1c3Rlci5ia21hdnJjLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIpO1xyXG4gICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gICAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICAgICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtEVU1NWV9NRUVUVVBTfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9