/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = __webpack_require__.p + "js/" + chunkId + "." + {"0":"086423c5c1a838ecad7f","1":"e505ec82835fe8563883","2":"3124762014826e80e783"}[chunkId] + ".js";
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "tjUo");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+9gt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "+eav":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("zWQs");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "/1nD":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("g2rQ");
var TAG = __webpack_require__("0Sp3")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "/6KZ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("41F1");
var core = __webpack_require__("TaGV");
var ctx = __webpack_require__("8Xl/");
var hide = __webpack_require__("PPkd");
var has = __webpack_require__("qA3Z");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "/Lgp":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("Qqke");
var enumBugKeys = __webpack_require__("miGZ");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "/Qrv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/Vl9":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "/Yqc":
/***/ (function(module, exports) {

var warn = "offline-plugin: runtime was installed without OfflinePlugin being added to the webpack.config.js. See https://goo.gl/2Ca7NO for details.";

if (window.console) {
  if (console.info) {
    console.info(warn);
  } else if (console.log) {
    console.log(warn);
  }
}

exports.install = function() {};
exports.applyUpdate = function() {};
exports.update = function() {};

/***/ }),

/***/ "/fOQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
};

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;


/***/ }),

/***/ "/w7j":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "0Sp3":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("67sl")('wks');
var uid = __webpack_require__("ct/D");
var Symbol = __webpack_require__("41F1").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "19JL":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"1179.9","height":"167.8","viewBox":"281 79.2 1179.9 167.8"}},[_c('path',{attrs:{"d":"M280.9 142.4h18.3v69.7h30.3v-96h-48.6zM1179.2 116.1h-18.3v26.3h18.3v69.7h30.5v-69.7h18.3v-26.3h-18.3zM424.9 116.1h-6.1v96H475.4v-26.3h-26.3v-11h16.4v-21.4h-16.4v-11h26.3v-26.3h-26.3zM627.8 116.1H596.1l-13 48.8-.7-2.6-9.9-46.2H551.4L541 165.3h-.2l-5.4-22.9h4.3l5.6-26.3h-48.1l1.3 2.6 30.9 93.4H553.5l7.8-41.8.2.8 9.1 41h23.9l27.2-80v80H678.3v-26.3H652v-11h16.4v-21.4H652v-11h26.3v-26.3H652zM691.2 116.1h-6v96h56.5v-26.3h-26.1v-11h16.2v-21.4h-16.2v-11h26.1v-26.3h-26.1zM868 116.1h-30.4v96h56.7v-26.3H868zM381.5 152.8H367v-10.4h7.1v-26.3h-37.7v96H367v-36.5h14.5v36.5h30.4v-96h-30.4zM797.6 116.1l-18.5 31.1v-31.1h-30.5v96h30.5v-25.4l18.1 25.4h34.3l-31.7-50.7 35.4-45.3z"}}),_c('path',{attrs:{"d":"M917 139.6l-10.8-23.5h-32.8l27.9 49.8v46.2h30.4v-44.4l29.1-51.6h-33zM1124.2 124.9v47.5c0 7.5-1.5 11.2-8.2 11.2-6.5 0-8.4-3.9-8.4-11.2v-56.3h-29.8V174.5c0 21.1 17.3 37.6 37.6 37.6 20.5 0 38.6-16.8 38.6-37.6V116.1h-29.8v8.8zM1442.6 116.1H1394v26.3h18.2v69.7h30.4v-69.7h18.3v-26.3zM1357.3 124.9v47.5c0 7.5-1.5 11.2-8.2 11.2-6.5 0-8.4-3.9-8.4-11.2v-56.3h-29.8V174.5c0 21.1 17.3 37.6 37.6 37.6 20.5 0 38.6-16.8 38.6-37.6V116.1h-29.8v8.8zM1265.2 116.1h-30.4v96h30.4v-32.8c13.2.4 41 .9 41-30.7 0-12.4-4.4-32.5-41-32.5zm0 42.9v-17.9c4.8-.9 12.3 1.9 12.3 8.9-.2 10.3-12.3 9-12.3 9zM1025.4 114.1c-27 0-47.5 22.5-47.5 49s20.5 49 47.5 49 47.5-22.5 47.5-49c.2-26.5-20.4-49-47.5-49zm0 68.2c-9.7 0-17.7-7.8-17.7-19.2s8-19.2 17.7-19.2 17.7 7.8 17.7 19.2c.2 11.3-7.8 19.2-17.7 19.2z"}})])}}};

/***/ }),

/***/ "1Nlo":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"id":"Layer_1","xmlns":"http://www.w3.org/2000/svg","width":"48","height":"48","viewBox":"-935 517 48 48"}},[_c('path',{staticClass:"st0",attrs:{"d":"M-891.3 537.7h-29.6l8.2-13.2-5.6-3.5-12.4 20 12.4 20 5.6-3.5-8.2-13.2h29.6v-6.6zm-31.6 3.3l.2-.3v.5l-.2-.2z"}})])}}};

/***/ }),

/***/ "3/fM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "41F1":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "4bm5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5BpW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PPkd");


/***/ }),

/***/ "5Rlk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_CURRENT_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPDATE_ARTICLES; });
/* unused harmony export UPDATE_AVAILABLE_CATEGORIES */
/* unused harmony export SET_STYLE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_LOADED; });
var UPDATE_CURRENT_ARTICLE = 'UPDATE_CURRENT_ARTICLE';
var UPDATE_ARTICLES = 'UPDATE_ARTICLES';
var UPDATE_AVAILABLE_CATEGORIES = 'UPDATE_AVAILABLE_CATEGORIES';
var SET_STYLE = 'SET_STYLE';
var SET_LOADED = 'SET_LOADED';

/***/ }),

/***/ "5gKE":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("41F1").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "5tTa":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "5yLx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var offline_plugin_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/Yqc");
/* harmony import */ var offline_plugin_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(offline_plugin_runtime__WEBPACK_IMPORTED_MODULE_0__);


offline_plugin_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.install({
  // When an update is ready, tell ServiceWorker to take control immediately:
  onUpdateReady: function onUpdateReady() {
    console.log('update ready');
    offline_plugin_runtime__WEBPACK_IMPORTED_MODULE_0___default.a.applyUpdate();
  },


  // Reload to get the new version:
  onUpdated: function onUpdated() {
    console.log('updated');
    location.reload();
  }
});

/***/ }),

/***/ "67sl":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("41F1");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "6oba":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("iKhv");
__webpack_require__("WwSA");
__webpack_require__("k/kI");
__webpack_require__("oiJE");
__webpack_require__("P8hI");
__webpack_require__("L7yD");
module.exports = __webpack_require__("TaGV").Promise;


/***/ }),

/***/ "6wgB":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("g2rQ");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "8Xl/":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("HD3J");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "8YOU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8eZN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9WXh":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"id":"Layer_1","xmlns":"http://www.w3.org/2000/svg","width":"167.9","height":"65.9","viewBox":"0 0 167.9 65.9"}},[_c('path',{staticClass:"bg-1",attrs:{"d":"M163.6 0H0v65.9h157.3L167.9 0z"}}),_c('path',{staticClass:"fg-1",attrs:{"d":"M25.1 19.8c.9.8 1.3 1.9 1.3 3.5 0 2.3-.8 4-2.5 4.9-1.7.9-4.1 1.4-7.1 1.4H9.5V8.1h6.4c3.1 0 5.5.4 7.1 1.3s2.5 2.3 2.5 4.3c0 1.3-.4 2.3-1.1 3-.8.8-1.7 1.3-2.8 1.6 1.4.2 2.6.8 3.5 1.5zm-9.9-7.7v4.5h1.5c1 0 1.8-.2 2.2-.6.5-.4.7-1 .7-1.8s-.3-1.3-.8-1.6c-.5-.3-1.3-.5-2.5-.5h-1.1zM19.5 25c.6-.4.9-1 .9-2s-.3-1.6-.9-2.1c-.6-.4-1.4-.6-2.5-.6h-1.9v5.3h1.5c1.4 0 2.3-.2 2.9-.6zM36.2 21.7h-1.6v7.9h-5.7V8.1h7.5c3 0 5.3.5 6.8 1.6s2.2 2.8 2.2 5.1c0 1.4-.3 2.5-.9 3.4-.6.9-1.6 1.7-3 2.4l5.4 9h-6.4l-4.3-7.9zm-1.6-3.9h1.9c2 0 3-1 3-3 0-.9-.3-1.6-.8-2-.5-.4-1.4-.7-2.5-.7h-1.6v5.7zM61.9 8.1l-.6 4.1H54v4.6h6.4v3.9H54v4.9h7.8v4.1H48.2V8.1h13.7zM75.9 29.7l-1-4.4h-5.7l-1 4.4h-6l6.4-21.5h6.9L82 29.7h-6.1zm-5.8-8.5H74l-2-9-1.9 9zM88.9 8.1v21.5h-5.7V8.1h5.7zm12.6 0L95 17.7l7 11.9h-6.6L89 18.1 95.4 8h6.1zM109.1 8.1v21.5h-5.7V8.1h5.7zM129.6 29.7h-7.2L117 13.4l.1.7c.2 1.4.4 2.8.5 4 .1 1.3.2 2.7.2 4.3v7.3h-5.1V8.1h7.1l5.6 16.3c-.2-1.5-.4-2.9-.6-4.2-.1-1.2-.2-2.7-.2-4.3V8.1h5.1v21.6zM150.3 10.3l-2.8 2.9c-.8-.6-1.5-1-2.1-1.2-.6-.3-1.3-.4-2.2-.4-1.5 0-2.8.6-3.6 1.8-.9 1.2-1.3 3-1.3 5.5 0 1.8.1 3.2.4 4.3.3 1 .7 1.8 1.3 2.2.6.5 1.3.7 2.3.7.9 0 1.8-.2 2.5-.6v-4.4h-2.4l-.6-3.9h8.6v10.7c-1.1.7-2.4 1.3-3.8 1.7-1.4.4-2.8.6-4.2.6-6.7 0-10.1-3.8-10.1-11.3 0-2.4.5-4.4 1.4-6.1s2.2-3 3.8-3.9c1.6-.9 3.4-1.3 5.4-1.3 2.9 0 5.3.9 7.4 2.7zM26.5 59.7h-7.2l-5.5-16.2.1.7c.2 1.4.4 2.8.5 4 .1 1.3.2 2.7.2 4.3v7.3H9.5V38.1h7.1l5.6 16.3c-.2-1.5-.4-2.9-.6-4.2-.1-1.2-.2-2.7-.2-4.3v-7.8h5.1v21.6zM43.7 38.1l-.6 4.1h-7.3v4.6h6.4v3.9h-6.4v4.9h7.8v4.1H30V38.1h13.7zM71 38.1l-3.3 21.5h-7.5l-2.3-16-2.5 16h-7.3l-3.3-21.5h5.7l1.8 17.3L55 38.1h6l2.4 17.3 2.2-17.3H71zM84.4 38.3c1.2.5 2.4 1.2 3.4 2.1l-2.6 3c-1.5-1.2-3-1.8-4.7-1.8-.8 0-1.5.2-1.9.5-.4.3-.7.8-.7 1.3 0 .4.1.8.3 1 .2.3.6.5 1.1.8.5.2 1.4.6 2.5.9 2.2.7 3.8 1.6 4.9 2.7s1.5 2.5 1.5 4.4c0 1.4-.4 2.6-1.1 3.6-.7 1-1.7 1.9-3.1 2.4-1.3.6-2.9.9-4.7.9-3.4 0-6.2-1-8.4-3.1l2.8-3.1c1.7 1.4 3.5 2.1 5.4 2.1 1 0 1.7-.2 2.3-.6.5-.4.8-1 .8-1.7 0-.5-.1-.9-.3-1.2-.2-.3-.6-.6-1.1-.9-.5-.3-1.3-.5-2.3-.9-2.4-.8-4.2-1.7-5.1-2.8-1-1.1-1.5-2.4-1.5-4.1 0-1.3.3-2.4 1-3.4s1.7-1.7 2.9-2.2c1.2-.5 2.6-.8 4.1-.8 1.8.2 3.3.4 4.5.9z"}})])}}};

/***/ }),

/***/ "A0WW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ADe/":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("fGh/");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "AFnJ":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("CAwg");
module.exports = __webpack_require__("TaGV").Object.assign;


/***/ }),

/***/ "AZnH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "B2pa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BRJE":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__("udmq"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Slideout = __webpack_require__(1);

/* harmony default export */ __webpack_exports__["a"] = {
  data: function data() {
    return {
      slideout: null
    };
  },

  props: {
    panel: { default: '#panel' },
    menu: { default: '#menu' },
    padding: { default: 256 },
    tolerance: { default: 70 },
    touch: { default: true },
    easing: { default: 'ease' },
    side: { default: 'left' },
    duration: { default: 300 },
    toggleSelectors: {
      default: function _default() {
        return [];
      }
    }
  },
  name: 'Slideout',
  mounted: function mounted() {
    var _this = this;

    this.slideout = new Slideout({
      'panel': document.querySelector(this.panel),
      'menu': document.querySelector(this.menu),
      'padding': this.padding,
      'tolerance': this.tolerance,
      'touch': this.touch,
      'easing': this.easing,
      'side': this.side,
      'duration': this.duration
    });
    this.toggleSelectors.forEach(function (selector) {
      document.querySelector(selector).addEventListener('click', function () {
        _this.slideout.toggle();
      });
    });
    var events = ['beforeclose', 'close', 'beforeopen', 'open', 'translatestart', 'translate', 'translateend'];
    events.forEach(function (event) {
      _this.slideout.on(event, function (data) {
        _this.$emit('on-' + event, data);
      });
      _this.slideout.once(event, function (data) {
        _this.$emit('once-' + event, data);
      });
    });
  },
  render: function render(h) {
    return h('div', this.$slots.default);
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_slideout_js__ = __webpack_require__(0);


var Slideout = __WEBPACK_IMPORTED_MODULE_0__components_slideout_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["default"] = Slideout;

/***/ })
/******/ ]);
});
//# sourceMappingURL=vue-slideout.js.map

/***/ }),

/***/ "CAwg":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("/6KZ");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("tbIA") });


/***/ }),

/***/ "Clx3":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("0Sp3")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "Cs9m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("o3C2");
var step = __webpack_require__("TTxG");
var Iterators = __webpack_require__("N9zW");
var toIObject = __webpack_require__("T/1i");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("gMWQ")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "F+l/":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("dCrc");
var $keys = __webpack_require__("/Lgp");

__webpack_require__("qNvu")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "G+Zn":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("ADe/");
var dPs = __webpack_require__("n6P+");
var enumBugKeys = __webpack_require__("miGZ");
var IE_PROTO = __webpack_require__("Q5TA")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("m/Uw")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("5gKE").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "GCLZ":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("qA3Z");
var toObject = __webpack_require__("dCrc");
var IE_PROTO = __webpack_require__("Q5TA")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "GhKc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/mixins/api.js
var api = __webpack_require__("qNwz");

// EXTERNAL MODULE: ./src/assets/svg/Breaking_News_design2.svg
var Breaking_News_design2 = __webpack_require__("9WXh");
var Breaking_News_design2_default = /*#__PURE__*/__webpack_require__.n(Breaking_News_design2);

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Ticker.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Ticker = ({
    mixins: [api["a" /* default */]],
    components: {
        BreakingNewsLogo: Breaking_News_design2_default.a
    },
    methods: {
        tickerString: function tickerString(val) {
            var string = this.api.articles.highlights;
            return string;
        }
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4a3e3680","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Ticker.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"ticker"}},[_c('BreakingNewsLogo',{staticClass:"breakingnewslogo",staticStyle:{"position":"absolute","z-index":"90","height":"60px","left":"0","width":"auto"}}),_vm._v(" "),_c('span',{staticClass:"marquee"},[_c('span',{staticClass:"marquee-text"},_vm._l((_vm.tickerString()),function(item){return _c('span',{staticClass:"marqueeitem"},[_c('router-link',{attrs:{"to":{ name: 'article', params: {  category: 'highlights', slug: item.slug }}}},[_c('span',[_vm._v(_vm._s(item.title.toUpperCase()))])])],1)}))])],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("Xm6T");

// CONCATENATED MODULE: ./src/components/Ticker.vue
function injectStyle (context) {
  __webpack_require__("/Qrv")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  Ticker,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Ticker = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "GqsI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Kz1y");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./src/mixins/api.js
var api = __webpack_require__("qNwz");

// EXTERNAL MODULE: ../node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("lOrp");

// EXTERNAL MODULE: ./src/store/mutation-types.js
var mutation_types = __webpack_require__("n7AZ");

// EXTERNAL MODULE: ./src/api/mutation-types.js
var api_mutation_types = __webpack_require__("5Rlk");

// EXTERNAL MODULE: ./src/api/action-types.js
var action_types = __webpack_require__("XiVm");

// EXTERNAL MODULE: ./src/components/PageViews.vue + 2 modules
var PageViews = __webpack_require__("O7/s");

// EXTERNAL MODULE: ../node_modules/vue-infinite-loading/dist/vue-infinite-loading.js
var vue_infinite_loading = __webpack_require__("pE35");
var vue_infinite_loading_default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading);

// EXTERNAL MODULE: ../node_modules/vue-infinite-scroll/vue-infinite-scroll.js
var vue_infinite_scroll = __webpack_require__("pgwR");

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/ListArticles.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var ListArticles = ({

    mixins: [api["a" /* default */]],
    components: {
        PageViews: PageViews["a" /* default */],
        InfiniteLoading: vue_infinite_loading_default.a
    },
    props: {
        categoryToRender: String,
        imageStyle: String,
        showText: Boolean,
        showAuthor: Boolean,
        showShares: Boolean,
        mode: String,
        isInfinite: false
    },
    data: function data() {
        return {
            timestamp: String,
            articleList: [],
            articlePage: 1,
            stopLoading: false
        };
    },
    computed: extends_default()({}, Object(vuex_esm["b" /* mapState */])({
        categoryCount: function categoryCount(state) {
            return state.api.categoryCount;
        }
    })),
    mounted: function mounted() {
        if (this.api.articles.hasOwnProperty(this.categoryToRender)) {
            this.articleList = this.api.articles[this.categoryToRender];
        }
    },

    watch: {
        categoryToRender: function categoryToRender() {
            if (this.api.articles.hasOwnProperty(this.categoryToRender)) {
                this.articleList = this.api.articles[this.categoryToRender];
                this.api.currentCategoryPage = 1;
                this.stopLoading = false;
            }
        },

        categoryCount: {
            handler: function handler(val) {
                if (this.api.articles.hasOwnProperty(this.categoryToRender)) {
                    this.articleList = this.api.articles[this.categoryToRender];
                    this.articlePage = 1;
                    var ctx = this;
                    setTimeout(function () {
                        ctx.$store.commit(api_mutation_types["a" /* SET_LOADED */], {
                            status: true
                        });
                    }, 2000);
                }
            },
            deep: true
        }
    },
    methods: {
        changeArticle: function changeArticle(slug) {
            this.api.currentArticle = null;
            this.$store.dispatch(action_types["b" /* GET_ARTICLE_BY_SLUG */], {
                context: this,
                slug: slug
            });
        },
        getOrientation: function getOrientation(image) {
            var orientation = void 0;
            var img = new Image();
            img.onload = function () {
                if (img.naturalWidth > img.naturalHeight) {
                    orientation = 'landscape';
                } else if (img.naturalWidth < img.naturalHeight) {
                    orientation = 'portrait';
                } else {
                    orientation = 'even';
                }
                return orientation;
            };
            img.src = image;
        },
        changePage: function changePage($state) {
            var _this = this;

            this.api.currentCategoryPage += 1;
            var context = this;
            this.$store.dispatch(action_types["d" /* GET_CATEGORY_PAGE */], {
                category: this.categoryToRender,
                page: this.api.currentCategoryPage,
                context: this
            }).then(function () {
                if (_this.api.articles[_this.categoryToRender].length > 1) {
                    _this.articleList = _this.articleList.concat(_this.api.articles[_this.categoryToRender]);
                    $state.loaded();
                } else {
                    _this.stopLoading = true;
                }
            });
        }
    }

});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-68b980da","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/ListArticles.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.api.articles && _vm.api.loaded && _vm.articleList.length >= 1)?_c('div',{class:_vm.mode + 'article-list'},[_vm._l((_vm.articleList),function(article){return _c('div',{class:_vm.mode + 'article'},[_c('div',{class:_vm.mode + 'article-text'},[_c('router-link',{class:'article-link',attrs:{"to":{ name: 'article', params: {  category: _vm.categoryToRender, slug: article.slug }},"transition":"fade"},on:{"click":function($event){_vm.changeArticle(article.slug)}}},[_c('div',{class:_vm.mode + _vm.imageStyle + '-container',on:{"click":function($event){_vm.changeArticle(article.slug)}}},[_c('span',{class:_vm.mode + _vm.imageStyle + '-image-wrapper'},[((_vm.imageStyle === 'no-image') == false)?_c('progressive-img',{class:_vm.imageStyle + ' ' + _vm.getOrientation(article.image_url),attrs:{"src":article.image_url}}):_vm._e()],1),_vm._v(" "),_c('span',{class:_vm.mode + 'text'},[_c('span',[_c('h2',{class:_vm.mode + 'title'},[_vm._v(_vm._s(article.title))])]),_vm._v(" "),(_vm.showText)?_c('span',[_c('h3',{class:_vm.mode + 'description'},[_vm._v(_vm._s(article.description.substring(0, 200))+"...")])]):_vm._e(),_vm._v(" "),(_vm.showAuthor)?_c('span',{class:_vm.mode + 'author'},[_vm._v("By "+_vm._s(article.author.name))]):_vm._e(),_vm._v(" "),(_vm.showAuthor && _vm.api.loaded)?_c('span',{staticClass:"list-timestamp"},[_c('timeago',{attrs:{"since":article.date}})],1):_vm._e(),_vm._v(" "),(_vm.showShares)?_c('page-views',{attrs:{"views":article.views}}):_vm._e()],1)])])],1)])}),_vm._v(" "),(_vm.$route.path.endsWith('/articles/' + _vm.categoryToRender) && !_vm.stopLoading)?_c('infinite-loading',{on:{"infinite":function($event){_vm.changePage($event)}}}):_vm._e()],2):_vm._e()}
var staticRenderFns = []

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("Xm6T");

// CONCATENATED MODULE: ./src/components/ListArticles.vue
function injectStyle (context) {
  __webpack_require__("+9gt")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  ListArticles,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_ListArticles = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "HD3J":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "HbTz":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("fGh/");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "IH2s":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("/6KZ");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("lBnu"), 'Object', { defineProperty: __webpack_require__("eOWL").f });


/***/ }),

/***/ "IUx0":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("PPkd");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "Kdq7":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("zWQs");
var defined = __webpack_require__("Xj5l");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "Kz1y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("PSh9");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "L7yD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("/6KZ");
var newPromiseCapability = __webpack_require__("WJTZ");
var perform = __webpack_require__("5tTa");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "LuVv":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "Mrp6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/mixins/themeswitcher.js
var themeswitcher = __webpack_require__("TYgx");

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Titles.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Titles = ({
    mixins: [themeswitcher["a" /* default */]],
    props: {
        category: String
    },
    methods: {
        title: function title() {
            return this.$store.state.TitleList[this.category] || "No Title";
        }
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ff65a922","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Titles.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.themeSwitcher.currentStyle == 1)?_c('div',[(_vm.title() !== 'No Title')?_c(_vm.title(),{tag:"component",staticClass:"topper-headline-text"}):_vm._e()],1):_vm._e(),_vm._v(" "),(_vm.themeSwitcher.currentStyle == 2)?_c('div',{staticClass:"topper-headline-text"},[_c('span',{staticClass:"category-header"},[_vm._v(_vm._s(_vm.category.toUpperCase()))]),_vm._v(" "),_c('hr',{staticClass:"topper-headline-underline"})]):_vm._e(),_vm._v(" "),(_vm.themeSwitcher.currentStyle == 3)?_c('div',{staticClass:"topper-headline-text"},[_c('span',{staticClass:"category-header"},[_vm._v(_vm._s(_vm.category.toUpperCase()))])]):_vm._e()])}
var staticRenderFns = []

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("Xm6T");

// CONCATENATED MODULE: ./src/components/Titles.vue
function injectStyle (context) {
  __webpack_require__("nZlA")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  Titles,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Titles = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "N9zW":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "Ng5M":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("N9zW");
var ITERATOR = __webpack_require__("0Sp3")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "O7/s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/assets/svg/twitter_icon.svg
var twitter_icon = __webpack_require__("VNhs");
var twitter_icon_default = /*#__PURE__*/__webpack_require__.n(twitter_icon);

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/PageViews.vue
//
//
//
//
//
//
//


/* harmony default export */ var PageViews = ({
    props: {
        views: 0
    },
    components: {
        TwitterIcon: twitter_icon_default.a
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-798b7af1","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/PageViews.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-views-container"},[_c('span',{staticClass:"page-views"},[_c('span',{staticClass:"page-views-number"},[_vm._v(_vm._s(_vm.views))]),_c('span',{staticClass:"page-views-text"},[_vm._v(" PAGE VIEWS")])])])}
var staticRenderFns = []

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("Xm6T");

// CONCATENATED MODULE: ./src/components/PageViews.vue
function injectStyle (context) {
  __webpack_require__("aApx")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  PageViews,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_PageViews = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "OBCi":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("6oba"), __esModule: true };

/***/ }),

/***/ "P8hI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("/6KZ");
var core = __webpack_require__("TaGV");
var global = __webpack_require__("41F1");
var speciesConstructor = __webpack_require__("PK7I");
var promiseResolve = __webpack_require__("zafj");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "PK7I":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("ADe/");
var aFunction = __webpack_require__("HD3J");
var SPECIES = __webpack_require__("0Sp3")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "PPkd":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("eOWL");
var createDesc = __webpack_require__("zJT+");
module.exports = __webpack_require__("lBnu") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "PSh9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("AFnJ"), __esModule: true };

/***/ }),

/***/ "Q5TA":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("67sl")('keys');
var uid = __webpack_require__("ct/D");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "QpWp":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var r, n; }}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="../dist/",t(t.s=0)}([function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o,a={},i={},c=[],s=[],u=!1;a.install=function(e,t){s=[].concat(r(t&&t.prevent?t.prevent:[])),e.directive("shortkey",{bind:function(e,t,n){var r="string"==typeof t.value?JSON.parse(t.value.replace(/\'/gi,'"')):t.value,o=!0===t.modifiers.push,a=!0===t.modifiers.avoid,i=!0===t.modifiers.focus,s=!0===t.modifiers.once;a?c.push(e):f({b:r,pushButton:o,once:s,focus:i,el:n.elm})},unbind:function(e,t){var n=[];if((n="string"==typeof t.value?JSON.parse(t.value.replace(/\'/gi,'"')):t.value)instanceof Array){var r=n.join("");i[r].el===e&&delete i[r]}else for(var o in n){var a=n[o].join("");i[a].el===e&&delete i[a]}c=c.filter(function(t){return!t===e})}})},a.decodeKey=function(e){var t="";return("Shift"===e.key||e.shiftKey)&&(t+="shift"),("Control"===e.key||e.ctrlKey)&&(t+="ctrl"),("Meta"===e.key||e.metaKey)&&(t+="meta"),("Alt"===e.key||e.altKey)&&(t+="alt"),"ArrowUp"===e.key&&(t+="arrowup"),"ArrowLeft"===e.key&&(t+="arrowleft"),"ArrowRight"===e.key&&(t+="arrowright"),"ArrowDown"===e.key&&(t+="arrowdown"),"AltGraph"===e.key&&(t+="altgraph"),"Escape"===e.key&&(t+="esc"),"Enter"===e.key&&(t+="enter"),"Tab"===e.key&&(t+="tab")," "===e.key&&(t+="space"),"PageUp"===e.key&&(t+="pageup"),"PageDown"===e.key&&(t+="pagedown"),"Home"===e.key&&(t+="home"),"End"===e.key&&(t+="end"),"Delete"===e.key&&(t+="del"),"Insert"===e.key&&(t+="insert"),"NumLock"===e.key&&(t+="numlock"),"CapsLock"===e.key&&(t+="capslock"),"Pause"===e.key&&(t+="pause"),"ContextMenu"===e.key&&(t+="contextmenu"),"ScrollLock"===e.key&&(t+="scrolllock"),"BrowserHome"===e.key&&(t+="browserhome"),"MediaSelect"===e.key&&(t+="mediaselect"),(e.key&&" "!==e.key&&1===e.key.length||/F\d{1,2}/g.test(e.key))&&(t+=e.key.toLowerCase()),t},a.keyDown=function(e){if(!i[e].oc&&!i[e].ps||i[e].ps&&!u){var t=document.createEvent("HTMLEvents");t.initEvent("shortkey",!0,!0),i[e].key&&(t.srcKey=i[e].key),i[e].el.dispatchEvent(t)}},a.keyUp=function(e){var t=document.createEvent("HTMLEvents");t.initEvent("shortkey",!0,!0),i[e].key&&(t.srcKey=i[e].key),i[e].el.dispatchEvent(t)},function(){document.addEventListener("keydown",function(e){var t=a.decodeKey(e);l(e)&&(e.preventDefault(),e.stopPropagation(),i[t].fn?(a.keyDown(t),u=!0):u||(i[t].el.focus(),u=!0))},!0),document.addEventListener("keyup",function(e){var t=a.decodeKey(e);l(e)&&(e.preventDefault(),e.stopPropagation(),(i[t].oc||i[t].ps)&&a.keyUp(t)),u=!1},!0)}();var f=function(e){var t=e.b,n=e.pushButton,r=e.once,o=e.focus,a=e.el;if(t instanceof Array){var c=t.join("");i[c]={ps:n,oc:r,fn:!o,el:a}}else for(var s in t){var u=t[s].join("");i[u]={ps:n,oc:r,fn:!o,el:a,key:s}}},l=function(e){var t=a.decodeKey(e),n=c.find(function(e){return e===document.activeElement}),r=y(),o=r.avoidedTypes,s=r.avoidedClasses,u=o.find(function(e){return e===document.activeElement.tagName.toLowerCase()}),f=s.find(function(e){return e==="."+document.activeElement.className.toLowerCase()});return!n&&i[t]&&!u&&!f},y=function(){var e=[],t=[];return s.forEach(function(n){var r=n.indexOf(".");0===r?t.push(n):r>0?(e.push(n.split(".")[0]),t.push("."+n.split(".")[1])):e.push(n)}),{avoidedTypes:e,avoidedClasses:t}};void 0!==e&&e.exports?e.exports=a:void 0!==(o=function(){return a}.call(t,n,t,e))&&(e.exports=o)}])});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Qqke":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("qA3Z");
var toIObject = __webpack_require__("T/1i");
var arrayIndexOf = __webpack_require__("zeFm")(false);
var IE_PROTO = __webpack_require__("Q5TA")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "SHdJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.__esModule = true;
/**
 * Creates a new instance of Emitter.
 * @class
 * @returns {Object} Returns a new instance of Emitter.
 * @example
 * // Creates a new instance of Emitter.
 * var Emitter = require('emitter');
 *
 * var emitter = new Emitter();
 */

var Emitter = (function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  /**
   * Adds a listener to the collection for the specified event.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The event name.
   * @param {Function} listener - A listener function to add.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Add an event listener to "foo" event.
   * emitter.on('foo', listener);
   */

  Emitter.prototype.on = function on(event, listener) {
    // Use the current collection or create it.
    this._eventCollection = this._eventCollection || {};

    // Use the current collection of an event or create it.
    this._eventCollection[event] = this._eventCollection[event] || [];

    // Appends the listener into the collection of the given event
    this._eventCollection[event].push(listener);

    return this;
  };

  /**
   * Adds a listener to the collection for the specified event that will be called only once.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The event name.
   * @param {Function} listener - A listener function to add.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Will add an event handler to "foo" event once.
   * emitter.once('foo', listener);
   */

  Emitter.prototype.once = function once(event, listener) {
    var self = this;

    function fn() {
      self.off(event, fn);
      listener.apply(this, arguments);
    }

    fn.listener = listener;

    this.on(event, fn);

    return this;
  };

  /**
   * Removes a listener from the collection for the specified event.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The event name.
   * @param {Function} listener - A listener function to remove.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Remove a given listener.
   * emitter.off('foo', listener);
   */

  Emitter.prototype.off = function off(event, listener) {

    var listeners = undefined;

    // Defines listeners value.
    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
      return this;
    }

    listeners.forEach(function (fn, i) {
      if (fn === listener || fn.listener === listener) {
        // Removes the given listener.
        listeners.splice(i, 1);
      }
    });

    // Removes an empty event collection.
    if (listeners.length === 0) {
      delete this._eventCollection[event];
    }

    return this;
  };

  /**
   * Execute each item in the listener collection in order with the specified data.
   * @memberof! Emitter.prototype
   * @function
   * @param {String} event - The name of the event you want to emit.
   * @param {...Object} data - Data to pass to the listeners.
   * @returns {Object} Returns an instance of Emitter.
   * @example
   * // Emits the "foo" event with 'param1' and 'param2' as arguments.
   * emitter.emit('foo', 'param1', 'param2');
   */

  Emitter.prototype.emit = function emit(event) {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var listeners = undefined;

    // Defines listeners value.
    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
      return this;
    }

    // Clone listeners
    listeners = listeners.slice(0);

    listeners.forEach(function (fn) {
      return fn.apply(_this, args);
    });

    return this;
  };

  return Emitter;
})();

/**
 * Exports Emitter
 */
exports["default"] = Emitter;
module.exports = exports["default"];

/***/ }),

/***/ "T/1i":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("6wgB");
var defined = __webpack_require__("Xj5l");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "TTxG":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "TYgx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Kz1y");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lOrp");
/* harmony import */ var _store_mutation_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("n7AZ");




/* harmony default export */ __webpack_exports__["a"] = ({
  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[/* mapState */ "b"])({
    themeSwitcher: function themeSwitcher(state) {
      return state.themeSwitcher;
    }
  }))
});

/***/ }),

/***/ "TaGV":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "TcPG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("yO+b");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "UA8a":
/***/ (function(module, exports) {

// export const ACTION_TYPE = 'ACTION_TYPE'

/***/ }),

/***/ "UTwT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("lBnu") && !__webpack_require__("/Vl9")(function () {
  return Object.defineProperty(__webpack_require__("m/Uw")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "VDKz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VJcA":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("/1nD");
var ITERATOR = __webpack_require__("0Sp3")('iterator');
var Iterators = __webpack_require__("N9zW");
module.exports = __webpack_require__("TaGV").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "VNhs":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"version":"1","id":"Layer_1","xmlns":"http://www.w3.org/2000/svg","width":"1047.9","height":"1047.9","viewBox":"0 0 1047.9 1047.9"}},[_c('circle',{staticClass:"twitter-circle",attrs:{"cx":"523.9","cy":"523.9","r":"523.9"}}),_c('path',{staticClass:"twitter-icon-svg",attrs:{"d":"M776.3 378.7c-17.8 7.9-37 13.3-57.1 15.7 20.5-12.3 36.3-31.8 43.7-55-19.3 11.4-40.5 19.7-63.2 24.1-18.1-19.4-43.9-31.4-72.6-31.4-54.9 0-99.4 44.5-99.4 99.4 0 7.8.9 15.4 2.6 22.7-82.6-4.2-155.9-43.7-204.9-103.9-8.6 14.7-13.4 31.7-13.4 50 0 34.5 17.6 64.9 44.2 82.7-16.3-.5-31.6-5-45-12.5v1.2c0 48.2 34.3 88.4 79.7 97.5-8.3 2.2-17.1 3.5-26.2 3.5-6.4 0-12.6-.6-18.7-1.8 12.7 39.5 49.4 68.3 92.9 69.1-34 26.7-76.9 42.5-123.5 42.5-8 0-15.9-.5-23.7-1.4 44 28.3 96.3 44.7 152.4 44.7C627 725.8 727 574.3 727 442.9l-.3-12.9c19.4-13.9 36.3-31.4 49.6-51.3z"}})])}}};

/***/ }),

/***/ "WJTZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("HD3J");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "WUaq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Wk1c":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"id":"Layer_1","xmlns":"http://www.w3.org/2000/svg","width":"1179.9","height":"167.8","viewBox":"281 79.2 1179.9 167.8"}},[_c('path',{staticClass:"st0",attrs:{"d":"M1203.6 246.2h29.3V102.4h17.7V79h-63.5v23.4h16.5zM298.1 247.1h29.3V103.2h17.2V79.8h-63.7v23.4h17.2zM1397.2 79v23.4h16.5v143.8h29.4V102.4h17.7V79zM1285.7 177.6h8.7c13.9 0 25.2-11.3 25.2-25.2v-48.2c0-13.9-11.3-25.2-25.2-25.2h-38v167.2h29.3v-68.6zm3.1-72.4h1.9V151.3h-5v-46.1h3.1zM426.1 79.9v167h62.6v-29.3h-33.3v-39.5h26.1v-29.4h-26.1v-39.5h33.3V79.9h-33.3zM682.1 246.7h45.6v-29.3h-33.2v-39.5h26.1v-29.4h-26.1V109h33.2V79.7h-62.6v167h17zM750.2 246.7h45.7v-29.3h-33.3v-39.5h26.1v-29.4h-26.1V109h33.3V79.7H733.3v167h16.9zM904 246.7h45.6v-29.3h-33.2V79.7H887v167h17zM956.9 246.3h29.7v-66.1l29.3-100.4h-29.3l-15 55-14.7-55h-29.4l29.4 100zM830.2 179.4l20.1 67.1h29.3l-1.3-4.6v.1l-25-84 26-78.3H850l-19.8 62.5V79.7h-29.4v167h29.4zM1070.9 246.3h14.3c13.9 0 25.2-11.3 25.2-25.3V104.3c0-14-11.3-25.3-25.2-25.3h-14.4c-13.9 0-25.2 11.3-25.2 25.3V221c.1 14 11.4 25.3 25.3 25.3zm3.7-141h7v115.8H1074.6V105.3zM1116.7 221.1c0 13.9 11.3 25.2 25.2 25.2h14.2c13.9 0 25.2-11.3 25.2-25.2V79h-28.9v142.2h-6.9V79h-28.9v142.1zM1351.3 246.3h14.2c13.9 0 25.2-11.3 25.2-25.2V79h-28.9v142.1h-6.9V79H1326v142c.1 14 11.4 25.3 25.3 25.3zM660.1 79.7L645.3 247H604c-3.8-25.7-7.1-54.9-10-87.7-1.3 14.1-4.4 43.3-9.2 87.7h-41.1L528.8 79.7H561l3.5 58.4 3.4 56.4c1.2-29.2 4.3-67.5 9.2-114.8h34.4c.5 4.9 1.7 23.3 3.6 55.2l3.7 63.6c1.9-40.5 5-80.1 9.2-118.8h32.1zM389.4 79.9v68.9h-11V79.9H349v167h29.4v-68.8h11v68.8h29.3v-167z"}})])}}};

/***/ }),

/***/ "WwSA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("Kdq7")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("gMWQ")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "XiVm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REST_CALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ARTICLE_BY_SLUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_CATEGORY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_PAGE_TITLE; });
/* unused harmony export GET_SHARED_COUNT */
/* unused harmony export CHANGE_CATEGORY_PAGE */
var SET_UP = 'SET_UP';
var REST_CALL = 'REST_CALL';
var GET_ARTICLE_BY_SLUG = 'GET_ARTICLE_BY_SLUG';
var GET_CATEGORIES = 'GET_CATEGORIES';
var GET_CATEGORY_PAGE = 'GET_CATEGORY_PAGE';
var CHANGE_PAGE_TITLE = 'CHANGE_PAGE_TITLE';
var GET_SHARED_COUNT = "GET_SHARED_COUNT";
var CHANGE_CATEGORY_PAGE = 'CHANGE_CATEGORY_PAGE';

/***/ }),

/***/ "Xj5l":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "Xm6T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "Yo81":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"1179.9","height":"167.8","viewBox":"281 79.2 1179.9 167.8"}},[_c('path',{attrs:{"d":"M937.2 191.6V83.9l-21 12.8v98.8c0 8.2 5 15 11.3 16.1l20.2-13.9c-4.4 3-10.5 2.8-10.5-6.1M1307.9 117.7l-16.6 11.5c-1.6-6-5.8-10.6-10.9-11.5l-20.7 14.2c4.6-3 10.8-2.8 10.8 6.3v101.9L1292 227v-28l16.9 9.9 21.4-20.8V140.1c0-19.4-22.3-22.4-22.4-22.4m1 71.9l-16.9-9.8v-45.5l4.7-3.3c5.5 0 12.1 7.2 12.1 13v45.6zM1250 170.1V90.9l-21 12.8V155z"}}),_c('path',{attrs:{"d":"M1250 186.4v-40.6l-21-15.1v55.7z"}}),_c('path',{attrs:{"d":"M1250 197v-10.6h-21v23.3zM1229 103.7l-9.9 6.1 14.4.6z"}}),_c('path',{attrs:{"d":"M1219.1 109.8s9.9.6 9.9 7.5 4.5-4.6 4.5-4.6l-1.2-9.4-13.2 6.5zM1250 90.9s-.5 16.1 9.7 21.4h-13.4l3.7-21.4zM1450.5 170.1V90.9l-21 12.8V155z"}}),_c('path',{attrs:{"d":"M1450.5 186.4v-40.6l-21-15.1v55.7z"}}),_c('path',{attrs:{"d":"M1450.5 197v-10.6h-21v23.3zM1429.5 103.7l-9.9 6.1 14.4.6z"}}),_c('path',{attrs:{"d":"M1419.6 109.8s9.9.6 9.9 7.5 4.5-4.6 4.5-4.6l-1.2-9.4-13.2 6.5zM1450.5 90.9s-.5 17.2 10.4 22.9h-14.3l3.9-22.9zM493 185.7c0 5.4 7.1 13.6 18.6 13.6-7.1 4.5-18 1.4-18 1.4L488 193l5-7.3z"}}),_c('path',{attrs:{"d":"M502.7 197.5c5.8 2.4 16.7-1.7 24.7-7.9v.7l-17.8 12.2-6.9-5zM509 119.4l-37.3 21.9v53.5L493 209v-75.9l21.5 13 19.2-9z"}}),_c('path',{attrs:{"d":"M511.7 199.3l-5.8 1-11.3-3.5.5-4.3-10.6-3.8v6.5c0 3.6 1 6.9 2.6 9.7l9.7 6.5 27.1-18.9c-1.7 1.1-10.5 6.9-12.2 6.8"}}),_c('path',{attrs:{"d":"M527.4 190.3v-3s-11.6 11-20.6 11c-9 0 2.3 3.3 2.3 3.3l18.3-11.3zM525.4 139.4L488 161.3h4.1l41.6-24.2M719 185.9c0 5.4 7.1 13.6 18.6 13.6-7.1 4.5-18 1.4-18 1.4l-5.7-7.8 5.1-7.2z"}}),_c('path',{attrs:{"d":"M728.6 197.6c5.8 2.4 16.7-1.7 24.7-7.9v.7l-17.8 12.2-6.9-5zM735 119.6l-37.4 21.8v53.5l21.4 14.2v-75.9l21.5 13 19.1-9z"}}),_c('path',{attrs:{"d":"M737.6 199.5l-5.8 1-11.3-3.5.5-4.3-10.6-3.8v6.5c0 3.6 1 6.9 2.6 9.7l9.7 6.5 27.1-18.9c-1.6 1-10.5 6.8-12.2 6.8"}}),_c('path',{attrs:{"d":"M753.4 190.4v-3s-11.6 11-20.6 11c-9 0 2.3 3.3 2.3 3.3l18.3-11.3zM751.4 139.6L714 161.4h4.1l41.5-24.2M787.3 185.9c0 5.4 7.1 13.6 18.6 13.6-7.1 4.5-18 1.4-18 1.4l-5.7-7.8 5.1-7.2z"}}),_c('path',{attrs:{"d":"M796.9 197.6c5.8 2.4 16.7-1.7 24.7-7.9v.7l-17.8 12.2-6.9-5zM803.3 119.6l-37.4 21.8v53.5l21.4 14.2v-75.9l21.5 13 19.1-9z"}}),_c('path',{attrs:{"d":"M805.9 199.5l-5.8 1-11.3-3.5.5-4.3-10.6-3.8v6.5c0 3.6 1 6.9 2.6 9.7l9.7 6.5 27.1-18.9c-1.6 1-10.5 6.8-12.2 6.8"}}),_c('path',{attrs:{"d":"M821.7 190.4v-3s-11.6 11-20.6 11c-9 0 2.3 3.3 2.3 3.3l18.3-11.3zM819.7 139.6l-37.4 21.8h4.1l41.5-24.2M1212.3 189.7v-10.2h-21v14.1c0 8.2 5 15 11.3 16.1l20.2-13.9c-4.4 3-10.5 2.8-10.5-6.1M1191.3 138.3v10.2h21v-14.1c0-8.2-5-15-11.3-16.1l-20.2 13.9c4.4-3 10.5-2.8 10.5 6.1M1150.8 138.3v10.2h21v-14.1c0-8.2-5-15-11.3-16.1l-20.2 13.9c4.4-3 10.5-2.8 10.5 6.1"}}),_c('path',{attrs:{"d":"M1191.3 141.6v43.6l21 12.1v-55.7zM1171.7 189.7v-10.2h-21v14.1c0 8.2 5 15 11.3 16.1l20.2-13.9c-4.4 3-10.5 2.8-10.5-6.1"}}),_c('path',{attrs:{"d":"M1150.7 141.6v43.6l21 12.1v-55.7zM1162.583 209.414l-1.202-1.961 30.093-18.451 1.202 1.96zM1409 189.7v-10.2h-21v14.1c0 8.2 5 15 11.3 16.1l20.2-13.9c-4.4 3-10.5 2.8-10.5-6.1M1388 138.3v10.2h21v-14.1c0-8.2-5-15-11.3-16.1l-20.2 13.9c4.4-3 10.5-2.8 10.5 6.1M1347.5 138.3v10.2h21v-14.1c0-8.2-5-15-11.3-16.1l-20.2 13.9c4.4-3 10.5-2.8 10.5 6.1"}}),_c('path',{attrs:{"d":"M1388 141.6v43.6l21 12.1v-55.7zM1368.4 189.7v-10.2h-21v14.1c0 8.2 5 15 11.3 16.1l20.2-13.9c-4.4 3-10.5 2.8-10.5-6.1"}}),_c('path',{attrs:{"d":"M1347.4 141.6v43.6l21 12.1v-55.7zM1359.303 209.427l-1.202-1.96 30.093-18.452 1.202 1.96zM459.4 191.4v-10.2h-21v14.1c0 8.2 5 15 11.3 16.1l20.2-13.9c-4.3 3-10.5 2.8-10.5-6.1M398.2 104.3v10.2h21v-14.1c0-8.2-5-15-11.3-16.1l-20.2 13.9c4.4-3 10.5-2.8 10.5 6.1M418.9 191.7v-10.2h-21v14.1c0 8.2 5 15 11.3 16.1l20.2-13.9c-4.4 3-10.5 2.8-10.5-6.1"}}),_c('path',{attrs:{"d":"M397.9 99.4h21.3v41.9h-21.3z"}}),_c('path',{attrs:{"d":"M419.2 133.2l19.3 11.7V187.5h21v-50.4l-24.4-17.5-37.2 21.7v45.9h22l-.7-.5zM301.3 105.4h10.3V84.2h-14.3c-8.3 0-15.2 5.1-16.3 11.5l14.1 20.5c-3-4.6-2.8-10.8 6.2-10.8"}}),_c('path',{attrs:{"d":"M310.1 84.2h79.4l-8.4 21.2h-71z"}}),_c('path',{attrs:{"d":"M359.1 141.4V100l-21.4-15.4v56.8z"}}),_c('path',{attrs:{"d":"M359.1 152.2v-10.8h-21.4v23.9z"}}),_c('path',{attrs:{"d":"M337.7 165c.2 6.5-7.6 15.4-16.5 20.8.8.3.7.3.7.3l18.1-12.6-2.3-8.5z"}}),_c('path',{attrs:{"d":"M322 186.1l-2.8-1.1s14.6-7.1 17.9-15.7c3.2-8.6 2.4 3.4 2.4 3.4L322 186.1z"}}),_c('path',{attrs:{"d":"M338.8 149.4l-1 .3v15.6c.2 2.8-.2 5.9-1.4 9 6.9-5.1 7.8-16.7 7.8-16.7l-5.4-8.2z"}}),_c('path',{attrs:{"d":"M350.6 152.8c-2.1-2.5-4.9-4.6-8.3-5.9l-4.5-1.7v11.4l2.4.6-.8 12.1-3 5.2c-.6 1.6-9.3 8-10.9 9.2l27.8-19.1-2.7-11.8z"}}),_c('path',{attrs:{"d":"M332.2 178.9l26.9-18.6v-9.2l-11.2 4.5-8.7 16zM293.1 144.1c0-29.4 31.4-46.9 31.4-46.9v9.2s-8.9 9.3-8.9 37.7c-.1 28.4-22.5 0-22.5 0"}}),_c('path',{attrs:{"d":"M368.3 191.8c-50.2 0-52.8-39.8-52.8-47.7h-22.4c0 23.5 13.6 62 62.6 67.7l12.7-8.1 18.7-11.9h-18.8zM1005.2 120.7l-20 13.8c4.4-2.9 10.5-2.8 10.5 6.1v4.5h-1l.7.5v53L976.3 187v-50c0-8.1-5-14.9-11.2-16l-20 13.8c4.4-2.9 10.5-2.8 10.5 6.1v3.9h-.1v49.8l24.2 17.4 15.7-9.2v30.4l-19.1-11.6-21 7.6 24.1 16.8 36.6-22.3.5-.2v-86.9c-.1-8-5.1-14.8-11.3-15.9M870.6 198.2L850.5 212c-6.3-1.1-11.3-7.9-11.3-16.1v-93.3c0-8.9-6.3-9.1-10.5-6.1l20.1-13.9c6.3 1.1 11.3 7.9 11.3 16.1V192c0 8.9 6.1 9.1 10.5 6.2m39.9 0L890.4 212c-2.4-.4-4.6-1.7-6.3-3.5-7.9-7.8-12.7-29.9-21.8-30.1-.7 0-1.5.4-2.2.7l13.5-9.4c3.9-2.6 6.3-7 6.3-11.8 0-11.6-13.9-18.8-19.8-15.3l22.4-15.5c6.7 2 16.3 8.7 16.3 18.8 0 5.2-2.4 10-6.7 12.9l-10.3 7c5 5 10.5 19.8 15.9 27.3 3.6 5.8 7.1 8.9 12.8 5.1M573.9 101.1v3.9h-.1v13.6h20.9V97.2c0-8.1-5-14.9-11.2-16l-20 13.8c4.4-2.9 10.4-2.8 10.4 6.1zM664.1 100.9v3.9h-.1v13.6h20.9V97.1c0-8.1-5-14.9-11.2-16l-20 13.8c4.4-3 10.4-2.8 10.4 6zM619 101.1v3.9h-.1v13.6h20.9V97.2c0-8.1-5-14.9-11.2-16l-20 13.8c4.4-2.9 10.4-2.8 10.4 6.1zM639.8 161.1h-20.9v33.1l24.2 17.4 15.8-9.2v-4.3l-19.1-11.6z"}}),_c('path',{attrs:{"d":"M573.8 112.1h20.9v58.6h-20.9zM618.9 112.1h20.9v58.6h-20.9zM664 111.9h20.9v58.6H664zM1134.9 99.8l-28.5-20.4-46.5 27.2v85.7l28 19.6 47-28.6V99.8zm-51.4 76.4V98.9l27.8 16.9V193l-27.8-16.8zM598 211.6l-31.7-22.7 9.3-9.5z"}}),_c('path',{attrs:{"d":"M594.7 186.5l-3.1-1.9 3.1-3.2v-20.3h-20.9v33.1l24.2 17.4 15.8-9.2v-4.3z"}}),_c('path',{attrs:{"d":"M598 211.6l27.1-15.4-2.8-7.5-18.6 11zM642.7 211.6l27.1-15.4-3.4-6.6-18.1 10.1z"}}),_c('path',{attrs:{"d":"M643.1 211.6l41.8-23.8v-24.5l-20.9 7.2v20.4"}})])}}};

/***/ }),

/***/ "YrAR":
/***/ (function(module, exports) {

exports.sync = function (store, router, options) {
  var moduleName = (options || {}).moduleName || 'route'

  store.registerModule(moduleName, {
    namespaced: true,
    state: cloneRoute(router.currentRoute),
    mutations: {
      'ROUTE_CHANGED': function ROUTE_CHANGED (state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from)
      }
    }
  })

  var isTimeTraveling = false
  var currentPath

  // sync router on store change
  var storeUnwatch = store.watch(
    function (state) { return state[moduleName]; },
    function (route) {
      var fullPath = route.fullPath;
      if (fullPath === currentPath) {
        return
      }
      if (currentPath != null) {
        isTimeTraveling = true
        router.push(route)
      }
      currentPath = fullPath
    },
    { sync: true }
  )

  // sync store on router navigation
  var afterEachUnHook = router.afterEach(function (to, from) {
    if (isTimeTraveling) {
      isTimeTraveling = false
      return
    }
    currentPath = to.fullPath
    store.commit(moduleName + '/ROUTE_CHANGED', { to: to, from: from })
  })

  return function unsync () {
    // On unsync, remove router hook
    if (afterEachUnHook != null) {
      afterEachUnHook()
    }

    // On unsync, remove store watch
    if (storeUnwatch != null) {
      storeUnwatch()
    }

    // On unsync, unregister Module with store
    store.unregisterModule(moduleName)
  }
}

function cloneRoute (to, from) {
  var clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  if (from) {
    clone.from = cloneRoute(from)
  }
  return Object.freeze(clone)
}



/***/ }),

/***/ "ZavS":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-progressive-image v2.4.4
 * (c) 2018 Matteo Gabriele
 * Released under the ISC License.
 */
!function(e,t){if(true)module.exports=t();else { var n, r; }}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=u[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(o(r.parts[i]));u[r.id]={id:r.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(h)return g;n.parentNode.removeChild(n)}if(v){var o=f++;n=p||(p=i()),t=a.bind(null,n,o,!1),r=a.bind(null,n,o,!0)}else n=i(),t=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function a(e,t,r,n){var i=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var r=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=r(8),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,g=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r){h=r;var i=c(e,t);return n(i),function(t){for(var r=[],o=0;o<i.length;o++){var a=i[o],s=u[a.id];s.refs--,r.push(s)}t?(i=c(e,t),n(i)):i=[];for(var o=0;o<r.length;o++){var s=r[o];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var m=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,r,n){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),r&&(s._scopeId=r),n){var l=Object.create(s.computed||null);Object.keys(n).forEach(function(e){var t=n[e];l[e]=function(){return t}}),s.computed=l}return{esModule:i,exports:o,options:s}}},function(e,t,r){"use strict";var n=r(10);t.a={props:{src:{type:null,required:!0},placeholder:{type:String},blur:{type:Number},aspectRatio:{type:Number},noRatio:{type:Boolean},fallback:{type:String},alt:{type:String}},data:function(){return{isRendered:!1,options:{},defaultBlur:20,image:null,placeholderImage:null,aspectRatioDetect:.5625,isPollingKilled:!1,cached:!1,imageError:!1}},watch:{src:function(){this.handleImageLoading()}},computed:{shouldPlaceholderRender:function(){return!!this.placeholderImage},shouldImageRender:function(){return this.isRendered},calculatedRatio:function(){return this.aspectRatio||this.aspectRatioDetect},wrapperStyle:function(){return this.noRatio?{}:{paddingBottom:100*this.calculatedRatio+"%"}},blurStyle:function(){var e=this.defaultBlur;return Object(n.a)(this.blur)?this.getBlurStyle(this.blur):Object(n.a)(this.options.blur)?this.getBlurStyle(this.options.blur):this.getBlurStyle(e)}},mounted:function(){this.handleImageLoading()},methods:{getBlurStyle:function(e){if(0!==e)return{filter:"blur("+e+"px)"}},defineAspectRatio:function(e){var t=this,r=this.options.timeout||2500,n=this.options.pollInterval||80,i=setInterval(function(){if(e.naturalWidth){clearInterval(i);var r=e.naturalHeight,n=e.naturalWidth;t.aspectRatioDetect=r/n}},n);setTimeout(function(){e.naturalWidth||(clearInterval(i),t.isPollingKilled=!0)},r)},loadImage:function(){var e=this,t=new Image,r=this.options.delay||0,n=this.fallback||this.options.fallback,i=this.imageError?n:this.src;this.image=null,this.isRendered=!1,this.aspectRatio||this.defineAspectRatio(t),t.onload=function(){if(!e.image){e.isPollingKilled&&!e.aspectRatio&&e.defineAspectRatio(t),e.image=i;var n=void 0;try{n=e.$refs.canvas.getContext("2d"),n.drawImage(e.$refs.main,0,0)}catch(e){}e.$nextTick(function(){setTimeout(function(){e.isRendered=!0,e.placeholderImage=null},r)}),e.imageError=!1,e.$emit("onLoad",t.src)}},t.onerror=function(t){e.$emit("onError",t),(e.fallback||e.options.fallback)&&(e.imageError=!0,e.handleImageLoading())},t.src=i},loadPlaceholder:function(){var e=this;if(this.placeholder||this.options.placeholder){var t=new Image,r=this.placeholder||this.options.placeholder;t.src=r,t.onload=function(){e.placeholderImage=r,e.$emit("onLoadPlaceholder",r)},t.onerror=function(t){e.$emit("onPlaceholderError",t)}}},handleImageLoading:function(){this.loadPlaceholder(),this.loadImage()}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),i=r.n(n),o=r(12),a=r.n(o),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s({},e,{data:function(){return{options:t}}})},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.component("progressive-img",l(i.a,t)),e.component("progressive-background",l(a.a,t))};t.default={install:c}},function(e,t,r){r(6);var n=r(2)(r(9),r(11),null,null);e.exports=n.exports},function(e,t,r){var n=r(7);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("c467ffae",n,!0)},function(e,t,r){t=e.exports=r(0)(),t.push([e.i,".progressive-image{position:relative;overflow:hidden}.canvas{visibility:hidden;position:absolute;top:0;left:0}.progressive-image-main{position:absolute;top:0;left:0;width:100%;height:auto;z-index:1;transition-duration:.3s;transition-property:all;transition-timing-function:ease-out;transform:translateZ(0)}.progressive-image-before-enter{opacity:1}.progressive-image-enter{opacity:0}.progressive-image-placeholder{position:absolute;top:0;left:0;z-index:0;overflow:hidden;transition-duration:.3s;transition-property:all;transition-timing-function:ease-out;backface-visibility:hidden;transform:translateZ(0) scale(1.1);width:100%;height:100%;background-size:cover}.progressive-image-placeholder-out{transition-duration:inherit;transition-property:all;transition-timing-function:ease-out;transition-delay:.4s;opacity:0}",""])},function(e,t){e.exports=function(e,t){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],l=o[2],c=o[3],u={id:e+":"+i,css:s,media:l,sourceMap:c};n[a]?n[a].parts.push(u):r.push(n[a]={id:a,parts:[u]})}return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default={name:"progressive-img",mixins:[n.a],computed:{placeholderStyle:function(){return i({},this.blurStyle,{"background-image":"url("+(this.placeholder||this.options.placeholder)+")"})}}}},function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(e){return void 0!==e&&null!==e}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{ref:"image",staticClass:"progressive-image"},[e.shouldImageRender?e._e():r("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:"1",height:"1"}}),e._v(" "),r("div",{staticClass:"progressive-image-wrapper",style:e.wrapperStyle},[r("transition",{attrs:{"enter-class":"progressive-image-enter","enter-active-class":"progressive-image-before-enter"}},[r("img",{directives:[{name:"show",rawName:"v-show",value:e.shouldImageRender,expression:"shouldImageRender"}],ref:"main",staticClass:"progressive-image-main",attrs:{src:e.image,alt:e.alt}})]),e._v(" "),r("transition",{attrs:{"enter-class":"progressive-image-enter","enter-active-class":"progressive-image-before-enter"}},[e.shouldPlaceholderRender?r("div",{staticClass:"progressive-image-placeholder",class:{"progressive-image-placeholder-out":e.shouldImageRender},style:e.placeholderStyle}):e._e()])],1)])},staticRenderFns:[]}},function(e,t,r){var n={};n.$style=r(13);var i=r(2)(r(15),r(16),null,n);e.exports=i.exports},function(e,t,r){var n=r(14);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(1)("b4050912",n,!0)},function(e,t,r){t=e.exports=r(0)(),t.push([e.i,"._2BthHRY48Qth9Ja9ecuFEQ_0{position:relative;width:100%;height:100%;overflow:hidden}._30VsZs3N14iSeemk3xHHZL_0{position:relative;z-index:1}._3em-Y1_N-m7q8CbVUFEIzb_0{visibility:hidden;position:absolute;top:0;left:0}.arZxkKg-w3Qec3gGdgaPh_0{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;transition:all .4s ease-out;background-position:50%;background-repeat:no-repeat;background-size:cover}._2WZ48QHYw0iFj9daPgvHd_0{transform:scale(1.1);z-index:0}._10rgjDNoIpLvLRaxZc7CL0_0{opacity:1}._2Dw5nQ56jB5hJmnsvE24Be_0{opacity:0}",""]),t.locals={component:"_2BthHRY48Qth9Ja9ecuFEQ_0",slot:"_30VsZs3N14iSeemk3xHHZL_0",canvas:"_3em-Y1_N-m7q8CbVUFEIzb_0",image:"arZxkKg-w3Qec3gGdgaPh_0",placeholder:"_2WZ48QHYw0iFj9daPgvHd_0 arZxkKg-w3Qec3gGdgaPh_0",before:"_10rgjDNoIpLvLRaxZc7CL0_0",enter:"_2Dw5nQ56jB5hJmnsvE24Be_0"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default={name:"progressive-background",props:{noRatio:{type:Boolean,required:!1}},mixins:[n.a],data:function(){return{applyRatio:!this.noRatio}},computed:{imageStyle:function(){return{backgroundImage:"url("+this.image+")"}},placeholderStyle:function(){return i({},this.blurStyle,{backgroundImage:"url("+this.placeholderImage+")"})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.component},[e.shouldImageRender?e._e():r("div",[r("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:"1",height:"1"}}),e._v(" "),r("img",{ref:"main",attrs:{src:e.image,hidden:""}})]),e._v(" "),r("div",{style:e.wrapperStyle},[r("transition",{attrs:{"enter-class":e.$style.enter,"enter-active-class":e.$style.before}},[e.shouldImageRender?r("div",{class:e.$style.image,style:e.imageStyle}):e._e()]),e._v(" "),r("div",{class:e.$style.slot},[e._t("default")],2),e._v(" "),r("transition",{attrs:{"enter-class":e.$style.enter,"enter-active-class":e.$style.before}},[e.shouldPlaceholderRender?r("div",{class:e.$style.placeholder,style:e.placeholderStyle}):e._e()])],1)])},staticRenderFns:[]}}])});

/***/ }),

/***/ "aApx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bAkE":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"1919","height":"562.7","viewBox":"0 0 1919 562.7"}},[_c('path',{attrs:{"d":"M534.3 154.1l-165 96.5v236l107.9 75.5 165.7-100.9v-229l-108.6-78.1zm15 350.5l-85.7-52.2V214.5l85.7 52.2v237.9zM871.2 106.8l73.4-50.5c33.9 16.6 59.2 51.3 41.8 89.2l-82.1 56.8c23.7-20.5 15-68.7-33.1-95.5zM795.4 473.6V34.4l-93.1 56.7v399.8c0 36.3 22.2 66.8 50.3 71.7l89.8-61.8c-19.9 13.2-47 12.4-47-27.2zM221.2 0l-.1.1-75.9 52.8C138 25.3 118.6 4.1 95.1 0L0 65.4c20.9-14 49.7-13.1 49.7 28.8v63.3h-.2v404.6l98.8-60.2V373.1l77.4 45.5L324 323V102.9C324.1 13.6 221.7.1 221.2 0zm4.6 330.1l-77.4-44.9V76.4l21.8-15.2c25.1 0 55.5 33.1 55.5 59.5v49.7h.1v159.7zM964.3 473.6V202.3L871.2 259v231.9c0 36.3 22.3 66.8 50.3 71.7l89.8-61.8c-19.8 13.2-47 12.4-47-27.2zM1256.7 202.3l82.1-56.8c17.4-37.9-7.9-72.6-41.8-89.2l-73.4 50.5c48.1 26.8 56.8 75 33.1 95.5zM1316.7 473.6V202.3l-93.1 56.7v231.9c0 36.3 22.2 66.8 50.3 71.7l89.8-61.8c-19.8 13.2-47 12.4-47-27.2zM1824.4 339.6l-37.5-35.6-33.1-30.9c-25.8-24-14.3-42.8 4.8-50.5l68.6 41.8.3-.1.2.1.3-.3 91-33.5-33.5-24.1.2-.2-72.6-52.2-.2.1-.2-.1-153 89.6c-15.5 23.9-8.4 60.9 18.1 85.7l31.2 29.1-.1.1 52.1 49 9.2 8.6 3.3 3.1 20.6 19.2c25.8 24 14.3 42.8-4.8 50.6l-68.6-41.8-.3.1-.2-.1-.3.3-91 33.5 33.5 24.1-.2.2 72.6 52.2.2-.1.2.1 153-89.6c15.5-23.9 8.4-60.9-18.1-85.7l-45.7-42.7z"}}),_c('path',{attrs:{"d":"M1524.4 500.9c-27.9-12-44.3-35.4-44.3-52.4V214.9l86.2 52.5 94.2-34.7-109.3-78.6-166 97.1v237.5h.1l111.1 73.9 57.1-39.8 79.1-54.3v-13.2s-40.2 38-77.1 46.8c-11.8 2.1-22.6 2-31.1-1.2zM1153.9 129.3h43.1c-39.5-20.5-42.9-77.4-43.1-91.6v-3.3l-93.1 56.7-43.9 27.3s43.9 2.5 43.9 33.2v410.6l92.7-56.5.4-.2V129.3z"}})])}}};

/***/ }),

/***/ "bSzr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "bztI":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("IH2s");
var $Object = __webpack_require__("TaGV").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "cCv0":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("8Xl/");
var invoke = __webpack_require__("qacR");
var html = __webpack_require__("5gKE");
var cel = __webpack_require__("m/Uw");
var global = __webpack_require__("41F1");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("g2rQ")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "cNXa":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

var MINUTE = 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365;

function pluralOrSingular(data, locale) {
  if (data === 'just now') {
    return locale
  }
  var count = Math.round(data);
  if (Array.isArray(locale)) {
    return count > 1
      ? locale[1].replace(/%s/, count)
      : locale[0].replace(/%s/, count)
  }
  return locale.replace(/%s/, count)
}

function formatTime(time) {
  var d = new Date(time);
  return d.toLocaleString()
}

function install(
  Vue,
  ref
) {
  if ( ref === void 0 ) ref = {};
  var name = ref.name; if ( name === void 0 ) name = 'timeago';
  var locale = ref.locale; if ( locale === void 0 ) locale = 'en-US';
  var locales = ref.locales; if ( locales === void 0 ) locales = null;

  if (!locales || Object.keys(locales).length === 0) {
    throw new TypeError('Expected locales to have at least one locale.')
  }

  var VueTimeago = {
    props: {
      since: {
        required: true
      },
      locale: String,
      maxTime: Number,
      autoUpdate: Number,
      format: Function
    },
    data: function data() {
      return {
        now: new Date().getTime()
      }
    },
    computed: {
      currentLocale: function currentLocale() {
        var current = locales[this.locale || locale];
        if (!current) {
          return locales[locale]
        }
        return current
      },
      sinceTime: function sinceTime() {
        return new Date(this.since).getTime()
      },
      timeForTitle: function timeForTitle() {
        var seconds = this.now / 1000 - this.sinceTime / 1000;

        if (this.maxTime && seconds > this.maxTime) {
          return null
        }

        return this.format
          ? this.format(this.sinceTime)
          : formatTime(this.sinceTime)
      },
      timeago: function timeago() {
        var seconds = this.now / 1000 - this.sinceTime / 1000;

        if (this.maxTime && seconds > this.maxTime) {
          clearInterval(this.interval);
          return this.format
            ? this.format(this.sinceTime)
            : formatTime(this.sinceTime)
        }

        var ret =
          seconds <= 5
            ? pluralOrSingular('just now', this.currentLocale[0])
            : seconds < MINUTE
              ? pluralOrSingular(seconds, this.currentLocale[1])
              : seconds < HOUR
                ? pluralOrSingular(seconds / MINUTE, this.currentLocale[2])
                : seconds < DAY
                  ? pluralOrSingular(seconds / HOUR, this.currentLocale[3])
                  : seconds < WEEK
                    ? pluralOrSingular(seconds / DAY, this.currentLocale[4])
                    : seconds < MONTH
                      ? pluralOrSingular(seconds / WEEK, this.currentLocale[5])
                      : seconds < YEAR
                        ? pluralOrSingular(
                            seconds / MONTH,
                            this.currentLocale[6]
                          )
                        : pluralOrSingular(
                            seconds / YEAR,
                            this.currentLocale[7]
                          );

        return ret
      }
    },
    mounted: function mounted() {
      if (this.autoUpdate) {
        this.update();
      }
    },
    render: function render(h) {
      return h(
        'time',
        {
          attrs: {
            datetime: new Date(this.since),
            title: this.timeForTitle
          }
        },
        this.timeago
      )
    },
    watch: {
      autoUpdate: function autoUpdate(newAutoUpdate) {
        this.stopUpdate();
        // only update when it's not falsy value
        // which means you cans set it to 0 to disable auto-update
        if (newAutoUpdate) {
          this.update();
        }
      }
    },
    methods: {
      update: function update() {
        var this$1 = this;

        var period = this.autoUpdate * 1000;
        this.interval = setInterval(function () {
          this$1.now = new Date().getTime();
        }, period);
      },
      stopUpdate: function stopUpdate() {
        clearInterval(this.interval);
        this.interval = null;
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.stopUpdate();
    }
  };

  Vue.component(name, VueTimeago);
}

return install;

})));


/***/ }),

/***/ "cT0C":
/***/ (function(module) {

module.exports = ["just now",["%s second ago","%s seconds ago"],["%s minute ago","%s minutes ago"],["%s hour ago","%s hours ago"],["%s day ago","%s days ago"],["%s week ago","%s weeks ago"],["%s month ago","%s months ago"],["%s year ago","%s years ago"]];

/***/ }),

/***/ "cp9j":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
}());

function decouple(node, event, fn) {
  var eve,
      tracking = false;

  function captureEvent(e) {
    eve = e;
    track();
  }

  function track() {
    if (!tracking) {
      requestAnimFrame(update);
      tracking = true;
    }
  }

  function update() {
    fn.call(node, eve);
    tracking = false;
  }

  node.addEventListener(event, captureEvent, false);

  return captureEvent;
}

/**
 * Expose decouple
 */
module.exports = decouple;


/***/ }),

/***/ "ct/D":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "dCrc":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("Xj5l");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "dR8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("G+Zn");
var descriptor = __webpack_require__("zJT+");
var setToStringTag = __webpack_require__("sWB5");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("PPkd")(IteratorPrototype, __webpack_require__("0Sp3")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "dYWX":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"2037.1","height":"690.1","viewBox":"3622.4 259.6 2037.1 690.1"}},[_c('path',{attrs:{"d":"M4995.3 847.6V299.1l-106.8 65v503.3c0 41.6 25.5 76.6 57.6 82.2l103-70.9c-22.6 15.2-53.8 14.3-53.8-31.1zM4683.6 478.9l-189.2 110.6v270.7l123.7 86.6 190-115.7V568.4l-124.5-89.5zm17.2 401.9l-98.3-59.8V548.2l98.3 59.8v272.8z"}}),_c('path',{attrs:{"d":"M4807.6 844.8v-51.9h-106.8v71.7c0 41.6 25.5 76.6 57.7 82.2l103-70.9c-22.7 15.2-53.9 14.2-53.9-31.1zM5197.7 712.1v-403l-106.7 65v261.3z"}}),_c('path',{attrs:{"d":"M5197.7 829.4V622.9L5091 546.1V829.4zM5197.8 883.4v-54H5091v119zM5091 374.1l-50.4 31.3 73.3 3.1z"}}),_c('path',{attrs:{"d":"M5040.6 405.4s50.4 2.9 50.4 38 23-23.3 23-23.3l-5.9-47.7-67.5 33zM5197.7 309.1s-2.5 81.8 49.5 108.8h-68l18.5-108.8zM4275.8 811.4c0 27.3 36.4 69.3 94.9 69.3-36.1 23.1-91.5 7.3-91.5 7.3l-29-39.6 25.6-37z"}}),_c('path',{attrs:{"d":"M4324.8 871.1c29.7 12.4 85.2-8.5 125.9-40.4v3.7l-90.7 62.3-35.2-25.6zM4357.3 473.8l-190.4 111.4v272.4l108.9 72.3V543.5l109.3 66.1 97.6-45.7z"}}),_c('path',{attrs:{"d":"M4370.7 880.7l-29.5 5.1-57.6-17.6 2.5-22-54.2-19.3v33.3c0 18.3 5 35.2 13.1 49.2l49.5 32.9 138.1-96.3c-8.3 5.5-53.3 34.7-61.9 34.7z"}}),_c('path',{attrs:{"d":"M4450.7 834.4v-15.1s-59 55.8-104.7 55.8 11.7 17 11.7 17l93-57.7zM4440.5 575.7L4250.1 687h21l211.6-123.1"}}),_c('g',[_c('path',{attrs:{"d":"M5605.6 845.4v-51.9h-106.8v71.7c0 41.6 25.5 76.6 57.7 82.2l103-70.9c-22.8 15.2-53.9 14.2-53.9-31.1zM5293.8 401.8v51.9h106.8V382c0-41.6-25.5-76.6-57.7-82.2l-103 70.9c22.7-15.2 53.9-14.3 53.9 31.1zM5399.1 847v-51.9h-106.8v71.7c0 41.6 25.5 76.6 57.7 82.2l103-70.9c-22.7 15.2-53.9 14.3-53.9-31.1z"}}),_c('path',{attrs:{"d":"M5292.3 376.7h108.2v213.5h-108.2z"}}),_c('path',{attrs:{"d":"M5400.5 548.8l98.3 59.8v216.6h107.3V569l-124.6-89.5-189.2 110.7v233.7h112l-3.8-2.3z"}})]),_c('g',[_c('path',{attrs:{"d":"M3680.1 369v55.6h114.4v-76.8c0-44.5-27.3-82-61.8-88.1l-110.3 75.9c24.3-16.3 57.7-15.2 57.7 33.4z"}})]),_c('g',[_c('path',{attrs:{"d":"M3794.5 837.5v-55.6h-114.4v76.8c0 44.6 27.3 82 61.8 88.1l110.4-75.9c-24.4 16.2-57.8 15.2-57.8-33.4z"}})]),_c('path',{attrs:{"d":"M3680.1 361h114.4v225.6h-114.4z"}}),_c('path',{attrs:{"d":"M3680.1 578.2h114.4v225h-114.4z"}}),_c('g',[_c('path',{attrs:{"d":"M3965.7 369v55.6h114.4v-76.8c0-44.6-27.3-82-61.8-88.1l-110.4 75.9c24.3-16.2 57.8-15.2 57.8 33.4z"}})]),_c('g',[_c('path',{attrs:{"d":"M4080.1 837.5v-55.6h-114.4v76.8c0 44.6 27.3 82 61.8 88.1l110.4-75.9c-24.4 16.2-57.8 15.2-57.8-33.4z"}})]),_c('path',{attrs:{"d":"M3965.7 361h114.4v225.6h-114.4z"}}),_c('path',{attrs:{"d":"M3965.7 578.2h114.4v225h-114.4z"}}),_c('path',{attrs:{"d":"M3784.7 652.8h253.9l-60.4-107h-158.1l-58.1 107z"}})])}}};

/***/ }),

/***/ "eOWL":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("ADe/");
var IE8_DOM_DEFINE = __webpack_require__("UTwT");
var toPrimitive = __webpack_require__("HbTz");
var dP = Object.defineProperty;

exports.f = __webpack_require__("lBnu") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "fGh/":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "g2rQ":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "gMWQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("gtwY");
var $export = __webpack_require__("/6KZ");
var redefine = __webpack_require__("5BpW");
var hide = __webpack_require__("PPkd");
var Iterators = __webpack_require__("N9zW");
var $iterCreate = __webpack_require__("dR8c");
var setToStringTag = __webpack_require__("sWB5");
var getPrototypeOf = __webpack_require__("GCLZ");
var ITERATOR = __webpack_require__("0Sp3")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "gou2":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("zWQs");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "gtwY":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "hXZv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("41F1");
var core = __webpack_require__("TaGV");
var dP = __webpack_require__("eOWL");
var DESCRIPTORS = __webpack_require__("lBnu");
var SPECIES = __webpack_require__("0Sp3")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "hjML":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"id":"Layer_1","xmlns":"http://www.w3.org/2000/svg","width":"3121.2","height":"2057.1","viewBox":"2465.9 -1437.3 3121.2 2057.1"}},[_c('path',{attrs:{"fill":"#17161b","d":"M2465.9-1437.3h3121.2V619.8H2465.9z"}}),_c('linearGradient',{attrs:{"id":"SVGID_1_","gradientUnits":"userSpaceOnUse","x1":"2864.828","y1":"781.032","x2":"2864.828","y2":"158.079","gradientTransform":"scale(1 -1) rotate(-7.03 925.692 -401.377)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#f82c7e","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":".481","stop-color":"#6a1f9d","stop-opacity":".939"}}),_c('stop',{attrs:{"offset":".555","stop-color":"#661f97","stop-opacity":".805"}}),_c('stop',{attrs:{"offset":".654","stop-color":"#5b1d86","stop-opacity":".625"}}),_c('stop',{attrs:{"offset":".768","stop-color":"#491b6a","stop-opacity":".42"}}),_c('stop',{attrs:{"offset":".891","stop-color":"#311943","stop-opacity":".197"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17161b","stop-opacity":"0"}})],1),_c('path',{attrs:{"d":"M3091.3-370.1c5.7-11.4 9.8-23.8 11.4-37.2 7.7-62.2-36.5-118.7-98.7-126.4-36.8-4.5-71.5 9.2-95.4 33.9l-.1.1c-6.5 6.7-12.2 14.2-16.8 22.3-55.8 82.2-102.8 236.4-86.8 384.7 12.4 114.7 14.6 138.6 14.8 142.8l169.7 17.6s95.7 69.8 77.3 5c-18.4-64.8-90.4-214.4 25-442.5-.3-.1-.4-.2-.4-.3z","fill":"url(#SVGID_1_)"}}),_c('g',{staticClass:"st2"},[_c('path',{staticClass:"st3",attrs:{"d":"M2924.4-428.6c-1.1-.2-2.2-.5-3.3-1.1-5.7-2.9-8-9.8-5.1-15.5.4-.8 10.1-20 21.8-31.6 4.5-4.5 11.8-4.5 16.3 0s4.5 11.8 0 16.3c-7.5 7.5-15.1 21-17.5 25.6-2.3 4.7-7.4 7.1-12.2 6.3z"}})]),_c('circle',{staticClass:"st4",attrs:{"cx":"2968.5","cy":"-489","r":"11.4"}}),_c('linearGradient',{attrs:{"id":"SVGID_2_","gradientUnits":"userSpaceOnUse","x1":"3195.256","y1":"671.4","x2":"3195.256","y2":"128.001","gradientTransform":"matrix(1 0 0 -1 0 398.6)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":".131","stop-color":"#33d790","stop-opacity":".843"}}),_c('stop',{attrs:{"offset":".273","stop-color":"#31c988","stop-opacity":".704"}}),_c('stop',{attrs:{"offset":".422","stop-color":"#2eb47b","stop-opacity":".561"}}),_c('stop',{attrs:{"offset":".574","stop-color":"#2a9568","stop-opacity":".413"}}),_c('stop',{attrs:{"offset":".729","stop-color":"#246e51","stop-opacity":".263"}}),_c('stop',{attrs:{"offset":".884","stop-color":"#1d3f34","stop-opacity":".113"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17161b","stop-opacity":"0"}})],1),_c('path',{attrs:{"d":"M3296.3-140.5c3.8-10.5 5.9-21.7 5.9-33.4 0-54.6-44.3-98.9-98.9-98.9-32.3 0-61 15.6-79 39.6l-.1.1c-4.9 6.5-9 13.6-12.2 21.1-39.5 77.1-63.8 215.7-34.1 342.3 23 97.9 27.4 118.5 28 122l148.8-2.9s90.3 50.2 67.4-3.9c-22.9-54.1-101.1-176-25.6-385.8-.1 0-.2-.1-.2-.2z","fill":"url(#SVGID_2_)"}}),_c('g',{staticClass:"st2"},[_c('path',{staticClass:"st3",attrs:{"d":"M3136.1-171.3c-1 0-2-.2-2.9-.6-5.2-1.9-7.9-7.6-6.1-12.8.3-.7 6.6-18.4 15.5-29.6 3.4-4.4 9.7-5.1 14.1-1.7 4.4 3.4 5.1 9.7 1.7 14.1-5.7 7.3-10.9 19.8-12.4 24-1.5 4.2-5.6 6.8-9.9 6.6z"}})]),_c('circle',{staticClass:"st4",attrs:{"cx":"3167.9","cy":"-228.3","r":"9.9"}}),_c('linearGradient',{attrs:{"id":"SVGID_3_","gradientUnits":"userSpaceOnUse","x1":"3327.593","y1":"140.745","x2":"3327.593","y2":"-116.854","gradientTransform":"matrix(1 0 0 -1 0 398.6)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#f82c7e","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":".481","stop-color":"#6a1f9d","stop-opacity":".939"}}),_c('stop',{attrs:{"offset":".555","stop-color":"#661f97","stop-opacity":".805"}}),_c('stop',{attrs:{"offset":".654","stop-color":"#5b1d86","stop-opacity":".625"}}),_c('stop',{attrs:{"offset":".768","stop-color":"#491b6a","stop-opacity":".42"}}),_c('stop',{attrs:{"offset":".891","stop-color":"#311943","stop-opacity":".197"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17161b","stop-opacity":"0"}})],1),_c('path',{attrs:{"d":"M3442 122.5c-10.9-56.7-30.5-110.7-69.8-156.4-4.3-5-9-9-14-12.3-18.8-14.2-42.6-21.9-67.9-19.8-54.8 4.4-95.6 52.5-91.2 107.3.4 4.7 1.2 9.3 2.2 13.8.1.4.2.8.3 1.3 1.3 5.6 3.1 11 5.3 16.2 17.8 47.6 39.5 57.8 47.8 148.4.1 2 .3 4 .5 6.1 14.6 127.3-11.7 213.3-47.9 332.2 0 0 126.1 39.1 208.7 14.5 22-78.7 30.8-133.1 34.3-185.4 7.9-80.2 10.9-177.5-8.3-265.9z","fill":"url(#SVGID_3_)"}}),_c('radialGradient',{attrs:{"id":"SVGID_4_","cx":"3510.99","cy":"-907.742","r":"473.355","fx":"3508.169","fy":"-909.04","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":".407","stop-color":"#0433ff","stop-opacity":"0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#34db93","stop-opacity":".969"}})],1),_c('circle',{attrs:{"cx":"3609.7","cy":"-625.1","r":"265.1","fill":"url(#SVGID_4_)"}}),_c('radialGradient',{attrs:{"id":"SVGID_5_","cx":"21341.815","cy":"-11512.737","r":"202.847","fx":"21340.606","fy":"-11513.294","gradientTransform":"rotate(180 12580.652 -6407.406)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":".407","stop-color":"#0433ff","stop-opacity":"0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#34db93","stop-opacity":".969"}})],1),_c('circle',{attrs:{"cx":"3777.2","cy":"-1236.2","r":"113.6","fill":"url(#SVGID_5_)"}}),_c('path',{staticClass:"st9",attrs:{"transform":"rotate(35.008 3326.987 -604.36)","d":"M2948.7-605.8h756.5v2.8h-756.5z"}}),_c('path',{staticClass:"st9",attrs:{"transform":"rotate(35.02 3339.813 -406.331)","d":"M3129.1-407.8H3551v2.8h-421.9z"}}),_c('radialGradient',{attrs:{"id":"SVGID_6_","cx":"2535.9","cy":"-1462.02","r":"167.477","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_6_)","d":"M2694.2-859l-326.5-323.4 9.9-10.1 326.5 323.4z"}}),_c('radialGradient',{attrs:{"id":"SVGID_7_","cx":"2629.4","cy":"-1421.42","r":"167.477","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_7_)","d":"M2787.7-818.4l-326.5-323.4 10-10.1 326.4 323.4z"}}),_c('radialGradient',{attrs:{"id":"SVGID_8_","cx":"2597.05","cy":"-1505.92","r":"149.201","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_8_)","d":"M2736.9-921.1l-289.7-287 9.9-10.1 289.8 287.1z"}}),_c('radialGradient',{attrs:{"id":"SVGID_9_","cx":"2584","cy":"-1571.62","r":"175.527","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_9_)","d":"M2750.3-960.6L2407.7-1300l9.9-10.1 342.7 339.5z"}}),_c('radialGradient',{attrs:{"id":"SVGID_10_","cx":"2529.1","cy":"-1678.97","r":"162.901","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_10_)","d":"M2682.8-1080.5l-317.3-314.3 10-10.1 317.2 314.3z"}}),_c('radialGradient',{attrs:{"id":"SVGID_11_","cx":"2700.6","cy":"-1559.97","r":"171.052","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_11_)","d":"M2862.4-953.4l-333.6-330.5 10-10.1 333.6 330.5z"}}),_c('radialGradient',{attrs:{"id":"SVGID_12_","cx":"2704.8","cy":"-1608.37","r":"189.152","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_12_)","d":"M2884.8-983.8l-370-366.6 10-10 370 366.5z"}}),_c('radialGradient',{attrs:{"id":"SVGID_13_","cx":"2880.2","cy":"-1485.67","r":"179.902","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_13_)","d":"M3050.9-870.3l-351.4-348.1 10-10.1 351.4 348.1z"}}),_c('radialGradient',{attrs:{"id":"SVGID_14_","cx":"2843","cy":"-1575.82","r":"189.227","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_14_)","d":"M3023.1-951.2l-370.2-366.7 10-10 370.2 366.7z"}}),_c('radialGradient',{attrs:{"id":"SVGID_15_","cx":"2913.8","cy":"-1557.92","r":"205.477","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_15_)","d":"M3110.2-917.1l-402.8-399.1 10-10 402.8 399z"}}),_c('radialGradient',{attrs:{"id":"SVGID_16_","cx":"2961.7","cy":"-1562.87","r":"191.952","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_16_)","d":"M3144.5-935.5l-375.6-372.1 10-10.1 375.6 372.1z"}}),_c('radialGradient',{attrs:{"id":"SVGID_17_","cx":"2858.95","cy":"-1718.52","r":"207.602","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_17_)","d":"M3057.5-1075.6l-407.1-403.3 10-10 407.1 403.2z"}}),_c('radialGradient',{attrs:{"id":"SVGID_18_","cx":"2984","cy":"-1646.32","r":"195.127","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_18_)","d":"M3170-1015.8l-382-378.4 10-10.1 382 378.4z"}}),_c('radialGradient',{attrs:{"id":"SVGID_19_","cx":"2938.55","cy":"-1744.67","r":"206.427","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_19_)","d":"M3136-1102.9l-404.8-401 10-10 404.7 400.9z"}}),_c('radialGradient',{attrs:{"id":"SVGID_20_","cx":"2951.9","cy":"-1784.22","r":"189.077","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_20_)","d":"M3131.9-1159.7L2762-1526.1l9.9-10.1 369.9 366.4z"}}),_c('radialGradient',{attrs:{"id":"SVGID_21_","cx":"3122.3","cy":"-1666.77","r":"210.752","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_21_)","d":"M3324-1020.7l-413.4-409.6 9.9-10 413.5 409.5z"}}),_c('radialGradient',{attrs:{"id":"SVGID_22_","cx":"3097.4","cy":"-1744.52","r":"186.177","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_22_)","d":"M3274.5-1122.9l-364.1-360.7 9.9-10 364.1 360.7z"}}),_c('radialGradient',{attrs:{"id":"SVGID_23_","cx":"2393.55","cy":"-1288.87","r":"283.278","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_23_)","d":"M2668.1-570.6L2109-1124.5l10-10.1 559.1 553.9z"}}),_c('radialGradient',{attrs:{"id":"SVGID_24_","cx":"2420.05","cy":"-1314.97","r":"257.027","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_24_)","d":"M2668.3-622.8l-506.4-501.7 10-10.1 506.3 501.7z"}}),_c('radialGradient',{attrs:{"id":"SVGID_25_","cx":"2424.45","cy":"-1363.07","r":"206.427","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_25_)","d":"M2621.8-721.3l-404.7-400.9 10-10.1 404.7 401z"}}),_c('radialGradient',{attrs:{"id":"SVGID_26_","cx":"2482.2","cy":"-1358.22","r":"201.577","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_26_)","d":"M2674.7-721.3l-395-391.3 10-10 395 391.3z"}}),_c('radialGradient',{attrs:{"id":"SVGID_27_","cx":"2525.9","cy":"-1367.37","r":"210.752","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_27_)","d":"M2727.6-721.3l-413.4-409.5 9.9-10.1 413.5 409.6z"}}),_c('radialGradient',{attrs:{"id":"SVGID_28_","cx":"2577.2","cy":"-1367.37","r":"210.752","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_28_)","d":"M2779-721.3l-413.5-409.5 10-10.1 413.4 409.6z"}}),_c('radialGradient',{attrs:{"id":"SVGID_29_","cx":"3180.9","cy":"-1713.92","r":"210.777","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_29_)","d":"M3382.6-1067.8l-413.4-409.6 10-10.1 413.4 409.6z"}}),_c('radialGradient',{attrs:{"id":"SVGID_30_","cx":"3183","cy":"-1764.67","r":"187.652","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_30_)","d":"M3361.5-1141.6l-367-363.5 10-10.1 367 363.6z"}}),_c('radialGradient',{attrs:{"id":"SVGID_31_","cx":"3325.75","cy":"-1727.72","r":"196.852","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_31_)","d":"M3513.5-1095.5L3128-1477.3l10-10.1 385.5 381.9z"}}),_c('radialGradient',{attrs:{"id":"SVGID_32_","cx":"3311.15","cy":"-1689.52","r":"201.752","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_32_)","d":"M3503.8-1052.4l-395.3-391.7 10-10 395.3 391.6z"}}),_c('linearGradient',{attrs:{"id":"SVGID_33_","gradientUnits":"userSpaceOnUse","x1":"3391.083","y1":"-4073.957","x2":"3561.75","y2":"-4073.957","gradientTransform":"rotate(-16.3 15049.706 -6199.121)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('path',{attrs:{"d":"M4603.4-958.1l-70.2-26c-3.9-1.4-7.9-1.6-11.6-.7-6.2 1.5-11.6 5.9-13.9 12.4l-41.5 110.9c-3.8 10.3 1.4 21.7 11.7 25.5 4.2 1.6 8.5 1.6 12.5.5 5.8-1.7 10.8-6 13-12.1l34.4-92.3 51.7 19.1c4.2 1.6 8.5 1.6 12.5.5 5.8-1.7 10.8-6 13-12.1 3.9-10.5-1.3-21.9-11.6-25.7z","fill":"url(#SVGID_33_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_34_","gradientUnits":"userSpaceOnUse","x1":"4622.891","y1":"-11531.905","x2":"4793.644","y2":"-11531.905","gradientTransform":"rotate(-61.262 13889.969 -5934.815)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('path',{attrs:{"d":"M4588.2-652.1l-68 31.3c-3.8 1.7-6.7 4.5-8.7 7.8-3.3 5.4-4 12.4-1.1 18.6l49.2 107.7c4.6 10 16.3 14.4 26.3 9.8 4-1.8 7.2-4.9 9.1-8.5 2.9-5.3 3.4-11.9.7-17.8l-40.9-89.6 50-23.1c4-1.8 7.2-4.9 9.1-8.5 2.9-5.3 3.4-11.9.7-17.8-4.6-10.1-16.4-14.5-26.4-9.9z","fill":"url(#SVGID_34_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_35_","gradientUnits":"userSpaceOnUse","x1":"22664.449","y1":"-1095.676","x2":"22835.156","y2":"-1095.676","gradientTransform":"rotate(118.738 13885.246 -6401.145)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('path',{attrs:{"d":"M4949.9-1101.9l68-31.3c3.8-1.7 6.7-4.5 8.7-7.8 3.3-5.4 4-12.4 1.1-18.6l-49.2-107.7c-4.6-10-16.3-14.4-26.3-9.8-4 1.8-7.2 4.9-9.1 8.5-2.9 5.3-3.4 11.9-.7 17.8l40.9 89.6-50 23.1c-4 1.8-7.2 4.9-9.1 8.5-2.9 5.3-3.4 11.9-.7 17.8 4.7 10.1 16.4 14.4 26.4 9.9z","fill":"url(#SVGID_35_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_36_","gradientUnits":"userSpaceOnUse","x1":"22646.428","y1":"-1619.069","x2":"22817.182","y2":"-1619.069","gradientTransform":"rotate(118.738 13885.246 -6401.145)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('path',{attrs:{"d":"M5417.5-866.1l68-31.3c3.8-1.7 6.7-4.5 8.7-7.8 3.3-5.4 4-12.4 1.1-18.6l-49.2-107.7c-4.6-10-16.3-14.4-26.3-9.8-4 1.8-7.2 4.9-9.1 8.5-2.9 5.3-3.4 11.9-.7 17.8l40.9 89.6-50 23.1c-4 1.8-7.2 4.9-9.1 8.5-2.9 5.3-3.4 11.9-.7 17.8 4.6 10.1 16.4 14.5 26.4 9.9z","fill":"url(#SVGID_36_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_37_","gradientUnits":"userSpaceOnUse","x1":"4208.851","y1":"-3607.569","x2":"4405.378","y2":"-3607.569","gradientTransform":"rotate(-12.275 16196.566 -6433.134)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('path',{attrs:{"d":"M5283.4-1120.3l-70.9-94.7c-2.5-3.3-5.8-5.6-9.4-6.9-6-2.1-12.9-1.2-18.4 2.9l-94.7 70.9c-8.8 6.6-10.6 19-4 27.8 2.7 3.6 6.3 6 10.2 7.1 5.8 1.7 12.3.8 17.5-3.1l78.9-59.1 59.1 78.9c2.7 3.6 6.3 6 10.2 7.1 5.8 1.7 12.3.8 17.5-3.1 8.8-6.6 10.6-19.1 4-27.8z","fill":"url(#SVGID_37_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_38_","gradientUnits":"userSpaceOnUse","x1":"8711.178","y1":"2193.988","x2":"8840.235","y2":"2193.988","gradientTransform":"rotate(28.738 12835.684 -6860.449)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('path',{attrs:{"d":"M4973.9-849.8l-24.8-57.3c-1.7-3.8-4.5-6.7-7.8-8.7-5.4-3.3-12.4-4-18.6-1.1l-60.6 27.4c-10 4.6-14.4 16.3-9.8 26.3 1.8 4 4.9 7.2 8.5 9.1 5.3 2.9 11.9 3.4 17.8.7l42.5-19.1 16.6 39.3c1.8 4 4.9 7.2 8.5 9.1 5.3 2.9 11.9 3.4 17.8.7 10.1-4.7 14.5-16.5 9.9-26.4z","fill":"url(#SVGID_38_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_39_","gradientUnits":"userSpaceOnUse","x1":"23941.111","y1":"-8622.691","x2":"24069.998","y2":"-8622.691","gradientTransform":"rotate(163.7 13733.188 -6070.988)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('path',{attrs:{"d":"M4533.3-725.3l58 23c3.9 1.4 7.9 1.6 11.6.7 6.2-1.5 11.6-5.9 13.9-12.4l23.5-62.2c3.8-10.3-1.4-21.7-11.7-25.5-4.2-1.6-8.5-1.6-12.5-.5-5.8 1.7-10.8 6-13.1 12.1l-16.5 43.6-39.5-16c-4.2-1.6-8.5-1.6-12.5-.5-5.8 1.7-10.8 6-13 12.1-3.7 10.3 1.6 21.8 11.8 25.6z","fill":"url(#SVGID_39_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_40_","gradientUnits":"userSpaceOnUse","x1":"23088.6","y1":"-11322.954","x2":"23217.566","y2":"-11322.954","gradientTransform":"rotate(-178.388 13741.013 -5980.432)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('path',{attrs:{"d":"M4118.8-899.2l48.2 39.7c3.2 2.6 7 3.9 10.9 4.2 6.4.5 12.8-2.1 17.1-7.5l41.4-52c6.8-8.6 5.3-21.1-3.3-27.9-3.5-2.8-7.6-4.2-11.7-4.3-6-.2-12.1 2.4-16.1 7.5l-29.1 36.4-32.7-27.4c-3.5-2.8-7.6-4.2-11.7-4.3-6-.2-12.1 2.4-16.1 7.5-6.9 8.8-5.5 21.3 3.1 28.1z","fill":"url(#SVGID_40_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_41_","gradientUnits":"userSpaceOnUse","x1":"22832.658","y1":"-794.873","x2":"22961.75","y2":"-794.873","gradientTransform":"rotate(118.738 13637.727 -6244.443)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('path',{attrs:{"d":"M4383.4-693.6l57.3-24.8c3.8-1.7 6.7-4.5 8.7-7.8 3.3-5.4 4-12.4 1.1-18.6l-27.4-60.6c-4.6-10-16.3-14.4-26.3-9.8-4 1.8-7.2 4.9-9.1 8.5-2.9 5.3-3.4 11.9-.7 17.8l19.1 42.5-39.3 16.6c-4 1.8-7.2 4.9-9.1 8.5-2.9 5.3-3.4 11.9-.7 17.8 4.6 10.1 16.4 14.5 26.4 9.9z","fill":"url(#SVGID_41_)"}}),_c('path',{staticClass:"st9",attrs:{"d":"M4808.5-539.5l-449.8-446.2 11.9-12 449.8 446.2zm-141.9 294.3l-726.2-719.9 11.9-12 726.1 720zm.1-62.1l-663.5-657.8 11.9-12 663.5 657.9zm70.5-116.8l-553.1-548.5 11.8-12L4749-436.1z"}}),_c('linearGradient',{attrs:{"id":"SVGID_42_","gradientUnits":"userSpaceOnUse","x1":"4359","y1":"-1313.77","x2":"4421","y2":"-1313.77","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('circle',{attrs:{"cx":"4390","cy":"-877.5","r":"31","fill":"url(#SVGID_42_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_43_","gradientUnits":"userSpaceOnUse","x1":"4257.257","y1":"-1227.47","x2":"4314.857","y2":"-1227.47","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('circle',{attrs:{"cx":"4286","cy":"-791.2","r":"28.8","fill":"url(#SVGID_43_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_44_","gradientUnits":"userSpaceOnUse","x1":"4650.7","y1":"-1024.07","x2":"4708.3","y2":"-1024.07","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('circle',{attrs:{"cx":"4679.5","cy":"-587.8","r":"28.8","fill":"url(#SVGID_44_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_45_","gradientUnits":"userSpaceOnUse","x1":"4772.5","y1":"-1496.27","x2":"4834.5","y2":"-1496.27","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('circle',{attrs:{"cx":"4803.5","cy":"-1060","r":"31","fill":"url(#SVGID_45_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_46_","gradientUnits":"userSpaceOnUse","x1":"5172.5","y1":"-1420.87","x2":"5234.5","y2":"-1420.87","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('circle',{attrs:{"cx":"5203.5","cy":"-984.6","r":"31","fill":"url(#SVGID_46_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_47_","gradientUnits":"userSpaceOnUse","x1":"4953.2","y1":"-1413.37","x2":"5015.2","y2":"-1413.37","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('circle',{attrs:{"cx":"4984.2","cy":"-977.1","r":"31","fill":"url(#SVGID_47_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_48_","gradientUnits":"userSpaceOnUse","x1":"4651.2","y1":"-1366.97","x2":"5203.5","y2":"-1366.97","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_48_)","d":"M5191.7-656.7l-540.5-536.1 11.8-11.9 540.5 536z"}}),_c('path',{staticClass:"st9",attrs:{"d":"M5232.3-678.6l-508.1-504 11.8-12 508.2 504zM5129-845l-545.5-541 11.8-12 545.5 541zm133.6 71l-515.7-511.4 11.8-12 515.7 511.5zm-40.4-103.5l-542.7-538.2 11.8-12L5234-889.4zm58.7-3.8l-501.4-497.3 11.9-11.9 501.4 497.3zm164.6 101.5l-553.1-548.5 11.9-11.9 553.1 548.5zm-58.8-121.3l-494.5-490.5 11.8-11.9 494.5 490.4zm128.5 65.3l-553.1-548.5 11.8-11.9L5527-847.7zm-25.1-87.5l-497.9-493.9 11.8-11.9 498 493.8zm180.5 54.7l-519.9-515.6 11.9-11.9 519.8 515.6zm-11.5 51.1l-531.6-527.2 11.9-11.9 531.5 527.2z"}}),_c('linearGradient',{attrs:{"id":"SVGID_49_","gradientUnits":"userSpaceOnUse","x1":"4639.963","y1":"-1439.214","x2":"4826.62","y2":"-1439.214","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('path',{attrs:{"d":"M4817.1-984.8l-115.4-70.2c-9.4-5.7-21.6-2.7-27.3 6.7-2.9 4.7-3.5 10.1-2.3 15.1l-8.7-1.6c-10.8-2-21.1 5.1-23.1 15.9s5.1 21.1 15.9 23.1l95.7 17.8 44.6 27.1c3.2 2 6.8 2.9 10.3 2.9 6.7 0 13.2-3.4 17-9.5 5.6-9.4 2.6-21.6-6.7-27.3z","fill":"url(#SVGID_49_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_50_","gradientUnits":"userSpaceOnUse","x1":"3692.374","y1":"-9139.633","x2":"3879.065","y2":"-9139.633","gradientTransform":"rotate(-45.001 14221.914 -6128.595)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('path',{attrs:{"d":"M4785.4-924.7l-131.2 32c-10.6 2.6-17.2 13.3-14.6 24 1.3 5.4 4.7 9.7 9.1 12.3l-7.3 5c-9 6.2-11.3 18.6-5.1 27.6 6.2 9 18.6 11.3 27.6 5.1l80.3-55.1 50.7-12.4c3.7-.9 6.8-2.7 9.3-5.2 4.7-4.7 7-11.8 5.3-18.7-2.7-10.7-13.4-17.2-24.1-14.6z","fill":"url(#SVGID_50_)"}}),_c('radialGradient',{attrs:{"id":"SVGID_51_","cx":"4159.65","cy":"-1821.57","r":"224.477","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_51_)","d":"M4373.1-1161.7L3934.3-1597l11.8-11.9 438.9 435.3z"}}),_c('radialGradient',{attrs:{"id":"SVGID_52_","cx":"4202.95","cy":"-1840.52","r":"234.152","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_52_)","d":"M4426.2-1171l-458.3-454.5 11.8-12 458.3 454.6z"}}),_c('radialGradient',{attrs:{"id":"SVGID_53_","cx":"4211.7","cy":"-1890.27","r":"255.702","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#d4145a","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_53_)","d":"M4456.5-1199.3L3955-1696.7l11.9-12 501.5 497.4z"}}),_c('path',{staticClass:"st9",attrs:{"d":"M5088.1-697.2l-501.6-497.6 11.8-11.9L5100-709.2z"}}),_c('radialGradient',{attrs:{"id":"SVGID_54_","cx":"4418.75","cy":"-1871.47","r":"275.077","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#d4145a","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_54_)","d":"M4683.1-1161.2l-540.5-536.1 11.8-11.9 540.5 536z"}}),_c('radialGradient',{attrs:{"id":"SVGID_55_","cx":"4461.4","cy":"-1895.67","r":"259.002","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_55_)","d":"M4709.6-1201.4l-508.2-504 11.8-12 508.2 504z"}}),_c('radialGradient',{attrs:{"id":"SVGID_56_","cx":"4390","cy":"-1778.57","r":"244.652","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_56_)","d":"M4623.7-1098.6L4144.4-1574l11.8-12 479.4 475.5z"}}),_c('radialGradient',{attrs:{"id":"SVGID_57_","cx":"4320.45","cy":"-1911.02","r":"255.752","gradientTransform":"translate(0 436.27)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff","stop-opacity":"0"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_57_)","d":"M4565.3-1220l-501.6-497.6 11.8-11.9 501.7 497.5z"}}),_c('path',{staticClass:"st9",attrs:{"d":"M4697.5-587.8l-449.9-446.1 11.9-12 449.8 446.2z"}}),_c('linearGradient',{attrs:{"id":"SVGID_58_","gradientUnits":"userSpaceOnUse","x1":"4245.1","y1":"-1140.62","x2":"4810","y2":"-1140.62","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_58_)","d":"M4798.2-424.1l-553.1-548.5 11.9-12 553 548.5z"}}),_c('path',{staticClass:"st9",attrs:{"d":"M4611.5-424.1l-542.7-538.3 11.9-11.9 542.7 538.2zm62.9 0l-531.2-526.8 11.8-12 531.2 526.8z"}}),_c('linearGradient',{attrs:{"id":"SVGID_59_","gradientUnits":"userSpaceOnUse","x1":"4342","y1":"1267.55","x2":"4760.1","y2":"1267.55","gradientTransform":"matrix(1 0 0 -1 0 398.6)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_59_)","d":"M4748.2-661.5L4342-1064.4l11.9-12 406.2 403z"}}),_c('path',{staticClass:"st9",attrs:{"d":"M4764.2-708.4l-469.1-465.2 11.9-11.9 469 465.2zm68.1 5.9l-438.8-435.3 11.8-12 438.8 435.3z"}}),_c('linearGradient',{attrs:{"id":"SVGID_60_","gradientUnits":"userSpaceOnUse","x1":"4439","y1":"-1369.42","x2":"4909.1","y2":"-1369.42","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('path',{attrs:{"fill":"url(#SVGID_60_)","d":"M4897.3-699.9L4439-1154.4l11.8-12 458.3 454.6z"}}),_c('path',{staticClass:"st9",attrs:{"d":"M4923.9-736l-501.5-497.4 11.9-12L4935.8-748zm197.2 134.8l-479.3-475.4 11.8-12L5133-613.1z"}}),_c('linearGradient',{attrs:{"id":"SVGID_61_","gradientUnits":"userSpaceOnUse","x1":"4856.363","y1":"-674.749","x2":"5043.21","y2":"-561.456","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ffeb69"}}),_c('stop',{attrs:{"offset":".107","stop-color":"#ffbe71"}}),_c('stop',{attrs:{"offset":".214","stop-color":"#ff9877"}}),_c('stop',{attrs:{"offset":".313","stop-color":"#ff7d7b"}}),_c('stop',{attrs:{"offset":".401","stop-color":"#ff6d7e"}}),_c('stop',{attrs:{"offset":".467","stop-color":"#ff677f"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#ff4ae0"}})],1),_c('path',{attrs:{"d":"M5024.2-146.3c-20.7-11.2-44.9-18.5-74.9-36.4-32.9-21.3-53.3-46.8-72.4-63.7-3.5-3.5-7.8-6.9-12.9-9.7-15.8-8.6-32.4-8.7-37.1-.2-4.7 8.5 4.4 22.5 20.2 31.1 21.6 11.7 52.5 19.1 85.4 38.6 31.7 20.8 58.9 45.1 77.4 61.4 3.5 3.5 7.6 7.3 12.9 9.7 11.4 5.2 19 .9 20.2-1 4.2-6.8-3-21.2-18.8-29.8z","fill":"url(#SVGID_61_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_62_","gradientUnits":"userSpaceOnUse","x1":"4042.596","y1":"490.682","x2":"4216.572","y2":"596.17","gradientTransform":"rotate(2.925 4702.745 -3151.664)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ffeb69"}}),_c('stop',{attrs:{"offset":".107","stop-color":"#ffbe71"}}),_c('stop',{attrs:{"offset":".214","stop-color":"#ff9877"}}),_c('stop',{attrs:{"offset":".313","stop-color":"#ff7d7b"}}),_c('stop',{attrs:{"offset":".401","stop-color":"#ff6d7e"}}),_c('stop',{attrs:{"offset":".467","stop-color":"#ff677f"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#ff4ae0"}})],1),_c('path',{attrs:{"d":"M4009.3 545.9c-18.7-11.4-40.8-19.4-67.9-37.4-29.6-21.4-47.3-46-64.3-62.7-3-3.5-7-6.8-11.6-9.6-14.3-8.8-29.7-9.7-34.5-1.9-4.8 7.7 3 21.1 17.3 29.9 19.5 11.9 47.9 20.3 77.6 40 28.5 20.9 52.6 44.7 69.1 60.8 3 3.5 6.8 7.1 11.6 9.6 10.4 5.4 17.6 1.8 18.8.1 4.2-6.4-1.8-20-16.1-28.8z","fill":"url(#SVGID_62_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_63_","gradientUnits":"userSpaceOnUse","x1":"4381.179","y1":"564.526","x2":"4455.731","y2":"609.729","gradientTransform":"rotate(2.925 4702.745 -3151.664)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".037","stop-color":"#31d996"}}),_c('stop',{attrs:{"offset":".41","stop-color":"#16c9b0"}}),_c('stop',{attrs:{"offset":".741","stop-color":"#06bfbf"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#00bcc5"}})],1),_c('path',{attrs:{"d":"M4257 583.3c-8-4.9-17.5-8.3-29.1-16-12.7-9.2-20.3-19.7-27.6-26.8-1.3-1.5-3-2.9-5-4.1-6.1-3.8-12.7-4.1-14.8-.8-2 3.3 1.3 9 7.4 12.8 8.4 5.1 20.5 8.7 33.2 17.1 12.2 8.9 22.6 19.2 29.6 26 1.3 1.5 2.9 3 5 4.1 4.4 2.3 7.6.8 8.1 0 1.9-2.6-.7-8.5-6.8-12.3z","fill":"url(#SVGID_63_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_64_","gradientUnits":"userSpaceOnUse","x1":"4544.249","y1":"295.06","x2":"4618.801","y2":"340.264","gradientTransform":"rotate(2.925 4702.745 -3151.664)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".037","stop-color":"#31d996"}}),_c('stop',{attrs:{"offset":".41","stop-color":"#16c9b0"}}),_c('stop',{attrs:{"offset":".741","stop-color":"#06bfbf"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#00bcc5"}})],1),_c('path',{attrs:{"d":"M4433.6 322.5c-8-4.9-17.5-8.3-29.1-16-12.7-9.2-20.3-19.7-27.6-26.8-1.3-1.5-3-2.9-5-4.1-6.1-3.8-12.7-4.1-14.8-.8-2 3.3 1.3 9 7.4 12.8 8.4 5.1 20.5 8.7 33.2 17.1 12.2 8.9 22.6 19.2 29.6 26 1.3 1.5 2.9 3 5 4.1 4.4 2.3 7.6.8 8.1 0 2-2.7-.6-8.6-6.8-12.3z","fill":"url(#SVGID_64_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_65_","gradientUnits":"userSpaceOnUse","x1":"4203.68","y1":"-583.308","x2":"4561.64","y2":"-366.265","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#0433ff"}}),_c('stop',{attrs:{"offset":".148","stop-color":"#3e38f8"}}),_c('stop',{attrs:{"offset":".317","stop-color":"#783ef1"}}),_c('stop',{attrs:{"offset":".479","stop-color":"#a842eb"}}),_c('stop',{attrs:{"offset":".632","stop-color":"#ce45e6"}}),_c('stop',{attrs:{"offset":".774","stop-color":"#e948e3"}}),_c('stop',{attrs:{"offset":".899","stop-color":"#f949e1"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#ff4ae0"}})],1),_c('path',{attrs:{"d":"M4525.3 29.3c-39.7-21.5-86-35.5-143.5-69.6-63.1-40.8-102-89.6-138.8-122-6.6-6.8-15-13.2-24.8-18.5-30.3-16.6-62.1-16.7-71-.4-9 16.4 8.3 43 38.6 59.6 41.3 22.4 100.5 36.7 163.6 74 60.8 39.9 112.8 86.4 148.3 117.6 6.6 6.8 14.7 13.9 24.8 18.5 21.9 10 36.4 1.7 38.6-1.8 8.3-13.4-5.5-40.8-35.8-57.4z","fill":"url(#SVGID_65_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_66_","gradientUnits":"userSpaceOnUse","x1":"3861.561","y1":"-654.939","x2":"4056.456","y2":"-536.768","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#0433ff"}}),_c('stop',{attrs:{"offset":".148","stop-color":"#3e38f8"}}),_c('stop',{attrs:{"offset":".317","stop-color":"#783ef1"}}),_c('stop',{attrs:{"offset":".479","stop-color":"#a842eb"}}),_c('stop',{attrs:{"offset":".632","stop-color":"#ce45e6"}}),_c('stop',{attrs:{"offset":".774","stop-color":"#e948e3"}}),_c('stop',{attrs:{"offset":".899","stop-color":"#f949e1"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#ff4ae0"}})],1),_c('path',{attrs:{"d":"M4036.7-122.7c-21.6-11.7-46.8-19.3-78.1-37.9-34.4-22.2-55.5-48.8-75.6-66.4-3.6-3.7-8.2-7.2-13.5-10.1-16.5-9-33.8-9.1-38.7-.2-4.9 8.9 4.5 23.4 21 32.5 22.5 12.2 54.7 20 89.1 40.3 33.1 21.7 61.4 47 80.7 64 3.6 3.7 8 7.6 13.5 10.1 11.9 5.4 19.8 1 21-1 4.6-7.3-2.9-22.3-19.4-31.3z","fill":"url(#SVGID_66_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_67_","gradientUnits":"userSpaceOnUse","x1":"4855.411","y1":"-882.507","x2":"4926.814","y2":"-839.212","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ede757"}}),_c('stop',{attrs:{"offset":".118","stop-color":"#c1df6b"}}),_c('stop',{attrs:{"offset":".292","stop-color":"#87d586"}}),_c('stop',{attrs:{"offset":".461","stop-color":"#57cc9d"}}),_c('stop',{attrs:{"offset":".62","stop-color":"#31c5ae"}}),_c('stop',{attrs:{"offset":".766","stop-color":"#16c0bb"}}),_c('stop',{attrs:{"offset":".895","stop-color":"#06bdc2"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#00bcc5"}})],1),_c('path',{attrs:{"d":"M4919.6-411.1c-7.9-4.3-17.1-7.1-28.6-13.9-12.6-8.1-20.4-17.9-27.7-24.3-1.3-1.4-3-2.6-4.9-3.7-6-3.3-12.4-3.3-14.2-.1-1.8 3.3 1.7 8.6 7.7 11.9 8.2 4.5 20.1 7.3 32.6 14.8 12.1 8 22.5 17.2 29.6 23.5 1.3 1.4 2.9 2.8 4.9 3.7 4.4 2 7.3.3 7.7-.4 1.7-2.7-1.1-8.2-7.1-11.5z","fill":"url(#SVGID_67_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_68_","gradientUnits":"userSpaceOnUse","x1":"7981.068","y1":"2705.067","x2":"8169.484","y2":"2819.31","gradientTransform":"rotate(22.422 13323.188 -5121.856)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ede757"}}),_c('stop',{attrs:{"offset":".118","stop-color":"#c1df6b"}}),_c('stop',{attrs:{"offset":".292","stop-color":"#87d586"}}),_c('stop',{attrs:{"offset":".461","stop-color":"#57cc9d"}}),_c('stop',{attrs:{"offset":".62","stop-color":"#31c5ae"}}),_c('stop',{attrs:{"offset":".766","stop-color":"#16c0bb"}}),_c('stop',{attrs:{"offset":".895","stop-color":"#06bdc2"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#00bcc5"}})],1),_c('path',{attrs:{"d":"M5520.9 226.3c-15-18.4-34.7-34.5-55.8-62.7-22.5-32.5-31.7-64.1-43-87.2-1.9-4.6-4.7-9.4-8.3-14-11.4-14.1-26.8-20.6-34.5-14.4-7.6 6.2-4.6 22.6 6.8 36.8 15.6 19.2 41.6 38 64.7 68.9 21.5 31.6 37.6 64.7 48.5 87 1.9 4.6 4.3 9.7 8.3 14 8.7 9.3 17.4 8.2 19.2 6.9 6.7-5.1 5.5-21.2-5.9-35.3z","fill":"url(#SVGID_68_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_69_","gradientUnits":"userSpaceOnUse","x1":"3876.324","y1":"-385.906","x2":"3975.362","y2":"-325.856","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ede757"}}),_c('stop',{attrs:{"offset":".118","stop-color":"#c1df6b"}}),_c('stop',{attrs:{"offset":".292","stop-color":"#87d586"}}),_c('stop',{attrs:{"offset":".461","stop-color":"#57cc9d"}}),_c('stop',{attrs:{"offset":".62","stop-color":"#31c5ae"}}),_c('stop',{attrs:{"offset":".766","stop-color":"#16c0bb"}}),_c('stop',{attrs:{"offset":".895","stop-color":"#06bdc2"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#00bcc5"}})],1),_c('path',{attrs:{"d":"M3965.3 99.2c-11-6-23.8-9.8-39.7-19.3-17.5-11.3-28.2-24.8-38.4-33.8-1.8-1.9-4.2-3.6-6.9-5.1-8.4-4.6-17.2-4.6-19.7-.1s2.3 11.9 10.7 16.5c11.4 6.2 27.8 10.1 45.3 20.5 16.8 11 31.2 23.9 41 32.5 1.8 1.9 4.1 3.8 6.9 5.1 6.1 2.8 10.1.5 10.7-.5 2.3-3.6-1.5-11.2-9.9-15.8z","fill":"url(#SVGID_69_)"}}),_c('ellipse',{attrs:{"transform":"rotate(-143.514 4162.524 525.263)","cx":"4162.5","cy":"525.2","rx":"9.8","ry":"6.8","fill":"#00bcc5"}}),_c('linearGradient',{attrs:{"id":"SVGID_70_","gradientUnits":"userSpaceOnUse","x1":"4316.042","y1":"61.623","x2":"4363.037","y2":"108.618","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#00bcc5"}}),_c('stop',{attrs:{"offset":".212","stop-color":"#0693b5"}}),_c('stop',{attrs:{"offset":".443","stop-color":"#0c6ea6"}}),_c('stop',{attrs:{"offset":".658","stop-color":"#10539b"}}),_c('stop',{attrs:{"offset":".849","stop-color":"#124394"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#133d92"}})],1),_c('path',{attrs:{"d":"M4315.3 532.5c-19.4-19.7-17.2-32.7-10.6-39.2 6.5-6.5 27.6-14.5 42.1 0s22.5 22.5 18.8 39.2c-3.8 16.8-39.9 10.6-50.3 0z","fill":"url(#SVGID_70_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_71_","gradientUnits":"userSpaceOnUse","x1":"4270.756","y1":"40.887","x2":"4288.338","y2":"58.468","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#00bcc5"}}),_c('stop',{attrs:{"offset":".212","stop-color":"#0693b5"}}),_c('stop',{attrs:{"offset":".443","stop-color":"#0c6ea6"}}),_c('stop',{attrs:{"offset":".658","stop-color":"#10539b"}}),_c('stop',{attrs:{"offset":".849","stop-color":"#124394"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#133d92"}})],1),_c('path',{attrs:{"d":"M4270.5 490.1c-7.3-7.4-6.4-12.2-4-14.7 2.4-2.4 10.3-5.4 15.7 0s8.4 8.4 7 14.7c-1.3 6.2-14.8 3.9-18.7 0z","fill":"url(#SVGID_71_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_72_","gradientUnits":"userSpaceOnUse","x1":"4213.368","y1":"-141.752","x2":"4260.362","y2":"-94.757","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#00bcc5"}}),_c('stop',{attrs:{"offset":".212","stop-color":"#0693b5"}}),_c('stop',{attrs:{"offset":".443","stop-color":"#0c6ea6"}}),_c('stop',{attrs:{"offset":".658","stop-color":"#10539b"}}),_c('stop',{attrs:{"offset":".849","stop-color":"#124394"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#133d92"}})],1),_c('path',{attrs:{"d":"M4212.6 329.1c-19.4-19.7-17.2-32.7-10.6-39.2 6.5-6.5 27.6-14.5 42.1 0s22.5 22.5 18.8 39.2-39.9 10.6-50.3 0z","fill":"url(#SVGID_72_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_73_","gradientUnits":"userSpaceOnUse","x1":"4168.132","y1":"-162.538","x2":"4185.713","y2":"-144.956","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#00bcc5"}}),_c('stop',{attrs:{"offset":".212","stop-color":"#0693b5"}}),_c('stop',{attrs:{"offset":".443","stop-color":"#0c6ea6"}}),_c('stop',{attrs:{"offset":".658","stop-color":"#10539b"}}),_c('stop',{attrs:{"offset":".849","stop-color":"#124394"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#133d92"}})],1),_c('path',{attrs:{"d":"M4167.9 286.7c-7.3-7.4-6.4-12.2-4-14.7 2.4-2.4 10.3-5.4 15.7 0s8.4 8.4 7 14.7-14.8 3.9-18.7 0z","fill":"url(#SVGID_73_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_74_","gradientUnits":"userSpaceOnUse","x1":"3721.974","y1":"-240.045","x2":"3773.242","y2":"-188.777","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ff677f"}}),_c('stop',{attrs:{"offset":".116","stop-color":"#d45f82"}}),_c('stop',{attrs:{"offset":".29","stop-color":"#9a5587"}}),_c('stop',{attrs:{"offset":".459","stop-color":"#6a4c8b"}}),_c('stop',{attrs:{"offset":".619","stop-color":"#44468e"}}),_c('stop',{attrs:{"offset":".765","stop-color":"#294190"}}),_c('stop',{attrs:{"offset":".895","stop-color":"#193e92"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#133d92"}})],1),_c('path',{attrs:{"d":"M3729.2 238.8c-19.4-19.7-17.2-32.7-10.6-39.2 6.5-6.5 27.6-14.5 42.1 0s22.5 22.5 18.8 39.2c-3.7 16.7-39.9 10.6-50.3 0z","fill":"url(#SVGID_74_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_75_","gradientUnits":"userSpaceOnUse","x1":"3678.698","y1":"-253.976","x2":"3708.549","y2":"-253.976","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ff677f"}}),_c('stop',{attrs:{"offset":".116","stop-color":"#d45f82"}}),_c('stop',{attrs:{"offset":".29","stop-color":"#9a5587"}}),_c('stop',{attrs:{"offset":".459","stop-color":"#6a4c8b"}}),_c('stop',{attrs:{"offset":".619","stop-color":"#44468e"}}),_c('stop',{attrs:{"offset":".765","stop-color":"#294190"}}),_c('stop',{attrs:{"offset":".895","stop-color":"#193e92"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#133d92"}})],1),_c('path',{attrs:{"d":"M3685.6 190.6c-8.7-8.8-7.7-14.7-4.8-17.6s12.4-6.5 18.9 0 10.1 10.1 8.4 17.6c-1.6 7.5-17.8 4.7-22.5 0z","fill":"url(#SVGID_75_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_76_","gradientUnits":"userSpaceOnUse","x1":"4152.016","y1":"-880.604","x2":"4203.281","y2":"-829.339","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ff677f"}}),_c('stop',{attrs:{"offset":".116","stop-color":"#d45f82"}}),_c('stop',{attrs:{"offset":".29","stop-color":"#9a5587"}}),_c('stop',{attrs:{"offset":".459","stop-color":"#6a4c8b"}}),_c('stop',{attrs:{"offset":".619","stop-color":"#44468e"}}),_c('stop',{attrs:{"offset":".765","stop-color":"#294190"}}),_c('stop',{attrs:{"offset":".895","stop-color":"#193e92"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#133d92"}})],1),_c('path',{attrs:{"d":"M4159.3-401.7c-19.4-19.7-17.2-32.7-10.6-39.2 6.5-6.5 27.6-14.5 42.1 0s22.5 22.5 18.8 39.2c-3.7 16.7-39.9 10.5-50.3 0z","fill":"url(#SVGID_76_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_77_","gradientUnits":"userSpaceOnUse","x1":"4108.792","y1":"-894.539","x2":"4138.644","y2":"-894.539","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ff677f"}}),_c('stop',{attrs:{"offset":".116","stop-color":"#d45f82"}}),_c('stop',{attrs:{"offset":".29","stop-color":"#9a5587"}}),_c('stop',{attrs:{"offset":".459","stop-color":"#6a4c8b"}}),_c('stop',{attrs:{"offset":".619","stop-color":"#44468e"}}),_c('stop',{attrs:{"offset":".765","stop-color":"#294190"}}),_c('stop',{attrs:{"offset":".895","stop-color":"#193e92"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#133d92"}})],1),_c('path',{attrs:{"d":"M4115.7-450c-8.7-8.8-7.7-14.7-4.8-17.6s12.4-6.5 18.9 0 10.1 10.1 8.4 17.6c-1.6 7.6-17.8 4.8-22.5 0z","fill":"url(#SVGID_77_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_78_","gradientUnits":"userSpaceOnUse","x1":"5264.19","y1":"-945.732","x2":"5451.038","y2":"-832.44","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('path',{attrs:{"d":"M5432-417.3c-20.7-11.2-44.9-18.5-74.9-36.4-32.9-21.3-53.3-46.8-72.4-63.7-3.5-3.5-7.8-6.9-12.9-9.7-15.8-8.6-32.4-8.7-37.1-.2s4.4 22.5 20.2 31.1c21.6 11.7 52.5 19.1 85.4 38.6 31.7 20.8 58.9 45.1 77.4 61.4 3.5 3.5 7.6 7.3 12.9 9.7 11.4 5.2 19 .9 20.2-1 4.3-6.9-3-21.2-18.8-29.8z","fill":"url(#SVGID_78_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_79_","gradientUnits":"userSpaceOnUse","x1":"4966.418","y1":"-834.207","x2":"5385.076","y2":"-834.207","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93"}}),_c('stop',{attrs:{"offset":".112","stop-color":"#3dda8b"}}),_c('stop',{attrs:{"offset":".297","stop-color":"#57d776"}}),_c('stop',{attrs:{"offset":".533","stop-color":"#80d254"}}),_c('stop',{attrs:{"offset":".809","stop-color":"#b9ca24"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#e5c500"}})],1),_c('path',{attrs:{"d":"M5346.9-318.6c-39.7-21.5-86-35.5-143.5-69.6-63.1-40.8-102-89.6-138.8-122-6.6-6.8-15-13.2-24.8-18.5-30.3-16.6-62.1-16.7-71-.4-9 16.4 8.3 43 38.6 59.6 41.3 22.4 100.5 36.7 163.6 74 60.8 39.9 112.8 86.4 148.3 117.6 6.6 6.8 14.7 13.9 24.8 18.5 21.9 10 36.4 1.7 38.6-1.8 8.3-13.4-5.5-40.8-35.8-57.4z","fill":"url(#SVGID_79_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_80_","gradientUnits":"userSpaceOnUse","x1":"5386.392","y1":"-653.418","x2":"5457.795","y2":"-610.124","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ede757"}}),_c('stop',{attrs:{"offset":".118","stop-color":"#c1df6b"}}),_c('stop',{attrs:{"offset":".292","stop-color":"#87d586"}}),_c('stop',{attrs:{"offset":".461","stop-color":"#57cc9d"}}),_c('stop',{attrs:{"offset":".62","stop-color":"#31c5ae"}}),_c('stop',{attrs:{"offset":".766","stop-color":"#16c0bb"}}),_c('stop',{attrs:{"offset":".895","stop-color":"#06bdc2"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#00bcc5"}})],1),_c('path',{attrs:{"d":"M5450.6-182c-7.9-4.3-17.1-7.1-28.6-13.9-12.6-8.1-20.4-17.9-27.7-24.3-1.3-1.4-3-2.6-4.9-3.7-6-3.3-12.4-3.3-14.2-.1-1.8 3.3 1.7 8.6 7.7 11.9 8.2 4.5 20.1 7.3 32.6 14.8 12.1 8 22.5 17.2 29.6 23.5 1.3 1.4 2.9 2.8 4.9 3.7 4.4 2 7.3.3 7.7-.4 1.7-2.7-1.1-8.2-7.1-11.5z","fill":"url(#SVGID_80_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_81_","gradientUnits":"userSpaceOnUse","x1":"5185.374","y1":"-640.345","x2":"5236.643","y2":"-589.078","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('path',{attrs:{"d":"M5192.6-161.5c-19.4-19.7-17.2-32.7-10.6-39.2 6.5-6.5 27.6-14.5 42.1 0s22.5 22.5 18.8 39.2-39.8 10.5-50.3 0z","fill":"url(#SVGID_81_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_82_","gradientUnits":"userSpaceOnUse","x1":"5148.829","y1":"-689.976","x2":"5178.68","y2":"-689.976","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ed1e79"}}),_c('stop',{attrs:{"offset":".091","stop-color":"#e41f7e"}}),_c('stop',{attrs:{"offset":".242","stop-color":"#ca218d"}}),_c('stop',{attrs:{"offset":".435","stop-color":"#a125a5"}}),_c('stop',{attrs:{"offset":".662","stop-color":"#672ac6"}}),_c('stop',{attrs:{"offset":".914","stop-color":"#1e31f0"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#0433ff"}})],1),_c('path',{attrs:{"d":"M5155.7-245.4c-8.7-8.8-7.7-14.7-4.8-17.6s12.4-6.5 18.9 0 10.1 10.1 8.4 17.6c-1.5 7.5-17.8 4.7-22.5 0z","fill":"url(#SVGID_82_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_83_","gradientUnits":"userSpaceOnUse","x1":"3954.575","y1":"-888.645","x2":"4025.331","y2":"-817.888","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#f15a24"}}),_c('stop',{attrs:{"offset":".127","stop-color":"#c16d44"}}),_c('stop',{attrs:{"offset":".299","stop-color":"#87856b"}}),_c('stop',{attrs:{"offset":".466","stop-color":"#57998b"}}),_c('stop',{attrs:{"offset":".623","stop-color":"#31a8a4"}}),_c('stop',{attrs:{"offset":".768","stop-color":"#16b3b6"}}),_c('stop',{attrs:{"offset":".896","stop-color":"#06bac1"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#00bcc5"}})],1),_c('path',{attrs:{"d":"M3964.6-393.6c-26.8-27.1-23.7-45.1-14.7-54.1s38.1-20 58.1 0 31 31 25.9 54.1c-5 23.1-54.9 14.6-69.3 0z","fill":"url(#SVGID_83_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_84_","gradientUnits":"userSpaceOnUse","x1":"3894.935","y1":"-907.931","x2":"3936.125","y2":"-907.931","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#f15a24"}}),_c('stop',{attrs:{"offset":".127","stop-color":"#c16d44"}}),_c('stop',{attrs:{"offset":".299","stop-color":"#87856b"}}),_c('stop',{attrs:{"offset":".466","stop-color":"#57998b"}}),_c('stop',{attrs:{"offset":".623","stop-color":"#31a8a4"}}),_c('stop',{attrs:{"offset":".768","stop-color":"#16b3b6"}}),_c('stop',{attrs:{"offset":".896","stop-color":"#06bac1"}}),_c('stop',{attrs:{"offset":".994","stop-color":"#00bcc5"}})],1),_c('path',{attrs:{"d":"M3904.4-460.2c-12-12.2-10.6-20.3-6.6-24.3 4.1-4.1 17.1-9 26.1 0s13.9 13.9 11.6 24.3c-2.2 10.4-24.6 6.6-31.1 0z","fill":"url(#SVGID_84_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_85_","gradientUnits":"userSpaceOnUse","x1":"5062.8","y1":"184.33","x2":"5062.8","y2":"-580.068","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#1ec8f2"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#6bfce2"}})],1),_c('path',{attrs:{"d":"M4361.4 620.6c74-120.3 115-193 136.2-227.4 21.2-34.4 46.8-46.8 98.7-12.8 51.9 33.9 143.3 78.9 189 44.3 45.7-34.6 36.8-100.1 0-165.5S4605-18.5 4588.9-83.8c-16.2-65.4 108.2-70.8 190.7-47.2s243.3 149 350.6 150.1c107.2 1.1 138.3-80.4 211.2-80.4s422.8 681.9 422.8 681.9H4361.4z","fill":"url(#SVGID_85_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_86_","gradientUnits":"userSpaceOnUse","x1":"5157.261","y1":"-291.593","x2":"5214.898","y2":"-461.625","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#1ec8f2"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#6bfce2"}})],1),_c('path',{attrs:{"d":"M5012.9-13.7c105.8 63.1 202.6 139.2 311.6 128 36.7 0 74.4-69.7 75.7-122.3-25.6-33.2-46.3-53.3-58.8-53.3-72.9 0-104 81.5-211.2 80.4-35-.3-75.6-13.9-117.3-32.8z","fill":"url(#SVGID_86_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_87_","gradientUnits":"userSpaceOnUse","x1":"4527.522","y1":"-206.139","x2":"4609.674","y2":"-206.139","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#427dcd"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#2bf1d0"}})],1),_c('path',{attrs:{"d":"M4533.7 204c-12.8 12.1-4.6 36.4 14.4 50.2s50.2 11.6 58.3 0 .6-34.7-16.2-47.9c-16.7-13.2-46.1-12.1-56.5-2.3z","fill":"url(#SVGID_87_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_88_","gradientUnits":"userSpaceOnUse","x1":"21516.531","y1":"-7940.519","x2":"21650.656","y2":"-7940.519","gradientTransform":"rotate(-170.645 13347.69 -3366.915)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#1ec8f2"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#6bfce2"}})],1),_c('path',{attrs:{"d":"M4527.4-141.1c23.8-16.1 17.1-57.3-9.9-84.7s-77.8-31.9-93.9-15.5c-16.1 16.4-10.1 55.6 13.3 81.4 23.4 25.8 71.2 31.8 90.5 18.8z","fill":"url(#SVGID_88_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_89_","gradientUnits":"userSpaceOnUse","x1":"4716","y1":"16.59","x2":"4716","y2":"-117.955","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#427dcd"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#2bf1d0"}})],1),_c('path',{attrs:{"d":"M4596.2 380.4c29.7 15.5 54-20.5 38.3-47.2-15.7-26.6-17.6-49.7-10.2-57.2 7.4-7.4 40.7-8.6 94.8 26.6s96.6 32.1 83.1-8.2c-13.4-40.3 33.6 6.7 33.6 6.7l-.8 114.4-34.5 41.5-117.5 18.8-86.8-95.4z","fill":"url(#SVGID_89_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_90_","gradientUnits":"userSpaceOnUse","x1":"5062.799","y1":"190.107","x2":"5058.608","y2":"-318.666","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#427dcd"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#2bf1d0"}})],1),_c('path',{attrs:{"d":"M5764.1 620.6s-86.9-169.4-183.1-339.4c-67-78.7-179.3-109-234.8 26.2-55.6 135.1-101.1 84.2-278.3-69-177.1-153.2-261.6-122.8-281.8-100.8-18.7 20.3-20.2 79.2 2 126.7 2 3.7 3.9 7.4 5.7 11 0 0 0 .1.1.1 4 6.9 6.7 13.3 8.4 18.9 21.2 52.8 20.4 101.9-17 130.2-43.6 33-128.8-6.4-181.7-39.6-2.5-1.6-5-3.1-7.3-4.7-51.9-33.9-77.6-21.5-98.7 12.8-21.2 34.4-62.1 107.1-136.2 227.4h1402.7v.2z","fill":"url(#SVGID_90_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_91_","gradientUnits":"userSpaceOnUse","x1":"4753.1","y1":"64.63","x2":"5764","y2":"64.63","gradientTransform":"translate(0 436.27)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ff677f"}}),_c('stop',{attrs:{"offset":".137","stop-color":"#ff6e7e"}}),_c('stop',{attrs:{"offset":".342","stop-color":"#ff837a"}}),_c('stop',{attrs:{"offset":".592","stop-color":"#ffa575"}}),_c('stop',{attrs:{"offset":".873","stop-color":"#ffd36d"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#ffeb69"}})],1),_c('path',{attrs:{"d":"M5636.5 381.1s-46.6 96.9-130.3 96.9c-83.7 0-125.5-24.5-226.5 39-135.6 92.3-266.9 80.8-526.6 103.7H5764c.1-.1-55.8-108.9-127.5-239.6z","fill":"url(#SVGID_91_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_92_","gradientUnits":"userSpaceOnUse","x1":"2769.856","y1":"852.9","x2":"2769.856","y2":"309.501","gradientTransform":"matrix(1 0 0 -1 0 398.6)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#ffda00","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":".083","stop-color":"#ffd702","stop-opacity":".964"}}),_c('stop',{attrs:{"offset":".154","stop-color":"#fecc0a","stop-opacity":".959"}}),_c('stop',{attrs:{"offset":".22","stop-color":"#febb17","stop-opacity":".955"}}),_c('stop',{attrs:{"offset":".283","stop-color":"#fda229","stop-opacity":".951"}}),_c('stop',{attrs:{"offset":".344","stop-color":"#fb8240","stop-opacity":".947"}}),_c('stop',{attrs:{"offset":".404","stop-color":"#fa5b5c","stop-opacity":".943"}}),_c('stop',{attrs:{"offset":".462","stop-color":"#f82e7d","stop-opacity":".939"}}),_c('stop',{attrs:{"offset":".463","stop-color":"#f82c7e","stop-opacity":".939"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#6a1f9d","stop-opacity":"0"}})],1),_c('path',{attrs:{"d":"M2870.9-322c3.8-10.5 5.9-21.7 5.9-33.4 0-54.6-44.3-98.9-98.9-98.9-32.3 0-61 15.6-79 39.6l-.1.1c-4.9 6.5-9 13.6-12.2 21.1-39.5 77.1-63.8 215.7-34.1 342.3 23 97.9 27.4 118.5 28 122l148.8-2.9s90.3 50.2 67.4-3.9c-22.9-54.1-101.1-176-25.6-385.8-.1 0-.2-.1-.2-.2z","fill":"url(#SVGID_92_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_93_","gradientUnits":"userSpaceOnUse","x1":"2733.218","y1":"467.122","x2":"2712.683","y2":"21.872","gradientTransform":"matrix(1 0 0 -1 0 398.6)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#34db93","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":".131","stop-color":"#33d790","stop-opacity":".843"}}),_c('stop',{attrs:{"offset":".273","stop-color":"#31c988","stop-opacity":".704"}}),_c('stop',{attrs:{"offset":".422","stop-color":"#2eb47b","stop-opacity":".561"}}),_c('stop',{attrs:{"offset":".574","stop-color":"#2a9568","stop-opacity":".413"}}),_c('stop',{attrs:{"offset":".729","stop-color":"#246e51","stop-opacity":".263"}}),_c('stop',{attrs:{"offset":".884","stop-color":"#1d3f34","stop-opacity":".113"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17161b","stop-opacity":"0"}})],1),_c('path',{attrs:{"d":"M2782.6-27.7c-3.6-5.5-7.8-10.1-12.3-13.9-16.8-16.4-39.5-27.1-64.8-28.2-54.9-2.5-101.5 39.9-104 94.9-.2 4.7 0 9.4.4 14 0 .4.1.9.1 1.3.6 5.7 1.7 11.3 3.2 16.7 11.9 50.5 32.8 62.9 28.4 159.4-11.5 80.2 2.5 162.2 27.4 243l118.2-35.6-.4.2 60.1-21.7c-21.1-68.3-13.6-131.5-6.8-176.7.3-1.8.3-3.6.2-5.3 3.7-86.4-.5-173.6-49.7-248.1z","fill":"url(#SVGID_93_)"}}),_c('g',{staticClass:"st2"},[_c('path',{staticClass:"st3",attrs:{"d":"M2659.2 64.8c-.8.6-1.7 1.1-2.6 1.4-5.2 1.9-11-.8-12.8-6.1-.3-.7-6.5-18.4-6.9-32.7-.1-5.5 4.3-10.1 9.8-10.3 5.5-.1 10.1 4.3 10.3 9.8.2 9.2 4.2 22.2 5.7 26.4 1.4 4.3-.1 8.9-3.5 11.5z"}})]),_c('circle',{staticClass:"st4",attrs:{"cx":"2647.5","cy":".6","r":"9.9"}}),_c('linearGradient',{attrs:{"id":"SVGID_94_","gradientUnits":"userSpaceOnUse","x1":"2650.5","y1":"130.5","x2":"2650.5","y2":"-161.3","gradientTransform":"matrix(1 0 0 -1 0 398.6)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#6a1f9d","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":".204","stop-color":"#681f9a","stop-opacity":".771"}}),_c('stop',{attrs:{"offset":".377","stop-color":"#611e8f","stop-opacity":".604"}}),_c('stop',{attrs:{"offset":".539","stop-color":"#561d7e","stop-opacity":".447"}}),_c('stop',{attrs:{"offset":".694","stop-color":"#461b65","stop-opacity":".297"}}),_c('stop',{attrs:{"offset":".844","stop-color":"#321945","stop-opacity":".152"}}),_c('stop',{attrs:{"offset":".988","stop-color":"#19161f","stop-opacity":".012"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17161b","stop-opacity":"0"}})],1),_c('path',{attrs:{"d":"M2765.5 382.9c.1-.4.2-.9.2-1.3.6-4.6 1.1-9.2 1.1-13.9 0-55-44.6-99.6-99.6-99.6-25.4 0-48.5 9.6-66.1 25.2-4.7 3.7-9.1 8-12.9 13.4-53.6 73.7-54 165.1-54 253.2h198.6c0-96.6 14.4-110.5 28.6-160.4 1.9-5.4 3.2-10.9 4.1-16.6z","fill":"url(#SVGID_94_)"}}),_c('g',{staticClass:"st2"},[_c('path',{staticClass:"st3",attrs:{"d":"M2609.3 376.9c-1 0-2-.1-3-.5-5.3-1.6-8.3-7.3-6.6-12.6.2-.8 5.8-18.6 14.1-30.3 3.2-4.5 9.5-5.6 14-2.3 4.5 3.2 5.6 9.5 2.3 14-5.4 7.5-10 20.3-11.3 24.6-1.3 4.3-5.2 7.1-9.5 7.1z"}})]),_c('circle',{staticClass:"st4",attrs:{"cx":"2638.4","cy":"318.6","r":"9.9"}}),_c('linearGradient',{attrs:{"id":"SVGID_95_","gradientUnits":"userSpaceOnUse","x1":"2976.9","y1":"36.9","x2":"2976.9","y2":"-254.9","gradientTransform":"matrix(1 0 0 -1 0 398.6)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#6a1f9d","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17161b","stop-opacity":"0"}})],1),_c('path',{attrs:{"d":"M3091.9 476.5c.1-.4.2-.9.2-1.3.6-4.6 1.1-9.2 1.1-13.9 0-55-44.6-99.6-99.6-99.6-25.4 0-48.5 9.6-66.1 25.2-4.7 3.7-9.1 8-12.9 13.4-53.6 73.7-54 165.1-54 253.2h198.6c0-96.6 14.4-110.5 28.6-160.4 1.9-5.4 3.2-10.9 4.1-16.6z","fill":"url(#SVGID_95_)"}}),_c('linearGradient',{attrs:{"id":"SVGID_96_","gradientUnits":"userSpaceOnUse","x1":"3194.245","y1":"278.683","x2":"3171.327","y2":"-218.211","gradientTransform":"matrix(1 0 0 -1 0 398.6)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#57befa","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":".122","stop-color":"#56bbf6","stop-opacity":".851"}}),_c('stop',{attrs:{"offset":".256","stop-color":"#52b1e8","stop-opacity":".721"}}),_c('stop',{attrs:{"offset":".395","stop-color":"#4ca0d3","stop-opacity":".587"}}),_c('stop',{attrs:{"offset":".537","stop-color":"#4389b4","stop-opacity":".449"}}),_c('stop',{attrs:{"offset":".682","stop-color":"#386c8d","stop-opacity":".308"}}),_c('stop',{attrs:{"offset":".829","stop-color":"#2a475d","stop-opacity":".165"}}),_c('stop',{attrs:{"offset":".976","stop-color":"#1a1d25","stop-opacity":".023"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17161b","stop-opacity":"0"}})],1),_c('path',{attrs:{"d":"M3302.6 197.5c-1.3-6.5-3.5-12.3-6.2-17.5-9.5-21.5-26.5-39.9-49.6-50.4-50-22.9-109.1-.9-132 49.1-2 4.3-3.5 8.7-4.8 13.1-.1.4-.2.8-.4 1.3-1.6 5.5-2.7 11.1-3.3 16.7-7.9 51.3 6.9 70.6-33.3 158.4-4 6.9-7.7 14-11.3 21.1 19.3 18.2 31.4 43.9 31.4 72.4 0 4.7-.4 9.4-1.1 13.9 0 .4-.1.9-.2 1.3-.9 5.7-2.2 11.2-4 16.5-11.6 40.8-23.3 57.6-27.3 115.1l69.9 6.4h-.5l63.8 2.3c6-71.2 36.5-127 59.8-166.4.9-1.6 1.7-3.2 2.2-4.8 35.9-78.6 64.6-161 46.9-248.5z","fill":"url(#SVGID_96_)"}}),_c('g',{staticClass:"st2"},[_c('path',{staticClass:"st3",attrs:{"d":"M2935.7 470.5c-1 0-2-.1-3-.5-5.3-1.6-8.3-7.3-6.6-12.6.2-.8 5.8-18.6 14.1-30.3 3.2-4.5 9.5-5.6 14-2.3 4.5 3.2 5.6 9.5 2.3 14-5.4 7.5-10 20.3-11.3 24.6-1.3 4.4-5.2 7.1-9.5 7.1z"}})]),_c('circle',{staticClass:"st4",attrs:{"cx":"2964.9","cy":"412.2","r":"9.9"}}),_c('linearGradient',{attrs:{"id":"SVGID_97_","gradientUnits":"userSpaceOnUse","x1":"2919.009","y1":"330.153","x2":"2772.46","y2":"-77.635","gradientTransform":"matrix(1 0 0 -1 0 398.6)"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#f82c7e","stop-opacity":".969"}}),_c('stop',{attrs:{"offset":".481","stop-color":"#6a1f9d","stop-opacity":".939"}}),_c('stop',{attrs:{"offset":".555","stop-color":"#661f97","stop-opacity":".805"}}),_c('stop',{attrs:{"offset":".654","stop-color":"#5b1d86","stop-opacity":".625"}}),_c('stop',{attrs:{"offset":".768","stop-color":"#491b6a","stop-opacity":".42"}}),_c('stop',{attrs:{"offset":".891","stop-color":"#311943","stop-opacity":".197"}}),_c('stop',{attrs:{"offset":"1","stop-color":"#17161b","stop-opacity":"0"}})],1),_c('path',{attrs:{"d":"M2954.3 122.1c-1.8-6.3-4.5-11.9-7.7-16.9-11.3-20.7-29.7-37.5-53.6-46.1-51.7-18.6-108.8 8.3-127.4 60-1.6 4.5-2.7 9-3.7 13.5-.1.4-.2.9-.3 1.3-1.1 5.6-1.7 11.3-1.8 16.9-3.4 50.2 11.8 68.6-16.9 152.4 14.8 17.4 23.8 39.9 23.8 64.6 0 4.7-.4 9.4-1.1 13.9 0 .4-.1.9-.2 1.3-.9 5.7-2.2 11.2-4 16.5-13.8 48.5-27.8 63.1-28.6 152.5l85.2.6-.5.1 63.8-3.1c0-71.5 25.7-129.6 45.5-170.9.8-1.7 1.4-3.3 1.8-5 29-81.4 50.6-165.9 25.7-251.6z","fill":"url(#SVGID_97_)"}}),_c('g',{staticClass:"st2"},[_c('path',{staticClass:"st3",attrs:{"d":"M2809 174.1c-.9.3-1.9.5-2.9.6-5.5.3-10.2-4-10.5-9.6 0-.8-.8-19.5 3.1-33.3 1.5-5.3 7.1-8.4 12.4-6.9s8.4 7.1 6.9 12.4c-2.5 8.9-2.5 22.4-2.3 26.9.1 4.5-2.7 8.4-6.7 9.9z"}})]),_c('circle',{staticClass:"st4",attrs:{"cx":"2816.7","cy":"109.3","r":"9.9"}}),_c('g',{staticClass:"st2"},[_c('path',{staticClass:"st3",attrs:{"d":"M2710.7-352.8c-1 0-2-.2-2.9-.6-5.2-1.9-7.9-7.6-6.1-12.8.3-.7 6.6-18.4 15.5-29.6 3.4-4.4 9.7-5.1 14.1-1.7s5.1 9.7 1.7 14.1c-5.7 7.3-10.9 19.8-12.4 24-1.5 4.2-5.6 6.8-9.9 6.6z"}})]),_c('circle',{staticClass:"st4",attrs:{"cx":"2742.5","cy":"-409.8","r":"9.9"}}),_c('g',{staticClass:"st2"},[_c('path',{staticClass:"st3",attrs:{"d":"M3154.8 238.2c-.9.3-2 .4-3 .3-5.5-.2-9.9-4.9-9.6-10.4 0-.8.8-19.5 5.9-32.9 2-5.2 7.7-7.8 12.9-5.9 5.2 1.9 7.8 7.7 5.9 12.9-3.2 8.6-4.4 22.2-4.6 26.6-.3 4.6-3.4 8.3-7.5 9.4z"}})]),_c('circle',{staticClass:"st4",attrs:{"cx":"3167.9","cy":"174.3","r":"9.9"}}),_c('g',{staticClass:"st2"},[_c('path',{staticClass:"st3",attrs:{"d":"M3261.4 73.5c-.7.7-1.5 1.3-2.4 1.7-4.9 2.5-11 .6-13.5-4.4-.4-.7-8.8-17.4-11-31.6-.8-5.5 2.9-10.6 8.4-11.4 5.5-.8 10.6 2.9 11.4 8.4 1.4 9.1 7 21.5 9 25.5 2.1 4.1 1.2 8.8-1.9 11.8z"}})]),_c('circle',{staticClass:"st4",attrs:{"cx":"3241.6","cy":"11.3","r":"9.9"}})],1)}}};

/***/ }),

/***/ "hw61":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"id":"Layer_1","xmlns":"http://www.w3.org/2000/svg","width":"2125.4","height":"854.3","viewBox":"19.5 195.9 2125.4 854.3"}},[_c('path',{attrs:{"d":"M1127.1 392.6L928.2 508.9v284.6l130.1 91 199.8-121.7V486.7l-131-94.1zm18.1 422.5l-103.3-62.9V465.4l103.3 62.9v286.8zM756.4 395.1l-.2.1-88.4 61.5c-8.4-32.2-31-56.8-58.4-61.6l-110.9 76.3c24.4-16.3 58-15.3 58 33.6v73.8h-.2v471.4l115.1-70.1V830l90.2 53 114.6-111.4V515.1c.1-104.1-119.3-119.9-119.8-120zm5.3 384.7l-90.2-52.4V484.2l25.4-17.7c29.2 0 64.6 38.6 64.6 69.3v57.9h.1V779.8zM2030.9 621.7l-45.2-42.9-39.9-37.2c-31.1-29-17.3-51.7 5.8-60.9l82.7 50.4.3-.1.2.1.3-.3 109.7-40.4-40.4-29 .2-.2-87.6-62.9-.3.2-.2-.2L1832 506.4c-18.7 28.8-10.1 73.5 21.9 103.3l37.7 35.1-.1.1 62.8 59.1 11.1 10.4 3.9 3.7 24.8 23.2c31.1 29 17.3 51.7-5.8 61l-82.7-50.4-.3.1-.2-.1-.3.3-109.7 40.4 40.4 29-.2.2 87.6 62.9.3-.2.2.2 184.5-108.1c18.7-28.8 10.1-73.5-21.9-103.3l-55.1-51.6zM1766.8 672V248.3l-112.2 68.3v274.8z"}}),_c('path',{attrs:{"d":"M1766.8 759.4V542.3l-112.2-80.7V759.4zM1766.8 816.2v-56.8h-112.2v125.1zM1654.6 316.6l-53 32.9 77.1 3.3z"}}),_c('path',{attrs:{"d":"M1601.6 349.5s53 3 53 40 24.1-24.5 24.1-24.5l-6.2-50.1-70.9 34.6zM1766.8 248.3s-2.6 86 52 114.3h-71.5l19.5-114.3z"}}),_c('g',[_c('path',{attrs:{"d":"M1436.5 777.2v-54.5h-112.3v75.4c0 43.7 26.8 80.5 60.6 86.4l108.3-74.5c-23.8 15.9-56.6 14.9-56.6-32.8zM1322.8 493.1v54.5h112.3v-75.4c0-43.7-26.8-80.5-60.6-86.4l-108.3 74.5c23.8-15.9 56.6-14.9 56.6 32.8z"}}),_c('path',{attrs:{"d":"M1352.1 759.4l84.4-32V458.6l103.3 62.9 112.9-41.6-131-94.1-198.9 116.3v257.3z"}})]),_c('path',{attrs:{"d":"M451.5 579.2l-48.7-45.9L296.1 427l-116.3 97 100.7 100.4 79.2 74.5c9.8 9.1 14.8 17.7 14.2 24-.6 5.7-6.2 10-9.3 11.8l-40.7 23.8L175 673.2 19.5 730.7 252.2 883 502 736.8l2-3.1c24.3-37.5 13.3-93.1-25.6-129.4l-26.9-25.1z"}}),_c('path',{attrs:{"d":"M244.1 379.9c-9.8-9.1-14.8-17.6-14.2-24 .6-5.7 6.2-10 9.3-11.9l40.7-23.8 119.7 68.5 143.9-67.2-191.9-125.6-249.8 146.2-2 3.1c-24.3 37.5-13.3 93.1 25.6 129.4l28.3 26.4 47.4 44.6 8.6 8.6 116.7-95.5-30.2-30.1-52.1-48.7z"}})])}}};

/***/ }),

/***/ "iKhv":
/***/ (function(module, exports) {



/***/ }),

/***/ "k/kI":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Cs9m");
var global = __webpack_require__("41F1");
var hide = __webpack_require__("PPkd");
var Iterators = __webpack_require__("N9zW");
var TO_STRING_TAG = __webpack_require__("0Sp3")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "k0wL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kBaS":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "kn9z":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"height":"48","viewBox":"0 0 48 48","width":"48","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"d":"M0 0h48v48H0z","fill":"none"}}),_c('path',{attrs:{"d":"M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3a14.8 14.8 0 0 0-3.38 1.97L9.9 10.1a1 1 0 0 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3a14.8 14.8 0 0 0 3.38-1.97l4.98 2.01a1 1 0 0 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}})])}}};

/***/ }),

/***/ "lBnu":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("/Vl9")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "lOrp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapState; });
/* unused harmony export mapMutations */
/* unused harmony export mapGetters */
/* unused harmony export mapActions */
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (false) {}

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (false) {}

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (false) {}
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (false) {}

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (false) {}
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (false) {}
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    false
  ) {}
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (false) {}
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (false) {}
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (false) {}

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (false) {}

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (false) {}
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (false) {}
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (false) {}

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (false) {}
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (false) {}
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {}
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ }),

/***/ "m/Uw":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("fGh/");
var document = __webpack_require__("41F1").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "miGZ":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "n+5k":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"3636.8","height":"562.5","viewBox":"-24.1 259.3 3636.8 562.5"}},[_c('path',{attrs:{"d":"M1729.2 423.4l-159.9 93.5v228.7l104.6 73.2 160.6-97.8V499.1l-105.3-75.7zm14.6 339.6l-83-50.6V481.9l83 50.6V763z"}}),_c('path',{attrs:{"d":"M1834 732.5v-43.8h-90.2v60.6c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.1 12.8-45.5 12-45.5-26.4zM1879.5 376.8l71.1-49c32.9 16.1 57.4 49.7 40.5 86.4l-79.5 55.1c23-19.8 14.6-66.5-32.1-92.5zM1969.8 732.2v-43.8h-90.2V749c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.2 12.8-45.5 12-45.5-26.4z"}}),_c('path',{attrs:{"d":"M1969.8 717.5V469.3l-90.3 55v193.2zM796.4 651V310.4l-90.2 55v220.7z"}}),_c('path',{attrs:{"d":"M796.4 721.2V546.7l-90.2-64.8v239.3z"}}),_c('path',{attrs:{"d":"M796.4 766.8v-45.6h-90.2v100.6zM706.2 365.4l-42.6 26.4 62 2.6z"}}),_c('path',{attrs:{"d":"M663.6 391.8s42.6 2.4 42.6 32.1c0 29.7 19.4-19.7 19.4-19.7l-5-40.3-57 27.9zM796.4 310.4s-2.1 69.1 41.8 91.9h-57.5l15.7-91.9zM1523 648V307.4l-90.3 55v220.8z"}}),_c('path',{attrs:{"d":"M1523 718.2V543.7l-90.3-64.8V718.2z"}}),_c('path',{attrs:{"d":"M1523 763.8v-45.6h-90.3v100.6zM1432.7 362.4l-42.6 26.4 62 2.7z"}}),_c('path',{attrs:{"d":"M1390.1 388.8s42.6 2.4 42.6 32.1 19.4-19.7 19.4-19.7l-5-40.3-57 27.9zM1523 307.4s-2.1 69.1 41.8 91.9h-57.5l15.7-91.9z"}}),_c('g',[_c('path',{attrs:{"d":"M3570.8 648V307.4l-90.2 55v220.8z"}}),_c('path',{attrs:{"d":"M3570.8 718.2V543.7l-90.2-64.8V718.2z"}}),_c('path',{attrs:{"d":"M3570.8 763.8v-45.6h-90.2v100.6zM3480.6 362.4l-42.6 26.4 62 2.7z"}}),_c('path',{attrs:{"d":"M3438 388.8s42.6 2.4 42.6 32.1 19.4-19.7 19.4-19.7l-5-40.3-57 27.9zM3570.8 307.4s-2.1 69.1 41.8 91.9h-57.5l15.7-91.9z"}})]),_c('g',[_c('path',{attrs:{"d":"M945.5 708.4c0 23 30.7 58.5 80.2 58.5-30.5 19.5-77.3 6.1-77.3 6.1l-24.5-33.4 21.6-31.2z"}}),_c('path',{attrs:{"d":"M986.9 758.8c25.1 10.5 72-7.1 106.4-34.2v3.1l-76.6 52.6-29.8-21.5zM1014.4 423.1l-160.9 94.1v230.2l92 61.1V482l92.3 55.9 82.5-38.7z"}}),_c('path',{attrs:{"d":"M1025.7 766.9l-24.9 4.3-48.7-14.9 2.1-18.6-45.8-16.3v28.2c0 15.5 4.2 29.8 11 41.6l41.8 27.8 116.7-81.4c-6.9 4.6-44.9 29.3-52.2 29.3z"}}),_c('path',{attrs:{"d":"M1093.3 727.8V715s-49.9 47.1-88.5 47.1 9.9 14.3 9.9 14.3l78.6-48.6zM1084.7 509.2l-160.9 94h17.7l178.8-104"}})]),_c('g',[_c('path',{attrs:{"d":"M2949.8 708.2c0 23 30.7 58.5 80.2 58.5-30.5 19.5-77.3 6.1-77.3 6.1l-24.5-33.4 21.6-31.2z"}}),_c('path',{attrs:{"d":"M2991.2 758.6c25.1 10.5 72-7.1 106.4-34.2v3.1l-76.6 52.6-29.8-21.5zM3018.7 422.9L2857.8 517v230.2l92 61.1V481.8l92.3 55.9 82.5-38.7z"}}),_c('path',{attrs:{"d":"M3029.9 766.7L3005 771l-48.7-14.9 2.1-18.6-45.8-16.3v28.2c0 15.5 4.2 29.8 11 41.6l41.8 27.8 116.7-81.4c-6.8 4.6-44.9 29.3-52.2 29.3z"}}),_c('path',{attrs:{"d":"M3097.6 727.6v-12.8s-49.9 47.1-88.5 47.1 9.9 14.3 9.9 14.3l78.6-48.6zM3089 509l-160.9 94h17.7l178.8-104"}})]),_c('g',[_c('path',{attrs:{"d":"M2036.8 511.1v43.8h90.2v-60.6c0-35.1-21.6-64.7-48.7-69.5l-87 59.9c19.1-12.8 45.5-12 45.5 26.4zM2127 732.2v-43.8h-90.2V749c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.1 12.8-45.5 12-45.5-26.4zM2301.5 732.2v-43.8h-90.2V749c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.2 12.8-45.5 12-45.5-26.4z"}}),_c('path',{attrs:{"d":"M2127 717.9V530.4l-90.2-51.8V717.9zM2211.6 511.1v43.8h90.2v-60.6c0-35.1-21.6-64.7-48.7-69.5l-87 59.9c19.2-12.8 45.5-12 45.5 26.4z"}}),_c('path',{attrs:{"d":"M2301.9 717.9V530.4l-90.3-51.8V717.9zM2250.658 426.344l5.227 8.525-129.495 79.398-5.227-8.525z"}})]),_c('g',[_c('path',{attrs:{"d":"M385.1 511.8v43.8h90.2V495c0-35.1-21.6-64.7-48.7-69.5l-87 59.9c19.1-12.7 45.5-11.9 45.5 26.4zM475.3 733v-43.8h-90.2v60.6c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.1 12.7-45.5 11.9-45.5-26.4zM649.8 733v-43.8h-90.2v60.6c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.2 12.7-45.5 11.9-45.5-26.4z"}}),_c('path',{attrs:{"d":"M475.3 718.7V531.1l-90.2-51.8v239.4zM559.9 511.8v43.8h90.2V495c0-35.1-21.6-64.7-48.7-69.5l-87 59.9c19.2-12.7 45.5-11.9 45.5 26.4z"}}),_c('path',{attrs:{"d":"M650.2 718.7V531.1l-90.3-51.8v239.4zM598.929 427.146l5.227 8.525L474.66 515.07l-5.227-8.525z"}})]),_c('g',[_c('path',{attrs:{"d":"M3152.4 511.4v43.8h90.2v-60.6c0-35.1-21.6-64.7-48.7-69.5l-87 59.9c19.2-12.8 45.5-12 45.5 26.4zM3242.7 732.5v-43.8h-90.2v60.6c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.2 12.8-45.5 12-45.5-26.4zM3417.1 732.5v-43.8h-90.2v60.6c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.1 12.8-45.5 12-45.5-26.4z"}}),_c('path',{attrs:{"d":"M3242.7 718.2V530.7l-90.2-51.8V718.2zM3327.3 511.4v43.8h90.2v-60.6c0-35.1-21.6-64.7-48.7-69.5l-87 59.9c19.1-12.8 45.5-12 45.5 26.4z"}}),_c('path',{attrs:{"d":"M3417.5 718.2V530.7l-90.2-51.8V718.2zM3366.284 426.576l5.227 8.525-129.494 79.398-5.227-8.525z"}})]),_c('g',[_c('path',{attrs:{"d":"M2367.9 511.4v43.8h90.2v-60.6c0-35.1-21.6-64.7-48.7-69.5l-87 59.9c19.1-12.7 45.5-11.9 45.5 26.4zM2458.1 732.6v-43.8h-90.2v60.6c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.1 12.7-45.5 11.9-45.5-26.4zM2632.5 732.6v-43.8h-90.2v60.6c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.1 12.7-45.5 11.9-45.5-26.4z"}}),_c('path',{attrs:{"d":"M2458.1 718.3V530.7l-90.2-51.8v239.4zM2542.7 511.4v43.8h90.2v-60.6c0-35.1-21.6-64.7-48.7-69.5l-87 59.9c19.1-12.7 45.5-11.9 45.5 26.4z"}}),_c('path',{attrs:{"d":"M2632.9 718.3V530.7l-90.2-51.8v239.4zM2581.647 426.655l5.227 8.525-129.494 79.398-5.227-8.525zM2809 732.6v-43.8h-90.2v60.6c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.1 12.7-45.5 11.9-45.5-26.4zM2719.2 511.4v43.8h90.2v-60.6c0-35.1-21.6-64.7-48.7-69.5l-87 59.9c19.2-12.7 45.5-11.9 45.5 26.4z"}}),_c('path',{attrs:{"d":"M2809.5 718.3V530.7l-90.3-51.8v239.4zM2758.157 426.634l5.227 8.525-129.495 79.398-5.227-8.525z"}})]),_c('g',[_c('path',{attrs:{"d":"M1257.5 734.8V691h-90.2v60.6c0 35.1 21.6 64.7 48.7 69.5l87-59.9c-19.2 12.7-45.5 11.9-45.5-26.4zM1166.1 506.5v43.8h90.2v-60.6c0-35.1-21.6-64.7-48.7-69.5l-87 59.9c19.1-12.8 45.5-12 45.5 26.4z"}}),_c('path',{attrs:{"d":"M1189.7 720.5l67.8-25.7V478.7l83 50.6 90.7-33.4-105.3-75.7-159.8 93.5v206.8z"}})]),_c('path',{attrs:{"d":"M292.9 728.7c-211.7 0-222.5-181.5-222.5-217.9 0-32.2 1.5-57.7 2.9-74.7l52.2-25.9V634l79.4-48.4v-37.1h105.4v-65.2H204.9V370.7l23.6-11.7 32.5 27.4 119-43.8-163.3-83.1-.1-.2-230.5 114.6-3.7 24.3c-.3 1.7-6.5 43.6-6.5 112.6 0 107.3 57.2 283.2 263.7 309.1l53.3-36.8v-.1l78.9-54.3h-78.9z"}})])}}};

/***/ }),

/***/ "n6P+":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("eOWL");
var anObject = __webpack_require__("ADe/");
var getKeys = __webpack_require__("/Lgp");

module.exports = __webpack_require__("lBnu") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "n7AZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLEAR_ERRORS; });
// export const MUTATION_TYPE = 'MUTATION_TYPE'
var UPDATE_ERRORS = 'UPDATE_ERRORS';
var UPDATE_MESSAGES = 'UPDATE_MESSAGES';
var CLEAR_MESSAGES = 'CLEAR_MESSAGES';
var CLEAR_ERRORS = 'CLEAR_ERRORS';

/***/ }),

/***/ "nZlA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "o3C2":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "oICS":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("ADe/");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "oiJE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("gtwY");
var global = __webpack_require__("41F1");
var ctx = __webpack_require__("8Xl/");
var classof = __webpack_require__("/1nD");
var $export = __webpack_require__("/6KZ");
var isObject = __webpack_require__("fGh/");
var aFunction = __webpack_require__("HD3J");
var anInstance = __webpack_require__("LuVv");
var forOf = __webpack_require__("s9UB");
var speciesConstructor = __webpack_require__("PK7I");
var task = __webpack_require__("cCv0").set;
var microtask = __webpack_require__("qg1s")();
var newPromiseCapabilityModule = __webpack_require__("WJTZ");
var perform = __webpack_require__("5tTa");
var promiseResolve = __webpack_require__("zafj");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("0Sp3")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("IUx0")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("sWB5")($Promise, PROMISE);
__webpack_require__("hXZv")(PROMISE);
Wrapper = __webpack_require__("TaGV")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("Clx3")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "p3oL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("soUE").polyfill();


/***/ }),

/***/ "pCvA":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "pE35":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(e,t){function i(e,t){var i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var r=n(a);return[i].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([r]).join("\n")}return[i].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var r=this[a][0];"number"==typeof r&&(n[r]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t],n=f[i.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](i.parts[a]);for(;a<i.parts.length;a++)n.parts.push(r(i.parts[a]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{for(var o=[],a=0;a<i.parts.length;a++)o.push(r(i.parts[a]));f[i.id]={id:i.id,refs:1,parts:o}}}}function a(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function r(e){var t,i,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(m)return h;n.parentNode.removeChild(n)}if(b){var r=p++;n=u||(u=a()),t=o.bind(null,n,r,!1),i=o.bind(null,n,r,!0)}else n=a(),t=s.bind(null,n),i=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else i()}}function o(e,t,i,n){var a=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var r=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function s(e,t){var i=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),a&&(i+="\n/*# sourceURL="+a.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=i(7),f={},c=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,m=!1,h=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,i){m=i;var a=d(e,t);return n(a),function(t){for(var i=[],r=0;r<a.length;r++){var o=a[r],s=f[o.id];s.refs--,i.push(s)}t?(a=d(e,t),n(a)):a=[];for(var r=0;r<i.length;r++){var s=i[r];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete f[s.id]}}}};var g=function(){var e=[];return function(t,i){return e[t]=i,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,i,n,a,r){var o,s=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,s=e.default);var d="function"==typeof s?s.options:s;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),a&&(d._scopeId=a);var f;if(r?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=f):n&&(f=n),f){var c=d.functional,u=c?d.render:d.beforeCreate;c?(d._injectStyles=f,d.render=function(e,t){return f.call(t),u(e,t)}):d.beforeCreate=u?[].concat(u,f):[f]}return{esModule:o,exports:s,options:d}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4);t.default=n.a,"undefined"!=typeof window&&window.Vue&&window.Vue.component("infinite-loading",n.a)},function(e,t,i){"use strict";function n(e){i(5)}var a=i(8),r=i(14),o=i(2),s=n,l=o(a.a,r.a,!1,s,"data-v-fb2c869e",null);t.a=l.exports},function(e,t,i){var n=i(6);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(1)("2249d7a7",n,!0)},function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,".infinite-loading-container[data-v-fb2c869e]{clear:both;text-align:center}.infinite-loading-container[data-v-fb2c869e] [class^=loading-]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.infinite-status-prompt[data-v-fb2c869e]{color:#666;font-size:14px;text-align:center;padding:10px 0}",""])},function(e,t){e.exports=function(e,t){for(var i=[],n={},a=0;a<t.length;a++){var r=t[a],o=r[0],s=r[1],l=r[2],d=r[3],f={id:e+":"+a,css:s,media:l,sourceMap:d};n[o]?n[o].parts.push(f):i.push(n[o]={id:o,parts:[f]})}return i}},function(e,t,i){"use strict";var n=i(9),a={STATE_CHANGER:["[Vue-infinite-loading warn]: emit `loaded` and `complete` event through component instance of `$refs` may cause error, so it will be deprecated soon, please use the `$state` argument instead (`$state` just the special `$event` variable):","\ntemplate:",'<infinite-loading @infinite="infiniteHandler"></infinite-loading>',"\nscript:\n...\ninfiniteHandler($state) {\n  ajax('https://www.example.com/api/news')\n    .then((res) => {\n      if (res.data.length) {\n        $state.loaded();\n      } else {\n        $state.complete();\n      }\n    });\n}\n...","","more details: https://github.com/PeachScript/vue-infinite-loading/issues/57#issuecomment-324370549"].join("\n"),INFINITE_EVENT:"[Vue-infinite-loading warn]: `:on-infinite` property will be deprecated soon, please use `@infinite` event instead."},r={INFINITE_LOOP:["[Vue-infinite-loading error]: executed the callback function more than 10 times for a short time, it looks like searched a wrong scroll wrapper that doest not has fixed height or maximum height, please check it. If you want to force to set a element as scroll wrapper ranther than automatic searching, you can do this:",'\n\x3c!-- add a special attribute for the real scroll wrapper --\x3e\n<div infinite-wrapper>\n  ...\n  \x3c!-- set force-use-infinite-wrapper to true --\x3e\n  <infinite-loading force-use-infinite-wrapper="true"></infinite-loading>\n</div>\n    ',"more details: https://github.com/PeachScript/vue-infinite-loading/issues/55#issuecomment-316934169"].join("\n")};t.a={name:"InfiniteLoading",data:function(){return{scrollParent:null,scrollHandler:null,isLoading:!1,isComplete:!1,isFirstLoad:!0,debounceTimer:null,debounceDuration:50,infiniteLoopChecked:!1,infiniteLoopTimer:null,continuousCallTimes:0}},components:{Spinner:n.a},computed:{isNoResults:{cache:!1,get:function(){var e=this.$slots["no-results"],t=e&&e[0].elm&&""===e[0].elm.textContent;return!this.isLoading&&this.isComplete&&this.isFirstLoad&&!t}},isNoMore:{cache:!1,get:function(){var e=this.$slots["no-more"],t=e&&e[0].elm&&""===e[0].elm.textContent;return!this.isLoading&&this.isComplete&&!this.isFirstLoad&&!t}}},props:{distance:{type:Number,default:100},onInfinite:Function,spinner:String,direction:{type:String,default:"bottom"},forceUseInfiniteWrapper:null},mounted:function(){var e=this;this.scrollParent=this.getScrollParent(),this.scrollHandler=function(e){this.isLoading||(clearTimeout(this.debounceTimer),e&&e.constructor===Event?this.debounceTimer=setTimeout(this.attemptLoad,this.debounceDuration):this.attemptLoad())}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler),this.$on("$InfiniteLoading:loaded",function(t){e.isFirstLoad=!1,e.isLoading&&e.$nextTick(e.attemptLoad.bind(null,!0)),t&&t.target===e||console.warn(a.STATE_CHANGER)}),this.$on("$InfiniteLoading:complete",function(t){e.isLoading=!1,e.isComplete=!0,e.$nextTick(function(){e.$forceUpdate()}),e.scrollParent.removeEventListener("scroll",e.scrollHandler),t&&t.target===e||console.warn(a.STATE_CHANGER)}),this.$on("$InfiniteLoading:reset",function(){e.isLoading=!1,e.isComplete=!1,e.isFirstLoad=!0,e.scrollParent.addEventListener("scroll",e.scrollHandler),setTimeout(e.scrollHandler,1)}),this.onInfinite&&console.warn(a.INFINITE_EVENT),this.stateChanger={loaded:function(){e.$emit("$InfiniteLoading:loaded",{target:e})},complete:function(){e.$emit("$InfiniteLoading:complete",{target:e})},reset:function(){e.$emit("$InfiniteLoading:reset",{target:e})}},this.$watch("forceUseInfiniteWrapper",function(){e.scrollParent=e.getScrollParent()})},deactivated:function(){this.isLoading=!1,this.scrollParent.removeEventListener("scroll",this.scrollHandler)},activated:function(){this.scrollParent.addEventListener("scroll",this.scrollHandler)},methods:{attemptLoad:function(e){var t=this,i=this.getCurrentDistance();!this.isComplete&&i<=this.distance&&this.$el.offsetWidth+this.$el.offsetHeight>0?(this.isLoading=!0,"function"==typeof this.onInfinite?this.onInfinite.call(null,this.stateChanger):this.$emit("infinite",this.stateChanger),!e||this.forceUseInfiniteWrapper||this.infiniteLoopChecked||(this.continuousCallTimes+=1,clearTimeout(this.infiniteLoopTimer),this.infiniteLoopTimer=setTimeout(function(){t.infiniteLoopChecked=!0},1e3),this.continuousCallTimes>10&&(console.error(r.INFINITE_LOOP),this.infiniteLoopChecked=!0))):this.isLoading=!1},getCurrentDistance:function(){var e=void 0;if("top"===this.direction)e=isNaN(this.scrollParent.scrollTop)?this.scrollParent.pageYOffset:this.scrollParent.scrollTop;else{e=this.$el.getBoundingClientRect().top-(this.scrollParent===window?window.innerHeight:this.scrollParent.getBoundingClientRect().bottom)}return e},getScrollParent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$el,t=void 0;return"BODY"===e.tagName?t=window:!this.forceUseInfiniteWrapper&&["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?t=e:(e.hasAttribute("infinite-wrapper")||e.hasAttribute("data-infinite-wrapper"))&&(t=e),t||this.getScrollParent(e.parentNode)}},destroyed:function(){this.isComplete||this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},function(e,t,i){"use strict";function n(e){i(10)}var a=i(12),r=i(13),o=i(2),s=n,l=o(a.a,r.a,!1,s,"data-v-6e1fd88f",null);t.a=l.exports},function(e,t,i){var n=i(11);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(1)("29881045",n,!0)},function(e,t,i){t=e.exports=i(0)(void 0),t.push([e.i,'.loading-wave-dots[data-v-6e1fd88f]{position:relative}.loading-wave-dots[data-v-6e1fd88f] .wave-item{position:absolute;top:50%;left:50%;display:inline-block;margin-top:-4px;width:8px;height:8px;border-radius:50%;-webkit-animation:loading-wave-dots-data-v-6e1fd88f linear 2.8s infinite;animation:loading-wave-dots-data-v-6e1fd88f linear 2.8s infinite}.loading-wave-dots[data-v-6e1fd88f] .wave-item:first-child{margin-left:-36px}.loading-wave-dots[data-v-6e1fd88f] .wave-item:nth-child(2){margin-left:-20px;-webkit-animation-delay:.14s;animation-delay:.14s}.loading-wave-dots[data-v-6e1fd88f] .wave-item:nth-child(3){margin-left:-4px;-webkit-animation-delay:.28s;animation-delay:.28s}.loading-wave-dots[data-v-6e1fd88f] .wave-item:nth-child(4){margin-left:12px;-webkit-animation-delay:.42s;animation-delay:.42s}.loading-wave-dots[data-v-6e1fd88f] .wave-item:last-child{margin-left:28px;-webkit-animation-delay:.56s;animation-delay:.56s}@-webkit-keyframes loading-wave-dots-data-v-6e1fd88f{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}@keyframes loading-wave-dots-data-v-6e1fd88f{0%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}10%{-webkit-transform:translateY(-6px);transform:translateY(-6px);background:#999}20%{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}to{-webkit-transform:translateY(0);transform:translateY(0);background:#bbb}}.loading-circles[data-v-6e1fd88f] .circle-item{width:5px;height:5px;-webkit-animation:loading-circles-data-v-6e1fd88f linear .75s infinite;animation:loading-circles-data-v-6e1fd88f linear .75s infinite}.loading-circles[data-v-6e1fd88f] .circle-item:first-child{margin-top:-14.5px;margin-left:-2.5px}.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(2){margin-top:-11.26px;margin-left:6.26px}.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(3){margin-top:-2.5px;margin-left:9.5px}.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(4){margin-top:6.26px;margin-left:6.26px}.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(5){margin-top:9.5px;margin-left:-2.5px}.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(6){margin-top:6.26px;margin-left:-11.26px}.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(7){margin-top:-2.5px;margin-left:-14.5px}.loading-circles[data-v-6e1fd88f] .circle-item:last-child{margin-top:-11.26px;margin-left:-11.26px}@-webkit-keyframes loading-circles-data-v-6e1fd88f{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}@keyframes loading-circles-data-v-6e1fd88f{0%{background:#dfdfdf}90%{background:#505050}to{background:#dfdfdf}}.loading-bubbles[data-v-6e1fd88f] .bubble-item{background:#666;-webkit-animation:loading-bubbles-data-v-6e1fd88f linear .75s infinite;animation:loading-bubbles-data-v-6e1fd88f linear .75s infinite}.loading-bubbles[data-v-6e1fd88f] .bubble-item:first-child{margin-top:-12.5px;margin-left:-.5px}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(2){margin-top:-9.26px;margin-left:8.26px}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(3){margin-top:-.5px;margin-left:11.5px}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(4){margin-top:8.26px;margin-left:8.26px}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(5){margin-top:11.5px;margin-left:-.5px}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(6){margin-top:8.26px;margin-left:-9.26px}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(7){margin-top:-.5px;margin-left:-12.5px}.loading-bubbles[data-v-6e1fd88f] .bubble-item:last-child{margin-top:-9.26px;margin-left:-9.26px}@-webkit-keyframes loading-bubbles-data-v-6e1fd88f{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}@keyframes loading-bubbles-data-v-6e1fd88f{0%{width:1px;height:1px;box-shadow:0 0 0 3px #666}90%{width:1px;height:1px;box-shadow:0 0 0 0 #666}to{width:1px;height:1px;box-shadow:0 0 0 3px #666}}.loading-default[data-v-6e1fd88f]{position:relative;border:1px solid #999;-webkit-animation:loading-rotating-data-v-6e1fd88f ease 1.5s infinite;animation:loading-rotating-data-v-6e1fd88f ease 1.5s infinite}.loading-default[data-v-6e1fd88f]:before{content:"";position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[data-v-6e1fd88f]{border:2px solid #777;border-right-color:transparent;-webkit-animation:loading-rotating-data-v-6e1fd88f linear .85s infinite;animation:loading-rotating-data-v-6e1fd88f linear .85s infinite}@-webkit-keyframes loading-rotating-data-v-6e1fd88f{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotating-data-v-6e1fd88f{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loading-bubbles[data-v-6e1fd88f],.loading-circles[data-v-6e1fd88f]{position:relative}.loading-bubbles[data-v-6e1fd88f] .bubble-item,.loading-circles[data-v-6e1fd88f] .circle-item{position:absolute;top:50%;left:50%;display:inline-block;border-radius:50%}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(2),.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(2){-webkit-animation-delay:93ms;animation-delay:93ms}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(3),.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(3){-webkit-animation-delay:.186s;animation-delay:.186s}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(4),.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(4){-webkit-animation-delay:.279s;animation-delay:.279s}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(5),.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(5){-webkit-animation-delay:.372s;animation-delay:.372s}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(6),.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(6){-webkit-animation-delay:.465s;animation-delay:.465s}.loading-bubbles[data-v-6e1fd88f] .bubble-item:nth-child(7),.loading-circles[data-v-6e1fd88f] .circle-item:nth-child(7){-webkit-animation-delay:.558s;animation-delay:.558s}.loading-bubbles[data-v-6e1fd88f] .bubble-item:last-child,.loading-circles[data-v-6e1fd88f] .circle-item:last-child{-webkit-animation-delay:.651s;animation-delay:.651s}',""])},function(e,t,i){"use strict";var n={BUBBLES:{render:function(e){return e("span",{attrs:{class:"loading-bubbles"}},Array.apply(Array,Array(8)).map(function(){return e("span",{attrs:{class:"bubble-item"}})}))}},CIRCLES:{render:function(e){return e("span",{attrs:{class:"loading-circles"}},Array.apply(Array,Array(8)).map(function(){return e("span",{attrs:{class:"circle-item"}})}))}},DEFAULT:{render:function(e){return e("i",{attrs:{class:"loading-default"}})}},SPIRAL:{render:function(e){return e("i",{attrs:{class:"loading-spiral"}})}},WAVEDOTS:{render:function(e){return e("span",{attrs:{class:"loading-wave-dots"}},Array.apply(Array,Array(5)).map(function(){return e("span",{attrs:{class:"wave-item"}})}))}}};t.a={name:"spinner",computed:{spinnerView:function(){return n[(this.spinner||"").toUpperCase()]||n.DEFAULT}},props:{spinner:String}}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.spinnerView,{tag:"component"})},a=[],r={render:n,staticRenderFns:a};t.a=r},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"infinite-loading-container"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]},[e._t("spinner",[i("spinner",{attrs:{spinner:e.spinner}})])],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isNoResults,expression:"isNoResults"}],staticClass:"infinite-status-prompt"},[e._t("no-results",[e._v("No results :(")])],2),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isNoMore,expression:"isNoMore"}],staticClass:"infinite-status-prompt"},[e._t("no-more",[e._v("No more data :)")])],2)])},a=[],r={render:n,staticRenderFns:a};t.a=r}])});

/***/ }),

/***/ "pLV6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) { var repeat, classify, classifyRE, hasConsole; }

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {}
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {}
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {}

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {}
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {}
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {}
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {}
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (false) { var perf; }

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) { var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnNonPresent, allowedGlobals; }

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) { var keyInLowerCase; }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? (undefined)
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) { var lowerCaseEvent; }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {}
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {} else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {}

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {}
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {}
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {}
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? undefined
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) { var hyphenatedKey; } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {}
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {}

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (false) {}
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {}
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {}
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {} else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {}
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {}
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (false) {}
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {}
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {}
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {} else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (false) { var key; }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {} else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {}
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {}

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {} else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {}

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (false
  ) {}
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {}

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {}
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {}
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {}

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {}
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {}
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {}

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {}
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    false
  ) {}

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {}

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (false) {}

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (false) { var binding, typeBinding, value$1; }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {}

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {}

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {}

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {}

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) { var name, opts; }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {}
    }
    if (false
    ) {}
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) { var res; }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) { var res; }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {}
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false
        ) {}
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (false) {}
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (false) {}
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (false) {}
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) {}
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (false) {}
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {}
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (false) {}
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {}
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (false) {}
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (false) {}
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (false) {}
      }
    } else {
      // literal attribute
      if (false) { var res; }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      false
    ) {}
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (false) {}
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (false
  ) {}

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (false) {}
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (false) {}

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {}

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {}

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (false) {}
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {}
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {}
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {}

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {}
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("pCvA")))

/***/ }),

/***/ "pgwR":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  var ctx = '@@InfiniteScroll';

  var throttle = function throttle(fn, delay) {
    var now, lastExec, timer, context, args; //eslint-disable-line

    var execute = function execute() {
      fn.apply(context, args);
      lastExec = now;
    };

    return function () {
      context = this;
      args = arguments;

      now = Date.now();

      if (timer) {
        clearTimeout(timer);
        timer = null;
      }

      if (lastExec) {
        var diff = delay - (now - lastExec);
        if (diff < 0) {
          execute();
        } else {
          timer = setTimeout(function () {
            execute();
          }, diff);
        }
      } else {
        execute();
      }
    };
  };

  var getScrollTop = function getScrollTop(element) {
    if (element === window) {
      return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
    }

    return element.scrollTop;
  };

  var getComputedStyle = document.defaultView.getComputedStyle;

  var getScrollEventTarget = function getScrollEventTarget(element) {
    var currentNode = element;
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
      var overflowY = getComputedStyle(currentNode).overflowY;
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode;
      }
      currentNode = currentNode.parentNode;
    }
    return window;
  };

  var getVisibleHeight = function getVisibleHeight(element) {
    if (element === window) {
      return document.documentElement.clientHeight;
    }

    return element.clientHeight;
  };

  var getElementTop = function getElementTop(element) {
    if (element === window) {
      return getScrollTop(window);
    }
    return element.getBoundingClientRect().top + getScrollTop(window);
  };

  var isAttached = function isAttached(element) {
    var currentNode = element.parentNode;
    while (currentNode) {
      if (currentNode.tagName === 'HTML') {
        return true;
      }
      if (currentNode.nodeType === 11) {
        return false;
      }
      currentNode = currentNode.parentNode;
    }
    return false;
  };

  var doBind = function doBind() {
    if (this.binded) return; // eslint-disable-line
    this.binded = true;

    var directive = this;
    var element = directive.el;

    var throttleDelayExpr = element.getAttribute('infinite-scroll-throttle-delay');
    var throttleDelay = 200;
    if (throttleDelayExpr) {
      throttleDelay = Number(directive.vm[throttleDelayExpr] || throttleDelayExpr);
      if (isNaN(throttleDelay) || throttleDelay < 0) {
        throttleDelay = 200;
      }
    }
    directive.throttleDelay = throttleDelay;

    directive.scrollEventTarget = getScrollEventTarget(element);
    directive.scrollListener = throttle(doCheck.bind(directive), directive.throttleDelay);
    directive.scrollEventTarget.addEventListener('scroll', directive.scrollListener);

    this.vm.$on('hook:beforeDestroy', function () {
      directive.scrollEventTarget.removeEventListener('scroll', directive.scrollListener);
    });

    var disabledExpr = element.getAttribute('infinite-scroll-disabled');
    var disabled = false;

    if (disabledExpr) {
      this.vm.$watch(disabledExpr, function (value) {
        directive.disabled = value;
        if (!value && directive.immediateCheck) {
          doCheck.call(directive);
        }
      });
      disabled = Boolean(directive.vm[disabledExpr]);
    }
    directive.disabled = disabled;

    var distanceExpr = element.getAttribute('infinite-scroll-distance');
    var distance = 0;
    if (distanceExpr) {
      distance = Number(directive.vm[distanceExpr] || distanceExpr);
      if (isNaN(distance)) {
        distance = 0;
      }
    }
    directive.distance = distance;

    var immediateCheckExpr = element.getAttribute('infinite-scroll-immediate-check');
    var immediateCheck = true;
    if (immediateCheckExpr) {
      immediateCheck = Boolean(directive.vm[immediateCheckExpr]);
    }
    directive.immediateCheck = immediateCheck;

    if (immediateCheck) {
      doCheck.call(directive);
    }

    var eventName = element.getAttribute('infinite-scroll-listen-for-event');
    if (eventName) {
      directive.vm.$on(eventName, function () {
        doCheck.call(directive);
      });
    }
  };

  var doCheck = function doCheck(force) {
    var scrollEventTarget = this.scrollEventTarget;
    var element = this.el;
    var distance = this.distance;

    if (force !== true && this.disabled) return; //eslint-disable-line
    var viewportScrollTop = getScrollTop(scrollEventTarget);
    var viewportBottom = viewportScrollTop + getVisibleHeight(scrollEventTarget);

    var shouldTrigger = false;

    if (scrollEventTarget === element) {
      shouldTrigger = scrollEventTarget.scrollHeight - viewportBottom <= distance;
    } else {
      var elementBottom = getElementTop(element) - getElementTop(scrollEventTarget) + element.offsetHeight + viewportScrollTop;

      shouldTrigger = viewportBottom + distance >= elementBottom;
    }

    if (shouldTrigger && this.expression) {
      this.expression();
    }
  };

  var InfiniteScroll = {
    bind: function bind(el, binding, vnode) {
      el[ctx] = {
        el: el,
        vm: vnode.context,
        expression: binding.value
      };
      var args = arguments;
      el[ctx].vm.$on('hook:mounted', function () {
        el[ctx].vm.$nextTick(function () {
          if (isAttached(el)) {
            doBind.call(el[ctx], args);
          }

          el[ctx].bindTryCount = 0;

          var tryBind = function tryBind() {
            if (el[ctx].bindTryCount > 10) return; //eslint-disable-line
            el[ctx].bindTryCount++;
            if (isAttached(el)) {
              doBind.call(el[ctx], args);
            } else {
              setTimeout(tryBind, 50);
            }
          };

          tryBind();
        });
      });
    },
    unbind: function unbind(el) {
      if (el && el[ctx] && el[ctx].scrollEventTarget) el[ctx].scrollEventTarget.removeEventListener('scroll', el[ctx].scrollListener);
    }
  };

  var install = function install(Vue) {
    Vue.directive('InfiniteScroll', InfiniteScroll);
  };

  if (window.Vue) {
    window.infiniteScroll = InfiniteScroll;
    Vue.use(install); // eslint-disable-line
  }

  InfiniteScroll.install = install;

  return InfiniteScroll;

}));

/***/ }),

/***/ "phsM":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "qA3Z":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "qNvu":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("/6KZ");
var core = __webpack_require__("TaGV");
var fails = __webpack_require__("/Vl9");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "qNwz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Kz1y");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lOrp");
/* harmony import */ var _store_mutation_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("n7AZ");




/* harmony default export */ __webpack_exports__["a"] = ({
  computed: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__[/* mapState */ "b"])({
    api: function api(state) {
      return state.api;
    }
  }))
});

/***/ }),

/***/ "qacR":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "qg1s":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("41F1");
var macrotask = __webpack_require__("cCv0").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("g2rQ")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "qjbh":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _affix = __webpack_require__(1);

var _affix2 = _interopRequireDefault(_affix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plugin = {};

Plugin.install = function (Vue) {
  if (Plugin.install.installed) return;

  Vue.component('affix', _affix2.default);
};

if (typeof window !== 'undefined' && window.Vue) {
  Plugin.install(window.Vue);
}

exports.default = Plugin;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(9),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("044fa194", content, true);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".vue-affix{position:relative}.affix{position:fixed}.affix-bottom{position:relative}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: {
    /**
     * The relative element selector string. The relative element is
     * the element you want your affix to be related to, as it will
     * not be related to the window. The element will be affixed when
     * the window reaches the relative element.
     *
     * @example '#contact'
     * @type {String}
     */
    relativeElementSelector: {
      type: String,
      required: true
    },

    /**
     * This is the offset margin between the top/bottom of the window
     * before the affix is applied.
     *
     * @type {Object}
     */
    offset: {
      type: Object,
      default: function _default() {
        return {
          top: 40,
          bottom: 40
        };
      }
    },

    /**
     * Checks if the plugin should be enabled/disabled based
     * on true/false, good for conditional rendering like
     * mobile behavior.
     *
     * @type {Boolean}
     */
    enabled: {
      type: Boolean,
      default: true
    },

    /**
     * Sets if the affix should be 'scrollable' when it is
     * taller than the viewport or if it should always be
     * affixed to the top until it reaches the end of the
     * relative element.
     *
     * @type {Boolean}
     */
    scrollAffix: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    /**
     * Computes the relative element selector to an element.
     *
     * @return {Element} document.querySelector(this.relativeElementSelector)
     */
    relativeElement: function relativeElement() {
      return document.querySelector(this.relativeElementSelector);
    }
  },

  data: function data() {
    return {
      affixHeight: null,
      affixBottomPos: null,
      affixRect: null,
      relativeElmBottomPos: null,
      relativeElmOffsetTop: null,
      topPadding: null,
      lastState: null,
      currentState: null,
      currentScrollAffix: null,
      distanceFromTop: window.pageYOffset,
      lastDistanceFromTop: window.pageYOffset,
      scrollingUp: null,
      scrollingDown: null
    };
  },


  methods: {
    setDynamicVariables: function setDynamicVariables() {
      this.distanceFromTop = window.pageYOffset;
      this.affixRect = this.$el.getBoundingClientRect();
      this.affixHeight = this.$el.offsetHeight;
      this.affixBottomPos = this.distanceFromTop + this.affixRect.bottom;
      this.screenBottomPos = this.distanceFromTop + window.innerHeight;
      this.relativeElmBottomPos = this.distanceFromTop + this.relativeElement.getBoundingClientRect().bottom;
      this.relativeElmOffsetTop = this.getOffsetTop(this.relativeElement);
    },
    onScroll: function onScroll() {
      if (!this.enabled) {
        this.removeClasses();
        return;
      }

      this.setDynamicVariables();

      if (this.affixHeight + this.offset.top >= this.relativeElement.offsetHeight) {
        return;
      }

      this.handleAffix();
    },
    handleAffix: function handleAffix() {
      if (this.scrollAffix && this.affixHeight > window.innerHeight) {
        this.setScrollingDirection();

        if (this.currentScrollAffix === 'scrollaffix-top') {
          if (this.distanceFromTop + this.offset.top >= this.affixInitialTop) {
            this.setScrollAffixScrolling();
          }
        }

        if (this.scrollingDown && this.currentScrollAffix === 'scrollaffix-scrolling') {
          if (this.screenBottomPos >= this.affixBottomPos + this.offset.bottom && this.screenBottomPos < this.relativeElmBottomPos) {
            this.setScrollAffixDown();
          }
        }

        if (this.scrollingUp && this.currentScrollAffix === 'scrollaffix-scrolling') {
          if (this.distanceFromTop + this.offset.top + this.topPadding < this.affixRect.top + this.distanceFromTop) {
            this.setScrollAffixUp();
          }
        }

        if (this.scrollingDown && this.currentScrollAffix === 'scrollaffix-down') {
          if (this.screenBottomPos >= this.relativeElmBottomPos + this.offset.bottom) {
            this.setScrollAffixBottom();
          }
        }

        if (this.currentScrollAffix === 'scrollaffix-bottom' && this.screenBottomPos < this.relativeElmBottomPos) {
          this.setScrollAffixScrolling();
        }

        if (this.scrollingUp && this.currentScrollAffix === 'scrollaffix-down' || this.scrollingDown && this.currentScrollAffix === 'scrollaffix-up') {
          this.setScrollAffixScrolling();
        }

        if (this.scrollingUp && this.currentScrollAffix === 'scrollaffix-up' && this.distanceFromTop < this.relativeElmOffsetTop - this.offset.top) {
          this.setScrollAffixTop();
        }

        this.lastScrollAffixState = this.currentScrollAffix;
        this.lastDistanceFromTop = this.distanceFromTop;

        return;
      }

      if (this.distanceFromTop < this.relativeElmOffsetTop - this.offset.top) {
        this.setAffixTop();
      }

      if (this.distanceFromTop >= this.relativeElmOffsetTop - this.offset.top && this.relativeElmBottomPos - this.offset.bottom >= this.distanceFromTop + this.topPadding + this.affixHeight + this.offset.top) {
        this.setAffix();
      }

      if (this.relativeElmBottomPos - this.offset.bottom < this.distanceFromTop + this.topPadding + this.affixHeight + this.offset.top) {
        this.setAffixBottom();
      }

      this.lastState = this.currentState;
    },


    /**
     * Sets the initial position of the affixed element
     * when scrollAffix is set to true.
     */
    initScrollAffix: function initScrollAffix() {
      if (this.distanceFromTop < this.affixInitialTop - this.offset.top) {
        this.setScrollAffixTop();
      } else if (this.screenBottomPos >= this.affixBottomPos + this.offset.bottom && this.screenBottomPos < this.relativeElmBottomPos) {
        this.setScrollAffixDown();
      } else if (this.screenBottomPos >= this.relativeElmBottomPos) {
        this.setScrollAffixBottom();
      } else {
        this.setScrollAffixScrolling();
      }
    },


    /**
     * Sets te currentScrollAffix to 'scrolling' to indicate that
     * the window is scrolling inside the affixed element.
     */
    setScrollAffixScrolling: function setScrollAffixScrolling() {
      this.currentScrollAffix = 'scrollaffix-scrolling';
      this.$el.style.top = this.affixRect.top + this.distanceFromTop - this.affixInitialTop + 'px';
      this.$el.style.bottom = 'auto';
      this.removeClasses();
      this.emitEvent();
    },


    /**
     * Sets the position of the affixed element to be fixed
     * at the top of the screen, as you are scrolling UP.
     */
    setScrollAffixUp: function setScrollAffixUp() {
      this.currentScrollAffix = 'scrollaffix-up';

      if (this.currentScrollAffix !== this.lastState) {
        this.$el.style.top = this.topPadding + this.offset.top + 'px';
        this.$el.style.bottom = 'auto';
        this.removeClasses();
        this.emitEvent();
        this.$el.classList.add('affix');
      }
    },


    /**
     * Sets the position of the affixed element to be fixed
     * at the bottom of the screen, as you are scrolling DOWN.
     */
    setScrollAffixDown: function setScrollAffixDown() {
      this.currentScrollAffix = 'scrollaffix-down';

      if (this.currentScrollAffix !== this.lastState) {
        this.$el.style.bottom = this.offset.bottom + 'px';
        this.$el.style.top = 'auto';
        this.removeClasses();
        this.emitEvent();
        this.$el.classList.add('affix');
      }
    },


    /**
     * Sets the position of the affixed element to be at the
     * most top.
     */
    setScrollAffixTop: function setScrollAffixTop() {
      this.currentScrollAffix = 'scrollaffix-top';
      this.$el.style.top = 0;
      this.$el.style.bottom = 'auto';
      this.removeClasses();
      this.emitEvent();
    },


    /**
     * Sets the position of the affixed element to be at the
     * most bottom.
     */
    setScrollAffixBottom: function setScrollAffixBottom() {
      this.currentScrollAffix = 'scrollaffix-bottom';
      this.$el.style.top = this.relativeElmBottomPos - this.affixInitialTop - this.affixHeight + 'px';
      this.$el.style.bottom = 'auto';
      this.removeClasses();
      this.emitEvent();
    },


    /**
     * Sets the direction the window is being scrolled.
     */
    setScrollingDirection: function setScrollingDirection() {
      if (this.distanceFromTop > this.lastDistanceFromTop) {
        this.scrollingDown = true;
        this.scrollingUp = false;
      } else {
        this.scrollingUp = true;
        this.scrollingDown = false;
      }
    },


    /**
     * Sets the affix-top class to indicate that the element is
     * above the relative element.
     */
    setAffixTop: function setAffixTop() {
      this.currentState = 'affix-top';

      if (this.currentState !== this.lastState) {
        this.emitEvent();
        this.removeClasses();
        this.$el.classList.remove('affix');
        this.$el.classList.add('affix-top');
        this.$el.style.top = null;
      }
    },


    /**
     * Sets the affix class to indicate that the element is
     * fixed to the top of the relative element.
     */
    setAffix: function setAffix() {
      this.currentState = 'affix';
      this.$el.style.top = this.topPadding + this.offset.top + 'px';

      if (this.currentState !== this.lastState) {
        this.emitEvent();
        this.removeClasses();
        this.$el.classList.add('affix');
      }
    },


    /**
     * Sets the affix-bottom class to indicate that the element is
     * below the relative element.
     */
    setAffixBottom: function setAffixBottom() {
      this.currentState = 'affix-bottom';
      this.$el.style.top = this.relativeElement.offsetHeight - this.affixHeight - this.offset.bottom - this.topPadding + 'px';

      if (this.currentState !== this.lastState) {
        this.emitEvent();
        this.removeClasses();
        this.$el.classList.add('affix-bottom');
      }
    },


    /**
     * Removes all three affix classes.
     */
    removeClasses: function removeClasses() {
      this.$el.classList.remove('affix-top');
      this.$el.classList.remove('affix');
      this.$el.classList.remove('affix-bottom');
    },


    /**
     * Emits the events based on the current state of the affix.
     */
    emitEvent: function emitEvent() {
      if (this.scrollAffix && this.lastScrollAffixState) {
        this.$emit(this.currentScrollAffix.replace('-', ''));
      }

      if (this.lastState) {
        this.$emit(this.currentState.replace('-', ''));
      }
    },


    /**
     * Gets the top offset position of an element in the document.
     *
     * @param  {Element} element
     * @return {Number}
     */
    getOffsetTop: function getOffsetTop(element) {
      var yPosition = 0;
      var nextElement = element;

      while (nextElement) {
        yPosition += nextElement.offsetTop;
        nextElement = nextElement.offsetParent;
      }

      return yPosition;
    }
  },

  mounted: function mounted() {
    this.$el.classList.add('vue-affix');
    this.affixInitialTop = this.getOffsetTop(this.$el);
    this.topPadding = this.affixInitialTop - this.getOffsetTop(this.relativeElement);

    this.setDynamicVariables();

    if (this.scrollAffix) this.initScrollAffix();

    this.onScroll();
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ })
/******/ ]);
});

/***/ }),

/***/ "s9UB":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("8Xl/");
var call = __webpack_require__("oICS");
var isArrayIter = __webpack_require__("Ng5M");
var anObject = __webpack_require__("ADe/");
var toLength = __webpack_require__("gou2");
var getIterFn = __webpack_require__("VJcA");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "sWB5":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("eOWL").f;
var has = __webpack_require__("qA3Z");
var TAG = __webpack_require__("0Sp3")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "soUE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */



function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function polyfill() {
  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

module.exports = {
  assign: assign,
  polyfill: polyfill
};


/***/ }),

/***/ "tZmG":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("wFa1"), __esModule: true };

/***/ }),

/***/ "tbIA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("/Lgp");
var gOPS = __webpack_require__("phsM");
var pIE = __webpack_require__("kBaS");
var toObject = __webpack_require__("dCrc");
var IObject = __webpack_require__("6wgB");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("/Vl9")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "tjUo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Kz1y");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("tZmG");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ../node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("PSh9");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ../node_modules/promise-polyfill/lib/index.js
var lib = __webpack_require__("/fOQ");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/promise-polyfill.js


window.Promise = window.Promise || lib_default.a;
// EXTERNAL MODULE: ../node_modules/es6-object-assign/auto.js
var auto = __webpack_require__("p3oL");

// EXTERNAL MODULE: ../node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("pLV6");

// CONCATENATED MODULE: ../node_modules/vue-resource/dist/vue-resource.esm.js
/*!
 * vue-resource v1.5.0
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = Promise$1.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p$1 = PromiseObj.prototype;

p$1.bind = function (context) {
    this.context = context;
    return this;
};

p$1.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p$1.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p$1.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return Promise.reject(reason);
    }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var vue_resource_esm_hasOwnProperty = ref.hasOwnProperty;
var ref$1 = [];
var slice = ref$1.slice;
var debug = false, ntick;

var inBrowser = typeof window !== 'undefined';

function Util (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function trimEnd(str, chars) {

    if (str && chars === undefined) {
        return str.replace(/\s+$/, '');
    }

    if (!str || !chars) {
        return str;
    }

    return str.replace(new RegExp(("[" + chars + "]+$")), '');
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (vue_resource_esm_hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var vue_resource_esm_assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

function root (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
        url = trimEnd(options$$1.root, '/') + '/' + url;
    }

    return url;
}

/**
 * Query Parameter Transform.
 */

function query (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^{}]+)\}|([^{}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

function template (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

function xdrClient (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
                var type = ref.type;


                var status = 0;

                if (type === 'load') {
                    status = 200;
                } else if (type === 'error') {
                    status = 500;
                }

                resolve(request.respondWith(xdr.responseText, {status: status}));
            };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

function cors (request) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

}

/**
 * Form data Interceptor.
 */

function vue_resource_esm_form (request) {

    if (isFormData(request.body)) {
        request.headers.delete('Content-Type');
    } else if (isObject(request.body) && request.emulateJSON) {
        request.body = Url.params(request.body);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

}

/**
 * JSON Interceptor.
 */

function json (request) {

    var type = request.headers.get('Content-Type') || '';

    if (isObject(request.body) && type.indexOf('application/json') === 0) {
        request.body = JSON.stringify(request.body);
    }

    return function (response) {

        return response.bodyText ? when(response.text(), function (text) {

            var type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    };
}

function isJson(str) {

    var start = str.match(/^\s*(\[|\{)/);
    var end = {'[': /]\s*$/, '{': /}\s*$/};

    return start && end[start[1]].test(str);
}

/**
 * JSONP client (Browser).
 */

function jsonpClient (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

/**
 * JSONP Interceptor.
 */

function jsonp (request) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

}

/**
 * Before Interceptor.
 */

function before (request) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

}

/**
 * HTTP method override Interceptor.
 */

function method (request) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

}

/**
 * Header Interceptor.
 */

function header (request) {

    var headers = vue_resource_esm_assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

}

/**
 * XMLHttp client (Browser).
 */

function xhrClient (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

                var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                });

                each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                    response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
                });

                resolve(response);
            };

        request.abort = function () { return xhr.abort(); };

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        // deprecated use downloadProgress
        if (isFunction(request.progress) && request.method === 'GET') {
            xhr.addEventListener('progress', request.progress);
        }

        if (isFunction(request.downloadProgress)) {
            xhr.addEventListener('progress', request.downloadProgress);
        }

        // deprecated use uploadProgress
        if (isFunction(request.progress) && /^(POST|PUT)$/i.test(request.method)) {
            xhr.upload.addEventListener('progress', request.progress);
        }

        if (isFunction(request.uploadProgress) && xhr.upload) {
            xhr.upload.addEventListener('progress', request.uploadProgress);
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
}

/**
 * Http client (Node).
 */

function nodeClient (request) {

    var client = __webpack_require__(0);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                status: resp.statusCode,
                statusText: trim(resp.statusMessage)
            });

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
}

/**
 * Base client.
 */

function Client (context) {

    var reqHandlers = [sendRequest], resHandlers = [];

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        while (reqHandlers.length) {

            var handler = reqHandlers.pop();

            if (isFunction(handler)) {

                var response = (void 0), next = (void 0);

                response = handler.call(context, request, function (val) { return next = val; }) || next;

                if (isObject(response)) {
                    return new PromiseObj(function (resolve, reject) {

                        resHandlers.forEach(function (handler) {
                            response = when(response, function (response) {
                                return handler.call(context, response) || response;
                            }, reject);
                        });

                        when(response, resolve, reject);

                    }, context);
                }

                if (isFunction(response)) {
                    resHandlers.unshift(response);
                }

            } else {
                warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
            }
        }
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    return client(request);
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value) {

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name) {
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll () {
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

Object.defineProperty(Response.prototype, 'data', {

    get: function get() {
        return this.body;
    },

    set: function set(body) {
        this.body = body;
    }

});

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    vue_resource_esm_assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl () {
    return Url(this);
};

Request.prototype.getBody = function getBody () {
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, vue_resource_esm_assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: vue_resource_esm_form, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(vue_resource_esm_assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body, options$$1) {
        return this(vue_resource_esm_assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = vue_resource_esm_assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: vue_resource_esm_assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = vue_resource_esm_assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = vue_resource_esm_assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function vue_resource_esm_plugin(Vue) {

    if (vue_resource_esm_plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vue_resource_esm_plugin);
}

/* harmony default export */ var vue_resource_esm = (vue_resource_esm_plugin);


// CONCATENATED MODULE: ../node_modules/vue-router/dist/vue-router.esm.js
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function vue_router_esm_warn (condition, message) {
  if (false) {}
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {}
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && vue_router_esm_warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var vue_router_esm_inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = vue_router_esm_parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function vue_router_esm_parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(vue_router_esm_parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(vue_router_esm_parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (false) {}
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {}

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {}
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {}
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) { var keys; }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = vue_router_esm_assign({}, next);
    next._normalized = true;
    var params = vue_router_esm_assign(vue_router_esm_assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (false) {}
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function vue_router_esm_assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {}
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {}
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {}
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {}
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {}

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (false) {}
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = vue_router_esm_inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = vue_router_esm_inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && vue_router_esm_warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        vue_router_esm_warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (vue_router_esm_inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!vue_router_esm_inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {}
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (vue_router_esm_inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ var vue_router_esm = (VueRouter);

// EXTERNAL MODULE: ../node_modules/vuex-router-sync/index.js
var vuex_router_sync = __webpack_require__("YrAR");

// EXTERNAL MODULE: ./src/assets/svg/logo_style_1.svg
var logo_style_1 = __webpack_require__("Yo81");
var logo_style_1_default = /*#__PURE__*/__webpack_require__.n(logo_style_1);

// EXTERNAL MODULE: ./src/assets/svg/logo_style_2.svg
var logo_style_2 = __webpack_require__("Wk1c");
var logo_style_2_default = /*#__PURE__*/__webpack_require__.n(logo_style_2);

// EXTERNAL MODULE: ./src/assets/svg/logo_style_3.svg
var logo_style_3 = __webpack_require__("19JL");
var logo_style_3_default = /*#__PURE__*/__webpack_require__.n(logo_style_3);

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Logo.vue
//
//
//
//





/* harmony default export */ var Logo = ({
    props: {
        logoStyle: Number
    },
    components: {
        LogoStyle1: logo_style_1_default.a,
        LogoStyle2: logo_style_2_default.a,
        LogoStyle3: logo_style_3_default.a
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6db4452c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Logo.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('LogoStyle' + _vm.logoStyle,{tag:"component"})}
var staticRenderFns = []

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("Xm6T");

// CONCATENATED MODULE: ./src/components/Logo.vue
function injectStyle (context) {
  __webpack_require__("/w7j")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  Logo,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_Logo = (Component.exports);

// EXTERNAL MODULE: ./src/mixins/themeswitcher.js
var themeswitcher = __webpack_require__("TYgx");

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/LoadingOverlay.vue
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var LoadingOverlay = ({
    components: {
        Logo: components_Logo
    },
    mixins: [themeswitcher["a" /* default */]],

    props: {
        type: String
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1ab1879a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/LoadingOverlay.vue
var LoadingOverlay_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loading-overlay"},[_c('transition',{attrs:{"appear":"","name":"fade"}},[_c('div',{staticClass:"loading-text"},[_c('Logo',{staticClass:"loading-logo",attrs:{"logoStyle":Number(_vm.themeSwitcher.currentStyle)}}),_vm._v("\n            Loading your "+_vm._s(_vm.type)+"\n        ")],1)])],1)}
var LoadingOverlay_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/LoadingOverlay.vue
function LoadingOverlay_injectStyle (context) {
  __webpack_require__("k0wL")
}
/* script */


/* template */

/* template functional */
var LoadingOverlay_vue_template_functional_ = false
/* styles */
var LoadingOverlay_vue_styles_ = LoadingOverlay_injectStyle
/* scopeId */
var LoadingOverlay_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var LoadingOverlay_vue_module_identifier_ = null

var LoadingOverlay_Component = Object(component_normalizer["a" /* default */])(
  LoadingOverlay,
  LoadingOverlay_render,
  LoadingOverlay_staticRenderFns,
  LoadingOverlay_vue_template_functional_,
  LoadingOverlay_vue_styles_,
  LoadingOverlay_vue_scopeId_,
  LoadingOverlay_vue_module_identifier_
)

/* harmony default export */ var components_LoadingOverlay = (LoadingOverlay_Component.exports);

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Footer.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Footer = ({
    components: {
        LogoStyle1: logo_style_1_default.a
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-87b1dfa0","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Footer.vue
var Footer_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"footer"}},[_c('footer',[_c('div',{staticClass:"footer-wrapper"},[_c('router-link',{staticClass:"footer-logo-link",attrs:{"to":'/'}},[_c('LogoStyle1',{staticClass:"footer-logo"})],1),_vm._v(" "),_c('div',[_c('ul',{staticClass:"footer-ul"},[_c('li',{staticClass:"footer-li"},[_c('router-link',{staticClass:"footer-li-link",attrs:{"to":'/'}},[_vm._v("\n                            Terms of Use\n                        ")])],1),_vm._v(" "),_c('li',{staticClass:"footer-li"},[_c('router-link',{staticClass:"footer-li-link",attrs:{"to":'/'}},[_vm._v("\n                            Privacy Policy\n                        ")])],1),_vm._v(" "),_c('li',{staticClass:"footer-li"},[_c('router-link',{staticClass:"footer-li-link",attrs:{"to":'/'}},[_vm._v("\n                            Contact\n                        ")])],1)]),_vm._v(" "),_c('ul',{staticClass:"footer-ul"},[_c('li',{staticClass:"footer-li"},[_c('router-link',{staticClass:"footer-li-link",attrs:{"to":'/'}},[_vm._v("\n                            Tip Us\n                        ")])],1),_vm._v(" "),_c('li',{staticClass:"footer-li"},[_c('router-link',{staticClass:"footer-li-link",attrs:{"to":'/'}},[_vm._v("\n                            About Us\n                        ")])],1),_vm._v(" "),_c('li',{staticClass:"footer-li"},[_c('router-link',{staticClass:"footer-li-link",attrs:{"to":'/'}},[_vm._v("\n                            Source Code\n                        ")])],1)])])],1)])])}
var Footer_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/Footer.vue
/* script */


/* template */

/* template functional */
var Footer_vue_template_functional_ = false
/* styles */
var Footer_vue_styles_ = null
/* scopeId */
var Footer_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var Footer_vue_module_identifier_ = null

var Footer_Component = Object(component_normalizer["a" /* default */])(
  Footer,
  Footer_render,
  Footer_staticRenderFns,
  Footer_vue_template_functional_,
  Footer_vue_styles_,
  Footer_vue_scopeId_,
  Footer_vue_module_identifier_
)

/* harmony default export */ var components_Footer = (Footer_Component.exports);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("TcPG");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./src/assets/svg/settings_wheel.svg
var settings_wheel = __webpack_require__("kn9z");
var settings_wheel_default = /*#__PURE__*/__webpack_require__.n(settings_wheel);

// EXTERNAL MODULE: ./src/assets/svg/arrow.svg
var arrow = __webpack_require__("1Nlo");
var arrow_default = /*#__PURE__*/__webpack_require__.n(arrow);

// EXTERNAL MODULE: ./src/assets/svg/Design3_Top-Illustration.svg
var Design3_Top_Illustration = __webpack_require__("hjML");
var Design3_Top_Illustration_default = /*#__PURE__*/__webpack_require__.n(Design3_Top_Illustration);

// EXTERNAL MODULE: ./src/mixins/api.js
var api = __webpack_require__("qNwz");

// EXTERNAL MODULE: ./src/api/mutation-types.js
var mutation_types = __webpack_require__("5Rlk");

// EXTERNAL MODULE: ./src/api/action-types.js
var action_types = __webpack_require__("XiVm");

// CONCATENATED MODULE: ./src/themeswitcher/mutation-types.js
var SET_STYLE = 'SET_STYLE';
// EXTERNAL MODULE: ../node_modules/vue-affix/dist/vue-affix.js
var vue_affix = __webpack_require__("qjbh");
var vue_affix_default = /*#__PURE__*/__webpack_require__.n(vue_affix);

// EXTERNAL MODULE: ../node_modules/vue-slideout/lib/vue-slideout.js
var vue_slideout = __webpack_require__("BRJE");
var vue_slideout_default = /*#__PURE__*/__webpack_require__.n(vue_slideout);

// EXTERNAL MODULE: ../node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("lOrp");

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Navbar.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//














/* harmony default export */ var Navbar = ({
    mixins: [api["a" /* default */], themeswitcher["a" /* default */]],

    components: {
        SettingsWheel: settings_wheel_default.a,
        SettingsArrow: arrow_default.a,
        Slideout: vue_slideout_default.a,
        Logo: components_Logo,
        TopIllstration: Design3_Top_Illustration_default.a
    },
    data: function data() {
        return {
            expandedSwitcher: false,
            navDimensions: {
                height: 0,
                width: 0
            },
            loadAffix: false,
            scrolling: false,
            topOffset: 0,
            leftOffset: 0,
            zoomFactor: '100%'
        };
    },

    computed: extends_default()({
        categories: function categories() {
            var categoriesArray = [];

            for (var i = 0; i < this.api.categories.length; i++) {
                categoriesArray.push({
                    slug: this.api.categories[i].slug,
                    name: this.api.categories[i].name.toUpperCase()
                });
            }

            return categoriesArray;
        }
    }, Object(vuex_esm["b" /* mapState */])({
        currentStyle: function currentStyle(state) {
            return state.themeSwitcher.currentStyle;
        }
    })),
    methods: {
        toggleActiveExpand: function toggleActiveExpand() {
            this.expandedSwitcher = !this.expandedSwitcher;
        },
        selectTheme: function selectTheme(themeNumber) {
            this.$store.commit(SET_STYLE, {
                payload: themeNumber
            });
        },
        scrollHandler: function scrollHandler(state) {
            this.scrolling = state;
        },
        pushDesignMatomo: function pushDesignMatomo() {
            _paq.push(['setCustomDimension', 1, this.currentStyle]);
            _paq.push(['trackPageView']);
        },
        generateSeed: function generateSeed() {
            Date.prototype.getWeekNumber = function () {
                var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
                var dayNum = d.getUTCDay() || 7;
                d.setUTCDate(d.getUTCDate() + 4 - dayNum);
                var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
                return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
            };

            var date = Math.floor(new Date().getTime() / 1000 / 60 / 24 / 7 / 52);

            var mathSeedRandom = new Math.seedrandom(date);
            return {
                first: mathSeedRandom(),
                second: mathSeedRandom(),
                third: mathSeedRandom(),
                fourth: mathSeedRandom()
            };
        },
        generateImagePosition: function generateImagePosition() {
            if (this.currentStyle == 3) {
                var number = this.generateSeed();

                this.topOffset = number.first * 1000 * -1;
                this.leftOffset = number.second * 1000 * -1;

                this.zoomFactor = (80 + number.third * 100 * number.fourth).toString() + '%';

                /*this.topIllHeight = height * (number.third * wrapper.height)
                this.topIllWidth = width * (number.third * wrapper.width)*/

                var image = document.getElementById('top-illustration');
                var wrapper = document.getElementById('top-illustration-wrapper');
                var height = image.clientHeight;
                var width = image.clientWidth;

                var imageRect = image.getBoundingClientRect();
                var wrapperRect = wrapper.getBoundingClientRect();
                var offset = imageRect.bottom - wrapperRect.bottom;
                var offset2 = imageRect.right - wrapperRect.right;

                if (imageRect.right < wrapperRect.width) {
                    alert(imageRect.right);
                } else {}
                if (imageRect.bottom < wrapperRect.height) {
                    this.topOffset += imageRect.bottom;
                } else {}
                if (imageRect.top > 0) {
                    this.topOffset = 0;
                }
                if (imageRect.left > 0) {
                    this.leftOffset = 0;
                }
            }
        }
    },
    watch: {
        currentStyle: function currentStyle() {
            var _this = this;

            if (keys_default()(this.$route.query) !== this.currentStyle.toString) {
                this.$router.replace({
                    query: defineProperty_default()({}, this.currentStyle, null)
                });
            }
            if (this.currentStyle == 3) {
                setTimeout(function () {
                    _this.generateImagePosition();
                }, 500);
            }
            this.pushDesignMatomo();
        },
        $route: function $route(to, from) {
            // with same router query on change
            if (from.query === to.query) {
                return;
            }

            // with valid design number

            if (keys_default()(to.query) == '1' || keys_default()(to.query) == '2' || keys_default()(to.query) == '3') {
                this.selectTheme(keys_default()(to.query));
            } else {
                // with invalid design number
                this.$router.replace({
                    query: defineProperty_default()({}, this.currentStyle, null)
                });
            }
        }
    },
    mounted: function mounted() {
        this.pushDesignMatomo();
        var hamburger = {
            navToggle: document.querySelector('.nav-toggle'),
            nav: document.querySelector('nav'),

            doToggle: function doToggle(e) {
                e.preventDefault();
                this.navToggle.classList.toggle('expanded');
                this.nav.classList.toggle('expanded');
            }
        };

        hamburger.navToggle.addEventListener('click', function (e) {
            hamburger.doToggle(e);
        });
        var thememobile = {
            navToggle: document.querySelector('.theme-toggle'),
            nav: document.querySelector('.themeswitcher-mobile'),

            doToggle: function doToggle(e) {
                e.preventDefault();
                this.navToggle.classList.toggle('expanded');
                this.nav.classList.toggle('expanded');
            }
        };

        thememobile.navToggle.addEventListener('click', function (e) {
            thememobile.doToggle(e);
        });
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f743d9cc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Navbar.vue
var Navbar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"navbar"}},[_c('div',{attrs:{"id":"nav-absolute"}},[_c('div',{staticClass:"mobile-nav-container mobile-only"},[_vm._m(0),_vm._v(" "),_c('nav',{staticClass:"nav"},[_c('ul',_vm._l((_vm.categories),function(category){return _c('li',[_c('router-link',{class:'category-link',attrs:{"to":{ name: 'category', params: {  category:  category.slug}}}},[_vm._v("\n                            "+_vm._s(category.name)+"\n                        ")])],1)}))]),_vm._v(" "),_c('router-link',{attrs:{"to":'/'}},[_c('div',{attrs:{"id":"logo-mobile"}},[_c('Logo',{staticClass:"logo-style-1-mobile",attrs:{"logoStyle":Number(_vm.themeSwitcher.currentStyle),"alt":"The Weekly Output"}})],1)]),_vm._v(" "),_c('div',{staticClass:"theme-toggle-wrapper"},[_c('div',{staticClass:"theme-toggle"},[_c('div',{staticClass:"theme-toggle-bar"},[_c('settings-wheel',{staticStyle:{"height":"20px","cursor":"pointer"}})],1)])]),_vm._v(" "),_c('nav',{staticClass:"themeswitcher-mobile"},[_c('div',{staticClass:"themeswitcher-mobile-wrapper"},[_c('span',{staticClass:"theme-switcher-logo-wrapper",class:{ active: _vm.themeSwitcher.currentStyle === 1},on:{"click":function($event){_vm.selectTheme(1)}}},[_c('Logo',{staticClass:"theme-switcher-logo theme-switcher-logo-mobile",attrs:{"logoStyle":1,"alt":"The Weekly Output Style 1"}})],1),_vm._v(" "),_c('span',{staticClass:"theme-switcher-logo-wrapper",class:{ active: _vm.themeSwitcher.currentStyle === 2},on:{"click":function($event){_vm.selectTheme(2)}}},[_c('Logo',{staticClass:"theme-switcher-logo theme-switcher-logo-mobile",attrs:{"logoStyle":2,"alt":"The Weekly Output Style 2"}})],1),_vm._v(" "),_c('span',{staticClass:"theme-switcher-logo-wrapper",class:{ active: _vm.themeSwitcher.currentStyle === 3},on:{"click":function($event){_vm.selectTheme(3)}}},[_c('Logo',{staticClass:"theme-switcher-logo theme-switcher-logo-mobile",attrs:{"logoStyle":3,"alt":"The Weekly Output 3"}})],1)])])],1),_vm._v(" "),_c('div',{staticClass:"desktop-nav-container desktop-only",attrs:{"id":"desktop-nav-container"}},[_c('router-link',{attrs:{"to":'/'}},[_c('div',{attrs:{"id":"logo"}},[(_vm.themeSwitcher.currentStyle == 3)?_c('div',{staticClass:"top-illustration-wrapper",attrs:{"id":"top-illustration-wrapper"}},[_c('top-illstration',{staticClass:"top-illustration",style:({ top: _vm.topOffset + 'px', left: _vm.leftOffset + 'px', zoom: _vm.zoomFactor}),attrs:{"id":"top-illustration"}})],1):_vm._e(),_vm._v(" "),_c('Logo',{staticClass:"logo-style-1",attrs:{"logoStyle":Number(_vm.themeSwitcher.currentStyle),"alt":"The Weekly Output"}})],1)]),_vm._v(" "),(_vm.api.loaded)?_c('affix',{attrs:{"relative-element-selector":"#router-link","scroll-affix":true,"offset":_vm.themeSwitcher.styleSettings[_vm.themeSwitcher.currentStyle].affix.offset,"id":"desktop-navbar"},on:{"affixtop":function($event){_vm.scrollHandler(false)},"affix":function($event){_vm.scrollHandler(true)}}},[_c('ul',{staticClass:"nav-categories"},[_c('router-link',{attrs:{"to":'/',"id":"nav-logo-link"}},[(_vm.scrolling == true)?_c('li',{staticClass:"theme-switcher-logo-wrapper"},[_c('Logo',{staticClass:"theme-switcher-logo-1",attrs:{"logoStyle":Number(_vm.themeSwitcher.currentStyle),"alt":"The Weekly Output Style 1"}})],1):_vm._e()]),_vm._v(" "),_c('li',{staticClass:"position-relative",on:{"click":function($event){_vm.toggleActiveExpand()}}},[_c('settings-wheel',{staticStyle:{"height":"20px","cursor":"pointer"}}),_vm._v(" "),_c('transition',{attrs:{"name":"themeswitcher-transition"}},[(_vm.expandedSwitcher)?_c('span',{attrs:{"id":"theme-switcher"}},[_c('div',{attrs:{"id":"theme-switcher-wrapper"}},[_c('span',{staticClass:"theme-switcher-logo-wrapper",class:{ active: _vm.themeSwitcher.currentStyle === 1},on:{"click":function($event){_vm.selectTheme(1)}}},[_c('Logo',{staticClass:"theme-switcher-logo",attrs:{"logoStyle":1,"alt":"The Weekly Output Style 1"}})],1),_vm._v(" "),_c('span',{staticClass:"theme-switcher-logo-wrapper",class:{ active: _vm.themeSwitcher.currentStyle === 2},on:{"click":function($event){_vm.selectTheme(2)}}},[_c('Logo',{staticClass:"theme-switcher-logo",attrs:{"logoStyle":2,"alt":"The Weekly Output Style 2"}})],1),_vm._v(" "),_c('span',{staticClass:"theme-switcher-logo-wrapper",class:{ active: _vm.themeSwitcher.currentStyle === 3},on:{"click":function($event){_vm.selectTheme(3)}}},[_c('Logo',{staticClass:"theme-switcher-logo",attrs:{"logoStyle":3,"alt":"The Weekly Output 3"}})],1)])]):_vm._e()])],1),_vm._v(" "),_vm._l((_vm.categories),function(category){return _c('li',[_c('router-link',{class:'category-link',attrs:{"to":{ name: 'category', params: {  category:  category.slug}}}},[_vm._v("\n                "+_vm._s(category.name)+"\n            ")])],1)})],2)]):_vm._e(),_vm._v(" "),_c('hr',{staticClass:"hr-categories",attrs:{"id":"directly-below"}})],1)]),_vm._v(" "),_c('div',{attrs:{"id":"nav-spacer"}})])}
var Navbar_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav-toggle-wrapper"},[_c('div',{staticClass:"nav-toggle"},[_c('div',{staticClass:"nav-toggle-bar"})])])}]

// CONCATENATED MODULE: ./src/components/Navbar.vue
function Navbar_injectStyle (context) {
  __webpack_require__("tvGK")
}
/* script */


/* template */

/* template functional */
var Navbar_vue_template_functional_ = false
/* styles */
var Navbar_vue_styles_ = Navbar_injectStyle
/* scopeId */
var Navbar_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var Navbar_vue_module_identifier_ = null

var Navbar_Component = Object(component_normalizer["a" /* default */])(
  Navbar,
  Navbar_render,
  Navbar_staticRenderFns,
  Navbar_vue_template_functional_,
  Navbar_vue_styles_,
  Navbar_vue_scopeId_,
  Navbar_vue_module_identifier_
)

/* harmony default export */ var components_Navbar = (Navbar_Component.exports);

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c00ff848","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/styles/Style1.vue
var Style1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var Style1_staticRenderFns = []

// CONCATENATED MODULE: ./src/styles/Style1.vue
function Style1_injectStyle (context) {
  __webpack_require__("8YOU")
}
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var Style1_vue_template_functional_ = false
/* styles */
var Style1_vue_styles_ = Style1_injectStyle
/* scopeId */
var Style1_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var Style1_vue_module_identifier_ = null

var Style1_Component = Object(component_normalizer["a" /* default */])(
  __vue_script__,
  Style1_render,
  Style1_staticRenderFns,
  Style1_vue_template_functional_,
  Style1_vue_styles_,
  Style1_vue_scopeId_,
  Style1_vue_module_identifier_
)

/* harmony default export */ var Style1 = (Style1_Component.exports);

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4924485f","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/styles/Style2.vue
var Style2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var Style2_staticRenderFns = []

// CONCATENATED MODULE: ./src/styles/Style2.vue
function Style2_injectStyle (context) {
  __webpack_require__("8eZN")
}
/* script */
var Style2_vue_script_ = null
/* template */

/* template functional */
var Style2_vue_template_functional_ = false
/* styles */
var Style2_vue_styles_ = Style2_injectStyle
/* scopeId */
var Style2_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var Style2_vue_module_identifier_ = null

var Style2_Component = Object(component_normalizer["a" /* default */])(
  Style2_vue_script_,
  Style2_render,
  Style2_staticRenderFns,
  Style2_vue_template_functional_,
  Style2_vue_styles_,
  Style2_vue_scopeId_,
  Style2_vue_module_identifier_
)

/* harmony default export */ var Style2 = (Style2_Component.exports);

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4e904a9a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/styles/Style3.vue
var Style3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var Style3_staticRenderFns = []

// CONCATENATED MODULE: ./src/styles/Style3.vue
function Style3_injectStyle (context) {
  __webpack_require__("3/fM")
}
/* script */
var Style3_vue_script_ = null
/* template */

/* template functional */
var Style3_vue_template_functional_ = false
/* styles */
var Style3_vue_styles_ = Style3_injectStyle
/* scopeId */
var Style3_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var Style3_vue_module_identifier_ = null

var Style3_Component = Object(component_normalizer["a" /* default */])(
  Style3_vue_script_,
  Style3_render,
  Style3_staticRenderFns,
  Style3_vue_template_functional_,
  Style3_vue_styles_,
  Style3_vue_scopeId_,
  Style3_vue_module_identifier_
)

/* harmony default export */ var Style3 = (Style3_Component.exports);

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/AdDetect.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AdDetect = ({
    data: function data() {
        return {
            adDetected: false
        };
    },
    methods: {
        closeWindow: function closeWindow() {
            this.$emit("passValue", false);
            this.adDetected = false;
        },
        disableAdBlock: function disableAdBlock() {
            this.$router.go({
                path: this.$router.path
            });
        }
    },
    mounted: function mounted() {
        // Function called if AdBlock is not detected 
        var context = this;

        function adBlockNotDetected() {
            context.$emit("passValue", context.adDetected);
        }
        // Function called if AdBlock is detected 
        function adBlockDetected() {
            context.adDetected = true;
            context.$emit("passValue", context.adDetected);
        }

        // Recommended audit because AdBlock lock the file 'fuckadblock.js'  
        // If the file is not called, the variable does not exist 'fuckAdBlock' 
        // This means that AdBlock is present 
        if (typeof fuckAdBlock === 'undefined') {
            adBlockDetected();
        } else {
            fuckAdBlock.onDetected(adBlockDetected);
            fuckAdBlock.onNotDetected(adBlockNotDetected);
            // and|or 
            fuckAdBlock.on(true, adBlockDetected);
            fuckAdBlock.on(false, adBlockNotDetected);
            // and|or 
            fuckAdBlock.on(true, adBlockDetected).onNotDetected(adBlockNotDetected);
        }
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-bb935d5a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/AdDetect.vue
var AdDetect_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('transition',{attrs:{"name":"modal"}},[(_vm.adDetected)?_c('div',{staticClass:"ad-detect-window"},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"modal-container"},[_c('div',{staticClass:"modal-header"},[_vm._t("header",[_vm._v("\n                            Pardon the interruption!\n                        ")])],2),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_vm._t("body",[_vm._v("\n                            Do you really want to continue with your AdBlocker enabled?\n                        ")])],2),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_vm._t("footer",[_c('button',{staticClass:"button-keep-footer button-ad-footer",on:{"click":function($event){_vm.closeWindow()}}},[_vm._v("\n                                    Continue\n                                ")]),_vm._v(" "),_c('button',{staticClass:"button-disable-footer button-ad-footer",on:{"click":function($event){_vm.disableAdBlock()}}},[_vm._v("\n                                    I disabled it!\n                                ")])])],2)])])]):_vm._e()])],1)}
var AdDetect_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/AdDetect.vue
function AdDetect_injectStyle (context) {
  __webpack_require__("wkG1")
}
/* script */


/* template */

/* template functional */
var AdDetect_vue_template_functional_ = false
/* styles */
var AdDetect_vue_styles_ = AdDetect_injectStyle
/* scopeId */
var AdDetect_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var AdDetect_vue_module_identifier_ = null

var AdDetect_Component = Object(component_normalizer["a" /* default */])(
  AdDetect,
  AdDetect_render,
  AdDetect_staticRenderFns,
  AdDetect_vue_template_functional_,
  AdDetect_vue_styles_,
  AdDetect_vue_scopeId_,
  AdDetect_vue_module_identifier_
)

/* harmony default export */ var components_AdDetect = (AdDetect_Component.exports);

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//














/* harmony default export */ var App = ({
  mixins: [api["a" /* default */], themeswitcher["a" /* default */]],
  components: {
    LoadingOverlay: components_LoadingOverlay,
    Navbar: components_Navbar,
    FooterBar: components_Footer,
    Style1: Style1,
    Style2: Style2,
    AdDetect: components_AdDetect
  },
  data: function data() {
    return {
      adDetect: Boolean
    };
  },
  created: function created() {
    this.$store.dispatch(action_types["f" /* SET_UP */], {
      context: this
    });
  },

  computed: extends_default()({
    isOverflowVisible: function isOverflowVisible() {
      if (!this.loaded || this.adDetect) {
        return 'hidden';
      } else {
        return 'shown';
      }
    }
  }, Object(vuex_esm["b" /* mapState */])({
    loaded: function loaded(state) {
      return state.api.loaded;
    }
  }))
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d956824a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'style-' + _vm.themeSwitcher.currentStyle + ' ' + 'overflow-' + _vm.isOverflowVisible,attrs:{"id":"app"}},[_c('AdDetect',{on:{"passValue":function($event){_vm.adDetect = $event}}},[_vm._v(">")]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(!_vm.loaded)?_c('loading-overlay',{attrs:{"type":'quality output'}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"site-wrapper"},[_c('Navbar',{on:{"click":function($event){_vm.test1 = false}}}),_vm._v(" "),_c('div',{attrs:{"id":"router-link"}},[_c('transition',{attrs:{"name":"fade"}},[_c('router-view')],1)],1)],1),_vm._v(" "),_c('style1'),_vm._v(" "),_c('style2')],1)}
var App_staticRenderFns = []

// CONCATENATED MODULE: ./src/App.vue
function App_injectStyle (context) {
  __webpack_require__("A0WW")
  __webpack_require__("bSzr")
}
/* script */


/* template */

/* template functional */
var App_vue_template_functional_ = false
/* styles */
var App_vue_styles_ = App_injectStyle
/* scopeId */
var App_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var App_vue_module_identifier_ = null

var App_Component = Object(component_normalizer["a" /* default */])(
  App,
  App_render,
  App_staticRenderFns,
  App_vue_template_functional_,
  App_vue_styles_,
  App_vue_scopeId_,
  App_vue_module_identifier_
)

/* harmony default export */ var src_App = (App_Component.exports);

// EXTERNAL MODULE: ./src/views/Home.vue + 11 modules
var Home = __webpack_require__("u1G+");

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/DevTools.vue

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var DevTools = ({
    data: function data() {
        return {
            slug: ''
        };
    },

    computed: extends_default()({}, Object(vuex_esm["b" /* mapState */])({
        currentArticle: function currentArticle(state) {
            return state.api.currentArticle;
        }
    })),
    methods: {
        getText: function getText() {
            this.$store.dispatch(action_types["b" /* GET_ARTICLE_BY_SLUG */], {
                context: this,
                slug: this.slug
            });
        }
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3326d87f","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/DevTools.vue
var DevTools_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("Dev Tools")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.slug),expression:"slug"}],attrs:{"placeholder":"Slug","rows":"1","autocomplete":"off","required":"","maxlength":"200"},domProps:{"value":(_vm.slug)},on:{"input":function($event){if($event.target.composing){ return; }_vm.slug=$event.target.value}}}),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.getText()}}},[_vm._v("Get Text")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.currentArticle))])])}
var DevTools_staticRenderFns = []

// CONCATENATED MODULE: ./src/views/DevTools.vue
function DevTools_injectStyle (context) {
  __webpack_require__("B2pa")
}
/* script */


/* template */

/* template functional */
var DevTools_vue_template_functional_ = false
/* styles */
var DevTools_vue_styles_ = DevTools_injectStyle
/* scopeId */
var DevTools_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var DevTools_vue_module_identifier_ = null

var DevTools_Component = Object(component_normalizer["a" /* default */])(
  DevTools,
  DevTools_render,
  DevTools_staticRenderFns,
  DevTools_vue_template_functional_,
  DevTools_vue_styles_,
  DevTools_vue_scopeId_,
  DevTools_vue_module_identifier_
)

/* harmony default export */ var views_DevTools = (DevTools_Component.exports);

// CONCATENATED MODULE: ./src/routes/index.js



/* harmony default export */ var routes = ({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: 'home',
    component: function component() {
      return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "u1G+"));
    },
    meta: { title: 'The Weekly Output | ' + 'Home' }
  }, {
    path: '/dev',
    name: 'dev',
    component: views_DevTools
  }, {
    path: '/articles/:category/:slug',
    name: 'article',
    component: function component() {
      return __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "OtbB"));
    },
    props: true
  }, {
    path: '/author/:name',
    name: 'author',
    component: function component() {
      return __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "lBFs"));
    },
    props: true
  }, {
    path: '/articles/:category',
    name: 'category',
    component: function component() {
      return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "SIYL"));
    },
    props: true
  }]
});
// EXTERNAL MODULE: ./src/store/mutation-types.js
var store_mutation_types = __webpack_require__("n7AZ");

// EXTERNAL MODULE: ./src/store/action-types.js
var store_action_types = __webpack_require__("UA8a");

// EXTERNAL MODULE: ../node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("OBCi");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./src/utils.js

var log = {
  debug: function debug(message) {
    var style = 'color: rgb(160, 86, 200)';

    if (typeof message !== 'string') log.style('DEBUG', 'Object', style);

    log.style('DEBUG', message, style);
  },
  info: function info(contextIdenitfier, message) {
    log.style(contextIdenitfier, message, 'color: rgb(87, 199, 167);');
  },
  dir: function dir(obj) {
    // console.dir(obj)
  },
  success: function success(contextIdenitfier, message) {
    log.style(contextIdenitfier, message, 'color: #21B610;');
  },
  error: function error(contextIdenitfier, message) {
    console.error(log._formatString(contextIdenitfier, message));
  },
  style: function style(contextIdenitfier, message) {
    for (var _len = arguments.length, style = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      style[_key - 2] = arguments[_key];
    }

    style = style.join(';');
    if (typeof message === 'string') {
      // console.log('%c' + log._formatString(contextIdenitfier, message), style)
      return;
    }
    log.dir(message);
  },
  _formatString: function _formatString(contextIdenitfier, message, style) {
    return '[' + contextIdenitfier + '] ' + message;
  }
};
// CONCATENATED MODULE: ./src/api/index.js



var _actions, _mutations;






var api_apiCallbackFunction = function apiCallbackFunction(_ref, _ref2) {
  var getters = _ref.getters,
      commit = _ref.commit;
  var success = _ref2.success,
      action = _ref2.action,
      message = _ref2.message,
      next = _ref2.next;

  var notificationMutation = success ? store_mutation_types["d" /* UPDATE_MESSAGES */] : store_mutation_types["c" /* UPDATE_ERRORS */];
  var notificationGetter = success ? getters.getMessagesFromRes : getters.getErrorsFromRes;
  var logFunc = success ? log.success : log.error;

  return function (res) {
    logFunc(action, message);
    commit(notificationMutation, notificationGetter(res));
    next(res);
  };
};

/* harmony default export */ var src_api = ({
  state: {
    articles: [],
    currentArticle: null,
    categories: [],
    loaded: false,
    categoryCount: 0,
    currentCategoryPage: 1
  },
  getters: {
    getMessagesFromRes: function getMessagesFromRes() {
      return function (res) {
        if (res.data) {
          return res.data.messages;
        } else {
          return '';
        }
      };
    },
    getErrorsFromRes: function getErrorsFromRes() {
      return function (res) {
        if (res) {
          return res;
        } else {
          return '';
        }
      };
    }
  },
  actions: (_actions = {}, defineProperty_default()(_actions, action_types["f" /* SET_UP */], function (_ref3, _ref4) {
    var commit = _ref3.commit,
        dispatch = _ref3.dispatch,
        state = _ref3.state;
    var context = _ref4.context;

    dispatch(action_types["c" /* GET_CATEGORIES */], {
      context: context
    });
  }), defineProperty_default()(_actions, action_types["e" /* REST_CALL */], function (_ref5, _ref6) {
    var commit = _ref5.commit,
        getters = _ref5.getters;
    var promise = _ref6.promise,
        action = _ref6.action,
        context = _ref6.context,
        onSuccess = _ref6.onSuccess,
        onError = _ref6.onError;

    promise.then(api_apiCallbackFunction({ commit: commit, getters: getters }, {
      success: true, action: action, message: 'REST Call Successful', next: onSuccess
    }), api_apiCallbackFunction({ commit: commit, getters: getters }, {
      success: false, action: action, message: 'Error:', next: onError
    }));
  }), defineProperty_default()(_actions, action_types["c" /* GET_CATEGORIES */], function (_ref7, _ref8) {
    var state = _ref7.state,
        dispatch = _ref7.dispatch,
        commit = _ref7.commit;
    var context = _ref8.context;

    dispatch(action_types["e" /* REST_CALL */], {
      promise: context.$http.get('corpora/categories/'),
      action: action_types["c" /* GET_CATEGORIES */], context: context,
      onSuccess: function onSuccess(res) {
        log.dir(res);
        state.categories = res.body;
        state.categories.forEach(function (category) {

          dispatch(action_types["d" /* GET_CATEGORY_PAGE */], { context: context, category: category.slug, page: 1 });
        });

        commit(mutation_types["a" /* SET_LOADED */], {
          status: false
        });
      },
      onError: function onError(res) {}
    });
  }), defineProperty_default()(_actions, action_types["b" /* GET_ARTICLE_BY_SLUG */], function (_ref9, _ref10) {
    var commit = _ref9.commit,
        dispatch = _ref9.dispatch;
    var context = _ref10.context,
        slug = _ref10.slug;

    dispatch(action_types["e" /* REST_CALL */], {
      promise: context.$http.get('corpora/slug/' + slug + '/'),
      action: action_types["b" /* GET_ARTICLE_BY_SLUG */], context: context,
      onSuccess: function onSuccess(res) {
        log.dir(res);
        commit(mutation_types["c" /* UPDATE_CURRENT_ARTICLE */], { article: res.body });
        commit(mutation_types["a" /* SET_LOADED */], {
          status: true
        });
      },
      onError: function onError(res) {}
    });
  }), defineProperty_default()(_actions, action_types["d" /* GET_CATEGORY_PAGE */], function (_ref11, _ref12) {
    var commit = _ref11.commit,
        dispatch = _ref11.dispatch,
        state = _ref11.state;
    var context = _ref12.context,
        category = _ref12.category,
        page = _ref12.page;

    dispatch(action_types["e" /* REST_CALL */], {
      promise: context.$http.get('corpora/' + category + '/' + page + '/'),
      action: action_types["d" /* GET_CATEGORY_PAGE */], context: context,
      onSuccess: function onSuccess(res) {
        log.dir(res);
        commit(mutation_types["b" /* UPDATE_ARTICLES */], { category: category, articles: res.body });
        return new promise_default.a(function (resolve, reject) {
          resolve();
        });
      },
      onError: function onError(res) {}
    });
  }), defineProperty_default()(_actions, action_types["a" /* CHANGE_PAGE_TITLE */], function (_ref13, _ref14) {
    var state = _ref13.state,
        dispatch = _ref13.dispatch,
        commit = _ref13.commit,
        getters = _ref13.getters;
    var title = _ref14.title;

    document.title = title;
  }), _actions),
  mutations: (_mutations = {}, defineProperty_default()(_mutations, mutation_types["c" /* UPDATE_CURRENT_ARTICLE */], function (state, _ref15) {
    var article = _ref15.article;

    state.currentArticle = article;
  }), defineProperty_default()(_mutations, mutation_types["b" /* UPDATE_ARTICLES */], function (state, _ref16) {
    var category = _ref16.category,
        articles = _ref16.articles;

    if (!articles.hasOwnProperty(category)) {
      state.articles[category] = [];
      if (state.categoryCount < state.categories.length) {
        state.categoryCount++;
      }
    }
    state.articles[category] = state.articles[category].concat(articles);
  }), defineProperty_default()(_mutations, mutation_types["a" /* SET_LOADED */], function (state, _ref17) {
    var status = _ref17.status;

    state.loaded = status;
  }), _mutations)
});
// CONCATENATED MODULE: ./src/themeswitcher/action-types.js
var SET_DESIGN_MATOMO = 'SET_DESIGN_MATOMO';
// CONCATENATED MODULE: ./src/themeswitcher/index.js





/* harmony default export */ var src_themeswitcher = ({
  state: {
    currentStyle: Math.round(Math.random()) + 1,
    styleSettings: {
      1: {
        article: {
          sidebarDescriptionShown: true,
          sidebarImageStyle: 'no'
        },
        home: {
          descriptionShown: false
        },
        affix: {
          offset: {
            top: 40,
            bottom: 40
          }
        }
      },
      2: {
        article: {
          sidebarDescriptionShown: false,
          sidebarImageStyle: 'image-above'
        },
        home: {
          descriptionShown: false
        },
        affix: {
          offset: {
            top: 40,
            bottom: 40
          }
        }

      },
      3: {
        article: {
          sidebarDescriptionShown: false,
          sidebarImageStyle: 'image-above'
        },
        home: {
          descriptionShown: true
        },
        affix: {
          offset: {
            top: 0,
            bottom: 0
          }
        }

      }
    }
  },
  actions: defineProperty_default()({}, SET_DESIGN_MATOMO, function (_ref, _ref2) {
    var state = _ref.state;
    var design = _ref2.design;
  }),
  mutations: defineProperty_default()({}, SET_STYLE, function (state, payload) {
    state.currentStyle = payload.payload;
  })
});
// EXTERNAL MODULE: ./src/assets/svg/titles/Entertainment.svg
var Entertainment = __webpack_require__("n+5k");
var Entertainment_default = /*#__PURE__*/__webpack_require__.n(Entertainment);

// EXTERNAL MODULE: ./src/assets/svg/titles/Health.svg
var Health = __webpack_require__("dYWX");
var Health_default = /*#__PURE__*/__webpack_require__.n(Health);

// EXTERNAL MODULE: ./src/assets/svg/titles/Sports.svg
var Sports = __webpack_require__("hw61");
var Sports_default = /*#__PURE__*/__webpack_require__.n(Sports);

// EXTERNAL MODULE: ./src/assets/svg/titles/Highlights.svg
var Highlights = __webpack_require__("zanB");
var Highlights_default = /*#__PURE__*/__webpack_require__.n(Highlights);

// EXTERNAL MODULE: ./src/assets/svg/titles/Tech.svg
var Tech = __webpack_require__("zg+w");
var Tech_default = /*#__PURE__*/__webpack_require__.n(Tech);

// EXTERNAL MODULE: ./src/assets/svg/titles/Politics.svg
var Politics = __webpack_require__("bAkE");
var Politics_default = /*#__PURE__*/__webpack_require__.n(Politics);

// CONCATENATED MODULE: ./src/store/titlelist.js







var TitleList = {
    Entertainment: Entertainment_default.a,
    Health: Health_default.a,
    Sports: Sports_default.a,
    Highlights: Highlights_default.a,
    Tech: Tech_default.a,
    Politics: Politics_default.a
};
// CONCATENATED MODULE: ./src/store/index.js


var store_mutations;











vue_esm["a" /* default */].use(vuex_esm["a" /* default */]);

var store_state = {
  errors: '',
  messages: '',
  TitleList: TitleList
};

var mutations = (store_mutations = {}, defineProperty_default()(store_mutations, store_mutation_types["d" /* UPDATE_MESSAGES */], function (state, messages) {
  log.info(store_mutation_types["d" /* UPDATE_MESSAGES */], '');
  log.dir(messages);
  state.messages = messages;
}), defineProperty_default()(store_mutations, store_mutation_types["c" /* UPDATE_ERRORS */], function (state, res) {
  log.error(store_mutation_types["c" /* UPDATE_ERRORS */], '');
  log.dir(res.data);
  state.errors = res.data;
}), defineProperty_default()(store_mutations, store_mutation_types["a" /* CLEAR_ERRORS */], function (state) {
  state.errors = '';
}), defineProperty_default()(store_mutations, store_mutation_types["b" /* CLEAR_MESSAGES */], function (state) {
  state.messages = '';
}), store_mutations);

var actions = {
  // Actions
};

var store = new vuex_esm["a" /* default */].Store({
  state: store_state,
  mutations: mutations,
  actions: actions,
  modules: {
    api: src_api,
    themeSwitcher: src_themeswitcher
  }
});

/* harmony default export */ var src_store = (store);
// EXTERNAL MODULE: ../node_modules/vue-timeago/dist/vue-timeago.js
var vue_timeago = __webpack_require__("cNXa");
var vue_timeago_default = /*#__PURE__*/__webpack_require__.n(vue_timeago);

// EXTERNAL MODULE: ../node_modules/vue-progressive-image/dist/vue-progressive-image.js
var vue_progressive_image = __webpack_require__("ZavS");
var vue_progressive_image_default = /*#__PURE__*/__webpack_require__.n(vue_progressive_image);

// EXTERNAL MODULE: ../node_modules/vue-infinite-scroll/vue-infinite-scroll.js
var vue_infinite_scroll = __webpack_require__("pgwR");
var vue_infinite_scroll_default = /*#__PURE__*/__webpack_require__.n(vue_infinite_scroll);

// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "store", function() { return src_store; });

















vue_esm["a" /* default */].use(vue_infinite_scroll_default.a);
vue_esm["a" /* default */].directive({ infiniteScroll: vue_infinite_scroll_default.a });

vue_esm["a" /* default */].use(vue_timeago_default.a, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': __webpack_require__("cT0C")
  }
});

// vue-shortkey
vue_esm["a" /* default */].use(__webpack_require__("QpWp"));
vue_esm["a" /* default */].use(vue_affix_default.a);
vue_esm["a" /* default */].use(vue_progressive_image_default.a);

// vue-resource
vue_esm["a" /* default */].use(vue_resource_esm);

vue_esm["a" /* default */].http.interceptors.push(function (request, next) {
  request.credentials = true;
  next();
});

var port = ':8000';
if (true) {
  port = '';
}

vue_esm["a" /* default */].http.options.root = window.location.protocol + '//' + window.location.hostname + port;

// vue-router
vue_esm["a" /* default */].use(vue_router_esm);
var router = new vue_router_esm(routes);
vue_esm["a" /* default */].router = router;

vue_esm["a" /* default */].router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0);
  next();
});

window['_paq'] = window['_paq'] || [];

var loc = window.location;
vue_esm["a" /* default */].router.afterEach(function (to, from) {
  window['_paq'].push(['setDocumentTitle', to.path]);
  window['_paq'].push(['setCustomUrl', loc.protocol + '//' + loc.hostname + to.fullPath]);

  // Allow override page settings
  var settings = assign_default()({}, routeOption('matomo', from, to, src_store), routeOption('piwik', from, to, src_store), to.meta && to.meta.matomo, to.meta && to.meta.piwik);
  keys_default()(settings).forEach(function (key) {
    window['_paq'].push(settings[key]);
  });

  // We tell Matomo to add a page view
  window['_paq'].push(['trackPageView']);
});

function routeOption(key, from, to, store) {
  var matched = to.matched[0];
  var matchedComponent = matched.components.default;
  return componentOption(matchedComponent, key, from, to, store);
}

function componentOption(component, key) {
  if (!component || !component.options || !component.options[key]) {
    return {};
  }
  var option = component.options[key];
  if (typeof option === 'function') {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    option = option.apply(undefined, args);
  }
  return option;
}

Object(vuex_router_sync["sync"])(src_store, router);

var app = new vue_esm["a" /* default */](extends_default()({
  router: router,
  store: src_store
}, src_App));

// Enable progressive web app support (with offline-plugin)
if (true) {
  __webpack_require__("5yLx");
}
app.$mount('#app');



/***/ }),

/***/ "tvGK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "u1G+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/mixins/themeswitcher.js
var themeswitcher = __webpack_require__("TYgx");

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("TcPG");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Kz1y");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("lOrp");

// EXTERNAL MODULE: ./src/components/ListArticles.vue + 2 modules
var ListArticles = __webpack_require__("GqsI");

// EXTERNAL MODULE: ./src/components/PageViews.vue + 2 modules
var PageViews = __webpack_require__("O7/s");

// EXTERNAL MODULE: ./src/components/Titles.vue + 2 modules
var Titles = __webpack_require__("Mrp6");

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/AdComponent.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var AdComponent = ({});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-47d76ad2","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/AdComponent.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"ad-container"})])}]

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__("Xm6T");

// CONCATENATED MODULE: ./src/components/AdComponent.vue
function injectStyle (context) {
  __webpack_require__("WUaq")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  AdComponent,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_AdComponent = (Component.exports);

// EXTERNAL MODULE: ./src/mixins/api.js
var api = __webpack_require__("qNwz");

// EXTERNAL MODULE: ./src/api/mutation-types.js
var mutation_types = __webpack_require__("5Rlk");

// EXTERNAL MODULE: ./src/api/action-types.js
var action_types = __webpack_require__("XiVm");

// EXTERNAL MODULE: ./src/components/Ticker.vue + 2 modules
var Ticker = __webpack_require__("GhKc");

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Topper.vue


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ var Topper = ({
    mixins: [api["a" /* default */], themeswitcher["a" /* default */]],

    components: {
        ListArticles: ListArticles["a" /* default */],
        PageViews: PageViews["a" /* default */],
        Titles: Titles["a" /* default */],
        AdComponent: components_AdComponent,
        Ticker: Ticker["a" /* default */]
    },
    data: function data() {
        return {
            timestamp: String,
            articleList: []
        };
    },
    computed: extends_default()({}, Object(vuex_esm["b" /* mapState */])({
        categoryCount: function categoryCount(state) {
            return state.api.categoryCount;
        }
    })),
    mounted: function mounted() {
        if (this.api.articles.hasOwnProperty(this.categoryToRender.slug)) {
            this.articleList = this.api.articles[this.categoryToRender.slug];
        }
    },

    watch: {
        categoryToRender: function categoryToRender() {
            if (this.api.articles.hasOwnProperty(this.categoryToRender.slug)) {
                this.articleList = this.api.articles[this.categoryToRender.slug];
            }
        },

        categoryCount: {
            handler: function handler(val) {
                if (this.api.articles.hasOwnProperty(this.categoryToRender.slug)) {
                    this.articleList = this.api.articles[this.categoryToRender.slug];
                }
            },
            deep: true
        }
    },
    methods: defineProperty_default()({
        changeArticle: function changeArticle(slug) {
            this.$store.dispatch(action_types["b" /* GET_ARTICLE_BY_SLUG */], {
                context: this,
                slug: slug
            });
        },
        getOrientation: function getOrientation(image) {
            var orientation = void 0;
            var img = new Image();
            img.onload = function () {
                if (img.naturalWidth > img.naturalHeight) {
                    orientation = 'landscape';
                } else if (img.naturalWidth < img.naturalHeight) {
                    orientation = 'portrait';
                } else {
                    orientation = 'even';
                }
                return orientation;
            };
            img.src = image;
        }
    }, 'changeArticle', function changeArticle(slug) {
        this.$store.dispatch(action_types["b" /* GET_ARTICLE_BY_SLUG */], {
            context: this,
            slug: slug
        });
    }),

    props: {
        'categoryToRender': Object
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dd611f46","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Topper.vue
var Topper_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.api.articles && _vm.api.loaded && _vm.articleList.length >= 1)?_c('div',[_c('div',{staticClass:"topper-headline"},[_c('Titles',{attrs:{"category":_vm.categoryToRender.name}}),_vm._v(" "),_c('hr')],1),_vm._v(" "),(_vm.themeSwitcher.currentStyle == 2)?_c('Ticker',{staticClass:"desktop-only",attrs:{"id":"topper-ticker"}}):_vm._e(),_vm._v(" "),_vm._l((_vm.articleList),function(article){return _c('div',{class:'topper-article-wrapper'},[_c('router-link',{class:'article-link',attrs:{"to":{ name: 'article', params: {  category: _vm.categoryToRender.slug, slug: article.slug }},"transition":"fade"}},[_c('div',{class:'topper-single-container'},[_c('span',{class:'topper-image-wrapper'},[_c('progressive-img',{class:'topper-image ' + _vm.getOrientation(article.image_url),attrs:{"src":article.image_url}})],1),_vm._v(" "),_c('span',{class:'topper-text'},[_c('h2',{class:'topper-article-title'},[_vm._v(_vm._s(article.title))]),_vm._v(" "),(_vm.themeSwitcher.currentStyle != 2)?_c('span',{staticClass:"topper-author-timestap-wrapper desktop-only"},[_c('span',{class:'topper-author'},[_vm._v("By \n                                "),_c('router-link',{attrs:{"to":{ name: 'author', params: {  name: article.author.slug }},"transition":"fade"}},[_vm._v("\n                                    "+_vm._s(article.author.name)+"\n                                ")])],1),_vm._v(" "),_c('span',{staticClass:"list-timestamp"},[(_vm.themeSwitcher.currentStyle != 2)?_c('timeago',{attrs:{"since":article.date}}):_vm._e()],1)]):_vm._e(),_vm._v(" "),(_vm.themeSwitcher.currentStyle != 2)?_c('h3',{class:'topper-article-text'},[_vm._v(_vm._s(article.description.substring(0, 200))+"...")]):_vm._e(),_vm._v(" "),_c('page-views',{attrs:{"views":article.views}})],1)])])],1)}),_vm._v(" "),_c('AdComponent',{staticClass:"topper-ad-wrapper"})],2):_vm._e()}
var Topper_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/Topper.vue
function Topper_injectStyle (context) {
  __webpack_require__("AZnH")
}
/* script */


/* template */

/* template functional */
var Topper_vue_template_functional_ = false
/* styles */
var Topper_vue_styles_ = Topper_injectStyle
/* scopeId */
var Topper_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var Topper_vue_module_identifier_ = null

var Topper_Component = Object(component_normalizer["a" /* default */])(
  Topper,
  Topper_render,
  Topper_staticRenderFns,
  Topper_vue_template_functional_,
  Topper_vue_styles_,
  Topper_vue_scopeId_,
  Topper_vue_module_identifier_
)

/* harmony default export */ var components_Topper = (Topper_Component.exports);

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/TweetFeed.vue
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TweetFeed = ({});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3e1b08b3","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/TweetFeed.vue
var TweetFeed_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var TweetFeed_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticStyle:{"font-size":"20px"}},[_vm._v("Recent tweets")]),_vm._v(" "),_c('div',[_c('a',{staticClass:"twitter-timeline",attrs:{"data-dnt":"true","href":"https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw"}},[_vm._v("Tweets by realDonaldTrump")])])])}]

// CONCATENATED MODULE: ./src/components/TweetFeed.vue
function TweetFeed_injectStyle (context) {
  __webpack_require__("VDKz")
}
/* script */


/* template */

/* template functional */
var TweetFeed_vue_template_functional_ = false
/* styles */
var TweetFeed_vue_styles_ = TweetFeed_injectStyle
/* scopeId */
var TweetFeed_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var TweetFeed_vue_module_identifier_ = null

var TweetFeed_Component = Object(component_normalizer["a" /* default */])(
  TweetFeed,
  TweetFeed_render,
  TweetFeed_staticRenderFns,
  TweetFeed_vue_template_functional_,
  TweetFeed_vue_styles_,
  TweetFeed_vue_scopeId_,
  TweetFeed_vue_module_identifier_
)

/* harmony default export */ var components_TweetFeed = (TweetFeed_Component.exports);

// EXTERNAL MODULE: ../node_modules/vue-affix/dist/vue-affix.js
var vue_affix = __webpack_require__("qjbh");

// CONCATENATED MODULE: ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Home.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ var Home = ({
    mixins: [api["a" /* default */], themeswitcher["a" /* default */]],
    components: {
        Topper: components_Topper,
        ListArticles: ListArticles["a" /* default */],
        TweetFeed: components_TweetFeed,
        Titles: Titles["a" /* default */]
    },
    props: {},
    data: function data() {
        return {
            highlights: {
                slug: 'highlights',
                name: 'Highlights'
            },
            categoriesToRender: [{
                slug: 'politics',
                name: 'Politics'
            }, {
                slug: 'health',
                name: 'Health'
            }, {
                slug: 'entertainment',
                name: 'Entertainment'
            }, {
                slug: 'sport',
                name: 'Sports'
            }, {
                slug: 'technology',
                name: 'Tech'
            }, {
                slug: 'world',
                name: 'World'
            }]
        };
    },
    mounted: function mounted() {
        this.$store.dispatch(action_types["a" /* CHANGE_PAGE_TITLE */], {
            title: 'Home | The Weekly Output'
        });
    }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/template-compiler?{"id":"data-v-303c7e1d","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/views/Home.vue
var Home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"component-wrapper home",attrs:{"id":"home"}},[_c('Topper',{staticClass:"topper",attrs:{"categoryToRender":_vm.highlights}}),_vm._v(" "),_c('div',{staticClass:"home-bottom",attrs:{"id":"home-bottom"}},_vm._l((_vm.categoriesToRender),function(category){return _c('div',{staticClass:"newest-list"},[_c('Titles',{attrs:{"category":category.name}}),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"list-article-wrapper"},[_c('ListArticles',{attrs:{"categoryToRender":category.slug,"showText":_vm.themeSwitcher.styleSettings[_vm.themeSwitcher.currentStyle].home.descriptionShown,"showAuthor":true,"imageStyle":'next-to-article',"showShares":true,"mode":'list-'}})],1),_vm._v(" "),_c('div',{staticClass:"show-all-container"},[_c('div',{staticClass:"show-all-bottom"}),_vm._v(" "),_c('router-link',{attrs:{"to":{ style: _vm.themeSwitcher.currentStyle, name: 'category', params: {  category: category.slug }},"transition":"fade"}},[_c('button',{staticClass:"show-all-button"},[_vm._v("SHOW MORE")])])],1)],1)})),_vm._v(" "),(_vm.api.articles && _vm.api.loaded)?_c('affix',{staticClass:"desktop-only",attrs:{"relative-element-selector":"#home-bottom","id":"twitter-affix","scroll-affix":true}},[_c('TweetFeed',{staticClass:"twitter-sidebar "})],1):_vm._e()],1)])}
var Home_staticRenderFns = []

// CONCATENATED MODULE: ./src/views/Home.vue
function Home_injectStyle (context) {
  __webpack_require__("4bm5")
}
/* script */


/* template */

/* template functional */
var Home_vue_template_functional_ = false
/* styles */
var Home_vue_styles_ = Home_injectStyle
/* scopeId */
var Home_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var Home_vue_module_identifier_ = null

var Home_Component = Object(component_normalizer["a" /* default */])(
  Home,
  Home_render,
  Home_staticRenderFns,
  Home_vue_template_functional_,
  Home_vue_styles_,
  Home_vue_scopeId_,
  Home_vue_module_identifier_
)

/* harmony default export */ var views_Home = __webpack_exports__["default"] = (Home_Component.exports);


/***/ }),

/***/ "udmq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */
var decouple = __webpack_require__("cp9j");
var Emitter = __webpack_require__("SHdJ");

/**
 * Privates
 */
var scrollTimeout;
var scrolling = false;
var doc = window.document;
var html = doc.documentElement;
var msPointerSupported = window.navigator.msPointerEnabled;
var touch = {
  'start': msPointerSupported ? 'MSPointerDown' : 'touchstart',
  'move': msPointerSupported ? 'MSPointerMove' : 'touchmove',
  'end': msPointerSupported ? 'MSPointerUp' : 'touchend'
};
var prefix = (function prefix() {
  var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
  var styleDeclaration = doc.getElementsByTagName('script')[0].style;
  for (var prop in styleDeclaration) {
    if (regex.test(prop)) {
      return '-' + prop.match(regex)[0].toLowerCase() + '-';
    }
  }
  // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
  // However (prop in style) returns the correct value, so we'll have to test for
  // the precence of a specific property
  if ('WebkitOpacity' in styleDeclaration) { return '-webkit-'; }
  if ('KhtmlOpacity' in styleDeclaration) { return '-khtml-'; }
  return '';
}());
function extend(destination, from) {
  for (var prop in from) {
    if (from[prop]) {
      destination[prop] = from[prop];
    }
  }
  return destination;
}
function inherits(child, uber) {
  child.prototype = extend(child.prototype || {}, uber.prototype);
}
function hasIgnoredElements(el) {
  while (el.parentNode) {
    if (el.getAttribute('data-slideout-ignore') !== null) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}

/**
 * Slideout constructor
 */
function Slideout(options) {
  options = options || {};

  // Sets default values
  this._startOffsetX = 0;
  this._currentOffsetX = 0;
  this._opening = false;
  this._moved = false;
  this._opened = false;
  this._preventOpen = false;
  this._touch = options.touch === undefined ? true : options.touch && true;
  this._side = options.side || 'left';

  // Sets panel
  this.panel = options.panel;
  this.menu = options.menu;

  // Sets  classnames
  if (!this.panel.classList.contains('slideout-panel')) {
    this.panel.classList.add('slideout-panel');
  }
  if (!this.panel.classList.contains('slideout-panel-' + this._side)) {
    this.panel.classList.add('slideout-panel-' + this._side);
  }
  if (!this.menu.classList.contains('slideout-menu')) {
    this.menu.classList.add('slideout-menu');
  }
  if (!this.menu.classList.contains('slideout-menu-' + this._side)) {
    this.menu.classList.add('slideout-menu-' + this._side);
  }

  // Sets options
  this._fx = options.fx || 'ease';
  this._duration = parseInt(options.duration, 10) || 300;
  this._tolerance = parseInt(options.tolerance, 10) || 70;
  this._padding = this._translateTo = parseInt(options.padding, 10) || 256;
  this._orientation = this._side === 'right' ? -1 : 1;
  this._translateTo *= this._orientation;

  // Init touch events
  if (this._touch) {
    this._initTouchEvents();
  }
}

/**
 * Inherits from Emitter
 */
inherits(Slideout, Emitter);

/**
 * Opens the slideout menu.
 */
Slideout.prototype.open = function() {
  var self = this;
  this.emit('beforeopen');
  if (!html.classList.contains('slideout-open')) {
    html.classList.add('slideout-open');
  }
  this._setTransition();
  this._translateXTo(this._translateTo);
  this._opened = true;
  setTimeout(function() {
    self.panel.style.transition = self.panel.style['-webkit-transition'] = '';
    self.emit('open');
  }, this._duration + 50);
  return this;
};

/**
 * Closes slideout menu.
 */
Slideout.prototype.close = function() {
  var self = this;
  if (!this.isOpen() && !this._opening) {
    return this;
  }
  this.emit('beforeclose');
  this._setTransition();
  this._translateXTo(0);
  this._opened = false;
  setTimeout(function() {
    html.classList.remove('slideout-open');
    self.panel.style.transition = self.panel.style['-webkit-transition'] = self.panel.style[prefix + 'transform'] = self.panel.style.transform = '';
    self.emit('close');
  }, this._duration + 50);
  return this;
};

/**
 * Toggles (open/close) slideout menu.
 */
Slideout.prototype.toggle = function() {
  return this.isOpen() ? this.close() : this.open();
};

/**
 * Returns true if the slideout is currently open, and false if it is closed.
 */
Slideout.prototype.isOpen = function() {
  return this._opened;
};

/**
 * Translates panel and updates currentOffset with a given X point
 */
Slideout.prototype._translateXTo = function(translateX) {
  this._currentOffsetX = translateX;
  this.panel.style[prefix + 'transform'] = this.panel.style.transform = 'translateX(' + translateX + 'px)';
  return this;
};

/**
 * Set transition properties
 */
Slideout.prototype._setTransition = function() {
  this.panel.style[prefix + 'transition'] = this.panel.style.transition = prefix + 'transform ' + this._duration + 'ms ' + this._fx;
  return this;
};

/**
 * Initializes touch event
 */
Slideout.prototype._initTouchEvents = function() {
  var self = this;

  /**
   * Decouple scroll event
   */
  this._onScrollFn = decouple(doc, 'scroll', function() {
    if (!self._moved) {
      clearTimeout(scrollTimeout);
      scrolling = true;
      scrollTimeout = setTimeout(function() {
        scrolling = false;
      }, 250);
    }
  });

  /**
   * Prevents touchmove event if slideout is moving
   */
  this._preventMove = function(eve) {
    if (self._moved) {
      eve.preventDefault();
    }
  };

  doc.addEventListener(touch.move, this._preventMove);

  /**
   * Resets values on touchstart
   */
  this._resetTouchFn = function(eve) {
    if (typeof eve.touches === 'undefined') {
      return;
    }

    self._moved = false;
    self._opening = false;
    self._startOffsetX = eve.touches[0].pageX;
    self._preventOpen = (!self._touch || (!self.isOpen() && self.menu.clientWidth !== 0));
  };

  this.panel.addEventListener(touch.start, this._resetTouchFn);

  /**
   * Resets values on touchcancel
   */
  this._onTouchCancelFn = function() {
    self._moved = false;
    self._opening = false;
  };

  this.panel.addEventListener('touchcancel', this._onTouchCancelFn);

  /**
   * Toggles slideout on touchend
   */
  this._onTouchEndFn = function() {
    if (self._moved) {
      self.emit('translateend');
      (self._opening && Math.abs(self._currentOffsetX) > self._tolerance) ? self.open() : self.close();
    }
    self._moved = false;
  };

  this.panel.addEventListener(touch.end, this._onTouchEndFn);

  /**
   * Translates panel on touchmove
   */
  this._onTouchMoveFn = function(eve) {
    if (
      scrolling ||
      self._preventOpen ||
      typeof eve.touches === 'undefined' ||
      hasIgnoredElements(eve.target)
    ) {
      return;
    }

    var dif_x = eve.touches[0].clientX - self._startOffsetX;
    var translateX = self._currentOffsetX = dif_x;

    if (Math.abs(translateX) > self._padding) {
      return;
    }

    if (Math.abs(dif_x) > 20) {

      self._opening = true;

      var oriented_dif_x = dif_x * self._orientation;

      if (self._opened && oriented_dif_x > 0 || !self._opened && oriented_dif_x < 0) {
        return;
      }

      if (!self._moved) {
        self.emit('translatestart');
      }

      if (oriented_dif_x <= 0) {
        translateX = dif_x + self._padding * self._orientation;
        self._opening = false;
      }

      if (!(self._moved && html.classList.contains('slideout-open'))) {
        html.classList.add('slideout-open');
      }

      self.panel.style[prefix + 'transform'] = self.panel.style.transform = 'translateX(' + translateX + 'px)';
      self.emit('translate', translateX);
      self._moved = true;
    }

  };

  this.panel.addEventListener(touch.move, this._onTouchMoveFn);

  return this;
};

/**
 * Enable opening the slideout via touch events.
 */
Slideout.prototype.enableTouch = function() {
  this._touch = true;
  return this;
};

/**
 * Disable opening the slideout via touch events.
 */
Slideout.prototype.disableTouch = function() {
  this._touch = false;
  return this;
};

/**
 * Destroy an instance of slideout.
 */
Slideout.prototype.destroy = function() {
  // Close before clean
  this.close();

  // Remove event listeners
  doc.removeEventListener(touch.move, this._preventMove);
  this.panel.removeEventListener(touch.start, this._resetTouchFn);
  this.panel.removeEventListener('touchcancel', this._onTouchCancelFn);
  this.panel.removeEventListener(touch.end, this._onTouchEndFn);
  this.panel.removeEventListener(touch.move, this._onTouchMoveFn);
  doc.removeEventListener('scroll', this._onScrollFn);

  // Remove methods
  this.open = this.close = function() {};

  // Return the instance so it can be easily dereferenced
  return this;
};

/**
 * Expose Slideout
 */
module.exports = Slideout;


/***/ }),

/***/ "wFa1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("F+l/");
module.exports = __webpack_require__("TaGV").Object.keys;


/***/ }),

/***/ "wkG1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "yO+b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("bztI"), __esModule: true };

/***/ }),

/***/ "zJT+":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "zWQs":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "zafj":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("ADe/");
var isObject = __webpack_require__("fGh/");
var newPromiseCapability = __webpack_require__("WJTZ");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "zanB":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"2554","height":"690.2","viewBox":"1068.3 259.5 2554 690.2"}},[_c('path',{attrs:{"d":"M2381.5 740.1V291.8l-87.3 53.1v411.3c0 34 20.9 62.6 47.1 67.2l84.2-57.9c-18.5 12.5-44 11.7-44-25.4zM1508.1 394l68.8-47.4c31.8 15.5 55.5 48.1 39.2 83.6l-76.9 53.3c22.2-19.3 14-64.4-31.1-89.5zM1595.4 737.8v-42.4h-87.3V754c0 34 20.9 62.6 47.1 67.2l84.2-57.9c-18.5 12.3-44 11.6-44-25.5z"}}),_c('path',{attrs:{"d":"M1595.4 723.5v-240l-87.3 53.1v186.9zM2454.5 394l68.8-47.4c31.8 15.5 55.5 48.1 39.2 83.6l-76.9 53.3c22.2-19.3 14-64.4-31.1-89.5zM2541.8 737.8v-42.4h-87.3V754c0 34 20.9 62.6 47.1 67.2l84.2-57.9c-18.5 12.3-44 11.6-44-25.5z"}}),_c('path',{attrs:{"d":"M2541.8 723.5v-240l-87.3 53.1v186.9zM3533.8 617.7l-35.2-33.4-31-28.9c-24.2-22.5-13.4-40.2 4.5-47.4l64.3 39.1.3-.1.2.1.2-.2 85.3-31.4-31.4-22.6.2-.2-68.1-48.9-.2.1-.2-.1-143.4 84c-14.5 22.4-7.9 57.1 17 80.3l29.3 27.3h-.1l48.8 46 8.6 8.1 3.1 2.9 19.3 18c24.2 22.5 13.4 40.2-4.5 47.4l-64.3-39.2-.3.1-.2-.1-.2.3-85.3 31.4 31.4 22.6-.2.2 68.1 48.9.2-.1.2.1 143.4-84c14.5-22.4 7.9-57.1-17-80.3l-42.8-40zM3330.1 628.9V299.5l-87.3 53.1v213.6z"}}),_c('path',{attrs:{"d":"M3330.1 724.7V555.9l-87.3-62.7v231.5z"}}),_c('path',{attrs:{"d":"M3330.1 768.8v-44.1h-87.3V822zM3242.8 352.6l-41.2 25.6 59.9 2.5z"}}),_c('path',{attrs:{"d":"M3201.6 378.2s41.2 2.3 41.2 31.1 18.8-19.1 18.8-19.1l-4.8-39-55.2 27zM3330.1 299.5s-2 66.9 40.4 88.9h-55.6l15.2-88.9z"}}),_c('g',[_c('path',{attrs:{"d":"M2224.9 737.8v-42.4h-87.3V754c0 34 20.9 62.6 47.1 67.2l84.2-57.9c-18.5 12.3-44 11.6-44-25.5zM1970.1 375.2v42.4h87.3V359c0-34-20.9-62.6-47.1-67.2l-84.2 57.9c18.5-12.3 44-11.5 44 25.5zM2056.2 739.1v-42.4h-87.3v58.6c0 34 20.9 62.6 47.1 67.2l84.2-57.9c-18.5 12.4-44 11.6-44-25.5z"}}),_c('path',{attrs:{"d":"M1968.9 354.7h88.5v174.5h-88.5z"}}),_c('path',{attrs:{"d":"M2057.3 495.4l80.3 48.9v177h87.8V511.9l-101.8-73.1-154.7 90.4v191h91.6l-3.2-1.9z"}})]),_c('g',[_c('path',{attrs:{"d":"M3178.3 737.8v-42.4H3091V754c0 34 20.9 62.6 47.1 67.2l84.2-57.9c-18.5 12.3-44 11.6-44-25.5zM2923.5 375.2v42.4h87.3V359c0-34-20.9-62.6-47.1-67.2l-84.2 57.9c18.5-12.3 44-11.5 44 25.5zM3009.6 739.1v-42.4h-87.3v58.6c0 34 20.9 62.6 47.1 67.2l84.2-57.9c-18.5 12.4-44 11.6-44-25.5z"}}),_c('path',{attrs:{"d":"M2922.3 354.7h88.5v174.5h-88.5z"}}),_c('path',{attrs:{"d":"M3010.7 495.4l80.3 48.9v177h87.8V511.9l-101.9-73.1-154.6 90.4v191h91.5l-3.1-1.9z"}})]),_c('g',[_c('path',{attrs:{"d":"M1115.5 348.9v45.4h93.5v-62.8c0-36.4-22.3-67-50.5-72l-90.2 62.1c19.9-13.3 47.2-12.4 47.2 27.3zM1209 731.8v-45.4h-93.5v62.8c0 36.4 22.4 67 50.5 72l90.2-62.1c-19.8 13.3-47.2 12.4-47.2-27.3z"}}),_c('path',{attrs:{"d":"M1115.5 342.4h93.5v184.4h-93.5zM1115.5 526.8h93.5v177.1h-93.5zM1348.9 348.9v45.4h93.5v-62.8c0-36.4-22.3-67-50.5-72l-90.2 62.1c19.9-13.2 47.2-12.4 47.2 27.3zM1442.5 731.8v-45.4H1349v62.8c0 36.4 22.3 67 50.5 72l90.2-62.1c-19.9 13.3-47.2 12.4-47.2-27.3z"}}),_c('path',{attrs:{"d":"M1349 342.4h93.5v184.4H1349zM1349 526.8h93.5v177.1H1349z"}}),_c('path',{attrs:{"d":"M1201 580.9h207.6l-49.4-87.4H1230l-47.5 87.4z"}})]),_c('g',[_c('path',{attrs:{"d":"M1813.2 438.8l-154.6 90.4v221.3l101.1 70.8 155.3-94.6V511.9l-101.8-73.1zm14.1 328.4l-80.3-48.9v-223l80.3 48.9v223zM1827.3 785v110.7l-80.3-48.9-88.4 32.1 101.1 70.8 155.3-94.6V785z"}}),_c('path',{attrs:{"d":"M1827.3 696.7h87.8v111h-87.8z"}})]),_c('g',[_c('path',{attrs:{"d":"M2765.5 438.8l-154.6 90.4v221.3l101.1 70.8 155.3-94.6V511.9l-101.8-73.1zm14.1 328.4l-80.3-48.9v-223l80.3 48.9v223zM2779.6 785v110.7l-80.3-48.9-88.4 32.1 101.1 70.8 155.3-94.6V785z"}}),_c('path',{attrs:{"d":"M2779.6 696.7h87.8v111h-87.8z"}})])])}}};

/***/ }),

/***/ "zeFm":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("T/1i");
var toLength = __webpack_require__("gou2");
var toAbsoluteIndex = __webpack_require__("+eav");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "zg+w":
/***/ (function(module, exports) {

module.exports = {render: function () {with(this){return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"1333","height":"562.5","viewBox":"1120.3 284.3 1333 562.5"}},[_c('path',{attrs:{"d":"M1994.7 782c-26.9-11.6-42.8-34.2-42.8-50.6V505.9l83.2 50.7 90.9-33.5-105.5-75.8-160.1 93.7v229.2h.1l107.3 71.3 55.1-38.5 76.3-52.4V738s-38.8 36.6-74.4 45.1c-11.4 2.1-21.8 1.9-30.1-1.1zM1672.2 731.4c0 23 30.6 58.3 79.8 58.3-30.4 19.4-77 6.1-77 6.1l-24.4-33.3 21.6-31.1z"}}),_c('path',{attrs:{"d":"M1713.5 781.6c25 10.4 71.7-7.1 105.9-34v3.1l-76.3 52.4-29.6-21.5zM1740.8 447.3L1580.6 541v229.2l91.6 60.9V505.9l92 55.7 82.1-38.5z"}}),_c('path',{attrs:{"d":"M1752 789.7l-24.8 4.3-48.5-14.8 2.1-18.5-45.6-16.2v28.1c0 15.4 4.2 29.7 11 41.4l41.7 27.7 116.3-81.1c-7 4.6-44.9 29.1-52.2 29.1z"}}),_c('path',{attrs:{"d":"M1819.4 750.7V738s-49.7 46.9-88.1 46.9 9.9 14.3 9.9 14.3l78.2-48.5zM1810.8 533l-160.2 93.7h17.6l178.1-103.6"}}),_c('g',[_c('path',{attrs:{"d":"M2408 759.5v-43.7h-89.9v60.4c0 35 21.5 64.4 48.5 69.2l86.7-59.7c-19 12.7-45.3 11.9-45.3-26.2zM2145.6 386.1v43.7h89.9v-60.4c0-35-21.5-64.4-48.5-69.2l-86.7 59.7c19.1-12.7 45.3-11.9 45.3 26.2zM2234.3 760.8v-43.7h-89.9v60.4c0 35 21.5 64.4 48.5 69.2l86.7-59.7c-19.1 12.8-45.3 12-45.3-26.2z"}}),_c('path',{attrs:{"d":"M2144.4 365h91.1v179.7h-91.1z"}}),_c('path',{attrs:{"d":"M2235.4 509.8l82.7 50.4V742.5h90.4V526.9l-104.9-75.4-159.2 93.2v196.7h94.3l-3.3-2z"}})]),_c('g',[_c('path',{attrs:{"d":"M1209.7 377.8h45.4v-93.5h-62.8c-36.4 0-67 22.4-72 50.5l62.1 90.2c-13.3-19.8-12.5-47.2 27.3-47.2z"}}),_c('path',{attrs:{"d":"M1248.7 284.3h349.9l-37.4 93.5h-312.5z"}}),_c('path',{attrs:{"d":"M1464.6 536.7V354.2l-94.4-67.8V536.7z"}}),_c('path',{attrs:{"d":"M1464.6 584.4v-47.7h-94.4v105.1z"}}),_c('path',{attrs:{"d":"M1370.4 640.8c1 28.4-33.5 67.8-72.6 91.5 3.4 1.3 3.1 1.2 3.1 1.2l79.7-55.6-10.2-37.1z"}}),_c('path',{attrs:{"d":"M1300.9 733.4l-12.5-4.7s64.5-31.4 78.7-69.2c14.2-37.8 10.4 15 10.4 15l-76.6 58.9z"}}),_c('path',{attrs:{"d":"M1374.8 571.9l-4.6 1.2v68.7h-.1c.7 12.4-.8 25.8-6.1 39.9 30.3-22.6 34.4-73.4 34.4-73.4l-23.6-36.4z"}}),_c('path',{attrs:{"d":"M1426.9 586.6c-9-11-21.5-20.4-36.6-26.1l-20-7.5v50.1l10.5 2.6-3.4 53.1-13.4 22.8c-2.6 7.2-40.8 35.3-47.9 40.4l122.6-84.3-11.8-51.1z"}}),_c('path',{attrs:{"d":"M1346 701.9l118.6-82v-40.5l-49.4 19.9-38.6 70.4zM1173.6 548.4c0-129.3 138.2-206.5 138.2-206.5v40.3s-39.3 41-39.3 166.2-98.9 0-98.9 0z"}}),_c('path',{attrs:{"d":"M1505 758.7c-221.4 0-232.6-175.2-232.6-210.3h-98.8c0 103.6 59.8 273.4 275.7 298.4l55.8-35.5v-.1l82.5-52.4c-.1-.1-33.2-.1-82.6-.1z"}})])])}}};

/***/ })

/******/ });
//# sourceMappingURL=app.91adee9a440dbe9f22e4.js.map