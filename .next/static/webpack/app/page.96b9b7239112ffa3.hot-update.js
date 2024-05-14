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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLeft, setIsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isRight, setIsRight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C)(()=>{\n        if (isFlying) {\n            if (rocketRef.current) {\n                const quaternion = (0,_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.quat)(rocketRef.current.rotation());\n                const forceDirection = new three__WEBPACK_IMPORTED_MODULE_5__.Euler(0, 0, 0, \"XYZ\");\n                const force = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 1, -1).applyEuler(forceDirection);\n                rocketRef.current.setRotation(quaternion, true);\n                rocketRef.current.applyImpulse(force, true);\n            }\n        // rocketRef.current.applyTorqueImpulse({ x: 0, y: 0.1, z: 0 }, true);\n        }\n        if (isLeft) {\n            if (rocketRef.current) {\n                const quaternion = (0,_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.quat)(rocketRef.current.rotation());\n                const forceDirection = new three__WEBPACK_IMPORTED_MODULE_5__.Euler(0, 0, 0, \"XYZ\");\n                const force = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 1, -1).applyEuler(forceDirection);\n                rocketRef.current.setRotation(quaternion, true);\n                rocketRef.current.applyImpulse(force, true);\n            }\n        // rocketRef.current.applyTorqueImpulse({ x: 0, y: 0.1, z: 0 }, true);\n        }\n        if (isRight) {\n            if (rocketRef.current) {\n                const quaternion = (0,_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.quat)(rocketRef.current.rotation());\n                const forceDirection = new three__WEBPACK_IMPORTED_MODULE_5__.Euler(0, 0, 0, \"XYZ\");\n                const force = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 1, -1).applyEuler(forceDirection);\n                rocketRef.current.setRotation(quaternion, true);\n                rocketRef.current.applyImpulse(force, true);\n            }\n        // rocketRef.current.applyTorqueImpulse({ x: 0, y: 0.1, z: 0 }, true);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (event)=>{\n            console.log(event.code);\n            // console.log(rocketRef.current);\n            if (event.code === \"Space\" && rocketRef.current) {\n                setIsFlying(true);\n            }\n            if (event.code === \"keyA\" && rocketRef.current) {\n                setIsLeft(true);\n            }\n            if (event.code === \"keyD\" && rocketRef.current) {\n                setIsRight(true);\n            }\n        };\n        const handleKeyUp = (event)=>{\n            setIsFlying(false);\n            setIsLeft(false);\n            setIsRight(false);\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        window.addEventListener(\"keyup\", handleKeyUp);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n            window.removeEventListener(\"keyup\", handleKeyUp);\n        };\n    }, []);\n    //   useEffect(() => {\n    //     window.addEventListener(\"click\", handleClick);\n    //     return () => {\n    //       window.removeEventListener(\"click\", handleClick);\n    //     };\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            debug: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.OrbitControls, {}, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.Environment, {\n                    background: false,\n                    files: \"adams_place_bridge_1k.hdr\"\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera, {\n                    position: [\n                        0,\n                        10,\n                        10\n                    ],\n                    makeDefault: true,\n                    ref: cam\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 1,\n                    angularVelocity: [\n                        0,\n                        1,\n                        0\n                    ],\n                    //   linearVelocity={[0, 10, 0]}\n                    ref: rocketRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -2,\n                        0\n                    ],\n                    args: [\n                        20,\n                        0.5,\n                        20\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 104,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"Adj23zH/TJT7VTGNL4snkVg0D4Q=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFLaEM7QUFDYTtBQU9YO0FBQ2lCO0FBQ2Y7QUFFL0IsTUFBTWMsY0FBYzs7SUFDbEIsTUFBTUMsWUFBWWIsNkNBQU1BO0lBQ3hCLE1BQU1jLE1BQU1kLDZDQUFNQTtJQUVsQixNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZ0IsUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHbkIsK0NBQVFBLENBQUM7SUFFdkNTLHFEQUFRQSxDQUFDO1FBQ1AsSUFBSUssVUFBVTtZQUNaLElBQUlGLFVBQVVRLE9BQU8sRUFBRTtnQkFDckIsTUFBTUMsYUFBYWIseURBQUlBLENBQUNJLFVBQVVRLE9BQU8sQ0FBQ0UsUUFBUTtnQkFDbEQsTUFBTUMsaUJBQWlCLElBQUliLHdDQUFXLENBQUMsR0FBRyxHQUFHLEdBQUc7Z0JBRWhELE1BQU1lLFFBQVEsSUFBSWYsMENBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHaUIsVUFBVSxDQUFDSjtnQkFFckRYLFVBQVVRLE9BQU8sQ0FBQ1EsV0FBVyxDQUFDUCxZQUFZO2dCQUMxQ1QsVUFBVVEsT0FBTyxDQUFDUyxZQUFZLENBQUNKLE9BQU87WUFDeEM7UUFDQSxzRUFBc0U7UUFDeEU7UUFDQSxJQUFJVCxRQUFRO1lBQ1YsSUFBSUosVUFBVVEsT0FBTyxFQUFFO2dCQUNyQixNQUFNQyxhQUFhYix5REFBSUEsQ0FBQ0ksVUFBVVEsT0FBTyxDQUFDRSxRQUFRO2dCQUNsRCxNQUFNQyxpQkFBaUIsSUFBSWIsd0NBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRztnQkFFaEQsTUFBTWUsUUFBUSxJQUFJZiwwQ0FBYSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUdpQixVQUFVLENBQUNKO2dCQUVyRFgsVUFBVVEsT0FBTyxDQUFDUSxXQUFXLENBQUNQLFlBQVk7Z0JBQzFDVCxVQUFVUSxPQUFPLENBQUNTLFlBQVksQ0FBQ0osT0FBTztZQUN4QztRQUNBLHNFQUFzRTtRQUN4RTtRQUVBLElBQUlQLFNBQVM7WUFDWCxJQUFJTixVQUFVUSxPQUFPLEVBQUU7Z0JBQ3JCLE1BQU1DLGFBQWFiLHlEQUFJQSxDQUFDSSxVQUFVUSxPQUFPLENBQUNFLFFBQVE7Z0JBQ2xELE1BQU1DLGlCQUFpQixJQUFJYix3Q0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHO2dCQUVoRCxNQUFNZSxRQUFRLElBQUlmLDBDQUFhLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBR2lCLFVBQVUsQ0FBQ0o7Z0JBRXJEWCxVQUFVUSxPQUFPLENBQUNRLFdBQVcsQ0FBQ1AsWUFBWTtnQkFDMUNULFVBQVVRLE9BQU8sQ0FBQ1MsWUFBWSxDQUFDSixPQUFPO1lBQ3hDO1FBQ0Esc0VBQXNFO1FBQ3hFO0lBQ0Y7SUFFQTNCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWdDLGdCQUFnQixDQUFDQztZQUNyQkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxJQUFJO1lBQ3RCLGtDQUFrQztZQUVsQyxJQUFJSCxNQUFNRyxJQUFJLEtBQUssV0FBV3RCLFVBQVVRLE9BQU8sRUFBRTtnQkFDL0NMLFlBQVk7WUFDZDtZQUNBLElBQUlnQixNQUFNRyxJQUFJLEtBQUssVUFBVXRCLFVBQVVRLE9BQU8sRUFBRTtnQkFDOUNILFVBQVU7WUFDWjtZQUNBLElBQUljLE1BQU1HLElBQUksS0FBSyxVQUFVdEIsVUFBVVEsT0FBTyxFQUFFO2dCQUM5Q0QsV0FBVztZQUNiO1FBQ0Y7UUFDQSxNQUFNZ0IsY0FBYyxDQUFDSjtZQUNuQmhCLFlBQVk7WUFDWkUsVUFBVTtZQUNWRSxXQUFXO1FBQ2I7UUFFQWlCLE9BQU9DLGdCQUFnQixDQUFDLFdBQVdQO1FBQ25DTSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTRjtRQUNqQyxPQUFPO1lBQ0xDLE9BQU9FLG1CQUFtQixDQUFDLFdBQVdSO1lBQ3RDTSxPQUFPRSxtQkFBbUIsQ0FBQyxTQUFTSDtRQUN0QztJQUNGLEdBQUcsRUFBRTtJQUVMLHNCQUFzQjtJQUN0QixxREFBcUQ7SUFDckQscUJBQXFCO0lBQ3JCLDBEQUEwRDtJQUMxRCxTQUFTO0lBQ1QsWUFBWTtJQUVaLHFCQUNFO2tCQUNFLDRFQUFDN0Isd0RBQU9BO1lBQUNpQyxLQUFLOzs4QkFDWiw4REFBQ3JDLDREQUFhQTs7Ozs7OEJBQ2QsOERBQUNELDBEQUFXQTtvQkFBQ3VDLFlBQVk7b0JBQU9DLE9BQU07Ozs7Ozs4QkFFdEMsOERBQUN0QyxnRUFBaUJBO29CQUFDdUMsVUFBVTt3QkFBQzt3QkFBRzt3QkFBSTtxQkFBRztvQkFBRUMsV0FBVztvQkFBQ0MsS0FBSy9COzs7Ozs7OEJBRTNELDhEQUFDTiwwREFBU0E7b0JBQ1JzQyxXQUFXO29CQUNYQyxhQUFhO29CQUNiQyxpQkFBaUI7d0JBQUM7d0JBQUc7d0JBQUc7cUJBQUU7b0JBQzFCLGdDQUFnQztvQkFDaENILEtBQUtoQzs4QkFFTCw0RUFBQ1IsMERBQU1BOzs7Ozs7Ozs7OzhCQUdULDhEQUFDQywrREFBY0E7b0JBQUNxQyxVQUFVO3dCQUFDO3dCQUFHLENBQUM7d0JBQUc7cUJBQUU7b0JBQUVNLE1BQU07d0JBQUM7d0JBQUk7d0JBQUs7cUJBQUc7OEJBQ3ZELDRFQUFDQzs7MENBQ0MsOERBQUNDO2dDQUFZRixNQUFNO29DQUFDO29DQUFJO29DQUFHO2lDQUFHOzs7Ozs7MENBQzlCLDhEQUFDRztnQ0FBcUJDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QztHQS9HTXpDOztRQVFKRixpREFBUUE7OztLQVJKRTtBQWlITiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JvY2tldFNjZW5lLnRzeD9hZGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBPcmJpdENvbnRyb2xzLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgUm9ja2V0IGZyb20gXCJAY29tcG9uZW50cy9Sb2NrZXRcIjtcbmltcG9ydCB7XG4gIEN1Ym9pZENvbGxpZGVyLFxuICBQaHlzaWNzLFxuICBSYXBpZXJSaWdpZEJvZHksXG4gIFJpZ2lkQm9keSxcbiAgcXVhdCxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9yYXBpZXJcIjtcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IFJvY2tldFNjZW5lID0gKCkgPT4ge1xuICBjb25zdCByb2NrZXRSZWYgPSB1c2VSZWY8UmFwaWVyUmlnaWRCb2R5PigpO1xuICBjb25zdCBjYW0gPSB1c2VSZWY8YW55PigpO1xuXG4gIGNvbnN0IFtpc0ZseWluZywgc2V0SXNGbHlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMZWZ0LCBzZXRJc0xlZnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNSaWdodCwgc2V0SXNSaWdodF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIGlmIChpc0ZseWluZykge1xuICAgICAgaWYgKHJvY2tldFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHF1YXRlcm5pb24gPSBxdWF0KHJvY2tldFJlZi5jdXJyZW50LnJvdGF0aW9uKCkpO1xuICAgICAgICBjb25zdCBmb3JjZURpcmVjdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAwLCBcIlhZWlwiKTtcblxuICAgICAgICBjb25zdCBmb3JjZSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIC0xKS5hcHBseUV1bGVyKGZvcmNlRGlyZWN0aW9uKTtcblxuICAgICAgICByb2NrZXRSZWYuY3VycmVudC5zZXRSb3RhdGlvbihxdWF0ZXJuaW9uLCB0cnVlKTtcbiAgICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlKGZvcmNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8vIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5VG9ycXVlSW1wdWxzZSh7IHg6IDAsIHk6IDAuMSwgejogMCB9LCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKGlzTGVmdCkge1xuICAgICAgaWYgKHJvY2tldFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHF1YXRlcm5pb24gPSBxdWF0KHJvY2tldFJlZi5jdXJyZW50LnJvdGF0aW9uKCkpO1xuICAgICAgICBjb25zdCBmb3JjZURpcmVjdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAwLCBcIlhZWlwiKTtcblxuICAgICAgICBjb25zdCBmb3JjZSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIC0xKS5hcHBseUV1bGVyKGZvcmNlRGlyZWN0aW9uKTtcblxuICAgICAgICByb2NrZXRSZWYuY3VycmVudC5zZXRSb3RhdGlvbihxdWF0ZXJuaW9uLCB0cnVlKTtcbiAgICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlKGZvcmNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8vIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5VG9ycXVlSW1wdWxzZSh7IHg6IDAsIHk6IDAuMSwgejogMCB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoaXNSaWdodCkge1xuICAgICAgaWYgKHJvY2tldFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IHF1YXRlcm5pb24gPSBxdWF0KHJvY2tldFJlZi5jdXJyZW50LnJvdGF0aW9uKCkpO1xuICAgICAgICBjb25zdCBmb3JjZURpcmVjdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAwLCBcIlhZWlwiKTtcblxuICAgICAgICBjb25zdCBmb3JjZSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIC0xKS5hcHBseUV1bGVyKGZvcmNlRGlyZWN0aW9uKTtcblxuICAgICAgICByb2NrZXRSZWYuY3VycmVudC5zZXRSb3RhdGlvbihxdWF0ZXJuaW9uLCB0cnVlKTtcbiAgICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlKGZvcmNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8vIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5VG9ycXVlSW1wdWxzZSh7IHg6IDAsIHk6IDAuMSwgejogMCB9LCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQuY29kZSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyb2NrZXRSZWYuY3VycmVudCk7XG5cbiAgICAgIGlmIChldmVudC5jb2RlID09PSBcIlNwYWNlXCIgJiYgcm9ja2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0SXNGbHlpbmcodHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJrZXlBXCIgJiYgcm9ja2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0SXNMZWZ0KHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwia2V5RFwiICYmIHJvY2tldFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHNldElzUmlnaHQodHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVLZXlVcCA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgc2V0SXNGbHlpbmcoZmFsc2UpO1xuICAgICAgc2V0SXNMZWZ0KGZhbHNlKTtcbiAgICAgIHNldElzUmlnaHQoZmFsc2UpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVLZXlVcCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlS2V5VXApO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgLy8gICAgIHJldHVybiAoKSA9PiB7XG4gIC8vICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuICAvLyAgICAgfTtcbiAgLy8gICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBoeXNpY3MgZGVidWc+XG4gICAgICAgIDxPcmJpdENvbnRyb2xzIC8+XG4gICAgICAgIDxFbnZpcm9ubWVudCBiYWNrZ3JvdW5kPXtmYWxzZX0gZmlsZXM9XCJhZGFtc19wbGFjZV9icmlkZ2VfMWsuaGRyXCIgLz5cblxuICAgICAgICA8UGVyc3BlY3RpdmVDYW1lcmEgcG9zaXRpb249e1swLCAxMCwgMTBdfSBtYWtlRGVmYXVsdCByZWY9e2NhbX0gLz5cblxuICAgICAgICA8UmlnaWRCb2R5XG4gICAgICAgICAgY29sbGlkZXJzPXtcImh1bGxcIn1cbiAgICAgICAgICByZXN0aXR1dGlvbj17MX1cbiAgICAgICAgICBhbmd1bGFyVmVsb2NpdHk9e1swLCAxLCAwXX1cbiAgICAgICAgICAvLyAgIGxpbmVhclZlbG9jaXR5PXtbMCwgMTAsIDBdfVxuICAgICAgICAgIHJlZj17cm9ja2V0UmVmfVxuICAgICAgICA+XG4gICAgICAgICAgPFJvY2tldCAvPlxuICAgICAgICA8L1JpZ2lkQm9keT5cblxuICAgICAgICA8Q3Vib2lkQ29sbGlkZXIgcG9zaXRpb249e1swLCAtMiwgMF19IGFyZ3M9e1syMCwgMC41LCAyMF19PlxuICAgICAgICAgIDxtZXNoPlxuICAgICAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1s0MCwgMSwgNDBdfSAvPlxuICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgIDwvbWVzaD5cbiAgICAgICAgPC9DdWJvaWRDb2xsaWRlcj5cbiAgICAgIDwvUGh5c2ljcz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvY2tldFNjZW5lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJFbnZpcm9ubWVudCIsIk9yYml0Q29udHJvbHMiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIlJvY2tldCIsIkN1Ym9pZENvbGxpZGVyIiwiUGh5c2ljcyIsIlJpZ2lkQm9keSIsInF1YXQiLCJ1c2VGcmFtZSIsIlRIUkVFIiwiUm9ja2V0U2NlbmUiLCJyb2NrZXRSZWYiLCJjYW0iLCJpc0ZseWluZyIsInNldElzRmx5aW5nIiwiaXNMZWZ0Iiwic2V0SXNMZWZ0IiwiaXNSaWdodCIsInNldElzUmlnaHQiLCJjdXJyZW50IiwicXVhdGVybmlvbiIsInJvdGF0aW9uIiwiZm9yY2VEaXJlY3Rpb24iLCJFdWxlciIsImZvcmNlIiwiVmVjdG9yMyIsImFwcGx5RXVsZXIiLCJzZXRSb3RhdGlvbiIsImFwcGx5SW1wdWxzZSIsImhhbmRsZUtleURvd24iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiaGFuZGxlS2V5VXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlYnVnIiwiYmFja2dyb3VuZCIsImZpbGVzIiwicG9zaXRpb24iLCJtYWtlRGVmYXVsdCIsInJlZiIsImNvbGxpZGVycyIsInJlc3RpdHV0aW9uIiwiYW5ndWxhclZlbG9jaXR5IiwiYXJncyIsIm1lc2giLCJib3hHZW9tZXRyeSIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});