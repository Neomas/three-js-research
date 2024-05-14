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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLeft, setIsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isRight, setIsRight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C)(()=>{\n        if (isFlying) {\n            if (rocketRef.current) {\n                const quaternion = (0,_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.quat)(rocketRef.current.rotation());\n                const forceDirection = new three__WEBPACK_IMPORTED_MODULE_5__.Euler(0, 0, 0, \"XYZ\");\n                const force = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 1, -1).applyEuler(forceDirection);\n                // Get the top direction of the rocket\n                const topDirection = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 1, 0).applyQuaternion(quaternion);\n                // Apply the force in the direction of the top of the rocket\n                force.add(topDirection);\n                rocketRef.current.applyImpulse(force, true);\n                rocketRef.current.applyImpulse(force, true);\n            }\n        }\n        if (isLeft) {\n            if (rocketRef.current) {\n                rocketRef.current.applyImpulseAtPoint({\n                    x: 0,\n                    y: 10,\n                    z: 0\n                }, true);\n            }\n        }\n        if (isRight) {\n            if (rocketRef.current) {\n                rocketRef.current.applyImpulse({\n                    x: 0,\n                    y: -10,\n                    z: 0\n                }, true);\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (event)=>{\n            console.log(event.code);\n            // console.log(rocketRef.current);\n            if (event.code === \"Space\" && rocketRef.current) {\n                setIsFlying(true);\n            }\n            if (event.code === \"keyA\" && rocketRef.current) {\n                setIsLeft(true);\n            }\n            if (event.code === \"keyD\" && rocketRef.current) {\n                setIsRight(true);\n            }\n        };\n        const handleKeyUp = (event)=>{\n            setIsFlying(false);\n            setIsLeft(false);\n            setIsRight(false);\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        window.addEventListener(\"keyup\", handleKeyUp);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n            window.removeEventListener(\"keyup\", handleKeyUp);\n        };\n    }, []);\n    //   useEffect(() => {\n    //     window.addEventListener(\"click\", handleClick);\n    //     return () => {\n    //       window.removeEventListener(\"click\", handleClick);\n    //     };\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            debug: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.OrbitControls, {}, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.Environment, {\n                    background: false,\n                    files: \"adams_place_bridge_1k.hdr\"\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera, {\n                    position: [\n                        0,\n                        10,\n                        10\n                    ],\n                    makeDefault: true,\n                    ref: cam\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 1,\n                    angularVelocity: [\n                        0,\n                        1,\n                        0\n                    ],\n                    //   linearVelocity={[0, 10, 0]}\n                    ref: rocketRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -2,\n                        0\n                    ],\n                    args: [\n                        20,\n                        0.5,\n                        20\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 116,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"Adj23zH/TJT7VTGNL4snkVg0D4Q=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFLaEM7QUFDYTtBQU9YO0FBQ2lCO0FBQ2Y7QUFFL0IsTUFBTWMsY0FBYzs7SUFDbEIsTUFBTUMsWUFBWWIsNkNBQU1BO0lBQ3hCLE1BQU1jLE1BQU1kLDZDQUFNQTtJQUVsQixNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZ0IsUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHbkIsK0NBQVFBLENBQUM7SUFFdkNTLHFEQUFRQSxDQUFDO1FBQ1AsSUFBSUssVUFBVTtZQUNaLElBQUlGLFVBQVVRLE9BQU8sRUFBRTtnQkFDckIsTUFBTUMsYUFBYWIseURBQUlBLENBQUNJLFVBQVVRLE9BQU8sQ0FBQ0UsUUFBUTtnQkFDbEQsTUFBTUMsaUJBQWlCLElBQUliLHdDQUFXLENBQUMsR0FBRyxHQUFHLEdBQUc7Z0JBQ2hELE1BQU1lLFFBQVEsSUFBSWYsMENBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHaUIsVUFBVSxDQUFDSjtnQkFFckQsc0NBQXNDO2dCQUN0QyxNQUFNSyxlQUFlLElBQUlsQiwwQ0FBYSxDQUFDLEdBQUcsR0FBRyxHQUFHbUIsZUFBZSxDQUM3RFI7Z0JBR0YsNERBQTREO2dCQUM1REksTUFBTUssR0FBRyxDQUFDRjtnQkFFVmhCLFVBQVVRLE9BQU8sQ0FBQ1csWUFBWSxDQUFDTixPQUFPO2dCQUV0Q2IsVUFBVVEsT0FBTyxDQUFDVyxZQUFZLENBQUNOLE9BQU87WUFDeEM7UUFDRjtRQUNBLElBQUlULFFBQVE7WUFDVixJQUFJSixVQUFVUSxPQUFPLEVBQUU7Z0JBQ3JCUixVQUFVUSxPQUFPLENBQUNZLG1CQUFtQixDQUFDO29CQUFFQyxHQUFHO29CQUFHQyxHQUFHO29CQUFJQyxHQUFHO2dCQUFFLEdBQUc7WUFDL0Q7UUFDRjtRQUVBLElBQUlqQixTQUFTO1lBQ1gsSUFBSU4sVUFBVVEsT0FBTyxFQUFFO2dCQUNyQlIsVUFBVVEsT0FBTyxDQUFDVyxZQUFZLENBQUM7b0JBQUVFLEdBQUc7b0JBQUdDLEdBQUcsQ0FBQztvQkFBSUMsR0FBRztnQkFBRSxHQUFHO1lBQ3pEO1FBQ0Y7SUFDRjtJQUVBckMsZ0RBQVNBLENBQUM7UUFDUixNQUFNc0MsZ0JBQWdCLENBQUNDO1lBQ3JCQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLElBQUk7WUFDdEIsa0NBQWtDO1lBRWxDLElBQUlILE1BQU1HLElBQUksS0FBSyxXQUFXNUIsVUFBVVEsT0FBTyxFQUFFO2dCQUMvQ0wsWUFBWTtZQUNkO1lBQ0EsSUFBSXNCLE1BQU1HLElBQUksS0FBSyxVQUFVNUIsVUFBVVEsT0FBTyxFQUFFO2dCQUM5Q0gsVUFBVTtZQUNaO1lBQ0EsSUFBSW9CLE1BQU1HLElBQUksS0FBSyxVQUFVNUIsVUFBVVEsT0FBTyxFQUFFO2dCQUM5Q0QsV0FBVztZQUNiO1FBQ0Y7UUFDQSxNQUFNc0IsY0FBYyxDQUFDSjtZQUNuQnRCLFlBQVk7WUFDWkUsVUFBVTtZQUNWRSxXQUFXO1FBQ2I7UUFFQXVCLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdQO1FBQ25DTSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTRjtRQUNqQyxPQUFPO1lBQ0xDLE9BQU9FLG1CQUFtQixDQUFDLFdBQVdSO1lBQ3RDTSxPQUFPRSxtQkFBbUIsQ0FBQyxTQUFTSDtRQUN0QztJQUNGLEdBQUcsRUFBRTtJQUVMLHNCQUFzQjtJQUN0QixxREFBcUQ7SUFDckQscUJBQXFCO0lBQ3JCLDBEQUEwRDtJQUMxRCxTQUFTO0lBQ1QsWUFBWTtJQUVaLHFCQUNFO2tCQUNFLDRFQUFDbkMsd0RBQU9BO1lBQUN1QyxLQUFLOzs4QkFDWiw4REFBQzNDLDREQUFhQTs7Ozs7OEJBQ2QsOERBQUNELDBEQUFXQTtvQkFBQzZDLFlBQVk7b0JBQU9DLE9BQU07Ozs7Ozs4QkFFdEMsOERBQUM1QyxnRUFBaUJBO29CQUFDNkMsVUFBVTt3QkFBQzt3QkFBRzt3QkFBSTtxQkFBRztvQkFBRUMsV0FBVztvQkFBQ0MsS0FBS3JDOzs7Ozs7OEJBRTNELDhEQUFDTiwwREFBU0E7b0JBQ1I0QyxXQUFXO29CQUNYQyxhQUFhO29CQUNiQyxpQkFBaUI7d0JBQUM7d0JBQUc7d0JBQUc7cUJBQUU7b0JBQzFCLGdDQUFnQztvQkFDaENILEtBQUt0Qzs4QkFFTCw0RUFBQ1IsMERBQU1BOzs7Ozs7Ozs7OzhCQUdULDhEQUFDQywrREFBY0E7b0JBQUMyQyxVQUFVO3dCQUFDO3dCQUFHLENBQUM7d0JBQUc7cUJBQUU7b0JBQUVNLE1BQU07d0JBQUM7d0JBQUk7d0JBQUs7cUJBQUc7OEJBQ3ZELDRFQUFDQzs7MENBQ0MsOERBQUNDO2dDQUFZRixNQUFNO29DQUFDO29DQUFJO29DQUFHO2lDQUFHOzs7Ozs7MENBQzlCLDhEQUFDRztnQ0FBcUJDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QztHQXhHTS9DOztRQVFKRixpREFBUUE7OztLQVJKRTtBQTBHTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JvY2tldFNjZW5lLnRzeD9hZGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBPcmJpdENvbnRyb2xzLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgUm9ja2V0IGZyb20gXCJAY29tcG9uZW50cy9Sb2NrZXRcIjtcbmltcG9ydCB7XG4gIEN1Ym9pZENvbGxpZGVyLFxuICBQaHlzaWNzLFxuICBSYXBpZXJSaWdpZEJvZHksXG4gIFJpZ2lkQm9keSxcbiAgcXVhdCxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9yYXBpZXJcIjtcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IFJvY2tldFNjZW5lID0gKCkgPT4ge1xuICBjb25zdCByb2NrZXRSZWYgPSB1c2VSZWY8UmFwaWVyUmlnaWRCb2R5PigpO1xuICBjb25zdCBjYW0gPSB1c2VSZWY8YW55PigpO1xuXG4gIGNvbnN0IFtpc0ZseWluZywgc2V0SXNGbHlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMZWZ0LCBzZXRJc0xlZnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNSaWdodCwgc2V0SXNSaWdodF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIGlmIChpc0ZseWluZykge1xuICAgICAgaWYgKHJvY2tldFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHF1YXRlcm5pb24gPSBxdWF0KHJvY2tldFJlZi5jdXJyZW50LnJvdGF0aW9uKCkpO1xuICAgICAgICBjb25zdCBmb3JjZURpcmVjdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAwLCBcIlhZWlwiKTtcbiAgICAgICAgY29uc3QgZm9yY2UgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAtMSkuYXBwbHlFdWxlcihmb3JjZURpcmVjdGlvbik7XG5cbiAgICAgICAgLy8gR2V0IHRoZSB0b3AgZGlyZWN0aW9uIG9mIHRoZSByb2NrZXRcbiAgICAgICAgY29uc3QgdG9wRGlyZWN0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkuYXBwbHlRdWF0ZXJuaW9uKFxuICAgICAgICAgIHF1YXRlcm5pb25cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBBcHBseSB0aGUgZm9yY2UgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgdG9wIG9mIHRoZSByb2NrZXRcbiAgICAgICAgZm9yY2UuYWRkKHRvcERpcmVjdGlvbik7XG5cbiAgICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlKGZvcmNlLCB0cnVlKTtcblxuICAgICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseUltcHVsc2UoZm9yY2UsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNMZWZ0KSB7XG4gICAgICBpZiAocm9ja2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlQXRQb2ludCh7IHg6IDAsIHk6IDEwLCB6OiAwIH0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1JpZ2h0KSB7XG4gICAgICBpZiAocm9ja2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlKHsgeDogMCwgeTogLTEwLCB6OiAwIH0sIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudC5jb2RlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJvY2tldFJlZi5jdXJyZW50KTtcblxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiU3BhY2VcIiAmJiByb2NrZXRSZWYuY3VycmVudCkge1xuICAgICAgICBzZXRJc0ZseWluZyh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jb2RlID09PSBcImtleUFcIiAmJiByb2NrZXRSZWYuY3VycmVudCkge1xuICAgICAgICBzZXRJc0xlZnQodHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJrZXlEXCIgJiYgcm9ja2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0SXNSaWdodCh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUtleVVwID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBzZXRJc0ZseWluZyhmYWxzZSk7XG4gICAgICBzZXRJc0xlZnQoZmFsc2UpO1xuICAgICAgc2V0SXNSaWdodChmYWxzZSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUtleVVwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVLZXlVcCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAvLyAgICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gIC8vICAgICB9O1xuICAvLyAgIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGh5c2ljcyBkZWJ1Zz5cbiAgICAgICAgPE9yYml0Q29udHJvbHMgLz5cbiAgICAgICAgPEVudmlyb25tZW50IGJhY2tncm91bmQ9e2ZhbHNlfSBmaWxlcz1cImFkYW1zX3BsYWNlX2JyaWRnZV8xay5oZHJcIiAvPlxuXG4gICAgICAgIDxQZXJzcGVjdGl2ZUNhbWVyYSBwb3NpdGlvbj17WzAsIDEwLCAxMF19IG1ha2VEZWZhdWx0IHJlZj17Y2FtfSAvPlxuXG4gICAgICAgIDxSaWdpZEJvZHlcbiAgICAgICAgICBjb2xsaWRlcnM9e1wiaHVsbFwifVxuICAgICAgICAgIHJlc3RpdHV0aW9uPXsxfVxuICAgICAgICAgIGFuZ3VsYXJWZWxvY2l0eT17WzAsIDEsIDBdfVxuICAgICAgICAgIC8vICAgbGluZWFyVmVsb2NpdHk9e1swLCAxMCwgMF19XG4gICAgICAgICAgcmVmPXtyb2NrZXRSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8Um9ja2V0IC8+XG4gICAgICAgIDwvUmlnaWRCb2R5PlxuXG4gICAgICAgIDxDdWJvaWRDb2xsaWRlciBwb3NpdGlvbj17WzAsIC0yLCAwXX0gYXJncz17WzIwLCAwLjUsIDIwXX0+XG4gICAgICAgICAgPG1lc2g+XG4gICAgICAgICAgICA8Ym94R2VvbWV0cnkgYXJncz17WzQwLCAxLCA0MF19IC8+XG4gICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgPC9tZXNoPlxuICAgICAgICA8L0N1Ym9pZENvbGxpZGVyPlxuICAgICAgPC9QaHlzaWNzPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9ja2V0U2NlbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkVudmlyb25tZW50IiwiT3JiaXRDb250cm9scyIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiUm9ja2V0IiwiQ3Vib2lkQ29sbGlkZXIiLCJQaHlzaWNzIiwiUmlnaWRCb2R5IiwicXVhdCIsInVzZUZyYW1lIiwiVEhSRUUiLCJSb2NrZXRTY2VuZSIsInJvY2tldFJlZiIsImNhbSIsImlzRmx5aW5nIiwic2V0SXNGbHlpbmciLCJpc0xlZnQiLCJzZXRJc0xlZnQiLCJpc1JpZ2h0Iiwic2V0SXNSaWdodCIsImN1cnJlbnQiLCJxdWF0ZXJuaW9uIiwicm90YXRpb24iLCJmb3JjZURpcmVjdGlvbiIsIkV1bGVyIiwiZm9yY2UiLCJWZWN0b3IzIiwiYXBwbHlFdWxlciIsInRvcERpcmVjdGlvbiIsImFwcGx5UXVhdGVybmlvbiIsImFkZCIsImFwcGx5SW1wdWxzZSIsImFwcGx5SW1wdWxzZUF0UG9pbnQiLCJ4IiwieSIsInoiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsImhhbmRsZUtleVVwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWJ1ZyIsImJhY2tncm91bmQiLCJmaWxlcyIsInBvc2l0aW9uIiwibWFrZURlZmF1bHQiLCJyZWYiLCJjb2xsaWRlcnMiLCJyZXN0aXR1dGlvbiIsImFuZ3VsYXJWZWxvY2l0eSIsImFyZ3MiLCJtZXNoIiwiYm94R2VvbWV0cnkiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});