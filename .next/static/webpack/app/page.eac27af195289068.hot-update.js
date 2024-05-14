"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/RocketScene.tsx":
/*!************************************!*\
  !*** ./components/RocketScene.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C)(()=>{\n        if (rocketRef.current && cam.current) {\n            cam.current.position.copy(rocketRef.current.position);\n            cam.current.position.y += 10;\n            cam.current.lookAt(rocketRef.current.position);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (event)=>{\n            setIsFlying(true);\n            console.log(event.code);\n            console.log(rocketRef.current);\n            if (event.code === \"Space\" && rocketRef.current) {\n                rocketRef.current.applyImpulse({\n                    x: 0,\n                    y: 100,\n                    z: 0\n                }, true);\n                rocketRef.current.applyTorqueImpulse({\n                    x: 0,\n                    y: 10,\n                    z: 0\n                }, true);\n            }\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, []);\n    //   useEffect(() => {\n    //     window.addEventListener(\"click\", handleClick);\n    //     return () => {\n    //       window.removeEventListener(\"click\", handleClick);\n    //     };\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.PerspectiveCamera, {\n                position: [\n                    0,\n                    10,\n                    10\n                ],\n                makeDefault: true,\n                ref: cam\n            }, void 0, false, {\n                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n                debug: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.OrbitControls, {}, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.Environment, {\n                        background: false,\n                        files: \"adams_place_bridge_1k.hdr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                        colliders: \"hull\",\n                        restitution: 1,\n                        angularVelocity: [\n                            0,\n                            1,\n                            0\n                        ],\n                        //   linearVelocity={[0, 10, 0]}\n                        ref: rocketRef,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                        position: [\n                            0,\n                            -2,\n                            0\n                        ],\n                        args: [\n                            20,\n                            0.5,\n                            20\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                    args: [\n                                        40,\n                                        1,\n                                        40\n                                    ]\n                                }, void 0, false, {\n                                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                    color: \"green\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(RocketScene, \"a/az/khhq1Ysp+WQQ5+r3PwIUoo=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUtoQztBQUNhO0FBTVg7QUFDaUI7QUFFOUMsTUFBTVksY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVgsNkNBQU1BO0lBQ3hCLE1BQU1ZLE1BQU1aLDZDQUFNQTtJQUVsQixNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFHekNRLHFEQUFRQSxDQUFDO1FBQ1AsSUFBSUUsVUFBVUksT0FBTyxJQUFJSCxJQUFJRyxPQUFPLEVBQUU7WUFDcENILElBQUlHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNOLFVBQVVJLE9BQU8sQ0FBQ0MsUUFBUTtZQUNwREosSUFBSUcsT0FBTyxDQUFDQyxRQUFRLENBQUNFLENBQUMsSUFBSTtZQUMxQk4sSUFBSUcsT0FBTyxDQUFDSSxNQUFNLENBQUNSLFVBQVVJLE9BQU8sQ0FBQ0MsUUFBUTtRQUMvQztJQUNGO0lBRUFqQixnREFBU0EsQ0FBQztRQUNSLE1BQU1xQixnQkFBZ0IsQ0FBQ0M7WUFFckJQLFlBQVk7WUFDWlEsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxJQUFJO1lBQ3RCRixRQUFRQyxHQUFHLENBQUNaLFVBQVVJLE9BQU87WUFFN0IsSUFBSU0sTUFBTUcsSUFBSSxLQUFLLFdBQVdiLFVBQVVJLE9BQU8sRUFBRTtnQkFDL0NKLFVBQVVJLE9BQU8sQ0FBQ1UsWUFBWSxDQUFDO29CQUFFQyxHQUFHO29CQUFHUixHQUFHO29CQUFLUyxHQUFHO2dCQUFFLEdBQUc7Z0JBQ3ZEaEIsVUFBVUksT0FBTyxDQUFDYSxrQkFBa0IsQ0FBQztvQkFBRUYsR0FBRztvQkFBR1IsR0FBRztvQkFBSVMsR0FBRztnQkFBRSxHQUFHO1lBQzlEO1FBQ0Y7UUFFQUUsT0FBT0MsZ0JBQWdCLENBQUMsV0FBV1Y7UUFDbkMsT0FBTztZQUNMUyxPQUFPRSxtQkFBbUIsQ0FBQyxXQUFXWDtRQUN4QztJQUNGLEdBQUcsRUFBRTtJQUVMLHNCQUFzQjtJQUN0QixxREFBcUQ7SUFDckQscUJBQXFCO0lBQ3JCLDBEQUEwRDtJQUMxRCxTQUFTO0lBQ1QsWUFBWTtJQUVaLHFCQUNFOzswQkFDRSw4REFBQ2hCLGdFQUFpQkE7Z0JBQUNZLFVBQVU7b0JBQUM7b0JBQUc7b0JBQUk7aUJBQUc7Z0JBQUVnQixXQUFXO2dCQUFDQyxLQUFLckI7Ozs7OzswQkFFM0QsOERBQUNMLHdEQUFPQTtnQkFBQzJCLEtBQUs7O2tDQUNaLDhEQUFDL0IsNERBQWFBOzs7OztrQ0FDZCw4REFBQ0QsMERBQVdBO3dCQUFDaUMsWUFBWTt3QkFBT0MsT0FBTTs7Ozs7O2tDQUV0Qyw4REFBQzVCLDBEQUFTQTt3QkFDUjZCLFdBQVc7d0JBQ1hDLGFBQWE7d0JBQ2JDLGlCQUFpQjs0QkFBQzs0QkFBRzs0QkFBRzt5QkFBRTt3QkFDMUIsZ0NBQWdDO3dCQUNoQ04sS0FBS3RCO2tDQUVMLDRFQUFDTiwwREFBTUE7Ozs7Ozs7Ozs7a0NBR1QsOERBQUNDLCtEQUFjQTt3QkFBQ1UsVUFBVTs0QkFBQzs0QkFBRyxDQUFDOzRCQUFHO3lCQUFFO3dCQUFFd0IsTUFBTTs0QkFBQzs0QkFBSTs0QkFBSzt5QkFBRztrQ0FDdkQsNEVBQUNDOzs4Q0FDQyw4REFBQ0M7b0NBQVlGLE1BQU07d0NBQUM7d0NBQUk7d0NBQUc7cUNBQUc7Ozs7Ozs4Q0FDOUIsOERBQUNHO29DQUFxQkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QztHQXBFTWxDOztRQU9KRCxpREFBUUE7OztLQVBKQztBQXNFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JvY2tldFNjZW5lLnRzeD9hZGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBPcmJpdENvbnRyb2xzLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgUm9ja2V0IGZyb20gXCJAY29tcG9uZW50cy9Sb2NrZXRcIjtcbmltcG9ydCB7XG4gIEN1Ym9pZENvbGxpZGVyLFxuICBQaHlzaWNzLFxuICBSYXBpZXJSaWdpZEJvZHksXG4gIFJpZ2lkQm9keSxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9yYXBpZXJcIjtcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuXG5jb25zdCBSb2NrZXRTY2VuZSA9ICgpID0+IHtcbiAgY29uc3Qgcm9ja2V0UmVmID0gdXNlUmVmPFJhcGllclJpZ2lkQm9keT4oKTtcbiAgY29uc3QgY2FtID0gdXNlUmVmPGFueT4oKTtcblxuICBjb25zdCBbaXNGbHlpbmcsIHNldElzRmx5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBpZiAocm9ja2V0UmVmLmN1cnJlbnQgJiYgY2FtLmN1cnJlbnQpIHtcbiAgICAgIGNhbS5jdXJyZW50LnBvc2l0aW9uLmNvcHkocm9ja2V0UmVmLmN1cnJlbnQucG9zaXRpb24pO1xuICAgICAgY2FtLmN1cnJlbnQucG9zaXRpb24ueSArPSAxMDtcbiAgICAgIGNhbS5jdXJyZW50Lmxvb2tBdChyb2NrZXRSZWYuY3VycmVudC5wb3NpdGlvbik7XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIFxuICAgICAgc2V0SXNGbHlpbmcodHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhldmVudC5jb2RlKTtcbiAgICAgIGNvbnNvbGUubG9nKHJvY2tldFJlZi5jdXJyZW50KTtcblxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiU3BhY2VcIiAmJiByb2NrZXRSZWYuY3VycmVudCkge1xuICAgICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseUltcHVsc2UoeyB4OiAwLCB5OiAxMDAsIHo6IDAgfSwgdHJ1ZSk7XG4gICAgICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5VG9ycXVlSW1wdWxzZSh7IHg6IDAsIHk6IDEwLCB6OiAwIH0sIHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gIC8vICAgICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgLy8gICAgIH07XG4gIC8vICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQZXJzcGVjdGl2ZUNhbWVyYSBwb3NpdGlvbj17WzAsIDEwLCAxMF19IG1ha2VEZWZhdWx0IHJlZj17Y2FtfSAvPlxuXG4gICAgICA8UGh5c2ljcyBkZWJ1Zz5cbiAgICAgICAgPE9yYml0Q29udHJvbHMgLz5cbiAgICAgICAgPEVudmlyb25tZW50IGJhY2tncm91bmQ9e2ZhbHNlfSBmaWxlcz1cImFkYW1zX3BsYWNlX2JyaWRnZV8xay5oZHJcIiAvPlxuXG4gICAgICAgIDxSaWdpZEJvZHlcbiAgICAgICAgICBjb2xsaWRlcnM9e1wiaHVsbFwifVxuICAgICAgICAgIHJlc3RpdHV0aW9uPXsxfVxuICAgICAgICAgIGFuZ3VsYXJWZWxvY2l0eT17WzAsIDEsIDBdfVxuICAgICAgICAgIC8vICAgbGluZWFyVmVsb2NpdHk9e1swLCAxMCwgMF19XG4gICAgICAgICAgcmVmPXtyb2NrZXRSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8Um9ja2V0IC8+XG4gICAgICAgIDwvUmlnaWRCb2R5PlxuXG4gICAgICAgIDxDdWJvaWRDb2xsaWRlciBwb3NpdGlvbj17WzAsIC0yLCAwXX0gYXJncz17WzIwLCAwLjUsIDIwXX0+XG4gICAgICAgICAgPG1lc2g+XG4gICAgICAgICAgICA8Ym94R2VvbWV0cnkgYXJncz17WzQwLCAxLCA0MF19IC8+XG4gICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgPC9tZXNoPlxuICAgICAgICA8L0N1Ym9pZENvbGxpZGVyPlxuICAgICAgPC9QaHlzaWNzPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9ja2V0U2NlbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkVudmlyb25tZW50IiwiT3JiaXRDb250cm9scyIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiUm9ja2V0IiwiQ3Vib2lkQ29sbGlkZXIiLCJQaHlzaWNzIiwiUmlnaWRCb2R5IiwidXNlRnJhbWUiLCJSb2NrZXRTY2VuZSIsInJvY2tldFJlZiIsImNhbSIsImlzRmx5aW5nIiwic2V0SXNGbHlpbmciLCJjdXJyZW50IiwicG9zaXRpb24iLCJjb3B5IiwieSIsImxvb2tBdCIsImhhbmRsZUtleURvd24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiYXBwbHlJbXB1bHNlIiwieCIsInoiLCJhcHBseVRvcnF1ZUltcHVsc2UiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1ha2VEZWZhdWx0IiwicmVmIiwiZGVidWciLCJiYWNrZ3JvdW5kIiwiZmlsZXMiLCJjb2xsaWRlcnMiLCJyZXN0aXR1dGlvbiIsImFuZ3VsYXJWZWxvY2l0eSIsImFyZ3MiLCJtZXNoIiwiYm94R2VvbWV0cnkiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});