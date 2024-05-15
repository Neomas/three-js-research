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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/web/KeyboardControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const dot = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Add state for mouse position\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [subscribeKeys, getKeys] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useKeyboardControls)();\n    const jump = ()=>{\n        var _rocketRef_current;\n        (_rocketRef_current = rocketRef.current) === null || _rocketRef_current === void 0 ? void 0 : _rocketRef_current.applyImpulseAtPoint({\n            x: 0,\n            y: 50,\n            z: 0\n        }, {\n            x: 0,\n            y: -1,\n            z: 0\n        }, true);\n    };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.C)((state, delta)=>{\n        if (rocketRef.current) {\n            const { forward, backward, leftward, rightward } = getKeys();\n            const impulse = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const torque = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const impulseStrength = 100 * delta;\n            const torqueStrength = 100 * delta;\n            if (forward) {\n                impulse.z -= impulseStrength;\n                torque.x -= torqueStrength;\n            }\n            if (backward) {\n                impulse.z += impulseStrength;\n                torque.x += torqueStrength;\n            }\n            if (leftward) {\n                impulse.x -= impulseStrength;\n                torque.z -= torqueStrength;\n            }\n            if (rightward) {\n                impulse.x += impulseStrength;\n                torque.z += torqueStrength;\n            }\n            rocketRef.current.applyImpulse(impulse, true);\n            rocketRef.current.applyTorqueImpulse(torque, true);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        subscribeKeys((state)=>state.jump, (value)=>{\n            if (value) console.log(\"Yes, jump!\");\n            jump();\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            debug: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.Environment, {\n                    background: false,\n                    files: \"adams_place_bridge_1k.hdr\"\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 0.2,\n                    mass: 0,\n                    canSleep: false,\n                    friction: 1,\n                    linearDamping: 0.5,\n                    angularDamping: 0.5,\n                    // angularVelocity={[0, 1, 0]}\n                    ref: rocketRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.PerspectiveCamera, {\n                            position: [\n                                0,\n                                2,\n                                50\n                            ],\n                            rotation: [\n                                0,\n                                10,\n                                0\n                            ],\n                            makeDefault: true,\n                            ref: cam\n                        }, void 0, false, {\n                            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            isFlying: isFlying\n                        }, void 0, false, {\n                            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -2,\n                        0\n                    ],\n                    args: [\n                        100,\n                        0.5,\n                        100\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"H9Pcv/+xvi6jGaUDGedk3S/Ha9Y=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useKeyboardControls,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQU1oQztBQUNhO0FBT1g7QUFDaUI7QUFHOUMsTUFBTVksY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVgsNkNBQU1BO0lBQ3hCLE1BQU1ZLE1BQU1aLDZDQUFNQTtJQUNsQixNQUFNYSxNQUFNYiw2Q0FBTUE7SUFFbEIsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXpDLCtCQUErQjtJQUMvQixNQUFNLENBQUNlLGVBQWVDLGlCQUFpQixHQUFHaEIsK0NBQVFBLENBQUM7UUFBRWlCLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ2hFLE1BQU0sQ0FBQ0MsZUFBZUMsUUFBUSxHQUFHakIsc0VBQW1CQTtJQUVwRCxNQUFNa0IsT0FBTztZQUNYWDtTQUFBQSxxQkFBQUEsVUFBVVksT0FBTyxjQUFqQloseUNBQUFBLG1CQUFtQmEsbUJBQW1CLENBQ3BDO1lBQUVOLEdBQUc7WUFBR0MsR0FBRztZQUFJTSxHQUFHO1FBQUUsR0FDcEI7WUFBRVAsR0FBRztZQUFHQyxHQUFHLENBQUM7WUFBR00sR0FBRztRQUFFLEdBQ3BCO0lBRUo7SUFFQWhCLHFEQUFRQSxDQUFDLENBQUNpQixPQUFPQztRQUNmLElBQUloQixVQUFVWSxPQUFPLEVBQUU7WUFDckIsTUFBTSxFQUFFSyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR1Y7WUFFbkQsTUFBTVcsVUFBVTtnQkFBRWQsR0FBRztnQkFBR0MsR0FBRztnQkFBR00sR0FBRztZQUFFO1lBQ25DLE1BQU1RLFNBQVM7Z0JBQUVmLEdBQUc7Z0JBQUdDLEdBQUc7Z0JBQUdNLEdBQUc7WUFBRTtZQUVsQyxNQUFNUyxrQkFBa0IsTUFBTVA7WUFDOUIsTUFBTVEsaUJBQWlCLE1BQU1SO1lBRTdCLElBQUlDLFNBQVM7Z0JBQ1hJLFFBQVFQLENBQUMsSUFBSVM7Z0JBQ2JELE9BQU9mLENBQUMsSUFBSWlCO1lBQ2Q7WUFDQSxJQUFJTixVQUFVO2dCQUNaRyxRQUFRUCxDQUFDLElBQUlTO2dCQUNiRCxPQUFPZixDQUFDLElBQUlpQjtZQUNkO1lBQ0EsSUFBSUwsVUFBVTtnQkFDWkUsUUFBUWQsQ0FBQyxJQUFJZ0I7Z0JBQ2JELE9BQU9SLENBQUMsSUFBSVU7WUFDZDtZQUNBLElBQUlKLFdBQVc7Z0JBQ2JDLFFBQVFkLENBQUMsSUFBSWdCO2dCQUNiRCxPQUFPUixDQUFDLElBQUlVO1lBQ2Q7WUFFQXhCLFVBQVVZLE9BQU8sQ0FBQ2EsWUFBWSxDQUFDSixTQUFTO1lBQ3hDckIsVUFBVVksT0FBTyxDQUFDYyxrQkFBa0IsQ0FBQ0osUUFBUTtRQUMvQztJQUNGO0lBRUFsQyxnREFBU0EsQ0FBQztRQUNScUIsY0FDRSxDQUFDTSxRQUFVQSxNQUFNSixJQUFJLEVBQ3JCLENBQUNnQjtZQUNDLElBQUlBLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQztZQUN2QmxCO1FBQ0Y7SUFFSixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRSw0RUFBQ2Ysd0RBQU9BO1lBQUNrQyxLQUFLOzs4QkFFWiw4REFBQ3ZDLDBEQUFXQTtvQkFBQ3dDLFlBQVk7b0JBQU9DLE9BQU07Ozs7Ozs4QkFFdEMsOERBQUNuQywwREFBU0E7b0JBQ1JvQyxXQUFXO29CQUNYQyxhQUFhO29CQUNiQyxNQUFNO29CQUNOQyxVQUFVO29CQUNWQyxVQUFVO29CQUNWQyxlQUFlO29CQUNmQyxnQkFBZ0I7b0JBQ2hCLDhCQUE4QjtvQkFDOUJDLEtBQUt4Qzs7c0NBRUwsOERBQUNSLGdFQUFpQkE7NEJBQ2hCaUQsVUFBVTtnQ0FBQztnQ0FBRztnQ0FBRzs2QkFBRzs0QkFDcEJDLFVBQVU7Z0NBQUM7Z0NBQUc7Z0NBQUk7NkJBQUU7NEJBQ3BCQyxXQUFXOzRCQUNYSCxLQUFLdkM7Ozs7OztzQ0FFUCw4REFBQ1AsMERBQU1BOzRCQUFDUyxVQUFVQTs7Ozs7Ozs7Ozs7OzhCQUdwQiw4REFBQ1IsK0RBQWNBO29CQUFDOEMsVUFBVTt3QkFBQzt3QkFBRyxDQUFDO3dCQUFHO3FCQUFFO29CQUFFRyxNQUFNO3dCQUFDO3dCQUFLO3dCQUFLO3FCQUFJOzhCQUN6RCw0RUFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FBWUYsTUFBTTtvQ0FBQztvQ0FBSTtvQ0FBRztpQ0FBRzs7Ozs7OzBDQUM5Qiw4REFBQ0c7Z0NBQXFCQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXeEM7R0FyR01qRDs7UUFTNkJOLGtFQUFtQkE7UUFVcERLLGlEQUFRQTs7O0tBbkJKQztBQXVHTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JvY2tldFNjZW5lLnRzeD9hZGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBPcmJpdENvbnRyb2xzLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgdXNlS2V5Ym9hcmRDb250cm9scyxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgUm9ja2V0IGZyb20gXCJAY29tcG9uZW50cy9Sb2NrZXRcIjtcbmltcG9ydCB7XG4gIEN1Ym9pZENvbGxpZGVyLFxuICBQaHlzaWNzLFxuICBSYXBpZXJSaWdpZEJvZHksXG4gIFJpZ2lkQm9keSxcbiAgcXVhdCxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9yYXBpZXJcIjtcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IFJvY2tldFNjZW5lID0gKCkgPT4ge1xuICBjb25zdCByb2NrZXRSZWYgPSB1c2VSZWY8UmFwaWVyUmlnaWRCb2R5PigpO1xuICBjb25zdCBjYW0gPSB1c2VSZWY8YW55PigpO1xuICBjb25zdCBkb3QgPSB1c2VSZWY8YW55PigpO1xuXG4gIGNvbnN0IFtpc0ZseWluZywgc2V0SXNGbHlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEFkZCBzdGF0ZSBmb3IgbW91c2UgcG9zaXRpb25cbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbc3Vic2NyaWJlS2V5cywgZ2V0S2V5c10gPSB1c2VLZXlib2FyZENvbnRyb2xzKCk7XG5cbiAgY29uc3QganVtcCA9ICgpID0+IHtcbiAgICByb2NrZXRSZWYuY3VycmVudD8uYXBwbHlJbXB1bHNlQXRQb2ludChcbiAgICAgIHsgeDogMCwgeTogNTAsIHo6IDAgfSxcbiAgICAgIHsgeDogMCwgeTogLTEsIHo6IDAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuICB9O1xuXG4gIHVzZUZyYW1lKChzdGF0ZSwgZGVsdGEpID0+IHtcbiAgICBpZiAocm9ja2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHsgZm9yd2FyZCwgYmFja3dhcmQsIGxlZnR3YXJkLCByaWdodHdhcmQgfSA9IGdldEtleXMoKTtcblxuICAgICAgY29uc3QgaW1wdWxzZSA9IHsgeDogMCwgeTogMCwgejogMCB9O1xuICAgICAgY29uc3QgdG9ycXVlID0geyB4OiAwLCB5OiAwLCB6OiAwIH07XG5cbiAgICAgIGNvbnN0IGltcHVsc2VTdHJlbmd0aCA9IDEwMCAqIGRlbHRhO1xuICAgICAgY29uc3QgdG9ycXVlU3RyZW5ndGggPSAxMDAgKiBkZWx0YTtcblxuICAgICAgaWYgKGZvcndhcmQpIHtcbiAgICAgICAgaW1wdWxzZS56IC09IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnggLT0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoYmFja3dhcmQpIHtcbiAgICAgICAgaW1wdWxzZS56ICs9IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnggKz0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAobGVmdHdhcmQpIHtcbiAgICAgICAgaW1wdWxzZS54IC09IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnogLT0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAocmlnaHR3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueCArPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS56ICs9IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuXG4gICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseUltcHVsc2UoaW1wdWxzZSwgdHJ1ZSk7XG4gICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseVRvcnF1ZUltcHVsc2UodG9ycXVlLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3Vic2NyaWJlS2V5cyhcbiAgICAgIChzdGF0ZSkgPT4gc3RhdGUuanVtcCxcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUpIGNvbnNvbGUubG9nKFwiWWVzLCBqdW1wIVwiKTtcbiAgICAgICAganVtcCgpO1xuICAgICAgfVxuICAgICk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGh5c2ljcyBkZWJ1Zz5cbiAgICAgICAgey8qIDxPcmJpdENvbnRyb2xzIC8+ICovfVxuICAgICAgICA8RW52aXJvbm1lbnQgYmFja2dyb3VuZD17ZmFsc2V9IGZpbGVzPVwiYWRhbXNfcGxhY2VfYnJpZGdlXzFrLmhkclwiIC8+XG5cbiAgICAgICAgPFJpZ2lkQm9keVxuICAgICAgICAgIGNvbGxpZGVycz17XCJodWxsXCJ9XG4gICAgICAgICAgcmVzdGl0dXRpb249ezAuMn1cbiAgICAgICAgICBtYXNzPXswfVxuICAgICAgICAgIGNhblNsZWVwPXtmYWxzZX1cbiAgICAgICAgICBmcmljdGlvbj17MX1cbiAgICAgICAgICBsaW5lYXJEYW1waW5nPXswLjV9XG4gICAgICAgICAgYW5ndWxhckRhbXBpbmc9ezAuNX1cbiAgICAgICAgICAvLyBhbmd1bGFyVmVsb2NpdHk9e1swLCAxLCAwXX1cbiAgICAgICAgICByZWY9e3JvY2tldFJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxQZXJzcGVjdGl2ZUNhbWVyYVxuICAgICAgICAgICAgcG9zaXRpb249e1swLCAyLCA1MF19XG4gICAgICAgICAgICByb3RhdGlvbj17WzAsIDEwLCAwXX1cbiAgICAgICAgICAgIG1ha2VEZWZhdWx0XG4gICAgICAgICAgICByZWY9e2NhbX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSb2NrZXQgaXNGbHlpbmc9e2lzRmx5aW5nfSAvPlxuICAgICAgICA8L1JpZ2lkQm9keT5cblxuICAgICAgICA8Q3Vib2lkQ29sbGlkZXIgcG9zaXRpb249e1swLCAtMiwgMF19IGFyZ3M9e1sxMDAsIDAuNSwgMTAwXX0+XG4gICAgICAgICAgPG1lc2g+XG4gICAgICAgICAgICA8Ym94R2VvbWV0cnkgYXJncz17WzQwLCAxLCA0MF19IC8+XG4gICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgPC9tZXNoPlxuICAgICAgICA8L0N1Ym9pZENvbGxpZGVyPlxuXG4gICAgICAgIHsvKiA8bWVzaCBwb3NpdGlvbj17WzAsIDAsIDBdfSByZWY9e2RvdH0+XG4gICAgICAgICAgPHNwaGVyZUdlb21ldHJ5IGFyZ3M9e1sxLCAxNiwgMTZdfSAvPlxuICAgICAgICAgIDxtZXNoQmFzaWNNYXRlcmlhbCBjb2xvcj1cInJlZFwiIC8+XG4gICAgICAgIDwvbWVzaD4gKi99XG4gICAgICA8L1BoeXNpY3M+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb2NrZXRTY2VuZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRW52aXJvbm1lbnQiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInVzZUtleWJvYXJkQ29udHJvbHMiLCJSb2NrZXQiLCJDdWJvaWRDb2xsaWRlciIsIlBoeXNpY3MiLCJSaWdpZEJvZHkiLCJ1c2VGcmFtZSIsIlJvY2tldFNjZW5lIiwicm9ja2V0UmVmIiwiY2FtIiwiZG90IiwiaXNGbHlpbmciLCJzZXRJc0ZseWluZyIsIm1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwieCIsInkiLCJzdWJzY3JpYmVLZXlzIiwiZ2V0S2V5cyIsImp1bXAiLCJjdXJyZW50IiwiYXBwbHlJbXB1bHNlQXRQb2ludCIsInoiLCJzdGF0ZSIsImRlbHRhIiwiZm9yd2FyZCIsImJhY2t3YXJkIiwibGVmdHdhcmQiLCJyaWdodHdhcmQiLCJpbXB1bHNlIiwidG9ycXVlIiwiaW1wdWxzZVN0cmVuZ3RoIiwidG9ycXVlU3RyZW5ndGgiLCJhcHBseUltcHVsc2UiLCJhcHBseVRvcnF1ZUltcHVsc2UiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWJ1ZyIsImJhY2tncm91bmQiLCJmaWxlcyIsImNvbGxpZGVycyIsInJlc3RpdHV0aW9uIiwibWFzcyIsImNhblNsZWVwIiwiZnJpY3Rpb24iLCJsaW5lYXJEYW1waW5nIiwiYW5ndWxhckRhbXBpbmciLCJyZWYiLCJwb3NpdGlvbiIsInJvdGF0aW9uIiwibWFrZURlZmF1bHQiLCJhcmdzIiwibWVzaCIsImJveEdlb21ldHJ5IiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});