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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/web/KeyboardControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const dot = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Add state for mouse position\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [subscribeKeys, getKeys] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useKeyboardControls)();\n    const jump = ()=>{\n        var _rocketRef_current;\n        (_rocketRef_current = rocketRef.current) === null || _rocketRef_current === void 0 ? void 0 : _rocketRef_current.applyImpulseAtPoint({\n            x: 0,\n            y: 50,\n            z: 0\n        }, {\n            x: 0,\n            y: -1,\n            z: 0\n        }, true);\n    };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.C)((state, delta)=>{\n        if (rocketRef.current) {\n            const { forward, backward, leftward, rightward } = getKeys();\n            const impulse = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const torque = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const impulseStrength = 100 * delta;\n            const torqueStrength = 100 * delta;\n            if (forward) {\n                impulse.z -= impulseStrength;\n                torque.x -= torqueStrength;\n            }\n            if (backward) {\n                impulse.z += impulseStrength;\n                torque.x += torqueStrength;\n            }\n            if (leftward) {\n                impulse.x -= impulseStrength;\n                torque.z -= torqueStrength;\n            }\n            if (rightward) {\n                impulse.x += impulseStrength;\n                torque.z += torqueStrength;\n            }\n            rocketRef.current.applyImpulse(impulse, true);\n            rocketRef.current.applyTorqueImpulse(torque, true);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        subscribeKeys((state)=>state.jump, (value)=>{\n            if (value) console.log(\"Yes, jump!\");\n            jump();\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            debug: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.Environment, {\n                    background: false,\n                    files: \"adams_place_bridge_1k.hdr\"\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 0.2,\n                    mass: 0,\n                    canSleep: false,\n                    friction: 1,\n                    linearDamping: 0.5,\n                    angularDamping: 0.5,\n                    // angularVelocity={[0, 1, 0]}\n                    ref: rocketRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.PerspectiveCamera, {\n                            position: [\n                                0,\n                                2,\n                                50\n                            ],\n                            rotation: [\n                                -0.3,\n                                0,\n                                0\n                            ],\n                            makeDefault: true,\n                            ref: cam\n                        }, void 0, false, {\n                            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            isFlying: isFlying\n                        }, void 0, false, {\n                            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -2,\n                        0\n                    ],\n                    args: [\n                        100,\n                        0.5,\n                        100\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"H9Pcv/+xvi6jGaUDGedk3S/Ha9Y=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useKeyboardControls,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyRDtBQU1oQztBQUNhO0FBT1g7QUFDaUI7QUFHOUMsTUFBTVksY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVgsNkNBQU1BO0lBQ3hCLE1BQU1ZLE1BQU1aLDZDQUFNQTtJQUNsQixNQUFNYSxNQUFNYiw2Q0FBTUE7SUFFbEIsTUFBTSxDQUFDYyxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXpDLCtCQUErQjtJQUMvQixNQUFNLENBQUNlLGVBQWVDLGlCQUFpQixHQUFHaEIsK0NBQVFBLENBQUM7UUFBRWlCLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQ2hFLE1BQU0sQ0FBQ0MsZUFBZUMsUUFBUSxHQUFHakIsc0VBQW1CQTtJQUVwRCxNQUFNa0IsT0FBTztZQUNYWDtTQUFBQSxxQkFBQUEsVUFBVVksT0FBTyxjQUFqQloseUNBQUFBLG1CQUFtQmEsbUJBQW1CLENBQ3BDO1lBQUVOLEdBQUc7WUFBR0MsR0FBRztZQUFJTSxHQUFHO1FBQUUsR0FDcEI7WUFBRVAsR0FBRztZQUFHQyxHQUFHLENBQUM7WUFBR00sR0FBRztRQUFFLEdBQ3BCO0lBRUo7SUFFQWhCLHFEQUFRQSxDQUFDLENBQUNpQixPQUFPQztRQUNmLElBQUloQixVQUFVWSxPQUFPLEVBQUU7WUFDckIsTUFBTSxFQUFFSyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR1Y7WUFFbkQsTUFBTVcsVUFBVTtnQkFBRWQsR0FBRztnQkFBR0MsR0FBRztnQkFBR00sR0FBRztZQUFFO1lBQ25DLE1BQU1RLFNBQVM7Z0JBQUVmLEdBQUc7Z0JBQUdDLEdBQUc7Z0JBQUdNLEdBQUc7WUFBRTtZQUVsQyxNQUFNUyxrQkFBa0IsTUFBTVA7WUFDOUIsTUFBTVEsaUJBQWlCLE1BQU1SO1lBRTdCLElBQUlDLFNBQVM7Z0JBQ1hJLFFBQVFQLENBQUMsSUFBSVM7Z0JBQ2JELE9BQU9mLENBQUMsSUFBSWlCO1lBQ2Q7WUFDQSxJQUFJTixVQUFVO2dCQUNaRyxRQUFRUCxDQUFDLElBQUlTO2dCQUNiRCxPQUFPZixDQUFDLElBQUlpQjtZQUNkO1lBQ0EsSUFBSUwsVUFBVTtnQkFDWkUsUUFBUWQsQ0FBQyxJQUFJZ0I7Z0JBQ2JELE9BQU9SLENBQUMsSUFBSVU7WUFDZDtZQUNBLElBQUlKLFdBQVc7Z0JBQ2JDLFFBQVFkLENBQUMsSUFBSWdCO2dCQUNiRCxPQUFPUixDQUFDLElBQUlVO1lBQ2Q7WUFFQXhCLFVBQVVZLE9BQU8sQ0FBQ2EsWUFBWSxDQUFDSixTQUFTO1lBQ3hDckIsVUFBVVksT0FBTyxDQUFDYyxrQkFBa0IsQ0FBQ0osUUFBUTtRQUMvQztJQUNGO0lBRUFsQyxnREFBU0EsQ0FBQztRQUNScUIsY0FDRSxDQUFDTSxRQUFVQSxNQUFNSixJQUFJLEVBQ3JCLENBQUNnQjtZQUNDLElBQUlBLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQztZQUN2QmxCO1FBQ0Y7SUFFSixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRSw0RUFBQ2Ysd0RBQU9BO1lBQUNrQyxLQUFLOzs4QkFFWiw4REFBQ3ZDLDBEQUFXQTtvQkFBQ3dDLFlBQVk7b0JBQU9DLE9BQU07Ozs7Ozs4QkFFdEMsOERBQUNuQywwREFBU0E7b0JBQ1JvQyxXQUFXO29CQUNYQyxhQUFhO29CQUNiQyxNQUFNO29CQUNOQyxVQUFVO29CQUNWQyxVQUFVO29CQUNWQyxlQUFlO29CQUNmQyxnQkFBZ0I7b0JBQ2hCLDhCQUE4QjtvQkFDOUJDLEtBQUt4Qzs7c0NBRUwsOERBQUNSLGdFQUFpQkE7NEJBQ2hCaUQsVUFBVTtnQ0FBQztnQ0FBRztnQ0FBRzs2QkFBRzs0QkFDcEJDLFVBQVU7Z0NBQUMsQ0FBQztnQ0FBSztnQ0FBRzs2QkFBRTs0QkFDdEJDLFdBQVc7NEJBRVhILEtBQUt2Qzs7Ozs7O3NDQUVQLDhEQUFDUCwwREFBTUE7NEJBQUNTLFVBQVVBOzs7Ozs7Ozs7Ozs7OEJBR3BCLDhEQUFDUiwrREFBY0E7b0JBQUM4QyxVQUFVO3dCQUFDO3dCQUFHLENBQUM7d0JBQUc7cUJBQUU7b0JBQUVHLE1BQU07d0JBQUM7d0JBQUs7d0JBQUs7cUJBQUk7OEJBQ3pELDRFQUFDQzs7MENBQ0MsOERBQUNDO2dDQUFZRixNQUFNO29DQUFDO29DQUFJO29DQUFHO2lDQUFHOzs7Ozs7MENBQzlCLDhEQUFDRztnQ0FBcUJDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd4QztHQXRHTWpEOztRQVM2Qk4sa0VBQW1CQTtRQVVwREssaURBQVFBOzs7S0FuQkpDO0FBd0dOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4P2FkY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRW52aXJvbm1lbnQsXG4gIE9yYml0Q29udHJvbHMsXG4gIFBlcnNwZWN0aXZlQ2FtZXJhLFxuICB1c2VLZXlib2FyZENvbnRyb2xzLFxufSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCBSb2NrZXQgZnJvbSBcIkBjb21wb25lbnRzL1JvY2tldFwiO1xuaW1wb3J0IHtcbiAgQ3Vib2lkQ29sbGlkZXIsXG4gIFBoeXNpY3MsXG4gIFJhcGllclJpZ2lkQm9keSxcbiAgUmlnaWRCb2R5LFxuICBxdWF0LFxufSBmcm9tIFwiQHJlYWN0LXRocmVlL3JhcGllclwiO1xuaW1wb3J0IHsgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcblxuY29uc3QgUm9ja2V0U2NlbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvY2tldFJlZiA9IHVzZVJlZjxSYXBpZXJSaWdpZEJvZHk+KCk7XG4gIGNvbnN0IGNhbSA9IHVzZVJlZjxhbnk+KCk7XG4gIGNvbnN0IGRvdCA9IHVzZVJlZjxhbnk+KCk7XG5cbiAgY29uc3QgW2lzRmx5aW5nLCBzZXRJc0ZseWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gQWRkIHN0YXRlIGZvciBtb3VzZSBwb3NpdGlvblxuICBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IFtzdWJzY3JpYmVLZXlzLCBnZXRLZXlzXSA9IHVzZUtleWJvYXJkQ29udHJvbHMoKTtcblxuICBjb25zdCBqdW1wID0gKCkgPT4ge1xuICAgIHJvY2tldFJlZi5jdXJyZW50Py5hcHBseUltcHVsc2VBdFBvaW50KFxuICAgICAgeyB4OiAwLCB5OiA1MCwgejogMCB9LFxuICAgICAgeyB4OiAwLCB5OiAtMSwgejogMCB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH07XG5cbiAgdXNlRnJhbWUoKHN0YXRlLCBkZWx0YSkgPT4ge1xuICAgIGlmIChyb2NrZXRSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgeyBmb3J3YXJkLCBiYWNrd2FyZCwgbGVmdHdhcmQsIHJpZ2h0d2FyZCB9ID0gZ2V0S2V5cygpO1xuXG4gICAgICBjb25zdCBpbXB1bHNlID0geyB4OiAwLCB5OiAwLCB6OiAwIH07XG4gICAgICBjb25zdCB0b3JxdWUgPSB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcblxuICAgICAgY29uc3QgaW1wdWxzZVN0cmVuZ3RoID0gMTAwICogZGVsdGE7XG4gICAgICBjb25zdCB0b3JxdWVTdHJlbmd0aCA9IDEwMCAqIGRlbHRhO1xuXG4gICAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgICBpbXB1bHNlLnogLT0gaW1wdWxzZVN0cmVuZ3RoO1xuICAgICAgICB0b3JxdWUueCAtPSB0b3JxdWVTdHJlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChiYWNrd2FyZCkge1xuICAgICAgICBpbXB1bHNlLnogKz0gaW1wdWxzZVN0cmVuZ3RoO1xuICAgICAgICB0b3JxdWUueCArPSB0b3JxdWVTdHJlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChsZWZ0d2FyZCkge1xuICAgICAgICBpbXB1bHNlLnggLT0gaW1wdWxzZVN0cmVuZ3RoO1xuICAgICAgICB0b3JxdWUueiAtPSB0b3JxdWVTdHJlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChyaWdodHdhcmQpIHtcbiAgICAgICAgaW1wdWxzZS54ICs9IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnogKz0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5SW1wdWxzZShpbXB1bHNlLCB0cnVlKTtcbiAgICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5VG9ycXVlSW1wdWxzZSh0b3JxdWUsIHRydWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdWJzY3JpYmVLZXlzKFxuICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5qdW1wLFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSkgY29uc29sZS5sb2coXCJZZXMsIGp1bXAhXCIpO1xuICAgICAgICBqdW1wKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQaHlzaWNzIGRlYnVnPlxuICAgICAgICB7LyogPE9yYml0Q29udHJvbHMgLz4gKi99XG4gICAgICAgIDxFbnZpcm9ubWVudCBiYWNrZ3JvdW5kPXtmYWxzZX0gZmlsZXM9XCJhZGFtc19wbGFjZV9icmlkZ2VfMWsuaGRyXCIgLz5cblxuICAgICAgICA8UmlnaWRCb2R5XG4gICAgICAgICAgY29sbGlkZXJzPXtcImh1bGxcIn1cbiAgICAgICAgICByZXN0aXR1dGlvbj17MC4yfVxuICAgICAgICAgIG1hc3M9ezB9XG4gICAgICAgICAgY2FuU2xlZXA9e2ZhbHNlfVxuICAgICAgICAgIGZyaWN0aW9uPXsxfVxuICAgICAgICAgIGxpbmVhckRhbXBpbmc9ezAuNX1cbiAgICAgICAgICBhbmd1bGFyRGFtcGluZz17MC41fVxuICAgICAgICAgIC8vIGFuZ3VsYXJWZWxvY2l0eT17WzAsIDEsIDBdfVxuICAgICAgICAgIHJlZj17cm9ja2V0UmVmfVxuICAgICAgICA+XG4gICAgICAgICAgPFBlcnNwZWN0aXZlQ2FtZXJhXG4gICAgICAgICAgICBwb3NpdGlvbj17WzAsIDIsIDUwXX1cbiAgICAgICAgICAgIHJvdGF0aW9uPXtbLTAuMywgMCwgMF19XG4gICAgICAgICAgICBtYWtlRGVmYXVsdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZWY9e2NhbX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSb2NrZXQgaXNGbHlpbmc9e2lzRmx5aW5nfSAvPlxuICAgICAgICA8L1JpZ2lkQm9keT5cblxuICAgICAgICA8Q3Vib2lkQ29sbGlkZXIgcG9zaXRpb249e1swLCAtMiwgMF19IGFyZ3M9e1sxMDAsIDAuNSwgMTAwXX0+XG4gICAgICAgICAgPG1lc2g+XG4gICAgICAgICAgICA8Ym94R2VvbWV0cnkgYXJncz17WzQwLCAxLCA0MF19IC8+XG4gICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgPC9tZXNoPlxuICAgICAgICA8L0N1Ym9pZENvbGxpZGVyPlxuXG4gICAgICAgIHsvKiA8bWVzaCBwb3NpdGlvbj17WzAsIDAsIDBdfSByZWY9e2RvdH0+XG4gICAgICAgICAgPHNwaGVyZUdlb21ldHJ5IGFyZ3M9e1sxLCAxNiwgMTZdfSAvPlxuICAgICAgICAgIDxtZXNoQmFzaWNNYXRlcmlhbCBjb2xvcj1cInJlZFwiIC8+XG4gICAgICAgIDwvbWVzaD4gKi99XG4gICAgICA8L1BoeXNpY3M+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb2NrZXRTY2VuZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRW52aXJvbm1lbnQiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInVzZUtleWJvYXJkQ29udHJvbHMiLCJSb2NrZXQiLCJDdWJvaWRDb2xsaWRlciIsIlBoeXNpY3MiLCJSaWdpZEJvZHkiLCJ1c2VGcmFtZSIsIlJvY2tldFNjZW5lIiwicm9ja2V0UmVmIiwiY2FtIiwiZG90IiwiaXNGbHlpbmciLCJzZXRJc0ZseWluZyIsIm1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwieCIsInkiLCJzdWJzY3JpYmVLZXlzIiwiZ2V0S2V5cyIsImp1bXAiLCJjdXJyZW50IiwiYXBwbHlJbXB1bHNlQXRQb2ludCIsInoiLCJzdGF0ZSIsImRlbHRhIiwiZm9yd2FyZCIsImJhY2t3YXJkIiwibGVmdHdhcmQiLCJyaWdodHdhcmQiLCJpbXB1bHNlIiwidG9ycXVlIiwiaW1wdWxzZVN0cmVuZ3RoIiwidG9ycXVlU3RyZW5ndGgiLCJhcHBseUltcHVsc2UiLCJhcHBseVRvcnF1ZUltcHVsc2UiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWJ1ZyIsImJhY2tncm91bmQiLCJmaWxlcyIsImNvbGxpZGVycyIsInJlc3RpdHV0aW9uIiwibWFzcyIsImNhblNsZWVwIiwiZnJpY3Rpb24iLCJsaW5lYXJEYW1waW5nIiwiYW5ndWxhckRhbXBpbmciLCJyZWYiLCJwb3NpdGlvbiIsInJvdGF0aW9uIiwibWFrZURlZmF1bHQiLCJhcmdzIiwibWVzaCIsImJveEdlb21ldHJ5IiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});