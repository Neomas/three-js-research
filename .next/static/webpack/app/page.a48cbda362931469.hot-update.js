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

/***/ "(app-pages-browser)/./components/Rocket.tsx":
/*!*******************************!*\
  !*** ./components/Rocket.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Model; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/useGLTF.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Model(props) {\n    _s();\n    const { nodes, materials } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF)(\"models/rocket.glb\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        ...props,\n        dispose: null,\n        tabIndex: 0,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                // @ts-ignore\n                castShadow: true,\n                receiveShadow: true,\n                geometry: nodes.Cylinder_1.geometry,\n                material: materials.DARK\n            }, void 0, false, {\n                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/Rocket.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                // @ts-ignore\n                castShadow: true,\n                receiveShadow: true,\n                geometry: nodes.Cylinder_2.geometry,\n                material: materials.RED\n            }, void 0, false, {\n                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/Rocket.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                // @ts-ignore\n                castShadow: true,\n                receiveShadow: true,\n                geometry: nodes.Cylinder_3.geometry,\n                material: materials.WHITE\n            }, void 0, false, {\n                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/Rocket.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                position: [\n                    0,\n                    0,\n                    0\n                ],\n                ref: dot,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sphereGeometry\", {\n                        args: [\n                            1,\n                            16,\n                            16\n                        ]\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/Rocket.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshBasicMaterial\", {\n                        color: \"red\"\n                    }, void 0, false, {\n                        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/Rocket.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/Rocket.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/robinvanvoorden/Websites/three-js-research/components/Rocket.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(Model, \"3EbVibAGuOW6XeBFAk0EenvHzHI=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF\n    ];\n});\n_c = Model;\nvar _c;\n$RefreshReg$(_c, \"Model\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUm9ja2V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNDO0FBQ007QUFFN0IsU0FBU0UsTUFBTUMsS0FBSzs7SUFDakMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHSiwwREFBT0EsQ0FBQztJQUVyQyxxQkFDRSw4REFBQ0s7UUFBTyxHQUFHSCxLQUFLO1FBQUVJLFNBQVM7UUFBTUMsVUFBVTs7MEJBQ3pDLDhEQUFDQztnQkFDQyxhQUFhO2dCQUNiQyxVQUFVO2dCQUNWQyxhQUFhO2dCQUNiQyxVQUFVUixNQUFNUyxVQUFVLENBQUNELFFBQVE7Z0JBQ25DRSxVQUFVVCxVQUFVVSxJQUFJOzs7Ozs7MEJBRTFCLDhEQUFDTjtnQkFDQyxhQUFhO2dCQUNiQyxVQUFVO2dCQUNWQyxhQUFhO2dCQUNiQyxVQUFVUixNQUFNWSxVQUFVLENBQUNKLFFBQVE7Z0JBQ25DRSxVQUFVVCxVQUFVWSxHQUFHOzs7Ozs7MEJBRXpCLDhEQUFDUjtnQkFDQyxhQUFhO2dCQUNiQyxVQUFVO2dCQUNWQyxhQUFhO2dCQUNiQyxVQUFVUixNQUFNYyxVQUFVLENBQUNOLFFBQVE7Z0JBQ25DRSxVQUFVVCxVQUFVYyxLQUFLOzs7Ozs7MEJBRzNCLDhEQUFDVjtnQkFBS1csVUFBVTtvQkFBQztvQkFBRztvQkFBRztpQkFBRTtnQkFBRUMsS0FBS0M7O2tDQUM5Qiw4REFBQ0M7d0JBQWVDLE1BQU07NEJBQUM7NEJBQUc7NEJBQUk7eUJBQUc7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFrQkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWpDO0dBakN3QnhCOztRQUNPRCxzREFBT0E7OztLQURkQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JvY2tldC50c3g/YzkwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHTFRGIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGVsKHByb3BzKSB7XG4gIGNvbnN0IHsgbm9kZXMsIG1hdGVyaWFscyB9ID0gdXNlR0xURihcIm1vZGVscy9yb2NrZXQuZ2xiXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGdyb3VwIHsuLi5wcm9wc30gZGlzcG9zZT17bnVsbH0gdGFiSW5kZXg9ezB9PlxuICAgICAgPG1lc2hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjYXN0U2hhZG93XG4gICAgICAgIHJlY2VpdmVTaGFkb3dcbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLkN5bGluZGVyXzEuZ2VvbWV0cnl9XG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuREFSS31cbiAgICAgIC8+XG4gICAgICA8bWVzaFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNhc3RTaGFkb3dcbiAgICAgICAgcmVjZWl2ZVNoYWRvd1xuICAgICAgICBnZW9tZXRyeT17bm9kZXMuQ3lsaW5kZXJfMi5nZW9tZXRyeX1cbiAgICAgICAgbWF0ZXJpYWw9e21hdGVyaWFscy5SRUR9XG4gICAgICAvPlxuICAgICAgPG1lc2hcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjYXN0U2hhZG93XG4gICAgICAgIHJlY2VpdmVTaGFkb3dcbiAgICAgICAgZ2VvbWV0cnk9e25vZGVzLkN5bGluZGVyXzMuZ2VvbWV0cnl9XG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbHMuV0hJVEV9XG4gICAgICAvPlxuXG4gICAgICA8bWVzaCBwb3NpdGlvbj17WzAsIDAsIDBdfSByZWY9e2RvdH0+XG4gICAgICAgIDxzcGhlcmVHZW9tZXRyeSBhcmdzPXtbMSwgMTYsIDE2XX0gLz5cbiAgICAgICAgPG1lc2hCYXNpY01hdGVyaWFsIGNvbG9yPVwicmVkXCIgLz5cbiAgICAgIDwvbWVzaD5cbiAgICA8L2dyb3VwPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlR0xURiIsIk1vZGVsIiwicHJvcHMiLCJub2RlcyIsIm1hdGVyaWFscyIsImdyb3VwIiwiZGlzcG9zZSIsInRhYkluZGV4IiwibWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiZ2VvbWV0cnkiLCJDeWxpbmRlcl8xIiwibWF0ZXJpYWwiLCJEQVJLIiwiQ3lsaW5kZXJfMiIsIlJFRCIsIkN5bGluZGVyXzMiLCJXSElURSIsInBvc2l0aW9uIiwicmVmIiwiZG90Iiwic3BoZXJlR2VvbWV0cnkiLCJhcmdzIiwibWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Rocket.tsx\n"));

/***/ })

});