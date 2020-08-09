// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n<style>\n.skin *{\n    margin: 0;\n    padding: 0;\n}\n\n.skin *::after,.skin *::before{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    min-height:50vh;\n    background-color: #FFDB00;\n}\n\n/* \u5236\u4F5C\u9F3B\u5B50 */\n.nose{\n    width: 0;\n    height: 0;\n    border: 10px solid black;\n    border-color:black transparent;\n    border-bottom: 0;\n    position: relative;\n    left: 50%;\n    top: 200px;\n    margin-left: -10px;\n    z-index: 999;\n}\n.nose::after{\n    content: '';\n    display: block;\n    width: 20px;\n    height: 8px;\n    background-color: black;\n    border-radius: 10px 10px 0 0;\n    position: absolute;\n    left: -10px;\n    top: -18px;\n}\n@keyframes move{\n    0%{\n        transform: rotate(0);\n    }\n    33%{\n        transform: rotate(10deg);\n    }\n    66%{\n        transform: rotate(-10deg);\n\n    }\n    100%{\n        transform: rotate(0deg);\n\n    }\n}\n.nose:hover{\n    transform-origin: center bottom;\n    animation: move .2s linear infinite;\n}\n/* \u5236\u4F5C\u773C\u775B */\n.eye{\n    width: 64px;\n    height: 64px;\n    border: 1px solid black;\n    border-radius: 50%;\n    background-color: #000;\n    position: absolute;\n    top: 150px;\n    left: 50%;\n    margin-left: -32px;\n}\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translateX(100px);\n}\n.eye::after{\n    content: '';\n    display: block;\n    width: 32px;\n    height: 32px;\n    background-color: #fff;\n    border-radius: 50%;\n    margin-left: 8px;\n    margin-top:2px\n}\n/* \u4E0A\u5634\u5507 */\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: relative;\n    top: 210px;\n    left: 50%;\n    margin-left: -100px;\n}\n.mouth.up{\n    background-color: #FFDB00;\n    z-index: 2;\n\n}\n.mouth .up .lib_left{\n    width: 100px;\n    height: 30px;\n    border: 3px solid black;\n    border-top: 0;\n    border-right: 0;\n    border-radius: 0 0 0 30px;\n    transform: rotate(-13deg);\n    position: absolute;\n    top: -6px;\n    left: 0;\n    background-color: #FFDB00;\n    z-index: 2;\n\n}\n.mouth .up .lib_right{\n    width: 100px;\n    height: 30px;\n    border: 3px solid black;\n    border-top: 0;\n    border-left: 0;\n    border-radius: 0 0 30px 0 ;\n    transform: rotate(11deg);\n    position: absolute;\n    top: -6px;\n    right: 0;\n    background-color: #FFDB00;\n    z-index: 2;\n}\n.mouth .up::after {\n    content: '';\n    display: block;\n    width: 10px;\n    height: 10px;\n    background-color: #FFDB00;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-5px);\n    top: -2px;\n    z-index: 4;\n}\n.mouth .down{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 0;\n    transform: translateX(-100px);\n    overflow: hidden;\n}\n.mouth .down .yuan1{\n    height: 1000px;\n    width:140px;\n    border: 2px solid black;\n    position: absolute;\n    top: -830px;\n    left: 30px;\n    border-radius: 90px / 280px;\n    background-color: #990513;\n    overflow: hidden;\n}\n.mouth .yuan1 .yuan2{\n    width: 140px;\n    height: 160px;\n    position: absolute;\n    top: 860px;\n    left: 0;\n    border-radius: 47%;\n    background-color: #FC4A62;\n}\n.face{\n    width: 88px;\n    height: 88px;\n    border: 3px solid black;\n    background-color: #FC0D1C;\n    position: relative;\n    left: 50%;\n    margin-left: -44px;\n    border-radius: 50%;\n}\n.face.left{\n    transform: translateX(-200px);\n    top: 44px;\n}\n.face.right{\n    transform: translateX(200px);\n    top: -44px;\n}\n\n</style>\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 0;
demo.innerHTML = _css.default.substring(0, n);
output.innerText = _css.default.substring(0, n);
var time = 50;

var run = function run() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
  }

  demo.innerHTML = _css.default.substring(0, n);
  output.innerText = _css.default.substring(0, n);
  output.scrollTo(0, 9999);
}; // 循环定时器会返回一个索引，可以用来停止定时器


var id = setInterval(run, time); //开始播放

play.onclick = function () {
  id = setInterval(run, time);
}; // 停止播放


pause.onclick = function () {
  window.clearInterval(id);
}; //慢速


slow.onclick = function () {
  window.clearInterval(id);
  time = 200;
  id = setInterval(run, time);
}; //中速


mid.onclick = function () {
  window.clearInterval(id);
  time = 50;
  id = setInterval(run, time);
}; //快速


quickly.onclick = function () {
  window.clearInterval(id);
  time = 0;
  id = setInterval(run, time);
};
},{"./css.js":"css.js"}],"C:/Users/Uath/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1063" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Uath/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map