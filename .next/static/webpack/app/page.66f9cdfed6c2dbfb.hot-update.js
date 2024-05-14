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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLeft, setIsLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isRight, setIsRight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C)(()=>{\n        if (isFlying) {\n            if (rocketRef.current) {\n                const quaternion = (0,_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.quat)(rocketRef.current.rotation());\n                const forceDirection = new three__WEBPACK_IMPORTED_MODULE_5__.Euler(0, 0, 0, \"XYZ\");\n                const force = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 1, -1).applyEuler(forceDirection);\n                // Get the top direction of the rocket\n                const topDirection = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 1, 0).applyQuaternion(quaternion);\n                // Apply the force in the direction of the top of the rocket\n                force.add(topDirection);\n                rocketRef.current.applyImpulse(force, true);\n                rocketRef.current.applyImpulse(force, true);\n            }\n        // rocketRef.current.applyTorqueImpulse({ x: 0, y: 0.1, z: 0 }, true);\n        }\n    // if (isLeft) {\n    //   if (rocketRef.current) {\n    //     const quaternion = quat(rocketRef.current.rotation());\n    //     const forceDirection = new THREE.Euler(0, 0, 0, \"XYZ\");\n    //     const force = new THREE.Vector3(0, 1, -1).applyEuler(forceDirection);\n    //     rocketRef.current.setRotation(quaternion, true);\n    //     rocketRef.current.applyImpulse(force, true);\n    //   }\n    //   // rocketRef.current.applyTorqueImpulse({ x: 0, y: 0.1, z: 0 }, true);\n    // }\n    // if (isRight) {\n    //   if (rocketRef.current) {\n    //     const quaternion = quat(rocketRef.current.rotation());\n    //     const forceDirection = new THREE.Euler(0, 0, 0, \"XYZ\");\n    //     const force = new THREE.Vector3(0, 1, -1).applyEuler(forceDirection);\n    //     rocketRef.current.setRotation(quaternion, true);\n    //     rocketRef.current.applyImpulse(force, true);\n    //   }\n    //   // rocketRef.current.applyTorqueImpulse({ x: 0, y: 0.1, z: 0 }, true);\n    // }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleKeyDown = (event)=>{\n            console.log(event.code);\n            // console.log(rocketRef.current);\n            if (event.code === \"Space\" && rocketRef.current) {\n                setIsFlying(true);\n            }\n            if (event.code === \"keyA\" && rocketRef.current) {\n                setIsLeft(true);\n            }\n            if (event.code === \"keyD\" && rocketRef.current) {\n                setIsRight(true);\n            }\n        };\n        const handleKeyUp = (event)=>{\n            setIsFlying(false);\n            setIsLeft(false);\n            setIsRight(false);\n        };\n        window.addEventListener(\"keydown\", handleKeyDown);\n        window.addEventListener(\"keyup\", handleKeyUp);\n        return ()=>{\n            window.removeEventListener(\"keydown\", handleKeyDown);\n            window.removeEventListener(\"keyup\", handleKeyUp);\n        };\n    }, []);\n    //   useEffect(() => {\n    //     window.addEventListener(\"click\", handleClick);\n    //     return () => {\n    //       window.removeEventListener(\"click\", handleClick);\n    //     };\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            debug: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__.OrbitControls, {}, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.Environment, {\n                    background: false,\n                    files: \"adams_place_bridge_1k.hdr\"\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera, {\n                    position: [\n                        0,\n                        10,\n                        10\n                    ],\n                    makeDefault: true,\n                    ref: cam\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 1,\n                    angularVelocity: [\n                        0,\n                        1,\n                        0\n                    ],\n                    //   linearVelocity={[0, 10, 0]}\n                    ref: rocketRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -2,\n                        0\n                    ],\n                    args: [\n                        20,\n                        0.5,\n                        20\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"Adj23zH/TJT7VTGNL4snkVg0D4Q=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFLaEM7QUFDYTtBQU9YO0FBQ2lCO0FBQ2Y7QUFFL0IsTUFBTWMsY0FBYzs7SUFDbEIsTUFBTUMsWUFBWWIsNkNBQU1BO0lBQ3hCLE1BQU1jLE1BQU1kLDZDQUFNQTtJQUVsQixNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZ0IsUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHbkIsK0NBQVFBLENBQUM7SUFFdkNTLHFEQUFRQSxDQUFDO1FBQ1AsSUFBSUssVUFBVTtZQUNaLElBQUlGLFVBQVVRLE9BQU8sRUFBRTtnQkFDckIsTUFBTUMsYUFBYWIseURBQUlBLENBQUNJLFVBQVVRLE9BQU8sQ0FBQ0UsUUFBUTtnQkFDbEQsTUFBTUMsaUJBQWlCLElBQUliLHdDQUFXLENBQUMsR0FBRyxHQUFHLEdBQUc7Z0JBQ2hELE1BQU1lLFFBQVEsSUFBSWYsMENBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHaUIsVUFBVSxDQUFDSjtnQkFFckQsc0NBQXNDO2dCQUN0QyxNQUFNSyxlQUFlLElBQUlsQiwwQ0FBYSxDQUFDLEdBQUcsR0FBRyxHQUFHbUIsZUFBZSxDQUM3RFI7Z0JBR0YsNERBQTREO2dCQUM1REksTUFBTUssR0FBRyxDQUFDRjtnQkFFVmhCLFVBQVVRLE9BQU8sQ0FBQ1csWUFBWSxDQUFDTixPQUFPO2dCQUV0Q2IsVUFBVVEsT0FBTyxDQUFDVyxZQUFZLENBQUNOLE9BQU87WUFDeEM7UUFDQSxzRUFBc0U7UUFDeEU7SUFDQSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLDZEQUE2RDtJQUM3RCw4REFBOEQ7SUFFOUQsNEVBQTRFO0lBRTVFLHVEQUF1RDtJQUN2RCxtREFBbUQ7SUFDbkQsTUFBTTtJQUNOLDJFQUEyRTtJQUMzRSxJQUFJO0lBRUosaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qiw2REFBNkQ7SUFDN0QsOERBQThEO0lBRTlELDRFQUE0RTtJQUU1RSx1REFBdUQ7SUFDdkQsbURBQW1EO0lBQ25ELE1BQU07SUFDTiwyRUFBMkU7SUFDM0UsSUFBSTtJQUNOO0lBRUEzQixnREFBU0EsQ0FBQztRQUNSLE1BQU1rQyxnQkFBZ0IsQ0FBQ0M7WUFDckJDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsSUFBSTtZQUN0QixrQ0FBa0M7WUFFbEMsSUFBSUgsTUFBTUcsSUFBSSxLQUFLLFdBQVd4QixVQUFVUSxPQUFPLEVBQUU7Z0JBQy9DTCxZQUFZO1lBQ2Q7WUFDQSxJQUFJa0IsTUFBTUcsSUFBSSxLQUFLLFVBQVV4QixVQUFVUSxPQUFPLEVBQUU7Z0JBQzlDSCxVQUFVO1lBQ1o7WUFDQSxJQUFJZ0IsTUFBTUcsSUFBSSxLQUFLLFVBQVV4QixVQUFVUSxPQUFPLEVBQUU7Z0JBQzlDRCxXQUFXO1lBQ2I7UUFDRjtRQUNBLE1BQU1rQixjQUFjLENBQUNKO1lBQ25CbEIsWUFBWTtZQUNaRSxVQUFVO1lBQ1ZFLFdBQVc7UUFDYjtRQUVBbUIsT0FBT0MsZ0JBQWdCLENBQUMsV0FBV1A7UUFDbkNNLE9BQU9DLGdCQUFnQixDQUFDLFNBQVNGO1FBQ2pDLE9BQU87WUFDTEMsT0FBT0UsbUJBQW1CLENBQUMsV0FBV1I7WUFDdENNLE9BQU9FLG1CQUFtQixDQUFDLFNBQVNIO1FBQ3RDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsc0JBQXNCO0lBQ3RCLHFEQUFxRDtJQUNyRCxxQkFBcUI7SUFDckIsMERBQTBEO0lBQzFELFNBQVM7SUFDVCxZQUFZO0lBRVoscUJBQ0U7a0JBQ0UsNEVBQUMvQix3REFBT0E7WUFBQ21DLEtBQUs7OzhCQUNaLDhEQUFDdkMsNERBQWFBOzs7Ozs4QkFDZCw4REFBQ0QsMERBQVdBO29CQUFDeUMsWUFBWTtvQkFBT0MsT0FBTTs7Ozs7OzhCQUV0Qyw4REFBQ3hDLGdFQUFpQkE7b0JBQUN5QyxVQUFVO3dCQUFDO3dCQUFHO3dCQUFJO3FCQUFHO29CQUFFQyxXQUFXO29CQUFDQyxLQUFLakM7Ozs7Ozs4QkFFM0QsOERBQUNOLDBEQUFTQTtvQkFDUndDLFdBQVc7b0JBQ1hDLGFBQWE7b0JBQ2JDLGlCQUFpQjt3QkFBQzt3QkFBRzt3QkFBRztxQkFBRTtvQkFDMUIsZ0NBQWdDO29CQUNoQ0gsS0FBS2xDOzhCQUVMLDRFQUFDUiwwREFBTUE7Ozs7Ozs7Ozs7OEJBR1QsOERBQUNDLCtEQUFjQTtvQkFBQ3VDLFVBQVU7d0JBQUM7d0JBQUcsQ0FBQzt3QkFBRztxQkFBRTtvQkFBRU0sTUFBTTt3QkFBQzt3QkFBSTt3QkFBSztxQkFBRzs4QkFDdkQsNEVBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQVlGLE1BQU07b0NBQUM7b0NBQUk7b0NBQUc7aUNBQUc7Ozs7OzswQ0FDOUIsOERBQUNHO2dDQUFxQkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDO0dBdkhNM0M7O1FBUUpGLGlEQUFRQTs7O0tBUkpFO0FBeUhOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4P2FkY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRW52aXJvbm1lbnQsXG4gIE9yYml0Q29udHJvbHMsXG4gIFBlcnNwZWN0aXZlQ2FtZXJhLFxufSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCBSb2NrZXQgZnJvbSBcIkBjb21wb25lbnRzL1JvY2tldFwiO1xuaW1wb3J0IHtcbiAgQ3Vib2lkQ29sbGlkZXIsXG4gIFBoeXNpY3MsXG4gIFJhcGllclJpZ2lkQm9keSxcbiAgUmlnaWRCb2R5LFxuICBxdWF0LFxufSBmcm9tIFwiQHJlYWN0LXRocmVlL3JhcGllclwiO1xuaW1wb3J0IHsgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcblxuY29uc3QgUm9ja2V0U2NlbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvY2tldFJlZiA9IHVzZVJlZjxSYXBpZXJSaWdpZEJvZHk+KCk7XG4gIGNvbnN0IGNhbSA9IHVzZVJlZjxhbnk+KCk7XG5cbiAgY29uc3QgW2lzRmx5aW5nLCBzZXRJc0ZseWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xlZnQsIHNldElzTGVmdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1JpZ2h0LCBzZXRJc1JpZ2h0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgaWYgKGlzRmx5aW5nKSB7XG4gICAgICBpZiAocm9ja2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgcXVhdGVybmlvbiA9IHF1YXQocm9ja2V0UmVmLmN1cnJlbnQucm90YXRpb24oKSk7XG4gICAgICAgIGNvbnN0IGZvcmNlRGlyZWN0aW9uID0gbmV3IFRIUkVFLkV1bGVyKDAsIDAsIDAsIFwiWFlaXCIpO1xuICAgICAgICBjb25zdCBmb3JjZSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIC0xKS5hcHBseUV1bGVyKGZvcmNlRGlyZWN0aW9uKTtcblxuICAgICAgICAvLyBHZXQgdGhlIHRvcCBkaXJlY3Rpb24gb2YgdGhlIHJvY2tldFxuICAgICAgICBjb25zdCB0b3BEaXJlY3Rpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKS5hcHBseVF1YXRlcm5pb24oXG4gICAgICAgICAgcXVhdGVybmlvblxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEFwcGx5IHRoZSBmb3JjZSBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSB0b3Agb2YgdGhlIHJvY2tldFxuICAgICAgICBmb3JjZS5hZGQodG9wRGlyZWN0aW9uKTtcblxuICAgICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseUltcHVsc2UoZm9yY2UsIHRydWUpO1xuXG4gICAgICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5SW1wdWxzZShmb3JjZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyByb2NrZXRSZWYuY3VycmVudC5hcHBseVRvcnF1ZUltcHVsc2UoeyB4OiAwLCB5OiAwLjEsIHo6IDAgfSwgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGlmIChpc0xlZnQpIHtcbiAgICAvLyAgIGlmIChyb2NrZXRSZWYuY3VycmVudCkge1xuICAgIC8vICAgICBjb25zdCBxdWF0ZXJuaW9uID0gcXVhdChyb2NrZXRSZWYuY3VycmVudC5yb3RhdGlvbigpKTtcbiAgICAvLyAgICAgY29uc3QgZm9yY2VEaXJlY3Rpb24gPSBuZXcgVEhSRUUuRXVsZXIoMCwgMCwgMCwgXCJYWVpcIik7XG5cbiAgICAvLyAgICAgY29uc3QgZm9yY2UgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAtMSkuYXBwbHlFdWxlcihmb3JjZURpcmVjdGlvbik7XG5cbiAgICAvLyAgICAgcm9ja2V0UmVmLmN1cnJlbnQuc2V0Um90YXRpb24ocXVhdGVybmlvbiwgdHJ1ZSk7XG4gICAgLy8gICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5SW1wdWxzZShmb3JjZSwgdHJ1ZSk7XG4gICAgLy8gICB9XG4gICAgLy8gICAvLyByb2NrZXRSZWYuY3VycmVudC5hcHBseVRvcnF1ZUltcHVsc2UoeyB4OiAwLCB5OiAwLjEsIHo6IDAgfSwgdHJ1ZSk7XG4gICAgLy8gfVxuXG4gICAgLy8gaWYgKGlzUmlnaHQpIHtcbiAgICAvLyAgIGlmIChyb2NrZXRSZWYuY3VycmVudCkge1xuICAgIC8vICAgICBjb25zdCBxdWF0ZXJuaW9uID0gcXVhdChyb2NrZXRSZWYuY3VycmVudC5yb3RhdGlvbigpKTtcbiAgICAvLyAgICAgY29uc3QgZm9yY2VEaXJlY3Rpb24gPSBuZXcgVEhSRUUuRXVsZXIoMCwgMCwgMCwgXCJYWVpcIik7XG5cbiAgICAvLyAgICAgY29uc3QgZm9yY2UgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAtMSkuYXBwbHlFdWxlcihmb3JjZURpcmVjdGlvbik7XG5cbiAgICAvLyAgICAgcm9ja2V0UmVmLmN1cnJlbnQuc2V0Um90YXRpb24ocXVhdGVybmlvbiwgdHJ1ZSk7XG4gICAgLy8gICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5SW1wdWxzZShmb3JjZSwgdHJ1ZSk7XG4gICAgLy8gICB9XG4gICAgLy8gICAvLyByb2NrZXRSZWYuY3VycmVudC5hcHBseVRvcnF1ZUltcHVsc2UoeyB4OiAwLCB5OiAwLjEsIHo6IDAgfSwgdHJ1ZSk7XG4gICAgLy8gfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmNvZGUpO1xuICAgICAgLy8gY29uc29sZS5sb2cocm9ja2V0UmVmLmN1cnJlbnQpO1xuXG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJTcGFjZVwiICYmIHJvY2tldFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHNldElzRmx5aW5nKHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwia2V5QVwiICYmIHJvY2tldFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHNldElzTGVmdCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jb2RlID09PSBcImtleURcIiAmJiByb2NrZXRSZWYuY3VycmVudCkge1xuICAgICAgICBzZXRJc1JpZ2h0KHRydWUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgaGFuZGxlS2V5VXAgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIHNldElzRmx5aW5nKGZhbHNlKTtcbiAgICAgIHNldElzTGVmdChmYWxzZSk7XG4gICAgICBzZXRJc1JpZ2h0KGZhbHNlKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlS2V5VXApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUtleVVwKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gIC8vICAgICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgLy8gICAgIH07XG4gIC8vICAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQaHlzaWNzIGRlYnVnPlxuICAgICAgICA8T3JiaXRDb250cm9scyAvPlxuICAgICAgICA8RW52aXJvbm1lbnQgYmFja2dyb3VuZD17ZmFsc2V9IGZpbGVzPVwiYWRhbXNfcGxhY2VfYnJpZGdlXzFrLmhkclwiIC8+XG5cbiAgICAgICAgPFBlcnNwZWN0aXZlQ2FtZXJhIHBvc2l0aW9uPXtbMCwgMTAsIDEwXX0gbWFrZURlZmF1bHQgcmVmPXtjYW19IC8+XG5cbiAgICAgICAgPFJpZ2lkQm9keVxuICAgICAgICAgIGNvbGxpZGVycz17XCJodWxsXCJ9XG4gICAgICAgICAgcmVzdGl0dXRpb249ezF9XG4gICAgICAgICAgYW5ndWxhclZlbG9jaXR5PXtbMCwgMSwgMF19XG4gICAgICAgICAgLy8gICBsaW5lYXJWZWxvY2l0eT17WzAsIDEwLCAwXX1cbiAgICAgICAgICByZWY9e3JvY2tldFJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxSb2NrZXQgLz5cbiAgICAgICAgPC9SaWdpZEJvZHk+XG5cbiAgICAgICAgPEN1Ym9pZENvbGxpZGVyIHBvc2l0aW9uPXtbMCwgLTIsIDBdfSBhcmdzPXtbMjAsIDAuNSwgMjBdfT5cbiAgICAgICAgICA8bWVzaD5cbiAgICAgICAgICAgIDxib3hHZW9tZXRyeSBhcmdzPXtbNDAsIDEsIDQwXX0gLz5cbiAgICAgICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBjb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgICAgICA8L21lc2g+XG4gICAgICAgIDwvQ3Vib2lkQ29sbGlkZXI+XG4gICAgICA8L1BoeXNpY3M+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb2NrZXRTY2VuZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRW52aXJvbm1lbnQiLCJPcmJpdENvbnRyb2xzIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJSb2NrZXQiLCJDdWJvaWRDb2xsaWRlciIsIlBoeXNpY3MiLCJSaWdpZEJvZHkiLCJxdWF0IiwidXNlRnJhbWUiLCJUSFJFRSIsIlJvY2tldFNjZW5lIiwicm9ja2V0UmVmIiwiY2FtIiwiaXNGbHlpbmciLCJzZXRJc0ZseWluZyIsImlzTGVmdCIsInNldElzTGVmdCIsImlzUmlnaHQiLCJzZXRJc1JpZ2h0IiwiY3VycmVudCIsInF1YXRlcm5pb24iLCJyb3RhdGlvbiIsImZvcmNlRGlyZWN0aW9uIiwiRXVsZXIiLCJmb3JjZSIsIlZlY3RvcjMiLCJhcHBseUV1bGVyIiwidG9wRGlyZWN0aW9uIiwiYXBwbHlRdWF0ZXJuaW9uIiwiYWRkIiwiYXBwbHlJbXB1bHNlIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJoYW5kbGVLZXlVcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVidWciLCJiYWNrZ3JvdW5kIiwiZmlsZXMiLCJwb3NpdGlvbiIsIm1ha2VEZWZhdWx0IiwicmVmIiwiY29sbGlkZXJzIiwicmVzdGl0dXRpb24iLCJhbmd1bGFyVmVsb2NpdHkiLCJhcmdzIiwibWVzaCIsImJveEdlb21ldHJ5IiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});