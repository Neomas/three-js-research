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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/web/KeyboardControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const model = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Add state for mouse position\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [subscribeKeys, getKeys] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useKeyboardControls)();\n    const jump = ()=>{\n        var _rocketRef_current;\n        (_rocketRef_current = rocketRef.current) === null || _rocketRef_current === void 0 ? void 0 : _rocketRef_current.applyImpulseAtPoint({\n            x: 0,\n            y: 50,\n            z: 0\n        }, {\n            x: 0,\n            y: -1,\n            z: 0\n        }, true);\n    };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.C)((state, delta)=>{\n        if (rocketRef.current) {\n            const { forward, backward, leftward, rightward } = getKeys();\n            const impulse = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const torque = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const impulseStrength = 100 * delta;\n            const torqueStrength = 100 * delta;\n            if (forward) {\n                impulse.z -= impulseStrength;\n                torque.x -= torqueStrength;\n            }\n            if (backward) {\n                impulse.z += impulseStrength;\n                torque.x += torqueStrength;\n            }\n            if (leftward) {\n                impulse.x -= impulseStrength;\n                torque.z -= torqueStrength;\n            }\n            if (rightward) {\n                impulse.x += impulseStrength;\n                torque.z += torqueStrength;\n            }\n            rocketRef.current.applyImpulse(impulse, true);\n            rocketRef.current.applyTorqueImpulse(torque, true);\n        }\n        if (rocketRef.current && cam.current) {\n            // Update camera position and rotation\n            const modelPosition = rocketRef.current.translation();\n            const modelRotation = rocketRef.current.rotation();\n            // console.log(\"modelPosition\", modelPosition);\n            // console.log(\"modelRotation\", modelRotation);\n            const cameraDistance = 10; // Adjust the distance as needed\n            const cameraOffset = new three__WEBPACK_IMPORTED_MODULE_6__.Vector3(10, 10, cameraDistance);\n            const cameraPosition = cameraOffset.applyQuaternion(modelRotation).add(modelPosition);\n            // cam.current.position.copy(cameraPosition);\n            cam.current.lookAt(modelPosition);\n            // console.log(\"cameraDistance\", cameraDistance);\n            // console.log(\"cameraOffset\", cameraOffset);\n            console.log(\"cameraPosition\", cameraPosition);\n        // console.log(\"modelPosition\", modelPosition);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        subscribeKeys((state)=>state.jump, (value)=>{\n            if (value) console.log(\"Yes, jump!\");\n            jump();\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            debug: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.OrbitControls, {}, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera, {\n                    position: [\n                        5,\n                        5,\n                        5\n                    ],\n                    ref: cam,\n                    wireframe: true\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 0.2,\n                    mass: 0,\n                    canSleep: false,\n                    friction: 1,\n                    linearDamping: 0.5,\n                    angularDamping: 0.5,\n                    ref: rocketRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isFlying: isFlying,\n                        ref: model\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -2,\n                        0\n                    ],\n                    args: [\n                        100,\n                        0.5,\n                        100\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"mFnKVdTOSpFa0yJIz540fq0GSEg=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useKeyboardControls,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFNaEM7QUFDYTtBQU9YO0FBQ2lCO0FBQ2Y7QUFFL0IsTUFBTWEsY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVosNkNBQU1BO0lBQ3hCLE1BQU1hLE1BQU1iLDZDQUFNQTtJQUNsQixNQUFNYyxRQUFRZCw2Q0FBTUE7SUFFcEIsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXpDLCtCQUErQjtJQUMvQixNQUFNLENBQUNnQixlQUFlQyxpQkFBaUIsR0FBR2pCLCtDQUFRQSxDQUFDO1FBQUVrQixHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNoRSxNQUFNLENBQUNDLGVBQWVDLFFBQVEsR0FBR2xCLHNFQUFtQkE7SUFFcEQsTUFBTW1CLE9BQU87WUFDWFg7U0FBQUEscUJBQUFBLFVBQVVZLE9BQU8sY0FBakJaLHlDQUFBQSxtQkFBbUJhLG1CQUFtQixDQUNwQztZQUFFTixHQUFHO1lBQUdDLEdBQUc7WUFBSU0sR0FBRztRQUFFLEdBQ3BCO1lBQUVQLEdBQUc7WUFBR0MsR0FBRyxDQUFDO1lBQUdNLEdBQUc7UUFBRSxHQUNwQjtJQUVKO0lBRUFqQixxREFBUUEsQ0FBQyxDQUFDa0IsT0FBT0M7UUFDZixJQUFJaEIsVUFBVVksT0FBTyxFQUFFO1lBQ3JCLE1BQU0sRUFBRUssT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFLEdBQUdWO1lBRW5ELE1BQU1XLFVBQVU7Z0JBQUVkLEdBQUc7Z0JBQUdDLEdBQUc7Z0JBQUdNLEdBQUc7WUFBRTtZQUNuQyxNQUFNUSxTQUFTO2dCQUFFZixHQUFHO2dCQUFHQyxHQUFHO2dCQUFHTSxHQUFHO1lBQUU7WUFFbEMsTUFBTVMsa0JBQWtCLE1BQU1QO1lBQzlCLE1BQU1RLGlCQUFpQixNQUFNUjtZQUU3QixJQUFJQyxTQUFTO2dCQUNYSSxRQUFRUCxDQUFDLElBQUlTO2dCQUNiRCxPQUFPZixDQUFDLElBQUlpQjtZQUNkO1lBQ0EsSUFBSU4sVUFBVTtnQkFDWkcsUUFBUVAsQ0FBQyxJQUFJUztnQkFDYkQsT0FBT2YsQ0FBQyxJQUFJaUI7WUFDZDtZQUNBLElBQUlMLFVBQVU7Z0JBQ1pFLFFBQVFkLENBQUMsSUFBSWdCO2dCQUNiRCxPQUFPUixDQUFDLElBQUlVO1lBQ2Q7WUFDQSxJQUFJSixXQUFXO2dCQUNiQyxRQUFRZCxDQUFDLElBQUlnQjtnQkFDYkQsT0FBT1IsQ0FBQyxJQUFJVTtZQUNkO1lBRUF4QixVQUFVWSxPQUFPLENBQUNhLFlBQVksQ0FBQ0osU0FBUztZQUN4Q3JCLFVBQVVZLE9BQU8sQ0FBQ2Msa0JBQWtCLENBQUNKLFFBQVE7UUFDL0M7UUFFQSxJQUFJdEIsVUFBVVksT0FBTyxJQUFJWCxJQUFJVyxPQUFPLEVBQUU7WUFDcEMsc0NBQXNDO1lBRXRDLE1BQU1lLGdCQUFnQjNCLFVBQVVZLE9BQU8sQ0FBQ2dCLFdBQVc7WUFDbkQsTUFBTUMsZ0JBQWdCN0IsVUFBVVksT0FBTyxDQUFDa0IsUUFBUTtZQUVoRCwrQ0FBK0M7WUFDL0MsK0NBQStDO1lBRS9DLE1BQU1DLGlCQUFpQixJQUFJLGdDQUFnQztZQUMzRCxNQUFNQyxlQUFlLElBQUlsQywwQ0FBYSxDQUFDLElBQUksSUFBSWlDO1lBQy9DLE1BQU1HLGlCQUFpQkYsYUFDcEJHLGVBQWUsQ0FBQ04sZUFDaEJPLEdBQUcsQ0FBQ1Q7WUFFUCw2Q0FBNkM7WUFDN0MxQixJQUFJVyxPQUFPLENBQUN5QixNQUFNLENBQUNWO1lBRW5CLGlEQUFpRDtZQUNqRCw2Q0FBNkM7WUFDN0NXLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JMO1FBQzlCLCtDQUErQztRQUNqRDtJQUNGO0lBRUEvQyxnREFBU0EsQ0FBQztRQUNSc0IsY0FDRSxDQUFDTSxRQUFVQSxNQUFNSixJQUFJLEVBQ3JCLENBQUM2QjtZQUNDLElBQUlBLE9BQU9GLFFBQVFDLEdBQUcsQ0FBQztZQUN2QjVCO1FBQ0Y7SUFFSixHQUFHLEVBQUU7SUFFTCxxQkFDRTtrQkFDRSw0RUFBQ2hCLHdEQUFPQTtZQUFDOEMsS0FBSzs7OEJBQ1osOERBQUNuRCw0REFBYUE7Ozs7OzhCQUVkLDhEQUFDQyxnRUFBaUJBO29CQUFDbUQsVUFBVTt3QkFBQzt3QkFBRzt3QkFBRztxQkFBRTtvQkFBRUMsS0FBSzFDO29CQUFLMkMsU0FBUzs7Ozs7OzhCQUUzRCw4REFBQ2hELDBEQUFTQTtvQkFDUmlELFdBQVc7b0JBQ1hDLGFBQWE7b0JBQ2JDLE1BQU07b0JBQ05DLFVBQVU7b0JBQ1ZDLFVBQVU7b0JBQ1ZDLGVBQWU7b0JBQ2ZDLGdCQUFnQjtvQkFDaEJSLEtBQUszQzs4QkFFTCw0RUFBQ1AsMERBQU1BO3dCQUFDVSxVQUFVQTt3QkFBVXdDLEtBQUt6Qzs7Ozs7Ozs7Ozs7OEJBR25DLDhEQUFDUiwrREFBY0E7b0JBQUNnRCxVQUFVO3dCQUFDO3dCQUFHLENBQUM7d0JBQUc7cUJBQUU7b0JBQUVVLE1BQU07d0JBQUM7d0JBQUs7d0JBQUs7cUJBQUk7OEJBQ3pELDRFQUFDQzs7MENBQ0MsOERBQUNDO2dDQUFZRixNQUFNO29DQUFDO29DQUFJO29DQUFHO2lDQUFHOzs7Ozs7MENBQzlCLDhEQUFDRztnQ0FBcUJDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVd4QztHQXZITXpEOztRQVM2QlAsa0VBQW1CQTtRQVVwREssaURBQVFBOzs7S0FuQkpFO0FBeUhOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4P2FkY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRW52aXJvbm1lbnQsXG4gIE9yYml0Q29udHJvbHMsXG4gIFBlcnNwZWN0aXZlQ2FtZXJhLFxuICB1c2VLZXlib2FyZENvbnRyb2xzLFxufSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCBSb2NrZXQgZnJvbSBcIkBjb21wb25lbnRzL1JvY2tldFwiO1xuaW1wb3J0IHtcbiAgQ3Vib2lkQ29sbGlkZXIsXG4gIFBoeXNpY3MsXG4gIFJhcGllclJpZ2lkQm9keSxcbiAgUmlnaWRCb2R5LFxuICBxdWF0LFxufSBmcm9tIFwiQHJlYWN0LXRocmVlL3JhcGllclwiO1xuaW1wb3J0IHsgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcblxuY29uc3QgUm9ja2V0U2NlbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvY2tldFJlZiA9IHVzZVJlZjxSYXBpZXJSaWdpZEJvZHk+KCk7XG4gIGNvbnN0IGNhbSA9IHVzZVJlZjxhbnk+KCk7XG4gIGNvbnN0IG1vZGVsID0gdXNlUmVmPGFueT4oKTtcblxuICBjb25zdCBbaXNGbHlpbmcsIHNldElzRmx5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBBZGQgc3RhdGUgZm9yIG1vdXNlIHBvc2l0aW9uXG4gIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgW3N1YnNjcmliZUtleXMsIGdldEtleXNdID0gdXNlS2V5Ym9hcmRDb250cm9scygpO1xuXG4gIGNvbnN0IGp1bXAgPSAoKSA9PiB7XG4gICAgcm9ja2V0UmVmLmN1cnJlbnQ/LmFwcGx5SW1wdWxzZUF0UG9pbnQoXG4gICAgICB7IHg6IDAsIHk6IDUwLCB6OiAwIH0sXG4gICAgICB7IHg6IDAsIHk6IC0xLCB6OiAwIH0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfTtcblxuICB1c2VGcmFtZSgoc3RhdGUsIGRlbHRhKSA9PiB7XG4gICAgaWYgKHJvY2tldFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCB7IGZvcndhcmQsIGJhY2t3YXJkLCBsZWZ0d2FyZCwgcmlnaHR3YXJkIH0gPSBnZXRLZXlzKCk7XG5cbiAgICAgIGNvbnN0IGltcHVsc2UgPSB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcbiAgICAgIGNvbnN0IHRvcnF1ZSA9IHsgeDogMCwgeTogMCwgejogMCB9O1xuXG4gICAgICBjb25zdCBpbXB1bHNlU3RyZW5ndGggPSAxMDAgKiBkZWx0YTtcbiAgICAgIGNvbnN0IHRvcnF1ZVN0cmVuZ3RoID0gMTAwICogZGVsdGE7XG5cbiAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueiAtPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS54IC09IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGJhY2t3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueiArPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS54ICs9IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGxlZnR3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueCAtPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS56IC09IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHJpZ2h0d2FyZCkge1xuICAgICAgICBpbXB1bHNlLnggKz0gaW1wdWxzZVN0cmVuZ3RoO1xuICAgICAgICB0b3JxdWUueiArPSB0b3JxdWVTdHJlbmd0aDtcbiAgICAgIH1cblxuICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlKGltcHVsc2UsIHRydWUpO1xuICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlUb3JxdWVJbXB1bHNlKHRvcnF1ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHJvY2tldFJlZi5jdXJyZW50ICYmIGNhbS5jdXJyZW50KSB7XG4gICAgICAvLyBVcGRhdGUgY2FtZXJhIHBvc2l0aW9uIGFuZCByb3RhdGlvblxuXG4gICAgICBjb25zdCBtb2RlbFBvc2l0aW9uID0gcm9ja2V0UmVmLmN1cnJlbnQudHJhbnNsYXRpb24oKTtcbiAgICAgIGNvbnN0IG1vZGVsUm90YXRpb24gPSByb2NrZXRSZWYuY3VycmVudC5yb3RhdGlvbigpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1vZGVsUG9zaXRpb25cIiwgbW9kZWxQb3NpdGlvbik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1vZGVsUm90YXRpb25cIiwgbW9kZWxSb3RhdGlvbik7XG5cbiAgICAgIGNvbnN0IGNhbWVyYURpc3RhbmNlID0gMTA7IC8vIEFkanVzdCB0aGUgZGlzdGFuY2UgYXMgbmVlZGVkXG4gICAgICBjb25zdCBjYW1lcmFPZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygxMCwgMTAsIGNhbWVyYURpc3RhbmNlKTtcbiAgICAgIGNvbnN0IGNhbWVyYVBvc2l0aW9uID0gY2FtZXJhT2Zmc2V0XG4gICAgICAgIC5hcHBseVF1YXRlcm5pb24obW9kZWxSb3RhdGlvbilcbiAgICAgICAgLmFkZChtb2RlbFBvc2l0aW9uKTtcblxuICAgICAgLy8gY2FtLmN1cnJlbnQucG9zaXRpb24uY29weShjYW1lcmFQb3NpdGlvbik7XG4gICAgICBjYW0uY3VycmVudC5sb29rQXQobW9kZWxQb3NpdGlvbik7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FtZXJhRGlzdGFuY2VcIiwgY2FtZXJhRGlzdGFuY2UpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjYW1lcmFPZmZzZXRcIiwgY2FtZXJhT2Zmc2V0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FtZXJhUG9zaXRpb25cIiwgY2FtZXJhUG9zaXRpb24pO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJtb2RlbFBvc2l0aW9uXCIsIG1vZGVsUG9zaXRpb24pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdWJzY3JpYmVLZXlzKFxuICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5qdW1wLFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSkgY29uc29sZS5sb2coXCJZZXMsIGp1bXAhXCIpO1xuICAgICAgICBqdW1wKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQaHlzaWNzIGRlYnVnPlxuICAgICAgICA8T3JiaXRDb250cm9scyAvPlxuXG4gICAgICAgIDxQZXJzcGVjdGl2ZUNhbWVyYSBwb3NpdGlvbj17WzUsIDUsIDVdfSByZWY9e2NhbX0gd2lyZWZyYW1lIC8+XG5cbiAgICAgICAgPFJpZ2lkQm9keVxuICAgICAgICAgIGNvbGxpZGVycz17XCJodWxsXCJ9XG4gICAgICAgICAgcmVzdGl0dXRpb249ezAuMn1cbiAgICAgICAgICBtYXNzPXswfVxuICAgICAgICAgIGNhblNsZWVwPXtmYWxzZX1cbiAgICAgICAgICBmcmljdGlvbj17MX1cbiAgICAgICAgICBsaW5lYXJEYW1waW5nPXswLjV9XG4gICAgICAgICAgYW5ndWxhckRhbXBpbmc9ezAuNX1cbiAgICAgICAgICByZWY9e3JvY2tldFJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxSb2NrZXQgaXNGbHlpbmc9e2lzRmx5aW5nfSByZWY9e21vZGVsfSAvPlxuICAgICAgICA8L1JpZ2lkQm9keT5cblxuICAgICAgICA8Q3Vib2lkQ29sbGlkZXIgcG9zaXRpb249e1swLCAtMiwgMF19IGFyZ3M9e1sxMDAsIDAuNSwgMTAwXX0+XG4gICAgICAgICAgPG1lc2g+XG4gICAgICAgICAgICA8Ym94R2VvbWV0cnkgYXJncz17WzQwLCAxLCA0MF19IC8+XG4gICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgPC9tZXNoPlxuICAgICAgICA8L0N1Ym9pZENvbGxpZGVyPlxuXG4gICAgICAgIHsvKiA8bWVzaCBwb3NpdGlvbj17WzAsIDAsIDBdfSByZWY9e2RvdH0+XG4gICAgICAgICAgPHNwaGVyZUdlb21ldHJ5IGFyZ3M9e1sxLCAxNiwgMTZdfSAvPlxuICAgICAgICAgIDxtZXNoQmFzaWNNYXRlcmlhbCBjb2xvcj1cInJlZFwiIC8+XG4gICAgICAgIDwvbWVzaD4gKi99XG4gICAgICA8L1BoeXNpY3M+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb2NrZXRTY2VuZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiT3JiaXRDb250cm9scyIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwidXNlS2V5Ym9hcmRDb250cm9scyIsIlJvY2tldCIsIkN1Ym9pZENvbGxpZGVyIiwiUGh5c2ljcyIsIlJpZ2lkQm9keSIsInVzZUZyYW1lIiwiVEhSRUUiLCJSb2NrZXRTY2VuZSIsInJvY2tldFJlZiIsImNhbSIsIm1vZGVsIiwiaXNGbHlpbmciLCJzZXRJc0ZseWluZyIsIm1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwieCIsInkiLCJzdWJzY3JpYmVLZXlzIiwiZ2V0S2V5cyIsImp1bXAiLCJjdXJyZW50IiwiYXBwbHlJbXB1bHNlQXRQb2ludCIsInoiLCJzdGF0ZSIsImRlbHRhIiwiZm9yd2FyZCIsImJhY2t3YXJkIiwibGVmdHdhcmQiLCJyaWdodHdhcmQiLCJpbXB1bHNlIiwidG9ycXVlIiwiaW1wdWxzZVN0cmVuZ3RoIiwidG9ycXVlU3RyZW5ndGgiLCJhcHBseUltcHVsc2UiLCJhcHBseVRvcnF1ZUltcHVsc2UiLCJtb2RlbFBvc2l0aW9uIiwidHJhbnNsYXRpb24iLCJtb2RlbFJvdGF0aW9uIiwicm90YXRpb24iLCJjYW1lcmFEaXN0YW5jZSIsImNhbWVyYU9mZnNldCIsIlZlY3RvcjMiLCJjYW1lcmFQb3NpdGlvbiIsImFwcGx5UXVhdGVybmlvbiIsImFkZCIsImxvb2tBdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsImRlYnVnIiwicG9zaXRpb24iLCJyZWYiLCJ3aXJlZnJhbWUiLCJjb2xsaWRlcnMiLCJyZXN0aXR1dGlvbiIsIm1hc3MiLCJjYW5TbGVlcCIsImZyaWN0aW9uIiwibGluZWFyRGFtcGluZyIsImFuZ3VsYXJEYW1waW5nIiwiYXJncyIsIm1lc2giLCJib3hHZW9tZXRyeSIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});