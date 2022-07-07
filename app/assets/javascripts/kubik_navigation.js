// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6Tm31":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "916932b22e4085ab";
module.bundle.HMR_BUNDLE_ID = "91481c58dd76c00f";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"9vN5r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _stimulus = require("@hotwired/stimulus");
var _turbo = require("@hotwired/turbo");
var _navigationSelectorControllerJs = require("./controllers/navigation_selector_controller.js");
var _navigationSelectorControllerJsDefault = parcelHelpers.interopDefault(_navigationSelectorControllerJs);
var _dragControllerJs = require("./controllers/drag_controller.js");
var _dragControllerJsDefault = parcelHelpers.interopDefault(_dragControllerJs);
window.Stimulus = (0, _stimulus.Application).start();
Stimulus.register("navigation-selector", (0, _navigationSelectorControllerJsDefault.default));
Stimulus.register("drag", (0, _dragControllerJsDefault.default));

},{"@hotwired/stimulus":"hVNih","@hotwired/turbo":"lw7OH","./controllers/navigation_selector_controller.js":"2EvhZ","./controllers/drag_controller.js":"ib9fJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"hVNih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Application", ()=>Application);
parcelHelpers.export(exports, "AttributeObserver", ()=>AttributeObserver);
parcelHelpers.export(exports, "Context", ()=>Context);
parcelHelpers.export(exports, "Controller", ()=>Controller);
parcelHelpers.export(exports, "ElementObserver", ()=>ElementObserver);
parcelHelpers.export(exports, "IndexedMultimap", ()=>IndexedMultimap);
parcelHelpers.export(exports, "Multimap", ()=>Multimap);
parcelHelpers.export(exports, "StringMapObserver", ()=>StringMapObserver);
parcelHelpers.export(exports, "TokenListObserver", ()=>TokenListObserver);
parcelHelpers.export(exports, "ValueListObserver", ()=>ValueListObserver);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "defaultSchema", ()=>defaultSchema);
parcelHelpers.export(exports, "del", ()=>del);
parcelHelpers.export(exports, "fetch", ()=>fetch);
parcelHelpers.export(exports, "prune", ()=>prune);
/*
Stimulus 3.0.1
Copyright © 2021 Basecamp, LLC
 */ class EventListener {
    connect() {
        this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
    }
    disconnect() {
        this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
    }
    bindingConnected(binding) {
        this.unorderedBindings.add(binding);
    }
    bindingDisconnected(binding) {
        this.unorderedBindings.delete(binding);
    }
    handleEvent(event) {
        const extendedEvent = extendEvent(event);
        for (const binding of this.bindings){
            if (extendedEvent.immediatePropagationStopped) break;
            else binding.handleEvent(extendedEvent);
        }
    }
    get bindings() {
        return Array.from(this.unorderedBindings).sort((left, right)=>{
            const leftIndex = left.index, rightIndex = right.index;
            return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
        });
    }
    constructor(eventTarget, eventName, eventOptions){
        this.eventTarget = eventTarget;
        this.eventName = eventName;
        this.eventOptions = eventOptions;
        this.unorderedBindings = new Set();
    }
}
function extendEvent(event) {
    if ("immediatePropagationStopped" in event) return event;
    else {
        const { stopImmediatePropagation  } = event;
        return Object.assign(event, {
            immediatePropagationStopped: false,
            stopImmediatePropagation () {
                this.immediatePropagationStopped = true;
                stopImmediatePropagation.call(this);
            }
        });
    }
}
class Dispatcher {
    start() {
        if (!this.started) {
            this.started = true;
            this.eventListeners.forEach((eventListener)=>eventListener.connect());
        }
    }
    stop() {
        if (this.started) {
            this.started = false;
            this.eventListeners.forEach((eventListener)=>eventListener.disconnect());
        }
    }
    get eventListeners() {
        return Array.from(this.eventListenerMaps.values()).reduce((listeners, map)=>listeners.concat(Array.from(map.values())), []);
    }
    bindingConnected(binding) {
        this.fetchEventListenerForBinding(binding).bindingConnected(binding);
    }
    bindingDisconnected(binding) {
        this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
    }
    handleError(error1, message, detail = {}) {
        this.application.handleError(error1, `Error ${message}`, detail);
    }
    fetchEventListenerForBinding(binding) {
        const { eventTarget , eventName , eventOptions  } = binding;
        return this.fetchEventListener(eventTarget, eventName, eventOptions);
    }
    fetchEventListener(eventTarget, eventName, eventOptions) {
        const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
        const cacheKey = this.cacheKey(eventName, eventOptions);
        let eventListener = eventListenerMap.get(cacheKey);
        if (!eventListener) {
            eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
            eventListenerMap.set(cacheKey, eventListener);
        }
        return eventListener;
    }
    createEventListener(eventTarget, eventName, eventOptions) {
        const eventListener = new EventListener(eventTarget, eventName, eventOptions);
        if (this.started) eventListener.connect();
        return eventListener;
    }
    fetchEventListenerMapForEventTarget(eventTarget) {
        let eventListenerMap = this.eventListenerMaps.get(eventTarget);
        if (!eventListenerMap) {
            eventListenerMap = new Map;
            this.eventListenerMaps.set(eventTarget, eventListenerMap);
        }
        return eventListenerMap;
    }
    cacheKey(eventName, eventOptions) {
        const parts = [
            eventName
        ];
        Object.keys(eventOptions).sort().forEach((key)=>{
            parts.push(`${eventOptions[key] ? "" : "!"}${key}`);
        });
        return parts.join(":");
    }
    constructor(application){
        this.application = application;
        this.eventListenerMaps = new Map;
        this.started = false;
    }
}
const descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;
function parseActionDescriptorString(descriptorString) {
    const source = descriptorString.trim();
    const matches = source.match(descriptorPattern) || [];
    return {
        eventTarget: parseEventTarget(matches[4]),
        eventName: matches[2],
        eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
        identifier: matches[5],
        methodName: matches[7]
    };
}
function parseEventTarget(eventTargetName) {
    if (eventTargetName == "window") return window;
    else if (eventTargetName == "document") return document;
}
function parseEventOptions(eventOptions) {
    return eventOptions.split(":").reduce((options, token)=>Object.assign(options, {
            [token.replace(/^!/, "")]: !/^!/.test(token)
        }), {});
}
function stringifyEventTarget(eventTarget) {
    if (eventTarget == window) return "window";
    else if (eventTarget == document) return "document";
}
function camelize(value) {
    return value.replace(/(?:[_-])([a-z0-9])/g, (_, char)=>char.toUpperCase());
}
function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
function dasherize(value) {
    return value.replace(/([A-Z])/g, (_, char)=>`-${char.toLowerCase()}`);
}
function tokenize(value) {
    return value.match(/[^\s]+/g) || [];
}
class Action {
    static forToken(token) {
        return new this(token.element, token.index, parseActionDescriptorString(token.content));
    }
    toString() {
        const eventNameSuffix = this.eventTargetName ? `@${this.eventTargetName}` : "";
        return `${this.eventName}${eventNameSuffix}->${this.identifier}#${this.methodName}`;
    }
    get params() {
        if (this.eventTarget instanceof Element) return this.getParamsFromEventTargetAttributes(this.eventTarget);
        else return {};
    }
    getParamsFromEventTargetAttributes(eventTarget) {
        const params = {};
        const pattern = new RegExp(`^data-${this.identifier}-(.+)-param$`);
        const attributes = Array.from(eventTarget.attributes);
        attributes.forEach(({ name , value  })=>{
            const match = name.match(pattern);
            const key = match && match[1];
            if (key) Object.assign(params, {
                [camelize(key)]: typecast(value)
            });
        });
        return params;
    }
    get eventTargetName() {
        return stringifyEventTarget(this.eventTarget);
    }
    constructor(element, index, descriptor){
        this.element = element;
        this.index = index;
        this.eventTarget = descriptor.eventTarget || element;
        this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
        this.eventOptions = descriptor.eventOptions || {};
        this.identifier = descriptor.identifier || error("missing identifier");
        this.methodName = descriptor.methodName || error("missing method name");
    }
}
const defaultEventNames = {
    "a": (e)=>"click",
    "button": (e)=>"click",
    "form": (e)=>"submit",
    "details": (e)=>"toggle",
    "input": (e)=>e.getAttribute("type") == "submit" ? "click" : "input",
    "select": (e)=>"change",
    "textarea": (e)=>"input"
};
function getDefaultEventNameForElement(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName in defaultEventNames) return defaultEventNames[tagName](element);
}
function error(message) {
    throw new Error(message);
}
function typecast(value) {
    try {
        return JSON.parse(value);
    } catch (o_O) {
        return value;
    }
}
class Binding {
    get index() {
        return this.action.index;
    }
    get eventTarget() {
        return this.action.eventTarget;
    }
    get eventOptions() {
        return this.action.eventOptions;
    }
    get identifier() {
        return this.context.identifier;
    }
    handleEvent(event) {
        if (this.willBeInvokedByEvent(event)) this.invokeWithEvent(event);
    }
    get eventName() {
        return this.action.eventName;
    }
    get method() {
        const method = this.controller[this.methodName];
        if (typeof method == "function") return method;
        throw new Error(`Action "${this.action}" references undefined method "${this.methodName}"`);
    }
    invokeWithEvent(event) {
        const { target , currentTarget  } = event;
        try {
            const { params  } = this.action;
            const actionEvent = Object.assign(event, {
                params
            });
            this.method.call(this.controller, actionEvent);
            this.context.logDebugActivity(this.methodName, {
                event,
                target,
                currentTarget,
                action: this.methodName
            });
        } catch (error2) {
            const { identifier , controller , element , index  } = this;
            const detail = {
                identifier,
                controller,
                element,
                index,
                event
            };
            this.context.handleError(error2, `invoking action "${this.action}"`, detail);
        }
    }
    willBeInvokedByEvent(event) {
        const eventTarget = event.target;
        if (this.element === eventTarget) return true;
        else if (eventTarget instanceof Element && this.element.contains(eventTarget)) return this.scope.containsElement(eventTarget);
        else return this.scope.containsElement(this.action.element);
    }
    get controller() {
        return this.context.controller;
    }
    get methodName() {
        return this.action.methodName;
    }
    get element() {
        return this.scope.element;
    }
    get scope() {
        return this.context.scope;
    }
    constructor(context, action){
        this.context = context;
        this.action = action;
    }
}
class ElementObserver {
    start() {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, this.mutationObserverInit);
            this.refresh();
        }
    }
    pause(callback) {
        if (this.started) {
            this.mutationObserver.disconnect();
            this.started = false;
        }
        callback();
        if (!this.started) {
            this.mutationObserver.observe(this.element, this.mutationObserverInit);
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    }
    refresh() {
        if (this.started) {
            const matches = new Set(this.matchElementsInTree());
            for (const element of Array.from(this.elements))if (!matches.has(element)) this.removeElement(element);
            for (const element1 of Array.from(matches))this.addElement(element1);
        }
    }
    processMutations(mutations) {
        if (this.started) for (const mutation of mutations)this.processMutation(mutation);
    }
    processMutation(mutation) {
        if (mutation.type == "attributes") this.processAttributeChange(mutation.target, mutation.attributeName);
        else if (mutation.type == "childList") {
            this.processRemovedNodes(mutation.removedNodes);
            this.processAddedNodes(mutation.addedNodes);
        }
    }
    processAttributeChange(node, attributeName) {
        const element = node;
        if (this.elements.has(element)) {
            if (this.delegate.elementAttributeChanged && this.matchElement(element)) this.delegate.elementAttributeChanged(element, attributeName);
            else this.removeElement(element);
        } else if (this.matchElement(element)) this.addElement(element);
    }
    processRemovedNodes(nodes) {
        for (const node of Array.from(nodes)){
            const element = this.elementFromNode(node);
            if (element) this.processTree(element, this.removeElement);
        }
    }
    processAddedNodes(nodes) {
        for (const node of Array.from(nodes)){
            const element = this.elementFromNode(node);
            if (element && this.elementIsActive(element)) this.processTree(element, this.addElement);
        }
    }
    matchElement(element) {
        return this.delegate.matchElement(element);
    }
    matchElementsInTree(tree = this.element) {
        return this.delegate.matchElementsInTree(tree);
    }
    processTree(tree, processor) {
        for (const element of this.matchElementsInTree(tree))processor.call(this, element);
    }
    elementFromNode(node) {
        if (node.nodeType == Node.ELEMENT_NODE) return node;
    }
    elementIsActive(element) {
        if (element.isConnected != this.element.isConnected) return false;
        else return this.element.contains(element);
    }
    addElement(element) {
        if (!this.elements.has(element)) {
            if (this.elementIsActive(element)) {
                this.elements.add(element);
                if (this.delegate.elementMatched) this.delegate.elementMatched(element);
            }
        }
    }
    removeElement(element) {
        if (this.elements.has(element)) {
            this.elements.delete(element);
            if (this.delegate.elementUnmatched) this.delegate.elementUnmatched(element);
        }
    }
    constructor(element, delegate){
        this.mutationObserverInit = {
            attributes: true,
            childList: true,
            subtree: true
        };
        this.element = element;
        this.started = false;
        this.delegate = delegate;
        this.elements = new Set;
        this.mutationObserver = new MutationObserver((mutations)=>this.processMutations(mutations));
    }
}
class AttributeObserver {
    get element() {
        return this.elementObserver.element;
    }
    get selector() {
        return `[${this.attributeName}]`;
    }
    start() {
        this.elementObserver.start();
    }
    pause(callback) {
        this.elementObserver.pause(callback);
    }
    stop() {
        this.elementObserver.stop();
    }
    refresh() {
        this.elementObserver.refresh();
    }
    get started() {
        return this.elementObserver.started;
    }
    matchElement(element) {
        return element.hasAttribute(this.attributeName);
    }
    matchElementsInTree(tree) {
        const match = this.matchElement(tree) ? [
            tree
        ] : [];
        const matches = Array.from(tree.querySelectorAll(this.selector));
        return match.concat(matches);
    }
    elementMatched(element) {
        if (this.delegate.elementMatchedAttribute) this.delegate.elementMatchedAttribute(element, this.attributeName);
    }
    elementUnmatched(element) {
        if (this.delegate.elementUnmatchedAttribute) this.delegate.elementUnmatchedAttribute(element, this.attributeName);
    }
    elementAttributeChanged(element, attributeName) {
        if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) this.delegate.elementAttributeValueChanged(element, attributeName);
    }
    constructor(element, attributeName, delegate){
        this.attributeName = attributeName;
        this.delegate = delegate;
        this.elementObserver = new ElementObserver(element, this);
    }
}
class StringMapObserver {
    start() {
        if (!this.started) {
            this.started = true;
            this.mutationObserver.observe(this.element, {
                attributes: true,
                attributeOldValue: true
            });
            this.refresh();
        }
    }
    stop() {
        if (this.started) {
            this.mutationObserver.takeRecords();
            this.mutationObserver.disconnect();
            this.started = false;
        }
    }
    refresh() {
        if (this.started) for (const attributeName of this.knownAttributeNames)this.refreshAttribute(attributeName, null);
    }
    processMutations(mutations) {
        if (this.started) for (const mutation of mutations)this.processMutation(mutation);
    }
    processMutation(mutation) {
        const attributeName = mutation.attributeName;
        if (attributeName) this.refreshAttribute(attributeName, mutation.oldValue);
    }
    refreshAttribute(attributeName, oldValue) {
        const key = this.delegate.getStringMapKeyForAttribute(attributeName);
        if (key != null) {
            if (!this.stringMap.has(attributeName)) this.stringMapKeyAdded(key, attributeName);
            const value = this.element.getAttribute(attributeName);
            if (this.stringMap.get(attributeName) != value) this.stringMapValueChanged(value, key, oldValue);
            if (value == null) {
                const oldValue = this.stringMap.get(attributeName);
                this.stringMap.delete(attributeName);
                if (oldValue) this.stringMapKeyRemoved(key, attributeName, oldValue);
            } else this.stringMap.set(attributeName, value);
        }
    }
    stringMapKeyAdded(key, attributeName) {
        if (this.delegate.stringMapKeyAdded) this.delegate.stringMapKeyAdded(key, attributeName);
    }
    stringMapValueChanged(value, key, oldValue) {
        if (this.delegate.stringMapValueChanged) this.delegate.stringMapValueChanged(value, key, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
        if (this.delegate.stringMapKeyRemoved) this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
    }
    get knownAttributeNames() {
        return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
    }
    get currentAttributeNames() {
        return Array.from(this.element.attributes).map((attribute)=>attribute.name);
    }
    get recordedAttributeNames() {
        return Array.from(this.stringMap.keys());
    }
    constructor(element, delegate){
        this.element = element;
        this.delegate = delegate;
        this.started = false;
        this.stringMap = new Map;
        this.mutationObserver = new MutationObserver((mutations)=>this.processMutations(mutations));
    }
}
function add(map, key, value) {
    fetch(map, key).add(value);
}
function del(map, key, value) {
    fetch(map, key).delete(value);
    prune(map, key);
}
function fetch(map, key) {
    let values = map.get(key);
    if (!values) {
        values = new Set();
        map.set(key, values);
    }
    return values;
}
function prune(map, key) {
    const values = map.get(key);
    if (values != null && values.size == 0) map.delete(key);
}
class Multimap {
    get keys() {
        return Array.from(this.valuesByKey.keys());
    }
    get values() {
        const sets = Array.from(this.valuesByKey.values());
        return sets.reduce((values, set)=>values.concat(Array.from(set)), []);
    }
    get size() {
        const sets = Array.from(this.valuesByKey.values());
        return sets.reduce((size, set)=>size + set.size, 0);
    }
    add(key, value) {
        add(this.valuesByKey, key, value);
    }
    delete(key, value) {
        del(this.valuesByKey, key, value);
    }
    has(key, value) {
        const values = this.valuesByKey.get(key);
        return values != null && values.has(value);
    }
    hasKey(key) {
        return this.valuesByKey.has(key);
    }
    hasValue(value) {
        const sets = Array.from(this.valuesByKey.values());
        return sets.some((set)=>set.has(value));
    }
    getValuesForKey(key) {
        const values = this.valuesByKey.get(key);
        return values ? Array.from(values) : [];
    }
    getKeysForValue(value) {
        return Array.from(this.valuesByKey).filter(([key, values])=>values.has(value)).map(([key, values])=>key);
    }
    constructor(){
        this.valuesByKey = new Map();
    }
}
class IndexedMultimap extends Multimap {
    get values() {
        return Array.from(this.keysByValue.keys());
    }
    add(key, value) {
        super.add(key, value);
        add(this.keysByValue, value, key);
    }
    delete(key, value) {
        super.delete(key, value);
        del(this.keysByValue, value, key);
    }
    hasValue(value) {
        return this.keysByValue.has(value);
    }
    getKeysForValue(value) {
        const set = this.keysByValue.get(value);
        return set ? Array.from(set) : [];
    }
    constructor(){
        super();
        this.keysByValue = new Map;
    }
}
class TokenListObserver {
    get started() {
        return this.attributeObserver.started;
    }
    start() {
        this.attributeObserver.start();
    }
    pause(callback) {
        this.attributeObserver.pause(callback);
    }
    stop() {
        this.attributeObserver.stop();
    }
    refresh() {
        this.attributeObserver.refresh();
    }
    get element() {
        return this.attributeObserver.element;
    }
    get attributeName() {
        return this.attributeObserver.attributeName;
    }
    elementMatchedAttribute(element) {
        this.tokensMatched(this.readTokensForElement(element));
    }
    elementAttributeValueChanged(element) {
        const [unmatchedTokens, matchedTokens] = this.refreshTokensForElement(element);
        this.tokensUnmatched(unmatchedTokens);
        this.tokensMatched(matchedTokens);
    }
    elementUnmatchedAttribute(element) {
        this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
    }
    tokensMatched(tokens) {
        tokens.forEach((token)=>this.tokenMatched(token));
    }
    tokensUnmatched(tokens) {
        tokens.forEach((token)=>this.tokenUnmatched(token));
    }
    tokenMatched(token) {
        this.delegate.tokenMatched(token);
        this.tokensByElement.add(token.element, token);
    }
    tokenUnmatched(token) {
        this.delegate.tokenUnmatched(token);
        this.tokensByElement.delete(token.element, token);
    }
    refreshTokensForElement(element) {
        const previousTokens = this.tokensByElement.getValuesForKey(element);
        const currentTokens = this.readTokensForElement(element);
        const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(([previousToken, currentToken])=>!tokensAreEqual(previousToken, currentToken));
        if (firstDifferingIndex == -1) return [
            [],
            []
        ];
        else return [
            previousTokens.slice(firstDifferingIndex),
            currentTokens.slice(firstDifferingIndex)
        ];
    }
    readTokensForElement(element) {
        const attributeName = this.attributeName;
        const tokenString = element.getAttribute(attributeName) || "";
        return parseTokenString(tokenString, element, attributeName);
    }
    constructor(element, attributeName, delegate){
        this.attributeObserver = new AttributeObserver(element, attributeName, this);
        this.delegate = delegate;
        this.tokensByElement = new Multimap;
    }
}
function parseTokenString(tokenString, element, attributeName) {
    return tokenString.trim().split(/\s+/).filter((content)=>content.length).map((content, index)=>({
            element,
            attributeName,
            content,
            index
        }));
}
function zip(left, right) {
    const length = Math.max(left.length, right.length);
    return Array.from({
        length
    }, (_, index)=>[
            left[index],
            right[index]
        ]);
}
function tokensAreEqual(left, right) {
    return left && right && left.index == right.index && left.content == right.content;
}
class ValueListObserver {
    get started() {
        return this.tokenListObserver.started;
    }
    start() {
        this.tokenListObserver.start();
    }
    stop() {
        this.tokenListObserver.stop();
    }
    refresh() {
        this.tokenListObserver.refresh();
    }
    get element() {
        return this.tokenListObserver.element;
    }
    get attributeName() {
        return this.tokenListObserver.attributeName;
    }
    tokenMatched(token) {
        const { element  } = token;
        const { value  } = this.fetchParseResultForToken(token);
        if (value) {
            this.fetchValuesByTokenForElement(element).set(token, value);
            this.delegate.elementMatchedValue(element, value);
        }
    }
    tokenUnmatched(token) {
        const { element  } = token;
        const { value  } = this.fetchParseResultForToken(token);
        if (value) {
            this.fetchValuesByTokenForElement(element).delete(token);
            this.delegate.elementUnmatchedValue(element, value);
        }
    }
    fetchParseResultForToken(token) {
        let parseResult = this.parseResultsByToken.get(token);
        if (!parseResult) {
            parseResult = this.parseToken(token);
            this.parseResultsByToken.set(token, parseResult);
        }
        return parseResult;
    }
    fetchValuesByTokenForElement(element) {
        let valuesByToken = this.valuesByTokenByElement.get(element);
        if (!valuesByToken) {
            valuesByToken = new Map;
            this.valuesByTokenByElement.set(element, valuesByToken);
        }
        return valuesByToken;
    }
    parseToken(token) {
        try {
            const value = this.delegate.parseValueForToken(token);
            return {
                value
            };
        } catch (error3) {
            return {
                error: error3
            };
        }
    }
    constructor(element, attributeName, delegate){
        this.tokenListObserver = new TokenListObserver(element, attributeName, this);
        this.delegate = delegate;
        this.parseResultsByToken = new WeakMap;
        this.valuesByTokenByElement = new WeakMap;
    }
}
class BindingObserver {
    start() {
        if (!this.valueListObserver) {
            this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
            this.valueListObserver.start();
        }
    }
    stop() {
        if (this.valueListObserver) {
            this.valueListObserver.stop();
            delete this.valueListObserver;
            this.disconnectAllActions();
        }
    }
    get element() {
        return this.context.element;
    }
    get identifier() {
        return this.context.identifier;
    }
    get actionAttribute() {
        return this.schema.actionAttribute;
    }
    get schema() {
        return this.context.schema;
    }
    get bindings() {
        return Array.from(this.bindingsByAction.values());
    }
    connectAction(action) {
        const binding = new Binding(this.context, action);
        this.bindingsByAction.set(action, binding);
        this.delegate.bindingConnected(binding);
    }
    disconnectAction(action) {
        const binding = this.bindingsByAction.get(action);
        if (binding) {
            this.bindingsByAction.delete(action);
            this.delegate.bindingDisconnected(binding);
        }
    }
    disconnectAllActions() {
        this.bindings.forEach((binding)=>this.delegate.bindingDisconnected(binding));
        this.bindingsByAction.clear();
    }
    parseValueForToken(token) {
        const action = Action.forToken(token);
        if (action.identifier == this.identifier) return action;
    }
    elementMatchedValue(element, action) {
        this.connectAction(action);
    }
    elementUnmatchedValue(element, action) {
        this.disconnectAction(action);
    }
    constructor(context, delegate){
        this.context = context;
        this.delegate = delegate;
        this.bindingsByAction = new Map;
    }
}
class ValueObserver {
    start() {
        this.stringMapObserver.start();
    }
    stop() {
        this.stringMapObserver.stop();
    }
    get element() {
        return this.context.element;
    }
    get controller() {
        return this.context.controller;
    }
    getStringMapKeyForAttribute(attributeName) {
        if (attributeName in this.valueDescriptorMap) return this.valueDescriptorMap[attributeName].name;
    }
    stringMapKeyAdded(key, attributeName) {
        const descriptor = this.valueDescriptorMap[attributeName];
        if (!this.hasValue(key)) this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
    }
    stringMapValueChanged(value, name, oldValue) {
        const descriptor = this.valueDescriptorNameMap[name];
        if (value === null) return;
        if (oldValue === null) oldValue = descriptor.writer(descriptor.defaultValue);
        this.invokeChangedCallback(name, value, oldValue);
    }
    stringMapKeyRemoved(key, attributeName, oldValue) {
        const descriptor = this.valueDescriptorNameMap[key];
        if (this.hasValue(key)) this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
        else this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
    }
    invokeChangedCallbacksForDefaultValues() {
        for (const { key , name , defaultValue , writer  } of this.valueDescriptors)if (defaultValue != undefined && !this.controller.data.has(key)) this.invokeChangedCallback(name, writer(defaultValue), undefined);
    }
    invokeChangedCallback(name, rawValue, rawOldValue) {
        const changedMethodName = `${name}Changed`;
        const changedMethod = this.receiver[changedMethodName];
        if (typeof changedMethod == "function") {
            const descriptor = this.valueDescriptorNameMap[name];
            const value = descriptor.reader(rawValue);
            let oldValue = rawOldValue;
            if (rawOldValue) oldValue = descriptor.reader(rawOldValue);
            changedMethod.call(this.receiver, value, oldValue);
        }
    }
    get valueDescriptors() {
        const { valueDescriptorMap  } = this;
        return Object.keys(valueDescriptorMap).map((key)=>valueDescriptorMap[key]);
    }
    get valueDescriptorNameMap() {
        const descriptors = {};
        Object.keys(this.valueDescriptorMap).forEach((key)=>{
            const descriptor = this.valueDescriptorMap[key];
            descriptors[descriptor.name] = descriptor;
        });
        return descriptors;
    }
    hasValue(attributeName) {
        const descriptor = this.valueDescriptorNameMap[attributeName];
        const hasMethodName = `has${capitalize(descriptor.name)}`;
        return this.receiver[hasMethodName];
    }
    constructor(context, receiver){
        this.context = context;
        this.receiver = receiver;
        this.stringMapObserver = new StringMapObserver(this.element, this);
        this.valueDescriptorMap = this.controller.valueDescriptorMap;
        this.invokeChangedCallbacksForDefaultValues();
    }
}
class TargetObserver {
    start() {
        if (!this.tokenListObserver) {
            this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
            this.tokenListObserver.start();
        }
    }
    stop() {
        if (this.tokenListObserver) {
            this.disconnectAllTargets();
            this.tokenListObserver.stop();
            delete this.tokenListObserver;
        }
    }
    tokenMatched({ element , content: name  }) {
        if (this.scope.containsElement(element)) this.connectTarget(element, name);
    }
    tokenUnmatched({ element , content: name  }) {
        this.disconnectTarget(element, name);
    }
    connectTarget(element, name) {
        var _a;
        if (!this.targetsByName.has(name, element)) {
            this.targetsByName.add(name, element);
            (_a = this.tokenListObserver) === null || _a === void 0 || _a.pause(()=>this.delegate.targetConnected(element, name));
        }
    }
    disconnectTarget(element, name) {
        var _a;
        if (this.targetsByName.has(name, element)) {
            this.targetsByName.delete(name, element);
            (_a = this.tokenListObserver) === null || _a === void 0 || _a.pause(()=>this.delegate.targetDisconnected(element, name));
        }
    }
    disconnectAllTargets() {
        for (const name of this.targetsByName.keys)for (const element of this.targetsByName.getValuesForKey(name))this.disconnectTarget(element, name);
    }
    get attributeName() {
        return `data-${this.context.identifier}-target`;
    }
    get element() {
        return this.context.element;
    }
    get scope() {
        return this.context.scope;
    }
    constructor(context, delegate){
        this.context = context;
        this.delegate = delegate;
        this.targetsByName = new Multimap;
    }
}
class Context {
    connect() {
        this.bindingObserver.start();
        this.valueObserver.start();
        this.targetObserver.start();
        try {
            this.controller.connect();
            this.logDebugActivity("connect");
        } catch (error4) {
            this.handleError(error4, "connecting controller");
        }
    }
    disconnect() {
        try {
            this.controller.disconnect();
            this.logDebugActivity("disconnect");
        } catch (error5) {
            this.handleError(error5, "disconnecting controller");
        }
        this.targetObserver.stop();
        this.valueObserver.stop();
        this.bindingObserver.stop();
    }
    get application() {
        return this.module.application;
    }
    get identifier() {
        return this.module.identifier;
    }
    get schema() {
        return this.application.schema;
    }
    get dispatcher() {
        return this.application.dispatcher;
    }
    get element() {
        return this.scope.element;
    }
    get parentElement() {
        return this.element.parentElement;
    }
    handleError(error6, message, detail = {}) {
        const { identifier , controller , element  } = this;
        detail = Object.assign({
            identifier,
            controller,
            element
        }, detail);
        this.application.handleError(error6, `Error ${message}`, detail);
    }
    targetConnected(element, name) {
        this.invokeControllerMethod(`${name}TargetConnected`, element);
    }
    targetDisconnected(element, name) {
        this.invokeControllerMethod(`${name}TargetDisconnected`, element);
    }
    invokeControllerMethod(methodName, ...args) {
        const controller = this.controller;
        if (typeof controller[methodName] == "function") controller[methodName](...args);
    }
    constructor(module, scope){
        this.logDebugActivity = (functionName, detail = {})=>{
            const { identifier , controller , element  } = this;
            detail = Object.assign({
                identifier,
                controller,
                element
            }, detail);
            this.application.logDebugActivity(this.identifier, functionName, detail);
        };
        this.module = module;
        this.scope = scope;
        this.controller = new module.controllerConstructor(this);
        this.bindingObserver = new BindingObserver(this, this.dispatcher);
        this.valueObserver = new ValueObserver(this, this.controller);
        this.targetObserver = new TargetObserver(this, this);
        try {
            this.controller.initialize();
            this.logDebugActivity("initialize");
        } catch (error7) {
            this.handleError(error7, "initializing controller");
        }
    }
}
function readInheritableStaticArrayValues(constructor1, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor1);
    return Array.from(ancestors.reduce((values, constructor)=>{
        getOwnStaticArrayValues(constructor, propertyName).forEach((name)=>values.add(name));
        return values;
    }, new Set));
}
function readInheritableStaticObjectPairs(constructor2, propertyName) {
    const ancestors = getAncestorsForConstructor(constructor2);
    return ancestors.reduce((pairs, constructor)=>{
        pairs.push(...getOwnStaticObjectPairs(constructor, propertyName));
        return pairs;
    }, []);
}
function getAncestorsForConstructor(constructor) {
    const ancestors = [];
    while(constructor){
        ancestors.push(constructor);
        constructor = Object.getPrototypeOf(constructor);
    }
    return ancestors.reverse();
}
function getOwnStaticArrayValues(constructor, propertyName) {
    const definition = constructor[propertyName];
    return Array.isArray(definition) ? definition : [];
}
function getOwnStaticObjectPairs(constructor, propertyName) {
    const definition = constructor[propertyName];
    return definition ? Object.keys(definition).map((key)=>[
            key,
            definition[key]
        ]) : [];
}
function bless(constructor) {
    return shadow(constructor, getBlessedProperties(constructor));
}
function shadow(constructor, properties) {
    const shadowConstructor = extend(constructor);
    const shadowProperties = getShadowProperties(constructor.prototype, properties);
    Object.defineProperties(shadowConstructor.prototype, shadowProperties);
    return shadowConstructor;
}
function getBlessedProperties(constructor) {
    const blessings = readInheritableStaticArrayValues(constructor, "blessings");
    return blessings.reduce((blessedProperties, blessing)=>{
        const properties = blessing(constructor);
        for(const key in properties){
            const descriptor = blessedProperties[key] || {};
            blessedProperties[key] = Object.assign(descriptor, properties[key]);
        }
        return blessedProperties;
    }, {});
}
function getShadowProperties(prototype, properties) {
    return getOwnKeys(properties).reduce((shadowProperties, key)=>{
        const descriptor = getShadowedDescriptor(prototype, properties, key);
        if (descriptor) Object.assign(shadowProperties, {
            [key]: descriptor
        });
        return shadowProperties;
    }, {});
}
function getShadowedDescriptor(prototype, properties, key) {
    const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
    const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;
    if (!shadowedByValue) {
        const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;
        if (shadowingDescriptor) {
            descriptor.get = shadowingDescriptor.get || descriptor.get;
            descriptor.set = shadowingDescriptor.set || descriptor.set;
        }
        return descriptor;
    }
}
const getOwnKeys = (()=>{
    if (typeof Object.getOwnPropertySymbols == "function") return (object)=>[
            ...Object.getOwnPropertyNames(object),
            ...Object.getOwnPropertySymbols(object)
        ];
    else return Object.getOwnPropertyNames;
})();
const extend = (()=>{
    function extendWithReflect(constructor) {
        function extended() {
            return Reflect.construct(constructor, arguments, new.target);
        }
        extended.prototype = Object.create(constructor.prototype, {
            constructor: {
                value: extended
            }
        });
        Reflect.setPrototypeOf(extended, constructor);
        return extended;
    }
    function testReflectExtension() {
        const a = function() {
            this.a.call(this);
        };
        const b = extendWithReflect(a);
        b.prototype.a = function() {};
        return new b;
    }
    try {
        testReflectExtension();
        return extendWithReflect;
    } catch (error) {
        return (constructor)=>class extended extends constructor {
            };
    }
})();
function blessDefinition(definition) {
    return {
        identifier: definition.identifier,
        controllerConstructor: bless(definition.controllerConstructor)
    };
}
class Module {
    get identifier() {
        return this.definition.identifier;
    }
    get controllerConstructor() {
        return this.definition.controllerConstructor;
    }
    get contexts() {
        return Array.from(this.connectedContexts);
    }
    connectContextForScope(scope) {
        const context = this.fetchContextForScope(scope);
        this.connectedContexts.add(context);
        context.connect();
    }
    disconnectContextForScope(scope) {
        const context = this.contextsByScope.get(scope);
        if (context) {
            this.connectedContexts.delete(context);
            context.disconnect();
        }
    }
    fetchContextForScope(scope) {
        let context = this.contextsByScope.get(scope);
        if (!context) {
            context = new Context(this, scope);
            this.contextsByScope.set(scope, context);
        }
        return context;
    }
    constructor(application, definition){
        this.application = application;
        this.definition = blessDefinition(definition);
        this.contextsByScope = new WeakMap;
        this.connectedContexts = new Set;
    }
}
class ClassMap {
    has(name) {
        return this.data.has(this.getDataKey(name));
    }
    get(name) {
        return this.getAll(name)[0];
    }
    getAll(name) {
        const tokenString = this.data.get(this.getDataKey(name)) || "";
        return tokenize(tokenString);
    }
    getAttributeName(name) {
        return this.data.getAttributeNameForKey(this.getDataKey(name));
    }
    getDataKey(name) {
        return `${name}-class`;
    }
    get data() {
        return this.scope.data;
    }
    constructor(scope){
        this.scope = scope;
    }
}
class DataMap {
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get(key) {
        const name = this.getAttributeNameForKey(key);
        return this.element.getAttribute(name);
    }
    set(key, value) {
        const name = this.getAttributeNameForKey(key);
        this.element.setAttribute(name, value);
        return this.get(key);
    }
    has(key) {
        const name = this.getAttributeNameForKey(key);
        return this.element.hasAttribute(name);
    }
    delete(key) {
        if (this.has(key)) {
            const name = this.getAttributeNameForKey(key);
            this.element.removeAttribute(name);
            return true;
        } else return false;
    }
    getAttributeNameForKey(key) {
        return `data-${this.identifier}-${dasherize(key)}`;
    }
    constructor(scope){
        this.scope = scope;
    }
}
class Guide {
    warn(object, key, message) {
        let warnedKeys = this.warnedKeysByObject.get(object);
        if (!warnedKeys) {
            warnedKeys = new Set;
            this.warnedKeysByObject.set(object, warnedKeys);
        }
        if (!warnedKeys.has(key)) {
            warnedKeys.add(key);
            this.logger.warn(message, object);
        }
    }
    constructor(logger){
        this.warnedKeysByObject = new WeakMap;
        this.logger = logger;
    }
}
function attributeValueContainsToken(attributeName, token) {
    return `[${attributeName}~="${token}"]`;
}
class TargetSet {
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get schema() {
        return this.scope.schema;
    }
    has(targetName) {
        return this.find(targetName) != null;
    }
    find(...targetNames) {
        return targetNames.reduce((target, targetName)=>target || this.findTarget(targetName) || this.findLegacyTarget(targetName), undefined);
    }
    findAll(...targetNames) {
        return targetNames.reduce((targets, targetName)=>[
                ...targets,
                ...this.findAllTargets(targetName),
                ...this.findAllLegacyTargets(targetName)
            ], []);
    }
    findTarget(targetName) {
        const selector = this.getSelectorForTargetName(targetName);
        return this.scope.findElement(selector);
    }
    findAllTargets(targetName) {
        const selector = this.getSelectorForTargetName(targetName);
        return this.scope.findAllElements(selector);
    }
    getSelectorForTargetName(targetName) {
        const attributeName = this.schema.targetAttributeForScope(this.identifier);
        return attributeValueContainsToken(attributeName, targetName);
    }
    findLegacyTarget(targetName) {
        const selector = this.getLegacySelectorForTargetName(targetName);
        return this.deprecate(this.scope.findElement(selector), targetName);
    }
    findAllLegacyTargets(targetName) {
        const selector = this.getLegacySelectorForTargetName(targetName);
        return this.scope.findAllElements(selector).map((element)=>this.deprecate(element, targetName));
    }
    getLegacySelectorForTargetName(targetName) {
        const targetDescriptor = `${this.identifier}.${targetName}`;
        return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
    }
    deprecate(element, targetName) {
        if (element) {
            const { identifier  } = this;
            const attributeName = this.schema.targetAttribute;
            const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
            this.guide.warn(element, `target:${targetName}`, `Please replace ${attributeName}="${identifier}.${targetName}" with ${revisedAttributeName}="${targetName}". ` + `The ${attributeName} attribute is deprecated and will be removed in a future version of Stimulus.`);
        }
        return element;
    }
    get guide() {
        return this.scope.guide;
    }
    constructor(scope){
        this.scope = scope;
    }
}
class Scope {
    findElement(selector) {
        return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
    }
    findAllElements(selector) {
        return [
            ...this.element.matches(selector) ? [
                this.element
            ] : [],
            ...this.queryElements(selector).filter(this.containsElement)
        ];
    }
    queryElements(selector) {
        return Array.from(this.element.querySelectorAll(selector));
    }
    get controllerSelector() {
        return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
    }
    constructor(schema, element2, identifier, logger){
        this.targets = new TargetSet(this);
        this.classes = new ClassMap(this);
        this.data = new DataMap(this);
        this.containsElement = (element)=>{
            return element.closest(this.controllerSelector) === this.element;
        };
        this.schema = schema;
        this.element = element2;
        this.identifier = identifier;
        this.guide = new Guide(logger);
    }
}
class ScopeObserver {
    start() {
        this.valueListObserver.start();
    }
    stop() {
        this.valueListObserver.stop();
    }
    get controllerAttribute() {
        return this.schema.controllerAttribute;
    }
    parseValueForToken(token) {
        const { element , content: identifier  } = token;
        const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
        let scope = scopesByIdentifier.get(identifier);
        if (!scope) {
            scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
            scopesByIdentifier.set(identifier, scope);
        }
        return scope;
    }
    elementMatchedValue(element, value) {
        const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
        this.scopeReferenceCounts.set(value, referenceCount);
        if (referenceCount == 1) this.delegate.scopeConnected(value);
    }
    elementUnmatchedValue(element, value) {
        const referenceCount = this.scopeReferenceCounts.get(value);
        if (referenceCount) {
            this.scopeReferenceCounts.set(value, referenceCount - 1);
            if (referenceCount == 1) this.delegate.scopeDisconnected(value);
        }
    }
    fetchScopesByIdentifierForElement(element) {
        let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);
        if (!scopesByIdentifier) {
            scopesByIdentifier = new Map;
            this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
        }
        return scopesByIdentifier;
    }
    constructor(element, schema, delegate){
        this.element = element;
        this.schema = schema;
        this.delegate = delegate;
        this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
        this.scopesByIdentifierByElement = new WeakMap;
        this.scopeReferenceCounts = new WeakMap;
    }
}
class Router {
    get element() {
        return this.application.element;
    }
    get schema() {
        return this.application.schema;
    }
    get logger() {
        return this.application.logger;
    }
    get controllerAttribute() {
        return this.schema.controllerAttribute;
    }
    get modules() {
        return Array.from(this.modulesByIdentifier.values());
    }
    get contexts() {
        return this.modules.reduce((contexts, module)=>contexts.concat(module.contexts), []);
    }
    start() {
        this.scopeObserver.start();
    }
    stop() {
        this.scopeObserver.stop();
    }
    loadDefinition(definition) {
        this.unloadIdentifier(definition.identifier);
        const module = new Module(this.application, definition);
        this.connectModule(module);
    }
    unloadIdentifier(identifier) {
        const module = this.modulesByIdentifier.get(identifier);
        if (module) this.disconnectModule(module);
    }
    getContextForElementAndIdentifier(element, identifier) {
        const module = this.modulesByIdentifier.get(identifier);
        if (module) return module.contexts.find((context)=>context.element == element);
    }
    handleError(error8, message, detail) {
        this.application.handleError(error8, message, detail);
    }
    createScopeForElementAndIdentifier(element, identifier) {
        return new Scope(this.schema, element, identifier, this.logger);
    }
    scopeConnected(scope) {
        this.scopesByIdentifier.add(scope.identifier, scope);
        const module = this.modulesByIdentifier.get(scope.identifier);
        if (module) module.connectContextForScope(scope);
    }
    scopeDisconnected(scope) {
        this.scopesByIdentifier.delete(scope.identifier, scope);
        const module = this.modulesByIdentifier.get(scope.identifier);
        if (module) module.disconnectContextForScope(scope);
    }
    connectModule(module) {
        this.modulesByIdentifier.set(module.identifier, module);
        const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach((scope)=>module.connectContextForScope(scope));
    }
    disconnectModule(module) {
        this.modulesByIdentifier.delete(module.identifier);
        const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
        scopes.forEach((scope)=>module.disconnectContextForScope(scope));
    }
    constructor(application){
        this.application = application;
        this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
        this.scopesByIdentifier = new Multimap;
        this.modulesByIdentifier = new Map;
    }
}
const defaultSchema = {
    controllerAttribute: "data-controller",
    actionAttribute: "data-action",
    targetAttribute: "data-target",
    targetAttributeForScope: (identifier)=>`data-${identifier}-target`
};
class Application {
    static start(element, schema) {
        const application = new Application(element, schema);
        application.start();
        return application;
    }
    async start() {
        await domReady();
        this.logDebugActivity("application", "starting");
        this.dispatcher.start();
        this.router.start();
        this.logDebugActivity("application", "start");
    }
    stop() {
        this.logDebugActivity("application", "stopping");
        this.dispatcher.stop();
        this.router.stop();
        this.logDebugActivity("application", "stop");
    }
    register(identifier, controllerConstructor) {
        if (controllerConstructor.shouldLoad) this.load({
            identifier,
            controllerConstructor
        });
    }
    load(head, ...rest) {
        const definitions = Array.isArray(head) ? head : [
            head,
            ...rest
        ];
        definitions.forEach((definition)=>this.router.loadDefinition(definition));
    }
    unload(head, ...rest) {
        const identifiers = Array.isArray(head) ? head : [
            head,
            ...rest
        ];
        identifiers.forEach((identifier)=>this.router.unloadIdentifier(identifier));
    }
    get controllers() {
        return this.router.contexts.map((context)=>context.controller);
    }
    getControllerForElementAndIdentifier(element, identifier) {
        const context = this.router.getContextForElementAndIdentifier(element, identifier);
        return context ? context.controller : null;
    }
    handleError(error9, message, detail) {
        var _a;
        this.logger.error(`%s\n\n%o\n\n%o`, message, error9, detail);
        (_a = window.onerror) === null || _a === void 0 || _a.call(window, message, "", 0, 0, error9);
    }
    logFormattedMessage(identifier, functionName, detail = {}) {
        detail = Object.assign({
            application: this
        }, detail);
        this.logger.groupCollapsed(`${identifier} #${functionName}`);
        this.logger.log("details:", Object.assign({}, detail));
        this.logger.groupEnd();
    }
    constructor(element = document.documentElement, schema = defaultSchema){
        this.logger = console;
        this.debug = false;
        this.logDebugActivity = (identifier, functionName, detail = {})=>{
            if (this.debug) this.logFormattedMessage(identifier, functionName, detail);
        };
        this.element = element;
        this.schema = schema;
        this.dispatcher = new Dispatcher(this);
        this.router = new Router(this);
    }
}
function domReady() {
    return new Promise((resolve)=>{
        if (document.readyState == "loading") document.addEventListener("DOMContentLoaded", ()=>resolve());
        else resolve();
    });
}
function ClassPropertiesBlessing(constructor) {
    const classes = readInheritableStaticArrayValues(constructor, "classes");
    return classes.reduce((properties, classDefinition)=>{
        return Object.assign(properties, propertiesForClassDefinition(classDefinition));
    }, {});
}
function propertiesForClassDefinition(key) {
    return {
        [`${key}Class`]: {
            get () {
                const { classes  } = this;
                if (classes.has(key)) return classes.get(key);
                else {
                    const attribute = classes.getAttributeName(key);
                    throw new Error(`Missing attribute "${attribute}"`);
                }
            }
        },
        [`${key}Classes`]: {
            get () {
                return this.classes.getAll(key);
            }
        },
        [`has${capitalize(key)}Class`]: {
            get () {
                return this.classes.has(key);
            }
        }
    };
}
function TargetPropertiesBlessing(constructor) {
    const targets = readInheritableStaticArrayValues(constructor, "targets");
    return targets.reduce((properties, targetDefinition)=>{
        return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
    }, {});
}
function propertiesForTargetDefinition(name) {
    return {
        [`${name}Target`]: {
            get () {
                const target = this.targets.find(name);
                if (target) return target;
                else throw new Error(`Missing target element "${name}" for "${this.identifier}" controller`);
            }
        },
        [`${name}Targets`]: {
            get () {
                return this.targets.findAll(name);
            }
        },
        [`has${capitalize(name)}Target`]: {
            get () {
                return this.targets.has(name);
            }
        }
    };
}
function ValuePropertiesBlessing(constructor) {
    const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
    const propertyDescriptorMap = {
        valueDescriptorMap: {
            get () {
                return valueDefinitionPairs.reduce((result, valueDefinitionPair)=>{
                    const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair);
                    const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
                    return Object.assign(result, {
                        [attributeName]: valueDescriptor
                    });
                }, {});
            }
        }
    };
    return valueDefinitionPairs.reduce((properties, valueDefinitionPair)=>{
        return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
    }, propertyDescriptorMap);
}
function propertiesForValueDefinitionPair(valueDefinitionPair) {
    const definition = parseValueDefinitionPair(valueDefinitionPair);
    const { key , name , reader: read , writer: write  } = definition;
    return {
        [name]: {
            get () {
                const value = this.data.get(key);
                if (value !== null) return read(value);
                else return definition.defaultValue;
            },
            set (value) {
                if (value === undefined) this.data.delete(key);
                else this.data.set(key, write(value));
            }
        },
        [`has${capitalize(name)}`]: {
            get () {
                return this.data.has(key) || definition.hasCustomDefaultValue;
            }
        }
    };
}
function parseValueDefinitionPair([token, typeDefinition]) {
    return valueDescriptorForTokenAndTypeDefinition(token, typeDefinition);
}
function parseValueTypeConstant(constant) {
    switch(constant){
        case Array:
            return "array";
        case Boolean:
            return "boolean";
        case Number:
            return "number";
        case Object:
            return "object";
        case String:
            return "string";
    }
}
function parseValueTypeDefault(defaultValue) {
    switch(typeof defaultValue){
        case "boolean":
            return "boolean";
        case "number":
            return "number";
        case "string":
            return "string";
    }
    if (Array.isArray(defaultValue)) return "array";
    if (Object.prototype.toString.call(defaultValue) === "[object Object]") return "object";
}
function parseValueTypeObject(typeObject) {
    const typeFromObject = parseValueTypeConstant(typeObject.type);
    if (typeFromObject) {
        const defaultValueType = parseValueTypeDefault(typeObject.default);
        if (typeFromObject !== defaultValueType) throw new Error(`Type "${typeFromObject}" must match the type of the default value. Given default value: "${typeObject.default}" as "${defaultValueType}"`);
        return typeFromObject;
    }
}
function parseValueTypeDefinition(typeDefinition) {
    const typeFromObject = parseValueTypeObject(typeDefinition);
    const typeFromDefaultValue = parseValueTypeDefault(typeDefinition);
    const typeFromConstant = parseValueTypeConstant(typeDefinition);
    const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
    if (type) return type;
    throw new Error(`Unknown value type "${typeDefinition}"`);
}
function defaultValueForDefinition(typeDefinition) {
    const constant = parseValueTypeConstant(typeDefinition);
    if (constant) return defaultValuesByType[constant];
    const defaultValue = typeDefinition.default;
    if (defaultValue !== undefined) return defaultValue;
    return typeDefinition;
}
function valueDescriptorForTokenAndTypeDefinition(token, typeDefinition) {
    const key = `${dasherize(token)}-value`;
    const type = parseValueTypeDefinition(typeDefinition);
    return {
        type,
        key,
        name: camelize(key),
        get defaultValue () {
            return defaultValueForDefinition(typeDefinition);
        },
        get hasCustomDefaultValue () {
            return parseValueTypeDefault(typeDefinition) !== undefined;
        },
        reader: readers[type],
        writer: writers[type] || writers.default
    };
}
const defaultValuesByType = {
    get array () {
        return [];
    },
    boolean: false,
    number: 0,
    get object () {
        return {};
    },
    string: ""
};
const readers = {
    array (value) {
        const array = JSON.parse(value);
        if (!Array.isArray(array)) throw new TypeError("Expected array");
        return array;
    },
    boolean (value) {
        return !(value == "0" || value == "false");
    },
    number (value) {
        return Number(value);
    },
    object (value) {
        const object = JSON.parse(value);
        if (object === null || typeof object != "object" || Array.isArray(object)) throw new TypeError("Expected object");
        return object;
    },
    string (value) {
        return value;
    }
};
const writers = {
    default: writeString,
    array: writeJSON,
    object: writeJSON
};
function writeJSON(value) {
    return JSON.stringify(value);
}
function writeString(value) {
    return `${value}`;
}
class Controller {
    static get shouldLoad() {
        return true;
    }
    get application() {
        return this.context.application;
    }
    get scope() {
        return this.context.scope;
    }
    get element() {
        return this.scope.element;
    }
    get identifier() {
        return this.scope.identifier;
    }
    get targets() {
        return this.scope.targets;
    }
    get classes() {
        return this.scope.classes;
    }
    get data() {
        return this.scope.data;
    }
    initialize() {}
    connect() {}
    disconnect() {}
    dispatch(eventName, { target =this.element , detail ={} , prefix =this.identifier , bubbles =true , cancelable =true  } = {}) {
        const type = prefix ? `${prefix}:${eventName}` : eventName;
        const event = new CustomEvent(type, {
            detail,
            bubbles,
            cancelable
        });
        target.dispatchEvent(event);
        return event;
    }
    constructor(context){
        this.context = context;
    }
}
Controller.blessings = [
    ClassPropertiesBlessing,
    TargetPropertiesBlessing,
    ValuePropertiesBlessing
];
Controller.targets = [];
Controller.values = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5oERU":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lw7OH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PageRenderer", ()=>PageRenderer);
parcelHelpers.export(exports, "PageSnapshot", ()=>PageSnapshot);
parcelHelpers.export(exports, "clearCache", ()=>clearCache);
parcelHelpers.export(exports, "connectStreamSource", ()=>connectStreamSource);
parcelHelpers.export(exports, "disconnectStreamSource", ()=>disconnectStreamSource);
parcelHelpers.export(exports, "navigator", ()=>navigator$1);
parcelHelpers.export(exports, "registerAdapter", ()=>registerAdapter);
parcelHelpers.export(exports, "renderStreamMessage", ()=>renderStreamMessage);
parcelHelpers.export(exports, "session", ()=>session);
parcelHelpers.export(exports, "setConfirmMethod", ()=>setConfirmMethod);
parcelHelpers.export(exports, "setProgressBarDelay", ()=>setProgressBarDelay);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "visit", ()=>visit);
let _ = (t2)=>t2, t, t1;
/*
Turbo 7.1.0
Copyright © 2021 Basecamp, LLC
 */ (function() {
    if (window.Reflect === undefined || window.customElements === undefined || window.customElements.polyfillWrapFlushCallback) return;
    const BuiltInHTMLElement = HTMLElement;
    const wrapperForTheName = {
        "HTMLElement": function HTMLElement() {
            return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
        }
    };
    window.HTMLElement = wrapperForTheName["HTMLElement"];
    HTMLElement.prototype = BuiltInHTMLElement.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2019 Javan Makhmali
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ (function(prototype) {
    if (typeof prototype.requestSubmit == "function") return;
    prototype.requestSubmit = function(submitter) {
        if (submitter) {
            validateSubmitter(submitter, this);
            submitter.click();
        } else {
            submitter = document.createElement("input");
            submitter.type = "submit";
            submitter.hidden = true;
            this.appendChild(submitter);
            submitter.click();
            this.removeChild(submitter);
        }
    };
    function validateSubmitter(submitter, form) {
        submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
        submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
        submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
    }
    function raise(errorConstructor, message, name) {
        throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name);
    }
})(HTMLFormElement.prototype);
const submittersByForm = new WeakMap;
function findSubmitterFromClickTarget(target) {
    const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
    const candidate = element ? element.closest("input, button") : null;
    return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
}
function clickCaptured(event) {
    const submitter = findSubmitterFromClickTarget(event.target);
    if (submitter && submitter.form) submittersByForm.set(submitter.form, submitter);
}
(function() {
    if ("submitter" in Event.prototype) return;
    let prototype;
    if ("SubmitEvent" in window && /Apple Computer/.test(navigator.vendor)) prototype = window.SubmitEvent.prototype;
    else if ("SubmitEvent" in window) return;
    else prototype = window.Event.prototype;
    addEventListener("click", clickCaptured, true);
    Object.defineProperty(prototype, "submitter", {
        get () {
            if (this.type == "submit" && this.target instanceof HTMLFormElement) return submittersByForm.get(this.target);
        }
    });
})();
var FrameLoadingStyle;
(function(FrameLoadingStyle1) {
    FrameLoadingStyle1["eager"] = "eager";
    FrameLoadingStyle1["lazy"] = "lazy";
})(FrameLoadingStyle || (FrameLoadingStyle = {}));
class FrameElement extends HTMLElement {
    static get observedAttributes() {
        return [
            "disabled",
            "loading",
            "src"
        ];
    }
    connectedCallback() {
        this.delegate.connect();
    }
    disconnectedCallback() {
        this.delegate.disconnect();
    }
    reload() {
        const { src  } = this;
        this.src = null;
        this.src = src;
    }
    attributeChangedCallback(name) {
        if (name == "loading") this.delegate.loadingStyleChanged();
        else if (name == "src") this.delegate.sourceURLChanged();
        else this.delegate.disabledChanged();
    }
    get src() {
        return this.getAttribute("src");
    }
    set src(value) {
        if (value) this.setAttribute("src", value);
        else this.removeAttribute("src");
    }
    get loading() {
        return frameLoadingStyleFromString(this.getAttribute("loading") || "");
    }
    set loading(value) {
        if (value) this.setAttribute("loading", value);
        else this.removeAttribute("loading");
    }
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(value) {
        if (value) this.setAttribute("disabled", "");
        else this.removeAttribute("disabled");
    }
    get autoscroll() {
        return this.hasAttribute("autoscroll");
    }
    set autoscroll(value) {
        if (value) this.setAttribute("autoscroll", "");
        else this.removeAttribute("autoscroll");
    }
    get complete() {
        return !this.delegate.isLoading;
    }
    get isActive() {
        return this.ownerDocument === document && !this.isPreview;
    }
    get isPreview() {
        var _a, _b;
        return (_b = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("data-turbo-preview");
    }
    constructor(){
        super();
        this.loaded = Promise.resolve();
        this.delegate = new FrameElement.delegateConstructor(this);
    }
}
function frameLoadingStyleFromString(style) {
    switch(style.toLowerCase()){
        case "lazy":
            return FrameLoadingStyle.lazy;
        default:
            return FrameLoadingStyle.eager;
    }
}
function expandURL(locatable) {
    return new URL(locatable.toString(), document.baseURI);
}
function getAnchor(url) {
    let anchorMatch;
    if (url.hash) return url.hash.slice(1);
    else if (anchorMatch = url.href.match(/#(.*)$/)) return anchorMatch[1];
}
function getAction(form, submitter) {
    const action = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formaction")) || form.getAttribute("action") || form.action;
    return expandURL(action);
}
function getExtension(url) {
    return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
}
function isHTML(url) {
    return !!getExtension(url).match(/^(?:|\.(?:htm|html|xhtml))$/);
}
function isPrefixedBy(baseURL, url) {
    const prefix = getPrefix(url);
    return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
}
function locationIsVisitable(location, rootLocation) {
    return isPrefixedBy(location, rootLocation) && isHTML(location);
}
function getRequestURL(url) {
    const anchor = getAnchor(url);
    return anchor != null ? url.href.slice(0, -(anchor.length + 1)) : url.href;
}
function toCacheKey(url) {
    return getRequestURL(url);
}
function urlsAreEqual(left, right) {
    return expandURL(left).href == expandURL(right).href;
}
function getPathComponents(url) {
    return url.pathname.split("/").slice(1);
}
function getLastPathComponent(url) {
    return getPathComponents(url).slice(-1)[0];
}
function getPrefix(url) {
    return addTrailingSlash(url.origin + url.pathname);
}
function addTrailingSlash(value) {
    return value.endsWith("/") ? value : value + "/";
}
class FetchResponse {
    get succeeded() {
        return this.response.ok;
    }
    get failed() {
        return !this.succeeded;
    }
    get clientError() {
        return this.statusCode >= 400 && this.statusCode <= 499;
    }
    get serverError() {
        return this.statusCode >= 500 && this.statusCode <= 599;
    }
    get redirected() {
        return this.response.redirected;
    }
    get location() {
        return expandURL(this.response.url);
    }
    get isHTML() {
        return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
    }
    get statusCode() {
        return this.response.status;
    }
    get contentType() {
        return this.header("Content-Type");
    }
    get responseText() {
        return this.response.clone().text();
    }
    get responseHTML() {
        if (this.isHTML) return this.response.clone().text();
        else return Promise.resolve(undefined);
    }
    header(name) {
        return this.response.headers.get(name);
    }
    constructor(response){
        this.response = response;
    }
}
function dispatch(eventName, { target , cancelable , detail  } = {}) {
    const event = new CustomEvent(eventName, {
        cancelable,
        bubbles: true,
        detail
    });
    if (target && target.isConnected) target.dispatchEvent(event);
    else document.documentElement.dispatchEvent(event);
    return event;
}
function nextAnimationFrame() {
    return new Promise((resolve)=>requestAnimationFrame(()=>resolve()));
}
function nextEventLoopTick() {
    return new Promise((resolve)=>setTimeout(()=>resolve(), 0));
}
function nextMicrotask() {
    return Promise.resolve();
}
function parseHTMLDocument(html = "") {
    return new DOMParser().parseFromString(html, "text/html");
}
function unindent(strings, ...values) {
    const lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
    const match = lines[0].match(/^\s+/);
    const indent = match ? match[0].length : 0;
    return lines.map((line)=>line.slice(indent)).join("\n");
}
function interpolate(strings, values) {
    return strings.reduce((result, string, i)=>{
        const value = values[i] == undefined ? "" : values[i];
        return result + string + value;
    }, "");
}
function uuid() {
    return Array.apply(null, {
        length: 36
    }).map((_, i)=>{
        if (i == 8 || i == 13 || i == 18 || i == 23) return "-";
        else if (i == 14) return "4";
        else if (i == 19) return (Math.floor(Math.random() * 4) + 8).toString(16);
        else return Math.floor(Math.random() * 15).toString(16);
    }).join("");
}
function getAttribute(attributeName, ...elements) {
    for (const value of elements.map((element)=>element === null || element === void 0 ? void 0 : element.getAttribute(attributeName))){
        if (typeof value == "string") return value;
    }
    return null;
}
function markAsBusy(...elements) {
    for (const element of elements){
        if (element.localName == "turbo-frame") element.setAttribute("busy", "");
        element.setAttribute("aria-busy", "true");
    }
}
function clearBusyState(...elements) {
    for (const element of elements){
        if (element.localName == "turbo-frame") element.removeAttribute("busy");
        element.removeAttribute("aria-busy");
    }
}
var FetchMethod;
(function(FetchMethod1) {
    FetchMethod1[FetchMethod1["get"] = 0] = "get";
    FetchMethod1[FetchMethod1["post"] = 1] = "post";
    FetchMethod1[FetchMethod1["put"] = 2] = "put";
    FetchMethod1[FetchMethod1["patch"] = 3] = "patch";
    FetchMethod1[FetchMethod1["delete"] = 4] = "delete";
})(FetchMethod || (FetchMethod = {}));
function fetchMethodFromString(method) {
    switch(method.toLowerCase()){
        case "get":
            return FetchMethod.get;
        case "post":
            return FetchMethod.post;
        case "put":
            return FetchMethod.put;
        case "patch":
            return FetchMethod.patch;
        case "delete":
            return FetchMethod.delete;
    }
}
class FetchRequest {
    get location() {
        return this.url;
    }
    get params() {
        return this.url.searchParams;
    }
    get entries() {
        return this.body ? Array.from(this.body.entries()) : [];
    }
    cancel() {
        this.abortController.abort();
    }
    async perform() {
        var _a, _b;
        const { fetchOptions  } = this;
        (_b = (_a = this.delegate).prepareHeadersForRequest) === null || _b === void 0 || _b.call(_a, this.headers, this);
        await this.allowRequestToBeIntercepted(fetchOptions);
        try {
            this.delegate.requestStarted(this);
            const response = await fetch(this.url.href, fetchOptions);
            return await this.receive(response);
        } catch (error) {
            if (error.name !== "AbortError") {
                this.delegate.requestErrored(this, error);
                throw error;
            }
        } finally{
            this.delegate.requestFinished(this);
        }
    }
    async receive(response) {
        const fetchResponse = new FetchResponse(response);
        const event = dispatch("turbo:before-fetch-response", {
            cancelable: true,
            detail: {
                fetchResponse
            },
            target: this.target
        });
        if (event.defaultPrevented) this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
        else if (fetchResponse.succeeded) this.delegate.requestSucceededWithResponse(this, fetchResponse);
        else this.delegate.requestFailedWithResponse(this, fetchResponse);
        return fetchResponse;
    }
    get fetchOptions() {
        var _a;
        return {
            method: FetchMethod[this.method].toUpperCase(),
            credentials: "same-origin",
            headers: this.headers,
            redirect: "follow",
            body: this.isIdempotent ? null : this.body,
            signal: this.abortSignal,
            referrer: (_a = this.delegate.referrer) === null || _a === void 0 ? void 0 : _a.href
        };
    }
    get defaultHeaders() {
        return {
            "Accept": "text/html, application/xhtml+xml"
        };
    }
    get isIdempotent() {
        return this.method == FetchMethod.get;
    }
    get abortSignal() {
        return this.abortController.signal;
    }
    async allowRequestToBeIntercepted(fetchOptions) {
        const requestInterception = new Promise((resolve)=>this.resolveRequestPromise = resolve);
        const event = dispatch("turbo:before-fetch-request", {
            cancelable: true,
            detail: {
                fetchOptions,
                url: this.url,
                resume: this.resolveRequestPromise
            },
            target: this.target
        });
        if (event.defaultPrevented) await requestInterception;
    }
    constructor(delegate, method, location, body = new URLSearchParams, target = null){
        this.abortController = new AbortController;
        this.resolveRequestPromise = (value)=>{};
        this.delegate = delegate;
        this.method = method;
        this.headers = this.defaultHeaders;
        this.body = body;
        this.url = location;
        this.target = target;
    }
}
class AppearanceObserver {
    start() {
        if (!this.started) {
            this.started = true;
            this.intersectionObserver.observe(this.element);
        }
    }
    stop() {
        if (this.started) {
            this.started = false;
            this.intersectionObserver.unobserve(this.element);
        }
    }
    constructor(delegate, element){
        this.started = false;
        this.intersect = (entries)=>{
            const lastEntry = entries.slice(-1)[0];
            if (lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.isIntersecting) this.delegate.elementAppearedInViewport(this.element);
        };
        this.delegate = delegate;
        this.element = element;
        this.intersectionObserver = new IntersectionObserver(this.intersect);
    }
}
class StreamMessage {
    static wrap(message) {
        if (typeof message == "string") return new this(message);
        else return message;
    }
    get fragment() {
        const fragment = document.createDocumentFragment();
        for (const element of this.foreignElements)fragment.appendChild(document.importNode(element, true));
        return fragment;
    }
    get foreignElements() {
        return this.templateChildren.reduce((streamElements, child)=>{
            if (child.tagName.toLowerCase() == "turbo-stream") return [
                ...streamElements,
                child
            ];
            else return streamElements;
        }, []);
    }
    get templateChildren() {
        return Array.from(this.templateElement.content.children);
    }
    constructor(html){
        this.templateElement = document.createElement("template");
        this.templateElement.innerHTML = html;
    }
}
StreamMessage.contentType = "text/vnd.turbo-stream.html";
var FormSubmissionState;
(function(FormSubmissionState1) {
    FormSubmissionState1[FormSubmissionState1["initialized"] = 0] = "initialized";
    FormSubmissionState1[FormSubmissionState1["requesting"] = 1] = "requesting";
    FormSubmissionState1[FormSubmissionState1["waiting"] = 2] = "waiting";
    FormSubmissionState1[FormSubmissionState1["receiving"] = 3] = "receiving";
    FormSubmissionState1[FormSubmissionState1["stopping"] = 4] = "stopping";
    FormSubmissionState1[FormSubmissionState1["stopped"] = 5] = "stopped";
})(FormSubmissionState || (FormSubmissionState = {}));
var FormEnctype;
(function(FormEnctype1) {
    FormEnctype1["urlEncoded"] = "application/x-www-form-urlencoded";
    FormEnctype1["multipart"] = "multipart/form-data";
    FormEnctype1["plain"] = "text/plain";
})(FormEnctype || (FormEnctype = {}));
function formEnctypeFromString(encoding) {
    switch(encoding.toLowerCase()){
        case FormEnctype.multipart:
            return FormEnctype.multipart;
        case FormEnctype.plain:
            return FormEnctype.plain;
        default:
            return FormEnctype.urlEncoded;
    }
}
class FormSubmission {
    static confirmMethod(message, element) {
        return confirm(message);
    }
    get method() {
        var _a;
        const method = ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "";
        return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
    }
    get action() {
        var _a;
        const formElementAction = typeof this.formElement.action === "string" ? this.formElement.action : null;
        return ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formaction")) || this.formElement.getAttribute("action") || formElementAction || "";
    }
    get body() {
        if (this.enctype == FormEnctype.urlEncoded || this.method == FetchMethod.get) return new URLSearchParams(this.stringFormData);
        else return this.formData;
    }
    get enctype() {
        var _a;
        return formEnctypeFromString(((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formenctype")) || this.formElement.enctype);
    }
    get isIdempotent() {
        return this.fetchRequest.isIdempotent;
    }
    get stringFormData() {
        return [
            ...this.formData
        ].reduce((entries, [name, value])=>{
            return entries.concat(typeof value == "string" ? [
                [
                    name,
                    value
                ]
            ] : []);
        }, []);
    }
    get confirmationMessage() {
        return this.formElement.getAttribute("data-turbo-confirm");
    }
    get needsConfirmation() {
        return this.confirmationMessage !== null;
    }
    async start() {
        const { initialized , requesting  } = FormSubmissionState;
        if (this.needsConfirmation) {
            const answer = FormSubmission.confirmMethod(this.confirmationMessage, this.formElement);
            if (!answer) return;
        }
        if (this.state == initialized) {
            this.state = requesting;
            return this.fetchRequest.perform();
        }
    }
    stop() {
        const { stopping , stopped  } = FormSubmissionState;
        if (this.state != stopping && this.state != stopped) {
            this.state = stopping;
            this.fetchRequest.cancel();
            return true;
        }
    }
    prepareHeadersForRequest(headers, request) {
        if (!request.isIdempotent) {
            const token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");
            if (token) headers["X-CSRF-Token"] = token;
            headers["Accept"] = [
                StreamMessage.contentType,
                headers["Accept"]
            ].join(", ");
        }
    }
    requestStarted(request) {
        var _a;
        this.state = FormSubmissionState.waiting;
        (_a = this.submitter) === null || _a === void 0 || _a.setAttribute("disabled", "");
        dispatch("turbo:submit-start", {
            target: this.formElement,
            detail: {
                formSubmission: this
            }
        });
        this.delegate.formSubmissionStarted(this);
    }
    requestPreventedHandlingResponse(request, response) {
        this.result = {
            success: response.succeeded,
            fetchResponse: response
        };
    }
    requestSucceededWithResponse(request, response) {
        if (response.clientError || response.serverError) this.delegate.formSubmissionFailedWithResponse(this, response);
        else if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
            const error = new Error("Form responses must redirect to another location");
            this.delegate.formSubmissionErrored(this, error);
        } else {
            this.state = FormSubmissionState.receiving;
            this.result = {
                success: true,
                fetchResponse: response
            };
            this.delegate.formSubmissionSucceededWithResponse(this, response);
        }
    }
    requestFailedWithResponse(request, response) {
        this.result = {
            success: false,
            fetchResponse: response
        };
        this.delegate.formSubmissionFailedWithResponse(this, response);
    }
    requestErrored(request, error) {
        this.result = {
            success: false,
            error
        };
        this.delegate.formSubmissionErrored(this, error);
    }
    requestFinished(request) {
        var _a;
        this.state = FormSubmissionState.stopped;
        (_a = this.submitter) === null || _a === void 0 || _a.removeAttribute("disabled");
        dispatch("turbo:submit-end", {
            target: this.formElement,
            detail: Object.assign({
                formSubmission: this
            }, this.result)
        });
        this.delegate.formSubmissionFinished(this);
    }
    requestMustRedirect(request) {
        return !request.isIdempotent && this.mustRedirect;
    }
    constructor(delegate, formElement, submitter, mustRedirect = false){
        this.state = FormSubmissionState.initialized;
        this.delegate = delegate;
        this.formElement = formElement;
        this.submitter = submitter;
        this.formData = buildFormData(formElement, submitter);
        this.location = expandURL(this.action);
        if (this.method == FetchMethod.get) mergeFormDataEntries(this.location, [
            ...this.body.entries()
        ]);
        this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body, this.formElement);
        this.mustRedirect = mustRedirect;
    }
}
function buildFormData(formElement, submitter) {
    const formData = new FormData(formElement);
    const name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
    const value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");
    if (name && value != null && formData.get(name) != value) formData.append(name, value);
    return formData;
}
function getCookieValue(cookieName) {
    if (cookieName != null) {
        const cookies = document.cookie ? document.cookie.split("; ") : [];
        const cookie1 = cookies.find((cookie)=>cookie.startsWith(cookieName));
        if (cookie1) {
            const value = cookie1.split("=").slice(1).join("=");
            return value ? decodeURIComponent(value) : undefined;
        }
    }
}
function getMetaContent(name) {
    const element = document.querySelector(`meta[name="${name}"]`);
    return element && element.content;
}
function responseSucceededWithoutRedirect(response) {
    return response.statusCode == 200 && !response.redirected;
}
function mergeFormDataEntries(url, entries) {
    const searchParams = new URLSearchParams;
    for (const [name, value] of entries){
        if (value instanceof File) continue;
        searchParams.append(name, value);
    }
    url.search = searchParams.toString();
    return url;
}
class Snapshot {
    get children() {
        return [
            ...this.element.children
        ];
    }
    hasAnchor(anchor) {
        return this.getElementForAnchor(anchor) != null;
    }
    getElementForAnchor(anchor) {
        return anchor ? this.element.querySelector(`[id='${anchor}'], a[name='${anchor}']`) : null;
    }
    get isConnected() {
        return this.element.isConnected;
    }
    get firstAutofocusableElement() {
        return this.element.querySelector("[autofocus]");
    }
    get permanentElements() {
        return [
            ...this.element.querySelectorAll("[id][data-turbo-permanent]")
        ];
    }
    getPermanentElementById(id) {
        return this.element.querySelector(`#${id}[data-turbo-permanent]`);
    }
    getPermanentElementMapForSnapshot(snapshot) {
        const permanentElementMap = {};
        for (const currentPermanentElement of this.permanentElements){
            const { id  } = currentPermanentElement;
            const newPermanentElement = snapshot.getPermanentElementById(id);
            if (newPermanentElement) permanentElementMap[id] = [
                currentPermanentElement,
                newPermanentElement
            ];
        }
        return permanentElementMap;
    }
    constructor(element){
        this.element = element;
    }
}
class FormInterceptor {
    start() {
        this.element.addEventListener("submit", this.submitBubbled);
    }
    stop() {
        this.element.removeEventListener("submit", this.submitBubbled);
    }
    constructor(delegate, element){
        this.submitBubbled = (event)=>{
            const form = event.target;
            if (!event.defaultPrevented && form instanceof HTMLFormElement && form.closest("turbo-frame, html") == this.element) {
                const submitter = event.submitter || undefined;
                const method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.method;
                if (method != "dialog" && this.delegate.shouldInterceptFormSubmission(form, submitter)) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    this.delegate.formSubmissionIntercepted(form, submitter);
                }
            }
        };
        this.delegate = delegate;
        this.element = element;
    }
}
class View {
    scrollToAnchor(anchor) {
        const element = this.snapshot.getElementForAnchor(anchor);
        if (element) {
            this.scrollToElement(element);
            this.focusElement(element);
        } else this.scrollToPosition({
            x: 0,
            y: 0
        });
    }
    scrollToAnchorFromLocation(location) {
        this.scrollToAnchor(getAnchor(location));
    }
    scrollToElement(element) {
        element.scrollIntoView();
    }
    focusElement(element) {
        if (element instanceof HTMLElement) {
            if (element.hasAttribute("tabindex")) element.focus();
            else {
                element.setAttribute("tabindex", "-1");
                element.focus();
                element.removeAttribute("tabindex");
            }
        }
    }
    scrollToPosition({ x , y  }) {
        this.scrollRoot.scrollTo(x, y);
    }
    scrollToTop() {
        this.scrollToPosition({
            x: 0,
            y: 0
        });
    }
    get scrollRoot() {
        return window;
    }
    async render(renderer) {
        const { isPreview , shouldRender , newSnapshot: snapshot  } = renderer;
        if (shouldRender) try {
            this.renderPromise = new Promise((resolve)=>this.resolveRenderPromise = resolve);
            this.renderer = renderer;
            this.prepareToRenderSnapshot(renderer);
            const renderInterception = new Promise((resolve)=>this.resolveInterceptionPromise = resolve);
            const immediateRender = this.delegate.allowsImmediateRender(snapshot, this.resolveInterceptionPromise);
            if (!immediateRender) await renderInterception;
            await this.renderSnapshot(renderer);
            this.delegate.viewRenderedSnapshot(snapshot, isPreview);
            this.finishRenderingSnapshot(renderer);
        } finally{
            delete this.renderer;
            this.resolveRenderPromise(undefined);
            delete this.renderPromise;
        }
        else this.invalidate();
    }
    invalidate() {
        this.delegate.viewInvalidated();
    }
    prepareToRenderSnapshot(renderer) {
        this.markAsPreview(renderer.isPreview);
        renderer.prepareToRender();
    }
    markAsPreview(isPreview) {
        if (isPreview) this.element.setAttribute("data-turbo-preview", "");
        else this.element.removeAttribute("data-turbo-preview");
    }
    async renderSnapshot(renderer) {
        await renderer.render();
    }
    finishRenderingSnapshot(renderer) {
        renderer.finishRendering();
    }
    constructor(delegate, element){
        this.resolveRenderPromise = (value)=>{};
        this.resolveInterceptionPromise = (value)=>{};
        this.delegate = delegate;
        this.element = element;
    }
}
class FrameView extends View {
    invalidate() {
        this.element.innerHTML = "";
    }
    get snapshot() {
        return new Snapshot(this.element);
    }
}
class LinkInterceptor {
    start() {
        this.element.addEventListener("click", this.clickBubbled);
        document.addEventListener("turbo:click", this.linkClicked);
        document.addEventListener("turbo:before-visit", this.willVisit);
    }
    stop() {
        this.element.removeEventListener("click", this.clickBubbled);
        document.removeEventListener("turbo:click", this.linkClicked);
        document.removeEventListener("turbo:before-visit", this.willVisit);
    }
    respondsToEventTarget(target) {
        const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
        return element && element.closest("turbo-frame, html") == this.element;
    }
    constructor(delegate, element){
        this.clickBubbled = (event)=>{
            if (this.respondsToEventTarget(event.target)) this.clickEvent = event;
            else delete this.clickEvent;
        };
        this.linkClicked = (event)=>{
            if (this.clickEvent && this.respondsToEventTarget(event.target) && event.target instanceof Element) {
                if (this.delegate.shouldInterceptLinkClick(event.target, event.detail.url)) {
                    this.clickEvent.preventDefault();
                    event.preventDefault();
                    this.delegate.linkClickIntercepted(event.target, event.detail.url);
                }
            }
            delete this.clickEvent;
        };
        this.willVisit = ()=>{
            delete this.clickEvent;
        };
        this.delegate = delegate;
        this.element = element;
    }
}
class Bardo {
    static preservingPermanentElements(permanentElementMap, callback) {
        const bardo = new this(permanentElementMap);
        bardo.enter();
        callback();
        bardo.leave();
    }
    enter() {
        for(const id in this.permanentElementMap){
            const [, newPermanentElement] = this.permanentElementMap[id];
            this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
        }
    }
    leave() {
        for(const id in this.permanentElementMap){
            const [currentPermanentElement] = this.permanentElementMap[id];
            this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
            this.replacePlaceholderWithPermanentElement(currentPermanentElement);
        }
    }
    replaceNewPermanentElementWithPlaceholder(permanentElement) {
        const placeholder = createPlaceholderForPermanentElement(permanentElement);
        permanentElement.replaceWith(placeholder);
    }
    replaceCurrentPermanentElementWithClone(permanentElement) {
        const clone = permanentElement.cloneNode(true);
        permanentElement.replaceWith(clone);
    }
    replacePlaceholderWithPermanentElement(permanentElement) {
        const placeholder = this.getPlaceholderById(permanentElement.id);
        placeholder === null || placeholder === void 0 || placeholder.replaceWith(permanentElement);
    }
    getPlaceholderById(id) {
        return this.placeholders.find((element)=>element.content == id);
    }
    get placeholders() {
        return [
            ...document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]")
        ];
    }
    constructor(permanentElementMap){
        this.permanentElementMap = permanentElementMap;
    }
}
function createPlaceholderForPermanentElement(permanentElement) {
    const element = document.createElement("meta");
    element.setAttribute("name", "turbo-permanent-placeholder");
    element.setAttribute("content", permanentElement.id);
    return element;
}
class Renderer {
    get shouldRender() {
        return true;
    }
    prepareToRender() {
        return;
    }
    finishRendering() {
        if (this.resolvingFunctions) {
            this.resolvingFunctions.resolve();
            delete this.resolvingFunctions;
        }
    }
    createScriptElement(element) {
        if (element.getAttribute("data-turbo-eval") == "false") return element;
        else {
            const createdScriptElement = document.createElement("script");
            if (this.cspNonce) createdScriptElement.nonce = this.cspNonce;
            createdScriptElement.textContent = element.textContent;
            createdScriptElement.async = false;
            copyElementAttributes(createdScriptElement, element);
            return createdScriptElement;
        }
    }
    preservingPermanentElements(callback) {
        Bardo.preservingPermanentElements(this.permanentElementMap, callback);
    }
    focusFirstAutofocusableElement() {
        const element = this.connectedSnapshot.firstAutofocusableElement;
        if (elementIsFocusable(element)) element.focus();
    }
    get connectedSnapshot() {
        return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
    }
    get currentElement() {
        return this.currentSnapshot.element;
    }
    get newElement() {
        return this.newSnapshot.element;
    }
    get permanentElementMap() {
        return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
    }
    get cspNonce() {
        var _a;
        return (_a = document.head.querySelector('meta[name="csp-nonce"]')) === null || _a === void 0 ? void 0 : _a.getAttribute("content");
    }
    constructor(currentSnapshot, newSnapshot, isPreview, willRender = true){
        this.currentSnapshot = currentSnapshot;
        this.newSnapshot = newSnapshot;
        this.isPreview = isPreview;
        this.willRender = willRender;
        this.promise = new Promise((resolve, reject)=>this.resolvingFunctions = {
                resolve,
                reject
            });
    }
}
function copyElementAttributes(destinationElement, sourceElement) {
    for (const { name , value  } of [
        ...sourceElement.attributes
    ])destinationElement.setAttribute(name, value);
}
function elementIsFocusable(element) {
    return element && typeof element.focus == "function";
}
class FrameRenderer extends Renderer {
    get shouldRender() {
        return true;
    }
    async render() {
        await nextAnimationFrame();
        this.preservingPermanentElements(()=>{
            this.loadFrameElement();
        });
        this.scrollFrameIntoView();
        await nextAnimationFrame();
        this.focusFirstAutofocusableElement();
        await nextAnimationFrame();
        this.activateScriptElements();
    }
    loadFrameElement() {
        var _a;
        const destinationRange = document.createRange();
        destinationRange.selectNodeContents(this.currentElement);
        destinationRange.deleteContents();
        const frameElement = this.newElement;
        const sourceRange = (_a = frameElement.ownerDocument) === null || _a === void 0 ? void 0 : _a.createRange();
        if (sourceRange) {
            sourceRange.selectNodeContents(frameElement);
            this.currentElement.appendChild(sourceRange.extractContents());
        }
    }
    scrollFrameIntoView() {
        if (this.currentElement.autoscroll || this.newElement.autoscroll) {
            const element = this.currentElement.firstElementChild;
            const block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");
            if (element) {
                element.scrollIntoView({
                    block
                });
                return true;
            }
        }
        return false;
    }
    activateScriptElements() {
        for (const inertScriptElement of this.newScriptElements){
            const activatedScriptElement = this.createScriptElement(inertScriptElement);
            inertScriptElement.replaceWith(activatedScriptElement);
        }
    }
    get newScriptElements() {
        return this.currentElement.querySelectorAll("script");
    }
}
function readScrollLogicalPosition(value, defaultValue) {
    if (value == "end" || value == "start" || value == "center" || value == "nearest") return value;
    else return defaultValue;
}
class ProgressBar {
    static get defaultCSS() {
        return unindent(t || (t = _`
      .turbo-progress-bar {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3px;
        background: #0076ff;
        z-index: 9999;
        transition:
          width ${0}ms ease-out,
          opacity ${0}ms ${0}ms ease-in;
        transform: translate3d(0, 0, 0);
      }
    `), ProgressBar.animationDuration, ProgressBar.animationDuration / 2, ProgressBar.animationDuration / 2);
    }
    show() {
        if (!this.visible) {
            this.visible = true;
            this.installProgressElement();
            this.startTrickling();
        }
    }
    hide() {
        if (this.visible && !this.hiding) {
            this.hiding = true;
            this.fadeProgressElement(()=>{
                this.uninstallProgressElement();
                this.stopTrickling();
                this.visible = false;
                this.hiding = false;
            });
        }
    }
    setValue(value) {
        this.value = value;
        this.refresh();
    }
    installStylesheetElement() {
        document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
    }
    installProgressElement() {
        this.progressElement.style.width = "0";
        this.progressElement.style.opacity = "1";
        document.documentElement.insertBefore(this.progressElement, document.body);
        this.refresh();
    }
    fadeProgressElement(callback) {
        this.progressElement.style.opacity = "0";
        setTimeout(callback, ProgressBar.animationDuration * 1.5);
    }
    uninstallProgressElement() {
        if (this.progressElement.parentNode) document.documentElement.removeChild(this.progressElement);
    }
    startTrickling() {
        if (!this.trickleInterval) this.trickleInterval = window.setInterval(this.trickle, ProgressBar.animationDuration);
    }
    stopTrickling() {
        window.clearInterval(this.trickleInterval);
        delete this.trickleInterval;
    }
    refresh() {
        requestAnimationFrame(()=>{
            this.progressElement.style.width = `${10 + this.value * 90}%`;
        });
    }
    createStylesheetElement() {
        const element = document.createElement("style");
        element.type = "text/css";
        element.textContent = ProgressBar.defaultCSS;
        return element;
    }
    createProgressElement() {
        const element = document.createElement("div");
        element.className = "turbo-progress-bar";
        return element;
    }
    constructor(){
        this.hiding = false;
        this.value = 0;
        this.visible = false;
        this.trickle = ()=>{
            this.setValue(this.value + Math.random() / 100);
        };
        this.stylesheetElement = this.createStylesheetElement();
        this.progressElement = this.createProgressElement();
        this.installStylesheetElement();
        this.setValue(0);
    }
}
ProgressBar.animationDuration = 300;
class HeadSnapshot extends Snapshot {
    get trackedElementSignature() {
        return Object.keys(this.detailsByOuterHTML).filter((outerHTML)=>this.detailsByOuterHTML[outerHTML].tracked).join("");
    }
    getScriptElementsNotInSnapshot(snapshot) {
        return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
    }
    getStylesheetElementsNotInSnapshot(snapshot) {
        return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
    }
    getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
        return Object.keys(this.detailsByOuterHTML).filter((outerHTML)=>!(outerHTML in snapshot.detailsByOuterHTML)).map((outerHTML)=>this.detailsByOuterHTML[outerHTML]).filter(({ type  })=>type == matchedType).map(({ elements: [element]  })=>element);
    }
    get provisionalElements() {
        return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML)=>{
            const { type , tracked , elements  } = this.detailsByOuterHTML[outerHTML];
            if (type == null && !tracked) return [
                ...result,
                ...elements
            ];
            else if (elements.length > 1) return [
                ...result,
                ...elements.slice(1)
            ];
            else return result;
        }, []);
    }
    getMetaValue(name) {
        const element = this.findMetaElementByName(name);
        return element ? element.getAttribute("content") : null;
    }
    findMetaElementByName(name) {
        return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML)=>{
            const { elements: [element]  } = this.detailsByOuterHTML[outerHTML];
            return elementIsMetaElementWithName(element, name) ? element : result;
        }, undefined);
    }
    constructor(){
        super(...arguments);
        this.detailsByOuterHTML = this.children.filter((element)=>!elementIsNoscript(element)).map((element)=>elementWithoutNonce(element)).reduce((result, element)=>{
            const { outerHTML  } = element;
            const details = outerHTML in result ? result[outerHTML] : {
                type: elementType(element),
                tracked: elementIsTracked(element),
                elements: []
            };
            return Object.assign(Object.assign({}, result), {
                [outerHTML]: Object.assign(Object.assign({}, details), {
                    elements: [
                        ...details.elements,
                        element
                    ]
                })
            });
        }, {});
    }
}
function elementType(element) {
    if (elementIsScript(element)) return "script";
    else if (elementIsStylesheet(element)) return "stylesheet";
}
function elementIsTracked(element) {
    return element.getAttribute("data-turbo-track") == "reload";
}
function elementIsScript(element) {
    const tagName = element.tagName.toLowerCase();
    return tagName == "script";
}
function elementIsNoscript(element) {
    const tagName = element.tagName.toLowerCase();
    return tagName == "noscript";
}
function elementIsStylesheet(element) {
    const tagName = element.tagName.toLowerCase();
    return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
}
function elementIsMetaElementWithName(element, name) {
    const tagName = element.tagName.toLowerCase();
    return tagName == "meta" && element.getAttribute("name") == name;
}
function elementWithoutNonce(element) {
    if (element.hasAttribute("nonce")) element.setAttribute("nonce", "");
    return element;
}
class PageSnapshot extends Snapshot {
    static fromHTMLString(html = "") {
        return this.fromDocument(parseHTMLDocument(html));
    }
    static fromElement(element) {
        return this.fromDocument(element.ownerDocument);
    }
    static fromDocument({ head , body  }) {
        return new this(body, new HeadSnapshot(head));
    }
    clone() {
        return new PageSnapshot(this.element.cloneNode(true), this.headSnapshot);
    }
    get headElement() {
        return this.headSnapshot.element;
    }
    get rootLocation() {
        var _a;
        const root = (_a = this.getSetting("root")) !== null && _a !== void 0 ? _a : "/";
        return expandURL(root);
    }
    get cacheControlValue() {
        return this.getSetting("cache-control");
    }
    get isPreviewable() {
        return this.cacheControlValue != "no-preview";
    }
    get isCacheable() {
        return this.cacheControlValue != "no-cache";
    }
    get isVisitable() {
        return this.getSetting("visit-control") != "reload";
    }
    getSetting(name) {
        return this.headSnapshot.getMetaValue(`turbo-${name}`);
    }
    constructor(element, headSnapshot){
        super(element);
        this.headSnapshot = headSnapshot;
    }
}
var TimingMetric;
(function(TimingMetric1) {
    TimingMetric1["visitStart"] = "visitStart";
    TimingMetric1["requestStart"] = "requestStart";
    TimingMetric1["requestEnd"] = "requestEnd";
    TimingMetric1["visitEnd"] = "visitEnd";
})(TimingMetric || (TimingMetric = {}));
var VisitState;
(function(VisitState1) {
    VisitState1["initialized"] = "initialized";
    VisitState1["started"] = "started";
    VisitState1["canceled"] = "canceled";
    VisitState1["failed"] = "failed";
    VisitState1["completed"] = "completed";
})(VisitState || (VisitState = {}));
const defaultOptions = {
    action: "advance",
    historyChanged: false,
    visitCachedSnapshot: ()=>{},
    willRender: true
};
var SystemStatusCode;
(function(SystemStatusCode1) {
    SystemStatusCode1[SystemStatusCode1["networkFailure"] = 0] = "networkFailure";
    SystemStatusCode1[SystemStatusCode1["timeoutFailure"] = -1] = "timeoutFailure";
    SystemStatusCode1[SystemStatusCode1["contentTypeMismatch"] = -2] = "contentTypeMismatch";
})(SystemStatusCode || (SystemStatusCode = {}));
class Visit {
    get adapter() {
        return this.delegate.adapter;
    }
    get view() {
        return this.delegate.view;
    }
    get history() {
        return this.delegate.history;
    }
    get restorationData() {
        return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
    }
    get silent() {
        return this.isSamePage;
    }
    start() {
        if (this.state == VisitState.initialized) {
            this.recordTimingMetric(TimingMetric.visitStart);
            this.state = VisitState.started;
            this.adapter.visitStarted(this);
            this.delegate.visitStarted(this);
        }
    }
    cancel() {
        if (this.state == VisitState.started) {
            if (this.request) this.request.cancel();
            this.cancelRender();
            this.state = VisitState.canceled;
        }
    }
    complete() {
        if (this.state == VisitState.started) {
            this.recordTimingMetric(TimingMetric.visitEnd);
            this.state = VisitState.completed;
            this.adapter.visitCompleted(this);
            this.delegate.visitCompleted(this);
            this.followRedirect();
        }
    }
    fail() {
        if (this.state == VisitState.started) {
            this.state = VisitState.failed;
            this.adapter.visitFailed(this);
        }
    }
    changeHistory() {
        var _a;
        if (!this.historyChanged) {
            const actionForHistory = this.location.href === ((_a = this.referrer) === null || _a === void 0 ? void 0 : _a.href) ? "replace" : this.action;
            const method = this.getHistoryMethodForAction(actionForHistory);
            this.history.update(method, this.location, this.restorationIdentifier);
            this.historyChanged = true;
        }
    }
    issueRequest() {
        if (this.hasPreloadedResponse()) this.simulateRequest();
        else if (this.shouldIssueRequest() && !this.request) {
            this.request = new FetchRequest(this, FetchMethod.get, this.location);
            this.request.perform();
        }
    }
    simulateRequest() {
        if (this.response) {
            this.startRequest();
            this.recordResponse();
            this.finishRequest();
        }
    }
    startRequest() {
        this.recordTimingMetric(TimingMetric.requestStart);
        this.adapter.visitRequestStarted(this);
    }
    recordResponse(response = this.response) {
        this.response = response;
        if (response) {
            const { statusCode  } = response;
            if (isSuccessful(statusCode)) this.adapter.visitRequestCompleted(this);
            else this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
        }
    }
    finishRequest() {
        this.recordTimingMetric(TimingMetric.requestEnd);
        this.adapter.visitRequestFinished(this);
    }
    loadResponse() {
        if (this.response) {
            const { statusCode , responseHTML  } = this.response;
            this.render(async ()=>{
                this.cacheSnapshot();
                if (this.view.renderPromise) await this.view.renderPromise;
                if (isSuccessful(statusCode) && responseHTML != null) {
                    await this.view.renderPage(PageSnapshot.fromHTMLString(responseHTML), false, this.willRender);
                    this.adapter.visitRendered(this);
                    this.complete();
                } else {
                    await this.view.renderError(PageSnapshot.fromHTMLString(responseHTML));
                    this.adapter.visitRendered(this);
                    this.fail();
                }
            });
        }
    }
    getCachedSnapshot() {
        const snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();
        if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
            if (this.action == "restore" || snapshot.isPreviewable) return snapshot;
        }
    }
    getPreloadedSnapshot() {
        if (this.snapshotHTML) return PageSnapshot.fromHTMLString(this.snapshotHTML);
    }
    hasCachedSnapshot() {
        return this.getCachedSnapshot() != null;
    }
    loadCachedSnapshot() {
        const snapshot = this.getCachedSnapshot();
        if (snapshot) {
            const isPreview = this.shouldIssueRequest();
            this.render(async ()=>{
                this.cacheSnapshot();
                if (this.isSamePage) this.adapter.visitRendered(this);
                else {
                    if (this.view.renderPromise) await this.view.renderPromise;
                    await this.view.renderPage(snapshot, isPreview, this.willRender);
                    this.adapter.visitRendered(this);
                    if (!isPreview) this.complete();
                }
            });
        }
    }
    followRedirect() {
        var _a;
        if (this.redirectedToLocation && !this.followedRedirect && ((_a = this.response) === null || _a === void 0 ? void 0 : _a.redirected)) {
            this.adapter.visitProposedToLocation(this.redirectedToLocation, {
                action: "replace",
                response: this.response
            });
            this.followedRedirect = true;
        }
    }
    goToSamePageAnchor() {
        if (this.isSamePage) this.render(async ()=>{
            this.cacheSnapshot();
            this.adapter.visitRendered(this);
        });
    }
    requestStarted() {
        this.startRequest();
    }
    requestPreventedHandlingResponse(request, response) {}
    async requestSucceededWithResponse(request, response) {
        const responseHTML = await response.responseHTML;
        const { redirected , statusCode  } = response;
        if (responseHTML == undefined) this.recordResponse({
            statusCode: SystemStatusCode.contentTypeMismatch,
            redirected
        });
        else {
            this.redirectedToLocation = response.redirected ? response.location : undefined;
            this.recordResponse({
                statusCode: statusCode,
                responseHTML,
                redirected
            });
        }
    }
    async requestFailedWithResponse(request, response) {
        const responseHTML = await response.responseHTML;
        const { redirected , statusCode  } = response;
        if (responseHTML == undefined) this.recordResponse({
            statusCode: SystemStatusCode.contentTypeMismatch,
            redirected
        });
        else this.recordResponse({
            statusCode: statusCode,
            responseHTML,
            redirected
        });
    }
    requestErrored(request, error) {
        this.recordResponse({
            statusCode: SystemStatusCode.networkFailure,
            redirected: false
        });
    }
    requestFinished() {
        this.finishRequest();
    }
    performScroll() {
        if (!this.scrolled) {
            if (this.action == "restore") this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop();
            else this.scrollToAnchor() || this.view.scrollToTop();
            if (this.isSamePage) this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location);
            this.scrolled = true;
        }
    }
    scrollToRestoredPosition() {
        const { scrollPosition  } = this.restorationData;
        if (scrollPosition) {
            this.view.scrollToPosition(scrollPosition);
            return true;
        }
    }
    scrollToAnchor() {
        const anchor = getAnchor(this.location);
        if (anchor != null) {
            this.view.scrollToAnchor(anchor);
            return true;
        }
    }
    recordTimingMetric(metric) {
        this.timingMetrics[metric] = new Date().getTime();
    }
    getTimingMetrics() {
        return Object.assign({}, this.timingMetrics);
    }
    getHistoryMethodForAction(action) {
        switch(action){
            case "replace":
                return history.replaceState;
            case "advance":
            case "restore":
                return history.pushState;
        }
    }
    hasPreloadedResponse() {
        return typeof this.response == "object";
    }
    shouldIssueRequest() {
        if (this.isSamePage) return false;
        else if (this.action == "restore") return !this.hasCachedSnapshot();
        else return this.willRender;
    }
    cacheSnapshot() {
        if (!this.snapshotCached) {
            this.view.cacheSnapshot().then((snapshot)=>snapshot && this.visitCachedSnapshot(snapshot));
            this.snapshotCached = true;
        }
    }
    async render(callback) {
        this.cancelRender();
        await new Promise((resolve)=>{
            this.frame = requestAnimationFrame(()=>resolve());
        });
        await callback();
        delete this.frame;
        this.performScroll();
    }
    cancelRender() {
        if (this.frame) {
            cancelAnimationFrame(this.frame);
            delete this.frame;
        }
    }
    constructor(delegate, location, restorationIdentifier, options = {}){
        this.identifier = uuid();
        this.timingMetrics = {};
        this.followedRedirect = false;
        this.historyChanged = false;
        this.scrolled = false;
        this.snapshotCached = false;
        this.state = VisitState.initialized;
        this.delegate = delegate;
        this.location = location;
        this.restorationIdentifier = restorationIdentifier || uuid();
        const { action , historyChanged , referrer , snapshotHTML , response , visitCachedSnapshot , willRender  } = Object.assign(Object.assign({}, defaultOptions), options);
        this.action = action;
        this.historyChanged = historyChanged;
        this.referrer = referrer;
        this.snapshotHTML = snapshotHTML;
        this.response = response;
        this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action);
        this.visitCachedSnapshot = visitCachedSnapshot;
        this.willRender = willRender;
        this.scrolled = !willRender;
    }
}
function isSuccessful(statusCode) {
    return statusCode >= 200 && statusCode < 300;
}
class BrowserAdapter {
    visitProposedToLocation(location, options) {
        this.navigator.startVisit(location, uuid(), options);
    }
    visitStarted(visit1) {
        visit1.loadCachedSnapshot();
        visit1.issueRequest();
        visit1.changeHistory();
        visit1.goToSamePageAnchor();
    }
    visitRequestStarted(visit2) {
        this.progressBar.setValue(0);
        if (visit2.hasCachedSnapshot() || visit2.action != "restore") this.showVisitProgressBarAfterDelay();
        else this.showProgressBar();
    }
    visitRequestCompleted(visit3) {
        visit3.loadResponse();
    }
    visitRequestFailedWithStatusCode(visit4, statusCode) {
        switch(statusCode){
            case SystemStatusCode.networkFailure:
            case SystemStatusCode.timeoutFailure:
            case SystemStatusCode.contentTypeMismatch:
                return this.reload();
            default:
                return visit4.loadResponse();
        }
    }
    visitRequestFinished(visit) {
        this.progressBar.setValue(1);
        this.hideVisitProgressBar();
    }
    visitCompleted(visit) {}
    pageInvalidated() {
        this.reload();
    }
    visitFailed(visit) {}
    visitRendered(visit) {}
    formSubmissionStarted(formSubmission) {
        this.progressBar.setValue(0);
        this.showFormProgressBarAfterDelay();
    }
    formSubmissionFinished(formSubmission) {
        this.progressBar.setValue(1);
        this.hideFormProgressBar();
    }
    showVisitProgressBarAfterDelay() {
        this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
    hideVisitProgressBar() {
        this.progressBar.hide();
        if (this.visitProgressBarTimeout != null) {
            window.clearTimeout(this.visitProgressBarTimeout);
            delete this.visitProgressBarTimeout;
        }
    }
    showFormProgressBarAfterDelay() {
        if (this.formProgressBarTimeout == null) this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
    hideFormProgressBar() {
        this.progressBar.hide();
        if (this.formProgressBarTimeout != null) {
            window.clearTimeout(this.formProgressBarTimeout);
            delete this.formProgressBarTimeout;
        }
    }
    reload() {
        window.location.reload();
    }
    get navigator() {
        return this.session.navigator;
    }
    constructor(session1){
        this.progressBar = new ProgressBar;
        this.showProgressBar = ()=>{
            this.progressBar.show();
        };
        this.session = session1;
    }
}
class CacheObserver {
    start() {
        if (!this.started) {
            this.started = true;
            addEventListener("turbo:before-cache", this.removeStaleElements, false);
        }
    }
    stop() {
        if (this.started) {
            this.started = false;
            removeEventListener("turbo:before-cache", this.removeStaleElements, false);
        }
    }
    removeStaleElements() {
        const staleElements = [
            ...document.querySelectorAll('[data-turbo-cache="false"]')
        ];
        for (const element of staleElements)element.remove();
    }
    constructor(){
        this.started = false;
    }
}
class FormSubmitObserver {
    start() {
        if (!this.started) {
            addEventListener("submit", this.submitCaptured, true);
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            removeEventListener("submit", this.submitCaptured, true);
            this.started = false;
        }
    }
    constructor(delegate){
        this.started = false;
        this.submitCaptured = ()=>{
            removeEventListener("submit", this.submitBubbled, false);
            addEventListener("submit", this.submitBubbled, false);
        };
        this.submitBubbled = (event)=>{
            if (!event.defaultPrevented) {
                const form = event.target instanceof HTMLFormElement ? event.target : undefined;
                const submitter = event.submitter || undefined;
                if (form) {
                    const method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.getAttribute("method");
                    if (method != "dialog" && this.delegate.willSubmitForm(form, submitter)) {
                        event.preventDefault();
                        this.delegate.formSubmitted(form, submitter);
                    }
                }
            }
        };
        this.delegate = delegate;
    }
}
class FrameRedirector {
    start() {
        this.linkInterceptor.start();
        this.formInterceptor.start();
    }
    stop() {
        this.linkInterceptor.stop();
        this.formInterceptor.stop();
    }
    shouldInterceptLinkClick(element, url) {
        return this.shouldRedirect(element);
    }
    linkClickIntercepted(element, url) {
        const frame = this.findFrameElement(element);
        if (frame) frame.delegate.linkClickIntercepted(element, url);
    }
    shouldInterceptFormSubmission(element, submitter) {
        return this.shouldSubmit(element, submitter);
    }
    formSubmissionIntercepted(element, submitter) {
        const frame = this.findFrameElement(element, submitter);
        if (frame) {
            frame.removeAttribute("reloadable");
            frame.delegate.formSubmissionIntercepted(element, submitter);
        }
    }
    shouldSubmit(form, submitter) {
        var _a;
        const action = getAction(form, submitter);
        const meta = this.element.ownerDocument.querySelector(`meta[name="turbo-root"]`);
        const rootLocation = expandURL((_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/");
        return this.shouldRedirect(form, submitter) && locationIsVisitable(action, rootLocation);
    }
    shouldRedirect(element, submitter) {
        const frame = this.findFrameElement(element, submitter);
        return frame ? frame != element.closest("turbo-frame") : false;
    }
    findFrameElement(element, submitter) {
        const id = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("data-turbo-frame")) || element.getAttribute("data-turbo-frame");
        if (id && id != "_top") {
            const frame = this.element.querySelector(`#${id}:not([disabled])`);
            if (frame instanceof FrameElement) return frame;
        }
    }
    constructor(element){
        this.element = element;
        this.linkInterceptor = new LinkInterceptor(this, element);
        this.formInterceptor = new FormInterceptor(this, element);
    }
}
class History {
    start() {
        if (!this.started) {
            addEventListener("popstate", this.onPopState, false);
            addEventListener("load", this.onPageLoad, false);
            this.started = true;
            this.replace(new URL(window.location.href));
        }
    }
    stop() {
        if (this.started) {
            removeEventListener("popstate", this.onPopState, false);
            removeEventListener("load", this.onPageLoad, false);
            this.started = false;
        }
    }
    push(location, restorationIdentifier) {
        this.update(history.pushState, location, restorationIdentifier);
    }
    replace(location, restorationIdentifier) {
        this.update(history.replaceState, location, restorationIdentifier);
    }
    update(method, location, restorationIdentifier = uuid()) {
        const state = {
            turbo: {
                restorationIdentifier
            }
        };
        method.call(history, state, "", location.href);
        this.location = location;
        this.restorationIdentifier = restorationIdentifier;
    }
    getRestorationDataForIdentifier(restorationIdentifier) {
        return this.restorationData[restorationIdentifier] || {};
    }
    updateRestorationData(additionalData) {
        const { restorationIdentifier  } = this;
        const restorationData = this.restorationData[restorationIdentifier];
        this.restorationData[restorationIdentifier] = Object.assign(Object.assign({}, restorationData), additionalData);
    }
    assumeControlOfScrollRestoration() {
        var _a;
        if (!this.previousScrollRestoration) {
            this.previousScrollRestoration = (_a = history.scrollRestoration) !== null && _a !== void 0 ? _a : "auto";
            history.scrollRestoration = "manual";
        }
    }
    relinquishControlOfScrollRestoration() {
        if (this.previousScrollRestoration) {
            history.scrollRestoration = this.previousScrollRestoration;
            delete this.previousScrollRestoration;
        }
    }
    shouldHandlePopState() {
        return this.pageIsLoaded();
    }
    pageIsLoaded() {
        return this.pageLoaded || document.readyState == "complete";
    }
    constructor(delegate){
        this.restorationIdentifier = uuid();
        this.restorationData = {};
        this.started = false;
        this.pageLoaded = false;
        this.onPopState = (event)=>{
            if (this.shouldHandlePopState()) {
                const { turbo  } = event.state || {};
                if (turbo) {
                    this.location = new URL(window.location.href);
                    const { restorationIdentifier  } = turbo;
                    this.restorationIdentifier = restorationIdentifier;
                    this.delegate.historyPoppedToLocationWithRestorationIdentifier(this.location, restorationIdentifier);
                }
            }
        };
        this.onPageLoad = async (event)=>{
            await nextMicrotask();
            this.pageLoaded = true;
        };
        this.delegate = delegate;
    }
}
class LinkClickObserver {
    start() {
        if (!this.started) {
            addEventListener("click", this.clickCaptured, true);
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            removeEventListener("click", this.clickCaptured, true);
            this.started = false;
        }
    }
    clickEventIsSignificant(event) {
        return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
    }
    findLinkFromClickTarget(target) {
        if (target instanceof Element) return target.closest("a[href]:not([target^=_]):not([download])");
    }
    getLocationForLink(link) {
        return expandURL(link.getAttribute("href") || "");
    }
    constructor(delegate){
        this.started = false;
        this.clickCaptured = ()=>{
            removeEventListener("click", this.clickBubbled, false);
            addEventListener("click", this.clickBubbled, false);
        };
        this.clickBubbled = (event)=>{
            if (this.clickEventIsSignificant(event)) {
                const target = event.composedPath && event.composedPath()[0] || event.target;
                const link = this.findLinkFromClickTarget(target);
                if (link) {
                    const location = this.getLocationForLink(link);
                    if (this.delegate.willFollowLinkToLocation(link, location)) {
                        event.preventDefault();
                        this.delegate.followedLinkToLocation(link, location);
                    }
                }
            }
        };
        this.delegate = delegate;
    }
}
function isAction(action) {
    return action == "advance" || action == "replace" || action == "restore";
}
class Navigator {
    proposeVisit(location, options = {}) {
        if (this.delegate.allowsVisitingLocationWithAction(location, options.action)) {
            if (locationIsVisitable(location, this.view.snapshot.rootLocation)) this.delegate.visitProposedToLocation(location, options);
            else window.location.href = location.toString();
        }
    }
    startVisit(locatable, restorationIdentifier, options = {}) {
        this.stop();
        this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, Object.assign({
            referrer: this.location
        }, options));
        this.currentVisit.start();
    }
    submitForm(form, submitter) {
        this.stop();
        this.formSubmission = new FormSubmission(this, form, submitter, true);
        this.formSubmission.start();
    }
    stop() {
        if (this.formSubmission) {
            this.formSubmission.stop();
            delete this.formSubmission;
        }
        if (this.currentVisit) {
            this.currentVisit.cancel();
            delete this.currentVisit;
        }
    }
    get adapter() {
        return this.delegate.adapter;
    }
    get view() {
        return this.delegate.view;
    }
    get history() {
        return this.delegate.history;
    }
    formSubmissionStarted(formSubmission) {
        if (typeof this.adapter.formSubmissionStarted === "function") this.adapter.formSubmissionStarted(formSubmission);
    }
    async formSubmissionSucceededWithResponse(formSubmission, fetchResponse) {
        if (formSubmission == this.formSubmission) {
            const responseHTML = await fetchResponse.responseHTML;
            if (responseHTML) {
                if (formSubmission.method != FetchMethod.get) this.view.clearSnapshotCache();
                const { statusCode , redirected  } = fetchResponse;
                const action = this.getActionForFormSubmission(formSubmission);
                const visitOptions = {
                    action,
                    response: {
                        statusCode,
                        responseHTML,
                        redirected
                    }
                };
                this.proposeVisit(fetchResponse.location, visitOptions);
            }
        }
    }
    async formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
        const responseHTML = await fetchResponse.responseHTML;
        if (responseHTML) {
            const snapshot = PageSnapshot.fromHTMLString(responseHTML);
            if (fetchResponse.serverError) await this.view.renderError(snapshot);
            else await this.view.renderPage(snapshot);
            this.view.scrollToTop();
            this.view.clearSnapshotCache();
        }
    }
    formSubmissionErrored(formSubmission, error) {
        console.error(error);
    }
    formSubmissionFinished(formSubmission) {
        if (typeof this.adapter.formSubmissionFinished === "function") this.adapter.formSubmissionFinished(formSubmission);
    }
    visitStarted(visit5) {
        this.delegate.visitStarted(visit5);
    }
    visitCompleted(visit6) {
        this.delegate.visitCompleted(visit6);
    }
    locationWithActionIsSamePage(location, action) {
        const anchor = getAnchor(location);
        const currentAnchor = getAnchor(this.view.lastRenderedLocation);
        const isRestorationToTop = action === "restore" && typeof anchor === "undefined";
        return action !== "replace" && getRequestURL(location) === getRequestURL(this.view.lastRenderedLocation) && (isRestorationToTop || anchor != null && anchor !== currentAnchor);
    }
    visitScrolledToSamePageLocation(oldURL, newURL) {
        this.delegate.visitScrolledToSamePageLocation(oldURL, newURL);
    }
    get location() {
        return this.history.location;
    }
    get restorationIdentifier() {
        return this.history.restorationIdentifier;
    }
    getActionForFormSubmission(formSubmission) {
        const { formElement , submitter  } = formSubmission;
        const action = getAttribute("data-turbo-action", submitter, formElement);
        return isAction(action) ? action : "advance";
    }
    constructor(delegate){
        this.delegate = delegate;
    }
}
var PageStage;
(function(PageStage1) {
    PageStage1[PageStage1["initial"] = 0] = "initial";
    PageStage1[PageStage1["loading"] = 1] = "loading";
    PageStage1[PageStage1["interactive"] = 2] = "interactive";
    PageStage1[PageStage1["complete"] = 3] = "complete";
})(PageStage || (PageStage = {}));
class PageObserver {
    start() {
        if (!this.started) {
            if (this.stage == PageStage.initial) this.stage = PageStage.loading;
            document.addEventListener("readystatechange", this.interpretReadyState, false);
            addEventListener("pagehide", this.pageWillUnload, false);
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            document.removeEventListener("readystatechange", this.interpretReadyState, false);
            removeEventListener("pagehide", this.pageWillUnload, false);
            this.started = false;
        }
    }
    pageIsInteractive() {
        if (this.stage == PageStage.loading) {
            this.stage = PageStage.interactive;
            this.delegate.pageBecameInteractive();
        }
    }
    pageIsComplete() {
        this.pageIsInteractive();
        if (this.stage == PageStage.interactive) {
            this.stage = PageStage.complete;
            this.delegate.pageLoaded();
        }
    }
    get readyState() {
        return document.readyState;
    }
    constructor(delegate){
        this.stage = PageStage.initial;
        this.started = false;
        this.interpretReadyState = ()=>{
            const { readyState  } = this;
            if (readyState == "interactive") this.pageIsInteractive();
            else if (readyState == "complete") this.pageIsComplete();
        };
        this.pageWillUnload = ()=>{
            this.delegate.pageWillUnload();
        };
        this.delegate = delegate;
    }
}
class ScrollObserver {
    start() {
        if (!this.started) {
            addEventListener("scroll", this.onScroll, false);
            this.onScroll();
            this.started = true;
        }
    }
    stop() {
        if (this.started) {
            removeEventListener("scroll", this.onScroll, false);
            this.started = false;
        }
    }
    updatePosition(position) {
        this.delegate.scrollPositionChanged(position);
    }
    constructor(delegate){
        this.started = false;
        this.onScroll = ()=>{
            this.updatePosition({
                x: window.pageXOffset,
                y: window.pageYOffset
            });
        };
        this.delegate = delegate;
    }
}
class StreamObserver {
    start() {
        if (!this.started) {
            this.started = true;
            addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
        }
    }
    stop() {
        if (this.started) {
            this.started = false;
            removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
        }
    }
    connectStreamSource(source) {
        if (!this.streamSourceIsConnected(source)) {
            this.sources.add(source);
            source.addEventListener("message", this.receiveMessageEvent, false);
        }
    }
    disconnectStreamSource(source) {
        if (this.streamSourceIsConnected(source)) {
            this.sources.delete(source);
            source.removeEventListener("message", this.receiveMessageEvent, false);
        }
    }
    streamSourceIsConnected(source) {
        return this.sources.has(source);
    }
    async receiveMessageResponse(response) {
        const html = await response.responseHTML;
        if (html) this.receiveMessageHTML(html);
    }
    receiveMessageHTML(html) {
        this.delegate.receivedMessageFromStream(new StreamMessage(html));
    }
    constructor(delegate){
        this.sources = new Set;
        this.started = false;
        this.inspectFetchResponse = (event)=>{
            const response = fetchResponseFromEvent(event);
            if (response && fetchResponseIsStream(response)) {
                event.preventDefault();
                this.receiveMessageResponse(response);
            }
        };
        this.receiveMessageEvent = (event)=>{
            if (this.started && typeof event.data == "string") this.receiveMessageHTML(event.data);
        };
        this.delegate = delegate;
    }
}
function fetchResponseFromEvent(event) {
    var _a;
    const fetchResponse = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.fetchResponse;
    if (fetchResponse instanceof FetchResponse) return fetchResponse;
}
function fetchResponseIsStream(response) {
    var _a;
    const contentType = (_a = response.contentType) !== null && _a !== void 0 ? _a : "";
    return contentType.startsWith(StreamMessage.contentType);
}
class ErrorRenderer extends Renderer {
    async render() {
        this.replaceHeadAndBody();
        this.activateScriptElements();
    }
    replaceHeadAndBody() {
        const { documentElement , head , body  } = document;
        documentElement.replaceChild(this.newHead, head);
        documentElement.replaceChild(this.newElement, body);
    }
    activateScriptElements() {
        for (const replaceableElement of this.scriptElements){
            const parentNode = replaceableElement.parentNode;
            if (parentNode) {
                const element = this.createScriptElement(replaceableElement);
                parentNode.replaceChild(element, replaceableElement);
            }
        }
    }
    get newHead() {
        return this.newSnapshot.headSnapshot.element;
    }
    get scriptElements() {
        return [
            ...document.documentElement.querySelectorAll("script")
        ];
    }
}
class PageRenderer extends Renderer {
    get shouldRender() {
        return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
    }
    prepareToRender() {
        this.mergeHead();
    }
    async render() {
        if (this.willRender) this.replaceBody();
    }
    finishRendering() {
        super.finishRendering();
        if (!this.isPreview) this.focusFirstAutofocusableElement();
    }
    get currentHeadSnapshot() {
        return this.currentSnapshot.headSnapshot;
    }
    get newHeadSnapshot() {
        return this.newSnapshot.headSnapshot;
    }
    get newElement() {
        return this.newSnapshot.element;
    }
    mergeHead() {
        this.copyNewHeadStylesheetElements();
        this.copyNewHeadScriptElements();
        this.removeCurrentHeadProvisionalElements();
        this.copyNewHeadProvisionalElements();
    }
    replaceBody() {
        this.preservingPermanentElements(()=>{
            this.activateNewBody();
            this.assignNewBody();
        });
    }
    get trackedElementsAreIdentical() {
        return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
    }
    copyNewHeadStylesheetElements() {
        for (const element of this.newHeadStylesheetElements)document.head.appendChild(element);
    }
    copyNewHeadScriptElements() {
        for (const element of this.newHeadScriptElements)document.head.appendChild(this.createScriptElement(element));
    }
    removeCurrentHeadProvisionalElements() {
        for (const element of this.currentHeadProvisionalElements)document.head.removeChild(element);
    }
    copyNewHeadProvisionalElements() {
        for (const element of this.newHeadProvisionalElements)document.head.appendChild(element);
    }
    activateNewBody() {
        document.adoptNode(this.newElement);
        this.activateNewBodyScriptElements();
    }
    activateNewBodyScriptElements() {
        for (const inertScriptElement of this.newBodyScriptElements){
            const activatedScriptElement = this.createScriptElement(inertScriptElement);
            inertScriptElement.replaceWith(activatedScriptElement);
        }
    }
    assignNewBody() {
        if (document.body && this.newElement instanceof HTMLBodyElement) document.body.replaceWith(this.newElement);
        else document.documentElement.appendChild(this.newElement);
    }
    get newHeadStylesheetElements() {
        return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
    }
    get newHeadScriptElements() {
        return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
    }
    get currentHeadProvisionalElements() {
        return this.currentHeadSnapshot.provisionalElements;
    }
    get newHeadProvisionalElements() {
        return this.newHeadSnapshot.provisionalElements;
    }
    get newBodyScriptElements() {
        return this.newElement.querySelectorAll("script");
    }
}
class SnapshotCache {
    has(location) {
        return toCacheKey(location) in this.snapshots;
    }
    get(location) {
        if (this.has(location)) {
            const snapshot = this.read(location);
            this.touch(location);
            return snapshot;
        }
    }
    put(location, snapshot) {
        this.write(location, snapshot);
        this.touch(location);
        return snapshot;
    }
    clear() {
        this.snapshots = {};
    }
    read(location) {
        return this.snapshots[toCacheKey(location)];
    }
    write(location, snapshot) {
        this.snapshots[toCacheKey(location)] = snapshot;
    }
    touch(location) {
        const key = toCacheKey(location);
        const index = this.keys.indexOf(key);
        if (index > -1) this.keys.splice(index, 1);
        this.keys.unshift(key);
        this.trim();
    }
    trim() {
        for (const key of this.keys.splice(this.size))delete this.snapshots[key];
    }
    constructor(size){
        this.keys = [];
        this.snapshots = {};
        this.size = size;
    }
}
class PageView extends View {
    renderPage(snapshot, isPreview = false, willRender = true) {
        const renderer = new PageRenderer(this.snapshot, snapshot, isPreview, willRender);
        return this.render(renderer);
    }
    renderError(snapshot) {
        const renderer = new ErrorRenderer(this.snapshot, snapshot, false);
        return this.render(renderer);
    }
    clearSnapshotCache() {
        this.snapshotCache.clear();
    }
    async cacheSnapshot() {
        if (this.shouldCacheSnapshot) {
            this.delegate.viewWillCacheSnapshot();
            const { snapshot , lastRenderedLocation: location  } = this;
            await nextEventLoopTick();
            const cachedSnapshot = snapshot.clone();
            this.snapshotCache.put(location, cachedSnapshot);
            return cachedSnapshot;
        }
    }
    getCachedSnapshotForLocation(location) {
        return this.snapshotCache.get(location);
    }
    get snapshot() {
        return PageSnapshot.fromElement(this.element);
    }
    get shouldCacheSnapshot() {
        return this.snapshot.isCacheable;
    }
    constructor(){
        super(...arguments);
        this.snapshotCache = new SnapshotCache(10);
        this.lastRenderedLocation = new URL(location.href);
    }
}
class Session {
    start() {
        if (!this.started) {
            this.pageObserver.start();
            this.cacheObserver.start();
            this.linkClickObserver.start();
            this.formSubmitObserver.start();
            this.scrollObserver.start();
            this.streamObserver.start();
            this.frameRedirector.start();
            this.history.start();
            this.started = true;
            this.enabled = true;
        }
    }
    disable() {
        this.enabled = false;
    }
    stop() {
        if (this.started) {
            this.pageObserver.stop();
            this.cacheObserver.stop();
            this.linkClickObserver.stop();
            this.formSubmitObserver.stop();
            this.scrollObserver.stop();
            this.streamObserver.stop();
            this.frameRedirector.stop();
            this.history.stop();
            this.started = false;
        }
    }
    registerAdapter(adapter) {
        this.adapter = adapter;
    }
    visit(location, options = {}) {
        this.navigator.proposeVisit(expandURL(location), options);
    }
    connectStreamSource(source) {
        this.streamObserver.connectStreamSource(source);
    }
    disconnectStreamSource(source) {
        this.streamObserver.disconnectStreamSource(source);
    }
    renderStreamMessage(message) {
        document.documentElement.appendChild(StreamMessage.wrap(message).fragment);
    }
    clearCache() {
        this.view.clearSnapshotCache();
    }
    setProgressBarDelay(delay) {
        this.progressBarDelay = delay;
    }
    get location() {
        return this.history.location;
    }
    get restorationIdentifier() {
        return this.history.restorationIdentifier;
    }
    historyPoppedToLocationWithRestorationIdentifier(location, restorationIdentifier) {
        if (this.enabled) this.navigator.startVisit(location, restorationIdentifier, {
            action: "restore",
            historyChanged: true
        });
        else this.adapter.pageInvalidated();
    }
    scrollPositionChanged(position) {
        this.history.updateRestorationData({
            scrollPosition: position
        });
    }
    willFollowLinkToLocation(link, location) {
        return this.elementDriveEnabled(link) && locationIsVisitable(location, this.snapshot.rootLocation) && this.applicationAllowsFollowingLinkToLocation(link, location);
    }
    followedLinkToLocation(link, location) {
        const action = this.getActionForLink(link);
        this.convertLinkWithMethodClickToFormSubmission(link) || this.visit(location.href, {
            action
        });
    }
    convertLinkWithMethodClickToFormSubmission(link) {
        const linkMethod = link.getAttribute("data-turbo-method");
        if (linkMethod) {
            const form = document.createElement("form");
            form.method = linkMethod;
            form.action = link.getAttribute("href") || "undefined";
            form.hidden = true;
            if (link.hasAttribute("data-turbo-confirm")) form.setAttribute("data-turbo-confirm", link.getAttribute("data-turbo-confirm"));
            const frame = this.getTargetFrameForLink(link);
            if (frame) {
                form.setAttribute("data-turbo-frame", frame);
                form.addEventListener("turbo:submit-start", ()=>form.remove());
            } else form.addEventListener("submit", ()=>form.remove());
            document.body.appendChild(form);
            return dispatch("submit", {
                cancelable: true,
                target: form
            });
        } else return false;
    }
    allowsVisitingLocationWithAction(location, action) {
        return this.locationWithActionIsSamePage(location, action) || this.applicationAllowsVisitingLocation(location);
    }
    visitProposedToLocation(location, options) {
        extendURLWithDeprecatedProperties(location);
        this.adapter.visitProposedToLocation(location, options);
    }
    visitStarted(visit7) {
        extendURLWithDeprecatedProperties(visit7.location);
        if (!visit7.silent) this.notifyApplicationAfterVisitingLocation(visit7.location, visit7.action);
    }
    visitCompleted(visit8) {
        this.notifyApplicationAfterPageLoad(visit8.getTimingMetrics());
    }
    locationWithActionIsSamePage(location, action) {
        return this.navigator.locationWithActionIsSamePage(location, action);
    }
    visitScrolledToSamePageLocation(oldURL, newURL) {
        this.notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL);
    }
    willSubmitForm(form, submitter) {
        const action = getAction(form, submitter);
        return this.elementDriveEnabled(form) && (!submitter || this.elementDriveEnabled(submitter)) && locationIsVisitable(expandURL(action), this.snapshot.rootLocation);
    }
    formSubmitted(form, submitter) {
        this.navigator.submitForm(form, submitter);
    }
    pageBecameInteractive() {
        this.view.lastRenderedLocation = this.location;
        this.notifyApplicationAfterPageLoad();
    }
    pageLoaded() {
        this.history.assumeControlOfScrollRestoration();
    }
    pageWillUnload() {
        this.history.relinquishControlOfScrollRestoration();
    }
    receivedMessageFromStream(message) {
        this.renderStreamMessage(message);
    }
    viewWillCacheSnapshot() {
        var _a;
        if (!((_a = this.navigator.currentVisit) === null || _a === void 0 ? void 0 : _a.silent)) this.notifyApplicationBeforeCachingSnapshot();
    }
    allowsImmediateRender({ element  }, resume) {
        const event = this.notifyApplicationBeforeRender(element, resume);
        return !event.defaultPrevented;
    }
    viewRenderedSnapshot(snapshot, isPreview) {
        this.view.lastRenderedLocation = this.history.location;
        this.notifyApplicationAfterRender();
    }
    viewInvalidated() {
        this.adapter.pageInvalidated();
    }
    frameLoaded(frame) {
        this.notifyApplicationAfterFrameLoad(frame);
    }
    frameRendered(fetchResponse, frame) {
        this.notifyApplicationAfterFrameRender(fetchResponse, frame);
    }
    applicationAllowsFollowingLinkToLocation(link, location) {
        const event = this.notifyApplicationAfterClickingLinkToLocation(link, location);
        return !event.defaultPrevented;
    }
    applicationAllowsVisitingLocation(location) {
        const event = this.notifyApplicationBeforeVisitingLocation(location);
        return !event.defaultPrevented;
    }
    notifyApplicationAfterClickingLinkToLocation(link, location) {
        return dispatch("turbo:click", {
            target: link,
            detail: {
                url: location.href
            },
            cancelable: true
        });
    }
    notifyApplicationBeforeVisitingLocation(location) {
        return dispatch("turbo:before-visit", {
            detail: {
                url: location.href
            },
            cancelable: true
        });
    }
    notifyApplicationAfterVisitingLocation(location, action) {
        markAsBusy(document.documentElement);
        return dispatch("turbo:visit", {
            detail: {
                url: location.href,
                action
            }
        });
    }
    notifyApplicationBeforeCachingSnapshot() {
        return dispatch("turbo:before-cache");
    }
    notifyApplicationBeforeRender(newBody, resume) {
        return dispatch("turbo:before-render", {
            detail: {
                newBody,
                resume
            },
            cancelable: true
        });
    }
    notifyApplicationAfterRender() {
        return dispatch("turbo:render");
    }
    notifyApplicationAfterPageLoad(timing = {}) {
        clearBusyState(document.documentElement);
        return dispatch("turbo:load", {
            detail: {
                url: this.location.href,
                timing
            }
        });
    }
    notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL) {
        dispatchEvent(new HashChangeEvent("hashchange", {
            oldURL: oldURL.toString(),
            newURL: newURL.toString()
        }));
    }
    notifyApplicationAfterFrameLoad(frame) {
        return dispatch("turbo:frame-load", {
            target: frame
        });
    }
    notifyApplicationAfterFrameRender(fetchResponse, frame) {
        return dispatch("turbo:frame-render", {
            detail: {
                fetchResponse
            },
            target: frame,
            cancelable: true
        });
    }
    elementDriveEnabled(element) {
        const container = element === null || element === void 0 ? void 0 : element.closest("[data-turbo]");
        if (this.drive) {
            if (container) return container.getAttribute("data-turbo") != "false";
            else return true;
        } else {
            if (container) return container.getAttribute("data-turbo") == "true";
            else return false;
        }
    }
    getActionForLink(link) {
        const action = link.getAttribute("data-turbo-action");
        return isAction(action) ? action : "advance";
    }
    getTargetFrameForLink(link) {
        const frame = link.getAttribute("data-turbo-frame");
        if (frame) return frame;
        else {
            const container = link.closest("turbo-frame");
            if (container) return container.id;
        }
    }
    get snapshot() {
        return this.view.snapshot;
    }
    constructor(){
        this.navigator = new Navigator(this);
        this.history = new History(this);
        this.view = new PageView(this, document.documentElement);
        this.adapter = new BrowserAdapter(this);
        this.pageObserver = new PageObserver(this);
        this.cacheObserver = new CacheObserver();
        this.linkClickObserver = new LinkClickObserver(this);
        this.formSubmitObserver = new FormSubmitObserver(this);
        this.scrollObserver = new ScrollObserver(this);
        this.streamObserver = new StreamObserver(this);
        this.frameRedirector = new FrameRedirector(document.documentElement);
        this.drive = true;
        this.enabled = true;
        this.progressBarDelay = 500;
        this.started = false;
    }
}
function extendURLWithDeprecatedProperties(url) {
    Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
}
const deprecatedLocationPropertyDescriptors = {
    absoluteURL: {
        get () {
            return this.toString();
        }
    }
};
const session = new Session;
const { navigator: navigator$1  } = session;
function start() {
    session.start();
}
function registerAdapter(adapter) {
    session.registerAdapter(adapter);
}
function visit(location, options) {
    session.visit(location, options);
}
function connectStreamSource(source) {
    session.connectStreamSource(source);
}
function disconnectStreamSource(source) {
    session.disconnectStreamSource(source);
}
function renderStreamMessage(message) {
    session.renderStreamMessage(message);
}
function clearCache() {
    session.clearCache();
}
function setProgressBarDelay(delay) {
    session.setProgressBarDelay(delay);
}
function setConfirmMethod(confirmMethod) {
    FormSubmission.confirmMethod = confirmMethod;
}
var Turbo = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    navigator: navigator$1,
    session: session,
    PageRenderer: PageRenderer,
    PageSnapshot: PageSnapshot,
    start: start,
    registerAdapter: registerAdapter,
    visit: visit,
    connectStreamSource: connectStreamSource,
    disconnectStreamSource: disconnectStreamSource,
    renderStreamMessage: renderStreamMessage,
    clearCache: clearCache,
    setProgressBarDelay: setProgressBarDelay,
    setConfirmMethod: setConfirmMethod
});
class FrameController {
    connect() {
        if (!this.connected) {
            this.connected = true;
            this.reloadable = false;
            if (this.loadingStyle == FrameLoadingStyle.lazy) this.appearanceObserver.start();
            this.linkInterceptor.start();
            this.formInterceptor.start();
            this.sourceURLChanged();
        }
    }
    disconnect() {
        if (this.connected) {
            this.connected = false;
            this.appearanceObserver.stop();
            this.linkInterceptor.stop();
            this.formInterceptor.stop();
        }
    }
    disabledChanged() {
        if (this.loadingStyle == FrameLoadingStyle.eager) this.loadSourceURL();
    }
    sourceURLChanged() {
        if (this.loadingStyle == FrameLoadingStyle.eager || this.hasBeenLoaded) this.loadSourceURL();
    }
    loadingStyleChanged() {
        if (this.loadingStyle == FrameLoadingStyle.lazy) this.appearanceObserver.start();
        else {
            this.appearanceObserver.stop();
            this.loadSourceURL();
        }
    }
    async loadSourceURL() {
        if (!this.settingSourceURL && this.enabled && this.isActive && (this.reloadable || this.sourceURL != this.currentURL)) {
            const previousURL = this.currentURL;
            this.currentURL = this.sourceURL;
            if (this.sourceURL) try {
                this.element.loaded = this.visit(expandURL(this.sourceURL));
                this.appearanceObserver.stop();
                await this.element.loaded;
                this.hasBeenLoaded = true;
            } catch (error) {
                this.currentURL = previousURL;
                throw error;
            }
        }
    }
    async loadResponse(fetchResponse) {
        if (fetchResponse.redirected || fetchResponse.succeeded && fetchResponse.isHTML) this.sourceURL = fetchResponse.response.url;
        try {
            const html = await fetchResponse.responseHTML;
            if (html) {
                const { body  } = parseHTMLDocument(html);
                const snapshot = new Snapshot(await this.extractForeignFrameElement(body));
                const renderer = new FrameRenderer(this.view.snapshot, snapshot, false, false);
                if (this.view.renderPromise) await this.view.renderPromise;
                await this.view.render(renderer);
                session.frameRendered(fetchResponse, this.element);
                session.frameLoaded(this.element);
                this.fetchResponseLoaded(fetchResponse);
            }
        } catch (error) {
            console.error(error);
            this.view.invalidate();
        } finally{
            this.fetchResponseLoaded = ()=>{};
        }
    }
    elementAppearedInViewport(element) {
        this.loadSourceURL();
    }
    shouldInterceptLinkClick(element, url) {
        if (element.hasAttribute("data-turbo-method")) return false;
        else return this.shouldInterceptNavigation(element);
    }
    linkClickIntercepted(element, url) {
        this.reloadable = true;
        this.navigateFrame(element, url);
    }
    shouldInterceptFormSubmission(element, submitter) {
        return this.shouldInterceptNavigation(element, submitter);
    }
    formSubmissionIntercepted(element, submitter) {
        if (this.formSubmission) this.formSubmission.stop();
        this.reloadable = false;
        this.formSubmission = new FormSubmission(this, element, submitter);
        const { fetchRequest  } = this.formSubmission;
        this.prepareHeadersForRequest(fetchRequest.headers, fetchRequest);
        this.formSubmission.start();
    }
    prepareHeadersForRequest(headers, request) {
        headers["Turbo-Frame"] = this.id;
    }
    requestStarted(request) {
        markAsBusy(this.element);
    }
    requestPreventedHandlingResponse(request, response) {
        this.resolveVisitPromise();
    }
    async requestSucceededWithResponse(request, response) {
        await this.loadResponse(response);
        this.resolveVisitPromise();
    }
    requestFailedWithResponse(request, response) {
        console.error(response);
        this.resolveVisitPromise();
    }
    requestErrored(request, error) {
        console.error(error);
        this.resolveVisitPromise();
    }
    requestFinished(request) {
        clearBusyState(this.element);
    }
    formSubmissionStarted({ formElement  }) {
        markAsBusy(formElement, this.findFrameElement(formElement));
    }
    formSubmissionSucceededWithResponse(formSubmission, response) {
        const frame = this.findFrameElement(formSubmission.formElement, formSubmission.submitter);
        this.proposeVisitIfNavigatedWithAction(frame, formSubmission.formElement, formSubmission.submitter);
        frame.delegate.loadResponse(response);
    }
    formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
        this.element.delegate.loadResponse(fetchResponse);
    }
    formSubmissionErrored(formSubmission, error) {
        console.error(error);
    }
    formSubmissionFinished({ formElement  }) {
        clearBusyState(formElement, this.findFrameElement(formElement));
    }
    allowsImmediateRender(snapshot, resume) {
        return true;
    }
    viewRenderedSnapshot(snapshot, isPreview) {}
    viewInvalidated() {}
    async visit(url) {
        var _a;
        const request = new FetchRequest(this, FetchMethod.get, url, new URLSearchParams, this.element);
        (_a = this.currentFetchRequest) === null || _a === void 0 || _a.cancel();
        this.currentFetchRequest = request;
        return new Promise((resolve)=>{
            this.resolveVisitPromise = ()=>{
                this.resolveVisitPromise = ()=>{};
                this.currentFetchRequest = null;
                resolve();
            };
            request.perform();
        });
    }
    navigateFrame(element, url, submitter) {
        const frame = this.findFrameElement(element, submitter);
        this.proposeVisitIfNavigatedWithAction(frame, element, submitter);
        frame.setAttribute("reloadable", "");
        frame.src = url;
    }
    proposeVisitIfNavigatedWithAction(frame, element, submitter) {
        const action = getAttribute("data-turbo-action", submitter, element, frame);
        if (isAction(action)) {
            const { visitCachedSnapshot  } = new SnapshotSubstitution(frame);
            frame.delegate.fetchResponseLoaded = (fetchResponse)=>{
                if (frame.src) {
                    const { statusCode , redirected  } = fetchResponse;
                    const responseHTML = frame.ownerDocument.documentElement.outerHTML;
                    const response = {
                        statusCode,
                        redirected,
                        responseHTML
                    };
                    session.visit(frame.src, {
                        action,
                        response,
                        visitCachedSnapshot,
                        willRender: false
                    });
                }
            };
        }
    }
    findFrameElement(element, submitter) {
        var _a;
        const id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
        return (_a = getFrameElementById(id)) !== null && _a !== void 0 ? _a : this.element;
    }
    async extractForeignFrameElement(container) {
        let element;
        const id = CSS.escape(this.id);
        try {
            if (element = activateElement(container.querySelector(`turbo-frame#${id}`), this.currentURL)) return element;
            if (element = activateElement(container.querySelector(`turbo-frame[src][recurse~=${id}]`), this.currentURL)) {
                await element.loaded;
                return await this.extractForeignFrameElement(element);
            }
            console.error(`Response has no matching <turbo-frame id="${id}"> element`);
        } catch (error) {
            console.error(error);
        }
        return new FrameElement();
    }
    formActionIsVisitable(form, submitter) {
        const action = getAction(form, submitter);
        return locationIsVisitable(expandURL(action), this.rootLocation);
    }
    shouldInterceptNavigation(element, submitter) {
        const id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
        if (element instanceof HTMLFormElement && !this.formActionIsVisitable(element, submitter)) return false;
        if (!this.enabled || id == "_top") return false;
        if (id) {
            const frameElement = getFrameElementById(id);
            if (frameElement) return !frameElement.disabled;
        }
        if (!session.elementDriveEnabled(element)) return false;
        if (submitter && !session.elementDriveEnabled(submitter)) return false;
        return true;
    }
    get id() {
        return this.element.id;
    }
    get enabled() {
        return !this.element.disabled;
    }
    get sourceURL() {
        if (this.element.src) return this.element.src;
    }
    get reloadable() {
        const frame = this.findFrameElement(this.element);
        return frame.hasAttribute("reloadable");
    }
    set reloadable(value) {
        const frame = this.findFrameElement(this.element);
        if (value) frame.setAttribute("reloadable", "");
        else frame.removeAttribute("reloadable");
    }
    set sourceURL(sourceURL) {
        this.settingSourceURL = true;
        this.element.src = sourceURL !== null && sourceURL !== void 0 ? sourceURL : null;
        this.currentURL = this.element.src;
        this.settingSourceURL = false;
    }
    get loadingStyle() {
        return this.element.loading;
    }
    get isLoading() {
        return this.formSubmission !== undefined || this.resolveVisitPromise() !== undefined;
    }
    get isActive() {
        return this.element.isActive && this.connected;
    }
    get rootLocation() {
        var _a;
        const meta = this.element.ownerDocument.querySelector(`meta[name="turbo-root"]`);
        const root = (_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/";
        return expandURL(root);
    }
    constructor(element){
        this.fetchResponseLoaded = (fetchResponse)=>{};
        this.currentFetchRequest = null;
        this.resolveVisitPromise = ()=>{};
        this.connected = false;
        this.hasBeenLoaded = false;
        this.settingSourceURL = false;
        this.element = element;
        this.view = new FrameView(this, this.element);
        this.appearanceObserver = new AppearanceObserver(this, this.element);
        this.linkInterceptor = new LinkInterceptor(this, this.element);
        this.formInterceptor = new FormInterceptor(this, this.element);
    }
}
class SnapshotSubstitution {
    constructor(element1){
        this.visitCachedSnapshot = ({ element  })=>{
            var _a;
            const { id , clone  } = this;
            (_a = element.querySelector("#" + id)) === null || _a === void 0 || _a.replaceWith(clone);
        };
        this.clone = element1.cloneNode(true);
        this.id = element1.id;
    }
}
function getFrameElementById(id) {
    if (id != null) {
        const element = document.getElementById(id);
        if (element instanceof FrameElement) return element;
    }
}
function activateElement(element, currentURL) {
    if (element) {
        const src = element.getAttribute("src");
        if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) throw new Error(`Matching <turbo-frame id="${element.id}"> element has a source URL which references itself`);
        if (element.ownerDocument !== document) element = document.importNode(element, true);
        if (element instanceof FrameElement) {
            element.connectedCallback();
            element.disconnectedCallback();
            return element;
        }
    }
}
const StreamActions = {
    after () {
        this.targetElements.forEach((e)=>{
            var _a;
            return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(this.templateContent, e.nextSibling);
        });
    },
    append () {
        this.removeDuplicateTargetChildren();
        this.targetElements.forEach((e)=>e.append(this.templateContent));
    },
    before () {
        this.targetElements.forEach((e)=>{
            var _a;
            return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(this.templateContent, e);
        });
    },
    prepend () {
        this.removeDuplicateTargetChildren();
        this.targetElements.forEach((e)=>e.prepend(this.templateContent));
    },
    remove () {
        this.targetElements.forEach((e)=>e.remove());
    },
    replace () {
        this.targetElements.forEach((e)=>e.replaceWith(this.templateContent));
    },
    update () {
        this.targetElements.forEach((e)=>{
            e.innerHTML = "";
            e.append(this.templateContent);
        });
    }
};
class StreamElement extends HTMLElement {
    async connectedCallback() {
        try {
            await this.render();
        } catch (error) {
            console.error(error);
        } finally{
            this.disconnect();
        }
    }
    async render() {
        var _a;
        return (_a = this.renderPromise) !== null && _a !== void 0 ? _a : this.renderPromise = (async ()=>{
            if (this.dispatchEvent(this.beforeRenderEvent)) {
                await nextAnimationFrame();
                this.performAction();
            }
        })();
    }
    disconnect() {
        try {
            this.remove();
        } catch (_a) {}
    }
    removeDuplicateTargetChildren() {
        this.duplicateChildren.forEach((c)=>c.remove());
    }
    get duplicateChildren() {
        var _a;
        const existingChildren = this.targetElements.flatMap((e)=>[
                ...e.children
            ]).filter((c)=>!!c.id);
        const newChildrenIds = [
            ...(_a = this.templateContent) === null || _a === void 0 ? void 0 : _a.children
        ].filter((c)=>!!c.id).map((c)=>c.id);
        return existingChildren.filter((c)=>newChildrenIds.includes(c.id));
    }
    get performAction() {
        if (this.action) {
            const actionFunction = StreamActions[this.action];
            if (actionFunction) return actionFunction;
            this.raise("unknown action");
        }
        this.raise("action attribute is missing");
    }
    get targetElements() {
        if (this.target) return this.targetElementsById;
        else if (this.targets) return this.targetElementsByQuery;
        else this.raise("target or targets attribute is missing");
    }
    get templateContent() {
        return this.templateElement.content.cloneNode(true);
    }
    get templateElement() {
        if (this.firstElementChild instanceof HTMLTemplateElement) return this.firstElementChild;
        this.raise("first child element must be a <template> element");
    }
    get action() {
        return this.getAttribute("action");
    }
    get target() {
        return this.getAttribute("target");
    }
    get targets() {
        return this.getAttribute("targets");
    }
    raise(message) {
        throw new Error(`${this.description}: ${message}`);
    }
    get description() {
        var _a, _b;
        return (_b = ((_a = this.outerHTML.match(/<[^>]+>/)) !== null && _a !== void 0 ? _a : [])[0]) !== null && _b !== void 0 ? _b : "<turbo-stream>";
    }
    get beforeRenderEvent() {
        return new CustomEvent("turbo:before-stream-render", {
            bubbles: true,
            cancelable: true
        });
    }
    get targetElementsById() {
        var _a;
        const element = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.getElementById(this.target);
        if (element !== null) return [
            element
        ];
        else return [];
    }
    get targetElementsByQuery() {
        var _a;
        const elements = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.targets);
        if (elements.length !== 0) return Array.prototype.slice.call(elements);
        else return [];
    }
}
FrameElement.delegateConstructor = FrameController;
customElements.define("turbo-frame", FrameElement);
customElements.define("turbo-stream", StreamElement);
(()=>{
    let element = document.currentScript;
    if (!element) return;
    if (element.hasAttribute("data-turbo-suppress-warning")) return;
    while(element = element.parentElement){
        if (element == document.body) return console.warn(unindent(t1 || (t1 = _`
        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!

        Load your application’s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements

        ——
        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s
      `)), element.outerHTML);
    }
})();
window.Turbo = Turbo;
start();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"2EvhZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_class);
var _definePropertyMjs = require("@swc/helpers/src/_define_property.mjs");
var _definePropertyMjsDefault = parcelHelpers.interopDefault(_definePropertyMjs);
var _stimulus = require("@hotwired/stimulus");
const _createEmptyOptionElement = function() {
    const option = document.createElement("option");
    return option;
};
const _createIndexOptionElement = function(label, value) {
    const option = document.createElement("option");
    option.text = label;
    option.value = value;
    return option;
};
const _stringParameterize = function(string) {
    if (string) return string.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
};
class _class extends (0, _stimulus.Controller) {
    connect() {
        this._renderResults();
    }
    _renderResults() {
        this.fieldsContainerTarget.innerHTML = "";
        switch(this.itemTypeValue){
            case "resource":
                this.fieldsContainerTarget.innerHTML += this.resourceTypeSelectTemplate;
                this.fieldsContainerTarget.innerHTML += this.resourceFieldsTemplate;
                this.fieldsContainerTarget.innerHTML += this.advancedSettingsTemplate;
                break;
            case "header":
                this.fieldsContainerTarget.innerHTML += this.headerTemplate;
                break;
            case "link":
                this.fieldsContainerTarget.innerHTML += this.linkTemplate;
                this.fieldsContainerTarget.innerHTML += this.advancedSettingsTemplate;
                break;
            case "node":
                this.fieldsContainerTarget.innerHTML += this.nodeTemplate;
                break;
            default:
                break;
        }
    }
    get advancedSettingsTemplate() {
        return this.advancedSettingsTemplateTarget.innerHTML;
    }
    get resourceFieldsTemplate() {
        return this.resourceTemplateTarget.innerHTML;
    }
    get linkTemplate() {
        return this.linkTemplateTarget.innerHTML;
    }
    get headerTemplate() {
        return this.headerTemplateTarget.innerHTML;
    }
    get nodeTemplate() {
        return this.nodeTemplateTarget.innerHTML;
    }
    get resourceTypeSelectTemplate() {
        return this.resourceSelectionTemplateTarget.innerHTML;
    }
    resourceTypeValueChanged() {
        const url = new URL(this.resourceSourceUrlValue);
        url.search = new URLSearchParams({
            resource_type: this.resourceTypeValue
        }).toString();
        if (this.resourceTypeValue != "") {
            this.resourceCollectionSelectTarget.disabled = true;
            fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then((res)=>res.json()).then((result)=>{
                result.forEach((r)=>{
                    const slug = typeof (r.slug == "undefined") ? _stringParameterize(r.title) : r.slug;
                    this.resourceCollectionSelectTarget.innerHTML += "<option data-item-slug='" + slug + "' value='" + r.id + "'>" + r.title + "</option>";
                });
                this.resourceCollectionSelectTarget.insertBefore(_createIndexOptionElement(this.listingOptionLabelValue, this.listingOptionValue), this.resourceCollectionSelectTarget.firstChild);
                this.resourceCollectionSelectTarget.insertBefore(_createEmptyOptionElement(), this.resourceCollectionSelectTarget.firstChild);
                if (this.itemActionValue == "index") this.resourceCollectionSelectTarget.value = "__index__";
                else this.resourceCollectionSelectTarget.value = this.selectedResourceValue.id;
                this.resourceCollectionSelectTarget.disabled = false;
            });
        }
    }
    selectedResourceValueChanged() {
        if (this.newRecordValue && this.selectedResourceValue.name) {
            let title = "";
            if (this.selectedResourceValue.name == this.listingOptionLabelValue) {
                title = "-- " + this.resourceTypeValue + " Listing --";
                this.linkSlugTarget.readonly = false;
            } else {
                title = this.selectedResourceValue.name;
                this.linkSlugTarget.readonly = true;
            }
            this.linkTitleTarget.value = title;
            this.linkTextTarget.value = title;
            this.linkSlugTarget.value = _stringParameterize(title);
        }
    }
    resourceTypeChange(e) {
        this.resourceTypeValue = e.target.value;
        this.resourceCollectionSelectTarget.disabled = true;
        this.resourceCollectionSelectTarget.innerHTML = "";
    }
    itemTypeChange(e) {
        this.itemTypeValue = e.target.value;
    }
    itemTypeValueChanged() {
        this._renderResults();
    }
    resourceChange(e) {
        const selectedOption = e.target.options[e.target.selectedIndex];
        this.selectedResourceValue = {
            name: selectedOption.innerText,
            id: e.target.value,
            slug: selectedOption.dataset.slug
        };
    }
}
(0, _definePropertyMjsDefault.default)(_class, "values", {
    resourceType: String,
    itemType: String,
    itemAction: String,
    listingOptionLabel: String,
    listingOption: String,
    resourceSourceUrl: String,
    selectedResource: Object,
    newRecord: Boolean
});
(0, _definePropertyMjsDefault.default)(_class, "targets", [
    "advancedSettingsTemplate",
    "headerTemplate",
    "linkTemplate",
    "nodeTemplate",
    "resourceSelectionTemplate",
    "resourceTemplate",
    "resourceTypeSelect",
    "resourceCollectionSelect",
    "resourceTypeSelect",
    "fieldsContainer",
    "itemLookWrapper",
    "itemAdvancedWrapper",
    "linkTitle",
    "linkText",
    "linkSlug",
    "linkLocation",
    "linkLocationWrapper",
    "paramsInput"
]);

},{"@swc/helpers/src/_define_property.mjs":"aQ2HO","@hotwired/stimulus":"hVNih","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"aQ2HO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ib9fJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_class);
var _definePropertyMjs = require("@swc/helpers/src/_define_property.mjs");
var _definePropertyMjsDefault = parcelHelpers.interopDefault(_definePropertyMjs);
var _stimulus = require("@hotwired/stimulus");
var _sortablejs = require("sortablejs");
var _sortablejsDefault = parcelHelpers.interopDefault(_sortablejs);
const csrfToken = document.querySelector("[name='csrf-token']").content;
class _class extends (0, _stimulus.Controller) {
    connect() {
        this.sortable = (0, _sortablejsDefault.default).create(this.element, {
            handle: ".kubik-navigation-list-node-handle",
            draggable: "li",
            direction: "vertical",
            ghostClass: "kubik-navigation-list-node-ghost",
            group: this.navigationGroupValue,
            fallbackOnBody: true,
            animation: 100,
            onEnd: this.end.bind(this)
        });
    }
    end(event) {
        let data = new FormData();
        data.append("node_id", event.item.dataset.nodeId);
        data.append("position", event.newIndex + 1);
        data.append("parent_id", event.item.parentElement.dataset.nodeId);
        fetch(this.nodeUpdateUrlValue, {
            method: "PATCH",
            headers: {
                "X-CSRF-Token": csrfToken,
                "X-Requested-With": "XMLHttpRequest"
            },
            credentials: "same-origin",
            body: data
        });
    }
}
(0, _definePropertyMjsDefault.default)(_class, "values", {
    navigationGroup: String,
    nodeUpdateUrl: String
});

},{"@hotwired/stimulus":"hVNih","sortablejs":"jTy8b","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU","@swc/helpers/src/_define_property.mjs":"aQ2HO"}],"jTy8b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MultiDrag", ()=>MultiDragPlugin);
parcelHelpers.export(exports, "Sortable", ()=>Sortable);
parcelHelpers.export(exports, "Swap", ()=>SwapPlugin);
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _typeof(obj1) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
        return typeof obj;
    };
    else _typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var version = "1.15.0";
function userAgent(pattern) {
    if (typeof window !== "undefined" && window.navigator) return !!/*@__PURE__*/ navigator.userAgent.match(pattern);
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
    capture: false,
    passive: false
};
function on(el, event, fn) {
    el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
    el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(/**HTMLElement*/ el, /**String*/ selector) {
    if (!selector) return;
    selector[0] === ">" && (selector = selector.substring(1));
    if (el) try {
        if (el.matches) return el.matches(selector);
        else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    } catch (_) {
        return false;
    }
    return false;
}
function getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(/**HTMLElement*/ el, /**String*/ selector, /**HTMLElement*/ ctx, includeCTX) {
    if (el) {
        ctx = ctx || document;
        do {
            if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) return el;
            if (el === ctx) break;
        /* jshint boss:true */ }while (el = getParentOrHost(el));
    }
    return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
    if (el && name) {
        if (el.classList) el.classList[state ? "add" : "remove"](name);
        else {
            var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
            el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
        }
    }
}
function css(el, prop, val) {
    var style = el && el.style;
    if (style) {
        if (val === void 0) {
            if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, "");
            else if (el.currentStyle) val = el.currentStyle;
            return prop === void 0 ? val : val[prop];
        } else {
            if (!(prop in style) && prop.indexOf("webkit") === -1) prop = "-webkit-" + prop;
            style[prop] = val + (typeof val === "string" ? "" : "px");
        }
    }
}
function matrix(el, selfOnly) {
    var appliedTransforms = "";
    if (typeof el === "string") appliedTransforms = el;
    else do {
        var transform = css(el, "transform");
        if (transform && transform !== "none") appliedTransforms = transform + " " + appliedTransforms;
    /* jshint boss:true */ }while (!selfOnly && (el = el.parentNode));
    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */ return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
    if (ctx) {
        var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
        if (iterator) for(; i < n; i++)iterator(list[i], i);
        return list;
    }
    return [];
}
function getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;
    if (scrollingElement) return scrollingElement;
    else return document.documentElement;
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */ function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;
    if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
        elRect = el.getBoundingClientRect();
        top = elRect.top;
        left = elRect.left;
        bottom = elRect.bottom;
        right = elRect.right;
        height = elRect.height;
        width = elRect.width;
    } else {
        top = 0;
        left = 0;
        bottom = window.innerHeight;
        right = window.innerWidth;
        height = window.innerHeight;
        width = window.innerWidth;
    }
    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
        // Adjust for translate()
        container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
        // Not needed on <= IE11
        if (!IE11OrLess) {
            do if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
                var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container
                top -= containerRect.top + parseInt(css(container, "border-top-width"));
                left -= containerRect.left + parseInt(css(container, "border-left-width"));
                bottom = top + elRect.height;
                right = left + elRect.width;
                break;
            }
            while (container = container.parentNode);
        }
    }
    if (undoScale && el !== window) {
        // Adjust for scale()
        var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
        if (elMatrix) {
            top /= scaleY;
            left /= scaleX;
            width /= scaleX;
            height /= scaleY;
            bottom = top + height;
            right = left + width;
        }
    }
    return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: width,
        height: height
    };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */ function isScrolledPast(el, elSide, parentSide) {
    var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
    /* jshint boss:true */ while(parent){
        var parentSideVal = getRect(parent)[parentSide], visible = void 0;
        if (parentSide === "top" || parentSide === "left") visible = elSideVal >= parentSideVal;
        else visible = elSideVal <= parentSideVal;
        if (!visible) return parent;
        if (parent === getWindowScrollingElement()) break;
        parent = getParentAutoScrollElement(parent, false);
    }
    return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */ function getChild(el, childNum, options, includeDragEl) {
    var currentChild = 0, i = 0, children = el.children;
    while(i < children.length){
        if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
            if (currentChild === childNum) return children[i];
            currentChild++;
        }
        i++;
    }
    return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */ function lastChild(el, selector) {
    var last = el.lastElementChild;
    while(last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector)))last = last.previousElementSibling;
    return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */ function index(el, selector) {
    var index1 = 0;
    if (!el || !el.parentNode) return -1;
    /* jshint boss:true */ while(el = el.previousElementSibling)if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) index1++;
    return index1;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */ function getRelativeScrollOffset(el) {
    var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
    if (el) do {
        var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
    }while (el !== winScroller && (el = el.parentNode));
    return [
        offsetLeft,
        offsetTop
    ];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */ function indexOfObject(arr, obj) {
    for(var i in arr){
        if (!arr.hasOwnProperty(i)) continue;
        for(var key in obj){
            if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
        }
    }
    return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;
    do // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = css(elem);
        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
            if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
            if (gotSelf || includeSelf) return elem;
            gotSelf = true;
        }
    }
    while (elem = elem.parentNode);
    return getWindowScrollingElement();
}
function extend(dst, src) {
    if (dst && src) {
        for(var key in src)if (src.hasOwnProperty(key)) dst[key] = src[key];
    }
    return dst;
}
function isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
    return function() {
        if (!_throttleTimeout) {
            var args = arguments, _this = this;
            if (args.length === 1) callback.call(_this, args[0]);
            else callback.apply(_this, args);
            _throttleTimeout = setTimeout(function() {
                _throttleTimeout = void 0;
            }, ms);
        }
    };
}
function cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
}
function clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;
    if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true);
    else if ($) return $(el).clone(true)[0];
    else return el.cloneNode(true);
}
function setRect(el, rect) {
    css(el, "position", "absolute");
    css(el, "top", rect.top);
    css(el, "left", rect.left);
    css(el, "width", rect.width);
    css(el, "height", rect.height);
}
function unsetRect(el) {
    css(el, "position", "");
    css(el, "top", "");
    css(el, "left", "");
    css(el, "width", "");
    css(el, "height", "");
}
var expando = "Sortable" + new Date().getTime();
function AnimationStateManager() {
    var animationStates = [], animationCallbackId;
    return {
        captureAnimationState: function captureAnimationState() {
            animationStates = [];
            if (!this.options.animation) return;
            var children = [].slice.call(this.el.children);
            children.forEach(function(child) {
                if (css(child, "display") === "none" || child === Sortable.ghost) return;
                animationStates.push({
                    target: child,
                    rect: getRect(child)
                });
                var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation
                if (child.thisAnimationDuration) {
                    var childMatrix = matrix(child, true);
                    if (childMatrix) {
                        fromRect.top -= childMatrix.f;
                        fromRect.left -= childMatrix.e;
                    }
                }
                child.fromRect = fromRect;
            });
        },
        addAnimationState: function addAnimationState(state) {
            animationStates.push(state);
        },
        removeAnimationState: function removeAnimationState(target) {
            animationStates.splice(indexOfObject(animationStates, {
                target: target
            }), 1);
        },
        animateAll: function animateAll(callback) {
            var _this = this;
            if (!this.options.animation) {
                clearTimeout(animationCallbackId);
                if (typeof callback === "function") callback();
                return;
            }
            var animating = false, animationTime = 0;
            animationStates.forEach(function(state) {
                var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
                if (targetMatrix) {
                    // Compensate for current animation
                    toRect.top -= targetMatrix.f;
                    toRect.left -= targetMatrix.e;
                }
                target.toRect = toRect;
                if (target.thisAnimationDuration) // Could also check if animatingRect is between fromRect and toRect
                {
                    if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) // If returning to same place as started from animation and on same axis
                    time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
                } // if fromRect != toRect: animate
                if (!isRectEqual(toRect, fromRect)) {
                    target.prevFromRect = fromRect;
                    target.prevToRect = toRect;
                    if (!time) time = _this.options.animation;
                    _this.animate(target, animatingRect, toRect, time);
                }
                if (time) {
                    animating = true;
                    animationTime = Math.max(animationTime, time);
                    clearTimeout(target.animationResetTimer);
                    target.animationResetTimer = setTimeout(function() {
                        target.animationTime = 0;
                        target.prevFromRect = null;
                        target.fromRect = null;
                        target.prevToRect = null;
                        target.thisAnimationDuration = null;
                    }, time);
                    target.thisAnimationDuration = time;
                }
            });
            clearTimeout(animationCallbackId);
            if (!animating) {
                if (typeof callback === "function") callback();
            } else animationCallbackId = setTimeout(function() {
                if (typeof callback === "function") callback();
            }, animationTime);
            animationStates = [];
        },
        animate: function animate(target, currentRect, toRect, duration) {
            if (duration) {
                css(target, "transition", "");
                css(target, "transform", "");
                var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
                target.animatingX = !!translateX;
                target.animatingY = !!translateY;
                css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
                this.forRepaintDummy = repaint(target); // repaint
                css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
                css(target, "transform", "translate3d(0,0,0)");
                typeof target.animated === "number" && clearTimeout(target.animated);
                target.animated = setTimeout(function() {
                    css(target, "transition", "");
                    css(target, "transform", "");
                    target.animated = false;
                    target.animatingX = false;
                    target.animatingY = false;
                }, duration);
            }
        }
    };
}
function repaint(target) {
    return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
    initializeByDefault: true
};
var PluginManager = {
    mount: function mount(plugin) {
        // Set default static properties
        for(var option in defaults)if (defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = defaults[option];
        plugins.forEach(function(p) {
            if (p.pluginName === plugin.pluginName) throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
        });
        plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
        var _this = this;
        this.eventCanceled = false;
        evt.cancel = function() {
            _this.eventCanceled = true;
        };
        var eventNameGlobal = eventName + "Global";
        plugins.forEach(function(plugin) {
            if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable
            if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
                sortable: sortable
            }, evt));
             // Only fire plugin event if plugin is enabled in this sortable,
            // and plugin has event defined
            if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName](_objectSpread2({
                sortable: sortable
            }, evt));
        });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults1, options) {
        plugins.forEach(function(plugin) {
            var pluginName = plugin.pluginName;
            if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
            var initialized = new plugin(sortable, el, sortable.options);
            initialized.sortable = sortable;
            initialized.options = sortable.options;
            sortable[pluginName] = initialized; // Add default options from plugin
            _extends(defaults1, initialized.defaults);
        });
        for(var option in sortable.options){
            if (!sortable.options.hasOwnProperty(option)) continue;
            var modified = this.modifyOption(sortable, option, sortable.options[option]);
            if (typeof modified !== "undefined") sortable.options[option] = modified;
        }
    },
    getEventProperties: function getEventProperties(name, sortable) {
        var eventProperties = {};
        plugins.forEach(function(plugin) {
            if (typeof plugin.eventProperties !== "function") return;
            _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
        });
        return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
        var modifiedValue;
        plugins.forEach(function(plugin) {
            // Plugin must exist on the Sortable
            if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
            if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        });
        return modifiedValue;
    }
};
function dispatchEvent(_ref) {
    var sortable = _ref.sortable, rootEl1 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl1 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex1 = _ref.oldIndex, newIndex1 = _ref.newIndex, oldDraggableIndex1 = _ref.oldDraggableIndex, newDraggableIndex1 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable1 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl1 && rootEl1[expando];
    if (!sortable) return;
    var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent("Event");
        evt.initEvent(name, true, true);
    }
    evt.to = toEl || rootEl1;
    evt.from = fromEl || rootEl1;
    evt.item = targetEl || rootEl1;
    evt.clone = cloneEl1;
    evt.oldIndex = oldIndex1;
    evt.newIndex = newIndex1;
    evt.oldDraggableIndex = oldDraggableIndex1;
    evt.newDraggableIndex = newDraggableIndex1;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable1 ? putSortable1.lastPutMode : undefined;
    var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
    for(var option in allEventProperties)evt[option] = allEventProperties[option];
    if (rootEl1) rootEl1.dispatchEvent(evt);
    if (options[onName]) options[onName].call(sortable, evt);
}
var _excluded = [
    "evt"
];
var pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
    PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
        dragEl: dragEl,
        parentEl: parentEl,
        ghostEl: ghostEl,
        rootEl: rootEl,
        nextEl: nextEl,
        lastDownEl: lastDownEl,
        cloneEl: cloneEl,
        cloneHidden: cloneHidden,
        dragStarted: moved,
        putSortable: putSortable,
        activeSortable: Sortable.active,
        originalEvent: originalEvent,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        hideGhostForTarget: _hideGhostForTarget,
        unhideGhostForTarget: _unhideGhostForTarget,
        cloneNowHidden: function cloneNowHidden() {
            cloneHidden = true;
        },
        cloneNowShown: function cloneNowShown() {
            cloneHidden = false;
        },
        dispatchSortableEvent: function dispatchSortableEvent(name) {
            _dispatchEvent({
                sortable: sortable,
                name: name,
                originalEvent: originalEvent
            });
        }
    }, data));
};
function _dispatchEvent(info) {
    dispatchEvent(_objectSpread2({
        putSortable: putSortable,
        cloneEl: cloneEl,
        targetEl: dragEl,
        rootEl: rootEl,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex
    }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, // For positioning ghost absolutely
ghostRelativeParent, ghostRelativeParentInitialScroll = [], // (left, top)
_silent = false, savedInputChecked = [];
/** @const */ var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = function() {
    if (!documentExists) return; // false when <= IE11
    if (IE11OrLess) return false;
    var el = document.createElement("x");
    el.style.cssText = "pointer-events:auto";
    return el.style.pointerEvents === "auto";
}(), _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === "flex") return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
    if (elCSS.display === "grid") return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
        var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
        return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
    }
    return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, /**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */ _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function(sortable) {
        var threshold = sortable[expando].options.emptyInsertThreshold;
        if (!threshold || lastChild(sortable)) return;
        var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
        if (insideHorizontally && insideVertically) return ret = sortable;
    });
    return ret;
}, _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
        return function(to, from, dragEl1, evt) {
            var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
            if (value == null && (pull || sameGroup)) // Default pull value
            // Default pull and put value if same group
            return true;
            else if (value == null || value === false) return false;
            else if (pull && value === "clone") return value;
            else if (typeof value === "function") return toFn(value(to, from, dragEl1, evt), pull)(to, from, dragEl1, evt);
            else {
                var otherGroup = (pull ? to : from).options.group.name;
                return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
            }
        };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != "object") originalGroup = {
        name: originalGroup
    };
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "none");
}, _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) css(ghostEl, "display", "");
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists && !ChromeForAndroid) document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        ignoreNextClick = false;
        return false;
    }
}, true);
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if (dragEl) {
        evt = evt.touches ? evt.touches[0] : evt;
        var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
        if (nearest) {
            // Create imitation event
            var event = {};
            for(var i in evt)if (evt.hasOwnProperty(i)) event[i] = evt[i];
            event.target = event.rootEl = nearest;
            event.preventDefault = void 0;
            event.stopPropagation = void 0;
            nearest[expando]._onDragOver(event);
        }
    }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if (dragEl) dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */ function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(el));
    this.el = el; // root element
    this.options = options = _extends({}, options); // Export instance
    el[expando] = this;
    var defaults2 = {
        group: null,
        sort: true,
        disabled: false,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        // percentage; 0 <= x <= 1
        invertSwap: false,
        // invert always
        invertedSwapThreshold: null,
        // will be set to same as swapThreshold if default
        removeCloneOnHide: true,
        direction: function direction() {
            return _detectDirection(el, this.options);
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: true,
        animation: 0,
        easing: null,
        setData: function setData(dataTransfer, dragEl2) {
            dataTransfer.setData("Text", dragEl2.textContent);
        },
        dropBubble: false,
        dragoverBubble: false,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: false,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: false,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: false,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && !Safari,
        emptyInsertThreshold: 5
    };
    PluginManager.initializePlugins(this, el, defaults2); // Set default options
    for(var name in defaults2)!(name in options) && (options[name] = defaults2[name]);
    _prepareGroup(options); // Bind all private methods
    for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
     // Setup drag mode
    this.nativeDraggable = options.forceFallback ? false : supportDraggable;
    if (this.nativeDraggable) // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
     // Bind events
    if (options.supportPointer) on(el, "pointerdown", this._onTapStart);
    else {
        on(el, "mousedown", this._onTapStart);
        on(el, "touchstart", this._onTapStart);
    }
    if (this.nativeDraggable) {
        on(el, "dragover", this);
        on(el, "dragenter", this);
    }
    sortables.push(this.el); // Restore sorting
    options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager
    _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */ {
    constructor: Sortable,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
        if (!this.el.contains(target) && target !== this.el) lastTarget = null;
    },
    _getDirection: function _getDirection(evt, target) {
        return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(/** Event|TouchEvent */ evt) {
        if (!evt.cancelable) return;
        var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
        _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
        if (dragEl) return;
        if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return; // only left button and enabled
         // cancel dnd if original target is content editable
        if (originalTarget.isContentEditable) return;
         // Safari ignores further event handling after mousedown
        if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") return;
        target = closest(target, options.draggable, el, false);
        if (target && target.animated) return;
        if (lastDownEl === target) // Ignoring duplicate `down`
        return;
         // Get the index of the dragged element within its parent
        oldIndex = index(target);
        oldDraggableIndex = index(target, options.draggable); // Check filter
        if (typeof filter === "function") {
            if (filter.call(this, evt, target, this)) {
                _dispatchEvent({
                    sortable: _this,
                    rootEl: originalTarget,
                    name: "filter",
                    targetEl: target,
                    toEl: el,
                    fromEl: el
                });
                pluginEvent("filter", _this, {
                    evt: evt
                });
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        } else if (filter) {
            filter = filter.split(",").some(function(criteria) {
                criteria = closest(originalTarget, criteria.trim(), el, false);
                if (criteria) {
                    _dispatchEvent({
                        sortable: _this,
                        rootEl: criteria,
                        name: "filter",
                        targetEl: target,
                        fromEl: el,
                        toEl: el
                    });
                    pluginEvent("filter", _this, {
                        evt: evt
                    });
                    return true;
                }
            });
            if (filter) {
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        }
        if (options.handle && !closest(originalTarget, options.handle, el, false)) return;
         // Prepare `dragstart`
        this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(/** Event */ evt, /** Touch */ touch, /** HTMLElement */ target) {
        var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
        if (target && !dragEl && target.parentNode === el) {
            var dragRect = getRect(target);
            rootEl = el;
            dragEl = target;
            parentEl = dragEl.parentNode;
            nextEl = dragEl.nextSibling;
            lastDownEl = target;
            activeGroup = options.group;
            Sortable.dragged = dragEl;
            tapEvt = {
                target: dragEl,
                clientX: (touch || evt).clientX,
                clientY: (touch || evt).clientY
            };
            tapDistanceLeft = tapEvt.clientX - dragRect.left;
            tapDistanceTop = tapEvt.clientY - dragRect.top;
            this._lastX = (touch || evt).clientX;
            this._lastY = (touch || evt).clientY;
            dragEl.style["will-change"] = "all";
            dragStartFn = function dragStartFn() {
                pluginEvent("delayEnded", _this, {
                    evt: evt
                });
                if (Sortable.eventCanceled) {
                    _this._onDrop();
                    return;
                } // Delayed drag has been triggered
                // we can re-enable the events: touchmove/mousemove
                _this._disableDelayedDragEvents();
                if (!FireFox && _this.nativeDraggable) dragEl.draggable = true;
                 // Bind the events: dragstart/dragend
                _this._triggerDragStart(evt, touch); // Drag start event
                _dispatchEvent({
                    sortable: _this,
                    name: "choose",
                    originalEvent: evt
                }); // Chosen item
                toggleClass(dragEl, options.chosenClass, true);
            }; // Disable "draggable"
            options.ignore.split(",").forEach(function(criteria) {
                find(dragEl, criteria.trim(), _disableDraggable);
            });
            on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
            on(ownerDocument, "mouseup", _this._onDrop);
            on(ownerDocument, "touchend", _this._onDrop);
            on(ownerDocument, "touchcancel", _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)
            if (FireFox && this.nativeDraggable) {
                this.options.touchStartThreshold = 4;
                dragEl.draggable = true;
            }
            pluginEvent("delayStart", this, {
                evt: evt
            }); // Delay is impossible for native DnD in Edge or IE
            if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
                if (Sortable.eventCanceled) {
                    this._onDrop();
                    return;
                } // If the user moves the pointer or let go the click or touch
                // before the delay has been reached:
                // disable the delayed drag
                on(ownerDocument, "mouseup", _this._disableDelayedDrag);
                on(ownerDocument, "touchend", _this._disableDelayedDrag);
                on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
                on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
                on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
                options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
                _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
            } else dragStartFn();
        }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(/** TouchEvent|PointerEvent **/ e) {
        var touch = e.touches ? e.touches[0] : e;
        if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
        dragEl && _disableDraggable(dragEl);
        clearTimeout(this._dragStartTimer);
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, "mouseup", this._disableDelayedDrag);
        off(ownerDocument, "touchend", this._disableDelayedDrag);
        off(ownerDocument, "touchcancel", this._disableDelayedDrag);
        off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
        off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
        off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(/** Event */ evt, /** Touch */ touch) {
        touch = touch || evt.pointerType == "touch" && evt;
        if (!this.nativeDraggable || touch) {
            if (this.options.supportPointer) on(document, "pointermove", this._onTouchMove);
            else if (touch) on(document, "touchmove", this._onTouchMove);
            else on(document, "mousemove", this._onTouchMove);
        } else {
            on(dragEl, "dragend", this);
            on(rootEl, "dragstart", this._onDragStart);
        }
        try {
            if (document.selection) // Timeout neccessary for IE9
            _nextTick(function() {
                document.selection.empty();
            });
            else window.getSelection().removeAllRanges();
        } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {
        awaitingDragStarted = false;
        if (rootEl && dragEl) {
            pluginEvent("dragStarted", this, {
                evt: evt
            });
            if (this.nativeDraggable) on(document, "dragover", _checkOutsideTargetEl);
            var options = this.options; // Apply effect
            !fallback && toggleClass(dragEl, options.dragClass, false);
            toggleClass(dragEl, options.ghostClass, true);
            Sortable.active = this;
            fallback && this._appendGhost(); // Drag start event
            _dispatchEvent({
                sortable: this,
                name: "start",
                originalEvent: evt
            });
        } else this._nulling();
    },
    _emulateDragOver: function _emulateDragOver() {
        if (touchEvt) {
            this._lastX = touchEvt.clientX;
            this._lastY = touchEvt.clientY;
            _hideGhostForTarget();
            var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
            var parent = target;
            while(target && target.shadowRoot){
                target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
                if (target === parent) break;
                parent = target;
            }
            dragEl.parentNode[expando]._isOutsideThisEl(target);
            if (parent) do {
                if (parent[expando]) {
                    var inserted = void 0;
                    inserted = parent[expando]._onDragOver({
                        clientX: touchEvt.clientX,
                        clientY: touchEvt.clientY,
                        target: target,
                        rootEl: parent
                    });
                    if (inserted && !this.options.dragoverBubble) break;
                }
                target = parent; // store last element
            }while (parent = parent.parentNode);
            _unhideGhostForTarget();
        }
    },
    _onTouchMove: function _onTouchMove(/**TouchEvent*/ evt) {
        if (tapEvt) {
            var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging
            if (!Sortable.active && !awaitingDragStarted) {
                if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
                this._onDragStart(evt, true);
            }
            if (ghostEl) {
                if (ghostMatrix) {
                    ghostMatrix.e += dx - (lastDx || 0);
                    ghostMatrix.f += dy - (lastDy || 0);
                } else ghostMatrix = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: dx,
                    f: dy
                };
                var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
                css(ghostEl, "webkitTransform", cssMatrix);
                css(ghostEl, "mozTransform", cssMatrix);
                css(ghostEl, "msTransform", cssMatrix);
                css(ghostEl, "transform", cssMatrix);
                lastDx = dx;
                lastDy = dy;
                touchEvt = touch;
            }
            evt.cancelable && evt.preventDefault();
        }
    },
    _appendGhost: function _appendGhost() {
        // Bug if using scale(): https://stackoverflow.com/questions/2637058
        // Not being adjusted for
        if (!ghostEl) {
            var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options; // Position absolutely
            if (PositionGhostAbsolutely) {
                // Get relatively positioned parent
                ghostRelativeParent = container;
                while(css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document)ghostRelativeParent = ghostRelativeParent.parentNode;
                if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
                    if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
                    rect.top += ghostRelativeParent.scrollTop;
                    rect.left += ghostRelativeParent.scrollLeft;
                } else ghostRelativeParent = getWindowScrollingElement();
                ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
            }
            ghostEl = dragEl.cloneNode(true);
            toggleClass(ghostEl, options.ghostClass, false);
            toggleClass(ghostEl, options.fallbackClass, true);
            toggleClass(ghostEl, options.dragClass, true);
            css(ghostEl, "transition", "");
            css(ghostEl, "transform", "");
            css(ghostEl, "box-sizing", "border-box");
            css(ghostEl, "margin", 0);
            css(ghostEl, "top", rect.top);
            css(ghostEl, "left", rect.left);
            css(ghostEl, "width", rect.width);
            css(ghostEl, "height", rect.height);
            css(ghostEl, "opacity", "0.8");
            css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
            css(ghostEl, "zIndex", "100000");
            css(ghostEl, "pointerEvents", "none");
            Sortable.ghost = ghostEl;
            container.appendChild(ghostEl); // Set transform-origin
            css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
        }
    },
    _onDragStart: function _onDragStart(/**Event*/ evt, /**boolean*/ fallback) {
        var _this = this;
        var dataTransfer = evt.dataTransfer;
        var options = _this.options;
        pluginEvent("dragStart", this, {
            evt: evt
        });
        if (Sortable.eventCanceled) {
            this._onDrop();
            return;
        }
        pluginEvent("setupClone", this);
        if (!Sortable.eventCanceled) {
            cloneEl = clone(dragEl);
            cloneEl.removeAttribute("id");
            cloneEl.draggable = false;
            cloneEl.style["will-change"] = "";
            this._hideClone();
            toggleClass(cloneEl, this.options.chosenClass, false);
            Sortable.clone = cloneEl;
        } // #1143: IFrame support workaround
        _this.cloneId = _nextTick(function() {
            pluginEvent("clone", _this);
            if (Sortable.eventCanceled) return;
            if (!_this.options.removeCloneOnHide) rootEl.insertBefore(cloneEl, dragEl);
            _this._hideClone();
            _dispatchEvent({
                sortable: _this,
                name: "clone"
            });
        });
        !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events
        if (fallback) {
            ignoreNextClick = true;
            _this._loopId = setInterval(_this._emulateDragOver, 50);
        } else {
            // Undo what was set in _prepareDragStart before drag started
            off(document, "mouseup", _this._onDrop);
            off(document, "touchend", _this._onDrop);
            off(document, "touchcancel", _this._onDrop);
            if (dataTransfer) {
                dataTransfer.effectAllowed = "move";
                options.setData && options.setData.call(_this, dataTransfer, dragEl);
            }
            on(document, "drop", _this); // #1276 fix:
            css(dragEl, "transform", "translateZ(0)");
        }
        awaitingDragStarted = true;
        _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
        on(document, "selectstart", _this);
        moved = true;
        if (Safari) css(document.body, "user-select", "none");
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(/**Event*/ evt) {
        var el = this.el, target1 = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
        if (_silent) return;
        function dragOverEvent(name, extra) {
            pluginEvent(name, _this, _objectSpread2({
                evt: evt,
                isOwner: isOwner,
                axis: vertical ? "vertical" : "horizontal",
                revert: revert,
                dragRect: dragRect,
                targetRect: targetRect,
                canSort: canSort,
                fromSortable: fromSortable,
                target: target1,
                completed: completed,
                onMove: function onMove(target, after) {
                    return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
                },
                changed: changed
            }, extra));
        } // Capture animation state
        function capture() {
            dragOverEvent("dragOverAnimationCapture");
            _this.captureAnimationState();
            if (_this !== fromSortable) fromSortable.captureAnimationState();
        } // Return invocation when dragEl is inserted (or completed)
        function completed(insertion) {
            dragOverEvent("dragOverCompleted", {
                insertion: insertion
            });
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                else activeSortable._showClone(_this);
                if (_this !== fromSortable) {
                    // Set ghost class to new sortable's ghost class
                    toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                    toggleClass(dragEl, options.ghostClass, true);
                }
                if (putSortable !== _this && _this !== Sortable.active) putSortable = _this;
                else if (_this === Sortable.active && putSortable) putSortable = null;
                 // Animation
                if (fromSortable === _this) _this._ignoreWhileAnimating = target1;
                _this.animateAll(function() {
                    dragOverEvent("dragOverAnimationComplete");
                    _this._ignoreWhileAnimating = null;
                });
                if (_this !== fromSortable) {
                    fromSortable.animateAll();
                    fromSortable._ignoreWhileAnimating = null;
                }
            } // Null lastTarget if it is not inside a previously swapped element
            if (target1 === dragEl && !dragEl.animated || target1 === el && !target1.animated) lastTarget = null;
             // no bubbling and not fallback
            if (!options.dragoverBubble && !evt.rootEl && target1 !== document) {
                dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted
                !insertion && nearestEmptyInsertDetectEvent(evt);
            }
            !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
            return completedFired = true;
        } // Call when dragEl has been inserted
        function changed() {
            newIndex = index(dragEl);
            newDraggableIndex = index(dragEl, options.draggable);
            _dispatchEvent({
                sortable: _this,
                name: "change",
                toEl: el,
                newIndex: newIndex,
                newDraggableIndex: newDraggableIndex,
                originalEvent: evt
            });
        }
        if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
        target1 = closest(target1, options.draggable, el, true);
        dragOverEvent("dragOver");
        if (Sortable.eventCanceled) return completedFired;
        if (dragEl.contains(evt.target) || target1.animated && target1.animatingX && target1.animatingY || _this._ignoreWhileAnimating === target1) return completed(false);
        ignoreNextClick = false;
        if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl // Reverting item into the original list
        ) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
            vertical = this._getDirection(evt, target1) === "vertical";
            dragRect = getRect(dragEl);
            dragOverEvent("dragOverValid");
            if (Sortable.eventCanceled) return completedFired;
            if (revert) {
                parentEl = rootEl; // actualization
                capture();
                this._hideClone();
                dragOverEvent("revert");
                if (!Sortable.eventCanceled) {
                    if (nextEl) rootEl.insertBefore(dragEl, nextEl);
                    else rootEl.appendChild(dragEl);
                }
                return completed(true);
            }
            var elLastChild = lastChild(el, options.draggable);
            if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
                // Insert to end of list
                // If already at end of list: Do not insert
                if (elLastChild === dragEl) return completed(false);
                 // if there is a last element, it is the target
                if (elLastChild && el === evt.target) target1 = elLastChild;
                if (target1) targetRect = getRect(target1);
                if (_onMove(rootEl, el, dragEl, dragRect, target1, targetRect, evt, !!target1) !== false) {
                    capture();
                    if (elLastChild && elLastChild.nextSibling) // the last draggable element is not the last node
                    el.insertBefore(dragEl, elLastChild.nextSibling);
                    else el.appendChild(dragEl);
                    parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
                // Insert to start of list
                var firstChild = getChild(el, 0, options, true);
                if (firstChild === dragEl) return completed(false);
                target1 = firstChild;
                targetRect = getRect(target1);
                if (_onMove(rootEl, el, dragEl, dragRect, target1, targetRect, evt, false) !== false) {
                    capture();
                    el.insertBefore(dragEl, firstChild);
                    parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (target1.parentNode === el) {
                targetRect = getRect(target1);
                var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target1.animated && target1.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target1, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
                if (lastTarget !== target1) {
                    targetBeforeFirstSwap = targetRect[side1];
                    pastFirstInvertThresh = false;
                    isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
                }
                direction = _getSwapDirection(evt, target1, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target1);
                var sibling;
                if (direction !== 0) {
                    // Check if target is beside dragEl in respective direction (ignoring hidden elements)
                    var dragIndex = index(dragEl);
                    do {
                        dragIndex -= direction;
                        sibling = parentEl.children[dragIndex];
                    }while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
                } // If dragEl is already beside target: Do not insert
                if (direction === 0 || sibling === target1) return completed(false);
                lastTarget = target1;
                lastDirection = direction;
                var nextSibling = target1.nextElementSibling, after1 = false;
                after1 = direction === 1;
                var moveVector = _onMove(rootEl, el, dragEl, dragRect, target1, targetRect, evt, after1);
                if (moveVector !== false) {
                    if (moveVector === 1 || moveVector === -1) after1 = moveVector === 1;
                    _silent = true;
                    setTimeout(_unsilent, 30);
                    capture();
                    if (after1 && !nextSibling) el.appendChild(dragEl);
                    else target1.parentNode.insertBefore(dragEl, after1 ? nextSibling : target1);
                     // Undo chrome's scroll adjustment (has no effect on other browsers)
                    if (scrolledPastTop) scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                    parentEl = dragEl.parentNode; // actualization
                    // must be done before animation
                    if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target1)[side1]);
                    changed();
                    return completed(true);
                }
            }
            if (el.contains(dragEl)) return completed(false);
        }
        return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
        off(document, "mousemove", this._onTouchMove);
        off(document, "touchmove", this._onTouchMove);
        off(document, "pointermove", this._onTouchMove);
        off(document, "dragover", nearestEmptyInsertDetectEvent);
        off(document, "mousemove", nearestEmptyInsertDetectEvent);
        off(document, "touchmove", nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, "mouseup", this._onDrop);
        off(ownerDocument, "touchend", this._onDrop);
        off(ownerDocument, "pointerup", this._onDrop);
        off(ownerDocument, "touchcancel", this._onDrop);
        off(document, "selectstart", this);
    },
    _onDrop: function _onDrop(/**Event*/ evt) {
        var el = this.el, options = this.options; // Get the index of the dragged element within its parent
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        pluginEvent("drop", this, {
            evt: evt
        });
        parentEl = dragEl && dragEl.parentNode; // Get again after plugin event
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        if (Sortable.eventCanceled) {
            this._nulling();
            return;
        }
        awaitingDragStarted = false;
        isCircumstantialInvert = false;
        pastFirstInvertThresh = false;
        clearInterval(this._loopId);
        clearTimeout(this._dragStartTimer);
        _cancelNextTick(this.cloneId);
        _cancelNextTick(this._dragStartId); // Unbind events
        if (this.nativeDraggable) {
            off(document, "drop", this);
            off(el, "dragstart", this._onDragStart);
        }
        this._offMoveEvents();
        this._offUpEvents();
        if (Safari) css(document.body, "user-select", "");
        css(dragEl, "transform", "");
        if (evt) {
            if (moved) {
                evt.cancelable && evt.preventDefault();
                !options.dropBubble && evt.stopPropagation();
            }
            ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") // Remove clone(s)
            cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
            if (dragEl) {
                if (this.nativeDraggable) off(dragEl, "dragend", this);
                _disableDraggable(dragEl);
                dragEl.style["will-change"] = ""; // Remove classes
                // ghostClass is added in dragStarted
                if (moved && !awaitingDragStarted) toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
                toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event
                _dispatchEvent({
                    sortable: this,
                    name: "unchoose",
                    toEl: parentEl,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: evt
                });
                if (rootEl !== parentEl) {
                    if (newIndex >= 0) {
                        // Add event
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: "add",
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        }); // Remove event
                        _dispatchEvent({
                            sortable: this,
                            name: "remove",
                            toEl: parentEl,
                            originalEvent: evt
                        }); // drag from one list and drop into another
                        _dispatchEvent({
                            rootEl: parentEl,
                            name: "sort",
                            toEl: parentEl,
                            fromEl: rootEl,
                            originalEvent: evt
                        });
                        _dispatchEvent({
                            sortable: this,
                            name: "sort",
                            toEl: parentEl,
                            originalEvent: evt
                        });
                    }
                    putSortable && putSortable.save();
                } else {
                    if (newIndex !== oldIndex) {
                        if (newIndex >= 0) {
                            // drag & drop within the same list
                            _dispatchEvent({
                                sortable: this,
                                name: "update",
                                toEl: parentEl,
                                originalEvent: evt
                            });
                            _dispatchEvent({
                                sortable: this,
                                name: "sort",
                                toEl: parentEl,
                                originalEvent: evt
                            });
                        }
                    }
                }
                if (Sortable.active) {
                    /* jshint eqnull:true */ if (newIndex == null || newIndex === -1) {
                        newIndex = oldIndex;
                        newDraggableIndex = oldDraggableIndex;
                    }
                    _dispatchEvent({
                        sortable: this,
                        name: "end",
                        toEl: parentEl,
                        originalEvent: evt
                    }); // Save sorting
                    this.save();
                }
            }
        }
        this._nulling();
    },
    _nulling: function _nulling() {
        pluginEvent("nulling", this);
        rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
        savedInputChecked.forEach(function(el) {
            el.checked = true;
        });
        savedInputChecked.length = lastDx = lastDy = 0;
    },
    handleEvent: function handleEvent(/**Event*/ evt) {
        switch(evt.type){
            case "drop":
            case "dragend":
                this._onDrop(evt);
                break;
            case "dragenter":
            case "dragover":
                if (dragEl) {
                    this._onDragOver(evt);
                    _globalDragOver(evt);
                }
                break;
            case "selectstart":
                evt.preventDefault();
                break;
        }
    },
    /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */ toArray: function toArray() {
        var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
        for(; i < n; i++){
            el = children[i];
            if (closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
        return order;
    },
    /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */ sort: function sort(order, useAnimation) {
        var items = {}, rootEl2 = this.el;
        this.toArray().forEach(function(id, i) {
            var el = rootEl2.children[i];
            if (closest(el, this.options.draggable, rootEl2, false)) items[id] = el;
        }, this);
        useAnimation && this.captureAnimationState();
        order.forEach(function(id) {
            if (items[id]) {
                rootEl2.removeChild(items[id]);
                rootEl2.appendChild(items[id]);
            }
        });
        useAnimation && this.animateAll();
    },
    /**
   * Save the current sorting
   */ save: function save() {
        var store = this.options.store;
        store && store.set && store.set(this);
    },
    /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */ closest: function closest$1(el, selector) {
        return closest(el, selector || this.options.draggable, this.el, false);
    },
    /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */ option: function option(name, value) {
        var options = this.options;
        if (value === void 0) return options[name];
        else {
            var modifiedValue = PluginManager.modifyOption(this, name, value);
            if (typeof modifiedValue !== "undefined") options[name] = modifiedValue;
            else options[name] = value;
            if (name === "group") _prepareGroup(options);
        }
    },
    /**
   * Destroy
   */ destroy: function destroy() {
        pluginEvent("destroy", this);
        var el1 = this.el;
        el1[expando] = null;
        off(el1, "mousedown", this._onTapStart);
        off(el1, "touchstart", this._onTapStart);
        off(el1, "pointerdown", this._onTapStart);
        if (this.nativeDraggable) {
            off(el1, "dragover", this);
            off(el1, "dragenter", this);
        } // Remove draggable attributes
        Array.prototype.forEach.call(el1.querySelectorAll("[draggable]"), function(el) {
            el.removeAttribute("draggable");
        });
        this._onDrop();
        this._disableDelayedDragEvents();
        sortables.splice(sortables.indexOf(this.el), 1);
        this.el = el1 = null;
    },
    _hideClone: function _hideClone() {
        if (!cloneHidden) {
            pluginEvent("hideClone", this);
            if (Sortable.eventCanceled) return;
            css(cloneEl, "display", "none");
            if (this.options.removeCloneOnHide && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
            cloneHidden = true;
        }
    },
    _showClone: function _showClone(putSortable2) {
        if (putSortable2.lastPutMode !== "clone") {
            this._hideClone();
            return;
        }
        if (cloneHidden) {
            pluginEvent("showClone", this);
            if (Sortable.eventCanceled) return; // show clone at dragEl or original position
            if (dragEl.parentNode == rootEl && !this.options.group.revertClone) rootEl.insertBefore(cloneEl, dragEl);
            else if (nextEl) rootEl.insertBefore(cloneEl, nextEl);
            else rootEl.appendChild(cloneEl);
            if (this.options.group.revertClone) this.animate(dragEl, cloneEl);
            css(cloneEl, "display", "");
            cloneHidden = false;
        }
    }
};
function _globalDragOver(/**Event*/ evt) {
    if (evt.dataTransfer) evt.dataTransfer.dropEffect = "move";
    evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl3, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal; // Support for new CustomEvent feature
    if (window.CustomEvent && !IE11OrLess && !Edge) evt = new CustomEvent("move", {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent("Event");
        evt.initEvent("move", true, true);
    }
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl3;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
    return retVal;
}
function _disableDraggable(el) {
    el.draggable = false;
}
function _unsilent() {
    _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
    var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
    var spacer = 10;
    return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
    var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
    var spacer = 10;
    return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
    if (!invertSwap) {
        // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
        if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
            // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
            // check if past first invert threshold on side opposite of lastDirection
            if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) // past first invert threshold, do not restrict inverted threshold to dragEl shadow
            pastFirstInvertThresh = true;
            if (!pastFirstInvertThresh) {
                // dragEl shadow (target move distance shadow)
                if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
                 : mouseOnAxis > targetS2 - targetMoveDistance) return -lastDirection;
            } else invert = true;
        } else {
            // Regular
            if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return _getInsertDirection(target);
        }
    }
    invert = invert || invertSwap;
    if (invert) {
        // Invert of regular
        if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
    return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */ function _getInsertDirection(target) {
    if (index(dragEl) < index(target)) return 1;
    else return -1;
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */ function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
    while(i--)sum += str.charCodeAt(i);
    return sum.toString(36);
}
function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName("input");
    var idx = inputs.length;
    while(idx--){
        var el = inputs[idx];
        el.checked && savedInputChecked.push(el);
    }
}
function _nextTick(fn) {
    return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
    return clearTimeout(id);
} // Fixed #973:
if (documentExists) on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) evt.preventDefault();
});
 // Export utils
Sortable.utils = {
    on: on,
    off: off,
    css: css,
    find: find,
    is: function is(el, selector) {
        return !!closest(el, selector, el, false);
    },
    extend: extend,
    throttle: throttle,
    closest: closest,
    toggleClass: toggleClass,
    clone: clone,
    index: index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */ Sortable.get = function(element) {
    return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */ Sortable.mount = function() {
    for(var _len = arguments.length, plugins1 = new Array(_len), _key = 0; _key < _len; _key++)plugins1[_key] = arguments[_key];
    if (plugins1[0].constructor === Array) plugins1 = plugins1[0];
    plugins1.forEach(function(plugin) {
        if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(plugin));
        if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
        PluginManager.mount(plugin);
    });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */ Sortable.create = function(el, options) {
    return new Sortable(el, options);
}; // Export
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
    function AutoScroll() {
        this.defaults = {
            scroll: true,
            forceAutoScrollFallback: false,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true
        }; // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
    }
    AutoScroll.prototype = {
        dragStarted: function dragStarted(_ref) {
            var originalEvent = _ref.originalEvent;
            if (this.sortable.nativeDraggable) on(document, "dragover", this._handleAutoScroll);
            else {
                if (this.options.supportPointer) on(document, "pointermove", this._handleFallbackAutoScroll);
                else if (originalEvent.touches) on(document, "touchmove", this._handleFallbackAutoScroll);
                else on(document, "mousemove", this._handleFallbackAutoScroll);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref2) {
            var originalEvent = _ref2.originalEvent;
            // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
            if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
        },
        drop: function drop() {
            if (this.sortable.nativeDraggable) off(document, "dragover", this._handleAutoScroll);
            else {
                off(document, "pointermove", this._handleFallbackAutoScroll);
                off(document, "touchmove", this._handleFallbackAutoScroll);
                off(document, "mousemove", this._handleFallbackAutoScroll);
            }
            clearPointerElemChangedInterval();
            clearAutoScrolls();
            cancelThrottle();
        },
        nulling: function nulling() {
            touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
            autoScrolls.length = 0;
        },
        _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
            this._handleAutoScroll(evt, true);
        },
        _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
            var _this = this;
            var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
            touchEvt$1 = evt; // IE does not seem to have native autoscroll,
            // Edge's autoscroll seems too conditional,
            // MACOS Safari does not have autoscroll,
            // Firefox and Chrome are good
            if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
                autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change
                var ogElemScroller = getParentAutoScrollElement(elem, true);
                if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
                    pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour
                    pointerElemChangedInterval = setInterval(function() {
                        var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
                        if (newElem !== ogElemScroller) {
                            ogElemScroller = newElem;
                            clearAutoScrolls();
                        }
                        autoScroll(evt, _this.options, newElem, fallback);
                    }, 10);
                    lastAutoScrollX = x;
                    lastAutoScrollY = y;
                }
            } else {
                // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
                if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
                    clearAutoScrolls();
                    return;
                }
                autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
            }
        }
    };
    return _extends(AutoScroll, {
        pluginName: "scroll",
        initializeByDefault: true
    });
}
function clearAutoScrolls() {
    autoScrolls.forEach(function(autoScroll1) {
        clearInterval(autoScroll1.pid);
    });
    autoScrolls = [];
}
function clearPointerElemChangedInterval() {
    clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl3, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
    var scrollThisInstance = false, scrollCustomFn; // New scroll root, set scrollEl
    if (scrollRootEl !== rootEl3) {
        scrollRootEl = rootEl3;
        clearAutoScrolls();
        scrollEl = options.scroll;
        scrollCustomFn = options.scrollFn;
        if (scrollEl === true) scrollEl = getParentAutoScrollElement(rootEl3, true);
    }
    var layersOut = 0;
    var currentParent = scrollEl;
    do {
        var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
        if (el === winScroller) {
            canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
            canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
        } else {
            canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
            canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
        }
        var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
        var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
        if (!autoScrolls[layersOut]) {
            for(var i = 0; i <= layersOut; i++)if (!autoScrolls[i]) autoScrolls[i] = {};
        }
        if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
            autoScrolls[layersOut].el = el;
            autoScrolls[layersOut].vx = vx;
            autoScrolls[layersOut].vy = vy;
            clearInterval(autoScrolls[layersOut].pid);
            if (vx != 0 || vy != 0) {
                scrollThisInstance = true;
                /* jshint loopfunc:true */ autoScrolls[layersOut].pid = setInterval((function() {
                    // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
                    if (isFallback && this.layer === 0) Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
                    var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
                    var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
                    if (typeof scrollCustomFn === "function") {
                        if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") return;
                    }
                    scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
                }).bind({
                    layer: layersOut
                }), 24);
            }
        }
        layersOut++;
    }while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
    scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent, putSortable3 = _ref.putSortable, dragEl4 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable3 || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();
    if (toSortable && !toSortable.el.contains(target)) {
        dispatchSortableEvent("spill");
        this.onSpill({
            dragEl: dragEl4,
            putSortable: putSortable3
        });
    }
};
function Revert() {}
Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
        var oldDraggableIndex2 = _ref2.oldDraggableIndex;
        this.startIndex = oldDraggableIndex2;
    },
    onSpill: function onSpill(_ref3) {
        var dragEl5 = _ref3.dragEl, putSortable4 = _ref3.putSortable;
        this.sortable.captureAnimationState();
        if (putSortable4) putSortable4.captureAnimationState();
        var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
        if (nextSibling) this.sortable.el.insertBefore(dragEl5, nextSibling);
        else this.sortable.el.appendChild(dragEl5);
        this.sortable.animateAll();
        if (putSortable4) putSortable4.animateAll();
    },
    drop: drop
};
_extends(Revert, {
    pluginName: "revertOnSpill"
});
function Remove() {}
Remove.prototype = {
    onSpill: function onSpill(_ref4) {
        var dragEl6 = _ref4.dragEl, putSortable5 = _ref4.putSortable;
        var parentSortable = putSortable5 || this.sortable;
        parentSortable.captureAnimationState();
        dragEl6.parentNode && dragEl6.parentNode.removeChild(dragEl6);
        parentSortable.animateAll();
    },
    drop: drop
};
_extends(Remove, {
    pluginName: "removeOnSpill"
});
var lastSwapEl;
function SwapPlugin() {
    function Swap() {
        this.defaults = {
            swapClass: "sortable-swap-highlight"
        };
    }
    Swap.prototype = {
        dragStart: function dragStart(_ref) {
            var dragEl7 = _ref.dragEl;
            lastSwapEl = dragEl7;
        },
        dragOverValid: function dragOverValid(_ref2) {
            var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
            if (!activeSortable.options.swap) return;
            var el = this.sortable.el, options = this.options;
            if (target && target !== el) {
                var prevSwapEl = lastSwapEl;
                if (onMove(target) !== false) {
                    toggleClass(target, options.swapClass, true);
                    lastSwapEl = target;
                } else lastSwapEl = null;
                if (prevSwapEl && prevSwapEl !== lastSwapEl) toggleClass(prevSwapEl, options.swapClass, false);
            }
            changed();
            completed(true);
            cancel();
        },
        drop: function drop(_ref3) {
            var activeSortable = _ref3.activeSortable, putSortable6 = _ref3.putSortable, dragEl8 = _ref3.dragEl;
            var toSortable = putSortable6 || this.sortable;
            var options = this.options;
            lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
            if (lastSwapEl && (options.swap || putSortable6 && putSortable6.options.swap)) {
                if (dragEl8 !== lastSwapEl) {
                    toSortable.captureAnimationState();
                    if (toSortable !== activeSortable) activeSortable.captureAnimationState();
                    swapNodes(dragEl8, lastSwapEl);
                    toSortable.animateAll();
                    if (toSortable !== activeSortable) activeSortable.animateAll();
                }
            }
        },
        nulling: function nulling() {
            lastSwapEl = null;
        }
    };
    return _extends(Swap, {
        pluginName: "swap",
        eventProperties: function eventProperties() {
            return {
                swapItem: lastSwapEl
            };
        }
    });
}
function swapNodes(n1, n2) {
    var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
    i1 = index(n1);
    i2 = index(n2);
    if (p1.isEqualNode(p2) && i1 < i2) i2++;
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}
var multiDragElements = [], multiDragClones = [], lastMultiDragSelect, // for selection with modifier key down (SHIFT)
multiDragSortable, initialFolding = false, // Initial multi-drag fold when drag started
folding = false, // Folding any other time
dragStarted = false, dragEl$1, clonesFromRect, clonesHidden;
function MultiDragPlugin() {
    function MultiDrag(sortable) {
        // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === "_" && typeof this[fn] === "function") this[fn] = this[fn].bind(this);
        if (!sortable.options.avoidImplicitDeselect) {
            if (sortable.options.supportPointer) on(document, "pointerup", this._deselectMultiDrag);
            else {
                on(document, "mouseup", this._deselectMultiDrag);
                on(document, "touchend", this._deselectMultiDrag);
            }
        }
        on(document, "keydown", this._checkKeyDown);
        on(document, "keyup", this._checkKeyUp);
        this.defaults = {
            selectedClass: "sortable-selected",
            multiDragKey: null,
            avoidImplicitDeselect: false,
            setData: function setData(dataTransfer, dragEl9) {
                var data = "";
                if (multiDragElements.length && multiDragSortable === sortable) multiDragElements.forEach(function(multiDragElement, i) {
                    data += (!i ? "" : ", ") + multiDragElement.textContent;
                });
                else data = dragEl9.textContent;
                dataTransfer.setData("Text", data);
            }
        };
    }
    MultiDrag.prototype = {
        multiDragKeyDown: false,
        isMultiDrag: false,
        delayStartGlobal: function delayStartGlobal(_ref) {
            var dragged = _ref.dragEl;
            dragEl$1 = dragged;
        },
        delayEnded: function delayEnded() {
            this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
        },
        setupClone: function setupClone(_ref2) {
            var sortable = _ref2.sortable, cancel = _ref2.cancel;
            if (!this.isMultiDrag) return;
            for(var i = 0; i < multiDragElements.length; i++){
                multiDragClones.push(clone(multiDragElements[i]));
                multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
                multiDragClones[i].draggable = false;
                multiDragClones[i].style["will-change"] = "";
                toggleClass(multiDragClones[i], this.options.selectedClass, false);
                multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
            }
            sortable._hideClone();
            cancel();
        },
        clone: function clone(_ref3) {
            var sortable = _ref3.sortable, rootEl4 = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
            if (!this.isMultiDrag) return;
            if (!this.options.removeCloneOnHide) {
                if (multiDragElements.length && multiDragSortable === sortable) {
                    insertMultiDragClones(true, rootEl4);
                    dispatchSortableEvent("clone");
                    cancel();
                }
            }
        },
        showClone: function showClone(_ref4) {
            var cloneNowShown = _ref4.cloneNowShown, rootEl5 = _ref4.rootEl, cancel = _ref4.cancel;
            if (!this.isMultiDrag) return;
            insertMultiDragClones(false, rootEl5);
            multiDragClones.forEach(function(clone1) {
                css(clone1, "display", "");
            });
            cloneNowShown();
            clonesHidden = false;
            cancel();
        },
        hideClone: function hideClone(_ref5) {
            var _this = this;
            var sortable = _ref5.sortable, cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
            if (!this.isMultiDrag) return;
            multiDragClones.forEach(function(clone2) {
                css(clone2, "display", "none");
                if (_this.options.removeCloneOnHide && clone2.parentNode) clone2.parentNode.removeChild(clone2);
            });
            cloneNowHidden();
            clonesHidden = true;
            cancel();
        },
        dragStartGlobal: function dragStartGlobal(_ref6) {
            var sortable = _ref6.sortable;
            if (!this.isMultiDrag && multiDragSortable) multiDragSortable.multiDrag._deselectMultiDrag();
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.sortableIndex = index(multiDragElement);
            }); // Sort multi-drag elements
            multiDragElements = multiDragElements.sort(function(a, b) {
                return a.sortableIndex - b.sortableIndex;
            });
            dragStarted = true;
        },
        dragStarted: function dragStarted(_ref7) {
            var _this2 = this;
            var sortable = _ref7.sortable;
            if (!this.isMultiDrag) return;
            if (this.options.sort) {
                // Capture rects,
                // hide multi drag elements (by positioning them absolute),
                // set multi drag elements rects to dragRect,
                // show multi drag elements,
                // animate to rects,
                // unset rects & remove from DOM
                sortable.captureAnimationState();
                if (this.options.animation) {
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        css(multiDragElement, "position", "absolute");
                    });
                    var dragRect = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRect);
                    });
                    folding = true;
                    initialFolding = true;
                }
            }
            sortable.animateAll(function() {
                folding = false;
                initialFolding = false;
                if (_this2.options.animation) multiDragElements.forEach(function(multiDragElement) {
                    unsetRect(multiDragElement);
                });
                 // Remove all auxiliary multidrag items from el, if sorting enabled
                if (_this2.options.sort) removeMultiDragElements();
            });
        },
        dragOver: function dragOver(_ref8) {
            var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
            if (folding && ~multiDragElements.indexOf(target)) {
                completed(false);
                cancel();
            }
        },
        revert: function revert(_ref9) {
            var fromSortable = _ref9.fromSortable, rootEl6 = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
            if (multiDragElements.length > 1) {
                // Setup unfold animation
                multiDragElements.forEach(function(multiDragElement) {
                    sortable.addAnimationState({
                        target: multiDragElement,
                        rect: folding ? getRect(multiDragElement) : dragRect
                    });
                    unsetRect(multiDragElement);
                    multiDragElement.fromRect = dragRect;
                    fromSortable.removeAnimationState(multiDragElement);
                });
                folding = false;
                insertMultiDragElements(!this.options.removeCloneOnHide, rootEl6);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref10) {
            var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl1 = _ref10.parentEl, putSortable7 = _ref10.putSortable;
            var options = this.options;
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location
                if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable7)) {
                    // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
                    var dragRectAbsolute = getRect(dragEl$1, false, true, true);
                    multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === dragEl$1) return;
                        setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
                        // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
                        parentEl1.appendChild(multiDragElement);
                    });
                    folding = true;
                } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
                if (!isOwner) {
                    // Only remove if not folding (folding will remove them anyways)
                    if (!folding) removeMultiDragElements();
                    if (multiDragElements.length > 1) {
                        var clonesHiddenBefore = clonesHidden;
                        activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden
                        if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) multiDragClones.forEach(function(clone3) {
                            activeSortable.addAnimationState({
                                target: clone3,
                                rect: clonesFromRect
                            });
                            clone3.fromRect = clonesFromRect;
                            clone3.thisAnimationDuration = null;
                        });
                    } else activeSortable._showClone(sortable);
                }
            }
        },
        dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
            var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
            multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
            });
            if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
                clonesFromRect = _extends({}, dragRect);
                var dragMatrix = matrix(dragEl$1, true);
                clonesFromRect.top -= dragMatrix.f;
                clonesFromRect.left -= dragMatrix.e;
            }
        },
        dragOverAnimationComplete: function dragOverAnimationComplete() {
            if (folding) {
                folding = false;
                removeMultiDragElements();
            }
        },
        drop: function drop(_ref12) {
            var evt = _ref12.originalEvent, rootEl7 = _ref12.rootEl, parentEl2 = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex2 = _ref12.oldIndex, putSortable8 = _ref12.putSortable;
            var toSortable = putSortable8 || this.sortable;
            if (!evt) return;
            var options = this.options, children = parentEl2.children; // Multi-drag selection
            if (!dragStarted) {
                if (options.multiDragKey && !this.multiDragKeyDown) this._deselectMultiDrag();
                toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
                if (!~multiDragElements.indexOf(dragEl$1)) {
                    multiDragElements.push(dragEl$1);
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl7,
                        name: "select",
                        targetEl: dragEl$1,
                        originalEvent: evt
                    }); // Modifier activated, select from last to dragEl
                    if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
                        var lastIndex = index(lastMultiDragSelect), currentIndex = index(dragEl$1);
                        if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                            // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                            // (but previous selection existed)
                            var n, i;
                            if (currentIndex > lastIndex) {
                                i = lastIndex;
                                n = currentIndex;
                            } else {
                                i = currentIndex;
                                n = lastIndex + 1;
                            }
                            for(; i < n; i++){
                                if (~multiDragElements.indexOf(children[i])) continue;
                                toggleClass(children[i], options.selectedClass, true);
                                multiDragElements.push(children[i]);
                                dispatchEvent({
                                    sortable: sortable,
                                    rootEl: rootEl7,
                                    name: "select",
                                    targetEl: children[i],
                                    originalEvent: evt
                                });
                            }
                        }
                    } else lastMultiDragSelect = dragEl$1;
                    multiDragSortable = toSortable;
                } else {
                    multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
                    lastMultiDragSelect = null;
                    dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl7,
                        name: "deselect",
                        targetEl: dragEl$1,
                        originalEvent: evt
                    });
                }
            } // Multi-drag drop
            if (dragStarted && this.isMultiDrag) {
                folding = false; // Do not "unfold" after around dragEl if reverted
                if ((parentEl2[expando].options.sort || parentEl2 !== rootEl7) && multiDragElements.length > 1) {
                    var dragRect = getRect(dragEl$1), multiDragIndex = index(dragEl$1, ":not(." + this.options.selectedClass + ")");
                    if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
                    toSortable.captureAnimationState();
                    if (!initialFolding) {
                        if (options.animation) {
                            dragEl$1.fromRect = dragRect;
                            multiDragElements.forEach(function(multiDragElement) {
                                multiDragElement.thisAnimationDuration = null;
                                if (multiDragElement !== dragEl$1) {
                                    var rect = folding ? getRect(multiDragElement) : dragRect;
                                    multiDragElement.fromRect = rect; // Prepare unfold animation
                                    toSortable.addAnimationState({
                                        target: multiDragElement,
                                        rect: rect
                                    });
                                }
                            });
                        } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
                        // properly they must all be removed
                        removeMultiDragElements();
                        multiDragElements.forEach(function(multiDragElement) {
                            if (children[multiDragIndex]) parentEl2.insertBefore(multiDragElement, children[multiDragIndex]);
                            else parentEl2.appendChild(multiDragElement);
                            multiDragIndex++;
                        }); // If initial folding is done, the elements may have changed position because they are now
                        // unfolding around dragEl, even though dragEl may not have his index changed, so update event
                        // must be fired here as Sortable will not.
                        if (oldIndex2 === index(dragEl$1)) {
                            var update = false;
                            multiDragElements.forEach(function(multiDragElement) {
                                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                                    update = true;
                                    return;
                                }
                            });
                            if (update) dispatchSortableEvent("update");
                        }
                    } // Must be done after capturing individual rects (scroll bar)
                    multiDragElements.forEach(function(multiDragElement) {
                        unsetRect(multiDragElement);
                    });
                    toSortable.animateAll();
                }
                multiDragSortable = toSortable;
            } // Remove clones if necessary
            if (rootEl7 === parentEl2 || putSortable8 && putSortable8.lastPutMode !== "clone") multiDragClones.forEach(function(clone4) {
                clone4.parentNode && clone4.parentNode.removeChild(clone4);
            });
        },
        nullingGlobal: function nullingGlobal() {
            this.isMultiDrag = dragStarted = false;
            multiDragClones.length = 0;
        },
        destroyGlobal: function destroyGlobal() {
            this._deselectMultiDrag();
            off(document, "pointerup", this._deselectMultiDrag);
            off(document, "mouseup", this._deselectMultiDrag);
            off(document, "touchend", this._deselectMultiDrag);
            off(document, "keydown", this._checkKeyDown);
            off(document, "keyup", this._checkKeyUp);
        },
        _deselectMultiDrag: function _deselectMultiDrag(evt) {
            if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable
            if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable
            if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click
            if (evt && evt.button !== 0) return;
            while(multiDragElements.length){
                var el = multiDragElements[0];
                toggleClass(el, this.options.selectedClass, false);
                multiDragElements.shift();
                dispatchEvent({
                    sortable: this.sortable,
                    rootEl: this.sortable.el,
                    name: "deselect",
                    targetEl: el,
                    originalEvent: evt
                });
            }
        },
        _checkKeyDown: function _checkKeyDown(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = true;
        },
        _checkKeyUp: function _checkKeyUp(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = false;
        }
    };
    return _extends(MultiDrag, {
        // Static methods & properties
        pluginName: "multiDrag",
        utils: {
            /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */ select: function select(el) {
                var sortable = el.parentNode[expando];
                if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
                if (multiDragSortable && multiDragSortable !== sortable) {
                    multiDragSortable.multiDrag._deselectMultiDrag();
                    multiDragSortable = sortable;
                }
                toggleClass(el, sortable.options.selectedClass, true);
                multiDragElements.push(el);
            },
            /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */ deselect: function deselect(el) {
                var sortable = el.parentNode[expando], index2 = multiDragElements.indexOf(el);
                if (!sortable || !sortable.options.multiDrag || !~index2) return;
                toggleClass(el, sortable.options.selectedClass, false);
                multiDragElements.splice(index2, 1);
            }
        },
        eventProperties: function eventProperties() {
            var _this3 = this;
            var oldIndicies = [], newIndicies = [];
            multiDragElements.forEach(function(multiDragElement) {
                oldIndicies.push({
                    multiDragElement: multiDragElement,
                    index: multiDragElement.sortableIndex
                }); // multiDragElements will already be sorted if folding
                var newIndex2;
                if (folding && multiDragElement !== dragEl$1) newIndex2 = -1;
                else if (folding) newIndex2 = index(multiDragElement, ":not(." + _this3.options.selectedClass + ")");
                else newIndex2 = index(multiDragElement);
                newIndicies.push({
                    multiDragElement: multiDragElement,
                    index: newIndex2
                });
            });
            return {
                items: _toConsumableArray(multiDragElements),
                clones: [].concat(multiDragClones),
                oldIndicies: oldIndicies,
                newIndicies: newIndicies
            };
        },
        optionListeners: {
            multiDragKey: function multiDragKey(key) {
                key = key.toLowerCase();
                if (key === "ctrl") key = "Control";
                else if (key.length > 1) key = key.charAt(0).toUpperCase() + key.substr(1);
                return key;
            }
        }
    });
}
function insertMultiDragElements(clonesInserted, rootEl8) {
    multiDragElements.forEach(function(multiDragElement, i) {
        var target = rootEl8.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
        if (target) rootEl8.insertBefore(multiDragElement, target);
        else rootEl8.appendChild(multiDragElement);
    });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */ function insertMultiDragClones(elementsInserted, rootEl9) {
    multiDragClones.forEach(function(clone5, i) {
        var target = rootEl9.children[clone5.sortableIndex + (elementsInserted ? Number(i) : 0)];
        if (target) rootEl9.insertBefore(clone5, target);
        else rootEl9.appendChild(clone5);
    });
}
function removeMultiDragElements() {
    multiDragElements.forEach(function(multiDragElement) {
        if (multiDragElement === dragEl$1) return;
        multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
exports.default = Sortable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},["6Tm31","9vN5r"], "9vN5r", "parcelRequiref0f4")

//# sourceMappingURL=kubik_navigation.js.map
