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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/web/KeyboardControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const model = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [smoothedCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(10, 10, 10));\n    const [smoothedCameraTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new three__WEBPACK_IMPORTED_MODULE_4__.Vector3());\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Add state for mouse position\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [subscribeKeys, getKeys] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useKeyboardControls)();\n    const jump = ()=>{\n        setIsFlying(true);\n    // rocketRef.current?.applyImpulseAtPoint(\n    //   { x: 0, y: 50, z: 0 },\n    //   { x: 0, y: -1, z: 0 },\n    //   true\n    // );\n    };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C)((state, delta)=>{\n        if (rocketRef.current && cam.current) {\n            const { forward, backward, leftward, rightward } = getKeys();\n            const impulse = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const torque = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const impulseStrength = 100 * delta;\n            const torqueStrength = 100 * delta;\n            if (forward) {\n                impulse.z -= impulseStrength;\n                torque.x -= torqueStrength;\n            }\n            if (backward) {\n                impulse.z += impulseStrength;\n                torque.x += torqueStrength;\n            }\n            if (leftward) {\n                impulse.x += impulseStrength;\n                torque.z += torqueStrength;\n            }\n            if (rightward) {\n                impulse.x -= impulseStrength;\n                torque.z -= torqueStrength;\n            }\n            rocketRef.current.applyImpulse(impulse, true);\n            rocketRef.current.applyTorqueImpulse(torque, true);\n            // Update camera position and rotation\n            const bodyPosition = rocketRef.current.translation();\n            const cameraPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            cameraPosition.copy(bodyPosition);\n            cameraPosition.z += 7.25;\n            cameraPosition.y += 15.65;\n            const cameraTarget = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            cameraTarget.copy(bodyPosition);\n            cameraTarget.y += 0.25;\n            smoothedCameraPosition.lerp(cameraPosition, 5 * delta);\n            smoothedCameraTarget.lerp(cameraTarget, 5 * delta);\n            state.camera.position.copy(cameraPosition);\n            state.camera.lookAt(cameraTarget);\n        // const modelPosition = rocketRef.current.translation();\n        // const modelRotation = rocketRef.current.rotation();\n        // // console.log(\"modelPosition\", modelPosition);\n        // // console.log(\"modelRotation\", modelRotation);\n        // const cameraDistance = 10; // Adjust the distance as needed\n        // const cameraOffset = new THREE.Vector3(10, 10, cameraDistance);\n        // const cameraPosition = cameraOffset\n        //   .applyQuaternion(modelRotation)\n        //   .add(modelPosition);\n        // // cam.current.position.copy(cameraPosition);\n        // cam.current.lookAt(modelPosition);\n        // // console.log(\"cameraDistance\", cameraDistance);\n        // // console.log(\"cameraOffset\", cameraOffset);\n        // console.log(\"cameraPosition\", cameraPosition);\n        // console.log(\"modelPosition\", modelPosition);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isFlying;\n    }, [\n        isFlying\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        subscribeKeys((state)=>state.jump, (value)=>{\n            if (value) {\n                jump();\n            } else {\n                setIsFlying(false);\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.OrbitControls, {}, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera, {\n                    position: [\n                        5,\n                        5,\n                        5\n                    ],\n                    ref: cam\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 0.2,\n                    mass: 0,\n                    canSleep: false,\n                    friction: 1,\n                    linearDamping: 0.5,\n                    angularDamping: 0.5,\n                    ref: rocketRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isFlying: isFlying,\n                        ref: model\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 134,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"zEl9ygkSyQg0dI7sDw0UBJyTiyk=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useKeyboardControls,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFPaEM7QUFDYTtBQU9YO0FBQ2lCO0FBQ2Y7QUFFL0IsTUFBTVksY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVgsNkNBQU1BO0lBQ3hCLE1BQU1ZLE1BQU1aLDZDQUFNQTtJQUNsQixNQUFNYSxRQUFRYiw2Q0FBTUE7SUFFcEIsTUFBTSxDQUFDYyx1QkFBdUIsR0FBR2IsK0NBQVFBLENBQ3ZDLElBQU0sSUFBSVEsMENBQWEsQ0FBQyxJQUFJLElBQUk7SUFFbEMsTUFBTSxDQUFDTyxxQkFBcUIsR0FBR2YsK0NBQVFBLENBQUMsSUFBTSxJQUFJUSwwQ0FBYTtJQUUvRCxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXpDLCtCQUErQjtJQUMvQixNQUFNLENBQUNrQixlQUFlQyxpQkFBaUIsR0FBR25CLCtDQUFRQSxDQUFDO1FBQUVvQixHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNoRSxNQUFNLENBQUNDLGVBQWVDLFFBQVEsR0FBR3BCLHNFQUFtQkE7SUFFcEQsTUFBTXFCLE9BQU87UUFDWFAsWUFBWTtJQUNaLDBDQUEwQztJQUMxQywyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxLQUFLO0lBQ1A7SUFFQVYscURBQVFBLENBQUMsQ0FBQ2tCLE9BQU9DO1FBQ2YsSUFBSWhCLFVBQVVpQixPQUFPLElBQUloQixJQUFJZ0IsT0FBTyxFQUFFO1lBQ3BDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFLEdBQUdSO1lBRW5ELE1BQU1TLFVBQVU7Z0JBQUVaLEdBQUc7Z0JBQUdDLEdBQUc7Z0JBQUdZLEdBQUc7WUFBRTtZQUNuQyxNQUFNQyxTQUFTO2dCQUFFZCxHQUFHO2dCQUFHQyxHQUFHO2dCQUFHWSxHQUFHO1lBQUU7WUFFbEMsTUFBTUUsa0JBQWtCLE1BQU1UO1lBQzlCLE1BQU1VLGlCQUFpQixNQUFNVjtZQUU3QixJQUFJRSxTQUFTO2dCQUNYSSxRQUFRQyxDQUFDLElBQUlFO2dCQUNiRCxPQUFPZCxDQUFDLElBQUlnQjtZQUNkO1lBQ0EsSUFBSVAsVUFBVTtnQkFDWkcsUUFBUUMsQ0FBQyxJQUFJRTtnQkFDYkQsT0FBT2QsQ0FBQyxJQUFJZ0I7WUFDZDtZQUNBLElBQUlOLFVBQVU7Z0JBQ1pFLFFBQVFaLENBQUMsSUFBSWU7Z0JBQ2JELE9BQU9ELENBQUMsSUFBSUc7WUFDZDtZQUNBLElBQUlMLFdBQVc7Z0JBQ2JDLFFBQVFaLENBQUMsSUFBSWU7Z0JBQ2JELE9BQU9ELENBQUMsSUFBSUc7WUFDZDtZQUVBMUIsVUFBVWlCLE9BQU8sQ0FBQ1UsWUFBWSxDQUFDTCxTQUFTO1lBQ3hDdEIsVUFBVWlCLE9BQU8sQ0FBQ1csa0JBQWtCLENBQUNKLFFBQVE7WUFFN0Msc0NBQXNDO1lBQ3RDLE1BQU1LLGVBQWU3QixVQUFVaUIsT0FBTyxDQUFDYSxXQUFXO1lBRWxELE1BQU1DLGlCQUFpQixJQUFJakMsMENBQWE7WUFDeENpQyxlQUFlQyxJQUFJLENBQUNIO1lBQ3BCRSxlQUFlUixDQUFDLElBQUk7WUFDcEJRLGVBQWVwQixDQUFDLElBQUk7WUFFcEIsTUFBTXNCLGVBQWUsSUFBSW5DLDBDQUFhO1lBQ3RDbUMsYUFBYUQsSUFBSSxDQUFDSDtZQUNsQkksYUFBYXRCLENBQUMsSUFBSTtZQUVsQlIsdUJBQXVCK0IsSUFBSSxDQUFDSCxnQkFBZ0IsSUFBSWY7WUFDaERYLHFCQUFxQjZCLElBQUksQ0FBQ0QsY0FBYyxJQUFJakI7WUFFNUNELE1BQU1vQixNQUFNLENBQUNDLFFBQVEsQ0FBQ0osSUFBSSxDQUFDRDtZQUMzQmhCLE1BQU1vQixNQUFNLENBQUNFLE1BQU0sQ0FBQ0o7UUFFcEIseURBQXlEO1FBQ3pELHNEQUFzRDtRQUV0RCxrREFBa0Q7UUFDbEQsa0RBQWtEO1FBRWxELDhEQUE4RDtRQUM5RCxrRUFBa0U7UUFDbEUsc0NBQXNDO1FBQ3RDLG9DQUFvQztRQUNwQyx5QkFBeUI7UUFFekIsZ0RBQWdEO1FBQ2hELHFDQUFxQztRQUVyQyxvREFBb0Q7UUFDcEQsZ0RBQWdEO1FBQ2hELGlEQUFpRDtRQUNqRCwrQ0FBK0M7UUFDakQ7SUFDRjtJQUVBN0MsZ0RBQVNBLENBQUM7UUFDUmtCO0lBQ0YsR0FBRztRQUFDQTtLQUFTO0lBRWJsQixnREFBU0EsQ0FBQztRQUNSd0IsY0FDRSxDQUFDRyxRQUFVQSxNQUFNRCxJQUFJLEVBQ3JCLENBQUN3QjtZQUNDLElBQUlBLE9BQU87Z0JBQ1R4QjtZQUNGLE9BQU87Z0JBQ0xQLFlBQVk7WUFDZDtRQUNGO0lBRUosR0FBRyxFQUFFO0lBRUwscUJBQ0U7a0JBQ0UsNEVBQUNaLHdEQUFPQTs7OEJBQ04sOERBQUNKLDREQUFhQTs7Ozs7OEJBRWQsOERBQUNDLGdFQUFpQkE7b0JBQUM0QyxVQUFVO3dCQUFDO3dCQUFHO3dCQUFHO3FCQUFFO29CQUFFRyxLQUFLdEM7Ozs7Ozs4QkFFN0MsOERBQUNMLDBEQUFTQTtvQkFDUjRDLFdBQVc7b0JBQ1hDLGFBQWE7b0JBQ2JDLE1BQU07b0JBQ05DLFVBQVU7b0JBQ1ZDLFVBQVU7b0JBQ1ZDLGVBQWU7b0JBQ2ZDLGdCQUFnQjtvQkFDaEJQLEtBQUt2Qzs4QkFFTCw0RUFBQ04sMERBQU1BO3dCQUFDWSxVQUFVQTt3QkFBVWlDLEtBQUtyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUIzQztHQWxKTUg7O1FBYzZCTixrRUFBbUJBO1FBV3BESSxpREFBUUE7OztLQXpCSkU7QUFvSk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb2NrZXRTY2VuZS50c3g/YWRjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgT3JiaXRDb250cm9scyxcbiAgT3J0aG9ncmFwaGljQ2FtZXJhLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgdXNlS2V5Ym9hcmRDb250cm9scyxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgUm9ja2V0IGZyb20gXCJAY29tcG9uZW50cy9Sb2NrZXRcIjtcbmltcG9ydCB7XG4gIEN1Ym9pZENvbGxpZGVyLFxuICBQaHlzaWNzLFxuICBSYXBpZXJSaWdpZEJvZHksXG4gIFJpZ2lkQm9keSxcbiAgcXVhdCxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9yYXBpZXJcIjtcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IFJvY2tldFNjZW5lID0gKCkgPT4ge1xuICBjb25zdCByb2NrZXRSZWYgPSB1c2VSZWY8UmFwaWVyUmlnaWRCb2R5PigpO1xuICBjb25zdCBjYW0gPSB1c2VSZWY8YW55PigpO1xuICBjb25zdCBtb2RlbCA9IHVzZVJlZjxhbnk+KCk7XG5cbiAgY29uc3QgW3Ntb290aGVkQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXG4gICAgKCkgPT4gbmV3IFRIUkVFLlZlY3RvcjMoMTAsIDEwLCAxMClcbiAgKTtcbiAgY29uc3QgW3Ntb290aGVkQ2FtZXJhVGFyZ2V0XSA9IHVzZVN0YXRlKCgpID0+IG5ldyBUSFJFRS5WZWN0b3IzKCkpO1xuXG4gIGNvbnN0IFtpc0ZseWluZywgc2V0SXNGbHlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEFkZCBzdGF0ZSBmb3IgbW91c2UgcG9zaXRpb25cbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbc3Vic2NyaWJlS2V5cywgZ2V0S2V5c10gPSB1c2VLZXlib2FyZENvbnRyb2xzKCk7XG5cbiAgY29uc3QganVtcCA9ICgpID0+IHtcbiAgICBzZXRJc0ZseWluZyh0cnVlKTtcbiAgICAvLyByb2NrZXRSZWYuY3VycmVudD8uYXBwbHlJbXB1bHNlQXRQb2ludChcbiAgICAvLyAgIHsgeDogMCwgeTogNTAsIHo6IDAgfSxcbiAgICAvLyAgIHsgeDogMCwgeTogLTEsIHo6IDAgfSxcbiAgICAvLyAgIHRydWVcbiAgICAvLyApO1xuICB9O1xuXG4gIHVzZUZyYW1lKChzdGF0ZSwgZGVsdGEpID0+IHtcbiAgICBpZiAocm9ja2V0UmVmLmN1cnJlbnQgJiYgY2FtLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHsgZm9yd2FyZCwgYmFja3dhcmQsIGxlZnR3YXJkLCByaWdodHdhcmQgfSA9IGdldEtleXMoKTtcblxuICAgICAgY29uc3QgaW1wdWxzZSA9IHsgeDogMCwgeTogMCwgejogMCB9O1xuICAgICAgY29uc3QgdG9ycXVlID0geyB4OiAwLCB5OiAwLCB6OiAwIH07XG5cbiAgICAgIGNvbnN0IGltcHVsc2VTdHJlbmd0aCA9IDEwMCAqIGRlbHRhO1xuICAgICAgY29uc3QgdG9ycXVlU3RyZW5ndGggPSAxMDAgKiBkZWx0YTtcblxuICAgICAgaWYgKGZvcndhcmQpIHtcbiAgICAgICAgaW1wdWxzZS56IC09IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnggLT0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAoYmFja3dhcmQpIHtcbiAgICAgICAgaW1wdWxzZS56ICs9IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnggKz0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAobGVmdHdhcmQpIHtcbiAgICAgICAgaW1wdWxzZS54ICs9IGltcHVsc2VTdHJlbmd0aDtcbiAgICAgICAgdG9ycXVlLnogKz0gdG9ycXVlU3RyZW5ndGg7XG4gICAgICB9XG4gICAgICBpZiAocmlnaHR3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueCAtPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS56IC09IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuXG4gICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseUltcHVsc2UoaW1wdWxzZSwgdHJ1ZSk7XG4gICAgICByb2NrZXRSZWYuY3VycmVudC5hcHBseVRvcnF1ZUltcHVsc2UodG9ycXVlLCB0cnVlKTtcblxuICAgICAgLy8gVXBkYXRlIGNhbWVyYSBwb3NpdGlvbiBhbmQgcm90YXRpb25cbiAgICAgIGNvbnN0IGJvZHlQb3NpdGlvbiA9IHJvY2tldFJlZi5jdXJyZW50LnRyYW5zbGF0aW9uKCk7XG5cbiAgICAgIGNvbnN0IGNhbWVyYVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgIGNhbWVyYVBvc2l0aW9uLmNvcHkoYm9keVBvc2l0aW9uKTtcbiAgICAgIGNhbWVyYVBvc2l0aW9uLnogKz0gNy4yNTtcbiAgICAgIGNhbWVyYVBvc2l0aW9uLnkgKz0gMTUuNjU7XG5cbiAgICAgIGNvbnN0IGNhbWVyYVRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICBjYW1lcmFUYXJnZXQuY29weShib2R5UG9zaXRpb24pO1xuICAgICAgY2FtZXJhVGFyZ2V0LnkgKz0gMC4yNTtcblxuICAgICAgc21vb3RoZWRDYW1lcmFQb3NpdGlvbi5sZXJwKGNhbWVyYVBvc2l0aW9uLCA1ICogZGVsdGEpO1xuICAgICAgc21vb3RoZWRDYW1lcmFUYXJnZXQubGVycChjYW1lcmFUYXJnZXQsIDUgKiBkZWx0YSk7XG5cbiAgICAgIHN0YXRlLmNhbWVyYS5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvc2l0aW9uKTtcbiAgICAgIHN0YXRlLmNhbWVyYS5sb29rQXQoY2FtZXJhVGFyZ2V0KTtcblxuICAgICAgLy8gY29uc3QgbW9kZWxQb3NpdGlvbiA9IHJvY2tldFJlZi5jdXJyZW50LnRyYW5zbGF0aW9uKCk7XG4gICAgICAvLyBjb25zdCBtb2RlbFJvdGF0aW9uID0gcm9ja2V0UmVmLmN1cnJlbnQucm90YXRpb24oKTtcblxuICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJtb2RlbFBvc2l0aW9uXCIsIG1vZGVsUG9zaXRpb24pO1xuICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJtb2RlbFJvdGF0aW9uXCIsIG1vZGVsUm90YXRpb24pO1xuXG4gICAgICAvLyBjb25zdCBjYW1lcmFEaXN0YW5jZSA9IDEwOyAvLyBBZGp1c3QgdGhlIGRpc3RhbmNlIGFzIG5lZWRlZFxuICAgICAgLy8gY29uc3QgY2FtZXJhT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoMTAsIDEwLCBjYW1lcmFEaXN0YW5jZSk7XG4gICAgICAvLyBjb25zdCBjYW1lcmFQb3NpdGlvbiA9IGNhbWVyYU9mZnNldFxuICAgICAgLy8gICAuYXBwbHlRdWF0ZXJuaW9uKG1vZGVsUm90YXRpb24pXG4gICAgICAvLyAgIC5hZGQobW9kZWxQb3NpdGlvbik7XG5cbiAgICAgIC8vIC8vIGNhbS5jdXJyZW50LnBvc2l0aW9uLmNvcHkoY2FtZXJhUG9zaXRpb24pO1xuICAgICAgLy8gY2FtLmN1cnJlbnQubG9va0F0KG1vZGVsUG9zaXRpb24pO1xuXG4gICAgICAvLyAvLyBjb25zb2xlLmxvZyhcImNhbWVyYURpc3RhbmNlXCIsIGNhbWVyYURpc3RhbmNlKTtcbiAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwiY2FtZXJhT2Zmc2V0XCIsIGNhbWVyYU9mZnNldCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImNhbWVyYVBvc2l0aW9uXCIsIGNhbWVyYVBvc2l0aW9uKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibW9kZWxQb3NpdGlvblwiLCBtb2RlbFBvc2l0aW9uKTtcbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNGbHlpbmcgXG4gIH0sIFtpc0ZseWluZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3Vic2NyaWJlS2V5cyhcbiAgICAgIChzdGF0ZSkgPT4gc3RhdGUuanVtcCxcbiAgICAgICh2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICBqdW1wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0SXNGbHlpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQaHlzaWNzPlxuICAgICAgICA8T3JiaXRDb250cm9scyAvPlxuXG4gICAgICAgIDxQZXJzcGVjdGl2ZUNhbWVyYSBwb3NpdGlvbj17WzUsIDUsIDVdfSByZWY9e2NhbX0gLz5cblxuICAgICAgICA8UmlnaWRCb2R5XG4gICAgICAgICAgY29sbGlkZXJzPXtcImh1bGxcIn1cbiAgICAgICAgICByZXN0aXR1dGlvbj17MC4yfVxuICAgICAgICAgIG1hc3M9ezB9XG4gICAgICAgICAgY2FuU2xlZXA9e2ZhbHNlfVxuICAgICAgICAgIGZyaWN0aW9uPXsxfVxuICAgICAgICAgIGxpbmVhckRhbXBpbmc9ezAuNX1cbiAgICAgICAgICBhbmd1bGFyRGFtcGluZz17MC41fVxuICAgICAgICAgIHJlZj17cm9ja2V0UmVmfVxuICAgICAgICA+XG4gICAgICAgICAgPFJvY2tldCBpc0ZseWluZz17aXNGbHlpbmd9IHJlZj17bW9kZWx9IC8+XG4gICAgICAgIDwvUmlnaWRCb2R5PlxuXG4gICAgICAgIHsvKiA8Q3Vib2lkQ29sbGlkZXIgcG9zaXRpb249e1swLCAtMiwgMF19IGFyZ3M9e1sxMDAsIDAuNSwgMTAwXX0+XG4gICAgICAgICAgPG1lc2g+XG4gICAgICAgICAgICA8Ym94R2VvbWV0cnkgYXJncz17WzQwLCAxLCA0MF19IC8+XG4gICAgICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgY29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgPC9tZXNoPlxuICAgICAgICA8L0N1Ym9pZENvbGxpZGVyPiAqL31cblxuICAgICAgICB7LyogPG1lc2ggcG9zaXRpb249e1swLCAwLCAwXX0gcmVmPXtkb3R9PlxuICAgICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMSwgMTYsIDE2XX0gLz5cbiAgICAgICAgICA8bWVzaEJhc2ljTWF0ZXJpYWwgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICA8L21lc2g+ICovfVxuICAgICAgPC9QaHlzaWNzPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9ja2V0U2NlbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk9yYml0Q29udHJvbHMiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInVzZUtleWJvYXJkQ29udHJvbHMiLCJSb2NrZXQiLCJQaHlzaWNzIiwiUmlnaWRCb2R5IiwidXNlRnJhbWUiLCJUSFJFRSIsIlJvY2tldFNjZW5lIiwicm9ja2V0UmVmIiwiY2FtIiwibW9kZWwiLCJzbW9vdGhlZENhbWVyYVBvc2l0aW9uIiwiVmVjdG9yMyIsInNtb290aGVkQ2FtZXJhVGFyZ2V0IiwiaXNGbHlpbmciLCJzZXRJc0ZseWluZyIsIm1vdXNlUG9zaXRpb24iLCJzZXRNb3VzZVBvc2l0aW9uIiwieCIsInkiLCJzdWJzY3JpYmVLZXlzIiwiZ2V0S2V5cyIsImp1bXAiLCJzdGF0ZSIsImRlbHRhIiwiY3VycmVudCIsImZvcndhcmQiLCJiYWNrd2FyZCIsImxlZnR3YXJkIiwicmlnaHR3YXJkIiwiaW1wdWxzZSIsInoiLCJ0b3JxdWUiLCJpbXB1bHNlU3RyZW5ndGgiLCJ0b3JxdWVTdHJlbmd0aCIsImFwcGx5SW1wdWxzZSIsImFwcGx5VG9ycXVlSW1wdWxzZSIsImJvZHlQb3NpdGlvbiIsInRyYW5zbGF0aW9uIiwiY2FtZXJhUG9zaXRpb24iLCJjb3B5IiwiY2FtZXJhVGFyZ2V0IiwibGVycCIsImNhbWVyYSIsInBvc2l0aW9uIiwibG9va0F0IiwidmFsdWUiLCJyZWYiLCJjb2xsaWRlcnMiLCJyZXN0aXR1dGlvbiIsIm1hc3MiLCJjYW5TbGVlcCIsImZyaWN0aW9uIiwibGluZWFyRGFtcGluZyIsImFuZ3VsYXJEYW1waW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});