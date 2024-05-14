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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C)(()=>{\n        if (isFlying) {\n            rocketRef.current.applyImpulse({\n                x: 0,\n                y: 10,\n                z: 0\n            }, true);\n            rocketRef.current.applyTorqueImpulse({\n                x: 0,\n                y: 0.1,\n                z: 0\n            }, true);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (event)=>{\n            console.log(event.code);\n            // console.log(rocketRef.current);\n            if (event.code === \"Space\" && rocketRef.current) {\n                setIsFlying(true);\n            }\n        };\n        const handleKeyUp = (event)=>{\n            setIsFlying(false);\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        window.addEventListener(\"keyup\", handleKeyUp);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n            window.removeEventListener(\"keyup\", handleKeyUp);\n        };\n    }, []);\n    //   useEffect(() => {\n    //     window.addEventListener(\"click\", handleClick);\n    //     return () => {\n    //       window.removeEventListener(\"click\", handleClick);\n    //     };\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            debug: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.OrbitControls, {}, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.Environment, {\n                    background: false,\n                    files: \"adams_place_bridge_1k.hdr\"\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 1,\n                    angularVelocity: [\n                        0,\n                        1,\n                        0\n                    ],\n                    //   linearVelocity={[0, 10, 0]}\n                    ref: rocketRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.PerspectiveCamera, {\n                            position: [\n                                0,\n                                0,\n                                10\n                            ],\n                            makeDefault: true,\n                            ref: cam\n                        }, void 0, false, {\n                            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -2,\n                        0\n                    ],\n                    args: [\n                        20,\n                        0.5,\n                        20\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"a/az/khhq1Ysp+WQQ5+r3PwIUoo=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQUtoQztBQUNhO0FBTVg7QUFDaUI7QUFFOUMsTUFBTVksY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVgsNkNBQU1BO0lBQ3hCLE1BQU1ZLE1BQU1aLDZDQUFNQTtJQUVsQixNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFFekNRLHFEQUFRQSxDQUFDO1FBQ1AsSUFBSUksVUFBVTtZQUNaRixVQUFVSSxPQUFPLENBQUNDLFlBQVksQ0FBQztnQkFBRUMsR0FBRztnQkFBR0MsR0FBRztnQkFBSUMsR0FBRztZQUFFLEdBQUc7WUFDdERSLFVBQVVJLE9BQU8sQ0FBQ0ssa0JBQWtCLENBQUM7Z0JBQUVILEdBQUc7Z0JBQUdDLEdBQUc7Z0JBQUtDLEdBQUc7WUFBRSxHQUFHO1FBQy9EO0lBQ0Y7SUFFQXBCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXNCLGdCQUFnQixDQUFDQztZQUNyQkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxJQUFJO1lBQ3RCLGtDQUFrQztZQUVsQyxJQUFJSCxNQUFNRyxJQUFJLEtBQUssV0FBV2QsVUFBVUksT0FBTyxFQUFFO2dCQUMvQ0QsWUFBWTtZQUNkO1FBQ0Y7UUFDQSxNQUFNWSxjQUFjLENBQUNKO1lBQ25CUixZQUFZO1FBQ2Q7UUFFQWEsT0FBT0MsZ0JBQWdCLENBQUMsV0FBV1A7UUFDbkNNLE9BQU9DLGdCQUFnQixDQUFDLFNBQVNGO1FBQ2pDLE9BQU87WUFDTEMsT0FBT0UsbUJBQW1CLENBQUMsV0FBV1I7WUFDdENNLE9BQU9FLG1CQUFtQixDQUFDLFNBQVNIO1FBQ3RDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsc0JBQXNCO0lBQ3RCLHFEQUFxRDtJQUNyRCxxQkFBcUI7SUFDckIsMERBQTBEO0lBQzFELFNBQVM7SUFDVCxZQUFZO0lBRVoscUJBQ0U7a0JBQ0UsNEVBQUNuQix3REFBT0E7WUFBQ3VCLEtBQUs7OzhCQUNaLDhEQUFDM0IsNERBQWFBOzs7Ozs4QkFDZCw4REFBQ0QsMERBQVdBO29CQUFDNkIsWUFBWTtvQkFBT0MsT0FBTTs7Ozs7OzhCQUV0Qyw4REFBQ3hCLDBEQUFTQTtvQkFDUnlCLFdBQVc7b0JBQ1hDLGFBQWE7b0JBQ2JDLGlCQUFpQjt3QkFBQzt3QkFBRzt3QkFBRztxQkFBRTtvQkFDMUIsZ0NBQWdDO29CQUNoQ0MsS0FBS3pCOztzQ0FFTCw4REFBQ1AsZ0VBQWlCQTs0QkFBQ2lDLFVBQVU7Z0NBQUM7Z0NBQUc7Z0NBQUc7NkJBQUc7NEJBQUVDLFdBQVc7NEJBQUNGLEtBQUt4Qjs7Ozs7O3NDQUMxRCw4REFBQ1AsMERBQU1BOzs7Ozs7Ozs7Ozs4QkFHVCw4REFBQ0MsK0RBQWNBO29CQUFDK0IsVUFBVTt3QkFBQzt3QkFBRyxDQUFDO3dCQUFHO3FCQUFFO29CQUFFRSxNQUFNO3dCQUFDO3dCQUFJO3dCQUFLO3FCQUFHOzhCQUN2RCw0RUFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FBWUYsTUFBTTtvQ0FBQztvQ0FBSTtvQ0FBRztpQ0FBRzs7Ozs7OzBDQUM5Qiw4REFBQ0c7Z0NBQXFCQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0FuRU1qQzs7UUFNSkQsaURBQVFBOzs7S0FOSkM7QUFxRU4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb2NrZXRTY2VuZS50c3g/YWRjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgT3JiaXRDb250cm9scyxcbiAgUGVyc3BlY3RpdmVDYW1lcmEsXG59IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0IFJvY2tldCBmcm9tIFwiQGNvbXBvbmVudHMvUm9ja2V0XCI7XG5pbXBvcnQge1xuICBDdWJvaWRDb2xsaWRlcixcbiAgUGh5c2ljcyxcbiAgUmFwaWVyUmlnaWRCb2R5LFxuICBSaWdpZEJvZHksXG59IGZyb20gXCJAcmVhY3QtdGhyZWUvcmFwaWVyXCI7XG5pbXBvcnQgeyB1c2VGcmFtZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcblxuY29uc3QgUm9ja2V0U2NlbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvY2tldFJlZiA9IHVzZVJlZjxSYXBpZXJSaWdpZEJvZHk+KCk7XG4gIGNvbnN0IGNhbSA9IHVzZVJlZjxhbnk+KCk7XG5cbiAgY29uc3QgW2lzRmx5aW5nLCBzZXRJc0ZseWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIGlmIChpc0ZseWluZykge1xuICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlKHsgeDogMCwgeTogMTAsIHo6IDAgfSwgdHJ1ZSk7XG4gICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseVRvcnF1ZUltcHVsc2UoeyB4OiAwLCB5OiAwLjEsIHo6IDAgfSwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmNvZGUpO1xuICAgICAgLy8gY29uc29sZS5sb2cocm9ja2V0UmVmLmN1cnJlbnQpO1xuXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJTcGFjZVwiICYmIHJvY2tldFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHNldElzRmx5aW5nKHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlS2V5VXAgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIHNldElzRmx5aW5nKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlS2V5VXApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUtleVVwKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gIC8vICAgICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgLy8gICAgIH07XG4gIC8vICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQaHlzaWNzIGRlYnVnPlxuICAgICAgICA8T3JiaXRDb250cm9scyAvPlxuICAgICAgICA8RW52aXJvbm1lbnQgYmFja2dyb3VuZD17ZmFsc2V9IGZpbGVzPVwiYWRhbXNfcGxhY2VfYnJpZGdlXzFrLmhkclwiIC8+XG5cbiAgICAgICAgPFJpZ2lkQm9keVxuICAgICAgICAgIGNvbGxpZGVycz17XCJodWxsXCJ9XG4gICAgICAgICAgcmVzdGl0dXRpb249ezF9XG4gICAgICAgICAgYW5ndWxhclZlbG9jaXR5PXtbMCwgMSwgMF19XG4gICAgICAgICAgLy8gICBsaW5lYXJWZWxvY2l0eT17WzAsIDEwLCAwXX1cbiAgICAgICAgICByZWY9e3JvY2tldFJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxQZXJzcGVjdGl2ZUNhbWVyYSBwb3NpdGlvbj17WzAsIDAsIDEwXX0gbWFrZURlZmF1bHQgcmVmPXtjYW19IC8+XG4gICAgICAgICAgPFJvY2tldCAvPlxuICAgICAgICA8L1JpZ2lkQm9keT5cblxuICAgICAgICA8Q3Vib2lkQ29sbGlkZXIgcG9zaXRpb249e1swLCAtMiwgMF19IGFyZ3M9e1syMCwgMC41LCAyMF19PlxuICAgICAgICAgIDxtZXNoPlxuICAgICAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1s0MCwgMSwgNDBdfSAvPlxuICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgIDwvbWVzaD5cbiAgICAgICAgPC9DdWJvaWRDb2xsaWRlcj5cbiAgICAgIDwvUGh5c2ljcz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvY2tldFNjZW5lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJFbnZpcm9ubWVudCIsIk9yYml0Q29udHJvbHMiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIlJvY2tldCIsIkN1Ym9pZENvbGxpZGVyIiwiUGh5c2ljcyIsIlJpZ2lkQm9keSIsInVzZUZyYW1lIiwiUm9ja2V0U2NlbmUiLCJyb2NrZXRSZWYiLCJjYW0iLCJpc0ZseWluZyIsInNldElzRmx5aW5nIiwiY3VycmVudCIsImFwcGx5SW1wdWxzZSIsIngiLCJ5IiwieiIsImFwcGx5VG9ycXVlSW1wdWxzZSIsImhhbmRsZUtleURvd24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiaGFuZGxlS2V5VXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlYnVnIiwiYmFja2dyb3VuZCIsImZpbGVzIiwiY29sbGlkZXJzIiwicmVzdGl0dXRpb24iLCJhbmd1bGFyVmVsb2NpdHkiLCJyZWYiLCJwb3NpdGlvbiIsIm1ha2VEZWZhdWx0IiwiYXJncyIsIm1lc2giLCJib3hHZW9tZXRyeSIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});