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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/web/KeyboardControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const model = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [smoothedCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(10, 10, 10));\n    const [smoothedCameraTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new three__WEBPACK_IMPORTED_MODULE_4__.Vector3());\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Add state for mouse position\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [subscribeKeys, getKeys] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useKeyboardControls)();\n    const jump = ()=>{\n        var _rocketRef_current;\n        (_rocketRef_current = rocketRef.current) === null || _rocketRef_current === void 0 ? void 0 : _rocketRef_current.applyImpulseAtPoint({\n            x: 0,\n            y: 50,\n            z: 0\n        }, {\n            x: 0,\n            y: -1,\n            z: 0\n        }, true);\n    };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C)((state, delta)=>{\n        if (rocketRef.current && cam.current) {\n            const { forward, backward, leftward, rightward } = getKeys();\n            const impulse = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const torque = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const impulseStrength = 1000 * delta;\n            const torqueStrength = 1000 * delta;\n            if (forward) {\n                impulse.z -= impulseStrength;\n                torque.y -= torqueStrength;\n            }\n            if (backward) {\n                impulse.z += impulseStrength;\n                torque.y += torqueStrength;\n            }\n            if (leftward) {\n                impulse.x -= impulseStrength;\n                torque.z -= torqueStrength;\n            }\n            if (rightward) {\n                impulse.x += impulseStrength;\n                torque.z += torqueStrength;\n            }\n            rocketRef.current.applyImpulse(impulse, true);\n            rocketRef.current.applyTorqueImpulse(torque, true);\n            // Update camera position and rotation\n            const bodyPosition = rocketRef.current.translation();\n            const cameraPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            cameraPosition.copy(bodyPosition);\n            cameraPosition.z += 7.25;\n            cameraPosition.y += 15.65;\n            const cameraTarget = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            cameraTarget.copy(bodyPosition);\n            cameraTarget.y += 0.25;\n            smoothedCameraPosition.lerp(cameraPosition, 5 * delta);\n            smoothedCameraTarget.lerp(cameraTarget, 5 * delta);\n            state.camera.position.copy(cameraPosition);\n            state.camera.lookAt(cameraTarget);\n        // const modelPosition = rocketRef.current.translation();\n        // const modelRotation = rocketRef.current.rotation();\n        // // console.log(\"modelPosition\", modelPosition);\n        // // console.log(\"modelRotation\", modelRotation);\n        // const cameraDistance = 10; // Adjust the distance as needed\n        // const cameraOffset = new THREE.Vector3(10, 10, cameraDistance);\n        // const cameraPosition = cameraOffset\n        //   .applyQuaternion(modelRotation)\n        //   .add(modelPosition);\n        // // cam.current.position.copy(cameraPosition);\n        // cam.current.lookAt(modelPosition);\n        // // console.log(\"cameraDistance\", cameraDistance);\n        // // console.log(\"cameraOffset\", cameraOffset);\n        // console.log(\"cameraPosition\", cameraPosition);\n        // console.log(\"modelPosition\", modelPosition);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        subscribeKeys((state)=>state.jump, (value)=>{\n            if (value) console.log(\"Yes, jump!\");\n            jump();\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            debug: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.OrbitControls, {}, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera, {\n                    position: [\n                        5,\n                        5,\n                        5\n                    ],\n                    ref: cam\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 0.2,\n                    mass: 0,\n                    canSleep: false,\n                    friction: 1,\n                    linearDamping: 0.5,\n                    angularDamping: 0.5,\n                    ref: rocketRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isFlying: isFlying,\n                        ref: model\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.CuboidCollider, {\n                    position: [\n                        0,\n                        -2,\n                        0\n                    ],\n                    args: [\n                        100,\n                        0.5,\n                        100\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                                args: [\n                                    40,\n                                    1,\n                                    40\n                                ]\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                                lineNumber: 147,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 126,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"wL9n40nGPrPxeFAyk1bx0C54070=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useKeyboardControls,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFPaEM7QUFDYTtBQU9YO0FBQ2lCO0FBQ2Y7QUFFL0IsTUFBTWEsY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVosNkNBQU1BO0lBQ3hCLE1BQU1hLE1BQU1iLDZDQUFNQTtJQUNsQixNQUFNYyxRQUFRZCw2Q0FBTUE7SUFFcEIsTUFBTSxDQUFDZSx1QkFBdUIsR0FBR2QsK0NBQVFBLENBQ3ZDLElBQU0sSUFBSVMsMENBQWEsQ0FBQyxJQUFJLElBQUk7SUFFbEMsTUFBTSxDQUFDTyxxQkFBcUIsR0FBR2hCLCtDQUFRQSxDQUFDLElBQU0sSUFBSVMsMENBQWE7SUFFL0QsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUV6QywrQkFBK0I7SUFDL0IsTUFBTSxDQUFDbUIsZUFBZUMsaUJBQWlCLEdBQUdwQiwrQ0FBUUEsQ0FBQztRQUFFcUIsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDaEUsTUFBTSxDQUFDQyxlQUFlQyxRQUFRLEdBQUdyQixzRUFBbUJBO0lBRXBELE1BQU1zQixPQUFPO1lBQ1hkO1NBQUFBLHFCQUFBQSxVQUFVZSxPQUFPLGNBQWpCZix5Q0FBQUEsbUJBQW1CZ0IsbUJBQW1CLENBQ3BDO1lBQUVOLEdBQUc7WUFBR0MsR0FBRztZQUFJTSxHQUFHO1FBQUUsR0FDcEI7WUFBRVAsR0FBRztZQUFHQyxHQUFHLENBQUM7WUFBR00sR0FBRztRQUFFLEdBQ3BCO0lBRUo7SUFFQXBCLHFEQUFRQSxDQUFDLENBQUNxQixPQUFPQztRQUNmLElBQUluQixVQUFVZSxPQUFPLElBQUlkLElBQUljLE9BQU8sRUFBRTtZQUNwQyxNQUFNLEVBQUVLLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRSxHQUFHVjtZQUVuRCxNQUFNVyxVQUFVO2dCQUFFZCxHQUFHO2dCQUFHQyxH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QkE7UUFVcERLLGlEQUFRQTs7O0tBeEJKRTtBQTRJTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JvY2tldFNjZW5lLnRzeD9hZGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBPcmJpdENvbnRyb2xzLFxuICBPcnRob2dyYXBoaWNDYW1lcmEsXG4gIFBlcnNwZWN0aXZlQ2FtZXJhLFxuICB1c2VLZXlib2FyZENvbnRyb2xzLFxufSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCBSb2NrZXQgZnJvbSBcIkBjb21wb25lbnRzL1JvY2tldFwiO1xuaW1wb3J0IHtcbiAgQ3Vib2lkQ29sbGlkZXIsXG4gIFBoeXNpY3MsXG4gIFJhcGllclJpZ2lkQm9keSxcbiAgUmlnaWRCb2R5LFxuICBxdWF0LFxufSBmcm9tIFwiQHJlYWN0LXRocmVlL3JhcGllclwiO1xuaW1wb3J0IHsgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcblxuY29uc3QgUm9ja2V0U2NlbmUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvY2tldFJlZiA9IHVzZVJlZjxSYXBpZXJSaWdpZEJvZHk+KCk7XG4gIGNvbnN0IGNhbSA9IHVzZVJlZjxhbnk+KCk7XG4gIGNvbnN0IG1vZGVsID0gdXNlUmVmPGFueT4oKTtcblxuICBjb25zdCBbc21vb3RoZWRDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcbiAgICAoKSA9PiBuZXcgVEhSRUUuVmVjdG9yMygxMCwgMTAsIDEwKVxuICApO1xuICBjb25zdCBbc21vb3RoZWRDYW1lcmFUYXJnZXRdID0gdXNlU3RhdGUoKCkgPT4gbmV3IFRIUkVFLlZlY3RvcjMoKSk7XG5cbiAgY29uc3QgW2lzRmx5aW5nLCBzZXRJc0ZseWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gQWRkIHN0YXRlIGZvciBtb3VzZSBwb3NpdGlvblxuICBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gIGNvbnN0IFtzdWJzY3JpYmVLZXlzLCBnZXRLZXlzXSA9IHVzZUtleWJvYXJkQ29udHJvbHMoKTtcblxuICBjb25zdCBqdW1wID0gKCkgPT4ge1xuICAgIHJvY2tldFJlZi5jdXJyZW50Py5hcHBseUltcHVsc2VBdFBvaW50KFxuICAgICAgeyB4OiAwLCB5OiA1MCwgejogMCB9LFxuICAgICAgeyB4OiAwLCB5OiAtMSwgejogMCB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH07XG5cbiAgdXNlRnJhbWUoKHN0YXRlLCBkZWx0YSkgPT4ge1xuICAgIGlmIChyb2NrZXRSZWYuY3VycmVudCAmJiBjYW0uY3VycmVudCkge1xuICAgICAgY29uc3QgeyBmb3J3YXJkLCBiYWNrd2FyZCwgbGVmdHdhcmQsIHJpZ2h0d2FyZCB9ID0gZ2V0S2V5cygpO1xuXG4gICAgICBjb25zdCBpbXB1bHNlID0geyB4OiAwLCB5OiAwLCB6OiAwIH07XG4gICAgICBjb25zdCB0b3JxdWUgPSB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcblxuICAgICAgY29uc3QgaW1wdWxzZVN0cmVuZ3RoID0gMTAwMCAqIGRlbHRhO1xuICAgICAgY29uc3QgdG9ycXVlU3RyZW5ndGggPSAxMDAwICogZGVsdGE7XG5cbiAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueiAtPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS55IC09IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGJhY2t3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueiArPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS55ICs9IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGxlZnR3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueCAtPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS56IC09IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHJpZ2h0d2FyZCkge1xuICAgICAgICBpbXB1bHNlLnggKz0gaW1wdWxzZVN0cmVuZ3RoO1xuICAgICAgICB0b3JxdWUueiArPSB0b3JxdWVTdHJlbmd0aDtcbiAgICAgIH1cblxuICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlKGltcHVsc2UsIHRydWUpO1xuICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlUb3JxdWVJbXB1bHNlKHRvcnF1ZSwgdHJ1ZSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBjYW1lcmEgcG9zaXRpb24gYW5kIHJvdGF0aW9uXG4gICAgICBjb25zdCBib2R5UG9zaXRpb24gPSByb2NrZXRSZWYuY3VycmVudC50cmFuc2xhdGlvbigpO1xuXG4gICAgICBjb25zdCBjYW1lcmFQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICBjYW1lcmFQb3NpdGlvbi5jb3B5KGJvZHlQb3NpdGlvbik7XG4gICAgICBjYW1lcmFQb3NpdGlvbi56ICs9IDcuMjU7XG4gICAgICBjYW1lcmFQb3NpdGlvbi55ICs9IDE1LjY1O1xuXG4gICAgICBjb25zdCBjYW1lcmFUYXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgY2FtZXJhVGFyZ2V0LmNvcHkoYm9keVBvc2l0aW9uKTtcbiAgICAgIGNhbWVyYVRhcmdldC55ICs9IDAuMjU7XG5cbiAgICAgIHNtb290aGVkQ2FtZXJhUG9zaXRpb24ubGVycChjYW1lcmFQb3NpdGlvbiwgNSAqIGRlbHRhKTtcbiAgICAgIHNtb290aGVkQ2FtZXJhVGFyZ2V0LmxlcnAoY2FtZXJhVGFyZ2V0LCA1ICogZGVsdGEpO1xuXG4gICAgICBzdGF0ZS5jYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3NpdGlvbik7XG4gICAgICBzdGF0ZS5jYW1lcmEubG9va0F0KGNhbWVyYVRhcmdldCk7XG5cbiAgICAgIC8vIGNvbnN0IG1vZGVsUG9zaXRpb24gPSByb2NrZXRSZWYuY3VycmVudC50cmFuc2xhdGlvbigpO1xuICAgICAgLy8gY29uc3QgbW9kZWxSb3RhdGlvbiA9IHJvY2tldFJlZi5jdXJyZW50LnJvdGF0aW9uKCk7XG5cbiAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwibW9kZWxQb3NpdGlvblwiLCBtb2RlbFBvc2l0aW9uKTtcbiAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwibW9kZWxSb3RhdGlvblwiLCBtb2RlbFJvdGF0aW9uKTtcblxuICAgICAgLy8gY29uc3QgY2FtZXJhRGlzdGFuY2UgPSAxMDsgLy8gQWRqdXN0IHRoZSBkaXN0YW5jZSBhcyBuZWVkZWRcbiAgICAgIC8vIGNvbnN0IGNhbWVyYU9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAxMCwgY2FtZXJhRGlzdGFuY2UpO1xuICAgICAgLy8gY29uc3QgY2FtZXJhUG9zaXRpb24gPSBjYW1lcmFPZmZzZXRcbiAgICAgIC8vICAgLmFwcGx5UXVhdGVybmlvbihtb2RlbFJvdGF0aW9uKVxuICAgICAgLy8gICAuYWRkKG1vZGVsUG9zaXRpb24pO1xuXG4gICAgICAvLyAvLyBjYW0uY3VycmVudC5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvc2l0aW9uKTtcbiAgICAgIC8vIGNhbS5jdXJyZW50Lmxvb2tBdChtb2RlbFBvc2l0aW9uKTtcblxuICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJjYW1lcmFEaXN0YW5jZVwiLCBjYW1lcmFEaXN0YW5jZSk7XG4gICAgICAvLyAvLyBjb25zb2xlLmxvZyhcImNhbWVyYU9mZnNldFwiLCBjYW1lcmFPZmZzZXQpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjYW1lcmFQb3NpdGlvblwiLCBjYW1lcmFQb3NpdGlvbik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1vZGVsUG9zaXRpb25cIiwgbW9kZWxQb3NpdGlvbik7XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN1YnNjcmliZUtleXMoXG4gICAgICAoc3RhdGUpID0+IHN0YXRlLmp1bXAsXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlKSBjb25zb2xlLmxvZyhcIlllcywganVtcCFcIik7XG4gICAgICAgIGp1bXAoKTtcbiAgICAgIH1cbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBoeXNpY3MgZGVidWc+XG4gICAgICAgIDxPcmJpdENvbnRyb2xzIC8+XG5cbiAgICAgICAgPFBlcnNwZWN0aXZlQ2FtZXJhIHBvc2l0aW9uPXtbNSwgNSwgNV19IHJlZj17Y2FtfSAvPlxuXG4gICAgICAgIDxSaWdpZEJvZHlcbiAgICAgICAgICBjb2xsaWRlcnM9e1wiaHVsbFwifVxuICAgICAgICAgIHJlc3RpdHV0aW9uPXswLjJ9XG4gICAgICAgICAgbWFzcz17MH1cbiAgICAgICAgICBjYW5TbGVlcD17ZmFsc2V9XG4gICAgICAgICAgZnJpY3Rpb249ezF9XG4gICAgICAgICAgbGluZWFyRGFtcGluZz17MC41fVxuICAgICAgICAgIGFuZ3VsYXJEYW1waW5nPXswLjV9XG4gICAgICAgICAgcmVmPXtyb2NrZXRSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8Um9ja2V0IGlzRmx5aW5nPXtpc0ZseWluZ30gcmVmPXttb2RlbH0gLz5cbiAgICAgICAgPC9SaWdpZEJvZHk+XG5cbiAgICAgICAgPEN1Ym9pZENvbGxpZGVyIHBvc2l0aW9uPXtbMCwgLTIsIDBdfSBhcmdzPXtbMTAwLCAwLjUsIDEwMF19PlxuICAgICAgICAgIDxtZXNoPlxuICAgICAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1s0MCwgMSwgNDBdfSAvPlxuICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgIDwvbWVzaD5cbiAgICAgICAgPC9DdWJvaWRDb2xsaWRlcj5cblxuICAgICAgICB7LyogPG1lc2ggcG9zaXRpb249e1swLCAwLCAwXX0gcmVmPXtkb3R9PlxuICAgICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMSwgMTYsIDE2XX0gLz5cbiAgICAgICAgICA8bWVzaEJhc2ljTWF0ZXJpYWwgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICA8L21lc2g+ICovfVxuICAgICAgPC9QaHlzaWNzPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9ja2V0U2NlbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk9yYml0Q29udHJvbHMiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInVzZUtleWJvYXJkQ29udHJvbHMiLCJSb2NrZXQiLCJDdWJvaWRDb2xsaWRlciIsIlBoeXNpY3MiLCJSaWdpZEJvZHkiLCJ1c2VGcmFtZSIsIlRIUkVFIiwiUm9ja2V0U2NlbmUiLCJyb2NrZXRSZWYiLCJjYW0iLCJtb2RlbCIsInNtb290aGVkQ2FtZXJhUG9zaXRpb24iLCJWZWN0b3IzIiwic21vb3RoZWRDYW1lcmFUYXJnZXQiLCJpc0ZseWluZyIsInNldElzRmx5aW5nIiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJ4IiwieSIsInN1YnNjcmliZUtleXMiLCJnZXRLZXlzIiwianVtcCIsImN1cnJlbnQiLCJhcHBseUltcHVsc2VBdFBvaW50IiwieiIsInN0YXRlIiwiZGVsdGEiLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJsZWZ0d2FyZCIsInJpZ2h0d2FyZCIsImltcHVsc2UiLCJ0b3JxdWUiLCJpbXB1bHNlU3RyZW5ndGgiLCJ0b3JxdWVTdHJlbmd0aCIsImFwcGx5SW1wdWxzZSIsImFwcGx5VG9ycXVlSW1wdWxzZSIsImJvZHlQb3NpdGlvbiIsInRyYW5zbGF0aW9uIiwiY2FtZXJhUG9zaXRpb24iLCJjb3B5IiwiY2FtZXJhVGFyZ2V0IiwibGVycCIsImNhbWVyYSIsInBvc2l0aW9uIiwibG9va0F0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZGVidWciLCJyZWYiLCJjb2xsaWRlcnMiLCJyZXN0aXR1dGlvbiIsIm1hc3MiLCJjYW5TbGVlcCIsImZyaWN0aW9uIiwibGluZWFyRGFtcGluZyIsImFuZ3VsYXJEYW1waW5nIiwiYXJncyIsIm1lc2giLCJib3hHZW9tZXRyeSIsIm1lc2hTdGFuZGFyZE1hdGVyaWFsIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});