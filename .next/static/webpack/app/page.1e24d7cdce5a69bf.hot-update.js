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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/web/KeyboardControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/Environment.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const model = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Add state for mouse position\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [subscribeKeys, getKeys] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useKeyboardControls)();\n    const jump = ()=>{\n        var _rocketRef_current;\n        (_rocketRef_current = rocketRef.current) === null || _rocketRef_current === void 0 ? void 0 : _rocketRef_current.applyImpulseAtPoint({\n            x: 0,\n            y: 50,\n            z: 0\n        }, {\n            x: 0,\n            y: -1,\n            z: 0\n        }, true);\n    };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.C)((state, delta)=>{\n        if (rocketRef.current) {\n            const { forward, backward, leftward, rightward } = getKeys();\n            const impulse = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const torque = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const impulseStrength = 100 * delta;\n            const torqueStrength = 100 * delta;\n            if (forward) {\n                impulse.z -= impulseStrength;\n                torque.x -= torqueStrength;\n            }\n            if (backward) {\n                impulse.z += impulseStrength;\n                torque.x += torqueStrength;\n            }\n            if (leftward) {\n                impulse.x -= impulseStrength;\n                torque.z -= torqueStrength;\n            }\n            if (rightward) {\n                impulse.x += impulseStrength;\n                torque.z += torqueStrength;\n            }\n            rocketRef.current.applyImpulse(impulse, true);\n            rocketRef.current.applyTorqueImpulse(torque, true);\n        }\n        if (rocketRef.current && cam.current) {\n            // Update camera position and rotation\n            console.log(\"model.current.position\", model.current.position);\n            console.log(\"model.current.rotation\", model.current.rotation);\n            console.log(\"cam.current.position\", cam.current.position);\n            const modelPosition = rocketRef.current.position;\n            const modelRotation = rocketRef.current.rotation;\n            const cameraDistance = 10; // Adjust the distance as needed\n            const cameraOffset = new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(0, 0, cameraDistance);\n            const cameraPosition = cameraOffset.applyQuaternion(modelRotation).add(modelPosition);\n            cam.current.position.copy(cameraPosition);\n            cam.current.lookAt(modelPosition);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        subscribeKeys((state)=>state.jump, (value)=>{\n            if (value) console.log(\"Yes, jump!\");\n            jump();\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            debug: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.Environment, {\n                    background: false,\n                    files: \"adams_place_bridge_1k.hdr\"\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera, {\n                    position: [\n                        0,\n                        2,\n                        50\n                    ],\n                    rotation: [\n                        -0.3,\n                        0,\n                        0\n                    ],\n                    ref: cam\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 0.2,\n                    mass: 0,\n                    canSleep: false,\n                    friction: 1,\n                    linearDamping: 0.5,\n                    angularDamping: 0.5,\n                    // angularVelocity={[0, 1, 0]}\n                    ref: rocketRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isFlying: isFlying,\n                        ref: model\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -2,\n                        0\n                    ],\n                    args: [\n                        100,\n                        0.5,\n                        100\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"mFnKVdTOSpFa0yJIz540fq0GSEg=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useKeyboardControls,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFNaEM7QUFDYTtBQU9YO0FBQ2lCO0FBQ2Y7QUFFL0IsTUFBTWEsY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVosNkNBQU1BO0lBQ3hCLE1BQU1hLE1BQU1iLDZDQUFNQTtJQUNsQixNQUFNYyxRQUFRZCw2Q0FBTUE7SUFFcEIsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXpDLCtCQUErQjtJQUMvQixNQUFNLENBQUNnQixlQUFlQyxpQkFBaUIsR0FBR2pCLCtDQUFRQSxDQUFDO1FBQUVrQixHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNoRSxNQUFNLENBQUNDLGVBQWVDLFFBQVEsR0FBR2xCLHNFQUFtQkE7SUFFcEQsTUFBTW1CLE9BQU87WUFDWFg7U0FBQUEscUJBQUFBLFVBQVVZLE9BQU8sY0FBakJaLHlDQUFBQSxtQkFBbUJhLG1CQUFtQixDQUNwQztZQUFFTixHQUFHO1lBQUdDLEdBQUc7WUFBSU0sR0FBRztRQUFFLEdBQ3BCO1lBQUVQLEdBQUc7WUFBR0MsR0FBRyxDQUFDO1lBQUdNLEdBQUc7UUFBRSxHQUNwQjtJQUVKO0lBRUFqQixxREFBUUEsQ0FBQyxDQUFDa0IsT0FBT0M7UUFDZixJQUFJaEIsVUFBVVksT0FBTyxFQUFFO1lBQ3JCLE1BQU0sRUFBRUssT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFLEdBQUdWO1lBRW5ELE1BQU1XLFVBQVU7Z0JBQUVkLEdBQUc7Z0JBQUdDLEdBQUc7Z0JBQUdNLEdBQUc7WUFBRTtZQUNuQyxNQUFNUSxTQUFTO2dCQUFFZixHQUFHO2dCQUFHQyxHQUFHO2dCQUFHTSxHQUFHO1lBQUU7WUFFbEMsTUFBTVMsa0JBQWtCLE1BQU1QO1lBQzlCLE1BQU1RLGlCQUFpQixNQUFNUjtZQUU3QixJQUFJQyxTQUFTO2dCQUNYSSxRQUFRUCxDQUFDLElBQUlTO2dCQUNiRCxPQUFPZixDQUFDLElBQUlpQjtZQUNkO1lBQ0EsSUFBSU4sVUFBVTtnQkFDWkcsUUFBUVAsQ0FBQyxJQUFJUztnQkFDYkQsT0FBT2YsQ0FBQyxJQUFJaUI7WUFDZDtZQUNBLElBQUlMLFVBQVU7Z0JBQ1pFLFFBQVFkLENBQUMsSUFBSWdCO2dCQUNiRCxPQUFPUixDQUFDLElBQUlVO1lBQ2Q7WUFDQSxJQUFJSixXQUFXO2dCQUNiQyxRQUFRZCxDQUFDLElBQUlnQjtnQkFDYkQsT0FBT1IsQ0FBQyxJQUFJVTtZQUNkO1lBRUF4QixVQUFVWSxPQUFPLENBQUNhLFlBQVksQ0FBQ0osU0FBUztZQUN4Q3JCLFVBQVVZLE9BQU8sQ0FBQ2Msa0JBQWtCLENBQUNKLFFBQVE7UUFDL0M7UUFFQSxJQUFJdEIsVUFBVVksT0FBTyxJQUFJWCxJQUFJVyxPQUFPLEVBQUU7WUFDcEMsc0NBQXNDO1lBQ3RDZSxRQUFRQyxHQUFHLENBQUMsMEJBQTBCMUIsTUFBTVUsT0FBTyxDQUFDaUIsUUFBUTtZQUM1REYsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQjFCLE1BQU1VLE9BQU8sQ0FBQ2tCLFFBQVE7WUFDNURILFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0IzQixJQUFJVyxPQUFPLENBQUNpQixRQUFRO1lBRXhELE1BQU1FLGdCQUFnQi9CLFVBQVVZLE9BQU8sQ0FBQ2lCLFFBQVE7WUFDaEQsTUFBTUcsZ0JBQWdCaEMsVUFBVVksT0FBTyxDQUFDa0IsUUFBUTtZQUNoRCxNQUFNRyxpQkFBaUIsSUFBSSxnQ0FBZ0M7WUFDM0QsTUFBTUMsZUFBZSxJQUFJcEMsMENBQWEsQ0FBQyxHQUFHLEdBQUdtQztZQUM3QyxNQUFNRyxpQkFBaUJGLGFBQ3BCRyxlQUFlLENBQUNMLGVBQ2hCTSxHQUFHLENBQUNQO1lBQ1A5QixJQUFJVyxPQUFPLENBQUNpQixRQUFRLENBQUNVLElBQUksQ0FBQ0g7WUFDMUJuQyxJQUFJVyxPQUFPLENBQUM0QixNQUFNLENBQUNUO1FBQ3JCO0lBQ0Y7SUFFQTVDLGdEQUFTQSxDQUFDO1FBQ1JzQixjQUNFLENBQUNNLFFBQVVBLE1BQU1KLElBQUksRUFDckIsQ0FBQzhCO1lBQ0MsSUFBSUEsT0FBT2QsUUFBUUMsR0FBRyxDQUFDO1lBQ3ZCakI7UUFDRjtJQUVKLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNFLDRFQUFDaEIsd0RBQU9BO1lBQUMrQyxLQUFLOzs4QkFFWiw4REFBQ3BELDBEQUFXQTtvQkFBQ3FELFlBQVk7b0JBQU9DLE9BQU07Ozs7Ozs4QkFFdEMsOERBQUNyRCxnRUFBaUJBO29CQUNoQnNDLFVBQVU7d0JBQUM7d0JBQUc7d0JBQUc7cUJBQUc7b0JBQ3BCQyxVQUFVO3dCQUFDLENBQUM7d0JBQUs7d0JBQUc7cUJBQUU7b0JBQ3RCZSxLQUFLNUM7Ozs7Ozs4QkFHUCw4REFBQ0wsMERBQVNBO29CQUNSa0QsV0FBVztvQkFDWEMsYUFBYTtvQkFDYkMsTUFBTTtvQkFDTkMsVUFBVTtvQkFDVkMsVUFBVTtvQkFDVkMsZUFBZTtvQkFDZkMsZ0JBQWdCO29CQUNoQiw4QkFBOEI7b0JBQzlCUCxLQUFLN0M7OEJBRUwsNEVBQUNQLDBEQUFNQTt3QkFBQ1UsVUFBVUE7d0JBQVUwQyxLQUFLM0M7Ozs7Ozs7Ozs7OzhCQUduQyw4REFBQ1IsK0RBQWNBO29CQUFDbUMsVUFBVTt3QkFBQzt3QkFBRyxDQUFDO3dCQUFHO3FCQUFFO29CQUFFd0IsTUFBTTt3QkFBQzt3QkFBSzt3QkFBSztxQkFBSTs4QkFDekQsNEVBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQVlGLE1BQU07b0NBQUM7b0NBQUk7b0NBQUc7aUNBQUc7Ozs7OzswQ0FDOUIsOERBQUNHO2dDQUFxQkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3hDO0dBdEhNMUQ7O1FBUzZCUCxrRUFBbUJBO1FBVXBESyxpREFBUUE7OztLQW5CSkU7QUF3SE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb2NrZXRTY2VuZS50c3g/YWRjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgT3JiaXRDb250cm9scyxcbiAgUGVyc3BlY3RpdmVDYW1lcmEsXG4gIHVzZUtleWJvYXJkQ29udHJvbHMsXG59IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0IFJvY2tldCBmcm9tIFwiQGNvbXBvbmVudHMvUm9ja2V0XCI7XG5pbXBvcnQge1xuICBDdWJvaWRDb2xsaWRlcixcbiAgUGh5c2ljcyxcbiAgUmFwaWVyUmlnaWRCb2R5LFxuICBSaWdpZEJvZHksXG4gIHF1YXQsXG59IGZyb20gXCJAcmVhY3QtdGhyZWUvcmFwaWVyXCI7XG5pbXBvcnQgeyB1c2VGcmFtZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuXG5jb25zdCBSb2NrZXRTY2VuZSA9ICgpID0+IHtcbiAgY29uc3Qgcm9ja2V0UmVmID0gdXNlUmVmPFJhcGllclJpZ2lkQm9keT4oKTtcbiAgY29uc3QgY2FtID0gdXNlUmVmPGFueT4oKTtcbiAgY29uc3QgbW9kZWwgPSB1c2VSZWY8YW55PigpO1xuXG4gIGNvbnN0IFtpc0ZseWluZywgc2V0SXNGbHlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEFkZCBzdGF0ZSBmb3IgbW91c2UgcG9zaXRpb25cbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbc3Vic2NyaWJlS2V5cywgZ2V0S2V5c10gPSB1c2VLZXlib2FyZENvbnRyb2xzKCk7XG5cbiAgY29uc3QganVtcCA9ICgpID0+IHtcbiAgICByb2NrZXRSZWYuY3VycmVudD8uYXBwbHlJbXB1bHNlQXRQb2ludChcbiAgICAgIHsgeDogMCwgeTogNTAsIHo6IDAgfSxcbiAgICAgIHsgeDogMCwgeTogLTEsIHo6IDAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuICB9O1xuXG4gIHVzZUZyYW1lKChzdGF0ZSwgZGVsdGEpID0+IHtcbiAgICBpZiAocm9ja2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHsgZm9yd2FyZCwgYmFja3dhcmQsIGxlZnR3YXJkLCByaWdodHdhcmQgfSA9IGdldEtleXMoKTtcblxuICAgICAgY29uc3QgaW1wdWxzZSA9IHsgeDogMCwgeTogMCwgejogMCB9O1xuICAgICAgY29uc3QgdG9ycXVlID0geyB4OiAwLCB5OiAwLCB6OiAwIH07XG5cbiAgICAgIGNvbnN0IGltcHVsc2VTdHJlbmd0aCA9IDEwMCAqIGRlbHRhO1xuICAgICAgY29uc3QgdG9ycXVlU3RyZW5ndGggPSAxMDAgKiBkZWx0YTtcblxuICAgICAgaWYgKGZvcndhcmQpIHtcbiAgICAgICAgaW1wdWxzZS56IC09IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnggLT0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoYmFja3dhcmQpIHtcbiAgICAgICAgaW1wdWxzZS56ICs9IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnggKz0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAobGVmdHdhcmQpIHtcbiAgICAgICAgaW1wdWxzZS54IC09IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnogLT0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAocmlnaHR3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueCArPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS56ICs9IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuXG4gICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseUltcHVsc2UoaW1wdWxzZSwgdHJ1ZSk7XG4gICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseVRvcnF1ZUltcHVsc2UodG9ycXVlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAocm9ja2V0UmVmLmN1cnJlbnQgJiYgY2FtLmN1cnJlbnQpIHtcbiAgICAgIC8vIFVwZGF0ZSBjYW1lcmEgcG9zaXRpb24gYW5kIHJvdGF0aW9uXG4gICAgICBjb25zb2xlLmxvZyhcIm1vZGVsLmN1cnJlbnQucG9zaXRpb25cIiwgbW9kZWwuY3VycmVudC5wb3NpdGlvbik7XG4gICAgICBjb25zb2xlLmxvZyhcIm1vZGVsLmN1cnJlbnQucm90YXRpb25cIiwgbW9kZWwuY3VycmVudC5yb3RhdGlvbik7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbS5jdXJyZW50LnBvc2l0aW9uXCIsIGNhbS5jdXJyZW50LnBvc2l0aW9uKTtcblxuICAgICAgY29uc3QgbW9kZWxQb3NpdGlvbiA9IHJvY2tldFJlZi5jdXJyZW50LnBvc2l0aW9uO1xuICAgICAgY29uc3QgbW9kZWxSb3RhdGlvbiA9IHJvY2tldFJlZi5jdXJyZW50LnJvdGF0aW9uO1xuICAgICAgY29uc3QgY2FtZXJhRGlzdGFuY2UgPSAxMDsgLy8gQWRqdXN0IHRoZSBkaXN0YW5jZSBhcyBuZWVkZWRcbiAgICAgIGNvbnN0IGNhbWVyYU9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIGNhbWVyYURpc3RhbmNlKTtcbiAgICAgIGNvbnN0IGNhbWVyYVBvc2l0aW9uID0gY2FtZXJhT2Zmc2V0XG4gICAgICAgIC5hcHBseVF1YXRlcm5pb24obW9kZWxSb3RhdGlvbilcbiAgICAgICAgLmFkZChtb2RlbFBvc2l0aW9uKTtcbiAgICAgIGNhbS5jdXJyZW50LnBvc2l0aW9uLmNvcHkoY2FtZXJhUG9zaXRpb24pO1xuICAgICAgY2FtLmN1cnJlbnQubG9va0F0KG1vZGVsUG9zaXRpb24pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdWJzY3JpYmVLZXlzKFxuICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5qdW1wLFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSkgY29uc29sZS5sb2coXCJZZXMsIGp1bXAhXCIpO1xuICAgICAgICBqdW1wKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQaHlzaWNzIGRlYnVnPlxuICAgICAgICB7LyogPE9yYml0Q29udHJvbHMgLz4gKi99XG4gICAgICAgIDxFbnZpcm9ubWVudCBiYWNrZ3JvdW5kPXtmYWxzZX0gZmlsZXM9XCJhZGFtc19wbGFjZV9icmlkZ2VfMWsuaGRyXCIgLz5cblxuICAgICAgICA8UGVyc3BlY3RpdmVDYW1lcmFcbiAgICAgICAgICBwb3NpdGlvbj17WzAsIDIsIDUwXX1cbiAgICAgICAgICByb3RhdGlvbj17Wy0wLjMsIDAsIDBdfVxuICAgICAgICAgIHJlZj17Y2FtfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxSaWdpZEJvZHlcbiAgICAgICAgICBjb2xsaWRlcnM9e1wiaHVsbFwifVxuICAgICAgICAgIHJlc3RpdHV0aW9uPXswLjJ9XG4gICAgICAgICAgbWFzcz17MH1cbiAgICAgICAgICBjYW5TbGVlcD17ZmFsc2V9XG4gICAgICAgICAgZnJpY3Rpb249ezF9XG4gICAgICAgICAgbGluZWFyRGFtcGluZz17MC41fVxuICAgICAgICAgIGFuZ3VsYXJEYW1waW5nPXswLjV9XG4gICAgICAgICAgLy8gYW5ndWxhclZlbG9jaXR5PXtbMCwgMSwgMF19XG4gICAgICAgICAgcmVmPXtyb2NrZXRSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8Um9ja2V0IGlzRmx5aW5nPXtpc0ZseWluZ30gcmVmPXttb2RlbH0gLz5cbiAgICAgICAgPC9SaWdpZEJvZHk+XG5cbiAgICAgICAgPEN1Ym9pZENvbGxpZGVyIHBvc2l0aW9uPXtbMCwgLTIsIDBdfSBhcmdzPXtbMTAwLCAwLjUsIDEwMF19PlxuICAgICAgICAgIDxtZXNoPlxuICAgICAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1s0MCwgMSwgNDBdfSAvPlxuICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgIDwvbWVzaD5cbiAgICAgICAgPC9DdWJvaWRDb2xsaWRlcj5cblxuICAgICAgICB7LyogPG1lc2ggcG9zaXRpb249e1swLCAwLCAwXX0gcmVmPXtkb3R9PlxuICAgICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMSwgMTYsIDE2XX0gLz5cbiAgICAgICAgICA8bWVzaEJhc2ljTWF0ZXJpYWwgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICA8L21lc2g+ICovfVxuICAgICAgPC9QaHlzaWNzPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9ja2V0U2NlbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkVudmlyb25tZW50IiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ1c2VLZXlib2FyZENvbnRyb2xzIiwiUm9ja2V0IiwiQ3Vib2lkQ29sbGlkZXIiLCJQaHlzaWNzIiwiUmlnaWRCb2R5IiwidXNlRnJhbWUiLCJUSFJFRSIsIlJvY2tldFNjZW5lIiwicm9ja2V0UmVmIiwiY2FtIiwibW9kZWwiLCJpc0ZseWluZyIsInNldElzRmx5aW5nIiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJ4IiwieSIsInN1YnNjcmliZUtleXMiLCJnZXRLZXlzIiwianVtcCIsImN1cnJlbnQiLCJhcHBseUltcHVsc2VBdFBvaW50IiwieiIsInN0YXRlIiwiZGVsdGEiLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJsZWZ0d2FyZCIsInJpZ2h0d2FyZCIsImltcHVsc2UiLCJ0b3JxdWUiLCJpbXB1bHNlU3RyZW5ndGgiLCJ0b3JxdWVTdHJlbmd0aCIsImFwcGx5SW1wdWxzZSIsImFwcGx5VG9ycXVlSW1wdWxzZSIsImNvbnNvbGUiLCJsb2ciLCJwb3NpdGlvbiIsInJvdGF0aW9uIiwibW9kZWxQb3NpdGlvbiIsIm1vZGVsUm90YXRpb24iLCJjYW1lcmFEaXN0YW5jZSIsImNhbWVyYU9mZnNldCIsIlZlY3RvcjMiLCJjYW1lcmFQb3NpdGlvbiIsImFwcGx5UXVhdGVybmlvbiIsImFkZCIsImNvcHkiLCJsb29rQXQiLCJ2YWx1ZSIsImRlYnVnIiwiYmFja2dyb3VuZCIsImZpbGVzIiwicmVmIiwiY29sbGlkZXJzIiwicmVzdGl0dXRpb24iLCJtYXNzIiwiY2FuU2xlZXAiLCJmcmljdGlvbiIsImxpbmVhckRhbXBpbmciLCJhbmd1bGFyRGFtcGluZyIsImFyZ3MiLCJtZXNoIiwiYm94R2VvbWV0cnkiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});