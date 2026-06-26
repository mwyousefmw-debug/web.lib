// runtime can't be in strict mode because a global variable is assign and maybe created.
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["instrumentation"],{

/***/ "(instrument)/./instrumentation.ts":
/*!****************************!*\
  !*** ./instrumentation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\nfunction register() {\n    // Node.js 22+ exposes localStorage as a global Web Storage API.\n    // When the dev server starts without a valid --localstorage-file path,\n    // localStorage is a broken stub where getItem/setItem are not functions.\n    // This crashes next-themes during SSR: it checks typeof localStorage !== 'undefined'\n    // (finds it defined in Node.js 22+), then calls localStorage.getItem() → TypeError.\n    //\n    // Fix: Replace the broken stub with a no-op implementation so next-themes\n    // gracefully falls back to the default theme on the server.\n    if (typeof globalThis.localStorage !== \"undefined\" && typeof globalThis.localStorage.getItem !== \"function\") {\n        globalThis.localStorage = {\n            getItem: ()=>null,\n            setItem: ()=>undefined,\n            removeItem: ()=>undefined,\n            clear: ()=>undefined,\n            key: ()=>null,\n            length: 0\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vaW5zdHJ1bWVudGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQTtJQUNkLGdFQUFnRTtJQUNoRSx1RUFBdUU7SUFDdkUseUVBQXlFO0lBQ3pFLHFGQUFxRjtJQUNyRixvRkFBb0Y7SUFDcEYsRUFBRTtJQUNGLDBFQUEwRTtJQUMxRSw0REFBNEQ7SUFDNUQsSUFDRSxPQUFPQyxXQUFXQyxZQUFZLEtBQUssZUFDbkMsT0FBTyxXQUFZQSxZQUFZLENBQWFDLE9BQU8sS0FBSyxZQUN4RDtRQUNDRixXQUF1Q0MsWUFBWSxHQUFHO1lBQ3JEQyxTQUFTLElBQU07WUFDZkMsU0FBUyxJQUFNQztZQUNmQyxZQUFZLElBQU1EO1lBQ2xCRSxPQUFPLElBQU1GO1lBQ2JHLEtBQUssSUFBTTtZQUNYQyxRQUFRO1FBQ1Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFx3ZWJsaWJcXHdlYmxpYlxcaW5zdHJ1bWVudGF0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgLy8gTm9kZS5qcyAyMisgZXhwb3NlcyBsb2NhbFN0b3JhZ2UgYXMgYSBnbG9iYWwgV2ViIFN0b3JhZ2UgQVBJLlxuICAvLyBXaGVuIHRoZSBkZXYgc2VydmVyIHN0YXJ0cyB3aXRob3V0IGEgdmFsaWQgLS1sb2NhbHN0b3JhZ2UtZmlsZSBwYXRoLFxuICAvLyBsb2NhbFN0b3JhZ2UgaXMgYSBicm9rZW4gc3R1YiB3aGVyZSBnZXRJdGVtL3NldEl0ZW0gYXJlIG5vdCBmdW5jdGlvbnMuXG4gIC8vIFRoaXMgY3Jhc2hlcyBuZXh0LXRoZW1lcyBkdXJpbmcgU1NSOiBpdCBjaGVja3MgdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCdcbiAgLy8gKGZpbmRzIGl0IGRlZmluZWQgaW4gTm9kZS5qcyAyMispLCB0aGVuIGNhbGxzIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCkg4oaSIFR5cGVFcnJvci5cbiAgLy9cbiAgLy8gRml4OiBSZXBsYWNlIHRoZSBicm9rZW4gc3R1YiB3aXRoIGEgbm8tb3AgaW1wbGVtZW50YXRpb24gc28gbmV4dC10aGVtZXNcbiAgLy8gZ3JhY2VmdWxseSBmYWxscyBiYWNrIHRvIHRoZSBkZWZhdWx0IHRoZW1lIG9uIHRoZSBzZXJ2ZXIuXG4gIGlmIChcbiAgICB0eXBlb2YgZ2xvYmFsVGhpcy5sb2NhbFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICB0eXBlb2YgKGdsb2JhbFRoaXMubG9jYWxTdG9yYWdlIGFzIFN0b3JhZ2UpLmdldEl0ZW0gIT09IFwiZnVuY3Rpb25cIlxuICApIHtcbiAgICAoZ2xvYmFsVGhpcyBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikubG9jYWxTdG9yYWdlID0ge1xuICAgICAgZ2V0SXRlbTogKCkgPT4gbnVsbCxcbiAgICAgIHNldEl0ZW06ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIHJlbW92ZUl0ZW06ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIGNsZWFyOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICBrZXk6ICgpID0+IG51bGwsXG4gICAgICBsZW5ndGg6IDAsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlZ2lzdGVyIiwiZ2xvYmFsVGhpcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwidW5kZWZpbmVkIiwicmVtb3ZlSXRlbSIsImNsZWFyIiwia2V5IiwibGVuZ3RoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./instrumentation.ts\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("(instrument)/./instrumentation.ts"));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_instrumentation = __webpack_exports__;
/******/ }
]);