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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/web/KeyboardControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/PerspectiveCamera.js\");\n/* harmony import */ var _components_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Rocket */ \"(app-pages-browser)/./components/Rocket.tsx\");\n/* harmony import */ var _react_three_rapier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/rapier */ \"(app-pages-browser)/./node_modules/@react-three/rapier/dist/react-three-rapier.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-29b7121b.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"(app-pages-browser)/./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RocketScene = ()=>{\n    _s();\n    const rocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const cam = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const model = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [smoothedCameraPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(10, 10, 10));\n    const [smoothedCameraTarget] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new three__WEBPACK_IMPORTED_MODULE_4__.Vector3());\n    const [isFlying, setIsFlying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Add state for mouse position\n    const [mousePosition, setMousePosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [subscribeKeys, getKeys] = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useKeyboardControls)();\n    const jump = ()=>{\n        setIsFlying(true);\n    // rocketRef.current?.applyImpulseAtPoint(\n    //   { x: 0, y: 50, z: 0 },\n    //   { x: 0, y: -1, z: 0 },\n    //   true\n    // );\n    };\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C)((state, delta)=>{\n        if (rocketRef.current && cam.current) {\n            const { forward, backward, leftward, rightward } = getKeys();\n            const impulse = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const torque = {\n                x: 0,\n                y: 0,\n                z: 0\n            };\n            const impulseStrength = 100 * delta;\n            const torqueStrength = 100 * delta;\n            if (forward) {\n                impulse.z -= impulseStrength;\n                torque.x -= torqueStrength;\n            }\n            if (backward) {\n                impulse.z += impulseStrength;\n                torque.x += torqueStrength;\n            }\n            if (leftward) {\n                impulse.x += impulseStrength;\n                torque.z += torqueStrength;\n            }\n            if (rightward) {\n                impulse.x -= impulseStrength;\n                torque.z -= torqueStrength;\n            }\n            rocketRef.current.applyImpulse(impulse, true);\n            rocketRef.current.applyTorqueImpulse(torque, true);\n            // Update camera position and rotation\n            const bodyPosition = rocketRef.current.translation();\n            const cameraPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            cameraPosition.copy(bodyPosition);\n            cameraPosition.z += 7.25;\n            cameraPosition.y += 15.65;\n            const cameraTarget = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3();\n            cameraTarget.copy(bodyPosition);\n            cameraTarget.y += 0.25;\n            smoothedCameraPosition.lerp(cameraPosition, 5 * delta);\n            smoothedCameraTarget.lerp(cameraTarget, 5 * delta);\n            state.camera.position.copy(cameraPosition);\n            state.camera.lookAt(cameraTarget);\n        // const modelPosition = rocketRef.current.translation();\n        // const modelRotation = rocketRef.current.rotation();\n        // // console.log(\"modelPosition\", modelPosition);\n        // // console.log(\"modelRotation\", modelRotation);\n        // const cameraDistance = 10; // Adjust the distance as needed\n        // const cameraOffset = new THREE.Vector3(10, 10, cameraDistance);\n        // const cameraPosition = cameraOffset\n        //   .applyQuaternion(modelRotation)\n        //   .add(modelPosition);\n        // // cam.current.position.copy(cameraPosition);\n        // cam.current.lookAt(modelPosition);\n        // // console.log(\"cameraDistance\", cameraDistance);\n        // // console.log(\"cameraOffset\", cameraOffset);\n        // console.log(\"cameraPosition\", cameraPosition);\n        // console.log(\"modelPosition\", modelPosition);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        isF;\n    }, [\n        isFlying\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        subscribeKeys((state)=>state.jump, (value)=>{\n            if (value) {\n                jump();\n            } else {\n                setIsFlying(false);\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.Physics, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.OrbitControls, {}, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_8__.PerspectiveCamera, {\n                    position: [\n                        5,\n                        5,\n                        5\n                    ],\n                    ref: cam\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_rapier__WEBPACK_IMPORTED_MODULE_3__.RigidBody, {\n                    colliders: \"hull\",\n                    restitution: 0.2,\n                    mass: 0,\n                    canSleep: false,\n                    friction: 1,\n                    linearDamping: 0.5,\n                    angularDamping: 0.5,\n                    ref: rocketRef,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rocket__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        isFlying: isFlying,\n                        ref: model\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/RocketScene.tsx\",\n            lineNumber: 134,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(RocketScene, \"zEl9ygkSyQg0dI7sDw0UBJyTiyk=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_5__.useKeyboardControls,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.C\n    ];\n});\n_c = RocketScene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RocketScene);\nvar _c;\n$RefreshReg$(_c, \"RocketScene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFPaEM7QUFDYTtBQU9YO0FBQ2lCO0FBQ2Y7QUFFL0IsTUFBTVksY0FBYzs7SUFDbEIsTUFBTUMsWUFBWVgsNkNBQU1BO0lBQ3hCLE1BQU1ZLE1BQU1aLDZDQUFNQTtJQUNsQixNQUFNYSxRQUFRYiw2Q0FBTUE7SUFFcEIsTUFBTSxDQUFDYyx1QkFBdUIsR0FBR2IsK0NBQVFBLENBQ3ZDLElBQU0sSUFBSVEsMENBQWEsQ0FBQyxJQUFJLElBQUk7SUFFbEMsTUFBTSxDQUFDTyxxQkFBcUIsR0FBR2YsK0NBQVFBLENBQUMsSUFBTSxJQUFJUSwwQ0FBYTtJQUUvRCxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXpDLCtCQUErQjtJQUMvQixNQUFNLENBQUNrQixlQUFlQyxpQkFBaUIsR0FBR25CLCtDQUFRQSxDQUFDO1FBQUVvQixHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUNoRSxNQUFNLENBQUNDLGVBQWVDLFFBQVEsR0FBR3BCLHNFQUFtQkE7SUFFcEQsTUFBTXFCLE9BQU87UUFDWFAsWUFBWTtJQUNaLDBDQUEwQztJQUMxQywyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxLQUFLO0lBQ1A7SUFFQVYscURBQVFBLENBQUMsQ0FBQ2tCLE9BQU9DO1FBQ2YsSUFBSWhCLFVBQVVpQixPQUFPLElBQUloQixJQUFJZ0IsT0FBTyxFQUFFO1lBQ3BDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFLEdBQUdSO1lBRW5ELE1BQU1TLFVBQVU7Z0JBQUVaLEdBQUc7Z0JBQUdDLEdBQUc7Z0JBQUdZLEdBQUc7WUFBRTtZQUNuQyxNQUFNQyxTQUFTO2dCQUFFZCxHQUFHO2dCQUFHQyxHQUFHO2dCQUFHWSxHQUFHO1lBQUU7WUFFbEMsTUFBTUUsa0JBQWtCLE1BQU1UO1lBQzlCLE1BQU1VLGlCQUFpQixNQUFNVjtZQUU3QixJQUFJRSxTQUFTO2dCQUNYSSxRQUFRQyxDQUFDLElBQUlFO2dCQUNiRCxPQUFPZCxDQUFDLElBQUlnQjtZQUNkO1lBQ0EsSUFBSVAsVUFBVTtnQkFDWkcsUUFBUUMsQ0FBQyxJQUFJRTtnQkFDYkQsT0FBT2QsQ0FBQyxJQUFJZ0I7WUFDZDtZQUNBLElBQUlOLFVBQVU7Z0JBQ1pFLFFBQVFaLENBQUMsSUFBSWU7Z0JBQ2JELE9BQU9ELENBQUMsSUFBSUc7WUFDZDtZQUNBLElBQUlMLFdBQVc7Z0JBQ2JDLFFBQVFaLENBQUMsSUFBSWU7Z0JBQ2JELE9BQU9ELENBQUMsSUFBSUc7WUFDZDtZQUVBMUIsVUFBVWlCLE9BQU8sQ0FBQ1UsWUFBWSxDQUFDTCxTQUFTO1lBQ3hDdEIsVUFBVWlCLE9BQU8sQ0FBQ1csa0JBQWtCLENBQUNKLFFBQVE7WUFFN0Msc0NBQXNDO1lBQ3RDLE1BQU1LLGVBQWU3QixVQUFVaUIsT0FBTyxDQUFDYSxXQUFXO1lBRWxELE1BQU1DLGlCQUFpQixJQUFJakMsMENBQWE7WUFDeENpQyxlQUFlQyxJQUFJLENBQUNIO1lBQ3BCRSxlQUFlUixDQUFDLElBQUk7WUFDcEJRLGVBQWVwQixDQUFDLElBQUk7WUFFcEIsTUFBTXNCLGVBQWUsSUFBSW5DLDBDQUFhO1lBQ3RDbUMsYUFBYUQsSUFBSSxDQUFDSDtZQUNsQkksYUFBYXRCLENBQUMsSUFBSTtZQUVsQlIsdUJBQXVCK0IsSUFBSSxDQUFDSCxnQkFBZ0IsSUFBSWY7WUFDaERYLHFCQUFxQjZCLElBQUksQ0FBQ0QsY0FBYyxJQUFJakI7WUFFNUNELE1BQU1vQixNQUFNLENBQUNDLFFBQVEsQ0FBQ0osSUFBSSxDQUFDRDtZQUMzQmhCLE1BQU1vQixNQUFNLENBQUNFLE1BQU0sQ0FBQ0o7UUFFcEIseURBQXlEO1FBQ3pELHNEQUFzRDtRQUV0RCxrREFBa0Q7UUFDbEQsa0RBQWtEO1FBRWxELDhEQUE4RDtRQUM5RCxrRUFBa0U7UUFDbEUsc0NBQXNDO1FBQ3RDLG9DQUFvQztRQUNwQyx5QkFBeUI7UUFFekIsZ0RBQWdEO1FBQ2hELHFDQUFxQztRQUVyQyxvREFBb0Q7UUFDcEQsZ0RBQWdEO1FBQ2hELGlEQUFpRDtRQUNqRCwrQ0FBK0M7UUFDakQ7SUFDRjtJQUVBN0MsZ0RBQVNBLENBQUM7UUFDUmtEO0lBQ0YsR0FBRztRQUFDaEM7S0FBUztJQUVibEIsZ0RBQVNBLENBQUM7UUFDUndCLGNBQ0UsQ0FBQ0csUUFBVUEsTUFBTUQsSUFBSSxFQUNyQixDQUFDeUI7WUFDQyxJQUFJQSxPQUFPO2dCQUNUekI7WUFDRixPQUFPO2dCQUNMUCxZQUFZO1lBQ2Q7UUFDRjtJQUVKLEdBQUcsRUFBRTtJQUVMLHFCQUNFO2tCQUNFLDRFQUFDWix3REFBT0E7OzhCQUNOLDhEQUFDSiw0REFBYUE7Ozs7OzhCQUVkLDhEQUFDQyxnRUFBaUJBO29CQUFDNEMsVUFBVTt3QkFBQzt3QkFBRzt3QkFBRztxQkFBRTtvQkFBRUksS0FBS3ZDOzs7Ozs7OEJBRTdDLDhEQUFDTCwwREFBU0E7b0JBQ1I2QyxXQUFXO29CQUNYQyxhQUFhO29CQUNiQyxNQUFNO29CQUNOQyxVQUFVO29CQUNWQyxVQUFVO29CQUNWQyxlQUFlO29CQUNmQyxnQkFBZ0I7b0JBQ2hCUCxLQUFLeEM7OEJBRUwsNEVBQUNOLDBEQUFNQTt3QkFBQ1ksVUFBVUE7d0JBQVVrQyxLQUFLdEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCM0M7R0FsSk1IOztRQWM2Qk4sa0VBQW1CQTtRQVdwREksaURBQVFBOzs7S0F6QkpFO0FBb0pOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUm9ja2V0U2NlbmUudHN4P2FkY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRW52aXJvbm1lbnQsXG4gIE9yYml0Q29udHJvbHMsXG4gIE9ydGhvZ3JhcGhpY0NhbWVyYSxcbiAgUGVyc3BlY3RpdmVDYW1lcmEsXG4gIHVzZUtleWJvYXJkQ29udHJvbHMsXG59IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xuaW1wb3J0IFJvY2tldCBmcm9tIFwiQGNvbXBvbmVudHMvUm9ja2V0XCI7XG5pbXBvcnQge1xuICBDdWJvaWRDb2xsaWRlcixcbiAgUGh5c2ljcyxcbiAgUmFwaWVyUmlnaWRCb2R5LFxuICBSaWdpZEJvZHksXG4gIHF1YXQsXG59IGZyb20gXCJAcmVhY3QtdGhyZWUvcmFwaWVyXCI7XG5pbXBvcnQgeyB1c2VGcmFtZSB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuXG5jb25zdCBSb2NrZXRTY2VuZSA9ICgpID0+IHtcbiAgY29uc3Qgcm9ja2V0UmVmID0gdXNlUmVmPFJhcGllclJpZ2lkQm9keT4oKTtcbiAgY29uc3QgY2FtID0gdXNlUmVmPGFueT4oKTtcbiAgY29uc3QgbW9kZWwgPSB1c2VSZWY8YW55PigpO1xuXG4gIGNvbnN0IFtzbW9vdGhlZENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxuICAgICgpID0+IG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAxMCwgMTApXG4gICk7XG4gIGNvbnN0IFtzbW9vdGhlZENhbWVyYVRhcmdldF0gPSB1c2VTdGF0ZSgoKSA9PiBuZXcgVEhSRUUuVmVjdG9yMygpKTtcblxuICBjb25zdCBbaXNGbHlpbmcsIHNldElzRmx5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBBZGQgc3RhdGUgZm9yIG1vdXNlIHBvc2l0aW9uXG4gIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgY29uc3QgW3N1YnNjcmliZUtleXMsIGdldEtleXNdID0gdXNlS2V5Ym9hcmRDb250cm9scygpO1xuXG4gIGNvbnN0IGp1bXAgPSAoKSA9PiB7XG4gICAgc2V0SXNGbHlpbmcodHJ1ZSk7XG4gICAgLy8gcm9ja2V0UmVmLmN1cnJlbnQ/LmFwcGx5SW1wdWxzZUF0UG9pbnQoXG4gICAgLy8gICB7IHg6IDAsIHk6IDUwLCB6OiAwIH0sXG4gICAgLy8gICB7IHg6IDAsIHk6IC0xLCB6OiAwIH0sXG4gICAgLy8gICB0cnVlXG4gICAgLy8gKTtcbiAgfTtcblxuICB1c2VGcmFtZSgoc3RhdGUsIGRlbHRhKSA9PiB7XG4gICAgaWYgKHJvY2tldFJlZi5jdXJyZW50ICYmIGNhbS5jdXJyZW50KSB7XG4gICAgICBjb25zdCB7IGZvcndhcmQsIGJhY2t3YXJkLCBsZWZ0d2FyZCwgcmlnaHR3YXJkIH0gPSBnZXRLZXlzKCk7XG5cbiAgICAgIGNvbnN0IGltcHVsc2UgPSB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcbiAgICAgIGNvbnN0IHRvcnF1ZSA9IHsgeDogMCwgeTogMCwgejogMCB9O1xuXG4gICAgICBjb25zdCBpbXB1bHNlU3RyZW5ndGggPSAxMDAgKiBkZWx0YTtcbiAgICAgIGNvbnN0IHRvcnF1ZVN0cmVuZ3RoID0gMTAwICogZGVsdGE7XG5cbiAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueiAtPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS54IC09IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGJhY2t3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueiArPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS54ICs9IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKGxlZnR3YXJkKSB7XG4gICAgICAgIGltcHVsc2UueCArPSBpbXB1bHNlU3RyZW5ndGg7XG4gICAgICAgIHRvcnF1ZS56ICs9IHRvcnF1ZVN0cmVuZ3RoO1xuICAgICAgfVxuICAgICAgaWYgKHJpZ2h0d2FyZCkge1xuICAgICAgICBpbXB1bHNlLnggLT0gaW1wdWxzZVN0cmVuZ3RoO1xuICAgICAgICB0b3JxdWUueiAtPSB0b3JxdWVTdHJlbmd0aDtcbiAgICAgIH1cblxuICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlJbXB1bHNlKGltcHVsc2UsIHRydWUpO1xuICAgICAgcm9ja2V0UmVmLmN1cnJlbnQuYXBwbHlUb3JxdWVJbXB1bHNlKHRvcnF1ZSwgdHJ1ZSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBjYW1lcmEgcG9zaXRpb24gYW5kIHJvdGF0aW9uXG4gICAgICBjb25zdCBib2R5UG9zaXRpb24gPSByb2NrZXRSZWYuY3VycmVudC50cmFuc2xhdGlvbigpO1xuXG4gICAgICBjb25zdCBjYW1lcmFQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG4gICAgICBjYW1lcmFQb3NpdGlvbi5jb3B5KGJvZHlQb3NpdGlvbik7XG4gICAgICBjYW1lcmFQb3NpdGlvbi56ICs9IDcuMjU7XG4gICAgICBjYW1lcmFQb3NpdGlvbi55ICs9IDE1LjY1O1xuXG4gICAgICBjb25zdCBjYW1lcmFUYXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuICAgICAgY2FtZXJhVGFyZ2V0LmNvcHkoYm9keVBvc2l0aW9uKTtcbiAgICAgIGNhbWVyYVRhcmdldC55ICs9IDAuMjU7XG5cbiAgICAgIHNtb290aGVkQ2FtZXJhUG9zaXRpb24ubGVycChjYW1lcmFQb3NpdGlvbiwgNSAqIGRlbHRhKTtcbiAgICAgIHNtb290aGVkQ2FtZXJhVGFyZ2V0LmxlcnAoY2FtZXJhVGFyZ2V0LCA1ICogZGVsdGEpO1xuXG4gICAgICBzdGF0ZS5jYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3NpdGlvbik7XG4gICAgICBzdGF0ZS5jYW1lcmEubG9va0F0KGNhbWVyYVRhcmdldCk7XG5cbiAgICAgIC8vIGNvbnN0IG1vZGVsUG9zaXRpb24gPSByb2NrZXRSZWYuY3VycmVudC50cmFuc2xhdGlvbigpO1xuICAgICAgLy8gY29uc3QgbW9kZWxSb3RhdGlvbiA9IHJvY2tldFJlZi5jdXJyZW50LnJvdGF0aW9uKCk7XG5cbiAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwibW9kZWxQb3NpdGlvblwiLCBtb2RlbFBvc2l0aW9uKTtcbiAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwibW9kZWxSb3RhdGlvblwiLCBtb2RlbFJvdGF0aW9uKTtcblxuICAgICAgLy8gY29uc3QgY2FtZXJhRGlzdGFuY2UgPSAxMDsgLy8gQWRqdXN0IHRoZSBkaXN0YW5jZSBhcyBuZWVkZWRcbiAgICAgIC8vIGNvbnN0IGNhbWVyYU9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAxMCwgY2FtZXJhRGlzdGFuY2UpO1xuICAgICAgLy8gY29uc3QgY2FtZXJhUG9zaXRpb24gPSBjYW1lcmFPZmZzZXRcbiAgICAgIC8vICAgLmFwcGx5UXVhdGVybmlvbihtb2RlbFJvdGF0aW9uKVxuICAgICAgLy8gICAuYWRkKG1vZGVsUG9zaXRpb24pO1xuXG4gICAgICAvLyAvLyBjYW0uY3VycmVudC5wb3NpdGlvbi5jb3B5KGNhbWVyYVBvc2l0aW9uKTtcbiAgICAgIC8vIGNhbS5jdXJyZW50Lmxvb2tBdChtb2RlbFBvc2l0aW9uKTtcblxuICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJjYW1lcmFEaXN0YW5jZVwiLCBjYW1lcmFEaXN0YW5jZSk7XG4gICAgICAvLyAvLyBjb25zb2xlLmxvZyhcImNhbWVyYU9mZnNldFwiLCBjYW1lcmFPZmZzZXQpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjYW1lcmFQb3NpdGlvblwiLCBjYW1lcmFQb3NpdGlvbik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1vZGVsUG9zaXRpb25cIiwgbW9kZWxQb3NpdGlvbik7XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzRlxuICB9LCBbaXNGbHlpbmddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN1YnNjcmliZUtleXMoXG4gICAgICAoc3RhdGUpID0+IHN0YXRlLmp1bXAsXG4gICAgICAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAganVtcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldElzRmx5aW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGh5c2ljcz5cbiAgICAgICAgPE9yYml0Q29udHJvbHMgLz5cblxuICAgICAgICA8UGVyc3BlY3RpdmVDYW1lcmEgcG9zaXRpb249e1s1LCA1LCA1XX0gcmVmPXtjYW19IC8+XG5cbiAgICAgICAgPFJpZ2lkQm9keVxuICAgICAgICAgIGNvbGxpZGVycz17XCJodWxsXCJ9XG4gICAgICAgICAgcmVzdGl0dXRpb249ezAuMn1cbiAgICAgICAgICBtYXNzPXswfVxuICAgICAgICAgIGNhblNsZWVwPXtmYWxzZX1cbiAgICAgICAgICBmcmljdGlvbj17MX1cbiAgICAgICAgICBsaW5lYXJEYW1waW5nPXswLjV9XG4gICAgICAgICAgYW5ndWxhckRhbXBpbmc9ezAuNX1cbiAgICAgICAgICByZWY9e3JvY2tldFJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxSb2NrZXQgaXNGbHlpbmc9e2lzRmx5aW5nfSByZWY9e21vZGVsfSAvPlxuICAgICAgICA8L1JpZ2lkQm9keT5cblxuICAgICAgICB7LyogPEN1Ym9pZENvbGxpZGVyIHBvc2l0aW9uPXtbMCwgLTIsIDBdfSBhcmdzPXtbMTAwLCAwLjUsIDEwMF19PlxuICAgICAgICAgIDxtZXNoPlxuICAgICAgICAgICAgPGJveEdlb21ldHJ5IGFyZ3M9e1s0MCwgMSwgNDBdfSAvPlxuICAgICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgIDwvbWVzaD5cbiAgICAgICAgPC9DdWJvaWRDb2xsaWRlcj4gKi99XG5cbiAgICAgICAgey8qIDxtZXNoIHBvc2l0aW9uPXtbMCwgMCwgMF19IHJlZj17ZG90fT5cbiAgICAgICAgICA8c3BoZXJlR2VvbWV0cnkgYXJncz17WzEsIDE2LCAxNl19IC8+XG4gICAgICAgICAgPG1lc2hCYXNpY01hdGVyaWFsIGNvbG9yPVwicmVkXCIgLz5cbiAgICAgICAgPC9tZXNoPiAqL31cbiAgICAgIDwvUGh5c2ljcz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvY2tldFNjZW5lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJPcmJpdENvbnRyb2xzIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ1c2VLZXlib2FyZENvbnRyb2xzIiwiUm9ja2V0IiwiUGh5c2ljcyIsIlJpZ2lkQm9keSIsInVzZUZyYW1lIiwiVEhSRUUiLCJSb2NrZXRTY2VuZSIsInJvY2tldFJlZiIsImNhbSIsIm1vZGVsIiwic21vb3RoZWRDYW1lcmFQb3NpdGlvbiIsIlZlY3RvcjMiLCJzbW9vdGhlZENhbWVyYVRhcmdldCIsImlzRmx5aW5nIiwic2V0SXNGbHlpbmciLCJtb3VzZVBvc2l0aW9uIiwic2V0TW91c2VQb3NpdGlvbiIsIngiLCJ5Iiwic3Vic2NyaWJlS2V5cyIsImdldEtleXMiLCJqdW1wIiwic3RhdGUiLCJkZWx0YSIsImN1cnJlbnQiLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJsZWZ0d2FyZCIsInJpZ2h0d2FyZCIsImltcHVsc2UiLCJ6IiwidG9ycXVlIiwiaW1wdWxzZVN0cmVuZ3RoIiwidG9ycXVlU3RyZW5ndGgiLCJhcHBseUltcHVsc2UiLCJhcHBseVRvcnF1ZUltcHVsc2UiLCJib2R5UG9zaXRpb24iLCJ0cmFuc2xhdGlvbiIsImNhbWVyYVBvc2l0aW9uIiwiY29weSIsImNhbWVyYVRhcmdldCIsImxlcnAiLCJjYW1lcmEiLCJwb3NpdGlvbiIsImxvb2tBdCIsImlzRiIsInZhbHVlIiwicmVmIiwiY29sbGlkZXJzIiwicmVzdGl0dXRpb24iLCJtYXNzIiwiY2FuU2xlZXAiLCJmcmljdGlvbiIsImxpbmVhckRhbXBpbmciLCJhbmd1bGFyRGFtcGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RocketScene.tsx\n"));

/***/ })

});