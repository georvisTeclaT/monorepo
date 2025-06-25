import Ce from "react";
var W = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function fr() {
  if (_e) return A;
  _e = 1;
  var Y = Ce, O = Symbol.for("react.element"), U = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, D = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(y, f, _) {
    var h, g = {}, x = null, I = null;
    _ !== void 0 && (x = "" + _), f.key !== void 0 && (x = "" + f.key), f.ref !== void 0 && (I = f.ref);
    for (h in f) R.call(f, h) && !N.hasOwnProperty(h) && (g[h] = f[h]);
    if (y && y.defaultProps) for (h in f = y.defaultProps, f) g[h] === void 0 && (g[h] = f[h]);
    return { $$typeof: O, type: y, key: x, ref: I, props: g, _owner: D.current };
  }
  return A.Fragment = U, A.jsx = S, A.jsxs = S, A;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function dr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var Y = Ce, O = Symbol.for("react.element"), U = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), y = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), X = Symbol.iterator, Oe = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var w = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          n[a - 1] = arguments[a];
        Pe("error", e, n);
      }
    }
    function Pe(e, r, n) {
      {
        var a = w.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (r += "%s", n = n.concat([s]));
        var l = n.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var ke = !1, Ae = !1, Fe = !1, De = !1, Ne = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === N || Ne || e === D || e === _ || e === h || De || e === I || ke || Ae || Fe || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === g || e.$$typeof === S || e.$$typeof === y || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Le(e, r, n) {
      var a = e.displayName;
      if (a)
        return a;
      var s = r.displayName || r.name || "";
      return s !== "" ? n + "(" + s + ")" : n;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case U:
          return "Portal";
        case N:
          return "Profiler";
        case D:
          return "StrictMode";
        case _:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ee(r) + ".Consumer";
          case S:
            var n = e;
            return ee(n._context) + ".Provider";
          case f:
            return Le(e, e.render, "ForwardRef");
          case g:
            var a = e.displayName || null;
            return a !== null ? a : b(e.type) || "Memo";
          case x: {
            var s = e, l = s._payload, o = s._init;
            try {
              return b(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, P = 0, re, ne, te, ae, ie, oe, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Me() {
      {
        if (P === 0) {
          re = console.log, ne = console.info, te = console.warn, ae = console.error, ie = console.group, oe = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        P++;
      }
    }
    function $e() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, e, {
              value: re
            }),
            info: E({}, e, {
              value: ne
            }),
            warn: E({}, e, {
              value: te
            }),
            error: E({}, e, {
              value: ae
            }),
            group: E({}, e, {
              value: ie
            }),
            groupCollapsed: E({}, e, {
              value: oe
            }),
            groupEnd: E({}, e, {
              value: se
            })
          });
        }
        P < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = w.ReactCurrentDispatcher, B;
    function L(e, r, n) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            B = a && a[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, M;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ve();
    }
    function ce(e, r) {
      if (!e || J)
        return "";
      {
        var n = M.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      J = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = q.current, q.current = null, Me();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (p) {
              a = p;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (p) {
              a = p;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            a = p;
          }
          e();
        }
      } catch (p) {
        if (p && a && typeof p.stack == "string") {
          for (var i = p.stack.split(`
`), v = a.stack.split(`
`), c = i.length - 1, u = v.length - 1; c >= 1 && u >= 0 && i[c] !== v[u]; )
            u--;
          for (; c >= 1 && u >= 0; c--, u--)
            if (i[c] !== v[u]) {
              if (c !== 1 || u !== 1)
                do
                  if (c--, u--, u < 0 || i[c] !== v[u]) {
                    var m = `
` + i[c].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, m), m;
                  }
                while (c >= 1 && u >= 0);
              break;
            }
        }
      } finally {
        J = !1, q.current = l, $e(), Error.prepareStackTrace = s;
      }
      var C = e ? e.displayName || e.name : "", j = C ? L(C) : "";
      return typeof e == "function" && M.set(e, j), j;
    }
    function We(e, r, n) {
      return ce(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function $(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ye(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case _:
          return L("Suspense");
        case h:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return We(e.render);
          case g:
            return $(e.type, r, n);
          case x: {
            var a = e, s = a._payload, l = a._init;
            try {
              return $(l(s), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var k = Object.prototype.hasOwnProperty, ue = {}, fe = w.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, n = $(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(n);
      } else
        fe.setExtraStackFrame(null);
    }
    function Ue(e, r, n, a, s) {
      {
        var l = Function.call.bind(k);
        for (var o in e)
          if (l(e, o)) {
            var i = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((a || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              i = e[o](r, o, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              i = c;
            }
            i && !(i instanceof Error) && (V(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, o, typeof i), V(null)), i instanceof Error && !(i.message in ue) && (ue[i.message] = !0, V(s), d("Failed %s type: %s", n, i.message), V(null));
          }
      }
    }
    var qe = Array.isArray;
    function Z(e) {
      return qe(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Je(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Je(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), de(e);
    }
    var pe = w.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, me;
    function Ke(e) {
      if (k.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (k.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      typeof e.ref == "string" && pe.current;
    }
    function He(e, r) {
      {
        var n = function() {
          he || (he = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var n = function() {
          me || (me = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, n, a, s, l, o) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: O,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function er(e, r, n, a, s) {
      {
        var l, o = {}, i = null, v = null;
        n !== void 0 && (ve(n), i = "" + n), ze(r) && (ve(r.key), i = "" + r.key), Ke(r) && (v = r.ref, Ge(r, s));
        for (l in r)
          k.call(r, l) && !Ze.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (l in c)
            o[l] === void 0 && (o[l] = c[l]);
        }
        if (i || v) {
          var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && He(o, u), v && Xe(o, u);
        }
        return Qe(e, i, v, s, a, pe.current, o);
      }
    }
    var K = w.ReactCurrentOwner, ge = w.ReactDebugCurrentFrame;
    function T(e) {
      if (e) {
        var r = e._owner, n = $(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(n);
      } else
        ge.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    function be() {
      {
        if (K.current) {
          var e = b(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var ye = {};
    function nr(e) {
      {
        var r = be();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = nr(r);
        if (ye[n])
          return;
        ye[n] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + b(e._owner.type) + "."), T(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), T(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            G(a) && xe(a, r);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Se(e);
          if (typeof s == "function" && s !== e.entries)
            for (var l = s.call(e), o; !(o = l.next()).done; )
              G(o.value) && xe(o.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          n = r.propTypes;
        else
          return;
        if (n) {
          var a = b(r);
          Ue(n, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var s = b(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var a = r[n];
          if (a !== "children" && a !== "key") {
            T(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), T(null);
            break;
          }
        }
        e.ref !== null && (T(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), T(null));
      }
    }
    var je = {};
    function Re(e, r, n, a, s, l) {
      {
        var o = Ie(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr();
          v ? i += v : i += be();
          var c;
          e === null ? c = "null" : Z(e) ? c = "array" : e !== void 0 && e.$$typeof === O ? (c = "<" + (b(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, i);
        }
        var u = er(e, r, n, s, l);
        if (u == null)
          return u;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (a)
              if (Z(m)) {
                for (var C = 0; C < m.length; C++)
                  Ee(m[C], e);
                Object.freeze && Object.freeze(m);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(m, e);
        }
        if (k.call(r, "key")) {
          var j = b(e), p = Object.keys(r).filter(function(ur) {
            return ur !== "key";
          }), H = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[j + H]) {
            var cr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, j, cr, j), je[j + H] = !0;
          }
        }
        return e === R ? ar(u) : tr(u), u;
      }
    }
    function ir(e, r, n) {
      return Re(e, r, n, !0);
    }
    function or(e, r, n) {
      return Re(e, r, n, !1);
    }
    var sr = or, lr = ir;
    F.Fragment = R, F.jsx = sr, F.jsxs = lr;
  }()), F;
}
var Te;
function vr() {
  return Te || (Te = 1, process.env.NODE_ENV === "production" ? W.exports = fr() : W.exports = dr()), W.exports;
}
var t = vr();
const pr = new URL("../../assets/img/login-background.png", import.meta.url).href;
function hr() {
  return /* @__PURE__ */ t.jsxs("div", { className: "row ", children: [
    /* @__PURE__ */ t.jsx("div", { id: "containerImg", children: /* @__PURE__ */ t.jsx("img", { src: pr, alt: "ImagemLogin" }) }),
    /* @__PURE__ */ t.jsx("div", { id: "containerTitleImg", children: /* @__PURE__ */ t.jsxs("div", { id: "contentTilteImg", children: [
      /* @__PURE__ */ t.jsx("h3", { className: "titleImg", children: "Toou" }),
      /* @__PURE__ */ t.jsx("h4", { className: "subtitleImg", children: "Sua nova plataforma de viagens corporativas!" }),
      /* @__PURE__ */ t.jsx("div", { id: "contentBtn", children: /* @__PURE__ */ t.jsx("button", { type: "button", children: /* @__PURE__ */ t.jsx("span", { children: "Saiba mais" }) }) })
    ] }) })
  ] });
}
function mr() {
  return /* @__PURE__ */ t.jsx("div", { id: "containerLogo", children: /* @__PURE__ */ t.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "8rem", height: "4rem", viewBox: "0 0 102 36", fill: "none", "data-cy": "icon-Logo", name: "Logo", children: [
    /* @__PURE__ */ t.jsx("path", { fill: "#09112D", d: "M16.127 27.433c-.8.22-1.72.33-2.757.33-1.508 0-2.574-.423-3.203-1.271-.628-.849-.94-2.262-.94-4.239V12.216h8.085a.676.676 0 0 0 .676-.677V8.137a.676.676 0 0 0-.676-.677H9.226V.69a.68.68 0 0 0-.674-.677L4.205 0a.679.679 0 0 0-.68.677V7.49H.678A.676.676 0 0 0 0 8.167v3.383c0 .374.303.677.677.677h2.849v10.07c0 1.633.14 3.084.423 4.356.282 1.272.77 2.357 1.462 3.252.69.895 1.625 1.577 2.802 2.049 1.177.471 2.647.707 4.406.707 1.444 0 2.7-.148 3.77-.448a25.995 25.995 0 0 0 2.046-.654.68.68 0 0 0 .428-.772l-.667-3.205a.675.675 0 0 0-.872-.506c-.348.116-.746.234-1.197.357ZM96.305 8.916v18.471c-.377.095-.952.172-1.72.236-.77.064-1.501.095-2.19.095-1.916 0-3.26-.564-4.03-1.695-.769-1.131-1.153-3.016-1.153-5.652V8.916c0-.802-.651-1.456-1.457-1.456h-2.79c-.802 0-1.456.651-1.456 1.456v12.348c0 1.664.172 3.195.518 4.592.346 1.398.918 2.6 1.72 3.603.8 1.005 1.867 1.79 3.203 2.357 1.334.564 2.99.848 4.97.848 2.103 0 4.036-.148 5.795-.448a67.127 67.127 0 0 0 3.144-.6A1.454 1.454 0 0 0 102 30.195V8.916c0-.802-.651-1.456-1.456-1.456h-2.79c-.798 0-1.45.651-1.45 1.456ZM64.02 4.254H34.31c-8.652 0-15.665 7.013-15.665 15.665s7.013 15.665 15.665 15.665h29.71c8.652 0 15.666-7.013 15.666-15.665S72.672 4.254 64.02 4.254ZM35.262 32.66c-7.04 0-12.742-5.705-12.742-12.742 0-7.039 5.705-12.742 12.742-12.742 7.039 0 12.742 5.706 12.742 12.742.002 7.037-5.703 12.742-12.742 12.742Z" }),
    /* @__PURE__ */ t.jsx("path", { fill: "#AFD805", d: "M63.592 32.662c7.037 0 12.742-5.705 12.742-12.742 0-7.038-5.705-12.742-12.742-12.742-7.037 0-12.742 5.705-12.742 12.742 0 7.037 5.705 12.742 12.742 12.742Z" }),
    /* @__PURE__ */ t.jsx("path", { fill: "#09112D", d: "M63.592 26.576a6.657 6.657 0 1 0 0-13.313 6.657 6.657 0 0 0 0 13.313ZM35.262 26.576a6.657 6.657 0 1 0 0-13.313 6.657 6.657 0 0 0 0 13.313Z" })
  ] }) });
}
function gr() {
  return /* @__PURE__ */ t.jsxs("div", { className: "row", children: [
    /* @__PURE__ */ t.jsx(mr, {}),
    /* @__PURE__ */ t.jsxs("div", { className: "containerForm", children: [
      /* @__PURE__ */ t.jsx("h2", { className: "titleLogin", children: " Login " }),
      /* @__PURE__ */ t.jsxs("p", { className: "titleText", children: [
        " ",
        /* @__PURE__ */ t.jsx("span", { children: "Insira seus dados para acessar o portal do" }),
        " ",
        /* @__PURE__ */ t.jsx("strong", { children: "Toou" }),
        " "
      ] }),
      /* @__PURE__ */ t.jsxs("div", { id: "formLogin", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "contentCompo col-lg-12", children: [
          /* @__PURE__ */ t.jsx("div", { className: "contentCampo-label", children: /* @__PURE__ */ t.jsx("label", { htmlFor: "email", className: "", children: "Usuário" }) }),
          /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx("div", { className: "contentCampo-input", children: /* @__PURE__ */ t.jsx("input", { placeholder: "Informe seu usuário", id: "email", autoComplete: "on", "data-cy": "input-username", size: 1, className: "", type: "text", name: "email" }) }) })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: "contentCompo col-lg-12", children: [
          /* @__PURE__ */ t.jsx("div", { className: "contentCampo-label", children: /* @__PURE__ */ t.jsx("label", { htmlFor: "password", className: "", children: "Senha" }) }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("div", { className: "contentCampo-input", children: /* @__PURE__ */ t.jsx("input", { placeholder: "Digite sua senha", id: "password", autoComplete: "new-password", "data-cy": "input-password", size: 1, className: "", type: "password", name: "password", "aria-autocomplete": "list" }) }),
            /* @__PURE__ */ t.jsx("div", { className: "contentCampo-mostrarSenha", children: /* @__PURE__ */ t.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", "data-cy": "icon-OpenEyed", name: "OpenEyed", children: /* @__PURE__ */ t.jsx("path", { fill: "#737373", d: "M8 2.667c-3.636 0-6.742 2.261-8 5.454 1.258 3.193 4.364 5.455 8 5.455s6.742-2.262 8-5.455c-1.258-3.193-4.364-5.454-8-5.454Zm0 9.09a3.638 3.638 0 0 1-3.636-3.636A3.638 3.638 0 0 1 8 4.485a3.638 3.638 0 0 1 3.636 3.636A3.638 3.638 0 0 1 8 11.758ZM8 5.94a2.179 2.179 0 0 0-2.182 2.182c0 1.207.975 2.182 2.182 2.182a2.179 2.179 0 0 0 2.182-2.182A2.179 2.179 0 0 0 8 5.94Z" }) }) })
          ] })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "contentCampo col-lg-12 mt-4", children: /* @__PURE__ */ t.jsxs("div", { className: "contentCampo-check row", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "form-check form-switch col-6 contentInput", children: [
            /* @__PURE__ */ t.jsx("input", { className: "form-check-input", type: "checkbox", role: "switch", id: "inputCheckbox" }),
            /* @__PURE__ */ t.jsx("label", { className: "form-check-label", htmlFor: "inputCheckbox", children: "Manter-me conectado" })
          ] }),
          /* @__PURE__ */ t.jsx("a", { className: "col-6 contentLink", "data-cy": "button-forgotPassword", children: "Esqueceu sua  senha?" })
        ] }) }),
        /* @__PURE__ */ t.jsx("button", { id: "btnAcessar", type: "submit", children: /* @__PURE__ */ t.jsx("span", { children: "Acessar conta" }) }),
        /* @__PURE__ */ t.jsx("div", { id: "linkAcesso", children: /* @__PURE__ */ t.jsx("a", { href: "#", children: "Primeiro acesso" }) })
      ] })
    ] })
  ] });
}
const yr = () => /* @__PURE__ */ t.jsx("div", { id: "containerLogin", children: /* @__PURE__ */ t.jsxs("div", { className: "contentFlex col-md-12", children: [
  /* @__PURE__ */ t.jsx("div", { className: "col-md-6", children: /* @__PURE__ */ t.jsx(gr, {}) }),
  /* @__PURE__ */ t.jsx("div", { className: "col-md-6", children: /* @__PURE__ */ t.jsx(hr, {}) })
] }) });
export {
  yr as Login
};
