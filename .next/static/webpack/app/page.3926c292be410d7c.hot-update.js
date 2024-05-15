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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/web/KeyboardControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrthographicCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const model = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [smoothedCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new three__WEBPACK_IMPORTED_MODULE_4__.Vector3());\n    const [smoothedCameraTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new three__WEBPACK_IMPORTED_MODULE_4__.Vector3());\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Add state for mouse position\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [subscribeKeys, getKeys] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useKeyboardControls)();\n    const jump = ()=>{\n        var _rocketRef_current;\n        (_rocketRef_current = rocketRef.current) === null || _rocketRef_current === void 0 ? void 0 : _rocketRef_current.applyImpulseAtPoint({\n            x: 0,\n            y: 50,\n            z: 0\n        }, {\n            x: 0,\n            y: -1,\n            z: 0\n        }, true);\n    };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C)((state, delta)=>{\n        if (rocketRef.current) {\n            const { forward, backward, leftward, rightward } = getKeys();\n            const impulse = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const torque = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const impulseStrength = 100 * delta;\n            const torqueStrength = 100 * delta;\n            if (forward) {\n                impulse.z -= impulseStrength;\n                torque.x -= torqueStrength;\n            }\n            if (backward) {\n                impulse.z += impulseStrength;\n                torque.x += torqueStrength;\n            }\n            if (leftward) {\n                impulse.x -= impulseStrength;\n                torque.z -= torqueStrength;\n            }\n            if (rightward) {\n                impulse.x += impulseStrength;\n                torque.z += torqueStrength;\n            }\n            rocketRef.current.applyImpulse(impulse, true);\n            rocketRef.current.applyTorqueImpulse(torque, true);\n        }\n        if (rocketRef.current && cam.current) {\n            // Update camera position and rotation\n            const modelPosition = rocketRef.current.translation();\n            const modelRotation = rocketRef.current.rotation();\n            // console.log(\"modelPosition\", modelPosition);\n            // console.log(\"modelRotation\", modelRotation);\n            const cameraDistance = 10; // Adjust the distance as needed\n            const cameraOffset = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(10, 10, cameraDistance);\n            const cameraPosition = cameraOffset.applyQuaternion(modelRotation).add(modelPosition);\n            // cam.current.position.copy(cameraPosition);\n            cam.current.lookAt(modelPosition);\n            // console.log(\"cameraDistance\", cameraDistance);\n            // console.log(\"cameraOffset\", cameraOffset);\n            console.log(\"cameraPosition\", cameraPosition);\n        // console.log(\"modelPosition\", modelPosition);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        subscribeKeys((state)=>state.jump, (value)=>{\n            if (value) console.log(\"Yes, jump!\");\n            jump();\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            debug: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.OrbitControls, {}, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.OrthographicCamera, {\n                    position: [\n                        5,\n                        5,\n                        5\n                    ],\n                    ref: cam\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 0.2,\n                    mass: 0,\n                    canSleep: false,\n                    friction: 1,\n                    linearDamping: 0.5,\n                    angularDamping: 0.5,\n                    ref: rocketRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isFlying: isFlying,\n                        ref: model\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -2,\n                        0\n                    ],\n                    args: [\n                        100,\n                        0.5,\n                        100\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"CT+sl10Uwj1bhsXvYbWk+qK/e3o=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useKeyboardControls,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFPaEM7QUFDYTtBQU9YO0FBQ2lCO0FBQ2Y7QUFFL0IsTUFBTWEsY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVosNkNBQU1BO0lBQ3hCLE1BQU1hLE1BQU1iLDZDQUFNQTtJQUNsQixNQUFNYyxRQUFRZCw2Q0FBTUE7SUFFcEIsTUFBTSxDQUFFZSx1QkFBd0IsR0FBR2QsK0NBQVFBLENBQUMsSUFBTSxJQUFJUywwQ0FBYTtJQUNuRSxNQUFNLENBQUVPLHFCQUFzQixHQUFHaEIsK0NBQVFBLENBQUMsSUFBTSxJQUFJUywwQ0FBYTtJQUVqRSxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXpDLCtCQUErQjtJQUMvQixNQUFNLENBQUNtQixlQUFlQyxpQkFBaUIsR0FBR3BCLCtDQUFRQSxDQUFDO1FBQUVxQixHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNoRSxNQUFNLENBQUNDLGVBQWVDLFFBQVEsR0FBR3JCLHNFQUFtQkE7SUFFcEQsTUFBTXNCLE9BQU87WUFDWGQ7U0FBQUEscUJBQUFBLFVBQVVlLE9BQU8sY0FBakJmLHlDQUFBQSxtQkFBbUJnQixtQkFBbUIsQ0FDcEM7WUFBRU4sR0FBRztZQUFHQyxHQUFHO1lBQUlNLEdBQUc7UUFBRSxHQUNwQjtZQUFFUCxHQUFHO1lBQUdDLEdBQUcsQ0FBQztZQUFHTSxHQUFHO1FBQUUsR0FDcEI7SUFFSjtJQUVBcEIscURBQVFBLENBQUMsQ0FBQ3FCLE9BQU9DO1FBQ2YsSUFBSW5CLFVBQVVlLE9BQU8sRUFBRTtZQUNyQixNQUFNLEVBQUVLLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRSxHQUFHVjtZQUVuRCxNQUFNVyxVQUFVO2dCQUFFZCxHQUFHO2dCQUFHQyxHQUFHO2dCQUFHTSxHQUFHO1lBQUU7WUFDbkMsTUFBTVEsU0FBUztnQkFBRWYsR0FBRztnQkFBR0MsR0FBRztnQkFBR00sR0FBRztZQUFFO1lBRWxDLE1BQU1TLGtCQUFrQixNQUFNUDtZQUM5QixNQUFNUSxpQkFBaUIsTUFBTVI7WUFFN0IsSUFBSUMsU0FBUztnQkFDWEksUUFBUVAsQ0FBQyxJQUFJUztnQkFDYkQsT0FBT2YsQ0FBQyxJQUFJaUI7WUFDZDtZQUNBLElBQUlOLFVBQVU7Z0JBQ1pHLFFBQVFQLENBQUMsSUFBSVM7Z0JBQ2JELE9BQU9mLENBQUMsSUFBSWlCO1lBQ2Q7WUFDQSxJQUFJTCxVQUFVO2dCQUNaRSxRQUFRZCxDQUFDLElBQUlnQjtnQkFDYkQsT0FBT1IsQ0FBQyxJQUFJVTtZQUNkO1lBQ0EsSUFBSUosV0FBVztnQkFDYkMsUUFBUWQsQ0FBQyxJQUFJZ0I7Z0JBQ2JELE9BQU9SLENBQUMsSUFBSVU7WUFDZDtZQUVBM0IsVUFBVWUsT0FBTyxDQUFDYSxZQUFZLENBQUNKLFNBQVM7WUFDeEN4QixVQUFVZSxPQUFPLENBQUNjLGtCQUFrQixDQUFDSixRQUFRO1FBQy9DO1FBRUEsSUFBSXpCLFVBQVVlLE9BQU8sSUFBSWQsSUFBSWMsT0FBTyxFQUFFO1lBQ3BDLHNDQUFzQztZQUV0QyxNQUFNZSxnQkFBZ0I5QixVQUFVZSxPQUFPLENBQUNnQixXQUFXO1lBQ25ELE1BQU1DLGdCQUFnQmhDLFVBQVVlLE9BQU8sQ0FBQ2tCLFFBQVE7WUFFaEQsK0NBQStDO1lBQy9DLCtDQUErQztZQUUvQyxNQUFNQyxpQkFBaUIsSUFBSSxnQ0FBZ0M7WUFDM0QsTUFBTUMsZUFBZSxJQUFJckMsMENBQWEsQ0FBQyxJQUFJLElBQUlvQztZQUMvQyxNQUFNRSxpQkFBaUJELGFBQ3BCRSxlQUFlLENBQUNMLGVBQ2hCTSxHQUFHLENBQUNSO1lBRVAsNkNBQTZDO1lBQzdDN0IsSUFBSWMsT0FBTyxDQUFDd0IsTUFBTSxDQUFDVDtZQUVuQixpREFBaUQ7WUFDakQsNkNBQTZDO1lBQzdDVSxRQUFRQyxHQUFHLENBQUMsa0JBQWtCTDtRQUM5QiwrQ0FBK0M7UUFDakQ7SUFDRjtJQUVBakQsZ0RBQVNBLENBQUM7UUFDUnlCLGNBQ0UsQ0FBQ00sUUFBVUEsTUFBTUosSUFBSSxFQUNyQixDQUFDNEI7WUFDQyxJQUFJQSxPQUFPRixRQUFRQyxHQUFHLENBQUM7WUFDdkIzQjtRQUNGO0lBRUosR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0UsNEVBQUNuQix3REFBT0E7WUFBQ2dELEtBQUs7OzhCQUNaLDhEQUFDckQsNERBQWFBOzs7Ozs4QkFFZCw4REFBQ0MsaUVBQWtCQTtvQkFBQ3FELFVBQVU7d0JBQUM7d0JBQUc7d0JBQUc7cUJBQUU7b0JBQUVDLEtBQUs1Qzs7Ozs7OzhCQUU5Qyw4REFBQ0wsMERBQVNBO29CQUNSa0QsV0FBVztvQkFDWEMsYUFBYTtvQkFDYkMsTUFBTTtvQkFDTkMsVUFBVTtvQkFDVkMsVUFBVTtvQkFDVkMsZUFBZTtvQkFDZkMsZ0JBQWdCO29CQUNoQlAsS0FBSzdDOzhCQUVMLDRFQUFDUCwwREFBTUE7d0JBQUNhLFVBQVVBO3dCQUFVdUMsS0FBSzNDOzs7Ozs7Ozs7Ozs4QkFHbkMsOERBQUNSLCtEQUFjQTtvQkFBQ2tELFVBQVU7d0JBQUM7d0JBQUcsQ0FBQzt3QkFBRztxQkFBRTtvQkFBRVMsTUFBTTt3QkFBQzt3QkFBSzt3QkFBSztxQkFBSTs4QkFDekQsNEVBQUNDOzswQ0FDQyw4REFBQ0M7Z0NBQVlGLE1BQU07b0NBQUM7b0NBQUk7b0NBQUc7aUNBQUc7Ozs7OzswQ0FDOUIsOERBQUNHO2dDQUFxQkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3hDO0dBMUhNMUQ7O1FBWTZCUCxrRUFBbUJBO1FBVXBESyxpREFBUUE7OztLQXRCSkU7QUE0SE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb2NrZXRTY2VuZS50c3g/YWRjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgT3JiaXRDb250cm9scyxcbiAgT3J0aG9ncmFwaGljQ2FtZXJhLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgdXNlS2V5Ym9hcmRDb250cm9scyxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgUm9ja2V0IGZyb20gXCJAY29tcG9uZW50cy9Sb2NrZXRcIjtcbmltcG9ydCB7XG4gIEN1Ym9pZENvbGxpZGVyLFxuICBQaHlzaWNzLFxuICBSYXBpZXJSaWdpZEJvZHksXG4gIFJpZ2lkQm9keSxcbiAgcXVhdCxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9yYXBpZXJcIjtcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IFJvY2tldFNjZW5lID0gKCkgPT4ge1xuICBjb25zdCByb2NrZXRSZWYgPSB1c2VSZWY8UmFwaWVyUmlnaWRCb2R5PigpO1xuICBjb25zdCBjYW0gPSB1c2VSZWY8YW55PigpO1xuICBjb25zdCBtb2RlbCA9IHVzZVJlZjxhbnk+KCk7XG5cbiAgY29uc3QgWyBzbW9vdGhlZENhbWVyYVBvc2l0aW9uIF0gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgVEhSRUUuVmVjdG9yMygpKVxuICBjb25zdCBbIHNtb290aGVkQ2FtZXJhVGFyZ2V0IF0gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgVEhSRUUuVmVjdG9yMygpKVxuICBcbiAgY29uc3QgW2lzRmx5aW5nLCBzZXRJc0ZseWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gQWRkIHN0YXRlIGZvciBtb3VzZSBwb3NpdGlvblxuICBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IFtzdWJzY3JpYmVLZXlzLCBnZXRLZXlzXSA9IHVzZUtleWJvYXJkQ29udHJvbHMoKTtcblxuICBjb25zdCBqdW1wID0gKCkgPT4ge1xuICAgIHJvY2tldFJlZi5jdXJyZW50Py5hcHBseUltcHVsc2VBdFBvaW50KFxuICAgICAgeyB4OiAwLCB5OiA1MCwgejogMCB9LFxuICAgICAgeyB4OiAwLCB5OiAtMSwgejogMCB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH07XG5cbiAgdXNlRnJhbWUoKHN0YXRlLCBkZWx0YSkgPT4ge1xuICAgIGlmIChyb2NrZXRSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgeyBmb3J3YXJkLCBiYWNrd2FyZCwgbGVmdHdhcmQsIHJpZ2h0d2FyZCB9ID0gZ2V0S2V5cygpO1xuXG4gICAgICBjb25zdCBpbXB1bHNlID0geyB4OiAwLCB5OiAwLCB6OiAwIH07XG4gICAgICBjb25zdCB0b3JxdWUgPSB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcblxuICAgICAgY29uc3QgaW1wdWxzZVN0cmVuZ3RoID0gMTAwICogZGVsdGE7XG4gICAgICBjb25zdCB0b3JxdWVTdHJlbmd0aCA9IDEwMCAqIGRlbHRhO1xuXG4gICAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgICBpbXB1bHNlLnogLT0gaW1wdWxzZVN0cmVuZ3RoO1xuICAgICAgICB0b3JxdWUueCAtPSB0b3JxdWVTdHJlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChiYWNrd2FyZCkge1xuICAgICAgICBpbXB1bHNlLnogKz0gaW1wdWxzZVN0cmVuZ3RoO1xuICAgICAgICB0b3JxdWUueCArPSB0b3JxdWVTdHJlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChsZWZ0d2FyZCkge1xuICAgICAgICBpbXB1bHNlLnggLT0gaW1wdWxzZVN0cmVuZ3RoO1xuICAgICAgICB0b3JxdWUueiAtPSB0b3JxdWVTdHJlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChyaWdodHdhcmQpIHtcbiAgICAgICAgaW1wdWxzZS54ICs9IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnogKz0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5SW1wdWxzZShpbXB1bHNlLCB0cnVlKTtcbiAgICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5VG9ycXVlSW1wdWxzZSh0b3JxdWUsIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChyb2NrZXRSZWYuY3VycmVudCAmJiBjYW0uY3VycmVudCkge1xuICAgICAgLy8gVXBkYXRlIGNhbWVyYSBwb3NpdGlvbiBhbmQgcm90YXRpb25cblxuICAgICAgY29uc3QgbW9kZWxQb3NpdGlvbiA9IHJvY2tldFJlZi5jdXJyZW50LnRyYW5zbGF0aW9uKCk7XG4gICAgICBjb25zdCBtb2RlbFJvdGF0aW9uID0gcm9ja2V0UmVmLmN1cnJlbnQucm90YXRpb24oKTtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJtb2RlbFBvc2l0aW9uXCIsIG1vZGVsUG9zaXRpb24pO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJtb2RlbFJvdGF0aW9uXCIsIG1vZGVsUm90YXRpb24pO1xuXG4gICAgICBjb25zdCBjYW1lcmFEaXN0YW5jZSA9IDEwOyAvLyBBZGp1c3QgdGhlIGRpc3RhbmNlIGFzIG5lZWRlZFxuICAgICAgY29uc3QgY2FtZXJhT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoMTAsIDEwLCBjYW1lcmFEaXN0YW5jZSk7XG4gICAgICBjb25zdCBjYW1lcmFQb3NpdGlvbiA9IGNhbWVyYU9mZnNldFxuICAgICAgICAuYXBwbHlRdWF0ZXJuaW9uKG1vZGVsUm90YXRpb24pXG4gICAgICAgIC5hZGQobW9kZWxQb3NpdGlvbik7XG5cbiAgICAgIC8vIGNhbS5jdXJyZW50LnBvc2l0aW9uLmNvcHkoY2FtZXJhUG9zaXRpb24pO1xuICAgICAgY2FtLmN1cnJlbnQubG9va0F0KG1vZGVsUG9zaXRpb24pO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNhbWVyYURpc3RhbmNlXCIsIGNhbWVyYURpc3RhbmNlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FtZXJhT2Zmc2V0XCIsIGNhbWVyYU9mZnNldCk7XG4gICAgICBjb25zb2xlLmxvZyhcImNhbWVyYVBvc2l0aW9uXCIsIGNhbWVyYVBvc2l0aW9uKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibW9kZWxQb3NpdGlvblwiLCBtb2RlbFBvc2l0aW9uKTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3Vic2NyaWJlS2V5cyhcbiAgICAgIChzdGF0ZSkgPT4gc3RhdGUuanVtcCxcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUpIGNvbnNvbGUubG9nKFwiWWVzLCBqdW1wIVwiKTtcbiAgICAgICAganVtcCgpO1xuICAgICAgfVxuICAgICk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGh5c2ljcyBkZWJ1Zz5cbiAgICAgICAgPE9yYml0Q29udHJvbHMgLz5cblxuICAgICAgICA8T3J0aG9ncmFwaGljQ2FtZXJhIHBvc2l0aW9uPXtbNSwgNSwgNV19IHJlZj17Y2FtfSAvPlxuXG4gICAgICAgIDxSaWdpZEJvZHlcbiAgICAgICAgICBjb2xsaWRlcnM9e1wiaHVsbFwifVxuICAgICAgICAgIHJlc3RpdHV0aW9uPXswLjJ9XG4gICAgICAgICAgbWFzcz17MH1cbiAgICAgICAgICBjYW5TbGVlcD17ZmFsc2V9XG4gICAgICAgICAgZnJpY3Rpb249ezF9XG4gICAgICAgICAgbGluZWFyRGFtcGluZz17MC41fVxuICAgICAgICAgIGFuZ3VsYXJEYW1waW5nPXswLjV9XG4gICAgICAgICAgcmVmPXtyb2NrZXRSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8Um9ja2V0IGlzRmx5aW5nPXtpc0ZseWluZ30gcmVmPXttb2RlbH0gLz5cbiAgICAgICAgPC9SaWdpZEJvZHk+XG5cbiAgICAgICAgPEN1Ym9pZENvbGxpZGVyIHBvc2l0aW9uPXtbMCwgLTIsIDBdfSBhcmdzPXtbMTAwLCAwLjUsIDEwMF19PlxuICAgICAgICAgIDxtZXNoPlxuICAgICAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1s0MCwgMSwgNDBdfSAvPlxuICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgIDwvbWVzaD5cbiAgICAgICAgPC9DdWJvaWRDb2xsaWRlcj5cblxuICAgICAgICB7LyogPG1lc2ggcG9zaXRpb249e1swLCAwLCAwXX0gcmVmPXtkb3R9PlxuICAgICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMSwgMTYsIDE2XX0gLz5cbiAgICAgICAgICA8bWVzaEJhc2ljTWF0ZXJpYWwgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICA8L21lc2g+ICovfVxuICAgICAgPC9QaHlzaWNzPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9ja2V0U2NlbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk9yYml0Q29udHJvbHMiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJ1c2VLZXlib2FyZENvbnRyb2xzIiwiUm9ja2V0IiwiQ3Vib2lkQ29sbGlkZXIiLCJQaHlzaWNzIiwiUmlnaWRCb2R5IiwidXNlRnJhbWUiLCJUSFJFRSIsIlJvY2tldFNjZW5lIiwicm9ja2V0UmVmIiwiY2FtIiwibW9kZWwiLCJzbW9vdGhlZENhbWVyYVBvc2l0aW9uIiwiVmVjdG9yMyIsInNtb290aGVkQ2FtZXJhVGFyZ2V0IiwiaXNGbHlpbmciLCJzZXRJc0ZseWluZyIsIm1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwieCIsInkiLCJzdWJzY3JpYmVLZXlzIiwiZ2V0S2V5cyIsImp1bXAiLCJjdXJyZW50IiwiYXBwbHlJbXB1bHNlQXRQb2ludCIsInoiLCJzdGF0ZSIsImRlbHRhIiwiZm9yd2FyZCIsImJhY2t3YXJkIiwibGVmdHdhcmQiLCJyaWdodHdhcmQiLCJpbXB1bHNlIiwidG9ycXVlIiwiaW1wdWxzZVN0cmVuZ3RoIiwidG9ycXVlU3RyZW5ndGgiLCJhcHBseUltcHVsc2UiLCJhcHBseVRvcnF1ZUltcHVsc2UiLCJtb2RlbFBvc2l0aW9uIiwidHJhbnNsYXRpb24iLCJtb2RlbFJvdGF0aW9uIiwicm90YXRpb24iLCJjYW1lcmFEaXN0YW5jZSIsImNhbWVyYU9mZnNldCIsImNhbWVyYVBvc2l0aW9uIiwiYXBwbHlRdWF0ZXJuaW9uIiwiYWRkIiwibG9va0F0IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwiZGVidWciLCJwb3NpdGlvbiIsInJlZiIsImNvbGxpZGVycyIsInJlc3RpdHV0aW9uIiwibWFzcyIsImNhblNsZWVwIiwiZnJpY3Rpb24iLCJsaW5lYXJEYW1waW5nIiwiYW5ndWxhckRhbXBpbmciLCJhcmdzIiwibWVzaCIsImJveEdlb21ldHJ5IiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});