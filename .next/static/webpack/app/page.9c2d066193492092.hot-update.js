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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (event)=>{\n            console.log(event.code);\n            console.log(rocketRef.current);\n            if (event.code === \"Space\" && rocketRef.current) {\n                rocketRef.current.applyImpulse({\n                    x: 0,\n                    y: 100,\n                    z: 0\n                }, true);\n                rocketRef.current.applyTorqueImpulse({\n                    x: 0,\n                    y: 10,\n                    z: 0\n                }, true);\n            }\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, []);\n    //   useEffect(() => {\n    //     window.addEventListener(\"click\", handleClick);\n    //     return () => {\n    //       window.removeEventListener(\"click\", handleClick);\n    //     };\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera, {\n                position: [\n                    0,\n                    10,\n                    10\n                ],\n                makeDefault: true,\n                ref: cam\n            }, void 0, false, {\n                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n                debug: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.OrbitControls, {}, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.Environment, {\n                        background: false,\n                        files: \"adams_place_bridge_1k.hdr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                        colliders: \"hull\",\n                        restitution: 1,\n                        angularVelocity: [\n                            0,\n                            1,\n                            0\n                        ],\n                        //   linearVelocity={[0, 10, 0]}\n                        ref: rocketRef,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                        position: [\n                            0,\n                            -2,\n                            0\n                        ],\n                        args: [\n                            20,\n                            0.5,\n                            20\n                        ],\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                    args: [\n                                        40,\n                                        1,\n                                        40\n                                    ]\n                                }, void 0, false, {\n                                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                    color: \"green\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(RocketScene, \"C8bbfhFK9z8rgW8UrocpFjqWWP4=\");\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBS3RCO0FBQ2E7QUFNWDtBQUc3QixNQUFNVSxjQUFjOztJQUNsQixNQUFNQyxZQUFZVCw2Q0FBTUE7SUFDeEIsTUFBTVUsTUFBTVYsNkNBQU1BO0lBRWxCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGdCQUFnQixDQUFDQztZQUNyQkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxJQUFJO1lBQ3RCRixRQUFRQyxHQUFHLENBQUNMLFVBQVVPLE9BQU87WUFFN0IsSUFBSUosTUFBTUcsSUFBSSxLQUFLLFdBQVdOLFVBQVVPLE9BQU8sRUFBRTtnQkFDL0NQLFVBQVVPLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDO29CQUFFQyxHQUFHO29CQUFHQyxHQUFHO29CQUFLQyxHQUFHO2dCQUFFLEdBQUc7Z0JBQ3ZEWCxVQUFVTyxPQUFPLENBQUNLLGtCQUFrQixDQUFDO29CQUFFSCxHQUFHO29CQUFHQyxHQUFHO29CQUFJQyxHQUFHO2dCQUFFLEdBQUc7WUFDOUQ7UUFDRjtRQUVBRSxPQUFPQyxnQkFBZ0IsQ0FBQyxXQUFXWjtRQUNuQyxPQUFPO1lBQ0xXLE9BQU9FLG1CQUFtQixDQUFDLFdBQVdiO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsc0JBQXNCO0lBQ3RCLHFEQUFxRDtJQUNyRCxxQkFBcUI7SUFDckIsMERBQTBEO0lBQzFELFNBQVM7SUFDVCxZQUFZO0lBRVoscUJBQ0U7OzBCQUNFLDhEQUFDUixnRUFBaUJBO2dCQUFDc0IsVUFBVTtvQkFBQztvQkFBRztvQkFBSTtpQkFBRztnQkFBRUMsV0FBVztnQkFBQ0MsS0FBS2pCOzs7Ozs7MEJBRTNELDhEQUFDSix3REFBT0E7Z0JBQUNzQixLQUFLOztrQ0FDWiw4REFBQzFCLDREQUFhQTs7Ozs7a0NBQ2QsOERBQUNELDBEQUFXQTt3QkFBQzRCLFlBQVk7d0JBQU9DLE9BQU07Ozs7OztrQ0FFdEMsOERBQUN2QiwwREFBU0E7d0JBQ1J3QixXQUFXO3dCQUNYQyxhQUFhO3dCQUNiQyxpQkFBaUI7NEJBQUM7NEJBQUc7NEJBQUc7eUJBQUU7d0JBQzFCLGdDQUFnQzt3QkFDaENOLEtBQUtsQjtrQ0FFTCw0RUFBQ0wsMERBQU1BOzs7Ozs7Ozs7O2tDQUdULDhEQUFDQywrREFBY0E7d0JBQUNvQixVQUFVOzRCQUFDOzRCQUFHLENBQUM7NEJBQUc7eUJBQUU7d0JBQUVTLE1BQU07NEJBQUM7NEJBQUk7NEJBQUs7eUJBQUc7a0NBQ3ZELDRFQUFDQzs7OENBQ0MsOERBQUNDO29DQUFZRixNQUFNO3dDQUFDO3dDQUFJO3dDQUFHO3FDQUFHOzs7Ozs7OENBQzlCLDhEQUFDRztvQ0FBcUJDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0F2RE05QjtLQUFBQTtBQXlETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JvY2tldFNjZW5lLnRzeD9hZGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRW52aXJvbm1lbnQsXG4gIE9yYml0Q29udHJvbHMsXG4gIFBlcnNwZWN0aXZlQ2FtZXJhLFxufSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCBSb2NrZXQgZnJvbSBcIkBjb21wb25lbnRzL1JvY2tldFwiO1xuaW1wb3J0IHtcbiAgQ3Vib2lkQ29sbGlkZXIsXG4gIFBoeXNpY3MsXG4gIFJhcGllclJpZ2lkQm9keSxcbiAgUmlnaWRCb2R5LFxufSBmcm9tIFwiQHJlYWN0LXRocmVlL3JhcGllclwiO1xuaW1wb3J0IHsgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5cbmNvbnN0IFJvY2tldFNjZW5lID0gKCkgPT4ge1xuICBjb25zdCByb2NrZXRSZWYgPSB1c2VSZWY8UmFwaWVyUmlnaWRCb2R5PigpO1xuICBjb25zdCBjYW0gPSB1c2VSZWY8YW55PigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQuY29kZSk7XG4gICAgICBjb25zb2xlLmxvZyhyb2NrZXRSZWYuY3VycmVudCk7XG5cbiAgICAgIGlmIChldmVudC5jb2RlID09PSBcIlNwYWNlXCIgJiYgcm9ja2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlKHsgeDogMCwgeTogMTAwLCB6OiAwIH0sIHRydWUpO1xuICAgICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseVRvcnF1ZUltcHVsc2UoeyB4OiAwLCB5OiAxMCwgejogMCB9LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAvLyAgICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gIC8vICAgICB9O1xuICAvLyAgIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGVyc3BlY3RpdmVDYW1lcmEgcG9zaXRpb249e1swLCAxMCwgMTBdfSBtYWtlRGVmYXVsdCByZWY9e2NhbX0gLz5cblxuICAgICAgPFBoeXNpY3MgZGVidWc+XG4gICAgICAgIDxPcmJpdENvbnRyb2xzIC8+XG4gICAgICAgIDxFbnZpcm9ubWVudCBiYWNrZ3JvdW5kPXtmYWxzZX0gZmlsZXM9XCJhZGFtc19wbGFjZV9icmlkZ2VfMWsuaGRyXCIgLz5cblxuICAgICAgICA8UmlnaWRCb2R5XG4gICAgICAgICAgY29sbGlkZXJzPXtcImh1bGxcIn1cbiAgICAgICAgICByZXN0aXR1dGlvbj17MX1cbiAgICAgICAgICBhbmd1bGFyVmVsb2NpdHk9e1swLCAxLCAwXX1cbiAgICAgICAgICAvLyAgIGxpbmVhclZlbG9jaXR5PXtbMCwgMTAsIDBdfVxuICAgICAgICAgIHJlZj17cm9ja2V0UmVmfVxuICAgICAgICA+XG4gICAgICAgICAgPFJvY2tldCAvPlxuICAgICAgICA8L1JpZ2lkQm9keT5cblxuICAgICAgICA8Q3Vib2lkQ29sbGlkZXIgcG9zaXRpb249e1swLCAtMiwgMF19IGFyZ3M9e1syMCwgMC41LCAyMF19PlxuICAgICAgICAgIDxtZXNoPlxuICAgICAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1s0MCwgMSwgNDBdfSAvPlxuICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgIDwvbWVzaD5cbiAgICAgICAgPC9DdWJvaWRDb2xsaWRlcj5cbiAgICAgIDwvUGh5c2ljcz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvY2tldFNjZW5lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiRW52aXJvbm1lbnQiLCJPcmJpdENvbnRyb2xzIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJSb2NrZXQiLCJDdWJvaWRDb2xsaWRlciIsIlBoeXNpY3MiLCJSaWdpZEJvZHkiLCJSb2NrZXRTY2VuZSIsInJvY2tldFJlZiIsImNhbSIsImhhbmRsZUtleURvd24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiY3VycmVudCIsImFwcGx5SW1wdWxzZSIsIngiLCJ5IiwieiIsImFwcGx5VG9ycXVlSW1wdWxzZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicG9zaXRpb24iLCJtYWtlRGVmYXVsdCIsInJlZiIsImRlYnVnIiwiYmFja2dyb3VuZCIsImZpbGVzIiwiY29sbGlkZXJzIiwicmVzdGl0dXRpb24iLCJhbmd1bGFyVmVsb2NpdHkiLCJhcmdzIiwibWVzaCIsImJveEdlb21ldHJ5IiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});