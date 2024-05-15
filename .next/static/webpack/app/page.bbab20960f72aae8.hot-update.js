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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/web/KeyboardControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const model = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [smoothedCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(10, 10, 10));\n    const [smoothedCameraTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new three__WEBPACK_IMPORTED_MODULE_4__.Vector3());\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Add state for mouse position\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [subscribeKeys, getKeys] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useKeyboardControls)();\n    const jump = ()=>{\n        setIsFlying(true);\n    };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C)((state, delta)=>{\n        if (rocketRef.current && cam.current) {\n            const { forward, backward, leftward, rightward } = getKeys();\n            const impulse = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const torque = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const impulseStrength = 100 * delta;\n            const torqueStrength = 100 * delta;\n            if (forward) {\n                impulse.z -= impulseStrength;\n                torque.x -= torqueStrength;\n            }\n            if (backward) {\n                impulse.z += impulseStrength;\n                torque.x += torqueStrength;\n            }\n            if (leftward) {\n                impulse.x += impulseStrength;\n                torque.z += torqueStrength;\n            }\n            if (rightward) {\n                impulse.x -= impulseStrength;\n                torque.z -= torqueStrength;\n            }\n            if (jump) {\n                rocketRef.current.applyImpulse(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, -impulseStrength).applyQuaternion(rocketRef.current.rotation()), true);\n            }\n            rocketRef.current.applyImpulse(impulse, true);\n            rocketRef.current.applyTorqueImpulse(torque, true);\n            // Update camera position and rotation\n            const bodyPosition = rocketRef.current.translation();\n            const cameraPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            cameraPosition.copy(bodyPosition);\n            cameraPosition.z += 7.25;\n            cameraPosition.y += 15.65;\n            const cameraTarget = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            cameraTarget.copy(bodyPosition);\n            cameraTarget.y += 0.25;\n            smoothedCameraPosition.lerp(cameraPosition, 5 * delta);\n            smoothedCameraTarget.lerp(cameraTarget, 5 * delta);\n            state.camera.position.copy(cameraPosition);\n            state.camera.lookAt(cameraTarget);\n        // const modelPosition = rocketRef.current.translation();\n        // const modelRotation = rocketRef.current.rotation();\n        // // console.log(\"modelPosition\", modelPosition);\n        // // console.log(\"modelRotation\", modelRotation);\n        // const cameraDistance = 10; // Adjust the distance as needed\n        // const cameraOffset = new THREE.Vector3(10, 10, cameraDistance);\n        // const cameraPosition = cameraOffset\n        //   .applyQuaternion(modelRotation)\n        //   .add(modelPosition);\n        // // cam.current.position.copy(cameraPosition);\n        // cam.current.lookAt(modelPosition);\n        // // console.log(\"cameraDistance\", cameraDistance);\n        // // console.log(\"cameraOffset\", cameraOffset);\n        // console.log(\"cameraPosition\", cameraPosition);\n        // console.log(\"modelPosition\", modelPosition);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(isFlying ? \"Rocket is flying\" : \"Rocket is not flying\");\n    }, [\n        isFlying\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        subscribeKeys((state)=>state.jump, (value)=>{\n            if (value) {\n                jump();\n            } else {\n                setIsFlying(false);\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.OrbitControls, {}, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera, {\n                    position: [\n                        5,\n                        5,\n                        5\n                    ],\n                    ref: cam\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 140,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 0.2,\n                    mass: 0,\n                    canSleep: false,\n                    friction: 1,\n                    linearDamping: 0.5,\n                    angularDamping: 0.5,\n                    ref: rocketRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isFlying: isFlying,\n                        ref: model\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 152,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -20,\n                        0\n                    ],\n                    args: [\n                        100,\n                        0.5,\n                        100\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 157,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 158,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 155,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 137,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"zEl9ygkSyQg0dI7sDw0UBJyTiyk=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useKeyboardControls,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFPaEM7QUFDYTtBQU9YO0FBQ2lCO0FBQ2Y7QUFFL0IsTUFBTWEsY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVosNkNBQU1BO0lBQ3hCLE1BQU1hLE1BQU1iLDZDQUFNQTtJQUNsQixNQUFNYyxRQUFRZCw2Q0FBTUE7SUFFcEIsTUFBTSxDQUFDZSx1QkFBdUIsR0FBR2QsK0NBQVFBLENBQ3ZDLElBQU0sSUFBSVMsMENBQWEsQ0FBQyxJQUFJLElBQUk7SUFFbEMsTUFBTSxDQUFDTyxxQkFBcUIsR0FBR2hCLCtDQUFRQSxDQUFDLElBQU0sSUFBSVMsMENBQWE7SUFFL0QsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUV6QywrQkFBK0I7SUFDL0IsTUFBTSxDQUFDbUIsZUFBZUMsaUJBQWlCLEdBQUdwQiwrQ0FBUUEsQ0FBQztRQUFFcUIsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDaEUsTUFBTSxDQUFDQyxlQUFlQyxRQUFRLEdBQUdyQixzRUFBbUJBO0lBRXBELE1BQU1zQixPQUFPO1FBQ1hQLFlBQVk7SUFDZDtJQUVBVixxREFBUUEsQ0FBQyxDQUFDa0IsT0FBT0M7UUFDZixJQUFJaEIsVUFBVWlCLE9BQU8sSUFBSWhCLElBQUlnQixPQUFPLEVBQUU7WUFDcEMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUUsR0FBR1I7WUFFbkQsTUFBTVMsVUFBVTtnQkFBRVosR0FBRztnQkFBR0MsR0FBRztnQkFBR1ksR0FBRztZQUFFO1lBQ25DLE1BQU1DLFNBQVM7Z0JBQUVkLEdBQUc7Z0JBQUdDLEdBQUc7Z0JBQUdZLEdBQUc7WUFBRTtZQUVsQyxNQUFNRSxrQkFBa0IsTUFBTVQ7WUFDOUIsTUFBTVUsaUJBQWlCLE1BQU1WO1lBRTdCLElBQUlFLFNBQVM7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OUIsOERBQUNHO2dDQUFxQkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3hDO0dBckpNeEQ7O1FBYzZCUCxrRUFBbUJBO1FBTXBESyxpREFBUUE7OztLQXBCSkU7QUF1Sk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb2NrZXRTY2VuZS50c3g/YWRjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgT3JiaXRDb250cm9scyxcbiAgT3J0aG9ncmFwaGljQ2FtZXJhLFxuICBQZXJzcGVjdGl2ZUNhbWVyYSxcbiAgdXNlS2V5Ym9hcmRDb250cm9scyxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5pbXBvcnQgUm9ja2V0IGZyb20gXCJAY29tcG9uZW50cy9Sb2NrZXRcIjtcbmltcG9ydCB7XG4gIEN1Ym9pZENvbGxpZGVyLFxuICBQaHlzaWNzLFxuICBSYXBpZXJSaWdpZEJvZHksXG4gIFJpZ2lkQm9keSxcbiAgcXVhdCxcbn0gZnJvbSBcIkByZWFjdC10aHJlZS9yYXBpZXJcIjtcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSBcIkByZWFjdC10aHJlZS9maWJlclwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5cbmNvbnN0IFJvY2tldFNjZW5lID0gKCkgPT4ge1xuICBjb25zdCByb2NrZXRSZWYgPSB1c2VSZWY8UmFwaWVyUmlnaWRCb2R5PigpO1xuICBjb25zdCBjYW0gPSB1c2VSZWY8YW55PigpO1xuICBjb25zdCBtb2RlbCA9IHVzZVJlZjxhbnk+KCk7XG5cbiAgY29uc3QgW3Ntb290aGVkQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXG4gICAgKCkgPT4gbmV3IFRIUkVFLlZlY3RvcjMoMTAsIDEwLCAxMClcbiAgKTtcbiAgY29uc3QgW3Ntb290aGVkQ2FtZXJhVGFyZ2V0XSA9IHVzZVN0YXRlKCgpID0+IG5ldyBUSFJFRS5WZWN0b3IzKCkpO1xuXG4gIGNvbnN0IFtpc0ZseWluZywgc2V0SXNGbHlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEFkZCBzdGF0ZSBmb3IgbW91c2UgcG9zaXRpb25cbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbc3Vic2NyaWJlS2V5cywgZ2V0S2V5c10gPSB1c2VLZXlib2FyZENvbnRyb2xzKCk7XG5cbiAgY29uc3QganVtcCA9ICgpID0+IHtcbiAgICBzZXRJc0ZseWluZyh0cnVlKTtcbiAgfTtcblxuICB1c2VGcmFtZSgoc3RhdGUsIGRlbHRhKSA9PiB7XG4gICAgaWYgKHJvY2tldFJlZi5jdXJyZW50ICYmIGNhbS5jdXJyZW50KSB7XG4gICAgICBjb25zdCB7IGZvcndhcmQsIGJhY2t3YXJkLCBsZWZ0d2FyZCwgcmlnaHR3YXJkIH0gPSBnZXRLZXlzKCk7XG5cbiAgICAgIGNvbnN0IGltcHVsc2UgPSB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcbiAgICAgIGNvbnN0IHRvcnF1ZSA9IHsgeDogMCwgeTogMCwgejogMCB9O1xuXG4gICAgICBjb25zdCBpbXB1bHNlU3RyZW5ndGggPSAxMDAgKiBkZWx0YTtcbiAgICAgIGNvbnN0IHRvcnF1ZVN0cmVuZ3RoID0gMTAwICogZGVsdGE7XG5cbiAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueiAtPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS54IC09IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGJhY2t3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueiArPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS54ICs9IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGxlZnR3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueCArPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS56ICs9IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHJpZ2h0d2FyZCkge1xuICAgICAgICBpbXB1bHNlLnggLT0gaW1wdWxzZVN0cmVuZ3RoO1xuICAgICAgICB0b3JxdWUueiAtPSB0b3JxdWVTdHJlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChqdW1wKSB7XG4gICAgICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5SW1wdWxzZShcbiAgICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtaW1wdWxzZVN0cmVuZ3RoKS5hcHBseVF1YXRlcm5pb24oXG4gICAgICAgICAgICByb2NrZXRSZWYuY3VycmVudC5yb3RhdGlvbigpXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5SW1wdWxzZShpbXB1bHNlLCB0cnVlKTtcbiAgICAgIHJvY2tldFJlZi5jdXJyZW50LmFwcGx5VG9ycXVlSW1wdWxzZSh0b3JxdWUsIHRydWUpO1xuXG4gICAgICAvLyBVcGRhdGUgY2FtZXJhIHBvc2l0aW9uIGFuZCByb3RhdGlvblxuICAgICAgY29uc3QgYm9keVBvc2l0aW9uID0gcm9ja2V0UmVmLmN1cnJlbnQudHJhbnNsYXRpb24oKTtcblxuICAgICAgY29uc3QgY2FtZXJhUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgY2FtZXJhUG9zaXRpb24uY29weShib2R5UG9zaXRpb24pO1xuICAgICAgY2FtZXJhUG9zaXRpb24ueiArPSA3LjI1O1xuICAgICAgY2FtZXJhUG9zaXRpb24ueSArPSAxNS42NTtcblxuICAgICAgY29uc3QgY2FtZXJhVGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgIGNhbWVyYVRhcmdldC5jb3B5KGJvZHlQb3NpdGlvbik7XG4gICAgICBjYW1lcmFUYXJnZXQueSArPSAwLjI1O1xuXG4gICAgICBzbW9vdGhlZENhbWVyYVBvc2l0aW9uLmxlcnAoY2FtZXJhUG9zaXRpb24sIDUgKiBkZWx0YSk7XG4gICAgICBzbW9vdGhlZENhbWVyYVRhcmdldC5sZXJwKGNhbWVyYVRhcmdldCwgNSAqIGRlbHRhKTtcblxuICAgICAgc3RhdGUuY2FtZXJhLnBvc2l0aW9uLmNvcHkoY2FtZXJhUG9zaXRpb24pO1xuICAgICAgc3RhdGUuY2FtZXJhLmxvb2tBdChjYW1lcmFUYXJnZXQpO1xuXG4gICAgICAvLyBjb25zdCBtb2RlbFBvc2l0aW9uID0gcm9ja2V0UmVmLmN1cnJlbnQudHJhbnNsYXRpb24oKTtcbiAgICAgIC8vIGNvbnN0IG1vZGVsUm90YXRpb24gPSByb2NrZXRSZWYuY3VycmVudC5yb3RhdGlvbigpO1xuXG4gICAgICAvLyAvLyBjb25zb2xlLmxvZyhcIm1vZGVsUG9zaXRpb25cIiwgbW9kZWxQb3NpdGlvbik7XG4gICAgICAvLyAvLyBjb25zb2xlLmxvZyhcIm1vZGVsUm90YXRpb25cIiwgbW9kZWxSb3RhdGlvbik7XG5cbiAgICAgIC8vIGNvbnN0IGNhbWVyYURpc3RhbmNlID0gMTA7IC8vIEFkanVzdCB0aGUgZGlzdGFuY2UgYXMgbmVlZGVkXG4gICAgICAvLyBjb25zdCBjYW1lcmFPZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygxMCwgMTAsIGNhbWVyYURpc3RhbmNlKTtcbiAgICAgIC8vIGNvbnN0IGNhbWVyYVBvc2l0aW9uID0gY2FtZXJhT2Zmc2V0XG4gICAgICAvLyAgIC5hcHBseVF1YXRlcm5pb24obW9kZWxSb3RhdGlvbilcbiAgICAgIC8vICAgLmFkZChtb2RlbFBvc2l0aW9uKTtcblxuICAgICAgLy8gLy8gY2FtLmN1cnJlbnQucG9zaXRpb24uY29weShjYW1lcmFQb3NpdGlvbik7XG4gICAgICAvLyBjYW0uY3VycmVudC5sb29rQXQobW9kZWxQb3NpdGlvbik7XG5cbiAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwiY2FtZXJhRGlzdGFuY2VcIiwgY2FtZXJhRGlzdGFuY2UpO1xuICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJjYW1lcmFPZmZzZXRcIiwgY2FtZXJhT2Zmc2V0KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FtZXJhUG9zaXRpb25cIiwgY2FtZXJhUG9zaXRpb24pO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJtb2RlbFBvc2l0aW9uXCIsIG1vZGVsUG9zaXRpb24pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpc0ZseWluZyA/IFwiUm9ja2V0IGlzIGZseWluZ1wiIDogXCJSb2NrZXQgaXMgbm90IGZseWluZ1wiKTtcbiAgfSwgW2lzRmx5aW5nXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzdWJzY3JpYmVLZXlzKFxuICAgICAgKHN0YXRlKSA9PiBzdGF0ZS5qdW1wLFxuICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIGp1bXAoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRJc0ZseWluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBoeXNpY3M+XG4gICAgICAgIDxPcmJpdENvbnRyb2xzIC8+XG5cbiAgICAgICAgPFBlcnNwZWN0aXZlQ2FtZXJhIHBvc2l0aW9uPXtbNSwgNSwgNV19IHJlZj17Y2FtfSAvPlxuXG4gICAgICAgIDxSaWdpZEJvZHlcbiAgICAgICAgICBjb2xsaWRlcnM9e1wiaHVsbFwifVxuICAgICAgICAgIHJlc3RpdHV0aW9uPXswLjJ9XG4gICAgICAgICAgbWFzcz17MH1cbiAgICAgICAgICBjYW5TbGVlcD17ZmFsc2V9XG4gICAgICAgICAgZnJpY3Rpb249ezF9XG4gICAgICAgICAgbGluZWFyRGFtcGluZz17MC41fVxuICAgICAgICAgIGFuZ3VsYXJEYW1waW5nPXswLjV9XG4gICAgICAgICAgcmVmPXtyb2NrZXRSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8Um9ja2V0IGlzRmx5aW5nPXtpc0ZseWluZ30gcmVmPXttb2RlbH0gLz5cbiAgICAgICAgPC9SaWdpZEJvZHk+XG5cbiAgICAgICAgPEN1Ym9pZENvbGxpZGVyIHBvc2l0aW9uPXtbMCwgLTIwLCAwXX0gYXJncz17WzEwMCwgMC41LCAxMDBdfT5cbiAgICAgICAgICA8bWVzaD5cbiAgICAgICAgICAgIDxib3hHZW9tZXRyeSBhcmdzPXtbNDAsIDEsIDQwXX0gLz5cbiAgICAgICAgICAgIDxtZXNoU3RhbmRhcmRNYXRlcmlhbCBjb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgICAgICA8L21lc2g+XG4gICAgICAgIDwvQ3Vib2lkQ29sbGlkZXI+XG5cbiAgICAgICAgey8qIDxtZXNoIHBvc2l0aW9uPXtbMCwgLTEwLCAwXX0gcmVmPXtkb3R9PlxuICAgICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMSwgMTYsIDE2XX0gLz5cbiAgICAgICAgICA8bWVzaEJhc2ljTWF0ZXJpYWwgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICA8L21lc2g+ICovfVxuICAgICAgPC9QaHlzaWNzPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9ja2V0U2NlbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk9yYml0Q29udHJvbHMiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInVzZUtleWJvYXJkQ29udHJvbHMiLCJSb2NrZXQiLCJDdWJvaWRDb2xsaWRlciIsIlBoeXNpY3MiLCJSaWdpZEJvZHkiLCJ1c2VGcmFtZSIsIlRIUkVFIiwiUm9ja2V0U2NlbmUiLCJyb2NrZXRSZWYiLCJjYW0iLCJtb2RlbCIsInNtb290aGVkQ2FtZXJhUG9zaXRpb24iLCJWZWN0b3IzIiwic21vb3RoZWRDYW1lcmFUYXJnZXQiLCJpc0ZseWluZyIsInNldElzRmx5aW5nIiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJ4IiwieSIsInN1YnNjcmliZUtleXMiLCJnZXRLZXlzIiwianVtcCIsInN0YXRlIiwiZGVsdGEiLCJjdXJyZW50IiwiZm9yd2FyZCIsImJhY2t3YXJkIiwibGVmdHdhcmQiLCJyaWdodHdhcmQiLCJpbXB1bHNlIiwieiIsInRvcnF1ZSIsImltcHVsc2VTdHJlbmd0aCIsInRvcnF1ZVN0cmVuZ3RoIiwiYXBwbHlJbXB1bHNlIiwiYXBwbHlRdWF0ZXJuaW9uIiwicm90YXRpb24iLCJhcHBseVRvcnF1ZUltcHVsc2UiLCJib2R5UG9zaXRpb24iLCJ0cmFuc2xhdGlvbiIsImNhbWVyYVBvc2l0aW9uIiwiY29weSIsImNhbWVyYVRhcmdldCIsImxlcnAiLCJjYW1lcmEiLCJwb3NpdGlvbiIsImxvb2tBdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInJlZiIsImNvbGxpZGVycyIsInJlc3RpdHV0aW9uIiwibWFzcyIsImNhblNsZWVwIiwiZnJpY3Rpb24iLCJsaW5lYXJEYW1waW5nIiwiYW5ndWxhckRhbXBpbmciLCJhcmdzIiwibWVzaCIsImJveEdlb21ldHJ5IiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});