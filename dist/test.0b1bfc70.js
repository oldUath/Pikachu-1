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
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n<style>\n.skin *{\n    margin: 0;\n    padding: 0;\n}\n\n.skin *::after,.skin *::before{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    min-height:50vh;\n    background-color: #FFDB00;\n}\n\n/* \u5236\u4F5C\u9F3B\u5B50 */\n.nose{\n    width: 0;\n    height: 0;\n    border: 10px solid black;\n    border-color:black transparent;\n    border-bottom: 0;\n    position: relative;\n    left: 50%;\n    top: 200px;\n    margin-left: -10px;\n    z-index: 999;\n}\n.nose::after{\n    content: '';\n    display: block;\n    width: 20px;\n    height: 8px;\n    background-color: black;\n    border-radius: 10px 10px 0 0;\n    position: absolute;\n    left: -10px;\n    top: -18px;\n}\n@keyframes move{\n    0%{\n        transform: rotate(0);\n    }\n    33%{\n        transform: rotate(10deg);\n    }\n    66%{\n        transform: rotate(-10deg);\n\n    }\n    100%{\n        transform: rotate(0deg);\n\n    }\n}\n.nose:hover{\n    transform-origin: center bottom;\n    animation: move .2s linear infinite;\n}\n/* \u5236\u4F5C\u773C\u775B */\n.eye{\n    width: 64px;\n    height: 64px;\n    border: 1px solid black;\n    border-radius: 50%;\n    background-color: #000;\n    position: absolute;\n    top: 150px;\n    left: 50%;\n    margin-left: -32px;\n}\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translateX(100px);\n}\n.eye::after{\n    content: '';\n    display: block;\n    width: 32px;\n    height: 32px;\n    background-color: #fff;\n    border-radius: 50%;\n    margin-left: 8px;\n    margin-top:2px\n}\n/* \u4E0A\u5634\u5507 */\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: relative;\n    top: 210px;\n    left: 50%;\n    margin-left: -100px;\n}\n.mouth.up{\n    background-color: #FFDB00;\n    z-index: 2;\n\n}\n.mouth .up .lib_left{\n    width: 100px;\n    height: 30px;\n    border: 3px solid black;\n    border-top: 0;\n    border-right: 0;\n    border-radius: 0 0 0 30px;\n    transform: rotate(-13deg);\n    position: absolute;\n    top: -6px;\n    left: 0;\n    background-color: #FFDB00;\n    z-index: 2;\n\n}\n.mouth .up .lib_right{\n    width: 100px;\n    height: 30px;\n    border: 3px solid black;\n    border-top: 0;\n    border-left: 0;\n    border-radius: 0 0 30px 0 ;\n    transform: rotate(11deg);\n    position: absolute;\n    top: -6px;\n    right: 0;\n    background-color: #FFDB00;\n    z-index: 2;\n}\n.mouth .up::after {\n    content: '';\n    display: block;\n    width: 10px;\n    height: 10px;\n    background-color: #FFDB00;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-5px);\n    top: -2px;\n    z-index: 4;\n}\n.mouth .down{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 0;\n    transform: translateX(-100px);\n    overflow: hidden;\n}\n.mouth .down .yuan1{\n    height: 1000px;\n    width:140px;\n    border: 2px solid black;\n    position: absolute;\n    top: -830px;\n    left: 30px;\n    border-radius: 90px / 280px;\n    background-color: #990513;\n    overflow: hidden;\n}\n.mouth .yuan1 .yuan2{\n    width: 140px;\n    height: 160px;\n    position: absolute;\n    top: 860px;\n    left: 0;\n    border-radius: 47%;\n    background-color: #FC4A62;\n}\n.face{\n    width: 88px;\n    height: 88px;\n    border: 3px solid black;\n    background-color: #FC0D1C;\n    position: relative;\n    left: 50%;\n    margin-left: -44px;\n    border-radius: 50%;\n}\n.face.left{\n    transform: translateX(-200px);\n    top: 44px;\n}\n.face.right{\n    transform: translateX(200px);\n    top: -44px;\n}\n\n</style>\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
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
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.0b1bfc70.js.map