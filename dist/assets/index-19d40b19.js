(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver(i => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var oi =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Mv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var li = {},
  zv = {
    get exports() {
      return li;
    },
    set exports(e) {
      li = e;
    },
  },
  Zo = {},
  M = {},
  Uv = {
    get exports() {
      return M;
    },
    set exports(e) {
      M = e;
    },
  },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xi = Symbol.for("react.element"),
  Hv = Symbol.for("react.portal"),
  Bv = Symbol.for("react.fragment"),
  qv = Symbol.for("react.strict_mode"),
  Vv = Symbol.for("react.profiler"),
  Wv = Symbol.for("react.provider"),
  Qv = Symbol.for("react.context"),
  Kv = Symbol.for("react.forward_ref"),
  Xv = Symbol.for("react.suspense"),
  Gv = Symbol.for("react.memo"),
  Yv = Symbol.for("react.lazy"),
  Zs = Symbol.iterator;
function Zv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zs && e[Zs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var td = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  nd = Object.assign,
  rd = {};
function kr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rd),
    (this.updater = n || td);
}
kr.prototype.isReactComponent = {};
kr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
kr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function id() {}
id.prototype = kr.prototype;
function xu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = rd),
    (this.updater = n || td);
}
var _u = (xu.prototype = new id());
_u.constructor = xu;
nd(_u, kr.prototype);
_u.isPureReactComponent = !0;
var Js = Array.isArray,
  od = Object.prototype.hasOwnProperty,
  Ou = { current: null },
  ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function ad(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      od.call(t, r) && !ld.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: xi,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Ou.current,
  };
}
function Jv(e, t) {
  return {
    $$typeof: xi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Tu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xi;
}
function em(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ec = /\/+/g;
function Ol(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? em("" + e.key)
    : t.toString(36);
}
function ao(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xi:
          case Hv:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Ol(l, 0) : r),
      Js(i)
        ? ((n = ""),
          e != null && (n = e.replace(ec, "$&/") + "/"),
          ao(i, t, n, "", function (s) {
            return s;
          }))
        : i != null &&
          (Tu(i) &&
            (i = Jv(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ec, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Js(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Ol(o, a);
      l += ao(o, t, n, u, i);
    }
  else if (((u = Zv(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Ol(o, a++)), (l += ao(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Di(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ao(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function tm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  uo = { transition: null },
  nm = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: uo,
    ReactCurrentOwner: Ou,
  };
Z.Children = {
  map: Di,
  forEach: function (e, t, n) {
    Di(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Di(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Di(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Tu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Z.Component = kr;
Z.Fragment = Bv;
Z.Profiler = Vv;
Z.PureComponent = xu;
Z.StrictMode = qv;
Z.Suspense = Xv;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nm;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = nd({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Ou.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      od.call(t, u) &&
        !ld.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: xi, type: e.type, key: i, ref: o, props: r, _owner: l };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Qv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Wv, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = ad;
Z.createFactory = function (e) {
  var t = ad.bind(null, e);
  return (t.type = e), t;
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: Kv, render: e };
};
Z.isValidElement = Tu;
Z.lazy = function (e) {
  return { $$typeof: Yv, _payload: { _status: -1, _result: e }, _init: tm };
};
Z.memo = function (e, t) {
  return { $$typeof: Gv, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = uo.transition;
  uo.transition = {};
  try {
    e();
  } finally {
    uo.transition = t;
  }
};
Z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Z.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return Ve.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
Z.useId = function () {
  return Ve.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
  return Ve.current.useRef(e);
};
Z.useState = function (e) {
  return Ve.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
  return Ve.current.useTransition();
};
Z.version = "18.2.0";
(function (e) {
  e.exports = Z;
})(Uv);
const Vt = Mv(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rm = M,
  im = Symbol.for("react.element"),
  om = Symbol.for("react.fragment"),
  lm = Object.prototype.hasOwnProperty,
  am = rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  um = { key: !0, ref: !0, __self: !0, __source: !0 };
function ud(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) lm.call(t, r) && !um.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: im,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: am.current,
  };
}
Zo.Fragment = om;
Zo.jsx = ud;
Zo.jsxs = ud;
(function (e) {
  e.exports = Zo;
})(zv);
const Pu = li.Fragment,
  R = li.jsx,
  Le = li.jsxs;
var fa = {},
  da = {},
  sm = {
    get exports() {
      return da;
    },
    set exports(e) {
      da = e;
    },
  },
  ut = {},
  pa = {},
  cm = {
    get exports() {
      return pa;
    },
    set exports(e) {
      pa = e;
    },
  },
  sd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, A) {
    var L = j.length;
    j.push(A);
    e: for (; 0 < L; ) {
      var H = (L - 1) >>> 1,
        W = j[H];
      if (0 < i(W, A)) (j[H] = A), (j[L] = W), (L = H);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var A = j[0],
      L = j.pop();
    if (L !== A) {
      j[0] = L;
      e: for (var H = 0, W = j.length, Ce = W >>> 1; H < Ce; ) {
        var te = 2 * (H + 1) - 1,
          ve = j[te],
          me = te + 1,
          Pe = j[me];
        if (0 > i(ve, L))
          me < W && 0 > i(Pe, ve)
            ? ((j[H] = Pe), (j[me] = L), (H = me))
            : ((j[H] = ve), (j[te] = L), (H = te));
        else if (me < W && 0 > i(Pe, L)) (j[H] = Pe), (j[me] = L), (H = me);
        else break e;
      }
    }
    return A;
  }
  function i(j, A) {
    var L = j.sortIndex - A.sortIndex;
    return L !== 0 ? L : j.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var u = [],
    s = [],
    d = 1,
    p = null,
    v = 3,
    g = !1,
    C = !1,
    k = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(j) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= j)
        r(s), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(s);
    }
  }
  function h(j) {
    if (((k = !1), f(j), !C))
      if (n(u) !== null) (C = !0), z(w);
      else {
        var A = n(s);
        A !== null && Q(h, A.startTime - j);
      }
  }
  function w(j, A) {
    (C = !1), k && ((k = !1), m(_), (_ = -1)), (g = !0);
    var L = v;
    try {
      for (
        f(A), p = n(u);
        p !== null && (!(p.expirationTime > A) || (j && !E()));

      ) {
        var H = p.callback;
        if (typeof H == "function") {
          (p.callback = null), (v = p.priorityLevel);
          var W = H(p.expirationTime <= A);
          (A = e.unstable_now()),
            typeof W == "function" ? (p.callback = W) : p === n(u) && r(u),
            f(A);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var Ce = !0;
      else {
        var te = n(s);
        te !== null && Q(h, te.startTime - A), (Ce = !1);
      }
      return Ce;
    } finally {
      (p = null), (v = L), (g = !1);
    }
  }
  var y = !1,
    S = null,
    _ = -1,
    O = 5,
    b = -1;
  function E() {
    return !(e.unstable_now() - b < O);
  }
  function x() {
    if (S !== null) {
      var j = e.unstable_now();
      b = j;
      var A = !0;
      try {
        A = S(!0, j);
      } finally {
        A ? I() : ((y = !1), (S = null));
      }
    } else y = !1;
  }
  var I;
  if (typeof c == "function")
    I = function () {
      c(x);
    };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(),
      $ = P.port2;
    (P.port1.onmessage = x),
      (I = function () {
        $.postMessage(null);
      });
  } else
    I = function () {
      T(x, 0);
    };
  function z(j) {
    (S = j), y || ((y = !0), I());
  }
  function Q(j, A) {
    _ = T(function () {
      j(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      C || g || ((C = !0), z(w));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (j) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = v;
      }
      var L = v;
      v = A;
      try {
        return j();
      } finally {
        v = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, A) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var L = v;
      v = j;
      try {
        return A();
      } finally {
        v = L;
      }
    }),
    (e.unstable_scheduleCallback = function (j, A, L) {
      var H = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? H + L : H))
          : (L = H),
        j)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = L + W),
        (j = {
          id: d++,
          callback: A,
          priorityLevel: j,
          startTime: L,
          expirationTime: W,
          sortIndex: -1,
        }),
        L > H
          ? ((j.sortIndex = L),
            t(s, j),
            n(u) === null &&
              j === n(s) &&
              (k ? (m(_), (_ = -1)) : (k = !0), Q(h, L - H)))
          : ((j.sortIndex = W), t(u, j), C || g || ((C = !0), z(w))),
        j
      );
    }),
    (e.unstable_shouldYield = E),
    (e.unstable_wrapCallback = function (j) {
      var A = v;
      return function () {
        var L = v;
        v = A;
        try {
          return j.apply(this, arguments);
        } finally {
          v = L;
        }
      };
    });
})(sd);
(function (e) {
  e.exports = sd;
})(cm);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cd = M,
  at = pa;
function F(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var fd = new Set(),
  ai = {};
function An(e, t) {
  vr(e, t), vr(e + "Capture", t);
}
function vr(e, t) {
  for (ai[e] = t, e = 0; e < t.length; e++) fd.add(t[e]);
}
var Qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ha = Object.prototype.hasOwnProperty,
  fm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  tc = {},
  nc = {};
function dm(e) {
  return ha.call(nc, e)
    ? !0
    : ha.call(tc, e)
    ? !1
    : fm.test(e)
    ? (nc[e] = !0)
    : ((tc[e] = !0), !1);
}
function pm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function hm(e, t, n, r) {
  if (t === null || typeof t > "u" || pm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function We(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var $e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  $e[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  $e[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  $e[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    $e[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  $e[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  $e[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  $e[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  $e[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Iu = /[\-:]([a-z])/g;
function Nu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Iu, Nu);
    $e[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Iu, Nu);
    $e[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Iu, Nu);
  $e[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  $e[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$e.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  $e[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ju(e, t, n, r) {
  var i = $e.hasOwnProperty(t) ? $e[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (hm(t, n, i, r) && (n = null),
    r || i === null
      ? dm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Yt = cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mi = Symbol.for("react.element"),
  Kn = Symbol.for("react.portal"),
  Xn = Symbol.for("react.fragment"),
  $u = Symbol.for("react.strict_mode"),
  va = Symbol.for("react.profiler"),
  dd = Symbol.for("react.provider"),
  pd = Symbol.for("react.context"),
  bu = Symbol.for("react.forward_ref"),
  ma = Symbol.for("react.suspense"),
  ga = Symbol.for("react.suspense_list"),
  Ru = Symbol.for("react.memo"),
  Jt = Symbol.for("react.lazy"),
  hd = Symbol.for("react.offscreen"),
  rc = Symbol.iterator;
function jr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (rc && e[rc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var he = Object.assign,
  Tl;
function Hr(e) {
  if (Tl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Tl = (t && t[1]) || "";
    }
  return (
    `
` +
    Tl +
    e
  );
}
var Pl = !1;
function Il(e, t) {
  if (!e || Pl) return "";
  Pl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          a = o.length - 1;
        1 <= l && 0 <= a && i[l] !== o[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (i[l] !== o[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || i[l] !== o[a])) {
                var u =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Pl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Hr(e) : "";
}
function vm(e) {
  switch (e.tag) {
    case 5:
      return Hr(e.type);
    case 16:
      return Hr("Lazy");
    case 13:
      return Hr("Suspense");
    case 19:
      return Hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Il(e.type, !1)), e;
    case 11:
      return (e = Il(e.type.render, !1)), e;
    case 1:
      return (e = Il(e.type, !0)), e;
    default:
      return "";
  }
}
function ya(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xn:
      return "Fragment";
    case Kn:
      return "Portal";
    case va:
      return "Profiler";
    case $u:
      return "StrictMode";
    case ma:
      return "Suspense";
    case ga:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case pd:
        return (e.displayName || "Context") + ".Consumer";
      case dd:
        return (e._context.displayName || "Context") + ".Provider";
      case bu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ru:
        return (
          (t = e.displayName || null), t !== null ? t : ya(e.type) || "Memo"
        );
      case Jt:
        (t = e._payload), (e = e._init);
        try {
          return ya(e(t));
        } catch {}
    }
  return null;
}
function mm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ya(t);
    case 8:
      return t === $u ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function vd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function gm(e) {
  var t = vd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function zi(e) {
  e._valueTracker || (e._valueTracker = gm(e));
}
function md(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = vd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ko(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wa(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ic(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function gd(e, t) {
  (t = t.checked), t != null && ju(e, "checked", t, !1);
}
function Sa(e, t) {
  gd(e, t);
  var n = vn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ca(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ca(e, t.type, vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function oc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ca(e, t, n) {
  (t !== "number" || ko(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Br = Array.isArray;
function ar(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ka(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function lc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(F(92));
      if (Br(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vn(n) };
}
function yd(e, t) {
  var n = vn(t.value),
    r = vn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ac(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ea(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? wd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ui,
  Sd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ui = Ui || document.createElement("div"),
          Ui.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ui.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ui(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ym = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kr).forEach(function (e) {
  ym.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kr[t] = Kr[e]);
  });
});
function Cd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Kr.hasOwnProperty(e) && Kr[e])
    ? ("" + t).trim()
    : t + "px";
}
function kd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Cd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var wm = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xa(e, t) {
  if (t) {
    if (wm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function _a(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Oa = null;
function Fu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ta = null,
  ur = null,
  sr = null;
function uc(e) {
  if ((e = Ti(e))) {
    if (typeof Ta != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = rl(t)), Ta(e.stateNode, e.type, t));
  }
}
function Ed(e) {
  ur ? (sr ? sr.push(e) : (sr = [e])) : (ur = e);
}
function xd() {
  if (ur) {
    var e = ur,
      t = sr;
    if (((sr = ur = null), uc(e), t)) for (e = 0; e < t.length; e++) uc(t[e]);
  }
}
function _d(e, t) {
  return e(t);
}
function Od() {}
var Nl = !1;
function Td(e, t, n) {
  if (Nl) return e(t, n);
  Nl = !0;
  try {
    return _d(e, t, n);
  } finally {
    (Nl = !1), (ur !== null || sr !== null) && (Od(), xd());
  }
}
function si(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = rl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var Pa = !1;
if (Qt)
  try {
    var $r = {};
    Object.defineProperty($r, "passive", {
      get: function () {
        Pa = !0;
      },
    }),
      window.addEventListener("test", $r, $r),
      window.removeEventListener("test", $r, $r);
  } catch {
    Pa = !1;
  }
function Sm(e, t, n, r, i, o, l, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var Xr = !1,
  Eo = null,
  xo = !1,
  Ia = null,
  Cm = {
    onError: function (e) {
      (Xr = !0), (Eo = e);
    },
  };
function km(e, t, n, r, i, o, l, a, u) {
  (Xr = !1), (Eo = null), Sm.apply(Cm, arguments);
}
function Em(e, t, n, r, i, o, l, a, u) {
  if ((km.apply(this, arguments), Xr)) {
    if (Xr) {
      var s = Eo;
      (Xr = !1), (Eo = null);
    } else throw Error(F(198));
    xo || ((xo = !0), (Ia = s));
  }
}
function Ln(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Pd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function sc(e) {
  if (Ln(e) !== e) throw Error(F(188));
}
function xm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ln(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return sc(i), e;
        if (o === r) return sc(i), t;
        o = o.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, a = i.child; a; ) {
        if (a === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = o.child; a; ) {
          if (a === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function Id(e) {
  return (e = xm(e)), e !== null ? Nd(e) : null;
}
function Nd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Nd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jd = at.unstable_scheduleCallback,
  cc = at.unstable_cancelCallback,
  _m = at.unstable_shouldYield,
  Om = at.unstable_requestPaint,
  ye = at.unstable_now,
  Tm = at.unstable_getCurrentPriorityLevel,
  Au = at.unstable_ImmediatePriority,
  $d = at.unstable_UserBlockingPriority,
  _o = at.unstable_NormalPriority,
  Pm = at.unstable_LowPriority,
  bd = at.unstable_IdlePriority,
  Jo = null,
  $t = null;
function Im(e) {
  if ($t && typeof $t.onCommitFiberRoot == "function")
    try {
      $t.onCommitFiberRoot(Jo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var _t = Math.clz32 ? Math.clz32 : $m,
  Nm = Math.log,
  jm = Math.LN2;
function $m(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Nm(e) / jm) | 0)) | 0;
}
var Hi = 64,
  Bi = 4194304;
function qr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Oo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~i;
    a !== 0 ? (r = qr(a)) : ((o &= l), o !== 0 && (r = qr(o)));
  } else (l = n & ~i), l !== 0 ? (r = qr(l)) : o !== 0 && (r = qr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - _t(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function bm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Rm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - _t(o),
      a = 1 << l,
      u = i[l];
    u === -1
      ? (!(a & n) || a & r) && (i[l] = bm(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Na(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Rd() {
  var e = Hi;
  return (Hi <<= 1), !(Hi & 4194240) && (Hi = 64), e;
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _i(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - _t(t)),
    (e[t] = n);
}
function Fm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - _t(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Lu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - _t(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var re = 0;
function Fd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ad,
  Du,
  Ld,
  Dd,
  Md,
  ja = !1,
  qi = [],
  an = null,
  un = null,
  sn = null,
  ci = new Map(),
  fi = new Map(),
  nn = [],
  Am =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function fc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      an = null;
      break;
    case "dragenter":
    case "dragleave":
      un = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      ci.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fi.delete(t.pointerId);
  }
}
function br(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ti(t)), t !== null && Du(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Lm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (an = br(an, e, t, n, r, i)), !0;
    case "dragenter":
      return (un = br(un, e, t, n, r, i)), !0;
    case "mouseover":
      return (sn = br(sn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ci.set(o, br(ci.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), fi.set(o, br(fi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function zd(e) {
  var t = On(e.target);
  if (t !== null) {
    var n = Ln(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pd(n)), t !== null)) {
          (e.blockedOn = t),
            Md(e.priority, function () {
              Ld(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function so(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $a(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Oa = r), n.target.dispatchEvent(r), (Oa = null);
    } else return (t = Ti(n)), t !== null && Du(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function dc(e, t, n) {
  so(e) && n.delete(t);
}
function Dm() {
  (ja = !1),
    an !== null && so(an) && (an = null),
    un !== null && so(un) && (un = null),
    sn !== null && so(sn) && (sn = null),
    ci.forEach(dc),
    fi.forEach(dc);
}
function Rr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ja ||
      ((ja = !0),
      at.unstable_scheduleCallback(at.unstable_NormalPriority, Dm)));
}
function di(e) {
  function t(i) {
    return Rr(i, e);
  }
  if (0 < qi.length) {
    Rr(qi[0], e);
    for (var n = 1; n < qi.length; n++) {
      var r = qi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    an !== null && Rr(an, e),
      un !== null && Rr(un, e),
      sn !== null && Rr(sn, e),
      ci.forEach(t),
      fi.forEach(t),
      n = 0;
    n < nn.length;
    n++
  )
    (r = nn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nn.length && ((n = nn[0]), n.blockedOn === null); )
    zd(n), n.blockedOn === null && nn.shift();
}
var cr = Yt.ReactCurrentBatchConfig,
  To = !0;
function Mm(e, t, n, r) {
  var i = re,
    o = cr.transition;
  cr.transition = null;
  try {
    (re = 1), Mu(e, t, n, r);
  } finally {
    (re = i), (cr.transition = o);
  }
}
function zm(e, t, n, r) {
  var i = re,
    o = cr.transition;
  cr.transition = null;
  try {
    (re = 4), Mu(e, t, n, r);
  } finally {
    (re = i), (cr.transition = o);
  }
}
function Mu(e, t, n, r) {
  if (To) {
    var i = $a(e, t, n, r);
    if (i === null) Ul(e, t, r, Po, n), fc(e, r);
    else if (Lm(i, e, t, n, r)) r.stopPropagation();
    else if ((fc(e, r), t & 4 && -1 < Am.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ti(i);
        if (
          (o !== null && Ad(o),
          (o = $a(e, t, n, r)),
          o === null && Ul(e, t, r, Po, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var Po = null;
function $a(e, t, n, r) {
  if (((Po = null), (e = Fu(r)), (e = On(e)), e !== null))
    if (((t = Ln(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Po = e), null;
}
function Ud(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Tm()) {
        case Au:
          return 1;
        case $d:
          return 4;
        case _o:
        case Pm:
          return 16;
        case bd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var on = null,
  zu = null,
  co = null;
function Hd() {
  if (co) return co;
  var e,
    t = zu,
    n = t.length,
    r,
    i = "value" in on ? on.value : on.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (co = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Vi() {
  return !0;
}
function pc() {
  return !1;
}
function st(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Vi
        : pc),
      (this.isPropagationStopped = pc),
      this
    );
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Vi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Vi));
      },
      persist: function () {},
      isPersistent: Vi,
    }),
    t
  );
}
var Er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Uu = st(Er),
  Oi = he({}, Er, { view: 0, detail: 0 }),
  Um = st(Oi),
  $l,
  bl,
  Fr,
  el = he({}, Oi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Hu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Fr &&
            (Fr && e.type === "mousemove"
              ? (($l = e.screenX - Fr.screenX), (bl = e.screenY - Fr.screenY))
              : (bl = $l = 0),
            (Fr = e)),
          $l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bl;
    },
  }),
  hc = st(el),
  Hm = he({}, el, { dataTransfer: 0 }),
  Bm = st(Hm),
  qm = he({}, Oi, { relatedTarget: 0 }),
  Rl = st(qm),
  Vm = he({}, Er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wm = st(Vm),
  Qm = he({}, Er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Km = st(Qm),
  Xm = he({}, Er, { data: 0 }),
  vc = st(Xm),
  Gm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ym = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Zm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zm[e]) ? !!t[e] : !1;
}
function Hu() {
  return Jm;
}
var eg = he({}, Oi, {
    key: function (e) {
      if (e.key) {
        var t = Gm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ym[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Hu,
    charCode: function (e) {
      return e.type === "keypress" ? fo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  tg = st(eg),
  ng = he({}, el, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  mc = st(ng),
  rg = he({}, Oi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hu,
  }),
  ig = st(rg),
  og = he({}, Er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lg = st(og),
  ag = he({}, el, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ug = st(ag),
  sg = [9, 13, 27, 32],
  Bu = Qt && "CompositionEvent" in window,
  Gr = null;
Qt && "documentMode" in document && (Gr = document.documentMode);
var cg = Qt && "TextEvent" in window && !Gr,
  Bd = Qt && (!Bu || (Gr && 8 < Gr && 11 >= Gr)),
  gc = String.fromCharCode(32),
  yc = !1;
function qd(e, t) {
  switch (e) {
    case "keyup":
      return sg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function fg(e, t) {
  switch (e) {
    case "compositionend":
      return Vd(t);
    case "keypress":
      return t.which !== 32 ? null : ((yc = !0), gc);
    case "textInput":
      return (e = t.data), e === gc && yc ? null : e;
    default:
      return null;
  }
}
function dg(e, t) {
  if (Gn)
    return e === "compositionend" || (!Bu && qd(e, t))
      ? ((e = Hd()), (co = zu = on = null), (Gn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Bd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var pg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function wc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!pg[e.type] : t === "textarea";
}
function Wd(e, t, n, r) {
  Ed(r),
    (t = Io(t, "onChange")),
    0 < t.length &&
      ((n = new Uu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Yr = null,
  pi = null;
function hg(e) {
  rp(e, 0);
}
function tl(e) {
  var t = Jn(e);
  if (md(t)) return e;
}
function vg(e, t) {
  if (e === "change") return t;
}
var Qd = !1;
if (Qt) {
  var Fl;
  if (Qt) {
    var Al = "oninput" in document;
    if (!Al) {
      var Sc = document.createElement("div");
      Sc.setAttribute("oninput", "return;"),
        (Al = typeof Sc.oninput == "function");
    }
    Fl = Al;
  } else Fl = !1;
  Qd = Fl && (!document.documentMode || 9 < document.documentMode);
}
function Cc() {
  Yr && (Yr.detachEvent("onpropertychange", Kd), (pi = Yr = null));
}
function Kd(e) {
  if (e.propertyName === "value" && tl(pi)) {
    var t = [];
    Wd(t, pi, e, Fu(e)), Td(hg, t);
  }
}
function mg(e, t, n) {
  e === "focusin"
    ? (Cc(), (Yr = t), (pi = n), Yr.attachEvent("onpropertychange", Kd))
    : e === "focusout" && Cc();
}
function gg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return tl(pi);
}
function yg(e, t) {
  if (e === "click") return tl(t);
}
function wg(e, t) {
  if (e === "input" || e === "change") return tl(t);
}
function Sg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Tt = typeof Object.is == "function" ? Object.is : Sg;
function hi(e, t) {
  if (Tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ha.call(t, i) || !Tt(e[i], t[i])) return !1;
  }
  return !0;
}
function kc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ec(e, t) {
  var n = kc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = kc(n);
  }
}
function Xd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gd() {
  for (var e = window, t = ko(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ko(e.document);
  }
  return t;
}
function qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Cg(e) {
  var t = Gd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && qu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ec(n, o));
        var l = Ec(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var kg = Qt && "documentMode" in document && 11 >= document.documentMode,
  Yn = null,
  ba = null,
  Zr = null,
  Ra = !1;
function xc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ra ||
    Yn == null ||
    Yn !== ko(r) ||
    ((r = Yn),
    "selectionStart" in r && qu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zr && hi(Zr, r)) ||
      ((Zr = r),
      (r = Io(ba, "onSelect")),
      0 < r.length &&
        ((t = new Uu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yn))));
}
function Wi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zn = {
    animationend: Wi("Animation", "AnimationEnd"),
    animationiteration: Wi("Animation", "AnimationIteration"),
    animationstart: Wi("Animation", "AnimationStart"),
    transitionend: Wi("Transition", "TransitionEnd"),
  },
  Ll = {},
  Yd = {};
Qt &&
  ((Yd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zn.animationend.animation,
    delete Zn.animationiteration.animation,
    delete Zn.animationstart.animation),
  "TransitionEvent" in window || delete Zn.transitionend.transition);
function nl(e) {
  if (Ll[e]) return Ll[e];
  if (!Zn[e]) return e;
  var t = Zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yd) return (Ll[e] = t[n]);
  return e;
}
var Zd = nl("animationend"),
  Jd = nl("animationiteration"),
  ep = nl("animationstart"),
  tp = nl("transitionend"),
  np = new Map(),
  _c =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gn(e, t) {
  np.set(e, t), An(t, [e]);
}
for (var Dl = 0; Dl < _c.length; Dl++) {
  var Ml = _c[Dl],
    Eg = Ml.toLowerCase(),
    xg = Ml[0].toUpperCase() + Ml.slice(1);
  gn(Eg, "on" + xg);
}
gn(Zd, "onAnimationEnd");
gn(Jd, "onAnimationIteration");
gn(ep, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(tp, "onTransitionEnd");
vr("onMouseEnter", ["mouseout", "mouseover"]);
vr("onMouseLeave", ["mouseout", "mouseover"]);
vr("onPointerEnter", ["pointerout", "pointerover"]);
vr("onPointerLeave", ["pointerout", "pointerover"]);
An(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
An(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
An("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
An(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
An(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
An(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  _g = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
function Oc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Em(r, t, void 0, e), (e.currentTarget = null);
}
function rp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && i.isPropagationStopped())) break e;
          Oc(i, a, s), (o = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          Oc(i, a, s), (o = u);
        }
    }
  }
  if (xo) throw ((e = Ia), (xo = !1), (Ia = null), e);
}
function ae(e, t) {
  var n = t[Ma];
  n === void 0 && (n = t[Ma] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ip(t, e, 2, !1), n.add(r));
}
function zl(e, t, n) {
  var r = 0;
  t && (r |= 4), ip(n, e, r, t);
}
var Qi = "_reactListening" + Math.random().toString(36).slice(2);
function vi(e) {
  if (!e[Qi]) {
    (e[Qi] = !0),
      fd.forEach(function (n) {
        n !== "selectionchange" && (_g.has(n) || zl(n, !1, e), zl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qi] || ((t[Qi] = !0), zl("selectionchange", !1, t));
  }
}
function ip(e, t, n, r) {
  switch (Ud(t)) {
    case 1:
      var i = Mm;
      break;
    case 4:
      i = zm;
      break;
    default:
      i = Mu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Pa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ul(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = On(a)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = o = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Td(function () {
    var s = o,
      d = Fu(n),
      p = [];
    e: {
      var v = np.get(e);
      if (v !== void 0) {
        var g = Uu,
          C = e;
        switch (e) {
          case "keypress":
            if (fo(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = tg;
            break;
          case "focusin":
            (C = "focus"), (g = Rl);
            break;
          case "focusout":
            (C = "blur"), (g = Rl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Rl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = hc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Bm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = ig;
            break;
          case Zd:
          case Jd:
          case ep:
            g = Wm;
            break;
          case tp:
            g = lg;
            break;
          case "scroll":
            g = Um;
            break;
          case "wheel":
            g = ug;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Km;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = mc;
        }
        var k = (t & 4) !== 0,
          T = !k && e === "scroll",
          m = k ? (v !== null ? v + "Capture" : null) : v;
        k = [];
        for (var c = s, f; c !== null; ) {
          f = c;
          var h = f.stateNode;
          if (
            (f.tag === 5 &&
              h !== null &&
              ((f = h),
              m !== null && ((h = si(c, m)), h != null && k.push(mi(c, h, f)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((v = new g(v, C, null, n, d)), p.push({ event: v, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Oa &&
            (C = n.relatedTarget || n.fromElement) &&
            (On(C) || C[Kt]))
        )
          break e;
        if (
          (g || v) &&
          ((v =
            d.window === d
              ? d
              : (v = d.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          g
            ? ((C = n.relatedTarget || n.toElement),
              (g = s),
              (C = C ? On(C) : null),
              C !== null &&
                ((T = Ln(C)), C !== T || (C.tag !== 5 && C.tag !== 6)) &&
                (C = null))
            : ((g = null), (C = s)),
          g !== C)
        ) {
          if (
            ((k = hc),
            (h = "onMouseLeave"),
            (m = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = mc),
              (h = "onPointerLeave"),
              (m = "onPointerEnter"),
              (c = "pointer")),
            (T = g == null ? v : Jn(g)),
            (f = C == null ? v : Jn(C)),
            (v = new k(h, c + "leave", g, n, d)),
            (v.target = T),
            (v.relatedTarget = f),
            (h = null),
            On(d) === s &&
              ((k = new k(m, c + "enter", C, n, d)),
              (k.target = f),
              (k.relatedTarget = T),
              (h = k)),
            (T = h),
            g && C)
          )
            t: {
              for (k = g, m = C, c = 0, f = k; f; f = Un(f)) c++;
              for (f = 0, h = m; h; h = Un(h)) f++;
              for (; 0 < c - f; ) (k = Un(k)), c--;
              for (; 0 < f - c; ) (m = Un(m)), f--;
              for (; c--; ) {
                if (k === m || (m !== null && k === m.alternate)) break t;
                (k = Un(k)), (m = Un(m));
              }
              k = null;
            }
          else k = null;
          g !== null && Tc(p, v, g, k, !1),
            C !== null && T !== null && Tc(p, T, C, k, !0);
        }
      }
      e: {
        if (
          ((v = s ? Jn(s) : window),
          (g = v.nodeName && v.nodeName.toLowerCase()),
          g === "select" || (g === "input" && v.type === "file"))
        )
          var w = vg;
        else if (wc(v))
          if (Qd) w = wg;
          else {
            w = gg;
            var y = mg;
          }
        else
          (g = v.nodeName) &&
            g.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (w = yg);
        if (w && (w = w(e, s))) {
          Wd(p, w, n, d);
          break e;
        }
        y && y(e, v, s),
          e === "focusout" &&
            (y = v._wrapperState) &&
            y.controlled &&
            v.type === "number" &&
            Ca(v, "number", v.value);
      }
      switch (((y = s ? Jn(s) : window), e)) {
        case "focusin":
          (wc(y) || y.contentEditable === "true") &&
            ((Yn = y), (ba = s), (Zr = null));
          break;
        case "focusout":
          Zr = ba = Yn = null;
          break;
        case "mousedown":
          Ra = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ra = !1), xc(p, n, d);
          break;
        case "selectionchange":
          if (kg) break;
        case "keydown":
        case "keyup":
          xc(p, n, d);
      }
      var S;
      if (Bu)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Gn
          ? qd(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Bd &&
          n.locale !== "ko" &&
          (Gn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Gn && (S = Hd())
            : ((on = d),
              (zu = "value" in on ? on.value : on.textContent),
              (Gn = !0))),
        (y = Io(s, _)),
        0 < y.length &&
          ((_ = new vc(_, e, null, n, d)),
          p.push({ event: _, listeners: y }),
          S ? (_.data = S) : ((S = Vd(n)), S !== null && (_.data = S)))),
        (S = cg ? fg(e, n) : dg(e, n)) &&
          ((s = Io(s, "onBeforeInput")),
          0 < s.length &&
            ((d = new vc("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: s }),
            (d.data = S)));
    }
    rp(p, t);
  });
}
function mi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Io(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = si(e, n)),
      o != null && r.unshift(mi(e, o, i)),
      (o = si(e, t)),
      o != null && r.push(mi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Un(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tc(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      i
        ? ((u = si(n, o)), u != null && l.unshift(mi(n, u, a)))
        : i || ((u = si(n, o)), u != null && l.push(mi(n, u, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Og = /\r\n?/g,
  Tg = /\u0000|\uFFFD/g;
function Pc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Og,
      `
`
    )
    .replace(Tg, "");
}
function Ki(e, t, n) {
  if (((t = Pc(t)), Pc(e) !== t && n)) throw Error(F(425));
}
function No() {}
var Fa = null,
  Aa = null;
function La(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Da = typeof setTimeout == "function" ? setTimeout : void 0,
  Pg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ic = typeof Promise == "function" ? Promise : void 0,
  Ig =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ic < "u"
      ? function (e) {
          return Ic.resolve(null).then(e).catch(Ng);
        }
      : Da;
function Ng(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), di(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  di(t);
}
function cn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Nc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xr = Math.random().toString(36).slice(2),
  jt = "__reactFiber$" + xr,
  gi = "__reactProps$" + xr,
  Kt = "__reactContainer$" + xr,
  Ma = "__reactEvents$" + xr,
  jg = "__reactListeners$" + xr,
  $g = "__reactHandles$" + xr;
function On(e) {
  var t = e[jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Kt] || n[jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Nc(e); e !== null; ) {
          if ((n = e[jt])) return n;
          e = Nc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ti(e) {
  return (
    (e = e[jt] || e[Kt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function rl(e) {
  return e[gi] || null;
}
var za = [],
  er = -1;
function yn(e) {
  return { current: e };
}
function ue(e) {
  0 > er || ((e.current = za[er]), (za[er] = null), er--);
}
function oe(e, t) {
  er++, (za[er] = e.current), (e.current = t);
}
var mn = {},
  De = yn(mn),
  Ge = yn(!1),
  jn = mn;
function mr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ye(e) {
  return (e = e.childContextTypes), e != null;
}
function jo() {
  ue(Ge), ue(De);
}
function jc(e, t, n) {
  if (De.current !== mn) throw Error(F(168));
  oe(De, t), oe(Ge, n);
}
function op(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(F(108, mm(e) || "Unknown", i));
  return he({}, n, r);
}
function $o(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (jn = De.current),
    oe(De, e),
    oe(Ge, Ge.current),
    !0
  );
}
function $c(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n
    ? ((e = op(e, t, jn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(Ge),
      ue(De),
      oe(De, e))
    : ue(Ge),
    oe(Ge, n);
}
var Ht = null,
  il = !1,
  Bl = !1;
function lp(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function bg(e) {
  (il = !0), lp(e);
}
function wn() {
  if (!Bl && Ht !== null) {
    Bl = !0;
    var e = 0,
      t = re;
    try {
      var n = Ht;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ht = null), (il = !1);
    } catch (i) {
      throw (Ht !== null && (Ht = Ht.slice(e + 1)), jd(Au, wn), i);
    } finally {
      (re = t), (Bl = !1);
    }
  }
  return null;
}
var tr = [],
  nr = 0,
  bo = null,
  Ro = 0,
  dt = [],
  pt = 0,
  $n = null,
  Bt = 1,
  qt = "";
function En(e, t) {
  (tr[nr++] = Ro), (tr[nr++] = bo), (bo = e), (Ro = t);
}
function ap(e, t, n) {
  (dt[pt++] = Bt), (dt[pt++] = qt), (dt[pt++] = $n), ($n = e);
  var r = Bt;
  e = qt;
  var i = 32 - _t(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - _t(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (Bt = (1 << (32 - _t(t) + i)) | (n << i) | r),
      (qt = o + e);
  } else (Bt = (1 << o) | (n << i) | r), (qt = e);
}
function Vu(e) {
  e.return !== null && (En(e, 1), ap(e, 1, 0));
}
function Wu(e) {
  for (; e === bo; )
    (bo = tr[--nr]), (tr[nr] = null), (Ro = tr[--nr]), (tr[nr] = null);
  for (; e === $n; )
    ($n = dt[--pt]),
      (dt[pt] = null),
      (qt = dt[--pt]),
      (dt[pt] = null),
      (Bt = dt[--pt]),
      (dt[pt] = null);
}
var ot = null,
  it = null,
  se = !1,
  xt = null;
function up(e, t) {
  var n = ht(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function bc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ot = e), (it = cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ot = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = $n !== null ? { id: Bt, overflow: qt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ht(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ot = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ua(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ha(e) {
  if (se) {
    var t = it;
    if (t) {
      var n = t;
      if (!bc(e, t)) {
        if (Ua(e)) throw Error(F(418));
        t = cn(n.nextSibling);
        var r = ot;
        t && bc(e, t)
          ? up(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (ot = e));
      }
    } else {
      if (Ua(e)) throw Error(F(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (ot = e);
    }
  }
}
function Rc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ot = e;
}
function Xi(e) {
  if (e !== ot) return !1;
  if (!se) return Rc(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !La(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (Ua(e)) throw (sp(), Error(F(418)));
    for (; t; ) up(e, t), (t = cn(t.nextSibling));
  }
  if ((Rc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = ot ? cn(e.stateNode.nextSibling) : null;
  return !0;
}
function sp() {
  for (var e = it; e; ) e = cn(e.nextSibling);
}
function gr() {
  (it = ot = null), (se = !1);
}
function Qu(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
var Rg = Yt.ReactCurrentBatchConfig;
function kt(e, t) {
  if (e && e.defaultProps) {
    (t = he({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Fo = yn(null),
  Ao = null,
  rr = null,
  Ku = null;
function Xu() {
  Ku = rr = Ao = null;
}
function Gu(e) {
  var t = Fo.current;
  ue(Fo), (e._currentValue = t);
}
function Ba(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function fr(e, t) {
  (Ao = e),
    (Ku = rr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function mt(e) {
  var t = e._currentValue;
  if (Ku !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rr === null)) {
      if (Ao === null) throw Error(F(308));
      (rr = e), (Ao.dependencies = { lanes: 0, firstContext: e });
    } else rr = rr.next = e;
  return t;
}
var Tn = null;
function Yu(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
function cp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Yu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Xt(e, r)
  );
}
function Xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var en = !1;
function Zu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function fn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Xt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Yu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Xt(e, n)
  );
}
function po(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lu(e, n);
  }
}
function Fc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Lo(e, t, n, r) {
  var i = e.updateQueue;
  en = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), l === null ? (o = s) : (l.next = s), (l = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== l &&
        (a === null ? (d.firstBaseUpdate = s) : (a.next = s),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var p = i.baseState;
    (l = 0), (d = s = u = null), (a = o);
    do {
      var v = a.lane,
        g = a.eventTime;
      if ((r & v) === v) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var C = e,
            k = a;
          switch (((v = t), (g = n), k.tag)) {
            case 1:
              if (((C = k.payload), typeof C == "function")) {
                p = C.call(g, p, v);
                break e;
              }
              p = C;
              break e;
            case 3:
              C.flags = (C.flags & -65537) | 128;
            case 0:
              if (
                ((C = k.payload),
                (v = typeof C == "function" ? C.call(g, p, v) : C),
                v == null)
              )
                break e;
              p = he({}, p, v);
              break e;
            case 2:
              en = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (v = i.effects),
          v === null ? (i.effects = [a]) : v.push(a));
      } else
        (g = {
          eventTime: g,
          lane: v,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((s = d = g), (u = p)) : (d = d.next = g),
          (l |= v);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (v = a),
          (a = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = p),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Rn |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function Ac(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(F(191, i));
        i.call(r);
      }
    }
}
var dp = new cd.Component().refs;
function qa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ol = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      i = pn(e),
      o = Wt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = fn(e, o, i)),
      t !== null && (Ot(t, e, i, r), po(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = qe(),
      i = pn(e),
      o = Wt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = fn(e, o, i)),
      t !== null && (Ot(t, e, i, r), po(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = qe(),
      r = pn(e),
      i = Wt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = fn(e, i, r)),
      t !== null && (Ot(t, e, r, n), po(t, e, r));
  },
};
function Lc(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !hi(n, r) || !hi(i, o)
      : !0
  );
}
function pp(e, t, n) {
  var r = !1,
    i = mn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = mt(o))
      : ((i = Ye(t) ? jn : De.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? mr(e, i) : mn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ol),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Dc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ol.enqueueReplaceState(t, t.state, null);
}
function Va(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = dp), Zu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = mt(o))
    : ((o = Ye(t) ? jn : De.current), (i.context = mr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (qa(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ol.enqueueReplaceState(i, i.state, null),
      Lo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var a = i.refs;
            a === dp && (a = i.refs = {}),
              l === null ? delete a[o] : (a[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function Gi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      F(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Mc(e) {
  var t = e._init;
  return t(e._payload);
}
function hp(e) {
  function t(m, c) {
    if (e) {
      var f = m.deletions;
      f === null ? ((m.deletions = [c]), (m.flags |= 16)) : f.push(c);
    }
  }
  function n(m, c) {
    if (!e) return null;
    for (; c !== null; ) t(m, c), (c = c.sibling);
    return null;
  }
  function r(m, c) {
    for (m = new Map(); c !== null; )
      c.key !== null ? m.set(c.key, c) : m.set(c.index, c), (c = c.sibling);
    return m;
  }
  function i(m, c) {
    return (m = hn(m, c)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, c, f) {
    return (
      (m.index = f),
      e
        ? ((f = m.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((m.flags |= 2), c) : f)
            : ((m.flags |= 2), c))
        : ((m.flags |= 1048576), c)
    );
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, c, f, h) {
    return c === null || c.tag !== 6
      ? ((c = Gl(f, m.mode, h)), (c.return = m), c)
      : ((c = i(c, f)), (c.return = m), c);
  }
  function u(m, c, f, h) {
    var w = f.type;
    return w === Xn
      ? d(m, c, f.props.children, h, f.key)
      : c !== null &&
        (c.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Jt &&
            Mc(w) === c.type))
      ? ((h = i(c, f.props)), (h.ref = Ar(m, c, f)), (h.return = m), h)
      : ((h = wo(f.type, f.key, f.props, null, m.mode, h)),
        (h.ref = Ar(m, c, f)),
        (h.return = m),
        h);
  }
  function s(m, c, f, h) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = Yl(f, m.mode, h)), (c.return = m), c)
      : ((c = i(c, f.children || [])), (c.return = m), c);
  }
  function d(m, c, f, h, w) {
    return c === null || c.tag !== 7
      ? ((c = Nn(f, m.mode, h, w)), (c.return = m), c)
      : ((c = i(c, f)), (c.return = m), c);
  }
  function p(m, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Gl("" + c, m.mode, f)), (c.return = m), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Mi:
          return (
            (f = wo(c.type, c.key, c.props, null, m.mode, f)),
            (f.ref = Ar(m, null, c)),
            (f.return = m),
            f
          );
        case Kn:
          return (c = Yl(c, m.mode, f)), (c.return = m), c;
        case Jt:
          var h = c._init;
          return p(m, h(c._payload), f);
      }
      if (Br(c) || jr(c))
        return (c = Nn(c, m.mode, f, null)), (c.return = m), c;
      Gi(m, c);
    }
    return null;
  }
  function v(m, c, f, h) {
    var w = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return w !== null ? null : a(m, c, "" + f, h);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Mi:
          return f.key === w ? u(m, c, f, h) : null;
        case Kn:
          return f.key === w ? s(m, c, f, h) : null;
        case Jt:
          return (w = f._init), v(m, c, w(f._payload), h);
      }
      if (Br(f) || jr(f)) return w !== null ? null : d(m, c, f, h, null);
      Gi(m, f);
    }
    return null;
  }
  function g(m, c, f, h, w) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (m = m.get(f) || null), a(c, m, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Mi:
          return (m = m.get(h.key === null ? f : h.key) || null), u(c, m, h, w);
        case Kn:
          return (m = m.get(h.key === null ? f : h.key) || null), s(c, m, h, w);
        case Jt:
          var y = h._init;
          return g(m, c, f, y(h._payload), w);
      }
      if (Br(h) || jr(h)) return (m = m.get(f) || null), d(c, m, h, w, null);
      Gi(c, h);
    }
    return null;
  }
  function C(m, c, f, h) {
    for (
      var w = null, y = null, S = c, _ = (c = 0), O = null;
      S !== null && _ < f.length;
      _++
    ) {
      S.index > _ ? ((O = S), (S = null)) : (O = S.sibling);
      var b = v(m, S, f[_], h);
      if (b === null) {
        S === null && (S = O);
        break;
      }
      e && S && b.alternate === null && t(m, S),
        (c = o(b, c, _)),
        y === null ? (w = b) : (y.sibling = b),
        (y = b),
        (S = O);
    }
    if (_ === f.length) return n(m, S), se && En(m, _), w;
    if (S === null) {
      for (; _ < f.length; _++)
        (S = p(m, f[_], h)),
          S !== null &&
            ((c = o(S, c, _)), y === null ? (w = S) : (y.sibling = S), (y = S));
      return se && En(m, _), w;
    }
    for (S = r(m, S); _ < f.length; _++)
      (O = g(S, m, _, f[_], h)),
        O !== null &&
          (e && O.alternate !== null && S.delete(O.key === null ? _ : O.key),
          (c = o(O, c, _)),
          y === null ? (w = O) : (y.sibling = O),
          (y = O));
    return (
      e &&
        S.forEach(function (E) {
          return t(m, E);
        }),
      se && En(m, _),
      w
    );
  }
  function k(m, c, f, h) {
    var w = jr(f);
    if (typeof w != "function") throw Error(F(150));
    if (((f = w.call(f)), f == null)) throw Error(F(151));
    for (
      var y = (w = null), S = c, _ = (c = 0), O = null, b = f.next();
      S !== null && !b.done;
      _++, b = f.next()
    ) {
      S.index > _ ? ((O = S), (S = null)) : (O = S.sibling);
      var E = v(m, S, b.value, h);
      if (E === null) {
        S === null && (S = O);
        break;
      }
      e && S && E.alternate === null && t(m, S),
        (c = o(E, c, _)),
        y === null ? (w = E) : (y.sibling = E),
        (y = E),
        (S = O);
    }
    if (b.done) return n(m, S), se && En(m, _), w;
    if (S === null) {
      for (; !b.done; _++, b = f.next())
        (b = p(m, b.value, h)),
          b !== null &&
            ((c = o(b, c, _)), y === null ? (w = b) : (y.sibling = b), (y = b));
      return se && En(m, _), w;
    }
    for (S = r(m, S); !b.done; _++, b = f.next())
      (b = g(S, m, _, b.value, h)),
        b !== null &&
          (e && b.alternate !== null && S.delete(b.key === null ? _ : b.key),
          (c = o(b, c, _)),
          y === null ? (w = b) : (y.sibling = b),
          (y = b));
    return (
      e &&
        S.forEach(function (x) {
          return t(m, x);
        }),
      se && En(m, _),
      w
    );
  }
  function T(m, c, f, h) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Xn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Mi:
          e: {
            for (var w = f.key, y = c; y !== null; ) {
              if (y.key === w) {
                if (((w = f.type), w === Xn)) {
                  if (y.tag === 7) {
                    n(m, y.sibling),
                      (c = i(y, f.props.children)),
                      (c.return = m),
                      (m = c);
                    break e;
                  }
                } else if (
                  y.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Jt &&
                    Mc(w) === y.type)
                ) {
                  n(m, y.sibling),
                    (c = i(y, f.props)),
                    (c.ref = Ar(m, y, f)),
                    (c.return = m),
                    (m = c);
                  break e;
                }
                n(m, y);
                break;
              } else t(m, y);
              y = y.sibling;
            }
            f.type === Xn
              ? ((c = Nn(f.props.children, m.mode, h, f.key)),
                (c.return = m),
                (m = c))
              : ((h = wo(f.type, f.key, f.props, null, m.mode, h)),
                (h.ref = Ar(m, c, f)),
                (h.return = m),
                (m = h));
          }
          return l(m);
        case Kn:
          e: {
            for (y = f.key; c !== null; ) {
              if (c.key === y)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(m, c.sibling),
                    (c = i(c, f.children || [])),
                    (c.return = m),
                    (m = c);
                  break e;
                } else {
                  n(m, c);
                  break;
                }
              else t(m, c);
              c = c.sibling;
            }
            (c = Yl(f, m.mode, h)), (c.return = m), (m = c);
          }
          return l(m);
        case Jt:
          return (y = f._init), T(m, c, y(f._payload), h);
      }
      if (Br(f)) return C(m, c, f, h);
      if (jr(f)) return k(m, c, f, h);
      Gi(m, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(m, c.sibling), (c = i(c, f)), (c.return = m), (m = c))
          : (n(m, c), (c = Gl(f, m.mode, h)), (c.return = m), (m = c)),
        l(m))
      : n(m, c);
  }
  return T;
}
var yr = hp(!0),
  vp = hp(!1),
  Pi = {},
  bt = yn(Pi),
  yi = yn(Pi),
  wi = yn(Pi);
function Pn(e) {
  if (e === Pi) throw Error(F(174));
  return e;
}
function Ju(e, t) {
  switch ((oe(wi, t), oe(yi, e), oe(bt, Pi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ea(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ea(t, e));
  }
  ue(bt), oe(bt, t);
}
function wr() {
  ue(bt), ue(yi), ue(wi);
}
function mp(e) {
  Pn(wi.current);
  var t = Pn(bt.current),
    n = Ea(t, e.type);
  t !== n && (oe(yi, e), oe(bt, n));
}
function es(e) {
  yi.current === e && (ue(bt), ue(yi));
}
var de = yn(0);
function Do(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ql = [];
function ts() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var ho = Yt.ReactCurrentDispatcher,
  Vl = Yt.ReactCurrentBatchConfig,
  bn = 0,
  pe = null,
  Ee = null,
  Oe = null,
  Mo = !1,
  Jr = !1,
  Si = 0,
  Fg = 0;
function Re() {
  throw Error(F(321));
}
function ns(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Tt(e[n], t[n])) return !1;
  return !0;
}
function rs(e, t, n, r, i, o) {
  if (
    ((bn = o),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ho.current = e === null || e.memoizedState === null ? Mg : zg),
    (e = n(r, i)),
    Jr)
  ) {
    o = 0;
    do {
      if (((Jr = !1), (Si = 0), 25 <= o)) throw Error(F(301));
      (o += 1),
        (Oe = Ee = null),
        (t.updateQueue = null),
        (ho.current = Ug),
        (e = n(r, i));
    } while (Jr);
  }
  if (
    ((ho.current = zo),
    (t = Ee !== null && Ee.next !== null),
    (bn = 0),
    (Oe = Ee = pe = null),
    (Mo = !1),
    t)
  )
    throw Error(F(300));
  return e;
}
function is() {
  var e = Si !== 0;
  return (Si = 0), e;
}
function Nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Oe === null ? (pe.memoizedState = Oe = e) : (Oe = Oe.next = e), Oe;
}
function gt() {
  if (Ee === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Oe === null ? pe.memoizedState : Oe.next;
  if (t !== null) (Oe = t), (Ee = e);
  else {
    if (e === null) throw Error(F(310));
    (Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Oe === null ? (pe.memoizedState = Oe = e) : (Oe = Oe.next = e);
  }
  return Oe;
}
function Ci(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wl(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (l = null),
      u = null,
      s = o;
    do {
      var d = s.lane;
      if ((bn & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = p), (l = r)) : (u = u.next = p),
          (pe.lanes |= d),
          (Rn |= d);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (l = r) : (u.next = a),
      Tt(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (pe.lanes |= o), (Rn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ql(e) {
  var t = gt(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    Tt(o, t.memoizedState) || (Xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function gp() {}
function yp(e, t) {
  var n = pe,
    r = gt(),
    i = t(),
    o = !Tt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Xe = !0)),
    (r = r.queue),
    os(Cp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Oe !== null && Oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ki(9, Sp.bind(null, n, r, i, t), void 0, null),
      Te === null)
    )
      throw Error(F(349));
    bn & 30 || wp(n, t, i);
  }
  return i;
}
function wp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Sp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), kp(t) && Ep(e);
}
function Cp(e, t, n) {
  return n(function () {
    kp(t) && Ep(e);
  });
}
function kp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Tt(e, n);
  } catch {
    return !0;
  }
}
function Ep(e) {
  var t = Xt(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function zc(e) {
  var t = Nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ci,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Dg.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function ki(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xp() {
  return gt().memoizedState;
}
function vo(e, t, n, r) {
  var i = Nt();
  (pe.flags |= e),
    (i.memoizedState = ki(1 | t, n, void 0, r === void 0 ? null : r));
}
function ll(e, t, n, r) {
  var i = gt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ee !== null) {
    var l = Ee.memoizedState;
    if (((o = l.destroy), r !== null && ns(r, l.deps))) {
      i.memoizedState = ki(t, n, o, r);
      return;
    }
  }
  (pe.flags |= e), (i.memoizedState = ki(1 | t, n, o, r));
}
function Uc(e, t) {
  return vo(8390656, 8, e, t);
}
function os(e, t) {
  return ll(2048, 8, e, t);
}
function _p(e, t) {
  return ll(4, 2, e, t);
}
function Op(e, t) {
  return ll(4, 4, e, t);
}
function Tp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ll(4, 4, Tp.bind(null, t, e), n)
  );
}
function ls() {}
function Ip(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ns(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Np(e, t) {
  var n = gt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ns(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function jp(e, t, n) {
  return bn & 21
    ? (Tt(n, t) || ((n = Rd()), (pe.lanes |= n), (Rn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function Ag(e, t) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (re = n), (Vl.transition = r);
  }
}
function $p() {
  return gt().memoizedState;
}
function Lg(e, t, n) {
  var r = pn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    bp(e))
  )
    Rp(t, n);
  else if (((n = cp(e, t, n, r)), n !== null)) {
    var i = qe();
    Ot(n, e, r, i), Fp(n, t, r);
  }
}
function Dg(e, t, n) {
  var r = pn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bp(e)) Rp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Tt(a, l))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Yu(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = cp(e, t, i, r)),
      n !== null && ((i = qe()), Ot(n, e, r, i), Fp(n, t, r));
  }
}
function bp(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function Rp(e, t) {
  Jr = Mo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Fp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lu(e, n);
  }
}
var zo = {
    readContext: mt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  Mg = {
    readContext: mt,
    useCallback: function (e, t) {
      return (Nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mt,
    useEffect: Uc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        vo(4194308, 4, Tp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return vo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return vo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Lg.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zc,
    useDebugValue: ls,
    useDeferredValue: function (e) {
      return (Nt().memoizedState = e);
    },
    useTransition: function () {
      var e = zc(!1),
        t = e[0];
      return (e = Ag.bind(null, e[1])), (Nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        i = Nt();
      if (se) {
        if (n === void 0) throw Error(F(407));
        n = n();
      } else {
        if (((n = t()), Te === null)) throw Error(F(349));
        bn & 30 || wp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Uc(Cp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ki(9, Sp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nt(),
        t = Te.identifierPrefix;
      if (se) {
        var n = qt,
          r = Bt;
        (n = (r & ~(1 << (32 - _t(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Si++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Fg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  zg = {
    readContext: mt,
    useCallback: Ip,
    useContext: mt,
    useEffect: os,
    useImperativeHandle: Pp,
    useInsertionEffect: _p,
    useLayoutEffect: Op,
    useMemo: Np,
    useReducer: Wl,
    useRef: xp,
    useState: function () {
      return Wl(Ci);
    },
    useDebugValue: ls,
    useDeferredValue: function (e) {
      var t = gt();
      return jp(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Ci)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: gp,
    useSyncExternalStore: yp,
    useId: $p,
    unstable_isNewReconciler: !1,
  },
  Ug = {
    readContext: mt,
    useCallback: Ip,
    useContext: mt,
    useEffect: os,
    useImperativeHandle: Pp,
    useInsertionEffect: _p,
    useLayoutEffect: Op,
    useMemo: Np,
    useReducer: Ql,
    useRef: xp,
    useState: function () {
      return Ql(Ci);
    },
    useDebugValue: ls,
    useDeferredValue: function (e) {
      var t = gt();
      return Ee === null ? (t.memoizedState = e) : jp(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Ci)[0],
        t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: gp,
    useSyncExternalStore: yp,
    useId: $p,
    unstable_isNewReconciler: !1,
  };
function Sr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += vm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Hg = typeof WeakMap == "function" ? WeakMap : Map;
function Ap(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ho || ((Ho = !0), (nu = r)), Wa(e, t);
    }),
    n
  );
}
function Lp(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Wa(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Wa(e, t),
          typeof r != "function" &&
            (dn === null ? (dn = new Set([this])) : dn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Hc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = ny.bind(null, e, t, n)), t.then(e, e));
}
function Bc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Wt(-1, 1)), (t.tag = 2), fn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Bg = Yt.ReactCurrentOwner,
  Xe = !1;
function Be(e, t, n, r) {
  t.child = e === null ? vp(t, null, n, r) : yr(t, e.child, n, r);
}
function Vc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    fr(t, i),
    (r = rs(e, t, n, r, o, i)),
    (n = is()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Gt(e, t, i))
      : (se && n && Vu(t), (t.flags |= 1), Be(e, t, r, i), t.child)
  );
}
function Wc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !hs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Dp(e, t, o, r, i))
      : ((e = wo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : hi), n(l, r) && e.ref === t.ref)
    )
      return Gt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = hn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Dp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (hi(o, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), Gt(e, t, i);
  }
  return Qa(e, t, n, r, i);
}
function Mp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(or, rt),
        (rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(or, rt),
          (rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        oe(or, rt),
        (rt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(or, rt),
      (rt |= r);
  return Be(e, t, i, n), t.child;
}
function zp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qa(e, t, n, r, i) {
  var o = Ye(n) ? jn : De.current;
  return (
    (o = mr(t, o)),
    fr(t, i),
    (n = rs(e, t, n, r, o, i)),
    (r = is()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Gt(e, t, i))
      : (se && r && Vu(t), (t.flags |= 1), Be(e, t, n, i), t.child)
  );
}
function Qc(e, t, n, r, i) {
  if (Ye(n)) {
    var o = !0;
    $o(t);
  } else o = !1;
  if ((fr(t, i), t.stateNode === null))
    mo(e, t), pp(t, n, r), Va(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var u = l.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = mt(s))
      : ((s = Ye(n) ? jn : De.current), (s = mr(t, s)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && Dc(t, l, r, s)),
      (en = !1);
    var v = t.memoizedState;
    (l.state = v),
      Lo(t, r, l, i),
      (u = t.memoizedState),
      a !== r || v !== u || Ge.current || en
        ? (typeof d == "function" && (qa(t, n, d, r), (u = t.memoizedState)),
          (a = en || Lc(t, n, a, r, v, u, s))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = s),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      fp(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : kt(t.type, a)),
      (l.props = s),
      (p = t.pendingProps),
      (v = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = mt(u))
        : ((u = Ye(n) ? jn : De.current), (u = mr(t, u)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== p || v !== u) && Dc(t, l, r, u)),
      (en = !1),
      (v = t.memoizedState),
      (l.state = v),
      Lo(t, r, l, i);
    var C = t.memoizedState;
    a !== p || v !== C || Ge.current || en
      ? (typeof g == "function" && (qa(t, n, g, r), (C = t.memoizedState)),
        (s = en || Lc(t, n, s, r, v, C, u) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, C, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, C, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = C)),
        (l.props = r),
        (l.state = C),
        (l.context = u),
        (r = s))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ka(e, t, n, r, o, i);
}
function Ka(e, t, n, r, i, o) {
  zp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && $c(t, n, !1), Gt(e, t, o);
  (r = t.stateNode), (Bg.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = yr(t, e.child, null, o)), (t.child = yr(t, null, a, o)))
      : Be(e, t, a, o),
    (t.memoizedState = r.state),
    i && $c(t, n, !0),
    t.child
  );
}
function Up(e) {
  var t = e.stateNode;
  t.pendingContext
    ? jc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && jc(e, t.context, !1),
    Ju(e, t.containerInfo);
}
function Kc(e, t, n, r, i) {
  return gr(), Qu(i), (t.flags |= 256), Be(e, t, n, r), t.child;
}
var Xa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ga(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hp(e, t, n) {
  var r = t.pendingProps,
    i = de.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    oe(de, i & 1),
    e === null)
  )
    return (
      Ha(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = sl(l, r, 0, null)),
              (e = Nn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ga(n)),
              (t.memoizedState = Xa),
              e)
            : as(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return qg(e, t, l, r, a, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (a = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = hn(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = hn(a, o)) : ((o = Nn(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ga(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = hn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function as(e, t) {
  return (
    (t = sl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Yi(e, t, n, r) {
  return (
    r !== null && Qu(r),
    yr(t, e.child, null, n),
    (e = as(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qg(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Kl(Error(F(422)))), Yi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = sl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Nn(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && yr(t, e.child, null, l),
        (t.child.memoizedState = Ga(l)),
        (t.memoizedState = Xa),
        o);
  if (!(t.mode & 1)) return Yi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(F(419))), (r = Kl(o, r, void 0)), Yi(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Xe || a)) {
    if (((r = Te), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Xt(e, i), Ot(r, e, i, -1));
    }
    return ps(), (r = Kl(Error(F(421)))), Yi(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ry.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (it = cn(i.nextSibling)),
      (ot = t),
      (se = !0),
      (xt = null),
      e !== null &&
        ((dt[pt++] = Bt),
        (dt[pt++] = qt),
        (dt[pt++] = $n),
        (Bt = e.id),
        (qt = e.overflow),
        ($n = t)),
      (t = as(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Xc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ba(e.return, t, n);
}
function Xl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Bp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Be(e, t, r.children, n), (r = de.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xc(e, n, t);
        else if (e.tag === 19) Xc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Do(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Xl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Do(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Xl(t, !0, n, null, o);
        break;
      case "together":
        Xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function mo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (
      e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Vg(e, t, n) {
  switch (t.tag) {
    case 3:
      Up(t), gr();
      break;
    case 5:
      mp(t);
      break;
    case 1:
      Ye(t.type) && $o(t);
      break;
    case 4:
      Ju(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      oe(Fo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Hp(e, t, n)
          : (oe(de, de.current & 1),
            (e = Gt(e, t, n)),
            e !== null ? e.sibling : null);
      oe(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Bp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        oe(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mp(e, t, n);
  }
  return Gt(e, t, n);
}
var qp, Ya, Vp, Wp;
qp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ya = function () {};
Vp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Pn(bt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = wa(e, i)), (r = wa(e, r)), (o = []);
        break;
      case "select":
        (i = he({}, i, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = ka(e, i)), (r = ka(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = No);
    }
    xa(n, r);
    var l;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var a = i[s];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (ai.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                a[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (ai.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && ae("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Wp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Lr(e, t) {
  if (!se)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Wg(e, t, n) {
  var r = t.pendingProps;
  switch ((Wu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Fe(t), null;
    case 1:
      return Ye(t.type) && jo(), Fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wr(),
        ue(Ge),
        ue(De),
        ts(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xt !== null && (ou(xt), (xt = null)))),
        Ya(e, t),
        Fe(t),
        null
      );
    case 5:
      es(t);
      var i = Pn(wi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return Fe(t), null;
        }
        if (((e = Pn(bt.current)), Xi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[jt] = t), (r[gi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Vr.length; i++) ae(Vr[i], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae("error", r), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              ic(r, o), ae("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ae("invalid", r);
              break;
            case "textarea":
              lc(r, o), ae("invalid", r);
          }
          xa(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var a = o[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ki(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ki(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ai.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  ae("scroll", r);
            }
          switch (n) {
            case "input":
              zi(r), oc(r, o, !0);
              break;
            case "textarea":
              zi(r), ac(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = No);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = wd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[jt] = t),
            (e[gi] = r),
            qp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = _a(n, r)), n)) {
              case "dialog":
                ae("cancel", e), ae("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Vr.length; i++) ae(Vr[i], e);
                i = r;
                break;
              case "source":
                ae("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", e), ae("load", e), (i = r);
                break;
              case "details":
                ae("toggle", e), (i = r);
                break;
              case "input":
                ic(e, r), (i = wa(e, r)), ae("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = he({}, r, { value: void 0 })),
                  ae("invalid", e);
                break;
              case "textarea":
                lc(e, r), (i = ka(e, r)), ae("invalid", e);
                break;
              default:
                i = r;
            }
            xa(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? kd(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Sd(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && ui(e, u)
                    : typeof u == "number" && ui(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ai.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && ae("scroll", e)
                      : u != null && ju(e, o, u, l));
              }
            switch (n) {
              case "input":
                zi(e), oc(e, r, !1);
                break;
              case "textarea":
                zi(e), ac(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ar(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ar(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = No);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Fe(t), null;
    case 6:
      if (e && t.stateNode != null) Wp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (((n = Pn(wi.current)), Pn(bt.current), Xi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[jt] = t),
            (o = r.nodeValue !== n) && ((e = ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ki(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ki(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[jt] = t),
            (t.stateNode = r);
      }
      return Fe(t), null;
    case 13:
      if (
        (ue(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && it !== null && t.mode & 1 && !(t.flags & 128))
          sp(), gr(), (t.flags |= 98560), (o = !1);
        else if (((o = Xi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(F(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(F(317));
            o[jt] = t;
          } else
            gr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Fe(t), (o = !1);
        } else xt !== null && (ou(xt), (xt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || de.current & 1 ? xe === 0 && (xe = 3) : ps())),
          t.updateQueue !== null && (t.flags |= 4),
          Fe(t),
          null);
    case 4:
      return (
        wr(), Ya(e, t), e === null && vi(t.stateNode.containerInfo), Fe(t), null
      );
    case 10:
      return Gu(t.type._context), Fe(t), null;
    case 17:
      return Ye(t.type) && jo(), Fe(t), null;
    case 19:
      if ((ue(de), (o = t.memoizedState), o === null)) return Fe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) Lr(o, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Do(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Lr(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(de, (de.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ye() > Cr &&
            ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Do(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Lr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !se)
            )
              return Fe(t), null;
          } else
            2 * ye() - o.renderingStartTime > Cr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ye()),
          (t.sibling = null),
          (n = de.current),
          oe(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (Fe(t), null);
    case 22:
    case 23:
      return (
        ds(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? rt & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function Qg(e, t) {
  switch ((Wu(t), t.tag)) {
    case 1:
      return (
        Ye(t.type) && jo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wr(),
        ue(Ge),
        ue(De),
        ts(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return es(t), null;
    case 13:
      if (
        (ue(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(F(340));
        gr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(de), null;
    case 4:
      return wr(), null;
    case 10:
      return Gu(t.type._context), null;
    case 22:
    case 23:
      return ds(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zi = !1,
  Ae = !1,
  Kg = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function ir(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ge(e, t, r);
      }
    else n.current = null;
}
function Za(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var Gc = !1;
function Xg(e, t) {
  if (((Fa = To), (e = Gd()), qu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            u = -1,
            s = 0,
            d = 0,
            p = e,
            v = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (i !== 0 && p.nodeType !== 3) || (a = l + i),
                p !== o || (r !== 0 && p.nodeType !== 3) || (u = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (v = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (v === n && ++s === i && (a = l),
                v === o && ++d === r && (u = l),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = v), (v = p.parentNode);
            }
            p = g;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Aa = { focusedElem: e, selectionRange: n }, To = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
        try {
          var C = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (C !== null) {
                  var k = C.memoizedProps,
                    T = C.memoizedState,
                    m = t.stateNode,
                    c = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : kt(t.type, k),
                      T
                    );
                  m.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (h) {
          ge(t, t.return, h);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (C = Gc), (Gc = !1), C;
}
function ei(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Za(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function al(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ja(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Qp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Qp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[jt], delete t[gi], delete t[Ma], delete t[jg], delete t[$g])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Kp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Kp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function eu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = No));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (eu(e, t, n), e = e.sibling; e !== null; ) eu(e, t, n), (e = e.sibling);
}
function tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tu(e, t, n), e = e.sibling; e !== null; ) tu(e, t, n), (e = e.sibling);
}
var Ne = null,
  Et = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) Xp(e, t, n), (n = n.sibling);
}
function Xp(e, t, n) {
  if ($t && typeof $t.onCommitFiberUnmount == "function")
    try {
      $t.onCommitFiberUnmount(Jo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || ir(n, t);
    case 6:
      var r = Ne,
        i = Et;
      (Ne = null),
        Zt(e, t, n),
        (Ne = r),
        (Et = i),
        Ne !== null &&
          (Et
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (Et
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Hl(e.parentNode, n)
              : e.nodeType === 1 && Hl(e, n),
            di(e))
          : Hl(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (i = Et),
        (Ne = n.stateNode.containerInfo),
        (Et = !0),
        Zt(e, t, n),
        (Ne = r),
        (Et = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Za(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (
        !Ae &&
        (ir(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ge(n, t, a);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), Zt(e, t, n), (Ae = r))
        : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function Zc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Kg()),
      t.forEach(function (r) {
        var i = iy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ne = a.stateNode), (Et = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (Et = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (Et = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(F(160));
        Xp(o, l, i), (Ne = null), (Et = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (s) {
        ge(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gp(t, e), (t = t.sibling);
}
function Gp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ct(t, e), It(e), r & 4)) {
        try {
          ei(3, e, e.return), al(3, e);
        } catch (k) {
          ge(e, e.return, k);
        }
        try {
          ei(5, e, e.return);
        } catch (k) {
          ge(e, e.return, k);
        }
      }
      break;
    case 1:
      Ct(t, e), It(e), r & 512 && n !== null && ir(n, n.return);
      break;
    case 5:
      if (
        (Ct(t, e),
        It(e),
        r & 512 && n !== null && ir(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ui(i, "");
        } catch (k) {
          ge(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && gd(i, o),
              _a(a, l);
            var s = _a(a, o);
            for (l = 0; l < u.length; l += 2) {
              var d = u[l],
                p = u[l + 1];
              d === "style"
                ? kd(i, p)
                : d === "dangerouslySetInnerHTML"
                ? Sd(i, p)
                : d === "children"
                ? ui(i, p)
                : ju(i, d, p, s);
            }
            switch (a) {
              case "input":
                Sa(i, o);
                break;
              case "textarea":
                yd(i, o);
                break;
              case "select":
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? ar(i, !!o.multiple, g, !1)
                  : v !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ar(i, !!o.multiple, o.defaultValue, !0)
                      : ar(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[gi] = o;
          } catch (k) {
            ge(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Ct(t, e), It(e), r & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (k) {
          ge(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Ct(t, e), It(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          di(t.containerInfo);
        } catch (k) {
          ge(e, e.return, k);
        }
      break;
    case 4:
      Ct(t, e), It(e);
      break;
    case 13:
      Ct(t, e),
        It(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (cs = ye())),
        r & 4 && Zc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ae = (s = Ae) || d), Ct(t, e), (Ae = s)) : Ct(t, e),
        It(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !d && e.mode & 1)
        )
          for (B = e, d = e.child; d !== null; ) {
            for (p = B = d; B !== null; ) {
              switch (((v = B), (g = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ei(4, v, v.return);
                  break;
                case 1:
                  ir(v, v.return);
                  var C = v.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (C.props = t.memoizedProps),
                        (C.state = t.memoizedState),
                        C.componentWillUnmount();
                    } catch (k) {
                      ge(r, n, k);
                    }
                  }
                  break;
                case 5:
                  ir(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ef(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = v), (B = g)) : ef(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (i = p.stateNode),
                  s
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = p.stateNode),
                      (u = p.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Cd("display", l)));
              } catch (k) {
                ge(e, e.return, k);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (k) {
                ge(e, e.return, k);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Ct(t, e), It(e), r & 4 && Zc(e);
      break;
    case 21:
      break;
    default:
      Ct(t, e), It(e);
  }
}
function It(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Kp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ui(i, ""), (r.flags &= -33));
          var o = Yc(e);
          tu(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = Yc(e);
          eu(e, a, l);
          break;
        default:
          throw Error(F(161));
      }
    } catch (u) {
      ge(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gg(e, t, n) {
  (B = e), Yp(e);
}
function Yp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var i = B,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Zi;
      if (!l) {
        var a = i.alternate,
          u = (a !== null && a.memoizedState !== null) || Ae;
        a = Zi;
        var s = Ae;
        if (((Zi = l), (Ae = u) && !s))
          for (B = i; B !== null; )
            (l = B),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? tf(i)
                : u !== null
                ? ((u.return = l), (B = u))
                : tf(i);
        for (; o !== null; ) (B = o), Yp(o), (o = o.sibling);
        (B = i), (Zi = a), (Ae = s);
      }
      Jc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (B = o)) : Jc(e);
  }
}
function Jc(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || al(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ae)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : kt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ac(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ac(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var d = s.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && di(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        Ae || (t.flags & 512 && Ja(t));
      } catch (v) {
        ge(t, t.return, v);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function ef(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function tf(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            al(4, t);
          } catch (u) {
            ge(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ge(t, i, u);
            }
          }
          var o = t.return;
          try {
            Ja(t);
          } catch (u) {
            ge(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ja(t);
          } catch (u) {
            ge(t, l, u);
          }
      }
    } catch (u) {
      ge(t, t.return, u);
    }
    if (t === e) {
      B = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (B = a);
      break;
    }
    B = t.return;
  }
}
var Yg = Math.ceil,
  Uo = Yt.ReactCurrentDispatcher,
  us = Yt.ReactCurrentOwner,
  vt = Yt.ReactCurrentBatchConfig,
  ee = 0,
  Te = null,
  we = null,
  je = 0,
  rt = 0,
  or = yn(0),
  xe = 0,
  Ei = null,
  Rn = 0,
  ul = 0,
  ss = 0,
  ti = null,
  Ke = null,
  cs = 0,
  Cr = 1 / 0,
  Ut = null,
  Ho = !1,
  nu = null,
  dn = null,
  Ji = !1,
  ln = null,
  Bo = 0,
  ni = 0,
  ru = null,
  go = -1,
  yo = 0;
function qe() {
  return ee & 6 ? ye() : go !== -1 ? go : (go = ye());
}
function pn(e) {
  return e.mode & 1
    ? ee & 2 && je !== 0
      ? je & -je
      : Rg.transition !== null
      ? (yo === 0 && (yo = Rd()), yo)
      : ((e = re),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ud(e.type))),
        e)
    : 1;
}
function Ot(e, t, n, r) {
  if (50 < ni) throw ((ni = 0), (ru = null), Error(F(185)));
  _i(e, n, r),
    (!(ee & 2) || e !== Te) &&
      (e === Te && (!(ee & 2) && (ul |= n), xe === 4 && rn(e, je)),
      Ze(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((Cr = ye() + 500), il && wn()));
}
function Ze(e, t) {
  var n = e.callbackNode;
  Rm(e, t);
  var r = Oo(e, e === Te ? je : 0);
  if (r === 0)
    n !== null && cc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && cc(n), t === 1))
      e.tag === 0 ? bg(nf.bind(null, e)) : lp(nf.bind(null, e)),
        Ig(function () {
          !(ee & 6) && wn();
        }),
        (n = null);
    else {
      switch (Fd(r)) {
        case 1:
          n = Au;
          break;
        case 4:
          n = $d;
          break;
        case 16:
          n = _o;
          break;
        case 536870912:
          n = bd;
          break;
        default:
          n = _o;
      }
      n = oh(n, Zp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Zp(e, t) {
  if (((go = -1), (yo = 0), ee & 6)) throw Error(F(327));
  var n = e.callbackNode;
  if (dr() && e.callbackNode !== n) return null;
  var r = Oo(e, e === Te ? je : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qo(e, r);
  else {
    t = r;
    var i = ee;
    ee |= 2;
    var o = eh();
    (Te !== e || je !== t) && ((Ut = null), (Cr = ye() + 500), In(e, t));
    do
      try {
        ey();
        break;
      } catch (a) {
        Jp(e, a);
      }
    while (1);
    Xu(),
      (Uo.current = o),
      (ee = i),
      we !== null ? (t = 0) : ((Te = null), (je = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Na(e)), i !== 0 && ((r = i), (t = iu(e, i)))), t === 1)
    )
      throw ((n = Ei), In(e, 0), rn(e, r), Ze(e, ye()), n);
    if (t === 6) rn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Zg(i) &&
          ((t = qo(e, r)),
          t === 2 && ((o = Na(e)), o !== 0 && ((r = o), (t = iu(e, o)))),
          t === 1))
      )
        throw ((n = Ei), In(e, 0), rn(e, r), Ze(e, ye()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          xn(e, Ke, Ut);
          break;
        case 3:
          if (
            (rn(e, r), (r & 130023424) === r && ((t = cs + 500 - ye()), 10 < t))
          ) {
            if (Oo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              qe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Da(xn.bind(null, e, Ke, Ut), t);
            break;
          }
          xn(e, Ke, Ut);
          break;
        case 4:
          if ((rn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - _t(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ye() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Yg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Da(xn.bind(null, e, Ke, Ut), r);
            break;
          }
          xn(e, Ke, Ut);
          break;
        case 5:
          xn(e, Ke, Ut);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Ze(e, ye()), e.callbackNode === n ? Zp.bind(null, e) : null;
}
function iu(e, t) {
  var n = ti;
  return (
    e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
    (e = qo(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && ou(t)),
    e
  );
}
function ou(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
}
function Zg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Tt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rn(e, t) {
  for (
    t &= ~ss,
      t &= ~ul,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - _t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function nf(e) {
  if (ee & 6) throw Error(F(327));
  dr();
  var t = Oo(e, 0);
  if (!(t & 1)) return Ze(e, ye()), null;
  var n = qo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Na(e);
    r !== 0 && ((t = r), (n = iu(e, r)));
  }
  if (n === 1) throw ((n = Ei), In(e, 0), rn(e, t), Ze(e, ye()), n);
  if (n === 6) throw Error(F(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, Ke, Ut),
    Ze(e, ye()),
    null
  );
}
function fs(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((Cr = ye() + 500), il && wn());
  }
}
function Fn(e) {
  ln !== null && ln.tag === 0 && !(ee & 6) && dr();
  var t = ee;
  ee |= 1;
  var n = vt.transition,
    r = re;
  try {
    if (((vt.transition = null), (re = 1), e)) return e();
  } finally {
    (re = r), (vt.transition = n), (ee = t), !(ee & 6) && wn();
  }
}
function ds() {
  (rt = or.current), ue(or);
}
function In(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Pg(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n;
      switch ((Wu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && jo();
          break;
        case 3:
          wr(), ue(Ge), ue(De), ts();
          break;
        case 5:
          es(r);
          break;
        case 4:
          wr();
          break;
        case 13:
          ue(de);
          break;
        case 19:
          ue(de);
          break;
        case 10:
          Gu(r.type._context);
          break;
        case 22:
        case 23:
          ds();
      }
      n = n.return;
    }
  if (
    ((Te = e),
    (we = e = hn(e.current, null)),
    (je = rt = t),
    (xe = 0),
    (Ei = null),
    (ss = ul = Rn = 0),
    (Ke = ti = null),
    Tn !== null)
  ) {
    for (t = 0; t < Tn.length; t++)
      if (((n = Tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Tn = null;
  }
  return e;
}
function Jp(e, t) {
  do {
    var n = we;
    try {
      if ((Xu(), (ho.current = zo), Mo)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Mo = !1;
      }
      if (
        ((bn = 0),
        (Oe = Ee = pe = null),
        (Jr = !1),
        (Si = 0),
        (us.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (Ei = t), (we = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          a = n,
          u = t;
        if (
          ((t = je),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            d = a,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = d.alternate;
            v
              ? ((d.updateQueue = v.updateQueue),
                (d.memoizedState = v.memoizedState),
                (d.lanes = v.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = Bc(l);
          if (g !== null) {
            (g.flags &= -257),
              qc(g, l, a, o, t),
              g.mode & 1 && Hc(o, s, t),
              (t = g),
              (u = s);
            var C = t.updateQueue;
            if (C === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else C.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Hc(o, s, t), ps();
              break e;
            }
            u = Error(F(426));
          }
        } else if (se && a.mode & 1) {
          var T = Bc(l);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              qc(T, l, a, o, t),
              Qu(Sr(u, a));
            break e;
          }
        }
        (o = u = Sr(u, a)),
          xe !== 4 && (xe = 2),
          ti === null ? (ti = [o]) : ti.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Ap(o, u, t);
              Fc(o, m);
              break e;
            case 1:
              a = u;
              var c = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (dn === null || !dn.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var h = Lp(o, a, t);
                Fc(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      nh(n);
    } catch (w) {
      (t = w), we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function eh() {
  var e = Uo.current;
  return (Uo.current = zo), e === null ? zo : e;
}
function ps() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Te === null || (!(Rn & 268435455) && !(ul & 268435455)) || rn(Te, je);
}
function qo(e, t) {
  var n = ee;
  ee |= 2;
  var r = eh();
  (Te !== e || je !== t) && ((Ut = null), In(e, t));
  do
    try {
      Jg();
      break;
    } catch (i) {
      Jp(e, i);
    }
  while (1);
  if ((Xu(), (ee = n), (Uo.current = r), we !== null)) throw Error(F(261));
  return (Te = null), (je = 0), xe;
}
function Jg() {
  for (; we !== null; ) th(we);
}
function ey() {
  for (; we !== null && !_m(); ) th(we);
}
function th(e) {
  var t = ih(e.alternate, e, rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? nh(e) : (we = t),
    (us.current = null);
}
function nh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Qg(n, t)), n !== null)) {
        (n.flags &= 32767), (we = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (we = null);
        return;
      }
    } else if (((n = Wg(n, t, rt)), n !== null)) {
      we = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function xn(e, t, n) {
  var r = re,
    i = vt.transition;
  try {
    (vt.transition = null), (re = 1), ty(e, t, n, r);
  } finally {
    (vt.transition = i), (re = r);
  }
  return null;
}
function ty(e, t, n, r) {
  do dr();
  while (ln !== null);
  if (ee & 6) throw Error(F(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Fm(e, o),
    e === Te && ((we = Te = null), (je = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ji ||
      ((Ji = !0),
      oh(_o, function () {
        return dr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = vt.transition), (vt.transition = null);
    var l = re;
    re = 1;
    var a = ee;
    (ee |= 4),
      (us.current = null),
      Xg(e, n),
      Gp(n, e),
      Cg(Aa),
      (To = !!Fa),
      (Aa = Fa = null),
      (e.current = n),
      Gg(n),
      Om(),
      (ee = a),
      (re = l),
      (vt.transition = o);
  } else e.current = n;
  if (
    (Ji && ((Ji = !1), (ln = e), (Bo = i)),
    (o = e.pendingLanes),
    o === 0 && (dn = null),
    Im(n.stateNode),
    Ze(e, ye()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ho) throw ((Ho = !1), (e = nu), (nu = null), e);
  return (
    Bo & 1 && e.tag !== 0 && dr(),
    (o = e.pendingLanes),
    o & 1 ? (e === ru ? ni++ : ((ni = 0), (ru = e))) : (ni = 0),
    wn(),
    null
  );
}
function dr() {
  if (ln !== null) {
    var e = Fd(Bo),
      t = vt.transition,
      n = re;
    try {
      if (((vt.transition = null), (re = 16 > e ? 16 : e), ln === null))
        var r = !1;
      else {
        if (((e = ln), (ln = null), (Bo = 0), ee & 6)) throw Error(F(331));
        var i = ee;
        for (ee |= 4, B = e.current; B !== null; ) {
          var o = B,
            l = o.child;
          if (B.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (B = s; B !== null; ) {
                  var d = B;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (B = p);
                  else
                    for (; B !== null; ) {
                      d = B;
                      var v = d.sibling,
                        g = d.return;
                      if ((Qp(d), d === s)) {
                        B = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = g), (B = v);
                        break;
                      }
                      B = g;
                    }
                }
              }
              var C = o.alternate;
              if (C !== null) {
                var k = C.child;
                if (k !== null) {
                  C.child = null;
                  do {
                    var T = k.sibling;
                    (k.sibling = null), (k = T);
                  } while (k !== null);
                }
              }
              B = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (B = l);
          else
            e: for (; B !== null; ) {
              if (((o = B), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ei(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (B = m);
                break e;
              }
              B = o.return;
            }
        }
        var c = e.current;
        for (B = c; B !== null; ) {
          l = B;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) (f.return = l), (B = f);
          else
            e: for (l = c; B !== null; ) {
              if (((a = B), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      al(9, a);
                  }
                } catch (w) {
                  ge(a, a.return, w);
                }
              if (a === l) {
                B = null;
                break e;
              }
              var h = a.sibling;
              if (h !== null) {
                (h.return = a.return), (B = h);
                break e;
              }
              B = a.return;
            }
        }
        if (
          ((ee = i), wn(), $t && typeof $t.onPostCommitFiberRoot == "function")
        )
          try {
            $t.onPostCommitFiberRoot(Jo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (re = n), (vt.transition = t);
    }
  }
  return !1;
}
function rf(e, t, n) {
  (t = Sr(n, t)),
    (t = Ap(e, t, 1)),
    (e = fn(e, t, 1)),
    (t = qe()),
    e !== null && (_i(e, 1, t), Ze(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) rf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        rf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dn === null || !dn.has(r)))
        ) {
          (e = Sr(n, e)),
            (e = Lp(t, e, 1)),
            (t = fn(t, e, 1)),
            (e = qe()),
            t !== null && (_i(t, 1, e), Ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ny(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Te === e &&
      (je & n) === n &&
      (xe === 4 || (xe === 3 && (je & 130023424) === je && 500 > ye() - cs)
        ? In(e, 0)
        : (ss |= n)),
    Ze(e, t);
}
function rh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Bi), (Bi <<= 1), !(Bi & 130023424) && (Bi = 4194304))
      : (t = 1));
  var n = qe();
  (e = Xt(e, t)), e !== null && (_i(e, t, n), Ze(e, n));
}
function ry(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), rh(e, n);
}
function iy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), rh(e, n);
}
var ih;
ih = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), Vg(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), se && t.flags & 1048576 && ap(t, Ro, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      mo(e, t), (e = t.pendingProps);
      var i = mr(t, De.current);
      fr(t, n), (i = rs(null, t, r, e, i, n));
      var o = is();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ye(r) ? ((o = !0), $o(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Zu(t),
            (i.updater = ol),
            (t.stateNode = i),
            (i._reactInternals = t),
            Va(t, r, e, n),
            (t = Ka(null, t, r, !0, o, n)))
          : ((t.tag = 0), se && o && Vu(t), Be(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (mo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = ly(r)),
          (e = kt(r, e)),
          i)
        ) {
          case 0:
            t = Qa(null, t, r, e, n);
            break e;
          case 1:
            t = Qc(null, t, r, e, n);
            break e;
          case 11:
            t = Vc(null, t, r, e, n);
            break e;
          case 14:
            t = Wc(null, t, r, kt(r.type, e), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kt(r, i)),
        Qa(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kt(r, i)),
        Qc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Up(t), e === null)) throw Error(F(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          fp(e, t),
          Lo(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Sr(Error(F(423)), t)), (t = Kc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Sr(Error(F(424)), t)), (t = Kc(e, t, r, n, i));
            break e;
          } else
            for (
              it = cn(t.stateNode.containerInfo.firstChild),
                ot = t,
                se = !0,
                xt = null,
                n = vp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((gr(), r === i)) {
            t = Gt(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        mp(t),
        e === null && Ha(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        La(r, i) ? (l = null) : o !== null && La(r, o) && (t.flags |= 32),
        zp(e, t),
        Be(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ha(t), null;
    case 13:
      return Hp(e, t, n);
    case 4:
      return (
        Ju(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = yr(t, null, r, n)) : Be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kt(r, i)),
        Vc(e, t, r, i, n)
      );
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          oe(Fo, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Tt(o.value, l)) {
            if (o.children === i.children && !Ge.current) {
              t = Gt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                l = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Wt(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Ba(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(F(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Ba(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        Be(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        fr(t, n),
        (i = mt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = kt(r, t.pendingProps)),
        (i = kt(r.type, i)),
        Wc(e, t, r, i, n)
      );
    case 15:
      return Dp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kt(r, i)),
        mo(e, t),
        (t.tag = 1),
        Ye(r) ? ((e = !0), $o(t)) : (e = !1),
        fr(t, n),
        pp(t, r, i),
        Va(t, r, i, n),
        Ka(null, t, r, !0, e, n)
      );
    case 19:
      return Bp(e, t, n);
    case 22:
      return Mp(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function oh(e, t) {
  return jd(e, t);
}
function oy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ht(e, t, n, r) {
  return new oy(e, t, n, r);
}
function hs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ly(e) {
  if (typeof e == "function") return hs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === bu)) return 11;
    if (e === Ru) return 14;
  }
  return 2;
}
function hn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ht(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function wo(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) hs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Xn:
        return Nn(n.children, i, o, t);
      case $u:
        (l = 8), (i |= 8);
        break;
      case va:
        return (
          (e = ht(12, n, t, i | 2)), (e.elementType = va), (e.lanes = o), e
        );
      case ma:
        return (e = ht(13, n, t, i)), (e.elementType = ma), (e.lanes = o), e;
      case ga:
        return (e = ht(19, n, t, i)), (e.elementType = ga), (e.lanes = o), e;
      case hd:
        return sl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case dd:
              l = 10;
              break e;
            case pd:
              l = 9;
              break e;
            case bu:
              l = 11;
              break e;
            case Ru:
              l = 14;
              break e;
            case Jt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ht(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Nn(e, t, n, r) {
  return (e = ht(7, e, r, t)), (e.lanes = n), e;
}
function sl(e, t, n, r) {
  return (
    (e = ht(22, e, r, t)),
    (e.elementType = hd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gl(e, t, n) {
  return (e = ht(6, e, null, t)), (e.lanes = n), e;
}
function Yl(e, t, n) {
  return (
    (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ay(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function vs(e, t, n, r, i, o, l, a, u) {
  return (
    (e = new ay(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ht(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zu(o),
    e
  );
}
function uy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function lh(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Ln(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ye(n)) return op(e, n, t);
  }
  return t;
}
function ah(e, t, n, r, i, o, l, a, u) {
  return (
    (e = vs(n, r, !0, e, i, o, l, a, u)),
    (e.context = lh(null)),
    (n = e.current),
    (r = qe()),
    (i = pn(n)),
    (o = Wt(r, i)),
    (o.callback = t ?? null),
    fn(n, o, i),
    (e.current.lanes = i),
    _i(e, i, r),
    Ze(e, r),
    e
  );
}
function cl(e, t, n, r) {
  var i = t.current,
    o = qe(),
    l = pn(i);
  return (
    (n = lh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wt(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = fn(i, t, l)),
    e !== null && (Ot(e, i, l, o), po(e, i, l)),
    l
  );
}
function Vo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function of(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ms(e, t) {
  of(e, t), (e = e.alternate) && of(e, t);
}
function sy() {
  return null;
}
var uh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function gs(e) {
  this._internalRoot = e;
}
fl.prototype.render = gs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  cl(e, t, null, null);
};
fl.prototype.unmount = gs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Fn(function () {
      cl(null, e, null, null);
    }),
      (t[Kt] = null);
  }
};
function fl(e) {
  this._internalRoot = e;
}
fl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Dd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++);
    nn.splice(n, 0, e), n === 0 && zd(e);
  }
};
function ys(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function dl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function lf() {}
function cy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = Vo(l);
        o.call(s);
      };
    }
    var l = ah(t, r, e, 0, null, !1, !1, "", lf);
    return (
      (e._reactRootContainer = l),
      (e[Kt] = l.current),
      vi(e.nodeType === 8 ? e.parentNode : e),
      Fn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Vo(u);
      a.call(s);
    };
  }
  var u = vs(e, 0, !1, null, null, !1, !1, "", lf);
  return (
    (e._reactRootContainer = u),
    (e[Kt] = u.current),
    vi(e.nodeType === 8 ? e.parentNode : e),
    Fn(function () {
      cl(t, u, n, r);
    }),
    u
  );
}
function pl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var u = Vo(l);
        a.call(u);
      };
    }
    cl(t, l, e, i);
  } else l = cy(n, t, e, i, r);
  return Vo(l);
}
Ad = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qr(t.pendingLanes);
        n !== 0 &&
          (Lu(t, n | 1), Ze(t, ye()), !(ee & 6) && ((Cr = ye() + 500), wn()));
      }
      break;
    case 13:
      Fn(function () {
        var r = Xt(e, 1);
        if (r !== null) {
          var i = qe();
          Ot(r, e, 1, i);
        }
      }),
        ms(e, 1);
  }
};
Du = function (e) {
  if (e.tag === 13) {
    var t = Xt(e, 134217728);
    if (t !== null) {
      var n = qe();
      Ot(t, e, 134217728, n);
    }
    ms(e, 134217728);
  }
};
Ld = function (e) {
  if (e.tag === 13) {
    var t = pn(e),
      n = Xt(e, t);
    if (n !== null) {
      var r = qe();
      Ot(n, e, t, r);
    }
    ms(e, t);
  }
};
Dd = function () {
  return re;
};
Md = function (e, t) {
  var n = re;
  try {
    return (re = e), t();
  } finally {
    re = n;
  }
};
Ta = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Sa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = rl(r);
            if (!i) throw Error(F(90));
            md(r), Sa(r, i);
          }
        }
      }
      break;
    case "textarea":
      yd(e, n);
      break;
    case "select":
      (t = n.value), t != null && ar(e, !!n.multiple, t, !1);
  }
};
_d = fs;
Od = Fn;
var fy = { usingClientEntryPoint: !1, Events: [Ti, Jn, rl, Ed, xd, fs] },
  Dr = {
    findFiberByHostInstance: On,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  dy = {
    bundleType: Dr.bundleType,
    version: Dr.version,
    rendererPackageName: Dr.rendererPackageName,
    rendererConfig: Dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Id(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Dr.findFiberByHostInstance || sy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eo.isDisabled && eo.supportsFiber)
    try {
      (Jo = eo.inject(dy)), ($t = eo);
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy;
ut.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ys(t)) throw Error(F(200));
  return uy(e, t, null, n);
};
ut.createRoot = function (e, t) {
  if (!ys(e)) throw Error(F(299));
  var n = !1,
    r = "",
    i = uh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = vs(e, 1, !1, null, null, n, !1, r, i)),
    (e[Kt] = t.current),
    vi(e.nodeType === 8 ? e.parentNode : e),
    new gs(t)
  );
};
ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(F(188))
      : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = Id(t)), (e = e === null ? null : e.stateNode), e;
};
ut.flushSync = function (e) {
  return Fn(e);
};
ut.hydrate = function (e, t, n) {
  if (!dl(t)) throw Error(F(200));
  return pl(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
  if (!ys(e)) throw Error(F(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = uh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = ah(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Kt] = t.current),
    vi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new fl(t);
};
ut.render = function (e, t, n) {
  if (!dl(t)) throw Error(F(200));
  return pl(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
  if (!dl(e)) throw Error(F(40));
  return e._reactRootContainer
    ? (Fn(function () {
        pl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Kt] = null);
        });
      }),
      !0)
    : !1;
};
ut.unstable_batchedUpdates = fs;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!dl(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return pl(e, t, n, !1, r);
};
ut.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = ut);
})(sm);
var af = da;
(fa.createRoot = af.createRoot), (fa.hydrateRoot = af.hydrateRoot);
function py() {
  return R("div", {
    className:
      "custom-heading-div-open duration-2000 container mb-4 w-11/12 transform p-4  text-center font-VT323 font-bold transition",
    children: R("h1", {
      className:
        "duration-2000 m-0 transform p-0 text-2xl text-black sm:text-4xl md:text-5xl",
      children: "Javascript Keypoints App",
    }),
  });
}
function hy({ setSearchValue: e, searchValue: t }) {
  return Le("div", {
    className: "relative mb-4 h-10 w-full",
    children: [
      R("input", {
        className:
          " h-full w-full rounded-md p-2 text-lg font-medium outline-0",
        type: "text",
        placeholder: "search...",
        id: "search-bar",
        value: t,
        onChange: i => {
          e(i.target.value);
        },
      }),
      t &&
        R("button", {
          className: "absolute inset-y-0 right-0 w-10 rounded-r-md",
          onClick: () => {
            e("");
          },
          children: R("span", {
            className: "flex justify-center",
            children: Le("svg", {
              className:
                "h-6 w-6 fill-current text-gray-400 hover:text-gray-500",
              role: "button",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              children: [
                R("title", { children: "Clear" }),
                R("path", {
                  d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z",
                }),
              ],
            }),
          }),
        }),
    ],
  });
}
function vy(e) {
  const t = e
    .map(r => r.tags)
    .filter(Boolean)
    .flat();
  return [...new Set(t)];
}
var my = Object.create,
  hl = Object.defineProperty,
  gy = Object.getOwnPropertyDescriptor,
  ws = Object.getOwnPropertyNames,
  yy = Object.getPrototypeOf,
  wy = Object.prototype.hasOwnProperty,
  Sy = (e, t) =>
    function () {
      return e && (t = (0, e[ws(e)[0]])((e = 0))), t;
    },
  yt = (e, t) =>
    function () {
      return t || (0, e[ws(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Cy = (e, t) => {
    for (var n in t) hl(e, n, { get: t[n], enumerable: !0 });
  },
  sh = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of ws(t))
        !wy.call(e, i) &&
          i !== n &&
          hl(e, i, {
            get: () => t[i],
            enumerable: !(r = gy(t, i)) || r.enumerable,
          });
    return e;
  },
  _r = (e, t, n) => (
    (n = e != null ? my(yy(e)) : {}),
    sh(
      t || !e || !e.__esModule
        ? hl(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  ky = e => sh(hl({}, "__esModule", { value: !0 }), e),
  Ey = yt({
    "node_modules/requires-port/index.js"(e, t) {
      t.exports = function (r, i) {
        if (((i = i.split(":")[0]), (r = +r), !r)) return !1;
        switch (i) {
          case "http":
          case "ws":
            return r !== 80;
          case "https":
          case "wss":
            return r !== 443;
          case "ftp":
            return r !== 21;
          case "gopher":
            return r !== 70;
          case "file":
            return !1;
        }
        return r !== 0;
      };
    },
  }),
  xy = yt({
    "node_modules/querystringify/index.js"(e) {
      var t = Object.prototype.hasOwnProperty,
        n;
      function r(a) {
        try {
          return decodeURIComponent(a.replace(/\+/g, " "));
        } catch {
          return null;
        }
      }
      function i(a) {
        try {
          return encodeURIComponent(a);
        } catch {
          return null;
        }
      }
      function o(a) {
        for (var u = /([^=?#&]+)=?([^&]*)/g, s = {}, d; (d = u.exec(a)); ) {
          var p = r(d[1]),
            v = r(d[2]);
          p === null || v === null || p in s || (s[p] = v);
        }
        return s;
      }
      function l(a, u) {
        u = u || "";
        var s = [],
          d,
          p;
        typeof u != "string" && (u = "?");
        for (p in a)
          if (t.call(a, p)) {
            if (
              ((d = a[p]),
              !d && (d === null || d === n || isNaN(d)) && (d = ""),
              (p = i(p)),
              (d = i(d)),
              p === null || d === null)
            )
              continue;
            s.push(p + "=" + d);
          }
        return s.length ? u + s.join("&") : "";
      }
      (e.stringify = l), (e.parse = o);
    },
  }),
  _y = yt({
    "node_modules/url-parse/index.js"(e, t) {
      var n = Ey(),
        r = xy(),
        i =
          /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        o = /[\n\r\t]/g,
        l = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        a = /:\d+$/,
        u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        s = /^[a-zA-Z]:/;
      function d(h) {
        return (h || "").toString().replace(i, "");
      }
      var p = [
          ["#", "hash"],
          ["?", "query"],
          function (w, y) {
            return C(y.protocol) ? w.replace(/\\/g, "/") : w;
          },
          ["/", "pathname"],
          ["@", "auth", 1],
          [NaN, "host", void 0, 1, 1],
          [/:(\d*)$/, "port", void 0, 1],
          [NaN, "hostname", void 0, 1, 1],
        ],
        v = { hash: 1, query: 1 };
      function g(h) {
        var w;
        typeof window < "u"
          ? (w = window)
          : typeof global < "u"
          ? (w = global)
          : typeof self < "u"
          ? (w = self)
          : (w = {});
        var y = w.location || {};
        h = h || y;
        var S = {},
          _ = typeof h,
          O;
        if (h.protocol === "blob:") S = new m(unescape(h.pathname), {});
        else if (_ === "string") {
          S = new m(h, {});
          for (O in v) delete S[O];
        } else if (_ === "object") {
          for (O in h) O in v || (S[O] = h[O]);
          S.slashes === void 0 && (S.slashes = l.test(h.href));
        }
        return S;
      }
      function C(h) {
        return (
          h === "file:" ||
          h === "ftp:" ||
          h === "http:" ||
          h === "https:" ||
          h === "ws:" ||
          h === "wss:"
        );
      }
      function k(h, w) {
        (h = d(h)), (h = h.replace(o, "")), (w = w || {});
        var y = u.exec(h),
          S = y[1] ? y[1].toLowerCase() : "",
          _ = !!y[2],
          O = !!y[3],
          b = 0,
          E;
        return (
          _
            ? O
              ? ((E = y[2] + y[3] + y[4]), (b = y[2].length + y[3].length))
              : ((E = y[2] + y[4]), (b = y[2].length))
            : O
            ? ((E = y[3] + y[4]), (b = y[3].length))
            : (E = y[4]),
          S === "file:"
            ? b >= 2 && (E = E.slice(2))
            : C(S)
            ? (E = y[4])
            : S
            ? _ && (E = E.slice(2))
            : b >= 2 && C(w.protocol) && (E = y[4]),
          { protocol: S, slashes: _ || C(S), slashesCount: b, rest: E }
        );
      }
      function T(h, w) {
        if (h === "") return w;
        for (
          var y = (w || "/").split("/").slice(0, -1).concat(h.split("/")),
            S = y.length,
            _ = y[S - 1],
            O = !1,
            b = 0;
          S--;

        )
          y[S] === "."
            ? y.splice(S, 1)
            : y[S] === ".."
            ? (y.splice(S, 1), b++)
            : b && (S === 0 && (O = !0), y.splice(S, 1), b--);
        return (
          O && y.unshift(""),
          (_ === "." || _ === "..") && y.push(""),
          y.join("/")
        );
      }
      function m(h, w, y) {
        if (((h = d(h)), (h = h.replace(o, "")), !(this instanceof m)))
          return new m(h, w, y);
        var S,
          _,
          O,
          b,
          E,
          x,
          I = p.slice(),
          P = typeof w,
          $ = this,
          z = 0;
        for (
          P !== "object" && P !== "string" && ((y = w), (w = null)),
            y && typeof y != "function" && (y = r.parse),
            w = g(w),
            _ = k(h || "", w),
            S = !_.protocol && !_.slashes,
            $.slashes = _.slashes || (S && w.slashes),
            $.protocol = _.protocol || w.protocol || "",
            h = _.rest,
            ((_.protocol === "file:" && (_.slashesCount !== 2 || s.test(h))) ||
              (!_.slashes &&
                (_.protocol || _.slashesCount < 2 || !C($.protocol)))) &&
              (I[3] = [/(.*)/, "pathname"]);
          z < I.length;
          z++
        ) {
          if (((b = I[z]), typeof b == "function")) {
            h = b(h, $);
            continue;
          }
          (O = b[0]),
            (x = b[1]),
            O !== O
              ? ($[x] = h)
              : typeof O == "string"
              ? ((E = O === "@" ? h.lastIndexOf(O) : h.indexOf(O)),
                ~E &&
                  (typeof b[2] == "number"
                    ? (($[x] = h.slice(0, E)), (h = h.slice(E + b[2])))
                    : (($[x] = h.slice(E)), (h = h.slice(0, E)))))
              : (E = O.exec(h)) && (($[x] = E[1]), (h = h.slice(0, E.index))),
            ($[x] = $[x] || (S && b[3] && w[x]) || ""),
            b[4] && ($[x] = $[x].toLowerCase());
        }
        y && ($.query = y($.query)),
          S &&
            w.slashes &&
            $.pathname.charAt(0) !== "/" &&
            ($.pathname !== "" || w.pathname !== "") &&
            ($.pathname = T($.pathname, w.pathname)),
          $.pathname.charAt(0) !== "/" &&
            C($.protocol) &&
            ($.pathname = "/" + $.pathname),
          n($.port, $.protocol) || (($.host = $.hostname), ($.port = "")),
          ($.username = $.password = ""),
          $.auth &&
            ((E = $.auth.indexOf(":")),
            ~E
              ? (($.username = $.auth.slice(0, E)),
                ($.username = encodeURIComponent(
                  decodeURIComponent($.username)
                )),
                ($.password = $.auth.slice(E + 1)),
                ($.password = encodeURIComponent(
                  decodeURIComponent($.password)
                )))
              : ($.username = encodeURIComponent(decodeURIComponent($.auth))),
            ($.auth = $.password ? $.username + ":" + $.password : $.username)),
          ($.origin =
            $.protocol !== "file:" && C($.protocol) && $.host
              ? $.protocol + "//" + $.host
              : "null"),
          ($.href = $.toString());
      }
      function c(h, w, y) {
        var S = this;
        switch (h) {
          case "query":
            typeof w == "string" && w.length && (w = (y || r.parse)(w)),
              (S[h] = w);
            break;
          case "port":
            (S[h] = w),
              n(w, S.protocol)
                ? w && (S.host = S.hostname + ":" + w)
                : ((S.host = S.hostname), (S[h] = ""));
            break;
          case "hostname":
            (S[h] = w), S.port && (w += ":" + S.port), (S.host = w);
            break;
          case "host":
            (S[h] = w),
              a.test(w)
                ? ((w = w.split(":")),
                  (S.port = w.pop()),
                  (S.hostname = w.join(":")))
                : ((S.hostname = w), (S.port = ""));
            break;
          case "protocol":
            (S.protocol = w.toLowerCase()), (S.slashes = !y);
            break;
          case "pathname":
          case "hash":
            if (w) {
              var _ = h === "pathname" ? "/" : "#";
              S[h] = w.charAt(0) !== _ ? _ + w : w;
            } else S[h] = w;
            break;
          case "username":
          case "password":
            S[h] = encodeURIComponent(w);
            break;
          case "auth":
            var O = w.indexOf(":");
            ~O
              ? ((S.username = w.slice(0, O)),
                (S.username = encodeURIComponent(
                  decodeURIComponent(S.username)
                )),
                (S.password = w.slice(O + 1)),
                (S.password = encodeURIComponent(
                  decodeURIComponent(S.password)
                )))
              : (S.username = encodeURIComponent(decodeURIComponent(w)));
        }
        for (var b = 0; b < p.length; b++) {
          var E = p[b];
          E[4] && (S[E[1]] = S[E[1]].toLowerCase());
        }
        return (
          (S.auth = S.password ? S.username + ":" + S.password : S.username),
          (S.origin =
            S.protocol !== "file:" && C(S.protocol) && S.host
              ? S.protocol + "//" + S.host
              : "null"),
          (S.href = S.toString()),
          S
        );
      }
      function f(h) {
        (!h || typeof h != "function") && (h = r.stringify);
        var w,
          y = this,
          S = y.host,
          _ = y.protocol;
        _ && _.charAt(_.length - 1) !== ":" && (_ += ":");
        var O = _ + ((y.protocol && y.slashes) || C(y.protocol) ? "//" : "");
        return (
          y.username
            ? ((O += y.username),
              y.password && (O += ":" + y.password),
              (O += "@"))
            : y.password
            ? ((O += ":" + y.password), (O += "@"))
            : y.protocol !== "file:" &&
              C(y.protocol) &&
              !S &&
              y.pathname !== "/" &&
              (O += "@"),
          (S[S.length - 1] === ":" || (a.test(y.hostname) && !y.port)) &&
            (S += ":"),
          (O += S + y.pathname),
          (w = typeof y.query == "object" ? h(y.query) : y.query),
          w && (O += w.charAt(0) !== "?" ? "?" + w : w),
          y.hash && (O += y.hash),
          O
        );
      }
      (m.prototype = { set: c, toString: f }),
        (m.extractProtocol = k),
        (m.location = g),
        (m.trimLeft = d),
        (m.qs = r),
        (t.exports = m);
    },
  }),
  Oy = _r(_y()),
  Ty = typeof navigator > "u" ? !1 : navigator.product === "ReactNative",
  Py = Object.prototype.hasOwnProperty,
  lu = { timeout: Ty ? 6e4 : 12e4 },
  Iy = e => {
    const t =
        typeof e == "string"
          ? Object.assign({ url: e }, lu)
          : Object.assign({}, lu, e),
      n = (0, Oy.default)(t.url, {}, !0);
    return (
      (t.timeout = ch(t.timeout)),
      t.query && (n.query = Object.assign({}, n.query, jy(t.query))),
      (t.method =
        t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase()),
      (t.url = n.toString(Ny)),
      t
    );
  };
function Ny(e) {
  const t = [];
  for (const r in e) Py.call(e, r) && n(r, e[r]);
  return t.length ? t.join("&") : "";
  function n(r, i) {
    Array.isArray(i)
      ? i.forEach(o => n(r, o))
      : t.push([r, i].map(encodeURIComponent).join("="));
  }
}
function ch(e) {
  if (e === !1 || e === 0) return !1;
  if (e.connect || e.socket) return e;
  const t = Number(e);
  return isNaN(t) ? ch(lu.timeout) : { connect: t, socket: t };
}
function jy(e) {
  const t = {};
  for (const n in e) e[n] !== void 0 && (t[n] = e[n]);
  return t;
}
var $y = /^https?:\/\//i,
  by = e => {
    if (!$y.test(e.url)) throw new Error(`"${e.url}" is not a valid URL`);
  },
  Ry = yt({
    "node_modules/same-origin/url-parser.js"(e, t) {
      var n =
        /^(?:(?:(?:([^:\/#\?]+:)?(?:(?:\/\/)((?:((?:[^:@\/#\?]+)(?:\:(?:[^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/;
      t.exports = {
        regex: n,
        parse: function (r) {
          var i = n.exec(r);
          return i
            ? {
                protocol: (i[1] || "").toLowerCase() || void 0,
                hostname: (i[5] || "").toLowerCase() || void 0,
                port: i[6] || void 0,
              }
            : {};
        },
      };
    },
  }),
  Fy = yt({
    "node_modules/same-origin/index.js"(e, t) {
      var n = Ry();
      t.exports = function (r, i, o) {
        if (r === i) return !0;
        var l = n.parse(r, !1, !0),
          a = n.parse(i, !1, !0),
          u = l.port | 0 || (l.protocol === "https" ? 443 : 80),
          s = a.port | 0 || (a.protocol === "https" ? 443 : 80),
          d = {
            proto: l.protocol === a.protocol,
            hostname: l.hostname === a.hostname,
            port: u === s,
          };
        return d.proto && d.hostname && (d.port || o);
      };
    },
  }),
  Ay = yt({
    "node_modules/parse-headers/parse-headers.js"(e, t) {
      var n = function (i) {
          return i.replace(/^\s+|\s+$/g, "");
        },
        r = function (i) {
          return Object.prototype.toString.call(i) === "[object Array]";
        };
      t.exports = function (i) {
        if (!i) return {};
        for (
          var o = {},
            l = n(i).split(`
`),
            a = 0;
          a < l.length;
          a++
        ) {
          var u = l[a],
            s = u.indexOf(":"),
            d = n(u.slice(0, s)).toLowerCase(),
            p = n(u.slice(s + 1));
          typeof o[d] > "u"
            ? (o[d] = p)
            : r(o[d])
            ? o[d].push(p)
            : (o[d] = [o[d], p]);
        }
        return o;
      };
    },
  });
function Zl() {
  var e = Object.create(null),
    t = 0;
  function n(i) {
    var o = t++;
    return (
      (e[o] = i),
      function () {
        delete e[o];
      }
    );
  }
  function r(i) {
    for (var o in e) e[o](i);
  }
  return { publish: r, subscribe: n };
}
var Ly =
    e =>
    (n, r, ...i) => {
      const o = n === "onError";
      let l = r;
      for (let a = 0; a < e[n].length; a++) {
        const u = e[n][a];
        if (((l = u(l, ...i)), o && !l)) break;
      }
      return l;
    },
  Dy = _r(Fy()),
  My = _r(Ay());
function Or() {
  this.readyState = 0;
}
Or.prototype.open = function (e, t) {
  (this._method = e),
    (this._url = t),
    (this._resHeaders = ""),
    (this.readyState = 1),
    this.onreadystatechange();
};
Or.prototype.abort = function () {
  this._controller && this._controller.abort();
};
Or.prototype.getAllResponseHeaders = function () {
  return this._resHeaders;
};
Or.prototype.setRequestHeader = function (e, t) {
  (this._headers = this._headers || {}), (this._headers[e] = t);
};
Or.prototype.send = function (e) {
  const t = (this._controller =
      typeof AbortController == "function" && new AbortController()),
    n = this.responseType !== "arraybuffer",
    r = {
      method: this._method,
      headers: this._headers,
      signal: (t && t.signal) || void 0,
      body: e,
    };
  typeof document < "u" &&
    (r.credentials = this.withCredentials ? "include" : "omit"),
    fetch(this._url, r)
      .then(
        i => (
          i.headers.forEach((o, l) => {
            this._resHeaders += `${l}: ${o}\r
`;
          }),
          (this.status = i.status),
          (this.statusText = i.statusText),
          (this.readyState = 3),
          n ? i.text() : i.arrayBuffer()
        )
      )
      .then(i => {
        n ? (this.responseText = i) : (this.response = i),
          (this.readyState = 4),
          this.onreadystatechange();
      })
      .catch(i => {
        if (i.name === "AbortError") {
          this.onabort();
          return;
        }
        this.onerror(i);
      });
};
var uf = Or,
  zy = function () {},
  tn = typeof document > "u" || typeof window > "u" ? void 0 : window,
  sf = tn ? "xhr" : "fetch",
  vl = typeof XMLHttpRequest == "function" ? XMLHttpRequest : zy,
  Uy = "withCredentials" in new vl(),
  Hy = typeof XDomainRequest > "u" ? void 0 : XDomainRequest,
  fh = Uy ? vl : Hy;
tn || ((vl = uf), (fh = uf));
var By = (e, t) => {
    const n = e.options,
      r = e.applyMiddleware("finalizeOptions", n),
      i = {},
      o = tn && tn.location && !(0, Dy.default)(tn.location.href, r.url),
      l = e.applyMiddleware("interceptRequest", void 0, {
        adapter: sf,
        context: e,
      });
    if (l) {
      const y = setTimeout(t, 0, null, l);
      return { abort: () => clearTimeout(y) };
    }
    let a = o ? new fh() : new vl();
    const u = tn && tn.XDomainRequest && a instanceof tn.XDomainRequest,
      s = r.headers,
      d = r.timeout;
    let p = !1,
      v = !1,
      g = !1;
    (a.onerror = f),
      (a.ontimeout = f),
      (a.onabort = () => {
        c(!0), (p = !0);
      }),
      (a.onprogress = () => {});
    const C = u ? "onload" : "onreadystatechange";
    if (
      ((a[C] = () => {
        m(), !(p || (a.readyState !== 4 && !u)) && a.status !== 0 && w();
      }),
      a.open(r.method, r.url, !0),
      (a.withCredentials = !!r.withCredentials),
      s && a.setRequestHeader)
    )
      for (const y in s) s.hasOwnProperty(y) && a.setRequestHeader(y, s[y]);
    else if (s && u)
      throw new Error("Headers cannot be set on an XDomainRequest object");
    return (
      r.rawBody && (a.responseType = "arraybuffer"),
      e.applyMiddleware("onRequest", {
        options: r,
        adapter: sf,
        request: a,
        context: e,
      }),
      a.send(r.body || null),
      d && (i.connect = setTimeout(() => T("ETIMEDOUT"), d.connect)),
      { abort: k }
    );
    function k() {
      (p = !0), a && a.abort();
    }
    function T(y) {
      (g = !0), a.abort();
      const S = new Error(
        y === "ESOCKETTIMEDOUT"
          ? `Socket timed out on request to ${r.url}`
          : `Connection timed out on request to ${r.url}`
      );
      (S.code = y), e.channels.error.publish(S);
    }
    function m() {
      d && (c(), (i.socket = setTimeout(() => T("ESOCKETTIMEDOUT"), d.socket)));
    }
    function c(y) {
      (y || p || (a.readyState >= 2 && i.connect)) && clearTimeout(i.connect),
        i.socket && clearTimeout(i.socket);
    }
    function f(y) {
      if (v) return;
      c(!0), (v = !0), (a = null);
      const S =
        y || new Error(`Network error while attempting to reach ${r.url}`);
      (S.isNetworkError = !0), (S.request = r), t(S);
    }
    function h() {
      let y = a.status,
        S = a.statusText;
      if (u && y === void 0) y = 200;
      else {
        if (y > 12e3 && y < 12156) return f();
        (y = a.status === 1223 ? 204 : a.status),
          (S = a.status === 1223 ? "No Content" : S);
      }
      return {
        body: a.response || a.responseText,
        url: r.url,
        method: r.method,
        headers: u ? {} : (0, My.default)(a.getAllResponseHeaders()),
        statusCode: y,
        statusMessage: S,
      };
    }
    function w() {
      if (!(p || v || g)) {
        if (a.status === 0) {
          f(new Error("Unknown XHR error"));
          return;
        }
        c(), (v = !0), t(null, h());
      }
    }
  },
  qy = By,
  Vy = "default" in Zl ? Zl.default : Zl,
  Wy = ["request", "response", "progress", "error", "abort"],
  cf = [
    "processOptions",
    "validateOptions",
    "interceptRequest",
    "finalizeOptions",
    "onRequest",
    "onResponse",
    "onError",
    "onReturn",
    "onHeaders",
  ];
function dh(e = [], t = qy) {
  const n = [],
    r = cf.reduce((o, l) => ((o[l] = o[l] || []), o), {
      processOptions: [Iy],
      validateOptions: [by],
    });
  function i(o) {
    const l = Wy.reduce((C, k) => ((C[k] = Vy()), C), {}),
      a = Ly(r),
      u = a("processOptions", o);
    a("validateOptions", u);
    const s = { options: u, channels: l, applyMiddleware: a };
    let d = null;
    const p = l.request.subscribe(C => {
      d = t(C, (k, T) => g(k, T, C));
    });
    l.abort.subscribe(() => {
      p(), d && d.abort();
    });
    const v = a("onReturn", l, s);
    return v === l && l.request.publish(s), v;
    function g(C, k, T) {
      let m = C,
        c = k;
      if (!m)
        try {
          c = a("onResponse", k, T);
        } catch (f) {
          (c = null), (m = f);
        }
      (m = m && a("onError", m, T)),
        m ? l.error.publish(m) : c && l.response.publish(c);
    }
  }
  return (
    (i.use = function (l) {
      if (!l)
        throw new Error(
          "Tried to add middleware that resolved to falsey value"
        );
      if (typeof l == "function")
        throw new Error(
          "Tried to add middleware that was a function. It probably expects you to pass options to it."
        );
      if (l.onReturn && r.onReturn.length > 0)
        throw new Error(
          "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event"
        );
      return (
        cf.forEach(a => {
          l[a] && r[a].push(l[a]);
        }),
        n.push(l),
        i
      );
    }),
    (i.clone = function () {
      return dh(n);
    }),
    e.forEach(i.use),
    i
  );
}
function ff(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Qy(e) {
  var t, n;
  return ff(e) === !1
    ? !1
    : ((t = e.constructor),
      t === void 0
        ? !0
        : ((n = t.prototype),
          !(ff(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)));
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var Ky = yt({
    "node_modules/form-urlencoded/dist/form-urlencoded.js"(e, t) {
      var n =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (r) {
              return typeof r;
            }
          : function (r) {
              return r &&
                typeof Symbol == "function" &&
                r.constructor === Symbol &&
                r !== Symbol.prototype
                ? "symbol"
                : typeof r;
            };
      t.exports = function (r) {
        var i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = Boolean(i.sorted),
          l = Boolean(i.skipIndex),
          a = Boolean(i.ignorenull),
          u = function (k) {
            return String(k)
              .replace(
                /(?:[\0-\x1F"-&\+-\}\x7F-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
                encodeURIComponent
              )
              .replace(/ /g, "+")
              .replace(/[!'()~\*]/g, function (T) {
                return (
                  "%" + T.charCodeAt().toString(16).slice(-2).toUpperCase()
                );
              });
          },
          s = function (k) {
            var T =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : Object.keys(k);
            return o ? T.sort() : T;
          },
          d = function (k) {
            return k
              .filter(function (T) {
                return T;
              })
              .join("&");
          },
          p = function (k, T) {
            return d(
              s(T).map(function (m) {
                return g(k + "[" + m + "]", T[m]);
              })
            );
          },
          v = function (k, T) {
            return T.length
              ? d(
                  T.map(function (m, c) {
                    return g(l ? k + "[]" : k + "[" + c + "]", m);
                  })
                )
              : u(k + "[]");
          },
          g = function (k, T) {
            var m =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : typeof T > "u"
                  ? "undefined"
                  : n(T),
              c =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : null;
            return (
              T === c
                ? (c = a ? c : u(k) + "=" + c)
                : /string|number|boolean/.test(m)
                ? (c = u(k) + "=" + u(T))
                : Array.isArray(T)
                ? (c = v(k, T))
                : m === "object" && (c = p(k, T)),
              c
            );
          };
        return (
          r &&
          d(
            s(r).map(function (C) {
              return g(C, r[C]);
            })
          )
        );
      };
    },
  }),
  df = _r(Ky());
df.default.default || df.default;
var Xy = () => ({
    onRequest: e => {
      if (e.adapter !== "xhr") return;
      const t = e.request,
        n = e.context;
      "upload" in t &&
        "onprogress" in t.upload &&
        (t.upload.onprogress = r("upload")),
        "onprogress" in t && (t.onprogress = r("download"));
      function r(i) {
        return o => {
          const l = o.lengthComputable ? (o.loaded / o.total) * 100 : -1;
          n.channels.progress.publish({
            stage: i,
            percent: l,
            total: o.total,
            loaded: o.loaded,
            lengthComputable: o.lengthComputable,
          });
        };
      }
    },
  }),
  Gy = ["boolean", "string", "number"],
  Yy = e =>
    !!e.constructor &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e),
  Zy = () => ({
    processOptions: e => {
      const t = e.body;
      return !t ||
        !(
          !(typeof t.pipe == "function") &&
          !Yy(t) &&
          (Gy.indexOf(typeof t) !== -1 || Array.isArray(t) || Qy(t))
        )
        ? e
        : Object.assign({}, e, {
            body: JSON.stringify(e.body),
            headers: Object.assign({}, e.headers, {
              "Content-Type": "application/json",
            }),
          });
    },
  }),
  Jy = e => ({
    onResponse: t => {
      const n = t.headers["content-type"] || "",
        r = (e && e.force) || n.indexOf("application/json") !== -1;
      return !t.body || !n || !r
        ? t
        : Object.assign({}, t, { body: e0(t.body) });
    },
    processOptions: t =>
      Object.assign({}, t, {
        headers: Object.assign({ Accept: "application/json" }, t.headers),
      }),
  });
function e0(e) {
  try {
    return JSON.parse(e);
  } catch (t) {
    throw (
      ((t.message = `Failed to parsed response body as JSON: ${t.message}`), t)
    );
  }
}
var Vn;
typeof globalThis < "u"
  ? (Vn = globalThis)
  : typeof window < "u"
  ? (Vn = window)
  : typeof global < "u"
  ? (Vn = global)
  : typeof self < "u"
  ? (Vn = self)
  : (Vn = {});
var t0 = Vn,
  n0 = (e = {}) => {
    const t = e.implementation || t0.Observable;
    if (!t)
      throw new Error(
        "`Observable` is not available in global scope, and no implementation was passed"
      );
    return {
      onReturn: (n, r) =>
        new t(
          i => (
            n.error.subscribe(o => i.error(o)),
            n.progress.subscribe(o =>
              i.next(Object.assign({ type: "progress" }, o))
            ),
            n.response.subscribe(o => {
              i.next(Object.assign({ type: "response" }, o)), i.complete();
            }),
            n.request.publish(r),
            () => n.abort.publish()
          )
        ),
    };
  },
  ph = {};
Cy(ph, { default: () => hh });
function Jl(e) {
  this.message = e;
}
var hh,
  vh = Sy({
    "src/middleware/cancel/Cancel.js"() {
      (Jl.prototype.toString = function () {
        return `Cancel${this.message ? `: ${this.message}` : ""}`;
      }),
        (Jl.prototype.__CANCEL__ = !0),
        (hh = Jl);
    },
  });
vh();
var r0 = (vh(), ky(ph));
function pf(e) {
  if (typeof e != "function")
    throw new TypeError("executor must be a function.");
  let t = null;
  (this.promise = new Promise(n => {
    t = n;
  })),
    e(n => {
      this.reason || ((this.reason = new r0(n)), t(this.reason));
    });
}
pf.source = function () {
  let e;
  return {
    token: new pf(n => {
      e = n;
    }),
    cancel: e,
  };
};
var i0 = yt({
    "node_modules/ms/index.js"(e, t) {
      var n = 1e3,
        r = n * 60,
        i = r * 60,
        o = i * 24,
        l = o * 7,
        a = o * 365.25;
      t.exports = function (v, g) {
        g = g || {};
        var C = typeof v;
        if (C === "string" && v.length > 0) return u(v);
        if (C === "number" && isFinite(v)) return g.long ? d(v) : s(v);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(v)
        );
      };
      function u(v) {
        if (((v = String(v)), !(v.length > 100))) {
          var g =
            /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
              v
            );
          if (g) {
            var C = parseFloat(g[1]),
              k = (g[2] || "ms").toLowerCase();
            switch (k) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return C * a;
              case "weeks":
              case "week":
              case "w":
                return C * l;
              case "days":
              case "day":
              case "d":
                return C * o;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return C * i;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return C * r;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return C * n;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return C;
              default:
                return;
            }
          }
        }
      }
      function s(v) {
        var g = Math.abs(v);
        return g >= o
          ? Math.round(v / o) + "d"
          : g >= i
          ? Math.round(v / i) + "h"
          : g >= r
          ? Math.round(v / r) + "m"
          : g >= n
          ? Math.round(v / n) + "s"
          : v + "ms";
      }
      function d(v) {
        var g = Math.abs(v);
        return g >= o
          ? p(v, g, o, "day")
          : g >= i
          ? p(v, g, i, "hour")
          : g >= r
          ? p(v, g, r, "minute")
          : g >= n
          ? p(v, g, n, "second")
          : v + " ms";
      }
      function p(v, g, C, k) {
        var T = g >= C * 1.5;
        return Math.round(v / C) + " " + k + (T ? "s" : "");
      }
    },
  }),
  o0 = yt({
    "node_modules/debug/src/common.js"(e, t) {
      function n(r) {
        (o.debug = o),
          (o.default = o),
          (o.coerce = p),
          (o.disable = u),
          (o.enable = a),
          (o.enabled = s),
          (o.humanize = i0()),
          (o.destroy = v),
          Object.keys(r).forEach(g => {
            o[g] = r[g];
          }),
          (o.names = []),
          (o.skips = []),
          (o.formatters = {});
        function i(g) {
          let C = 0;
          for (let k = 0; k < g.length; k++)
            (C = (C << 5) - C + g.charCodeAt(k)), (C |= 0);
          return o.colors[Math.abs(C) % o.colors.length];
        }
        o.selectColor = i;
        function o(g) {
          let C,
            k = null,
            T,
            m;
          function c(...f) {
            if (!c.enabled) return;
            const h = c,
              w = Number(new Date()),
              y = w - (C || w);
            (h.diff = y),
              (h.prev = C),
              (h.curr = w),
              (C = w),
              (f[0] = o.coerce(f[0])),
              typeof f[0] != "string" && f.unshift("%O");
            let S = 0;
            (f[0] = f[0].replace(/%([a-zA-Z%])/g, (O, b) => {
              if (O === "%%") return "%";
              S++;
              const E = o.formatters[b];
              if (typeof E == "function") {
                const x = f[S];
                (O = E.call(h, x)), f.splice(S, 1), S--;
              }
              return O;
            })),
              o.formatArgs.call(h, f),
              (h.log || o.log).apply(h, f);
          }
          return (
            (c.namespace = g),
            (c.useColors = o.useColors()),
            (c.color = o.selectColor(g)),
            (c.extend = l),
            (c.destroy = o.destroy),
            Object.defineProperty(c, "enabled", {
              enumerable: !0,
              configurable: !1,
              get: () =>
                k !== null
                  ? k
                  : (T !== o.namespaces &&
                      ((T = o.namespaces), (m = o.enabled(g))),
                    m),
              set: f => {
                k = f;
              },
            }),
            typeof o.init == "function" && o.init(c),
            c
          );
        }
        function l(g, C) {
          const k = o(this.namespace + (typeof C > "u" ? ":" : C) + g);
          return (k.log = this.log), k;
        }
        function a(g) {
          o.save(g), (o.namespaces = g), (o.names = []), (o.skips = []);
          let C;
          const k = (typeof g == "string" ? g : "").split(/[\s,]+/),
            T = k.length;
          for (C = 0; C < T; C++)
            k[C] &&
              ((g = k[C].replace(/\*/g, ".*?")),
              g[0] === "-"
                ? o.skips.push(new RegExp("^" + g.slice(1) + "$"))
                : o.names.push(new RegExp("^" + g + "$")));
        }
        function u() {
          const g = [
            ...o.names.map(d),
            ...o.skips.map(d).map(C => "-" + C),
          ].join(",");
          return o.enable(""), g;
        }
        function s(g) {
          if (g[g.length - 1] === "*") return !0;
          let C, k;
          for (C = 0, k = o.skips.length; C < k; C++)
            if (o.skips[C].test(g)) return !1;
          for (C = 0, k = o.names.length; C < k; C++)
            if (o.names[C].test(g)) return !0;
          return !1;
        }
        function d(g) {
          return g
            .toString()
            .substring(2, g.toString().length - 2)
            .replace(/\.\*\?$/, "*");
        }
        function p(g) {
          return g instanceof Error ? g.stack || g.message : g;
        }
        function v() {
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          );
        }
        return o.enable(o.load()), o;
      }
      t.exports = n;
    },
  }),
  l0 = yt({
    "node_modules/debug/src/browser.js"(e, t) {
      (e.formatArgs = r),
        (e.save = i),
        (e.load = o),
        (e.useColors = n),
        (e.storage = l()),
        (e.destroy = (() => {
          let u = !1;
          return () => {
            u ||
              ((u = !0),
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              ));
          };
        })()),
        (e.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]);
      function n() {
        return typeof window < "u" &&
          window.process &&
          (window.process.type === "renderer" || window.process.__nwjs)
          ? !0
          : typeof navigator < "u" &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          ? !1
          : (typeof document < "u" &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            (typeof window < "u" &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            (typeof navigator < "u" &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            (typeof navigator < "u" &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
      }
      function r(u) {
        if (
          ((u[0] =
            (this.useColors ? "%c" : "") +
            this.namespace +
            (this.useColors ? " %c" : " ") +
            u[0] +
            (this.useColors ? "%c " : " ") +
            "+" +
            t.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        const s = "color: " + this.color;
        u.splice(1, 0, s, "color: inherit");
        let d = 0,
          p = 0;
        u[0].replace(/%[a-zA-Z%]/g, v => {
          v !== "%%" && (d++, v === "%c" && (p = d));
        }),
          u.splice(p, 0, s);
      }
      e.log = console.debug || console.log || (() => {});
      function i(u) {
        try {
          u ? e.storage.setItem("debug", u) : e.storage.removeItem("debug");
        } catch {}
      }
      function o() {
        let u;
        try {
          u = e.storage.getItem("debug");
        } catch {}
        return u;
      }
      function l() {
        try {
          return localStorage;
        } catch {}
      }
      t.exports = o0()(e);
      var { formatters: a } = t.exports;
      a.j = function (u) {
        try {
          return JSON.stringify(u);
        } catch (s) {
          return "[UnexpectedJSONParseError]: " + s.message;
        }
      };
    },
  });
_r(l0());
var a0 = yt({
    "node_modules/capture-stack-trace/index.js"(e, t) {
      t.exports =
        Error.captureStackTrace ||
        function (n) {
          var r = new Error();
          Object.defineProperty(n, "stack", {
            configurable: !0,
            get: function () {
              var o = r.stack;
              return Object.defineProperty(this, "stack", { value: o }), o;
            },
          });
        };
    },
  }),
  u0 = yt({
    "node_modules/create-error-class/index.js"(e, t) {
      var n = a0();
      function r(i, o) {
        (i.super_ = o),
          (i.prototype = Object.create(o.prototype, {
            constructor: {
              value: i,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          }));
      }
      t.exports = function (o, l) {
        if (typeof o != "string")
          throw new TypeError("Expected className to be a string");
        if (/[^0-9a-zA-Z_$]/.test(o))
          throw new Error("className contains invalid characters");
        l =
          l ||
          function (u) {
            this.message = u;
          };
        var a = function () {
          Object.defineProperty(this, "name", {
            configurable: !0,
            value: o,
            writable: !0,
          }),
            n(this, this.constructor),
            l.apply(this, arguments);
        };
        return r(a, Error), a;
      };
    },
  }),
  s0 = _r(u0());
(0, s0.default)("HttpError", function (e, t) {
  const n = e.url.length > 400 ? `${e.url.slice(0, 399)}…` : e.url;
  let r = `${e.method}-request to ${n} resulted in `;
  (r += `HTTP ${e.statusCode} ${e.statusMessage}`),
    (this.message = r.trim()),
    (this.response = e),
    (this.request = t.options);
});
var c0 = Object.create,
  mh = Object.defineProperty,
  f0 = Object.getOwnPropertyDescriptor,
  gh = Object.getOwnPropertyNames,
  d0 = Object.getPrototypeOf,
  p0 = Object.prototype.hasOwnProperty,
  Ss = (e, t) =>
    function () {
      return t || (0, e[gh(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  h0 = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of gh(t))
        !p0.call(e, i) &&
          i !== n &&
          mh(e, i, {
            get: () => t[i],
            enumerable: !(r = f0(t, i)) || r.enumerable,
          });
    return e;
  },
  yh = (e, t, n) => (
    (n = e != null ? c0(d0(e)) : {}),
    h0(
      t || !e || !e.__esModule
        ? mh(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  v0 = Ss({
    "node_modules/event-source-polyfill/src/eventsource.js"(e, t) {
      (function (n) {
        var r = n.setTimeout,
          i = n.clearTimeout,
          o = n.XMLHttpRequest,
          l = n.XDomainRequest,
          a = n.ActiveXObject,
          u = n.EventSource,
          s = n.document,
          d = n.Promise,
          p = n.fetch,
          v = n.Response,
          g = n.TextDecoder,
          C = n.TextEncoder,
          k = n.AbortController;
        if (
          (typeof window < "u" &&
            typeof s < "u" &&
            !("readyState" in s) &&
            s.body == null &&
            ((s.readyState = "loading"),
            window.addEventListener(
              "load",
              function (N) {
                s.readyState = "complete";
              },
              !1
            )),
          o == null &&
            a != null &&
            (o = function () {
              return new a("Microsoft.XMLHTTP");
            }),
          Object.create == null &&
            (Object.create = function (N) {
              function U() {}
              return (U.prototype = N), new U();
            }),
          Date.now ||
            (Date.now = function () {
              return new Date().getTime();
            }),
          k == null)
        ) {
          var T = p;
          (p = function (N, U) {
            var q = U.signal;
            return T(N, {
              headers: U.headers,
              credentials: U.credentials,
              cache: U.cache,
            }).then(function (D) {
              var K = D.body.getReader();
              return (
                (q._reader = K),
                q._aborted && q._reader.cancel(),
                {
                  status: D.status,
                  statusText: D.statusText,
                  headers: D.headers,
                  body: {
                    getReader: function () {
                      return K;
                    },
                  },
                }
              );
            });
          }),
            (k = function () {
              (this.signal = { _reader: null, _aborted: !1 }),
                (this.abort = function () {
                  this.signal._reader != null && this.signal._reader.cancel(),
                    (this.signal._aborted = !0);
                });
            });
        }
        function m() {
          (this.bitsNeeded = 0), (this.codePoint = 0);
        }
        m.prototype.decode = function (N) {
          function U(ne, ie, X) {
            if (X === 1) return ne >= 128 >> ie && ne << ie <= 2047;
            if (X === 2)
              return (
                (ne >= 2048 >> ie && ne << ie <= 55295) ||
                (ne >= 57344 >> ie && ne << ie <= 65535)
              );
            if (X === 3) return ne >= 65536 >> ie && ne << ie <= 1114111;
            throw new Error();
          }
          function q(ne, ie) {
            if (ne === 6 * 1) return ie >> 6 > 15 ? 3 : ie > 31 ? 2 : 1;
            if (ne === 6 * 2) return ie > 15 ? 3 : 2;
            if (ne === 6 * 3) return 3;
            throw new Error();
          }
          for (
            var D = 65533,
              K = "",
              V = this.bitsNeeded,
              Y = this.codePoint,
              ce = 0;
            ce < N.length;
            ce += 1
          ) {
            var J = N[ce];
            V !== 0 &&
              (J < 128 || J > 191 || !U((Y << 6) | (J & 63), V - 6, q(V, Y))) &&
              ((V = 0), (Y = D), (K += String.fromCharCode(Y))),
              V === 0
                ? (J >= 0 && J <= 127
                    ? ((V = 0), (Y = J))
                    : J >= 192 && J <= 223
                    ? ((V = 6 * 1), (Y = J & 31))
                    : J >= 224 && J <= 239
                    ? ((V = 6 * 2), (Y = J & 15))
                    : J >= 240 && J <= 247
                    ? ((V = 6 * 3), (Y = J & 7))
                    : ((V = 0), (Y = D)),
                  V !== 0 && !U(Y, V, q(V, Y)) && ((V = 0), (Y = D)))
                : ((V -= 6), (Y = (Y << 6) | (J & 63))),
              V === 0 &&
                (Y <= 65535
                  ? (K += String.fromCharCode(Y))
                  : ((K += String.fromCharCode(
                      55296 + ((Y - 65535 - 1) >> 10)
                    )),
                    (K += String.fromCharCode(
                      56320 + ((Y - 65535 - 1) & 1023)
                    ))));
          }
          return (this.bitsNeeded = V), (this.codePoint = Y), K;
        };
        var c = function () {
          try {
            return (
              new g().decode(new C().encode("test"), { stream: !0 }) === "test"
            );
          } catch (N) {
            console.debug(
              "TextDecoder does not support streaming option. Using polyfill instead: " +
                N
            );
          }
          return !1;
        };
        (g == null || C == null || !c()) && (g = m);
        var f = function () {};
        function h(N) {
          (this.withCredentials = !1),
            (this.readyState = 0),
            (this.status = 0),
            (this.statusText = ""),
            (this.responseText = ""),
            (this.onprogress = f),
            (this.onload = f),
            (this.onerror = f),
            (this.onreadystatechange = f),
            (this._contentType = ""),
            (this._xhr = N),
            (this._sendTimeout = 0),
            (this._abort = f);
        }
        (h.prototype.open = function (N, U) {
          this._abort(!0);
          var q = this,
            D = this._xhr,
            K = 1,
            V = 0;
          this._abort = function (X) {
            q._sendTimeout !== 0 && (i(q._sendTimeout), (q._sendTimeout = 0)),
              (K === 1 || K === 2 || K === 3) &&
                ((K = 4),
                (D.onload = f),
                (D.onerror = f),
                (D.onabort = f),
                (D.onprogress = f),
                (D.onreadystatechange = f),
                D.abort(),
                V !== 0 && (i(V), (V = 0)),
                X ||
                  ((q.readyState = 4),
                  q.onabort(null),
                  q.onreadystatechange())),
              (K = 0);
          };
          var Y = function () {
              if (K === 1) {
                var X = 0,
                  fe = "",
                  Lt = void 0;
                if ("contentType" in D)
                  (X = 200), (fe = "OK"), (Lt = D.contentType);
                else
                  try {
                    (X = D.status),
                      (fe = D.statusText),
                      (Lt = D.getResponseHeader("Content-Type"));
                  } catch {
                    (X = 0), (fe = ""), (Lt = void 0);
                  }
                X !== 0 &&
                  ((K = 2),
                  (q.readyState = 2),
                  (q.status = X),
                  (q.statusText = fe),
                  (q._contentType = Lt),
                  q.onreadystatechange());
              }
            },
            ce = function () {
              if ((Y(), K === 2 || K === 3)) {
                K = 3;
                var X = "";
                try {
                  X = D.responseText;
                } catch {}
                (q.readyState = 3), (q.responseText = X), q.onprogress();
              }
            },
            J = function (X, fe) {
              if (
                ((fe == null || fe.preventDefault == null) &&
                  (fe = { preventDefault: f }),
                ce(),
                K === 1 || K === 2 || K === 3)
              ) {
                if (
                  ((K = 4),
                  V !== 0 && (i(V), (V = 0)),
                  (q.readyState = 4),
                  X === "load")
                )
                  q.onload(fe);
                else if (X === "error") q.onerror(fe);
                else if (X === "abort") q.onabort(fe);
                else throw new TypeError();
                q.onreadystatechange();
              }
            },
            ne = function (X) {
              D != null &&
                (D.readyState === 4
                  ? (!("onload" in D) ||
                      !("onerror" in D) ||
                      !("onabort" in D)) &&
                    J(D.responseText === "" ? "error" : "load", X)
                  : D.readyState === 3
                  ? "onprogress" in D || ce()
                  : D.readyState === 2 && Y());
            },
            ie = function () {
              (V = r(function () {
                ie();
              }, 500)),
                D.readyState === 3 && ce();
            };
          "onload" in D &&
            (D.onload = function (X) {
              J("load", X);
            }),
            "onerror" in D &&
              (D.onerror = function (X) {
                J("error", X);
              }),
            "onabort" in D &&
              (D.onabort = function (X) {
                J("abort", X);
              }),
            "onprogress" in D && (D.onprogress = ce),
            "onreadystatechange" in D &&
              (D.onreadystatechange = function (X) {
                ne(X);
              }),
            ("contentType" in D || !("ontimeout" in o.prototype)) &&
              (U += (U.indexOf("?") === -1 ? "?" : "&") + "padding=true"),
            D.open(N, U, !0),
            "readyState" in D &&
              (V = r(function () {
                ie();
              }, 0));
        }),
          (h.prototype.abort = function () {
            this._abort(!1);
          }),
          (h.prototype.getResponseHeader = function (N) {
            return this._contentType;
          }),
          (h.prototype.setRequestHeader = function (N, U) {
            var q = this._xhr;
            "setRequestHeader" in q && q.setRequestHeader(N, U);
          }),
          (h.prototype.getAllResponseHeaders = function () {
            return (
              (this._xhr.getAllResponseHeaders != null &&
                this._xhr.getAllResponseHeaders()) ||
              ""
            );
          }),
          (h.prototype.send = function () {
            if (
              (!("ontimeout" in o.prototype) ||
                (!("sendAsBinary" in o.prototype) &&
                  !("mozAnon" in o.prototype))) &&
              s != null &&
              s.readyState != null &&
              s.readyState !== "complete"
            ) {
              var N = this;
              N._sendTimeout = r(function () {
                (N._sendTimeout = 0), N.send();
              }, 4);
              return;
            }
            var U = this._xhr;
            "withCredentials" in U &&
              (U.withCredentials = this.withCredentials);
            try {
              U.send(void 0);
            } catch (q) {
              throw q;
            }
          });
        function w(N) {
          return N.replace(/[A-Z]/g, function (U) {
            return String.fromCharCode(U.charCodeAt(0) + 32);
          });
        }
        function y(N) {
          for (
            var U = Object.create(null),
              q = N.split(`\r
`),
              D = 0;
            D < q.length;
            D += 1
          ) {
            var K = q[D],
              V = K.split(": "),
              Y = V.shift(),
              ce = V.join(": ");
            U[w(Y)] = ce;
          }
          this._map = U;
        }
        (y.prototype.get = function (N) {
          return this._map[w(N)];
        }),
          o != null && o.HEADERS_RECEIVED == null && (o.HEADERS_RECEIVED = 2);
        function S() {}
        S.prototype.open = function (N, U, q, D, K, V, Y) {
          N.open("GET", K);
          var ce = 0;
          (N.onprogress = function () {
            var ne = N.responseText,
              ie = ne.slice(ce);
            (ce += ie.length), q(ie);
          }),
            (N.onerror = function (ne) {
              ne.preventDefault(), D(new Error("NetworkError"));
            }),
            (N.onload = function () {
              D(null);
            }),
            (N.onabort = function () {
              D(null);
            }),
            (N.onreadystatechange = function () {
              if (N.readyState === o.HEADERS_RECEIVED) {
                var ne = N.status,
                  ie = N.statusText,
                  X = N.getResponseHeader("Content-Type"),
                  fe = N.getAllResponseHeaders();
                U(ne, ie, X, new y(fe));
              }
            }),
            (N.withCredentials = V);
          for (var J in Y)
            Object.prototype.hasOwnProperty.call(Y, J) &&
              N.setRequestHeader(J, Y[J]);
          return N.send(), N;
        };
        function _(N) {
          this._headers = N;
        }
        _.prototype.get = function (N) {
          return this._headers.get(N);
        };
        function O() {}
        O.prototype.open = function (N, U, q, D, K, V, Y) {
          var ce = null,
            J = new k(),
            ne = J.signal,
            ie = new g();
          return (
            p(K, {
              headers: Y,
              credentials: V ? "include" : "same-origin",
              signal: ne,
              cache: "no-store",
            })
              .then(function (X) {
                return (
                  (ce = X.body.getReader()),
                  U(
                    X.status,
                    X.statusText,
                    X.headers.get("Content-Type"),
                    new _(X.headers)
                  ),
                  new d(function (fe, Lt) {
                    var Ir = function () {
                      ce.read()
                        .then(function (Je) {
                          if (Je.done) fe(void 0);
                          else {
                            var Me = ie.decode(Je.value, { stream: !0 });
                            q(Me), Ir();
                          }
                        })
                        .catch(function (Je) {
                          Lt(Je);
                        });
                    };
                    Ir();
                  })
                );
              })
              .catch(function (X) {
                if (X.name !== "AbortError") return X;
              })
              .then(function (X) {
                D(X);
              }),
            {
              abort: function () {
                ce != null && ce.cancel(), J.abort();
              },
            }
          );
        };
        function b() {
          this._listeners = Object.create(null);
        }
        function E(N) {
          r(function () {
            throw N;
          }, 0);
        }
        (b.prototype.dispatchEvent = function (N) {
          N.target = this;
          var U = this._listeners[N.type];
          if (U != null)
            for (var q = U.length, D = 0; D < q; D += 1) {
              var K = U[D];
              try {
                typeof K.handleEvent == "function"
                  ? K.handleEvent(N)
                  : K.call(this, N);
              } catch (V) {
                E(V);
              }
            }
        }),
          (b.prototype.addEventListener = function (N, U) {
            N = String(N);
            var q = this._listeners,
              D = q[N];
            D == null && ((D = []), (q[N] = D));
            for (var K = !1, V = 0; V < D.length; V += 1)
              D[V] === U && (K = !0);
            K || D.push(U);
          }),
          (b.prototype.removeEventListener = function (N, U) {
            N = String(N);
            var q = this._listeners,
              D = q[N];
            if (D != null) {
              for (var K = [], V = 0; V < D.length; V += 1)
                D[V] !== U && K.push(D[V]);
              K.length === 0 ? delete q[N] : (q[N] = K);
            }
          });
        function x(N) {
          (this.type = N), (this.target = void 0);
        }
        function I(N, U) {
          x.call(this, N),
            (this.data = U.data),
            (this.lastEventId = U.lastEventId);
        }
        I.prototype = Object.create(x.prototype);
        function P(N, U) {
          x.call(this, N),
            (this.status = U.status),
            (this.statusText = U.statusText),
            (this.headers = U.headers);
        }
        P.prototype = Object.create(x.prototype);
        function $(N, U) {
          x.call(this, N), (this.error = U.error);
        }
        $.prototype = Object.create(x.prototype);
        var z = -1,
          Q = 0,
          j = 1,
          A = 2,
          L = -1,
          H = 0,
          W = 1,
          Ce = 2,
          te = 3,
          ve = /^text\/event\-stream(;.*)?$/i,
          me = 1e3,
          Pe = 18e6,
          At = function (N, U) {
            var q = N == null ? U : parseInt(N, 10);
            return q !== q && (q = U), ct(q);
          },
          ct = function (N) {
            return Math.min(Math.max(N, me), Pe);
          },
          Pt = function (N, U, q) {
            try {
              typeof U == "function" && U.call(N, q);
            } catch (D) {
              E(D);
            }
          };
        function be(N, U) {
          b.call(this),
            (U = U || {}),
            (this.onopen = void 0),
            (this.onmessage = void 0),
            (this.onerror = void 0),
            (this.url = void 0),
            (this.readyState = void 0),
            (this.withCredentials = void 0),
            (this.headers = void 0),
            (this._close = void 0),
            Av(this, N, U);
        }
        function El() {
          return (o != null && "withCredentials" in o.prototype) || l == null
            ? new o()
            : new l();
        }
        var Pr = p != null && v != null && "body" in v.prototype;
        function Av(N, U, q) {
          U = String(U);
          var D = Boolean(q.withCredentials),
            K = q.lastEventIdQueryParameterName || "lastEventId",
            V = ct(1e3),
            Y = At(q.heartbeatTimeout, 45e3),
            ce = "",
            J = V,
            ne = !1,
            ie = 0,
            X = q.headers || {},
            fe = q.Transport,
            Lt =
              Pr && fe == null ? void 0 : new h(fe != null ? new fe() : El()),
            Ir =
              fe != null && typeof fe != "string"
                ? new fe()
                : Lt == null
                ? new O()
                : new S(),
            Je = void 0,
            Me = 0,
            St = z,
            Mn = "",
            Ai = "",
            Dt = "",
            Li = "",
            ze = H,
            xl = 0,
            Cn = 0,
            Lv = function (_e, ke, et, tt) {
              if (St === Q)
                if (_e === 200 && et != null && ve.test(et)) {
                  (St = j), (ne = Date.now()), (J = V), (N.readyState = j);
                  var Ue = new P("open", {
                    status: _e,
                    statusText: ke,
                    headers: tt,
                  });
                  N.dispatchEvent(Ue), Pt(N, N.onopen, Ue);
                } else {
                  var Ie = "";
                  _e !== 200
                    ? (ke && (ke = ke.replace(/\s+/g, " ")),
                      (Ie =
                        "EventSource's response has a status " +
                        _e +
                        " " +
                        ke +
                        " that is not 200. Aborting the connection."))
                    : (Ie =
                        "EventSource's response has a Content-Type specifying an unsupported type: " +
                        (et == null ? "-" : et.replace(/\s+/g, " ")) +
                        ". Aborting the connection."),
                    _l();
                  var Ue = new P("error", {
                    status: _e,
                    statusText: ke,
                    headers: tt,
                  });
                  N.dispatchEvent(Ue), Pt(N, N.onerror, Ue), console.error(Ie);
                }
            },
            Dv = function (_e) {
              if (St === j) {
                for (var ke = -1, et = 0; et < _e.length; et += 1) {
                  var tt = _e.charCodeAt(et);
                  (tt ===
                    `
`.charCodeAt(0) ||
                    tt === "\r".charCodeAt(0)) &&
                    (ke = et);
                }
                var Ue = (ke !== -1 ? Li : "") + _e.slice(0, ke + 1);
                (Li = (ke === -1 ? Li : "") + _e.slice(ke + 1)),
                  _e !== "" && ((ne = Date.now()), (ie += _e.length));
                for (var Ie = 0; Ie < Ue.length; Ie += 1) {
                  var tt = Ue.charCodeAt(Ie);
                  if (
                    ze === L &&
                    tt ===
                      `
`.charCodeAt(0)
                  )
                    ze = H;
                  else if (
                    (ze === L && (ze = H),
                    tt === "\r".charCodeAt(0) ||
                      tt ===
                        `
`.charCodeAt(0))
                  ) {
                    if (ze !== H) {
                      ze === W && (Cn = Ie + 1);
                      var Mt = Ue.slice(xl, Cn - 1),
                        zt = Ue.slice(
                          Cn +
                            (Cn < Ie && Ue.charCodeAt(Cn) === " ".charCodeAt(0)
                              ? 1
                              : 0),
                          Ie
                        );
                      Mt === "data"
                        ? ((Mn += `
`),
                          (Mn += zt))
                        : Mt === "id"
                        ? (Ai = zt)
                        : Mt === "event"
                        ? (Dt = zt)
                        : Mt === "retry"
                        ? ((V = At(zt, V)), (J = V))
                        : Mt === "heartbeatTimeout" &&
                          ((Y = At(zt, Y)),
                          Me !== 0 &&
                            (i(Me),
                            (Me = r(function () {
                              Nr();
                            }, Y))));
                    }
                    if (ze === H) {
                      if (Mn !== "") {
                        (ce = Ai), Dt === "" && (Dt = "message");
                        var zn = new I(Dt, {
                          data: Mn.slice(1),
                          lastEventId: Ai,
                        });
                        if (
                          (N.dispatchEvent(zn),
                          Dt === "open"
                            ? Pt(N, N.onopen, zn)
                            : Dt === "message"
                            ? Pt(N, N.onmessage, zn)
                            : Dt === "error" && Pt(N, N.onerror, zn),
                          St === A)
                        )
                          return;
                      }
                      (Mn = ""), (Dt = "");
                    }
                    ze = tt === "\r".charCodeAt(0) ? L : H;
                  } else
                    ze === H && ((xl = Ie), (ze = W)),
                      ze === W
                        ? tt === ":".charCodeAt(0) && ((Cn = Ie + 1), (ze = Ce))
                        : ze === Ce && (ze = te);
                }
              }
            },
            Ys = function (_e) {
              if (St === j || St === Q) {
                (St = z),
                  Me !== 0 && (i(Me), (Me = 0)),
                  (Me = r(function () {
                    Nr();
                  }, J)),
                  (J = ct(Math.min(V * 16, J * 2))),
                  (N.readyState = Q);
                var ke = new $("error", { error: _e });
                N.dispatchEvent(ke),
                  Pt(N, N.onerror, ke),
                  _e != null && console.error(_e);
              }
            },
            _l = function () {
              (St = A),
                Je != null && (Je.abort(), (Je = void 0)),
                Me !== 0 && (i(Me), (Me = 0)),
                (N.readyState = A);
            },
            Nr = function () {
              if (((Me = 0), St !== z)) {
                if (!ne && Je != null)
                  Ys(
                    new Error(
                      "No activity within " +
                        Y +
                        " milliseconds. " +
                        (St === Q
                          ? "No response received."
                          : ie + " chars received.") +
                        " Reconnecting."
                    )
                  ),
                    Je != null && (Je.abort(), (Je = void 0));
                else {
                  var _e = Math.max((ne || Date.now()) + Y - Date.now(), 1);
                  (ne = !1),
                    (Me = r(function () {
                      Nr();
                    }, _e));
                }
                return;
              }
              (ne = !1),
                (ie = 0),
                (Me = r(function () {
                  Nr();
                }, Y)),
                (St = Q),
                (Mn = ""),
                (Dt = ""),
                (Ai = ce),
                (Li = ""),
                (xl = 0),
                (Cn = 0),
                (ze = H);
              var ke = U;
              if (
                U.slice(0, 5) !== "data:" &&
                U.slice(0, 5) !== "blob:" &&
                ce !== ""
              ) {
                var et = U.indexOf("?");
                (ke =
                  et === -1
                    ? U
                    : U.slice(0, et + 1) +
                      U.slice(et + 1).replace(
                        /(?:^|&)([^=&]*)(?:=[^&]*)?/g,
                        function (zt, zn) {
                          return zn === K ? "" : zt;
                        }
                      )),
                  (ke +=
                    (U.indexOf("?") === -1 ? "?" : "&") +
                    K +
                    "=" +
                    encodeURIComponent(ce));
              }
              var tt = N.withCredentials,
                Ue = {};
              Ue.Accept = "text/event-stream";
              var Ie = N.headers;
              if (Ie != null)
                for (var Mt in Ie)
                  Object.prototype.hasOwnProperty.call(Ie, Mt) &&
                    (Ue[Mt] = Ie[Mt]);
              try {
                Je = Ir.open(Lt, Lv, Dv, Ys, ke, tt, Ue);
              } catch (zt) {
                throw (_l(), zt);
              }
            };
          (N.url = U),
            (N.readyState = Q),
            (N.withCredentials = D),
            (N.headers = X),
            (N._close = _l),
            Nr();
        }
        (be.prototype = Object.create(b.prototype)),
          (be.prototype.CONNECTING = Q),
          (be.prototype.OPEN = j),
          (be.prototype.CLOSED = A),
          (be.prototype.close = function () {
            this._close();
          }),
          (be.CONNECTING = Q),
          (be.OPEN = j),
          (be.CLOSED = A),
          (be.prototype.withCredentials = void 0);
        var Gs = u;
        o != null &&
          (u == null || !("withCredentials" in u.prototype)) &&
          (Gs = be),
          (function (N) {
            if (typeof t == "object" && typeof t.exports == "object") {
              var U = N(e);
              U !== void 0 && (t.exports = U);
            } else
              typeof define == "function" && define.amd
                ? define(["exports"], N)
                : N(n);
          })(function (N) {
            (N.EventSourcePolyfill = be),
              (N.NativeEventSource = u),
              (N.EventSource = Gs);
          });
      })(
        typeof globalThis > "u"
          ? typeof window < "u"
            ? window
            : typeof self < "u"
            ? self
            : e
          : globalThis
      );
    },
  }),
  m0 = Ss({
    "node_modules/@sanity/eventsource/browser.js"(e, t) {
      var n = v0();
      t.exports = n.EventSourcePolyfill;
    },
  }),
  g0 = Ss({
    "node_modules/make-error/index.js"(e, t) {
      var n = typeof Reflect < "u" ? Reflect.construct : void 0,
        r = Object.defineProperty,
        i = Error.captureStackTrace;
      i === void 0 &&
        (i = function (s) {
          var d = new Error();
          r(s, "stack", {
            configurable: !0,
            get: function () {
              var v = d.stack;
              return (
                r(this, "stack", { configurable: !0, value: v, writable: !0 }),
                v
              );
            },
            set: function (v) {
              r(s, "stack", { configurable: !0, value: v, writable: !0 });
            },
          });
        });
      function o(u) {
        u !== void 0 &&
          r(this, "message", { configurable: !0, value: u, writable: !0 });
        var s = this.constructor.name;
        s !== void 0 &&
          s !== this.name &&
          r(this, "name", { configurable: !0, value: s, writable: !0 }),
          i(this, this.constructor);
      }
      o.prototype = Object.create(Error.prototype, {
        constructor: { configurable: !0, value: o, writable: !0 },
      });
      var l = (function () {
        function u(d, p) {
          return r(d, "name", { configurable: !0, value: p });
        }
        try {
          var s = function () {};
          if ((u(s, "foo"), s.name === "foo")) return u;
        } catch {}
      })();
      function a(u, s) {
        if (s == null || s === Error) s = o;
        else if (typeof s != "function")
          throw new TypeError("super_ should be a function");
        var d;
        if (typeof u == "string")
          (d = u),
            (u =
              n !== void 0
                ? function () {
                    return n(s, arguments, this.constructor);
                  }
                : function () {
                    s.apply(this, arguments);
                  }),
            l !== void 0 && (l(u, d), (d = void 0));
        else if (typeof u != "function")
          throw new TypeError(
            "constructor should be either a string or a function"
          );
        u.super_ = u.super = s;
        var p = { constructor: { configurable: !0, value: u, writable: !0 } };
        return (
          d !== void 0 &&
            (p.name = { configurable: !0, value: d, writable: !0 }),
          (u.prototype = Object.create(s.prototype, p)),
          u
        );
      }
      (e = t.exports = a), (e.BaseError = o);
    },
  });
function wh(e) {
  if (typeof e == "string" || Array.isArray(e)) return { id: e };
  if (e && e.query)
    return "params" in e
      ? { query: e.query, params: e.params }
      : { query: e.query };
  const t = [
    "* Document ID (<docId>)",
    "* Array of document IDs",
    "* Object containing `query`",
  ].join(`
`);
  throw new Error(`Unknown selection - must be one of:

${t}`);
}
var hf = ["image", "file"],
  vf = ["before", "after", "replace"],
  Sh = e => {
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e))
      throw new Error(
        "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
      );
  },
  y0 = e => {
    if (!/^[-a-z0-9]+$/i.test(e))
      throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
  },
  w0 = e => {
    if (hf.indexOf(e) === -1)
      throw new Error(
        `Invalid asset type: ${e}. Must be one of ${hf.join(", ")}`
      );
  },
  pr = (e, t) => {
    if (t === null || typeof t != "object" || Array.isArray(t))
      throw new Error(`${e}() takes an object of properties`);
  },
  Ch = (e, t) => {
    if (typeof t != "string" || !/^[a-z0-9_.-]+$/i.test(t))
      throw new Error(`${e}(): "${t}" is not a valid document ID`);
  },
  Wo = (e, t) => {
    if (!t._id)
      throw new Error(
        `${e}() requires that the document contains an ID ("_id" property)`
      );
    Ch(e, t._id);
  },
  S0 = (e, t, n) => {
    const r = "insert(at, selector, items)";
    if (vf.indexOf(e) === -1) {
      const i = vf.map(o => `"${o}"`).join(", ");
      throw new Error(`${r} takes an "at"-argument which is one of: ${i}`);
    }
    if (typeof t != "string")
      throw new Error(
        `${r} takes a "selector"-argument which must be a string`
      );
    if (!Array.isArray(n))
      throw new Error(`${r} takes an "items"-argument which must be an array`);
  },
  So = e => {
    if (!e.dataset)
      throw new Error("`dataset` must be provided to perform queries");
    return e.dataset || "";
  },
  kh = e => {
    if (typeof e != "string" || !/^[a-z0-9._-]{1,75}$/i.test(e))
      throw new Error(
        "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
      );
    return e;
  };
function au(e, t = {}, n = null) {
  (this.selection = e),
    (this.operations = Object.assign({}, t)),
    (this.client = n);
}
Object.assign(au.prototype, {
  clone() {
    return new au(
      this.selection,
      Object.assign({}, this.operations),
      this.client
    );
  },
  set(e) {
    return this.assign("set", e);
  },
  diffMatchPatch(e) {
    return pr("diffMatchPatch", e), this.assign("diffMatchPatch", e);
  },
  unset(e) {
    if (!Array.isArray(e))
      throw new Error(
        "unset(attrs) takes an array of attributes to unset, non-array given"
      );
    return (
      (this.operations = Object.assign({}, this.operations, { unset: e })), this
    );
  },
  setIfMissing(e) {
    return this.assign("setIfMissing", e);
  },
  replace(e) {
    return pr("replace", e), this._set("set", { $: e });
  },
  inc(e) {
    return this.assign("inc", e);
  },
  dec(e) {
    return this.assign("dec", e);
  },
  insert(e, t, n) {
    return S0(e, t, n), this.assign("insert", { [e]: t, items: n });
  },
  append(e, t) {
    return this.insert("after", `${e}[-1]`, t);
  },
  prepend(e, t) {
    return this.insert("before", `${e}[0]`, t);
  },
  splice(e, t, n, r) {
    const i = typeof n > "u" || n === -1,
      o = t < 0 ? t - 1 : t,
      l = i ? -1 : Math.max(0, t + n),
      a = o < 0 && l >= 0 ? "" : l,
      u = `${e}[${o}:${a}]`;
    return this.insert("replace", u, r || []);
  },
  ifRevisionId(e) {
    return (this.operations.ifRevisionID = e), this;
  },
  serialize() {
    return Object.assign(wh(this.selection), this.operations);
  },
  toJSON() {
    return this.serialize();
  },
  commit(e = {}) {
    if (!this.client)
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const t = typeof this.selection == "string",
      n = Object.assign({ returnFirst: t, returnDocuments: !0 }, e);
    return this.client.mutate({ patch: this.serialize() }, n);
  },
  reset() {
    return (this.operations = {}), this;
  },
  _set(e, t) {
    return this.assign(e, t, !1);
  },
  assign(e, t, n = !0) {
    return (
      pr(e, t),
      (this.operations = Object.assign({}, this.operations, {
        [e]: Object.assign({}, (n && this.operations[e]) || {}, t),
      })),
      this
    );
  },
});
var hr = au,
  C0 = { returnDocuments: !1 };
function uu(e = [], t, n) {
  (this.trxId = n), (this.operations = e), (this.client = t);
}
Object.assign(uu.prototype, {
  clone() {
    return new uu(this.operations.slice(0), this.client, this.trxId);
  },
  create(e) {
    return pr("create", e), this._add({ create: e });
  },
  createIfNotExists(e) {
    const t = "createIfNotExists";
    return pr(t, e), Wo(t, e), this._add({ [t]: e });
  },
  createOrReplace(e) {
    const t = "createOrReplace";
    return pr(t, e), Wo(t, e), this._add({ [t]: e });
  },
  delete(e) {
    return Ch("delete", e), this._add({ delete: { id: e } });
  },
  patch(e, t) {
    const n = typeof t == "function";
    if (e instanceof hr) return this._add({ patch: e.serialize() });
    if (n) {
      const i = t(new hr(e, {}, this.client));
      if (!(i instanceof hr))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: i.serialize() });
    }
    return this._add({ patch: Object.assign({ id: e }, t) });
  },
  transactionId(e) {
    return e ? ((this.trxId = e), this) : this.trxId;
  },
  serialize() {
    return this.operations.slice();
  },
  toJSON() {
    return this.serialize();
  },
  commit(e) {
    if (!this.client)
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return this.client.mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, C0, e || {})
    );
  },
  reset() {
    return (this.operations = []), this;
  },
  _add(e) {
    return this.operations.push(e), this;
  },
});
var su = uu,
  Hn = encodeURIComponent,
  Eh = ({ query: e, params: t = {}, options: n = {} }) => {
    const { tag: r, ...i } = n,
      o = `query=${Hn(e)}`,
      l = r ? `?tag=${Hn(r)}&${o}` : `?${o}`,
      a = Object.keys(t).reduce(
        (u, s) => `${u}&${Hn(`$${s}`)}=${Hn(JSON.stringify(t[s]))}`,
        l
      );
    return Object.keys(i).reduce(
      (u, s) => (n[s] ? `${u}&${Hn(s)}=${Hn(n[s])}` : u),
      a
    );
  },
  k0 = yh(m0()),
  E0 = (e, t) =>
    t.reduce((n, r) => (typeof e[r] > "u" || (n[r] = e[r]), n), {}),
  x0 = (e, t) =>
    Object.keys(t)
      .concat(Object.keys(e))
      .reduce((n, r) => ((n[r] = typeof e[r] > "u" ? t[r] : e[r]), n), {}),
  cu = function (e, t) {
    return (
      (cu =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        }),
      cu(e, t)
    );
  };
function Cs(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  cu(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function mf(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function fu(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e),
    i,
    o = [],
    l;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) o.push(i.value);
  } catch (a) {
    l = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (l) throw l.error;
    }
  }
  return o;
}
function du(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
function Rt(e) {
  return typeof e == "function";
}
function xh(e) {
  var t = function (r) {
      Error.call(r), (r.stack = new Error().stack);
    },
    n = e(t);
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var ea = xh(function (e) {
  return function (n) {
    e(this),
      (this.message = n
        ? n.length +
          ` errors occurred during unsubscription:
` +
          n.map(function (r, i) {
            return i + 1 + ") " + r.toString();
          }).join(`
  `)
        : ""),
      (this.name = "UnsubscriptionError"),
      (this.errors = n);
  };
});
function gf(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var ks = (function () {
  function e(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  return (
    (e.prototype.unsubscribe = function () {
      var t, n, r, i, o;
      if (!this.closed) {
        this.closed = !0;
        var l = this._parentage;
        if (l)
          if (((this._parentage = null), Array.isArray(l)))
            try {
              for (var a = mf(l), u = a.next(); !u.done; u = a.next()) {
                var s = u.value;
                s.remove(this);
              }
            } catch (k) {
              t = { error: k };
            } finally {
              try {
                u && !u.done && (n = a.return) && n.call(a);
              } finally {
                if (t) throw t.error;
              }
            }
          else l.remove(this);
        var d = this.initialTeardown;
        if (Rt(d))
          try {
            d();
          } catch (k) {
            o = k instanceof ea ? k.errors : [k];
          }
        var p = this._finalizers;
        if (p) {
          this._finalizers = null;
          try {
            for (var v = mf(p), g = v.next(); !g.done; g = v.next()) {
              var C = g.value;
              try {
                yf(C);
              } catch (k) {
                (o = o ?? []),
                  k instanceof ea
                    ? (o = du(du([], fu(o)), fu(k.errors)))
                    : o.push(k);
              }
            }
          } catch (k) {
            r = { error: k };
          } finally {
            try {
              g && !g.done && (i = v.return) && i.call(v);
            } finally {
              if (r) throw r.error;
            }
          }
        }
        if (o) throw new ea(o);
      }
    }),
    (e.prototype.add = function (t) {
      var n;
      if (t && t !== this)
        if (this.closed) yf(t);
        else {
          if (t instanceof e) {
            if (t.closed || t._hasParent(this)) return;
            t._addParent(this);
          }
          (this._finalizers =
            (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
        }
    }),
    (e.prototype._hasParent = function (t) {
      var n = this._parentage;
      return n === t || (Array.isArray(n) && n.includes(t));
    }),
    (e.prototype._addParent = function (t) {
      var n = this._parentage;
      this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
    }),
    (e.prototype._removeParent = function (t) {
      var n = this._parentage;
      n === t ? (this._parentage = null) : Array.isArray(n) && gf(n, t);
    }),
    (e.prototype.remove = function (t) {
      var n = this._finalizers;
      n && gf(n, t), t instanceof e && t._removeParent(this);
    }),
    (e.EMPTY = (function () {
      var t = new e();
      return (t.closed = !0), t;
    })()),
    e
  );
})();
ks.EMPTY;
function _h(e) {
  return (
    e instanceof ks ||
    (e && "closed" in e && Rt(e.remove) && Rt(e.add) && Rt(e.unsubscribe))
  );
}
function yf(e) {
  Rt(e) ? e() : e.unsubscribe();
}
var Oh = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: !1,
    useDeprecatedNextContext: !1,
  },
  _0 = {
    setTimeout: function (e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      return setTimeout.apply(void 0, du([e, t], fu(n)));
    },
    clearTimeout: function (e) {
      return clearTimeout(e);
    },
    delegate: void 0,
  };
function O0(e) {
  _0.setTimeout(function () {
    throw e;
  });
}
function wf() {}
function T0(e) {
  e();
}
var Es = (function (e) {
    Cs(t, e);
    function t(n) {
      var r = e.call(this) || this;
      return (
        (r.isStopped = !1),
        n ? ((r.destination = n), _h(n) && n.add(r)) : (r.destination = j0),
        r
      );
    }
    return (
      (t.create = function (n, r, i) {
        return new pu(n, r, i);
      }),
      (t.prototype.next = function (n) {
        this.isStopped || this._next(n);
      }),
      (t.prototype.error = function (n) {
        this.isStopped || ((this.isStopped = !0), this._error(n));
      }),
      (t.prototype.complete = function () {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }),
      (t.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          e.prototype.unsubscribe.call(this),
          (this.destination = null));
      }),
      (t.prototype._next = function (n) {
        this.destination.next(n);
      }),
      (t.prototype._error = function (n) {
        try {
          this.destination.error(n);
        } finally {
          this.unsubscribe();
        }
      }),
      (t.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }),
      t
    );
  })(ks),
  P0 = Function.prototype.bind;
function ta(e, t) {
  return P0.call(e, t);
}
var I0 = (function () {
    function e(t) {
      this.partialObserver = t;
    }
    return (
      (e.prototype.next = function (t) {
        var n = this.partialObserver;
        if (n.next)
          try {
            n.next(t);
          } catch (r) {
            to(r);
          }
      }),
      (e.prototype.error = function (t) {
        var n = this.partialObserver;
        if (n.error)
          try {
            n.error(t);
          } catch (r) {
            to(r);
          }
        else to(t);
      }),
      (e.prototype.complete = function () {
        var t = this.partialObserver;
        if (t.complete)
          try {
            t.complete();
          } catch (n) {
            to(n);
          }
      }),
      e
    );
  })(),
  pu = (function (e) {
    Cs(t, e);
    function t(n, r, i) {
      var o = e.call(this) || this,
        l;
      if (Rt(n) || !n)
        l = { next: n ?? void 0, error: r ?? void 0, complete: i ?? void 0 };
      else {
        var a;
        o && Oh.useDeprecatedNextContext
          ? ((a = Object.create(n)),
            (a.unsubscribe = function () {
              return o.unsubscribe();
            }),
            (l = {
              next: n.next && ta(n.next, a),
              error: n.error && ta(n.error, a),
              complete: n.complete && ta(n.complete, a),
            }))
          : (l = n);
      }
      return (o.destination = new I0(l)), o;
    }
    return t;
  })(Es);
function to(e) {
  O0(e);
}
function N0(e) {
  throw e;
}
var j0 = { closed: !0, next: wf, error: N0, complete: wf },
  $0 = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })();
function b0(e) {
  return e;
}
function R0(e) {
  return e.length === 0
    ? b0
    : e.length === 1
    ? e[0]
    : function (n) {
        return e.reduce(function (r, i) {
          return i(r);
        }, n);
      };
}
var Qo = (function () {
  function e(t) {
    t && (this._subscribe = t);
  }
  return (
    (e.prototype.lift = function (t) {
      var n = new e();
      return (n.source = this), (n.operator = t), n;
    }),
    (e.prototype.subscribe = function (t, n, r) {
      var i = this,
        o = A0(t) ? t : new pu(t, n, r);
      return (
        T0(function () {
          var l = i,
            a = l.operator,
            u = l.source;
          o.add(a ? a.call(o, u) : u ? i._subscribe(o) : i._trySubscribe(o));
        }),
        o
      );
    }),
    (e.prototype._trySubscribe = function (t) {
      try {
        return this._subscribe(t);
      } catch (n) {
        t.error(n);
      }
    }),
    (e.prototype.forEach = function (t, n) {
      var r = this;
      return (
        (n = Sf(n)),
        new n(function (i, o) {
          var l = new pu({
            next: function (a) {
              try {
                t(a);
              } catch (u) {
                o(u), l.unsubscribe();
              }
            },
            error: o,
            complete: i,
          });
          r.subscribe(l);
        })
      );
    }),
    (e.prototype._subscribe = function (t) {
      var n;
      return (n = this.source) === null || n === void 0
        ? void 0
        : n.subscribe(t);
    }),
    (e.prototype[$0] = function () {
      return this;
    }),
    (e.prototype.pipe = function () {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      return R0(t)(this);
    }),
    (e.prototype.toPromise = function (t) {
      var n = this;
      return (
        (t = Sf(t)),
        new t(function (r, i) {
          var o;
          n.subscribe(
            function (l) {
              return (o = l);
            },
            function (l) {
              return i(l);
            },
            function () {
              return r(o);
            }
          );
        })
      );
    }),
    (e.create = function (t) {
      return new e(t);
    }),
    e
  );
})();
function Sf(e) {
  var t;
  return (t = e ?? Oh.Promise) !== null && t !== void 0 ? t : Promise;
}
function F0(e) {
  return e && Rt(e.next) && Rt(e.error) && Rt(e.complete);
}
function A0(e) {
  return (e && e instanceof Es) || (F0(e) && _h(e));
}
function L0(e) {
  return Rt(e == null ? void 0 : e.lift);
}
function Th(e) {
  return function (t) {
    if (L0(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Ph(e, t, n, r, i) {
  return new D0(e, t, n, r, i);
}
var D0 = (function (e) {
    Cs(t, e);
    function t(n, r, i, o, l, a) {
      var u = e.call(this, n) || this;
      return (
        (u.onFinalize = l),
        (u.shouldUnsubscribe = a),
        (u._next = r
          ? function (s) {
              try {
                r(s);
              } catch (d) {
                n.error(d);
              }
            }
          : e.prototype._next),
        (u._error = o
          ? function (s) {
              try {
                o(s);
              } catch (d) {
                n.error(d);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._error),
        (u._complete = i
          ? function () {
              try {
                i();
              } catch (s) {
                n.error(s);
              } finally {
                this.unsubscribe();
              }
            }
          : e.prototype._complete),
        u
      );
    }
    return (
      (t.prototype.unsubscribe = function () {
        var n;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var r = this.closed;
          e.prototype.unsubscribe.call(this),
            !r &&
              ((n = this.onFinalize) === null || n === void 0 || n.call(this));
        }
      }),
      t
    );
  })(Es),
  M0 = xh(function (e) {
    return function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    };
  });
function lr(e, t) {
  var n = typeof t == "object";
  return new Promise(function (r, i) {
    var o = !1,
      l;
    e.subscribe({
      next: function (a) {
        (l = a), (o = !0);
      },
      error: i,
      complete: function () {
        o ? r(l) : n ? r(t.defaultValue) : i(new M0());
      },
    });
  });
}
function _n(e, t) {
  return Th(function (n, r) {
    var i = 0;
    n.subscribe(
      Ph(r, function (o) {
        r.next(e.call(t, o, i++));
      })
    );
  });
}
function ri(e, t) {
  return Th(function (n, r) {
    var i = 0;
    n.subscribe(
      Ph(r, function (o) {
        return e.call(t, o, i++) && r.next(o);
      })
    );
  });
}
var z0 = 16e3 - 1200,
  Cf = k0.default,
  U0 = [
    "includePreviousRevision",
    "includeResult",
    "visibility",
    "effectFormat",
    "tag",
  ],
  H0 = { includeResult: !0 };
function B0(e, t, n = {}) {
  const {
      url: r,
      token: i,
      withCredentials: o,
      requestTagPrefix: l,
    } = this.clientConfig,
    a = n.tag && l ? [l, n.tag].join(".") : n.tag,
    u = { ...x0(n, H0), tag: a },
    s = E0(u, U0),
    d = Eh({ query: e, params: t, options: s, tag: a }),
    p = `${r}${this.getDataUrl("listen", d)}`;
  if (p.length > z0)
    return new Qo(k => k.error(new Error("Query too large for listener")));
  const v = u.events ? u.events : ["mutation"],
    g = v.indexOf("reconnect") !== -1,
    C = {};
  return (
    (i || o) && (C.withCredentials = !0),
    i && (C.headers = { Authorization: `Bearer ${i}` }),
    new Qo(k => {
      let T = O(),
        m,
        c = !1;
      function f() {
        c ||
          (_(),
          !c &&
            T.readyState === Cf.CLOSED &&
            (S(), clearTimeout(m), (m = setTimeout(b, 100))));
      }
      function h(x) {
        k.error(q0(x));
      }
      function w(x) {
        const I = Ih(x);
        return I instanceof Error ? k.error(I) : k.next(I);
      }
      function y(x) {
        (c = !0), S(), k.complete();
      }
      function S() {
        T.removeEventListener("error", f, !1),
          T.removeEventListener("channelError", h, !1),
          T.removeEventListener("disconnect", y, !1),
          v.forEach(x => T.removeEventListener(x, w, !1)),
          T.close();
      }
      function _() {
        g && k.next({ type: "reconnect" });
      }
      function O() {
        const x = new Cf(p, C);
        return (
          x.addEventListener("error", f, !1),
          x.addEventListener("channelError", h, !1),
          x.addEventListener("disconnect", y, !1),
          v.forEach(I => x.addEventListener(I, w, !1)),
          x
        );
      }
      function b() {
        T = O();
      }
      function E() {
        (c = !0), S();
      }
      return E;
    })
  );
}
function Ih(e) {
  try {
    const t = (e.data && JSON.parse(e.data)) || {};
    return Object.assign({ type: e.type }, t);
  } catch (t) {
    return t;
  }
}
function q0(e) {
  if (e instanceof Error) return e;
  const t = Ih(e);
  return t instanceof Error ? t : new Error(V0(t));
}
function V0(e) {
  return e.error
    ? e.error.description
      ? e.error.description
      : typeof e.error == "string"
      ? e.error
      : JSON.stringify(e.error, null, 2)
    : e.message || "Unknown listener error";
}
var W0 = (e, t) => (e === !1 ? void 0 : typeof e > "u" ? t : e),
  Q0 = (e = {}) => ({
    dryRun: e.dryRun,
    returnIds: !0,
    returnDocuments: W0(e.returnDocuments, !0),
    visibility: e.visibility || "sync",
    autoGenerateArrayKeys: e.autoGenerateArrayKeys,
    skipCrossDatasetReferenceValidation: e.skipCrossDatasetReferenceValidation,
  }),
  na = e => e.type === "response",
  K0 = e => e.body,
  X0 = (e, t) => e.reduce((n, r) => ((n[t(r)] = r), n), Object.create(null)),
  G0 = 11264,
  Y0 = {
    listen: B0,
    getDataUrl(e, t) {
      const n = this.clientConfig,
        r = So(n),
        i = `/${e}/${r}`;
      return `/data${t ? `${i}/${t}` : i}`.replace(/\/($|\?)/, "$1");
    },
    fetch(e, t, n = {}) {
      const r = n.filterResponse === !1 ? o => o : o => o.result,
        i = this._dataRequest("query", { query: e, params: t }, n).pipe(_n(r));
      return this.isPromiseAPI() ? lr(i) : i;
    },
    getDocument(e, t = {}) {
      const n = { uri: this.getDataUrl("doc", e), json: !0, tag: t.tag },
        r = this._requestObservable(n).pipe(
          ri(na),
          _n(i => i.body.documents && i.body.documents[0])
        );
      return this.isPromiseAPI() ? lr(r) : r;
    },
    getDocuments(e, t = {}) {
      const n = {
          uri: this.getDataUrl("doc", e.join(",")),
          json: !0,
          tag: t.tag,
        },
        r = this._requestObservable(n).pipe(
          ri(na),
          _n(i => {
            const o = X0(i.body.documents || [], l => l._id);
            return e.map(l => o[l] || null);
          })
        );
      return this.isPromiseAPI() ? lr(r) : r;
    },
    create(e, t) {
      return this._create(e, "create", t);
    },
    createIfNotExists(e, t) {
      return (
        Wo("createIfNotExists", e), this._create(e, "createIfNotExists", t)
      );
    },
    createOrReplace(e, t) {
      return Wo("createOrReplace", e), this._create(e, "createOrReplace", t);
    },
    patch(e, t) {
      return new hr(e, t, this);
    },
    delete(e, t) {
      return this.dataRequest("mutate", { mutations: [{ delete: wh(e) }] }, t);
    },
    mutate(e, t) {
      const n = e instanceof hr || e instanceof su ? e.serialize() : e,
        r = Array.isArray(n) ? n : [n],
        i = t && t.transactionId;
      return this.dataRequest("mutate", { mutations: r, transactionId: i }, t);
    },
    transaction(e) {
      return new su(e, this);
    },
    dataRequest(e, t, n = {}) {
      const r = this._dataRequest(e, t, n);
      return this.isPromiseAPI() ? lr(r) : r;
    },
    _dataRequest(e, t, n = {}) {
      const r = e === "mutate",
        i = e === "query",
        o = !r && Eh(t),
        l = !r && o.length < G0,
        a = l ? o : "",
        u = n.returnFirst,
        { timeout: s, token: d, tag: p, headers: v } = n,
        g = this.getDataUrl(e, a),
        C = {
          method: l ? "GET" : "POST",
          uri: g,
          json: !0,
          body: l ? void 0 : t,
          query: r && Q0(n),
          timeout: s,
          headers: v,
          token: d,
          tag: p,
          canUseCdn: i,
        };
      return this._requestObservable(C).pipe(
        ri(na),
        _n(K0),
        _n(k => {
          if (!r) return k;
          const T = k.results || [];
          if (n.returnDocuments)
            return u ? T[0] && T[0].document : T.map(f => f.document);
          const m = u ? "documentId" : "documentIds",
            c = u ? T[0] && T[0].id : T.map(f => f.id);
          return { transactionId: k.transactionId, results: T, [m]: c };
        })
      );
    },
    _create(e, t, n = {}) {
      const r = { [t]: e },
        i = Object.assign({ returnFirst: !0, returnDocuments: !0 }, n);
      return this.dataRequest("mutate", { mutations: [r] }, i);
    },
  };
function Nh(e) {
  this.request = e.request.bind(e);
}
Object.assign(Nh.prototype, {
  create(e, t) {
    return this._modify("PUT", e, t);
  },
  edit(e, t) {
    return this._modify("PATCH", e, t);
  },
  delete(e) {
    return this._modify("DELETE", e);
  },
  list() {
    return this.request({ uri: "/datasets" });
  },
  _modify(e, t, n) {
    return Sh(t), this.request({ method: e, uri: `/datasets/${t}`, body: n });
  },
});
var Z0 = Nh;
function jh(e) {
  this.client = e;
}
Object.assign(jh.prototype, {
  list() {
    return this.client.request({ uri: "/projects" });
  },
  getById(e) {
    return this.client.request({ uri: `/projects/${e}` });
  },
});
var J0 = jh,
  e1 = e => {
    const t = [];
    for (const n in e)
      e.hasOwnProperty(n) &&
        t.push(`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`);
    return t.length > 0 ? `?${t.join("&")}` : "";
  };
function $h(e) {
  this.client = e;
}
function t1(e, t) {
  return typeof window > "u" || !(t instanceof window.File)
    ? e
    : Object.assign(
        {
          filename: e.preserveFilename === !1 ? void 0 : t.name,
          contentType: t.type,
        },
        e
      );
}
Object.assign($h.prototype, {
  upload(e, t, n = {}) {
    w0(e);
    let r = n.extract || void 0;
    r && !r.length && (r = ["none"]);
    const i = So(this.client.clientConfig),
      o = e === "image" ? "images" : "files",
      l = t1(n, t),
      {
        tag: a,
        label: u,
        title: s,
        description: d,
        creditLine: p,
        filename: v,
        source: g,
      } = l,
      C = {
        label: u,
        title: s,
        description: d,
        filename: v,
        meta: r,
        creditLine: p,
      };
    g && ((C.sourceId = g.id), (C.sourceName = g.name), (C.sourceUrl = g.url));
    const k = this.client._requestObservable({
      tag: a,
      method: "POST",
      timeout: l.timeout || 0,
      uri: `/assets/${o}/${i}`,
      headers: l.contentType ? { "Content-Type": l.contentType } : {},
      query: C,
      body: t,
    });
    return this.client.isPromiseAPI()
      ? lr(
          k.pipe(
            ri(T => T.type === "response"),
            _n(T => T.body.document)
          )
        )
      : k;
  },
  delete(e, t) {
    console.warn(
      "client.assets.delete() is deprecated, please use client.delete(<document-id>)"
    );
    let n = t || "";
    return (
      /^(image|file)-/.test(n) ? e._id && (n = e._id) : (n = `${e}-${n}`),
      So(this.client.clientConfig),
      this.client.delete(n)
    );
  },
  getImageUrl(e, t) {
    const n = e._ref || e;
    if (typeof n != "string")
      throw new Error(
        "getImageUrl() needs either an object with a _ref, or a string with an asset document ID"
      );
    if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(n))
      throw new Error(
        `Unsupported asset ID "${n}". URL generation only works for auto-generated IDs.`
      );
    const [, r, i, o] = n.split("-");
    So(this.client.clientConfig);
    const { projectId: l, dataset: a } = this.client.clientConfig,
      u = t ? e1(t) : "";
    return `https://cdn.sanity.io/images/${l}/${a}/${r}-${i}.${o}${u}`;
  },
});
var n1 = $h;
function bh(e) {
  this.client = e;
}
Object.assign(bh.prototype, {
  getById(e) {
    return this.client.request({ uri: `/users/${e}` });
  },
});
var r1 = bh;
function Rh(e) {
  this.client = e;
}
Object.assign(Rh.prototype, {
  getLoginProviders() {
    return this.client.request({ uri: "/auth/providers" });
  },
  logout() {
    return this.client.request({ uri: "/auth/logout", method: "POST" });
  },
});
var i1 = Rh,
  Fh = yh(g0());
function ml(e) {
  const t = Ah(e);
  ml.super.call(this, t.message), Object.assign(this, t);
}
function gl(e) {
  const t = Ah(e);
  gl.super.call(this, t.message), Object.assign(this, t);
}
function Ah(e) {
  const t = e.body,
    n = { response: e, statusCode: e.statusCode, responseBody: l1(t, e) };
  return t.error && t.message
    ? ((n.message = `${t.error} - ${t.message}`), n)
    : t.error && t.error.description
    ? ((n.message = t.error.description), (n.details = t.error), n)
    : ((n.message = t.error || t.message || o1(e)), n);
}
function o1(e) {
  const t = e.statusMessage ? ` ${e.statusMessage}` : "";
  return `${e.method}-request to ${e.url} resulted in HTTP ${e.statusCode}${t}`;
}
function l1(e, t) {
  return (t.headers["content-type"] || "")
    .toLowerCase()
    .indexOf("application/json") !== -1
    ? JSON.stringify(e, null, 2)
    : e;
}
(0, Fh.default)(ml);
(0, Fh.default)(gl);
var a1 = [],
  u1 = {
    onResponse: e => {
      if (e.statusCode >= 500) throw new gl(e);
      if (e.statusCode >= 400) throw new ml(e);
      return e;
    },
  },
  s1 = {
    onResponse: e => {
      const t = e.headers["x-sanity-warning"];
      return (
        (Array.isArray(t) ? t : [t])
          .filter(Boolean)
          .forEach(r => console.warn(r)),
        e
      );
    },
  },
  c1 = a1,
  f1 = c1.concat([s1, Zy(), Jy(), Xy(), u1, n0({ implementation: Qo })]),
  Lh = dh(f1);
function yl(e, t = Lh) {
  return t(Object.assign({ maxRedirects: 0 }, e));
}
yl.defaultRequester = Lh;
yl.ClientError = ml;
yl.ServerError = gl;
var wl = yl,
  d1 = "X-Sanity-Project-ID",
  p1 = (e, t = {}) => {
    const n = {},
      r = t.token || e.token;
    r && (n.Authorization = `Bearer ${r}`),
      !t.useGlobalApi &&
        !e.useProjectHostname &&
        e.projectId &&
        (n[d1] = e.projectId);
    const i = Boolean(
        typeof t.withCredentials > "u"
          ? e.token || e.withCredentials
          : t.withCredentials
      ),
      o = typeof t.timeout > "u" ? e.timeout : t.timeout;
    return Object.assign({}, t, {
      headers: Object.assign({}, n, t.headers || {}),
      timeout: typeof o > "u" ? 5 * 60 * 1e3 : o,
      proxy: t.proxy || e.proxy,
      json: !0,
      withCredentials: i,
    });
  },
  h1 = "https://docs.sanity.io/help/";
function Sl(e) {
  return h1 + e;
}
var v1 = e => {
    let t = !1,
      n;
    return (...r) => (t || ((n = e(...r)), (t = !0)), n);
  },
  xs = e => v1((...t) => console.warn(e.join(" "), ...t)),
  m1 = xs([
    "You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and",
    `cheaper. Think about it! For more info, see ${Sl(
      "js-client-cdn-configuration"
    )}.`,
    "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating",
    "the client.",
  ]),
  g1 = xs([
    "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
    `See ${Sl(
      "js-client-browser-token"
    )} for more information and how to hide this warning.`,
  ]),
  y1 = xs([
    "Using the Sanity client without specifying an API version is deprecated.",
    `See ${Sl("js-client-api-version")}`,
  ]),
  w1 = "apicdn.sanity.io",
  hu = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: !0,
    isPromiseAPI: !0,
  },
  S1 = ["localhost", "127.0.0.1", "0.0.0.0"],
  C1 = e => S1.indexOf(e) !== -1,
  k1 = function (t) {
    if (t === "1" || t === "X") return;
    const n = new Date(t);
    if (
      !(/^\d{4}-\d{2}-\d{2}$/.test(t) && n instanceof Date && n.getTime() > 0)
    )
      throw new Error(
        "Invalid API version string, expected `1` or date in format `YYYY-MM-DD`"
      );
  },
  E1 = (e, t) => {
    const n = Object.assign({}, t, e);
    n.apiVersion || y1();
    const r = Object.assign({}, hu, n),
      i = r.useProjectHostname;
    if (typeof Promise > "u") {
      const p = Sl("js-client-promise-polyfill");
      throw new Error(
        `No native Promise-implementation found, polyfill needed - see ${p}`
      );
    }
    if (i && !r.projectId)
      throw new Error("Configuration must contain `projectId`");
    const o =
        typeof window < "u" && window.location && window.location.hostname,
      l = o && C1(window.location.hostname);
    o && l && r.token && r.ignoreBrowserTokenWarning !== !0
      ? g1()
      : typeof r.useCdn > "u" && m1(),
      i && y0(r.projectId),
      r.dataset && Sh(r.dataset),
      "requestTagPrefix" in r &&
        (r.requestTagPrefix = r.requestTagPrefix
          ? kh(r.requestTagPrefix).replace(/\.+$/, "")
          : void 0),
      (r.apiVersion = `${r.apiVersion}`.replace(/^v/, "")),
      (r.isDefaultApi = r.apiHost === hu.apiHost),
      (r.useCdn = Boolean(r.useCdn) && !r.withCredentials),
      k1(r.apiVersion);
    const a = r.apiHost.split("://", 2),
      u = a[0],
      s = a[1],
      d = r.isDefaultApi ? w1 : s;
    return (
      r.useProjectHostname
        ? ((r.url = `${u}://${r.projectId}.${s}/v${r.apiVersion}`),
          (r.cdnUrl = `${u}://${r.projectId}.${d}/v${r.apiVersion}`))
        : ((r.url = `${r.apiHost}/v${r.apiVersion}`), (r.cdnUrl = r.url)),
      r
    );
  };
function lt(e = hu) {
  if (!(this instanceof lt)) return new lt(e);
  if (
    (this.config(e),
    (this.assets = new n1(this)),
    (this.datasets = new Z0(this)),
    (this.projects = new J0(this)),
    (this.users = new r1(this)),
    (this.auth = new i1(this)),
    this.clientConfig.isPromiseAPI)
  ) {
    const t = Object.assign({}, this.clientConfig, { isPromiseAPI: !1 });
    this.observable = new lt(t);
  }
}
Object.assign(lt.prototype, Y0);
Object.assign(lt.prototype, {
  clone() {
    return new lt(this.config());
  },
  config(e) {
    if (typeof e > "u") return Object.assign({}, this.clientConfig);
    if (this.clientConfig && this.clientConfig.allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    if (this.observable) {
      const t = Object.assign({}, e, { isPromiseAPI: !1 });
      this.observable.config(t);
    }
    return (this.clientConfig = E1(e, this.clientConfig || {})), this;
  },
  withConfig(e) {
    return new lt({ ...this.config(), ...e });
  },
  getUrl(e, t = !1) {
    return `${t ? this.clientConfig.cdnUrl : this.clientConfig.url}/${e.replace(
      /^\//,
      ""
    )}`;
  },
  isPromiseAPI() {
    return this.clientConfig.isPromiseAPI;
  },
  _requestObservable(e) {
    const t = e.url || e.uri,
      n =
        typeof e.canUseCdn > "u"
          ? ["GET", "HEAD"].indexOf(e.method || "GET") >= 0 &&
            t.indexOf("/data/") === 0
          : e.canUseCdn,
      r = this.clientConfig.useCdn && n,
      i =
        e.tag && this.clientConfig.requestTagPrefix
          ? [this.clientConfig.requestTagPrefix, e.tag].join(".")
          : e.tag || this.clientConfig.requestTagPrefix;
    i && (e.query = { tag: kh(i), ...e.query });
    const o = p1(
      this.clientConfig,
      Object.assign({}, e, { url: this.getUrl(t, r) })
    );
    return new Qo(l => wl(o, this.clientConfig.requester).subscribe(l));
  },
  request(e) {
    const t = this._requestObservable(e).pipe(
      ri(n => n.type === "response"),
      _n(n => n.body)
    );
    return this.isPromiseAPI() ? lr(t) : t;
  },
});
lt.Patch = hr;
lt.Transaction = su;
lt.ClientError = wl.ClientError;
lt.ServerError = wl.ServerError;
lt.requester = wl.defaultRequester;
var x1 = lt;
/*! Bundled license information:

event-source-polyfill/src/eventsource.js:
  (** @license
   * eventsource.js
   * Available under MIT License (MIT)
   * https://github.com/Yaffle/EventSource/
   *)
*/ var vu = {},
  _1 = {
    get exports() {
      return vu;
    },
    set exports(e) {
      vu = e;
    },
  };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(oi, function () {
    function n() {
      return (
        (n =
          Object.assign ||
          function (E) {
            for (var x = 1; x < arguments.length; x++) {
              var I = arguments[x];
              for (var P in I)
                Object.prototype.hasOwnProperty.call(I, P) && (E[P] = I[P]);
            }
            return E;
          }),
        n.apply(this, arguments)
      );
    }
    function r(E, x) {
      if (E) {
        if (typeof E == "string") return i(E, x);
        var I = Object.prototype.toString.call(E).slice(8, -1);
        if (
          (I === "Object" && E.constructor && (I = E.constructor.name),
          I === "Map" || I === "Set")
        )
          return Array.from(E);
        if (
          I === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I)
        )
          return i(E, x);
      }
    }
    function i(E, x) {
      (x == null || x > E.length) && (x = E.length);
      for (var I = 0, P = new Array(x); I < x; I++) P[I] = E[I];
      return P;
    }
    function o(E, x) {
      var I = (typeof Symbol < "u" && E[Symbol.iterator]) || E["@@iterator"];
      if (I) return (I = I.call(E)).next.bind(I);
      if (
        Array.isArray(E) ||
        (I = r(E)) ||
        (x && E && typeof E.length == "number")
      ) {
        I && (E = I);
        var P = 0;
        return function () {
          return P >= E.length ? { done: !0 } : { done: !1, value: E[P++] };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var l = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
    function a(E) {
      var x = E.split("-"),
        I = x[1],
        P = x[2],
        $ = x[3];
      if (!I || !P || !$)
        throw new Error(
          "Malformed asset _ref '" + E + `'. Expected an id like "` + l + '".'
        );
      var z = P.split("x"),
        Q = z[0],
        j = z[1],
        A = +Q,
        L = +j,
        H = isFinite(A) && isFinite(L);
      if (!H)
        throw new Error(
          "Malformed asset _ref '" + E + `'. Expected an id like "` + l + '".'
        );
      return { id: I, width: A, height: L, format: $ };
    }
    var u = function (x) {
        var I = x;
        return I ? typeof I._ref == "string" : !1;
      },
      s = function (x) {
        var I = x;
        return I ? typeof I._id == "string" : !1;
      },
      d = function (x) {
        var I = x;
        return I && I.asset ? typeof I.asset.url == "string" : !1;
      };
    function p(E) {
      if (!E) return null;
      var x;
      if (typeof E == "string" && v(E)) x = { asset: { _ref: g(E) } };
      else if (typeof E == "string") x = { asset: { _ref: E } };
      else if (u(E)) x = { asset: E };
      else if (s(E)) x = { asset: { _ref: E._id || "" } };
      else if (d(E)) x = { asset: { _ref: g(E.asset.url) } };
      else if (typeof E.asset == "object") x = n({}, E);
      else return null;
      var I = E;
      return (
        I.crop && (x.crop = I.crop), I.hotspot && (x.hotspot = I.hotspot), C(x)
      );
    }
    function v(E) {
      return /^https?:\/\//.test("" + E);
    }
    function g(E) {
      var x = E.split("/").slice(-1);
      return ("image-" + x[0]).replace(/\.([a-z]+)$/, "-$1");
    }
    function C(E) {
      if (E.crop && E.hotspot) return E;
      var x = n({}, E);
      return (
        x.crop || (x.crop = { left: 0, top: 0, bottom: 0, right: 0 }),
        x.hotspot || (x.hotspot = { x: 0.5, y: 0.5, height: 1, width: 1 }),
        x
      );
    }
    var k = [
      ["width", "w"],
      ["height", "h"],
      ["format", "fm"],
      ["download", "dl"],
      ["blur", "blur"],
      ["sharpen", "sharp"],
      ["invert", "invert"],
      ["orientation", "or"],
      ["minHeight", "min-h"],
      ["maxHeight", "max-h"],
      ["minWidth", "min-w"],
      ["maxWidth", "max-w"],
      ["quality", "q"],
      ["fit", "fit"],
      ["crop", "crop"],
      ["saturation", "sat"],
      ["auto", "auto"],
      ["dpr", "dpr"],
      ["pad", "pad"],
    ];
    function T(E) {
      var x = n({}, E || {}),
        I = x.source;
      delete x.source;
      var P = p(I);
      if (!P)
        throw new Error(
          "Unable to resolve image URL from source (" + JSON.stringify(I) + ")"
        );
      var $ = P.asset._ref || P.asset._id || "",
        z = a($),
        Q = Math.round(P.crop.left * z.width),
        j = Math.round(P.crop.top * z.height),
        A = {
          left: Q,
          top: j,
          width: Math.round(z.width - P.crop.right * z.width - Q),
          height: Math.round(z.height - P.crop.bottom * z.height - j),
        },
        L = (P.hotspot.height * z.height) / 2,
        H = (P.hotspot.width * z.width) / 2,
        W = P.hotspot.x * z.width,
        Ce = P.hotspot.y * z.height,
        te = { left: W - H, top: Ce - L, right: W + H, bottom: Ce + L };
      return (
        x.rect ||
          x.focalPoint ||
          x.ignoreImageParams ||
          x.crop ||
          (x = n({}, x, c({ crop: A, hotspot: te }, x))),
        m(n({}, x, { asset: z }))
      );
    }
    function m(E) {
      var x = (E.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
        I =
          E.asset.id +
          "-" +
          E.asset.width +
          "x" +
          E.asset.height +
          "." +
          E.asset.format,
        P = x + "/images/" + E.projectId + "/" + E.dataset + "/" + I,
        $ = [];
      if (E.rect) {
        var z = E.rect,
          Q = z.left,
          j = z.top,
          A = z.width,
          L = z.height,
          H = Q !== 0 || j !== 0 || L !== E.asset.height || A !== E.asset.width;
        H && $.push("rect=" + Q + "," + j + "," + A + "," + L);
      }
      E.bg && $.push("bg=" + E.bg),
        E.focalPoint &&
          ($.push("fp-x=" + E.focalPoint.x), $.push("fp-y=" + E.focalPoint.y));
      var W = [E.flipHorizontal && "h", E.flipVertical && "v"]
        .filter(Boolean)
        .join("");
      return (
        W && $.push("flip=" + W),
        k.forEach(function (Ce) {
          var te = Ce[0],
            ve = Ce[1];
          typeof E[te] < "u"
            ? $.push(ve + "=" + encodeURIComponent(E[te]))
            : typeof E[ve] < "u" &&
              $.push(ve + "=" + encodeURIComponent(E[ve]));
        }),
        $.length === 0 ? P : P + "?" + $.join("&")
      );
    }
    function c(E, x) {
      var I,
        P = x.width,
        $ = x.height;
      if (!(P && $)) return { width: P, height: $, rect: E.crop };
      var z = E.crop,
        Q = E.hotspot,
        j = P / $,
        A = z.width / z.height;
      if (A > j) {
        var L = Math.round(z.height),
          H = Math.round(L * j),
          W = Math.max(0, Math.round(z.top)),
          Ce = Math.round((Q.right - Q.left) / 2 + Q.left),
          te = Math.max(0, Math.round(Ce - H / 2));
        te < z.left
          ? (te = z.left)
          : te + H > z.left + z.width && (te = z.left + z.width - H),
          (I = { left: te, top: W, width: H, height: L });
      } else {
        var ve = z.width,
          me = Math.round(ve / j),
          Pe = Math.max(0, Math.round(z.left)),
          At = Math.round((Q.bottom - Q.top) / 2 + Q.top),
          ct = Math.max(0, Math.round(At - me / 2));
        ct < z.top
          ? (ct = z.top)
          : ct + me > z.top + z.height && (ct = z.top + z.height - me),
          (I = { left: Pe, top: ct, width: ve, height: me });
      }
      return { width: P, height: $, rect: I };
    }
    var f = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
      h = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
      w = ["format"];
    function y(E) {
      return E && "config" in E ? typeof E.config == "function" : !1;
    }
    function S(E) {
      return E && "clientConfig" in E ? typeof E.clientConfig == "object" : !1;
    }
    function _(E) {
      for (var x = k, I = o(x), P; !(P = I()).done; ) {
        var $ = P.value,
          z = $[0],
          Q = $[1];
        if (E === z || E === Q) return z;
      }
      return E;
    }
    function O(E) {
      if (y(E)) {
        var x = E.config(),
          I = x.apiHost,
          P = x.projectId,
          $ = x.dataset,
          z = I || "https://api.sanity.io";
        return new b(null, {
          baseUrl: z.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: P,
          dataset: $,
        });
      }
      var Q = E;
      if (S(Q)) {
        var j = Q.clientConfig,
          A = j.apiHost,
          L = j.projectId,
          H = j.dataset,
          W = A || "https://api.sanity.io";
        return new b(null, {
          baseUrl: W.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: L,
          dataset: H,
        });
      }
      return new b(null, E);
    }
    var b = (function () {
      function E(I, P) {
        (this.options = void 0),
          (this.options = I ? n({}, I.options || {}, P || {}) : n({}, P || {}));
      }
      var x = E.prototype;
      return (
        (x.withOptions = function (P) {
          var $ = P.baseUrl || this.options.baseUrl,
            z = { baseUrl: $ };
          for (var Q in P)
            if (P.hasOwnProperty(Q)) {
              var j = _(Q);
              z[j] = P[Q];
            }
          return new E(this, n({ baseUrl: $ }, z));
        }),
        (x.image = function (P) {
          return this.withOptions({ source: P });
        }),
        (x.dataset = function (P) {
          return this.withOptions({ dataset: P });
        }),
        (x.projectId = function (P) {
          return this.withOptions({ projectId: P });
        }),
        (x.bg = function (P) {
          return this.withOptions({ bg: P });
        }),
        (x.dpr = function (P) {
          return this.withOptions(P && P !== 1 ? { dpr: P } : {});
        }),
        (x.width = function (P) {
          return this.withOptions({ width: P });
        }),
        (x.height = function (P) {
          return this.withOptions({ height: P });
        }),
        (x.focalPoint = function (P, $) {
          return this.withOptions({ focalPoint: { x: P, y: $ } });
        }),
        (x.maxWidth = function (P) {
          return this.withOptions({ maxWidth: P });
        }),
        (x.minWidth = function (P) {
          return this.withOptions({ minWidth: P });
        }),
        (x.maxHeight = function (P) {
          return this.withOptions({ maxHeight: P });
        }),
        (x.minHeight = function (P) {
          return this.withOptions({ minHeight: P });
        }),
        (x.size = function (P, $) {
          return this.withOptions({ width: P, height: $ });
        }),
        (x.blur = function (P) {
          return this.withOptions({ blur: P });
        }),
        (x.sharpen = function (P) {
          return this.withOptions({ sharpen: P });
        }),
        (x.rect = function (P, $, z, Q) {
          return this.withOptions({
            rect: { left: P, top: $, width: z, height: Q },
          });
        }),
        (x.format = function (P) {
          return this.withOptions({ format: P });
        }),
        (x.invert = function (P) {
          return this.withOptions({ invert: P });
        }),
        (x.orientation = function (P) {
          return this.withOptions({ orientation: P });
        }),
        (x.quality = function (P) {
          return this.withOptions({ quality: P });
        }),
        (x.forceDownload = function (P) {
          return this.withOptions({ download: P });
        }),
        (x.flipHorizontal = function () {
          return this.withOptions({ flipHorizontal: !0 });
        }),
        (x.flipVertical = function () {
          return this.withOptions({ flipVertical: !0 });
        }),
        (x.ignoreImageParams = function () {
          return this.withOptions({ ignoreImageParams: !0 });
        }),
        (x.fit = function (P) {
          if (f.indexOf(P) === -1)
            throw new Error('Invalid fit mode "' + P + '"');
          return this.withOptions({ fit: P });
        }),
        (x.crop = function (P) {
          if (h.indexOf(P) === -1)
            throw new Error('Invalid crop mode "' + P + '"');
          return this.withOptions({ crop: P });
        }),
        (x.saturation = function (P) {
          return this.withOptions({ saturation: P });
        }),
        (x.auto = function (P) {
          if (w.indexOf(P) === -1)
            throw new Error('Invalid auto mode "' + P + '"');
          return this.withOptions({ auto: P });
        }),
        (x.pad = function (P) {
          return this.withOptions({ pad: P });
        }),
        (x.url = function () {
          return T(this.options);
        }),
        (x.toString = function () {
          return this.url();
        }),
        E
      );
    })();
    return O;
  });
})(_1);
const O1 = vu,
  Dh = x1({
    projectId: "b80jazms",
    dataset: "production",
    apiVersion: "2022-12-27",
    useCdn: !0,
    token:
      "skdOLwfxbmnRV4R4TeizTGbDDlsVc6GpGwKS0d6VlabnewkDHDmSIyTLpbAFp2RzCVEt0KJ5k7ZjK59NIqka74hXZi050Bt0t3XFNqR8NST9i7MIUNKSBMdfcsvWC9car5YqskUS6QAOSXctx3vHgZc6YatXi4JkIkXSPbtxptC8WLNw7rU1",
    ignoreBrowserTokenWarning: !0,
  });
O1(Dh);
const T1 = () => {
    const [e, t] = M.useState([]),
      [n, r] = M.useState([]),
      [i, o] = M.useState(!0),
      [l, a] = M.useState(null);
    return (
      M.useEffect(() => {
        (async d => {
          try {
            o(!0);
            const p = await Dh.fetch(d);
            t(p), r(vy(p)), o(!1);
          } catch (p) {
            a(p), o(!1);
          }
        })('*[_type == "concepts"]');
      }, []),
      { concepts: e, globalTags: n, loading: i, error: l }
    );
  },
  Mh = M.createContext();
function P1() {
  return M.useContext(Mh);
}
function I1({ children: e }) {
  return R(Mh.Provider, { value: T1(), children: e });
}
const zh = M.createContext(),
  Uh = M.createContext();
function N1() {
  return M.useContext(zh);
}
function j1() {
  return M.useContext(Uh);
}
function $1({ children: e }) {
  const [t, n] = M.useState(""),
    r = i => {
      n(i);
    };
  return R(zh.Provider, {
    value: t,
    children: R(Uh.Provider, { value: r, children: e }),
  });
}
const b1 = (e, t, n, r, i) => {
    const [o, l] = M.useState([]),
      a = M.useRef(null);
    return (
      M.useEffect(() => {
        if (!r) {
          l(e);
          return;
        }
        const u = e.filter(({ tags: s }) => (r ? s && s.includes(r) : !0));
        l(u);
      }, [n, r]),
      M.useEffect(() => {
        if (!t) {
          l(e);
          return;
        }
        return (
          (a.current = setTimeout(() => {
            const u = e.filter(
              ({ title: s }) => s && s.toLowerCase().includes(t.toLowerCase())
            );
            l(u);
          }, i)),
          () => {
            clearTimeout(a.current);
          }
        );
      }, [e, t, i]),
      { searchResults: o }
    );
  },
  Hh = typeof window > "u" || typeof document > "u";
let Ko = Hh ? M.useEffect : M.useLayoutEffect;
function R1(e) {
  let t = M.useRef(e);
  return (
    Ko(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ii = function (e) {
    let t = R1(e);
    return Vt.useCallback((...n) => t.current(...n), [t]);
  },
  ra = { serverHandoffComplete: !1 };
function F1() {
  let [e, t] = M.useState(ra.serverHandoffComplete);
  return (
    M.useEffect(() => {
      e !== !0 && t(!0);
    }, [e]),
    M.useEffect(() => {
      ra.serverHandoffComplete === !1 && (ra.serverHandoffComplete = !0);
    }, []),
    e
  );
}
var kf;
let A1 = 0;
function Ef() {
  return ++A1;
}
let Bh =
  (kf = Vt.useId) != null
    ? kf
    : function () {
        let e = F1(),
          [t, n] = Vt.useState(e ? Ef : null);
        return (
          Ko(() => {
            t === null && n(Ef());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Ii(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map(i => `"${i}"`)
      .join(", ")}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Ii), r);
}
function L1(e) {
  return Hh
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
function xf(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function D1(e, t) {
  let [n, r] = M.useState(() => xf(e));
  return (
    Ko(() => {
      r(xf(e));
    }, [e.type, e.as]),
    Ko(() => {
      n ||
        !t.current ||
        (t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute("type") &&
          r("button"));
    }, [n, t]),
    n
  );
}
let qh = Symbol();
function M1(e, t = !0) {
  return Object.assign(e, { [qh]: t });
}
function _s(...e) {
  let t = M.useRef(e);
  M.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ii(r => {
    for (let i of t.current)
      i != null && (typeof i == "function" ? i(r) : (i.current = r));
  });
  return e.every(r => r == null || (r == null ? void 0 : r[qh])) ? void 0 : n;
}
var mu = (e => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(mu || {}),
  z1 = (e => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(z1 || {});
function Os({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: i,
  visible: o = !0,
  name: l,
}) {
  let a = Vh(t, e);
  if (o) return no(a, n, r, l);
  let u = i ?? 0;
  if (u & 2) {
    let { static: s = !1, ...d } = a;
    if (s) return no(d, n, r, l);
  }
  if (u & 1) {
    let { unmount: s = !0, ...d } = a;
    return Ii(s ? 0 : 1, {
      [0]() {
        return null;
      },
      [1]() {
        return no({ ...d, hidden: !0, style: { display: "none" } }, n, r, l);
      },
    });
  }
  return no(a, n, r, l);
}
function no(e, t = {}, n, r) {
  let {
      as: i = n,
      children: o,
      refName: l = "ref",
      ...a
    } = ia(e, ["unmount", "static"]),
    u = e.ref !== void 0 ? { [l]: e.ref } : {},
    s = typeof o == "function" ? o(t) : o;
  a.className &&
    typeof a.className == "function" &&
    (a.className = a.className(t));
  let d = {};
  if (t) {
    let p = !1,
      v = [];
    for (let [g, C] of Object.entries(t))
      typeof C == "boolean" && (p = !0), C === !0 && v.push(g);
    p && (d["data-headlessui-state"] = v.join(" "));
  }
  if (i === M.Fragment && Object.keys(_f(a)).length > 0) {
    if (!M.isValidElement(s) || (Array.isArray(s) && s.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(a).map(p => `  - ${p}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map(p => `  - ${p}`).join(`
`),
        ].join(`
`)
      );
    return M.cloneElement(
      s,
      Object.assign({}, Vh(s.props, _f(ia(a, ["ref"]))), d, u, U1(s.ref, u.ref))
    );
  }
  return M.createElement(
    i,
    Object.assign(
      {},
      ia(a, ["ref"]),
      i !== M.Fragment && u,
      i !== M.Fragment && d
    ),
    s
  );
}
function U1(...e) {
  return {
    ref: e.every(t => t == null)
      ? void 0
      : t => {
          for (let n of e)
            n != null && (typeof n == "function" ? n(t) : (n.current = t));
        },
  };
}
function Vh(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let i in r)
      i.startsWith("on") && typeof r[i] == "function"
        ? (n[i] != null || (n[i] = []), n[i].push(r[i]))
        : (t[i] = r[i]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map(r => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](i, ...o) {
        let l = n[r];
        for (let a of l) {
          if (
            (i instanceof Event ||
              (i == null ? void 0 : i.nativeEvent) instanceof Event) &&
            i.defaultPrevented
          )
            return;
          a(i, ...o);
        }
      },
    });
  return t;
}
function Ts(e) {
  var t;
  return Object.assign(M.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function _f(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function ia(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function H1(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && B1(n) ? !1 : r;
}
function B1(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Ps = M.createContext(null);
Ps.displayName = "OpenClosedContext";
var Xo = (e => ((e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e))(
  Xo || {}
);
function q1() {
  return M.useContext(Ps);
}
function V1({ value: e, children: t }) {
  return Vt.createElement(Ps.Provider, { value: e }, t);
}
var Wn = (e => (
    (e.Space = " "),
    (e.Enter = "Enter"),
    (e.Escape = "Escape"),
    (e.Backspace = "Backspace"),
    (e.Delete = "Delete"),
    (e.ArrowLeft = "ArrowLeft"),
    (e.ArrowUp = "ArrowUp"),
    (e.ArrowRight = "ArrowRight"),
    (e.ArrowDown = "ArrowDown"),
    (e.Home = "Home"),
    (e.End = "End"),
    (e.PageUp = "PageUp"),
    (e.PageDown = "PageDown"),
    (e.Tab = "Tab"),
    e
  ))(Wn || {}),
  W1 = (e => ((e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e))(
    W1 || {}
  ),
  Q1 = (e => (
    (e[(e.ToggleDisclosure = 0)] = "ToggleDisclosure"),
    (e[(e.CloseDisclosure = 1)] = "CloseDisclosure"),
    (e[(e.SetButtonId = 2)] = "SetButtonId"),
    (e[(e.SetPanelId = 3)] = "SetPanelId"),
    (e[(e.LinkPanel = 4)] = "LinkPanel"),
    (e[(e.UnlinkPanel = 5)] = "UnlinkPanel"),
    e
  ))(Q1 || {});
let K1 = {
    [0]: e => ({
      ...e,
      disclosureState: Ii(e.disclosureState, { [0]: 1, [1]: 0 }),
    }),
    [1]: e => (e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }),
    [4](e) {
      return e.linkedPanel === !0 ? e : { ...e, linkedPanel: !0 };
    },
    [5](e) {
      return e.linkedPanel === !1 ? e : { ...e, linkedPanel: !1 };
    },
    [2](e, t) {
      return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
    },
    [3](e, t) {
      return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
    },
  },
  Is = M.createContext(null);
Is.displayName = "DisclosureContext";
function Ns(e) {
  let t = M.useContext(Is);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Ns), n);
  }
  return t;
}
let js = M.createContext(null);
js.displayName = "DisclosureAPIContext";
function Wh(e) {
  let t = M.useContext(js);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Wh), n);
  }
  return t;
}
let $s = M.createContext(null);
$s.displayName = "DisclosurePanelContext";
function X1() {
  return M.useContext($s);
}
function G1(e, t) {
  return Ii(t.type, K1, e, t);
}
let Y1 = M.Fragment,
  Z1 = Ts(function (e, t) {
    let { defaultOpen: n = !1, ...r } = e,
      i = M.useRef(null),
      o = _s(
        t,
        M1(T => {
          i.current = T;
        }, e.as === void 0 || e.as === M.Fragment)
      ),
      l = M.useRef(null),
      a = M.useRef(null),
      u = M.useReducer(G1, {
        disclosureState: n ? 0 : 1,
        linkedPanel: !1,
        buttonRef: a,
        panelRef: l,
        buttonId: null,
        panelId: null,
      }),
      [{ disclosureState: s, buttonId: d }, p] = u,
      v = ii(T => {
        p({ type: 1 });
        let m = L1(i);
        if (!m || !d) return;
        let c = (() =>
          T
            ? T instanceof HTMLElement
              ? T
              : T.current instanceof HTMLElement
              ? T.current
              : m.getElementById(d)
            : m.getElementById(d))();
        c == null || c.focus();
      }),
      g = M.useMemo(() => ({ close: v }), [v]),
      C = M.useMemo(() => ({ open: s === 0, close: v }), [s, v]),
      k = { ref: o };
    return Vt.createElement(
      Is.Provider,
      { value: u },
      Vt.createElement(
        js.Provider,
        { value: g },
        Vt.createElement(
          V1,
          { value: Ii(s, { [0]: Xo.Open, [1]: Xo.Closed }) },
          Os({
            ourProps: k,
            theirProps: r,
            slot: C,
            defaultTag: Y1,
            name: "Disclosure",
          })
        )
      )
    );
  }),
  J1 = "button",
  ew = Ts(function (e, t) {
    let n = Bh(),
      { id: r = `headlessui-disclosure-button-${n}`, ...i } = e,
      [o, l] = Ns("Disclosure.Button"),
      a = X1(),
      u = a === null ? !1 : a === o.panelId,
      s = M.useRef(null),
      d = _s(s, t, u ? null : o.buttonRef);
    M.useEffect(() => {
      if (!u)
        return (
          l({ type: 2, buttonId: r }),
          () => {
            l({ type: 2, buttonId: null });
          }
        );
    }, [r, l, u]);
    let p = ii(m => {
        var c;
        if (u) {
          if (o.disclosureState === 1) return;
          switch (m.key) {
            case Wn.Space:
            case Wn.Enter:
              m.preventDefault(),
                m.stopPropagation(),
                l({ type: 0 }),
                (c = o.buttonRef.current) == null || c.focus();
              break;
          }
        } else
          switch (m.key) {
            case Wn.Space:
            case Wn.Enter:
              m.preventDefault(), m.stopPropagation(), l({ type: 0 });
              break;
          }
      }),
      v = ii(m => {
        switch (m.key) {
          case Wn.Space:
            m.preventDefault();
            break;
        }
      }),
      g = ii(m => {
        var c;
        H1(m.currentTarget) ||
          e.disabled ||
          (u
            ? (l({ type: 0 }), (c = o.buttonRef.current) == null || c.focus())
            : l({ type: 0 }));
      }),
      C = M.useMemo(() => ({ open: o.disclosureState === 0 }), [o]),
      k = D1(e, s),
      T = u
        ? { ref: d, type: k, onKeyDown: p, onClick: g }
        : {
            ref: d,
            id: r,
            type: k,
            "aria-expanded": e.disabled ? void 0 : o.disclosureState === 0,
            "aria-controls": o.linkedPanel ? o.panelId : void 0,
            onKeyDown: p,
            onKeyUp: v,
            onClick: g,
          };
    return Os({
      ourProps: T,
      theirProps: i,
      slot: C,
      defaultTag: J1,
      name: "Disclosure.Button",
    });
  }),
  tw = "div",
  nw = mu.RenderStrategy | mu.Static,
  rw = Ts(function (e, t) {
    let n = Bh(),
      { id: r = `headlessui-disclosure-panel-${n}`, ...i } = e,
      [o, l] = Ns("Disclosure.Panel"),
      { close: a } = Wh("Disclosure.Panel"),
      u = _s(t, o.panelRef, g => {
        l({ type: g ? 4 : 5 });
      });
    M.useEffect(
      () => (
        l({ type: 3, panelId: r }),
        () => {
          l({ type: 3, panelId: null });
        }
      ),
      [r, l]
    );
    let s = q1(),
      d = (() => (s !== null ? s === Xo.Open : o.disclosureState === 0))(),
      p = M.useMemo(
        () => ({ open: o.disclosureState === 0, close: a }),
        [o, a]
      ),
      v = { ref: u, id: r };
    return Vt.createElement(
      $s.Provider,
      { value: o.panelId },
      Os({
        ourProps: v,
        theirProps: i,
        slot: p,
        defaultTag: tw,
        features: nw,
        visible: d,
        name: "Disclosure.Panel",
      })
    );
  }),
  bs = Object.assign(Z1, { Button: ew, Panel: rw });
function iw({ title: e, titleId: t, ...n }, r) {
  return M.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: r,
        "aria-labelledby": t,
      },
      n
    ),
    e ? M.createElement("title", { id: t }, e) : null,
    M.createElement("path", {
      fillRule: "evenodd",
      d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
      clipRule: "evenodd",
    })
  );
}
const ow = M.forwardRef(iw),
  lw = ow;
function aw({ title: e, tags: t, isOpen: n }) {
  const r = n
    ? "bg-[color:var(--color-active)]"
    : "bg-[color:var(--color-100)] hover:bg-[color:var(--color-hover)]";
  return Le(bs.Button, {
    className: `text-color-black flex w-full items-center px-4 py-2 text-left text-base font-medium ${r} focus:outline-none`,
    children: [
      R("span", { className: "w-full", children: e }),
      R("span", {
        className: "my-auto mr-8 w-min text-xs text-lime-700",
        children: t ? t.join(" ") : "",
      }),
      R("span", {
        children: R(lw, {
          className: `${
            n
              ? "rotate-180 transform transition duration-200"
              : "transform transition duration-200"
          } h-5 w-5`,
        }),
      }),
    ],
  });
}
function Of(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Of(Object(n), !0).forEach(function (r) {
          uw(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Of(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function uw(e, t, n) {
  return (
    (t = sw(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function sw(e) {
  var t = cw(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function cw(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Go(e) {
  return (
    e._type === "span" &&
    "text" in e &&
    typeof e.text == "string" &&
    (typeof e.marks > "u" ||
      (Array.isArray(e.marks) && e.marks.every(t => typeof t == "string")))
  );
}
function Qh(e) {
  return (
    typeof e._type == "string" &&
    e._type[0] !== "@" &&
    (!("markDefs" in e) ||
      (Array.isArray(e.markDefs) &&
        e.markDefs.every(t => typeof t._key == "string"))) &&
    "children" in e &&
    Array.isArray(e.children) &&
    e.children.every(t => typeof t == "object" && "_type" in t)
  );
}
function Kh(e) {
  return (
    Qh(e) &&
    "listItem" in e &&
    typeof e.listItem == "string" &&
    (typeof e.level > "u" || typeof e.level == "number")
  );
}
function Xh(e) {
  return e._type === "@list";
}
function Gh(e) {
  return e._type === "@span";
}
function Yh(e) {
  return e._type === "@text";
}
const Pf = ["strong", "em", "code", "underline", "strike-through"];
function fw(e, t, n) {
  if (!Go(e) || !e.marks) return [];
  if (!e.marks.length) return [];
  const r = e.marks.slice(),
    i = {};
  return (
    r.forEach(o => {
      i[o] = 1;
      for (let l = t + 1; l < n.length; l++) {
        const a = n[l];
        if (a && Go(a) && Array.isArray(a.marks) && a.marks.indexOf(o) !== -1)
          i[o]++;
        else break;
      }
    }),
    r.sort((o, l) => dw(i, o, l))
  );
}
function dw(e, t, n) {
  const r = e[t],
    i = e[n];
  if (r !== i) return i - r;
  const o = Pf.indexOf(t),
    l = Pf.indexOf(n);
  return o !== l ? o - l : t.localeCompare(n);
}
function pw(e) {
  var t;
  const { children: n, markDefs: r = [] } = e;
  if (!n || !n.length) return [];
  const i = n.map(fw),
    o = { _type: "@span", children: [], markType: "<unknown>" };
  let l = [o];
  for (let a = 0; a < n.length; a++) {
    const u = n[a];
    if (!u) continue;
    const s = i[a] || [];
    let d = 1;
    if (l.length > 1)
      for (d; d < l.length; d++) {
        const v = ((t = l[d]) == null ? void 0 : t.markKey) || "",
          g = s.indexOf(v);
        if (g === -1) break;
        s.splice(g, 1);
      }
    l = l.slice(0, d);
    let p = l[l.length - 1];
    if (p) {
      for (const v of s) {
        const g = r.find(T => T._key === v),
          C = g ? g._type : v,
          k = {
            _type: "@span",
            _key: u._key,
            children: [],
            markDef: g,
            markType: C,
            markKey: v,
          };
        p.children.push(k), l.push(k), (p = k);
      }
      if (Go(u)) {
        const v = u.text.split(`
`);
        for (let g = v.length; g-- > 1; )
          v.splice(
            g,
            0,
            `
`
          );
        p.children = p.children.concat(
          v.map(g => ({ _type: "@text", text: g }))
        );
      } else p.children = p.children.concat(u);
    }
  }
  return o.children;
}
function hw(e, t) {
  const n = [];
  let r;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (o) {
      if (!Kh(o)) {
        n.push(o), (r = void 0);
        continue;
      }
      if (!r) {
        (r = ro(o, i, t)), n.push(r);
        continue;
      }
      if (vw(o, r)) {
        r.children.push(o);
        continue;
      }
      if ((o.level || 1) > r.level) {
        const l = ro(o, i, t);
        if (t === "html") {
          const a = r.children[r.children.length - 1],
            u = Tf(Tf({}, a), {}, { children: [...a.children, l] });
          r.children[r.children.length - 1] = u;
        } else r.children.push(l);
        r = l;
        continue;
      }
      if ((o.level || 1) < r.level) {
        const l = n[n.length - 1],
          a = l && gu(l, o);
        if (a) {
          (r = a), r.children.push(o);
          continue;
        }
        (r = ro(o, i, t)), n.push(r);
        continue;
      }
      if (o.listItem !== r.listItem) {
        const l = n[n.length - 1],
          a = l && gu(l, { level: o.level || 1 });
        if (a && a.listItem === o.listItem) {
          (r = a), r.children.push(o);
          continue;
        } else {
          (r = ro(o, i, t)), n.push(r);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", o), n.push(o);
    }
  }
  return n;
}
function vw(e, t) {
  return (e.level || 1) === t.level && e.listItem === t.listItem;
}
function ro(e, t, n) {
  return {
    _type: "@list",
    _key: "".concat(e._key || "".concat(t), "-parent"),
    mode: n,
    level: e.level || 1,
    listItem: e.listItem,
    children: [e],
  };
}
function gu(e, t) {
  const n = t.level || 1,
    r = t.listItem || "normal",
    i = typeof t.listItem == "string";
  if (Xh(e) && (e.level || 1) === n && i && (e.listItem || "normal") === r)
    return e;
  if (!("children" in e)) return;
  const o = e.children[e.children.length - 1];
  return o && !Go(o) ? gu(o, t) : void 0;
}
function Zh(e) {
  let t = "";
  return (
    e.children.forEach(n => {
      Yh(n) ? (t += n.text) : Gh(n) && (t += Zh(n));
    }),
    t
  );
}
const mw = "html";
function gw(e, t) {
  const { block: n, list: r, listItem: i, marks: o, types: l, ...a } = t;
  return {
    ...e,
    block: Mr(e, t, "block"),
    list: Mr(e, t, "list"),
    listItem: Mr(e, t, "listItem"),
    marks: Mr(e, t, "marks"),
    types: Mr(e, t, "types"),
    ...a,
  };
}
function Mr(e, t, n) {
  const r = t[n],
    i = e[n];
  return typeof r == "function" || (r && typeof i == "function")
    ? r
    : r
    ? { ...i, ...r }
    : i;
}
const yw = e => {
    let { children: t, value: n } = e;
    return R("a", { href: n == null ? void 0 : n.href, children: t });
  },
  ww = { textDecoration: "underline" },
  Sw = {
    em: e => {
      let { children: t } = e;
      return R("em", { children: t });
    },
    strong: e => {
      let { children: t } = e;
      return R("strong", { children: t });
    },
    code: e => {
      let { children: t } = e;
      return R("code", { children: t });
    },
    underline: e => {
      let { children: t } = e;
      return R("span", { style: ww, children: t });
    },
    "strike-through": e => {
      let { children: t } = e;
      return R("del", { children: t });
    },
    link: yw,
  },
  Cw = {
    number: e => {
      let { children: t } = e;
      return R("ol", { children: t });
    },
    bullet: e => {
      let { children: t } = e;
      return R("ul", { children: t });
    },
  },
  kw = e => {
    let { children: t } = e;
    return R("li", { children: t });
  },
  Ni = (e, t) =>
    "[@portabletext/react] Unknown "
      .concat(e, ", specify a component for it in the `components.")
      .concat(t, "` prop"),
  Jh = e => Ni('block type "'.concat(e, '"'), "types"),
  Ew = e => Ni('mark type "'.concat(e, '"'), "marks"),
  xw = e => Ni('block style "'.concat(e, '"'), "block"),
  _w = e => Ni('list style "'.concat(e, '"'), "list"),
  Ow = e => Ni('list item style "'.concat(e, '"'), "listItem");
function Tw(e) {
  console.warn(e);
}
const If = { display: "none" },
  Pw = e => {
    let { value: t, isInline: n } = e;
    const r = Jh(t._type);
    return n
      ? R("span", { style: If, children: r })
      : R("div", { style: If, children: r });
  },
  Iw = e => {
    let { markType: t, children: n } = e;
    return R("span", {
      className: "unknown__pt__mark__".concat(t),
      children: n,
    });
  },
  Nw = e => {
    let { children: t } = e;
    return R("p", { children: t });
  },
  jw = e => {
    let { children: t } = e;
    return R("ul", { children: t });
  },
  $w = e => {
    let { children: t } = e;
    return R("li", { children: t });
  },
  bw = () => R("br", {}),
  Rw = {
    normal: e => {
      let { children: t } = e;
      return R("p", { children: t });
    },
    blockquote: e => {
      let { children: t } = e;
      return R("blockquote", { children: t });
    },
    h1: e => {
      let { children: t } = e;
      return R("h1", { children: t });
    },
    h2: e => {
      let { children: t } = e;
      return R("h2", { children: t });
    },
    h3: e => {
      let { children: t } = e;
      return R("h3", { children: t });
    },
    h4: e => {
      let { children: t } = e;
      return R("h4", { children: t });
    },
    h5: e => {
      let { children: t } = e;
      return R("h5", { children: t });
    },
    h6: e => {
      let { children: t } = e;
      return R("h6", { children: t });
    },
  },
  Nf = {
    types: {},
    block: Rw,
    marks: Sw,
    list: Cw,
    listItem: kw,
    hardBreak: bw,
    unknownType: Pw,
    unknownMark: Iw,
    unknownList: jw,
    unknownListItem: $w,
    unknownBlockStyle: Nw,
  };
function Fw(e) {
  let {
    value: t,
    components: n,
    listNestingMode: r,
    onMissingComponent: i = Tw,
  } = e;
  const o = i || Lw,
    l = Array.isArray(t) ? t : [t],
    a = hw(l, r || mw),
    u = M.useMemo(() => (n ? gw(Nf, n) : Nf), [n]),
    s = M.useMemo(() => Aw(u, o), [u, o]),
    d = a.map((p, v) => s({ node: p, index: v, isInline: !1, renderNode: s }));
  return R(Pu, { children: d });
}
const Aw = (e, t) => {
  function n(s) {
    const { node: d, index: p, isInline: v } = s,
      g = d._key || "node-".concat(p);
    return Xh(d)
      ? i(d, p, g)
      : Kh(d)
      ? r(d, p, g)
      : Gh(d)
      ? o(d, p, g)
      : Qh(d)
      ? l(d, p, g, v)
      : Yh(d)
      ? a(d, g)
      : u(d, p, g, v);
  }
  function r(s, d, p) {
    const v = jf({ node: s, index: d, isInline: !1, renderNode: n }),
      g = e.listItem,
      k = (typeof g == "function" ? g : g[s.listItem]) || e.unknownListItem;
    if (k === e.unknownListItem) {
      const m = s.listItem || "bullet";
      t(Ow(m), { type: m, nodeType: "listItemStyle" });
    }
    let T = v.children;
    if (s.style && s.style !== "normal") {
      const { listItem: m, ...c } = s;
      T = n({ node: c, index: d, isInline: !1, renderNode: n });
    }
    return R(
      k,
      { value: s, index: d, isInline: !1, renderNode: n, children: T },
      p
    );
  }
  function i(s, d, p) {
    const v = s.children.map((T, m) =>
        n({
          node: T._key ? T : { ...T, _key: "li-".concat(d, "-").concat(m) },
          index: d,
          isInline: !1,
          renderNode: n,
        })
      ),
      g = e.list,
      k = (typeof g == "function" ? g : g[s.listItem]) || e.unknownList;
    if (k === e.unknownList) {
      const T = s.listItem || "bullet";
      t(_w(T), { nodeType: "listStyle", type: T });
    }
    return R(
      k,
      { value: s, index: d, isInline: !1, renderNode: n, children: v },
      p
    );
  }
  function o(s, d, p) {
    const { markDef: v, markType: g, markKey: C } = s,
      k = e.marks[g] || e.unknownMark,
      T = s.children.map((m, c) =>
        n({ node: m, index: c, isInline: !0, renderNode: n })
      );
    return (
      k === e.unknownMark && t(Ew(g), { nodeType: "mark", type: g }),
      R(
        k,
        {
          text: Zh(s),
          value: v,
          markType: g,
          markKey: C,
          renderNode: n,
          children: T,
        },
        p
      )
    );
  }
  function l(s, d, p, v) {
    const { _key: g, ...C } = jf({
        node: s,
        index: d,
        isInline: v,
        renderNode: n,
      }),
      k = C.node.style || "normal",
      m =
        (typeof e.block == "function" ? e.block : e.block[k]) ||
        e.unknownBlockStyle;
    return (
      m === e.unknownBlockStyle &&
        t(xw(k), { nodeType: "blockStyle", type: k }),
      R(m, { ...C, value: C.node, renderNode: n }, p)
    );
  }
  function a(s, d) {
    if (
      s.text ===
      `
`
    ) {
      const p = e.hardBreak;
      return p
        ? R(p, {}, d)
        : `
`;
    }
    return s.text;
  }
  function u(s, d, p, v) {
    const g = e.types[s._type],
      C = { value: s, isInline: v, index: d, renderNode: n };
    if (g) return R(g, { ...C }, p);
    t(Jh(s._type), { nodeType: "block", type: s._type });
    const k = e.unknownType;
    return R(k, { ...C }, p);
  }
  return n;
};
function jf(e) {
  const { node: t, index: n, isInline: r, renderNode: i } = e,
    l = pw(t).map((a, u) =>
      i({ node: a, isInline: !0, index: u, renderNode: i })
    );
  return {
    _key: t._key || "block-".concat(n),
    children: l,
    index: n,
    isInline: r,
    node: t,
  };
}
function Lw() {}
var yu = {},
  Dw = {
    get exports() {
      return yu;
    },
    set exports(e) {
      yu = e;
    },
  },
  Mw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  zw = Mw,
  Uw = zw;
function ev() {}
function tv() {}
tv.resetWarningCache = ev;
var Hw = function () {
  function e(r, i, o, l, a, u) {
    if (u !== Uw) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: tv,
    resetWarningCache: ev,
  };
  return (n.PropTypes = n), n;
};
Dw.exports = Hw();
var wu = {},
  Bw = {
    get exports() {
      return wu;
    },
    set exports(e) {
      wu = e;
    },
  },
  qw = Ww,
  Vw = Object.prototype.hasOwnProperty;
function Ww() {
  for (var e = {}, t = 0; t < arguments.length; t++) {
    var n = arguments[t];
    for (var r in n) Vw.call(n, r) && (e[r] = n[r]);
  }
  return e;
}
var nv = rv,
  Rs = rv.prototype;
Rs.space = null;
Rs.normal = {};
Rs.property = {};
function rv(e, t, n) {
  (this.property = e), (this.normal = t), n && (this.space = n);
}
var $f = qw,
  Qw = nv,
  Kw = Xw;
function Xw(e) {
  for (var t = e.length, n = [], r = [], i = -1, o, l; ++i < t; )
    (o = e[i]), n.push(o.property), r.push(o.normal), (l = o.space);
  return new Qw($f.apply(null, n), $f.apply(null, r), l);
}
var Fs = Gw;
function Gw(e) {
  return e.toLowerCase();
}
var iv = ov,
  wt = ov.prototype;
wt.space = null;
wt.attribute = null;
wt.property = null;
wt.boolean = !1;
wt.booleanish = !1;
wt.overloadedBoolean = !1;
wt.number = !1;
wt.commaSeparated = !1;
wt.spaceSeparated = !1;
wt.commaOrSpaceSeparated = !1;
wt.mustUseProperty = !1;
wt.defined = !1;
function ov(e, t) {
  (this.property = e), (this.attribute = t);
}
var Ft = {},
  Yw = 0;
Ft.boolean = Dn();
Ft.booleanish = Dn();
Ft.overloadedBoolean = Dn();
Ft.number = Dn();
Ft.spaceSeparated = Dn();
Ft.commaSeparated = Dn();
Ft.commaOrSpaceSeparated = Dn();
function Dn() {
  return Math.pow(2, ++Yw);
}
var lv = iv,
  bf = Ft,
  av = As;
As.prototype = new lv();
As.prototype.defined = !0;
var uv = [
    "boolean",
    "booleanish",
    "overloadedBoolean",
    "number",
    "commaSeparated",
    "spaceSeparated",
    "commaOrSpaceSeparated",
  ],
  Zw = uv.length;
function As(e, t, n, r) {
  var i = -1,
    o;
  for (Rf(this, "space", r), lv.call(this, e, t); ++i < Zw; )
    (o = uv[i]), Rf(this, o, (n & bf[o]) === bf[o]);
}
function Rf(e, t, n) {
  n && (e[t] = n);
}
var Ff = Fs,
  Jw = nv,
  eS = av,
  ji = tS;
function tS(e) {
  var t = e.space,
    n = e.mustUseProperty || [],
    r = e.attributes || {},
    i = e.properties,
    o = e.transform,
    l = {},
    a = {},
    u,
    s;
  for (u in i)
    (s = new eS(u, o(r, u), i[u], t)),
      n.indexOf(u) !== -1 && (s.mustUseProperty = !0),
      (l[u] = s),
      (a[Ff(u)] = u),
      (a[Ff(s.attribute)] = u);
  return new Jw(l, a, t);
}
var nS = ji,
  rS = nS({
    space: "xlink",
    transform: iS,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  });
function iS(e, t) {
  return "xlink:" + t.slice(5).toLowerCase();
}
var oS = ji,
  lS = oS({
    space: "xml",
    transform: aS,
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function aS(e, t) {
  return "xml:" + t.slice(3).toLowerCase();
}
var uS = sS;
function sS(e, t) {
  return t in e ? e[t] : t;
}
var cS = uS,
  sv = fS;
function fS(e, t) {
  return cS(e, t.toLowerCase());
}
var dS = ji,
  pS = sv,
  hS = dS({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: pS,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  Ls = Ft,
  vS = ji,
  Qe = Ls.booleanish,
  ft = Ls.number,
  kn = Ls.spaceSeparated,
  mS = vS({
    transform: gS,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Qe,
      ariaAutoComplete: null,
      ariaBusy: Qe,
      ariaChecked: Qe,
      ariaColCount: ft,
      ariaColIndex: ft,
      ariaColSpan: ft,
      ariaControls: kn,
      ariaCurrent: null,
      ariaDescribedBy: kn,
      ariaDetails: null,
      ariaDisabled: Qe,
      ariaDropEffect: kn,
      ariaErrorMessage: null,
      ariaExpanded: Qe,
      ariaFlowTo: kn,
      ariaGrabbed: Qe,
      ariaHasPopup: null,
      ariaHidden: Qe,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: kn,
      ariaLevel: ft,
      ariaLive: null,
      ariaModal: Qe,
      ariaMultiLine: Qe,
      ariaMultiSelectable: Qe,
      ariaOrientation: null,
      ariaOwns: kn,
      ariaPlaceholder: null,
      ariaPosInSet: ft,
      ariaPressed: Qe,
      ariaReadOnly: Qe,
      ariaRelevant: null,
      ariaRequired: Qe,
      ariaRoleDescription: kn,
      ariaRowCount: ft,
      ariaRowIndex: ft,
      ariaRowSpan: ft,
      ariaSelected: Qe,
      ariaSetSize: ft,
      ariaSort: null,
      ariaValueMax: ft,
      ariaValueMin: ft,
      ariaValueNow: ft,
      ariaValueText: null,
      role: null,
    },
  });
function gS(e, t) {
  return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
}
var Tr = Ft,
  yS = ji,
  wS = sv,
  G = Tr.boolean,
  SS = Tr.overloadedBoolean,
  zr = Tr.booleanish,
  le = Tr.number,
  He = Tr.spaceSeparated,
  io = Tr.commaSeparated,
  CS = yS({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    transform: wS,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: io,
      acceptCharset: He,
      accessKey: He,
      action: null,
      allow: null,
      allowFullScreen: G,
      allowPaymentRequest: G,
      allowUserMedia: G,
      alt: null,
      as: null,
      async: G,
      autoCapitalize: null,
      autoComplete: He,
      autoFocus: G,
      autoPlay: G,
      capture: G,
      charSet: null,
      checked: G,
      cite: null,
      className: He,
      cols: le,
      colSpan: null,
      content: null,
      contentEditable: zr,
      controls: G,
      controlsList: He,
      coords: le | io,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: G,
      defer: G,
      dir: null,
      dirName: null,
      disabled: G,
      download: SS,
      draggable: zr,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: G,
      formTarget: null,
      headers: He,
      height: le,
      hidden: G,
      high: le,
      href: null,
      hrefLang: null,
      htmlFor: He,
      httpEquiv: He,
      id: null,
      imageSizes: null,
      imageSrcSet: io,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: G,
      itemId: null,
      itemProp: He,
      itemRef: He,
      itemScope: G,
      itemType: He,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: G,
      low: le,
      manifest: null,
      max: null,
      maxLength: le,
      media: null,
      method: null,
      min: null,
      minLength: le,
      multiple: G,
      muted: G,
      name: null,
      nonce: null,
      noModule: G,
      noValidate: G,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: G,
      optimum: le,
      pattern: null,
      ping: He,
      placeholder: null,
      playsInline: G,
      poster: null,
      preload: null,
      readOnly: G,
      referrerPolicy: null,
      rel: He,
      required: G,
      reversed: G,
      rows: le,
      rowSpan: le,
      sandbox: He,
      scope: null,
      scoped: G,
      seamless: G,
      selected: G,
      shape: null,
      size: le,
      sizes: null,
      slot: null,
      span: le,
      spellCheck: zr,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: io,
      start: le,
      step: null,
      style: null,
      tabIndex: le,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: G,
      useMap: null,
      value: zr,
      width: le,
      wrap: null,
      align: null,
      aLink: null,
      archive: He,
      axis: null,
      background: null,
      bgColor: null,
      border: le,
      borderColor: null,
      bottomMargin: le,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: G,
      declare: G,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: le,
      leftMargin: le,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: le,
      marginWidth: le,
      noResize: G,
      noHref: G,
      noShade: G,
      noWrap: G,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: le,
      rules: null,
      scheme: null,
      scrolling: zr,
      standby: null,
      summary: null,
      text: null,
      topMargin: le,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: le,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: G,
      disableRemotePlayback: G,
      prefix: null,
      property: null,
      results: le,
      security: null,
      unselectable: null,
    },
  }),
  kS = Kw,
  ES = rS,
  xS = lS,
  _S = hS,
  OS = mS,
  TS = CS,
  PS = kS([xS, ES, _S, OS, TS]),
  IS = Fs,
  NS = av,
  jS = iv,
  Ds = "data",
  $S = FS,
  bS = /^data[-\w.:]+$/i,
  cv = /-[a-z]/g,
  RS = /[A-Z]/g;
function FS(e, t) {
  var n = IS(t),
    r = t,
    i = jS;
  return n in e.normal
    ? e.property[e.normal[n]]
    : (n.length > 4 &&
        n.slice(0, 4) === Ds &&
        bS.test(t) &&
        (t.charAt(4) === "-" ? (r = AS(t)) : (t = LS(t)), (i = NS)),
      new i(r, t));
}
function AS(e) {
  var t = e.slice(5).replace(cv, MS);
  return Ds + t.charAt(0).toUpperCase() + t.slice(1);
}
function LS(e) {
  var t = e.slice(4);
  return cv.test(t)
    ? e
    : ((t = t.replace(RS, DS)), t.charAt(0) !== "-" && (t = "-" + t), Ds + t);
}
function DS(e) {
  return "-" + e.toLowerCase();
}
function MS(e) {
  return e.charAt(1).toUpperCase();
}
var zS = US,
  Af = /[#.]/g;
function US(e, t) {
  for (var n = e || "", r = t || "div", i = {}, o = 0, l, a, u; o < n.length; )
    (Af.lastIndex = o),
      (u = Af.exec(n)),
      (l = n.slice(o, u ? u.index : n.length)),
      l &&
        (a
          ? a === "#"
            ? (i.id = l)
            : i.className
            ? i.className.push(l)
            : (i.className = [l])
          : (r = l),
        (o += l.length)),
      u && ((a = u[0]), o++);
  return { type: "element", tagName: r, properties: i, children: [] };
}
var Ms = {};
Ms.parse = qS;
Ms.stringify = VS;
var Lf = "",
  HS = " ",
  BS = /[ \t\n\r\f]+/g;
function qS(e) {
  var t = String(e || Lf).trim();
  return t === Lf ? [] : t.split(BS);
}
function VS(e) {
  return e.join(HS).trim();
}
var zs = {};
zs.parse = WS;
zs.stringify = QS;
var Su = ",",
  Df = " ",
  Wr = "";
function WS(e) {
  for (
    var t = [], n = String(e || Wr), r = n.indexOf(Su), i = 0, o = !1, l;
    !o;

  )
    r === -1 && ((r = n.length), (o = !0)),
      (l = n.slice(i, r).trim()),
      (l || !o) && t.push(l),
      (i = r + 1),
      (r = n.indexOf(Su, i));
  return t;
}
function QS(e, t) {
  var n = t || {},
    r = n.padLeft === !1 ? Wr : Df,
    i = n.padRight ? Df : Wr;
  return (
    e[e.length - 1] === Wr && (e = e.concat(Wr)), e.join(i + Su + r).trim()
  );
}
var KS = $S,
  Mf = Fs,
  XS = zS,
  zf = Ms.parse,
  Uf = zs.parse,
  GS = ZS,
  YS = {}.hasOwnProperty;
function ZS(e, t, n) {
  var r = n ? rC(n) : null;
  return i;
  function i(l, a) {
    var u = XS(l, t),
      s = Array.prototype.slice.call(arguments, 2),
      d = u.tagName.toLowerCase(),
      p;
    if (
      ((u.tagName = r && YS.call(r, d) ? r[d] : d),
      a && JS(a, u) && (s.unshift(a), (a = null)),
      a)
    )
      for (p in a) o(u.properties, p, a[p]);
    return (
      fv(u.children, s),
      u.tagName === "template" &&
        ((u.content = { type: "root", children: u.children }),
        (u.children = [])),
      u
    );
  }
  function o(l, a, u) {
    var s, d, p;
    u == null ||
      u !== u ||
      ((s = KS(e, a)),
      (d = s.property),
      (p = u),
      typeof p == "string" &&
        (s.spaceSeparated
          ? (p = zf(p))
          : s.commaSeparated
          ? (p = Uf(p))
          : s.commaOrSpaceSeparated && (p = zf(Uf(p).join(" ")))),
      d === "style" && typeof u != "string" && (p = nC(p)),
      d === "className" && l.className && (p = l.className.concat(p)),
      (l[d] = tC(s, d, p)));
  }
}
function JS(e, t) {
  return typeof e == "string" || "length" in e || eC(t.tagName, e);
}
function eC(e, t) {
  var n = t.type;
  return e === "input" || !n || typeof n != "string"
    ? !1
    : typeof t.children == "object" && "length" in t.children
    ? !0
    : ((n = n.toLowerCase()),
      e === "button"
        ? n !== "menu" && n !== "submit" && n !== "reset" && n !== "button"
        : "value" in t);
}
function fv(e, t) {
  var n, r;
  if (typeof t == "string" || typeof t == "number") {
    e.push({ type: "text", value: String(t) });
    return;
  }
  if (typeof t == "object" && "length" in t) {
    for (n = -1, r = t.length; ++n < r; ) fv(e, t[n]);
    return;
  }
  if (typeof t != "object" || !("type" in t))
    throw new Error("Expected node, nodes, or string, got `" + t + "`");
  e.push(t);
}
function tC(e, t, n) {
  var r, i, o;
  if (typeof n != "object" || !("length" in n)) return Hf(e, t, n);
  for (i = n.length, r = -1, o = []; ++r < i; ) o[r] = Hf(e, t, n[r]);
  return o;
}
function Hf(e, t, n) {
  var r = n;
  return (
    e.number || e.positiveNumber
      ? !isNaN(r) && r !== "" && (r = Number(r))
      : (e.boolean || e.overloadedBoolean) &&
        typeof r == "string" &&
        (r === "" || Mf(n) === Mf(t)) &&
        (r = !0),
    r
  );
}
function nC(e) {
  var t = [],
    n;
  for (n in e) t.push([n, e[n]].join(": "));
  return t.join("; ");
}
function rC(e) {
  for (var t = e.length, n = -1, r = {}, i; ++n < t; )
    (i = e[n]), (r[i.toLowerCase()] = i);
  return r;
}
var iC = PS,
  oC = GS,
  dv = oC(iC, "div");
dv.displayName = "html";
var lC = dv;
(function (e) {
  e.exports = lC;
})(Bw);
const aC = "Æ",
  uC = "&",
  sC = "Á",
  cC = "Â",
  fC = "À",
  dC = "Å",
  pC = "Ã",
  hC = "Ä",
  vC = "©",
  mC = "Ç",
  gC = "Ð",
  yC = "É",
  wC = "Ê",
  SC = "È",
  CC = "Ë",
  kC = ">",
  EC = "Í",
  xC = "Î",
  _C = "Ì",
  OC = "Ï",
  TC = "<",
  PC = "Ñ",
  IC = "Ó",
  NC = "Ô",
  jC = "Ò",
  $C = "Ø",
  bC = "Õ",
  RC = "Ö",
  FC = '"',
  AC = "®",
  LC = "Þ",
  DC = "Ú",
  MC = "Û",
  zC = "Ù",
  UC = "Ü",
  HC = "Ý",
  BC = "á",
  qC = "â",
  VC = "´",
  WC = "æ",
  QC = "à",
  KC = "&",
  XC = "å",
  GC = "ã",
  YC = "ä",
  ZC = "¦",
  JC = "ç",
  ek = "¸",
  tk = "¢",
  nk = "©",
  rk = "¤",
  ik = "°",
  ok = "÷",
  lk = "é",
  ak = "ê",
  uk = "è",
  sk = "ð",
  ck = "ë",
  fk = "½",
  dk = "¼",
  pk = "¾",
  hk = ">",
  vk = "í",
  mk = "î",
  gk = "¡",
  yk = "ì",
  wk = "¿",
  Sk = "ï",
  Ck = "«",
  kk = "<",
  Ek = "¯",
  xk = "µ",
  _k = "·",
  Ok = " ",
  Tk = "¬",
  Pk = "ñ",
  Ik = "ó",
  Nk = "ô",
  jk = "ò",
  $k = "ª",
  bk = "º",
  Rk = "ø",
  Fk = "õ",
  Ak = "ö",
  Lk = "¶",
  Dk = "±",
  Mk = "£",
  zk = '"',
  Uk = "»",
  Hk = "®",
  Bk = "§",
  qk = "­",
  Vk = "¹",
  Wk = "²",
  Qk = "³",
  Kk = "ß",
  Xk = "þ",
  Gk = "×",
  Yk = "ú",
  Zk = "û",
  Jk = "ù",
  eE = "¨",
  tE = "ü",
  nE = "ý",
  rE = "¥",
  iE = "ÿ",
  oE = {
    AElig: aC,
    AMP: uC,
    Aacute: sC,
    Acirc: cC,
    Agrave: fC,
    Aring: dC,
    Atilde: pC,
    Auml: hC,
    COPY: vC,
    Ccedil: mC,
    ETH: gC,
    Eacute: yC,
    Ecirc: wC,
    Egrave: SC,
    Euml: CC,
    GT: kC,
    Iacute: EC,
    Icirc: xC,
    Igrave: _C,
    Iuml: OC,
    LT: TC,
    Ntilde: PC,
    Oacute: IC,
    Ocirc: NC,
    Ograve: jC,
    Oslash: $C,
    Otilde: bC,
    Ouml: RC,
    QUOT: FC,
    REG: AC,
    THORN: LC,
    Uacute: DC,
    Ucirc: MC,
    Ugrave: zC,
    Uuml: UC,
    Yacute: HC,
    aacute: BC,
    acirc: qC,
    acute: VC,
    aelig: WC,
    agrave: QC,
    amp: KC,
    aring: XC,
    atilde: GC,
    auml: YC,
    brvbar: ZC,
    ccedil: JC,
    cedil: ek,
    cent: tk,
    copy: nk,
    curren: rk,
    deg: ik,
    divide: ok,
    eacute: lk,
    ecirc: ak,
    egrave: uk,
    eth: sk,
    euml: ck,
    frac12: fk,
    frac14: dk,
    frac34: pk,
    gt: hk,
    iacute: vk,
    icirc: mk,
    iexcl: gk,
    igrave: yk,
    iquest: wk,
    iuml: Sk,
    laquo: Ck,
    lt: kk,
    macr: Ek,
    micro: xk,
    middot: _k,
    nbsp: Ok,
    not: Tk,
    ntilde: Pk,
    oacute: Ik,
    ocirc: Nk,
    ograve: jk,
    ordf: $k,
    ordm: bk,
    oslash: Rk,
    otilde: Fk,
    ouml: Ak,
    para: Lk,
    plusmn: Dk,
    pound: Mk,
    quot: zk,
    raquo: Uk,
    reg: Hk,
    sect: Bk,
    shy: qk,
    sup1: Vk,
    sup2: Wk,
    sup3: Qk,
    szlig: Kk,
    thorn: Xk,
    times: Gk,
    uacute: Yk,
    ucirc: Zk,
    ugrave: Jk,
    uml: eE,
    uuml: tE,
    yacute: nE,
    yen: rE,
    yuml: iE,
  },
  lE = {
    0: "�",
    128: "€",
    130: "‚",
    131: "ƒ",
    132: "„",
    133: "…",
    134: "†",
    135: "‡",
    136: "ˆ",
    137: "‰",
    138: "Š",
    139: "‹",
    140: "Œ",
    142: "Ž",
    145: "‘",
    146: "’",
    147: "“",
    148: "”",
    149: "•",
    150: "–",
    151: "—",
    152: "˜",
    153: "™",
    154: "š",
    155: "›",
    156: "œ",
    158: "ž",
    159: "Ÿ",
  };
var pv = aE;
function aE(e) {
  var t = typeof e == "string" ? e.charCodeAt(0) : e;
  return t >= 48 && t <= 57;
}
var uE = sE;
function sE(e) {
  var t = typeof e == "string" ? e.charCodeAt(0) : e;
  return (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57);
}
var cE = fE;
function fE(e) {
  var t = typeof e == "string" ? e.charCodeAt(0) : e;
  return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
}
var dE = cE,
  pE = pv,
  hE = vE;
function vE(e) {
  return dE(e) || pE(e);
}
var oo,
  mE = 59,
  gE = yE;
function yE(e) {
  var t = "&" + e + ";",
    n;
  return (
    (oo = oo || document.createElement("i")),
    (oo.innerHTML = t),
    (n = oo.textContent),
    (n.charCodeAt(n.length - 1) === mE && e !== "semi") || n === t ? !1 : n
  );
}
var Bf = oE,
  qf = lE,
  wE = pv,
  SE = uE,
  hv = hE,
  CE = gE,
  kE = FE,
  EE = {}.hasOwnProperty,
  Bn = String.fromCharCode,
  xE = Function.prototype,
  Vf = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: !1,
    nonTerminated: !0,
  },
  _E = 9,
  Wf = 10,
  OE = 12,
  TE = 32,
  Qf = 38,
  PE = 59,
  IE = 60,
  NE = 61,
  jE = 35,
  $E = 88,
  bE = 120,
  RE = 65533,
  Qn = "named",
  Us = "hexadecimal",
  Hs = "decimal",
  Bs = {};
Bs[Us] = 16;
Bs[Hs] = 10;
var Cl = {};
Cl[Qn] = hv;
Cl[Hs] = wE;
Cl[Us] = SE;
var vv = 1,
  mv = 2,
  gv = 3,
  yv = 4,
  wv = 5,
  Cu = 6,
  Sv = 7,
  Sn = {};
Sn[vv] = "Named character references must be terminated by a semicolon";
Sn[mv] = "Numeric character references must be terminated by a semicolon";
Sn[gv] = "Named character references cannot be empty";
Sn[yv] = "Numeric character references cannot be empty";
Sn[wv] = "Named character references must be known";
Sn[Cu] = "Numeric character references cannot be disallowed";
Sn[Sv] =
  "Numeric character references cannot be outside the permissible Unicode range";
function FE(e, t) {
  var n = {},
    r,
    i;
  t || (t = {});
  for (i in Vf) (r = t[i]), (n[i] = r ?? Vf[i]);
  return (
    (n.position.indent || n.position.start) &&
      ((n.indent = n.position.indent || []), (n.position = n.position.start)),
    AE(e, n)
  );
}
function AE(e, t) {
  var n = t.additional,
    r = t.nonTerminated,
    i = t.text,
    o = t.reference,
    l = t.warning,
    a = t.textContext,
    u = t.referenceContext,
    s = t.warningContext,
    d = t.position,
    p = t.indent || [],
    v = e.length,
    g = 0,
    C = -1,
    k = d.column || 1,
    T = d.line || 1,
    m = "",
    c = [],
    f,
    h,
    w,
    y,
    S,
    _,
    O,
    b,
    E,
    x,
    I,
    P,
    $,
    z,
    Q,
    j,
    A,
    L,
    H;
  for (
    typeof n == "string" && (n = n.charCodeAt(0)),
      j = W(),
      b = l ? Ce : xE,
      g--,
      v++;
    ++g < v;

  )
    if ((S === Wf && (k = p[C] || 1), (S = e.charCodeAt(g)), S === Qf)) {
      if (
        ((O = e.charCodeAt(g + 1)),
        O === _E ||
          O === Wf ||
          O === OE ||
          O === TE ||
          O === Qf ||
          O === IE ||
          O !== O ||
          (n && O === n))
      ) {
        (m += Bn(S)), k++;
        continue;
      }
      for (
        $ = g + 1,
          P = $,
          H = $,
          O === jE
            ? ((H = ++P),
              (O = e.charCodeAt(H)),
              O === $E || O === bE ? ((z = Us), (H = ++P)) : (z = Hs))
            : (z = Qn),
          f = "",
          I = "",
          y = "",
          Q = Cl[z],
          H--;
        ++H < v && ((O = e.charCodeAt(H)), !!Q(O));

      )
        (y += Bn(O)), z === Qn && EE.call(Bf, y) && ((f = y), (I = Bf[y]));
      (w = e.charCodeAt(H) === PE),
        w && (H++, (h = z === Qn ? CE(y) : !1), h && ((f = y), (I = h))),
        (L = 1 + H - $),
        (!w && !r) ||
          (y
            ? z === Qn
              ? (w && !I
                  ? b(wv, 1)
                  : (f !== y && ((H = P + f.length), (L = 1 + H - P), (w = !1)),
                    w ||
                      ((E = f ? vv : gv),
                      t.attribute
                        ? ((O = e.charCodeAt(H)),
                          O === NE
                            ? (b(E, L), (I = null))
                            : hv(O)
                            ? (I = null)
                            : b(E, L))
                        : b(E, L))),
                (_ = I))
              : (w || b(mv, L),
                (_ = parseInt(y, Bs[z])),
                LE(_)
                  ? (b(Sv, L), (_ = Bn(RE)))
                  : _ in qf
                  ? (b(Cu, L), (_ = qf[_]))
                  : ((x = ""),
                    DE(_) && b(Cu, L),
                    _ > 65535 &&
                      ((_ -= 65536),
                      (x += Bn((_ >>> 10) | 55296)),
                      (_ = 56320 | (_ & 1023))),
                    (_ = x + Bn(_))))
            : z !== Qn && b(yv, L)),
        _
          ? (te(),
            (j = W()),
            (g = H - 1),
            (k += H - $ + 1),
            c.push(_),
            (A = W()),
            A.offset++,
            o && o.call(u, _, { start: j, end: A }, e.slice($ - 1, H)),
            (j = A))
          : ((y = e.slice($ - 1, H)), (m += y), (k += y.length), (g = H - 1));
    } else
      S === 10 && (T++, C++, (k = 0)), S === S ? ((m += Bn(S)), k++) : te();
  return c.join("");
  function W() {
    return { line: T, column: k, offset: g + (d.offset || 0) };
  }
  function Ce(ve, me) {
    var Pe = W();
    (Pe.column += me), (Pe.offset += me), l.call(s, Sn[ve], Pe, ve);
  }
  function te() {
    m && (c.push(m), i && i.call(a, m, { start: j, end: W() }), (m = ""));
  }
}
function LE(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111;
}
function DE(e) {
  return (
    (e >= 1 && e <= 8) ||
    e === 11 ||
    (e >= 13 && e <= 31) ||
    (e >= 127 && e <= 159) ||
    (e >= 64976 && e <= 65007) ||
    (e & 65535) === 65535 ||
    (e & 65535) === 65534
  );
}
var ku = {},
  ME = {
    get exports() {
      return ku;
    },
    set exports(e) {
      ku = e;
    },
  };
(function (e) {
  var t =
    typeof window < "u"
      ? window
      : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope
      ? self
      : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */ var n = (function (r) {
    var i = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      o = 0,
      l = {},
      a = {
        manual: r.Prism && r.Prism.manual,
        disableWorkerMessageHandler:
          r.Prism && r.Prism.disableWorkerMessageHandler,
        util: {
          encode: function c(f) {
            return f instanceof u
              ? new u(f.type, c(f.content), f.alias)
              : Array.isArray(f)
              ? f.map(c)
              : f
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/\u00a0/g, " ");
          },
          type: function (c) {
            return Object.prototype.toString.call(c).slice(8, -1);
          },
          objId: function (c) {
            return (
              c.__id || Object.defineProperty(c, "__id", { value: ++o }), c.__id
            );
          },
          clone: function c(f, h) {
            h = h || {};
            var w, y;
            switch (a.util.type(f)) {
              case "Object":
                if (((y = a.util.objId(f)), h[y])) return h[y];
                (w = {}), (h[y] = w);
                for (var S in f) f.hasOwnProperty(S) && (w[S] = c(f[S], h));
                return w;
              case "Array":
                return (
                  (y = a.util.objId(f)),
                  h[y]
                    ? h[y]
                    : ((w = []),
                      (h[y] = w),
                      f.forEach(function (_, O) {
                        w[O] = c(_, h);
                      }),
                      w)
                );
              default:
                return f;
            }
          },
          getLanguage: function (c) {
            for (; c; ) {
              var f = i.exec(c.className);
              if (f) return f[1].toLowerCase();
              c = c.parentElement;
            }
            return "none";
          },
          setLanguage: function (c, f) {
            (c.className = c.className.replace(RegExp(i, "gi"), "")),
              c.classList.add("language-" + f);
          },
          currentScript: function () {
            if (typeof document > "u") return null;
            if ("currentScript" in document && 1 < 2)
              return document.currentScript;
            try {
              throw new Error();
            } catch (w) {
              var c = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack) ||
                [])[1];
              if (c) {
                var f = document.getElementsByTagName("script");
                for (var h in f) if (f[h].src == c) return f[h];
              }
              return null;
            }
          },
          isActive: function (c, f, h) {
            for (var w = "no-" + f; c; ) {
              var y = c.classList;
              if (y.contains(f)) return !0;
              if (y.contains(w)) return !1;
              c = c.parentElement;
            }
            return !!h;
          },
        },
        languages: {
          plain: l,
          plaintext: l,
          text: l,
          txt: l,
          extend: function (c, f) {
            var h = a.util.clone(a.languages[c]);
            for (var w in f) h[w] = f[w];
            return h;
          },
          insertBefore: function (c, f, h, w) {
            w = w || a.languages;
            var y = w[c],
              S = {};
            for (var _ in y)
              if (y.hasOwnProperty(_)) {
                if (_ == f)
                  for (var O in h) h.hasOwnProperty(O) && (S[O] = h[O]);
                h.hasOwnProperty(_) || (S[_] = y[_]);
              }
            var b = w[c];
            return (
              (w[c] = S),
              a.languages.DFS(a.languages, function (E, x) {
                x === b && E != c && (this[E] = S);
              }),
              S
            );
          },
          DFS: function c(f, h, w, y) {
            y = y || {};
            var S = a.util.objId;
            for (var _ in f)
              if (f.hasOwnProperty(_)) {
                h.call(f, _, f[_], w || _);
                var O = f[_],
                  b = a.util.type(O);
                b === "Object" && !y[S(O)]
                  ? ((y[S(O)] = !0), c(O, h, null, y))
                  : b === "Array" &&
                    !y[S(O)] &&
                    ((y[S(O)] = !0), c(O, h, _, y));
              }
          },
        },
        plugins: {},
        highlightAll: function (c, f) {
          a.highlightAllUnder(document, c, f);
        },
        highlightAllUnder: function (c, f, h) {
          var w = {
            callback: h,
            container: c,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          a.hooks.run("before-highlightall", w),
            (w.elements = Array.prototype.slice.apply(
              w.container.querySelectorAll(w.selector)
            )),
            a.hooks.run("before-all-elements-highlight", w);
          for (var y = 0, S; (S = w.elements[y++]); )
            a.highlightElement(S, f === !0, w.callback);
        },
        highlightElement: function (c, f, h) {
          var w = a.util.getLanguage(c),
            y = a.languages[w];
          a.util.setLanguage(c, w);
          var S = c.parentElement;
          S && S.nodeName.toLowerCase() === "pre" && a.util.setLanguage(S, w);
          var _ = c.textContent,
            O = { element: c, language: w, grammar: y, code: _ };
          function b(x) {
            (O.highlightedCode = x),
              a.hooks.run("before-insert", O),
              (O.element.innerHTML = O.highlightedCode),
              a.hooks.run("after-highlight", O),
              a.hooks.run("complete", O),
              h && h.call(O.element);
          }
          if (
            (a.hooks.run("before-sanity-check", O),
            (S = O.element.parentElement),
            S &&
              S.nodeName.toLowerCase() === "pre" &&
              !S.hasAttribute("tabindex") &&
              S.setAttribute("tabindex", "0"),
            !O.code)
          ) {
            a.hooks.run("complete", O), h && h.call(O.element);
            return;
          }
          if ((a.hooks.run("before-highlight", O), !O.grammar)) {
            b(a.util.encode(O.code));
            return;
          }
          if (f && r.Worker) {
            var E = new Worker(a.filename);
            (E.onmessage = function (x) {
              b(x.data);
            }),
              E.postMessage(
                JSON.stringify({
                  language: O.language,
                  code: O.code,
                  immediateClose: !0,
                })
              );
          } else b(a.highlight(O.code, O.grammar, O.language));
        },
        highlight: function (c, f, h) {
          var w = { code: c, grammar: f, language: h };
          if ((a.hooks.run("before-tokenize", w), !w.grammar))
            throw new Error(
              'The language "' + w.language + '" has no grammar.'
            );
          return (
            (w.tokens = a.tokenize(w.code, w.grammar)),
            a.hooks.run("after-tokenize", w),
            u.stringify(a.util.encode(w.tokens), w.language)
          );
        },
        tokenize: function (c, f) {
          var h = f.rest;
          if (h) {
            for (var w in h) f[w] = h[w];
            delete f.rest;
          }
          var y = new p();
          return v(y, y.head, c), d(c, y, f, y.head, 0), C(y);
        },
        hooks: {
          all: {},
          add: function (c, f) {
            var h = a.hooks.all;
            (h[c] = h[c] || []), h[c].push(f);
          },
          run: function (c, f) {
            var h = a.hooks.all[c];
            if (!(!h || !h.length)) for (var w = 0, y; (y = h[w++]); ) y(f);
          },
        },
        Token: u,
      };
    r.Prism = a;
    function u(c, f, h, w) {
      (this.type = c),
        (this.content = f),
        (this.alias = h),
        (this.length = (w || "").length | 0);
    }
    u.stringify = function c(f, h) {
      if (typeof f == "string") return f;
      if (Array.isArray(f)) {
        var w = "";
        return (
          f.forEach(function (b) {
            w += c(b, h);
          }),
          w
        );
      }
      var y = {
          type: f.type,
          content: c(f.content, h),
          tag: "span",
          classes: ["token", f.type],
          attributes: {},
          language: h,
        },
        S = f.alias;
      S &&
        (Array.isArray(S)
          ? Array.prototype.push.apply(y.classes, S)
          : y.classes.push(S)),
        a.hooks.run("wrap", y);
      var _ = "";
      for (var O in y.attributes)
        _ +=
          " " +
          O +
          '="' +
          (y.attributes[O] || "").replace(/"/g, "&quot;") +
          '"';
      return (
        "<" +
        y.tag +
        ' class="' +
        y.classes.join(" ") +
        '"' +
        _ +
        ">" +
        y.content +
        "</" +
        y.tag +
        ">"
      );
    };
    function s(c, f, h, w) {
      c.lastIndex = f;
      var y = c.exec(h);
      if (y && w && y[1]) {
        var S = y[1].length;
        (y.index += S), (y[0] = y[0].slice(S));
      }
      return y;
    }
    function d(c, f, h, w, y, S) {
      for (var _ in h)
        if (!(!h.hasOwnProperty(_) || !h[_])) {
          var O = h[_];
          O = Array.isArray(O) ? O : [O];
          for (var b = 0; b < O.length; ++b) {
            if (S && S.cause == _ + "," + b) return;
            var E = O[b],
              x = E.inside,
              I = !!E.lookbehind,
              P = !!E.greedy,
              $ = E.alias;
            if (P && !E.pattern.global) {
              var z = E.pattern.toString().match(/[imsuy]*$/)[0];
              E.pattern = RegExp(E.pattern.source, z + "g");
            }
            for (
              var Q = E.pattern || E, j = w.next, A = y;
              j !== f.tail && !(S && A >= S.reach);
              A += j.value.length, j = j.next
            ) {
              var L = j.value;
              if (f.length > c.length) return;
              if (!(L instanceof u)) {
                var H = 1,
                  W;
                if (P) {
                  if (((W = s(Q, A, c, I)), !W || W.index >= c.length)) break;
                  var me = W.index,
                    Ce = W.index + W[0].length,
                    te = A;
                  for (te += j.value.length; me >= te; )
                    (j = j.next), (te += j.value.length);
                  if (((te -= j.value.length), (A = te), j.value instanceof u))
                    continue;
                  for (
                    var ve = j;
                    ve !== f.tail && (te < Ce || typeof ve.value == "string");
                    ve = ve.next
                  )
                    H++, (te += ve.value.length);
                  H--, (L = c.slice(A, te)), (W.index -= A);
                } else if (((W = s(Q, 0, L, I)), !W)) continue;
                var me = W.index,
                  Pe = W[0],
                  At = L.slice(0, me),
                  ct = L.slice(me + Pe.length),
                  Pt = A + L.length;
                S && Pt > S.reach && (S.reach = Pt);
                var be = j.prev;
                At && ((be = v(f, be, At)), (A += At.length)), g(f, be, H);
                var El = new u(_, x ? a.tokenize(Pe, x) : Pe, $, Pe);
                if (((j = v(f, be, El)), ct && v(f, j, ct), H > 1)) {
                  var Pr = { cause: _ + "," + b, reach: Pt };
                  d(c, f, h, j.prev, A, Pr),
                    S && Pr.reach > S.reach && (S.reach = Pr.reach);
                }
              }
            }
          }
        }
    }
    function p() {
      var c = { value: null, prev: null, next: null },
        f = { value: null, prev: c, next: null };
      (c.next = f), (this.head = c), (this.tail = f), (this.length = 0);
    }
    function v(c, f, h) {
      var w = f.next,
        y = { value: h, prev: f, next: w };
      return (f.next = y), (w.prev = y), c.length++, y;
    }
    function g(c, f, h) {
      for (var w = f.next, y = 0; y < h && w !== c.tail; y++) w = w.next;
      (f.next = w), (w.prev = f), (c.length -= y);
    }
    function C(c) {
      for (var f = [], h = c.head.next; h !== c.tail; )
        f.push(h.value), (h = h.next);
      return f;
    }
    if (!r.document)
      return (
        r.addEventListener &&
          (a.disableWorkerMessageHandler ||
            r.addEventListener(
              "message",
              function (c) {
                var f = JSON.parse(c.data),
                  h = f.language,
                  w = f.code,
                  y = f.immediateClose;
                r.postMessage(a.highlight(w, a.languages[h], h)),
                  y && r.close();
              },
              !1
            )),
        a
      );
    var k = a.util.currentScript();
    k &&
      ((a.filename = k.src), k.hasAttribute("data-manual") && (a.manual = !0));
    function T() {
      a.manual || a.highlightAll();
    }
    if (!a.manual) {
      var m = document.readyState;
      m === "loading" || (m === "interactive" && k && k.defer)
        ? document.addEventListener("DOMContentLoaded", T)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(T)
        : window.setTimeout(T, 16);
    }
    return a;
  })(t);
  e.exports && (e.exports = n), typeof oi < "u" && (oi.Prism = n);
})(ME);
var zE = qs;
qs.displayName = "markup";
qs.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
function qs(e) {
  (e.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
          },
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
    (e.languages.markup.tag.inside["attr-value"].inside.entity =
      e.languages.markup.entity),
    (e.languages.markup.doctype.inside["internal-subset"].inside =
      e.languages.markup),
    e.hooks.add("wrap", function (t) {
      t.type === "entity" &&
        (t.attributes.title = t.content.value.replace(/&amp;/, "&"));
    }),
    Object.defineProperty(e.languages.markup.tag, "addInlined", {
      value: function (n, r) {
        var i = {};
        (i["language-" + r] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: e.languages[r],
        }),
          (i.cdata = /^<!\[CDATA\[|\]\]>$/i);
        var o = {
          "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: i },
        };
        o["language-" + r] = { pattern: /[\s\S]+/, inside: e.languages[r] };
        var l = {};
        (l[n] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return n;
              }
            ),
            "i"
          ),
          lookbehind: !0,
          greedy: !0,
          inside: o,
        }),
          e.languages.insertBefore("markup", "cdata", l);
      },
    }),
    Object.defineProperty(e.languages.markup.tag, "addAttribute", {
      value: function (t, n) {
        e.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              "(?:" +
              t +
              ")" +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [n, "language-" + n],
                  inside: e.languages[n],
                },
                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
              },
            },
          },
        });
      },
    }),
    (e.languages.html = e.languages.markup),
    (e.languages.mathml = e.languages.markup),
    (e.languages.svg = e.languages.markup),
    (e.languages.xml = e.languages.extend("markup", {})),
    (e.languages.ssml = e.languages.xml),
    (e.languages.atom = e.languages.xml),
    (e.languages.rss = e.languages.xml);
}
var UE = Vs;
Vs.displayName = "css";
Vs.aliases = [];
function Vs(e) {
  (function (t) {
    var n =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (t.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector",
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          "\\burl\\((?:" +
            n.source +
            "|" +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ")\\)",
          "i"
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp("^" + n.source + "$"), alias: "url" },
        },
      },
      selector: {
        pattern: RegExp(
          `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
            n.source +
            ")*(?=\\s*\\{)"
        ),
        lookbehind: !0,
      },
      string: { pattern: n, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0,
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/,
    }),
      (t.languages.css.atrule.inside.rest = t.languages.css);
    var r = t.languages.markup;
    r && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css"));
  })(e);
}
var HE = Ws;
Ws.displayName = "clike";
Ws.aliases = [];
function Ws(e) {
  e.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    "class-name": {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  };
}
var Cv = Qs;
Qs.displayName = "javascript";
Qs.aliases = ["js"];
function Qs(e) {
  (e.languages.javascript = e.languages.extend("clike", {
    "class-name": [
      e.languages.clike["class-name"],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          "(?:" +
          (/NaN|Infinity/.source +
            "|" +
            /0[bB][01]+(?:_[01]+)*n?/.source +
            "|" +
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
            "|" +
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
            "|" +
            /\d+(?:_\d+)*n/.source +
            "|" +
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
              .source) +
          ")" +
          /(?![\w$])/.source
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
    (e.languages.javascript["class-name"][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    e.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern:
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: e.languages.regex,
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/,
        },
      },
      "function-variable": {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function",
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: e.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    e.languages.insertBefore("javascript", "string", {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
      "template-string": {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": { pattern: /^`|`$/, alias: "string" },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation",
              },
              rest: e.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      "string-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
      },
    }),
    e.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property",
      },
    }),
    e.languages.markup &&
      (e.languages.markup.tag.addInlined("script", "javascript"),
      e.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        "javascript"
      )),
    (e.languages.js = e.languages.javascript);
}
var Qr =
    typeof globalThis == "object"
      ? globalThis
      : typeof self == "object"
      ? self
      : typeof window == "object"
      ? window
      : typeof oi == "object"
      ? oi
      : {},
  BE = ox();
Qr.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
var qE = wu,
  VE = kE,
  kv = ku,
  WE = zE,
  QE = UE,
  KE = HE,
  XE = Cv;
BE();
var Ks = {}.hasOwnProperty;
function Ev() {}
Ev.prototype = kv;
var Se = new Ev(),
  GE = Se;
Se.highlight = ZE;
Se.register = $i;
Se.alias = YE;
Se.registered = JE;
Se.listLanguages = ex;
$i(WE);
$i(QE);
$i(KE);
$i(XE);
Se.util.encode = rx;
Se.Token.stringify = tx;
function $i(e) {
  if (typeof e != "function" || !e.displayName)
    throw new Error("Expected `function` for `grammar`, got `" + e + "`");
  Se.languages[e.displayName] === void 0 && e(Se);
}
function YE(e, t) {
  var n = Se.languages,
    r = e,
    i,
    o,
    l,
    a;
  t && ((r = {}), (r[e] = t));
  for (i in r)
    for (
      o = r[i], o = typeof o == "string" ? [o] : o, l = o.length, a = -1;
      ++a < l;

    )
      n[o[a]] = n[i];
}
function ZE(e, t) {
  var n = kv.highlight,
    r;
  if (typeof e != "string")
    throw new Error("Expected `string` for `value`, got `" + e + "`");
  if (Se.util.type(t) === "Object") (r = t), (t = null);
  else {
    if (typeof t != "string")
      throw new Error("Expected `string` for `name`, got `" + t + "`");
    if (Ks.call(Se.languages, t)) r = Se.languages[t];
    else throw new Error("Unknown language: `" + t + "` is not registered");
  }
  return n.call(this, e, r, t);
}
function JE(e) {
  if (typeof e != "string")
    throw new Error("Expected `string` for `language`, got `" + e + "`");
  return Ks.call(Se.languages, e);
}
function ex() {
  var e = Se.languages,
    t = [],
    n;
  for (n in e) Ks.call(e, n) && typeof e[n] == "object" && t.push(n);
  return t;
}
function tx(e, t, n) {
  var r;
  return typeof e == "string"
    ? { type: "text", value: e }
    : Se.util.type(e) === "Array"
    ? nx(e, t)
    : ((r = {
        type: e.type,
        content: Se.Token.stringify(e.content, t, n),
        tag: "span",
        classes: ["token", e.type],
        attributes: {},
        language: t,
        parent: n,
      }),
      e.alias && (r.classes = r.classes.concat(e.alias)),
      Se.hooks.run("wrap", r),
      qE(r.tag + "." + r.classes.join("."), ix(r.attributes), r.content));
}
function nx(e, t) {
  for (var n = [], r = e.length, i = -1, o; ++i < r; )
    (o = e[i]), o !== "" && o !== null && o !== void 0 && n.push(o);
  for (i = -1, r = n.length; ++i < r; )
    (o = n[i]), (n[i] = Se.Token.stringify(o, t, n));
  return n;
}
function rx(e) {
  return e;
}
function ix(e) {
  var t;
  for (t in e) e[t] = VE(e[t]);
  return e;
}
function ox() {
  var e = "Prism" in Qr,
    t = e ? Qr.Prism : void 0;
  return n;
  function n() {
    e ? (Qr.Prism = t) : delete Qr.Prism, (e = void 0), (t = void 0);
  }
}
var xv = {},
  lx = M;
function ax(e, t, n) {
  if (e.tagName) {
    var r =
      e.properties && Array.isArray(e.properties.className)
        ? e.properties.className.join(" ")
        : e.properties.className;
    return lx.createElement(
      e.tagName,
      Object.assign({ key: "fract-".concat(n, "-").concat(t) }, e.properties, {
        className: r,
      }),
      e.children && e.children.map(_v(n + 1))
    );
  }
  return e.value;
}
function _v(e) {
  return function (n, r) {
    return ax(n, r, e);
  };
}
xv.depth = _v;
var Ov = Tv;
function Tv(e) {
  if (e == null) return fx;
  if (typeof e == "string") return cx(e);
  if (typeof e == "object") return "length" in e ? sx(e) : ux(e);
  if (typeof e == "function") return e;
  throw new Error("Expected function, string, or object as test");
}
function ux(e) {
  return t;
  function t(n) {
    var r;
    for (r in e) if (n[r] !== e[r]) return !1;
    return !0;
  }
}
function sx(e) {
  for (var t = [], n = -1; ++n < e.length; ) t[n] = Tv(e[n]);
  return r;
  function r() {
    for (var i = -1; ++i < t.length; )
      if (t[i].apply(this, arguments)) return !0;
    return !1;
  }
}
function cx(e) {
  return t;
  function t(n) {
    return Boolean(n && n.type === e);
  }
}
function fx() {
  return !0;
}
var dx = Ov,
  px = vx,
  hx = {}.hasOwnProperty;
function vx(e, t, n) {
  var r = dx(n || t),
    i = t.cascade == null ? !0 : t.cascade;
  return o(e, null, null);
  function o(l, a, u) {
    var s, d, p, v, g;
    if (!r(l, a, u)) return null;
    if (l.children) {
      for (s = [], d = -1; ++d < l.children.length; )
        (p = o(l.children[d], d, l)), p && s.push(p);
      if (i && l.children.length && !s.length) return null;
    }
    v = {};
    for (g in l) hx.call(l, g) && (v[g] = g === "children" ? s : l[g]);
    return v;
  }
}
var mx = gx;
function gx(e) {
  return e;
}
var yx = kl,
  wx = Ov,
  Sx = mx,
  Pv = !0,
  Iv = "skip",
  Eu = !1;
kl.CONTINUE = Pv;
kl.SKIP = Iv;
kl.EXIT = Eu;
function kl(e, t, n, r) {
  var i, o;
  typeof t == "function" &&
    typeof n != "function" &&
    ((r = n), (n = t), (t = null)),
    (o = wx(t)),
    (i = r ? -1 : 1),
    l(e, null, [])();
  function l(a, u, s) {
    var d = typeof a == "object" && a !== null ? a : {},
      p;
    return (
      typeof d.type == "string" &&
        ((p =
          typeof d.tagName == "string"
            ? d.tagName
            : typeof d.name == "string"
            ? d.name
            : void 0),
        (v.displayName =
          "node (" + Sx(d.type + (p ? "<" + p + ">" : "")) + ")")),
      v
    );
    function v() {
      var g = s.concat(a),
        C = [],
        k,
        T;
      if (
        (!t || o(a, u, s[s.length - 1] || null)) &&
        ((C = Cx(n(a, s))), C[0] === Eu)
      )
        return C;
      if (a.children && C[0] !== Iv)
        for (
          T = (r ? a.children.length : -1) + i;
          T > -1 && T < a.children.length;

        ) {
          if (((k = l(a.children[T], T, g)()), k[0] === Eu)) return k;
          T = typeof k[1] == "number" ? k[1] : T + i;
        }
      return C;
    }
  }
}
function Cx(e) {
  return e !== null && typeof e == "object" && "length" in e
    ? e
    : typeof e == "number"
    ? [Pv, e]
    : [e];
}
var kx = typeof WeakMap == "function" ? bi : Ri;
function bi() {
  this.map = new WeakMap();
}
bi.prototype.has = function (e) {
  return this.map.has(e);
};
bi.prototype.set = function (e, t) {
  return this.map.set(e, t), this;
};
bi.prototype.get = function (e) {
  return this.map.get(e);
};
bi.prototype.clear = function () {};
function Ri() {
  (this.keys = []), (this.values = []);
}
Ri.prototype.has = function (e) {
  return this.keys.indexOf(e) !== -1;
};
Ri.prototype.set = function (e, t) {
  var n = this.keys.indexOf(e);
  return (
    n === -1 ? (this.keys.push(e), this.values.push(t)) : (this.values[n] = t),
    this
  );
};
Ri.prototype.get = function (e) {
  var t = this.keys.indexOf(e);
  return t === -1 ? void 0 : this.values[t];
};
Ri.prototype.clear = function () {
  (this.keys = []), (this.values = []);
};
var Ex = px,
  Kf = yx,
  oa = kx;
function Nv(e) {
  var t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { lineNumber: 1 };
  return e.reduce(
    function (n, r) {
      var i = t.lineNumber;
      if (r.type === "text") {
        if (
          r.value.indexOf(`
`) === -1
        )
          return (r.lineStart = i), (r.lineEnd = i), n.nodes.push(r), n;
        for (
          var o = r.value.split(`
`),
            l = 0;
          l < o.length;
          l++
        ) {
          var a = l === 0 ? t.lineNumber : ++t.lineNumber;
          n.nodes.push({
            type: "text",
            value:
              l === o.length - 1
                ? o[l]
                : "".concat(
                    o[l],
                    `
`
                  ),
            lineStart: a,
            lineEnd: a,
          });
        }
        return (n.lineNumber = t.lineNumber), n;
      }
      if (r.children) {
        var u = Nv(r.children, t),
          s = u.nodes[0],
          d = u.nodes[u.nodes.length - 1];
        return (
          (r.lineStart = s ? s.lineStart : i),
          (r.lineEnd = d ? d.lineEnd : i),
          (r.children = u.nodes),
          (n.lineNumber = u.lineNumber),
          n.nodes.push(r),
          n
        );
      }
      return n.nodes.push(r), n;
    },
    { nodes: [], lineNumber: t.lineNumber }
  );
}
function xx(e, t) {
  var n = { type: "root", children: t },
    r = new oa(),
    i = new oa(),
    o = new oa(),
    l = [];
  function a(p, v, g) {
    l.push(v),
      g.forEach(function (c) {
        p.has(c) ||
          (p.set(c, Object.assign({}, c, { children: [] })),
          c !== n && l.push(c));
      });
    for (var C = g.length; C--; ) {
      var k = p.get(g[C]),
        T = g[C + 1],
        m = p.get(T) || v;
      k.children.indexOf(m) === -1 && k.children.push(m);
    }
  }
  Kf(n, function (p, v) {
    if (!p.children) {
      if (p.lineStart < e) {
        a(r, p, v);
        return;
      }
      if (p.lineStart === e) {
        a(i, p, v);
        return;
      }
      p.lineEnd > e &&
        l.some(function (g) {
          return v.indexOf(g) !== -1;
        }) &&
        a(o, p, v);
    }
  });
  var u = Ex(n, function (p) {
      return l.indexOf(p) === -1;
    }),
    s = function (v) {
      var g = v.get(n);
      return g
        ? (Kf(g, function (C, k) {
            if (C.children) {
              (C.lineStart = 0), (C.lineEnd = 0);
              return;
            }
            k.forEach(function (T) {
              (T.lineStart = Math.max(T.lineStart, C.lineStart)),
                (T.lineEnd = Math.max(T.lineEnd, C.lineEnd));
            });
          }),
          g.children)
        : [];
    },
    d = [].concat(s(r), s(i), s(o), u ? u.children : []);
  return r.clear(), i.clear(), o.clear(), d;
}
function _x(e, t, n) {
  var r = t.className || "refractor-marker";
  return {
    type: "element",
    tagName: t.component || "div",
    properties: t.component
      ? Object.assign({}, n, { className: r })
      : { className: r },
    children: e,
    lineStart: t.line,
    lineEnd: e[e.length - 1].lineEnd,
    isMarker: !0,
  };
}
function Ox(e, t, n) {
  if (t.length === 0 || e.length === 0) return e;
  for (
    var r = t.reduce(function (p, v) {
        return xx(v.line, p);
      }, e),
      i = [],
      o = 0,
      l = 0;
    l < t.length;
    l++
  ) {
    for (var a = t[l], u = r[o]; u && u.lineEnd < a.line; u = r[++o]) i.push(u);
    for (var s = [], d = r[o]; d && d.lineEnd === a.line; d = r[++o]) s.push(d);
    s.length > 0 && i.push(_x(s, a, n));
  }
  for (; o < r.length; ) i.push(r[o++]);
  return i;
}
function Tx(e, t) {
  var n = t.markers
      .map(function (i) {
        return i.line ? i : { line: i };
      })
      .sort(function (i, o) {
        return i.line - o.line;
      }),
    r = Nv(e).nodes;
  return Ox(r, n, t);
}
var Px = Tx,
  Ix = M,
  nt = yu,
  Xs = GE,
  Nx = xv,
  jx = Px,
  Xf = Ix.createElement;
function Fi(e) {
  var t = "language-".concat(e.language),
    n = { className: t },
    r = { className: [e.className, t].filter(Boolean).join(" ") };
  e.inline && ((n.style = { display: "inline" }), (n.className = e.className));
  var i = Xs.highlight(e.value, e.language);
  e.markers && e.markers.length > 0 && (i = jx(i, { markers: e.markers }));
  var o = i.length === 0 ? e.value : i.map(Nx.depth(0)),
    l = Xf("code", n, o);
  return e.inline ? l : Xf("pre", r, l);
}
Fi.propTypes = {
  className: nt.string,
  inline: nt.bool,
  language: nt.string.isRequired,
  value: nt.string.isRequired,
  markers: nt.arrayOf(
    nt.oneOfType([
      nt.number,
      nt.shape({
        line: nt.number.isRequired,
        className: nt.string,
        component: nt.oneOfType([nt.node, nt.func]),
      }),
    ])
  ),
};
Fi.defaultProps = { className: "refractor", inline: !1 };
Fi.registerLanguage = function (e) {
  return Xs.register(e);
};
Fi.hasLanguage = function (e) {
  return Xs.registered(e);
};
var jv = Fi;
jv.registerLanguage(Cv);
function $x({ code: e, language: t }) {
  return R(jv, { language: t, value: e });
}
function bx({ example: e }) {
  return R("div", {
    className: "w-full bg-[color:var(--color-100)] p-4",
    children: R("p", { children: e }),
  });
}
var Gf = [
    "angular-cli",
    "create-react-app",
    "html",
    "javascript",
    "node",
    "polymer",
    "typescript",
    "vue",
  ],
  Yf = {
    clickToLoad: function (e) {
      return Ur("ctl", e);
    },
    devToolsHeight: function (e) {
      return Zf("devtoolsheight", e);
    },
    forceEmbedLayout: function (e) {
      return Ur("embed", e);
    },
    hideDevTools: function (e) {
      return Ur("hidedevtools", e);
    },
    hideExplorer: function (e) {
      return Ur("hideExplorer", e);
    },
    hideNavigation: function (e) {
      return Ur("hideNavigation", e);
    },
    showSidebar: function (e) {
      return (function (t, n) {
        return typeof n == "boolean" ? "showSidebar=" + (n ? "1" : "0") : "";
      })(0, e);
    },
    openFile: function (e) {
      return (function (t, n) {
        return (Array.isArray(n) ? n : [n])
          .filter(function (r) {
            return typeof r == "string" && r.trim() !== "";
          })
          .map(function (r) {
            return "file=" + encodeURIComponent(r.trim());
          });
      })(0, e).join("&");
    },
    terminalHeight: function (e) {
      return Zf("terminalHeight", e);
    },
    theme: function (e) {
      return Jf("theme", ["light", "dark"], e);
    },
    view: function (e) {
      return Jf("view", ["preview", "editor"], e);
    },
  };
function $v(e) {
  e === void 0 && (e = {});
  var t = Object.entries(e)
    .map(function (n) {
      var r = n[0],
        i = n[1];
      return i != null && Yf.hasOwnProperty(r) ? Yf[r](i) : "";
    })
    .filter(Boolean);
  return t.length ? "?" + t.join("&") : "";
}
function Ur(e, t) {
  return t === !0 ? e + "=1" : "";
}
function Zf(e, t) {
  return typeof t == "number" && t >= 0 && t <= 100
    ? e + "=" + Math.round(t)
    : "";
}
function Jf(e, t, n) {
  return typeof n == "string" && t.includes(n) ? e + "=" + n : "";
}
function bv() {
  return (
    Math.random().toString(36).slice(2, 6) +
    Math.random().toString(36).slice(2, 6)
  );
}
function la(e, t) {
  return "" + Rv(t) + e + $v(t);
}
function aa(e, t) {
  var n = { forceEmbedLayout: !0 };
  return (
    t && typeof t == "object" && Object.assign(n, t), "" + Rv(n) + e + $v(n)
  );
}
function Rv(e) {
  return (
    e === void 0 && (e = {}),
    typeof e.origin == "string" ? e.origin : "https://stackblitz.com"
  );
}
function ua(e, t, n) {
  if (!t || !e || !e.parentNode) throw new Error("Invalid Element");
  e.id && (t.id = e.id),
    e.className && (t.className = e.className),
    (function (r, i) {
      i &&
        typeof i == "object" &&
        (Object.hasOwnProperty.call(i, "height") && (r.height = "" + i.height),
        Object.hasOwnProperty.call(i, "width") && (r.width = "" + i.width)),
        r.height || (r.height = "300"),
        r.width || r.setAttribute("style", "width:100%;");
    })(t, n),
    e.parentNode.replaceChild(t, e);
}
function sa(e) {
  if (typeof e == "string") {
    var t = document.getElementById(e);
    if (!t) throw new Error("Could not find element with id '" + e + "'");
    return t;
  }
  if (e instanceof HTMLElement) return e;
  throw new Error("Invalid element: " + e);
}
function ca(e) {
  return e && e.newWindow === !1 ? "_self" : "_blank";
}
function Yo() {
  return (
    (Yo =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Yo.apply(this, arguments)
  );
}
var Rx = (function () {
    function e(n) {
      (this.port = void 0),
        (this.pending = {}),
        (this.port = n),
        (this.port.onmessage = this.messageListener.bind(this));
    }
    var t = e.prototype;
    return (
      (t.request = function (n) {
        var r = this,
          i = n.type,
          o = n.payload,
          l = bv();
        return new Promise(function (a, u) {
          (r.pending[l] = { resolve: a, reject: u }),
            r.port.postMessage({ type: i, payload: Yo({}, o, { __reqid: l }) });
        });
      }),
      (t.messageListener = function (n) {
        var r;
        if (
          typeof ((r = n.data.payload) == null ? void 0 : r.__reqid) == "string"
        ) {
          var i = n.data,
            o = i.type,
            l = i.payload,
            a = l.__reqid,
            u = l.__error;
          this.pending[a] &&
            (l.__success
              ? this.pending[a].resolve(
                  (function (s) {
                    var d = Yo({}, s);
                    return (
                      delete d.__reqid,
                      delete d.__success,
                      delete d.__error,
                      Object.keys(d).length ? d : null
                    );
                  })(l)
                )
              : this.pending[a].reject(u ? o + ": " + u : o),
            delete this.pending[a]);
        }
      }),
      e
    );
  })(),
  Fx = (function () {
    function e(n, r) {
      var i = this;
      (this._rdc = void 0),
        (this.editor = {
          openFile: function (o) {
            return i._rdc.request({
              type: "SDK_OPEN_FILE",
              payload: { path: o },
            });
          },
          setCurrentFile: function (o) {
            return i._rdc.request({
              type: "SDK_SET_CURRENT_FILE",
              payload: { path: o },
            });
          },
          setTheme: function (o) {
            return i._rdc.request({
              type: "SDK_SET_UI_THEME",
              payload: { theme: o },
            });
          },
          setView: function (o) {
            return i._rdc.request({
              type: "SDK_SET_UI_VIEW",
              payload: { view: o },
            });
          },
          showSidebar: function (o) {
            return (
              o === void 0 && (o = !0),
              i._rdc.request({
                type: "SDK_TOGGLE_SIDEBAR",
                payload: { visible: o },
              })
            );
          },
        }),
        (this.preview = {
          origin: "",
          getUrl: function () {
            return i._rdc
              .request({ type: "SDK_GET_PREVIEW_URL", payload: {} })
              .then(function (o) {
                var l;
                return (l = o == null ? void 0 : o.url) != null ? l : null;
              });
          },
          setUrl: function (o) {
            if (
              (o === void 0 && (o = "/"),
              typeof o != "string" || !o.startsWith("/"))
            )
              throw new Error(
                "Invalid argument: expected a path starting with '/', got '" +
                  o +
                  "'"
              );
            return i._rdc.request({
              type: "SDK_SET_PREVIEW_URL",
              payload: { path: o },
            });
          },
        }),
        (this._rdc = new Rx(n)),
        Object.defineProperty(this.preview, "origin", {
          value: typeof r.previewOrigin == "string" ? r.previewOrigin : null,
          writable: !1,
        });
    }
    var t = e.prototype;
    return (
      (t.applyFsDiff = function (n) {
        var r = function (i) {
          return i !== null && typeof i == "object";
        };
        if (!r(n) || !r(n.create))
          throw new Error(
            "Invalid diff object: expected diff.create to be an object."
          );
        if (!Array.isArray(n.destroy))
          throw new Error(
            "Invalid diff object: expected diff.create to be an array."
          );
        return this._rdc.request({ type: "SDK_APPLY_FS_DIFF", payload: n });
      }),
      (t.getDependencies = function () {
        return this._rdc.request({
          type: "SDK_GET_DEPS_SNAPSHOT",
          payload: {},
        });
      }),
      (t.getFsSnapshot = function () {
        return this._rdc.request({ type: "SDK_GET_FS_SNAPSHOT", payload: {} });
      }),
      e
    );
  })(),
  Co = [],
  Ax = function (e) {
    var t = this;
    (this.element = void 0),
      (this.id = void 0),
      (this.pending = void 0),
      (this.vm = void 0),
      (this.id = bv()),
      (this.element = e),
      (this.pending = new Promise(function (n, r) {
        var i = function (s) {
            var d = s.data;
            (d == null ? void 0 : d.action) === "SDK_INIT_SUCCESS" &&
              d.id === t.id &&
              ((t.vm = new Fx(s.ports[0], d.payload)), n(t.vm), l());
          },
          o = function () {
            var s;
            (s = t.element.contentWindow) == null ||
              s.postMessage({ action: "SDK_INIT", id: t.id }, "*");
          };
        function l() {
          window.clearInterval(u), window.removeEventListener("message", i);
        }
        window.addEventListener("message", i), o();
        var a = 0,
          u = window.setInterval(function () {
            if (t.vm) l();
            else {
              if (a >= 20)
                return (
                  l(),
                  r(
                    "Timeout: Unable to establish a connection with the StackBlitz VM"
                  ),
                  void Co.forEach(function (s, d) {
                    s.id === t.id && Co.splice(d, 1);
                  })
                );
              a++, o();
            }
          }, 500);
      })),
      Co.push(this);
  };
function qn(e, t) {
  var n = document.createElement("input");
  return (n.type = "hidden"), (n.name = e), (n.value = t), n;
}
function ed(e) {
  if (!Gf.includes(e.template)) {
    var t = Gf.map(function (i) {
      return "'" + i + "'";
    }).join(", ");
    console.warn("Unsupported project.template: must be one of " + t);
  }
  var n = e.template === "node",
    r = document.createElement("form");
  return (
    (r.method = "POST"),
    r.setAttribute("style", "display:none!important;"),
    r.appendChild(qn("project[title]", e.title)),
    r.appendChild(qn("project[description]", e.description)),
    r.appendChild(qn("project[template]", e.template)),
    e.dependencies &&
      (n
        ? console.warn(
            "Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."
          )
        : r.appendChild(
            qn("project[dependencies]", JSON.stringify(e.dependencies))
          )),
    e.settings &&
      r.appendChild(qn("project[settings]", JSON.stringify(e.settings))),
    Object.keys(e.files).forEach(function (i) {
      typeof e.files[i] == "string" &&
        r.appendChild(qn("project[files][" + i + "]", e.files[i]));
    }),
    r
  );
}
function lo(e) {
  var t, n, r, i;
  return e != null && e.contentWindow
    ? ((i = (n = e) instanceof Element ? "element" : "id"),
      (t =
        (r = Co.find(function (o) {
          return o[i] === n;
        })) != null
          ? r
          : null) != null
        ? t
        : new Ax(e)).pending
    : Promise.reject("Provided element is not an iframe.");
}
var Lx = {
  connect: lo,
  embedGithubProject: function (e, t, n) {
    var r = sa(e),
      i = document.createElement("iframe");
    return (i.src = aa("/github/" + t, n)), ua(r, i, n), lo(i);
  },
  embedProject: function (e, t, n) {
    var r,
      i = sa(e),
      o = (function (a, u) {
        var s = ed(a);
        return (
          (s.action = aa("/run", u)),
          (s.id = "sb"),
          "<html><head><title></title></head><body>" +
            s.outerHTML +
            "<script>document.getElementById('" +
            s.id +
            "').submit();</script></body></html>"
        );
      })(t, n),
      l = document.createElement("iframe");
    return ua(i, l, n), (r = l.contentDocument) == null || r.write(o), lo(l);
  },
  embedProjectId: function (e, t, n) {
    var r = sa(e),
      i = document.createElement("iframe");
    return (i.src = aa("/edit/" + t, n)), ua(r, i, n), lo(i);
  },
  openGithubProject: function (e, t) {
    var n = la("/github/" + e, t),
      r = ca(t);
    window.open(n, r);
  },
  openProject: function (e, t) {
    (function (n, r) {
      var i = ed(n);
      (i.action = la("/run", r)),
        (i.target = ca(r)),
        document.body.appendChild(i),
        i.submit(),
        document.body.removeChild(i);
    })(e, t);
  },
  openProjectId: function (e, t) {
    var n = la("/edit/" + e, t),
      r = ca(t);
    window.open(n, r);
  },
};
const Dx = (e, t) => ({
  title: e,
  description: "Example",
  template: "javascript",
  files: { "index.html": '<div id="app"></div>', "index.js": `${t}` },
  settings: { compile: { trigger: "auto", clearConsole: !1 } },
});
async function Mx(e, t, n) {
  Lx.embedProject(`embed-${n}`, Dx(e, t), {
    clickToLoad: !0,
    hideDevTools: !1,
    hideExplorer: !0,
    showSidebar: !1,
    height: 300,
    openFile: "index.js",
    view: "default",
    devToolsHeight: 100,
  });
}
const zx = (e, t, n) => {
  const [r, i] = M.useState(!0),
    [o, l] = M.useState(null);
  return (
    M.useEffect(() => {
      (async (u, s) => {
        try {
          i(!0);
          const d = await Mx(e, u, s);
          i(!1);
        } catch (d) {
          l(d), i(!1);
        }
      })(t, n);
    }, []),
    { loading: r, error: o }
  );
};
function Fv() {
  return R("div", {
    className: "flex w-full justify-center pt-4",
    children: Le("div", {
      role: "status",
      children: [
        Le("svg", {
          "aria-hidden": "true",
          className:
            "mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            R("path", {
              d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
              fill: "currentColor",
            }),
            R("path", {
              d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
              fill: "currentFill",
            }),
          ],
        }),
        R("span", { className: "sr-only", children: "Loading..." }),
      ],
    }),
  });
}
function Ux({ title: e, example: t, id: n }) {
  const [r, i] = M.useState(!1),
    [o, l] = M.useState(!1);
  if (t) {
    const { loading: a, error: u } = zx(e, t, n);
    M.useEffect(() => {
      i(a), u && l(u);
    }, [a, u]);
  }
  return R(Pu, {
    children: t
      ? o
        ? R("span", { children: "Snippet is not available" })
        : r
        ? R(Fv, {})
        : R("div", { id: `embed-${n}`, className: "pt-4" })
      : "",
  });
}
function Hx({ props: e }) {
  const { _id: t, title: n, explanation: r, example: i } = e,
    l = {
      types: {
        code: ({ value: a }) => a && R($x, { language: "js", code: a.code }),
      },
    };
  return Le(bs.Panel, {
    className: "px-4 pt-4 pb-2 text-sm text-gray-500",
    children: [
      r &&
        R("div", {
          className: "prose max-w-none pb-2",
          children: R(Fw, {
            style: { "p > code": { color: "red" } },
            value: r,
            components: l,
          }),
        }),
      i ? R(bx, { example: i }) : "",
      R(Ux, { example: i, id: t, title: n }),
    ],
  });
}
function Bx({ props: e }) {
  const { title: t, tags: n } = e;
  return R(bs, {
    as: "div",
    className: "snap-start",
    children: ({ open: r }) =>
      Le("div", {
        className: r ? "border border-[color:var(--color-active)]" : "",
        children: [
          R(aw, { title: t, tags: n, isOpen: r }),
          R(Hx, { props: { ...e } }),
        ],
      }),
  });
}
function qx({ globalTags: e }) {
  const t = j1();
  return R(Pu, {
    children: Le("select", {
      className: "h-min w-min rounded-sm text-xs text-lime-700 outline-0",
      name: "tags",
      id: "tags",
      onChange: n => t(n.target.value),
      children: [
        R("option", { value: "", children: "all" }),
        e.map((n, r) => R("option", { value: n, children: n }, `${n}-${r}`)),
      ],
    }),
  });
}
function Vx({ globalTags: e }) {
  return Le("div", {
    className:
      "flex w-full justify-between rounded-t-md bg-[color:var(--color-900)] px-4 py-3  text-base font-medium text-[color:var(--color-50)] ",
    children: [
      R("span", { className: "", children: "Concept" }),
      R("span", { className: "mr-8", children: R(qx, { globalTags: e }) }),
    ],
  });
}
function Wx() {
  const [e, t] = M.useState(!0);
  return (
    e &&
    Le("div", {
      className:
        "relative rounded border border-red-400 bg-red-100 px-10 py-4 text-red-700",
      role: "alert",
      children: [
        Le("div", {
          className: "flex h-full flex-col items-center justify-evenly",
          children: [
            R("p", {
              children: R("strong", {
                className: "font-bold",
                children: "An unexpected error happened",
              }),
            }),
            R("p", {
              className: "block sm:inline",
              children: "Try again later",
            }),
          ],
        }),
        R("button", {
          onClick: () => {
            t(!1);
          },
          children: R("span", {
            className: "absolute top-0 right-0",
            children: Le("svg", {
              className: "h-6 w-6 fill-current text-red-500",
              role: "button",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              children: [
                R("title", { children: "Close" }),
                R("path", {
                  d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z",
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
const Qx = ({ searchValue: e }) => {
  const { concepts: t, globalTags: n, loading: r, error: i } = P1(),
    o = N1(),
    l = 600,
    { searchResults: a } = b1(t, e, n, o, l);
  return r
    ? R("div", {
        className: "flex h-full items-center justify-center",
        children: R(Fv, {}),
      })
    : i
    ? R(Wx, {})
    : Le("div", {
        className:
          "flex h-min w-full max-w-4xl flex-col overflow-hidden rounded-md bg-white",
        children: [
          R(Vx, { globalTags: n }),
          R("div", {
            className:
              "w-full snap-y divide-y divide-[color:var(--color-300)] overflow-y-auto overscroll-none scroll-smooth rounded-b-md",
            children: a
              .sort((u, s) =>
                u.title > s.title ? 1 : s.title > u.title ? -1 : 0
              )
              .map(
                ({ _id: u, title: s, explanation: d, example: p, tags: v }) =>
                  R(
                    Bx,
                    {
                      props: {
                        _id: u,
                        title: s,
                        explanation: d,
                        example: p,
                        tags: v,
                      },
                    },
                    u
                  )
              ),
          }),
        ],
      });
};
function Kx() {
  return Le("div", {
    className: "w-full py-1 text-center text-xs text-stone-200",
    children: [
      "by ",
      R("a", { href: "https://roylopez.dev/", children: "Roy Lopez" }),
      " - All rights reserved",
    ],
  });
}
function Xx() {
  const [e, t] = M.useState("");
  return Le("div", {
    className:
      "flex h-screen w-full flex-col items-center justify-between bg-[color:#242424] pt-4",
    children: [
      Le("div", {
        className:
          "container flex h-full w-full min-w-min max-w-4xl flex-col items-center overflow-hidden px-2",
        children: [
          R(py, {}),
          R(hy, { setSearchValue: t, searchValue: e }),
          R(Qx, { searchValue: e }),
        ],
      }),
      R(Kx, {}),
    ],
  });
}
fa.createRoot(document.getElementById("root")).render(
  R(Vt.StrictMode, {
    children: R(I1, { children: R($1, { children: R(Xx, {}) }) }),
  })
);
